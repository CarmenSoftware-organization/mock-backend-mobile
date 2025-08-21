// Types based on OpenAPI specification
export interface User {
  id: string;
  email: string;
  first_name: string;
  middle_name?: string;
  last_name: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface UserBusinessUnit {
  id: string;
  user_id: string;
  business_unit_id: string;
  role: 'admin' | 'user';
  is_default: boolean;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface UserProfile {
  user: User;
  business_units: UserBusinessUnit[];
}

// Mock Users Data
export const mockUsers: User[] = [
  {
    id: '550e8400-e29b-41d4-a716-446655440001',
    email: 'admin@carmensoftware.com',
    first_name: 'สมชาย',
    middle_name: '',
    last_name: 'ใจดี',
    is_active: true,
    created_at: '2024-01-15T08:00:00Z',
    updated_at: '2024-01-15T08:00:00Z'
  },
  {
    id: '550e8400-e29b-41d4-a716-446655440002',
    email: 'manager@carmensoftware.com',
    first_name: 'สมหญิง',
    middle_name: 'รักดี',
    last_name: 'สุขใจ',
    is_active: true,
    created_at: '2024-01-16T09:00:00Z',
    updated_at: '2024-01-16T09:00:00Z'
  },
  {
    id: '550e8400-e29b-41d4-a716-446655440003',
    email: 'purchaser@carmensoftware.com',
    first_name: 'วิชัย',
    middle_name: '',
    last_name: 'ซื้อของ',
    is_active: true,
    created_at: '2024-01-17T10:00:00Z',
    updated_at: '2024-01-17T10:00:00Z'
  },
  {
    id: '550e8400-e29b-41d4-a716-446655440004',
    email: 'accountant@carmensoftware.com',
    first_name: 'สมศรี',
    middle_name: 'บัญชี',
    last_name: 'เงินทอง',
    is_active: true,
    created_at: '2024-01-18T11:00:00Z',
    updated_at: '2024-01-18T11:00:00Z'
  },
  {
    id: '550e8400-e29b-41d4-a716-446655440005',
    email: 'warehouse@carmensoftware.com',
    first_name: 'สมศักดิ์',
    middle_name: '',
    last_name: 'คลังสินค้า',
    is_active: true,
    created_at: '2024-01-19T12:00:00Z',
    updated_at: '2024-01-19T12:00:00Z'
  },
  {
    id: '550e8400-e29b-41d4-a716-446655440006',
    email: 'sales@carmensoftware.com',
    first_name: 'สมปอง',
    middle_name: 'ขายของ',
    last_name: 'รุ่งเรือง',
    is_active: true,
    created_at: '2024-01-20T13:00:00Z',
    updated_at: '2024-01-20T13:00:00Z'
  },
  {
    id: '550e8400-e29b-41d4-a716-446655440007',
    email: 'hr@carmensoftware.com',
    first_name: 'สมพร',
    middle_name: '',
    last_name: 'ทรัพยากร',
    is_active: true,
    created_at: '2024-01-21T14:00:00Z',
    updated_at: '2024-01-21T14:00:00Z'
  },
  {
    id: '550e8400-e29b-41d4-a716-446655440008',
    email: 'it@carmensoftware.com',
    first_name: 'สมชาย',
    middle_name: 'ไอที',
    last_name: 'เทคโนโลยี',
    is_active: true,
    created_at: '2024-01-22T15:00:00Z',
    updated_at: '2024-01-22T15:00:00Z'
  },
  {
    id: '550e8400-e29b-41d4-a716-446655440009',
    email: 'marketing@carmensoftware.com',
    first_name: 'สมหญิง',
    middle_name: 'การตลาด',
    last_name: 'โฆษณา',
    is_active: true,
    created_at: '2024-01-23T16:00:00Z',
    updated_at: '2024-01-23T16:00:00Z'
  },
  {
    id: '550e8400-e29b-41d4-a716-446655440010',
    email: 'support@carmensoftware.com',
    first_name: 'สมศักดิ์',
    middle_name: '',
    last_name: 'ลูกค้า',
    is_active: true,
    created_at: '2024-01-24T17:00:00Z',
    updated_at: '2024-01-24T17:00:00Z'
  }
];

// Mock Business Unit IDs (using fixed UUIDs)
export const mockBusinessUnitIds = {
  headquarters: '550e8400-e29b-41d4-a716-446655440101',
  bangkok: '550e8400-e29b-41d4-a716-446655440102',
  chiangmai: '550e8400-e29b-41d4-a716-446655440103',
  phuket: '550e8400-e29b-41d4-a716-446655440104'
};

// Mock User Business Units Data
export const mockUserBusinessUnits: UserBusinessUnit[] = [
  // Admin user - HQ (default)
  {
    id: '550e8400-e29b-41d4-a716-446655440201',
    user_id: mockUsers[0].id,
    business_unit_id: mockBusinessUnitIds.headquarters,
    role: 'admin',
    is_default: true,
    is_active: true,
    created_at: '2024-01-15T08:00:00Z',
    updated_at: '2024-01-15T08:00:00Z'
  },
  // Manager user - HQ (default)
  {
    id: '550e8400-e29b-41d4-a716-446655440202',
    user_id: mockUsers[1].id,
    business_unit_id: mockBusinessUnitIds.headquarters,
    role: 'admin',
    is_default: true,
    is_active: true,
    created_at: '2024-01-16T09:00:00Z',
    updated_at: '2024-01-16T09:00:00Z'
  },
  // Purchaser user - HQ (default)
  {
    id: '550e8400-e29b-41d4-a716-446655440203',
    user_id: mockUsers[2].id,
    business_unit_id: mockBusinessUnitIds.headquarters,
    role: 'user',
    is_default: true,
    is_active: true,
    created_at: '2024-01-17T10:00:00Z',
    updated_at: '2024-01-17T10:00:00Z'
  },
  // Accountant user - HQ (default)
  {
    id: '550e8400-e29b-41d4-a716-446655440204',
    user_id: mockUsers[3].id,
    business_unit_id: mockBusinessUnitIds.headquarters,
    role: 'user',
    is_default: true,
    is_active: true,
    created_at: '2024-01-18T11:00:00Z',
    updated_at: '2024-01-18T11:00:00Z'
  },
  // Warehouse user - HQ (default)
  {
    id: '550e8400-e29b-41d4-a716-446655440205',
    user_id: mockUsers[4].id,
    business_unit_id: mockBusinessUnitIds.headquarters,
    role: 'user',
    is_default: true,
    is_active: true,
    created_at: '2024-01-19T12:00:00Z',
    updated_at: '2024-01-19T12:00:00Z'
  },
  // Sales user - Bangkok (default)
  {
    id: '550e8400-e29b-41d4-a716-446655440206',
    user_id: mockUsers[5].id,
    business_unit_id: mockBusinessUnitIds.bangkok,
    role: 'user',
    is_default: true,
    is_active: true,
    created_at: '2024-01-20T13:00:00Z',
    updated_at: '2024-01-20T13:00:00Z'
  },
  // HR user - HQ (default)
  {
    id: '550e8400-e29b-41d4-a716-446655440207',
    user_id: mockUsers[6].id,
    business_unit_id: mockBusinessUnitIds.headquarters,
    role: 'user',
    is_default: true,
    is_active: true,
    created_at: '2024-01-21T14:00:00Z',
    updated_at: '2024-01-21T14:00:00Z'
  },
  // IT user - HQ (default)
  {
    id: '550e8400-e29b-41d4-a716-446655440208',
    user_id: mockUsers[7].id,
    business_unit_id: mockBusinessUnitIds.headquarters,
    role: 'user',
    is_default: true,
    is_active: true,
    created_at: '2024-01-22T15:00:00Z',
    updated_at: '2024-01-22T15:00:00Z'
  },
  // Marketing user - Bangkok (default)
  {
    id: '550e8400-e29b-41d4-a716-446655440209',
    user_id: mockUsers[8].id,
    business_unit_id: mockBusinessUnitIds.bangkok,
    role: 'user',
    is_default: true,
    is_active: true,
    created_at: '2024-01-23T16:00:00Z',
    updated_at: '2024-01-23T16:00:00Z'
  },
  // Support user - HQ (default)
  {
    id: '550e8400-e29b-41d4-a716-446655440210',
    user_id: mockUsers[9].id,
    business_unit_id: mockBusinessUnitIds.headquarters,
    role: 'user',
    is_default: true,
    is_active: true,
    created_at: '2024-01-24T17:00:00Z',
    updated_at: '2024-01-24T17:00:00Z'
  }
];

// Helper function to get user profile by ID
export const getUserProfile = (userId: string): UserProfile | null => {
  const user = mockUsers.find(u => u.id === userId);
  if (!user) return null;

  const businessUnits = mockUserBusinessUnits.filter(ubu => ubu.user_id === userId);
  
  return {
    user,
    business_units: businessUnits
  };
};

// Helper function to get all users with their business units
export const getAllUsersWithBusinessUnits = (): UserProfile[] => {
  return mockUsers.map(user => {
    const businessUnits = mockUserBusinessUnits.filter(ubu => ubu.user_id === user.id);
    return {
      user,
      business_units: businessUnits
    };
  });
};

// Helper function to get users by business unit
export const getUsersByBusinessUnit = (businessUnitId: string): UserProfile[] => {
  const userBusinessUnits = mockUserBusinessUnits.filter(ubu => ubu.business_unit_id === businessUnitId);
  
  return userBusinessUnits.map(ubu => {
    const user = mockUsers.find(u => u.id === ubu.user_id);
    if (!user) return null;
    
    return {
      user,
      business_units: [ubu]
    };
  }).filter(Boolean) as UserProfile[];
};

// Export default for easy import
export default {
  users: mockUsers,
  userBusinessUnits: mockUserBusinessUnits,
  getUserProfile,
  getAllUsersWithBusinessUnits,
  getUsersByBusinessUnit
};
