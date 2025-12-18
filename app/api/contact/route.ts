// app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';

// Initialize auth - see https://theoephraim.github.io/node-google-spreadsheet/#/guides/authentication
const serviceAccountAuth = new JWT({
  email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
  key: process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  scopes: [
    'https://www.googleapis.com/auth/spreadsheets',
  ],
});

// Input validation and sanitization
function sanitizeInput(input: string): string {
  if (typeof input !== 'string') return '';
  
  // Remove any script tags, SQL injection attempts, command injection
  return input
    .replace(/<script[^>]*>.*?<\/script>/gi, '')
    .replace(/[<>]/g, '')
    .replace(/javascript:/gi, '')
    .replace(/on\w+=/gi, '')
    .substring(0, 5000) // Limit length
    .trim();
}

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 254;
}

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
  [key: string]: string | undefined;
}

function validateAndSanitizeBody(body: Record<string, unknown>): { isValid: boolean; sanitized?: ContactFormData; error?: string } {
  const requiredFields = ['firstName', 'lastName', 'email', 'companyName', 'country', 'jobTitle', 'orgType', 'teamSize', 'message'];
  
  // Check for missing fields
  const missingFields = requiredFields.filter(field => !body[field]);
  if (missingFields.length > 0) {
    return { isValid: false, error: `Missing required fields: ${missingFields.join(', ')}` };
  }
  
  // Validate email
  if (!isValidEmail(body.email)) {
    return { isValid: false, error: 'Invalid email address' };
  }
  
  // Check for excessively long fields
  const maxLengths = {
    firstName: 100,
    lastName: 100,
    email: 254,
    companyName: 200,
    country: 100,
    jobTitle: 100,
    orgType: 100,
    teamSize: 50,
    hearAbout: 200,
    message: 5000
  };
  
  for (const [field, maxLength] of Object.entries(maxLengths)) {
    if (body[field] && body[field].length > maxLength) {
      return { isValid: false, error: `Field ${field} exceeds maximum length` };
    }
  }
  
  // Sanitize all string fields
  const sanitized: Partial<ContactFormData> = {};
  for (const field of Object.keys(body)) {
    if (typeof body[field] === 'string') {
      sanitized[field as keyof ContactFormData] = sanitizeInput(body[field] as string);
    }
  }
  
  return { isValid: true, sanitized: sanitized as ContactFormData };
}

export async function POST(request: NextRequest) {
  try {
    // Limit request body size
    const contentLength = request.headers.get('content-length');
    if (contentLength && parseInt(contentLength) > 100000) { // 100KB limit
      return NextResponse.json(
        { error: 'Request body too large' },
        { status: 413 }
      );
    }
    
    const body = await request.json();
    
    // Validate and sanitize input
    const validation = validateAndSanitizeBody(body);
    if (!validation.isValid) {
      return NextResponse.json(
        { error: validation.error },
        { status: 400 }
      );
    }
    
    const sanitizedBody = validation.sanitized!;

    const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEETS_SHEET_ID!, serviceAccountAuth);
    await doc.loadInfo();
    
    const sheet = doc.sheetsByIndex[0];

    await sheet.addRow({
      'Timestamp': new Date().toLocaleString('en-US', { 
        timeZone: 'UTC',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      }),
      'First Name': sanitizedBody.firstName,
      'Last Name': sanitizedBody.lastName,
      'Email': sanitizedBody.email,
      'Company Name': sanitizedBody.companyName,
      'Country': sanitizedBody.country,
      'Job Title': sanitizedBody.jobTitle,
      'Organization Type': sanitizedBody.orgType,
      'Legal Team Size': sanitizedBody.teamSize,
      'How did you hear about us': sanitizedBody.hearAbout || '',
      'Message': sanitizedBody.message || ''
    });

    return NextResponse.json(
      { message: 'Form submitted successfully' },
      { status: 200 }
    );

  } catch (error) {
    // Don't expose internal errors
    console.error('Error submitting to Google Sheets:', error);
    return NextResponse.json(
      { error: 'Failed to submit form' },
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