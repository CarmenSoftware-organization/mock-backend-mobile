// =============== TB_DEPARTMENT TABLE ===============

import { TbDepartment } from './types';
import { generateUuid, getCurrentTimestamp } from './utils';
import { UUID_MAPPING } from './uuid-mapping';

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
  },
  {
    id: UUID_MAPPING['dept-housekeeping'],
    name: 'Housekeeping',
    description: 'Housekeeping and Room Services',
    is_active: true,
    note: 'Responsible for guest room cleaning, laundry, and maintenance',
    info: {
      budget_monthly: 50000,
      staff_count: 25,
      approval_chain: ['exec-housekeeper', 'fb-manager', 'gm'],
      emergency_supplies: ['cleaning_chemicals', 'linens', 'toiletries']
    },
    dimension: {
      cost_center: 'HSK001',
      approval_limits: {
        supervisor: 2000,
        manager: 10000
      }
    },
    created_at: '2024-01-15T08:00:00Z',
    created_by_id: UUID_MAPPING['system'],
    updated_at: '2024-01-15T08:00:00Z',
    updated_by_id: UUID_MAPPING['system'],
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: UUID_MAPPING['dept-fb-service'],
    name: 'Food & Beverage Service',
    description: 'Restaurant, Bar, and Room Service Operations',
    is_active: true,
    note: 'Front-of-house F&B operations and guest dining services',
    info: {
      budget_monthly: 75000,
      staff_count: 30,
      approval_chain: ['restaurant-supervisor', 'fb-manager', 'gm'],
      emergency_supplies: ['beverages', 'service_equipment', 'pos_supplies']
    },
    dimension: {
      cost_center: 'FB001',
      approval_limits: {
        supervisor: 3000,
        manager: 15000
      }
    },
    created_at: '2024-01-15T08:00:00Z',
    created_by_id: UUID_MAPPING['system'],
    updated_at: '2024-01-15T08:00:00Z',
    updated_by_id: UUID_MAPPING['system'],
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: UUID_MAPPING['dept-engineering'],
    name: 'Engineering & Maintenance',
    description: 'Hotel Maintenance, HVAC, and Technical Services',
    is_active: true,
    note: 'Responsible for hotel infrastructure and equipment maintenance',
    info: {
      budget_monthly: 100000,
      staff_count: 15,
      approval_chain: ['maintenance-supervisor', 'chief-engineer', 'gm'],
      emergency_supplies: ['spare_parts', 'tools', 'safety_equipment', 'chemicals']
    },
    dimension: {
      cost_center: 'ENG001',
      approval_limits: {
        supervisor: 5000,
        manager: 25000
      }
    },
    created_at: '2024-01-15T08:00:00Z',
    created_by_id: UUID_MAPPING['system'],
    updated_at: '2024-01-15T08:00:00Z',
    updated_by_id: UUID_MAPPING['system'],
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: UUID_MAPPING['dept-laundry'],
    name: 'Laundry',
    description: 'Commercial Laundry Operations',
    is_active: true,
    note: 'Guest and hotel linen processing and dry cleaning services',
    info: {
      budget_monthly: 25000,
      staff_count: 8,
      approval_chain: ['laundry-supervisor', 'exec-housekeeper', 'gm'],
      emergency_supplies: ['detergents', 'fabric_softener', 'starch', 'dry_cleaning_chemicals']
    },
    dimension: {
      cost_center: 'LAU001',
      approval_limits: {
        supervisor: 1500,
        manager: 7500
      }
    },
    created_at: '2024-01-15T08:00:00Z',
    created_by_id: UUID_MAPPING['system'],
    updated_at: '2024-01-15T08:00:00Z',
    updated_by_id: UUID_MAPPING['system'],
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: UUID_MAPPING['dept-purchasing'],
    name: 'Purchasing',
    description: 'Central Procurement and Vendor Management',
    is_active: true,
    note: 'Centralized purchasing, vendor relations, and contract management',
    info: {
      budget_monthly: 200000,
      staff_count: 6,
      approval_chain: ['purchase-officer', 'purchasing-manager', 'financial-controller', 'gm'],
      manages_categories: ['food', 'beverages', 'supplies', 'equipment', 'services']
    },
    dimension: {
      cost_center: 'PUR001',
      approval_limits: {
        officer: 10000,
        manager: 50000,
        controller: 100000
      }
    },
    created_at: '2024-01-15T08:00:00Z',
    created_by_id: UUID_MAPPING['system'],
    updated_at: '2024-01-15T08:00:00Z',
    updated_by_id: UUID_MAPPING['system'],
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: UUID_MAPPING['dept-stores'],
    name: 'Stores & Inventory',
    description: 'Inventory Management and Store Operations',
    is_active: true,
    note: 'Central stores, inventory control, and distribution to departments',
    info: {
      budget_monthly: 30000,
      staff_count: 4,
      approval_chain: ['store-clerk', 'storekeeper', 'purchasing-manager'],
      manages_inventory: ['food_items', 'beverages', 'cleaning_supplies', 'linens', 'amenities', 'office_supplies']
    },
    dimension: {
      cost_center: 'STO001',
      approval_limits: {
        clerk: 1000,
        keeper: 5000
      }
    },
    created_at: '2024-01-15T08:00:00Z',
    created_by_id: UUID_MAPPING['system'],
    updated_at: '2024-01-15T08:00:00Z',
    updated_by_id: UUID_MAPPING['system'],
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
