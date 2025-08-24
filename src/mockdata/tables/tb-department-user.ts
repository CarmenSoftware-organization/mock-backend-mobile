// =============== TB_DEPARTMENT_USER TABLE ===============

import { TbDepartmentUser } from './types';
import { generateUuid, getCurrentTimestamp } from './utils';
import { UUID_MAPPING } from './uuid-mapping';

// Mock Department Users Table (tb_department_user)
export let mockTbDepartmentUser: TbDepartmentUser[] = [
  {
    id: '550e8400-e29b-41d4-a716-446655440301',
    user_id: '1bfdb891-58ee-499c-8115-34a964de8122',
    department_id: '9722b9f0-7646-4f06-a0f5-2f7ffccdedef',
    is_hod: false,
    note: null,
    info: {},
    dimension: {},
    doc_version: 0,
    created_at: '2024-01-15T08:00:00Z',
    created_by_id: null,
    updated_at: '2024-01-15T08:00:00Z',
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: '550e8400-e29b-41d4-a716-446655440302',
    user_id: '550e8400-e29b-41d4-a716-446655440002',
    department_id: '9722b9f0-7646-4f06-a0f5-2f7ffccdedef',
    is_hod: true,
    note: null,
    info: {},
    dimension: {},
    doc_version: 0,
    created_at: '2024-01-16T09:00:00Z',
    created_by_id: null,
    updated_at: '2024-01-16T09:00:00Z',
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: '550e8400-e29b-41d4-a716-446655440303',
    user_id: '550e8400-e29b-41d4-a716-446655440003',
    department_id: '9406b74e-22f5-4dec-bda8-5f7a200bc9f5',
    is_hod: true,
    note: null,
    info: {},
    dimension: {},
    doc_version: 0,
    created_at: '2024-01-17T10:00:00Z',
    created_by_id: null,
    updated_at: '2024-01-17T10:00:00Z',
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: '550e8400-e29b-41d4-a716-446655440304',
    user_id: '550e8400-e29b-41d4-a716-446655440004',
    department_id: '9406b74e-22f5-4dec-bda8-5f7a200bc9f5',
    is_hod: false,
    note: null,
    info: {},
    dimension: {},
    doc_version: 0,
    created_at: '2024-01-18T11:00:00Z',
    created_by_id: null,
    updated_at: '2024-01-18T11:00:00Z',
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: '550e8400-e29b-41d4-a716-446655440305',
    user_id: '550e8400-e29b-41d4-a716-446655440005',
    department_id: '9722b9f0-7646-4f06-a0f5-2f7ffccdedef',
    is_hod: false,
    note: null,
    info: {},
    dimension: {},
    doc_version: 0,
    created_at: '2024-01-19T12:00:00Z',
    created_by_id: null,
    updated_at: '2024-01-19T12:00:00Z',
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: '550e8400-e29b-41d4-a716-446655440306',
    user_id: '550e8400-e29b-41d4-a716-446655440006',
    department_id: '8722b9f0-7646-4f06-a0f5-2f7ffccdedef',
    is_hod: false,
    note: null,
    info: {},
    dimension: {},
    doc_version: 0,
    created_at: '2024-01-20T13:00:00Z',
    created_by_id: null,
    updated_at: '2024-01-20T13:00:00Z',
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null
  }
];

// =============== TB_DEPARTMENT_USER CRUD ===============

export const tbDepartmentUserCrud = {
  // Create
  create: (data: Omit<TbDepartmentUser, 'id' | 'created_at' | 'updated_at' | 'doc_version'>): TbDepartmentUser => {
    const now = getCurrentTimestamp();
    const departmentUser: TbDepartmentUser = {
      id: generateUuid(),
      user_id: data.user_id,
      department_id: data.department_id,
      is_hod: data.is_hod,
      note: data.note || null,
      info: data.info || {},
      dimension: data.dimension || {},
      doc_version: 0,
      created_at: now,
      created_by_id: data.created_by_id || null,
      updated_at: now,
      updated_by_id: data.updated_by_id || null,
      deleted_at: null,
      deleted_by_id: null
    };
    mockTbDepartmentUser.push(departmentUser);
    return departmentUser;
  },

  // Find by user_id
  findByUserId: (userId: string): TbDepartmentUser[] => {
    return mockTbDepartmentUser.filter(du => du.user_id === userId && !du.deleted_at);
  },

  // Find by department_id
  findByDepartmentId: (departmentId: string): TbDepartmentUser[] => {
    return mockTbDepartmentUser.filter(du => du.department_id === departmentId && !du.deleted_at);
  },

  // Find HODs by department
  findHodByDepartmentId: (departmentId: string): TbDepartmentUser[] => {
    return mockTbDepartmentUser.filter(du => 
      du.department_id === departmentId && du.is_hod && !du.deleted_at
    );
  },

  // Update
  update: (id: string, data: Partial<Omit<TbDepartmentUser, 'id' | 'created_at' | 'doc_version'>>): TbDepartmentUser | null => {
    const index = mockTbDepartmentUser.findIndex(du => du.id === id && !du.deleted_at);
    if (index === -1) return null;

    mockTbDepartmentUser[index] = {
      ...mockTbDepartmentUser[index],
      ...data,
      updated_at: getCurrentTimestamp(),
      doc_version: mockTbDepartmentUser[index].doc_version + 1
    };
    return mockTbDepartmentUser[index];
  },

  // Delete
  delete: (id: string, deletedById?: string): boolean => {
    const index = mockTbDepartmentUser.findIndex(du => du.id === id && !du.deleted_at);
    if (index === -1) return false;

    mockTbDepartmentUser[index] = {
      ...mockTbDepartmentUser[index],
      deleted_at: getCurrentTimestamp(),
      deleted_by_id: deletedById || null
    };
    return true;
  }
};
