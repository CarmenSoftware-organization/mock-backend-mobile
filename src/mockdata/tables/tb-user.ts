import { TbUser } from "./types";
import { generateUuid, getCurrentTimestamp } from "./utils";
import { UUID_MAPPING } from "./uuid-mapping";

// =============== MOCK TB_USER DATA ===============
export let mockTbUser: TbUser[] = [
  // 1. General Manager
  {
    id: UUID_MAPPING["user-gm"],
    username: "gm@hoteltest.com",
    email: "gm@hoteltest.com",
    platform_role: "user",
    is_active: true,
    is_consent: true,
    permissions: [
      "pr.create", "pr.view", "pr.view.all", "pr.approve", "pr.approve.emergency",
      "sr.create", "sr.view", "sr.approve", 
      "grn.create", "grn.view", "grn.approve",
      "inventory.view", "inventory.manage", "inventory.adjust",
      "budget.view", "budget.override", "emergency.override"
    ],
    consent_at: "2024-01-10T08:00:00.000Z",
    created_at: "2024-01-10T08:00:00.000Z",
    created_by_id: UUID_MAPPING["system"],
    updated_at: "2024-01-10T08:00:00.000Z",
    updated_by_id: UUID_MAPPING["system"]
  },

  // 2. Financial Controller
  {
    id: UUID_MAPPING["user-financial-controller"],
    username: "fc@hoteltest.com",
    email: "fc@hoteltest.com",
    platform_role: "user",
    is_active: true,
    is_consent: true,
    permissions: [
      "pr.view", "pr.view.all", "pr.approve",
      "budget.view", "budget.manage", "budget.override",
      "grn.view", "grn.approve",
      "inventory.view", "inventory.audit"
    ],
    consent_at: "2024-01-10T08:30:00.000Z",
    created_at: "2024-01-10T08:30:00.000Z",
    created_by_id: UUID_MAPPING["system"],
    updated_at: "2024-01-10T08:30:00.000Z",
    updated_by_id: UUID_MAPPING["system"]
  },

  // 3. Executive Chef
  {
    id: UUID_MAPPING["user-exec-chef"],
    username: "exec.chef@hoteltest.com",
    email: "exec.chef@hoteltest.com",
    platform_role: "user",
    is_active: true,
    is_consent: true,
    permissions: [
      "pr.create", "pr.view", "pr.view.department", "pr.approve",
      "sr.create", "sr.view", "sr.approve",
      "grn.create", "grn.view", "grn.approve",
      "inventory.view", "inventory.manage"
    ],
    consent_at: "2024-01-10T09:00:00.000Z",
    created_at: "2024-01-10T09:00:00.000Z",
    created_by_id: UUID_MAPPING["system"],
    updated_at: "2024-01-10T09:00:00.000Z",
    updated_by_id: UUID_MAPPING["system"]
  },

  // 4. Executive Housekeeper
  {
    id: UUID_MAPPING["user-exec-housekeeper"],
    username: "exec.housekeeper@hoteltest.com",
    email: "exec.housekeeper@hoteltest.com",
    platform_role: "user",
    is_active: true,
    is_consent: true,
    permissions: [
      "pr.create", "pr.view", "pr.view.department", "pr.approve",
      "sr.create", "sr.view", "sr.approve",
      "grn.create", "grn.view", "grn.approve",
      "inventory.view", "inventory.manage"
    ],
    consent_at: "2024-01-10T09:15:00.000Z",
    created_at: "2024-01-10T09:15:00.000Z",
    created_by_id: UUID_MAPPING["system"],
    updated_at: "2024-01-10T09:15:00.000Z",
    updated_by_id: UUID_MAPPING["system"]
  },

  // 5. Chief Engineer
  {
    id: UUID_MAPPING["user-chief-engineer"],
    username: "chief.engineer@hoteltest.com",
    email: "chief.engineer@hoteltest.com",
    platform_role: "user",
    is_active: true,
    is_consent: true,
    permissions: [
      "pr.create", "pr.view", "pr.view.department", "pr.approve",
      "sr.create", "sr.view", "sr.approve",
      "grn.create", "grn.view", "grn.approve",
      "inventory.view", "inventory.manage"
    ],
    consent_at: "2024-01-10T09:45:00.000Z",
    created_at: "2024-01-10T09:45:00.000Z",
    created_by_id: UUID_MAPPING["system"],
    updated_at: "2024-01-10T09:45:00.000Z",
    updated_by_id: UUID_MAPPING["system"]
  },

  // 6. Purchasing Manager
  {
    id: UUID_MAPPING["user-purchasing-manager"],
    username: "purchasing.manager@hoteltest.com",
    email: "purchasing.manager@hoteltest.com",
    platform_role: "user",
    is_active: true,
    is_consent: true,
    permissions: [
      "pr.create", "pr.view", "pr.view.all", "pr.approve",
      "sr.create", "sr.view", "sr.approve",
      "grn.create", "grn.view", "grn.approve",
      "inventory.view", "inventory.manage", "vendor.manage"
    ],
    consent_at: "2024-01-10T10:00:00.000Z",
    created_at: "2024-01-10T10:00:00.000Z",
    created_by_id: UUID_MAPPING["system"],
    updated_at: "2024-01-10T10:00:00.000Z",
    updated_by_id: UUID_MAPPING["system"]
  },

  // 7. Sous Chef
  {
    id: UUID_MAPPING["user-sous-chef"],
    username: "sous.chef@hoteltest.com",
    email: "sous.chef@hoteltest.com",
    platform_role: "user",
    is_active: true,
    is_consent: true,
    permissions: [
      "pr.create", "pr.view", "pr.view.department", "pr.approve",
      "sr.create", "sr.view", "sr.approve",
      "grn.create", "grn.view", "inventory.view"
    ],
    consent_at: "2024-01-10T10:15:00.000Z",
    created_at: "2024-01-10T10:15:00.000Z",
    created_by_id: UUID_MAPPING["system"],
    updated_at: "2024-01-10T10:15:00.000Z",
    updated_by_id: UUID_MAPPING["system"]
  },

  // 8. Assistant Housekeeper
  {
    id: UUID_MAPPING["user-asst-housekeeper"],
    username: "asst.housekeeper@hoteltest.com",
    email: "asst.housekeeper@hoteltest.com",
    platform_role: "user",
    is_active: true,
    is_consent: true,
    permissions: [
      "pr.create", "pr.view", "pr.view.department", "pr.approve",
      "sr.create", "sr.view", "sr.approve",
      "grn.create", "grn.view", "inventory.view"
    ],
    consent_at: "2024-01-10T10:30:00.000Z",
    created_at: "2024-01-10T10:30:00.000Z",
    created_by_id: UUID_MAPPING["system"],
    updated_at: "2024-01-10T10:30:00.000Z",
    updated_by_id: UUID_MAPPING["system"]
  },

  // 9. Storekeeper
  {
    id: UUID_MAPPING["user-storekeeper"],
    username: "storekeeper@hoteltest.com",
    email: "storekeeper@hoteltest.com",
    platform_role: "user",
    is_active: true,
    is_consent: true,
    permissions: [
      "pr.view", "pr.view.department",
      "sr.create", "sr.view", "sr.approve",
      "grn.create", "grn.view", "grn.approve",
      "inventory.view", "inventory.manage", "inventory.issue"
    ],
    consent_at: "2024-01-10T11:00:00.000Z",
    created_at: "2024-01-10T11:00:00.000Z",
    created_by_id: UUID_MAPPING["system"],
    updated_at: "2024-01-10T11:00:00.000Z",
    updated_by_id: UUID_MAPPING["system"]
  },

  // 10. Store Clerk
  {
    id: UUID_MAPPING["user-store-clerk"],
    username: "store.clerk@hoteltest.com",
    email: "store.clerk@hoteltest.com",
    platform_role: "user",
    is_active: true,
    is_consent: true,
    permissions: [
      "pr.view", "sr.create", "sr.view", "sr.approve",
      "grn.create", "grn.view", "inventory.view", "inventory.issue"
    ],
    consent_at: "2024-01-10T14:00:00.000Z",
    created_at: "2024-01-10T14:00:00.000Z",
    created_by_id: UUID_MAPPING["system"],
    updated_at: "2024-01-10T14:00:00.000Z",
    updated_by_id: UUID_MAPPING["system"]
  }
];


// =============== TB_USER CRUD FUNCTIONS ===============
export const tbUserCrud = {
  // Create new user
  create: (data: Omit<TbUser, "id" | "created_at" | "updated_at">): TbUser => {
    const newUser: TbUser = {
      id: generateUuid(),
      created_at: getCurrentTimestamp(),
      updated_at: getCurrentTimestamp(),
      platform_role: "user",
      is_active: false,
      is_consent: false,
      ...data,
    };
    mockTbUser.push(newUser);
    return newUser;
  },

  // Find by ID
  findById: (id: string): TbUser | null => {
    return mockTbUser.find((user) => user.id === id) || null;
  },

  // Find by username
  findByUsername: (username: string): TbUser | null => {
    return mockTbUser.find((user) => user.username === username) || null;
  },

  // Find by email
  findByEmail: (email: string): TbUser | null => {
    return mockTbUser.find((user) => user.email === email) || null;
  },

  // Find all active users
  findActive: (): TbUser[] => {
    return mockTbUser
      .filter((user) => user.is_active)
      .sort((a, b) => a.username.localeCompare(b.username));
  },

  // Find all users
  findAll: (): TbUser[] => {
    return mockTbUser.sort((a, b) => a.username.localeCompare(b.username));
  },

  // Find by platform role
  findByPlatformRole: (platformRole: TbUser["platform_role"]): TbUser[] => {
    return mockTbUser
      .filter((user) => user.platform_role === platformRole && user.is_active)
      .sort((a, b) => a.username.localeCompare(b.username));
  },

  // Search users
  search: (query: string): TbUser[] => {
    const lowerQuery = query.toLowerCase();
    return mockTbUser
      .filter(
        (user) =>
          user.is_active &&
          (user.username.toLowerCase().includes(lowerQuery) ||
            user.email.toLowerCase().includes(lowerQuery))
      )
      .sort((a, b) => a.username.localeCompare(b.username));
  },

  // Find users by domain
  findByEmailDomain: (domain: string): TbUser[] => {
    return mockTbUser
      .filter(
        (user) =>
          user.is_active &&
          user.email.toLowerCase().includes(`@${domain.toLowerCase()}`)
      )
      .sort((a, b) => a.username.localeCompare(b.username));
  },

  // Find admin users (now only hotel management)
  findAdmins: (): TbUser[] => {
    const adminRoles = [
      "user", // All hotel operations users are platform_role: "user"
    ];
    return mockTbUser
      .filter(
        (user) =>
          user.is_active && 
          adminRoles.includes(user.platform_role || "user") &&
          (user.permissions?.includes("pr.approve") || user.permissions?.includes("budget.override"))
      )
      .sort((a, b) => a.username.localeCompare(b.username));
  },

  // Find users who haven't consented
  findWithoutConsent: (): TbUser[] => {
    return mockTbUser
      .filter((user) => !user.is_consent)
      .sort((a, b) => (a.created_at || "").localeCompare(b.created_at || ""));
  },

  // Find recently created users
  findRecentlyCreated: (days: number = 30): TbUser[] => {
    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() - days);
    const cutoffIso = cutoffDate.toISOString();

    return mockTbUser
      .filter((user) => user.created_at && user.created_at >= cutoffIso)
      .sort((a, b) => (b.created_at || "").localeCompare(a.created_at || ""));
  },

  // Update user
  update: (
    id: string,
    data: Partial<TbUser>,
    updated_by_id?: string
  ): TbUser | null => {
    const index = mockTbUser.findIndex((user) => user.id === id);
    if (index === -1) return null;

    mockTbUser[index] = {
      ...mockTbUser[index],
      ...data,
      updated_at: getCurrentTimestamp(),
      updated_by_id: updated_by_id || null,
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
  setConsent: (
    id: string,
    consent: boolean,
    updated_by_id?: string
  ): TbUser | null => {
    const consentData = consent
      ? {
          is_consent: true,
          consent_at: getCurrentTimestamp(),
        }
      : {
          is_consent: false,
          consent_at: null,
        };

    return tbUserCrud.update(id, consentData, updated_by_id);
  },

  // Change platform role
  changePlatformRole: (
    id: string,
    platformRole: TbUser["platform_role"],
    updated_by_id?: string
  ): TbUser | null => {
    return tbUserCrud.update(
      id,
      { platform_role: platformRole },
      updated_by_id
    );
  },

  // Check if username exists
  usernameExists: (username: string, excludeId?: string): boolean => {
    return mockTbUser.some(
      (user) => user.username === username && user.id !== excludeId
    );
  },

  // Check if email exists
  emailExists: (email: string, excludeId?: string): boolean => {
    return mockTbUser.some(
      (user) => user.email === email && user.id !== excludeId
    );
  },

  // Validate user login
  validateLogin: (username: string, checkActive = true): TbUser | null => {
    const user =
      tbUserCrud.findByUsername(username) || tbUserCrud.findByEmail(username);

    if (!user) return null;
    if (checkActive && !user.is_active) return null;

    return user;
  },

  // Get user statistics
  getStats: () => {
    const allUsers = mockTbUser;
    const activeUsers = allUsers.filter((user) => user.is_active);

    return {
      total: allUsers.length,
      active: activeUsers.length,
      inactive: allUsers.length - activeUsers.length,
      withConsent: allUsers.filter((user) => user.is_consent).length,
      withoutConsent: allUsers.filter((user) => !user.is_consent).length,
      byPlatformRole: activeUsers.reduce((acc, user) => {
        const role = user.platform_role || "user";
        acc[role] = (acc[role] || 0) + 1;
        return acc;
      }, {} as Record<string, number>),
      byDomain: activeUsers.reduce((acc, user) => {
        const domain = user.email.split("@")[1] || "unknown";
        acc[domain] = (acc[domain] || 0) + 1;
        return acc;
      }, {} as Record<string, number>),
      recentlyCreated: tbUserCrud.findRecentlyCreated().length,
    };
  },

  // Delete user (hard delete - use with caution)
  delete: (id: string): boolean => {
    const index = mockTbUser.findIndex((user) => user.id === id);
    if (index === -1) return false;

    mockTbUser.splice(index, 1);
    return true;
  },

  // Get user permissions
  getUserPermissions: (userId: string): string[] => {
    const user = mockTbUser.find((user) => user.id === userId);
    if (!user) return [];

    return user.permissions || [];
  },
};
