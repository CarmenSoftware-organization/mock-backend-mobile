import { TbUserBusinessUnit } from './types';
import { generateUuid, getCurrentTimestamp } from './utils';
import { UUID_MAPPING } from './uuid-mapping';

// =============== MOCK TB_USER_TB_BUSINESS_UNIT DATA ===============
export let mockTbUserBusinessUnit: TbUserBusinessUnit[] = [
  // Admin user in Carmen Software Bangkok (HQ)
  {
    id: "ubu-001",
    user_id: UUID_MAPPING['user-001'],
    business_unit_id: UUID_MAPPING['bu-001'],
    role: "admin",
    is_default: true,
    is_active: true,
    created_at: "2023-01-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['system'],
    updated_at: "2023-01-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['system']
  },

  // John Doe in Carmen Software Bangkok
  {
    id: "ubu-002",
    user_id: UUID_MAPPING['user-002'],
    business_unit_id: UUID_MAPPING['bu-001'],
    role: "user",
    is_default: true,
    is_active: true,
    created_at: "2023-01-15T00:00:00.000Z",
    created_by_id: UUID_MAPPING['user-001'],
    updated_at: "2023-01-15T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['user-001']
  },

  // Jane Smith in Carmen Software Bangkok
  {
    id: "ubu-003",
    user_id: UUID_MAPPING['user-003'],
    business_unit_id: UUID_MAPPING['bu-001'],
    role: "user",
    is_default: true,
    is_active: true,
    created_at: "2023-02-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['user-001'],
    updated_at: "2023-02-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['user-001']
  },

  // Michael Chen in Royal Grand Hotel
  {
    id: "ubu-004",
    user_id: UUID_MAPPING['user-004'],
    business_unit_id: UUID_MAPPING['bu-002'],
    role: "admin",
    is_default: true,
    is_active: true,
    created_at: "2023-02-15T00:00:00.000Z",
    created_by_id: UUID_MAPPING['user-001'],
    updated_at: "2023-02-15T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['user-001']
  },

  // Sarah Johnson in Royal Grand Hotel
  {
    id: "ubu-005",
    user_id: UUID_MAPPING['user-005'],
    business_unit_id: UUID_MAPPING['bu-002'],
    role: "user",
    is_default: true,
    is_active: true,
    created_at: "2023-02-20T00:00:00.000Z",
    created_by_id: UUID_MAPPING['user-001'],
    updated_at: "2023-02-20T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['user-001']
  },

  // David Lee in Spice Garden Restaurant
  {
    id: "ubu-006",
    user_id: UUID_MAPPING['user-006'],
    business_unit_id: UUID_MAPPING['bu-003'],
    role: "admin",
    is_default: true,
    is_active: true,
    created_at: "2023-03-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['user-001'],
    updated_at: "2023-03-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['user-001']
  },

  // Maria Garcia in Spice Garden Restaurant
  {
    id: "ubu-007",
    user_id: UUID_MAPPING['user-007'],
    business_unit_id: UUID_MAPPING['bu-003'],
    role: "user",
    is_default: true,
    is_active: true,
    created_at: "2023-03-05T00:00:00.000Z",
    created_by_id: UUID_MAPPING['user-001'],
    updated_at: "2023-03-05T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['user-001']
  },

  // Alex Tan in Carmen Software Singapore
  {
    id: "ubu-008",
    user_id: UUID_MAPPING['user-008'],
    business_unit_id: UUID_MAPPING['bu-004'],
    role: "admin",
    is_default: true,
    is_active: true,
    created_at: "2023-04-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['user-001'],
    updated_at: "2023-04-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['user-001']
  },

  // Lisa Wong in Carmen Software Singapore
  {
    id: "ubu-009",
    user_id: UUID_MAPPING['user-009'],
    business_unit_id: UUID_MAPPING['bu-004'],
    role: "user",
    is_default: true,
    is_active: true,
    created_at: "2023-04-15T00:00:00.000Z",
    created_by_id: UUID_MAPPING['user-001'],
    updated_at: "2023-04-15T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['user-001']
  },

  // Developer in Development Test Unit
  {
    id: "ubu-010",
    user_id: UUID_MAPPING['user-010'],
    business_unit_id: UUID_MAPPING['bu-005'],
    role: "admin",
    is_default: true,
    is_active: true,
    created_at: getCurrentTimestamp(),
    created_by_id: UUID_MAPPING['system'],
    updated_at: getCurrentTimestamp(),
    updated_by_id: UUID_MAPPING['system']
  },

  // Cross-business unit access - Admin can access multiple units
  {
    id: "ubu-011",
    user_id: UUID_MAPPING['user-001'],
    business_unit_id: UUID_MAPPING['bu-002'],
    role: "admin",
    is_default: false,
    is_active: true,
    created_at: "2023-02-15T00:00:00.000Z",
    created_by_id: UUID_MAPPING['user-001'],
    updated_at: "2023-02-15T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['user-001']
  },

  {
    id: "ubu-012",
    user_id: UUID_MAPPING['user-001'],
    business_unit_id: UUID_MAPPING['bu-003'],
    role: "admin",
    is_default: false,
    is_active: true,
    created_at: "2023-03-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['user-001'],
    updated_at: "2023-03-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['user-001']
  },

  {
    id: "ubu-013",
    user_id: UUID_MAPPING['user-001'],
    business_unit_id: UUID_MAPPING['bu-004'],
    role: "admin",
    is_default: false,
    is_active: true,
    created_at: "2023-04-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['user-001'],
    updated_at: "2023-04-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['user-001']
  },

  // Support manager access to all units
  {
    id: "ubu-014",
    user_id: UUID_MAPPING['user-011'],
    business_unit_id: UUID_MAPPING['bu-001'],
    role: "user",
    is_default: true,
    is_active: true,
    created_at: "2023-05-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['user-001'],
    updated_at: "2023-05-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['user-001']
  },

  {
    id: "ubu-015",
    user_id: UUID_MAPPING['user-011'],
    business_unit_id: UUID_MAPPING['bu-002'],
    role: "user",
    is_default: false,
    is_active: true,
    created_at: "2023-05-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['user-001'],
    updated_at: "2023-05-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['user-001']
  }
];

// =============== TB_USER_TB_BUSINESS_UNIT CRUD FUNCTIONS ===============
export const tbUserBusinessUnitCrud = {
  // Create new user-business unit relationship
  create: (data: Omit<TbUserBusinessUnit, 'id' | 'created_at' | 'updated_at'>): TbUserBusinessUnit => {
    const newRelation: TbUserBusinessUnit = {
      id: generateUuid(),
      created_at: getCurrentTimestamp(),
      updated_at: getCurrentTimestamp(),
      role: 'user',
      is_default: false,
      is_active: true,
      ...data
    };
    mockTbUserBusinessUnit.push(newRelation);
    return newRelation;
  },

  // Find by ID
  findById: (id: string): TbUserBusinessUnit | null => {
    return mockTbUserBusinessUnit.find(relation => relation.id === id) || null;
  },

  // Find by user ID
  findByUserId: (userId: string): TbUserBusinessUnit[] => {
    return mockTbUserBusinessUnit
      .filter(relation => relation.user_id === userId && relation.is_active)
      .sort((a, b) => {
        // Default business unit first
        if (a.is_default && !b.is_default) return -1;
        if (!a.is_default && b.is_default) return 1;
        return (a.created_at || '').localeCompare(b.created_at || '');
      });
  },

  // Find by business unit ID
  findByBusinessUnitId: (businessUnitId: string): TbUserBusinessUnit[] => {
    return mockTbUserBusinessUnit
      .filter(relation => relation.business_unit_id === businessUnitId && relation.is_active)
      .sort((a, b) => (a.created_at || '').localeCompare(b.created_at || ''));
  },

  // Find specific user-business unit relationship
  findByUserAndBusinessUnit: (userId: string, businessUnitId: string): TbUserBusinessUnit | null => {
    return mockTbUserBusinessUnit.find(relation => 
      relation.user_id === userId && 
      relation.business_unit_id === businessUnitId &&
      relation.is_active
    ) || null;
  },

  // Get user's default business unit
  getUserDefaultBusinessUnit: (userId: string): TbUserBusinessUnit | null => {
    return mockTbUserBusinessUnit.find(relation => 
      relation.user_id === userId && 
      relation.is_default && 
      relation.is_active
    ) || null;
  },

  // Get business unit admins
  getBusinessUnitAdmins: (businessUnitId: string): TbUserBusinessUnit[] => {
    return mockTbUserBusinessUnit
      .filter(relation => 
        relation.business_unit_id === businessUnitId && 
        relation.role === 'admin' && 
        relation.is_active
      )
      .sort((a, b) => (a.created_at || '').localeCompare(b.created_at || ''));
  },

  // Get business unit users (non-admin)
  getBusinessUnitUsers: (businessUnitId: string): TbUserBusinessUnit[] => {
    return mockTbUserBusinessUnit
      .filter(relation => 
        relation.business_unit_id === businessUnitId && 
        relation.role === 'user' && 
        relation.is_active
      )
      .sort((a, b) => (a.created_at || '').localeCompare(b.created_at || ''));
  },

  // Get all business units for user
  getUserBusinessUnits: (userId: string): string[] => {
    return mockTbUserBusinessUnit
      .filter(relation => relation.user_id === userId && relation.is_active)
      .map(relation => relation.business_unit_id || '')
      .filter(id => id !== '');
  },

  // Check if user has access to business unit
  hasAccess: (userId: string, businessUnitId: string): boolean => {
    return mockTbUserBusinessUnit.some(relation => 
      relation.user_id === userId && 
      relation.business_unit_id === businessUnitId && 
      relation.is_active
    );
  },

  // Check if user is admin of business unit
  isAdmin: (userId: string, businessUnitId: string): boolean => {
    return mockTbUserBusinessUnit.some(relation => 
      relation.user_id === userId && 
      relation.business_unit_id === businessUnitId && 
      relation.role === 'admin' && 
      relation.is_active
    );
  },

  // Find all relationships
  findAll: (): TbUserBusinessUnit[] => {
    return mockTbUserBusinessUnit.sort((a, b) => 
      (a.created_at || '').localeCompare(b.created_at || '')
    );
  },

  // Update relationship
  update: (id: string, data: Partial<TbUserBusinessUnit>, updated_by_id?: string): TbUserBusinessUnit | null => {
    const index = mockTbUserBusinessUnit.findIndex(relation => relation.id === id);
    if (index === -1) return null;

    mockTbUserBusinessUnit[index] = {
      ...mockTbUserBusinessUnit[index],
      ...data,
      updated_at: getCurrentTimestamp(),
      updated_by_id: updated_by_id || null
    };
    return mockTbUserBusinessUnit[index];
  },

  // Activate relationship
  activate: (id: string, updated_by_id?: string): TbUserBusinessUnit | null => {
    return tbUserBusinessUnitCrud.update(id, { is_active: true }, updated_by_id);
  },

  // Deactivate relationship
  deactivate: (id: string, updated_by_id?: string): TbUserBusinessUnit | null => {
    return tbUserBusinessUnitCrud.update(id, { is_active: false }, updated_by_id);
  },

  // Set as default business unit
  setAsDefault: (userId: string, businessUnitId: string, updated_by_id?: string): TbUserBusinessUnit | null => {
    // First remove default from all other relationships for this user
    mockTbUserBusinessUnit.forEach((relation, index) => {
      if (relation.user_id === userId && relation.is_default) {
        mockTbUserBusinessUnit[index] = {
          ...relation,
          is_default: false,
          updated_at: getCurrentTimestamp(),
          updated_by_id: updated_by_id || null
        };
      }
    });

    // Then set the target relationship as default
    const targetRelation = tbUserBusinessUnitCrud.findByUserAndBusinessUnit(userId, businessUnitId);
    if (!targetRelation) return null;

    return tbUserBusinessUnitCrud.update(targetRelation.id, { is_default: true }, updated_by_id);
  },

  // Change user role in business unit
  changeRole: (userId: string, businessUnitId: string, role: 'admin' | 'user', updated_by_id?: string): TbUserBusinessUnit | null => {
    const relation = tbUserBusinessUnitCrud.findByUserAndBusinessUnit(userId, businessUnitId);
    if (!relation) return null;

    return tbUserBusinessUnitCrud.update(relation.id, { role }, updated_by_id);
  },

  // Add user to business unit
  addUserToBusinessUnit: (userId: string, businessUnitId: string, role: 'admin' | 'user' = 'user', isDefault = false, created_by_id?: string): TbUserBusinessUnit | null => {
    // Check if relationship already exists
    const existing = tbUserBusinessUnitCrud.findByUserAndBusinessUnit(userId, businessUnitId);
    if (existing) {
      // Reactivate if it was inactive
      if (!existing.is_active) {
        return tbUserBusinessUnitCrud.activate(existing.id, created_by_id);
      }
      return existing;
    }

    return tbUserBusinessUnitCrud.create({
      user_id: userId,
      business_unit_id: businessUnitId,
      role,
      is_default: isDefault,
      created_by_id: created_by_id || null
    });
  },

  // Remove user from business unit
  removeUserFromBusinessUnit: (userId: string, businessUnitId: string, updated_by_id?: string): boolean => {
    const relation = tbUserBusinessUnitCrud.findByUserAndBusinessUnit(userId, businessUnitId);
    if (!relation) return false;

    return tbUserBusinessUnitCrud.deactivate(relation.id, updated_by_id) !== null;
  },

  // Delete relationship (hard delete)
  delete: (id: string): boolean => {
    const index = mockTbUserBusinessUnit.findIndex(relation => relation.id === id);
    if (index === -1) return false;
    
    mockTbUserBusinessUnit.splice(index, 1);
    return true;
  },

  // Get relationship statistics
  getStats: () => {
    const allRelations = mockTbUserBusinessUnit;
    const activeRelations = allRelations.filter(relation => relation.is_active);
    
    return {
      total: allRelations.length,
      active: activeRelations.length,
      inactive: allRelations.length - activeRelations.length,
      byRole: activeRelations.reduce((acc, relation) => {
        const role = relation.role || 'user';
        acc[role] = (acc[role] || 0) + 1;
        return acc;
      }, {} as Record<string, number>),
      byBusinessUnit: activeRelations.reduce((acc, relation) => {
        const buId = relation.business_unit_id || 'unknown';
        acc[buId] = (acc[buId] || 0) + 1;
        return acc;
      }, {} as Record<string, number>),
      defaultAssignments: activeRelations.filter(relation => relation.is_default).length,
      crossBusinessUnitUsers: new Set(
        activeRelations
          .map(relation => relation.user_id)
          .filter(userId => 
            activeRelations.filter(r => r.user_id === userId).length > 1
          )
      ).size
    };
  }
};
