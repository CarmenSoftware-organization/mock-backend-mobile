/**
 * Standard API response utilities for consistent error handling and success responses
 * Provides type-safe response objects with proper HTTP status codes and timestamps
 */

// Type definitions for API responses
export interface BaseApiResponse {
  status: number;
  success: boolean;
  message: string;
  timestamp: string;
}

export interface ApiErrorResponse extends BaseApiResponse {
  success: false;
}

export interface ApiSuccessResponse<T = any> extends BaseApiResponse {
  success: true;
}

export interface PaginatedApiResponse<T = any> extends ApiSuccessResponse<T[]> {
  data: T[];
  pagination: {
    total: number;
    page: number;
    perpage: number;
    pages: number;
  };
}

// HTTP Status Code Constants
export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  CONFLICT: 409,
  UNPROCESSABLE_ENTITY: 422,
  INTERNAL_SERVER_ERROR: 500,
  NOT_IMPLEMENTED: 501,
  SERVICE_UNAVAILABLE: 503,
} as const;

/**
 * Generates a timestamp for API responses
 * @returns ISO string timestamp
 */
const getTimestamp = (): string => new Date().toISOString();

/**
 * Creates a base success response object
 * @param status - HTTP status code
 * @param message - Response message
 * @returns Base success response object
 */
const createSuccessResponse = (
  status: number,
  message: string
): ApiSuccessResponse => ({
  status,
  message,
  success: true,
  timestamp: getTimestamp(),
});

/**
 * Creates a base error response object
 * @param status - HTTP status code
 * @param message - Response message
 * @returns Base error response object
 */
const createErrorResponse = (
  status: number,
  message: string
): ApiErrorResponse => ({
  status,
  message,
  success: false as const,
  timestamp: getTimestamp(),
});

// Success Response Functions

/**
 * Creates a standard success response
 * @param message - Success message (default: "Success")
 * @returns Success response object
 */
export const resSuccess = (message: string = "Success"): ApiSuccessResponse =>
  createSuccessResponse(HTTP_STATUS.OK, message);

/**
 * Creates a success response with data
 * @param data - Response data
 * @param message - Success message (default: "Success")
 * @returns Success response with data
 */
export const resSuccessWithData = <T = any>(
  data: T,
  message: string = "Success"
): ApiSuccessResponse<T> => ({
  data,
  ...createSuccessResponse(HTTP_STATUS.OK, message),
});

/**
 * Creates a success response for resource creation
 * @param data - Created resource data
 * @param message - Success message (default: "Resource created successfully")
 * @returns Created response with data
 */
export const resCreated = <T = any>(
  data: T,
  message: string = "Resource created successfully"
): ApiSuccessResponse<T> => ({
  ...createSuccessResponse(HTTP_STATUS.CREATED, message),
  data,
});

/**
 * Creates a success response with pagination
 * @param data - Array of data items
 * @param total - Total number of items
 * @param page - Current page number
 * @param perpage - Items per page
 * @param message - Success message (default: "Success")
 * @returns Paginated response
 */
export const resSuccessWithPaginate = <T = any>(
  data: T[],
  total: number,
  page: number,
  perpage: number,
  message: string = "Success"
): PaginatedApiResponse<T> => ({
  ...createSuccessResponse(HTTP_STATUS.OK, message),
  data,
  pagination: {
    total,
    page,
    perpage,
    pages: Math.ceil(total / perpage),
  },
});

// Error Response Functions

/**
 * Creates a bad request error response (400)
 * @param message - Error message (default: "Bad Request")
 * @returns Bad request error response
 */
export const resBadRequest = (message: string = "Bad Request"): ApiErrorResponse =>
  createErrorResponse(HTTP_STATUS.BAD_REQUEST, message);

/**
 * Creates an unauthorized error response (401)
 * @param message - Error message (default: "Unauthorized")
 * @returns Unauthorized error response
 */
export const resUnauthorized = (message: string = "Unauthorized"): ApiErrorResponse =>
  createErrorResponse(HTTP_STATUS.UNAUTHORIZED, message);

/**
 * Creates a forbidden error response (403)
 * @param message - Error message (default: "Forbidden")
 * @returns Forbidden error response
 */
export const resForbidden = (message: string = "Forbidden"): ApiErrorResponse =>
  createErrorResponse(HTTP_STATUS.FORBIDDEN, message);

/**
 * Creates a not found error response (404)
 * @param message - Error message (default: "Resource not found")
 * @returns Not found error response
 */
export const resNotFound = (message: string = "Resource not found"): ApiErrorResponse =>
  createErrorResponse(HTTP_STATUS.NOT_FOUND, message);

/**
 * Creates a method not allowed error response (405)
 * @param message - Error message (default: "Method not allowed")
 * @returns Method not allowed error response
 */
export const resMethodNotAllowed = (message: string = "Method not allowed"): ApiErrorResponse =>
  createErrorResponse(HTTP_STATUS.METHOD_NOT_ALLOWED, message);

/**
 * Creates a conflict error response (409)
 * @param message - Error message (default: "Resource conflict")
 * @returns Conflict error response
 */
export const resConflict = (message: string = "Resource conflict"): ApiErrorResponse =>
  createErrorResponse(HTTP_STATUS.CONFLICT, message);

/**
 * Creates an unprocessable entity error response (422)
 * @param message - Error message (default: "Unprocessable entity")
 * @returns Unprocessable entity error response
 */
export const resUnprocessableEntity = (message: string = "Unprocessable entity"): ApiErrorResponse =>
  createErrorResponse(HTTP_STATUS.UNPROCESSABLE_ENTITY, message);

/**
 * Creates an internal server error response (500)
 * @param message - Error message (default: "Internal server error")
 * @returns Internal server error response
 */
export const resInternalServerError = (message: string = "Internal server error"): ApiErrorResponse =>
  createErrorResponse(HTTP_STATUS.INTERNAL_SERVER_ERROR, message);

/**
 * Creates a not implemented error response (501)
 * @param message - Error message (default: "This endpoint is not implemented yet")
 * @returns Not implemented error response
 */
export const resNotImplemented = (message: string = "This endpoint is not implemented yet"): ApiErrorResponse => ({
  ...createErrorResponse(HTTP_STATUS.NOT_IMPLEMENTED, message),
  error: "Not Implemented",
});

/**
 * Creates a service unavailable error response (503)
 * @param message - Error message (default: "Service temporarily unavailable")
 * @returns Service unavailable error response
 */
export const resServiceUnavailable = (message: string = "Service temporarily unavailable"): ApiErrorResponse =>
  createErrorResponse(HTTP_STATUS.SERVICE_UNAVAILABLE, message);

/**
 * Creates a generic error response with custom status code
 * @param status - HTTP status code
 * @param message - Error message (default: "An error occurred")
 * @returns Error response with custom status
 */
export const resError = (status: number, message: string = "An error occurred"): ApiErrorResponse =>
  createErrorResponse(status, message);

/**
 * Creates an error response with additional data
 * @param status - HTTP status code
 * @param message - Error message
 * @param data - Additional error data (e.g., validation errors)
 * @returns Error response with data
 */
export const resErrorWithData = <T = any>(
  status: number,
  message: string,
  data: T
): ApiErrorResponse & { data: T } => ({
  ...createErrorResponse(status, message),
  data,
});

/**
 * Creates a validation error response with field-specific errors
 * @param errors - Object containing field validation errors
 * @param message - Error message (default: "Validation failed")
 * @returns Validation error response
 */
export const resValidationError = (
  errors: Record<string, string[]>,
  message: string = "Validation failed"
): ApiErrorResponse & { errors: Record<string, string[]> } => ({
  ...createErrorResponse(HTTP_STATUS.UNPROCESSABLE_ENTITY, message),
  errors,
});

// Legacy support - keep the old resNotImplemented as a constant for backward compatibility
export const resNotImplementedLegacy = {
  success: false,
  error: "Not Implemented",
  message: "This endpoint is not implemented yet",
  timestamp: getTimestamp(),
} as const;
