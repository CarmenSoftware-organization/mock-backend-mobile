# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is a mock backend API built with **Elysia** framework and **Bun** runtime. It provides RESTful API endpoints for mobile application development with TypeScript type safety, file-based JSON persistence, and Docker containerization.

**Key Technologies:**
- **Runtime**: Bun (fast JavaScript runtime)
- **Framework**: Elysia (high-performance web framework)
- **Language**: TypeScript with strict typing
- **Data Storage**: File-based JSON database (`src/data/users.json`)
- **Containerization**: Docker with multi-stage builds

## Architecture Overview

The application follows a modular, layered architecture:

**Core Structure:**
- `src/index.ts` - Main application entry point with middleware setup (CORS, Swagger, error handling)
- `src/config.ts` - Centralized configuration with environment variable support
- `src/routes/` - API route handlers grouped by resource
- `src/types/` - TypeScript type definitions for data models
- `src/utils/` - Utility functions (file I/O operations)
- `src/data/` - JSON file-based data storage

**Key Architectural Patterns:**
- **Plugin-based middleware** using Elysia's plugin system
- **Type-safe validation** with Elysia's built-in validation
- **File-based persistence** with atomic read/write operations
- **Error boundary** with global error handling
- **Resource grouping** with route prefixes and modular organization

## Common Development Commands

### Local Development
```bash
# Install dependencies
bun install

# Run with hot reload (development)
bun run dev

# Type checking
bun run type-check

# Build for production
bun run build

# Run production build
bun run start

# Clean build artifacts
bun run clean
```

### Docker Operations
```bash
# Quick deployment (build + run production)
make deploy

# Individual operations
make build          # Build Docker image
make run            # Run production container
make run-dev        # Run development container with hot reload
make stop           # Stop all containers
make clean          # Remove containers and images
make logs           # View container logs

# Docker Compose alternatives
docker-compose up -d api                           # Production
docker-compose --profile dev up -d api-dev        # Development
```

### API Testing
```bash
# Test all endpoints with formatted JSON
make test

# Manual endpoint testing
curl http://localhost:3000/health
curl http://localhost:3000/api/users
curl -X POST http://localhost:3000/api/users -H "Content-Type: application/json" -d '{"name":"Test User","email":"test@example.com"}'
```

## Development Environment Setup

**Port Configuration:**
- Production: `localhost:3000` (configurable via `PORT` env var)
- Development Docker: `localhost:3001` (maps to container port 3000)
- Default in config.ts: `4000` (note: differs from README examples)

**Environment Variables** (see `env.example`):
```bash
PORT=3000                    # Server port
HOST=0.0.0.0                # Server host
NODE_ENV=development         # Environment mode
API_VERSION=v1               # API versioning
API_PREFIX=/api              # API route prefix
CORS_ORIGIN=http://localhost:3000  # CORS configuration
```

## Key Development Patterns

**Route Definition Pattern:**
```typescript
// Each route module exports an Elysia instance with validation
export const usersRoutes = new Elysia({ prefix: "/users" })
  .get("/", handler)
  .post("/", { body: validation }, handler)
```

**Data Persistence Pattern:**
- All data operations go through `utils/fileDb.ts`
- JSON files in `src/data/` directory serve as database
- Atomic read/write operations with proper error handling
- Data is mounted as Docker volume for persistence

**Type Safety Approach:**
- Strict TypeScript configuration
- Elysia built-in validation with `t.Object()` schemas
- Separate types for API inputs (`CreateUserInput`) and data models (`User`)

## API Structure

**Base Endpoints:**
- `GET /` - API information and available endpoints
- `GET /health` - Health check with system info
- `GET /swagger` - Interactive API documentation

**Users API** (`/api/users`):
- Full CRUD operations with validation
- ID-based routing with numeric validation
- Automatic ID generation and timestamp management

## File System Considerations

**Important Files:**
- `src/data/users.json` - Mock database (should persist across container restarts)
- `Makefile` - Automation scripts for Docker operations
- `docker-compose.yml` - Multi-environment container orchestration

**Build Artifacts:**
- `dist/` directory contains compiled output
- Multi-stage Docker build separates development and production dependencies
