import { logger } from './logger';
import {
  saveMonitoringData,
  loadMonitoringData,
  type MonitoringData,
} from './persistence-edge';

export interface RequestLog {
  requestId: string;
  ip: string;
  path: string;
  method: string;
  userAgent: string;
  timestamp: Date;
  blocked?: boolean;
  reason?: string;
}

const MAX_REQUESTS_PER_IP = 1000;
const SUSPICIOUS_THRESHOLD = 5;

// In-memory state
let monitoringData: MonitoringData = {
  requests: [],
  violations: {},
};
let isInitialized = false;

// Initialize from persistence
async function initialize() {
  if (isInitialized) return;
  
  try {
    monitoringData = await loadMonitoringData();
    isInitialized = true;
  } catch (error) {
    console.error('Failed to initialize monitoring:', error);
  }
}

export async function trackRequest(log: RequestLog): Promise<void> {
  try {
    // Initialize on first use
    if (!isInitialized) {
      await initialize();
    }
    
    const serializedLog = {
        requestId: log.requestId,
        ip: log.ip,
        path: log.path,
        method: log.method,
        userAgent: log.userAgent,
        timestamp: log.timestamp.getTime(),
        blocked: log.blocked ?? false, // Ensure it's always a boolean
        reason: log.reason,
      };
    
    monitoringData.requests.push(serializedLog);
    
    // Keep only recent requests
    if (monitoringData.requests.length > MAX_REQUESTS_PER_IP) {
      monitoringData.requests.shift();
    }
    
    // Check for suspicious patterns
    if (log.blocked) {
      await detectSuspiciousActivity(log.ip);
    }
    
    // Log security events
    if (log.blocked) {
      logger.logSecurityEvent('Request Blocked', {
        requestId: log.requestId,
        ip: log.ip,
        path: log.path,
        reason: log.reason,
      });
    }
  } catch (error) {
    logger.error('Error tracking request', error as Error);
  }
}

async function detectSuspiciousActivity(ip: string): Promise<void> {
  const oneHourAgo = Date.now() - 3600000;
  const recentBlockedRequests = monitoringData.requests.filter(
    req => req.ip === ip && req.blocked && req.timestamp > oneHourAgo
  );
  
  if (recentBlockedRequests.length > SUSPICIOUS_THRESHOLD) {
    const currentViolations = monitoringData.violations[ip as string] || 0;
    monitoringData.violations[ip as string] = currentViolations + 1;
    
    logger.logSecurityEvent('Suspicious IP Detected', {
      ip,
      blockedRequestCount: recentBlockedRequests.length,
      totalViolations: monitoringData.violations[ip as string],
    });
    
    await sendAlert({
      type: 'suspicious_ip',
      ip,
      blockedRequestCount: recentBlockedRequests.length,
    });
  }
}

export function isSuspiciousIP(ip: string): boolean {
  return (monitoringData.violations[ip as string] || 0) > SUSPICIOUS_THRESHOLD;
}

export async function getIPStatistics(ip: string): Promise<{
  totalRequests: number;
  blockedRequests: number;
  lastRequest: Date | null;
  isSuspicious: boolean;
}> {
  if (!isInitialized) {
    await initialize();
  }
  
  const ipRequests = monitoringData.requests.filter(req => req.ip === ip);
  const blockedRequests = ipRequests.filter(req => req.blocked);
  
  return {
    totalRequests: ipRequests.length,
    blockedRequests: blockedRequests.length,
    lastRequest: ipRequests.length > 0 
      ? new Date(ipRequests[ipRequests.length - 1].timestamp) 
      : null,
    isSuspicious: isSuspiciousIP(ip),
  };
}

interface Alert extends Record<string, unknown> {
    type: string;
    ip: string;
    blockedRequestCount?: number;
    message?: string;
  }

async function sendAlert(alert: Alert): Promise<void> {
  logger.warn('Alert Triggered', alert);
}

// Clean up old data periodically (only in Node.js runtime)
if (typeof window === 'undefined' && !process.env.NEXT_RUNTIME?.includes('edge')) {
    setInterval(async () => {
      const oneWeekAgo = Date.now() - 7 * 24 * 60 * 60 * 1000;
      
      monitoringData.requests = monitoringData.requests.filter(
        req => req.timestamp > oneWeekAgo
      );
      
      await saveMonitoringData(monitoringData);
    }, 3600000);
  }