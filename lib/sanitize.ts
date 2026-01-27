import DOMPurify from 'isomorphic-dompurify';
import validator from 'validator';

// Whitelist of allowed characters for different field types
const ALLOWED_NAME_CHARS = /^[a-zA-Z\s'-]+$/;
const ALLOWED_COMPANY_CHARS = /^[a-zA-Z0-9\s.,'&()-]+$/;
const ALLOWED_MESSAGE_CHARS = /^[a-zA-Z0-9\s.,!?'"\-()@#$%&*+=\[\]{}<>:;/\\|_~`\n\r]+$/;

// Prompt injection patterns to detect
const PROMPT_INJECTION_PATTERNS = [
  /ignore\s+(previous|all|above)\s+(instructions|prompts?|commands?)/gi,
  /disregard\s+(previous|all|above)\s+(instructions|prompts?|commands?)/gi,
  /forget\s+(previous|all|above)\s+(instructions|prompts?|commands?)/gi,
  /system\s*:\s*/gi,
  /assistant\s*:\s*/gi,
  /user\s*:\s*/gi,
  /<\|im_start\|>/gi,
  /<\|im_end\|>/gi,
  /\[INST\]/gi,
  /\[\/INST\]/gi,
  /__start__/gi,
  /__end__/gi,
  /{{.*?}}/g,
  /{%.*?%}/g,
  /<script[^>]*>[\s\S]*?<\/script>/gi,
  /javascript:/gi,
  /on\w+\s*=/gi,
  /<iframe/gi,
  /<object/gi,
  /<embed/gi,
];

// SQL injection patterns
const SQL_INJECTION_PATTERNS = [
  /(\b(SELECT|INSERT|UPDATE|DELETE|DROP|CREATE|ALTER|EXEC|EXECUTE|UNION|DECLARE)\b)/gi,
  /(--|;|\/\*|\*\/|@@|@)/g,
  /(\bOR\b|\bAND\b).*?[=<>]/gi,
  /['"]?\s*OR\s*['"]?\d+['"]?\s*=\s*['"]?\d+/gi,
];

// Command injection patterns
const COMMAND_INJECTION_PATTERNS = [
  /[;&|`$(){}[\]<>]/g,
  /\.\.\//g,
  /~\//g,
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
    sanitized = sanitized.replace(/[^a-zA-Z\s'-]/g, '');
  }
  
  // Check for injection attempts
  if (detectInjectionAttempt(sanitized)) {
    errors.push('Suspicious input detected');
    return { sanitized: '', isValid: false, errors };
  }
  
  // Additional HTML sanitization
  sanitized = DOMPurify.sanitize(sanitized, {
    ALLOWED_TAGS: [],
    ALLOWED_ATTR: [],
  });
  
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
    sanitized = sanitized.replace(/[^a-zA-Z0-9\s.,'&()-]/g, '');
  }
  
  // Check for injection attempts
  if (detectInjectionAttempt(sanitized)) {
    errors.push('Suspicious input detected');
    return { sanitized: '', isValid: false, errors };
  }
  
  sanitized = DOMPurify.sanitize(sanitized, {
    ALLOWED_TAGS: [],
    ALLOWED_ATTR: [],
  });
  
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
  
  // Check for allowed characters
  if (!ALLOWED_MESSAGE_CHARS.test(sanitized)) {
    errors.push('Message contains invalid characters');
    sanitized = sanitized.replace(/[^a-zA-Z0-9\s.,!?'"\-()@#$%&*+=\[\]{}<>:;/\\|_~`\n\r]/g, '');
  }
  
  // Check for prompt injection
  if (detectPromptInjection(sanitized)) {
    errors.push('Suspicious content detected in message');
    return { sanitized: '', isValid: false, errors };
  }
  
  // Additional HTML sanitization
  sanitized = DOMPurify.sanitize(sanitized, {
    ALLOWED_TAGS: [],
    ALLOWED_ATTR: [],
  });
  
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
  
  if (detectInjectionAttempt(sanitized)) {
    errors.push('Suspicious input detected');
    return { sanitized: '', isValid: false, errors };
  }
  
  sanitized = DOMPurify.sanitize(sanitized, {
    ALLOWED_TAGS: [],
    ALLOWED_ATTR: [],
  });
  
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