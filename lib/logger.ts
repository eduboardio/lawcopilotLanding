import * as Sentry from '@sentry/nextjs';

export enum LogLevel {
  DEBUG = 'debug',
  INFO = 'info',
  WARN = 'warn',
  ERROR = 'error',
}

interface LogContext {
  requestId?: string;
  ip?: string;
  userAgent?: string;
  path?: string;
  method?: string;
  statusCode?: number;
  duration?: number;
  [key: string]: unknown;
}

class Logger {
  private isProduction = process.env.NODE_ENV === 'production';
  
  constructor() {
    // Initialize Sentry if DSN is provided
    if (process.env.SENTRY_DSN && this.isProduction) {
      Sentry.init({
        dsn: process.env.SENTRY_DSN,
        tracesSampleRate: 0.1,
        environment: process.env.NODE_ENV || 'development',
      });
    }
  }
  
  private formatMessage(level: LogLevel, message: string, context?: LogContext): string {
    const timestamp = new Date().toISOString();
    const contextStr = context ? ` ${JSON.stringify(context)}` : '';
    return `[${timestamp}] [${level.toUpperCase()}] ${message}${contextStr}`;
  }
  
  private shouldLog(level: LogLevel): boolean {
    if (!this.isProduction && level === LogLevel.DEBUG) {
      return true;
    }
    return level !== LogLevel.DEBUG;
  }
  
  debug(message: string, context?: LogContext): void {
    if (this.shouldLog(LogLevel.DEBUG)) {
      console.debug(this.formatMessage(LogLevel.DEBUG, message, context));
    }
  }
  
  info(message: string, context?: LogContext): void {
    if (this.shouldLog(LogLevel.INFO)) {
      console.info(this.formatMessage(LogLevel.INFO, message, context));
    }
  }
  
  warn(message: string, context?: LogContext): void {
    if (this.shouldLog(LogLevel.WARN)) {
      console.warn(this.formatMessage(LogLevel.WARN, message, context));
      
      if (this.isProduction) {
        Sentry.captureMessage(message, {
          level: 'warning',
          contexts: { custom: context },
        });
      }
    }
  }
  
  error(message: string, error?: Error, context?: LogContext): void {
    const errorMessage = this.formatMessage(
      LogLevel.ERROR,
      message,
      { ...context, error: error?.message, stack: error?.stack }
    );
    
    console.error(errorMessage);
    
    if (this.isProduction && error) {
      Sentry.captureException(error, {
        contexts: { custom: context },
      });
    }
  }
  
  // Log API request
  logRequest(context: LogContext): void {
    this.info('API Request', context);
  }
  
  // Log security event
  logSecurityEvent(event: string, context: LogContext): void {
    this.warn(`Security Event: ${event}`, context);
  }
  
  // Log rate limit violation
  logRateLimitViolation(context: LogContext): void {
    this.warn('Rate Limit Exceeded', context);
  }
}

export const logger = new Logger();