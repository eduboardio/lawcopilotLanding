import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { rateLimit } from '@/lib/rateLimit';
import { trackRequest } from '@/lib/monitoring';

// Manual IP blocking list (in production, use a database)
const BLOCKED_IPS = new Set<string>([
  // Add manually blocked IPs here
]);

// Generate nonce for CSP
function generateNonce(): string {
  return Buffer.from(crypto.randomUUID()).toString('base64');
}

export async function middleware(request: NextRequest) {
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() 
    || request.headers.get('x-real-ip') 
    || request.headers.get('cf-connecting-ip')
    || 'unknown';
  const requestId = crypto.randomUUID();
  
  // Check if IP is manually blocked
  if (BLOCKED_IPS.has(ip)) {
    await trackRequest({
      requestId,
      ip,
      path: request.nextUrl.pathname,
      method: request.method,
      userAgent: request.headers.get('user-agent') || '',
      timestamp: new Date(),
      blocked: true,
      reason: 'ip_blocked'
    });
    
    return NextResponse.json(
      { error: 'Access denied' },
      { status: 403 }
    );
  }
  
  // Apply rate limiting for API routes
  if (request.nextUrl.pathname.startsWith('/api/')) {
    const rateLimitResult = await rateLimit(ip, request.nextUrl.pathname);
    
    if (!rateLimitResult.success) {
      await trackRequest({
        requestId,
        ip,
        path: request.nextUrl.pathname,
        method: request.method,
        userAgent: request.headers.get('user-agent') || '',
        timestamp: new Date(),
        blocked: true,
        reason: 'rate_limit_exceeded'
      });
      
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { 
          status: 429,
          headers: {
            'Retry-After': Math.ceil((rateLimitResult.reset - Date.now()) / 1000).toString(),
            'X-RateLimit-Limit': rateLimitResult.limit.toString(),
            'X-RateLimit-Remaining': '0',
            'X-RateLimit-Reset': rateLimitResult.reset.toString()
          }
        }
      );
    }
  }
  
  // Create response with security headers
  const response = NextResponse.next();
  
  // Generate nonce for this request
  const nonce = generateNonce();
  response.headers.set('X-Nonce', nonce);
  
  // Add request ID for tracking
  response.headers.set('X-Request-ID', requestId);
  
  // Strict Content Security Policy (no unsafe-inline or unsafe-eval)
// Content Security Policy - relaxed for development, strict for production
const isDev = process.env.NODE_ENV === 'development';

const cspHeader = isDev 
  ? [
      "default-src 'self'",
      "script-src 'self' 'unsafe-eval' 'unsafe-inline'",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com",
      "img-src 'self' data: https: blob:",
      "connect-src 'self'",
      "frame-src 'self'",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "frame-ancestors 'none'",
    ].join('; ')
  : [
      "default-src 'self'",
      // Next.js (App Router) requires 'unsafe-inline' for inline scripts/styles.
      // Using nonces would require modifying Next.js internals to add nonces to all inline scripts.
      "script-src 'self' 'unsafe-inline' https://vercel.live",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com",
      "img-src 'self' data: https: blob:",
      "connect-src 'self'",
      "frame-src 'self' https://vercel.live",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "frame-ancestors 'none'",
      "upgrade-insecure-requests"
    ].join('; ');
  
  response.headers.set('Content-Security-Policy', cspHeader);
  
  // Permissions Policy
  response.headers.set(
    'Permissions-Policy',
    'accelerometer=(), camera=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), payment=(), usb=()'
  );
  
  // Cross-Origin Policies (less strict for production compatibility)
  // Only apply strict COEP in production if you've tested all resources
  if (process.env.STRICT_CORS === 'true') {
    response.headers.set('Cross-Origin-Embedder-Policy', 'require-corp');
  }
  response.headers.set('Cross-Origin-Opener-Policy', 'same-origin');
  response.headers.set('Cross-Origin-Resource-Policy', 'same-origin');
  
  // CORS Configuration - Explicit allowed origins
  const allowedOrigins = process.env.ALLOWED_ORIGINS?.split(',') || ['https://lawcopilot.io'];
  const origin = request.headers.get('origin');
  
  if (origin && allowedOrigins.includes(origin)) {
    response.headers.set('Access-Control-Allow-Origin', origin);
    response.headers.set('Access-Control-Allow-Credentials', 'true');
    response.headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type, X-CSRF-Token');
  }
  
  // Additional security headers
  response.headers.set('X-DNS-Prefetch-Control', 'off');
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set('X-XSS-Protection', '1; mode=block');
  
  // Strict Transport Security (only in production with HTTPS)
  if (process.env.NODE_ENV === 'production') {
    response.headers.set(
      'Strict-Transport-Security',
      'max-age=63072000; includeSubDomains; preload'
    );
  }
  
  // Track request
  await trackRequest({
    requestId,
    ip,
    path: request.nextUrl.pathname,
    method: request.method,
    userAgent: request.headers.get('user-agent') || '',
    timestamp: new Date(),
    blocked: false
  });
  
  return response;
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};