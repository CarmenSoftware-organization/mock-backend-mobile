// =============== TB_DEPARTMENT TABLE ===============

import { TbDepartment } from './types';
import { generateUuid, getCurrentTimestamp } from './utils';

// Mock Departments Table (tb_department)
export let mockTbDepartment: TbDepartment[] = [
  {
    id: '9722b9f0-7646-4f06-a0f5-2f7ffccdedef',
    name: 'Front Office',
    description: 'Hotel Front Office Department',
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
  },
  {
    id: '9406b74e-22f5-4dec-bda8-5f7a200bc9f5',
    name: 'Finance Department',
    description: 'Financial Management Department',
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
  },
  {
    id: '8722b9f0-7646-4f06-a0f5-2f7ffccdedef',
    name: 'Kitchen',
    description: 'Kitchen and Food Preparation',
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

// =============== TB_DEPARTMENT CRUD ===============

export const tbDepartmentCrud = {
  // Create
  create: (data: Omit<TbDepartment, 'id' | 'created_at' | 'updated_at'>): TbDepartment => {
    const now = getCurrentTimestamp();
    const department: TbDepartment = {
      id: generateUuid(),
      name: data.name,
      description: data.description,
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
    mockTbDepartment.push(department);
    return department;
  },

  // Read (Find by id)
  findById: (id: string): TbDepartment | null => {
    return mockTbDepartment.find(dept => dept.id === id && !dept.deleted_at) || null;
  },

  // Read All Active
  findAll: (): TbDepartment[] => {
    return mockTbDepartment.filter(dept => !dept.deleted_at);
  },

  // Find by name
  findByName: (name: string): TbDepartment | null => {
    return mockTbDepartment.find(dept => dept.name === name && !dept.deleted_at) || null;
  },

  // Update
  update: (id: string, data: Partial<Omit<TbDepartment, 'id' | 'created_at'>>): TbDepartment | null => {
    const index = mockTbDepartment.findIndex(dept => dept.id === id && !dept.deleted_at);
    if (index === -1) return null;

    mockTbDepartment[index] = {
      ...mockTbDepartment[index],
      ...data,
      updated_at: getCurrentTimestamp()
    };
    return mockTbDepartment[index];
  },

  // Soft Delete
  delete: (id: string, deletedById?: string): boolean => {
    const index = mockTbDepartment.findIndex(dept => dept.id === id && !dept.deleted_at);
    if (index === -1) return false;

    mockTbDepartment[index] = {
      ...mockTbDepartment[index],
      deleted_at: getCurrentTimestamp(),
      deleted_by_id: deletedById || null
    };
    return true;
  }
};
