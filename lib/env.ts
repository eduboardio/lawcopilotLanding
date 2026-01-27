const requiredEnvVars = [
    'GOOGLE_SHEETS_CLIENT_EMAIL',
    'GOOGLE_SHEETS_PRIVATE_KEY',
    'GOOGLE_SHEETS_SHEET_ID',
  ] as const;
  
  const optionalEnvVars = [
    'SENTRY_DSN',
    'NODE_ENV',
    'REQUEST_SIGNING_SECRET',
    'ALLOWED_ORIGINS',
    'STRICT_CORS',
    'SHEETS_DAILY_QUOTA',
    'SHEETS_HOURLY_QUOTA',
    'CONTACT_RATE_LIMIT',
    'CONTACT_RATE_WINDOW',
    'API_RATE_LIMIT',
    'API_RATE_WINDOW',
    'CSRF_RATE_LIMIT',
    'CSRF_RATE_WINDOW',
    'BLOCK_DURATION',
    'MAX_VIOLATIONS',
    'PERSISTENCE_DIR',
  ] as const;
  
  // Critical warnings that should fail in production
  const criticalWarningVars = [
    'REQUEST_SIGNING_SECRET',
    'ALLOWED_ORIGINS',
  ];
  
  type RequiredEnvVar = typeof requiredEnvVars[number];
  type OptionalEnvVar = typeof optionalEnvVars[number];
  type EnvVar = RequiredEnvVar | OptionalEnvVar;
  
  interface EnvValidationResult {
    isValid: boolean;
    missingVars: string[];
    warnings: string[];
    criticalWarnings: string[];
  }
  
  export function validateEnvironmentVariables(): EnvValidationResult {
    const missingVars: string[] = [];
    const warnings: string[] = [];
    const criticalWarnings: string[] = [];
    
    for (const varName of requiredEnvVars) {
      if (!process.env[varName]) {
        missingVars.push(varName);
      }
    }
    
    for (const varName of optionalEnvVars) {
      if (!process.env[varName]) {
        const warning = `Optional environment variable ${varName} is not set`;
        warnings.push(warning);
        
        // Mark as critical if in production
        if (process.env.NODE_ENV === 'production' && criticalWarningVars.includes(varName)) {
          criticalWarnings.push(varName);
        }
      }
    }
    
    if (process.env.GOOGLE_SHEETS_PRIVATE_KEY) {
      const key = process.env.GOOGLE_SHEETS_PRIVATE_KEY;
      const hasBegin = key.includes('BEGIN PRIVATE KEY');
      const hasEnd = key.includes('END PRIVATE KEY');
      
      if (!hasBegin || !hasEnd) {
        warnings.push('GOOGLE_SHEETS_PRIVATE_KEY may not be in correct PEM format');
      }
    }
    
    if (process.env.GOOGLE_SHEETS_CLIENT_EMAIL) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(process.env.GOOGLE_SHEETS_CLIENT_EMAIL)) {
        warnings.push('GOOGLE_SHEETS_CLIENT_EMAIL does not appear to be a valid email');
      }
    }
    
    return {
      isValid: missingVars.length === 0,
      missingVars,
      warnings,
      criticalWarnings,
    };
  }
  
  export function getEnvVar(name: EnvVar, fallback?: string): string {
    const value = process.env[name];
    if (!value) {
      if (fallback !== undefined) {
        return fallback;
      }
      throw new Error(`Environment variable ${name} is not defined`);
    }
    return value;
  }
  
  export function isProduction(): boolean {
    return process.env.NODE_ENV === 'production';
  }
  
  export function isDevelopment(): boolean {
    return process.env.NODE_ENV === 'development';
  }
  
  if (typeof window === 'undefined') {
    const result = validateEnvironmentVariables();
    
    if (!result.isValid) {
      console.error('❌ Missing required environment variables:');
      result.missingVars.forEach(v => console.error(`  - ${v}`));
      if (!isDevelopment()) {
        throw new Error('Missing required environment variables');
      }
    }
    
    if (result.criticalWarnings.length > 0 && isProduction()) {
      console.error('❌ Critical warnings in production:');
      result.criticalWarnings.forEach(w => console.error(`  - ${w} is not set`));
      throw new Error('Critical environment variables missing in production');
    }
    
    if (result.warnings.length > 0) {
      console.warn('⚠️  Environment warnings:');
      result.warnings.forEach(w => console.warn(`  - ${w}`));
    }
    
    console.log('✅ Environment variables validated');
  }