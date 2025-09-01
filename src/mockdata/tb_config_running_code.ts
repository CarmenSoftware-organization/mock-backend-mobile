import { generateId, getCurrentTimestamp } from "@/libs/utils";

export interface RunningCodeConfig {
  A: string;
  B: string;
  C: string;
  format: string;
}

export interface ConfigRunningCode {
  id: string;
  type: string;
  config: RunningCodeConfig;
  note: string;
  info: any;
  doc_version: string;
  created_at: string;
  created_by_id: string;
  updated_at: string;
  updated_by_id: string | null;
  deleted_at: string | null;
  deleted_by_id: string | null;
}

export const configRunningCodes: ConfigRunningCode[] = [
  {
    id: "87e3813a-640c-4b50-a83e-1763f4f585f6",
    type: "PR",
    config: {
      A: "PR",
      B: "date('yyyyMM')",
      C: "running(5, '0')",
      format: "{A}{B}{C}"
    },
    note: "initialized by system default.",
    info: null,
    doc_version: "0",
    created_at: "2025-07-31T03:27:54.539Z",
    created_by_id: "1bfdb891-58ee-499c-8115-34a964de8122",
    updated_at: "2025-07-31T03:27:54.539Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "98f4924b-751d-5c61-b94f-2874g5g696g7",
    type: "PO",
    config: {
      A: "PO",
      B: "date('yyyyMM')",
      C: "running(5, '0')",
      format: "{A}{B}{C}"
    },
    note: "Purchase Order running code configuration",
    info: { category: "purchase" },
    doc_version: "1.0",
    created_at: "2025-07-31T04:30:00.000Z",
    created_by_id: "1bfdb891-58ee-499c-8115-34a964de8122",
    updated_at: "2025-07-31T04:30:00.000Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "a9g5035c-862e-6d72-ca50-3985h6h7a7h8",
    type: "INV",
    config: {
      A: "INV",
      B: "date('yyyyMM')",
      C: "running(5, '0')",
      format: "{A}{B}{C}"
    },
    note: "Invoice running code configuration",
    info: { category: "sales" },
    doc_version: "1.0",
    created_at: "2025-07-31T05:35:00.000Z",
    created_by_id: "1bfdb891-58ee-499c-8115-34a964de8122",
    updated_at: "2025-07-31T05:35:00.000Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null
  }
];

// CREATE - สร้าง ConfigRunningCode ใหม่
export const createConfigRunningCode = (configData: Omit<ConfigRunningCode, 'id' | 'created_at' | 'updated_at'>): ConfigRunningCode => {
  const newConfig: ConfigRunningCode = {
    ...configData,
    id: generateId(),
    created_at: getCurrentTimestamp(),
    updated_at: getCurrentTimestamp()
  };
  
  configRunningCodes.push(newConfig);
  return newConfig;
};

// READ - อ่าน ConfigRunningCode ทั้งหมด
export const getAllConfigRunningCodes = (): ConfigRunningCode[] => {
  return [...configRunningCodes];
};

// READ - อ่าน ConfigRunningCode ตาม ID
export const getConfigRunningCodeById = (id: string): ConfigRunningCode | undefined => {
  return configRunningCodes.find(config => config.id === id);
};

// READ - อ่าน ConfigRunningCode ตาม type
export const getConfigRunningCodeByType = (type: string): ConfigRunningCode | undefined => {
  return configRunningCodes.find(config => config.type === type);
};

// READ - อ่าน ConfigRunningCode ที่ไม่ถูกลบ
export const getActiveConfigRunningCodes = (): ConfigRunningCode[] => {
  return configRunningCodes.filter(config => !config.deleted_at);
};

// READ - อ่าน ConfigRunningCode ที่ถูกลบ
export const getDeletedConfigRunningCodes = (): ConfigRunningCode[] => {
  return configRunningCodes.filter(config => config.deleted_at);
};

// READ - อ่าน ConfigRunningCode ตาม created_by_id
export const getConfigRunningCodesByCreatedBy = (createdById: string): ConfigRunningCode[] => {
  return configRunningCodes.filter(config => config.created_by_id === createdById);
};

// READ - อ่าน ConfigRunningCode ตาม doc_version
export const getConfigRunningCodesByDocVersion = (docVersion: string): ConfigRunningCode[] => {
  return configRunningCodes.filter(config => config.doc_version === docVersion);
};

// READ - อ่าน ConfigRunningCode ตาม note
export const getConfigRunningCodesByNote = (note: string): ConfigRunningCode[] => {
  return configRunningCodes.filter(config => 
    config.note.toLowerCase().includes(note.toLowerCase())
  );
};

// UPDATE - อัปเดต ConfigRunningCode
export const updateConfigRunningCode = (
  id: string, 
  updateData: Partial<Omit<ConfigRunningCode, 'id' | 'created_at' | 'created_by_id'>>,
  updatedById: string
): ConfigRunningCode | null => {
  const index = configRunningCodes.findIndex(config => config.id === id);
  
  if (index === -1) {
    return null;
  }
  
  configRunningCodes[index] = {
    ...configRunningCodes[index],
    ...updateData,
    updated_at: getCurrentTimestamp(),
    updated_by_id: updatedById
  };
  
  return configRunningCodes[index];
};

// UPDATE - อัปเดต ConfigRunningCode type
export const updateConfigRunningCodeType = (id: string, type: string, updatedById: string): ConfigRunningCode | null => {
  return updateConfigRunningCode(id, { type }, updatedById);
};

// UPDATE - อัปเดต ConfigRunningCode config
export const updateConfigRunningCodeConfig = (id: string, config: RunningCodeConfig, updatedById: string): ConfigRunningCode | null => {
  return updateConfigRunningCode(id, { config }, updatedById);
};

// UPDATE - อัปเดต ConfigRunningCode note
export const updateConfigRunningCodeNote = (id: string, note: string, updatedById: string): ConfigRunningCode | null => {
  return updateConfigRunningCode(id, { note }, updatedById);
};

// UPDATE - อัปเดต ConfigRunningCode info
export const updateConfigRunningCodeInfo = (id: string, info: any, updatedById: string): ConfigRunningCode | null => {
  return updateConfigRunningCode(id, { info }, updatedById);
};

// UPDATE - อัปเดต ConfigRunningCode doc version
export const updateConfigRunningCodeDocVersion = (id: string, docVersion: string, updatedById: string): ConfigRunningCode | null => {
  return updateConfigRunningCode(id, { doc_version: docVersion }, updatedById);
};

// UPDATE - อัปเดต ConfigRunningCode โดย type
export const updateConfigRunningCodeByType = (
  type: string, 
  updateData: Partial<Omit<ConfigRunningCode, 'id' | 'type' | 'created_at' | 'created_by_id'>>,
  updatedById: string
): ConfigRunningCode | null => {
  const config = getConfigRunningCodeByType(type);
  if (!config) return null;
  
  return updateConfigRunningCode(config.id, updateData, updatedById);
};

// DELETE - ลบ ConfigRunningCode (soft delete)
export const deleteConfigRunningCode = (id: string, deletedById: string): boolean => {
  const index = configRunningCodes.findIndex(config => config.id === id);
  
  if (index === -1) {
    return false;
  }
  
  configRunningCodes[index] = {
    ...configRunningCodes[index],
    deleted_at: getCurrentTimestamp(),
    deleted_by_id: deletedById
  };
  
  return true;
};

// DELETE - ลบ ConfigRunningCode แบบถาวร
export const hardDeleteConfigRunningCode = (id: string): boolean => {
  const index = configRunningCodes.findIndex(config => config.id === id);
  
  if (index === -1) {
    return false;
  }
  
  configRunningCodes.splice(index, 1);
  return true;
};

// DELETE - ลบ ConfigRunningCode ตาม type
export const deleteConfigRunningCodeByType = (type: string, deletedById: string): boolean => {
  const config = configRunningCodes.find(cfg => cfg.type === type);
  if (!config) return false;
  
  return deleteConfigRunningCode(config.id, deletedById);
};

// RESTORE - กู้คืน ConfigRunningCode ที่ถูกลบ
export const restoreConfigRunningCode = (id: string, restoredById: string): ConfigRunningCode | null => {
  const index = configRunningCodes.findIndex(config => config.id === id);
  
  if (index === -1) {
    return null;
  }
  
  configRunningCodes[index] = {
    ...configRunningCodes[index],
    deleted_at: null,
    deleted_by_id: null,
    updated_at: getCurrentTimestamp(),
    updated_by_id: restoredById
  };
  
  return configRunningCodes[index];
};

// Utility function สำหรับล้างข้อมูลทั้งหมด (ใช้สำหรับ testing)
export const clearAllConfigRunningCodes = (): void => {
  configRunningCodes.length = 0;
};

// Utility function สำหรับนับจำนวน ConfigRunningCode
export const getConfigRunningCodeCount = (): number => {
  return configRunningCodes.length;
};

// Utility function สำหรับนับจำนวน ConfigRunningCode ที่ไม่ถูกลบ
export const getActiveConfigRunningCodeCount = (): number => {
  return configRunningCodes.filter(config => !config.deleted_at).length;
};

// Utility function สำหรับนับจำนวน ConfigRunningCode ของ type
export const getConfigRunningCodeCountByType = (type: string): number => {
  return configRunningCodes.filter(config => config.type === type && !config.deleted_at).length;
};

// Utility function สำหรับค้นหา ConfigRunningCode แบบ advanced search
export const searchConfigRunningCodes = (searchCriteria: {
  type?: string;
  note?: string;
  doc_version?: string;
  created_by_id?: string;
  is_deleted?: boolean;
  start_date?: string;
  end_date?: string;
}): ConfigRunningCode[] => {
  return configRunningCodes.filter(config => {
    // ตรวจสอบ type
    if (searchCriteria.type && config.type !== searchCriteria.type) {
      return false;
    }
    
    // ตรวจสอบ note
    if (searchCriteria.note && !config.note.toLowerCase().includes(searchCriteria.note.toLowerCase())) {
      return false;
    }
    
    // ตรวจสอบ doc_version
    if (searchCriteria.doc_version && config.doc_version !== searchCriteria.doc_version) {
      return false;
    }
    
    // ตรวจสอบ created_by_id
    if (searchCriteria.created_by_id && config.created_by_id !== searchCriteria.created_by_id) {
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

// Utility function สำหรับตรวจสอบ type ซ้ำ
export const isConfigRunningCodeTypeExists = (type: string): boolean => {
  return configRunningCodes.some(config => config.type === type && !config.deleted_at);
};

// Utility function สำหรับตรวจสอบ type ซ้ำทั้งหมด
export const isConfigRunningCodeTypeExistsAll = (type: string): boolean => {
  return configRunningCodes.some(config => config.type === type);
};

// Utility function สำหรับสร้าง running code ตาม config
export const generateRunningCode = (type: string, sequence: number): string => {
  const config = getConfigRunningCodeByType(type);
  if (!config) return '';
  
  const { A, B, C, format } = config.config;
  
  // แทนที่ placeholder ใน format
  let result = format;
  
  // แทนที่ {A}
  result = result.replace(/{A}/g, A);
  
  // แทนที่ {B} ด้วยวันที่ปัจจุบัน
  if (B.includes('date(')) {
    const dateMatch = B.match(/date\('([^']+)'\)/);
    if (dateMatch) {
      const dateFormat = dateMatch[1];
      const now = new Date();
      let dateStr = '';
      
      if (dateFormat === 'yyyyMM') {
        dateStr = now.getFullYear().toString() + (now.getMonth() + 1).toString().padStart(2, '0');
      } else if (dateFormat === 'yyyyMMdd') {
        dateStr = now.getFullYear().toString() + 
                  (now.getMonth() + 1).toString().padStart(2, '0') + 
                  now.getDate().toString().padStart(2, '0');
      }
      
      result = result.replace(/{B}/g, dateStr);
    }
  }
  
  // แทนที่ {C} ด้วย sequence number
  if (C.includes('running(')) {
    const runningMatch = C.match(/running\((\d+),\s*'([^']+)'\)/);
    if (runningMatch) {
      const digits = parseInt(runningMatch[1]);
      const padding = runningMatch[2];
      const sequenceStr = sequence.toString().padStart(digits, padding);
      result = result.replace(/{C}/g, sequenceStr);
    }
  }
  
  return result;
};
