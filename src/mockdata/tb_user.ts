import { generateId, getCurrentTimestamp } from "@/libs/utils";

export interface User {
  id: string;
  username: string;
  email: string;
  platform_role: 'platform_admin' | 'user';
  is_active: boolean;
  is_consent: boolean;
  consent_at: string | null;
  created_at: string;
  created_by_id: string | null;
  updated_at: string;
  updated_by_id: string | null;
}

export const users: User[] = [
  {
    id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    username: "system-admin@blueledgers.com",
    email: "system-admin@blueledgers.com",
    platform_role: "platform_admin",
    is_active: true,
    is_consent: true,
    consent_at: "2025-07-29T01:37:27.155Z",
    created_at: "2025-07-29T01:37:27.156Z",
    created_by_id: null,
    updated_at: "2025-07-29T01:37:27.156Z",
    updated_by_id: null
  },
  {
    id: "1bfdb891-58ee-499c-8115-34a964de8122",
    username: "test@test.com",
    email: "test@test.com",
    platform_role: "user",
    is_active: true,
    is_consent: true,
    consent_at: "2025-07-29T01:37:27.539Z",
    created_at: "2025-07-29T01:37:27.540Z",
    created_by_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    updated_at: "2025-07-29T01:37:27.540Z",
    updated_by_id: null
  },
  {
    id: "3c5280a7-492e-421d-b739-7447455ce99e",
    username: "admin@test.com",
    email: "admin@test.com",
    platform_role: "user",
    is_active: true,
    is_consent: true,
    consent_at: "2025-07-29T01:37:27.817Z",
    created_at: "2025-07-29T01:37:27.818Z",
    created_by_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    updated_at: "2025-07-29T01:37:27.818Z",
    updated_by_id: null
  },
  {
    id: "c7092848-78f7-4cfe-bb6d-095c286a1019",
    username: "user1@test.com",
    email: "user1@test.com",
    platform_role: "user",
    is_active: true,
    is_consent: true,
    consent_at: "2025-07-29T01:37:28.036Z",
    created_at: "2025-07-29T01:37:28.036Z",
    created_by_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    updated_at: "2025-07-29T01:37:28.036Z",
    updated_by_id: null
  },
  {
    id: "d9aef974-0dd1-4acd-93b7-93c8ccc8cfeb",
    username: "user2@test.com",
    email: "user2@test.com",
    platform_role: "user",
    is_active: true,
    is_consent: true,
    consent_at: "2025-07-29T01:37:28.267Z",
    created_at: "2025-07-29T01:37:28.268Z",
    created_by_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    updated_at: "2025-07-29T01:37:28.268Z",
    updated_by_id: null
  },
  {
    id: "e88e8da4-ad87-4255-befc-1556d1b66b69",
    username: "user3@test.com",
    email: "user3@test.com",
    platform_role: "user",
    is_active: true,
    is_consent: true,
    consent_at: "2025-07-29T01:37:28.502Z",
    created_at: "2025-07-29T01:37:28.503Z",
    created_by_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    updated_at: "2025-07-29T01:37:28.503Z",
    updated_by_id: null
  },
  {
    id: "57c0721a-4afd-4e8f-b118-f0480c537215",
    username: "user4@test.com",
    email: "user4@test.com",
    platform_role: "user",
    is_active: true,
    is_consent: true,
    consent_at: "2025-07-29T01:37:28.755Z",
    created_at: "2025-07-29T01:37:28.756Z",
    created_by_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    updated_at: "2025-07-29T01:37:28.756Z",
    updated_by_id: null
  },
  {
    id: "59c4ce87-84e5-48e5-b246-7d0f6d2c5594",
    username: "user5@test.com",
    email: "user5@test.com",
    platform_role: "user",
    is_active: true,
    is_consent: true,
    consent_at: "2025-07-29T01:37:28.989Z",
    created_at: "2025-07-29T01:37:28.990Z",
    created_by_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    updated_at: "2025-07-29T01:37:28.990Z",
    updated_by_id: null
  },
  {
    id: "d3ba9c08-162f-4e81-8337-75d3d56f6aff",
    username: "user6@test.com",
    email: "user6@test.com",
    platform_role: "user",
    is_active: true,
    is_consent: true,
    consent_at: null,
    created_at: "2025-07-30T19:59:55.626Z",
    created_by_id: null,
    updated_at: "2025-07-30T19:59:55.626Z",
    updated_by_id: null
  }
];

// CREATE - สร้าง User ใหม่
export const createUser = (userData: Omit<User, 'id' | 'created_at' | 'updated_at'>): User => {
  const newUser: User = {
    ...userData,
    id: generateId(),
    created_at: getCurrentTimestamp(),
    updated_at: getCurrentTimestamp()
  };
  
  users.push(newUser);
  return newUser;
};

// READ - อ่าน User ทั้งหมด
export const getAllUsers = (): User[] => {
  return [...users];
};

// READ - อ่าน User ตาม ID
export const getUserById = (id: string): User | undefined => {
  return users.find(user => user.id === id);
};

// READ - อ่าน User ตาม username
export const getUserByUsername = (username: string): User | undefined => {
  return users.find(user => user.username === username);
};

// READ - อ่าน User ตาม email
export const getUserByEmail = (email: string): User | undefined => {
  return users.find(user => user.email === email);
};

// READ - อ่าน User ตาม platform_role
export const getUsersByPlatformRole = (platformRole: 'platform_admin' | 'user'): User[] => {
  return users.filter(user => user.platform_role === platformRole);
};

// READ - อ่าน User ที่ active
export const getActiveUsers = (): User[] => {
  return users.filter(user => user.is_active);
};

// READ - อ่าน User ที่มี consent
export const getConsentedUsers = (): User[] => {
  return users.filter(user => user.is_consent);
};

// UPDATE - อัปเดต User
export const updateUser = (id: string, updateData: Partial<Omit<User, 'id' | 'created_at' | 'created_by_id'>>): User | null => {
  const index = users.findIndex(user => user.id === id);
  
  if (index === -1) {
    return null;
  }
  
  users[index] = {
    ...users[index],
    ...updateData,
    updated_at: getCurrentTimestamp()
  };
  
  return users[index];
};

// UPDATE - อัปเดต password
export const updateUserPassword = (id: string, newPassword: string): boolean => {
  const user = getUserById(id);
  if (!user) return false;
  
  // ในระบบจริงควร hash password ก่อน
  return true;
};

// UPDATE - อัปเดต consent status
export const updateUserConsent = (id: string, isConsent: boolean): User | null => {
  return updateUser(id, {
    is_consent: isConsent,
    consent_at: isConsent ? getCurrentTimestamp() : null
  });
};

// UPDATE - อัปเดต active status
export const updateUserActiveStatus = (id: string, isActive: boolean): User | null => {
  return updateUser(id, { is_active: isActive });
};

// DELETE - ลบ User
export const deleteUser = (id: string): boolean => {
  const index = users.findIndex(user => user.id === id);
  
  if (index === -1) {
    return false;
  }
  
  users.splice(index, 1);
  return true;
};

// DELETE - ลบ User ตาม platform_role
export const deleteUsersByPlatformRole = (platformRole: 'platform_admin' | 'user'): number => {
  const initialLength = users.length;
  const filteredUsers = users.filter(user => user.platform_role !== platformRole);
  const deletedCount = initialLength - filteredUsers.length;
  
  users.length = 0;
  users.push(...filteredUsers);
  
  return deletedCount;
};

// Utility function สำหรับล้างข้อมูลทั้งหมด (ใช้สำหรับ testing)
export const clearAllUsers = (): void => {
  users.length = 0;
};

// Utility function สำหรับนับจำนวน User
export const getUserCount = (): number => {
  return users.length;
};

// Utility function สำหรับค้นหา User แบบ advanced search
export const searchUsers = (searchCriteria: {
  username?: string;
  email?: string;
  platform_role?: 'platform_admin' | 'user';
  is_active?: boolean;
  is_consent?: boolean;
}): User[] => {
  return users.filter(user => {
    if (searchCriteria.username && !user.username.toLowerCase().includes(searchCriteria.username.toLowerCase())) {
      return false;
    }
    
    if (searchCriteria.email && !user.email.toLowerCase().includes(searchCriteria.email.toLowerCase())) {
      return false;
    }
    
    if (searchCriteria.platform_role && user.platform_role !== searchCriteria.platform_role) {
      return false;
    }
    
    if (searchCriteria.is_active !== undefined && user.is_active !== searchCriteria.is_active) {
      return false;
    }
    
    if (searchCriteria.is_consent !== undefined && user.is_consent !== searchCriteria.is_consent) {
      return false;
    }
    
    return true;
  });
};

// Utility function สำหรับตรวจสอบ username ซ้ำ
export const isUsernameExists = (username: string): boolean => {
  return users.some(user => user.username === username);
};

// Utility function สำหรับตรวจสอบ email ซ้ำ
export const isEmailExists = (email: string): boolean => {
  return users.some(user => user.email === email);
};
