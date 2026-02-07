import { logger } from './logger';
import {
  loadRateLimits,
  saveIPBlocks,
  loadIPBlocks,
  type RateLimitData,
  type IPBlockData,
} from './persistence-edge';

// Configuration from environment variables
const RATE_LIMITS = {
  contact: {
    limit: parseInt(process.env.CONTACT_RATE_LIMIT || '5'),
    windowMs: parseInt(process.env.CONTACT_RATE_WINDOW || '900000'), // 15 min
  },
  api: {
    limit: parseInt(process.env.API_RATE_LIMIT || '20'),
    windowMs: parseInt(process.env.API_RATE_WINDOW || '60000'), // 1 min
  },
  csrf: {
    limit: parseInt(process.env.CSRF_RATE_LIMIT || '10'),
    windowMs: parseInt(process.env.CSRF_RATE_WINDOW || '60000'), // 1 min
  },
};

const BLOCK_DURATION = parseInt(process.env.BLOCK_DURATION || '3600000'); // 1 hour
const MAX_VIOLATIONS = parseInt(process.env.MAX_VIOLATIONS || '3');

interface RateLimitResult {
  success: boolean;
  limit: number;
  remaining: number;
  reset: number;
}

// In-memory state
let requestCounts: RateLimitData = {};
let ipBlockList: IPBlockData = {};
const violationCounts: { [ip: string]: number } = {};
let isInitialized = false;

// Initialize from persistence (only once)
async function initialize() {
  if (isInitialized) return;
  
  try {
    requestCounts = await loadRateLimits();
    ipBlockList = await loadIPBlocks();
    isInitialized = true;
  } catch (error) {
    console.error('Failed to initialize rate limits:', error);
  }
}

function inMemoryRateLimit(
  key: string,
  limit: number,
  windowMs: number
): RateLimitResult {
  const now = Date.now();
  const record = requestCounts[key as string];
  
  if (!record || now > record.resetTime) {
    requestCounts[key as string] = { count: 1, resetTime: now + windowMs };
    return {
      success: true,
      limit,
      remaining: limit - 1,
      reset: now + windowMs,
    };
  }
  
  if (record.count >= limit) {
    return {
      success: false,
      limit,
      remaining: 0,
      reset: record.resetTime,
    };
  }
  
  record.count++;
  return {
    success: true,
    limit,
    remaining: limit - record.count,
    reset: record.resetTime,
  };
}

export async function rateLimit(
  identifier: string,
  endpoint: string
): Promise<RateLimitResult> {
  try {
    // Initialize on first use
    if (!isInitialized) {
      await initialize();
    }
    
    // Check if IP is currently blocked
    const blockUntil = ipBlockList[identifier as string];
    if (blockUntil && Date.now() < blockUntil) {
      return {
        success: false,
        limit: 0,
        remaining: 0,
        reset: blockUntil,
      };
    } else if (blockUntil) {
      // Unblock if time has passed
      delete ipBlockList[identifier as string];
      delete violationCounts[identifier as string];
      await saveIPBlocks(ipBlockList);
    }
    
    // Determine rate limit based on endpoint
    let result: RateLimitResult;
    
    if (endpoint === '/api/contact') {
      result = inMemoryRateLimit(
        `contact:${identifier}`,
        RATE_LIMITS.contact.limit,
        RATE_LIMITS.contact.windowMs
      );
    } else if (endpoint === '/api/csrf') {
      result = inMemoryRateLimit(
        `csrf:${identifier}`,
        RATE_LIMITS.csrf.limit,
        RATE_LIMITS.csrf.windowMs
      );
    } else {
      result = inMemoryRateLimit(
        `api:${identifier}`,
        RATE_LIMITS.api.limit,
        RATE_LIMITS.api.windowMs
      );
    }
    
    // Track violations and block if necessary
    if (!result.success) {
      const violations = (violationCounts[identifier as string] || 0) + 1;
      violationCounts[identifier as string] = violations;
      
      if (violations >= MAX_VIOLATIONS) {
        const blockUntil = Date.now() + BLOCK_DURATION;
        ipBlockList[identifier as string] = blockUntil;
        await saveIPBlocks(ipBlockList);
        logger.warn(`IP ${identifier} blocked until ${new Date(blockUntil).toISOString()}`);
      }
    }
    
    return result;
  } catch (error) {
    logger.error('Rate limiting error', error as Error);
    // FAIL CLOSED: Deny on error instead of allowing
    return {
      success: false,
      limit: 0,
      remaining: 0,
      reset: Date.now() + 60000,
    };
  }
}

export function getBlockedIPs(): string[] {
  const now = Date.now();
  return Object.entries(ipBlockList)
    .filter(([, blockUntil]) => now < blockUntil)
    .map(([ip]) => ip);
}

export async function blockIP(ip: string, durationMs: number = BLOCK_DURATION): Promise<void> {
  ipBlockList[ip as string] = Date.now() + durationMs;
  await saveIPBlocks(ipBlockList);
  logger.warn(`Manually blocked IP: ${ip}`);
}

export async function unblockIP(ip: string): Promise<void> {
  delete ipBlockList[ip as string];
  delete violationCounts[ip as string];
  await saveIPBlocks(ipBlockList);
  logger.info(`Unblocked IP: ${ip}`);
}

if (typeof window === 'undefined' && !process.env.NEXT_RUNTIME?.includes('edge')) {
    setInterval(() => {
      const now = Date.now();
      
      // Clean up expired rate limit records
      for (const [key, record] of Object.entries(requestCounts)) {
        if (now > record.resetTime) {
          delete requestCounts[key as string];
        }
      }
      
      // Clean up expired blocks
      for (const [ip, blockUntil] of Object.entries(ipBlockList)) {
        if (now > blockUntil) {
          delete ipBlockList[ip as string];
          delete violationCounts[ip as string];
        }
      }
    }, 60000);
  }