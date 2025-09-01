import { generateId, getCurrentTimestamp } from "@/libs/utils";

export interface Menu {
  id: string;
  module_id: string;
  name: string;
  url: string;
  description: string;
  is_visible: boolean;
  is_active: boolean;
  is_lock: boolean;
  created_at: string;
  created_by_id: string;
  updated_at: string;
  updated_by_id: string | null;
  deleted_at: string | null;
  deleted_by_id: string | null;
}

export const menus: Menu[] = [
  {
    id: "550e8400-e29b-41d4-a716-446655440001",
    module_id: "mod_001",
    name: "Dashboard",
    url: "/dashboard",
    description: "Main dashboard page",
    is_visible: true,
    is_active: true,
    is_lock: false,
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440002",
    module_id: "mod_002",
    name: "Users",
    url: "/users",
    description: "User management page",
    is_visible: true,
    is_active: true,
    is_lock: false,
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440003",
    module_id: "mod_003",
    name: "Products",
    url: "/products",
    description: "Product management page",
    is_visible: true,
    is_active: true,
    is_lock: false,
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    deleted_at: null,
    deleted_by_id: null
  }
];

// CREATE - สร้าง Menu ใหม่
export const createMenu = (menuData: Omit<Menu, 'id' | 'created_at' | 'updated_at'>): Menu => {
  const newMenu: Menu = {
    ...menuData,
    id: generateId(),
    created_at: getCurrentTimestamp(),
    updated_at: getCurrentTimestamp()
  };
  
  menus.push(newMenu);
  return newMenu;
};

// READ - อ่าน Menu ทั้งหมด
export const getAllMenus = (): Menu[] => {
  return [...menus];
};

// READ - อ่าน Menu ตาม ID
export const getMenuById = (id: string): Menu | undefined => {
  return menus.find(menu => menu.id === id);
};

// READ - อ่าน Menu ตาม name
export const getMenuByName = (name: string): Menu[] => {
  return menus.filter(menu => 
    menu.name.toLowerCase().includes(name.toLowerCase())
  );
};

// READ - อ่าน Menu ตาม module_id
export const getMenusByModule = (moduleId: string): Menu[] => {
  return menus.filter(menu => menu.module_id === moduleId);
};

// READ - อ่าน Menu ตาม url
export const getMenuByUrl = (url: string): Menu | undefined => {
  return menus.find(menu => menu.url === url);
};

// READ - อ่าน Menu ที่ visible
export const getVisibleMenus = (): Menu[] => {
  return menus.filter(menu => menu.is_visible);
};

// READ - อ่าน Menu ที่ไม่ visible
export const getHiddenMenus = (): Menu[] => {
  return menus.filter(menu => !menu.is_visible);
};

// READ - อ่าน Menu ที่ active
export const getActiveMenus = (): Menu[] => {
  return menus.filter(menu => menu.is_active);
};

// READ - อ่าน Menu ที่ inactive
export const getInactiveMenus = (): Menu[] => {
  return menus.filter(menu => !menu.is_active);
};

// READ - อ่าน Menu ที่ lock
export const getLockedMenus = (): Menu[] => {
  return menus.filter(menu => menu.is_lock);
};

// READ - อ่าน Menu ที่ไม่ lock
export const getUnlockedMenus = (): Menu[] => {
  return menus.filter(menu => !menu.is_lock);
};

// UPDATE - อัปเดต Menu
export const updateMenu = (id: string, updateData: Partial<Omit<Menu, 'id' | 'created_at' | 'created_by_id'>>): Menu | null => {
  const index = menus.findIndex(menu => menu.id === id);
  
  if (index === -1) {
    return null;
  }
  
  menus[index] = {
    ...menus[index],
    ...updateData,
    updated_at: getCurrentTimestamp()
  };
  
  return menus[index];
};

// UPDATE - อัปเดต Menu visibility
export const updateMenuVisibility = (id: string, isVisible: boolean): Menu | null => {
  return updateMenu(id, { is_visible: isVisible });
};

// UPDATE - อัปเดต Menu active status
export const updateMenuActiveStatus = (id: string, isActive: boolean): Menu | null => {
  return updateMenu(id, { is_active: isActive });
};

// UPDATE - อัปเดต Menu lock status
export const updateMenuLockStatus = (id: string, isLock: boolean): Menu | null => {
  return updateMenu(id, { is_lock: isLock });
};

// UPDATE - อัปเดต Menu name
export const updateMenuName = (id: string, name: string): Menu | null => {
  return updateMenu(id, { name });
};

// UPDATE - อัปเดต Menu URL
export const updateMenuUrl = (id: string, url: string): Menu | null => {
  return updateMenu(id, { url });
};

// UPDATE - อัปเดต Menu description
export const updateMenuDescription = (id: string, description: string): Menu | null => {
  return updateMenu(id, { description });
};

// DELETE - ลบ Menu (soft delete)
export const deleteMenu = (id: string, deletedById: string): boolean => {
  const index = menus.findIndex(menu => menu.id === id);
  
  if (index === -1) {
    return false;
  }
  
  menus[index] = {
    ...menus[index],
    deleted_at: getCurrentTimestamp(),
    deleted_by_id: deletedById
  };
  
  return true;
};

// DELETE - ลบ Menu แบบถาวร
export const hardDeleteMenu = (id: string): boolean => {
  const index = menus.findIndex(menu => menu.id === id);
  
  if (index === -1) {
    return false;
  }
  
  menus.splice(index, 1);
  return true;
};

// DELETE - ลบ Menu ตาม name
export const deleteMenuByName = (name: string, deletedById: string): boolean => {
  const menu = menus.find(m => m.name === name);
  if (!menu) return false;
  
  return deleteMenu(menu.id, deletedById);
};

// DELETE - ลบ Menu ตาม module_id
export const deleteMenusByModule = (moduleId: string, deletedById: string): number => {
  let deletedCount = 0;
  
  menus.forEach(menu => {
    if (menu.module_id === moduleId && !menu.deleted_at) {
      menu.deleted_at = getCurrentTimestamp();
      menu.deleted_by_id = deletedById;
      deletedCount++;
    }
  });
  
  return deletedCount;
};

// Utility function สำหรับล้างข้อมูลทั้งหมด (ใช้สำหรับ testing)
export const clearAllMenus = (): void => {
  menus.length = 0;
};

// Utility function สำหรับนับจำนวน Menu
export const getMenuCount = (): number => {
  return menus.length;
};

// Utility function สำหรับนับจำนวน Menu ที่ visible
export const getVisibleMenuCount = (): number => {
  return menus.filter(menu => menu.is_visible).length;
};

// Utility function สำหรับนับจำนวน Menu ที่ active
export const getActiveMenuCount = (): number => {
  return menus.filter(menu => menu.is_active).length;
};

// Utility function สำหรับนับจำนวน Menu ที่ lock
export const getLockedMenuCount = (): number => {
  return menus.filter(menu => menu.is_lock).length;
};

// Utility function สำหรับค้นหา Menu แบบ advanced search
export const searchMenus = (searchCriteria: {
  name?: string;
  url?: string;
  description?: string;
  module_id?: string;
  is_visible?: boolean;
  is_active?: boolean;
  is_lock?: boolean;
}): Menu[] => {
  return menus.filter(menu => {
    if (searchCriteria.name && !menu.name.toLowerCase().includes(searchCriteria.name.toLowerCase())) {
      return false;
    }
    
    if (searchCriteria.url && !menu.url.toLowerCase().includes(searchCriteria.url.toLowerCase())) {
      return false;
    }
    
    if (searchCriteria.description && !menu.description.toLowerCase().includes(searchCriteria.description.toLowerCase())) {
      return false;
    }
    
    if (searchCriteria.module_id && menu.module_id !== searchCriteria.module_id) {
      return false;
    }
    
    if (searchCriteria.is_visible !== undefined && menu.is_visible !== searchCriteria.is_visible) {
      return false;
    }
    
    if (searchCriteria.is_active !== undefined && menu.is_active !== searchCriteria.is_active) {
      return false;
    }
    
    if (searchCriteria.is_lock !== undefined && menu.is_lock !== searchCriteria.is_lock) {
      return false;
    }
    
    return true;
  });
};

// Utility function สำหรับตรวจสอบ name ซ้ำ
export const isMenuNameExists = (name: string): boolean => {
  return menus.some(menu => menu.name === name);
};

// Utility function สำหรับตรวจสอบ URL ซ้ำ
export const isMenuUrlExists = (url: string): boolean => {
  return menus.some(menu => menu.url === url);
};

// Utility function สำหรับตรวจสอบ Menu ที่ visible
export const hasVisibleMenus = (): boolean => {
  return menus.some(menu => menu.is_visible);
};

// Utility function สำหรับตรวจสอบ Menu ที่ active
export const hasActiveMenus = (): boolean => {
  return menus.some(menu => menu.is_active);
};
