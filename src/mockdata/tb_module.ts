import { generateId, getCurrentTimestamp } from "@/libs/utils";

export interface Module {
  id: string;
  name: string;
  description: string | null;
  created_at: string;
  created_by_id: string;
  updated_at: string;
  updated_by_id: string | null;
}

export const modules: Module[] = [
  {
    id: "550e8400-e29b-41d4-a716-446655440001",
    name: "User Management",
    description: "Module for managing users and permissions",
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440002",
    name: "Product Management",
    description: "Module for managing products and inventory",
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440003",
    name: "Order Management",
    description: "Module for managing orders and transactions",
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null
  }
];

// CREATE - สร้าง Module ใหม่
export const createModule = (moduleData: Omit<Module, 'id' | 'created_at' | 'updated_at'>): Module => {
  const newModule: Module = {
    ...moduleData,
    id: generateId(),
    created_at: getCurrentTimestamp(),
    updated_at: getCurrentTimestamp()
  };
  
  modules.push(newModule);
  return newModule;
};

// READ - อ่าน Module ทั้งหมด
export const getAllModules = (): Module[] => {
  return [...modules];
};

// READ - อ่าน Module ตาม ID
export const getModuleById = (id: string): Module | undefined => {
  return modules.find(module => module.id === id);
};

// READ - อ่าน Module ตาม name
export const getModuleByName = (name: string): Module[] => {
  return modules.filter(module => 
    module.name.toLowerCase().includes(name.toLowerCase())
  );
};

// READ - อ่าน Module ที่มี description
export const getModulesWithDescription = (): Module[] => {
  return modules.filter(module => module.description !== null);
};

// READ - อ่าน Module ที่ไม่มี description
export const getModulesWithoutDescription = (): Module[] => {
  return modules.filter(module => module.description === null);
};

// UPDATE - อัปเดต Module
export const updateModule = (id: string, updateData: Partial<Omit<Module, 'id' | 'created_at' | 'created_by_id'>>): Module | null => {
  const index = modules.findIndex(module => module.id === id);
  
  if (index === -1) {
    return null;
  }
  
  modules[index] = {
    ...modules[index],
    ...updateData,
    updated_at: getCurrentTimestamp()
  };
  
  return modules[index];
};

// UPDATE - อัปเดต Module name
export const updateModuleName = (id: string, name: string): Module | null => {
  return updateModule(id, { name });
};

// UPDATE - อัปเดต Module description
export const updateModuleDescription = (id: string, description: string): Module | null => {
  return updateModule(id, { description });
};

// DELETE - ลบ Module
export const deleteModule = (id: string): boolean => {
  const index = modules.findIndex(module => module.id === id);
  
  if (index === -1) {
    return false;
  }
  
  modules.splice(index, 1);
  return true;
};

// DELETE - ลบ Module ตาม name
export const deleteModuleByName = (name: string): boolean => {
  const module = modules.find(m => m.name === name);
  if (!module) return false;
  
  return deleteModule(module.id);
};

// Utility function สำหรับล้างข้อมูลทั้งหมด (ใช้สำหรับ testing)
export const clearAllModules = (): void => {
  modules.length = 0;
};

// Utility function สำหรับนับจำนวน Module
export const getModuleCount = (): number => {
  return modules.length;
};

// Utility function สำหรับค้นหา Module แบบ advanced search
export const searchModules = (searchCriteria: {
  name?: string;
  description?: string;
  has_description?: boolean;
}): Module[] => {
  return modules.filter(module => {
    if (searchCriteria.name && !module.name.toLowerCase().includes(searchCriteria.name.toLowerCase())) {
      return false;
    }
    
    if (searchCriteria.description && module.description && !module.description.toLowerCase().includes(searchCriteria.description.toLowerCase())) {
      return false;
    }
    
    if (searchCriteria.has_description !== undefined) {
      const hasDescription = module.description !== null;
      if (hasDescription !== searchCriteria.has_description) {
        return false;
      }
    }
    
    return true;
  });
};

// Utility function สำหรับตรวจสอบ name ซ้ำ
export const isModuleNameExists = (name: string): boolean => {
  return modules.some(module => module.name === name);
};

// Utility function สำหรับตรวจสอบ Module ที่มี description
export const hasModulesWithDescription = (): boolean => {
  return modules.some(module => module.description !== null);
};
