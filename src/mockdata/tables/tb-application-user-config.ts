// =============== TB_APPLICATION_USER_CONFIG TABLE ===============

import { TbApplicationUserConfig } from './types';
import { generateUuid, getCurrentTimestamp } from './utils';

// Mock User Application Config Table (tb_application_user_config)
export let mockTbApplicationUserConfig: TbApplicationUserConfig[] = [
  {
    id: '550e8400-e29b-41d4-a716-446655440501',
    user_id: '1bfdb891-58ee-499c-8115-34a964de8122',
    key: 'default_business_unit',
    value: "c8aa7601-6a25-42fc-8a23-9f4de373fb4f",
    created_at: '2024-01-15T08:00:00Z',
    created_by_id: null,
    updated_at: '2024-01-15T08:00:00Z',
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null
  }
];

// =============== TB_APPLICATION_USER_CONFIG CRUD ===============

export const tbApplicationUserConfigCrud = {
  // Create or Update
  upsert: (userId: string, key: string, value: any, updatedById?: string): TbApplicationUserConfig => {
    const existing = mockTbApplicationUserConfig.find(config => 
      config.user_id === userId && config.key === key && !config.deleted_at
    );

    const now = getCurrentTimestamp();

    if (existing) {
      // Update existing
      const index = mockTbApplicationUserConfig.indexOf(existing);
      mockTbApplicationUserConfig[index] = {
        ...existing,
        value,
        updated_at: now,
        updated_by_id: updatedById || null
      };
      return mockTbApplicationUserConfig[index];
    } else {
      // Create new
      const config: TbApplicationUserConfig = {
        id: generateUuid(),
        user_id: userId,
        key,
        value,
        created_at: now,
        created_by_id: updatedById || null,
        updated_at: now,
        updated_by_id: updatedById || null,
        deleted_at: null,
        deleted_by_id: null
      };
      mockTbApplicationUserConfig.push(config);
      return config;
    }
  },

  // Find by user and key
  findByUserAndKey: (userId: string, key: string): TbApplicationUserConfig | null => {
    return mockTbApplicationUserConfig.find(config => 
      config.user_id === userId && config.key === key && !config.deleted_at
    ) || null;
  },

  // Find all by user
  findByUserId: (userId: string): TbApplicationUserConfig[] => {
    return mockTbApplicationUserConfig.filter(config => 
      config.user_id === userId && !config.deleted_at
    );
  }
};
