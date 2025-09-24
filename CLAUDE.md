# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

**Project**: Mock Backend Mobile
**Version**: 1.0.50
**Last Updated**: January 2025

## Development Commands

### Core Commands
- `bun run dev` - Start development server with hot reload (recommended for development)
- `bun run start` - Start server without watch mode
- `bun run build` - Build for production (outputs to `./dist`)
- `bun run start:prod` - Start production server from built files
- `bun install` - Install dependencies

### Data Management Commands
- `bun run routes:gen` - Generate routes automatically
- `bun run export-postgres` - Export data from PostgreSQL to JSON
- `bun run import-mock-data` - Import JSON data to TypeScript mock data
- `bun run test-db` - Test database connection and check tables

### Code Quality & Validation
- `bun run type-check` - Run TypeScript type checking (no emit)
- `bun run format` - Format code using Prettier
- `bun run clean` - Clean build artifacts

### Testing & Linting
- Tests: Currently not implemented (`echo "Error: no test specified"`)
- Linting: Currently not configured (`echo "Linting not configured yet"`)

## Project Architecture

### Tech Stack
- **Runtime**: Bun (JavaScript runtime and package manager)
- **Framework**: Elysia (fast web framework for Bun)
- **Language**: TypeScript with strict type checking
- **API Documentation**: Swagger/OpenAPI integration
- **Authentication**: JWT with @elysiajs/jwt
- **CORS**: Enabled via @elysiajs/cors
- **Schema Validation**: Zod for runtime validation

### Application Structure

**Entry Point**: `src/index.ts`
- Sets up Elysia app with Swagger documentation
- Configures CORS, Bearer token auth, and JWT
- Default port: 4000 (configurable via PORT env var)
- Serves Swagger docs at `/swagger`
- Integrated with Sentry for error monitoring

**Route Architecture**: `src/routes/index.ts`
- Central route aggregator that applies all route modules
- Two main API categories:
  - `/api/*` - Main business API endpoints
  - `/api-system/*` - System-level API endpoints

**Mock Data System**: `src/mockdata/`
- Comprehensive mock database with 80+ tables (tb_*.ts files)
- Flat table structure with direct exports from each file
- UUID mapping system via `mapping.uuid.ts` for legacy ID compatibility  
- Constants and configurations in `const.ts`
- Main export aggregator in `index.ts`
- All mock data is in-memory (no persistent storage)

### Path Aliases (tsconfig.json)
```typescript
"@/*": ["./src/*"]           // General source files
"@mockdata/*": ["./src/mockdata/*"]  // Mock data and tables
"@libs/*": ["./src/libs/*"]          // Shared libraries
"@httpdocs/*": ["./src/httpdocs/*"]  // HTTP documentation
```

### Key API Patterns

**Authentication Flow**:
- Login requires `x-app-id` header with specific UUID
- Returns JWT access_token and refresh_token
- Demo password: "123456" for all users
- Token verification via `jwt.verify()`

**Route Structure**:
- Each route module exports a function that takes Elysia app
- Uses Elysia's built-in validation with Zod schemas
- Swagger documentation is embedded in route definitions
- Error responses use standardized format from `@libs/res.error`

**Mock Data Access**:
- Tables follow `tb_{entity_name}.ts` naming convention
- Each table exports data arrays directly (no CRUD pattern)
- Use `UUID_MAPPING` from `mapping.uuid.ts` for converting legacy IDs to UUIDs
- Access all mock data through central `src/mockdata/index.ts` export

### Business Domain Coverage
The API covers comprehensive ERP functionality:
- **Authentication & User Management** - Login, permissions, user profiles
- **Business Structure** - Business units, departments, clusters
- **Product Management** - Products, categories, pricing, inventory
- **Procurement** - Purchase requests/orders, good received notes, store requisitions
- **Financial** - Credit terms, currencies, tax profiles, credit notes
- **System Administration** - Workflows, configurations, notifications

### Development Guidelines

**Adding New Endpoints**:
1. Create route file in appropriate `/api/` or `/api-system/` directory
2. Import and register route in `src/routes/index.ts`
3. Use mock data from `@mockdata/index` for responses
4. Include Swagger documentation in route definitions
5. Follow existing patterns for JWT authentication and error handling

**Mock Data Modifications**:
- Tables are defined in `src/mockdata/tb_*.ts`
- Export raw data arrays directly from each file
- Update `src/mockdata/index.ts` to export new tables
- Use UUID format for all IDs (leverage UUID_MAPPING if needed)
- Use data import/export scripts for PostgreSQL integration

**Authentication Integration**:
- Import JWT verification from route context
- Check `x-app-id` header for protected endpoints
- Use `@mockdata/index` constants for APP_ID validation
- Return standardized error responses from utility functions
- Handle Sentry error reporting via `instrument.ts` setup

## Environment Configuration

- `NODE_ENV` - Environment (development/production)
- `PORT` - Server port (default: 4000)
- `JWT_SECRET` - JWT signing secret (defaults to "secret" for development)

## Production Deployment

- Configured for Render.com deployment via `render.yaml`
- Docker support with multi-stage build
- Production URL: https://mock-backend-mobile.onrender.com
- Build artifacts in `./dist` directory