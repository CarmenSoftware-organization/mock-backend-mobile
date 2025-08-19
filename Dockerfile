# Multi-stage build สำหรับ Elysia + Bun
FROM oven/bun:1-alpine AS base

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json bun.lock ./

# Install dependencies
RUN bun install --frozen-lockfile

# Copy source code
COPY . .

# Build stage
FROM base AS build

# Build the application
RUN bun run build

# Production stage
FROM oven/bun:1-alpine AS production

# Set working directory
WORKDIR /app

# Copy built application
COPY --from=build --chown=bun:nodejs /app/dist ./dist
COPY --from=build --chown=bun:nodejs /app/src/data ./src/data
COPY --from=build --chown=bun:nodejs /app/package.json ./

# Install only production dependencies
RUN bun install --frozen-lockfile --production

# Switch to bun user (already exists in base image)
USER bun

# Expose port
EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD bun run --cwd /app dist/index.js || exit 1

# Start the application
CMD ["bun", "run", "dist/index.js"]
