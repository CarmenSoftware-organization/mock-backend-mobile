// =============== MOCKDATA INDEX ===============

// Export legacy data and main user functions
export * from './users';

// Export all table types and CRUD functions
export * from './tables';

// Export legacy types
export * from './legacy-types';

// Export constants
export * from './const';

// Re-export commonly used items for easy access
export { default as mockData } from './users';
