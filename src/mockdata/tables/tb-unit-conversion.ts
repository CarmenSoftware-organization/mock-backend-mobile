import { TbUnitConversion } from './types';
import { generateUuid, getCurrentTimestamp } from './utils';

// =============== MOCK TB_UNIT_CONVERSION DATA ===============
export let mockTbUnitConversion: TbUnitConversion[] = [
  // Weight conversions
  {
    id: "conv-001",
    product_id: null,
    unit_type: "order_unit",
    from_unit_id: "unit-002-kg",
    from_unit_name: "Kilogram",
    from_unit_qty: 1,
    to_unit_id: "unit-003-g",
    to_unit_name: "Gram",
    to_unit_qty: 1000,
    is_default: true,
    description: { type: "weight", note: "Standard kg to gram conversion" },
    is_active: true,
    note: "Basic weight conversion",
    info: {
      conversion_factor: 1000,
      type: "weight"
    },
    dimension: {},
    created_at: getCurrentTimestamp(),
    created_by_id: "system",
    updated_at: getCurrentTimestamp(),
    updated_by_id: "system",
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "conv-002",
    product_id: null,
    unit_type: "order_unit",
    from_unit_id: "unit-004-l",
    from_unit_name: "Liter",
    from_unit_qty: 1,
    to_unit_id: "unit-005-ml",
    to_unit_name: "Milliliter",
    to_unit_qty: 1000,
    is_default: true,
    description: { type: "volume", note: "Standard liter to milliliter conversion" },
    is_active: true,
    note: "Basic volume conversion",
    info: {
      conversion_factor: 1000,
      type: "volume"
    },
    dimension: {},
    created_at: getCurrentTimestamp(),
    created_by_id: "system",
    updated_at: getCurrentTimestamp(),
    updated_by_id: "system",
    deleted_at: null,
    deleted_by_id: null
  },
  // Package conversions
  {
    id: "conv-003",
    product_id: null,
    unit_type: "order_unit",
    from_unit_id: "unit-008-dozen",
    from_unit_name: "Dozen",
    from_unit_qty: 1,
    to_unit_id: "unit-001-pcs",
    to_unit_name: "Pieces",
    to_unit_qty: 12,
    is_default: true,
    description: { type: "count", note: "Dozen to pieces conversion" },
    is_active: true,
    note: "Package to individual conversion",
    info: {
      conversion_factor: 12,
      type: "count"
    },
    dimension: {},
    created_at: getCurrentTimestamp(),
    created_by_id: "system",
    updated_at: getCurrentTimestamp(),
    updated_by_id: "system",
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "conv-004",
    product_id: null,
    unit_type: "order_unit",
    from_unit_id: "unit-007-case",
    from_unit_name: "Case",
    from_unit_qty: 1,
    to_unit_id: "unit-006-box",
    to_unit_name: "Box",
    to_unit_qty: 12,
    is_default: false,
    description: { type: "package", note: "Case to box conversion (typical)" },
    is_active: true,
    note: "Large package conversion",
    info: {
      conversion_factor: 12,
      type: "package"
    },
    dimension: {},
    created_at: getCurrentTimestamp(),
    created_by_id: "system",
    updated_at: getCurrentTimestamp(),
    updated_by_id: "system",
    deleted_at: null,
    deleted_by_id: null
  },
  // Product-specific conversions (example: tomatoes)
  {
    id: "conv-005",
    product_id: "prod-001", // Fresh Tomatoes
    unit_type: "ingredient_unit",
    from_unit_id: "unit-006-box",
    from_unit_name: "Box",
    from_unit_qty: 1,
    to_unit_id: "unit-002-kg",
    to_unit_name: "Kilogram",
    to_unit_qty: 5,
    is_default: true,
    description: { type: "product_specific", note: "Tomato box weight" },
    is_active: true,
    note: "Average weight per box of tomatoes",
    info: {
      conversion_factor: 5,
      type: "weight_per_package",
      product_specific: true
    },
    dimension: {},
    created_at: getCurrentTimestamp(),
    created_by_id: "system",
    updated_at: getCurrentTimestamp(),
    updated_by_id: "system",
    deleted_at: null,
    deleted_by_id: null
  },
  // Product-specific conversions (example: chicken)
  {
    id: "conv-006",
    product_id: "prod-002", // Fresh Chicken Breast
    unit_type: "ingredient_unit",
    from_unit_id: "unit-001-pcs",
    from_unit_name: "Pieces",
    from_unit_qty: 1,
    to_unit_id: "unit-003-g",
    to_unit_name: "Gram",
    to_unit_qty: 200,
    is_default: true,
    description: { type: "product_specific", note: "Average chicken breast weight" },
    is_active: true,
    note: "Standard chicken breast portion",
    info: {
      conversion_factor: 200,
      type: "weight_per_piece",
      product_specific: true
    },
    dimension: {},
    created_at: getCurrentTimestamp(),
    created_by_id: "system",
    updated_at: getCurrentTimestamp(),
    updated_by_id: "system",
    deleted_at: null,
    deleted_by_id: null
  },
  // Milk specific conversion
  {
    id: "conv-007",
    product_id: "prod-003", // Fresh Milk
    unit_type: "order_unit",
    from_unit_id: "unit-006-box",
    from_unit_name: "Box",
    from_unit_qty: 1,
    to_unit_id: "unit-004-l",
    to_unit_name: "Liter",
    to_unit_qty: 12,
    is_default: true,
    description: { type: "product_specific", note: "Milk carton box (12 x 1L)" },
    is_active: true,
    note: "Standard milk box contains 12 liters",
    info: {
      conversion_factor: 12,
      type: "volume_per_package",
      product_specific: true
    },
    dimension: {},
    created_at: getCurrentTimestamp(),
    created_by_id: "system",
    updated_at: getCurrentTimestamp(),
    updated_by_id: "system",
    deleted_at: null,
    deleted_by_id: null
  },
  // Spice conversion (powder)
  {
    id: "conv-008",
    product_id: "prod-004", // Black Pepper Powder
    unit_type: "ingredient_unit",
    from_unit_id: "unit-006-box",
    from_unit_name: "Box",
    from_unit_qty: 1,
    to_unit_id: "unit-003-g",
    to_unit_name: "Gram",
    to_unit_qty: 100,
    is_default: true,
    description: { type: "product_specific", note: "Spice box weight" },
    is_active: true,
    note: "Standard spice box size",
    info: {
      conversion_factor: 100,
      type: "weight_per_package",
      product_specific: true
    },
    dimension: {},
    created_at: getCurrentTimestamp(),
    created_by_id: "system",
    updated_at: getCurrentTimestamp(),
    updated_by_id: "system",
    deleted_at: null,
    deleted_by_id: null
  },
  // Cooking measurement conversions
  {
    id: "conv-009",
    product_id: null,
    unit_type: "ingredient_unit",
    from_unit_id: "unit-004-l",
    from_unit_name: "Liter",
    from_unit_qty: 1,
    to_unit_id: "unit-005-ml",
    to_unit_name: "Milliliter",
    to_unit_qty: 1000,
    is_default: false,
    description: { type: "cooking", note: "Cooking measurement conversion" },
    is_active: true,
    note: "For recipe calculations",
    info: {
      conversion_factor: 1000,
      type: "cooking_measurement"
    },
    dimension: {},
    created_at: getCurrentTimestamp(),
    created_by_id: "system",
    updated_at: getCurrentTimestamp(),
    updated_by_id: "system",
    deleted_at: null,
    deleted_by_id: null
  },
  // Large package conversion
  {
    id: "conv-010",
    product_id: null,
    unit_type: "order_unit",
    from_unit_id: "unit-007-case",
    from_unit_name: "Case",
    from_unit_qty: 1,
    to_unit_id: "unit-001-pcs",
    to_unit_name: "Pieces",
    to_unit_qty: 144,
    is_default: false,
    description: { type: "package", note: "Case to pieces (12 dozens)" },
    is_active: true,
    note: "Large package breakdown",
    info: {
      conversion_factor: 144,
      type: "package",
      calculation: "12 dozens = 144 pieces"
    },
    dimension: {},
    created_at: getCurrentTimestamp(),
    created_by_id: "system",
    updated_at: getCurrentTimestamp(),
    updated_by_id: "system",
    deleted_at: null,
    deleted_by_id: null
  }
];

// =============== TB_UNIT_CONVERSION CRUD FUNCTIONS ===============
export const tbUnitConversionCrud = {
  // Create new unit conversion
  create: (data: Omit<TbUnitConversion, 'id' | 'created_at' | 'updated_at'>): TbUnitConversion => {
    const newConversion: TbUnitConversion = {
      id: generateUuid(),
      created_at: getCurrentTimestamp(),
      updated_at: getCurrentTimestamp(),
      ...data
    };
    mockTbUnitConversion.push(newConversion);
    return newConversion;
  },

  // Find by ID
  findById: (id: string): TbUnitConversion | null => {
    return mockTbUnitConversion.find(conv => conv.id === id && !conv.deleted_at) || null;
  },

  // Find by product ID
  findByProductId: (productId: string): TbUnitConversion[] => {
    return mockTbUnitConversion.filter(conv => 
      !conv.deleted_at && 
      conv.is_active &&
      conv.product_id === productId
    );
  },

  // Find by unit type
  findByUnitType: (unitType: 'order_unit' | 'ingredient_unit'): TbUnitConversion[] => {
    return mockTbUnitConversion.filter(conv => 
      !conv.deleted_at && 
      conv.is_active &&
      conv.unit_type === unitType
    );
  },

  // Find conversions from a specific unit
  findFromUnit: (fromUnitId: string): TbUnitConversion[] => {
    return mockTbUnitConversion.filter(conv => 
      !conv.deleted_at && 
      conv.is_active &&
      conv.from_unit_id === fromUnitId
    );
  },

  // Find conversions to a specific unit
  findToUnit: (toUnitId: string): TbUnitConversion[] => {
    return mockTbUnitConversion.filter(conv => 
      !conv.deleted_at && 
      conv.is_active &&
      conv.to_unit_id === toUnitId
    );
  },

  // Find conversion between two units
  findConversion: (fromUnitId: string, toUnitId: string, productId?: string): TbUnitConversion | null => {
    return mockTbUnitConversion.find(conv => 
      !conv.deleted_at && 
      conv.is_active &&
      conv.from_unit_id === fromUnitId &&
      conv.to_unit_id === toUnitId &&
      (productId ? conv.product_id === productId : true)
    ) || null;
  },

  // Find default conversions
  findDefaults: (): TbUnitConversion[] => {
    return mockTbUnitConversion.filter(conv => 
      !conv.deleted_at && 
      conv.is_active &&
      conv.is_default
    );
  },

  // Find all active conversions
  findAllActive: (): TbUnitConversion[] => {
    return mockTbUnitConversion.filter(conv => !conv.deleted_at && conv.is_active);
  },

  // Find all conversions (including inactive)
  findAll: (): TbUnitConversion[] => {
    return mockTbUnitConversion.filter(conv => !conv.deleted_at);
  },

  // Get conversion rate
  getConversionRate: (fromUnitId: string, toUnitId: string, productId?: string): number | null => {
    const conversion = tbUnitConversionCrud.findConversion(fromUnitId, toUnitId, productId);
    if (!conversion) return null;

    const fromQty = conversion.from_unit_qty || 1;
    const toQty = conversion.to_unit_qty || 1;
    
    return toQty / fromQty;
  },

  // Convert quantity
  convertQuantity: (
    quantity: number, 
    fromUnitId: string, 
    toUnitId: string, 
    productId?: string
  ): number | null => {
    // If same unit, return same quantity
    if (fromUnitId === toUnitId) return quantity;

    const rate = tbUnitConversionCrud.getConversionRate(fromUnitId, toUnitId, productId);
    if (rate === null) return null;

    return quantity * rate;
  },

  // Find reverse conversion
  findReverseConversion: (fromUnitId: string, toUnitId: string, productId?: string): TbUnitConversion | null => {
    return tbUnitConversionCrud.findConversion(toUnitId, fromUnitId, productId);
  },

  // Get all possible conversions for a unit
  getAllConversions: (unitId: string, productId?: string): { from: TbUnitConversion[], to: TbUnitConversion[] } => {
    const fromConversions = tbUnitConversionCrud.findFromUnit(unitId);
    const toConversions = tbUnitConversionCrud.findToUnit(unitId);

    if (productId) {
      return {
        from: fromConversions.filter(conv => !conv.product_id || conv.product_id === productId),
        to: toConversions.filter(conv => !conv.product_id || conv.product_id === productId)
      };
    }

    return { from: fromConversions, to: toConversions };
  },

  // Update unit conversion
  update: (id: string, data: Partial<TbUnitConversion>, updated_by_id?: string): TbUnitConversion | null => {
    const index = mockTbUnitConversion.findIndex(conv => conv.id === id && !conv.deleted_at);
    if (index === -1) return null;

    mockTbUnitConversion[index] = {
      ...mockTbUnitConversion[index],
      ...data,
      updated_at: getCurrentTimestamp(),
      updated_by_id: updated_by_id || null
    };
    return mockTbUnitConversion[index];
  },

  // Soft delete unit conversion
  delete: (id: string, deleted_by_id?: string): boolean => {
    const index = mockTbUnitConversion.findIndex(conv => conv.id === id && !conv.deleted_at);
    if (index === -1) return false;

    mockTbUnitConversion[index].deleted_at = getCurrentTimestamp();
    mockTbUnitConversion[index].deleted_by_id = deleted_by_id || null;
    return true;
  },

  // Activate conversion
  activate: (id: string, updated_by_id?: string): TbUnitConversion | null => {
    return tbUnitConversionCrud.update(id, { is_active: true }, updated_by_id);
  },

  // Deactivate conversion
  deactivate: (id: string, updated_by_id?: string): TbUnitConversion | null => {
    return tbUnitConversionCrud.update(id, { is_active: false }, updated_by_id);
  },

  // Set as default
  setDefault: (id: string, updated_by_id?: string): TbUnitConversion | null => {
    const conversion = tbUnitConversionCrud.findById(id);
    if (!conversion) return null;

    // Unset other defaults for the same unit pair
    mockTbUnitConversion.forEach((conv, index) => {
      if (conv.from_unit_id === conversion.from_unit_id && 
          conv.to_unit_id === conversion.to_unit_id &&
          conv.product_id === conversion.product_id &&
          conv.id !== id) {
        mockTbUnitConversion[index].is_default = false;
      }
    });

    return tbUnitConversionCrud.update(id, { is_default: true }, updated_by_id);
  },

  // Update conversion rates
  updateRates: (
    id: string, 
    fromQty: number, 
    toQty: number, 
    updated_by_id?: string
  ): TbUnitConversion | null => {
    return tbUnitConversionCrud.update(id, {
      from_unit_qty: fromQty,
      to_unit_qty: toQty
    }, updated_by_id);
  },

  // Get conversion statistics
  getStats: () => {
    const allConversions = mockTbUnitConversion.filter(conv => !conv.deleted_at);
    const activeConversions = allConversions.filter(conv => conv.is_active);
    const defaultConversions = activeConversions.filter(conv => conv.is_default);
    const productSpecific = activeConversions.filter(conv => conv.product_id);
    const generic = activeConversions.filter(conv => !conv.product_id);
    
    return {
      total: allConversions.length,
      active: activeConversions.length,
      inactive: allConversions.length - activeConversions.length,
      defaults: defaultConversions.length,
      productSpecific: productSpecific.length,
      generic: generic.length,
      byUnitType: activeConversions.reduce((acc, conv) => {
        acc[conv.unit_type] = (acc[conv.unit_type] || 0) + 1;
        return acc;
      }, {} as Record<string, number>),
      byConversionType: activeConversions.reduce((acc, conv) => {
        const type = conv.info?.type || 'unknown';
        acc[type] = (acc[type] || 0) + 1;
        return acc;
      }, {} as Record<string, number>)
    };
  }
};
