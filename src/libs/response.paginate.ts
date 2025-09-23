/**
 * Pagination response utilities and interfaces
 *
 * @deprecated This file is deprecated. Please use the unified response system from '@/libs/res.error'
 * which includes `resSuccessWithPaginate` with standardized naming and enhanced functionality.
 *
 * Migration guide:
 * - Replace `ResponsePaginate<T>` with `PaginatedApiResponse<T>` from '@/libs/res.error'
 * - Replace `resSuccessWithPaginate` from this file with the one from '@/libs/res.error'
 * - Update pagination field names: `perpage` → `limit`, `pages` → `totalPages`
 */

// Legacy interface - use PaginatedApiResponse from '@/libs/res.error' instead
export interface ResponsePaginate<T> {
  data: T[];
  paginate: {
    total: number;
    page: number;
    perpage: number;
    pages: number;
  };
}

// Enhanced pagination metadata interface
export interface PaginationMeta {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
  nextPage: number | null;
  prevPage: number | null;
}

// Enhanced pagination response interface
export interface EnhancedPaginatedResponse<T> {
  data: T[];
  pagination: PaginationMeta;
  status: number;
  message: string;
  timestamp: string;
  success: true;
}

/**
 * Calculates pagination metadata
 * @param total - Total number of items
 * @param page - Current page number (1-based)
 * @param limit - Items per page
 * @returns Complete pagination metadata
 */
export const calculatePaginationMeta = (
  total: number,
  page: number,
  limit: number
): PaginationMeta => {
  // Validate inputs
  const validatedTotal = Math.max(0, total);
  const validatedPage = Math.max(1, page);
  const validatedLimit = Math.max(1, limit);

  const totalPages = Math.ceil(validatedTotal / validatedLimit);
  const hasNextPage = validatedPage < totalPages;
  const hasPrevPage = validatedPage > 1;
  const nextPage = hasNextPage ? validatedPage + 1 : null;
  const prevPage = hasPrevPage ? validatedPage - 1 : null;

  return {
    total: validatedTotal,
    page: validatedPage,
    limit: validatedLimit,
    totalPages,
    hasNextPage,
    hasPrevPage,
    nextPage,
    prevPage,
  };
};

/**
 * Creates pagination parameters for database queries
 * @param page - Current page number (1-based)
 * @param limit - Items per page
 * @returns Object with offset and limit for database queries
 */
export const createPaginationParams = (page: number, limit: number) => {
  const validatedPage = Math.max(1, page);
  const validatedLimit = Math.max(1, Math.min(100, limit)); // Max 100 items per page
  const offset = (validatedPage - 1) * validatedLimit;

  return {
    offset,
    limit: validatedLimit,
    page: validatedPage,
  };
};

/**
 * Validates pagination parameters
 * @param page - Page number
 * @param limit - Items per page
 * @returns Validation result with errors if any
 */
export const validatePaginationParams = (page: number, limit: number) => {
  const errors: string[] = [];

  if (!Number.isInteger(page) || page < 1) {
    errors.push('Page must be a positive integer starting from 1');
  }

  if (!Number.isInteger(limit) || limit < 1 || limit > 100) {
    errors.push('Limit must be a positive integer between 1 and 100');
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
};

/**
 * Legacy pagination response function
 * @deprecated Use `resSuccessWithPaginate` from '@/libs/res.error' instead
 *
 * @param data - Array of data items
 * @param total - Total number of items (default: 0)
 * @param page - Current page number (default: 1)
 * @param perpage - Items per page (default: 10) - renamed to 'limit' in new version
 * @param pages - Total pages (default: 1) - auto-calculated in new version
 * @returns Legacy paginated response object
 */
export const resSuccessWithPaginate = <T>(
  data: T[],
  total: number = 0,
  page: number = 1,
  perpage: number = 10,
  pages: number = 1
): ResponsePaginate<T> => {
  // Validate inputs
  const validatedTotal = Math.max(0, total);
  const validatedPage = Math.max(1, page);
  const validatedPerpage = Math.max(1, perpage);
  const calculatedPages = Math.ceil(validatedTotal / validatedPerpage);

  return {
    data,
    paginate: {
      total: validatedTotal,
      page: validatedPage,
      perpage: validatedPerpage,
      pages: pages > 0 ? pages : calculatedPages,
    },
  };
};

/**
 * Enhanced pagination response function with improved metadata
 * @param data - Array of data items
 * @param total - Total number of items
 * @param page - Current page number
 * @param limit - Items per page
 * @param message - Success message (default: "Success")
 * @returns Enhanced paginated response with full metadata
 */
export const resEnhancedPaginate = <T>(
  data: T[],
  total: number,
  page: number,
  limit: number,
  message: string = "Success"
): EnhancedPaginatedResponse<T> => {
  const pagination = calculatePaginationMeta(total, page, limit);

  return {
    data,
    pagination,
    status: 200,
    message,
    timestamp: new Date().toISOString(),
    success: true as const,
  };
};

/**
 * Utility to paginate an array in memory
 * @param array - Array to paginate
 * @param page - Current page number (1-based)
 * @param limit - Items per page
 * @returns Paginated subset of the array with metadata
 */
export const paginateArray = <T>(
  array: T[],
  page: number,
  limit: number
): EnhancedPaginatedResponse<T> => {
  const { offset, limit: validatedLimit, page: validatedPage } = createPaginationParams(page, limit);
  const total = array.length;
  const data = array.slice(offset, offset + validatedLimit);

  return resEnhancedPaginate(data, total, validatedPage, validatedLimit);
};
