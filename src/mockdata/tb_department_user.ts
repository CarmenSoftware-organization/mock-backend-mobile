import { generateId, getCurrentTimestamp } from "@/libs/utils";
import { getUuidByName } from "./mapping.uuid";

export interface DepartmentUser {
  id: string;
  user_id: string;
  department_id: string;
  is_hod: boolean;
  note: string | null;
  info: any;
  dimension: any;
  doc_version: string;
  created_at: string;
  created_by_id: string;
  updated_at: string;
  updated_by_id: string | null;
  deleted_at: string | null;
  deleted_by_id: string | null;
}

export const departmentUsers: DepartmentUser[] = [
  {
    id: getUuidByName("DEPARTMENT_USER_01"),
    user_id: getUuidByName("USER_01"),
    department_id: getUuidByName("DEPARTMENT_01"),
    is_hod: false,
    note: null,
    info: null,
    dimension: null,
    doc_version: "0",
    created_at: "2025-07-29T01:06:00.571Z",
    created_by_id: getUuidByName("USER_01"),
    updated_at: "2025-07-29T01:06:00.572Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("DEPARTMENT_USER_02"),
    user_id: getUuidByName("USER_02"),
    department_id: getUuidByName("DEPARTMENT_01"),
    is_hod: true,
    note: null,
    info: null,
    dimension: null,
    doc_version: "0",
    created_at: "2025-07-29T01:06:00.707Z",
    created_by_id: getUuidByName("USER_01"),
    updated_at: "2025-07-29T01:06:00.708Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("DEPARTMENT_USER_03"),
    user_id: getUuidByName("USER_03"),
    department_id: getUuidByName("DEPARTMENT_01"),
    is_hod: false,
    note: null,
    info: null,
    dimension: null,
    doc_version: "0",
    created_at: "2025-07-29T01:06:00.824Z",
    created_by_id: getUuidByName("USER_01"),
    updated_at: "2025-07-29T01:06:00.825Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("DEPARTMENT_USER_04"),
    user_id: getUuidByName("USER_04"),
    department_id: getUuidByName("DEPARTMENT_01"),
    is_hod: false,
    note: null,
    info: null,
    dimension: null,
    doc_version: "0",
    created_at: "2025-07-29T01:06:00.943Z",
    created_by_id: getUuidByName("USER_01"),
    updated_at: "2025-07-29T01:06:00.944Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
      id: getUuidByName("DEPARTMENT_USER_05"),
    user_id: getUuidByName("USER_05"),
    department_id: getUuidByName("DEPARTMENT_01"),
    is_hod: false,
    note: null,
    info: null,
    dimension: null,
    doc_version: "0",
    created_at: "2025-07-29T01:06:01.060Z",
    created_by_id: getUuidByName("USER_01"),
    updated_at: "2025-07-29T01:06:01.061Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("DEPARTMENT_USER_06"),
    user_id: getUuidByName("USER_06"),
    department_id: getUuidByName("DEPARTMENT_01"),
    is_hod: false,
    note: null,
    info: null,
    dimension: null,
    doc_version: "0",
    created_at: "2025-07-29T01:06:01.171Z",
    created_by_id: getUuidByName("USER_01"),
    updated_at: "2025-07-29T01:06:01.172Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
];

// CREATE - สร้าง DepartmentUser ใหม่
export const createDepartmentUser = (
  departmentUserData: Omit<DepartmentUser, "id" | "created_at" | "updated_at">
): DepartmentUser => {
  const newDepartmentUser: DepartmentUser = {
    ...departmentUserData,
    id: generateId(),
    created_at: getCurrentTimestamp(),
    updated_at: getCurrentTimestamp(),
  };

  departmentUsers.push(newDepartmentUser);
  return newDepartmentUser;
};

// READ - อ่าน DepartmentUser ทั้งหมด
export const getAllDepartmentUsers = (): DepartmentUser[] => {
  return [...departmentUsers];
};

// READ - อ่าน DepartmentUser ตาม ID
export const getDepartmentUserById = (
  id: string
): DepartmentUser | undefined => {
  return departmentUsers.find((departmentUser) => departmentUser.id === id);
};

// READ - อ่าน DepartmentUser ตาม user_id
export const getDepartmentUsersByUserId = (
  userId: string
): DepartmentUser[] => {
  return departmentUsers.filter(
    (departmentUser) => departmentUser.user_id === userId
  );
};

// READ - อ่าน DepartmentUser ตาม department_id
export const getDepartmentUsersByDepartmentId = (
  departmentId: string
): DepartmentUser[] => {
  return departmentUsers.filter(
    (departmentUser) => departmentUser.department_id === departmentId
  );
};

// READ - อ่าน DepartmentUser ที่เป็น HOD
export const getDepartmentUsersByHodStatus = (
  isHod: boolean
): DepartmentUser[] => {
  return departmentUsers.filter(
    (departmentUser) => departmentUser.is_hod === isHod
  );
};

// READ - อ่าน DepartmentUser ที่ active (ไม่ถูกลบ)
export const getActiveDepartmentUsers = (): DepartmentUser[] => {
  return departmentUsers.filter(
    (departmentUser) => departmentUser.deleted_at === null
  );
};

// READ - อ่าน DepartmentUser ที่ถูกลบแล้ว
export const getDeletedDepartmentUsers = (): DepartmentUser[] => {
  return departmentUsers.filter(
    (departmentUser) => departmentUser.deleted_at !== null
  );
};

// READ - อ่าน DepartmentUser ตาม doc_version
export const getDepartmentUsersByDocVersion = (
  docVersion: string
): DepartmentUser[] => {
  return departmentUsers.filter(
    (departmentUser) => departmentUser.doc_version === docVersion
  );
};

// READ - อ่าน DepartmentUser ตาม created_by_id
export const getDepartmentUsersByCreatedBy = (
  createdById: string
): DepartmentUser[] => {
  return departmentUsers.filter(
    (departmentUser) => departmentUser.created_by_id === createdById
  );
};

// READ - อ่าน DepartmentUser ตาม updated_by_id
export const getDepartmentUsersByUpdatedBy = (
  updatedById: string
): DepartmentUser[] => {
  return departmentUsers.filter(
    (departmentUser) => departmentUser.updated_by_id === updatedById
  );
};

// UPDATE - อัปเดต DepartmentUser
export const updateDepartmentUser = (
  id: string,
  updateData: Partial<
    Omit<DepartmentUser, "id" | "created_at" | "created_by_id">
  >
): DepartmentUser | null => {
  const index = departmentUsers.findIndex(
    (departmentUser) => departmentUser.id === id
  );

  if (index === -1) {
    return null;
  }

  departmentUsers[index] = {
    ...departmentUsers[index],
    ...updateData,
    updated_at: getCurrentTimestamp(),
  };

  return departmentUsers[index];
};

// UPDATE - อัปเดต DepartmentUser HOD status
export const updateDepartmentUserHodStatus = (
  id: string,
  isHod: boolean
): DepartmentUser | null => {
  return updateDepartmentUser(id, { is_hod: isHod });
};

// UPDATE - อัปเดต DepartmentUser note
export const updateDepartmentUserNote = (
  id: string,
  note: string
): DepartmentUser | null => {
  return updateDepartmentUser(id, { note });
};

// UPDATE - DepartmentUser info
export const updateDepartmentUserInfo = (
  id: string,
  info: any
): DepartmentUser | null => {
  return updateDepartmentUser(id, { info });
};

// UPDATE - DepartmentUser dimension
export const updateDepartmentUserDimension = (
  id: string,
  dimension: any
): DepartmentUser | null => {
  return updateDepartmentUser(id, { dimension });
};

// UPDATE - DepartmentUser doc_version
export const updateDepartmentUserDocVersion = (
  id: string,
  docVersion: string
): DepartmentUser | null => {
  return updateDepartmentUser(id, { doc_version: docVersion });
};

// UPDATE - DepartmentUser โดย user_id และ department_id
export const updateDepartmentUserByUserAndDepartment = (
  userId: string,
  departmentId: string,
  updateData: Partial<
    Omit<DepartmentUser, "id" | "created_at" | "created_by_id">
  >
): DepartmentUser | null => {
  const index = departmentUsers.findIndex(
    (du) => du.user_id === userId && du.department_id === departmentId
  );

  if (index === -1) {
    return null;
  }

  departmentUsers[index] = {
    ...departmentUsers[index],
    ...updateData,
    updated_at: getCurrentTimestamp(),
  };

  return departmentUsers[index];
};

// DELETE - ลบ DepartmentUser (soft delete)
export const deleteDepartmentUser = (
  id: string,
  deletedById: string
): boolean => {
  const index = departmentUsers.findIndex(
    (departmentUser) => departmentUser.id === id
  );

  if (index === -1) {
    return false;
  }

  departmentUsers[index] = {
    ...departmentUsers[index],
    deleted_at: getCurrentTimestamp(),
    deleted_by_id: deletedById,
  };

  return true;
};

// DELETE - ลบ DepartmentUser แบบถาวร
export const hardDeleteDepartmentUser = (id: string): boolean => {
  const index = departmentUsers.findIndex(
    (departmentUser) => departmentUser.id === id
  );

  if (index === -1) {
    return false;
  }

  departmentUsers.splice(index, 1);
  return true;
};

// DELETE - ลบ DepartmentUser ตาม user_id
export const deleteDepartmentUsersByUserId = (
  userId: string,
  deletedById: string
): number => {
  let deletedCount = 0;

  departmentUsers.forEach((departmentUser) => {
    if (departmentUser.user_id === userId && !departmentUser.deleted_at) {
      departmentUser.deleted_at = getCurrentTimestamp();
      departmentUser.deleted_by_id = deletedById;
      deletedCount++;
    }
  });

  return deletedCount;
};

// DELETE - ลบ DepartmentUser ตาม department_id
export const deleteDepartmentUsersByDepartmentId = (
  departmentId: string,
  deletedById: string
): number => {
  let deletedCount = 0;

  departmentUsers.forEach((departmentUser) => {
    if (
      departmentUser.department_id === departmentId &&
      !departmentUser.deleted_at
    ) {
      departmentUser.deleted_at = getCurrentTimestamp();
      departmentUser.deleted_by_id = deletedById;
      deletedCount++;
    }
  });

  return deletedCount;
};

// DELETE - ลบ DepartmentUser โดย user_id และ department_id
export const deleteDepartmentUserByUserAndDepartment = (
  userId: string,
  departmentId: string,
  deletedById: string
): boolean => {
  const index = departmentUsers.findIndex(
    (du) => du.user_id === userId && du.department_id === departmentId
  );

  if (index === -1) {
    return false;
  }

  departmentUsers[index] = {
    ...departmentUsers[index],
    deleted_at: getCurrentTimestamp(),
    deleted_by_id: deletedById,
  };

  return true;
};

// RESTORE - กู้คืน DepartmentUser ที่ถูกลบแล้ว
export const restoreDepartmentUser = (id: string): boolean => {
  const index = departmentUsers.findIndex(
    (departmentUser) => departmentUser.id === id
  );

  if (index === -1) {
    return false;
  }

  if (departmentUsers[index].deleted_at) {
    departmentUsers[index] = {
      ...departmentUsers[index],
      deleted_at: null,
      deleted_by_id: null,
    };
    return true;
  }

  return false;
};

// RESTORE - กู้คืน DepartmentUser ตาม user_id
export const restoreDepartmentUsersByUserId = (userId: string): number => {
  let restoredCount = 0;

  departmentUsers.forEach((departmentUser) => {
    if (departmentUser.user_id === userId && departmentUser.deleted_at) {
      departmentUser.deleted_at = null;
      departmentUser.deleted_by_id = null;
      restoredCount++;
    }
  });

  return restoredCount;
};

// RESTORE - กู้คืน DepartmentUser ตาม department_id
export const restoreDepartmentUsersByDepartmentId = (
  departmentId: string
): number => {
  let restoredCount = 0;

  departmentUsers.forEach((departmentUser) => {
    if (
      departmentUser.department_id === departmentId &&
      departmentUser.deleted_at
    ) {
      departmentUser.deleted_at = null;
      departmentUser.deleted_by_id = null;
      restoredCount++;
    }
  });

  return restoredCount;
};

// Utility function สำหรับล้างข้อมูลทั้งหมด (ใช้สำหรับ testing)
export const clearAllDepartmentUsers = (): void => {
  departmentUsers.length = 0;
};

// Utility function สำหรับนับจำนวน DepartmentUser
export const getDepartmentUserCount = (): number => {
  return departmentUsers.length;
};

// Utility function สำหรับนับจำนวน DepartmentUser ที่ active
export const getActiveDepartmentUserCount = (): number => {
  return departmentUsers.filter(
    (departmentUser) => departmentUser.deleted_at === null
  ).length;
};

// Utility function สำหรับนับจำนวน DepartmentUser ที่ถูกลบแล้ว
export const getDeletedDepartmentUserCount = (): number => {
  return departmentUsers.filter(
    (departmentUser) => departmentUser.deleted_at !== null
  ).length;
};

// Utility function สำหรับนับจำนวน DepartmentUser ตาม user_id
export const getDepartmentUserCountByUserId = (userId: string): number => {
  return departmentUsers.filter(
    (departmentUser) => departmentUser.user_id === userId
  ).length;
};

// Utility function สำหรับนับจำนวน DepartmentUser ตาม department_id
export const getDepartmentUserCountByDepartmentId = (
  departmentId: string
): number => {
  return departmentUsers.filter(
    (departmentUser) => departmentUser.department_id === departmentId
  ).length;
};

// Utility function สำหรับนับจำนวน DepartmentUser ที่เป็น HOD
export const getHodDepartmentUserCount = (): number => {
  return departmentUsers.filter((departmentUser) => departmentUser.is_hod)
    .length;
};

// Utility function สำหรับนับจำนวน DepartmentUser ที่ไม่ใช่ HOD
export const getNonHodDepartmentUserCount = (): number => {
  return departmentUsers.filter((departmentUser) => !departmentUser.is_hod)
    .length;
};

// Utility function สำหรับค้นหา DepartmentUser แบบ advanced search
export const searchDepartmentUsers = (searchCriteria: {
  user_id?: string;
  department_id?: string;
  is_hod?: boolean;
  doc_version?: string;
  created_by_id?: string;
  updated_by_id?: string;
  has_note?: boolean;
  has_info?: boolean;
  has_dimension?: boolean;
}): DepartmentUser[] => {
  return departmentUsers.filter((departmentUser) => {
    if (
      searchCriteria.user_id &&
      departmentUser.user_id !== searchCriteria.user_id
    ) {
      return false;
    }

    if (
      searchCriteria.department_id &&
      departmentUser.department_id !== searchCriteria.department_id
    ) {
      return false;
    }

    if (
      searchCriteria.is_hod !== undefined &&
      departmentUser.is_hod !== searchCriteria.is_hod
    ) {
      return false;
    }

    if (
      searchCriteria.doc_version &&
      departmentUser.doc_version !== searchCriteria.doc_version
    ) {
      return false;
    }

    if (
      searchCriteria.created_by_id &&
      departmentUser.created_by_id !== searchCriteria.created_by_id
    ) {
      return false;
    }

    if (
      searchCriteria.updated_by_id &&
      departmentUser.updated_by_id !== searchCriteria.updated_by_id
    ) {
      return false;
    }

    if (searchCriteria.has_note !== undefined) {
      const hasNote = departmentUser.note !== null;
      if (hasNote !== searchCriteria.has_note) {
        return false;
      }
    }

    if (searchCriteria.has_info !== undefined) {
      const hasInfo = departmentUser.info !== null;
      if (hasInfo !== searchCriteria.has_info) {
        return false;
      }
    }

    if (searchCriteria.has_dimension !== undefined) {
      const hasDimension = departmentUser.dimension !== null;
      if (hasDimension !== searchCriteria.has_dimension) {
        return false;
      }
    }

    return true;
  });
};

// Utility function สำหรับตรวจสอบ DepartmentUser ตาม user_id
export const isDepartmentUserExistsByUserId = (userId: string): boolean => {
  return departmentUsers.some(
    (departmentUser) => departmentUser.user_id === userId
  );
};

// Utility function สำหรับตรวจสอบ DepartmentUser ตาม department_id
export const isDepartmentUserExistsByDepartmentId = (
  departmentId: string
): boolean => {
  return departmentUsers.some(
    (departmentUser) => departmentUser.department_id === departmentId
  );
};

// Utility function สำหรับตรวจสอบ DepartmentUser โดย user_id และ department_id
export const isDepartmentUserExistsByUserAndDepartment = (
  userId: string,
  departmentId: string
): boolean => {
  return departmentUsers.some(
    (du) => du.user_id === userId && du.department_id === departmentId
  );
};

// Utility function สำหรับตรวจสอบ DepartmentUser ที่เป็น HOD
export const hasHodDepartmentUsers = (): boolean => {
  return departmentUsers.some((departmentUser) => departmentUser.is_hod);
};

// Utility function สำหรับตรวจสอบ DepartmentUser ที่มี note
export const hasDepartmentUsersWithNote = (): boolean => {
  return departmentUsers.some((departmentUser) => departmentUser.note !== null);
};

// Utility function สำหรับตรวจสอบ DepartmentUser ที่มี info
export const hasDepartmentUsersWithInfo = (): boolean => {
  return departmentUsers.some((departmentUser) => departmentUser.info !== null);
};

// Utility function สำหรับตรวจสอบ DepartmentUser ที่มี dimension
export const hasDepartmentUsersWithDimension = (): boolean => {
  return departmentUsers.some(
    (departmentUser) => departmentUser.dimension !== null
  );
};

// Bulk operations
// เพิ่ม DepartmentUser หลายรายการ
export const addMultipleDepartmentUsers = (
  departmentUsersData: Omit<
    DepartmentUser,
    "id" | "created_at" | "updated_at"
  >[]
): DepartmentUser[] => {
  const newDepartmentUsers: DepartmentUser[] = [];

  departmentUsersData.forEach((data) => {
    const newDepartmentUser = createDepartmentUser(data);
    newDepartmentUsers.push(newDepartmentUser);
  });

  return newDepartmentUsers;
};

// ลบ DepartmentUser หลายรายการตาม user_id
export const removeMultipleDepartmentUsersByUserId = (
  userId: string,
  deletedById: string
): number => {
  return deleteDepartmentUsersByUserId(userId, deletedById);
};

// ลบ DepartmentUser หลายรายการตาม department_id
export const removeMultipleDepartmentUsersByDepartmentId = (
  departmentId: string,
  deletedById: string
): number => {
  return deleteDepartmentUsersByDepartmentId(departmentId, deletedById);
};

// Hard delete operations
export const hardDeleteDepartmentUsersByUserId = (userId: string): number => {
  let deletedCount = 0;

  for (let i = departmentUsers.length - 1; i >= 0; i--) {
    if (departmentUsers[i].user_id === userId) {
      departmentUsers.splice(i, 1);
      deletedCount++;
    }
  }

  return deletedCount;
};

export const hardDeleteDepartmentUsersByDepartmentId = (
  departmentId: string
): number => {
  let deletedCount = 0;

  for (let i = departmentUsers.length - 1; i >= 0; i--) {
    if (departmentUsers[i].department_id === departmentId) {
      departmentUsers.splice(i, 1);
      deletedCount++;
    }
  }

  return deletedCount;
};
