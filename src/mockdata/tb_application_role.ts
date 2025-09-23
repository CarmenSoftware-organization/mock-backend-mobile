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
    updated_by_id: null,
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440002",
    business_unit_id: "e4a432c0-86d9-4d75-8b03-096caf03c2d1",
    name: "Manager",
    description: "Department manager role",
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440003",
    business_unit_id: "e4a432c0-86d9-4d75-8b03-096caf03c2d1",
    name: "User",
    description: "Standard user role",
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
  },
];

// Optimized indexing system for better performance
const applicationRoleIndexes = {
  byId: new Map<string, ApplicationRole>(),
  byName: new Map<string, ApplicationRole>(),
  byBusinessUnitId: new Map<string, ApplicationRole[]>(),
  byCreatedBy: new Map<string, ApplicationRole[]>(),
  byUpdatedBy: new Map<string, ApplicationRole[]>(),
  withDescription: new Set<ApplicationRole>(),
  withoutDescription: new Set<ApplicationRole>(),
  nameExists: new Set<string>(),
};

// Helper function to rebuild indexes
const rebuildApplicationRoleIndexes = (): void => {
  // Clear existing indexes
  applicationRoleIndexes.byId.clear();
  applicationRoleIndexes.byName.clear();
  applicationRoleIndexes.byBusinessUnitId.clear();
  applicationRoleIndexes.byCreatedBy.clear();
  applicationRoleIndexes.byUpdatedBy.clear();
  applicationRoleIndexes.withDescription.clear();
  applicationRoleIndexes.withoutDescription.clear();
  applicationRoleIndexes.nameExists.clear();

  // Rebuild indexes
  for (const role of applicationRoles) {
    // Index by ID
    applicationRoleIndexes.byId.set(role.id, role);

    // Index by name (case-insensitive for lookups, but preserve original case)
    applicationRoleIndexes.byName.set(role.name.toLowerCase(), role);
    applicationRoleIndexes.nameExists.add(role.name.toLowerCase());

    // Index by business unit ID
    if (!applicationRoleIndexes.byBusinessUnitId.has(role.business_unit_id)) {
      applicationRoleIndexes.byBusinessUnitId.set(role.business_unit_id, []);
    }
    applicationRoleIndexes.byBusinessUnitId.get(role.business_unit_id)!.push(role);

    // Index by created_by_id
    if (!applicationRoleIndexes.byCreatedBy.has(role.created_by_id)) {
      applicationRoleIndexes.byCreatedBy.set(role.created_by_id, []);
    }
    applicationRoleIndexes.byCreatedBy.get(role.created_by_id)!.push(role);

    // Index by updated_by_id
    if (role.updated_by_id) {
      if (!applicationRoleIndexes.byUpdatedBy.has(role.updated_by_id)) {
        applicationRoleIndexes.byUpdatedBy.set(role.updated_by_id, []);
      }
      applicationRoleIndexes.byUpdatedBy.get(role.updated_by_id)!.push(role);
    }

    // Index by description presence
    if (role.description !== null) {
      applicationRoleIndexes.withDescription.add(role);
    } else {
      applicationRoleIndexes.withoutDescription.add(role);
    }
  }
};

// Initialize indexes
rebuildApplicationRoleIndexes();

// CREATE - สร้าง ApplicationRole ใหม่
export const createApplicationRole = (
  applicationRoleData: Omit<ApplicationRole, "id" | "created_at" | "updated_at">
): ApplicationRole => {
  // Validate required fields
  if (!applicationRoleData.name?.trim()) {
    throw new Error("Role name is required");
  }
  if (!applicationRoleData.business_unit_id?.trim()) {
    throw new Error("Business unit ID is required");
  }
  if (!applicationRoleData.created_by_id?.trim()) {
    throw new Error("Created by ID is required");
  }

  // Check for duplicate name (case-insensitive)
  if (isApplicationRoleNameExists(applicationRoleData.name)) {
    throw new Error(`Role name '${applicationRoleData.name}' already exists`);
  }

  const newApplicationRole: ApplicationRole = {
    ...applicationRoleData,
    id: generateId(),
    created_at: getCurrentTimestamp(),
    updated_at: getCurrentTimestamp(),
  };

  applicationRoles.push(newApplicationRole);
  rebuildApplicationRoleIndexes(); // Rebuild indexes after adding new role
  return newApplicationRole;
};

// READ - อ่าน ApplicationRole ทั้งหมด
export const getAllApplicationRoles = (): ApplicationRole[] => {
  return [...applicationRoles];
};

// READ - อ่าน ApplicationRole ตาม ID (O(1) lookup)
export const getApplicationRoleById = (
  id: string
): ApplicationRole | undefined => {
  if (!id?.trim()) return undefined;
  return applicationRoleIndexes.byId.get(id);
};

// READ - อ่าน ApplicationRole ตาม name (Optimized)
export const getApplicationRoleByName = (name: string): ApplicationRole[] => {
  if (!name?.trim()) return [];

  const searchTerm = name.toLowerCase();
  const results: ApplicationRole[] = [];

  // Check for exact match first (O(1))
  const exactMatch = applicationRoleIndexes.byName.get(searchTerm);
  if (exactMatch) {
    results.push(exactMatch);
  }

  // For partial matches, we still need to search but with early termination
  if (results.length === 0) {
    for (const role of applicationRoles) {
      if (role.name.toLowerCase().includes(searchTerm)) {
        results.push(role);
      }
    }
  }

  return results;
};

// READ - อ่าน ApplicationRole ตาม business_unit_id (O(1) lookup)
export const getApplicationRolesByBusinessUnit = (
  businessUnitId: string
): ApplicationRole[] => {
  if (!businessUnitId?.trim()) return [];
  return [...(applicationRoleIndexes.byBusinessUnitId.get(businessUnitId) ?? [])];
};

// READ - ApplicationRole ที่มี description (O(1) lookup)
export const getApplicationRolesWithDescription = (): ApplicationRole[] => {
  return [...applicationRoleIndexes.withDescription];
};

// READ - ApplicationRole ที่ไม่มี description (O(1) lookup)
export const getApplicationRolesWithoutDescription = (): ApplicationRole[] => {
  return [...applicationRoleIndexes.withoutDescription];
};

// UPDATE - อัปเดต ApplicationRole
export const updateApplicationRole = (
  id: string,
  updateData: Partial<
    Omit<ApplicationRole, "id" | "created_at" | "created_by_id">
  >
): ApplicationRole | null => {
  if (!id?.trim()) {
    return null;
  }

  const index = applicationRoles.findIndex(
    (applicationRole) => applicationRole.id === id
  );

  if (index === -1) {
    return null;
  }

  const currentRole = applicationRoles[index];

  // Check for duplicate name if name is being updated
  if (updateData.name && updateData.name.trim()) {
    if (updateData.name !== currentRole.name && isApplicationRoleNameExists(updateData.name)) {
      throw new Error(`Role name '${updateData.name}' already exists`);
    }
  }

  applicationRoles[index] = {
    ...applicationRoles[index],
    ...updateData,
    updated_at: getCurrentTimestamp(),
  };

  rebuildApplicationRoleIndexes(); // Rebuild indexes after update
  return applicationRoles[index];
};

// UPDATE - อัปเดต ApplicationRole name
export const updateApplicationRoleName = (
  id: string,
  name: string
): ApplicationRole | null => {
  return updateApplicationRole(id, { name });
};

// UPDATE - อัปเดต ApplicationRole description
export const updateApplicationRoleDescription = (
  id: string,
  description: string
): ApplicationRole | null => {
  return updateApplicationRole(id, { description });
};

// UPDATE - อัปเดต ApplicationRole business unit
export const updateApplicationRoleBusinessUnit = (
  id: string,
  businessUnitId: string
): ApplicationRole | null => {
  return updateApplicationRole(id, { business_unit_id: businessUnitId });
};

// DELETE - ลบ ApplicationRole
export const deleteApplicationRole = (id: string): boolean => {
  if (!id?.trim()) {
    return false;
  }

  const index = applicationRoles.findIndex(
    (applicationRole) => applicationRole.id === id
  );

  if (index === -1) {
    return false;
  }

  applicationRoles.splice(index, 1);
  rebuildApplicationRoleIndexes(); // Rebuild indexes after deletion
  return true;
};

// DELETE - ลบ ApplicationRole ตาม name
export const deleteApplicationRoleByName = (name: string): boolean => {
  const applicationRole = applicationRoles.find((ar) => ar.name === name);
  if (!applicationRole) return false;

  return deleteApplicationRole(applicationRole.id);
};

// DELETE - ลบ ApplicationRole ตาม business_unit_id
export const deleteApplicationRolesByBusinessUnit = (
  businessUnitId: string
): number => {
  if (!businessUnitId?.trim()) {
    return 0;
  }

  const initialLength = applicationRoles.length;
  const filteredApplicationRoles = applicationRoles.filter(
    (applicationRole) => applicationRole.business_unit_id !== businessUnitId
  );
  const deletedCount = initialLength - filteredApplicationRoles.length;

  if (deletedCount > 0) {
    applicationRoles.length = 0;
    applicationRoles.push(...filteredApplicationRoles);
    rebuildApplicationRoleIndexes(); // Rebuild indexes after bulk deletion
  }

  return deletedCount;
};

// Utility function สำหรับล้างข้อมูลทั้งหมด (ใช้สำหรับ testing)
export const clearAllApplicationRoles = (): void => {
  applicationRoles.length = 0;
  rebuildApplicationRoleIndexes(); // Rebuild indexes after clearing all data
};

// Utility function สำหรับนับจำนวน ApplicationRole
export const getApplicationRoleCount = (): number => {
  return applicationRoles.length;
};

// Utility function สำหรับนับจำนวน ApplicationRole ตาม business_unit_id (O(1) lookup)
export const getApplicationRoleCountByBusinessUnit = (
  businessUnitId: string
): number => {
  if (!businessUnitId?.trim()) return 0;
  const roles = applicationRoleIndexes.byBusinessUnitId.get(businessUnitId);
  return roles ? roles.length : 0;
};

// Utility function สำหรับค้นหา ApplicationRole แบบ advanced search
export const searchApplicationRoles = (searchCriteria: {
  name?: string;
  business_unit_id?: string;
  description?: string;
  has_description?: boolean;
}): ApplicationRole[] => {
  return applicationRoles.filter((applicationRole) => {
    if (
      searchCriteria.name &&
      !applicationRole.name
        .toLowerCase()
        .includes(searchCriteria.name.toLowerCase())
    ) {
      return false;
    }

    if (
      searchCriteria.business_unit_id &&
      applicationRole.business_unit_id !== searchCriteria.business_unit_id
    ) {
      return false;
    }

    if (
      searchCriteria.description &&
      applicationRole.description &&
      !applicationRole.description
        .toLowerCase()
        .includes(searchCriteria.description.toLowerCase())
    ) {
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

// Utility function สำหรับตรวจสอบ name ซ้ำ (O(1) lookup)
export const isApplicationRoleNameExists = (name: string): boolean => {
  if (!name?.trim()) return false;
  return applicationRoleIndexes.nameExists.has(name.toLowerCase());
};

// Utility function สำหรับตรวจสอบ ApplicationRole ที่มี description (O(1) lookup)
export const hasApplicationRolesWithDescription = (): boolean => {
  return applicationRoleIndexes.withDescription.size > 0;
};

// Utility function สำหรับตรวจสอบ ApplicationRole ตาม business unit (O(1) lookup)
export const hasApplicationRolesByBusinessUnit = (
  businessUnitId: string
): boolean => {
  if (!businessUnitId?.trim()) return false;
  return applicationRoleIndexes.byBusinessUnitId.has(businessUnitId);
};
