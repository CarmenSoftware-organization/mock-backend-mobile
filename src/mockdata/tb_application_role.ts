import { generateId, getCurrentTimestamp } from "@/libs/utils";

export interface ApplicationRole {
  id: string;
  business_unit_id: string;
  name: string;
  description: string | null;
  created_at: string;
  created_by_id: string;
  updated_at: string;
  updated_by_id: string | null;
}

export const applicationRoles: ApplicationRole[] = [
  {
    id: "550e8400-e29b-41d4-a716-446655440001",
    business_unit_id: "e4a432c0-86d9-4d75-8b03-096caf03c2d1",
    name: "Admin",
    description: "Full system administrator role",
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440002",
    business_unit_id: "e4a432c0-86d9-4d75-8b03-096caf03c2d1",
    name: "Manager",
    description: "Department manager role",
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440003",
    business_unit_id: "e4a432c0-86d9-4d75-8b03-096caf03c2d1",
    name: "User",
    description: "Standard user role",
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null
  }
];

// CREATE - สร้าง ApplicationRole ใหม่
export const createApplicationRole = (applicationRoleData: Omit<ApplicationRole, 'id' | 'created_at' | 'updated_at'>): ApplicationRole => {
  const newApplicationRole: ApplicationRole = {
    ...applicationRoleData,
    id: generateId(),
    created_at: getCurrentTimestamp(),
    updated_at: getCurrentTimestamp()
  };
  
  applicationRoles.push(newApplicationRole);
  return newApplicationRole;
};

// READ - อ่าน ApplicationRole ทั้งหมด
export const getAllApplicationRoles = (): ApplicationRole[] => {
  return [...applicationRoles];
};

// READ - อ่าน ApplicationRole ตาม ID
export const getApplicationRoleById = (id: string): ApplicationRole | undefined => {
  return applicationRoles.find(applicationRole => applicationRole.id === id);
};

// READ - อ่าน ApplicationRole ตาม name
export const getApplicationRoleByName = (name: string): ApplicationRole[] => {
  return applicationRoles.filter(applicationRole => 
    applicationRole.name.toLowerCase().includes(name.toLowerCase())
  );
};

// READ - อ่าน ApplicationRole ตาม business_unit_id
export const getApplicationRolesByBusinessUnit = (businessUnitId: string): ApplicationRole[] => {
  return applicationRoles.filter(applicationRole => applicationRole.business_unit_id === businessUnitId);
};

// READ - ApplicationRole ที่มี description
export const getApplicationRolesWithDescription = (): ApplicationRole[] => {
  return applicationRoles.filter(applicationRole => applicationRole.description !== null);
};

// READ - ApplicationRole ที่ไม่มี description
export const getApplicationRolesWithoutDescription = (): ApplicationRole[] => {
  return applicationRoles.filter(applicationRole => applicationRole.description === null);
};

// UPDATE - อัปเดต ApplicationRole
export const updateApplicationRole = (id: string, updateData: Partial<Omit<ApplicationRole, 'id' | 'created_at' | 'created_by_id'>>): ApplicationRole | null => {
  const index = applicationRoles.findIndex(applicationRole => applicationRole.id === id);
  
  if (index === -1) {
    return null;
  }
  
  applicationRoles[index] = {
    ...applicationRoles[index],
    ...updateData,
    updated_at: getCurrentTimestamp()
  };
  
  return applicationRoles[index];
};

// UPDATE - อัปเดต ApplicationRole name
export const updateApplicationRoleName = (id: string, name: string): ApplicationRole | null => {
  return updateApplicationRole(id, { name });
};

// UPDATE - อัปเดต ApplicationRole description
export const updateApplicationRoleDescription = (id: string, description: string): ApplicationRole | null => {
  return updateApplicationRole(id, { description });
};

// UPDATE - อัปเดต ApplicationRole business unit
export const updateApplicationRoleBusinessUnit = (id: string, businessUnitId: string): ApplicationRole | null => {
  return updateApplicationRole(id, { business_unit_id: businessUnitId });
};

// DELETE - ลบ ApplicationRole
export const deleteApplicationRole = (id: string): boolean => {
  const index = applicationRoles.findIndex(applicationRole => applicationRole.id === id);
  
  if (index === -1) {
    return false;
  }
  
  applicationRoles.splice(index, 1);
  return true;
};

// DELETE - ลบ ApplicationRole ตาม name
export const deleteApplicationRoleByName = (name: string): boolean => {
  const applicationRole = applicationRoles.find(ar => ar.name === name);
  if (!applicationRole) return false;
  
  return deleteApplicationRole(applicationRole.id);
};

// DELETE - ลบ ApplicationRole ตาม business_unit_id
export const deleteApplicationRolesByBusinessUnit = (businessUnitId: string): number => {
  const initialLength = applicationRoles.length;
  const filteredApplicationRoles = applicationRoles.filter(applicationRole => applicationRole.business_unit_id !== businessUnitId);
  const deletedCount = initialLength - filteredApplicationRoles.length;
  
  applicationRoles.length = 0;
  applicationRoles.push(...filteredApplicationRoles);
  
  return deletedCount;
};

// Utility function สำหรับล้างข้อมูลทั้งหมด (ใช้สำหรับ testing)
export const clearAllApplicationRoles = (): void => {
  applicationRoles.length = 0;
};

// Utility function สำหรับนับจำนวน ApplicationRole
export const getApplicationRoleCount = (): number => {
  return applicationRoles.length;
};

// Utility function สำหรับนับจำนวน ApplicationRole ตาม business_unit_id
export const getApplicationRoleCountByBusinessUnit = (businessUnitId: string): number => {
  return applicationRoles.filter(applicationRole => applicationRole.business_unit_id === businessUnitId).length;
};

// Utility function สำหรับค้นหา ApplicationRole แบบ advanced search
export const searchApplicationRoles = (searchCriteria: {
  name?: string;
  business_unit_id?: string;
  description?: string;
  has_description?: boolean;
}): ApplicationRole[] => {
  return applicationRoles.filter(applicationRole => {
    if (searchCriteria.name && !applicationRole.name.toLowerCase().includes(searchCriteria.name.toLowerCase())) {
      return false;
    }
    
    if (searchCriteria.business_unit_id && applicationRole.business_unit_id !== searchCriteria.business_unit_id) {
      return false;
    }
    
    if (searchCriteria.description && applicationRole.description && !applicationRole.description.toLowerCase().includes(searchCriteria.description.toLowerCase())) {
      return false;
    }
    
    if (searchCriteria.has_description !== undefined) {
      const hasDescription = applicationRole.description !== null;
      if (hasDescription !== searchCriteria.has_description) {
        return false;
      }
    }
    
    return true;
  });
};

// Utility function สำหรับตรวจสอบ name ซ้ำ
export const isApplicationRoleNameExists = (name: string): boolean => {
  return applicationRoles.some(applicationRole => applicationRole.name === name);
};

// Utility function สำหรับตรวจสอบ ApplicationRole ที่มี description
export const hasApplicationRolesWithDescription = (): boolean => {
  return applicationRoles.some(applicationRole => applicationRole.description !== null);
};

// Utility function สำหรับตรวจสอบ ApplicationRole ตาม business unit
export const hasApplicationRolesByBusinessUnit = (businessUnitId: string): boolean => {
  return applicationRoles.some(applicationRole => applicationRole.business_unit_id === businessUnitId);
};
