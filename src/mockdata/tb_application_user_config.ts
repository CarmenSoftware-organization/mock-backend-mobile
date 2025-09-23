import { generateId, getCurrentTimestamp } from "@/libs/utils";

export interface ApplicationUserConfig {
  id: string;
  user_id: string;
  key: string;
  value: any;
  created_at: string;
  created_by_id: string;
  updated_at: string;
  updated_by_id: string | null;
  deleted_at: string | null;
  deleted_by_id: string | null;
}

export const applicationUserConfigs: ApplicationUserConfig[] = [
  {
    id: "73e8146b-g8b1-6ghf-cd03-d339064e8bfe",
    user_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    key: "theme_preference",
    value: { theme: "dark", language: "th" },
    created_at: "2025-07-29T03:25:15.456Z",
    created_by_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    updated_at: "2025-07-29T03:25:15.456Z",
    updated_by_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: "84f9257c-h9c2-7hig-de14-e44a175f9cgf",
    user_id: "1bfdb891-58ee-499c-8115-34a964de8122",
    key: "notification_settings",
    value: { email: true, push: false, sms: true },
    created_at: "2025-07-29T04:35:25.789Z",
    created_by_id: "1bfdb891-58ee-499c-8115-34a964de8122",
    updated_at: "2025-07-29T04:35:25.789Z",
    updated_by_id: "1bfdb891-58ee-499c-8115-34a964de8122",
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: "95g0368d-i0d3-8ijh-ef25-f55b286g0dhg",
    user_id: "3c5280a7-492e-421d-b739-7447455ce99e",
    key: "dashboard_layout",
    value: { columns: 3, widgets: ["sales", "inventory", "reports"] },
    created_at: "2025-07-29T05:45:35.123Z",
    created_by_id: "3c5280a7-492e-421d-b739-7447455ce99e",
    updated_at: "2025-07-29T05:45:35.123Z",
    updated_by_id: "3c5280a7-492e-421d-b739-7447455ce99e",
    deleted_at: null,
    deleted_by_id: null,
  },
];

// Optimized indexing system for better performance
const userConfigIndexes = {
  byId: new Map<string, ApplicationUserConfig>(),
  byUserId: new Map<string, ApplicationUserConfig[]>(),
  byKey: new Map<string, ApplicationUserConfig[]>(),
  byUserIdAndKey: new Map<string, ApplicationUserConfig>(), // Composite key: "userId:key"
  byCreatedBy: new Map<string, ApplicationUserConfig[]>(),
  byUpdatedBy: new Map<string, ApplicationUserConfig[]>(),
  active: new Set<ApplicationUserConfig>(),
  deleted: new Set<ApplicationUserConfig>(),
  activeByUserId: new Map<string, ApplicationUserConfig[]>(),
  activeByKey: new Map<string, ApplicationUserConfig[]>(),
  userKeyExists: new Set<string>(), // For O(1) key existence checks per user
};

// Helper function to create user-key composite key
const createUserKeyComposite = (userId: string, key: string): string =>
  `${userId}:${key}`;

// Helper function to rebuild indexes
const rebuildUserConfigIndexes = (): void => {
  // Clear existing indexes
  userConfigIndexes.byId.clear();
  userConfigIndexes.byUserId.clear();
  userConfigIndexes.byKey.clear();
  userConfigIndexes.byUserIdAndKey.clear();
  userConfigIndexes.byCreatedBy.clear();
  userConfigIndexes.byUpdatedBy.clear();
  userConfigIndexes.active.clear();
  userConfigIndexes.deleted.clear();
  userConfigIndexes.activeByUserId.clear();
  userConfigIndexes.activeByKey.clear();
  userConfigIndexes.userKeyExists.clear();

  // Rebuild indexes
  for (const config of applicationUserConfigs) {
    // Index by ID
    userConfigIndexes.byId.set(config.id, config);

    // Index by user ID
    if (!userConfigIndexes.byUserId.has(config.user_id)) {
      userConfigIndexes.byUserId.set(config.user_id, []);
    }
    userConfigIndexes.byUserId.get(config.user_id)!.push(config);

    // Index by key
    if (!userConfigIndexes.byKey.has(config.key)) {
      userConfigIndexes.byKey.set(config.key, []);
    }
    userConfigIndexes.byKey.get(config.key)!.push(config);

    // Index by user-key composite
    const compositeKey = createUserKeyComposite(config.user_id, config.key);
    userConfigIndexes.byUserIdAndKey.set(compositeKey, config);

    // Index by created_by_id
    if (!userConfigIndexes.byCreatedBy.has(config.created_by_id)) {
      userConfigIndexes.byCreatedBy.set(config.created_by_id, []);
    }
    userConfigIndexes.byCreatedBy.get(config.created_by_id)!.push(config);

    // Index by updated_by_id
    if (config.updated_by_id) {
      if (!userConfigIndexes.byUpdatedBy.has(config.updated_by_id)) {
        userConfigIndexes.byUpdatedBy.set(config.updated_by_id, []);
      }
      userConfigIndexes.byUpdatedBy.get(config.updated_by_id)!.push(config);
    }

    // Index by deletion status
    if (config.deleted_at) {
      userConfigIndexes.deleted.add(config);
    } else {
      userConfigIndexes.active.add(config);

      // Active by user ID
      if (!userConfigIndexes.activeByUserId.has(config.user_id)) {
        userConfigIndexes.activeByUserId.set(config.user_id, []);
      }
      userConfigIndexes.activeByUserId.get(config.user_id)!.push(config);

      // Active by key
      if (!userConfigIndexes.activeByKey.has(config.key)) {
        userConfigIndexes.activeByKey.set(config.key, []);
      }
      userConfigIndexes.activeByKey.get(config.key)!.push(config);

      // User-key existence for active configs
      userConfigIndexes.userKeyExists.add(compositeKey);
    }
  }
};

// Initialize indexes
rebuildUserConfigIndexes();

// CREATE - สร้าง ApplicationUserConfig ใหม่
export const createApplicationUserConfig = (
  configData: Omit<ApplicationUserConfig, "id" | "created_at" | "updated_at">
): ApplicationUserConfig => {
  // Validate required fields
  if (!configData.user_id?.trim()) {
    throw new Error("User ID is required");
  }
  if (!configData.key?.trim()) {
    throw new Error("Config key is required");
  }
  if (!configData.created_by_id?.trim()) {
    throw new Error("Created by ID is required");
  }

  // Check for duplicate user-key combination for active configs
  if (isApplicationUserConfigKeyExistsForUser(configData.user_id, configData.key)) {
    throw new Error(`Config key '${configData.key}' already exists for user '${configData.user_id}'`);
  }

  const newConfig: ApplicationUserConfig = {
    ...configData,
    id: generateId(),
    created_at: getCurrentTimestamp(),
    updated_at: getCurrentTimestamp(),
  };

  applicationUserConfigs.push(newConfig);
  rebuildUserConfigIndexes(); // Rebuild indexes after adding new config
  return newConfig;
};

// READ - อ่าน ApplicationUserConfig ทั้งหมด
export const getAllApplicationUserConfigs = (): ApplicationUserConfig[] => {
  return [...applicationUserConfigs];
};

// READ - อ่าน ApplicationUserConfig ตาม ID (O(1) lookup)
export const getApplicationUserConfigById = (
  id: string
): ApplicationUserConfig | undefined => {
  if (!id?.trim()) return undefined;
  return userConfigIndexes.byId.get(id);
};

// READ - อ่าน ApplicationUserConfig ตาม user_id (O(1) lookup)
export const getApplicationUserConfigsByUserId = (
  userId: string
): ApplicationUserConfig[] => {
  if (!userId?.trim()) return [];
  return [...(userConfigIndexes.byUserId.get(userId) ?? [])];
};

// READ - อ่าน ApplicationUserConfig ตาม key (O(1) lookup)
export const getApplicationUserConfigsByKey = (
  key: string
): ApplicationUserConfig[] => {
  if (!key?.trim()) return [];
  return [...(userConfigIndexes.byKey.get(key) ?? [])];
};

// READ - อ่าน ApplicationUserConfig ตาม user_id และ key (O(1) lookup)
export const getApplicationUserConfigByUserIdAndKey = (
  userId: string,
  key: string
): ApplicationUserConfig | undefined => {
  if (!userId?.trim() || !key?.trim()) return undefined;
  const compositeKey = createUserKeyComposite(userId, key);
  return userConfigIndexes.byUserIdAndKey.get(compositeKey);
};

// READ - อ่าน ApplicationUserConfig ที่ไม่ถูกลบ (O(1) lookup)
export const getActiveApplicationUserConfigs = (): ApplicationUserConfig[] => {
  return Array.from(userConfigIndexes.active);
};

// READ - อ่าน ApplicationUserConfig ที่ถูกลบ (O(1) lookup)
export const getDeletedApplicationUserConfigs = (): ApplicationUserConfig[] => {
  return Array.from(userConfigIndexes.deleted);
};

// READ - อ่าน ApplicationUserConfig ตาม created_by_id (O(1) lookup)
export const getApplicationUserConfigsByCreatedBy = (
  createdById: string
): ApplicationUserConfig[] => {
  if (!createdById?.trim()) return [];
  return [...(userConfigIndexes.byCreatedBy.get(createdById) ?? [])];
};

// READ - อ่าน ApplicationUserConfig ตาม updated_by_id (O(1) lookup)
export const getApplicationUserConfigsByUpdatedBy = (
  updatedById: string
): ApplicationUserConfig[] => {
  if (!updatedById?.trim()) return [];
  return [...(userConfigIndexes.byUpdatedBy.get(updatedById) ?? [])];
};

// UPDATE - อัปเดต ApplicationUserConfig
export const updateApplicationUserConfig = (
  id: string,
  updateData: Partial<
    Omit<ApplicationUserConfig, "id" | "created_at" | "created_by_id">
  >,
  updatedById: string
): ApplicationUserConfig | null => {
  if (!id?.trim() || !updatedById?.trim()) {
    return null;
  }

  const index = applicationUserConfigs.findIndex((config) => config.id === id);

  if (index === -1) {
    return null;
  }

  const currentConfig = applicationUserConfigs[index];

  // Check for duplicate user-key combination if user_id or key is being updated
  if ((updateData.user_id || updateData.key)) {
    const newUserId = updateData.user_id || currentConfig.user_id;
    const newKey = updateData.key || currentConfig.key;

    // Only check if the combination is actually changing
    if (newUserId !== currentConfig.user_id || newKey !== currentConfig.key) {
      const existingConfig = getApplicationUserConfigByUserIdAndKey(newUserId, newKey);
      if (existingConfig && existingConfig.id !== id && !existingConfig.deleted_at) {
        throw new Error(`Config key '${newKey}' already exists for user '${newUserId}'`);
      }
    }
  }

  applicationUserConfigs[index] = {
    ...applicationUserConfigs[index],
    ...updateData,
    updated_at: getCurrentTimestamp(),
    updated_by_id: updatedById,
  };

  rebuildUserConfigIndexes(); // Rebuild indexes after update
  return applicationUserConfigs[index];
};

// UPDATE - อัปเดต ApplicationUserConfig key
export const updateApplicationUserConfigKey = (
  id: string,
  key: string,
  updatedById: string
): ApplicationUserConfig | null => {
  return updateApplicationUserConfig(id, { key }, updatedById);
};

// UPDATE - อัปเดต ApplicationUserConfig value
export const updateApplicationUserConfigValue = (
  id: string,
  value: any,
  updatedById: string
): ApplicationUserConfig | null => {
  return updateApplicationUserConfig(id, { value }, updatedById);
};

// UPDATE - อัปเดต ApplicationUserConfig user_id
export const updateApplicationUserConfigUserId = (
  id: string,
  userId: string,
  updatedById: string
): ApplicationUserConfig | null => {
  return updateApplicationUserConfig(id, { user_id: userId }, updatedById);
};

// UPDATE - อัปเดต ApplicationUserConfig โดย user_id และ key
export const updateApplicationUserConfigByUserIdAndKey = (
  userId: string,
  key: string,
  updateData: Partial<
    Omit<
      ApplicationUserConfig,
      "id" | "user_id" | "key" | "created_at" | "created_by_id"
    >
  >,
  updatedById: string
): ApplicationUserConfig | null => {
  const config = getApplicationUserConfigByUserIdAndKey(userId, key);
  if (!config) return null;

  return updateApplicationUserConfig(config.id, updateData, updatedById);
};

// UPDATE - อัปเดต ApplicationUserConfig value โดย user_id และ key
export const updateApplicationUserConfigValueByUserIdAndKey = (
  userId: string,
  key: string,
  value: any,
  updatedById: string
): ApplicationUserConfig | null => {
  return updateApplicationUserConfigByUserIdAndKey(
    userId,
    key,
    { value },
    updatedById
  );
};

// DELETE - ลบ ApplicationUserConfig (soft delete)
export const deleteApplicationUserConfig = (
  id: string,
  deletedById: string
): boolean => {
  if (!id?.trim() || !deletedById?.trim()) {
    return false;
  }

  const index = applicationUserConfigs.findIndex((config) => config.id === id);

  if (index === -1) {
    return false;
  }

  applicationUserConfigs[index] = {
    ...applicationUserConfigs[index],
    deleted_at: getCurrentTimestamp(),
    deleted_by_id: deletedById,
  };

  rebuildUserConfigIndexes(); // Rebuild indexes after soft delete
  return true;
};

// DELETE - ลบ ApplicationUserConfig แบบถาวร
export const hardDeleteApplicationUserConfig = (id: string): boolean => {
  if (!id?.trim()) {
    return false;
  }

  const index = applicationUserConfigs.findIndex((config) => config.id === id);

  if (index === -1) {
    return false;
  }

  applicationUserConfigs.splice(index, 1);
  rebuildUserConfigIndexes(); // Rebuild indexes after hard delete
  return true;
};

// DELETE - ลบ ApplicationUserConfig ตาม user_id
export const deleteApplicationUserConfigsByUserId = (
  userId: string,
  deletedById: string
): number => {
  if (!userId?.trim() || !deletedById?.trim()) {
    return 0;
  }

  let deletedCount = 0;

  applicationUserConfigs.forEach((config) => {
    if (config.user_id === userId && !config.deleted_at) {
      config.deleted_at = getCurrentTimestamp();
      config.deleted_by_id = deletedById;
      deletedCount++;
    }
  });

  if (deletedCount > 0) {
    rebuildUserConfigIndexes(); // Rebuild indexes after bulk delete
  }

  return deletedCount;
};

// DELETE - ลบ ApplicationUserConfig ตาม key
export const deleteApplicationUserConfigsByKey = (
  key: string,
  deletedById: string
): number => {
  if (!key?.trim() || !deletedById?.trim()) {
    return 0;
  }

  let deletedCount = 0;

  applicationUserConfigs.forEach((config) => {
    if (config.key === key && !config.deleted_at) {
      config.deleted_at = getCurrentTimestamp();
      config.deleted_by_id = deletedById;
      deletedCount++;
    }
  });

  if (deletedCount > 0) {
    rebuildUserConfigIndexes(); // Rebuild indexes after bulk delete
  }

  return deletedCount;
};

// DELETE - ลบ ApplicationUserConfig ตาม user_id และ key
export const deleteApplicationUserConfigByUserIdAndKey = (
  userId: string,
  key: string,
  deletedById: string
): boolean => {
  const config = getApplicationUserConfigByUserIdAndKey(userId, key);
  if (!config) return false;

  return deleteApplicationUserConfig(config.id, deletedById);
};

// RESTORE - กู้คืน ApplicationUserConfig ที่ถูกลบ
export const restoreApplicationUserConfig = (
  id: string,
  restoredById: string
): ApplicationUserConfig | null => {
  if (!id?.trim() || !restoredById?.trim()) {
    return null;
  }

  const index = applicationUserConfigs.findIndex((config) => config.id === id);

  if (index === -1) {
    return null;
  }

  const currentConfig = applicationUserConfigs[index];

  // Check for duplicate user-key combination when restoring
  if (isApplicationUserConfigKeyExistsForUser(currentConfig.user_id, currentConfig.key)) {
    throw new Error(`Config key '${currentConfig.key}' already exists for user '${currentConfig.user_id}'. Cannot restore.`);
  }

  applicationUserConfigs[index] = {
    ...applicationUserConfigs[index],
    deleted_at: null,
    deleted_by_id: null,
    updated_at: getCurrentTimestamp(),
    updated_by_id: restoredById,
  };

  rebuildUserConfigIndexes(); // Rebuild indexes after restore
  return applicationUserConfigs[index];
};

// RESTORE - กู้คืน ApplicationUserConfig ทั้งหมดของ user
export const restoreApplicationUserConfigsByUserId = (
  userId: string,
  restoredById: string
): number => {
  if (!userId?.trim() || !restoredById?.trim()) {
    return 0;
  }

  let restoredCount = 0;
  const errors: string[] = [];

  applicationUserConfigs.forEach((config) => {
    if (config.user_id === userId && config.deleted_at) {
      // Check for duplicate key before restoring
      const activeConfig = getApplicationUserConfigByUserIdAndKey(config.user_id, config.key);
      if (activeConfig && !activeConfig.deleted_at) {
        errors.push(`Config key '${config.key}' already exists for user '${userId}'`);
        return;
      }

      config.deleted_at = null;
      config.deleted_by_id = null;
      config.updated_at = getCurrentTimestamp();
      config.updated_by_id = restoredById;
      restoredCount++;
    }
  });

  if (errors.length > 0) {
    throw new Error(`Cannot restore some configs: ${errors.join(', ')}`);
  }

  if (restoredCount > 0) {
    rebuildUserConfigIndexes(); // Rebuild indexes after bulk restore
  }

  return restoredCount;
};

// Utility function สำหรับล้างข้อมูลทั้งหมด (ใช้สำหรับ testing)
export const clearAllApplicationUserConfigs = (): void => {
  applicationUserConfigs.length = 0;
  rebuildUserConfigIndexes(); // Rebuild indexes after clearing all data
};

// Utility function สำหรับนับจำนวน ApplicationUserConfig
export const getApplicationUserConfigCount = (): number => {
  return applicationUserConfigs.length;
};

// Utility function สำหรับนับจำนวน ApplicationUserConfig ที่ไม่ถูกลบ (O(1) lookup)
export const getActiveApplicationUserConfigCount = (): number => {
  return userConfigIndexes.active.size;
};

// Utility function สำหรับนับจำนวน ApplicationUserConfig ของ user (O(1) lookup)
export const getApplicationUserConfigCountByUserId = (
  userId: string
): number => {
  if (!userId?.trim()) return 0;
  const activeConfigs = userConfigIndexes.activeByUserId.get(userId);
  return activeConfigs ? activeConfigs.length : 0;
};

// Utility function สำหรับนับจำนวน ApplicationUserConfig ของ key (O(1) lookup)
export const getApplicationUserConfigCountByKey = (key: string): number => {
  if (!key?.trim()) return 0;
  const activeConfigs = userConfigIndexes.activeByKey.get(key);
  return activeConfigs ? activeConfigs.length : 0;
};

// Utility function สำหรับค้นหา ApplicationUserConfig แบบ advanced search
export const searchApplicationUserConfigs = (searchCriteria: {
  user_id?: string;
  key?: string;
  created_by_id?: string;
  updated_by_id?: string;
  is_deleted?: boolean;
  start_date?: string;
  end_date?: string;
}): ApplicationUserConfig[] => {
  return applicationUserConfigs.filter((config) => {
    // ตรวจสอบ user_id
    if (searchCriteria.user_id && config.user_id !== searchCriteria.user_id) {
      return false;
    }

    // ตรวจสอบ key
    if (
      searchCriteria.key &&
      !config.key.toLowerCase().includes(searchCriteria.key.toLowerCase())
    ) {
      return false;
    }

    // ตรวจสอบ created_by_id
    if (
      searchCriteria.created_by_id &&
      config.created_by_id !== searchCriteria.created_by_id
    ) {
      return false;
    }

    // ตรวจสอบ updated_by_id
    if (
      searchCriteria.updated_by_id &&
      config.updated_by_id !== searchCriteria.updated_by_id
    ) {
      return false;
    }

    // ตรวจสอบสถานะการลบ
    if (searchCriteria.is_deleted !== undefined) {
      const isDeleted = !!config.deleted_at;
      if (isDeleted !== searchCriteria.is_deleted) {
        return false;
      }
    }

    // ตรวจสอบช่วงเวลา
    if (searchCriteria.start_date || searchCriteria.end_date) {
      const configDate = new Date(config.created_at);

      if (searchCriteria.start_date) {
        const startDate = new Date(searchCriteria.start_date);
        if (configDate < startDate) {
          return false;
        }
      }

      if (searchCriteria.end_date) {
        const endDate = new Date(searchCriteria.end_date);
        if (configDate > endDate) {
          return false;
        }
      }
    }

    return true;
  });
};

// Utility function สำหรับค้นหา ApplicationUserConfig โดย value
export const searchApplicationUserConfigsByValue = (
  searchValue: any
): ApplicationUserConfig[] => {
  return applicationUserConfigs.filter((config) => {
    if (typeof searchValue === "string") {
      return JSON.stringify(config.value)
        .toLowerCase()
        .includes(searchValue.toLowerCase());
    }
    return JSON.stringify(config.value) === JSON.stringify(searchValue);
  });
};

// Utility function สำหรับตรวจสอบ key ซ้ำสำหรับ user (O(1) lookup)
export const isApplicationUserConfigKeyExistsForUser = (
  userId: string,
  key: string
): boolean => {
  if (!userId?.trim() || !key?.trim()) return false;
  const compositeKey = createUserKeyComposite(userId, key);
  return userConfigIndexes.userKeyExists.has(compositeKey);
};

// Utility function สำหรับตรวจสอบ key ซ้ำทั้งหมด (O(1) lookup)
export const isApplicationUserConfigKeyExists = (key: string): boolean => {
  if (!key?.trim()) return false;
  return userConfigIndexes.activeByKey.has(key);
};

// Utility function สำหรับตรวจสอบ user_id ซ้ำ (O(1) lookup)
export const isApplicationUserConfigUserIdExists = (
  userId: string
): boolean => {
  if (!userId?.trim()) return false;
  return userConfigIndexes.activeByUserId.has(userId);
};

// Utility function สำหรับลบ ApplicationUserConfig ทั้งหมดของ user (hard delete)
export const hardDeleteApplicationUserConfigsByUserId = (
  userId: string
): number => {
  if (!userId?.trim()) {
    return 0;
  }

  const initialLength = applicationUserConfigs.length;
  const filteredConfigs = applicationUserConfigs.filter(
    (config) => config.user_id !== userId
  );
  const deletedCount = initialLength - filteredConfigs.length;

  if (deletedCount > 0) {
    // แทนที่ array เดิม
    applicationUserConfigs.length = 0;
    applicationUserConfigs.push(...filteredConfigs);
    rebuildUserConfigIndexes(); // Rebuild indexes after bulk hard delete
  }

  return deletedCount;
};

// Utility function สำหรับลบ ApplicationUserConfig ทั้งหมดของ key (hard delete)
export const hardDeleteApplicationUserConfigsByKey = (key: string): number => {
  if (!key?.trim()) {
    return 0;
  }

  const initialLength = applicationUserConfigs.length;
  const filteredConfigs = applicationUserConfigs.filter(
    (config) => config.key !== key
  );
  const deletedCount = initialLength - filteredConfigs.length;

  if (deletedCount > 0) {
    // แทนที่ array เดิม
    applicationUserConfigs.length = 0;
    applicationUserConfigs.push(...filteredConfigs);
    rebuildUserConfigIndexes(); // Rebuild indexes after bulk hard delete
  }

  return deletedCount;
};
