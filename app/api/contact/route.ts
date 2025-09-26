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

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const requiredFields = ['firstName', 'lastName', 'email', 'companyName', 'country', 'jobTitle', 'orgType', 'teamSize', 'message'];
    const missingFields = requiredFields.filter(field => !body[field]);
    
    if (missingFields.length > 0) {
      return NextResponse.json(
        { error: `Missing required fields: ${missingFields.join(', ')}` },
        { status: 400 }
      );
    }

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
      'First Name': body.firstName,
      'Last Name': body.lastName,
      'Email': body.email,
      'Company Name': body.companyName,
      'Country': body.country,
      'Job Title': body.jobTitle,
      'Organization Type': body.orgType,
      'Legal Team Size': body.teamSize,
      'How did you hear about us': body.hearAbout || '',
      'Message': body.message || ''
    });

    return NextResponse.json(
      { message: 'Form submitted successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error submitting to Google Sheets:', error);
    return NextResponse.json(
      { error: 'Failed to submit form' },
      { status: 500 }
    );
  }
}