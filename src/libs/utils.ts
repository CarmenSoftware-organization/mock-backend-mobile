/**
 * Comprehensive utility functions for the application
 * Provides type-safe, validated utility functions for common operations
 */

// Type definitions
export interface DateFormatOptions {
  includeTime?: boolean;
  includeMilliseconds?: boolean;
  timezone?: string;
  locale?: string;
}

export interface RandomFloatOptions {
  decimals?: number;
  inclusive?: boolean;
}

export interface ValidationResult {
  isValid: boolean;
  errors: string[];
}

// Constants
const UUID_V4_REGEX = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Generates a cryptographically secure UUID v4
 * Uses crypto.getRandomValues() when available, falls back to Math.random()
 *
 * @returns A valid UUID v4 string
 */
export const generateId = (): string => {
  // Use crypto API if available (browser/Node.js with crypto)
  if (typeof crypto !== 'undefined' && crypto.getRandomValues) {
    const array = new Uint8Array(16);
    crypto.getRandomValues(array);

    // Set version (4) and variant bits according to RFC 4122
    array[6] = (array[6] & 0x0f) | 0x40; // Version 4
    array[8] = (array[8] & 0x3f) | 0x80; // Variant 10

    const hex = Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
    return [
      hex.slice(0, 8),
      hex.slice(8, 12),
      hex.slice(12, 16),
      hex.slice(16, 20),
      hex.slice(20, 32),
    ].join('-');
  }

  // Fallback to Math.random() (less secure but compatible)
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

/**
 * Validates if a string is a valid UUID v4
 *
 * @param uuid - String to validate
 * @returns True if valid UUID v4, false otherwise
 */
export const isValidUUID = (uuid: string): boolean => {
  return typeof uuid === 'string' && UUID_V4_REGEX.test(uuid);
};

/**
 * Generates a short ID (8 characters) for cases where full UUID is not needed
 *
 * @returns An 8-character alphanumeric string
 */
export const generateShortId = (): string => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < 8; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
};

/**
 * Gets the current timestamp in ISO format
 * Provides consistent timestamp formatting across the application
 *
 * @param options - Optional formatting options
 * @returns ISO timestamp string
 */
export const getCurrentTimestamp = (options?: DateFormatOptions): string => {
  const date = new Date();

  if (options?.timezone) {
    // Handle timezone conversion if needed
    return date.toLocaleString('en-CA', {
      timeZone: options.timezone,
      hour12: false
    }).replace(', ', 'T') + 'Z';
  }

  if (options?.includeMilliseconds === false) {
    return date.toISOString().split('.')[0] + 'Z';
  }

  return date.toISOString();
};

/**
 * Formats a date according to specified options
 *
 * @param date - Date to format
 * @param options - Formatting options
 * @returns Formatted date string
 */
export const formatDate = (date: Date | string | number, options?: DateFormatOptions): string => {
  const dateObj = new Date(date);

  if (isNaN(dateObj.getTime())) {
    throw new Error('Invalid date provided');
  }

  const locale = options?.locale || 'en-US';
  const timezone = options?.timezone || 'UTC';

  const formatOptions: Intl.DateTimeFormatOptions = {
    timeZone: timezone,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  };

  if (options?.includeTime !== false) {
    formatOptions.hour = '2-digit';
    formatOptions.minute = '2-digit';
    formatOptions.second = '2-digit';
    formatOptions.hour12 = false;
  }

  return dateObj.toLocaleString(locale, formatOptions);
};

/**
 * Generates a random integer between min and max (inclusive)
 * Includes input validation and improved randomness
 *
 * @param min - Minimum value (inclusive)
 * @param max - Maximum value (inclusive)
 * @returns Random integer between min and max
 */
export const getRandomInt = (min: number, max: number): number => {
  if (!Number.isInteger(min) || !Number.isInteger(max)) {
    throw new Error('Min and max must be integers');
  }

  if (min > max) {
    throw new Error('Min cannot be greater than max');
  }

  if (min === max) {
    return min;
  }

  // Use crypto for better randomness if available
  if (typeof crypto !== 'undefined' && crypto.getRandomValues) {
    const range = max - min + 1;
    const bytesNeeded = Math.ceil(Math.log2(range) / 8);
    const maxValue = Math.pow(256, bytesNeeded);
    const threshold = maxValue - (maxValue % range);

    let randomValue;
    do {
      const array = new Uint8Array(bytesNeeded);
      crypto.getRandomValues(array);
      randomValue = array.reduce((acc, byte, index) => acc + byte * Math.pow(256, index), 0);
    } while (randomValue >= threshold);

    return min + (randomValue % range);
  }

  // Fallback to Math.random()
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

/**
 * Generates a random floating-point number between min and max
 * Improved implementation with proper decimal handling
 *
 * @param min - Minimum value (inclusive)
 * @param max - Maximum value (exclusive by default)
 * @param options - Options for decimal places and inclusivity
 * @returns Random float between min and max
 */
export const getRandomFloat = (
  min: number,
  max: number,
  options: RandomFloatOptions = {}
): number => {
  if (typeof min !== 'number' || typeof max !== 'number') {
    throw new Error('Min and max must be numbers');
  }

  if (min >= max) {
    throw new Error('Min must be less than max');
  }

  const { decimals = 2, inclusive = false } = options;

  if (!Number.isInteger(decimals) || decimals < 0 || decimals > 10) {
    throw new Error('Decimals must be an integer between 0 and 10');
  }

  let randomValue = Math.random() * (max - min) + min;

  if (inclusive && Math.random() < 0.5) {
    randomValue = max;
  }

  return Number(randomValue.toFixed(decimals));
};

/**
 * Generates a random boolean value
 *
 * @param probability - Probability of returning true (0-1, default: 0.5)
 * @returns Random boolean
 */
export const getRandomBoolean = (probability: number = 0.5): boolean => {
  if (probability < 0 || probability > 1) {
    throw new Error('Probability must be between 0 and 1');
  }
  return Math.random() < probability;
};

/**
 * Selects a random element from an array
 *
 * @param array - Array to select from
 * @returns Random element from the array
 */
export const getRandomElement = <T>(array: T[]): T | undefined => {
  if (!Array.isArray(array)) {
    throw new Error('Input must be an array');
  }

  if (array.length === 0) {
    return undefined;
  }

  const randomIndex = getRandomInt(0, array.length - 1);
  return array[randomIndex];
};

/**
 * Shuffles an array using Fisher-Yates algorithm
 *
 * @param array - Array to shuffle
 * @returns New shuffled array (original array is not modified)
 */
export const shuffleArray = <T>(array: T[]): T[] => {
  if (!Array.isArray(array)) {
    throw new Error('Input must be an array');
  }

  const shuffled = [...array];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = getRandomInt(0, i);
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
};

/**
 * Deep clones an object using structured cloning when available
 *
 * @param obj - Object to clone
 * @returns Deep clone of the object
 */
export const deepClone = <T>(obj: T): T => {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  // Use structuredClone if available (modern browsers/Node.js 17+)
  if (typeof structuredClone !== 'undefined') {
    return structuredClone(obj);
  }

  // Fallback to JSON method (limitations: no functions, undefined, symbols, etc.)
  try {
    return JSON.parse(JSON.stringify(obj));
  } catch (error) {
    throw new Error('Object cannot be cloned: ' + (error as Error).message);
  }
};

/**
 * Debounces a function execution
 *
 * @param func - Function to debounce
 * @param delay - Delay in milliseconds
 * @returns Debounced function
 */
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  delay: number
): ((...args: Parameters<T>) => void) => {
  let timeoutId: NodeJS.Timeout;

  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};

/**
 * Throttles a function execution
 *
 * @param func - Function to throttle
 * @param delay - Delay in milliseconds
 * @returns Throttled function
 */
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  delay: number
): ((...args: Parameters<T>) => void) => {
  let lastCall = 0;

  return (...args: Parameters<T>) => {
    const now = Date.now();
    if (now - lastCall >= delay) {
      lastCall = now;
      func(...args);
    }
  };
};

/**
 * Validates an email address
 *
 * @param email - Email address to validate
 * @returns True if valid email format
 */
export const isValidEmail = (email: string): boolean => {
  return typeof email === 'string' && EMAIL_REGEX.test(email.trim());
};

/**
 * Validates a URL
 *
 * @param url - URL to validate
 * @returns True if valid URL format
 */
export const isValidURL = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

/**
 * Safely converts a value to a number
 *
 * @param value - Value to convert
 * @param defaultValue - Default value if conversion fails
 * @returns Converted number or default value
 */
export const safeParseNumber = (value: any, defaultValue: number = 0): number => {
  if (typeof value === 'number' && !isNaN(value)) {
    return value;
  }

  if (typeof value === 'string') {
    const parsed = Number(value.trim());
    if (!isNaN(parsed)) {
      return parsed;
    }
  }

  return defaultValue;
};

/**
 * Safely converts a value to an integer
 *
 * @param value - Value to convert
 * @param defaultValue - Default value if conversion fails
 * @returns Converted integer or default value
 */
export const safeParseInt = (value: any, defaultValue: number = 0): number => {
  const num = safeParseNumber(value, defaultValue);
  return Math.floor(num);
};

/**
 * Capitalizes the first letter of a string
 *
 * @param str - String to capitalize
 * @returns String with first letter capitalized
 */
export const capitalize = (str: string): string => {
  if (typeof str !== 'string' || str.length === 0) {
    return str;
  }
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

/**
 * Converts a string to camelCase
 *
 * @param str - String to convert
 * @returns camelCase string
 */
export const toCamelCase = (str: string): string => {
  if (typeof str !== 'string') {
    return str;
  }

  return str
    .replace(/[-_\s]+(.)?/g, (_, char) => (char ? char.toUpperCase() : ''))
    .replace(/^[A-Z]/, char => char.toLowerCase());
};

/**
 * Converts a string to kebab-case
 *
 * @param str - String to convert
 * @returns kebab-case string
 */
export const toKebabCase = (str: string): string => {
  if (typeof str !== 'string') {
    return str;
  }

  return str
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase();
};

/**
 * Truncates a string to a specified length
 *
 * @param str - String to truncate
 * @param length - Maximum length
 * @param suffix - Suffix to add when truncated (default: '...')
 * @returns Truncated string
 */
export const truncateString = (str: string, length: number, suffix: string = '...'): string => {
  if (typeof str !== 'string') {
    return str;
  }

  if (str.length <= length) {
    return str;
  }

  return str.slice(0, length - suffix.length) + suffix;
};

/**
 * Sleeps for a specified number of milliseconds
 *
 * @param ms - Milliseconds to sleep
 * @returns Promise that resolves after the specified time
 */
export const sleep = (ms: number): Promise<void> => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

/**
 * Retries a function with exponential backoff
 *
 * @param fn - Function to retry
 * @param maxRetries - Maximum number of retries
 * @param baseDelay - Base delay in milliseconds
 * @returns Promise with the result or final error
 */
export const retryWithBackoff = async <T>(
  fn: () => Promise<T>,
  maxRetries: number = 3,
  baseDelay: number = 1000
): Promise<T> => {
  let lastError: Error;

  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      return await fn();
    } catch (error) {
      lastError = error as Error;

      if (attempt === maxRetries) {
        throw lastError;
      }

      const delay = baseDelay * Math.pow(2, attempt);
      await sleep(delay);
    }
  }

  throw lastError!;
};