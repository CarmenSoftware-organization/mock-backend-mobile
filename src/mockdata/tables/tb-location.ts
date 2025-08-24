// =============== TB_LOCATION TABLE ===============

import { TbLocation } from './types';
import { generateUuid, getCurrentTimestamp } from './utils';
import { UUID_MAPPING } from './uuid-mapping';

// Mock Locations Table (tb_location)
export let mockTbLocation: TbLocation[] = [
  {
    id: '550e8400-e29b-41d4-a716-446655440601',
    name: 'Main Storage',
    location_type: 'inventory',
    description: 'Main inventory storage location',
    delivery_point_id: null,
    delivery_point_name: null,
    physical_count_type: 'yes',
    is_active: true,
    note: null,
    info: {},
    dimension: {},
    created_at: '2024-01-15T08:00:00Z',
    created_by_id: null,
    updated_at: '2024-01-15T08:00:00Z',
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null
  }
];

// =============== TB_LOCATION CRUD ===============

export const tbLocationCrud = {
  // Create
  create: (data: Omit<TbLocation, 'id' | 'created_at' | 'updated_at'>): TbLocation => {
    const now = getCurrentTimestamp();
    const location: TbLocation = {
      id: generateUuid(),
      name: data.name,
      location_type: data.location_type,
      description: data.description,
      delivery_point_id: data.delivery_point_id || null,
      delivery_point_name: data.delivery_point_name || null,
      physical_count_type: data.physical_count_type,
      is_active: data.is_active,
      note: data.note || null,
      info: data.info || {},
      dimension: data.dimension || {},
      created_at: now,
      created_by_id: data.created_by_id || null,
      updated_at: now,
      updated_by_id: data.updated_by_id || null,
      deleted_at: null,
      deleted_by_id: null
    };
    mockTbLocation.push(location);
    return location;
  },

  // Find by id
  findById: (id: string): TbLocation | null => {
    return mockTbLocation.find(location => location.id === id && !location.deleted_at) || null;
  },

  // Find all active
  findAll: (): TbLocation[] => {
    return mockTbLocation.filter(location => !location.deleted_at);
  },

  // Find by name
  findByName: (name: string): TbLocation | null => {
    return mockTbLocation.find(location => location.name === name && !location.deleted_at) || null;
  },

  // Update
  update: (id: string, data: Partial<Omit<TbLocation, 'id' | 'created_at'>>): TbLocation | null => {
    const index = mockTbLocation.findIndex(location => location.id === id && !location.deleted_at);
    if (index === -1) return null;

    mockTbLocation[index] = {
      ...mockTbLocation[index],
      ...data,
      updated_at: getCurrentTimestamp()
    };
    return mockTbLocation[index];
  },

  // Soft Delete
  delete: (id: string, deletedById?: string): boolean => {
    const index = mockTbLocation.findIndex(location => location.id === id && !location.deleted_at);
    if (index === -1) return false;

    mockTbLocation[index] = {
      ...mockTbLocation[index],
      deleted_at: getCurrentTimestamp(),
      deleted_by_id: deletedById || null
    };
    return true;
  }
};
