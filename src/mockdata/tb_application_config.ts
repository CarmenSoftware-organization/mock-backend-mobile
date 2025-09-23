import { generateId, getCurrentTimestamp } from "@/libs/utils";
import { getUuidByName } from "./mapping.uuid";
import { Currency, getCurrencyById } from "./tb_currency";

export interface TaxProfile {
  id: string;
  name: string;
  tax_rate: number;
  is_active: boolean;
}

export interface ApplicationConfig {
  id: string;
  key: string;
  value: TaxProfile[];
  created_at: string;
  created_by_id: string | null;
  updated_at: string;
  updated_by_id: string | null;
  deleted_at: string | null;
  deleted_by_id: string | null;
}

export const applicationConfigs: ApplicationConfig[] = [
  {
    id: getUuidByName("APPLICATION_CONFIG_01")!,
    key: "tax_profile",
    value: [
      {
        id: getUuidByName("TAX_PROFILE_01")!,
        name: "VAT 7%",
        tax_rate: 7,
        is_active: true,
      },
      {
        id: getUuidByName("TAX_PROFILE_02")!,
        name: "VAT 10%",
        tax_rate: 10,
        is_active: true,
      },
      {
        id: getUuidByName("TAX_PROFILE_03")!,
        name: "None",
        tax_rate: 0,
        is_active: true,
      },
    ],
    created_at:  "2025-07-29T01:05:32.815Z",
    created_by_id: getUuidByName("USER_ADMIN")!,
    updated_at: "2025-07-29T01:05:32.815Z",
    updated_by_id: getUuidByName("USER_ADMIN")!,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("APPLICATION_CONFIG_02")!,
    key: "system_settings",
    value: [
      {
        id: getUuidByName("CURRENCY_01")!,
        name: "Default Currency",
        tax_rate: 0,
        is_active: true,
      },
    ],
    created_at: "2025-07-29T02:15:45.123Z",
    created_by_id: getUuidByName("USER_ADMIN")!,
    updated_at: "2025-07-29T02:15:45.123Z",
    updated_by_id: getUuidByName("USER_ADMIN")!,
    deleted_at: null,
    deleted_by_id: null,
  },
];

// CREATE - สร้าง ApplicationConfig ใหม่
export const createApplicationConfig = (
  configData: Omit<ApplicationConfig, "id" | "created_at" | "updated_at">
): ApplicationConfig => {
  // Validate required fields
  if (!configData.key?.trim()) {
    throw new Error("Config key is required");
  }

  // Check for duplicate key
  if (isActiveApplicationConfigKeyExists(configData.key)) {
    throw new Error(`Config key '${configData.key}' already exists`);
  }

  const newConfig: ApplicationConfig = {
    ...configData,
    id: generateId(),
    created_at: getCurrentTimestamp(),
    updated_at: getCurrentTimestamp(),
  };

  applicationConfigs.push(newConfig);
  rebuildConfigIndexes(); // Rebuild indexes after adding new config
  return newConfig;
};

// Optimized indexing for better performance
const configIndexes = {
  byId: new Map<string, ApplicationConfig>(),
  byKey: new Map<string, ApplicationConfig>(),
  byCreatedBy: new Map<string, ApplicationConfig[]>(),
  byUpdatedBy: new Map<string, ApplicationConfig[]>(),
  active: new Set<ApplicationConfig>(),
  deleted: new Set<ApplicationConfig>(),
};

// Helper function to rebuild indexes
const rebuildConfigIndexes = (): void => {
  // Clear existing indexes
  configIndexes.byId.clear();
  configIndexes.byKey.clear();
  configIndexes.byCreatedBy.clear();
  configIndexes.byUpdatedBy.clear();
  configIndexes.active.clear();
  configIndexes.deleted.clear();

  // Rebuild indexes
  for (const config of applicationConfigs) {
    // Index by ID
    configIndexes.byId.set(config.id, config);

    // Index by key
    configIndexes.byKey.set(config.key, config);

    // Index by created_by_id
    if (config.created_by_id) {
      if (!configIndexes.byCreatedBy.has(config.created_by_id)) {
        configIndexes.byCreatedBy.set(config.created_by_id, []);
      }
      configIndexes.byCreatedBy.get(config.created_by_id)!.push(config);
    }

    // Index by updated_by_id
    if (config.updated_by_id) {
      if (!configIndexes.byUpdatedBy.has(config.updated_by_id)) {
        configIndexes.byUpdatedBy.set(config.updated_by_id, []);
      }
      configIndexes.byUpdatedBy.get(config.updated_by_id)!.push(config);
    }

    // Index by deletion status
    if (config.deleted_at) {
      configIndexes.deleted.add(config);
    } else {
      configIndexes.active.add(config);
    }
  }
};

// Initialize indexes
rebuildConfigIndexes();

// READ - อ่าน ApplicationConfig ทั้งหมด
export const getAllApplicationConfigs = (): ApplicationConfig[] => {
  return [...applicationConfigs];
};

// READ - อ่าน ApplicationConfig ตาม ID (O(1) lookup)
export const getApplicationConfigById = (
  id: string
): ApplicationConfig | undefined => {
  if (!id?.trim()) return undefined;
  return configIndexes.byId.get(id);
};

// READ - อ่าน ApplicationConfig ตาม key (O(1) lookup)
export const getApplicationConfigByKey = (
  key: string
): ApplicationConfig | undefined => {
  if (!key?.trim()) return undefined;
  return configIndexes.byKey.get(key);
};

// READ - อ่าน ApplicationConfig ที่ไม่ถูกลบ (O(1) lookup)
export const getActiveApplicationConfigs = (): ApplicationConfig[] => {
  return [...configIndexes.active];
};

// READ - อ่าน ApplicationConfig ที่ถูกลบ (O(1) lookup)
export const getDeletedApplicationConfigs = (): ApplicationConfig[] => {
  return [...configIndexes.deleted];
};

// READ - อ่าน ApplicationConfig ตาม created_by_id (O(1) lookup)
export const getApplicationConfigsByCreatedBy = (
  createdById: string
): ApplicationConfig[] => {
  if (!createdById?.trim()) return [];
  return [...(configIndexes.byCreatedBy.get(createdById) ?? [])];
};

// READ - อ่าน ApplicationConfig ตาม updated_by_id (O(1) lookup)
export const getApplicationConfigsByUpdatedBy = (
  updatedById: string
): ApplicationConfig[] => {
  if (!updatedById?.trim()) return [];
  return [...(configIndexes.byUpdatedBy.get(updatedById) ?? [])];
};

// UPDATE - อัปเดต ApplicationConfig
export const updateApplicationConfig = (
  id: string,
  updateData: Partial<
    Omit<ApplicationConfig, "id" | "created_at" | "created_by_id">
  >,
  updatedById: string
): ApplicationConfig | null => {
  if (!id?.trim() || !updatedById?.trim()) {
    return null;
  }

  // Check for duplicate key if key is being updated
  if (updateData.key && updateData.key.trim()) {
    const existingConfig = getApplicationConfigByKey(updateData.key);
    if (existingConfig && existingConfig.id !== id) {
      throw new Error(`Config key '${updateData.key}' already exists`);
    }
  }

  const index = applicationConfigs.findIndex((config) => config.id === id);

  if (index === -1) {
    return null;
  }

  applicationConfigs[index] = {
    ...applicationConfigs[index],
    ...updateData,
    updated_at: getCurrentTimestamp(),
    updated_by_id: updatedById,
  };

  rebuildConfigIndexes(); // Rebuild indexes after update
  return applicationConfigs[index];
};

// UPDATE - อัปเดต ApplicationConfig key
export const updateApplicationConfigKey = (
  id: string,
  key: string,
  updatedById: string
): ApplicationConfig | null => {
  return updateApplicationConfig(id, { key }, updatedById);
};

// UPDATE - อัปเดต ApplicationConfig value
export const updateApplicationConfigValue = (
  id: string,
  value: TaxProfile[],
  updatedById: string
): ApplicationConfig | null => {
  return updateApplicationConfig(id, { value }, updatedById);
};

// UPDATE - อัปเดต TaxProfile ใน ApplicationConfig
export const updateTaxProfileInConfig = (
  configId: string,
  taxProfileId: string,
  taxProfileData: Partial<TaxProfile>,
  updatedById: string
): ApplicationConfig | null => {
  const config = getApplicationConfigById(configId);
  if (!config) return null;

  const updatedValue = config.value.map((tp) =>
    tp.id === taxProfileId ? { ...tp, ...taxProfileData } : tp
  );

  return updateApplicationConfig(
    configId,
    { value: updatedValue },
    updatedById
  );
};

// UPDATE - เพิ่ม TaxProfile ใหม่ใน ApplicationConfig
export const addTaxProfileToConfig = (
  configId: string,
  taxProfile: Omit<TaxProfile, "id">,
  updatedById: string
): ApplicationConfig | null => {
  const config = getApplicationConfigById(configId);
  if (!config) return null;

  const newTaxProfile: TaxProfile = {
    ...taxProfile,
    id: generateId(),
  };

  const updatedValue = [...config.value, newTaxProfile];
  return updateApplicationConfig(
    configId,
    { value: updatedValue },
    updatedById
  );
};

// UPDATE - ลบ TaxProfile ออกจาก ApplicationConfig
export const removeTaxProfileFromConfig = (
  configId: string,
  taxProfileId: string,
  updatedById: string
): ApplicationConfig | null => {
  const config = getApplicationConfigById(configId);
  if (!config) return null;

  const updatedValue = config.value.filter((tp) => tp.id !== taxProfileId);
  return updateApplicationConfig(
    configId,
    { value: updatedValue },
    updatedById
  );
};

// DELETE - ลบ ApplicationConfig (soft delete)
export const deleteApplicationConfig = (
  id: string,
  deletedById: string
): boolean => {
  if (!id?.trim() || !deletedById?.trim()) {
    return false;
  }

  const index = applicationConfigs.findIndex((config) => config.id === id);

  if (index === -1) {
    return false;
  }

  applicationConfigs[index] = {
    ...applicationConfigs[index],
    deleted_at: getCurrentTimestamp(),
    deleted_by_id: deletedById,
  };

  rebuildConfigIndexes(); // Rebuild indexes after soft delete
  return true;
};

// DELETE - ลบ ApplicationConfig แบบถาวร
export const hardDeleteApplicationConfig = (id: string): boolean => {
  if (!id?.trim()) {
    return false;
  }

  const index = applicationConfigs.findIndex((config) => config.id === id);

  if (index === -1) {
    return false;
  }

  applicationConfigs.splice(index, 1);
  rebuildConfigIndexes(); // Rebuild indexes after hard delete
  return true;
};

// DELETE - ลบ ApplicationConfig ตาม key
export const deleteApplicationConfigByKey = (
  key: string,
  deletedById: string
): boolean => {
  const config = applicationConfigs.find((cfg) => cfg.key === key);
  if (!config) return false;

  return deleteApplicationConfig(config.id, deletedById);
};

// RESTORE - กู้คืน ApplicationConfig ที่ถูกลบ
export const restoreApplicationConfig = (
  id: string,
  restoredById: string
): ApplicationConfig | null => {
  if (!id?.trim() || !restoredById?.trim()) {
    return null;
  }

  const index = applicationConfigs.findIndex((config) => config.id === id);

  if (index === -1) {
    return null;
  }

  // Check for duplicate key when restoring
  const config = applicationConfigs[index];
  if (isActiveApplicationConfigKeyExists(config.key)) {
    throw new Error(`Config key '${config.key}' already exists. Cannot restore.`);
  }

  applicationConfigs[index] = {
    ...applicationConfigs[index],
    deleted_at: null,
    deleted_by_id: null,
    updated_at: getCurrentTimestamp(),
    updated_by_id: restoredById,
  };

  rebuildConfigIndexes(); // Rebuild indexes after restore
  return applicationConfigs[index];
};

// Utility function สำหรับล้างข้อมูลทั้งหมด (ใช้สำหรับ testing)
export const clearAllApplicationConfigs = (): void => {
  applicationConfigs.length = 0;
  rebuildConfigIndexes(); // Rebuild indexes after clearing all data
};

// Utility function สำหรับนับจำนวน ApplicationConfig
export const getApplicationConfigCount = (): number => {
  return applicationConfigs.length;
};

// Utility function สำหรับนับจำนวน ApplicationConfig ที่ไม่ถูกลบ
export const getActiveApplicationConfigCount = (): number => {
  return applicationConfigs.filter((config) => !config.deleted_at).length;
};

// Utility function สำหรับนับจำนวน TaxProfile ใน ApplicationConfig
export const getTaxProfileCountInConfig = (configId: string): number => {
  const config = getApplicationConfigById(configId);
  return config ? config.value.length : 0;
};

// Utility function สำหรับค้นหา ApplicationConfig แบบ advanced search
export const searchApplicationConfigs = (searchCriteria: {
  key?: string;
  created_by_id?: string;
  updated_by_id?: string;
  is_deleted?: boolean;
  start_date?: string;
  end_date?: string;
}): ApplicationConfig[] => {
  return applicationConfigs.filter((config) => {
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

// Utility function สำหรับค้นหา TaxProfile ใน ApplicationConfig
export const searchTaxProfilesInConfig = (
  configId: string,
  searchCriteria: {
    name?: string;
    is_active?: boolean;
    min_tax_rate?: number;
    max_tax_rate?: number;
  }
): TaxProfile[] => {
  const config = getApplicationConfigById(configId);
  if (!config) return [];

  return config.value.filter((tp) => {
    // ตรวจสอบ name
    if (
      searchCriteria.name &&
      !tp.name.toLowerCase().includes(searchCriteria.name.toLowerCase())
    ) {
      return false;
    }

    // ตรวจสอบ is_active
    if (
      searchCriteria.is_active !== undefined &&
      tp.is_active !== searchCriteria.is_active
    ) {
      return false;
    }

    // ตรวจสอบ min_tax_rate
    if (
      searchCriteria.min_tax_rate !== undefined &&
      tp.tax_rate < searchCriteria.min_tax_rate
    ) {
      return false;
    }

    // ตรวจสอบ max_tax_rate
    if (
      searchCriteria.max_tax_rate !== undefined &&
      tp.tax_rate > searchCriteria.max_tax_rate
    ) {
      return false;
    }

    return true;
  });
};

// Utility function สำหรับตรวจสอบ key ซ้ำ
export const isApplicationConfigKeyExists = (key: string): boolean => {
  return applicationConfigs.some((config) => config.key === key);
};

// Utility function สำหรับตรวจสอบ key ซ้ำ (ไม่รวมที่ถูกลบ)
export const isActiveApplicationConfigKeyExists = (key: string): boolean => {
  return applicationConfigs.some(
    (config) => config.key === key && !config.deleted_at
  );
};

export const getDefaultCurrencyByBusinessUnitId = (_bu_id: string): Currency | null => {
  const defaultCurrency = applicationConfigs.find((config) => config.key === "system_settings")?.value.find((value) => value.name === "Default Currency")?.id;

  if (!defaultCurrency) {
    return null as Currency | null;
  }

  return getCurrencyById(defaultCurrency) || null;
};
