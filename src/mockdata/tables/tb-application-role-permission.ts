import { TbApplicationRolePermission } from './types';
import { generateUuid, getCurrentTimestamp } from './utils';

// =============== MOCK TB_APPLICATION_ROLE_TB_PERMISSION DATA ===============
export let mockTbApplicationRolePermission: TbApplicationRolePermission[] = [
  // Super Admin - All permissions
  { id: "rp-001", application_role_id: "app-role-001", permission_id: "perm-001", created_at: "2023-01-01T00:00:00.000Z", created_by_id: "system" },
  { id: "rp-002", application_role_id: "app-role-001", permission_id: "perm-002", created_at: "2023-01-01T00:00:00.000Z", created_by_id: "system" },
  { id: "rp-003", application_role_id: "app-role-001", permission_id: "perm-003", created_at: "2023-01-01T00:00:00.000Z", created_by_id: "system" },
  { id: "rp-004", application_role_id: "app-role-001", permission_id: "perm-004", created_at: "2023-01-01T00:00:00.000Z", created_by_id: "system" },
  { id: "rp-005", application_role_id: "app-role-001", permission_id: "perm-005", created_at: "2023-01-01T00:00:00.000Z", created_by_id: "system" },
  { id: "rp-006", application_role_id: "app-role-001", permission_id: "perm-006", created_at: "2023-01-01T00:00:00.000Z", created_by_id: "system" },
  { id: "rp-007", application_role_id: "app-role-001", permission_id: "perm-007", created_at: "2023-01-01T00:00:00.000Z", created_by_id: "system" },
  { id: "rp-008", application_role_id: "app-role-001", permission_id: "perm-008", created_at: "2023-01-01T00:00:00.000Z", created_by_id: "system" },
  { id: "rp-009", application_role_id: "app-role-001", permission_id: "perm-009", created_at: "2023-01-01T00:00:00.000Z", created_by_id: "system" },
  { id: "rp-010", application_role_id: "app-role-001", permission_id: "perm-010", created_at: "2023-01-01T00:00:00.000Z", created_by_id: "system" },
  { id: "rp-011", application_role_id: "app-role-001", permission_id: "perm-025", created_at: "2023-01-01T00:00:00.000Z", created_by_id: "system" },
  { id: "rp-012", application_role_id: "app-role-001", permission_id: "perm-026", created_at: "2023-01-01T00:00:00.000Z", created_by_id: "system" },
  { id: "rp-013", application_role_id: "app-role-001", permission_id: "perm-027", created_at: "2023-01-01T00:00:00.000Z", created_by_id: "system" },
  { id: "rp-014", application_role_id: "app-role-001", permission_id: "perm-028", created_at: "2023-01-01T00:00:00.000Z", created_by_id: "system" },

  // System Admin - System management
  { id: "rp-015", application_role_id: "app-role-002", permission_id: "perm-025", created_at: "2023-01-01T00:00:00.000Z", created_by_id: "system" },
  { id: "rp-016", application_role_id: "app-role-002", permission_id: "perm-026", created_at: "2023-01-01T00:00:00.000Z", created_by_id: "system" },
  { id: "rp-017", application_role_id: "app-role-002", permission_id: "perm-027", created_at: "2023-01-01T00:00:00.000Z", created_by_id: "system" },
  { id: "rp-018", application_role_id: "app-role-002", permission_id: "perm-028", created_at: "2023-01-01T00:00:00.000Z", created_by_id: "system" },
  { id: "rp-019", application_role_id: "app-role-002", permission_id: "perm-001", created_at: "2023-01-01T00:00:00.000Z", created_by_id: "system" },
  { id: "rp-020", application_role_id: "app-role-002", permission_id: "perm-006", created_at: "2023-01-01T00:00:00.000Z", created_by_id: "system" },

  // Finance Manager - Financial permissions
  { id: "rp-021", application_role_id: "app-role-003", permission_id: "perm-011", created_at: "2023-01-01T00:00:00.000Z", created_by_id: "system" },
  { id: "rp-022", application_role_id: "app-role-003", permission_id: "perm-012", created_at: "2023-01-01T00:00:00.000Z", created_by_id: "system" },
  { id: "rp-023", application_role_id: "app-role-003", permission_id: "perm-013", created_at: "2023-01-01T00:00:00.000Z", created_by_id: "system" },
  { id: "rp-024", application_role_id: "app-role-003", permission_id: "perm-006", created_at: "2023-01-01T00:00:00.000Z", created_by_id: "system" },
  { id: "rp-025", application_role_id: "app-role-003", permission_id: "perm-008", created_at: "2023-01-01T00:00:00.000Z", created_by_id: "system" },

  // Procurement Manager - Procurement permissions
  { id: "rp-026", application_role_id: "app-role-004", permission_id: "perm-006", created_at: "2023-01-01T00:00:00.000Z", created_by_id: "system" },
  { id: "rp-027", application_role_id: "app-role-004", permission_id: "perm-007", created_at: "2023-01-01T00:00:00.000Z", created_by_id: "system" },
  { id: "rp-028", application_role_id: "app-role-004", permission_id: "perm-008", created_at: "2023-01-01T00:00:00.000Z", created_by_id: "system" },
  { id: "rp-029", application_role_id: "app-role-004", permission_id: "perm-009", created_at: "2023-01-01T00:00:00.000Z", created_by_id: "system" },
  { id: "rp-030", application_role_id: "app-role-004", permission_id: "perm-010", created_at: "2023-01-01T00:00:00.000Z", created_by_id: "system" },

  // Inventory Manager - Inventory permissions
  { id: "rp-031", application_role_id: "app-role-005", permission_id: "perm-001", created_at: "2023-01-01T00:00:00.000Z", created_by_id: "system" },
  { id: "rp-032", application_role_id: "app-role-005", permission_id: "perm-002", created_at: "2023-01-01T00:00:00.000Z", created_by_id: "system" },
  { id: "rp-033", application_role_id: "app-role-005", permission_id: "perm-003", created_at: "2023-01-01T00:00:00.000Z", created_by_id: "system" },
  { id: "rp-034", application_role_id: "app-role-005", permission_id: "perm-004", created_at: "2023-01-01T00:00:00.000Z", created_by_id: "system" },
  { id: "rp-035", application_role_id: "app-role-005", permission_id: "perm-005", created_at: "2023-01-01T00:00:00.000Z", created_by_id: "system" },
  { id: "rp-036", application_role_id: "app-role-005", permission_id: "perm-006", created_at: "2023-01-01T00:00:00.000Z", created_by_id: "system" },

  // HR Manager - HR permissions
  { id: "rp-037", application_role_id: "app-role-006", permission_id: "perm-014", created_at: "2023-01-01T00:00:00.000Z", created_by_id: "system" },
  { id: "rp-038", application_role_id: "app-role-006", permission_id: "perm-015", created_at: "2023-01-01T00:00:00.000Z", created_by_id: "system" },
  { id: "rp-039", application_role_id: "app-role-006", permission_id: "perm-016", created_at: "2023-01-01T00:00:00.000Z", created_by_id: "system" },

  // Employee - Basic view permissions
  { id: "rp-040", application_role_id: "app-role-007", permission_id: "perm-001", created_at: "2023-01-01T00:00:00.000Z", created_by_id: "system" },
  { id: "rp-041", application_role_id: "app-role-007", permission_id: "perm-006", created_at: "2023-01-01T00:00:00.000Z", created_by_id: "system" },
  { id: "rp-042", application_role_id: "app-role-007", permission_id: "perm-007", created_at: "2023-01-01T00:00:00.000Z", created_by_id: "system" },

  // Hotel Manager - Hotel specific permissions
  { id: "rp-043", application_role_id: "app-role-008", permission_id: "perm-019", created_at: "2023-02-15T00:00:00.000Z", created_by_id: "user-001" },
  { id: "rp-044", application_role_id: "app-role-008", permission_id: "perm-020", created_at: "2023-02-15T00:00:00.000Z", created_by_id: "user-001" },
  { id: "rp-045", application_role_id: "app-role-008", permission_id: "perm-001", created_at: "2023-02-15T00:00:00.000Z", created_by_id: "user-001" },
  { id: "rp-046", application_role_id: "app-role-008", permission_id: "perm-006", created_at: "2023-02-15T00:00:00.000Z", created_by_id: "user-001" },
  { id: "rp-047", application_role_id: "app-role-008", permission_id: "perm-014", created_at: "2023-02-15T00:00:00.000Z", created_by_id: "user-001" },

  // Front Desk Manager - Front desk permissions
  { id: "rp-048", application_role_id: "app-role-009", permission_id: "perm-019", created_at: "2023-02-15T00:00:00.000Z", created_by_id: "user-001" },
  { id: "rp-049", application_role_id: "app-role-009", permission_id: "perm-020", created_at: "2023-02-15T00:00:00.000Z", created_by_id: "user-001" },

  // Receptionist - Basic hotel permissions
  { id: "rp-050", application_role_id: "app-role-012", permission_id: "perm-019", created_at: "2023-02-15T00:00:00.000Z", created_by_id: "user-001" },
  { id: "rp-051", application_role_id: "app-role-012", permission_id: "perm-020", created_at: "2023-02-15T00:00:00.000Z", created_by_id: "user-001" },

  // Restaurant Manager - Restaurant permissions
  { id: "rp-052", application_role_id: "app-role-013", permission_id: "perm-021", created_at: "2023-03-01T00:00:00.000Z", created_by_id: "user-002" },
  { id: "rp-053", application_role_id: "app-role-013", permission_id: "perm-022", created_at: "2023-03-01T00:00:00.000Z", created_by_id: "user-002" },
  { id: "rp-054", application_role_id: "app-role-013", permission_id: "perm-001", created_at: "2023-03-01T00:00:00.000Z", created_by_id: "user-002" },
  { id: "rp-055", application_role_id: "app-role-013", permission_id: "perm-006", created_at: "2023-03-01T00:00:00.000Z", created_by_id: "user-002" },

  // Cashier - POS permissions
  { id: "rp-056", application_role_id: "app-role-015", permission_id: "perm-021", created_at: "2023-03-01T00:00:00.000Z", created_by_id: "user-002" },
  { id: "rp-057", application_role_id: "app-role-015", permission_id: "perm-022", created_at: "2023-03-01T00:00:00.000Z", created_by_id: "user-002" },

  // Waiter - View permissions
  { id: "rp-058", application_role_id: "app-role-016", permission_id: "perm-021", created_at: "2023-03-01T00:00:00.000Z", created_by_id: "user-002" },

  // Developer - All development permissions
  { id: "rp-059", application_role_id: "app-role-021", permission_id: "perm-025", created_at: getCurrentTimestamp(), created_by_id: "developer" },
  { id: "rp-060", application_role_id: "app-role-021", permission_id: "perm-026", created_at: getCurrentTimestamp(), created_by_id: "developer" },
  { id: "rp-061", application_role_id: "app-role-021", permission_id: "perm-001", created_at: getCurrentTimestamp(), created_by_id: "developer" },
  { id: "rp-062", application_role_id: "app-role-021", permission_id: "perm-002", created_at: getCurrentTimestamp(), created_by_id: "developer" },
  { id: "rp-063", application_role_id: "app-role-021", permission_id: "perm-003", created_at: getCurrentTimestamp(), created_by_id: "developer" },
  { id: "rp-064", application_role_id: "app-role-021", permission_id: "perm-004", created_at: getCurrentTimestamp(), created_by_id: "developer" },

  // QA Tester - Testing permissions
  { id: "rp-065", application_role_id: "app-role-022", permission_id: "perm-001", created_at: getCurrentTimestamp(), created_by_id: "developer" },
  { id: "rp-066", application_role_id: "app-role-022", permission_id: "perm-006", created_at: getCurrentTimestamp(), created_by_id: "developer" },
  { id: "rp-067", application_role_id: "app-role-022", permission_id: "perm-025", created_at: getCurrentTimestamp(), created_by_id: "developer" }
];

// =============== TB_APPLICATION_ROLE_TB_PERMISSION CRUD FUNCTIONS ===============
export const tbApplicationRolePermissionCrud = {
  // Create new role-permission mapping
  create: (data: Omit<TbApplicationRolePermission, 'id' | 'created_at' | 'updated_at'>): TbApplicationRolePermission => {
    const newMapping: TbApplicationRolePermission = {
      id: generateUuid(),
      created_at: getCurrentTimestamp(),
      updated_at: getCurrentTimestamp(),
      ...data
    };
    mockTbApplicationRolePermission.push(newMapping);
    return newMapping;
  },

  // Find by ID
  findById: (id: string): TbApplicationRolePermission | null => {
    return mockTbApplicationRolePermission.find(mapping => mapping.id === id) || null;
  },

  // Find by application role ID
  findByApplicationRoleId: (applicationRoleId: string): TbApplicationRolePermission[] => {
    return mockTbApplicationRolePermission
      .filter(mapping => mapping.application_role_id === applicationRoleId)
      .sort((a, b) => (a.created_at || '').localeCompare(b.created_at || ''));
  },

  // Find by permission ID
  findByPermissionId: (permissionId: string): TbApplicationRolePermission[] => {
    return mockTbApplicationRolePermission
      .filter(mapping => mapping.permission_id === permissionId)
      .sort((a, b) => (a.created_at || '').localeCompare(b.created_at || ''));
  },

  // Find specific role-permission mapping
  findByRoleAndPermission: (applicationRoleId: string, permissionId: string): TbApplicationRolePermission | null => {
    return mockTbApplicationRolePermission.find(mapping => 
      mapping.application_role_id === applicationRoleId && 
      mapping.permission_id === permissionId
    ) || null;
  },

  // Get all permissions for a role
  getPermissionsForRole: (applicationRoleId: string): string[] => {
    return mockTbApplicationRolePermission
      .filter(mapping => mapping.application_role_id === applicationRoleId)
      .map(mapping => mapping.permission_id);
  },

  // Get all roles that have a specific permission
  getRolesWithPermission: (permissionId: string): string[] => {
    return mockTbApplicationRolePermission
      .filter(mapping => mapping.permission_id === permissionId)
      .map(mapping => mapping.application_role_id);
  },

  // Check if role has permission
  hasPermission: (applicationRoleId: string, permissionId: string): boolean => {
    return mockTbApplicationRolePermission.some(mapping => 
      mapping.application_role_id === applicationRoleId && 
      mapping.permission_id === permissionId
    );
  },

  // Find all mappings
  findAll: (): TbApplicationRolePermission[] => {
    return mockTbApplicationRolePermission.sort((a, b) => 
      (a.created_at || '').localeCompare(b.created_at || '')
    );
  },

  // Add permission to role
  addPermissionToRole: (applicationRoleId: string, permissionId: string, created_by_id?: string): TbApplicationRolePermission | null => {
    // Check if mapping already exists
    const existing = tbApplicationRolePermissionCrud.findByRoleAndPermission(applicationRoleId, permissionId);
    if (existing) {
      return existing; // Already exists
    }

    return tbApplicationRolePermissionCrud.create({
      application_role_id: applicationRoleId,
      permission_id: permissionId,
      created_by_id: created_by_id || null
    });
  },

  // Remove permission from role
  removePermissionFromRole: (applicationRoleId: string, permissionId: string): boolean => {
    const index = mockTbApplicationRolePermission.findIndex(mapping => 
      mapping.application_role_id === applicationRoleId && 
      mapping.permission_id === permissionId
    );
    
    if (index === -1) return false;
    
    mockTbApplicationRolePermission.splice(index, 1);
    return true;
  },

  // Update role-permission mapping
  update: (id: string, data: Partial<TbApplicationRolePermission>, updated_by_id?: string): TbApplicationRolePermission | null => {
    const index = mockTbApplicationRolePermission.findIndex(mapping => mapping.id === id);
    if (index === -1) return null;

    mockTbApplicationRolePermission[index] = {
      ...mockTbApplicationRolePermission[index],
      ...data,
      updated_at: getCurrentTimestamp(),
      updated_by_id: updated_by_id || null
    };
    return mockTbApplicationRolePermission[index];
  },

  // Delete role-permission mapping
  delete: (id: string): boolean => {
    const index = mockTbApplicationRolePermission.findIndex(mapping => mapping.id === id);
    if (index === -1) return false;
    
    mockTbApplicationRolePermission.splice(index, 1);
    return true;
  },

  // Bulk assign permissions to role
  bulkAssignPermissions: (applicationRoleId: string, permissionIds: string[], created_by_id?: string): TbApplicationRolePermission[] => {
    const results: TbApplicationRolePermission[] = [];
    
    permissionIds.forEach(permissionId => {
      const mapping = tbApplicationRolePermissionCrud.addPermissionToRole(applicationRoleId, permissionId, created_by_id);
      if (mapping) {
        results.push(mapping);
      }
    });
    
    return results;
  },

  // Bulk remove permissions from role
  bulkRemovePermissions: (applicationRoleId: string, permissionIds: string[]): boolean => {
    let allRemoved = true;
    
    permissionIds.forEach(permissionId => {
      const removed = tbApplicationRolePermissionCrud.removePermissionFromRole(applicationRoleId, permissionId);
      if (!removed) {
        allRemoved = false;
      }
    });
    
    return allRemoved;
  },

  // Copy permissions from one role to another
  copyPermissions: (fromRoleId: string, toRoleId: string, created_by_id?: string): TbApplicationRolePermission[] => {
    const sourcePermissions = tbApplicationRolePermissionCrud.getPermissionsForRole(fromRoleId);
    return tbApplicationRolePermissionCrud.bulkAssignPermissions(toRoleId, sourcePermissions, created_by_id);
  },

  // Get role permission statistics
  getStats: () => {
    const allMappings = mockTbApplicationRolePermission;
    
    return {
      total: allMappings.length,
      byRole: allMappings.reduce((acc, mapping) => {
        acc[mapping.application_role_id] = (acc[mapping.application_role_id] || 0) + 1;
        return acc;
      }, {} as Record<string, number>),
      byPermission: allMappings.reduce((acc, mapping) => {
        acc[mapping.permission_id] = (acc[mapping.permission_id] || 0) + 1;
        return acc;
      }, {} as Record<string, number>),
      avgPermissionsPerRole: allMappings.length / new Set(allMappings.map(m => m.application_role_id)).size,
      avgRolesPerPermission: allMappings.length / new Set(allMappings.map(m => m.permission_id)).size
    };
  }
};
