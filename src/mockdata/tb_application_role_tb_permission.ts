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

// CREATE - สร้าง ApplicationRolePermission ใหม่
export const createApplicationRolePermission = (
  permissionData: Omit<
    ApplicationRolePermission,
    "id" | "created_at" | "updated_at"
  >
): ApplicationRolePermission => {
  const newPermission: ApplicationRolePermission = {
    ...permissionData,
    id: generateId(),
    created_at: getCurrentTimestamp(),
    updated_at: getCurrentTimestamp(),
  };

  applicationRolePermissions.push(newPermission);
  return newPermission;
};

// READ - อ่าน ApplicationRolePermission ทั้งหมด
export const getAllApplicationRolePermissions =
  (): ApplicationRolePermission[] => {
    return [...applicationRolePermissions];
  };

// READ - อ่าน ApplicationRolePermission ตาม ID
export const getApplicationRolePermissionById = (
  id: string
): ApplicationRolePermission | undefined => {
  return applicationRolePermissions.find((permission) => permission.id === id);
};

// READ - อ่าน ApplicationRolePermission ตาม application_role_id
export const getApplicationRolePermissionsByRoleId = (
  roleId: string
): ApplicationRolePermission[] => {
  return applicationRolePermissions.filter(
    (permission) => permission.application_role_id === roleId
  );
};

// READ - อ่าน ApplicationRolePermission ตาม permission_id
export const getApplicationRolePermissionsByPermissionId = (
  permissionId: string
): ApplicationRolePermission[] => {
  return applicationRolePermissions.filter(
    (permission) => permission.permission_id === permissionId
  );
};

// READ - อ่าน ApplicationRolePermission ตาม created_by_id
export const getApplicationRolePermissionsByCreatedBy = (
  createdById: string
): ApplicationRolePermission[] => {
  return applicationRolePermissions.filter(
    (permission) => permission.created_by_id === createdById
  );
};

// READ - อ่าน ApplicationRolePermission ตาม updated_by_id
export const getApplicationRolePermissionsByUpdatedBy = (
  updatedById: string
): ApplicationRolePermission[] => {
  return applicationRolePermissions.filter(
    (permission) => permission.updated_by_id === updatedById
  );
};

// READ - ตรวจสอบว่า role มี permission หรือไม่
export const hasRolePermission = (
  roleId: string,
  permissionId: string
): boolean => {
  return applicationRolePermissions.some(
    (permission) =>
      permission.application_role_id === roleId &&
      permission.permission_id === permissionId
  );
};

// READ - อ่าน permissions ทั้งหมดของ role
export const getPermissionsByRoleId = (roleId: string): string[] => {
  return applicationRolePermissions
    .filter((permission) => permission.application_role_id === roleId)
    .map((permission) => permission.permission_id);
};

// READ - อ่าน roles ทั้งหมดที่มี permission
export const getRolesByPermissionId = (permissionId: string): string[] => {
  return applicationRolePermissions
    .filter((permission) => permission.permission_id === permissionId)
    .map((permission) => permission.application_role_id);
};

// UPDATE - อัปเดต ApplicationRolePermission
export const updateApplicationRolePermission = (
  id: string,
  updateData: Partial<
    Omit<ApplicationRolePermission, "id" | "created_at" | "created_by_id">
  >,
  updatedById: string
): ApplicationRolePermission | null => {
  const index = applicationRolePermissions.findIndex(
    (permission) => permission.id === id
  );

  if (index === -1) {
    return null;
  }

  applicationRolePermissions[index] = {
    ...applicationRolePermissions[index],
    ...updateData,
    updated_at: getCurrentTimestamp(),
    updated_by_id: updatedById,
  };

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
  const index = applicationRolePermissions.findIndex(
    (permission) => permission.id === id
  );

  if (index === -1) {
    return false;
  }

  applicationRolePermissions.splice(index, 1);
  return true;
};

// DELETE - ลบ ApplicationRolePermission ตาม application_role_id
export const deleteApplicationRolePermissionsByRoleId = (
  roleId: string
): number => {
  const initialLength = applicationRolePermissions.length;
  const filteredPermissions = applicationRolePermissions.filter(
    (permission) => permission.application_role_id !== roleId
  );
  const deletedCount = initialLength - filteredPermissions.length;

  // แทนที่ array เดิม
  applicationRolePermissions.length = 0;
  applicationRolePermissions.push(...filteredPermissions);

  return deletedCount;
};

// DELETE - ลบ ApplicationRolePermission ตาม permission_id
export const deleteApplicationRolePermissionsByPermissionId = (
  permissionId: string
): number => {
  const initialLength = applicationRolePermissions.length;
  const filteredPermissions = applicationRolePermissions.filter(
    (permission) => permission.permission_id !== permissionId
  );
  const deletedCount = initialLength - filteredPermissions.length;

  // แทนที่ array เดิม
  applicationRolePermissions.length = 0;
  applicationRolePermissions.push(...filteredPermissions);

  return deletedCount;
};

// DELETE - ลบ ApplicationRolePermission ตาม role_id และ permission_id
export const deleteApplicationRolePermissionByRoleAndPermission = (
  roleId: string,
  permissionId: string
): boolean => {
  const index = applicationRolePermissions.findIndex(
    (permission) =>
      permission.application_role_id === roleId &&
      permission.permission_id === permissionId
  );

  if (index === -1) {
    return false;
  }

  applicationRolePermissions.splice(index, 1);
  return true;
};

// BULK OPERATIONS - เพิ่ม permissions หลายตัวให้กับ role
export const addPermissionsToRole = (
  roleId: string,
  permissionIds: string[],
  createdById: string
): ApplicationRolePermission[] => {
  const newPermissions: ApplicationRolePermission[] = [];

  permissionIds.forEach((permissionId) => {
    // ตรวจสอบว่า permission นี้มีอยู่แล้วหรือไม่
    const exists = applicationRolePermissions.some(
      (p) =>
        p.application_role_id === roleId && p.permission_id === permissionId
    );

    if (!exists) {
      const newPermission = createApplicationRolePermission({
        application_role_id: roleId,
        permission_id: permissionId,
        created_by_id: createdById,
        updated_by_id: null,
      });
      newPermissions.push(newPermission);
    }
  });

  return newPermissions;
};

// BULK OPERATIONS - ลบ permissions หลายตัวออกจาก role
export const removePermissionsFromRole = (
  roleId: string,
  permissionIds: string[]
): number => {
  let deletedCount = 0;

  permissionIds.forEach((permissionId) => {
    const deleted = deleteApplicationRolePermissionByRoleAndPermission(
      roleId,
      permissionId
    );
    if (deleted) deletedCount++;
  });

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
};

// Utility function สำหรับนับจำนวน ApplicationRolePermission
export const getApplicationRolePermissionCount = (): number => {
  return applicationRolePermissions.length;
};

// Utility function สำหรับนับจำนวน permissions ของ role
export const getPermissionCountByRoleId = (roleId: string): number => {
  return applicationRolePermissions.filter(
    (permission) => permission.application_role_id === roleId
  ).length;
};

// Utility function สำหรับนับจำนวน roles ที่มี permission
export const getRoleCountByPermissionId = (permissionId: string): number => {
  return applicationRolePermissions.filter(
    (permission) => permission.permission_id === permissionId
  ).length;
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

// Utility function สำหรับตรวจสอบ permission ซ้ำ
export const isApplicationRolePermissionExists = (
  roleId: string,
  permissionId: string
): boolean => {
  return applicationRolePermissions.some(
    (permission) =>
      permission.application_role_id === roleId &&
      permission.permission_id === permissionId
  );
};

// Utility function สำหรับตรวจสอบ role_id ซ้ำ
export const isApplicationRoleExists = (roleId: string): boolean => {
  return applicationRolePermissions.some(
    (permission) => permission.application_role_id === roleId
  );
};

// Utility function สำหรับตรวจสอบ permission_id ซ้ำ
export const isPermissionExists = (permissionId: string): boolean => {
  return applicationRolePermissions.some(
    (permission) => permission.permission_id === permissionId
  );
};

// Utility function สำหรับลบ ApplicationRolePermission ทั้งหมดของ role (hard delete)
export const hardDeleteApplicationRolePermissionsByRoleId = (
  roleId: string
): number => {
  const initialLength = applicationRolePermissions.length;
  const filteredPermissions = applicationRolePermissions.filter(
    (permission) => permission.application_role_id !== roleId
  );
  const deletedCount = initialLength - filteredPermissions.length;

  // แทนที่ array เดิม
  applicationRolePermissions.length = 0;
  applicationRolePermissions.push(...filteredPermissions);

  return deletedCount;
};

// Utility function สำหรับลบ ApplicationRolePermission ทั้งหมดของ permission (hard delete)
export const hardDeleteApplicationRolePermissionsByPermissionId = (
  permissionId: string
): number => {
  const initialLength = applicationRolePermissions.length;
  const filteredPermissions = applicationRolePermissions.filter(
    (permission) => permission.permission_id !== permissionId
  );
  const deletedCount = initialLength - filteredPermissions.length;

  // แทนที่ array เดิม
  applicationRolePermissions.length = 0;
  applicationRolePermissions.push(...filteredPermissions);

  return deletedCount;
};
