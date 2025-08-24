import { TbProductItemGroup } from './types';
import { generateUuid, getCurrentTimestamp } from './utils';
import { UUID_MAPPING } from './uuid-mapping';

// =============== MOCK TB_PRODUCT_ITEM_GROUP DATA ===============
export let mockTbProductItemGroup: TbProductItemGroup[] = [
  // Leafy Vegetables item groups
  {
    id: "pig-001",
    product_subcategory_id: "subcat-001",
    code: "LETTUCE",
    name: "Lettuce Varieties",
    description: "All types of lettuce - iceberg, romaine, butter",
    price_deviation_limit: 25.0,
    qty_deviation_limit: 20.0,
    is_used_in_recipe: true,
    is_sold_directly: false,
    is_active: true,
    note: "Popular salad ingredient",
    info: {
      seasonal: true,
      peak_season: "Nov-Feb"
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
    id: "pig-002",
    product_subcategory_id: "subcat-001",
    code: "SPINACH",
    name: "Spinach Products",
    description: "Fresh spinach and baby spinach",
    price_deviation_limit: 30.0,
    qty_deviation_limit: 25.0,
    is_used_in_recipe: true,
    is_sold_directly: false,
    is_active: true,
    note: "High in iron and vitamins",
    info: {
      seasonal: false,
      peak_season: "All year"
    },
    dimension: {},
    created_at: getCurrentTimestamp(),
    created_by_id: UUID_MAPPING['system'],
    updated_at: getCurrentTimestamp(),
    updated_by_id: UUID_MAPPING['system'],
    deleted_at: null,
    deleted_by_id: null
  },
  // Root Vegetables item groups
  {
    id: "pig-003",
    product_subcategory_id: "subcat-002",
    code: "ONION",
    name: "Onion Varieties",
    description: "Yellow, white, red onions and shallots",
    price_deviation_limit: 15.0,
    qty_deviation_limit: 30.0,
    is_used_in_recipe: true,
    is_sold_directly: false,
    is_active: true,
    note: "Essential cooking ingredient",
    info: {
      seasonal: false,
      peak_season: "All year"
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
    id: "pig-004",
    product_subcategory_id: "subcat-002",
    code: "POTATO",
    name: "Potato Products",
    description: "Various potato types and cuts",
    price_deviation_limit: 12.0,
    qty_deviation_limit: 35.0,
    is_used_in_recipe: true,
    is_sold_directly: false,
    is_active: true,
    note: "Versatile ingredient",
    info: {
      seasonal: false,
      peak_season: "All year"
    },
    dimension: {},
    created_at: getCurrentTimestamp(),
    created_by_id: UUID_MAPPING['system'],
    updated_at: getCurrentTimestamp(),
    updated_by_id: UUID_MAPPING['system'],
    deleted_at: null,
    deleted_by_id: null
  },
  // Chicken item groups
  {
    id: "pig-005",
    product_subcategory_id: "subcat-003",
    code: "BREAST",
    name: "Chicken Breast",
    description: "Boneless and bone-in chicken breast",
    price_deviation_limit: 20.0,
    qty_deviation_limit: 10.0,
    is_used_in_recipe: true,
    is_sold_directly: false,
    is_active: true,
    note: "Premium chicken cut",
    info: {
      cooking_methods: ["grill", "pan-fry", "bake"]
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
    id: "pig-006",
    product_subcategory_id: "subcat-003",
    code: "THIGH",
    name: "Chicken Thigh",
    description: "Bone-in and boneless chicken thigh",
    price_deviation_limit: 18.0,
    qty_deviation_limit: 12.0,
    is_used_in_recipe: true,
    is_sold_directly: false,
    is_active: true,
    note: "Flavorful and tender",
    info: {
      cooking_methods: ["braise", "roast", "grill"]
    },
    dimension: {},
    created_at: getCurrentTimestamp(),
    created_by_id: UUID_MAPPING['system'],
    updated_at: getCurrentTimestamp(),
    updated_by_id: UUID_MAPPING['system'],
    deleted_at: null,
    deleted_by_id: null
  },
  // Beef item groups
  {
    id: "pig-007",
    product_subcategory_id: "subcat-004",
    code: "SIRLOIN",
    name: "Beef Sirloin",
    description: "Tender sirloin cuts",
    price_deviation_limit: 25.0,
    qty_deviation_limit: 8.0,
    is_used_in_recipe: true,
    is_sold_directly: false,
    is_active: true,
    note: "Premium beef cut",
    info: {
      cooking_methods: ["grill", "pan-sear", "roast"]
    },
    dimension: {},
    created_at: getCurrentTimestamp(),
    created_by_id: UUID_MAPPING['system'],
    updated_at: getCurrentTimestamp(),
    updated_by_id: UUID_MAPPING['system'],
    deleted_at: null,
    deleted_by_id: null
  },
  // Milk item groups
  {
    id: "pig-008",
    product_subcategory_id: "subcat-005",
    code: "WHOLE",
    name: "Whole Milk",
    description: "Full-fat fresh milk",
    price_deviation_limit: 8.0,
    qty_deviation_limit: 20.0,
    is_used_in_recipe: true,
    is_sold_directly: true,
    is_active: true,
    note: "3.25% fat content",
    info: {
      fat_content: "3.25%",
      pasteurized: true
    },
    dimension: {},
    created_at: getCurrentTimestamp(),
    created_by_id: UUID_MAPPING['system'],
    updated_at: getCurrentTimestamp(),
    updated_by_id: UUID_MAPPING['system'],
    deleted_at: null,
    deleted_by_id: null
  },
  // Cheese item groups  
  {
    id: "pig-009",
    product_subcategory_id: "subcat-006",
    code: "CHEDDAR",
    name: "Cheddar Cheese",
    description: "Aged cheddar cheese varieties",
    price_deviation_limit: 12.0,
    qty_deviation_limit: 15.0,
    is_used_in_recipe: true,
    is_sold_directly: true,
    is_active: true,
    note: "Various aging periods",
    info: {
      aging: "3-24 months",
      melting_point: "80°C"
    },
    dimension: {},
    created_at: getCurrentTimestamp(),
    created_by_id: UUID_MAPPING['system'],
    updated_at: getCurrentTimestamp(),
    updated_by_id: UUID_MAPPING['system'],
    deleted_at: null,
    deleted_by_id: null
  },
  // Whole Spices item groups
  {
    id: "pig-010",
    product_subcategory_id: "subcat-007",
    code: "PEPPERCORN",
    name: "Peppercorns",
    description: "Black, white, and colored peppercorns",
    price_deviation_limit: 35.0,
    qty_deviation_limit: 25.0,
    is_used_in_recipe: true,
    is_sold_directly: false,
    is_active: true,
    note: "Essential spice",
    info: {
      origin: "Various countries",
      heat_level: "Medium"
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

// =============== TB_PRODUCT_ITEM_GROUP CRUD FUNCTIONS ===============
export const tbProductItemGroupCrud = {
  // Create new product item group
  create: (data: Omit<TbProductItemGroup, 'id' | 'created_at' | 'updated_at'>): TbProductItemGroup => {
    const newItemGroup: TbProductItemGroup = {
      id: generateUuid(),
      created_at: getCurrentTimestamp(),
      updated_at: getCurrentTimestamp(),
      ...data
    };
    mockTbProductItemGroup.push(newItemGroup);
    return newItemGroup;
  },

  // Find by ID
  findById: (id: string): TbProductItemGroup | null => {
    return mockTbProductItemGroup.find(group => group.id === id && !group.deleted_at) || null;
  },

  // Find by code
  findByCode: (code: string): TbProductItemGroup | null => {
    return mockTbProductItemGroup.find(group => group.code === code && !group.deleted_at) || null;
  },

  // Find by name
  findByName: (name: string): TbProductItemGroup | null => {
    return mockTbProductItemGroup.find(group => group.name === name && !group.deleted_at) || null;
  },

  // Find by subcategory ID
  findBySubCategoryId: (subCategoryId: string): TbProductItemGroup[] => {
    return mockTbProductItemGroup.filter(group => 
      !group.deleted_at && 
      group.is_active &&
      group.product_subcategory_id === subCategoryId
    );
  },

  // Find all active item groups
  findAllActive: (): TbProductItemGroup[] => {
    return mockTbProductItemGroup.filter(group => !group.deleted_at && group.is_active);
  },

  // Find all item groups (including inactive)
  findAll: (): TbProductItemGroup[] => {
    return mockTbProductItemGroup.filter(group => !group.deleted_at);
  },

  // Search item groups by name, code, or description
  search: (query: string): TbProductItemGroup[] => {
    const lowerQuery = query.toLowerCase();
    return mockTbProductItemGroup.filter(group => 
      !group.deleted_at && 
      group.is_active &&
      (group.name.toLowerCase().includes(lowerQuery) || 
       group.code?.toLowerCase().includes(lowerQuery) ||
       group.description?.toLowerCase().includes(lowerQuery))
    );
  },

  // Find item groups used in recipes
  findRecipeItemGroups: (): TbProductItemGroup[] => {
    return mockTbProductItemGroup.filter(group => 
      !group.deleted_at && 
      group.is_active &&
      group.is_used_in_recipe
    );
  },

  // Find item groups sold directly
  findDirectSaleItemGroups: (): TbProductItemGroup[] => {
    return mockTbProductItemGroup.filter(group => 
      !group.deleted_at && 
      group.is_active &&
      group.is_sold_directly
    );
  },

  // Find seasonal item groups
  findSeasonalItems: (): TbProductItemGroup[] => {
    return mockTbProductItemGroup.filter(group => 
      !group.deleted_at && 
      group.is_active &&
      group.info?.seasonal === true
    );
  },

  // Find by cooking method
  findByCookingMethod: (method: string): TbProductItemGroup[] => {
    return mockTbProductItemGroup.filter(group => 
      !group.deleted_at && 
      group.is_active &&
      group.info?.cooking_methods?.includes(method)
    );
  },

  // Update product item group
  update: (id: string, data: Partial<TbProductItemGroup>, updated_by_id?: string): TbProductItemGroup | null => {
    const index = mockTbProductItemGroup.findIndex(group => group.id === id && !group.deleted_at);
    if (index === -1) return null;

    mockTbProductItemGroup[index] = {
      ...mockTbProductItemGroup[index],
      ...data,
      updated_at: getCurrentTimestamp(),
      updated_by_id: updated_by_id || null
    };
    return mockTbProductItemGroup[index];
  },

  // Soft delete product item group
  delete: (id: string, deleted_by_id?: string): boolean => {
    const index = mockTbProductItemGroup.findIndex(group => group.id === id && !group.deleted_at);
    if (index === -1) return false;

    mockTbProductItemGroup[index].deleted_at = getCurrentTimestamp();
    mockTbProductItemGroup[index].deleted_by_id = deleted_by_id || null;
    return true;
  },

  // Activate item group
  activate: (id: string, updated_by_id?: string): TbProductItemGroup | null => {
    return tbProductItemGroupCrud.update(id, { is_active: true }, updated_by_id);
  },

  // Deactivate item group
  deactivate: (id: string, updated_by_id?: string): TbProductItemGroup | null => {
    return tbProductItemGroupCrud.update(id, { is_active: false }, updated_by_id);
  },

  // Update deviation limits
  updateDeviationLimits: (
    id: string, 
    priceLimit?: number, 
    qtyLimit?: number, 
    updated_by_id?: string
  ): TbProductItemGroup | null => {
    const updateData: Partial<TbProductItemGroup> = {};
    if (priceLimit !== undefined) updateData.price_deviation_limit = priceLimit;
    if (qtyLimit !== undefined) updateData.qty_deviation_limit = qtyLimit;
    
    return tbProductItemGroupCrud.update(id, updateData, updated_by_id);
  },

  // Get hierarchy (item group with subcategory and category)
  getHierarchy: (id: string): any => {
    const itemGroup = tbProductItemGroupCrud.findById(id);
    if (!itemGroup) return null;

    // Note: This would normally require importing other CRUD functions
    return {
      ...itemGroup,
      subcategory: {
        id: itemGroup.product_subcategory_id,
        // Would fetch actual subcategory data here
      }
    };
  },

  // Get item group statistics
  getStats: () => {
    const allItemGroups = mockTbProductItemGroup.filter(group => !group.deleted_at);
    const activeItemGroups = allItemGroups.filter(group => group.is_active);
    const recipeItemGroups = activeItemGroups.filter(group => group.is_used_in_recipe);
    const directSaleItemGroups = activeItemGroups.filter(group => group.is_sold_directly);
    const seasonalItemGroups = activeItemGroups.filter(group => group.info?.seasonal);
    
    return {
      total: allItemGroups.length,
      active: activeItemGroups.length,
      inactive: allItemGroups.length - activeItemGroups.length,
      recipeItemGroups: recipeItemGroups.length,
      directSaleItemGroups: directSaleItemGroups.length,
      seasonalItemGroups: seasonalItemGroups.length,
      bySubCategory: activeItemGroups.reduce((acc, group) => {
        acc[group.product_subcategory_id] = (acc[group.product_subcategory_id] || 0) + 1;
        return acc;
      }, {} as Record<string, number>),
      bySeason: activeItemGroups.reduce((acc, group) => {
        const seasonal = group.info?.seasonal ? 'Seasonal' : 'All Year';
        acc[seasonal] = (acc[seasonal] || 0) + 1;
        return acc;
      }, {} as Record<string, number>)
    };
  }
};
