import { TbUser } from './types';
import { generateUuid, getCurrentTimestamp } from './utils';

// =============== MOCK TB_USER DATA ===============
export let mockTbUser: TbUser[] = [
  {
    id: "user-001",
    username: "admin",
    email: "admin@carmensoftware.com",
    platform_role: "platform_admin",
    is_active: true,
    is_consent: true,
    consent_at: "2023-01-01T00:00:00.000Z",
    created_at: "2023-01-01T00:00:00.000Z",
    created_by_id: "system",
    updated_at: "2023-01-01T00:00:00.000Z",
    updated_by_id: "system"
  },
  {
    id: "user-002",
    username: "john.doe",
    email: "john.doe@carmensoftware.com",
    platform_role: "user",
    is_active: true,
    is_consent: true,
    consent_at: "2023-01-15T00:00:00.000Z",
    created_at: "2023-01-15T00:00:00.000Z",
    created_by_id: "user-001",
    updated_at: "2023-01-15T00:00:00.000Z",
    updated_by_id: "user-001"
  },
  {
    id: "user-003",
    username: "jane.smith",
    email: "jane.smith@carmensoftware.com",
    platform_role: "user",
    is_active: true,
    is_consent: true,
    consent_at: "2023-02-01T00:00:00.000Z",
    created_at: "2023-02-01T00:00:00.000Z",
    created_by_id: "user-001",
    updated_at: "2023-02-01T00:00:00.000Z",
    updated_by_id: "user-001"
  },
  {
    id: "user-004",
    username: "michael.chen",
    email: "michael.chen@royalgrandhotel.com",
    platform_role: "user",
    is_active: true,
    is_consent: true,
    consent_at: "2023-02-15T00:00:00.000Z",
    created_at: "2023-02-15T00:00:00.000Z",
    created_by_id: "user-001",
    updated_at: "2023-02-15T00:00:00.000Z",
    updated_by_id: "user-001"
  },
  {
    id: "user-005",
    username: "sarah.johnson",
    email: "sarah.johnson@royalgrandhotel.com",
    platform_role: "user",
    is_active: true,
    is_consent: true,
    consent_at: "2023-02-20T00:00:00.000Z",
    created_at: "2023-02-20T00:00:00.000Z",
    created_by_id: "user-001",
    updated_at: "2023-02-20T00:00:00.000Z",
    updated_by_id: "user-001"
  },
  {
    id: "user-006",
    username: "david.lee",
    email: "david.lee@spicegarden.co.th",
    platform_role: "user",
    is_active: true,
    is_consent: true,
    consent_at: "2023-03-01T00:00:00.000Z",
    created_at: "2023-03-01T00:00:00.000Z",
    created_by_id: "user-001",
    updated_at: "2023-03-01T00:00:00.000Z",
    updated_by_id: "user-001"
  },
  {
    id: "user-007",
    username: "maria.garcia",
    email: "maria.garcia@spicegarden.co.th",
    platform_role: "user",
    is_active: true,
    is_consent: true,
    consent_at: "2023-03-05T00:00:00.000Z",
    created_at: "2023-03-05T00:00:00.000Z",
    created_by_id: "user-001",
    updated_at: "2023-03-05T00:00:00.000Z",
    updated_by_id: "user-001"
  },
  {
    id: "user-008",
    username: "alex.tan",
    email: "alex.tan@carmensoftware.com",
    platform_role: "user",
    is_active: true,
    is_consent: true,
    consent_at: "2023-04-01T00:00:00.000Z",
    created_at: "2023-04-01T00:00:00.000Z",
    created_by_id: "user-001",
    updated_at: "2023-04-01T00:00:00.000Z",
    updated_by_id: "user-001"
  },
  {
    id: "user-009",
    username: "lisa.wong",
    email: "lisa.wong@carmensoftware.com",
    platform_role: "support_staff",
    is_active: true,
    is_consent: true,
    consent_at: "2023-04-15T00:00:00.000Z",
    created_at: "2023-04-15T00:00:00.000Z",
    created_by_id: "user-001",
    updated_at: "2023-04-15T00:00:00.000Z",
    updated_by_id: "user-001"
  },
  {
    id: "user-010",
    username: "developer",
    email: "dev@carmensoftware.com",
    platform_role: "integration_developer",
    is_active: true,
    is_consent: true,
    consent_at: getCurrentTimestamp(),
    created_at: getCurrentTimestamp(),
    created_by_id: "system",
    updated_at: getCurrentTimestamp(),
    updated_by_id: "system"
  },
  {
    id: "user-011",
    username: "support.manager",
    email: "support@carmensoftware.com",
    platform_role: "support_manager",
    is_active: true,
    is_consent: true,
    consent_at: "2023-05-01T00:00:00.000Z",
    created_at: "2023-05-01T00:00:00.000Z",
    created_by_id: "user-001",
    updated_at: "2023-05-01T00:00:00.000Z",
    updated_by_id: "user-001"
  },
  {
    id: "user-012",
    username: "security.officer",
    email: "security@carmensoftware.com",
    platform_role: "security_officer",
    is_active: true,
    is_consent: true,
    consent_at: "2023-05-15T00:00:00.000Z",
    created_at: "2023-05-15T00:00:00.000Z",
    created_by_id: "user-001",
    updated_at: "2023-05-15T00:00:00.000Z",
    updated_by_id: "user-001"
  },
  {
    id: "user-013",
    username: "inactive.user",
    email: "inactive@example.com",
    platform_role: "user",
    is_active: false,
    is_consent: false,
    consent_at: null,
    created_at: "2023-06-01T00:00:00.000Z",
    created_by_id: "user-001",
    updated_at: "2023-06-15T00:00:00.000Z",
    updated_by_id: "user-001"
  }
];

// =============== TB_USER CRUD FUNCTIONS ===============
export const tbUserCrud = {
  // Create new user
  create: (data: Omit<TbUser, 'id' | 'created_at' | 'updated_at'>): TbUser => {
    const newUser: TbUser = {
      id: generateUuid(),
      created_at: getCurrentTimestamp(),
      updated_at: getCurrentTimestamp(),
      platform_role: 'user',
      is_active: false,
      is_consent: false,
      ...data
    };
    mockTbUser.push(newUser);
    return newUser;
  },

  // Find by ID
  findById: (id: string): TbUser | null => {
    return mockTbUser.find(user => user.id === id) || null;
  },

  // Find by username
  findByUsername: (username: string): TbUser | null => {
    return mockTbUser.find(user => user.username === username) || null;
  },

  // Find by email
  findByEmail: (email: string): TbUser | null => {
    return mockTbUser.find(user => user.email === email) || null;
  },

  // Find all active users
  findActive: (): TbUser[] => {
    return mockTbUser
      .filter(user => user.is_active)
      .sort((a, b) => a.username.localeCompare(b.username));
  },

  // Find all users
  findAll: (): TbUser[] => {
    return mockTbUser.sort((a, b) => a.username.localeCompare(b.username));
  },

  // Find by platform role
  findByPlatformRole: (platformRole: TbUser['platform_role']): TbUser[] => {
    return mockTbUser
      .filter(user => user.platform_role === platformRole && user.is_active)
      .sort((a, b) => a.username.localeCompare(b.username));
  },

  // Search users
  search: (query: string): TbUser[] => {
    const lowerQuery = query.toLowerCase();
    return mockTbUser
      .filter(user => 
        user.is_active &&
        (user.username.toLowerCase().includes(lowerQuery) ||
         user.email.toLowerCase().includes(lowerQuery))
      )
      .sort((a, b) => a.username.localeCompare(b.username));
  },

  // Find users by domain
  findByEmailDomain: (domain: string): TbUser[] => {
    return mockTbUser
      .filter(user => 
        user.is_active && 
        user.email.toLowerCase().includes(`@${domain.toLowerCase()}`)
      )
      .sort((a, b) => a.username.localeCompare(b.username));
  },

  // Find admin users
  findAdmins: (): TbUser[] => {
    const adminRoles = ['platform_admin', 'support_manager', 'security_officer'];
    return mockTbUser
      .filter(user => 
        user.is_active && 
        adminRoles.includes(user.platform_role || 'user')
      )
      .sort((a, b) => a.username.localeCompare(b.username));
  },

  // Find users who haven't consented
  findWithoutConsent: (): TbUser[] => {
    return mockTbUser
      .filter(user => !user.is_consent)
      .sort((a, b) => (a.created_at || '').localeCompare(b.created_at || ''));
  },

  // Find recently created users
  findRecentlyCreated: (days: number = 30): TbUser[] => {
    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() - days);
    const cutoffIso = cutoffDate.toISOString();

    return mockTbUser
      .filter(user => 
        user.created_at && 
        user.created_at >= cutoffIso
      )
      .sort((a, b) => (b.created_at || '').localeCompare(a.created_at || ''));
  },

  // Update user
  update: (id: string, data: Partial<TbUser>, updated_by_id?: string): TbUser | null => {
    const index = mockTbUser.findIndex(user => user.id === id);
    if (index === -1) return null;

    mockTbUser[index] = {
      ...mockTbUser[index],
      ...data,
      updated_at: getCurrentTimestamp(),
      updated_by_id: updated_by_id || null
    };
    return mockTbUser[index];
  },

  // Activate user
  activate: (id: string, updated_by_id?: string): TbUser | null => {
    return tbUserCrud.update(id, { is_active: true }, updated_by_id);
  },

  // Deactivate user
  deactivate: (id: string, updated_by_id?: string): TbUser | null => {
    return tbUserCrud.update(id, { is_active: false }, updated_by_id);
  },

  // Set user consent
  setConsent: (id: string, consent: boolean, updated_by_id?: string): TbUser | null => {
    const consentData = consent ? {
      is_consent: true,
      consent_at: getCurrentTimestamp()
    } : {
      is_consent: false,
      consent_at: null
    };

    return tbUserCrud.update(id, consentData, updated_by_id);
  },

  // Change platform role
  changePlatformRole: (id: string, platformRole: TbUser['platform_role'], updated_by_id?: string): TbUser | null => {
    return tbUserCrud.update(id, { platform_role: platformRole }, updated_by_id);
  },

  // Check if username exists
  usernameExists: (username: string, excludeId?: string): boolean => {
    return mockTbUser.some(user => 
      user.username === username && 
      user.id !== excludeId
    );
  },

  // Check if email exists
  emailExists: (email: string, excludeId?: string): boolean => {
    return mockTbUser.some(user => 
      user.email === email && 
      user.id !== excludeId
    );
  },

  // Validate user login
  validateLogin: (username: string, checkActive = true): TbUser | null => {
    const user = tbUserCrud.findByUsername(username) || tbUserCrud.findByEmail(username);
    
    if (!user) return null;
    if (checkActive && !user.is_active) return null;
    
    return user;
  },

  // Get user statistics
  getStats: () => {
    const allUsers = mockTbUser;
    const activeUsers = allUsers.filter(user => user.is_active);
    
    return {
      total: allUsers.length,
      active: activeUsers.length,
      inactive: allUsers.length - activeUsers.length,
      withConsent: allUsers.filter(user => user.is_consent).length,
      withoutConsent: allUsers.filter(user => !user.is_consent).length,
      byPlatformRole: activeUsers.reduce((acc, user) => {
        const role = user.platform_role || 'user';
        acc[role] = (acc[role] || 0) + 1;
        return acc;
      }, {} as Record<string, number>),
      byDomain: activeUsers.reduce((acc, user) => {
        const domain = user.email.split('@')[1] || 'unknown';
        acc[domain] = (acc[domain] || 0) + 1;
        return acc;
      }, {} as Record<string, number>),
      recentlyCreated: tbUserCrud.findRecentlyCreated().length
    };
  },

  // Delete user (hard delete - use with caution)
  delete: (id: string): boolean => {
    const index = mockTbUser.findIndex(user => user.id === id);
    if (index === -1) return false;
    
    mockTbUser.splice(index, 1);
    return true;
  }
};
