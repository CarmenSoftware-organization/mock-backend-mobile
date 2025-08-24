import { TbProduct } from './types';
import { generateUuid, getCurrentTimestamp } from './utils';
import { UUID_MAPPING } from './uuid-mapping';

// =============== MOCK TB_PRODUCT DATA ===============
export let mockTbProduct: TbProduct[] = [
  {
    id: "prod-001",
    code: "ING-VEG-001",
    name: "Fresh Tomatoes",
    local_name: "มะเขือเทศสด",
    description: "Fresh red tomatoes, Grade A",
    inventory_unit_id: "unit-002-kg",
    inventory_unit_name: "Kilogram",
    product_status_type: "active",
    product_item_group_id: "pig-001",
    is_used_in_recipe: true,
    is_sold_directly: false,
    barcode: "8850123456001",
    sku: "TOM-001",
    price_deviation_limit: 10.0,
    qty_deviation_limit: 5.0,
    note: "Keep refrigerated",
    info: {
      supplier: "vendor-002",
      shelf_life: "7 days",
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
    id: "prod-002",
    code: "ING-MEAT-001",
    name: "Fresh Chicken Breast",
    local_name: "อกไก่สด",
    description: "Premium chicken breast, boneless",
    inventory_unit_id: "unit-002-kg",
    inventory_unit_name: "Kilogram",
    product_status_type: "active",
    product_item_group_id: "pig-002",
    is_used_in_recipe: true,
    is_sold_directly: false,
    barcode: "8850123456002",
    sku: "CHK-001",
    price_deviation_limit: 15.0,
    qty_deviation_limit: 3.0,
    note: "Must be used within 48 hours",
    info: {
      supplier: "vendor-003",
      shelf_life: "2 days",
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
    id: "prod-003",
    code: "ING-DAIRY-001",
    name: "Fresh Milk",
    local_name: "นมสด",
    description: "UHT fresh milk, 3.25% fat",
    inventory_unit_id: "unit-004-l",
    inventory_unit_name: "Liter",
    product_status_type: "active",
    product_item_group_id: "pig-003",
    is_used_in_recipe: true,
    is_sold_directly: true,
    barcode: "8850123456003",
    sku: "MLK-001",
    price_deviation_limit: 5.0,
    qty_deviation_limit: 10.0,
    note: "Check expiry date",
    info: {
      supplier: "vendor-004",
      shelf_life: "30 days",
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
    id: "prod-004",
    code: "ING-SPICE-001",
    name: "Black Pepper Powder",
    local_name: "พริกไทยดำป่น",
    description: "Premium ground black pepper",
    inventory_unit_id: "unit-003-g",
    inventory_unit_name: "Gram",
    product_status_type: "active",
    product_item_group_id: "pig-004",
    is_used_in_recipe: true,
    is_sold_directly: false,
    barcode: "8850123456004",
    sku: "PEP-001",
    price_deviation_limit: 20.0,
    qty_deviation_limit: 15.0,
    note: "Store in dry place",
    info: {
      supplier: "vendor-005",
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
    id: "prod-005",
    code: "ING-VEG-002",
    name: "Fresh Onions",
    local_name: "หัวหอมสด",
    description: "Yellow onions, medium size",
    inventory_unit_id: "unit-002-kg",
    inventory_unit_name: "Kilogram",
    product_status_type: "active",
    product_item_group_id: "pig-001",
    is_used_in_recipe: true,
    is_sold_directly: false,
    barcode: "8850123456005",
    sku: "ONI-001",
    price_deviation_limit: 8.0,
    qty_deviation_limit: 5.0,
    note: "Keep in ventilated area",
    info: {
      supplier: "vendor-002",
      shelf_life: "14 days",
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
    id: "prod-006",
    code: "PKG-BOX-001",
    name: "Small Food Container",
    local_name: "กล่องอาหารเล็ก",
    description: "Disposable food container, 500ml",
    inventory_unit_id: "unit-001-pcs",
    inventory_unit_name: "Pieces",
    product_status_type: "active",
    product_item_group_id: "pig-005",
    is_used_in_recipe: false,
    is_sold_directly: false,
    barcode: "8850123456006",
    sku: "BOX-001",
    price_deviation_limit: 5.0,
    qty_deviation_limit: 50.0,
    note: "Packaging material",
    info: {
      supplier: "vendor-006",
      shelf_life: "Unlimited",
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

// =============== TB_PRODUCT CRUD FUNCTIONS ===============
export const tbProductCrud = {
  // Create new product
  create: (data: Omit<TbProduct, 'id' | 'created_at' | 'updated_at'>): TbProduct => {
    const newProduct: TbProduct = {
      id: generateUuid(),
      created_at: getCurrentTimestamp(),
      updated_at: getCurrentTimestamp(),
      ...data
    };
    mockTbProduct.push(newProduct);
    return newProduct;
  },

  // Find by ID
  findById: (id: string): TbProduct | null => {
    return mockTbProduct.find(product => product.id === id && !product.deleted_at) || null;
  },

  // Find by code
  findByCode: (code: string): TbProduct | null => {
    return mockTbProduct.find(product => product.code === code && !product.deleted_at) || null;
  },

  // Find by SKU
  findBySku: (sku: string): TbProduct | null => {
    return mockTbProduct.find(product => product.sku === sku && !product.deleted_at) || null;
  },

  // Find by barcode
  findByBarcode: (barcode: string): TbProduct | null => {
    return mockTbProduct.find(product => product.barcode === barcode && !product.deleted_at) || null;
  },

  // Find all active products
  findAllActive: (): TbProduct[] => {
    return mockTbProduct.filter(product => 
      !product.deleted_at && 
      product.product_status_type === 'active'
    );
  },

  // Find all products (including inactive)
  findAll: (): TbProduct[] => {
    return mockTbProduct.filter(product => !product.deleted_at);
  },

  // Search products by name, code, or description
  search: (query: string): TbProduct[] => {
    const lowerQuery = query.toLowerCase();
    return mockTbProduct.filter(product => 
      !product.deleted_at && 
      product.product_status_type === 'active' &&
      (product.name.toLowerCase().includes(lowerQuery) || 
       product.local_name?.toLowerCase().includes(lowerQuery) ||
       product.code.toLowerCase().includes(lowerQuery) ||
       product.description?.toLowerCase().includes(lowerQuery) ||
       product.sku?.toLowerCase().includes(lowerQuery))
    );
  },

  // Find by product item group
  findByItemGroup: (itemGroupId: string): TbProduct[] => {
    return mockTbProduct.filter(product => 
      !product.deleted_at && 
      product.product_status_type === 'active' &&
      product.product_item_group_id === itemGroupId
    );
  },

  // Find products used in recipes
  findRecipeProducts: (): TbProduct[] => {
    return mockTbProduct.filter(product => 
      !product.deleted_at && 
      product.product_status_type === 'active' &&
      product.is_used_in_recipe
    );
  },

  // Find products sold directly
  findDirectSaleProducts: (): TbProduct[] => {
    return mockTbProduct.filter(product => 
      !product.deleted_at && 
      product.product_status_type === 'active' &&
      product.is_sold_directly
    );
  },

  // Find by inventory unit
  findByInventoryUnit: (unitId: string): TbProduct[] => {
    return mockTbProduct.filter(product => 
      !product.deleted_at && 
      product.product_status_type === 'active' &&
      product.inventory_unit_id === unitId
    );
  },

  // Update product
  update: (id: string, data: Partial<TbProduct>, updated_by_id?: string): TbProduct | null => {
    const index = mockTbProduct.findIndex(product => product.id === id && !product.deleted_at);
    if (index === -1) return null;

    mockTbProduct[index] = {
      ...mockTbProduct[index],
      ...data,
      updated_at: getCurrentTimestamp(),
      updated_by_id: updated_by_id || null
    };
    return mockTbProduct[index];
  },

  // Soft delete product
  delete: (id: string, deleted_by_id?: string): boolean => {
    const index = mockTbProduct.findIndex(product => product.id === id && !product.deleted_at);
    if (index === -1) return false;

    mockTbProduct[index].deleted_at = getCurrentTimestamp();
    mockTbProduct[index].deleted_by_id = deleted_by_id || null;
    return true;
  },

  // Activate product
  activate: (id: string, updated_by_id?: string): TbProduct | null => {
    return tbProductCrud.update(id, { product_status_type: 'active' }, updated_by_id);
  },

  // Deactivate product
  deactivate: (id: string, updated_by_id?: string): TbProduct | null => {
    return tbProductCrud.update(id, { product_status_type: 'inactive' }, updated_by_id);
  },

  // Get product statistics
  getStats: () => {
    const allProducts = mockTbProduct.filter(product => !product.deleted_at);
    const activeProducts = allProducts.filter(product => product.product_status_type === 'active');
    const inactiveProducts = allProducts.filter(product => product.product_status_type === 'inactive');
    const recipeProducts = activeProducts.filter(product => product.is_used_in_recipe);
    const directSaleProducts = activeProducts.filter(product => product.is_sold_directly);
    
    return {
      total: allProducts.length,
      active: activeProducts.length,
      inactive: inactiveProducts.length,
      recipeProducts: recipeProducts.length,
      directSaleProducts: directSaleProducts.length,
      byInventoryUnit: activeProducts.reduce((acc, product) => {
        const unit = product.inventory_unit_name || 'Unknown';
        acc[unit] = (acc[unit] || 0) + 1;
        return acc;
      }, {} as Record<string, number>)
    };
  }
};
