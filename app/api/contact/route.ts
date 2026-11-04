import { NextRequest, NextResponse } from 'next/server';
import {
  sanitizeName,
  sanitizeEmail,
  sanitizeCompanyName,
  sanitizeMessage,
  sanitizeGenericField,
  validateContentType,
} from '@/lib/sanitize';
import { validateCSRFToken } from '@/lib/csrf';
import { googleSheetsClient } from '@/lib/googleSheets';
import { logger } from '@/lib/logger';
import { verifyRequestSignature } from '@/lib/requestSigning';

// Request timeout (30 seconds)
const REQUEST_TIMEOUT = 30000;

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  companyName: string;
  country: string;
  jobTitle: string;
  orgType: string;
  teamSize: string;
  hearAbout?: string;
  message: string;
  honeypot?: string;
  csrfToken?: string;
  timestamp?: number;
  signature?: string;
}

interface ValidationResult {
  isValid: boolean;
  sanitized?: Partial<ContactFormData>;
  errors: string[];
  /** Fields that failed, so the form can mark them. */
  fields: string[];
}

type Sanitizer = (input: string) => { sanitized: string; isValid: boolean };

// Required fields and how each is checked, in the order the form shows them.
const REQUIRED_FIELDS: [keyof ContactFormData, Sanitizer][] = [
  ['firstName', sanitizeName],
  ['lastName', sanitizeName],
  ['email', sanitizeEmail],
  ['companyName', sanitizeCompanyName],
  ['jobTitle', (v) => sanitizeGenericField(v, 100)],
  ['country', (v) => sanitizeGenericField(v, 100)],
  ['orgType', (v) => sanitizeGenericField(v, 100)],
  ['message', sanitizeMessage],
];

const OPTIONAL_FIELDS: [keyof ContactFormData, Sanitizer][] = [
  ['teamSize', (v) => sanitizeGenericField(v, 50)],
  ['hearAbout', (v) => sanitizeGenericField(v, 200)],
];

function validateAndSanitizeBody(body: unknown): ValidationResult {
  const errors: string[] = [];
  const fields: string[] = [];

  if (!body || typeof body !== 'object') {
    return { isValid: false, errors: ['Invalid request'], fields };
  }

  const data = new Map(Object.entries(body as Record<string, unknown>));
  const sanitized: Partial<ContactFormData> = {};

  // Check honeypot field (should be empty)
  const honeypot = data.get('honeypot');
  if (typeof honeypot === 'string' && honeypot.trim() !== '') {
    logger.logSecurityEvent('Honeypot field filled', { honeypot });
    return { isValid: false, errors: ['Invalid request'], fields };
  }

  for (const [field, sanitize] of REQUIRED_FIELDS) {
    const value = data.get(field);
    const result = typeof value === 'string' ? sanitize(value) : null;
    if (!result || !result.isValid) {
      errors.push(`Invalid ${field}`);
      fields.push(field);
    } else {
      Object.assign(sanitized, { [field]: result.sanitized });
    }
  }

  for (const [field, sanitize] of OPTIONAL_FIELDS) {
    const value = data.get(field);
    if (typeof value === 'string' && value) {
      const result = sanitize(value);
      if (result.isValid) Object.assign(sanitized, { [field]: result.sanitized });
    }
  }

  // Store CSRF token and signature for validation
  const csrfToken = data.get('csrfToken');
  if (typeof csrfToken === 'string') sanitized.csrfToken = csrfToken;
  const timestamp = data.get('timestamp');
  if (typeof timestamp === 'number') sanitized.timestamp = timestamp;
  const signature = data.get('signature');
  if (typeof signature === 'string') sanitized.signature = signature;

  return {
    isValid: errors.length === 0,
    sanitized: errors.length === 0 ? sanitized : undefined,
    errors,
    fields,
  };
}

/**
 * Rows are written as if typed into the Sheet, so a value starting with "=",
 * "+", "-" or "@" would run as a formula when someone opens it. A leading
 * apostrophe keeps it as plain text and isn't shown in the cell.
 */
function asText(value: string): string {
  return /^[=+\-@\t\r]/.test(value) ? `'${value}` : value;
}

export async function POST(request: NextRequest) {
  const requestId = request.headers.get('x-request-id') || crypto.randomUUID();
  const startTime = Date.now();

  // Create AbortController for proper timeout handling
  const abortController = new AbortController();

  const timeoutId = setTimeout(() => {
    abortController.abort();
  }, REQUEST_TIMEOUT);

  try {
    const result = await processRequest(request, requestId, abortController.signal);
    clearTimeout(timeoutId);
    return result;
  } catch (error) {
    clearTimeout(timeoutId);
    const duration = Date.now() - startTime;

    if (error instanceof Error) {
      if (error.name === 'AbortError') {
        logger.error('Request timeout', error, {
          requestId,
          duration,
          path: '/api/contact',
        });
        return NextResponse.json(
          { error: 'Request timeout. Please try again.' },
          { status: 408 }
        );
      }
    }

    logger.error('Unexpected error processing request', error as Error, {
      requestId,
      duration,
    });

    return NextResponse.json(
      { error: 'An error occurred. Please try again.' },
      { status: 500 }
    );
  }
}

async function processRequest(
  request: NextRequest,
  requestId: string,
  signal: AbortSignal
): Promise<NextResponse> {
  try {
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() 
      || request.headers.get('x-real-ip') 
      || request.headers.get('cf-connecting-ip')
      || 'unknown';

    // Check if request was aborted
    if (signal.aborted) {
      throw new Error('AbortError');
    }

    // Validate Content-Type (strict)
    const contentType = request.headers.get('content-type');
    if (!validateContentType(contentType)) {
      logger.logSecurityEvent('Invalid Content-Type', {
        requestId,
        ip,
        contentType: contentType || 'none',
      });
      return NextResponse.json(
        { error: 'Invalid request format' },
        { status: 400 }
      );
    }

    // Check request body size
    const contentLength = request.headers.get('content-length');
    if (contentLength && parseInt(contentLength) > 100000) {
      logger.logSecurityEvent('Request body too large', {
        requestId,
        ip,
        contentLength: parseInt(contentLength),
      });
      return NextResponse.json(
        { error: 'Request too large' },
        { status: 413 }
      );
    }

    // Parse request body
    let body: unknown;
    try {
      body = await request.json();
    } catch {
      logger.warn('Invalid JSON in request body', {
        requestId,
        ip,
      });
      return NextResponse.json(
        { error: 'Invalid request format' },
        { status: 400 }
      );
    }

    // Validate and sanitize input
    const validation = validateAndSanitizeBody(body);
    if (!validation.isValid || !validation.sanitized) {
      logger.warn('Validation failed', {
        requestId,
        ip,
        errorCount: validation.errors.length,
        fields: validation.fields.join(','),
      });
      return NextResponse.json(
        { error: 'Some details need another look.', fields: validation.fields },
        { status: 400 }
      );
    }

    const sanitizedBody = validation.sanitized as Required<ContactFormData>;

    // Verify request signature
    // Verify request signature (only if REQUEST_SIGNING_SECRET is set)
    if (process.env.REQUEST_SIGNING_SECRET && sanitizedBody.signature && sanitizedBody.timestamp) {
      const signatureValid = verifyRequestSignature(
        sanitizedBody,
        sanitizedBody.signature,
        sanitizedBody.timestamp
      );

      if (!signatureValid) {
        logger.logSecurityEvent('Invalid request signature', {
          requestId,
          ip,
        });
        return NextResponse.json(
          { error: 'Invalid request. Please refresh and try again.' },
          { status: 403 }
        );
      }
    } else if (process.env.NODE_ENV === 'development') {
      logger.info('Skipping request signature verification in development');
    }

    // Validate CSRF token
    const csrfValid = await validateCSRFToken(sanitizedBody.csrfToken);
    if (!csrfValid) {
      logger.logSecurityEvent('Invalid CSRF token', {
        requestId,
        ip,
      });
      return NextResponse.json(
        { error: 'Session expired. Please refresh the page and try again.' },
        { status: 403 }
      );
    }

    // Check Google Sheets quota before proceeding (lazy client for build-time safety)
    const quotaOk = await googleSheetsClient.checkQuota();
    if (!quotaOk) {
      logger.error('Google Sheets quota exceeded', undefined, {
        requestId,
        ip,
      });
      return NextResponse.json(
        { error: 'Service temporarily unavailable. Please try again later.' },
        { status: 503 }
      );
    }

    // Add row to Google Sheets
    const success = await googleSheetsClient.addRow({
      'Timestamp': new Date().toLocaleString('en-US', {
        timeZone: 'UTC',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      }),
      'First Name': asText(sanitizedBody.firstName),
      'Last Name': asText(sanitizedBody.lastName),
      'Email': asText(sanitizedBody.email),
      'Company Name': asText(sanitizedBody.companyName),
      'Country': asText(sanitizedBody.country),
      'Job Title': asText(sanitizedBody.jobTitle),
      'Organization Type': asText(sanitizedBody.orgType),
      'Legal Team Size': asText(sanitizedBody.teamSize || ''),
      'How did you hear about us': asText(sanitizedBody.hearAbout || ''),
      'Message': asText(sanitizedBody.message),
    }, signal);

    if (!success) {
      return NextResponse.json(
        { error: 'Failed to submit. Please try again later.' },
        { status: 500 }
      );
    }

    logger.logRequest({
      requestId,
      ip,
      path: '/api/contact',
      method: 'POST',
      statusCode: 200,
    });

    return NextResponse.json(
      { message: 'Form submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    logger.error('Error processing contact form', error as Error, {
      requestId,
    });
    return NextResponse.json(
      { error: 'Failed to submit. Please try again.' },
      { status: 500 }
    );
  }
}

// Block all other HTTP methods
export async function GET() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
}

export async function PUT() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
}

export async function DELETE() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
}

export async function PATCH() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
}