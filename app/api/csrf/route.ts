import { NextRequest, NextResponse } from 'next/server';
import { setCSRFToken } from '@/lib/csrf';
import { rateLimit } from '@/lib/rateLimit';

export async function GET(request: NextRequest) {
  try {
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() 
      || request.headers.get('x-real-ip') 
      || request.headers.get('cf-connecting-ip')
      || 'unknown';
    
    // Rate limit CSRF token generation (20 requests per minute per IP)
    const rateLimitResult = await rateLimit(ip, '/api/csrf');
    
    if (!rateLimitResult.success) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { 
          status: 429,
          headers: {
            'Retry-After': Math.ceil((rateLimitResult.reset - Date.now()) / 1000).toString(),
          }
        }
      );
    }
    
    const token = await setCSRFToken();
    
    return NextResponse.json(
      { csrfToken: token },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error generating CSRF token:', error);
    return NextResponse.json(
      { error: 'Failed to generate token' },
      { status: 500 }
    );
  }
}