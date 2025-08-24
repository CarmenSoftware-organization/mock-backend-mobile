import { TbPermission } from './types';
import { generateUuid, getCurrentTimestamp } from './utils';

// =============== MOCK TB_PERMISSION DATA ===============
export let mockTbPermission: TbPermission[] = [
  // Inventory Module Permissions
  {
    id: "perm-001",
    code: "inventory.view",
    name: "View Inventory",
    description: "View inventory items and stock levels",
    module_id: "mod-001",
    is_active: true,
    created_at: "2023-01-01T00:00:00.000Z",
    created_by_id: "system",
    updated_at: "2023-01-01T00:00:00.000Z",
    updated_by_id: "system"
  },
  {
    id: "perm-002",
    code: "inventory.create",
    name: "Create Inventory Items",
    description: "Create new inventory items and categories",
    module_id: "mod-001",
    is_active: true,
    created_at: "2023-01-01T00:00:00.000Z",
    created_by_id: "system",
    updated_at: "2023-01-01T00:00:00.000Z",
    updated_by_id: "system"
  },
  {
    id: "perm-003",
    code: "inventory.edit",
    name: "Edit Inventory Items",
    description: "Edit existing inventory items and details",
    module_id: "mod-001",
    is_active: true,
    created_at: "2023-01-01T00:00:00.000Z",
    created_by_id: "system",
    updated_at: "2023-01-01T00:00:00.000Z",
    updated_by_id: "system"
  },
  {
    id: "perm-004",
    code: "inventory.delete",
    name: "Delete Inventory Items",
    description: "Delete inventory items (admin only)",
    module_id: "mod-001",
    is_active: true,
    created_at: "2023-01-01T00:00:00.000Z",
    created_by_id: "system",
    updated_at: "2023-01-01T00:00:00.000Z",
    updated_by_id: "system"
  },
  {
    id: "perm-005",
    code: "inventory.adjust",
    name: "Stock Adjustments",
    description: "Perform stock level adjustments",
    module_id: "mod-001",
    is_active: true,
    created_at: "2023-01-01T00:00:00.000Z",
    created_by_id: "system",
    updated_at: "2023-01-01T00:00:00.000Z",
    updated_by_id: "system"
  },

  // Procurement Module Permissions
  {
    id: "perm-006",
    code: "procurement.view",
    name: "View Procurement",
    description: "View purchase requests and orders",
    module_id: "mod-002",
    is_active: true,
    created_at: "2023-01-01T00:00:00.000Z",
    created_by_id: "system",
    updated_at: "2023-01-01T00:00:00.000Z",
    updated_by_id: "system"
  },
  {
    id: "perm-007",
    code: "procurement.create",
    name: "Create Purchase Requests",
    description: "Create new purchase requests",
    module_id: "mod-002",
    is_active: true,
    created_at: "2023-01-01T00:00:00.000Z",
    created_by_id: "system",
    updated_at: "2023-01-01T00:00:00.000Z",
    updated_by_id: "system"
  },
  {
    id: "perm-008",
    code: "procurement.approve",
    name: "Approve Purchase Requests",
    description: "Approve or reject purchase requests",
    module_id: "mod-002",
    is_active: true,
    created_at: "2023-01-01T00:00:00.000Z",
    created_by_id: "system",
    updated_at: "2023-01-01T00:00:00.000Z",
    updated_by_id: "system"
  },
  {
    id: "perm-009",
    code: "procurement.purchase_order",
    name: "Manage Purchase Orders",
    description: "Create and manage purchase orders",
    module_id: "mod-002",
    is_active: true,
    created_at: "2023-01-01T00:00:00.000Z",
    created_by_id: "system",
    updated_at: "2023-01-01T00:00:00.000Z",
    updated_by_id: "system"
  },
  {
    id: "perm-010",
    code: "procurement.receive",
    name: "Receive Goods",
    description: "Process goods received notes",
    module_id: "mod-002",
    is_active: true,
    created_at: "2023-01-01T00:00:00.000Z",
    created_by_id: "system",
    updated_at: "2023-01-01T00:00:00.000Z",
    updated_by_id: "system"
  },

  // Accounting Module Permissions
  {
    id: "perm-011",
    code: "accounting.view",
    name: "View Financial Data",
    description: "View financial reports and accounts",
    module_id: "mod-003",
    is_active: true,
    created_at: "2023-01-01T00:00:00.000Z",
    created_by_id: "system",
    updated_at: "2023-01-01T00:00:00.000Z",
    updated_by_id: "system"
  },
  {
    id: "perm-012",
    code: "accounting.journal",
    name: "Manage Journal Entries",
    description: "Create and edit journal entries",
    module_id: "mod-003",
    is_active: true,
    created_at: "2023-01-01T00:00:00.000Z",
    created_by_id: "system",
    updated_at: "2023-01-01T00:00:00.000Z",
    updated_by_id: "system"
  },
  {
    id: "perm-013",
    code: "accounting.reports",
    name: "Financial Reports",
    description: "Generate and export financial reports",
    module_id: "mod-003",
    is_active: true,
    created_at: "2023-01-01T00:00:00.000Z",
    created_by_id: "system",
    updated_at: "2023-01-01T00:00:00.000Z",
    updated_by_id: "system"
  },

  // HR Module Permissions
  {
    id: "perm-014",
    code: "hr.view",
    name: "View Employee Data",
    description: "View employee information and records",
    module_id: "mod-004",
    is_active: true,
    created_at: "2023-01-01T00:00:00.000Z",
    created_by_id: "system",
    updated_at: "2023-01-01T00:00:00.000Z",
    updated_by_id: "system"
  },
  {
    id: "perm-015",
    code: "hr.manage",
    name: "Manage Employees",
    description: "Create, edit, and manage employee records",
    module_id: "mod-004",
    is_active: true,
    created_at: "2023-01-01T00:00:00.000Z",
    created_by_id: "system",
    updated_at: "2023-01-01T00:00:00.000Z",
    updated_by_id: "system"
  },
  {
    id: "perm-016",
    code: "hr.payroll",
    name: "Manage Payroll",
    description: "Process payroll and salary information",
    module_id: "mod-004",
    is_active: true,
    created_at: "2023-01-01T00:00:00.000Z",
    created_by_id: "system",
    updated_at: "2023-01-01T00:00:00.000Z",
    updated_by_id: "system"
  },

  // CRM Module Permissions
  {
    id: "perm-017",
    code: "crm.view",
    name: "View Customer Data",
    description: "View customer information and history",
    module_id: "mod-005",
    is_active: true,
    created_at: "2023-01-01T00:00:00.000Z",
    created_by_id: "system",
    updated_at: "2023-01-01T00:00:00.000Z",
    updated_by_id: "system"
  },
  {
    id: "perm-018",
    code: "crm.manage",
    name: "Manage Customers",
    description: "Create and manage customer records",
    module_id: "mod-005",
    is_active: true,
    created_at: "2023-01-01T00:00:00.000Z",
    created_by_id: "system",
    updated_at: "2023-01-01T00:00:00.000Z",
    updated_by_id: "system"
  },

  // PMS Module Permissions
  {
    id: "perm-019",
    code: "pms.view",
    name: "View Hotel Data",
    description: "View room status and reservations",
    module_id: "mod-006",
    is_active: true,
    created_at: "2023-01-01T00:00:00.000Z",
    created_by_id: "system",
    updated_at: "2023-01-01T00:00:00.000Z",
    updated_by_id: "system"
  },
  {
    id: "perm-020",
    code: "pms.reservations",
    name: "Manage Reservations",
    description: "Create and manage hotel reservations",
    module_id: "mod-006",
    is_active: true,
    created_at: "2023-01-01T00:00:00.000Z",
    created_by_id: "system",
    updated_at: "2023-01-01T00:00:00.000Z",
    updated_by_id: "system"
  },

  // POS Module Permissions
  {
    id: "perm-021",
    code: "pos.view",
    name: "View POS Data",
    description: "View sales and order information",
    module_id: "mod-007",
    is_active: true,
    created_at: "2023-01-01T00:00:00.000Z",
    created_by_id: "system",
    updated_at: "2023-01-01T00:00:00.000Z",
    updated_by_id: "system"
  },
  {
    id: "perm-022",
    code: "pos.sell",
    name: "Process Sales",
    description: "Process sales transactions and orders",
    module_id: "mod-007",
    is_active: true,
    created_at: "2023-01-01T00:00:00.000Z",
    created_by_id: "system",
    updated_at: "2023-01-01T00:00:00.000Z",
    updated_by_id: "system"
  },

  // Reporting Module Permissions
  {
    id: "perm-023",
    code: "reporting.view",
    name: "View Reports",
    description: "View business reports and analytics",
    module_id: "mod-008",
    is_active: true,
    created_at: "2023-01-01T00:00:00.000Z",
    created_by_id: "system",
    updated_at: "2023-01-01T00:00:00.000Z",
    updated_by_id: "system"
  },
  {
    id: "perm-024",
    code: "reporting.export",
    name: "Export Reports",
    description: "Export reports in various formats",
    module_id: "mod-008",
    is_active: true,
    created_at: "2023-01-01T00:00:00.000Z",
    created_by_id: "system",
    updated_at: "2023-01-01T00:00:00.000Z",
    updated_by_id: "system"
  },

  // Settings Module Permissions
  {
    id: "perm-025",
    code: "settings.view",
    name: "View System Settings",
    description: "View system configuration and settings",
    module_id: "mod-009",
    is_active: true,
    created_at: "2023-01-01T00:00:00.000Z",
    created_by_id: "system",
    updated_at: "2023-01-01T00:00:00.000Z",
    updated_by_id: "system"
  },
  {
    id: "perm-026",
    code: "settings.manage",
    name: "Manage System Settings",
    description: "Modify system configuration and settings",
    module_id: "mod-009",
    is_active: true,
    created_at: "2023-01-01T00:00:00.000Z",
    created_by_id: "system",
    updated_at: "2023-01-01T00:00:00.000Z",
    updated_by_id: "system"
  },
  {
    id: "perm-027",
    code: "settings.users",
    name: "Manage Users",
    description: "Create and manage user accounts",
    module_id: "mod-009",
    is_active: true,
    created_at: "2023-01-01T00:00:00.000Z",
    created_by_id: "system",
    updated_at: "2023-01-01T00:00:00.000Z",
    updated_by_id: "system"
  },
  {
    id: "perm-028",
    code: "settings.roles",
    name: "Manage Roles",
    description: "Create and manage user roles and permissions",
    module_id: "mod-009",
    is_active: true,
    created_at: "2023-01-01T00:00:00.000Z",
    created_by_id: "system",
    updated_at: "2023-01-01T00:00:00.000Z",
    updated_by_id: "system"
  },

  // Quality Module Permissions
  {
    id: "perm-029",
    code: "quality.view",
    name: "View Quality Data",
    description: "View quality control information",
    module_id: "mod-012",
    is_active: true,
    created_at: "2023-04-01T00:00:00.000Z",
    created_by_id: "user-003",
    updated_at: "2023-04-01T00:00:00.000Z",
    updated_by_id: "user-003"
  },
  {
    id: "perm-030",
    code: "quality.inspect",
    name: "Perform Quality Inspections",
    description: "Conduct quality inspections and record results",
    module_id: "mod-012",
    is_active: true,
    created_at: "2023-04-01T00:00:00.000Z",
    created_by_id: "user-003",
    updated_at: "2023-04-01T00:00:00.000Z",
    updated_by_id: "user-003"
  }
];

// =============== TB_PERMISSION CRUD FUNCTIONS ===============
export const tbPermissionCrud = {
  // Create new permission
  create: (data: Omit<TbPermission, 'id' | 'created_at' | 'updated_at'>): TbPermission => {
    const newPermission: TbPermission = {
      id: generateUuid(),
      created_at: getCurrentTimestamp(),
      updated_at: getCurrentTimestamp(),
      is_active: true,
      ...data
    };
    mockTbPermission.push(newPermission);
    return newPermission;
  },

  // Find by ID
  findById: (id: string): TbPermission | null => {
    return mockTbPermission.find(permission => permission.id === id) || null;
  },

  // Find by code
  findByCode: (code: string): TbPermission | null => {
    return mockTbPermission.find(permission => permission.code === code) || null;
  },

  // Find by module ID
  findByModuleId: (moduleId: string): TbPermission[] => {
    return mockTbPermission
      .filter(permission => permission.module_id === moduleId && permission.is_active)
      .sort((a, b) => a.name.localeCompare(b.name));
  },

  // Find by module code
  findByModuleCode: (moduleCode: string): TbPermission[] => {
    return mockTbPermission
      .filter(permission => 
        permission.is_active && 
        permission.code.startsWith(moduleCode + '.')
      )
      .sort((a, b) => a.name.localeCompare(b.name));
  },

  // Find all active permissions
  findActive: (): TbPermission[] => {
    return mockTbPermission
      .filter(permission => permission.is_active)
      .sort((a, b) => a.code.localeCompare(b.code));
  },

  // Find all permissions
  findAll: (): TbPermission[] => {
    return mockTbPermission.sort((a, b) => a.code.localeCompare(b.code));
  },

  // Search permissions
  search: (query: string): TbPermission[] => {
    const lowerQuery = query.toLowerCase();
    return mockTbPermission
      .filter(permission => 
        permission.is_active &&
        (permission.code.toLowerCase().includes(lowerQuery) ||
         permission.name.toLowerCase().includes(lowerQuery) ||
         permission.description?.toLowerCase().includes(lowerQuery))
      )
      .sort((a, b) => a.code.localeCompare(b.code));
  },

  // Find permissions by action type
  findByAction: (action: 'view' | 'create' | 'edit' | 'delete' | 'manage'): TbPermission[] => {
    return mockTbPermission
      .filter(permission => 
        permission.is_active && 
        permission.code.includes('.' + action)
      )
      .sort((a, b) => a.code.localeCompare(b.code));
  },

  // Find administrative permissions
  findAdminPermissions: (): TbPermission[] => {
    const adminActions = ['delete', 'manage', 'roles', 'users', 'settings'];
    return mockTbPermission
      .filter(permission => 
        permission.is_active && 
        adminActions.some(action => permission.code.includes(action))
      )
      .sort((a, b) => a.code.localeCompare(b.code));
  },

  // Find read-only permissions
  findReadOnlyPermissions: (): TbPermission[] => {
    return mockTbPermission
      .filter(permission => 
        permission.is_active && 
        permission.code.includes('.view')
      )
      .sort((a, b) => a.code.localeCompare(b.code));
  },

  // Update permission
  update: (id: string, data: Partial<TbPermission>, updated_by_id?: string): TbPermission | null => {
    const index = mockTbPermission.findIndex(permission => permission.id === id);
    if (index === -1) return null;

    mockTbPermission[index] = {
      ...mockTbPermission[index],
      ...data,
      updated_at: getCurrentTimestamp(),
      updated_by_id: updated_by_id || null
    };
    return mockTbPermission[index];
  },

  // Delete permission (soft delete by deactivating)
  delete: (id: string, updated_by_id?: string): boolean => {
    return tbPermissionCrud.update(id, { is_active: false }, updated_by_id) !== null;
  },

  // Activate permission
  activate: (id: string, updated_by_id?: string): TbPermission | null => {
    return tbPermissionCrud.update(id, { is_active: true }, updated_by_id);
  },

  // Deactivate permission
  deactivate: (id: string, updated_by_id?: string): TbPermission | null => {
    return tbPermissionCrud.update(id, { is_active: false }, updated_by_id);
  },

  // Get permission tree by module
  getPermissionTree: () => {
    const activePermissions = tbPermissionCrud.findActive();
    const tree: Record<string, TbPermission[]> = {};
    
    activePermissions.forEach(permission => {
      const moduleCode = permission.code.split('.')[0];
      if (!tree[moduleCode]) {
        tree[moduleCode] = [];
      }
      tree[moduleCode].push(permission);
    });
    
    return tree;
  },

  // Check if user has permission (mock implementation)
  hasPermission: (userPermissions: string[], requiredPermission: string): boolean => {
    return userPermissions.includes(requiredPermission);
  },

  // Get permission statistics
  getStats: () => {
    const allPermissions = mockTbPermission;
    const activePermissions = allPermissions.filter(permission => permission.is_active);
    
    return {
      total: allPermissions.length,
      active: activePermissions.length,
      inactive: allPermissions.length - activePermissions.length,
      byModule: activePermissions.reduce((acc, permission) => {
        const moduleCode = permission.code.split('.')[0];
        acc[moduleCode] = (acc[moduleCode] || 0) + 1;
        return acc;
      }, {} as Record<string, number>),
      byAction: activePermissions.reduce((acc, permission) => {
        const action = permission.code.split('.')[1] || 'other';
        acc[action] = (acc[action] || 0) + 1;
        return acc;
      }, {} as Record<string, number>),
      adminPermissions: tbPermissionCrud.findAdminPermissions().length,
      readOnlyPermissions: tbPermissionCrud.findReadOnlyPermissions().length
    };
  }
};
