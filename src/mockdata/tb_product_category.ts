import { generateId, getCurrentTimestamp } from "@/libs/utils";

export interface ProductCategory {
  id: string;
  code: string;
  name: string;
  description: string | null;
  is_active: boolean;
  price_deviation_limit: string;
  qty_deviation_limit: string;
  is_used_in_recipe: boolean;
  is_sold_directly: boolean;
  note: string | null;
  info: any;
  dimension: any;
  created_at: string;
  created_by_id: string;
  updated_at: string;
  updated_by_id: string | null;
  deleted_at: string | null;
  deleted_by_id: string | null;
  parent_id: string | null;
  sort_order: number;
}

export const productCategories: ProductCategory[] = [
  {
    id: "550e8400-e29b-41d4-a716-446655440001",
    code: "ELEC",
    name: "Electronics",
    description: "Electronic devices and accessories",
    is_active: true,
    price_deviation_limit: "10.00",
    qty_deviation_limit: "5.00",
    is_used_in_recipe: false,
    is_sold_directly: true,
    note: "Electronic category",
    info: { type: "Electronics", warranty: "1 year" },
    dimension: { department: "Sales", region: "All" },
    parent_id: null,
    sort_order: 1,
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440002",
    code: "COMP",
    name: "Computers",
    description: "Desktop and laptop computers",
    is_active: true,
    price_deviation_limit: "15.00",
    qty_deviation_limit: "3.00",
    is_used_in_recipe: false,
    is_sold_directly: true,
    note: "Computer subcategory",
    info: { type: "Computers", warranty: "2 years" },
    dimension: { department: "Sales", region: "All" },
    parent_id: "550e8400-e29b-41d4-a716-446655440001",
    sort_order: 1,
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "1bfdb891-58ee-499c-8115-34a964de8122",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440003",
    code: "MOBILE",
    name: "Mobile Phones",
    description: "Smartphones and mobile devices",
    is_active: true,
    price_deviation_limit: "20.00",
    qty_deviation_limit: "2.00",
    is_used_in_recipe: false,
    is_sold_directly: true,
    note: "Mobile subcategory",
    info: { type: "Mobile", warranty: "1 year" },
    dimension: { department: "Sales", region: "All" },
    parent_id: "550e8400-e29b-41d4-a716-446655440001",
    sort_order: 2,
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "3c5280a7-492e-421d-b739-7447455ce99e",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440004",
    code: "CLOTH",
    name: "Clothing",
    description: "Apparel and fashion items",
    is_active: true,
    price_deviation_limit: "25.00",
    qty_deviation_limit: "10.00",
    is_used_in_recipe: false,
    is_sold_directly: true,
    note: "Clothing category",
    info: { type: "Clothing", return_policy: "30 days" },
    dimension: { department: "Sales", region: "All" },
    parent_id: null,
    sort_order: 2,
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440005",
    code: "MEN",
    name: "Men's Clothing",
    description: "Clothing for men",
    is_active: true,
    price_deviation_limit: "20.00",
    qty_deviation_limit: "8.00",
    is_used_in_recipe: false,
    is_sold_directly: true,
    note: "Men's clothing subcategory",
    info: { type: "Men's Clothing", return_policy: "30 days" },
    dimension: { department: "Sales", region: "All" },
    parent_id: "550e8400-e29b-41d4-a716-446655440004",
    sort_order: 1,
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "1bfdb891-58ee-499c-8115-34a964de8122",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null
  }
];

// CREATE - สร้าง ProductCategory ใหม่
export const createProductCategory = (productCategoryData: Omit<ProductCategory, 'id' | 'created_at' | 'updated_at'>): ProductCategory => {
  const newProductCategory: ProductCategory = {
    ...productCategoryData,
    id: generateId(),
    created_at: getCurrentTimestamp(),
    updated_at: getCurrentTimestamp()
  };
  
  productCategories.push(newProductCategory);
  return newProductCategory;
};

// READ - อ่าน ProductCategory ทั้งหมด
export const getAllProductCategories = (): ProductCategory[] => {
  return [...productCategories];
};

// READ - อ่าน ProductCategory ตาม ID
export const getProductCategoryById = (id: string): ProductCategory | undefined => {
  return productCategories.find(category => category.id === id);
};

// READ - อ่าน ProductCategory ตาม name
export const getProductCategoryByName = (name: string): ProductCategory | undefined => {
  return productCategories.find(category => category.name === name);
};

// READ - อ่าน ProductCategory ตาม parent_id
export const getProductCategoriesByParent = (parentId: string): ProductCategory[] => {
  return productCategories.filter(category => category.parent_id === parentId);
};

// READ - อ่าน ProductCategory ที่เป็น root (ไม่มี parent)
export const getRootProductCategories = (): ProductCategory[] => {
  return productCategories.filter(category => category.parent_id === null);
};

// READ - อ่าน ProductCategory ที่ active
export const getActiveProductCategories = (): ProductCategory[] => {
  return productCategories.filter(category => category.is_active);
};

// READ - อ่าน ProductCategory ที่ inactive
export const getInactiveProductCategories = (): ProductCategory[] => {
  return productCategories.filter(category => !category.is_active);
};

// READ - อ่าน ProductCategory ตาม description
export const getProductCategoriesByDescription = (description: string): ProductCategory[] => {
  return productCategories.filter(category => 
    category.description && category.description.toLowerCase().includes(description.toLowerCase())
  );
};

// READ - อ่าน ProductCategory ตาม sort_order
export const getProductCategoriesBySortOrder = (sortOrder: number): ProductCategory[] => {
  return productCategories.filter(category => category.sort_order === sortOrder);
};

// READ - อ่าน ProductCategory ที่มี children
export const getProductCategoriesWithChildren = (): ProductCategory[] => {
  return productCategories.filter(category => 
    productCategories.some(child => child.parent_id === category.id)
  );
};

// READ - อ่าน ProductCategory ที่ไม่มี children (leaf nodes)
export const getLeafProductCategories = (): ProductCategory[] => {
  return productCategories.filter(category => 
    !productCategories.some(child => child.parent_id === category.id)
  );
};

// READ - ค้นหา ProductCategory แบบ fuzzy search
export const searchProductCategories = (searchTerm: string): ProductCategory[] => {
  const lowerSearchTerm = searchTerm.toLowerCase();
  return productCategories.filter(category => 
    category.name.toLowerCase().includes(lowerSearchTerm) ||
    (category.description && category.description.toLowerCase().includes(lowerSearchTerm))
  );
};

// UPDATE - อัปเดต ProductCategory
export const updateProductCategory = (id: string, updateData: Partial<Omit<ProductCategory, 'id' | 'created_at' | 'created_by_id'>>): ProductCategory | null => {
  const index = productCategories.findIndex(category => category.id === id);
  
  if (index === -1) {
    return null;
  }
  
  productCategories[index] = {
    ...productCategories[index],
    ...updateData,
    updated_at: getCurrentTimestamp()
  };
  
  return productCategories[index];
};

// UPDATE - อัปเดต ProductCategory name
export const updateProductCategoryName = (id: string, name: string): ProductCategory | null => {
  return updateProductCategory(id, { name });
};

// UPDATE - อัปเดต ProductCategory description
export const updateProductCategoryDescription = (id: string, description: string): ProductCategory | null => {
  return updateProductCategory(id, { description });
};

// UPDATE - อัปเดต ProductCategory parent_id
export const updateProductCategoryParent = (id: string, parentId: string | null): ProductCategory | null => {
  return updateProductCategory(id, { parent_id: parentId });
};

// UPDATE - อัปเดต ProductCategory active status
export const updateProductCategoryActiveStatus = (id: string, isActive: boolean): ProductCategory | null => {
  return updateProductCategory(id, { is_active: isActive });
};

// UPDATE - อัปเดต ProductCategory sort_order
export const updateProductCategorySortOrder = (id: string, sortOrder: number): ProductCategory | null => {
  return updateProductCategory(id, { sort_order: sortOrder });
};

// DELETE - ลบ ProductCategory (soft delete)
export const deleteProductCategory = (id: string, deletedById: string): boolean => {
  const index = productCategories.findIndex(category => category.id === id);
  
  if (index === -1) {
    return false;
  }
  
  productCategories[index] = {
    ...productCategories[index],
    deleted_at: getCurrentTimestamp(),
    deleted_by_id: deletedById
  };
  
  return true;
};

// DELETE - ลบ ProductCategory แบบถาวร
export const hardDeleteProductCategory = (id: string): boolean => {
  const index = productCategories.findIndex(category => category.id === id);
  
  if (index === -1) {
    return false;
  }
  
  productCategories.splice(index, 1);
  return true;
};

// DELETE - ลบ ProductCategory ตาม name
export const deleteProductCategoryByName = (name: string, deletedById: string): boolean => {
  const category = getProductCategoryByName(name);
  if (category) {
    return deleteProductCategory(category.id, deletedById);
  }
  return false;
};

// DELETE - ลบ ProductCategory ตาม parent_id
export const deleteProductCategoriesByParent = (parentId: string, deletedById: string): number => {
  let deletedCount = 0;
  
  productCategories.forEach(category => {
    if (category.parent_id === parentId && !category.deleted_at) {
      category.deleted_at = getCurrentTimestamp();
      category.deleted_by_id = deletedById;
      deletedCount++;
    }
  });
  
  return deletedCount;
};

// DELETE - ลบ ProductCategory ที่ inactive
export const deleteInactiveProductCategories = (deletedById: string): number => {
  let deletedCount = 0;
  
  productCategories.forEach(category => {
    if (!category.is_active && !category.deleted_at) {
      category.deleted_at = getCurrentTimestamp();
      category.deleted_by_id = deletedById;
      deletedCount++;
    }
  });
  
  return deletedCount;
};

// Utility function สำหรับล้างข้อมูลทั้งหมด (ใช้สำหรับ testing)
export const clearAllProductCategories = (): void => {
  productCategories.length = 0;
};

// Utility function สำหรับนับจำนวน ProductCategory
export const getProductCategoryCount = (): number => {
  return productCategories.length;
};

// Utility function สำหรับนับจำนวน ProductCategory ที่ active
export const getActiveProductCategoryCount = (): number => {
  return productCategories.filter(category => category.is_active).length;
};

// Utility function สำหรับนับจำนวน ProductCategory ที่ inactive
export const getInactiveProductCategoryCount = (): number => {
  return productCategories.filter(category => !category.is_active).length;
};

// Utility function สำหรับนับจำนวน ProductCategory ตาม parent_id
export const getProductCategoryCountByParent = (parentId: string): number => {
  return productCategories.filter(category => category.parent_id === parentId).length;
};

// Utility function สำหรับนับจำนวน ProductCategory ที่เป็น root
export const getRootProductCategoryCount = (): number => {
  return productCategories.filter(category => category.parent_id === null).length;
};

// Utility function สำหรับตรวจสอบ ProductCategory name ซ้ำ
export const isProductCategoryNameExists = (name: string): boolean => {
  return productCategories.some(category => category.name === name);
};

// Utility function สำหรับตรวจสอบ ProductCategory ที่ถูกลบแล้ว
export const getDeletedProductCategories = (): ProductCategory[] => {
  return productCategories.filter(category => category.deleted_at !== null);
};

// Utility function สำหรับกู้คืน ProductCategory ที่ถูกลบแล้ว
export const restoreProductCategory = (id: string): boolean => {
  const index = productCategories.findIndex(category => category.id === id);
  
  if (index === -1) {
    return false;
  }
  
  if (productCategories[index].deleted_at) {
    productCategories[index] = {
      ...productCategories[index],
      deleted_at: null,
      deleted_by_id: null
    };
    return true;
  }
  
  return false;
};

// Utility function สำหรับค้นหา ProductCategory แบบ advanced search
export const searchProductCategoriesAdvanced = (searchCriteria: {
  name?: string;
  description?: string;
  parent_id?: string | null;
  is_active?: boolean;
  sort_order?: number;
  is_root?: boolean;
  has_children?: boolean;
}): ProductCategory[] => {
  return productCategories.filter(category => {
    if (searchCriteria.name && !category.name.toLowerCase().includes(searchCriteria.name.toLowerCase())) {
      return false;
    }
    
    if (searchCriteria.description && !(category.description && category.description.toLowerCase().includes(searchCriteria.description.toLowerCase()))) {
      return false;
    }
    
    if (searchCriteria.parent_id !== undefined && category.parent_id !== searchCriteria.parent_id) {
      return false;
    }
    
    if (searchCriteria.is_active !== undefined && category.is_active !== searchCriteria.is_active) {
      return false;
    }
    
    if (searchCriteria.sort_order && category.sort_order !== searchCriteria.sort_order) {
      return false;
    }
    
    if (searchCriteria.is_root !== undefined) {
      const isRoot = category.parent_id === null;
      if (isRoot !== searchCriteria.is_root) {
        return false;
      }
    }
    
    if (searchCriteria.has_children !== undefined) {
      const hasChildren = productCategories.some(child => child.parent_id === category.id);
      if (hasChildren !== searchCriteria.has_children) {
        return false;
      }
    }
    
    return true;
  });
};
