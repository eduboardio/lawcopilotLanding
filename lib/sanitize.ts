import validator from 'validator';

// Strip HTML tags (no DOM dependency; avoids jsdom → html-encoding-sniffer → @exodus/bytes ESM require in Node)
function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, '');
}

// Allowed characters per field. Letters and marks in any script (Telugu, Hindi,
// Tamil…), initials ("K. Ramesh"), and the punctuation firm names and job titles
// use ("Reddy & Rao", "General Counsel (India)"), including curly apostrophes.
const ALLOWED_NAME_CHARS = /^[\p{L}\p{M}\s.'’-]+$/u;
const DISALLOWED_NAME_CHARS = /[^\p{L}\p{M}\s.'’-]/gu;
const ALLOWED_COMPANY_CHARS = /^[\p{L}\p{M}\p{N}\s.,'’&()/+-]+$/u;
const DISALLOWED_COMPANY_CHARS = /[^\p{L}\p{M}\p{N}\s.,'’&()/+-]/gu;
// Messages may contain any printable text (₹, dashes, curly quotes, any script);
// only control characters other than tabs and line breaks are refused.
const CONTROL_CHARS = /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/;
const CONTROL_CHARS_ALL = /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g;

// Prompt injection patterns to detect
const PROMPT_INJECTION_PATTERNS = [
  /ignore\s+(previous|all|above)\s+(instructions|prompts?|commands?)/i,
  /disregard\s+(previous|all|above)\s+(instructions|prompts?|commands?)/i,
  /forget\s+(previous|all|above)\s+(instructions|prompts?|commands?)/i,
  /system\s*:\s*/i,
  /assistant\s*:\s*/i,
  /user\s*:\s*/i,
  /<\|im_start\|>/i,
  /<\|im_end\|>/i,
  /\[INST\]/i,
  /\[\/INST\]/i,
  /__start__/i,
  /__end__/i,
  /{{.*?}}/,
  /{%.*?%}/,
  /<script[^>]*>[\s\S]*?<\/script>/i,
  /javascript:/i,
  /on\w+\s*=/i,
  /<iframe/i,
  /<object/i,
  /<embed/i,
];

// SQL injection patterns
const SQL_INJECTION_PATTERNS = [
  /(\b(SELECT|INSERT|UPDATE|DELETE|DROP|CREATE|ALTER|EXEC|EXECUTE|UNION|DECLARE)\b)/i,
  /(--|;|\/\*|\*\/|@@|@)/,
  /(\bOR\b|\bAND\b).*?[=<>]/i,
  /['"]?\s*OR\s*['"]?\d+['"]?\s*=\s*['"]?\d+/i,
];

// Command injection patterns
const COMMAND_INJECTION_PATTERNS = [
  /[;&|`$(){}[\]<>]/,
  /\.\.\//,
  /~\//,
];

interface SanitizationResult {
  sanitized: string;
  isValid: boolean;
  errors: string[];
}

export function sanitizeName(input: string): SanitizationResult {
  const errors: string[] = [];
  
  if (!input || typeof input !== 'string') {
    return { sanitized: '', isValid: false, errors: ['Invalid input'] };
  }
  
  // Trim and normalize whitespace
  let sanitized = input.trim().replace(/\s+/g, ' ');
  
  // Check length
  if (sanitized.length < 1 || sanitized.length > 100) {
    errors.push('Name must be between 1 and 100 characters');
  }
  
  // Check for allowed characters
  if (!ALLOWED_NAME_CHARS.test(sanitized)) {
    errors.push('Name contains invalid characters');
    sanitized = sanitized.replace(DISALLOWED_NAME_CHARS, '');
  }
  
  // Contact details only go to a Google Sheet through its API, so SQL and shell
  // patterns can't do harm there and only turned away real names. Prompt-style
  // and script patterns are still refused.
  if (detectPromptInjection(sanitized)) {
    errors.push('Suspicious input detected');
    return { sanitized: '', isValid: false, errors };
  }
  
  sanitized = stripHtml(sanitized);
  
  return {
    sanitized,
    isValid: errors.length === 0,
    errors,
  };
}

export function sanitizeEmail(input: string): SanitizationResult {
    const errors: string[] = [];
    
    if (!input || typeof input !== 'string') {
      return { sanitized: '', isValid: false, errors: ['Invalid input'] };
    }
    
    const sanitized = input.trim().toLowerCase();
    
    // Validate email format
    if (!validator.isEmail(sanitized)) {
      errors.push('Invalid email format');
    }
    
    // Check length
    if (sanitized.length > 254) {
      errors.push('Email exceeds maximum length');
    }
    
    // For emails, we DON'T check injection patterns since:
    // 1. Email format is already strictly validated by validator.isEmail()
    // 2. Emails contain @ symbol which triggers false positives in SQL injection patterns
    // 3. Valid email characters are very limited and safe
    
    return {
      sanitized: validator.normalizeEmail(sanitized) || sanitized,
      isValid: errors.length === 0,
      errors,
    };
  }

export function sanitizeCompanyName(input: string): SanitizationResult {
  const errors: string[] = [];
  
  if (!input || typeof input !== 'string') {
    return { sanitized: '', isValid: false, errors: ['Invalid input'] };
  }
  
  let sanitized = input.trim().replace(/\s+/g, ' ');
  
  // Check length
  if (sanitized.length < 1 || sanitized.length > 200) {
    errors.push('Company name must be between 1 and 200 characters');
  }
  
  // Check for allowed characters
  if (!ALLOWED_COMPANY_CHARS.test(sanitized)) {
    errors.push('Company name contains invalid characters');
    sanitized = sanitized.replace(DISALLOWED_COMPANY_CHARS, '');
  }
  
  // See sanitizeName: "&" and brackets are normal in firm names.
  if (detectPromptInjection(sanitized)) {
    errors.push('Suspicious input detected');
    return { sanitized: '', isValid: false, errors };
  }
  
  sanitized = stripHtml(sanitized);
  
  return {
    sanitized,
    isValid: errors.length === 0,
    errors,
  };
}

export function sanitizeMessage(input: string): SanitizationResult {
  const errors: string[] = [];
  
  if (!input || typeof input !== 'string') {
    return { sanitized: '', isValid: false, errors: ['Invalid input'] };
  }
  
  let sanitized = input.trim();
  
  // Check length
  if (sanitized.length < 10 || sanitized.length > 5000) {
    errors.push('Message must be between 10 and 5000 characters');
  }
  
  // Check for excessively long words (potential injection)
  const words = sanitized.split(/\s+/);
  const hasLongWord = words.some(word => word.length > 100);
  if (hasLongWord) {
    errors.push('Message contains suspiciously long words');
  }
  
  // Refuse control characters only
  if (CONTROL_CHARS.test(sanitized)) {
    errors.push('Message contains invalid characters');
    sanitized = sanitized.replace(CONTROL_CHARS_ALL, '');
  }
  
  // Check for prompt injection
  if (detectPromptInjection(sanitized)) {
    errors.push('Suspicious content detected in message');
    return { sanitized: '', isValid: false, errors };
  }
  
  sanitized = stripHtml(sanitized);
  
  return {
    sanitized,
    isValid: errors.length === 0,
    errors,
  };
}

export function sanitizeGenericField(
  input: string,
  maxLength: number = 100
): SanitizationResult {
  const errors: string[] = [];
  
  if (!input || typeof input !== 'string') {
    return { sanitized: '', isValid: false, errors: ['Invalid input'] };
  }
  
  let sanitized = input.trim().replace(/\s+/g, ' ');
  
  if (sanitized.length > maxLength) {
    errors.push(`Input exceeds maximum length of ${maxLength}`);
    sanitized = sanitized.substring(0, maxLength);
  }
  
  // See sanitizeName: job titles use "&", brackets and semicolons.
  if (detectPromptInjection(sanitized)) {
    errors.push('Suspicious input detected');
    return { sanitized: '', isValid: false, errors };
  }
  
  sanitized = stripHtml(sanitized);
  
  return {
    sanitized,
    isValid: errors.length === 0,
    errors,
  };
}

function detectPromptInjection(input: string): boolean {
  return PROMPT_INJECTION_PATTERNS.some(pattern => pattern.test(input));
}

function detectSQLInjection(input: string): boolean {
  return SQL_INJECTION_PATTERNS.some(pattern => pattern.test(input));
}

function detectCommandInjection(input: string): boolean {
  return COMMAND_INJECTION_PATTERNS.some(pattern => pattern.test(input));
}

export function detectInjectionAttempt(input: string): boolean {
  return (
    detectPromptInjection(input) ||
    detectSQLInjection(input) ||
    detectCommandInjection(input)
  );
}

// Utility to validate Content-Type (strict matching)
export function validateContentType(contentType: string | null): boolean {
    const allowedTypes = [
      'application/json',
      'application/json; charset=utf-8',
      'application/json;charset=utf-8',
    ];
    
    if (!contentType) return false;
    
    // Normalize: lowercase and trim
    const normalizedType = contentType.toLowerCase().trim();
    
    // Check exact match or starts with for charset variations
    return allowedTypes.some(type => 
      normalizedType === type.toLowerCase() || 
      normalizedType.startsWith('application/json')
    );
}