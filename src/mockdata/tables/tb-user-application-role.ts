import { TbUserApplicationRole } from './types';
import { generateUuid, getCurrentTimestamp } from './utils';
import { UUID_MAPPING } from './uuid-mapping';

// =============== MOCK TB_USER_TB_APPLICATION_ROLE DATA ===============
export let mockTbUserApplicationRole: TbUserApplicationRole[] = [
  // Admin user with Super Admin role
  {
    id: "uar-001",
    user_id: UUID_MAPPING['user-001'],
    application_role_id: UUID_MAPPING['app-role-001'], // Super Admin
    created_at: "2023-01-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['system'],
    updated_at: "2023-01-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['system']
  },

  // John Doe with Finance Manager role
  {
    id: "uar-002",
    user_id: UUID_MAPPING['user-002'],
    application_role_id: UUID_MAPPING['app-role-003'], // Finance Manager
    created_at: "2023-01-15T00:00:00.000Z",
    created_by_id: UUID_MAPPING['user-001'],
    updated_at: "2023-01-15T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['user-001']
  },

  // Jane Smith with Procurement Manager role
  {
    id: "uar-003",
    user_id: UUID_MAPPING['user-003'],
    application_role_id: UUID_MAPPING['app-role-004'], // Procurement Manager
    created_at: "2023-02-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['user-001'],
    updated_at: "2023-02-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['user-001']
  },

  // Michael Chen with Hotel Manager role
  {
    id: "uar-004",
    user_id: UUID_MAPPING['user-004'],
    application_role_id: UUID_MAPPING['app-role-008'], // Hotel Manager
    created_at: "2023-02-15T00:00:00.000Z",
    created_by_id: UUID_MAPPING['user-001'],
    updated_at: "2023-02-15T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['user-001']
  },

  // Sarah Johnson with Receptionist role
  {
    id: "uar-005",
    user_id: UUID_MAPPING['user-005'],
    application_role_id: UUID_MAPPING['app-role-012'], // Receptionist
    created_at: "2023-02-20T00:00:00.000Z",
    created_by_id: UUID_MAPPING['user-001'],
    updated_at: "2023-02-20T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['user-001']
  },

  // David Lee with Restaurant Manager role
  {
    id: "uar-006",
    user_id: UUID_MAPPING['user-006'],
    application_role_id: UUID_MAPPING['app-role-013'], // Restaurant Manager
    created_at: "2023-03-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['user-001'],
    updated_at: "2023-03-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['user-001']
  },

  // Maria Garcia with Cashier role
  {
    id: "uar-007",
    user_id: UUID_MAPPING['user-007'],
    application_role_id: UUID_MAPPING['app-role-015'], // Cashier
    created_at: "2023-03-05T00:00:00.000Z",
    created_by_id: UUID_MAPPING['user-001'],
    updated_at: "2023-03-05T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['user-001']
  },

  // Alex Tan with Regional Manager role
  {
    id: "uar-008",
    user_id: UUID_MAPPING['user-008'],
    application_role_id: UUID_MAPPING['app-role-018'], // Regional Manager
    created_at: "2023-04-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['user-001'],
    updated_at: "2023-04-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['user-001']
  },

  // Lisa Wong with Support Engineer role
  {
    id: "uar-009",
    user_id: UUID_MAPPING['user-009'],
    application_role_id: UUID_MAPPING['app-role-020'], // Support Engineer
    created_at: "2023-04-15T00:00:00.000Z",
    created_by_id: UUID_MAPPING['user-001'],
    updated_at: "2023-04-15T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['user-001']
  },

  // Developer with Developer role
  {
    id: "uar-010",
    user_id: UUID_MAPPING['user-010'],
    application_role_id: UUID_MAPPING['app-role-021'], // Developer
    created_at: getCurrentTimestamp(),
    created_by_id: UUID_MAPPING['system'],
    updated_at: getCurrentTimestamp(),
    updated_by_id: UUID_MAPPING['system']
  },

  // Support Manager with System Admin role
  {
    id: "uar-011",
    user_id: UUID_MAPPING['user-011'],
    application_role_id: UUID_MAPPING['app-role-002'], // System Admin
    created_at: "2023-05-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['user-001'],
    updated_at: "2023-05-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['user-001']
  },

  // Security Officer with System Admin role
  {
    id: "uar-012",
    user_id: UUID_MAPPING['user-012'],
    application_role_id: UUID_MAPPING['app-role-002'], // System Admin
    created_at: "2023-05-15T00:00:00.000Z",
    created_by_id: UUID_MAPPING['user-001'],
    updated_at: "2023-05-15T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['user-001']
  },

  // Multiple roles for some users
  // John Doe also has Employee role in Carmen Bangkok
  {
    id: "uar-013",
    user_id: UUID_MAPPING['user-002'],
    application_role_id: UUID_MAPPING['app-role-007'], // Employee
    created_at: "2023-01-15T00:00:00.000Z",
    created_by_id: UUID_MAPPING['user-001'],
    updated_at: "2023-01-15T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['user-001']
  },

  // Jane Smith also has Inventory Manager role
  {
    id: "uar-014",
    user_id: UUID_MAPPING['user-003'],
    application_role_id: UUID_MAPPING['app-role-005'], // Inventory Manager
    created_at: "2023-02-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['user-001'],
    updated_at: "2023-02-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['user-001']
  },

  // Developer also has QA Tester role
  {
    id: "uar-015",
    user_id: UUID_MAPPING['user-010'],
    application_role_id: UUID_MAPPING['app-role-022'], // QA Tester
    created_at: getCurrentTimestamp(),
    created_by_id: UUID_MAPPING['system'],
    updated_at: getCurrentTimestamp(),
    updated_by_id: UUID_MAPPING['system']
  }
];

// =============== TB_USER_TB_APPLICATION_ROLE CRUD FUNCTIONS ===============
export const tbUserApplicationRoleCrud = {
  // Create new user-application role assignment
  create: (data: Omit<TbUserApplicationRole, 'id' | 'created_at' | 'updated_at'>): TbUserApplicationRole => {
    const newAssignment: TbUserApplicationRole = {
      id: generateUuid(),
      created_at: getCurrentTimestamp(),
      updated_at: getCurrentTimestamp(),
      ...data
    };
    mockTbUserApplicationRole.push(newAssignment);
    return newAssignment;
  },

  // Find by ID
  findById: (id: string): TbUserApplicationRole | null => {
    return mockTbUserApplicationRole.find(assignment => assignment.id === id) || null;
  },

  // Find by user ID
  findByUserId: (userId: string): TbUserApplicationRole[] => {
    return mockTbUserApplicationRole
      .filter(assignment => assignment.user_id === userId)
      .sort((a, b) => (a.created_at || '').localeCompare(b.created_at || ''));
  },

  // Find by application role ID
  findByApplicationRoleId: (applicationRoleId: string): TbUserApplicationRole[] => {
    return mockTbUserApplicationRole
      .filter(assignment => assignment.application_role_id === applicationRoleId)
      .sort((a, b) => (a.created_at || '').localeCompare(b.created_at || ''));
  },

  // Find specific user-role assignment
  findByUserAndRole: (userId: string, applicationRoleId: string): TbUserApplicationRole | null => {
    return mockTbUserApplicationRole.find(assignment => 
      assignment.user_id === userId && 
      assignment.application_role_id === applicationRoleId
    ) || null;
  },

  // Get all application roles for a user
  getUserApplicationRoles: (userId: string): string[] => {
    return mockTbUserApplicationRole
      .filter(assignment => assignment.user_id === userId)
      .map(assignment => assignment.application_role_id);
  },

  // Get all users with specific application role
  getUsersWithApplicationRole: (applicationRoleId: string): string[] => {
    return mockTbUserApplicationRole
      .filter(assignment => assignment.application_role_id === applicationRoleId)
      .map(assignment => assignment.user_id);
  },

  // Check if user has specific application role
  hasApplicationRole: (userId: string, applicationRoleId: string): boolean => {
    return mockTbUserApplicationRole.some(assignment => 
      assignment.user_id === userId && 
      assignment.application_role_id === applicationRoleId
    );
  },

  // Find all assignments
  findAll: (): TbUserApplicationRole[] => {
    return mockTbUserApplicationRole.sort((a, b) => 
      (a.created_at || '').localeCompare(b.created_at || '')
    );
  },

  // Assign application role to user
  assignRoleToUser: (userId: string, applicationRoleId: string, created_by_id?: string): TbUserApplicationRole | null => {
    // Check if assignment already exists
    const existing = tbUserApplicationRoleCrud.findByUserAndRole(userId, applicationRoleId);
    if (existing) {
      return existing; // Already assigned
    }

    return tbUserApplicationRoleCrud.create({
      user_id: userId,
      application_role_id: applicationRoleId,
      created_by_id: created_by_id || null
    });
  },

  // Remove application role from user
  removeRoleFromUser: (userId: string, applicationRoleId: string): boolean => {
    const index = mockTbUserApplicationRole.findIndex(assignment => 
      assignment.user_id === userId && 
      assignment.application_role_id === applicationRoleId
    );
    
    if (index === -1) return false;
    
    mockTbUserApplicationRole.splice(index, 1);
    return true;
  },

  // Update assignment
  update: (id: string, data: Partial<TbUserApplicationRole>, updated_by_id?: string): TbUserApplicationRole | null => {
    const index = mockTbUserApplicationRole.findIndex(assignment => assignment.id === id);
    if (index === -1) return null;

    mockTbUserApplicationRole[index] = {
      ...mockTbUserApplicationRole[index],
      ...data,
      updated_at: getCurrentTimestamp(),
      updated_by_id: updated_by_id || null
    };
    return mockTbUserApplicationRole[index];
  },

  // Delete assignment
  delete: (id: string): boolean => {
    const index = mockTbUserApplicationRole.findIndex(assignment => assignment.id === id);
    if (index === -1) return false;
    
    mockTbUserApplicationRole.splice(index, 1);
    return true;
  },

  // Bulk assign roles to user
  bulkAssignRolesToUser: (userId: string, applicationRoleIds: string[], created_by_id?: string): TbUserApplicationRole[] => {
    const results: TbUserApplicationRole[] = [];
    
    applicationRoleIds.forEach(roleId => {
      const assignment = tbUserApplicationRoleCrud.assignRoleToUser(userId, roleId, created_by_id);
      if (assignment) {
        results.push(assignment);
      }
    });
    
    return results;
  },

  // Bulk remove roles from user
  bulkRemoveRolesFromUser: (userId: string, applicationRoleIds: string[]): boolean => {
    let allRemoved = true;
    
    applicationRoleIds.forEach(roleId => {
      const removed = tbUserApplicationRoleCrud.removeRoleFromUser(userId, roleId);
      if (!removed) {
        allRemoved = false;
      }
    });
    
    return allRemoved;
  },

  // Replace user's application roles
  replaceUserRoles: (userId: string, newApplicationRoleIds: string[], updated_by_id?: string): TbUserApplicationRole[] => {
    // Remove all existing roles for user
    const currentRoles = tbUserApplicationRoleCrud.getUserApplicationRoles(userId);
    tbUserApplicationRoleCrud.bulkRemoveRolesFromUser(userId, currentRoles);
    
    // Assign new roles
    return tbUserApplicationRoleCrud.bulkAssignRolesToUser(userId, newApplicationRoleIds, updated_by_id);
  },

  // Copy roles from one user to another
  copyUserRoles: (fromUserId: string, toUserId: string, created_by_id?: string): TbUserApplicationRole[] => {
    const sourceRoles = tbUserApplicationRoleCrud.getUserApplicationRoles(fromUserId);
    return tbUserApplicationRoleCrud.bulkAssignRolesToUser(toUserId, sourceRoles, created_by_id);
  },

  // Find users with multiple roles
  findUsersWithMultipleRoles: (): { userId: string; roleCount: number }[] => {
    const userRoleCounts = mockTbUserApplicationRole.reduce((acc, assignment) => {
      acc[assignment.user_id] = (acc[assignment.user_id] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    return Object.entries(userRoleCounts)
      .filter(([_, count]) => count > 1)
      .map(([userId, count]) => ({ userId, roleCount: count }))
      .sort((a, b) => b.roleCount - a.roleCount);
  },

  // Find orphaned roles (roles assigned to non-existent users)
  findOrphanedAssignments: (validUserIds: string[]): TbUserApplicationRole[] => {
    return mockTbUserApplicationRole
      .filter(assignment => !validUserIds.includes(assignment.user_id))
      .sort((a, b) => (a.created_at || '').localeCompare(b.created_at || ''));
  },

  // Get assignment statistics
  getStats: () => {
    const allAssignments = mockTbUserApplicationRole;
    
    return {
      total: allAssignments.length,
      byUser: allAssignments.reduce((acc, assignment) => {
        acc[assignment.user_id] = (acc[assignment.user_id] || 0) + 1;
        return acc;
      }, {} as Record<string, number>),
      byRole: allAssignments.reduce((acc, assignment) => {
        acc[assignment.application_role_id] = (acc[assignment.application_role_id] || 0) + 1;
        return acc;
      }, {} as Record<string, number>),
      usersWithMultipleRoles: tbUserApplicationRoleCrud.findUsersWithMultipleRoles().length,
      avgRolesPerUser: allAssignments.length / new Set(allAssignments.map(a => a.user_id)).size,
      avgUsersPerRole: allAssignments.length / new Set(allAssignments.map(a => a.application_role_id)).size
    };
  }
};
