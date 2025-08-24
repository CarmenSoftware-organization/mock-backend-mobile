import { TbUnit } from './types';
import { generateUuid, getCurrentTimestamp } from './utils';

// =============== MOCK TB_UNIT DATA ===============
export let mockTbUnit: TbUnit[] = [
  {
    id: "unit-001-pcs",
    name: "Pieces",
    description: "Individual pieces or units",
    is_active: true,
    note: "Basic counting unit",
    info: {},
    dimension: {},
    created_at: getCurrentTimestamp(),
    created_by_id: "system",
    updated_at: getCurrentTimestamp(),
    updated_by_id: "system",
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "unit-002-kg",
    name: "Kilogram",
    description: "Weight measurement in kilograms",
    is_active: true,
    note: "Metric weight unit",
    info: {},
    dimension: {},
    created_at: getCurrentTimestamp(),
    created_by_id: "system",
    updated_at: getCurrentTimestamp(),
    updated_by_id: "system",
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "unit-003-g",
    name: "Gram",
    description: "Weight measurement in grams",
    is_active: true,
    note: "Small metric weight unit",
    info: {},
    dimension: {},
    created_at: getCurrentTimestamp(),
    created_by_id: "system",
    updated_at: getCurrentTimestamp(),
    updated_by_id: "system",
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "unit-004-l",
    name: "Liter",
    description: "Volume measurement in liters",
    is_active: true,
    note: "Metric volume unit",
    info: {},
    dimension: {},
    created_at: getCurrentTimestamp(),
    created_by_id: "system",
    updated_at: getCurrentTimestamp(),
    updated_by_id: "system",
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "unit-005-ml",
    name: "Milliliter",
    description: "Volume measurement in milliliters",
    is_active: true,
    note: "Small metric volume unit",
    info: {},
    dimension: {},
    created_at: getCurrentTimestamp(),
    created_by_id: "system",
    updated_at: getCurrentTimestamp(),
    updated_by_id: "system",
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "unit-006-box",
    name: "Box",
    description: "Packaging unit - box",
    is_active: true,
    note: "Container unit",
    info: {},
    dimension: {},
    created_at: getCurrentTimestamp(),
    created_by_id: "system",
    updated_at: getCurrentTimestamp(),
    updated_by_id: "system",
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "unit-007-case",
    name: "Case",
    description: "Packaging unit - case",
    is_active: true,
    note: "Large container unit",
    info: {},
    dimension: {},
    created_at: getCurrentTimestamp(),
    created_by_id: "system",
    updated_at: getCurrentTimestamp(),
    updated_by_id: "system",
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "unit-008-dozen",
    name: "Dozen",
    description: "12 pieces",
    is_active: true,
    note: "12 units counting",
    info: {},
    dimension: {},
    created_at: getCurrentTimestamp(),
    created_by_id: "system",
    updated_at: getCurrentTimestamp(),
    updated_by_id: "system",
    deleted_at: null,
    deleted_by_id: null
  }
];

// =============== TB_UNIT CRUD FUNCTIONS ===============
export const tbUnitCrud = {
  // Create new unit
  create: (data: Omit<TbUnit, 'id' | 'created_at' | 'updated_at'>): TbUnit => {
    const newUnit: TbUnit = {
      id: generateUuid(),
      created_at: getCurrentTimestamp(),
      updated_at: getCurrentTimestamp(),
      ...data
    };
    mockTbUnit.push(newUnit);
    return newUnit;
  },

  // Find by ID
  findById: (id: string): TbUnit | null => {
    return mockTbUnit.find(unit => unit.id === id && !unit.deleted_at) || null;
  },

  // Find by name
  findByName: (name: string): TbUnit | null => {
    return mockTbUnit.find(unit => unit.name === name && !unit.deleted_at) || null;
  },

  // Find all active units
  findAllActive: (): TbUnit[] => {
    return mockTbUnit.filter(unit => !unit.deleted_at && unit.is_active);
  },

  // Find all units (including inactive)
  findAll: (): TbUnit[] => {
    return mockTbUnit.filter(unit => !unit.deleted_at);
  },

  // Search units by name
  search: (query: string): TbUnit[] => {
    const lowerQuery = query.toLowerCase();
    return mockTbUnit.filter(unit => 
      !unit.deleted_at && 
      unit.is_active &&
      (unit.name.toLowerCase().includes(lowerQuery) || 
       unit.description?.toLowerCase().includes(lowerQuery))
    );
  },

  // Update unit
  update: (id: string, data: Partial<TbUnit>, updated_by_id?: string): TbUnit | null => {
    const index = mockTbUnit.findIndex(unit => unit.id === id && !unit.deleted_at);
    if (index === -1) return null;

    mockTbUnit[index] = {
      ...mockTbUnit[index],
      ...data,
      updated_at: getCurrentTimestamp(),
      updated_by_id: updated_by_id || null
    };
    return mockTbUnit[index];
  },

  // Soft delete unit
  delete: (id: string, deleted_by_id?: string): boolean => {
    const index = mockTbUnit.findIndex(unit => unit.id === id && !unit.deleted_at);
    if (index === -1) return false;

    mockTbUnit[index].deleted_at = getCurrentTimestamp();
    mockTbUnit[index].deleted_by_id = deleted_by_id || null;
    return true;
  },

  // Get weight units
  getWeightUnits: (): TbUnit[] => {
    return mockTbUnit.filter(unit => 
      !unit.deleted_at && 
      unit.is_active &&
      (unit.name.includes('gram') || unit.name.includes('Kilogram') || unit.name.includes('kg'))
    );
  },

  // Get volume units
  getVolumeUnits: (): TbUnit[] => {
    return mockTbUnit.filter(unit => 
      !unit.deleted_at && 
      unit.is_active &&
      (unit.name.includes('liter') || unit.name.includes('Liter') || unit.name.includes('ml'))
    );
  },

  // Get packaging units
  getPackagingUnits: (): TbUnit[] => {
    return mockTbUnit.filter(unit => 
      !unit.deleted_at && 
      unit.is_active &&
      (unit.name.includes('Box') || unit.name.includes('Case') || unit.name.includes('Dozen'))
    );
  }
};
