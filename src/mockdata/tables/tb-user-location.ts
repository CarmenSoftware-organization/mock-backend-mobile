// =============== TB_USER_LOCATION TABLE ===============

import { TbUserLocation } from './types';
import { generateUuid, getCurrentTimestamp } from './utils';
import { UUID_MAPPING } from './uuid-mapping';

// Mock User Locations Table (tb_user_location)
export let mockTbUserLocation: TbUserLocation[] = [
  {
    id: '550e8400-e29b-41d4-a716-446655440701',
    user_id: '1bfdb891-58ee-499c-8115-34a964de8122',
    location_id: '550e8400-e29b-41d4-a716-446655440601',
    note: null,
    info: {},
    created_at: '2024-01-15T08:00:00Z',
    created_by_id: null,
    updated_at: '2024-01-15T08:00:00Z',
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null
  }
];

// =============== TB_USER_LOCATION CRUD ===============

export const tbUserLocationCrud = {
  // Create
  create: (data: Omit<TbUserLocation, 'id' | 'created_at' | 'updated_at'>): TbUserLocation => {
    const now = getCurrentTimestamp();
    const userLocation: TbUserLocation = {
      id: generateUuid(),
      user_id: data.user_id,
      location_id: data.location_id,
      note: data.note || null,
      info: data.info || {},
      created_at: now,
      created_by_id: data.created_by_id || null,
      updated_at: now,
      updated_by_id: data.updated_by_id || null,
      deleted_at: null,
      deleted_by_id: null
    };
    mockTbUserLocation.push(userLocation);
    return userLocation;
  },

  // Find by user_id
  findByUserId: (userId: string): TbUserLocation[] => {
    return mockTbUserLocation.filter(ul => ul.user_id === userId && !ul.deleted_at);
  },

  // Find by location_id
  findByLocationId: (locationId: string): TbUserLocation[] => {
    return mockTbUserLocation.filter(ul => ul.location_id === locationId && !ul.deleted_at);
  },

  // Find by user and location
  findByUserAndLocation: (userId: string, locationId: string): TbUserLocation | null => {
    return mockTbUserLocation.find(ul => 
      ul.user_id === userId && ul.location_id === locationId && !ul.deleted_at
    ) || null;
  },

  // Update
  update: (id: string, data: Partial<Omit<TbUserLocation, 'id' | 'created_at'>>): TbUserLocation | null => {
    const index = mockTbUserLocation.findIndex(ul => ul.id === id && !ul.deleted_at);
    if (index === -1) return null;

    mockTbUserLocation[index] = {
      ...mockTbUserLocation[index],
      ...data,
      updated_at: getCurrentTimestamp()
    };
    return mockTbUserLocation[index];
  },

  // Delete
  delete: (id: string, deletedById?: string): boolean => {
    const index = mockTbUserLocation.findIndex(ul => ul.id === id && !ul.deleted_at);
    if (index === -1) return false;

    mockTbUserLocation[index] = {
      ...mockTbUserLocation[index],
      deleted_at: getCurrentTimestamp(),
      deleted_by_id: deletedById || null
    };
    return true;
  }
};
