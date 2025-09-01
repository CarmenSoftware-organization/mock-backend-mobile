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
    deleted_by_id: null
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
    deleted_by_id: null
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
    deleted_by_id: null
  }
];

// CREATE - สร้าง ApplicationUserConfig ใหม่
export const createApplicationUserConfig = (configData: Omit<ApplicationUserConfig, 'id' | 'created_at' | 'updated_at'>): ApplicationUserConfig => {
  const newConfig: ApplicationUserConfig = {
    ...configData,
    id: generateId(),
    created_at: getCurrentTimestamp(),
    updated_at: getCurrentTimestamp()
  };
  
  applicationUserConfigs.push(newConfig);
  return newConfig;
};

// READ - อ่าน ApplicationUserConfig ทั้งหมด
export const getAllApplicationUserConfigs = (): ApplicationUserConfig[] => {
  return [...applicationUserConfigs];
};

// READ - อ่าน ApplicationUserConfig ตาม ID
export const getApplicationUserConfigById = (id: string): ApplicationUserConfig | undefined => {
  return applicationUserConfigs.find(config => config.id === id);
};

// READ - อ่าน ApplicationUserConfig ตาม user_id
export const getApplicationUserConfigsByUserId = (userId: string): ApplicationUserConfig[] => {
  return applicationUserConfigs.filter(config => config.user_id === userId);
};

// READ - อ่าน ApplicationUserConfig ตาม key
export const getApplicationUserConfigsByKey = (key: string): ApplicationUserConfig[] => {
  return applicationUserConfigs.filter(config => config.key === key);
};

// READ - อ่าน ApplicationUserConfig ตาม user_id และ key
export const getApplicationUserConfigByUserIdAndKey = (userId: string, key: string): ApplicationUserConfig | undefined => {
  return applicationUserConfigs.find(config => config.user_id === userId && config.key === key);
};

// READ - อ่าน ApplicationUserConfig ที่ไม่ถูกลบ
export const getActiveApplicationUserConfigs = (): ApplicationUserConfig[] => {
  return applicationUserConfigs.filter(config => !config.deleted_at);
};

// READ - อ่าน ApplicationUserConfig ที่ถูกลบ
export const getDeletedApplicationUserConfigs = (): ApplicationUserConfig[] => {
  return applicationUserConfigs.filter(config => config.deleted_at);
};

// READ - อ่าน ApplicationUserConfig ตาม created_by_id
export const getApplicationUserConfigsByCreatedBy = (createdById: string): ApplicationUserConfig[] => {
  return applicationUserConfigs.filter(config => config.created_by_id === createdById);
};

// READ - อ่าน ApplicationUserConfig ตาม updated_by_id
export const getApplicationUserConfigsByUpdatedBy = (updatedById: string): ApplicationUserConfig[] => {
  return applicationUserConfigs.filter(config => config.updated_by_id === updatedById);
};

// UPDATE - อัปเดต ApplicationUserConfig
export const updateApplicationUserConfig = (
  id: string, 
  updateData: Partial<Omit<ApplicationUserConfig, 'id' | 'created_at' | 'created_by_id'>>,
  updatedById: string
): ApplicationUserConfig | null => {
  const index = applicationUserConfigs.findIndex(config => config.id === id);
  
  if (index === -1) {
    return null;
  }
  
  applicationUserConfigs[index] = {
    ...applicationUserConfigs[index],
    ...updateData,
    updated_at: getCurrentTimestamp(),
    updated_by_id: updatedById
  };
  
  return applicationUserConfigs[index];
};

// UPDATE - อัปเดต ApplicationUserConfig key
export const updateApplicationUserConfigKey = (id: string, key: string, updatedById: string): ApplicationUserConfig | null => {
  return updateApplicationUserConfig(id, { key }, updatedById);
};

// UPDATE - อัปเดต ApplicationUserConfig value
export const updateApplicationUserConfigValue = (id: string, value: any, updatedById: string): ApplicationUserConfig | null => {
  return updateApplicationUserConfig(id, { value }, updatedById);
};

// UPDATE - อัปเดต ApplicationUserConfig user_id
export const updateApplicationUserConfigUserId = (id: string, userId: string, updatedById: string): ApplicationUserConfig | null => {
  return updateApplicationUserConfig(id, { user_id: userId }, updatedById);
};

// UPDATE - อัปเดต ApplicationUserConfig โดย user_id และ key
export const updateApplicationUserConfigByUserIdAndKey = (
  userId: string, 
  key: string, 
  updateData: Partial<Omit<ApplicationUserConfig, 'id' | 'user_id' | 'key' | 'created_at' | 'created_by_id'>>,
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
  return updateApplicationUserConfigByUserIdAndKey(userId, key, { value }, updatedById);
};

// DELETE - ลบ ApplicationUserConfig (soft delete)
export const deleteApplicationUserConfig = (id: string, deletedById: string): boolean => {
  const index = applicationUserConfigs.findIndex(config => config.id === id);
  
  if (index === -1) {
    return false;
  }
  
  applicationUserConfigs[index] = {
    ...applicationUserConfigs[index],
    deleted_at: getCurrentTimestamp(),
    deleted_by_id: deletedById
  };
  
  return true;
};

// DELETE - ลบ ApplicationUserConfig แบบถาวร
export const hardDeleteApplicationUserConfig = (id: string): boolean => {
  const index = applicationUserConfigs.findIndex(config => config.id === id);
  
  if (index === -1) {
    return false;
  }
  
  applicationUserConfigs.splice(index, 1);
  return true;
};

// DELETE - ลบ ApplicationUserConfig ตาม user_id
export const deleteApplicationUserConfigsByUserId = (userId: string, deletedById: string): number => {
  let deletedCount = 0;
  
  applicationUserConfigs.forEach(config => {
    if (config.user_id === userId && !config.deleted_at) {
      config.deleted_at = getCurrentTimestamp();
      config.deleted_by_id = deletedById;
      deletedCount++;
    }
  });
  
  return deletedCount;
};

// DELETE - ลบ ApplicationUserConfig ตาม key
export const deleteApplicationUserConfigsByKey = (key: string, deletedById: string): number => {
  let deletedCount = 0;
  
  applicationUserConfigs.forEach(config => {
    if (config.key === key && !config.deleted_at) {
      config.deleted_at = getCurrentTimestamp();
      config.deleted_by_id = deletedById;
      deletedCount++;
    }
  });
  
  return deletedCount;
};

// DELETE - ลบ ApplicationUserConfig ตาม user_id และ key
export const deleteApplicationUserConfigByUserIdAndKey = (userId: string, key: string, deletedById: string): boolean => {
  const config = getApplicationUserConfigByUserIdAndKey(userId, key);
  if (!config) return false;
  
  return deleteApplicationUserConfig(config.id, deletedById);
};

// RESTORE - กู้คืน ApplicationUserConfig ที่ถูกลบ
export const restoreApplicationUserConfig = (id: string, restoredById: string): ApplicationUserConfig | null => {
  const index = applicationUserConfigs.findIndex(config => config.id === id);
  
  if (index === -1) {
    return null;
  }
  
  applicationUserConfigs[index] = {
    ...applicationUserConfigs[index],
    deleted_at: null,
    deleted_by_id: null,
    updated_at: getCurrentTimestamp(),
    updated_by_id: restoredById
  };
  
  return applicationUserConfigs[index];
};

// RESTORE - กู้คืน ApplicationUserConfig ทั้งหมดของ user
export const restoreApplicationUserConfigsByUserId = (userId: string, restoredById: string): number => {
  let restoredCount = 0;
  
  applicationUserConfigs.forEach(config => {
    if (config.user_id === userId && config.deleted_at) {
      config.deleted_at = null;
      config.deleted_by_id = null;
      config.updated_at = getCurrentTimestamp();
      config.updated_by_id = restoredById;
      restoredCount++;
    }
  });
  
  return restoredCount;
};

// Utility function สำหรับล้างข้อมูลทั้งหมด (ใช้สำหรับ testing)
export const clearAllApplicationUserConfigs = (): void => {
  applicationUserConfigs.length = 0;
};

// Utility function สำหรับนับจำนวน ApplicationUserConfig
export const getApplicationUserConfigCount = (): number => {
  return applicationUserConfigs.length;
};

// Utility function สำหรับนับจำนวน ApplicationUserConfig ที่ไม่ถูกลบ
export const getActiveApplicationUserConfigCount = (): number => {
  return applicationUserConfigs.filter(config => !config.deleted_at).length;
};

// Utility function สำหรับนับจำนวน ApplicationUserConfig ของ user
export const getApplicationUserConfigCountByUserId = (userId: string): number => {
  return applicationUserConfigs.filter(config => config.user_id === userId && !config.deleted_at).length;
};

// Utility function สำหรับนับจำนวน ApplicationUserConfig ของ key
export const getApplicationUserConfigCountByKey = (key: string): number => {
  return applicationUserConfigs.filter(config => config.key === key && !config.deleted_at).length;
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
  return applicationUserConfigs.filter(config => {
    // ตรวจสอบ user_id
    if (searchCriteria.user_id && config.user_id !== searchCriteria.user_id) {
      return false;
    }
    
    // ตรวจสอบ key
    if (searchCriteria.key && !config.key.toLowerCase().includes(searchCriteria.key.toLowerCase())) {
      return false;
    }
    
    // ตรวจสอบ created_by_id
    if (searchCriteria.created_by_id && config.created_by_id !== searchCriteria.created_by_id) {
      return false;
    }
    
    // ตรวจสอบ updated_by_id
    if (searchCriteria.updated_by_id && config.updated_by_id !== searchCriteria.updated_by_id) {
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
export const searchApplicationUserConfigsByValue = (searchValue: any): ApplicationUserConfig[] => {
  return applicationUserConfigs.filter(config => {
    if (typeof searchValue === 'string') {
      return JSON.stringify(config.value).toLowerCase().includes(searchValue.toLowerCase());
    }
    return JSON.stringify(config.value) === JSON.stringify(searchValue);
  });
};

// Utility function สำหรับตรวจสอบ key ซ้ำสำหรับ user
export const isApplicationUserConfigKeyExistsForUser = (userId: string, key: string): boolean => {
  return applicationUserConfigs.some(config => 
    config.user_id === userId && config.key === key && !config.deleted_at
  );
};

// Utility function สำหรับตรวจสอบ key ซ้ำทั้งหมด
export const isApplicationUserConfigKeyExists = (key: string): boolean => {
  return applicationUserConfigs.some(config => config.key === key && !config.deleted_at);
};

// Utility function สำหรับตรวจสอบ user_id ซ้ำ
export const isApplicationUserConfigUserIdExists = (userId: string): boolean => {
  return applicationUserConfigs.some(config => config.user_id === userId && !config.deleted_at);
};

// Utility function สำหรับลบ ApplicationUserConfig ทั้งหมดของ user (hard delete)
export const hardDeleteApplicationUserConfigsByUserId = (userId: string): number => {
  const initialLength = applicationUserConfigs.length;
  const filteredConfigs = applicationUserConfigs.filter(config => config.user_id !== userId);
  const deletedCount = initialLength - filteredConfigs.length;
  
  // แทนที่ array เดิม
  applicationUserConfigs.length = 0;
  applicationUserConfigs.push(...filteredConfigs);
  
  return deletedCount;
};

// Utility function สำหรับลบ ApplicationUserConfig ทั้งหมดของ key (hard delete)
export const hardDeleteApplicationUserConfigsByKey = (key: string): number => {
  const initialLength = applicationUserConfigs.length;
  const filteredConfigs = applicationUserConfigs.filter(config => config.key !== key);
  const deletedCount = initialLength - filteredConfigs.length;
  
  // แทนที่ array เดิม
  applicationUserConfigs.length = 0;
  applicationUserConfigs.push(...filteredConfigs);
  
  return deletedCount;
};
