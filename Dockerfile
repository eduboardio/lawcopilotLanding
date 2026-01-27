# Stage 1: Dependencies
FROM node:18-alpine AS deps

# Install system dependencies
RUN apk add --no-cache libc6-compat

WORKDIR /app

# Copy dependency files
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm ci && \
    npm cache clean --force

# Stage 2: Builder
FROM node:18-alpine AS builder

WORKDIR /app

# Copy dependencies from deps stage
COPY --from=deps /app/node_modules ./node_modules

# Copy application source
COPY . .

# Disable telemetry
ENV NEXT_TELEMETRY_DISABLED=1

# Build the application
RUN npm run build

# Install only production dependencies
RUN npm ci --only=production && \
    npm cache clean --force

# Stage 3: Runner
FROM node:18-alpine AS runner

WORKDIR /app

# Security: Set production environment
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Security: Create non-root user with specific UID/GID
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# Security: Update system packages and remove unnecessary tools
RUN apk upgrade --no-cache && \
    apk del --no-cache apk-tools && \
    rm -rf /var/cache/apk/* /tmp/* /var/tmp/*

# Copy built application with correct ownership
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder --chown=nextjs:nodejs /app/node_modules ./node_modules
COPY --from=builder --chown=nextjs:nodejs /app/package.json ./package.json
COPY --from=builder --chown=nextjs:nodejs /app/public ./public

# Security: Set read-only permissions where possible
# Keep .next and node_modules/.cache writable for Next.js runtime
RUN chown -R nextjs:nodejs /app && \
    chmod -R 555 /app && \
    chmod -R 755 /app/.next && \
    chmod -R 755 /app/node_modules/.cache 2>/dev/null || true

# Create persistence directory with proper permissions
RUN mkdir -p /data && \
    chown -R nextjs:nodejs /data && \
    chmod -R 755 /data

# Set persistence directory environment variable
ENV PERSISTENCE_DIR=/data

# Resource limits via Node.js options
# --max-old-space-size: Limit heap size to 512MB
# --max-http-header-size: Limit HTTP header size to 16KB
ENV NODE_OPTIONS="--max-old-space-size=512 --max-http-header-size=16384"

# Switch to non-root user
USER nextjs

# Expose port
EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Health check with improved error handling
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD node -e "require('http').get('http://localhost:3000/api/health', (r) => {process.exit(r.statusCode === 200 ? 0 : 1)})" || exit 1

# Start the application
CMD ["npm", "start"]