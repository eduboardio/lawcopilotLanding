// Node.js persistence implementation
// This runs in API routes (Node.js runtime)

// File paths are defined for potential future use
// Currently using in-memory storage, but paths are kept for API-based persistence
// import { join } from 'path';
// const PERSISTENCE_DIR = process.env.PERSISTENCE_DIR || '/tmp/lawcopilot-data';
// const RATE_LIMIT_FILE = join(PERSISTENCE_DIR, 'rate-limits.json');
// const IP_BLOCKS_FILE = join(PERSISTENCE_DIR, 'ip-blocks.json');
// const MONITORING_FILE = join(PERSISTENCE_DIR, 'monitoring.json');
// const QUOTA_FILE = join(PERSISTENCE_DIR, 'quota.json');

// Types
export interface RateLimitData {
  [key: string]: {
    count: number;
    resetTime: number;
  };
}

export interface IPBlockData {
  [ip: string]: number;
}

export interface MonitoringData {
  requests: Array<{
    requestId: string;
    ip: string;
    path: string;
    method: string;
    userAgent: string;
    timestamp: number;
    blocked: boolean;
    reason?: string;
  }>;
  violations: { [ip: string]: number };
}

export interface QuotaData {
  requestCount: number;
  hourlyRequestCount: number;
  dailyRequestCount: number;
  lastHourReset: number;
  lastDayReset: number;
}

// Edge-compatible storage using environment or external service
// For now, we'll use in-memory storage in Edge and sync via API routes

class EdgePersistence {
  private rateLimits: RateLimitData = {};
  private ipBlocks: IPBlockData = {};
  private monitoring: MonitoringData = { requests: [], violations: {} };
  private quota: QuotaData = {
    requestCount: 0,
    hourlyRequestCount: 0,
    dailyRequestCount: 0,
    lastHourReset: Date.now(),
    lastDayReset: Date.now(),
  };
  
  // Get methods (sync)
  getRateLimits(): RateLimitData {
    return this.rateLimits;
  }
  
  getIPBlocks(): IPBlockData {
    return this.ipBlocks;
  }
  
  getMonitoring(): MonitoringData {
    return this.monitoring;
  }
  
  getQuota(): QuotaData {
    return this.quota;
  }
  
  // Set methods (sync)
  setRateLimits(data: RateLimitData): void {
    this.rateLimits = data;
  }
  
  setIPBlocks(data: IPBlockData): void {
    this.ipBlocks = data;
  }
  
  setMonitoring(data: MonitoringData): void {
    this.monitoring = data;
  }
  
  setQuota(data: QuotaData): void {
    this.quota = data;
  }
  
  // Load from API endpoint (async)
  async loadFromAPI(): Promise<void> {
    try {
      // This would call an internal API endpoint to get persisted data
      // For now, we'll just keep in-memory
      // In production, you could use KV storage or external service
    } catch (error) {
      console.error('Failed to load from API:', error);
    }
  }
  
  // Save to API endpoint (async)
  async saveToAPI(): Promise<void> {
    try {
      // This would call an internal API endpoint to persist data
      // For now, we'll just keep in-memory
    } catch (error) {
      console.error('Failed to save to API:', error);
    }
  }
}

export const edgePersistence = new EdgePersistence();

// Export helper functions for backward compatibility
export async function loadRateLimits(): Promise<RateLimitData> {
  return edgePersistence.getRateLimits();
}

export async function saveRateLimits(data: RateLimitData): Promise<boolean> {
  edgePersistence.setRateLimits(data);
  return true;
}

export async function loadIPBlocks(): Promise<IPBlockData> {
  return edgePersistence.getIPBlocks();
}

export async function saveIPBlocks(data: IPBlockData): Promise<boolean> {
  edgePersistence.setIPBlocks(data);
  return true;
}

export async function loadMonitoringData(): Promise<MonitoringData> {
  return edgePersistence.getMonitoring();
}

export async function saveMonitoringData(data: MonitoringData): Promise<boolean> {
  edgePersistence.setMonitoring(data);
  return true;
}

export async function loadQuotaData(): Promise<QuotaData> {
  return edgePersistence.getQuota();
}

export async function saveQuotaData(data: QuotaData): Promise<boolean> {
  edgePersistence.setQuota(data);
  return true;
}

export async function cleanupOldData(): Promise<void> {
  const now = Date.now();
  const oneWeekAgo = now - 7 * 24 * 60 * 60 * 1000;
  
  // Clean up old monitoring data
  const monitoring = edgePersistence.getMonitoring();
  monitoring.requests = monitoring.requests.filter(
    req => req.timestamp > oneWeekAgo
  );
  edgePersistence.setMonitoring(monitoring);
  
  // Clean up expired rate limits
  const rateLimits = edgePersistence.getRateLimits();
  const activeRateLimits: RateLimitData = {};
  for (const [key, value] of Object.entries(rateLimits)) {
    if (value.resetTime > now) {
      activeRateLimits[key as string] = value;
    }
  }
  edgePersistence.setRateLimits(activeRateLimits);
  
  // Clean up expired IP blocks
  const ipBlocks = edgePersistence.getIPBlocks();
  const activeBlocks: IPBlockData = {};
  for (const [ip, blockUntil] of Object.entries(ipBlocks)) {
    if (blockUntil > now) {
      activeBlocks[ip as string] = blockUntil;
    }
  }
  edgePersistence.setIPBlocks(activeBlocks);
}