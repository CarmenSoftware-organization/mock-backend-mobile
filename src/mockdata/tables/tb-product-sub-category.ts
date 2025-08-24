import { TbProductSubCategory } from './types';
import { generateUuid, getCurrentTimestamp } from './utils';
import { UUID_MAPPING } from './uuid-mapping';

// =============== MOCK TB_PRODUCT_SUB_CATEGORY DATA ===============
export let mockTbProductSubCategory: TbProductSubCategory[] = [
  // Vegetables subcategories
  {
    id: "subcat-001",
    product_category_id: "cat-001",
    code: "LEAFY",
    name: "Leafy Vegetables",
    description: "Spinach, lettuce, cabbage and leafy greens",
    price_deviation_limit: 20.0,
    qty_deviation_limit: 15.0,
    is_used_in_recipe: true,
    is_sold_directly: false,
    is_active: true,
    note: "High perishable items",
    info: {
      shelf_life: "3-5 days",
      storage_temp: "2-4°C"
    },
    dimension: {},
    created_at: getCurrentTimestamp(),
    created_by_id: UUID_MAPPING['system'],
    updated_at: getCurrentTimestamp(),
    updated_by_id: UUID_MAPPING['system'],
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "subcat-002",
    product_category_id: "cat-001",
    code: "ROOT",
    name: "Root Vegetables",
    description: "Carrots, onions, potatoes and root vegetables",
    price_deviation_limit: 15.0,
    qty_deviation_limit: 20.0,
    is_used_in_recipe: true,
    is_sold_directly: false,
    is_active: true,
    note: "Longer shelf life",
    info: {
      shelf_life: "14-30 days",
      storage_temp: "10-15°C"
    },
    dimension: {},
    created_at: getCurrentTimestamp(),
    created_by_id: UUID_MAPPING['system'],
    updated_at: getCurrentTimestamp(),
    updated_by_id: UUID_MAPPING['system'],
    deleted_at: null,
    deleted_by_id: null
  },
  // Meat subcategories
  {
    id: "subcat-003",
    product_category_id: "cat-002",
    code: "CHICKEN",
    name: "Chicken Products",
    description: "Fresh and frozen chicken products",
    price_deviation_limit: 25.0,
    qty_deviation_limit: 10.0,
    is_used_in_recipe: true,
    is_sold_directly: false,
    is_active: true,
    note: "HACCP certified",
    info: {
      shelf_life: "2-3 days",
      storage_temp: "0-4°C"
    },
    dimension: {},
    created_at: getCurrentTimestamp(),
    created_by_id: UUID_MAPPING['system'],
    updated_at: getCurrentTimestamp(),
    updated_by_id: UUID_MAPPING['system'],
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "subcat-004",
    product_category_id: "cat-002",
    code: "BEEF",
    name: "Beef Products",
    description: "Fresh and aged beef cuts",
    price_deviation_limit: 30.0,
    qty_deviation_limit: 8.0,
    is_used_in_recipe: true,
    is_sold_directly: false,
    is_active: true,
    note: "Premium quality beef",
    info: {
      shelf_life: "3-5 days",
      storage_temp: "0-2°C"
    },
    dimension: {},
    created_at: getCurrentTimestamp(),
    created_by_id: UUID_MAPPING['system'],
    updated_at: getCurrentTimestamp(),
    updated_by_id: UUID_MAPPING['system'],
    deleted_at: null,
    deleted_by_id: null
  },
  // Dairy subcategories
  {
    id: "subcat-005",
    product_category_id: "cat-003",
    code: "MILK",
    name: "Milk Products",
    description: "Fresh milk, UHT milk and milk-based products",
    price_deviation_limit: 10.0,
    qty_deviation_limit: 15.0,
    is_used_in_recipe: true,
    is_sold_directly: true,
    is_active: true,
    note: "Check expiry dates",
    info: {
      shelf_life: "7-30 days",
      storage_temp: "2-8°C"
    },
    dimension: {},
    created_at: getCurrentTimestamp(),
    created_by_id: UUID_MAPPING['system'],
    updated_at: getCurrentTimestamp(),
    updated_by_id: UUID_MAPPING['system'],
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "subcat-006",
    product_category_id: "cat-003",
    code: "CHEESE",
    name: "Cheese Products",
    description: "Hard and soft cheeses",
    price_deviation_limit: 15.0,
    qty_deviation_limit: 10.0,
    is_used_in_recipe: true,
    is_sold_directly: true,
    is_active: true,
    note: "Various aging periods",
    info: {
      shelf_life: "30-180 days",
      storage_temp: "2-8°C"
    },
    dimension: {},
    created_at: getCurrentTimestamp(),
    created_by_id: UUID_MAPPING['system'],
    updated_at: getCurrentTimestamp(),
    updated_by_id: UUID_MAPPING['system'],
    deleted_at: null,
    deleted_by_id: null
  },
  // Spices subcategories
  {
    id: "subcat-007",
    product_category_id: "cat-004",
    code: "WHOLE",
    name: "Whole Spices",
    description: "Whole spices and seeds",
    price_deviation_limit: 30.0,
    qty_deviation_limit: 20.0,
    is_used_in_recipe: true,
    is_sold_directly: false,
    is_active: true,
    note: "Grind before use",
    info: {
      shelf_life: "365 days",
      storage_temp: "Room temperature"
    },
    dimension: {},
    created_at: getCurrentTimestamp(),
    created_by_id: UUID_MAPPING['system'],
    updated_at: getCurrentTimestamp(),
    updated_by_id: UUID_MAPPING['system'],
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "subcat-008",
    product_category_id: "cat-004",
    code: "GROUND",
    name: "Ground Spices",
    description: "Pre-ground spices and powders",
    price_deviation_limit: 25.0,
    qty_deviation_limit: 15.0,
    is_used_in_recipe: true,
    is_sold_directly: false,
    is_active: true,
    note: "Ready to use",
    info: {
      shelf_life: "180 days",
      storage_temp: "Room temperature"
    },
    dimension: {},
    created_at: getCurrentTimestamp(),
    created_by_id: UUID_MAPPING['system'],
    updated_at: getCurrentTimestamp(),
    updated_by_id: UUID_MAPPING['system'],
    deleted_at: null,
    deleted_by_id: null
  },
  // Grains subcategories
  {
    id: "subcat-009",
    product_category_id: "cat-005",
    code: "RICE",
    name: "Rice Products",
    description: "Various types of rice",
    price_deviation_limit: 12.0,
    qty_deviation_limit: 25.0,
    is_used_in_recipe: true,
    is_sold_directly: false,
    is_active: true,
    note: "Staple ingredient",
    info: {
      shelf_life: "365 days",
      storage_temp: "Room temperature"
    },
    dimension: {},
    created_at: getCurrentTimestamp(),
    created_by_id: UUID_MAPPING['system'],
    updated_at: getCurrentTimestamp(),
    updated_by_id: UUID_MAPPING['system'],
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "subcat-010",
    product_category_id: "cat-005",
    code: "FLOUR",
    name: "Flour Products",
    description: "Various types of flour",
    price_deviation_limit: 10.0,
    qty_deviation_limit: 30.0,
    is_used_in_recipe: true,
    is_sold_directly: false,
    is_active: true,
    note: "Baking ingredient",
    info: {
      shelf_life: "180 days",
      storage_temp: "Room temperature"
    },
    dimension: {},
    created_at: getCurrentTimestamp(),
    created_by_id: UUID_MAPPING['system'],
    updated_at: getCurrentTimestamp(),
    updated_by_id: UUID_MAPPING['system'],
    deleted_at: null,
    deleted_by_id: null
  }
];

// =============== TB_PRODUCT_SUB_CATEGORY CRUD FUNCTIONS ===============
export const tbProductSubCategoryCrud = {
  // Create new product sub category
  create: (data: Omit<TbProductSubCategory, 'id' | 'created_at' | 'updated_at'>): TbProductSubCategory => {
    const newSubCategory: TbProductSubCategory = {
      id: generateUuid(),
      created_at: getCurrentTimestamp(),
      updated_at: getCurrentTimestamp(),
      ...data
    };
    mockTbProductSubCategory.push(newSubCategory);
    return newSubCategory;
  },

  // Find by ID
  findById: (id: string): TbProductSubCategory | null => {
    return mockTbProductSubCategory.find(subcat => subcat.id === id && !subcat.deleted_at) || null;
  },

  // Find by code
  findByCode: (code: string): TbProductSubCategory | null => {
    return mockTbProductSubCategory.find(subcat => subcat.code === code && !subcat.deleted_at) || null;
  },

  // Find by name
  findByName: (name: string): TbProductSubCategory | null => {
    return mockTbProductSubCategory.find(subcat => subcat.name === name && !subcat.deleted_at) || null;
  },

  // Find by category ID
  findByCategoryId: (categoryId: string): TbProductSubCategory[] => {
    return mockTbProductSubCategory.filter(subcat => 
      !subcat.deleted_at && 
      subcat.is_active &&
      subcat.product_category_id === categoryId
    );
  },

  // Find all active sub categories
  findAllActive: (): TbProductSubCategory[] => {
    return mockTbProductSubCategory.filter(subcat => !subcat.deleted_at && subcat.is_active);
  },

  // Find all sub categories (including inactive)
  findAll: (): TbProductSubCategory[] => {
    return mockTbProductSubCategory.filter(subcat => !subcat.deleted_at);
  },

  // Search sub categories by name, code, or description
  search: (query: string): TbProductSubCategory[] => {
    const lowerQuery = query.toLowerCase();
    return mockTbProductSubCategory.filter(subcat => 
      !subcat.deleted_at && 
      subcat.is_active &&
      (subcat.name.toLowerCase().includes(lowerQuery) || 
       subcat.code?.toLowerCase().includes(lowerQuery) ||
       subcat.description?.toLowerCase().includes(lowerQuery))
    );
  },

  // Find sub categories used in recipes
  findRecipeSubCategories: (): TbProductSubCategory[] => {
    return mockTbProductSubCategory.filter(subcat => 
      !subcat.deleted_at && 
      subcat.is_active &&
      subcat.is_used_in_recipe
    );
  },

  // Find sub categories sold directly
  findDirectSaleSubCategories: (): TbProductSubCategory[] => {
    return mockTbProductSubCategory.filter(subcat => 
      !subcat.deleted_at && 
      subcat.is_active &&
      subcat.is_sold_directly
    );
  },

  // Find by shelf life range
  findByShelfLife: (minDays: number, maxDays: number): TbProductSubCategory[] => {
    return mockTbProductSubCategory.filter(subcat => {
      if (!subcat.deleted_at && subcat.is_active && subcat.info?.shelf_life) {
        const shelfLifeStr = subcat.info.shelf_life as string;
        const days = parseInt(shelfLifeStr.match(/\d+/)?.[0] || '0');
        return days >= minDays && days <= maxDays;
      }
      return false;
    });
  },

  // Update product sub category
  update: (id: string, data: Partial<TbProductSubCategory>, updated_by_id?: string): TbProductSubCategory | null => {
    const index = mockTbProductSubCategory.findIndex(subcat => subcat.id === id && !subcat.deleted_at);
    if (index === -1) return null;

    mockTbProductSubCategory[index] = {
      ...mockTbProductSubCategory[index],
      ...data,
      updated_at: getCurrentTimestamp(),
      updated_by_id: updated_by_id || null
    };
    return mockTbProductSubCategory[index];
  },

  // Soft delete product sub category
  delete: (id: string, deleted_by_id?: string): boolean => {
    const index = mockTbProductSubCategory.findIndex(subcat => subcat.id === id && !subcat.deleted_at);
    if (index === -1) return false;

    mockTbProductSubCategory[index].deleted_at = getCurrentTimestamp();
    mockTbProductSubCategory[index].deleted_by_id = deleted_by_id || null;
    return true;
  },

  // Activate sub category
  activate: (id: string, updated_by_id?: string): TbProductSubCategory | null => {
    return tbProductSubCategoryCrud.update(id, { is_active: true }, updated_by_id);
  },

  // Deactivate sub category
  deactivate: (id: string, updated_by_id?: string): TbProductSubCategory | null => {
    return tbProductSubCategoryCrud.update(id, { is_active: false }, updated_by_id);
  },

  // Update deviation limits
  updateDeviationLimits: (
    id: string, 
    priceLimit?: number, 
    qtyLimit?: number, 
    updated_by_id?: string
  ): TbProductSubCategory | null => {
    const updateData: Partial<TbProductSubCategory> = {};
    if (priceLimit !== undefined) updateData.price_deviation_limit = priceLimit;
    if (qtyLimit !== undefined) updateData.qty_deviation_limit = qtyLimit;
    
    return tbProductSubCategoryCrud.update(id, updateData, updated_by_id);
  },

  // Get sub category with parent category
  getWithParentCategory: (id: string): any => {
    const subCategory = tbProductSubCategoryCrud.findById(id);
    if (!subCategory) return null;

    // Note: This would normally require importing tbProductCategoryCrud
    // For now, we'll return the sub category with a placeholder
    return {
      ...subCategory,
      parent_category: {
        id: subCategory.product_category_id,
        // Would fetch actual category data here
      }
    };
  },

  // Get sub category statistics
  getStats: () => {
    const allSubCategories = mockTbProductSubCategory.filter(subcat => !subcat.deleted_at);
    const activeSubCategories = allSubCategories.filter(subcat => subcat.is_active);
    const recipeSubCategories = activeSubCategories.filter(subcat => subcat.is_used_in_recipe);
    const directSaleSubCategories = activeSubCategories.filter(subcat => subcat.is_sold_directly);
    
    return {
      total: allSubCategories.length,
      active: activeSubCategories.length,
      inactive: allSubCategories.length - activeSubCategories.length,
      recipeSubCategories: recipeSubCategories.length,
      directSaleSubCategories: directSaleSubCategories.length,
      byParentCategory: activeSubCategories.reduce((acc, subcat) => {
        acc[subcat.product_category_id] = (acc[subcat.product_category_id] || 0) + 1;
        return acc;
      }, {} as Record<string, number>),
      byStorageTemp: activeSubCategories.reduce((acc, subcat) => {
        const temp = subcat.info?.storage_temp || 'Unknown';
        acc[temp] = (acc[temp] || 0) + 1;
        return acc;
      }, {} as Record<string, number>)
    };
  }
};
