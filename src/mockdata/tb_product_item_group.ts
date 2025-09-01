import { generateId, getCurrentTimestamp } from "@/libs/utils";

export interface ProductItemGroup {
  id: string;
  product_subcategory_id: string;
  code: string;
  name: string;
  description: string | null;
  price_deviation_limit: string;
  qty_deviation_limit: string;
  is_used_in_recipe: boolean;
  is_sold_directly: boolean;
  is_active: boolean;
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

export const productItemGroups: ProductItemGroup[] = [
  {
    id: "550e8400-e29b-41d4-a716-446655440001",
    product_subcategory_id: "550e8400-e29b-41d4-a716-446655440002",
    code: "LAPTOP",
    name: "Laptops",
    description: "Portable computer devices",
    price_deviation_limit: "15.00",
    qty_deviation_limit: "3.00",
    is_used_in_recipe: false,
    is_sold_directly: true,
    is_active: true,
    note: "Laptop category",
    info: { type: "Computers", warranty: "2 years" },
    dimension: { department: "Sales", region: "All" },
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440002",
    product_subcategory_id: "550e8400-e29b-41d4-a716-446655440003",
    code: "SMART",
    name: "Smartphones",
    description: "Mobile communication devices",
    price_deviation_limit: "20.00",
    qty_deviation_limit: "2.00",
    is_used_in_recipe: false,
    is_sold_directly: true,
    is_active: true,
    note: "Smartphone category",
    info: { type: "Mobile", warranty: "1 year" },
    dimension: { department: "Sales", region: "All" },
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "1bfdb891-58ee-499c-8115-34a964de8122",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440003",
    product_subcategory_id: "550e8400-e29b-41d4-a716-446655440005",
    code: "TSHIRT",
    name: "T-Shirts",
    description: "Casual cotton shirts",
    price_deviation_limit: "25.00",
    qty_deviation_limit: "10.00",
    is_used_in_recipe: false,
    is_sold_directly: true,
    is_active: true,
    note: "T-shirt category",
    info: { type: "Clothing", return_policy: "30 days" },
    dimension: { department: "Sales", region: "All" },
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "3c5280a7-492e-421d-b739-7447455ce99e",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440004",
    product_subcategory_id: "550e8400-e29b-41d4-a716-446655440005",
    code: "JEANS",
    name: "Jeans",
    description: "Denim pants and trousers",
    price_deviation_limit: "20.00",
    qty_deviation_limit: "8.00",
    is_used_in_recipe: false,
    is_sold_directly: true,
    is_active: true,
    note: "Jeans category",
    info: { type: "Clothing", return_policy: "30 days" },
    dimension: { department: "Sales", region: "All" },
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440005",
    product_subcategory_id: "550e8400-e29b-41d4-a716-446655440001",
    code: "ACC",
    name: "Accessories",
    description: "Computer and phone accessories",
    price_deviation_limit: "30.00",
    qty_deviation_limit: "15.00",
    is_used_in_recipe: false,
    is_sold_directly: true,
    is_active: false,
    note: "Accessories category",
    info: { type: "Accessories", warranty: "6 months" },
    dimension: { department: "Sales", region: "All" },
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "1bfdb891-58ee-499c-8115-34a964de8122",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null
  }
];

// CREATE - สร้าง ProductItemGroup ใหม่
export const createProductItemGroup = (productItemGroupData: Omit<ProductItemGroup, 'id' | 'created_at' | 'updated_at'>): ProductItemGroup => {
  const newProductItemGroup: ProductItemGroup = {
    ...productItemGroupData,
    id: generateId(),
    created_at: getCurrentTimestamp(),
    updated_at: getCurrentTimestamp()
  };
  
  productItemGroups.push(newProductItemGroup);
  return newProductItemGroup;
};

// READ - อ่าน ProductItemGroup ทั้งหมด
export const getAllProductItemGroups = (): ProductItemGroup[] => {
  return [...productItemGroups];
};

// READ - อ่าน ProductItemGroup ตาม ID
export const getProductItemGroupById = (id: string): ProductItemGroup | undefined => {
  return productItemGroups.find(group => group.id === id);
};

// READ - อ่าน ProductItemGroup ตาม name
export const getProductItemGroupByName = (name: string): ProductItemGroup | undefined => {
  return productItemGroups.find(group => group.name === name);
};

// READ - อ่าน ProductItemGroup ตาม product_subcategory_id
export const getProductItemGroupsBySubcategory = (subcategoryId: string): ProductItemGroup[] => {
  return productItemGroups.filter(group => group.product_subcategory_id === subcategoryId);
};

// READ - อ่าน ProductItemGroup ที่ active
export const getActiveProductItemGroups = (): ProductItemGroup[] => {
  return productItemGroups.filter(group => group.is_active);
};

// READ - อ่าน ProductItemGroup ที่ inactive
export const getInactiveProductItemGroups = (): ProductItemGroup[] => {
  return productItemGroups.filter(group => !group.is_active);
};

// READ - อ่าน ProductItemGroup ตาม description
export const getProductItemGroupsByDescription = (description: string): ProductItemGroup[] => {
  return productItemGroups.filter(group => 
    group.description && group.description.toLowerCase().includes(description.toLowerCase())
  );
};

// READ - อ่าน ProductItemGroup ที่ไม่มี subcategory
export const getProductItemGroupsWithoutSubcategory = (): ProductItemGroup[] => {
  return productItemGroups.filter(group => group.product_subcategory_id === null);
};

// READ - ค้นหา ProductItemGroup แบบ fuzzy search
export const searchProductItemGroups = (searchTerm: string): ProductItemGroup[] => {
  const lowerSearchTerm = searchTerm.toLowerCase();
  return productItemGroups.filter(group => 
    group.name.toLowerCase().includes(lowerSearchTerm) ||
    (group.description && group.description.toLowerCase().includes(lowerSearchTerm))
  );
};

// UPDATE - อัปเดต ProductItemGroup
export const updateProductItemGroup = (id: string, updateData: Partial<Omit<ProductItemGroup, 'id' | 'created_at' | 'created_by_id'>>): ProductItemGroup | null => {
  const index = productItemGroups.findIndex(group => group.id === id);
  
  if (index === -1) {
    return null;
  }
  
  productItemGroups[index] = {
    ...productItemGroups[index],
    ...updateData,
    updated_at: getCurrentTimestamp()
  };
  
  return productItemGroups[index];
};

// UPDATE - อัปเดต ProductItemGroup name
export const updateProductItemGroupName = (id: string, name: string): ProductItemGroup | null => {
  return updateProductItemGroup(id, { name });
};

// UPDATE - อัปเดต ProductItemGroup description
export const updateProductItemGroupDescription = (id: string, description: string): ProductItemGroup | null => {
  return updateProductItemGroup(id, { description });
};

// UPDATE - อัปเดต ProductItemGroup product_subcategory_id
export const updateProductItemGroupSubcategory = (id: string, subcategoryId: string): ProductItemGroup | null => {
  return updateProductItemGroup(id, { product_subcategory_id: subcategoryId });
};

// UPDATE - อัปเดต ProductItemGroup active status
export const updateProductItemGroupActiveStatus = (id: string, isActive: boolean): ProductItemGroup | null => {
  return updateProductItemGroup(id, { is_active: isActive });
};

// DELETE - ลบ ProductItemGroup (soft delete)
export const deleteProductItemGroup = (id: string, deletedById: string): boolean => {
  const index = productItemGroups.findIndex(group => group.id === id);
  
  if (index === -1) {
    return false;
  }
  
  productItemGroups[index] = {
    ...productItemGroups[index],
    deleted_at: getCurrentTimestamp(),
    deleted_by_id: deletedById
  };
  
  return true;
};

// DELETE - ลบ ProductItemGroup แบบถาวร
export const hardDeleteProductItemGroup = (id: string): boolean => {
  const index = productItemGroups.findIndex(group => group.id === id);
  
  if (index === -1) {
    return false;
  }
  
  productItemGroups.splice(index, 1);
  return true;
};

// DELETE - ลบ ProductItemGroup ตาม name
export const deleteProductItemGroupByName = (name: string, deletedById: string): boolean => {
  const group = getProductItemGroupByName(name);
  if (group) {
    return deleteProductItemGroup(group.id, deletedById);
  }
  return false;
};

// DELETE - ลบ ProductItemGroup ตาม product_subcategory_id
export const deleteProductItemGroupsBySubcategory = (subcategoryId: string, deletedById: string): number => {
  let deletedCount = 0;
  
  productItemGroups.forEach(group => {
    if (group.product_subcategory_id === subcategoryId && !group.deleted_at) {
      group.deleted_at = getCurrentTimestamp();
      group.deleted_by_id = deletedById;
      deletedCount++;
    }
  });
  
  return deletedCount;
};

// DELETE - ลบ ProductItemGroup ที่ inactive
export const deleteInactiveProductItemGroups = (deletedById: string): number => {
  let deletedCount = 0;
  
  productItemGroups.forEach(group => {
    if (!group.is_active && !group.deleted_at) {
      group.deleted_at = getCurrentTimestamp();
      group.deleted_by_id = deletedById;
      deletedCount++;
    }
  });
  
  return deletedCount;
};

// Utility function สำหรับล้างข้อมูลทั้งหมด (ใช้สำหรับ testing)
export const clearAllProductItemGroups = (): void => {
  productItemGroups.length = 0;
};

// Utility function สำหรับนับจำนวน ProductItemGroup
export const getProductItemGroupCount = (): number => {
  return productItemGroups.length;
};

// Utility function สำหรับนับจำนวน ProductItemGroup ที่ active
export const getActiveProductItemGroupCount = (): number => {
  return productItemGroups.filter(group => group.is_active).length;
};

// Utility function สำหรับนับจำนวน ProductItemGroup ที่ inactive
export const getInactiveProductItemGroupCount = (): number => {
  return productItemGroups.filter(group => !group.is_active).length;
};

// Utility function สำหรับนับจำนวน ProductItemGroup ตาม product_subcategory_id
export const getProductItemGroupCountBySubcategory = (subcategoryId: string): number => {
  return productItemGroups.filter(group => group.product_subcategory_id === subcategoryId).length;
};

// Utility function สำหรับตรวจสอบ ProductItemGroup name ซ้ำ
export const isProductItemGroupNameExists = (name: string): boolean => {
  return productItemGroups.some(group => group.name === name);
};

// Utility function สำหรับตรวจสอบ ProductItemGroup ที่ถูกลบแล้ว
export const getDeletedProductItemGroups = (): ProductItemGroup[] => {
  return productItemGroups.filter(group => group.deleted_at !== null);
};

// Utility function สำหรับกู้คืน ProductItemGroup ที่ถูกลบแล้ว
export const restoreProductItemGroup = (id: string): boolean => {
  const index = productItemGroups.findIndex(group => group.id === id);
  
  if (index === -1) {
    return false;
  }
  
  if (productItemGroups[index].deleted_at) {
    productItemGroups[index] = {
      ...productItemGroups[index],
      deleted_at: null,
      deleted_by_id: null
    };
    return true;
  }
  
  return false;
};

// Utility function สำหรับค้นหา ProductItemGroup แบบ advanced search
export const searchProductItemGroupsAdvanced = (searchCriteria: {
  name?: string;
  description?: string;
  product_subcategory_id?: string;
  is_active?: boolean;
  has_subcategory?: boolean;
}): ProductItemGroup[] => {
  return productItemGroups.filter(group => {
    if (searchCriteria.name && !group.name.toLowerCase().includes(searchCriteria.name.toLowerCase())) {
      return false;
    }
    
    if (searchCriteria.description && group.description && !group.description.toLowerCase().includes(searchCriteria.description.toLowerCase())) {
      return false;
    }
    
    if (searchCriteria.product_subcategory_id && group.product_subcategory_id !== searchCriteria.product_subcategory_id) {
      return false;
    }
    
    if (searchCriteria.is_active !== undefined && group.is_active !== searchCriteria.is_active) {
      return false;
    }
    
    if (searchCriteria.has_subcategory !== undefined) {
      const hasSubcategory = group.product_subcategory_id !== null;
      if (hasSubcategory !== searchCriteria.has_subcategory) {
        return false;
      }
    }
    
    return true;
  });
};
