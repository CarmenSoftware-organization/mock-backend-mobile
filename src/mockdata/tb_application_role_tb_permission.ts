import { generateId, getCurrentTimestamp } from "@/libs/utils";

export interface ApplicationRolePermission {
  id: string;
  application_role_id: string;
  permission_id: string;
  created_at: string;
  created_by_id: string;
  updated_at: string;
  updated_by_id: string | null;
}

export const applicationRolePermissions: ApplicationRolePermission[] = [
  {
    id: "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
    application_role_id: "role_001",
    permission_id: "perm_001",
    created_at: "2025-07-29T06:00:00.000Z",
    created_by_id: "admin_001",
    updated_at: "2025-07-29T06:00:00.000Z",
    updated_by_id: null,
  },
  {
    id: "b2c3d4e5-f6g7-8901-bcde-f23456789012",
    application_role_id: "role_001",
    permission_id: "perm_002",
    created_at: "2025-07-29T06:01:00.000Z",
    created_by_id: "admin_001",
    updated_at: "2025-07-29T06:01:00.000Z",
    updated_by_id: null,
  },
  {
    id: "c3d4e5f6-g7h8-9012-cdef-345678901234",
    application_role_id: "role_002",
    permission_id: "perm_001",
    created_at: "2025-07-29T06:02:00.000Z",
    created_by_id: "admin_001",
    updated_at: "2025-07-29T06:02:00.000Z",
    updated_by_id: null,
  },
  {
    id: "d4e5f6g7-h8i9-0123-defg-456789012345",
    application_role_id: "role_002",
    permission_id: "perm_003",
    created_at: "2025-07-29T06:03:00.000Z",
    created_by_id: "admin_001",
    updated_at: "2025-07-29T06:03:00.000Z",
    updated_by_id: null,
  },
  {
    id: "e5f6g7h8-i9j0-1234-efgh-567890123456",
    application_role_id: "role_003",
    permission_id: "perm_004",
    created_at: "2025-07-29T06:04:00.000Z",
    created_by_id: "admin_001",
    updated_at: "2025-07-29T06:04:00.000Z",
    updated_by_id: null,
  },
];

// Optimized indexing system for better performance
const rolePermissionIndexes = {
  byId: new Map<string, ApplicationRolePermission>(),
  byRoleId: new Map<string, ApplicationRolePermission[]>(),
  byPermissionId: new Map<string, ApplicationRolePermission[]>(),
  byCreatedBy: new Map<string, ApplicationRolePermission[]>(),
  byUpdatedBy: new Map<string, ApplicationRolePermission[]>(),
  rolePermissionPairs: new Set<string>(), // For O(1) hasRolePermission checks
  permissionsByRole: new Map<string, Set<string>>(), // Role -> Set of permissions
  rolesByPermission: new Map<string, Set<string>>(), // Permission -> Set of roles
};

// Helper function to create role-permission pair key
const createRolePermissionKey = (roleId: string, permissionId: string): string =>
  `${roleId}:${permissionId}`;

// Helper function to rebuild indexes
const rebuildRolePermissionIndexes = (): void => {
  // Clear existing indexes
  rolePermissionIndexes.byId.clear();
  rolePermissionIndexes.byRoleId.clear();
  rolePermissionIndexes.byPermissionId.clear();
  rolePermissionIndexes.byCreatedBy.clear();
  rolePermissionIndexes.byUpdatedBy.clear();
  rolePermissionIndexes.rolePermissionPairs.clear();
  rolePermissionIndexes.permissionsByRole.clear();
  rolePermissionIndexes.rolesByPermission.clear();

  // Rebuild indexes
  for (const permission of applicationRolePermissions) {
    // Index by ID
    rolePermissionIndexes.byId.set(permission.id, permission);

    // Index by role ID
    if (!rolePermissionIndexes.byRoleId.has(permission.application_role_id)) {
      rolePermissionIndexes.byRoleId.set(permission.application_role_id, []);
    }
    rolePermissionIndexes.byRoleId.get(permission.application_role_id)!.push(permission);

    // Index by permission ID
    if (!rolePermissionIndexes.byPermissionId.has(permission.permission_id)) {
      rolePermissionIndexes.byPermissionId.set(permission.permission_id, []);
    }
    rolePermissionIndexes.byPermissionId.get(permission.permission_id)!.push(permission);

    // Index by created_by_id
    if (!rolePermissionIndexes.byCreatedBy.has(permission.created_by_id)) {
      rolePermissionIndexes.byCreatedBy.set(permission.created_by_id, []);
    }
    rolePermissionIndexes.byCreatedBy.get(permission.created_by_id)!.push(permission);

    // Index by updated_by_id
    if (permission.updated_by_id) {
      if (!rolePermissionIndexes.byUpdatedBy.has(permission.updated_by_id)) {
        rolePermissionIndexes.byUpdatedBy.set(permission.updated_by_id, []);
      }
      rolePermissionIndexes.byUpdatedBy.get(permission.updated_by_id)!.push(permission);
    }

    // Index role-permission pairs
    const pairKey = createRolePermissionKey(permission.application_role_id, permission.permission_id);
    rolePermissionIndexes.rolePermissionPairs.add(pairKey);

    // Index permissions by role
    if (!rolePermissionIndexes.permissionsByRole.has(permission.application_role_id)) {
      rolePermissionIndexes.permissionsByRole.set(permission.application_role_id, new Set());
    }
    rolePermissionIndexes.permissionsByRole.get(permission.application_role_id)!.add(permission.permission_id);

    // Index roles by permission
    if (!rolePermissionIndexes.rolesByPermission.has(permission.permission_id)) {
      rolePermissionIndexes.rolesByPermission.set(permission.permission_id, new Set());
    }
    rolePermissionIndexes.rolesByPermission.get(permission.permission_id)!.add(permission.application_role_id);
  }
};

// Initialize indexes
rebuildRolePermissionIndexes();

// CREATE - สร้าง ApplicationRolePermission ใหม่
export const createApplicationRolePermission = (
  permissionData: Omit<
    ApplicationRolePermission,
    "id" | "created_at" | "updated_at"
  >
): ApplicationRolePermission => {
  // Validate required fields
  if (!permissionData.application_role_id?.trim()) {
    throw new Error("Application role ID is required");
  }
  if (!permissionData.permission_id?.trim()) {
    throw new Error("Permission ID is required");
  }
  if (!permissionData.created_by_id?.trim()) {
    throw new Error("Created by ID is required");
  }

  // Check for duplicate role-permission pair
  if (hasRolePermission(permissionData.application_role_id, permissionData.permission_id)) {
    throw new Error(`Role '${permissionData.application_role_id}' already has permission '${permissionData.permission_id}'`);
  }

  const newPermission: ApplicationRolePermission = {
    ...permissionData,
    id: generateId(),
    created_at: getCurrentTimestamp(),
    updated_at: getCurrentTimestamp(),
  };

  applicationRolePermissions.push(newPermission);
  rebuildRolePermissionIndexes(); // Rebuild indexes after adding new permission
  return newPermission;
};

// READ - อ่าน ApplicationRolePermission ทั้งหมด
export const getAllApplicationRolePermissions =
  (): ApplicationRolePermission[] => {
    return [...applicationRolePermissions];
  };

// READ - อ่าน ApplicationRolePermission ตาม ID (O(1) lookup)
export const getApplicationRolePermissionById = (
  id: string
): ApplicationRolePermission | undefined => {
  if (!id?.trim()) return undefined;
  return rolePermissionIndexes.byId.get(id);
};

// READ - อ่าน ApplicationRolePermission ตาม application_role_id (O(1) lookup)
export const getApplicationRolePermissionsByRoleId = (
  roleId: string
): ApplicationRolePermission[] => {
  if (!roleId?.trim()) return [];
  return [...(rolePermissionIndexes.byRoleId.get(roleId) ?? [])];
};

// READ - อ่าน ApplicationRolePermission ตาม permission_id (O(1) lookup)
export const getApplicationRolePermissionsByPermissionId = (
  permissionId: string
): ApplicationRolePermission[] => {
  if (!permissionId?.trim()) return [];
  return [...(rolePermissionIndexes.byPermissionId.get(permissionId) ?? [])];
};

// READ - อ่าน ApplicationRolePermission ตาม created_by_id (O(1) lookup)
export const getApplicationRolePermissionsByCreatedBy = (
  createdById: string
): ApplicationRolePermission[] => {
  if (!createdById?.trim()) return [];
  return [...(rolePermissionIndexes.byCreatedBy.get(createdById) ?? [])];
};

// READ - อ่าน ApplicationRolePermission ตาม updated_by_id (O(1) lookup)
export const getApplicationRolePermissionsByUpdatedBy = (
  updatedById: string
): ApplicationRolePermission[] => {
  if (!updatedById?.trim()) return [];
  return [...(rolePermissionIndexes.byUpdatedBy.get(updatedById) ?? [])];
};

// READ - ตรวจสอบว่า role มี permission หรือไม่ (O(1) lookup)
export const hasRolePermission = (
  roleId: string,
  permissionId: string
): boolean => {
  if (!roleId?.trim() || !permissionId?.trim()) return false;
  const pairKey = createRolePermissionKey(roleId, permissionId);
  return rolePermissionIndexes.rolePermissionPairs.has(pairKey);
};

// READ - อ่าน permissions ทั้งหมดของ role (O(1) lookup)
export const getPermissionsByRoleId = (roleId: string): string[] => {
  if (!roleId?.trim()) return [];
  const permissionSet = rolePermissionIndexes.permissionsByRole.get(roleId);
  return permissionSet ? [...permissionSet] : [];
};

// READ - อ่าน roles ทั้งหมดที่มี permission (O(1) lookup)
export const getRolesByPermissionId = (permissionId: string): string[] => {
  if (!permissionId?.trim()) return [];
  const roleSet = rolePermissionIndexes.rolesByPermission.get(permissionId);
  return roleSet ? [...roleSet] : [];
};

// UPDATE - อัปเดต ApplicationRolePermission
export const updateApplicationRolePermission = (
  id: string,
  updateData: Partial<
    Omit<ApplicationRolePermission, "id" | "created_at" | "created_by_id">
  >,
  updatedById: string
): ApplicationRolePermission | null => {
  if (!id?.trim() || !updatedById?.trim()) {
    return null;
  }

  const index = applicationRolePermissions.findIndex(
    (permission) => permission.id === id
  );

  if (index === -1) {
    return null;
  }

  const currentPermission = applicationRolePermissions[index];

  // Check for duplicate if role_id or permission_id is being updated
  if ((updateData.application_role_id || updateData.permission_id)) {
    const newRoleId = updateData.application_role_id || currentPermission.application_role_id;
    const newPermissionId = updateData.permission_id || currentPermission.permission_id;

    // Only check if the combination is actually changing
    if (newRoleId !== currentPermission.application_role_id || newPermissionId !== currentPermission.permission_id) {
      if (hasRolePermission(newRoleId, newPermissionId)) {
        throw new Error(`Role '${newRoleId}' already has permission '${newPermissionId}'`);
      }
    }
  }

  applicationRolePermissions[index] = {
    ...applicationRolePermissions[index],
    ...updateData,
    updated_at: getCurrentTimestamp(),
    updated_by_id: updatedById,
  };

  rebuildRolePermissionIndexes(); // Rebuild indexes after update
  return applicationRolePermissions[index];
};

// UPDATE - อัปเดต ApplicationRolePermission application_role_id
export const updateApplicationRolePermissionRoleId = (
  id: string,
  roleId: string,
  updatedById: string
): ApplicationRolePermission | null => {
  return updateApplicationRolePermission(
    id,
    { application_role_id: roleId },
    updatedById
  );
};

// UPDATE - อัปเดต ApplicationRolePermission permission_id
export const updateApplicationRolePermissionPermissionId = (
  id: string,
  permissionId: string,
  updatedById: string
): ApplicationRolePermission | null => {
  return updateApplicationRolePermission(
    id,
    { permission_id: permissionId },
    updatedById
  );
};

// UPDATE - อัปเดต ApplicationRolePermission โดย role_id และ permission_id
export const updateApplicationRolePermissionByRoleAndPermission = (
  roleId: string,
  permissionId: string,
  updateData: Partial<
    Omit<
      ApplicationRolePermission,
      | "id"
      | "application_role_id"
      | "permission_id"
      | "created_at"
      | "created_by_id"
    >
  >,
  updatedById: string
): ApplicationRolePermission | null => {
  const permission = applicationRolePermissions.find(
    (p) => p.application_role_id === roleId && p.permission_id === permissionId
  );

  if (!permission) return null;

  return updateApplicationRolePermission(
    permission.id,
    updateData,
    updatedById
  );
};

// DELETE - ลบ ApplicationRolePermission
export const deleteApplicationRolePermission = (id: string): boolean => {
  if (!id?.trim()) {
    return false;
  }

  const index = applicationRolePermissions.findIndex(
    (permission) => permission.id === id
  );

  if (index === -1) {
    return false;
  }

  applicationRolePermissions.splice(index, 1);
  rebuildRolePermissionIndexes(); // Rebuild indexes after deletion
  return true;
};

// DELETE - ลบ ApplicationRolePermission ตาม application_role_id
export const deleteApplicationRolePermissionsByRoleId = (
  roleId: string
): number => {
  if (!roleId?.trim()) {
    return 0;
  }

  const initialLength = applicationRolePermissions.length;
  const filteredPermissions = applicationRolePermissions.filter(
    (permission) => permission.application_role_id !== roleId
  );
  const deletedCount = initialLength - filteredPermissions.length;

  if (deletedCount > 0) {
    // แทนที่ array เดิม
    applicationRolePermissions.length = 0;
    applicationRolePermissions.push(...filteredPermissions);
    rebuildRolePermissionIndexes(); // Rebuild indexes after bulk deletion
  }

  return deletedCount;
};

// DELETE - ลบ ApplicationRolePermission ตาม permission_id
export const deleteApplicationRolePermissionsByPermissionId = (
  permissionId: string
): number => {
  if (!permissionId?.trim()) {
    return 0;
  }

  const initialLength = applicationRolePermissions.length;
  const filteredPermissions = applicationRolePermissions.filter(
    (permission) => permission.permission_id !== permissionId
  );
  const deletedCount = initialLength - filteredPermissions.length;

  if (deletedCount > 0) {
    // แทนที่ array เดิม
    applicationRolePermissions.length = 0;
    applicationRolePermissions.push(...filteredPermissions);
    rebuildRolePermissionIndexes(); // Rebuild indexes after bulk deletion
  }

  return deletedCount;
};

// DELETE - ลบ ApplicationRolePermission ตาม role_id และ permission_id
export const deleteApplicationRolePermissionByRoleAndPermission = (
  roleId: string,
  permissionId: string
): boolean => {
  if (!roleId?.trim() || !permissionId?.trim()) {
    return false;
  }

  const index = applicationRolePermissions.findIndex(
    (permission) =>
      permission.application_role_id === roleId &&
      permission.permission_id === permissionId
  );

  if (index === -1) {
    return false;
  }

  applicationRolePermissions.splice(index, 1);
  rebuildRolePermissionIndexes(); // Rebuild indexes after deletion
  return true;
};

// BULK OPERATIONS - เพิ่ม permissions หลายตัวให้กับ role (Optimized)
export const addPermissionsToRole = (
  roleId: string,
  permissionIds: string[],
  createdById: string
): ApplicationRolePermission[] => {
  if (!roleId?.trim() || !createdById?.trim() || !Array.isArray(permissionIds)) {
    return [];
  }

  const newPermissions: ApplicationRolePermission[] = [];
  const uniquePermissionIds = [...new Set(permissionIds.filter(id => id?.trim()))];

  // Batch create permissions to avoid multiple index rebuilds
  const permissionsToAdd: ApplicationRolePermission[] = [];

  uniquePermissionIds.forEach((permissionId) => {
    // Use optimized O(1) check
    if (!hasRolePermission(roleId, permissionId)) {
      const newPermission: ApplicationRolePermission = {
        id: generateId(),
        application_role_id: roleId,
        permission_id: permissionId,
        created_by_id: createdById,
        updated_by_id: null,
        created_at: getCurrentTimestamp(),
        updated_at: getCurrentTimestamp(),
      };
      permissionsToAdd.push(newPermission);
      newPermissions.push(newPermission);
    }
  });

  if (permissionsToAdd.length > 0) {
    applicationRolePermissions.push(...permissionsToAdd);
    rebuildRolePermissionIndexes(); // Single index rebuild for all additions
  }

  return newPermissions;
};

// BULK OPERATIONS - ลบ permissions หลายตัวออกจาก role (Optimized)
export const removePermissionsFromRole = (
  roleId: string,
  permissionIds: string[]
): number => {
  if (!roleId?.trim() || !Array.isArray(permissionIds)) {
    return 0;
  }

  const uniquePermissionIds = [...new Set(permissionIds.filter(id => id?.trim()))];
  const initialLength = applicationRolePermissions.length;

  // Batch remove permissions to avoid multiple index rebuilds
  const filteredPermissions = applicationRolePermissions.filter(
    (permission) => {
      if (permission.application_role_id === roleId) {
        return !uniquePermissionIds.includes(permission.permission_id);
      }
      return true;
    }
  );

  const deletedCount = initialLength - filteredPermissions.length;

  if (deletedCount > 0) {
    applicationRolePermissions.length = 0;
    applicationRolePermissions.push(...filteredPermissions);
    rebuildRolePermissionIndexes(); // Single index rebuild for all deletions
  }

  return deletedCount;
};

// BULK OPERATIONS - อัปเดต permissions ของ role (แทนที่ทั้งหมด)
export const updateRolePermissions = (
  roleId: string,
  permissionIds: string[],
  updatedById: string
): ApplicationRolePermission[] => {
  // ลบ permissions เดิมทั้งหมดของ role
  deleteApplicationRolePermissionsByRoleId(roleId);

  // เพิ่ม permissions ใหม่
  return addPermissionsToRole(roleId, permissionIds, updatedById);
};

// Utility function สำหรับล้างข้อมูลทั้งหมด (ใช้สำหรับ testing)
export const clearAllApplicationRolePermissions = (): void => {
  applicationRolePermissions.length = 0;
  rebuildRolePermissionIndexes(); // Rebuild indexes after clearing all data
};

// Utility function สำหรับนับจำนวน ApplicationRolePermission
export const getApplicationRolePermissionCount = (): number => {
  return applicationRolePermissions.length;
};

// Utility function สำหรับนับจำนวน permissions ของ role (O(1) lookup)
export const getPermissionCountByRoleId = (roleId: string): number => {
  if (!roleId?.trim()) return 0;
  const permissions = rolePermissionIndexes.permissionsByRole.get(roleId);
  return permissions ? permissions.size : 0;
};

// Utility function สำหรับนับจำนวน roles ที่มี permission (O(1) lookup)
export const getRoleCountByPermissionId = (permissionId: string): number => {
  if (!permissionId?.trim()) return 0;
  const roles = rolePermissionIndexes.rolesByPermission.get(permissionId);
  return roles ? roles.size : 0;
};

// Utility function สำหรับค้นหา ApplicationRolePermission แบบ advanced search
export const searchApplicationRolePermissions = (searchCriteria: {
  application_role_id?: string;
  permission_id?: string;
  created_by_id?: string;
  updated_by_id?: string;
  start_date?: string;
  end_date?: string;
}): ApplicationRolePermission[] => {
  return applicationRolePermissions.filter((permission) => {
    // ตรวจสอบ application_role_id
    if (
      searchCriteria.application_role_id &&
      permission.application_role_id !== searchCriteria.application_role_id
    ) {
      return false;
    }

    // ตรวจสอบ permission_id
    if (
      searchCriteria.permission_id &&
      permission.permission_id !== searchCriteria.permission_id
    ) {
      return false;
    }

    // ตรวจสอบ created_by_id
    if (
      searchCriteria.created_by_id &&
      permission.created_by_id !== searchCriteria.created_by_id
    ) {
      return false;
    }

    // ตรวจสอบ updated_by_id
    if (
      searchCriteria.updated_by_id &&
      permission.updated_by_id !== searchCriteria.updated_by_id
    ) {
      return false;
    }

    // ตรวจสอบช่วงเวลา
    if (searchCriteria.start_date || searchCriteria.end_date) {
      const permissionDate = new Date(permission.created_at);

      if (searchCriteria.start_date) {
        const startDate = new Date(searchCriteria.start_date);
        if (permissionDate < startDate) {
          return false;
        }
      }

      if (searchCriteria.end_date) {
        const endDate = new Date(searchCriteria.end_date);
        if (permissionDate > endDate) {
          return false;
        }
      }
    }

    return true;
  });
};

// Utility function สำหรับตรวจสอบ permission ซ้ำ (O(1) lookup)
export const isApplicationRolePermissionExists = (
  roleId: string,
  permissionId: string
): boolean => {
  return hasRolePermission(roleId, permissionId); // Use optimized function
};

// Utility function สำหรับตรวจสอบ role_id ซ้ำ (O(1) lookup)
export const isApplicationRoleExists = (roleId: string): boolean => {
  if (!roleId?.trim()) return false;
  return rolePermissionIndexes.byRoleId.has(roleId);
};

// Utility function สำหรับตรวจสอบ permission_id ซ้ำ (O(1) lookup)
export const isPermissionExists = (permissionId: string): boolean => {
  if (!permissionId?.trim()) return false;
  return rolePermissionIndexes.byPermissionId.has(permissionId);
};

// Utility function สำหรับลบ ApplicationRolePermission ทั้งหมดของ role (hard delete)
export const hardDeleteApplicationRolePermissionsByRoleId = (
  roleId: string
): number => {
  if (!roleId?.trim()) {
    return 0;
  }

  const initialLength = applicationRolePermissions.length;
  const filteredPermissions = applicationRolePermissions.filter(
    (permission) => permission.application_role_id !== roleId
  );
  const deletedCount = initialLength - filteredPermissions.length;

  if (deletedCount > 0) {
    // แทนที่ array เดิม
    applicationRolePermissions.length = 0;
    applicationRolePermissions.push(...filteredPermissions);
    rebuildRolePermissionIndexes(); // Rebuild indexes after hard delete
  }

  return deletedCount;
};

// Utility function สำหรับลบ ApplicationRolePermission ทั้งหมดของ permission (hard delete)
export const hardDeleteApplicationRolePermissionsByPermissionId = (
  permissionId: string
): number => {
  if (!permissionId?.trim()) {
    return 0;
  }

  const initialLength = applicationRolePermissions.length;
  const filteredPermissions = applicationRolePermissions.filter(
    (permission) => permission.permission_id !== permissionId
  );
  const deletedCount = initialLength - filteredPermissions.length;

  if (deletedCount > 0) {
    // แทนที่ array เดิม
    applicationRolePermissions.length = 0;
    applicationRolePermissions.push(...filteredPermissions);
    rebuildRolePermissionIndexes(); // Rebuild indexes after hard delete
  }

  return deletedCount;
};
