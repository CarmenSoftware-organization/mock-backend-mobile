import { generateId, getCurrentTimestamp } from "@/libs/utils";

export interface Product {
  id: string;
  code: string;
  name: string;
  local_name: string;
  description: string | null;
  inventory_unit_id: string;
  inventory_unit_name: string;
  product_status_type: 'active' | 'inactive' | 'discontinued';
  product_item_group_id: string;
  is_used_in_recipe: boolean;
  is_sold_directly: boolean;
  barcode: string | null;
  sku: string | null;
  price_deviation_limit: string;
  qty_deviation_limit: string;
  note: string | null;
  info: any;
  dimension: any;
  created_at: string;
  created_by_id: string;
  updated_at: string;
  updated_by_id: string | null;
  deleted_at: string | null;
  deleted_by_id: string | null;
}

export const products: Product[] = [
  {
    id: "ed76f192-c1be-49a4-9f23-4a804c34e653",
    code: "10000001",
    name: "Beef Tenderloin",
    local_name: "เนื้อสันใน",
    description: null,
    inventory_unit_id: "a944b693-3a71-4275-9d6a-ddca551533d7",
    inventory_unit_name: "KG",
    product_status_type: "active",
    product_item_group_id: "512a270b-9450-4b6b-b8e2-7d803486be61",
    is_used_in_recipe: true,
    is_sold_directly: false,
    barcode: null,
    sku: null,
    price_deviation_limit: "0.00000",
    qty_deviation_limit: "0.00000",
    note: null,
    info: null,
    dimension: null,
    created_at: "2025-07-29T01:05:40.575Z",
    created_by_id: "1bfdb891-58ee-499c-8115-34a964de8122",
    updated_at: "2025-07-29T01:05:40.576Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "918959fb-cce8-4a56-9382-2b3dbf0de9cb",
    code: "10000002",
    name: "Ground Beef A",
    local_name: "เนื้อบด A",
    description: null,
    inventory_unit_id: "a944b693-3a71-4275-9d6a-ddca551533d7",
    inventory_unit_name: "KG",
    product_status_type: "active",
    product_item_group_id: "512a270b-9450-4b6b-b8e2-7d803486be61",
    is_used_in_recipe: true,
    is_sold_directly: false,
    barcode: null,
    sku: null,
    price_deviation_limit: "0.00000",
    qty_deviation_limit: "0.00000",
    note: null,
    info: null,
    dimension: null,
    created_at: "2025-07-29T01:05:40.624Z",
    created_by_id: "1bfdb891-58ee-499c-8115-34a964de8122",
    updated_at: "2025-07-29T01:05:40.625Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "d013f929-e797-4120-9823-112a33f3397d",
    code: "10000003",
    name: "Beef Tenderloin Grade A",
    local_name: "เนื้อสันในโคขุนแต่ง เกรด A",
    description: null,
    inventory_unit_id: "a944b693-3a71-4275-9d6a-ddca551533d7",
    inventory_unit_name: "KG",
    product_status_type: "active",
    product_item_group_id: "512a270b-9450-4b6b-b8e2-7d803486be61",
    is_used_in_recipe: true,
    is_sold_directly: false,
    barcode: null,
    sku: null,
    price_deviation_limit: "0.00000",
    qty_deviation_limit: "0.00000",
    note: null,
    info: null,
    dimension: null,
    created_at: "2025-07-29T01:05:40.663Z",
    created_by_id: "1bfdb891-58ee-499c-8115-34a964de8122",
    updated_at: "2025-07-29T01:05:40.665Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "c2afa2b3-4b3e-4845-a486-079193faf90d",
    code: "10000004",
    name: "Beef Tenderloin Grade AAA",
    local_name: "เนื้อสันในโคขุนแต่ง เกรด AAA",
    description: null,
    inventory_unit_id: "a944b693-3a71-4275-9d6a-ddca551533d7",
    inventory_unit_name: "KG",
    product_status_type: "active",
    product_item_group_id: "512a270b-9450-4b6b-b8e2-7d803486be61",
    is_used_in_recipe: true,
    is_sold_directly: false,
    barcode: null,
    sku: null,
    price_deviation_limit: "0.00000",
    qty_deviation_limit: "0.00000",
    note: null,
    info: null,
    dimension: null,
    created_at: "2025-07-29T01:05:40.699Z",
    created_by_id: "1bfdb891-58ee-499c-8115-34a964de8122",
    updated_at: "2025-07-29T01:05:40.700Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "7d28a000-a54f-4c79-8139-cd0dee2f136a",
    code: "10000005",
    name: "Beef Hip Top",
    local_name: "เนื้อสะโพกโคขุน",
    description: null,
    inventory_unit_id: "a944b693-3a71-4275-9d6a-ddca551533d7",
    inventory_unit_name: "KG",
    product_status_type: "active",
    product_item_group_id: "512a270b-9450-4b6b-b8e2-7d803486be61",
    is_used_in_recipe: true,
    is_sold_directly: false,
    barcode: null,
    sku: null,
    price_deviation_limit: "0.00000",
    qty_deviation_limit: "0.00000",
    note: null,
    info: null,
    dimension: null,
    created_at: "2025-07-29T01:05:40.732Z",
    created_by_id: "1bfdb891-58ee-499c-8115-34a964de8122",
    updated_at: "2025-07-29T01:05:40.733Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "089be085-c5f9-4f00-b48d-9508f3ae9e7c",
    code: "10000006",
    name: "Beef Burger 150G.",
    local_name: "เบอร์เกอร์เนื้อ 150กรัม",
    description: null,
    inventory_unit_id: "a944b693-3a71-4275-9d6a-ddca551533d7",
    inventory_unit_name: "KG",
    product_status_type: "active",
    product_item_group_id: "512a270b-9450-4b6b-b8e2-7d803486be61",
    is_used_in_recipe: true,
    is_sold_directly: false,
    barcode: null,
    sku: null,
    price_deviation_limit: "0.00000",
    qty_deviation_limit: "0.00000",
    note: null,
    info: null,
    dimension: null,
    created_at: "2025-07-29T01:05:40.768Z",
    created_by_id: "1bfdb891-58ee-499c-8115-34a964de8122",
    updated_at: "2025-07-29T01:05:40.769Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "faf29e8b-2a5e-4e59-b598-7c4514c1c3ca",
    code: "10010001",
    name: "Ground Pork",
    local_name: "หมูบด",
    description: null,
    inventory_unit_id: "a944b693-3a71-4275-9d6a-ddca551533d7",
    inventory_unit_name: "KG",
    product_status_type: "active",
    product_item_group_id: "2b4fe773-83e4-433d-a341-a5a2a64b28a0",
    is_used_in_recipe: true,
    is_sold_directly: false,
    barcode: null,
    sku: null,
    price_deviation_limit: "0.00000",
    qty_deviation_limit: "0.00000",
    note: null,
    info: null,
    dimension: null,
    created_at: "2025-07-29T01:05:40.802Z",
    created_by_id: "1bfdb891-58ee-499c-8115-34a964de8122",
    updated_at: "2025-07-29T01:05:40.803Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "5efc9c8e-2fe2-48e0-8fae-f4e82067c25d",
    code: "10010002",
    name: "Pork Loin",
    local_name: "หมูสันนอก",
    description: null,
    inventory_unit_id: "a944b693-3a71-4275-9d6a-ddca551533d7",
    inventory_unit_name: "KG",
    product_status_type: "active",
    product_item_group_id: "2b4fe773-83e4-433d-a341-a5a2a64b28a0",
    is_used_in_recipe: true,
    is_sold_directly: false,
    barcode: null,
    sku: null,
    price_deviation_limit: "0.00000",
    qty_deviation_limit: "0.00000",
    note: null,
    info: null,
    dimension: null,
    created_at: "2025-07-29T01:05:40.833Z",
    created_by_id: "1bfdb891-58ee-499c-8115-34a964de8122",
    updated_at: "2025-07-29T01:05:40.834Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "98b28879-614f-4c18-ba42-ba7ba6b90a73",
    code: "10010003",
    name: "Pork Top Round",
    local_name: "หมูสะโพก",
    description: null,
    inventory_unit_id: "a944b693-3a71-4275-9d6a-ddca551533d7",
    inventory_unit_name: "KG",
    product_status_type: "active",
    product_item_group_id: "2b4fe773-83e4-433d-a341-a5a2a64b28a0",
    is_used_in_recipe: true,
    is_sold_directly: false,
    barcode: null,
    sku: null,
    price_deviation_limit: "0.00000",
    qty_deviation_limit: "0.00000",
    note: null,
    info: null,
    dimension: null,
    created_at: "2025-07-29T01:05:40.869Z",
    created_by_id: "1bfdb891-58ee-499c-8115-34a964de8122",
    updated_at: "2025-07-29T01:05:40.870Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "b15e179c-6851-4ef3-a20e-d2b9cca1a887",
    code: "10010004",
    name: "Pork Top Round Slice",
    local_name: "หมูสะโพกหั่นชิ้น",
    description: null,
    inventory_unit_id: "a944b693-3a71-4275-9d6a-ddca551533d7",
    inventory_unit_name: "KG",
    product_status_type: "active",
    product_item_group_id: "2b4fe773-83e4-433d-a341-a5a2a64b28a0",
    is_used_in_recipe: true,
    is_sold_directly: false,
    barcode: null,
    sku: null,
    price_deviation_limit: "0.00000",
    qty_deviation_limit: "0.00000",
    note: null,
    info: null,
    dimension: null,
    created_at: "2025-07-29T01:05:40.902Z",
    created_by_id: "1bfdb891-58ee-499c-8115-34a964de8122",
    updated_at: "2025-07-29T01:05:40.903Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null
  }
];

// CREATE - สร้าง Product ใหม่
export const createProduct = (productData: Omit<Product, 'id' | 'created_at' | 'updated_at'>): Product => {
  const newProduct: Product = {
    ...productData,
    id: generateId(),
    created_at: getCurrentTimestamp(),
    updated_at: getCurrentTimestamp()
  };
  
  products.push(newProduct);
  return newProduct;
};

// READ - อ่าน Product ทั้งหมด
export const getAllProducts = (): Product[] => {
  return [...products];
};

// READ - อ่าน Product ตาม ID
export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

// READ - อ่าน Product ตาม code
export const getProductByCode = (code: string): Product | undefined => {
  return products.find(product => product.code === code);
};

// READ - อ่าน Product ตาม name
export const getProductByName = (name: string): Product[] => {
  return products.filter(product => 
    product.name.toLowerCase().includes(name.toLowerCase()) ||
    (product.local_name && product.local_name.toLowerCase().includes(name.toLowerCase()))
  );
};

// READ - อ่าน Product ตาม product_status_type
export const getProductsByStatus = (status: 'active' | 'inactive' | 'discontinued'): Product[] => {
  return products.filter(product => product.product_status_type === status);
};

// READ - อ่าน Product ตาม product_item_group_id
export const getProductsByItemGroup = (itemGroupId: string): Product[] => {
  return products.filter(product => product.product_item_group_id === itemGroupId);
};

// READ - อ่าน Product ตาม inventory_unit_id
export const getProductsByInventoryUnit = (unitId: string): Product[] => {
  return products.filter(product => product.inventory_unit_id === unitId);
};

// READ - อ่าน Product ที่ใช้ใน recipe
export const getProductsUsedInRecipe = (): Product[] => {
  return products.filter(product => product.is_used_in_recipe);
};

// READ - อ่าน Product ที่ขายโดยตรง
export const getProductsSoldDirectly = (): Product[] => {
  return products.filter(product => product.is_sold_directly);
};

// READ - อ่าน Product ที่มี barcode
export const getProductsWithBarcode = (): Product[] => {
  return products.filter(product => product.barcode !== null);
};

// READ - อ่าน Product ที่มี SKU
export const getProductsWithSKU = (): Product[] => {
  return products.filter(product => product.sku !== null);
};

// UPDATE - อัปเดต Product
export const updateProduct = (id: string, updateData: Partial<Omit<Product, 'id' | 'created_at' | 'created_by_id'>>): Product | null => {
  const index = products.findIndex(product => product.id === id);
  
  if (index === -1) {
    return null;
  }
  
  products[index] = {
    ...products[index],
    ...updateData,
    updated_at: getCurrentTimestamp()
  };
  
  return products[index];
};

// UPDATE - อัปเดต Product status
export const updateProductStatus = (id: string, status: 'active' | 'inactive' | 'discontinued'): Product | null => {
  return updateProduct(id, { product_status_type: status });
};

// UPDATE - อัปเดต Product price deviation limit
export const updateProductPriceDeviationLimit = (id: string, limit: string): Product | null => {
  return updateProduct(id, { price_deviation_limit: limit });
};

// UPDATE - อัปเดต Product quantity deviation limit
export const updateProductQtyDeviationLimit = (id: string, limit: string): Product | null => {
  return updateProduct(id, { qty_deviation_limit: limit });
};

// UPDATE - อัปเดต Product barcode
export const updateProductBarcode = (id: string, barcode: string): Product | null => {
  return updateProduct(id, { barcode });
};

// UPDATE - อัปเดต Product SKU
export const updateProductSKU = (id: string, sku: string): Product | null => {
  return updateProduct(id, { sku });
};

// DELETE - ลบ Product (soft delete)
export const deleteProduct = (id: string, deletedById: string): boolean => {
  const index = products.findIndex(product => product.id === id);
  
  if (index === -1) {
    return false;
  }
  
  products[index] = {
    ...products[index],
    deleted_at: getCurrentTimestamp(),
    deleted_by_id: deletedById
  };
  
  return true;
};

// DELETE - ลบ Product แบบถาวร
export const hardDeleteProduct = (id: string): boolean => {
  const index = products.findIndex(product => product.id === id);
  
  if (index === -1) {
    return false;
  }
  
  products.splice(index, 1);
  return true;
};

// DELETE - ลบ Product ตาม product_item_group_id
export const deleteProductsByItemGroup = (itemGroupId: string, deletedById: string): number => {
  let deletedCount = 0;
  
  products.forEach(product => {
    if (product.product_item_group_id === itemGroupId && !product.deleted_at) {
      product.deleted_at = getCurrentTimestamp();
      product.deleted_by_id = deletedById;
      deletedCount++;
    }
  });
  
  return deletedCount;
};

// Utility function สำหรับล้างข้อมูลทั้งหมด (ใช้สำหรับ testing)
export const clearAllProducts = (): void => {
  products.length = 0;
};

// Utility function สำหรับนับจำนวน Product
export const getProductCount = (): number => {
  return products.length;
};

// Utility function สำหรับนับจำนวน Product ที่ active
export const getActiveProductCount = (): number => {
  return products.filter(product => product.product_status_type === 'active').length;
};

// Utility function สำหรับค้นหา Product แบบ advanced search
export const searchProducts = (searchCriteria: {
  code?: string;
  name?: string;
  local_name?: string;
  product_status_type?: string;
  product_item_group_id?: string;
  inventory_unit_id?: string;
  is_used_in_recipe?: boolean;
  is_sold_directly?: boolean;
  has_barcode?: boolean;
  has_sku?: boolean;
}): Product[] => {
  return products.filter(product => {
    if (searchCriteria.code && !product.code.toLowerCase().includes(searchCriteria.code.toLowerCase())) {
      return false;
    }
    
    if (searchCriteria.name && !product.name.toLowerCase().includes(searchCriteria.name.toLowerCase())) {
      return false;
    }
    
    if (searchCriteria.local_name && product.local_name && !product.local_name.toLowerCase().includes(searchCriteria.local_name.toLowerCase())) {
      return false;
    }
    
    if (searchCriteria.product_status_type && product.product_status_type !== searchCriteria.product_status_type) {
      return false;
    }
    
    if (searchCriteria.product_item_group_id && product.product_item_group_id !== searchCriteria.product_item_group_id) {
      return false;
    }
    
    if (searchCriteria.inventory_unit_id && product.inventory_unit_id !== searchCriteria.inventory_unit_id) {
      return false;
    }
    
    if (searchCriteria.is_used_in_recipe !== undefined && product.is_used_in_recipe !== searchCriteria.is_used_in_recipe) {
      return false;
    }
    
    if (searchCriteria.is_sold_directly !== undefined && product.is_sold_directly !== searchCriteria.is_sold_directly) {
      return false;
    }
    
    if (searchCriteria.has_barcode !== undefined) {
      const hasBarcode = product.barcode !== null;
      if (hasBarcode !== searchCriteria.has_barcode) {
        return false;
      }
    }
    
    if (searchCriteria.has_sku !== undefined) {
      const hasSKU = product.sku !== null;
      if (hasSKU !== searchCriteria.has_sku) {
        return false;
      }
    }
    
    return true;
  });
};

// Utility function สำหรับตรวจสอบ code ซ้ำ
export const isProductCodeExists = (code: string): boolean => {
  return products.some(product => product.code === code);
};

// Utility function สำหรับตรวจสอบ barcode ซ้ำ
export const isProductBarcodeExists = (barcode: string): boolean => {
  return products.some(product => product.barcode === barcode);
};

// Utility function สำหรับตรวจสอบ SKU ซ้ำ
export const isProductSKUExists = (sku: string): boolean => {
  return products.some(product => product.sku === sku);
};
