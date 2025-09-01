import { generateId, getCurrentTimestamp } from "@/libs/utils";

export interface Password {
  id: string;
  user_id: string;
  hash: string;
  is_active: boolean;
  expired_on: string | null;
  created_at: string;
  created_by_id: string;
}

export const passwords: Password[] = [
  {
    id: "550e8400-e29b-41d4-a716-446655440001",
    user_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    hash: "$2b$10$hashedpassword123456789",
    is_active: true,
    expired_on: null,
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1"
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440002",
    user_id: "1bfdb891-58ee-499c-8115-34a964de8122",
    hash: "$2b$10$hashedpassword987654321",
    is_active: true,
    expired_on: null,
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1"
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440003",
    user_id: "3c5280a7-492e-421d-b739-7447455ce99e",
    hash: "$2b$10$hashedpassword456789123",
    is_active: true,
    expired_on: null,
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1"
  }
];

// CREATE - สร้าง Password ใหม่
export const createPassword = (passwordData: Omit<Password, 'id' | 'created_at'>): Password => {
  const newPassword: Password = {
    ...passwordData,
    id: generateId(),
    created_at: getCurrentTimestamp()
  };
  
  passwords.push(newPassword);
  return newPassword;
};

// READ - อ่าน Password ทั้งหมด
export const getAllPasswords = (): Password[] => {
  return [...passwords];
};

// READ - อ่าน Password ตาม ID
export const getPasswordById = (id: string): Password | undefined => {
  return passwords.find(password => password.id === id);
};

// READ - อ่าน Password ตาม user_id
export const getPasswordByUserId = (userId: string): Password | undefined => {
  return passwords.find(password => password.user_id === userId);
};

// READ - อ่าน Password ที่ active
export const getActivePasswords = (): Password[] => {
  return passwords.filter(password => password.is_active);
};

// READ - อ่าน Password ที่ inactive
export const getInactivePasswords = (): Password[] => {
  return passwords.filter(password => !password.is_active);
};

// READ - อ่าน Password ที่หมดอายุ
export const getExpiredPasswords = (): Password[] => {
  const now = new Date();
  return passwords.filter(password => 
    password.expired_on && new Date(password.expired_on) < now
  );
};

// READ - อ่าน Password ที่ไม่หมดอายุ
export const getNonExpiredPasswords = (): Password[] => {
  const now = new Date();
  return passwords.filter(password => 
    !password.expired_on || new Date(password.expired_on) > now
  );
};

// UPDATE - อัปเดต Password
export const updatePassword = (id: string, updateData: Partial<Omit<Password, 'id' | 'created_at' | 'created_by_id'>>): Password | null => {
  const index = passwords.findIndex(password => password.id === id);
  
  if (index === -1) {
    return null;
  }
  
  passwords[index] = {
    ...passwords[index],
    ...updateData
  };
  
  return passwords[index];
};

// UPDATE - อัปเดต Password hash
export const updatePasswordHash = (id: string, hash: string): Password | null => {
  return updatePassword(id, { hash });
};

// UPDATE - อัปเดต Password active status
export const updatePasswordActiveStatus = (id: string, isActive: boolean): Password | null => {
  return updatePassword(id, { is_active: isActive });
};

// UPDATE - อัปเดต Password expiry date
export const updatePasswordExpiryDate = (id: string, expiredOn: string | null): Password | null => {
  return updatePassword(id, { expired_on: expiredOn });
};

// UPDATE - อัปเดต Password สำหรับ user
export const updatePasswordForUser = (userId: string, hash: string): Password | null => {
  const password = getPasswordByUserId(userId);
  if (!password) return null;
  
  return updatePasswordHash(password.id, hash);
};

// DELETE - ลบ Password
export const deletePassword = (id: string): boolean => {
  const index = passwords.findIndex(password => password.id === id);
  
  if (index === -1) {
    return false;
  }
  
  passwords.splice(index, 1);
  return true;
};

// DELETE - ลบ Password ตาม user_id
export const deletePasswordByUserId = (userId: string): boolean => {
  const password = passwords.find(p => p.user_id === userId);
  if (!password) return false;
  
  return deletePassword(password.id);
};

// DELETE - ลบ Password ที่หมดอายุ
export const deleteExpiredPasswords = (): number => {
  const now = new Date();
  const initialLength = passwords.length;
  const filteredPasswords = passwords.filter(password => 
    !password.expired_on || new Date(password.expired_on) > now
  );
  const deletedCount = initialLength - filteredPasswords.length;
  
  passwords.length = 0;
  passwords.push(...filteredPasswords);
  
  return deletedCount;
};

// DELETE - ลบ Password ที่ inactive
export const deleteInactivePasswords = (): number => {
  const initialLength = passwords.length;
  const filteredPasswords = passwords.filter(password => password.is_active);
  const deletedCount = initialLength - filteredPasswords.length;
  
  passwords.length = 0;
  passwords.push(...filteredPasswords);
  
  return deletedCount;
};

// Utility function สำหรับล้างข้อมูลทั้งหมด (ใช้สำหรับ testing)
export const clearAllPasswords = (): void => {
  passwords.length = 0;
};

// Utility function สำหรับนับจำนวน Password
export const getPasswordCount = (): number => {
  return passwords.length;
};

// Utility function สำหรับนับจำนวน Password ที่ active
export const getActivePasswordCount = (): number => {
  return passwords.filter(password => password.is_active).length;
};

// Utility function สำหรับนับจำนวน Password ที่หมดอายุ
export const getExpiredPasswordCount = (): number => {
  const now = new Date();
  return passwords.filter(password => 
    password.expired_on && new Date(password.expired_on) < now
  ).length;
};

// Utility function สำหรับค้นหา Password แบบ advanced search
export const searchPasswords = (searchCriteria: {
  user_id?: string;
  is_active?: boolean;
  is_expired?: boolean;
}): Password[] => {
  return passwords.filter(password => {
    if (searchCriteria.user_id && password.user_id !== searchCriteria.user_id) {
      return false;
    }
    
    if (searchCriteria.is_active !== undefined && password.is_active !== searchCriteria.is_active) {
      return false;
    }
    
    if (searchCriteria.is_expired !== undefined) {
      const now = new Date();
      const isExpired = password.expired_on && new Date(password.expired_on) < now;
      if (isExpired !== searchCriteria.is_expired) {
        return false;
      }
    }
    
    return true;
  });
};

// Utility function สำหรับตรวจสอบ Password สำหรับ user
export const hasPasswordForUser = (userId: string): boolean => {
  return passwords.some(password => password.user_id === userId);
};

// Utility function สำหรับตรวจสอบ Password ที่ active
export const hasActivePasswords = (): boolean => {
  return passwords.some(password => password.is_active);
};

// Utility function สำหรับตรวจสอบ Password ที่หมดอายุ
export const hasExpiredPasswords = (): boolean => {
  const now = new Date();
  return passwords.some(password => 
    password.expired_on && new Date(password.expired_on) < now
  );
};
