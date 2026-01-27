import { cookies } from 'next/headers';

const CSRF_TOKEN_NAME = 'csrf_token';
const CSRF_COOKIE_OPTIONS = {
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'strict' as const,
  maxAge: 3600, // 1 hour
  path: '/',
};

export function generateCSRFToken(): string {
  return crypto.randomUUID();
}

export async function setCSRFToken(): Promise<string> {
  const token = generateCSRFToken();
  const cookieStore = await cookies();
  
  cookieStore.set(CSRF_TOKEN_NAME, token, CSRF_COOKIE_OPTIONS);
  
  return token;
}

export async function getCSRFToken(): Promise<string | undefined> {
  const cookieStore = await cookies();
  return cookieStore.get(CSRF_TOKEN_NAME)?.value;
}

export async function validateCSRFToken(token: string | null | undefined): Promise<boolean> {
  if (!token) {
    return false;
  }
  
  const storedToken = await getCSRFToken();
  return token === storedToken;
}

export async function deleteCSRFToken(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete(CSRF_TOKEN_NAME);
}