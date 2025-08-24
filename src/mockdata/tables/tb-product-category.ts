import { TbProductCategory } from './types';
import { generateUuid, getCurrentTimestamp } from './utils';
import { UUID_MAPPING } from './uuid-mapping';

// =============== MOCK TB_PRODUCT_CATEGORY DATA ===============
export let mockTbProductCategory: TbProductCategory[] = [
  {
    id: "cat-001",
    code: "VEG",
    name: "Vegetables",
    description: "Fresh and processed vegetables",
    is_active: true,
    price_deviation_limit: 15.0,
    qty_deviation_limit: 10.0,
    is_used_in_recipe: true,
    is_sold_directly: false,
    note: "All vegetable products",
    info: {
      storage_requirements: "Refrigerated",
      shelf_life_category: "Short"
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
    id: "cat-002",
    code: "MEAT",
    name: "Meat & Poultry",
    description: "Fresh and frozen meat products",
    is_active: true,
    price_deviation_limit: 20.0,
    qty_deviation_limit: 5.0,
    is_used_in_recipe: true,
    is_sold_directly: false,
    note: "All meat and poultry products",
    info: {
      storage_requirements: "Frozen/Refrigerated",
      shelf_life_category: "Very Short"
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
    id: "cat-003",
    code: "DAIRY",
    name: "Dairy Products",
    description: "Milk, cheese, yogurt and dairy items",
    is_active: true,
    price_deviation_limit: 10.0,
    qty_deviation_limit: 8.0,
    is_used_in_recipe: true,
    is_sold_directly: true,
    note: "All dairy products",
    info: {
      storage_requirements: "Refrigerated",
      shelf_life_category: "Short"
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
    id: "cat-004",
    code: "SPICE",
    name: "Spices & Seasonings",
    description: "Herbs, spices and flavor enhancers",
    is_active: true,
    price_deviation_limit: 25.0,
    qty_deviation_limit: 15.0,
    is_used_in_recipe: true,
    is_sold_directly: false,
    note: "All spices and seasonings",
    info: {
      storage_requirements: "Dry Storage",
      shelf_life_category: "Long"
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
    id: "cat-005",
    code: "GRAIN",
    name: "Grains & Cereals",
    description: "Rice, flour, pasta and grain products",
    is_active: true,
    price_deviation_limit: 12.0,
    qty_deviation_limit: 20.0,
    is_used_in_recipe: true,
    is_sold_directly: false,
    note: "All grain and cereal products",
    info: {
      storage_requirements: "Dry Storage",
      shelf_life_category: "Long"
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
    id: "cat-006",
    code: "BEV",
    name: "Beverages",
    description: "Drinks, juices and beverage products",
    is_active: true,
    price_deviation_limit: 8.0,
    qty_deviation_limit: 25.0,
    is_used_in_recipe: false,
    is_sold_directly: true,
    note: "All beverage products",
    info: {
      storage_requirements: "Variable",
      shelf_life_category: "Medium"
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
    id: "cat-007",
    code: "SEAFOOD",
    name: "Seafood",
    description: "Fresh and frozen fish and seafood",
    is_active: true,
    price_deviation_limit: 30.0,
    qty_deviation_limit: 5.0,
    is_used_in_recipe: true,
    is_sold_directly: false,
    note: "All seafood products",
    info: {
      storage_requirements: "Frozen/Refrigerated",
      shelf_life_category: "Very Short"
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
    id: "cat-008",
    code: "BAKERY",
    name: "Bakery Items",
    description: "Bread, pastries and baked goods",
    is_active: true,
    price_deviation_limit: 15.0,
    qty_deviation_limit: 12.0,
    is_used_in_recipe: false,
    is_sold_directly: true,
    note: "All bakery products",
    info: {
      storage_requirements: "Room Temperature",
      shelf_life_category: "Short"
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
    id: "cat-009",
    code: "PACK",
    name: "Packaging Materials",
    description: "Containers, bags and packaging supplies",
    is_active: true,
    price_deviation_limit: 5.0,
    qty_deviation_limit: 50.0,
    is_used_in_recipe: false,
    is_sold_directly: false,
    note: "All packaging materials",
    info: {
      storage_requirements: "Dry Storage",
      shelf_life_category: "Unlimited"
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
    id: "cat-010",
    code: "CLEAN",
    name: "Cleaning Supplies",
    description: "Detergents, sanitizers and cleaning products",
    is_active: true,
    price_deviation_limit: 10.0,
    qty_deviation_limit: 30.0,
    is_used_in_recipe: false,
    is_sold_directly: false,
    note: "All cleaning and sanitizing products",
    info: {
      storage_requirements: "Dry Storage - Separate",
      shelf_life_category: "Long"
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

// =============== TB_PRODUCT_CATEGORY CRUD FUNCTIONS ===============
export const tbProductCategoryCrud = {
  // Create new product category
  create: (data: Omit<TbProductCategory, 'id' | 'created_at' | 'updated_at'>): TbProductCategory => {
    const newCategory: TbProductCategory = {
      id: generateUuid(),
      created_at: getCurrentTimestamp(),
      updated_at: getCurrentTimestamp(),
      ...data
    };
    mockTbProductCategory.push(newCategory);
    return newCategory;
  },

  // Find by ID
  findById: (id: string): TbProductCategory | null => {
    return mockTbProductCategory.find(category => category.id === id && !category.deleted_at) || null;
  },

  // Find by code
  findByCode: (code: string): TbProductCategory | null => {
    return mockTbProductCategory.find(category => category.code === code && !category.deleted_at) || null;
  },

  // Find by name
  findByName: (name: string): TbProductCategory | null => {
    return mockTbProductCategory.find(category => category.name === name && !category.deleted_at) || null;
  },

  // Find all active categories
  findAllActive: (): TbProductCategory[] => {
    return mockTbProductCategory.filter(category => !category.deleted_at && category.is_active);
  },

  // Find all categories (including inactive)
  findAll: (): TbProductCategory[] => {
    return mockTbProductCategory.filter(category => !category.deleted_at);
  },

  // Search categories by name, code, or description
  search: (query: string): TbProductCategory[] => {
    const lowerQuery = query.toLowerCase();
    return mockTbProductCategory.filter(category => 
      !category.deleted_at && 
      category.is_active &&
      (category.name.toLowerCase().includes(lowerQuery) || 
       category.code.toLowerCase().includes(lowerQuery) ||
       category.description?.toLowerCase().includes(lowerQuery))
    );
  },

  // Find categories used in recipes
  findRecipeCategories: (): TbProductCategory[] => {
    return mockTbProductCategory.filter(category => 
      !category.deleted_at && 
      category.is_active &&
      category.is_used_in_recipe
    );
  },

  // Find categories sold directly
  findDirectSaleCategories: (): TbProductCategory[] => {
    return mockTbProductCategory.filter(category => 
      !category.deleted_at && 
      category.is_active &&
      category.is_sold_directly
    );
  },

  // Find categories by storage requirement
  findByStorageRequirement: (storageType: string): TbProductCategory[] => {
    return mockTbProductCategory.filter(category => 
      !category.deleted_at && 
      category.is_active &&
      category.info?.storage_requirements?.toLowerCase().includes(storageType.toLowerCase())
    );
  },

  // Find categories by shelf life
  findByShelfLife: (shelfLifeCategory: string): TbProductCategory[] => {
    return mockTbProductCategory.filter(category => 
      !category.deleted_at && 
      category.is_active &&
      category.info?.shelf_life_category?.toLowerCase() === shelfLifeCategory.toLowerCase()
    );
  },

  // Update product category
  update: (id: string, data: Partial<TbProductCategory>, updated_by_id?: string): TbProductCategory | null => {
    const index = mockTbProductCategory.findIndex(category => category.id === id && !category.deleted_at);
    if (index === -1) return null;

    mockTbProductCategory[index] = {
      ...mockTbProductCategory[index],
      ...data,
      updated_at: getCurrentTimestamp(),
      updated_by_id: updated_by_id || null
    };
    return mockTbProductCategory[index];
  },

  // Soft delete product category
  delete: (id: string, deleted_by_id?: string): boolean => {
    const index = mockTbProductCategory.findIndex(category => category.id === id && !category.deleted_at);
    if (index === -1) return false;

    mockTbProductCategory[index].deleted_at = getCurrentTimestamp();
    mockTbProductCategory[index].deleted_by_id = deleted_by_id || null;
    return true;
  },

  // Activate category
  activate: (id: string, updated_by_id?: string): TbProductCategory | null => {
    return tbProductCategoryCrud.update(id, { is_active: true }, updated_by_id);
  },

  // Deactivate category
  deactivate: (id: string, updated_by_id?: string): TbProductCategory | null => {
    return tbProductCategoryCrud.update(id, { is_active: false }, updated_by_id);
  },

  // Update deviation limits
  updateDeviationLimits: (
    id: string, 
    priceLimit?: number, 
    qtyLimit?: number, 
    updated_by_id?: string
  ): TbProductCategory | null => {
    const updateData: Partial<TbProductCategory> = {};
    if (priceLimit !== undefined) updateData.price_deviation_limit = priceLimit;
    if (qtyLimit !== undefined) updateData.qty_deviation_limit = qtyLimit;
    
    return tbProductCategoryCrud.update(id, updateData, updated_by_id);
  },

  // Get category statistics
  getStats: () => {
    const allCategories = mockTbProductCategory.filter(category => !category.deleted_at);
    const activeCategories = allCategories.filter(category => category.is_active);
    const recipeCategories = activeCategories.filter(category => category.is_used_in_recipe);
    const directSaleCategories = activeCategories.filter(category => category.is_sold_directly);
    
    return {
      total: allCategories.length,
      active: activeCategories.length,
      inactive: allCategories.length - activeCategories.length,
      recipeCategories: recipeCategories.length,
      directSaleCategories: directSaleCategories.length,
      byStorageRequirement: activeCategories.reduce((acc, category) => {
        const storage = category.info?.storage_requirements || 'Unknown';
        acc[storage] = (acc[storage] || 0) + 1;
        return acc;
      }, {} as Record<string, number>),
      byShelfLife: activeCategories.reduce((acc, category) => {
        const shelfLife = category.info?.shelf_life_category || 'Unknown';
        acc[shelfLife] = (acc[shelfLife] || 0) + 1;
        return acc;
      }, {} as Record<string, number>)
    };
  }
};
