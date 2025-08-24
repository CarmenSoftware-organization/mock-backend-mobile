import { TbMenu } from './types';
import { generateUuid, getCurrentTimestamp } from './utils';
import { UUID_MAPPING } from './uuid-mapping';

// =============== MOCK TB_MENU DATA ===============
export let mockTbMenu: TbMenu[] = [
  {
    id: "menu-001",
    module_id: "mod-dashboard",
    name: "Dashboard",
    url: "/dashboard",
    description: "Main dashboard overview",
    is_visible: true,
    is_active: true,
    is_lock: false,
    created_at: getCurrentTimestamp(),
    created_by_id: UUID_MAPPING['system'],
    updated_at: getCurrentTimestamp(),
    updated_by_id: UUID_MAPPING['system'],
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "menu-002",
    module_id: "mod-inventory",
    name: "Inventory Management",
    url: "/inventory",
    description: "Manage inventory and stock",
    is_visible: true,
    is_active: true,
    is_lock: false,
    created_at: getCurrentTimestamp(),
    created_by_id: UUID_MAPPING['system'],
    updated_at: getCurrentTimestamp(),
    updated_by_id: UUID_MAPPING['system'],
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "menu-003",
    module_id: "mod-inventory",
    name: "Products",
    url: "/inventory/products",
    description: "Product catalog management",
    is_visible: true,
    is_active: true,
    is_lock: false,
    created_at: getCurrentTimestamp(),
    created_by_id: UUID_MAPPING['system'],
    updated_at: getCurrentTimestamp(),
    updated_by_id: UUID_MAPPING['system'],
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "menu-004",
    module_id: "mod-inventory",
    name: "Stock Take",
    url: "/inventory/stock-take",
    description: "Stock counting and adjustment",
    is_visible: true,
    is_active: true,
    is_lock: false,
    created_at: getCurrentTimestamp(),
    created_by_id: UUID_MAPPING['system'],
    updated_at: getCurrentTimestamp(),
    updated_by_id: UUID_MAPPING['system'],
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "menu-005",
    module_id: "mod-procurement",
    name: "Procurement",
    url: "/procurement",
    description: "Purchase management system",
    is_visible: true,
    is_active: true,
    is_lock: false,
    created_at: getCurrentTimestamp(),
    created_by_id: UUID_MAPPING['system'],
    updated_at: getCurrentTimestamp(),
    updated_by_id: UUID_MAPPING['system'],
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "menu-006",
    module_id: "mod-procurement",
    name: "Purchase Requests",
    url: "/procurement/purchase-requests",
    description: "Create and manage purchase requests",
    is_visible: true,
    is_active: true,
    is_lock: false,
    created_at: getCurrentTimestamp(),
    created_by_id: UUID_MAPPING['system'],
    updated_at: getCurrentTimestamp(),
    updated_by_id: UUID_MAPPING['system'],
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "menu-007",
    module_id: "mod-procurement",
    name: "Purchase Orders",
    url: "/procurement/purchase-orders",
    description: "Manage purchase orders",
    is_visible: true,
    is_active: true,
    is_lock: false,
    created_at: getCurrentTimestamp(),
    created_by_id: UUID_MAPPING['system'],
    updated_at: getCurrentTimestamp(),
    updated_by_id: UUID_MAPPING['system'],
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "menu-008",
    module_id: "mod-procurement",
    name: "Vendors",
    url: "/procurement/vendors",
    description: "Vendor management",
    is_visible: true,
    is_active: true,
    is_lock: false,
    created_at: getCurrentTimestamp(),
    created_by_id: UUID_MAPPING['system'],
    updated_at: getCurrentTimestamp(),
    updated_by_id: UUID_MAPPING['system'],
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "menu-009",
    module_id: "mod-receiving",
    name: "Goods Receiving",
    url: "/receiving",
    description: "Receive and process incoming goods",
    is_visible: true,
    is_active: true,
    is_lock: false,
    created_at: getCurrentTimestamp(),
    created_by_id: UUID_MAPPING['system'],
    updated_at: getCurrentTimestamp(),
    updated_by_id: UUID_MAPPING['system'],
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "menu-010",
    module_id: "mod-settings",
    name: "Settings",
    url: "/settings",
    description: "System configuration and settings",
    is_visible: true,
    is_active: true,
    is_lock: false,
    created_at: getCurrentTimestamp(),
    created_by_id: UUID_MAPPING['system'],
    updated_at: getCurrentTimestamp(),
    updated_by_id: UUID_MAPPING['system'],
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "menu-011",
    module_id: "mod-settings",
    name: "User Management",
    url: "/settings/users",
    description: "Manage users and permissions",
    is_visible: true,
    is_active: true,
    is_lock: true,
    created_at: getCurrentTimestamp(),
    created_by_id: UUID_MAPPING['system'],
    updated_at: getCurrentTimestamp(),
    updated_by_id: UUID_MAPPING['system'],
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "menu-012",
    module_id: "mod-settings",
    name: "Master Data",
    url: "/settings/master-data",
    description: "Manage master data configurations",
    is_visible: true,
    is_active: true,
    is_lock: false,
    created_at: getCurrentTimestamp(),
    created_by_id: UUID_MAPPING['system'],
    updated_at: getCurrentTimestamp(),
    updated_by_id: UUID_MAPPING['system'],
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "menu-013",
    module_id: "mod-reports",
    name: "Reports",
    url: "/reports",
    description: "System reports and analytics",
    is_visible: true,
    is_active: true,
    is_lock: false,
    created_at: getCurrentTimestamp(),
    created_by_id: UUID_MAPPING['system'],
    updated_at: getCurrentTimestamp(),
    updated_by_id: UUID_MAPPING['system'],
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "menu-014",
    module_id: "mod-admin",
    name: "System Administration",
    url: "/admin",
    description: "Advanced system administration",
    is_visible: false,
    is_active: true,
    is_lock: true,
    created_at: getCurrentTimestamp(),
    created_by_id: UUID_MAPPING['system'],
    updated_at: getCurrentTimestamp(),
    updated_by_id: UUID_MAPPING['system'],
    deleted_at: null,
    deleted_by_id: null
  }
];

// =============== TB_MENU CRUD FUNCTIONS ===============
export const tbMenuCrud = {
  // Create new menu
  create: (data: Omit<TbMenu, 'id' | 'created_at' | 'updated_at'>): TbMenu => {
    const newMenu: TbMenu = {
      id: generateUuid(),
      created_at: getCurrentTimestamp(),
      updated_at: getCurrentTimestamp(),
      ...data
    };
    mockTbMenu.push(newMenu);
    return newMenu;
  },

  // Find by ID
  findById: (id: string): TbMenu | null => {
    return mockTbMenu.find(menu => menu.id === id && !menu.deleted_at) || null;
  },

  // Find by name
  findByName: (name: string): TbMenu | null => {
    return mockTbMenu.find(menu => menu.name === name && !menu.deleted_at) || null;
  },

  // Find by URL
  findByUrl: (url: string): TbMenu | null => {
    return mockTbMenu.find(menu => menu.url === url && !menu.deleted_at) || null;
  },

  // Find by module
  findByModule: (moduleId: string): TbMenu[] => {
    return mockTbMenu.filter(menu => 
      !menu.deleted_at && 
      menu.module_id === moduleId
    );
  },

  // Find all visible menus
  findAllVisible: (): TbMenu[] => {
    return mockTbMenu.filter(menu => 
      !menu.deleted_at && 
      menu.is_active && 
      menu.is_visible
    );
  },

  // Find all active menus
  findAllActive: (): TbMenu[] => {
    return mockTbMenu.filter(menu => 
      !menu.deleted_at && 
      menu.is_active
    );
  },

  // Find all menus (including inactive)
  findAll: (): TbMenu[] => {
    return mockTbMenu.filter(menu => !menu.deleted_at);
  },

  // Find unlocked menus (not system locked)
  findUnlocked: (): TbMenu[] => {
    return mockTbMenu.filter(menu => 
      !menu.deleted_at && 
      menu.is_active && 
      !menu.is_lock
    );
  },

  // Find locked menus (system locked)
  findLocked: (): TbMenu[] => {
    return mockTbMenu.filter(menu => 
      !menu.deleted_at && 
      menu.is_active && 
      menu.is_lock
    );
  },

  // Search menus by name or description
  search: (query: string): TbMenu[] => {
    const lowerQuery = query.toLowerCase();
    return mockTbMenu.filter(menu => 
      !menu.deleted_at && 
      menu.is_active &&
      (menu.name.toLowerCase().includes(lowerQuery) || 
       menu.description?.toLowerCase().includes(lowerQuery) ||
       menu.url.toLowerCase().includes(lowerQuery))
    );
  },

  // Get menu hierarchy (grouped by module)
  getHierarchy: (): Record<string, TbMenu[]> => {
    const visibleMenus = tbMenuCrud.findAllVisible();
    return visibleMenus.reduce((acc, menu) => {
      if (!acc[menu.module_id]) {
        acc[menu.module_id] = [];
      }
      acc[menu.module_id].push(menu);
      return acc;
    }, {} as Record<string, TbMenu[]>);
  },

  // Update menu
  update: (id: string, data: Partial<TbMenu>, updated_by_id?: string): TbMenu | null => {
    const index = mockTbMenu.findIndex(menu => menu.id === id && !menu.deleted_at);
    if (index === -1) return null;

    mockTbMenu[index] = {
      ...mockTbMenu[index],
      ...data,
      updated_at: getCurrentTimestamp(),
      updated_by_id: updated_by_id || null
    };
    return mockTbMenu[index];
  },

  // Soft delete menu
  delete: (id: string, deleted_by_id?: string): boolean => {
    const index = mockTbMenu.findIndex(menu => menu.id === id && !menu.deleted_at);
    if (index === -1) return false;

    mockTbMenu[index].deleted_at = getCurrentTimestamp();
    mockTbMenu[index].deleted_by_id = deleted_by_id || null;
    return true;
  },

  // Show menu (make visible)
  show: (id: string, updated_by_id?: string): TbMenu | null => {
    return tbMenuCrud.update(id, { is_visible: true }, updated_by_id);
  },

  // Hide menu (make invisible)
  hide: (id: string, updated_by_id?: string): TbMenu | null => {
    return tbMenuCrud.update(id, { is_visible: false }, updated_by_id);
  },

  // Activate menu
  activate: (id: string, updated_by_id?: string): TbMenu | null => {
    return tbMenuCrud.update(id, { is_active: true }, updated_by_id);
  },

  // Deactivate menu
  deactivate: (id: string, updated_by_id?: string): TbMenu | null => {
    return tbMenuCrud.update(id, { is_active: false }, updated_by_id);
  },

  // Lock menu (system lock)
  lock: (id: string, updated_by_id?: string): TbMenu | null => {
    return tbMenuCrud.update(id, { is_lock: true }, updated_by_id);
  },

  // Unlock menu
  unlock: (id: string, updated_by_id?: string): TbMenu | null => {
    return tbMenuCrud.update(id, { is_lock: false }, updated_by_id);
  },

  // Get menu statistics
  getStats: () => {
    const allMenus = mockTbMenu.filter(menu => !menu.deleted_at);
    const activeMenus = allMenus.filter(menu => menu.is_active);
    const visibleMenus = activeMenus.filter(menu => menu.is_visible);
    const lockedMenus = activeMenus.filter(menu => menu.is_lock);
    
    return {
      total: allMenus.length,
      active: activeMenus.length,
      visible: visibleMenus.length,
      hidden: activeMenus.length - visibleMenus.length,
      locked: lockedMenus.length,
      unlocked: activeMenus.length - lockedMenus.length,
      byModule: activeMenus.reduce((acc, menu) => {
        acc[menu.module_id] = (acc[menu.module_id] || 0) + 1;
        return acc;
      }, {} as Record<string, number>)
    };
  }
};
