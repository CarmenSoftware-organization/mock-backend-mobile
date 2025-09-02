import { generateId, getCurrentTimestamp } from "@/libs/utils";

export interface Permission {
  id: string;
  description: string | null;
  created_at: string;
  created_by_id: string;
  updated_at: string;
  updated_by_id: string | null;
  action: string;
  resource: string;
}

export const permissions: Permission[] = [
  {
    id: "550e8400-e29b-41d4-a716-446655440001",
    description: "Create new users",
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    action: "CREATE",
    resource: "USER",
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440002",
    description: "Read user information",
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    action: "READ",
    resource: "USER",
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440003",
    description: "Update user information",
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    action: "UPDATE",
    resource: "USER",
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440004",
    description: "Delete users",
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    action: "DELETE",
    resource: "USER",
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440005",
    description: "Create new products",
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    action: "CREATE",
    resource: "PRODUCT",
  },
];

// CREATE - สร้าง Permission ใหม่
export const createPermission = (
  permissionData: Omit<Permission, "id" | "created_at" | "updated_at">
): Permission => {
  const newPermission: Permission = {
    ...permissionData,
    id: generateId(),
    created_at: getCurrentTimestamp(),
    updated_at: getCurrentTimestamp(),
  };

  permissions.push(newPermission);
  return newPermission;
};

// READ - อ่าน Permission ทั้งหมด
export const getAllPermissions = (): Permission[] => {
  return [...permissions];
};

// READ - อ่าน Permission ตาม ID
export const getPermissionById = (id: string): Permission | undefined => {
  return permissions.find((permission) => permission.id === id);
};

// READ - อ่าน Permission ตาม action
export const getPermissionsByAction = (action: string): Permission[] => {
  return permissions.filter((permission) => permission.action === action);
};

// READ - อ่าน Permission ตาม resource
export const getPermissionsByResource = (resource: string): Permission[] => {
  return permissions.filter((permission) => permission.resource === resource);
};

// READ - อ่าน Permission ตาม action และ resource
export const getPermissionsByActionAndResource = (
  action: string,
  resource: string
): Permission[] => {
  return permissions.filter(
    (permission) =>
      permission.action === action && permission.resource === resource
  );
};

// READ - อ่าน Permission ที่มี description
export const getPermissionsWithDescription = (): Permission[] => {
  return permissions.filter((permission) => permission.description !== null);
};

// READ - อ่าน Permission ที่ไม่มี description
export const getPermissionsWithoutDescription = (): Permission[] => {
  return permissions.filter((permission) => permission.description === null);
};

// UPDATE - อัปเดต Permission
export const updatePermission = (
  id: string,
  updateData: Partial<Omit<Permission, "id" | "created_at" | "created_by_id">>
): Permission | null => {
  const index = permissions.findIndex((permission) => permission.id === id);

  if (index === -1) {
    return null;
  }

  permissions[index] = {
    ...permissions[index],
    ...updateData,
    updated_at: getCurrentTimestamp(),
  };

  return permissions[index];
};

// UPDATE - อัปเดต Permission action
export const updatePermissionAction = (
  id: string,
  action: string
): Permission | null => {
  return updatePermission(id, { action });
};

// UPDATE - อัปเดต Permission resource
export const updatePermissionResource = (
  id: string,
  resource: string
): Permission | null => {
  return updatePermission(id, { resource });
};

// UPDATE - อัปเดต Permission description
export const updatePermissionDescription = (
  id: string,
  description: string
): Permission | null => {
  return updatePermission(id, { description });
};

// DELETE - ลบ Permission
export const deletePermission = (id: string): boolean => {
  const index = permissions.findIndex((permission) => permission.id === id);

  if (index === -1) {
    return false;
  }

  permissions.splice(index, 1);
  return true;
};

// DELETE - ลบ Permission ตาม action
export const deletePermissionsByAction = (action: string): number => {
  const initialLength = permissions.length;
  const filteredPermissions = permissions.filter(
    (permission) => permission.action !== action
  );
  const deletedCount = initialLength - filteredPermissions.length;

  permissions.length = 0;
  permissions.push(...filteredPermissions);

  return deletedCount;
};

// DELETE - ลบ Permission ตาม resource
export const deletePermissionsByResource = (resource: string): number => {
  const initialLength = permissions.length;
  const filteredPermissions = permissions.filter(
    (permission) => permission.resource !== resource
  );
  const deletedCount = initialLength - filteredPermissions.length;

  permissions.length = 0;
  permissions.push(...filteredPermissions);

  return deletedCount;
};

// Utility function สำหรับล้างข้อมูลทั้งหมด (ใช้สำหรับ testing)
export const clearAllPermissions = (): void => {
  permissions.length = 0;
};

// Utility function สำหรับนับจำนวน Permission
export const getPermissionCount = (): number => {
  return permissions.length;
};

// Utility function สำหรับนับจำนวน Permission ตาม action
export const getPermissionCountByAction = (action: string): number => {
  return permissions.filter((permission) => permission.action === action)
    .length;
};

// Utility function สำหรับนับจำนวน Permission ตาม resource
export const getPermissionCountByResource = (resource: string): number => {
  return permissions.filter((permission) => permission.resource === resource)
    .length;
};

// Utility function สำหรับค้นหา Permission แบบ advanced search
export const searchPermissions = (searchCriteria: {
  action?: string;
  resource?: string;
  description?: string;
  has_description?: boolean;
}): Permission[] => {
  return permissions.filter((permission) => {
    if (searchCriteria.action && permission.action !== searchCriteria.action) {
      return false;
    }

    if (
      searchCriteria.resource &&
      permission.resource !== searchCriteria.resource
    ) {
      return false;
    }

    if (
      searchCriteria.description &&
      permission.description &&
      !permission.description
        .toLowerCase()
        .includes(searchCriteria.description.toLowerCase())
    ) {
      return false;
    }

    if (searchCriteria.has_description !== undefined) {
      const hasDescription = permission.description !== null;
      if (hasDescription !== searchCriteria.has_description) {
        return false;
      }
    }

    return true;
  });
};

// Utility function สำหรับตรวจสอบ Permission ที่ซ้ำ
export const isPermissionExists = (
  action: string,
  resource: string
): boolean => {
  return permissions.some(
    (permission) =>
      permission.action === action && permission.resource === resource
  );
};

// Utility function สำหรับตรวจสอบ Permission ที่มี description
export const hasPermissionsWithDescription = (): boolean => {
  return permissions.some((permission) => permission.description !== null);
};

// Utility function สำหรับตรวจสอบ Permission ตาม action
export const hasPermissionsByAction = (action: string): boolean => {
  return permissions.some((permission) => permission.action === action);
};

// Utility function สำหรับตรวจสอบ Permission ตาม resource
export const hasPermissionsByResource = (resource: string): boolean => {
  return permissions.some((permission) => permission.resource === resource);
};
