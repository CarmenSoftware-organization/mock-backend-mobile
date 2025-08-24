// =============== MOCKDATA USERS - MAIN ENTRY POINT ===============

// Import all types from separated files
export * from './legacy-types';
export * from './tables/types';

// Import mock tables and CRUD functions
export * from './tables';

// Import types for backward compatibility
import type { 
  User, 
  UserBusinessUnit, 
  UserProfile,
  UserProfileResponse 
} from './legacy-types';

import { 
  tbUserProfileCrud, 
  tbDepartmentCrud,
  tbDepartmentUserCrud,
  tbApplicationConfigCrud,
  tbApplicationUserConfigCrud,
  tbLocationCrud,
  tbUserLocationCrud,
  getUserWithDepartment,
  getDepartmentWithUsers,
  mockTbUserProfile,
  mockTbDepartment,
  mockTbDepartmentUser,
  mockTbApplicationConfig,
  mockTbApplicationUserConfig,
  mockTbLocation,
  mockTbUserLocation
} from './tables';

// =============== LEGACY MOCK DATA ===============

// Legacy Mock Users Data for backward compatibility
export const mockUsers: User[] = [
  {
    id: '1bfdb891-58ee-499c-8115-34a964de8122',
    email: 'staff@test.com',
    password: '123456',
    first_name: 'staff',
    middle_name: '',
    last_name: 'staff',
    is_active: true,
    created_at: '2024-01-15T08:00:00Z',
    updated_at: '2024-01-15T08:00:00Z'
  },
  {
    id: '550e8400-e29b-41d4-a716-446655440002',
    email: 'department-manager@test.com',
    password: '123456',
    first_name: 'department',
    middle_name: '',
    last_name: 'manager',
    is_active: true,
    created_at: '2024-01-16T09:00:00Z',
    updated_at: '2024-01-16T09:00:00Z'
  },
  {
    id: '550e8400-e29b-41d4-a716-446655440003',
    email: 'financial-manager@test.com',
    password: '123456',
    first_name: 'financial',
    middle_name: '',
    last_name: 'manager',
    is_active: true,
    created_at: '2024-01-17T10:00:00Z',
    updated_at: '2024-01-17T10:00:00Z'
  },
  {
    id: '550e8400-e29b-41d4-a716-446655440004',
    email: 'purchasing-staff@test.com',
    password: '123456',
    first_name: 'purchasing',
    middle_name: '',
    last_name: 'staff',
    is_active: true,
    created_at: '2024-01-18T11:00:00Z',
    updated_at: '2024-01-18T11:00:00Z'
  },
  {
    id: '550e8400-e29b-41d4-a716-446655440005',
    email: 'counter-staff@test.com',
    password: '123456',
    first_name: 'counter',
    middle_name: '',
    last_name: 'staff',
    is_active: true,
    created_at: '2024-01-19T12:00:00Z',
    updated_at: '2024-01-19T12:00:00Z'
  },
  {
    id: '550e8400-e29b-41d4-a716-446655440006',
    email: 'chef@test.com',
    password: '123456',
    first_name: 'chef',
    middle_name: '',
    last_name: 'staff',
    is_active: true,
    created_at: '2024-01-20T13:00:00Z',
    updated_at: '2024-01-20T13:00:00Z'
  }
];

// =============== USER PROFILE RESPONSE FUNCTION ===============

// Function to get user profile in new format
export const getUserProfileResponse = (userId: string): UserProfileResponse | null => {
  const userProfile = tbUserProfileCrud.findByUserId(userId);
  if (!userProfile) return null;

  // Get user's department info
  const userWithDept = getUserWithDepartment(userId);
  const defaultDepartment = userWithDept?.departments?.[0];

  // Get business units from application config
  const businessUnits = tbApplicationConfigCrud.getBusinessUnits();

  return {
    id: userId,
    email: mockUsers.find(u => u.id === userId)?.email || '',
    user_info: {
      firstname: userProfile.firstname,
      middlename: userProfile.middlename || "",
      lastname: userProfile.lastname
    },
    business_unit: businessUnits.map(bu => ({
      ...bu,
      department: {
        is_hod: defaultDepartment?.is_hod || false,
        id: defaultDepartment?.id || '',
        name: defaultDepartment?.name || ''
      }
    }))
  };
};

// =============== LEGACY EXPORTS ===============

// Export default for easy import - Updated to use new structure
export default {
  // Legacy exports for backward compatibility (basic data only)
  users: mockUsers,
  getUserProfileResponse,
  
  // New CRUD functions - Primary way to interact with data
  tbUserProfileCrud,
  tbDepartmentCrud,
  tbDepartmentUserCrud,
  tbApplicationConfigCrud,
  tbApplicationUserConfigCrud,
  tbLocationCrud,
  tbUserLocationCrud,
  
  // Relationship functions
  getUserWithDepartment,
  getDepartmentWithUsers,
  
  // Mock tables (for direct access if needed)
  mockTbUserProfile,
  mockTbDepartment,
  mockTbDepartmentUser,
  mockTbApplicationConfig,
  mockTbApplicationUserConfig,
  mockTbLocation,
  mockTbUserLocation
};