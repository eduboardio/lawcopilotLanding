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
}

function validateAndSanitizeBody(body: unknown): ValidationResult {
  const errors: string[] = [];

  if (!body || typeof body !== 'object') {
    return { isValid: false, errors: ['Invalid request'] };
  }

  const data = body as Record<string, unknown>;
  const sanitized: Partial<ContactFormData> = {};

  // Check honeypot field (should be empty)
  if (data.honeypot && typeof data.honeypot === 'string' && data.honeypot.trim() !== '') {
    logger.logSecurityEvent('Honeypot field filled', {
      honeypot: data.honeypot,
    });
    return { isValid: false, errors: ['Invalid request'] };
  }

  // Validate and sanitize firstName
  if (typeof data.firstName === 'string') {
    const result = sanitizeName(data.firstName);
    if (!result.isValid) {
      errors.push('Invalid name format');
    } else {
      sanitized.firstName = result.sanitized;
    }
  } else {
    errors.push('Required field missing');
  }

  // Validate and sanitize lastName
  if (typeof data.lastName === 'string') {
    const result = sanitizeName(data.lastName);
    if (!result.isValid) {
      errors.push('Invalid name format');
    } else {
      sanitized.lastName = result.sanitized;
    }
  } else {
    errors.push('Required field missing');
  }

  // Validate and sanitize email
  if (typeof data.email === 'string') {
    const result = sanitizeEmail(data.email);
    if (!result.isValid) {
      errors.push('Invalid email format');
    } else {
      sanitized.email = result.sanitized;
    }
  } else {
    errors.push('Required field missing');
  }

  // Validate and sanitize companyName
  if (typeof data.companyName === 'string') {
    const result = sanitizeCompanyName(data.companyName);
    if (!result.isValid) {
      errors.push('Invalid company name');
    } else {
      sanitized.companyName = result.sanitized;
    }
  } else {
    errors.push('Required field missing');
  }

  // Validate and sanitize jobTitle
  if (typeof data.jobTitle === 'string') {
    const result = sanitizeGenericField(data.jobTitle, 100);
    if (!result.isValid) {
      errors.push('Invalid job title');
    } else {
      sanitized.jobTitle = result.sanitized;
    }
  } else {
    errors.push('Required field missing');
  }

  // Validate and sanitize country
  if (typeof data.country === 'string') {
    const result = sanitizeGenericField(data.country, 100);
    if (!result.isValid) {
      errors.push('Invalid country');
    } else {
      sanitized.country = result.sanitized;
    }
  } else {
    errors.push('Required field missing');
  }

  // Validate and sanitize orgType
  if (typeof data.orgType === 'string') {
    const result = sanitizeGenericField(data.orgType, 100);
    if (!result.isValid) {
      errors.push('Invalid organization type');
    } else {
      sanitized.orgType = result.sanitized;
    }
  } else {
    errors.push('Required field missing');
  }

  // Validate and sanitize teamSize (optional)
  if (data.teamSize && typeof data.teamSize === 'string') {
    const result = sanitizeGenericField(data.teamSize, 50);
    if (result.isValid) {
      sanitized.teamSize = result.sanitized;
    }
  }

  // Validate and sanitize hearAbout (optional)
  if (data.hearAbout && typeof data.hearAbout === 'string') {
    const result = sanitizeGenericField(data.hearAbout, 200);
    if (result.isValid) {
      sanitized.hearAbout = result.sanitized;
    }
  }

  // Validate and sanitize message
  if (typeof data.message === 'string') {
    const result = sanitizeMessage(data.message);
    if (!result.isValid) {
      errors.push('Invalid message format');
    } else {
      sanitized.message = result.sanitized;
    }
  } else {
    errors.push('Required field missing');
  }

  // Store CSRF token and signature for validation
  if (typeof data.csrfToken === 'string') {
    sanitized.csrfToken = data.csrfToken;
  }

  if (typeof data.timestamp === 'number') {
    sanitized.timestamp = data.timestamp;
  }

  if (typeof data.signature === 'string') {
    sanitized.signature = data.signature;
  }

  return {
    isValid: errors.length === 0,
    sanitized: errors.length === 0 ? sanitized : undefined,
    errors,
  };
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
      });
      return NextResponse.json(
        { error: 'Invalid form data. Please check your inputs.' },
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
      'First Name': sanitizedBody.firstName,
      'Last Name': sanitizedBody.lastName,
      'Email': sanitizedBody.email,
      'Company Name': sanitizedBody.companyName,
      'Country': sanitizedBody.country,
      'Job Title': sanitizedBody.jobTitle,
      'Organization Type': sanitizedBody.orgType,
      'Legal Team Size': sanitizedBody.teamSize || '',
      'How did you hear about us': sanitizedBody.hearAbout || '',
      'Message': sanitizedBody.message,
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