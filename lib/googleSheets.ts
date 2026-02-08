import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';
import { logger } from './logger';

// Use Node.js persistence for API routes
const PERSISTENCE_AVAILABLE = typeof window === 'undefined' && !process.env.NEXT_RUNTIME?.includes('edge');

const MAX_RETRIES = 3;
const INITIAL_RETRY_DELAY = 1000;

const DAILY_QUOTA_LIMIT = parseInt(process.env.SHEETS_DAILY_QUOTA || '500');
const HOURLY_QUOTA_LIMIT = parseInt(process.env.SHEETS_HOURLY_QUOTA || '100');

interface GoogleSheetsConfig {
  sheetId: string;
  clientEmail: string;
  privateKey: string;
}

export interface QuotaData {
  requestCount: number;
  hourlyRequestCount: number;
  dailyRequestCount: number;
  lastHourReset: number;
  lastDayReset: number;
}

// Only import Node.js persistence if available
type QuotaDataLoader = () => Promise<QuotaData>;
type QuotaDataSaver = (data: QuotaData) => Promise<boolean>;

let saveQuotaData: QuotaDataSaver | undefined;
let loadQuotaData: QuotaDataLoader | undefined;

if (PERSISTENCE_AVAILABLE) {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const persistence = require('./persistence-node');
  saveQuotaData = persistence.saveQuotaData;
  loadQuotaData = persistence.loadQuotaData;
}

class GoogleSheetsClient {
  private config: GoogleSheetsConfig;
  private auth: JWT;
  private quotaData: QuotaData = {
    requestCount: 0,
    hourlyRequestCount: 0,
    dailyRequestCount: 0,
    lastHourReset: Date.now(),
    lastDayReset: Date.now(),
  };
  
  constructor() {
    // Guard for build time: env vars are not available during Next.js build (e.g. in Docker).
    const rawKey = process.env.GOOGLE_SHEETS_PRIVATE_KEY;
    const privateKey =
      typeof rawKey === 'string' ? rawKey.replace(/\\n/g, '\n') : '';
    const sheetId = process.env.GOOGLE_SHEETS_SHEET_ID ?? '';
    const clientEmail = process.env.GOOGLE_SHEETS_CLIENT_EMAIL ?? '';

    this.config = {
      sheetId,
      clientEmail,
      privateKey,
    };

    this.auth = new JWT({
      email: this.config.clientEmail,
      key: this.config.privateKey,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });
    
    // Load quota data from disk if available
    if (PERSISTENCE_AVAILABLE) {
      this.loadQuotaState();
    }
  }
  
  private hasValidConfig(): boolean {
    return Boolean(
      this.config.sheetId &&
        this.config.clientEmail &&
        this.config.privateKey
    );
  }

  private async loadQuotaState(): Promise<void> {
    if (!PERSISTENCE_AVAILABLE || !loadQuotaData) return;
    
    try {
      this.quotaData = await loadQuotaData();
      logger.info('Loaded Google Sheets quota state', { ...this.quotaData });
    } catch (error) {
      logger.error('Failed to load quota state', error as Error);
    }
  }
  
  private async saveQuotaState(): Promise<void> {
    if (!PERSISTENCE_AVAILABLE || !saveQuotaData) return;
    
    try {
      await saveQuotaData(this.quotaData);
    } catch (error) {
      logger.error('Failed to save quota state', error as Error);
    }
  }
  
  private resetQuotaCountersIfNeeded(): void {
    const now = Date.now();
    
    if (now - this.quotaData.lastHourReset > 3600000) {
      this.quotaData.hourlyRequestCount = 0;
      this.quotaData.lastHourReset = now;
    }
    
    if (now - this.quotaData.lastDayReset > 86400000) {
      this.quotaData.dailyRequestCount = 0;
      this.quotaData.lastDayReset = now;
    }
  }
  
  async checkQuota(): Promise<boolean> {
    if (!this.hasValidConfig()) {
      logger.warn('Google Sheets not configured (missing env), rejecting quota check');
      return false;
    }
    this.resetQuotaCountersIfNeeded();
    
    if (this.quotaData.hourlyRequestCount >= HOURLY_QUOTA_LIMIT) {
      logger.warn('Hourly Google Sheets quota limit reached', {
        hourlyCount: this.quotaData.hourlyRequestCount,
        limit: HOURLY_QUOTA_LIMIT,
      });
      return false;
    }
    
    if (this.quotaData.dailyRequestCount >= DAILY_QUOTA_LIMIT) {
      logger.warn('Daily Google Sheets quota limit reached', {
        dailyCount: this.quotaData.dailyRequestCount,
        limit: DAILY_QUOTA_LIMIT,
      });
      return false;
    }
    
    return true;
  }
  
  private async retryWithBackoff<T>(
    operation: () => Promise<T>,
    signal?: AbortSignal,
    retries: number = MAX_RETRIES
  ): Promise<T> {
    try {
      if (signal?.aborted) {
        throw new Error('Operation aborted');
      }
      
      return await operation();
    } catch (error) {
      if (retries === 0 || signal?.aborted) {
        throw error;
      }
      
      const delay = INITIAL_RETRY_DELAY * Math.pow(2, MAX_RETRIES - retries);
      logger.warn(`Google Sheets operation failed, retrying in ${delay}ms`, {
        retriesLeft: retries,
        error: error instanceof Error ? error.message : 'Unknown error',
      });
      
      await new Promise((resolve, reject) => {
        const timeout = setTimeout(resolve, delay);
        signal?.addEventListener('abort', () => {
          clearTimeout(timeout);
          reject(new Error('Operation aborted'));
        });
      });
      
      return this.retryWithBackoff(operation, signal, retries - 1);
    }
  }
  
  private async trackAPIUsage(): Promise<void> {
    this.quotaData.requestCount++;
    this.quotaData.hourlyRequestCount++;
    this.quotaData.dailyRequestCount++;
    
    if (this.quotaData.requestCount % 10 === 0) {
      await this.saveQuotaState();
    }
    
    if (this.quotaData.requestCount % 50 === 0) {
      logger.info('Google Sheets API Usage', {
        totalRequests: this.quotaData.requestCount,
        hourlyRequests: this.quotaData.hourlyRequestCount,
        dailyRequests: this.quotaData.dailyRequestCount,
      });
    }
  }
  
  async addRow(data: Record<string, string>, signal?: AbortSignal): Promise<boolean> {
    if (!this.hasValidConfig()) {
      logger.error('Google Sheets not configured (missing env vars)', undefined, {
        hasSheetId: Boolean(this.config.sheetId),
        hasClientEmail: Boolean(this.config.clientEmail),
        hasPrivateKey: Boolean(this.config.privateKey),
      });
      return false;
    }
    try {
      await this.trackAPIUsage();
      
      await this.retryWithBackoff(async () => {
        const doc = new GoogleSpreadsheet(this.config.sheetId, this.auth);
        await doc.loadInfo();
        
        const sheet = doc.sheetsByIndex[0];
        if (!sheet) {
          throw new Error('Sheet not found');
        }
        
        await sheet.addRow(data);
      }, signal);
      
      logger.info('Successfully added row to Google Sheets', {
        timestamp: data.Timestamp,
      });
      
      await this.saveQuotaState();
      
      return true;
    } catch (error) {
      logger.error('Failed to add row to Google Sheets', error as Error, {
        hasTimestamp: !!data.Timestamp,
      });
      
      return false;
    }
  }
  
  getAPIUsageStats(): { 
    requestCount: number;
    hourlyCount: number;
    dailyCount: number;
  } {
    this.resetQuotaCountersIfNeeded();
    return { 
      requestCount: this.quotaData.requestCount,
      hourlyCount: this.quotaData.hourlyRequestCount,
      dailyCount: this.quotaData.dailyRequestCount,
    };
  }
}

// Lazy singleton: avoid running constructor at build time (env vars not set in Docker build).
let _instance: GoogleSheetsClient | null = null;

function getGoogleSheetsClient(): GoogleSheetsClient {
  if (!_instance) {
    _instance = new GoogleSheetsClient();
  }
  return _instance;
}

export const googleSheetsClient = {
  get checkQuota() {
    return getGoogleSheetsClient().checkQuota.bind(getGoogleSheetsClient());
  },
  get addRow() {
    return getGoogleSheetsClient().addRow.bind(getGoogleSheetsClient());
  },
};