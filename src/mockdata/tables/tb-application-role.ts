import { TbApplicationRole } from './types';
import { generateUuid, getCurrentTimestamp } from './utils';
import { UUID_MAPPING } from './uuid-mapping';

// =============== MOCK TB_APPLICATION_ROLE DATA ===============
export let mockTbApplicationRole: TbApplicationRole[] = [
  // Carmen Software Bangkok Roles
  {
    id: UUID_MAPPING['app-role-001'],
    business_unit_id: UUID_MAPPING['bu-001'],
    code: "SUPER_ADMIN",
    name: "Super Administrator",
    description: "Full system access with all permissions",
    is_active: true,
    created_at: "2023-01-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['system'],
    updated_at: "2023-01-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['system']
  },
  {
    id: UUID_MAPPING['app-role-002'],
    business_unit_id: UUID_MAPPING['bu-001'],
    code: "SYSTEM_ADMIN",
    name: "System Administrator",
    description: "System configuration and user management",
    is_active: true,
    created_at: "2023-01-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['system'],
    updated_at: "2023-01-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['system']
  },
  {
    id: UUID_MAPPING['app-role-003'],
    business_unit_id: UUID_MAPPING['bu-001'],
    code: "FINANCE_MANAGER",
    name: "Finance Manager",
    description: "Financial data access and accounting management",
    is_active: true,
    created_at: "2023-01-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['system'],
    updated_at: "2023-01-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['system']
  },
  {
    id: UUID_MAPPING['app-role-004'],
    business_unit_id: UUID_MAPPING['bu-001'],
    code: "PROCUREMENT_MANAGER",
    name: "Procurement Manager",
    description: "Purchase approval and vendor management",
    is_active: true,
    created_at: "2023-01-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['system'],
    updated_at: "2023-01-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['system']
  },
  {
    id: UUID_MAPPING['app-role-005'],
    business_unit_id: UUID_MAPPING['bu-001'],
    code: "INVENTORY_MANAGER",
    name: "Inventory Manager",
    description: "Stock management and inventory control",
    is_active: true,
    created_at: "2023-01-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['system'],
    updated_at: "2023-01-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['system']
  },
  {
    id: UUID_MAPPING['app-role-006'],
    business_unit_id: UUID_MAPPING['bu-001'],
    code: "HR_MANAGER",
    name: "HR Manager",
    description: "Human resources and payroll management",
    is_active: true,
    created_at: "2023-01-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['system'],
    updated_at: "2023-01-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['system']
  },
  {
    id: UUID_MAPPING['app-role-007'],
    business_unit_id: UUID_MAPPING['bu-001'],
    code: "EMPLOYEE",
    name: "Employee",
    description: "Standard employee access level",
    is_active: true,
    created_at: "2023-01-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['system'],
    updated_at: "2023-01-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['system']
  },

  // Royal Grand Hotel Roles
  {
    id: UUID_MAPPING['app-role-008'],
    business_unit_id: UUID_MAPPING['bu-002'],
    code: "HOTEL_MANAGER",
    name: "Hotel Manager",
    description: "Complete hotel operations management",
    is_active: true,
    created_at: "2023-02-15T00:00:00.000Z",
    created_by_id: UUID_MAPPING['user-001'],
    updated_at: "2023-02-15T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['user-001']
  },
  {
    id: UUID_MAPPING['app-role-009'],
    business_unit_id: UUID_MAPPING['bu-002'],
    code: "FRONT_DESK_MANAGER",
    name: "Front Desk Manager",
    description: "Front desk operations and guest services",
    is_active: true,
    created_at: "2023-02-15T00:00:00.000Z",
    created_by_id: UUID_MAPPING['user-001'],
    updated_at: "2023-02-15T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['user-001']
  },
  {
    id: UUID_MAPPING['app-role-010'],
    business_unit_id: UUID_MAPPING['bu-002'],
    code: "HOUSEKEEPING_MANAGER",
    name: "Housekeeping Manager",
    description: "Room cleaning and maintenance supervision",
    is_active: true,
    created_at: "2023-02-15T00:00:00.000Z",
    created_by_id: UUID_MAPPING['user-001'],
    updated_at: "2023-02-15T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['user-001']
  },
  {
    id: UUID_MAPPING['app-role-011'],
    business_unit_id: UUID_MAPPING['bu-002'],
    code: "CHEF_MANAGER",
    name: "Chef Manager",
    description: "Kitchen operations and food preparation",
    is_active: true,
    created_at: "2023-02-15T00:00:00.000Z",
    created_by_id: UUID_MAPPING['user-001'],
    updated_at: "2023-02-15T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['user-001']
  },
  {
    id: UUID_MAPPING['app-role-012'],
    business_unit_id: UUID_MAPPING['bu-002'],
    code: "RECEPTIONIST",
    name: "Receptionist",
    description: "Guest check-in/out and basic services",
    is_active: true,
    created_at: "2023-02-15T00:00:00.000Z",
    created_by_id: UUID_MAPPING['user-001'],
    updated_at: "2023-02-15T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['user-001']
  },

  // Spice Garden Restaurant Roles
  {
    id: UUID_MAPPING['app-role-013'],
    business_unit_id: UUID_MAPPING['bu-003'],
    code: "RESTAURANT_MANAGER",
    name: "Restaurant Manager",
    description: "Complete restaurant operations management",
    is_active: true,
    created_at: "2023-03-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['user-002'],
    updated_at: "2023-03-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['user-002']
  },
  {
    id: UUID_MAPPING['app-role-014'],
    business_unit_id: UUID_MAPPING['bu-003'],
    code: "HEAD_CHEF",
    name: "Head Chef",
    description: "Kitchen management and menu planning",
    is_active: true,
    created_at: "2023-03-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['user-002'],
    updated_at: "2023-03-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['user-002']
  },
  {
    id: UUID_MAPPING['app-role-015'],
    business_unit_id: UUID_MAPPING['bu-003'],
    code: "CASHIER",
    name: "Cashier",
    description: "POS operations and payment processing",
    is_active: true,
    created_at: "2023-03-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['user-002'],
    updated_at: "2023-03-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['user-002']
  },
  {
    id: UUID_MAPPING['app-role-016'],
    business_unit_id: UUID_MAPPING['bu-003'],
    code: "WAITER",
    name: "Waiter/Waitress",
    description: "Customer service and order taking",
    is_active: true,
    created_at: "2023-03-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['user-002'],
    updated_at: "2023-03-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['user-002']
  },
  {
    id: UUID_MAPPING['app-role-017'],
    business_unit_id: UUID_MAPPING['bu-003'],
    code: "COOK",
    name: "Cook",
    description: "Food preparation and cooking",
    is_active: true,
    created_at: "2023-03-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['user-002'],
    updated_at: "2023-03-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['user-002']
  },

  // Carmen Software Singapore Roles
  {
    id: UUID_MAPPING['app-role-018'],
    business_unit_id: UUID_MAPPING['bu-004'],
    code: "REGIONAL_MANAGER",
    name: "Regional Manager",
    description: "APAC regional operations management",
    is_active: true,
    created_at: "2023-04-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['user-003'],
    updated_at: "2023-04-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['user-003']
  },
  {
    id: UUID_MAPPING['app-role-019'],
    business_unit_id: UUID_MAPPING['bu-004'],
    code: "SALES_MANAGER",
    name: "Sales Manager",
    description: "Sales operations and customer relations",
    is_active: true,
    created_at: "2023-04-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['user-003'],
    updated_at: "2023-04-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['user-003']
  },
  {
    id: UUID_MAPPING['app-role-020'],
    business_unit_id: UUID_MAPPING['bu-004'],
    code: "SUPPORT_ENGINEER",
    name: "Support Engineer",
    description: "Technical support and customer assistance",
    is_active: true,
    created_at: "2023-04-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['user-003'],
    updated_at: "2023-04-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['user-003']
  },

  // Development Test Unit Roles
  {
    id: UUID_MAPPING['app-role-021'],
    business_unit_id: UUID_MAPPING['bu-005'],
    code: "DEVELOPER",
    name: "Developer",
    description: "Software development and testing",
    is_active: true,
    created_at: getCurrentTimestamp(),
    created_by_id: UUID_MAPPING['developer'],
    updated_at: getCurrentTimestamp(),
    updated_by_id: UUID_MAPPING['developer']
  },
  {
    id: UUID_MAPPING['app-role-022'],
    business_unit_id: UUID_MAPPING['bu-005'],
    code: "QA_TESTER",
    name: "QA Tester",
    description: "Quality assurance and testing",
    is_active: true,
    created_at: getCurrentTimestamp(),
    created_by_id: UUID_MAPPING['developer'],
    updated_at: getCurrentTimestamp(),
    updated_by_id: UUID_MAPPING['developer']
  }
];

// =============== TB_APPLICATION_ROLE CRUD FUNCTIONS ===============
export const tbApplicationRoleCrud = {
  // Create new application role
  create: (data: Omit<TbApplicationRole, 'id' | 'created_at' | 'updated_at'>): TbApplicationRole => {
    const newRole: TbApplicationRole = {
      id: generateUuid(),
      created_at: getCurrentTimestamp(),
      updated_at: getCurrentTimestamp(),
      is_active: true,
      ...data
    };
    mockTbApplicationRole.push(newRole);
    return newRole;
  },

  // Find by ID
  findById: (id: string): TbApplicationRole | null => {
    return mockTbApplicationRole.find(role => role.id === id) || null;
  },

  // Find by code
  findByCode: (code: string): TbApplicationRole | null => {
    return mockTbApplicationRole.find(role => role.code === code) || null;
  },

  // Find by business unit ID
  findByBusinessUnitId: (businessUnitId: string): TbApplicationRole[] => {
    return mockTbApplicationRole
      .filter(role => role.business_unit_id === businessUnitId && role.is_active)
      .sort((a, b) => a.name.localeCompare(b.name));
  },

  // Find by business unit code
  findByBusinessUnitCode: (businessUnitCode: string): TbApplicationRole[] => {
    // Note: This would typically require joining with business unit table
    // For now, we'll filter by partial matching of role codes
    return mockTbApplicationRole
      .filter(role => role.is_active)
      .sort((a, b) => a.name.localeCompare(b.name));
  },

  // Find all active roles
  findActive: (): TbApplicationRole[] => {
    return mockTbApplicationRole
      .filter(role => role.is_active)
      .sort((a, b) => a.name.localeCompare(b.name));
  },

  // Find all roles
  findAll: (): TbApplicationRole[] => {
    return mockTbApplicationRole.sort((a, b) => a.name.localeCompare(b.name));
  },

  // Search roles
  search: (query: string): TbApplicationRole[] => {
    const lowerQuery = query.toLowerCase();
    return mockTbApplicationRole
      .filter(role => 
        role.is_active &&
        (role.code.toLowerCase().includes(lowerQuery) ||
         role.name.toLowerCase().includes(lowerQuery) ||
         role.description?.toLowerCase().includes(lowerQuery))
      )
      .sort((a, b) => a.name.localeCompare(b.name));
  },

  // Find administrative roles
  findAdminRoles: (): TbApplicationRole[] => {
    const adminKeywords = ['admin', 'manager', 'supervisor'];
    return mockTbApplicationRole
      .filter(role => 
        role.is_active &&
        adminKeywords.some(keyword => 
          role.code.toLowerCase().includes(keyword) ||
          role.name.toLowerCase().includes(keyword)
        )
      )
      .sort((a, b) => a.name.localeCompare(b.name));
  },

  // Find roles by business type
  findByBusinessType: (businessType: 'hotel' | 'restaurant' | 'software' | 'general'): TbApplicationRole[] => {
    const businessRolePatterns = {
      hotel: ['hotel', 'front_desk', 'housekeeping', 'receptionist'],
      restaurant: ['restaurant', 'chef', 'cook', 'waiter', 'cashier'],
      software: ['developer', 'qa', 'support', 'engineer', 'admin'],
      general: ['manager', 'employee', 'admin', 'finance', 'hr', 'procurement']
    };

    const patterns = businessRolePatterns[businessType] || businessRolePatterns.general;
    
    return mockTbApplicationRole
      .filter(role => 
        role.is_active &&
        patterns.some(pattern => 
          role.code.toLowerCase().includes(pattern) ||
          role.name.toLowerCase().includes(pattern)
        )
      )
      .sort((a, b) => a.name.localeCompare(b.name));
  },

  // Find roles with specific permissions (mock - would need permission relationship)
  findRolesWithPermission: (permissionCode: string): TbApplicationRole[] => {
    // This is a mock implementation - in real scenario would join with permission tables
    const relevantRoles = {
      'inventory.manage': ['INVENTORY_MANAGER', 'SUPER_ADMIN', 'SYSTEM_ADMIN'],
      'procurement.approve': ['PROCUREMENT_MANAGER', 'SUPER_ADMIN', 'FINANCE_MANAGER'],
      'accounting.view': ['FINANCE_MANAGER', 'SUPER_ADMIN', 'SYSTEM_ADMIN'],
      'settings.manage': ['SUPER_ADMIN', 'SYSTEM_ADMIN'],
      'pms.reservations': ['HOTEL_MANAGER', 'FRONT_DESK_MANAGER', 'RECEPTIONIST'],
      'pos.sell': ['CASHIER', 'RESTAURANT_MANAGER', 'WAITER']
    };

    const roleCodes = relevantRoles[permissionCode as keyof typeof relevantRoles] || [];
    
    return mockTbApplicationRole
      .filter(role => 
        role.is_active && 
        roleCodes.includes(role.code)
      )
      .sort((a, b) => a.name.localeCompare(b.name));
  },

  // Update application role
  update: (id: string, data: Partial<TbApplicationRole>, updated_by_id?: string): TbApplicationRole | null => {
    const index = mockTbApplicationRole.findIndex(role => role.id === id);
    if (index === -1) return null;

    mockTbApplicationRole[index] = {
      ...mockTbApplicationRole[index],
      ...data,
      updated_at: getCurrentTimestamp(),
      updated_by_id: updated_by_id || null
    };
    return mockTbApplicationRole[index];
  },

  // Delete application role (soft delete by deactivating)
  delete: (id: string, updated_by_id?: string): boolean => {
    return tbApplicationRoleCrud.update(id, { is_active: false }, updated_by_id) !== null;
  },

  // Activate role
  activate: (id: string, updated_by_id?: string): TbApplicationRole | null => {
    return tbApplicationRoleCrud.update(id, { is_active: true }, updated_by_id);
  },

  // Deactivate role
  deactivate: (id: string, updated_by_id?: string): TbApplicationRole | null => {
    return tbApplicationRoleCrud.update(id, { is_active: false }, updated_by_id);
  },

  // Get role hierarchy (mock implementation)
  getRoleHierarchy: (businessUnitId: string) => {
    const roles = tbApplicationRoleCrud.findByBusinessUnitId(businessUnitId);
    
    // Simple hierarchy based on role naming patterns
    const hierarchy = {
      executives: roles.filter(r => r.code.includes('MANAGER') || r.code.includes('ADMIN')),
      supervisors: roles.filter(r => r.code.includes('SUPERVISOR') || r.code.includes('HEAD')),
      specialists: roles.filter(r => r.code.includes('ENGINEER') || r.code.includes('CHEF')),
      staff: roles.filter(r => 
        !r.code.includes('MANAGER') && 
        !r.code.includes('ADMIN') && 
        !r.code.includes('SUPERVISOR') && 
        !r.code.includes('HEAD') &&
        !r.code.includes('ENGINEER') &&
        !r.code.includes('CHEF')
      )
    };
    
    return hierarchy;
  },

  // Get role statistics
  getStats: () => {
    const allRoles = mockTbApplicationRole;
    const activeRoles = allRoles.filter(role => role.is_active);
    
    return {
      total: allRoles.length,
      active: activeRoles.length,
      inactive: allRoles.length - activeRoles.length,
      byBusinessUnit: activeRoles.reduce((acc, role) => {
        acc[role.business_unit_id] = (acc[role.business_unit_id] || 0) + 1;
        return acc;
      }, {} as Record<string, number>),
      adminRoles: tbApplicationRoleCrud.findAdminRoles().length,
      byBusinessType: {
        hotel: tbApplicationRoleCrud.findByBusinessType('hotel').length,
        restaurant: tbApplicationRoleCrud.findByBusinessType('restaurant').length,
        software: tbApplicationRoleCrud.findByBusinessType('software').length,
        general: tbApplicationRoleCrud.findByBusinessType('general').length
      }
    };
  }
};
