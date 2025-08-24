import { TbPassword } from './types';
import { generateUuid, getCurrentTimestamp } from './utils';
import { UUID_MAPPING } from './uuid-mapping';

// =============== MOCK TB_PASSWORD DATA ===============
export let mockTbPassword: TbPassword[] = [
  // Current active passwords
  {
    id: "pwd-001",
    user_id: UUID_MAPPING['user-001'],
    password_hash: "$2b$12$XvvlQDxKl2wkJvKwBQ9hPeY1LPp7GKcL8tOOq8gLKwV4nRGCk8vJm", // admin123
    salt: "$2b$12$XvvlQDxKl2wkJvKwBQ9hPe",
    algorithm: "bcrypt",
    iterations: 12,
    is_active: true,
    expires_at: "2024-06-01T00:00:00.000Z",
    last_changed_at: "2023-12-01T00:00:00.000Z",
    created_at: "2023-12-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['system'],
    updated_at: "2023-12-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['system']
  },

  {
    id: "pwd-002",
    user_id: UUID_MAPPING['user-002'],
    password_hash: "$2b$12$YwwmRExLm3xlKwLxCR0iQfZ2MQq8HLdM9uPPr9hMLxW5oSHDl9wKn", // john123
    salt: "$2b$12$YwwmRExLm3xlKwLxCR0iQf",
    algorithm: "bcrypt",
    iterations: 12,
    is_active: true,
    expires_at: "2024-07-15T00:00:00.000Z",
    last_changed_at: "2024-01-15T00:00:00.000Z",
    created_at: "2023-01-15T00:00:00.000Z",
    created_by_id: UUID_MAPPING['user-001'],
    updated_at: "2024-01-15T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['user-002']
  },

  {
    id: "pwd-003",
    user_id: UUID_MAPPING['user-003'],
    password_hash: "$2b$12$ZxxnSFyMn4ymLxMyDQ1jRgA3NRr9IMeN0vQQs0iNMyX6pTIEm0xLo", // jane123
    salt: "$2b$12$ZxxnSFyMn4ymLxMyDQ1jRg",
    algorithm: "bcrypt",
    iterations: 12,
    is_active: true,
    expires_at: "2024-08-01T00:00:00.000Z",
    last_changed_at: "2024-02-01T00:00:00.000Z",
    created_at: "2023-02-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['user-001'],
    updated_at: "2024-02-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['user-003']
  },

  {
    id: "pwd-004",
    user_id: UUID_MAPPING['user-004'],
    password_hash: "$2b$12$AaaoTGzNo5znMyNzER2kShB4OSs0JOfO1wRRt1jONzY7qUJFn1yMp", // michael123
    salt: "$2b$12$AaaoTGzNo5znMyNzER2kSh",
    algorithm: "bcrypt",
    iterations: 12,
    is_active: true,
    expires_at: "2024-08-15T00:00:00.000Z",
    last_changed_at: "2024-02-15T00:00:00.000Z",
    created_at: "2023-02-15T00:00:00.000Z",
    created_by_id: UUID_MAPPING['user-001'],
    updated_at: "2024-02-15T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['user-004']
  },

  {
    id: "pwd-005",
    user_id: UUID_MAPPING['user-005'],
    password_hash: "$2b$12$BbbpUH0Op6AoNzO0FS3lTiC5PTt1KPgP2xSSu2kPO0Z8rVKGo2zNq", // sarah123
    salt: "$2b$12$BbbpUH0Op6AoNzO0FS3lTi",
    algorithm: "bcrypt",
    iterations: 12,
    is_active: true,
    expires_at: "2024-08-20T00:00:00.000Z",
    last_changed_at: "2024-02-20T00:00:00.000Z",
    created_at: "2023-02-20T00:00:00.000Z",
    created_by_id: UUID_MAPPING['user-004'],
    updated_at: "2024-02-20T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['user-005']
  },

  {
    id: "pwd-006",
    user_id: UUID_MAPPING['user-006'],
    password_hash: "$2b$12$CccqVI1Pq7BpO0P1GT4mUjD6QUu2LQhQ3ySTs3lQP1A9sWLHp3AOr", // david123
    salt: "$2b$12$CccqVI1Pq7BpO0P1GT4mUj",
    algorithm: "bcrypt",
    iterations: 12,
    is_active: true,
    expires_at: "2024-09-01T00:00:00.000Z",
    last_changed_at: "2024-03-01T00:00:00.000Z",
    created_at: "2023-03-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['user-001'],
    updated_at: "2024-03-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['user-006']
  },

  {
    id: "pwd-007",
    user_id: UUID_MAPPING['user-007'],
    password_hash: "$2b$12$DddrWJ2Qr8CqP1Q2HU5nVkE7RVv3MSiR4zTUt4mRP2B0tXMIq4BPs", // maria123
    salt: "$2b$12$DddrWJ2Qr8CqP1Q2HU5nVk",
    algorithm: "bcrypt",
    iterations: 12,
    is_active: true,
    expires_at: "2024-09-05T00:00:00.000Z",
    last_changed_at: "2024-03-05T00:00:00.000Z",
    created_at: "2023-03-05T00:00:00.000Z",
    created_by_id: UUID_MAPPING['user-006'],
    updated_at: "2024-03-05T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['user-007']
  },

  {
    id: "pwd-008",
    user_id: UUID_MAPPING['user-008'],
    password_hash: "$2b$12$EeesXK3Rs9DrQ2R3IV6oWlF8SWw4NTjS5AUVu5nSQ3C1uYNJr5CQt", // alex123
    salt: "$2b$12$EeesXK3Rs9DrQ2R3IV6oWl",
    algorithm: "bcrypt",
    iterations: 12,
    is_active: true,
    expires_at: "2024-10-01T00:00:00.000Z",
    last_changed_at: "2024-04-01T00:00:00.000Z",
    created_at: "2023-04-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['user-001'],
    updated_at: "2024-04-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['user-008']
  },

  {
    id: "pwd-009",
    user_id: UUID_MAPPING['user-009'],
    password_hash: "$2b$12$FfftYL4St0EsR3S4JW7pXmG9TXx5OUkT6BVWv6oTR4D2vZOKs6DRu", // lisa123
    salt: "$2b$12$FfftYL4St0EsR3S4JW7pXm",
    algorithm: "bcrypt",
    iterations: 12,
    is_active: true,
    expires_at: "2024-10-15T00:00:00.000Z",
    last_changed_at: "2024-04-15T00:00:00.000Z",
    created_at: "2023-04-15T00:00:00.000Z",
    created_by_id: UUID_MAPPING['user-001'],
    updated_at: "2024-04-15T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['user-009']
  },

  {
    id: "pwd-010",
    user_id: UUID_MAPPING['user-010'],
    password_hash: "$2b$12$GgguZM5Tu1FtS4T5KX8qYnH0UYy6PVlU7CWXw7pUS5E3wAPLt7ESv", // dev123
    salt: "$2b$12$GgguZM5Tu1FtS4T5KX8qYn",
    algorithm: "bcrypt",
    iterations: 12,
    is_active: true,
    expires_at: null, // No expiration for dev account
    last_changed_at: getCurrentTimestamp(),
    created_at: getCurrentTimestamp(),
    created_by_id: UUID_MAPPING['system'],
    updated_at: getCurrentTimestamp(),
    updated_by_id: UUID_MAPPING['system']
  },

  {
    id: "pwd-011",
    user_id: UUID_MAPPING['user-011'],
    password_hash: "$2b$12$HhhvAN6Uv2GuT5U6LY9rZoI1VZz7QWmV8DXYx8qVT6F4xBQMu8FTw", // support123
    salt: "$2b$12$HhhvAN6Uv2GuT5U6LY9rZo",
    algorithm: "bcrypt",
    iterations: 12,
    is_active: true,
    expires_at: "2024-11-01T00:00:00.000Z",
    last_changed_at: "2024-05-01T00:00:00.000Z",
    created_at: "2023-05-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['user-001'],
    updated_at: "2024-05-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['user-011']
  },

  {
    id: "pwd-012",
    user_id: UUID_MAPPING['user-012'],
    password_hash: "$2b$12$IiiwBO7Vw3HvU6V7MY0sApJ2WAA8RXnW9EYZy9rWT7G5yCRNv9GUx", // security123
    salt: "$2b$12$IiiwBO7Vw3HvU6V7MY0sAp",
    algorithm: "bcrypt",
    iterations: 12,
    is_active: true,
    expires_at: "2024-11-15T00:00:00.000Z",
    last_changed_at: "2024-05-15T00:00:00.000Z",
    created_at: "2023-05-15T00:00:00.000Z",
    created_by_id: UUID_MAPPING['user-001'],
    updated_at: "2024-05-15T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['user-012']
  },

  // Historical passwords (inactive)
  {
    id: "pwd-013",
    user_id: UUID_MAPPING['user-002'],
    password_hash: "$2b$12$JjjxCP8Xx4IwV7W8NZ1tBqK3XBB9SYoX0FZAz0sXU8H6zDSOw0HVy", // old password
    salt: "$2b$12$JjjxCP8Xx4IwV7W8NZ1tBq",
    algorithm: "bcrypt",
    iterations: 12,
    is_active: false,
    expires_at: "2024-01-15T00:00:00.000Z",
    last_changed_at: "2023-01-15T00:00:00.000Z",
    created_at: "2023-01-15T00:00:00.000Z",
    created_by_id: UUID_MAPPING['user-001'],
    updated_at: "2024-01-15T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['user-002']
  },

  {
    id: "pwd-014",
    user_id: UUID_MAPPING['user-003'],
    password_hash: "$2b$12$KkkyCQ9Yy5JxW8X9OA2uCrL4YCC0TZpY1GAB1tYV9I7AERTx1IWz", // old password
    salt: "$2b$12$KkkyCQ9Yy5JxW8X9OA2uCr",
    algorithm: "bcrypt",
    iterations: 12,
    is_active: false,
    expires_at: "2024-02-01T00:00:00.000Z",
    last_changed_at: "2023-02-01T00:00:00.000Z",
    created_at: "2023-02-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['user-001'],
    updated_at: "2024-02-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['user-003']
  },

  // Temporary passwords (expired)
  {
    id: "pwd-015",
    user_id: UUID_MAPPING['user-008'],
    password_hash: "$2b$12$LlllDR0Zz6KyX9Y0PB3vDsM5ZDD1UAqZ2HBC2uZW0J8BFTUy2JXA", // temp password
    salt: "$2b$12$LlllDR0Zz6KyX9Y0PB3vDs",
    algorithm: "bcrypt",
    iterations: 12,
    is_active: false,
    expires_at: "2024-03-02T00:00:00.000Z", // Short expiration for temp
    last_changed_at: "2024-03-01T00:00:00.000Z",
    created_at: "2024-03-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['user-001'],
    updated_at: "2024-04-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['user-008']
  }
];

// =============== TB_PASSWORD CRUD FUNCTIONS ===============
export const tbPasswordCrud = {
  // Create new password
  create: (data: Omit<TbPassword, 'id' | 'created_at' | 'updated_at'>): TbPassword => {
    const newPassword: TbPassword = {
      id: generateUuid(),
      algorithm: 'bcrypt',
      iterations: 12,
      is_active: true,
      last_changed_at: getCurrentTimestamp(),
      created_at: getCurrentTimestamp(),
      updated_at: getCurrentTimestamp(),
      ...data
    };
    mockTbPassword.push(newPassword);
    return newPassword;
  },

  // Find by ID
  findById: (id: string): TbPassword | null => {
    return mockTbPassword.find(pwd => pwd.id === id) || null;
  },

  // Find by user ID
  findByUserId: (userId: string): TbPassword[] => {
    return mockTbPassword
      .filter(pwd => pwd.user_id === userId)
      .sort((a, b) => (b.created_at || '').localeCompare(a.created_at || ''));
  },

  // Find active by user ID
  findActiveByUserId: (userId: string): TbPassword | null => {
    return mockTbPassword.find(pwd => 
      pwd.user_id === userId && pwd.is_active
    ) || null;
  },

  // Find password history for user
  findPasswordHistory: (userId: string): TbPassword[] => {
    return mockTbPassword
      .filter(pwd => pwd.user_id === userId)
      .sort((a, b) => (b.last_changed_at || '').localeCompare(a.last_changed_at || ''));
  },

  // Find expired passwords
  findExpired: (): TbPassword[] => {
    const now = new Date().toISOString();
    return mockTbPassword
      .filter(pwd => pwd.expires_at && pwd.expires_at <= now)
      .sort((a, b) => (a.expires_at || '').localeCompare(b.expires_at || ''));
  },

  // Find expiring soon
  findExpiringSoon: (daysAhead: number = 30): TbPassword[] => {
    const now = new Date();
    const futureDate = new Date(now.getTime() + (daysAhead * 24 * 60 * 60 * 1000));
    const futureDateISO = futureDate.toISOString();
    const nowISO = now.toISOString();

    return mockTbPassword
      .filter(pwd => 
        pwd.is_active &&
        pwd.expires_at &&
        pwd.expires_at > nowISO &&
        pwd.expires_at <= futureDateISO
      )
      .sort((a, b) => (a.expires_at || '').localeCompare(b.expires_at || ''));
  },

  // Find all passwords
  findAll: (): TbPassword[] => {
    return mockTbPassword.sort((a, b) => 
      (b.created_at || '').localeCompare(a.created_at || '')
    );
  },

  // Update password
  update: (id: string, data: Partial<TbPassword>, updated_by_id?: string): TbPassword | null => {
    const index = mockTbPassword.findIndex(pwd => pwd.id === id);
    if (index === -1) return null;

    mockTbPassword[index] = {
      ...mockTbPassword[index],
      ...data,
      updated_at: getCurrentTimestamp(),
      updated_by_id: updated_by_id || null
    };
    return mockTbPassword[index];
  },

  // Delete password (hard delete)
  delete: (id: string): boolean => {
    const index = mockTbPassword.findIndex(pwd => pwd.id === id);
    if (index === -1) return false;
    
    mockTbPassword.splice(index, 1);
    return true;
  },

  // Change user password
  changePassword: (userId: string, newPasswordHash: string, newSalt?: string, expiresInDays?: number, updated_by_id?: string): TbPassword | null => {
    // Deactivate current password
    const currentPassword = tbPasswordCrud.findActiveByUserId(userId);
    if (currentPassword) {
      tbPasswordCrud.update(currentPassword.id, { is_active: false }, updated_by_id);
    }

    // Create new password
    const expiresAt = expiresInDays ? 
      new Date(Date.now() + (expiresInDays * 24 * 60 * 60 * 1000)).toISOString() : 
      null;

    return tbPasswordCrud.create({
      user_id: userId,
      password_hash: newPasswordHash,
      salt: newSalt || null,
      expires_at: expiresAt,
      created_by_id: updated_by_id || null
    });
  },

  // Verify password is not reused
  isPasswordReused: (userId: string, newPasswordHash: string, checkLastN: number = 5): boolean => {
    const passwordHistory = tbPasswordCrud.findPasswordHistory(userId)
      .slice(0, checkLastN);
    
    return passwordHistory.some(pwd => pwd.password_hash === newPasswordHash);
  },

  // Activate password
  activate: (id: string, updated_by_id?: string): TbPassword | null => {
    return tbPasswordCrud.update(id, { is_active: true }, updated_by_id);
  },

  // Deactivate password
  deactivate: (id: string, updated_by_id?: string): TbPassword | null => {
    return tbPasswordCrud.update(id, { is_active: false }, updated_by_id);
  },

  // Check password validity
  isPasswordValid: (id: string): { valid: boolean; reason?: string; password?: TbPassword } => {
    const password = tbPasswordCrud.findById(id);
    
    if (!password) {
      return { valid: false, reason: 'Password not found' };
    }

    if (!password.is_active) {
      return { valid: false, reason: 'Password is inactive', password };
    }

    if (password.expires_at) {
      const now = new Date().toISOString();
      if (password.expires_at <= now) {
        return { valid: false, reason: 'Password has expired', password };
      }
    }

    return { valid: true, password };
  },

  // Get password strength info
  getPasswordStrengthInfo: (userId: string): {
    hasActivePassword: boolean;
    daysUntilExpiration: number | null;
    isExpired: boolean;
    lastChanged: string | null;
    algorithmUsed: string | null;
  } => {
    const activePassword = tbPasswordCrud.findActiveByUserId(userId);
    
    if (!activePassword) {
      return {
        hasActivePassword: false,
        daysUntilExpiration: null,
        isExpired: false,
        lastChanged: null,
        algorithmUsed: null
      };
    }

    const now = new Date();
    let daysUntilExpiration: number | null = null;
    let isExpired = false;

    if (activePassword.expires_at) {
      const expirationDate = new Date(activePassword.expires_at);
      const diffTime = expirationDate.getTime() - now.getTime();
      daysUntilExpiration = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      isExpired = daysUntilExpiration <= 0;
    }

    return {
      hasActivePassword: true,
      daysUntilExpiration,
      isExpired,
      lastChanged: activePassword.last_changed_at || null,
      algorithmUsed: activePassword.algorithm || null
    };
  },

  // Create temporary password
  createTemporaryPassword: (userId: string, tempPasswordHash: string, tempSalt?: string, expiresInHours: number = 24, created_by_id?: string): TbPassword => {
    const expiresAt = new Date(Date.now() + (expiresInHours * 60 * 60 * 1000)).toISOString();

    return tbPasswordCrud.create({
      user_id: userId,
      password_hash: tempPasswordHash,
      salt: tempSalt || null,
      expires_at: expiresAt,
      created_by_id: created_by_id || null
    });
  },

  // Process expired passwords
  processExpiredPasswords: (updated_by_id?: string): number => {
    const expiredPasswords = tbPasswordCrud.findExpired();
    let processedCount = 0;

    expiredPasswords.forEach(password => {
      if (password.is_active) {
        tbPasswordCrud.deactivate(password.id, updated_by_id);
        processedCount++;
      }
    });

    return processedCount;
  },

  // Clean up old password history
  cleanupPasswordHistory: (userId: string, keepLastN: number = 10): number => {
    const passwordHistory = tbPasswordCrud.findPasswordHistory(userId);
    const toDelete = passwordHistory.slice(keepLastN);
    
    let deletedCount = 0;
    toDelete.forEach(password => {
      if (!password.is_active && tbPasswordCrud.delete(password.id)) {
        deletedCount++;
      }
    });

    return deletedCount;
  },

  // Bulk password expiration check
  bulkExpirationCheck: (): {
    expired: TbPassword[];
    expiringSoon: TbPassword[];
    needsAttention: TbPassword[];
  } => {
    const expired = tbPasswordCrud.findExpired();
    const expiringSoon = tbPasswordCrud.findExpiringSoon(7); // 7 days
    const needsAttention = tbPasswordCrud.findExpiringSoon(1); // 1 day

    return {
      expired,
      expiringSoon,
      needsAttention
    };
  },

  // Get password statistics
  getStats: () => {
    const allPasswords = mockTbPassword;
    const activePasswords = allPasswords.filter(p => p.is_active);
    const expiredPasswords = tbPasswordCrud.findExpired();
    const expiringSoon = tbPasswordCrud.findExpiringSoon();

    return {
      total: allPasswords.length,
      active: activePasswords.length,
      inactive: allPasswords.length - activePasswords.length,
      expired: expiredPasswords.filter(p => p.is_active).length,
      expiringSoon: expiringSoon.length,
      byAlgorithm: allPasswords.reduce((acc, pwd) => {
        const algo = pwd.algorithm || 'unknown';
        acc[algo] = (acc[algo] || 0) + 1;
        return acc;
      }, {} as Record<string, number>),
      usersWithPasswords: new Set(activePasswords.map(p => p.user_id)).size,
      avgPasswordAge: (() => {
        const now = new Date();
        const ages = activePasswords
          .filter(p => p.last_changed_at)
          .map(p => {
            const changedDate = new Date(p.last_changed_at!);
            return Math.ceil((now.getTime() - changedDate.getTime()) / (1000 * 60 * 60 * 24));
          });
        
        return ages.length > 0 ? Math.round(ages.reduce((sum, age) => sum + age, 0) / ages.length) : 0;
      })(),
      usersWithoutPasswords: (() => {
        // This would typically check against user table
        const usersWithPasswords = new Set(activePasswords.map(p => p.user_id));
        // For demo, assuming we have 12 users total
        return 12 - usersWithPasswords.size;
      })()
    };
  }
};
