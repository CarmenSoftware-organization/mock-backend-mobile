// =============== MOCKDATA INDEX ===============

// Export all table types and CRUD functions
export * from './tables';

// Export constants
export * from './const';

// Import for backward compatibility
import { mockTbUser, getUserProfileResponse } from './tables';

// Backward compatibility exports
export const mockUsers = mockTbUser;
export { getUserProfileResponse };

