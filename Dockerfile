FROM node:18-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Copy dependency files
COPY package.json package-lock.json* ./

# Install ALL dependencies (including devDependencies needed for build)
RUN npm ci && \
    npm cache clean --force

FROM node:18-alpine AS builder
WORKDIR /app

# Copy dependencies from deps stage
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Disable telemetry
ENV NEXT_TELEMETRY_DISABLED 1

# Build the application
RUN npm run build

# Install only production dependencies for runtime
RUN npm ci --only=production && \
    npm cache clean --force

FROM node:18-alpine AS runner
WORKDIR /app

# Security: Set production environment
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Security: Create non-root user
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# Security: Remove unnecessary packages and update
RUN apk upgrade --no-cache && \
    apk del --no-cache apk-tools && \
    rm -rf /var/cache/apk/*

# Copy built application with correct ownership
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder --chown=nextjs:nodejs /app/node_modules ./node_modules
COPY --from=builder --chown=nextjs:nodejs /app/package.json ./package.json
COPY --from=builder --chown=nextjs:nodejs /app/public ./public

# Security: Set read-only file system where possible
RUN chown -R nextjs:nodejs /app && \
    chmod -R 555 /app && \
    chmod -R 755 /app/.next

# Switch to non-root user
USER nextjs

# Security: Don't expose unnecessary information
LABEL maintainer="lawcopilot"
LABEL description="Law Copilot Landing Page"

# Expose port
EXPOSE 3000
ENV PORT=3000

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD node -e "require('http').get('http://localhost:3000', (r) => {process.exit(r.statusCode === 200 ? 0 : 1)})" || exit 1

# Start the application
CMD ["npm", "start"]
