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
- Comprehensive mock database with 90+ tables (tb_*.ts files)
- Flat table structure with direct exports from each file
- UUID mapping system via `mapping.uuid.ts` for legacy ID compatibility
- Constants and configurations in `const.ts`
- Main export aggregator in `index.ts` with organized exports by domain
- All mock data is in-memory (no persistent storage)
- Helper utilities for filtering, pagination, sorting, and searching mock data

### Path Aliases (tsconfig.json)
```typescript
"@/*": ["./src/*"]           // General source files
"@mockdata/*": ["./src/mockdata/*"]  // Mock data and tables
"@libs/*": ["./src/libs/*"]          // Shared libraries
"@httpdocs/*": ["./src/httpdocs/*"]  // HTTP documentation
```

### Shared Libraries (`src/libs/`)
- **`res.error.ts`** - Standardized error response functions (resSuccess, resError, resBadRequest, resUnauthorized, etc.)
- **`header.ts`** - Header validation utilities (CheckHeaderHasAppId, CheckHeaderHasAccessToken)
- **`response.paginate.ts`** - Pagination utilities for API responses
- **`calculate.priceinfo.ts`** - Price calculation utilities
- **`utils.ts`** - General utility functions

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
- Each table exports data arrays directly (no class-based CRUD)
- Use `UUID_MAPPING` from `mapping.uuid.ts` for converting legacy IDs to UUIDs
- Access all mock data through central `src/mockdata/index.ts` export
- Import with domain prefixes: `import { tbUser, tbProduct, const as constants } from '@mockdata/index'`
- Helper functions available: `filterByBusinessUnit()`, `paginateMockData()`, `searchMockData()`, `sortMockData()`

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
- Check `x-app-id` header for protected endpoints using `CheckHeaderHasAppId()` from `@libs/header`
- Check Bearer token using `CheckHeaderHasAccessToken()` from `@libs/header`
- Use `@mockdata/const` constants for APP_ID validation (PARAM_X_APP_ID)
- Return standardized error responses: `resSuccess()`, `resError()`, `resBadRequest()`, `resUnauthorized()`, `resNotFound()`, `resInternalServerError()`, `resNotImplemented()` from `@libs/res.error`
- Handle Sentry error reporting via `instrument.ts` setup (currently disabled)

## Environment Configuration

- `NODE_ENV` - Environment (development/production)
- `PORT` - Server port (default: 4000)
- `JWT_SECRET` - JWT signing secret (defaults to "secret" for development)

## Production Deployment

- Configured for Render.com deployment via `render.yaml`
- Docker support with multi-stage build
- Production URL: https://mock-backend-mobile.onrender.com
- Build artifacts in `./dist` directory

## Common Patterns & Examples

### Creating a New API Endpoint

```typescript
import { Elysia, t } from "elysia";
import { jwt } from "@elysiajs/jwt";
import { CheckHeaderHasAppId, CheckHeaderHasAccessToken } from "@libs/header";
import { resSuccess, resBadRequest, resUnauthorized } from "@libs/res.error";
import { tbProduct } from "@mockdata/index";
import { PARAM_X_APP_ID } from "@mockdata/const";

export default (app: Elysia) =>
  app
    .use(jwt({ name: "jwt", secret: process.env.JWT_SECRET || "secret" }))
    .get(
      "/api/products/:id",
      async (ctx) => {
        // Validate headers
        const { error: appIdError } = CheckHeaderHasAppId(ctx.headers);
        if (appIdError) {
          ctx.set.status = 400;
          return appIdError;
        }

        const { error: authError } = await CheckHeaderHasAccessToken(ctx.headers, ctx.jwt);
        if (authError) {
          ctx.set.status = 401;
          return authError;
        }

        // Business logic
        const product = tbProduct.products.find(p => p.id === ctx.params.id);
        if (!product) {
          ctx.set.status = 404;
          return { message: "Product not found" };
        }

        return resSuccess(product);
      },
      {
        detail: {
          tags: ["products"],
          summary: "Get product by ID",
          description: "Retrieve a single product by its ID",
          parameters: [PARAM_X_APP_ID],
          security: [{ Bearer: [] }]
        }
      }
    );
```

### Working with Mock Data

```typescript
// Import mock data
import { tbUser, tbProduct, const as constants } from '@mockdata/index';
import { filterByBusinessUnit, paginateMockData } from '@mockdata/index';

// Access data arrays
const allUsers = tbUser.users;
const allProducts = tbProduct.products;

// Filter by business unit
const buProducts = filterByBusinessUnit(allProducts, 'BU001');

// Paginate results
const page1 = paginateMockData(allProducts, 1, 10);
// Returns: { data: [...], total: 100, page: 1, limit: 10, totalPages: 10 }
```

### Error Handling Pattern

```typescript
try {
  // Business logic here
  return resSuccess(data);
} catch (error) {
  return resInternalServerError(
    error instanceof Error ? error.message : "Unknown error"
  );
}
```