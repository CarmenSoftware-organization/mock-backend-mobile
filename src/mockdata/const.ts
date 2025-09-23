/**
 * Application Constants
 *
 * Central configuration file containing all application-wide constants,
 * configuration values, and type definitions for the Mock Backend API.
 *
 * This file provides:
 * - Authentication constants
 * - API configuration
 * - Business logic constants
 * - Environment-specific settings
 * - Type-safe parameter definitions
 */

// =============================================================================
// TYPE DEFINITIONS
// =============================================================================

/**
 * Supported parameter locations for API documentation
 */
export type ParameterLocation = 'header' | 'query' | 'path' | 'body';

/**
 * Schema types for API parameters
 */
export type SchemaType = 'string' | 'number' | 'integer' | 'boolean' | 'array' | 'object';

/**
 * Generic parameter definition for API documentation
 */
export interface ApiParameterDefinition {
  readonly name: string;
  readonly in: ParameterLocation;
  readonly required: boolean;
  readonly description: string;
  readonly schema: {
    readonly type: SchemaType;
    readonly pattern?: string;
    readonly example?: any;
    readonly enum?: readonly string[];
    readonly minimum?: number;
    readonly maximum?: number;
    readonly format?: string;
  };
}

/**
 * Environment configuration type
 */
export interface EnvironmentConfig {
  readonly isDevelopment: boolean;
  readonly isProduction: boolean;
  readonly isTest: boolean;
  readonly nodeEnv: string;
}

/**
 * Application metadata interface
 */
export interface ApplicationMetadata {
  readonly name: string;
  readonly version: string;
  readonly description: string;
  readonly author: string;
  readonly license: string;
}

// =============================================================================
// ENVIRONMENT CONFIGURATION
// =============================================================================

/**
 * Current environment configuration
 */
export const ENVIRONMENT: EnvironmentConfig = {
  isDevelopment: process.env.NODE_ENV === 'development',
  isProduction: process.env.NODE_ENV === 'production',
  isTest: process.env.NODE_ENV === 'test',
  nodeEnv: process.env.NODE_ENV || 'development',
} as const;

/**
 * Application metadata
 */
export const APP_METADATA: ApplicationMetadata = {
  name: 'Mock Backend API',
  version: '1.0.0',
  description: 'Mock Backend API for mobile application development',
  author: 'Carmen Software',
  license: 'MIT',
} as const;

// =============================================================================
// AUTHENTICATION CONSTANTS
// =============================================================================

/**
 * Header name for application ID authentication
 */
export const APP_ID_HEADER = 'x-app-id' as const;

/**
 * Default application ID value for authentication
 * In production, this should be replaced with a proper UUID
 */
export const APP_ID_VALUE = '00000000-0000-0000-0000-000000000000' as const;

/**
 * Authorization header name
 */
export const AUTHORIZATION_HEADER = 'authorization' as const;

/**
 * Bearer token prefix
 */
export const BEARER_PREFIX = 'Bearer' as const;

/**
 * JWT token expiration time (in seconds)
 */
export const JWT_EXPIRATION_TIME = 86400; // 24 hours

/**
 * Refresh token expiration time (in seconds)
 */
export const REFRESH_TOKEN_EXPIRATION_TIME = 604800; // 7 days

// =============================================================================
// API PARAMETER DEFINITIONS
// =============================================================================

/**
 * X-App-ID header parameter definition for OpenAPI documentation
 */
export const PARAM_X_APP_ID: ApiParameterDefinition = {
  name: APP_ID_HEADER,
  in: 'header',
  required: true,
  description: 'Application ID for authentication - Required for all authenticated endpoints',
  schema: {
    type: 'string',
    pattern: '^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$',
    example: APP_ID_VALUE,
    format: 'uuid',
  },
} as const;

/**
 * Authorization header parameter definition
 */
export const PARAM_AUTHORIZATION: ApiParameterDefinition = {
  name: AUTHORIZATION_HEADER,
  in: 'header',
  required: true,
  description: 'Bearer token for user authentication',
  schema: {
    type: 'string',
    pattern: '^Bearer [A-Za-z0-9-_]+\\.[A-Za-z0-9-_]+\\.[A-Za-z0-9-_]+$',
    example: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
  },
} as const;

/**
 * Business unit code query parameter
 */
export const BU_CODE_QUERY = 'bu_code' as const;

/**
 * Business unit code parameter definition
 */
export const PARAM_BU_CODE: ApiParameterDefinition = {
  name: BU_CODE_QUERY,
  in: 'query',
  required: true,
  description: 'Business unit code for filtering data',
  schema: {
    type: 'string',
    pattern: '^[A-Z0-9_]{2,10}$',
    example: 'BU_001',
  },
} as const;

// =============================================================================
// API CONFIGURATION
// =============================================================================

/**
 * Default server port
 */
export const DEFAULT_PORT = 4000 as const;

/**
 * API base path
 */
export const API_BASE_PATH = '/api' as const;

/**
 * System API base path
 */
export const API_SYSTEM_BASE_PATH = '/api-system' as const;

/**
 * Swagger documentation path
 */
export const SWAGGER_PATH = '/swagger' as const;

/**
 * Health check endpoint path
 */
export const HEALTH_CHECK_PATH = '/health' as const;

/**
 * Default pagination limits
 */
export const PAGINATION = {
  DEFAULT_PAGE: 1,
  DEFAULT_LIMIT: 10,
  MAX_LIMIT: 100,
  MIN_LIMIT: 1,
} as const;

/**
 * Request timeout in milliseconds
 */
export const REQUEST_TIMEOUT = 30000 as const; // 30 seconds

/**
 * Rate limiting configuration
 */
export const RATE_LIMIT = {
  WINDOW_MS: 15 * 60 * 1000, // 15 minutes
  MAX_REQUESTS: 1000, // per window
} as const;

// =============================================================================
// BUSINESS LOGIC CONSTANTS
// =============================================================================

/**
 * Default demo password for all users
 */
export const DEMO_PASSWORD = '123456' as const;

/**
 * Default currency code
 */
export const DEFAULT_CURRENCY = 'THB' as const;

/**
 * Default language code
 */
export const DEFAULT_LANGUAGE = 'th' as const;

/**
 * Default timezone
 */
export const DEFAULT_TIMEZONE = 'Asia/Bangkok' as const;

/**
 * Status values for various entities
 */
export const STATUS = {
  ACTIVE: 'active',
  INACTIVE: 'inactive',
  PENDING: 'pending',
  APPROVED: 'approved',
  REJECTED: 'rejected',
  DRAFT: 'draft',
  COMPLETED: 'completed',
  CANCELLED: 'cancelled',
} as const;

/**
 * Document types
 */
export const DOCUMENT_TYPES = {
  PURCHASE_REQUEST: 'purchase_request',
  PURCHASE_ORDER: 'purchase_order',
  GOOD_RECEIVED_NOTE: 'good_received_note',
  STORE_REQUISITION: 'store_requisition',
  PHYSICAL_COUNT: 'physical_count',
  SPOT_CHECK: 'spot_check',
  CREDIT_NOTE: 'credit_note',
} as const;

/**
 * User roles
 */
export const USER_ROLES = {
  ADMIN: 'admin',
  MANAGER: 'manager',
  USER: 'user',
  VIEWER: 'viewer',
} as const;

/**
 * Priority levels
 */
export const PRIORITY_LEVELS = {
  LOW: 'low',
  MEDIUM: 'medium',
  HIGH: 'high',
  URGENT: 'urgent',
} as const;

// =============================================================================
// VALIDATION PATTERNS
// =============================================================================

/**
 * Regular expression patterns for validation
 */
export const VALIDATION_PATTERNS = {
  UUID: /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i,
  EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  PHONE: /^\+?[\d\s()-]{8,15}$/,
  BUSINESS_UNIT_CODE: /^[A-Z0-9_]{2,10}$/,
  PRODUCT_SKU: /^[A-Z0-9-_]{3,20}$/,
  DOCUMENT_NUMBER: /^[A-Z0-9-]{5,20}$/,
} as const;

/**
 * Field length limits
 */
export const FIELD_LIMITS = {
  NAME: { MIN: 1, MAX: 100 },
  DESCRIPTION: { MIN: 0, MAX: 500 },
  CODE: { MIN: 2, MAX: 20 },
  ADDRESS: { MIN: 5, MAX: 200 },
  PHONE: { MIN: 8, MAX: 15 },
  EMAIL: { MIN: 5, MAX: 100 },
  PASSWORD: { MIN: 6, MAX: 50 },
} as const;

// =============================================================================
// ERROR MESSAGES
// =============================================================================

/**
 * Standard error messages
 */
export const ERROR_MESSAGES = {
  UNAUTHORIZED: 'Authentication required',
  FORBIDDEN: 'Access denied',
  NOT_FOUND: 'Resource not found',
  BAD_REQUEST: 'Invalid request data',
  INTERNAL_ERROR: 'Internal server error',
  VALIDATION_FAILED: 'Validation failed',
  INVALID_APP_ID: 'Invalid or missing x-app-id header',
  INVALID_TOKEN: 'Invalid or expired token',
  BUSINESS_UNIT_NOT_FOUND: 'Business unit not found',
  USER_NOT_FOUND: 'User not found',
  DUPLICATE_RESOURCE: 'Resource already exists',
} as const;

// =============================================================================
// SUCCESS MESSAGES
// =============================================================================

/**
 * Standard success messages
 */
export const SUCCESS_MESSAGES = {
  CREATED: 'Resource created successfully',
  UPDATED: 'Resource updated successfully',
  DELETED: 'Resource deleted successfully',
  LOGIN_SUCCESS: 'Login successful',
  LOGOUT_SUCCESS: 'Logout successful',
  DATA_RETRIEVED: 'Data retrieved successfully',
} as const;

// =============================================================================
// CONTENT TYPES
// =============================================================================

/**
 * MIME content types
 */
export const CONTENT_TYPES = {
  JSON: 'application/json',
  XML: 'application/xml',
  CSV: 'text/csv',
  PDF: 'application/pdf',
  EXCEL: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  TEXT: 'text/plain',
} as const;

// =============================================================================
// CACHE CONFIGURATION
// =============================================================================

/**
 * Cache durations in seconds
 */
export const CACHE_DURATION = {
  SHORT: 60, // 1 minute
  MEDIUM: 300, // 5 minutes
  LONG: 3600, // 1 hour
  VERY_LONG: 86400, // 24 hours
} as const;

// =============================================================================
// EXPORT TYPES
// =============================================================================

/**
 * Export all constant types for external use
 */
export type StatusType = typeof STATUS[keyof typeof STATUS];
export type DocumentType = typeof DOCUMENT_TYPES[keyof typeof DOCUMENT_TYPES];
export type UserRole = typeof USER_ROLES[keyof typeof USER_ROLES];
export type PriorityLevel = typeof PRIORITY_LEVELS[keyof typeof PRIORITY_LEVELS];

// =============================================================================
// UTILITY FUNCTIONS
// =============================================================================

/**
 * Validates if a string matches a given validation pattern
 * @param value - String to validate
 * @param pattern - Pattern to match against
 * @returns True if valid, false otherwise
 */
export const validatePattern = (value: string, pattern: RegExp): boolean => {
  return typeof value === 'string' && pattern.test(value);
};

/**
 * Validates if a value is within specified field limits
 * @param value - String to validate
 * @param limits - Object with MIN and MAX properties
 * @returns True if valid, false otherwise
 */
export const validateFieldLength = (
  value: string,
  limits: { MIN: number; MAX: number }
): boolean => {
  return typeof value === 'string' &&
         value.length >= limits.MIN &&
         value.length <= limits.MAX;
};

/**
 * Gets environment-specific configuration value
 * @param key - Configuration key
 * @param defaultValue - Default value if not found
 * @returns Configuration value
 */
export const getEnvConfig = (key: string, defaultValue?: string): string => {
  return process.env[key] || defaultValue || '';
};
