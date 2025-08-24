import { TbClusterUser } from './types';
import { generateUuid, getCurrentTimestamp } from './utils';

// =============== MOCK TB_CLUSTER_USER DATA ===============
export let mockTbClusterUser: TbClusterUser[] = [
  // Cluster Admin assignments
  // Carmen Software HQ Admin
  {
    id: "cu-001",
    cluster_id: "cluster-001", // Carmen Software HQ
    user_id: "user-001", // admin
    role: "admin",
    is_active: true,
    created_at: "2023-01-01T00:00:00.000Z",
    created_by_id: "system",
    updated_at: "2023-01-01T00:00:00.000Z",
    updated_by_id: "system"
  },

  // Hotel Chain Admin
  {
    id: "cu-002",
    cluster_id: "cluster-002", // Hotel Chain
    user_id: "user-004", // Michael Chen
    role: "admin",
    is_active: true,
    created_at: "2023-02-15T00:00:00.000Z",
    created_by_id: "user-001",
    updated_at: "2023-02-15T00:00:00.000Z",
    updated_by_id: "user-001"
  },

  // Restaurant Chain Admin
  {
    id: "cu-003",
    cluster_id: "cluster-003", // Restaurant Chain
    user_id: "user-006", // David Lee
    role: "admin",
    is_active: true,
    created_at: "2023-03-01T00:00:00.000Z",
    created_by_id: "user-001",
    updated_at: "2023-03-01T00:00:00.000Z",
    updated_by_id: "user-001"
  },

  // Development Cluster Admin
  {
    id: "cu-004",
    cluster_id: "cluster-004", // Development
    user_id: "user-010", // Developer
    role: "admin",
    is_active: true,
    created_at: getCurrentTimestamp(),
    created_by_id: "system",
    updated_at: getCurrentTimestamp(),
    updated_by_id: "system"
  },

  // Cross-cluster system users
  // Admin has access to all clusters
  {
    id: "cu-005",
    cluster_id: "cluster-002", // Hotel Chain
    user_id: "user-001", // admin
    role: "admin",
    is_active: true,
    created_at: "2023-01-01T00:00:00.000Z",
    created_by_id: "system",
    updated_at: "2023-01-01T00:00:00.000Z",
    updated_by_id: "system"
  },
  {
    id: "cu-006",
    cluster_id: "cluster-003", // Restaurant Chain
    user_id: "user-001", // admin
    role: "admin",
    is_active: true,
    created_at: "2023-01-01T00:00:00.000Z",
    created_by_id: "system",
    updated_at: "2023-01-01T00:00:00.000Z",
    updated_by_id: "system"
  },
  {
    id: "cu-007",
    cluster_id: "cluster-004", // Development
    user_id: "user-001", // admin
    role: "admin",
    is_active: true,
    created_at: "2023-01-01T00:00:00.000Z",
    created_by_id: "system",
    updated_at: "2023-01-01T00:00:00.000Z",
    updated_by_id: "system"
  },

  // Regular users with cluster access
  // John Doe - Finance user across multiple clusters
  {
    id: "cu-008",
    cluster_id: "cluster-001", // Carmen Software HQ
    user_id: "user-002", // John Doe
    role: "user",
    is_active: true,
    created_at: "2023-01-15T00:00:00.000Z",
    created_by_id: "user-001",
    updated_at: "2023-01-15T00:00:00.000Z",
    updated_by_id: "user-001"
  },
  {
    id: "cu-009",
    cluster_id: "cluster-002", // Hotel Chain
    user_id: "user-002", // John Doe (cross-cluster finance)
    role: "user",
    is_active: true,
    created_at: "2023-02-01T00:00:00.000Z",
    created_by_id: "user-004",
    updated_at: "2023-02-01T00:00:00.000Z",
    updated_by_id: "user-004"
  },

  // Jane Smith - Procurement across clusters
  {
    id: "cu-010",
    cluster_id: "cluster-001", // Carmen Software HQ
    user_id: "user-003", // Jane Smith
    role: "user",
    is_active: true,
    created_at: "2023-02-01T00:00:00.000Z",
    created_by_id: "user-001",
    updated_at: "2023-02-01T00:00:00.000Z",
    updated_by_id: "user-001"
  },
  {
    id: "cu-011",
    cluster_id: "cluster-003", // Restaurant Chain
    user_id: "user-003", // Jane Smith (procurement support)
    role: "user",
    is_active: true,
    created_at: "2023-03-15T00:00:00.000Z",
    created_by_id: "user-006",
    updated_at: "2023-03-15T00:00:00.000Z",
    updated_by_id: "user-006"
  },

  // Hotel Staff
  {
    id: "cu-012",
    cluster_id: "cluster-002", // Hotel Chain
    user_id: "user-005", // Sarah Johnson
    role: "user",
    is_active: true,
    created_at: "2023-02-20T00:00:00.000Z",
    created_by_id: "user-004",
    updated_at: "2023-02-20T00:00:00.000Z",
    updated_by_id: "user-004"
  },

  // Restaurant Staff
  {
    id: "cu-013",
    cluster_id: "cluster-003", // Restaurant Chain
    user_id: "user-007", // Maria Garcia
    role: "user",
    is_active: true,
    created_at: "2023-03-05T00:00:00.000Z",
    created_by_id: "user-006",
    updated_at: "2023-03-05T00:00:00.000Z",
    updated_by_id: "user-006"
  },

  // Support and Technical Staff
  {
    id: "cu-014",
    cluster_id: "cluster-001", // Carmen Software HQ
    user_id: "user-008", // Alex Tan
    role: "user",
    is_active: true,
    created_at: "2023-04-01T00:00:00.000Z",
    created_by_id: "user-001",
    updated_at: "2023-04-01T00:00:00.000Z",
    updated_by_id: "user-001"
  },
  {
    id: "cu-015",
    cluster_id: "cluster-001", // Carmen Software HQ
    user_id: "user-009", // Lisa Wong
    role: "user",
    is_active: true,
    created_at: "2023-04-15T00:00:00.000Z",
    created_by_id: "user-001",
    updated_at: "2023-04-15T00:00:00.000Z",
    updated_by_id: "user-001"
  },
  {
    id: "cu-016",
    cluster_id: "cluster-004", // Development
    user_id: "user-009", // Lisa Wong (support in dev)
    role: "user",
    is_active: true,
    created_at: getCurrentTimestamp(),
    created_by_id: "user-010",
    updated_at: getCurrentTimestamp(),
    updated_by_id: "user-010"
  },

  // Support Manager and Security Officer with broad access
  {
    id: "cu-017",
    cluster_id: "cluster-001", // Carmen Software HQ
    user_id: "user-011", // Support Manager
    role: "admin",
    is_active: true,
    created_at: "2023-05-01T00:00:00.000Z",
    created_by_id: "user-001",
    updated_at: "2023-05-01T00:00:00.000Z",
    updated_by_id: "user-001"
  },
  {
    id: "cu-018",
    cluster_id: "cluster-002", // Hotel Chain
    user_id: "user-011", // Support Manager
    role: "user",
    is_active: true,
    created_at: "2023-05-01T00:00:00.000Z",
    created_by_id: "user-004",
    updated_at: "2023-05-01T00:00:00.000Z",
    updated_by_id: "user-004"
  },
  {
    id: "cu-019",
    cluster_id: "cluster-001", // Carmen Software HQ
    user_id: "user-012", // Security Officer
    role: "admin",
    is_active: true,
    created_at: "2023-05-15T00:00:00.000Z",
    created_by_id: "user-001",
    updated_at: "2023-05-15T00:00:00.000Z",
    updated_by_id: "user-001"
  },

  // Some inactive assignments for testing
  {
    id: "cu-020",
    cluster_id: "cluster-003", // Restaurant Chain
    user_id: "user-008", // Alex Tan (temporarily inactive)
    role: "user",
    is_active: false,
    created_at: "2023-04-01T00:00:00.000Z",
    created_by_id: "user-006",
    updated_at: "2023-06-01T00:00:00.000Z",
    updated_by_id: "user-006"
  }
];

// =============== TB_CLUSTER_USER CRUD FUNCTIONS ===============
export const tbClusterUserCrud = {
  // Create new cluster-user relationship
  create: (data: Omit<TbClusterUser, 'id' | 'created_at' | 'updated_at'>): TbClusterUser => {
    const newRelation: TbClusterUser = {
      id: generateUuid(),
      role: 'user',
      is_active: true,
      created_at: getCurrentTimestamp(),
      updated_at: getCurrentTimestamp(),
      ...data
    };
    mockTbClusterUser.push(newRelation);
    return newRelation;
  },

  // Find by ID
  findById: (id: string): TbClusterUser | null => {
    return mockTbClusterUser.find(relation => relation.id === id) || null;
  },

  // Find by cluster ID
  findByClusterId: (clusterId: string): TbClusterUser[] => {
    return mockTbClusterUser
      .filter(relation => relation.cluster_id === clusterId)
      .sort((a, b) => (a.created_at || '').localeCompare(b.created_at || ''));
  },

  // Find by user ID
  findByUserId: (userId: string): TbClusterUser[] => {
    return mockTbClusterUser
      .filter(relation => relation.user_id === userId)
      .sort((a, b) => (a.created_at || '').localeCompare(b.created_at || ''));
  },

  // Find active by cluster ID
  findActiveByClusterId: (clusterId: string): TbClusterUser[] => {
    return mockTbClusterUser
      .filter(relation => relation.cluster_id === clusterId && relation.is_active)
      .sort((a, b) => (a.created_at || '').localeCompare(b.created_at || ''));
  },

  // Find active by user ID
  findActiveByUserId: (userId: string): TbClusterUser[] => {
    return mockTbClusterUser
      .filter(relation => relation.user_id === userId && relation.is_active)
      .sort((a, b) => (a.created_at || '').localeCompare(b.created_at || ''));
  },

  // Find specific cluster-user relationship
  findByClusterAndUser: (clusterId: string, userId: string): TbClusterUser | null => {
    return mockTbClusterUser.find(relation => 
      relation.cluster_id === clusterId && 
      relation.user_id === userId
    ) || null;
  },

  // Get all clusters for a user
  getUserClusters: (userId: string, activeOnly: boolean = true): string[] => {
    return mockTbClusterUser
      .filter(relation => relation.user_id === userId && (!activeOnly || relation.is_active))
      .map(relation => relation.cluster_id);
  },

  // Get all users in a cluster
  getClusterUsers: (clusterId: string, activeOnly: boolean = true): string[] => {
    return mockTbClusterUser
      .filter(relation => relation.cluster_id === clusterId && (!activeOnly || relation.is_active))
      .map(relation => relation.user_id);
  },

  // Get cluster admins
  getClusterAdmins: (clusterId: string): string[] => {
    return mockTbClusterUser
      .filter(relation => 
        relation.cluster_id === clusterId && 
        relation.role === 'admin' && 
        relation.is_active
      )
      .map(relation => relation.user_id);
  },

  // Get user's admin clusters
  getUserAdminClusters: (userId: string): string[] => {
    return mockTbClusterUser
      .filter(relation => 
        relation.user_id === userId && 
        relation.role === 'admin' && 
        relation.is_active
      )
      .map(relation => relation.cluster_id);
  },

  // Check if user has access to cluster
  hasClusterAccess: (userId: string, clusterId: string): boolean => {
    return mockTbClusterUser.some(relation => 
      relation.user_id === userId && 
      relation.cluster_id === clusterId && 
      relation.is_active
    );
  },

  // Check if user is cluster admin
  isClusterAdmin: (userId: string, clusterId: string): boolean => {
    return mockTbClusterUser.some(relation => 
      relation.user_id === userId && 
      relation.cluster_id === clusterId && 
      relation.role === 'admin' && 
      relation.is_active
    );
  },

  // Find all relationships
  findAll: (): TbClusterUser[] => {
    return mockTbClusterUser.sort((a, b) => 
      (a.created_at || '').localeCompare(b.created_at || '')
    );
  },

  // Add user to cluster
  addUserToCluster: (userId: string, clusterId: string, role: 'admin' | 'user' = 'user', created_by_id?: string): TbClusterUser | null => {
    // Check if relationship already exists
    const existing = tbClusterUserCrud.findByClusterAndUser(clusterId, userId);
    if (existing) {
      // If exists but inactive, reactivate
      if (!existing.is_active) {
        return tbClusterUserCrud.update(existing.id, { 
          is_active: true, 
          role: role 
        }, created_by_id);
      }
      return existing; // Already active
    }

    return tbClusterUserCrud.create({
      cluster_id: clusterId,
      user_id: userId,
      role: role,
      created_by_id: created_by_id || null
    });
  },

  // Remove user from cluster (soft delete)
  removeUserFromCluster: (userId: string, clusterId: string, updated_by_id?: string): boolean => {
    const relation = tbClusterUserCrud.findByClusterAndUser(clusterId, userId);
    if (!relation) return false;
    
    const updated = tbClusterUserCrud.update(relation.id, { 
      is_active: false 
    }, updated_by_id);
    return updated !== null;
  },

  // Update relationship
  update: (id: string, data: Partial<TbClusterUser>, updated_by_id?: string): TbClusterUser | null => {
    const index = mockTbClusterUser.findIndex(relation => relation.id === id);
    if (index === -1) return null;

    mockTbClusterUser[index] = {
      ...mockTbClusterUser[index],
      ...data,
      updated_at: getCurrentTimestamp(),
      updated_by_id: updated_by_id || null
    };
    return mockTbClusterUser[index];
  },

  // Delete relationship (hard delete)
  delete: (id: string): boolean => {
    const index = mockTbClusterUser.findIndex(relation => relation.id === id);
    if (index === -1) return false;
    
    mockTbClusterUser.splice(index, 1);
    return true;
  },

  // Promote user to admin
  promoteToAdmin: (userId: string, clusterId: string, updated_by_id?: string): TbClusterUser | null => {
    const relation = tbClusterUserCrud.findByClusterAndUser(clusterId, userId);
    if (!relation || !relation.is_active) return null;
    
    return tbClusterUserCrud.update(relation.id, { 
      role: 'admin' 
    }, updated_by_id);
  },

  // Demote admin to user
  demoteToUser: (userId: string, clusterId: string, updated_by_id?: string): TbClusterUser | null => {
    const relation = tbClusterUserCrud.findByClusterAndUser(clusterId, userId);
    if (!relation || !relation.is_active) return null;
    
    return tbClusterUserCrud.update(relation.id, { 
      role: 'user' 
    }, updated_by_id);
  },

  // Bulk add users to cluster
  bulkAddUsersToCluster: (userIds: string[], clusterId: string, role: 'admin' | 'user' = 'user', created_by_id?: string): TbClusterUser[] => {
    const results: TbClusterUser[] = [];
    
    userIds.forEach(userId => {
      const relation = tbClusterUserCrud.addUserToCluster(userId, clusterId, role, created_by_id);
      if (relation) {
        results.push(relation);
      }
    });
    
    return results;
  },

  // Bulk remove users from cluster
  bulkRemoveUsersFromCluster: (userIds: string[], clusterId: string, updated_by_id?: string): boolean => {
    let allRemoved = true;
    
    userIds.forEach(userId => {
      const removed = tbClusterUserCrud.removeUserFromCluster(userId, clusterId, updated_by_id);
      if (!removed) {
        allRemoved = false;
      }
    });
    
    return allRemoved;
  },

  // Transfer cluster ownership (change admin)
  transferClusterOwnership: (clusterId: string, fromUserId: string, toUserId: string, updated_by_id?: string): { oldAdmin: TbClusterUser | null; newAdmin: TbClusterUser | null } => {
    // Demote old admin
    const oldAdmin = tbClusterUserCrud.demoteToUser(fromUserId, clusterId, updated_by_id);
    
    // Promote new admin
    const newAdmin = tbClusterUserCrud.promoteToAdmin(toUserId, clusterId, updated_by_id);
    
    return { oldAdmin, newAdmin };
  },

  // Find cross-cluster users (users with access to multiple clusters)
  findCrossClusterUsers: (): { userId: string; clusterCount: number; adminClusters: number }[] => {
    const userClusters = mockTbClusterUser
      .filter(relation => relation.is_active)
      .reduce((acc, relation) => {
        if (!acc[relation.user_id]) {
          acc[relation.user_id] = { clusters: [], adminClusters: 0 };
        }
        acc[relation.user_id].clusters.push(relation.cluster_id);
        if (relation.role === 'admin') {
          acc[relation.user_id].adminClusters++;
        }
        return acc;
      }, {} as Record<string, { clusters: string[]; adminClusters: number }>);

    return Object.entries(userClusters)
      .filter(([_, data]) => data.clusters.length > 1)
      .map(([userId, data]) => ({
        userId,
        clusterCount: data.clusters.length,
        adminClusters: data.adminClusters
      }))
      .sort((a, b) => b.clusterCount - a.clusterCount);
  },

  // Find orphaned relationships (invalid cluster or user IDs)
  findOrphanedRelationships: (validClusterIds: string[], validUserIds: string[]): TbClusterUser[] => {
    return mockTbClusterUser
      .filter(relation => 
        !validClusterIds.includes(relation.cluster_id) ||
        !validUserIds.includes(relation.user_id)
      )
      .sort((a, b) => (a.created_at || '').localeCompare(b.created_at || ''));
  },

  // Get cluster statistics
  getStats: () => {
    const allRelations = mockTbClusterUser;
    const activeRelations = allRelations.filter(r => r.is_active);
    
    return {
      total: allRelations.length,
      active: activeRelations.length,
      inactive: allRelations.length - activeRelations.length,
      byCluster: activeRelations.reduce((acc, relation) => {
        acc[relation.cluster_id] = (acc[relation.cluster_id] || 0) + 1;
        return acc;
      }, {} as Record<string, number>),
      byRole: {
        admin: activeRelations.filter(r => r.role === 'admin').length,
        user: activeRelations.filter(r => r.role === 'user').length
      },
      crossClusterUsers: tbClusterUserCrud.findCrossClusterUsers().length,
      avgUsersPerCluster: activeRelations.length / new Set(activeRelations.map(r => r.cluster_id)).size,
      avgClustersPerUser: activeRelations.length / new Set(activeRelations.map(r => r.user_id)).size
    };
  }
};
