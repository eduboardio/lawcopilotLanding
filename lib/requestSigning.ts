import { createHmac } from 'crypto';
import { logger } from './logger';

const REQUEST_SIGNATURE_VALIDITY = 5 * 60 * 1000; // 5 minutes

function getSecret(): string {
  const secret = process.env.REQUEST_SIGNING_SECRET;
  
  // In production, SECRET is REQUIRED
  if (process.env.NODE_ENV === 'production' && !secret) {
    throw new Error('REQUEST_SIGNING_SECRET must be set in production');
  }
  
  return secret || '';
}

export function generateRequestSignature(
  data: Record<string, unknown>,
  timestamp: number
): string {
  try {
    const secret = getSecret();
    
    if (!secret) {
      logger.warn('REQUEST_SIGNING_SECRET not set, signature generation disabled');
      return '';
    }
    
    const dataString = JSON.stringify(data, Object.keys(data).sort());
    const payload = `${dataString}:${timestamp}`;
    
    return createHmac('sha256', secret)
      .update(payload)
      .digest('hex');
  } catch (error) {
    logger.error('Failed to generate request signature', error as Error);
    return '';
  }
}

export function verifyRequestSignature(
  data: Record<string, unknown>,
  signature: string,
  timestamp: number
): boolean {
  try {
    const secret = getSecret();
    
    // FAIL SECURELY: In production, if secret is not set, reject
    if (process.env.NODE_ENV === 'production' && !secret) {
      logger.error('REQUEST_SIGNING_SECRET not set in production, rejecting request');
      return false;
    }
    
    // If no secret in development, skip all validation
    if (!secret) {
      logger.warn('REQUEST_SIGNING_SECRET not set, skipping signature verification');
      return true; // Allow in development only
    }
    
    // Only validate timestamp if we're actually checking signatures
    const now = Date.now();
    const age = now - timestamp;
    
    if (age > REQUEST_SIGNATURE_VALIDITY || age < -60000) {
      logger.warn('Request signature timestamp invalid', {
        age,
        timestamp,
        now,
      });
      return false;
    }
    
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { signature: _signature, timestamp: _timestamp, ...dataWithoutSignature } = data;
    const expectedSignature = generateRequestSignature(dataWithoutSignature, timestamp);
    
    if (!expectedSignature) {
      return false;
    }
    
    return signature === expectedSignature;
  } catch (error) {
    logger.error('Failed to verify request signature', error as Error);
    // FAIL CLOSED: On error, reject
    return false;
  }
}