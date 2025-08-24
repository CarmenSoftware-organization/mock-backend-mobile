import { TbModule } from './types';
import { generateUuid, getCurrentTimestamp } from './utils';

// =============== MOCK TB_MODULE DATA ===============
export let mockTbModule: TbModule[] = [
  {
    id: "mod-001",
    code: "inventory",
    name: "Inventory Management",
    description: "Manage products, stock levels, and inventory movements",
    icon: "📦",
    is_active: true,
    sequence: 1,
    created_at: "2023-01-01T00:00:00.000Z",
    created_by_id: "system",
    updated_at: "2023-01-01T00:00:00.000Z",
    updated_by_id: "system"
  },
  {
    id: "mod-002",
    code: "procurement",
    name: "Procurement",
    description: "Purchase requests, orders, and vendor management",
    icon: "🛒",
    is_active: true,
    sequence: 2,
    created_at: "2023-01-01T00:00:00.000Z",
    created_by_id: "system",
    updated_at: "2023-01-01T00:00:00.000Z",
    updated_by_id: "system"
  },
  {
    id: "mod-003",
    code: "accounting",
    name: "Accounting & Finance",
    description: "Financial management, accounts, and reporting",
    icon: "💰",
    is_active: true,
    sequence: 3,
    created_at: "2023-01-01T00:00:00.000Z",
    created_by_id: "system",
    updated_at: "2023-01-01T00:00:00.000Z",
    updated_by_id: "system"
  },
  {
    id: "mod-004",
    code: "hr",
    name: "Human Resources",
    description: "Employee management, payroll, and HR processes",
    icon: "👥",
    is_active: true,
    sequence: 4,
    created_at: "2023-01-01T00:00:00.000Z",
    created_by_id: "system",
    updated_at: "2023-01-01T00:00:00.000Z",
    updated_by_id: "system"
  },
  {
    id: "mod-005",
    code: "crm",
    name: "Customer Relationship Management",
    description: "Customer data, sales pipeline, and relationship management",
    icon: "🤝",
    is_active: true,
    sequence: 5,
    created_at: "2023-01-01T00:00:00.000Z",
    created_by_id: "system",
    updated_at: "2023-01-01T00:00:00.000Z",
    updated_by_id: "system"
  },
  {
    id: "mod-006",
    code: "pms",
    name: "Property Management System",
    description: "Hotel room management, reservations, and guest services",
    icon: "🏨",
    is_active: true,
    sequence: 6,
    created_at: "2023-01-01T00:00:00.000Z",
    created_by_id: "system",
    updated_at: "2023-01-01T00:00:00.000Z",
    updated_by_id: "system"
  },
  {
    id: "mod-007",
    code: "pos",
    name: "Point of Sale",
    description: "Restaurant POS system, order management, and billing",
    icon: "🍽️",
    is_active: true,
    sequence: 7,
    created_at: "2023-01-01T00:00:00.000Z",
    created_by_id: "system",
    updated_at: "2023-01-01T00:00:00.000Z",
    updated_by_id: "system"
  },
  {
    id: "mod-008",
    code: "reporting",
    name: "Reports & Analytics",
    description: "Business intelligence, reports, and data analytics",
    icon: "📊",
    is_active: true,
    sequence: 8,
    created_at: "2023-01-01T00:00:00.000Z",
    created_by_id: "system",
    updated_at: "2023-01-01T00:00:00.000Z",
    updated_by_id: "system"
  },
  {
    id: "mod-009",
    code: "settings",
    name: "System Settings",
    description: "System configuration, user management, and security",
    icon: "⚙️",
    is_active: true,
    sequence: 9,
    created_at: "2023-01-01T00:00:00.000Z",
    created_by_id: "system",
    updated_at: "2023-01-01T00:00:00.000Z",
    updated_by_id: "system"
  },
  {
    id: "mod-010",
    code: "delivery",
    name: "Delivery Management",
    description: "Order delivery, tracking, and logistics",
    icon: "🚚",
    is_active: true,
    sequence: 10,
    created_at: "2023-02-01T00:00:00.000Z",
    created_by_id: "user-001",
    updated_at: "2023-02-01T00:00:00.000Z",
    updated_by_id: "user-001"
  },
  {
    id: "mod-011",
    code: "maintenance",
    name: "Maintenance Management",
    description: "Equipment maintenance, scheduling, and work orders",
    icon: "🔧",
    is_active: true,
    sequence: 11,
    created_at: "2023-03-01T00:00:00.000Z",
    created_by_id: "user-002",
    updated_at: "2023-03-01T00:00:00.000Z",
    updated_by_id: "user-002"
  },
  {
    id: "mod-012",
    code: "quality",
    name: "Quality Control",
    description: "Quality assurance, inspections, and compliance",
    icon: "✅",
    is_active: true,
    sequence: 12,
    created_at: "2023-04-01T00:00:00.000Z",
    created_by_id: "user-003",
    updated_at: "2023-04-01T00:00:00.000Z",
    updated_by_id: "user-003"
  },
  {
    id: "mod-013",
    code: "workflow",
    name: "Workflow Engine",
    description: "Business process automation and workflow management",
    icon: "🔄",
    is_active: true,
    sequence: 13,
    created_at: "2023-05-01T00:00:00.000Z",
    created_by_id: "user-001",
    updated_at: "2023-05-01T00:00:00.000Z",
    updated_by_id: "user-001"
  },
  {
    id: "mod-014",
    code: "communications",
    name: "Communications",
    description: "Internal messaging, notifications, and announcements",
    icon: "💬",
    is_active: true,
    sequence: 14,
    created_at: "2023-06-01T00:00:00.000Z",
    created_by_id: "user-002",
    updated_at: "2023-06-01T00:00:00.000Z",
    updated_by_id: "user-002"
  },
  {
    id: "mod-015",
    code: "mobile",
    name: "Mobile Application",
    description: "Mobile app features and mobile-specific functionality",
    icon: "📱",
    is_active: true,
    sequence: 15,
    created_at: getCurrentTimestamp(),
    created_by_id: "user-001",
    updated_at: getCurrentTimestamp(),
    updated_by_id: "user-001"
  }
];

// =============== TB_MODULE CRUD FUNCTIONS ===============
export const tbModuleCrud = {
  // Create new module
  create: (data: Omit<TbModule, 'id' | 'created_at' | 'updated_at'>): TbModule => {
    const newModule: TbModule = {
      id: generateUuid(),
      created_at: getCurrentTimestamp(),
      updated_at: getCurrentTimestamp(),
      is_active: true,
      sequence: mockTbModule.length + 1,
      ...data
    };
    mockTbModule.push(newModule);
    return newModule;
  },

  // Find by ID
  findById: (id: string): TbModule | null => {
    return mockTbModule.find(module => module.id === id) || null;
  },

  // Find by code
  findByCode: (code: string): TbModule | null => {
    return mockTbModule.find(module => module.code === code) || null;
  },

  // Find all active modules
  findActive: (): TbModule[] => {
    return mockTbModule
      .filter(module => module.is_active)
      .sort((a, b) => (a.sequence || 0) - (b.sequence || 0));
  },

  // Find all modules
  findAll: (): TbModule[] => {
    return mockTbModule.sort((a, b) => (a.sequence || 0) - (b.sequence || 0));
  },

  // Search modules
  search: (query: string): TbModule[] => {
    const lowerQuery = query.toLowerCase();
    return mockTbModule
      .filter(module => 
        module.code.toLowerCase().includes(lowerQuery) ||
        module.name.toLowerCase().includes(lowerQuery) ||
        module.description?.toLowerCase().includes(lowerQuery)
      )
      .sort((a, b) => (a.sequence || 0) - (b.sequence || 0));
  },

  // Find core modules (essential system modules)
  findCoreModules: (): TbModule[] => {
    const coreModuleCodes = ['inventory', 'procurement', 'accounting', 'hr', 'settings'];
    return mockTbModule
      .filter(module => 
        module.is_active && 
        coreModuleCodes.includes(module.code)
      )
      .sort((a, b) => (a.sequence || 0) - (b.sequence || 0));
  },

  // Find business-specific modules
  findBusinessModules: (businessType: 'hotel' | 'restaurant' | 'general'): TbModule[] => {
    const businessModules = {
      hotel: ['pms', 'inventory', 'procurement', 'accounting', 'hr', 'maintenance'],
      restaurant: ['pos', 'inventory', 'procurement', 'delivery', 'quality', 'hr'],
      general: ['inventory', 'procurement', 'accounting', 'hr', 'crm', 'reporting']
    };

    const relevantCodes = businessModules[businessType] || businessModules.general;
    
    return mockTbModule
      .filter(module => 
        module.is_active && 
        relevantCodes.includes(module.code)
      )
      .sort((a, b) => (a.sequence || 0) - (b.sequence || 0));
  },

  // Update module
  update: (id: string, data: Partial<TbModule>, updated_by_id?: string): TbModule | null => {
    const index = mockTbModule.findIndex(module => module.id === id);
    if (index === -1) return null;

    mockTbModule[index] = {
      ...mockTbModule[index],
      ...data,
      updated_at: getCurrentTimestamp(),
      updated_by_id: updated_by_id || null
    };
    return mockTbModule[index];
  },

  // Delete module (soft delete by deactivating)
  delete: (id: string, updated_by_id?: string): boolean => {
    return tbModuleCrud.update(id, { is_active: false }, updated_by_id) !== null;
  },

  // Activate module
  activate: (id: string, updated_by_id?: string): TbModule | null => {
    return tbModuleCrud.update(id, { is_active: true }, updated_by_id);
  },

  // Deactivate module
  deactivate: (id: string, updated_by_id?: string): TbModule | null => {
    return tbModuleCrud.update(id, { is_active: false }, updated_by_id);
  },

  // Reorder modules
  reorder: (moduleOrders: { id: string; sequence: number }[], updated_by_id?: string): TbModule[] => {
    const updatedModules: TbModule[] = [];
    
    moduleOrders.forEach(({ id, sequence }) => {
      const updated = tbModuleCrud.update(id, { sequence }, updated_by_id);
      if (updated) {
        updatedModules.push(updated);
      }
    });
    
    return updatedModules;
  },

  // Get module statistics
  getStats: () => {
    const allModules = mockTbModule;
    const activeModules = allModules.filter(module => module.is_active);
    
    return {
      total: allModules.length,
      active: activeModules.length,
      inactive: allModules.length - activeModules.length,
      core: tbModuleCrud.findCoreModules().length,
      byCategory: {
        operations: activeModules.filter(m => 
          ['inventory', 'procurement', 'quality', 'maintenance'].includes(m.code)
        ).length,
        finance: activeModules.filter(m => 
          ['accounting', 'crm', 'reporting'].includes(m.code)
        ).length,
        hospitality: activeModules.filter(m => 
          ['pms', 'pos', 'delivery'].includes(m.code)
        ).length,
        system: activeModules.filter(m => 
          ['settings', 'workflow', 'communications', 'mobile'].includes(m.code)
        ).length,
        hr: activeModules.filter(m => 
          ['hr'].includes(m.code)
        ).length
      }
    };
  }
};
