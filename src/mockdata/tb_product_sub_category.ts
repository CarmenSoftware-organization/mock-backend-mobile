import { generateId, getCurrentTimestamp } from "@/libs/utils";
import { getUuidByName } from "./mapping.uuid";

export interface ProductSubCategory {
  id: string;
  product_category_id: string;
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

export const productSubCategories: ProductSubCategory[] = [
  {
    id: getUuidByName("PRODUCT_SUB_CATEGORY_01"),
    product_category_id: getUuidByName("PRODUCT_CATEGORY_01"),
    code: "GL001",
    name: "Gaming Laptops",
    description: "High-performance laptops for gaming",
    price_deviation_limit: "10.00",
    qty_deviation_limit: "5.00",
    is_used_in_recipe: false,
    is_sold_directly: true,
    is_active: true,
    note: "Premium gaming laptops",
    info: { category: "Electronics", brand: "Gaming" },
    dimension: { department: "Sales", region: "All" },
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: getUuidByName("USER_01"),
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("PRODUCT_SUB_CATEGORY_02"),
    product_category_id: getUuidByName("PRODUCT_CATEGORY_01"),
    code: "BL002",
    name: "Business Laptops",
    description: "Professional laptops for business use",
    price_deviation_limit: "15.00",
    qty_deviation_limit: "3.00",
    is_used_in_recipe: false,
    is_sold_directly: true,
    is_active: true,
    note: "Corporate laptops",
    info: { category: "Electronics", brand: "Business" },
    dimension: { department: "Sales", region: "All" },
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: getUuidByName("USER_01"),
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("PRODUCT_SUB_CATEGORY_03"),
    product_category_id: getUuidByName("PRODUCT_CATEGORY_01"),
    code: "AP003",
    name: "Android Phones",
    description: "Smartphones running Android OS",
    price_deviation_limit: "8.00",
    qty_deviation_limit: "4.00",
    is_used_in_recipe: false,
    is_sold_directly: true,
    is_active: true,
    note: "Android smartphones",
    info: { category: "Electronics", brand: "Android" },
    dimension: { department: "Sales", region: "All" },
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: getUuidByName("USER_01"),
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("PRODUCT_SUB_CATEGORY_04"),
    product_category_id: getUuidByName("PRODUCT_CATEGORY_02"),
    code: "IP004",
    name: "iPhone",
    description: "Apple smartphones",
    price_deviation_limit: "12.00",
    qty_deviation_limit: "6.00",
    is_used_in_recipe: false,
    is_sold_directly: true,
    is_active: true,
    note: "Apple smartphones",
    info: { category: "Electronics", brand: "Apple" },
    dimension: { department: "Sales", region: "All" },
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: getUuidByName("USER_01"),
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("PRODUCT_SUB_CATEGORY_05"),
    product_category_id: getUuidByName("PRODUCT_CATEGORY_02"),
    code: "CW005",
    name: "Casual Wear",
    description: "Everyday casual clothing",
    price_deviation_limit: "20.00",
    qty_deviation_limit: "10.00",
    is_used_in_recipe: false,
    is_sold_directly: true,
    is_active: false,
    note: "Casual clothing line",
    info: { category: "Clothing", brand: "Casual" },
    dimension: { department: "Sales", region: "All" },
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: getUuidByName("USER_01"),
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
];

// CREATE - สร้าง ProductSubCategory ใหม่
export const createProductSubCategory = (
  productSubCategoryData: Omit<
    ProductSubCategory,
    "id" | "created_at" | "updated_at"
  >
): ProductSubCategory => {
  const newProductSubCategory: ProductSubCategory = {
    ...productSubCategoryData,
    id: generateId(),
    created_at: getCurrentTimestamp(),
    updated_at: getCurrentTimestamp(),
  };

  productSubCategories.push(newProductSubCategory);
  return newProductSubCategory;
};

// READ - อ่าน ProductSubCategory ทั้งหมด
export const getAllProductSubCategories = (): ProductSubCategory[] => {
  return productSubCategories.filter((subCategory) => !subCategory.deleted_at);
};

// READ - อ่าน ProductSubCategory ตาม ID
export const getProductSubCategoryById = (
  id: string
): ProductSubCategory | null => {
  const subCategory = productSubCategories.find(
    (subCategory) => subCategory.id === id && !subCategory.deleted_at
  );
  return subCategory || null;
};

// READ - อ่าน ProductSubCategory ตาม product_category_id
export const getProductSubCategoriesByCategory = (
  categoryId: string
): ProductSubCategory[] => {
  return productSubCategories.filter(
    (subCategory) =>
      subCategory.product_category_id === categoryId && !subCategory.deleted_at
  );
};

// READ - อ่าน ProductSubCategory ตาม code
export const getProductSubCategoryByCode = (
  code: string
): ProductSubCategory | null => {
  const subCategory = productSubCategories.find(
    (subCategory) => subCategory.code === code && !subCategory.deleted_at
  );
  return subCategory || null;
};

// READ - อ่าน ProductSubCategory ที่ active
export const getActiveProductSubCategories = (): ProductSubCategory[] => {
  return productSubCategories.filter(
    (subCategory) => subCategory.is_active && !subCategory.deleted_at
  );
};

// READ - อ่าน ProductSubCategory ที่ inactive
export const getInactiveProductSubCategories = (): ProductSubCategory[] => {
  return productSubCategories.filter(
    (subCategory) => !subCategory.is_active && !subCategory.deleted_at
  );
};

// READ - อ่าน ProductSubCategory ที่ใช้ใน recipe
export const getProductSubCategoriesUsedInRecipe = (): ProductSubCategory[] => {
  return productSubCategories.filter(
    (subCategory) => subCategory.is_used_in_recipe && !subCategory.deleted_at
  );
};

// READ - อ่าน ProductSubCategory ที่ขายโดยตรง
export const getProductSubCategoriesSoldDirectly = (): ProductSubCategory[] => {
  return productSubCategories.filter(
    (subCategory) => subCategory.is_sold_directly && !subCategory.deleted_at
  );
};

// READ - อ่าน ProductSubCategory ที่มี note
export const getProductSubCategoriesWithNote = (): ProductSubCategory[] => {
  return productSubCategories.filter(
    (subCategory) =>
      subCategory.note &&
      subCategory.note.trim() !== "" &&
      !subCategory.deleted_at
  );
};

// READ - ค้นหา ProductSubCategory แบบ fuzzy search
export const searchProductSubCategories = (
  searchTerm: string
): ProductSubCategory[] => {
  const lowerSearchTerm = searchTerm.toLowerCase();
  return productSubCategories.filter(
    (subCategory) =>
      !subCategory.deleted_at &&
      (subCategory.name.toLowerCase().includes(lowerSearchTerm) ||
        subCategory.code.toLowerCase().includes(lowerSearchTerm) ||
        (subCategory.description &&
          subCategory.description.toLowerCase().includes(lowerSearchTerm)) ||
        (subCategory.note &&
          subCategory.note.toLowerCase().includes(lowerSearchTerm)))
  );
};

// READ - อ่าน ProductSubCategory ตาม name
export const getProductSubCategoryByName = (
  name: string
): ProductSubCategory | undefined => {
  return productSubCategories.find((subCategory) => subCategory.name === name);
};

// READ - อ่าน ProductSubCategory ตาม description
export const getProductSubCategoriesByDescription = (
  description: string
): ProductSubCategory[] => {
  return productSubCategories.filter(
    (subCategory) =>
      subCategory.description &&
      subCategory.description.toLowerCase().includes(description.toLowerCase())
  );
};

// READ - อ่าน ProductSubCategory ที่ไม่มี category
export const getProductSubCategoriesWithoutCategory =
  (): ProductSubCategory[] => {
    return productSubCategories.filter(
      (subCategory) => !subCategory.product_category_id
    );
  };

// UPDATE - อัปเดต ProductSubCategory
export const updateProductSubCategory = (
  id: string,
  updateData: Partial<
    Omit<ProductSubCategory, "id" | "created_at" | "created_by_id">
  >
): ProductSubCategory | null => {
  const index = productSubCategories.findIndex(
    (subCategory) => subCategory.id === id
  );

  if (index === -1) {
    return null;
  }

  productSubCategories[index] = {
    ...productSubCategories[index],
    ...updateData,
    updated_at: getCurrentTimestamp(),
  };

  return productSubCategories[index];
};

// UPDATE - อัปเดต ProductSubCategory name
export const updateProductSubCategoryName = (
  id: string,
  name: string
): ProductSubCategory | null => {
  return updateProductSubCategory(id, { name });
};

// UPDATE - อัปเดต ProductSubCategory description
export const updateProductSubCategoryDescription = (
  id: string,
  description: string
): ProductSubCategory | null => {
  return updateProductSubCategory(id, { description });
};

// UPDATE - อัปเดต ProductSubCategory code
export const updateProductSubCategoryCode = (
  id: string,
  code: string
): ProductSubCategory | null => {
  return updateProductSubCategory(id, { code });
};

// UPDATE - อัปเดต ProductSubCategory active status
export const updateProductSubCategoryActiveStatus = (
  id: string,
  isActive: boolean
): ProductSubCategory | null => {
  return updateProductSubCategory(id, { is_active: isActive });
};

// UPDATE - อัปเดต ProductSubCategory recipe usage
export const updateProductSubCategoryRecipeUsage = (
  id: string,
  isUsedInRecipe: boolean
): ProductSubCategory | null => {
  return updateProductSubCategory(id, { is_used_in_recipe: isUsedInRecipe });
};

// UPDATE - อัปเดต ProductSubCategory direct sale
export const updateProductSubCategoryDirectSale = (
  id: string,
  isSoldDirectly: boolean
): ProductSubCategory | null => {
  return updateProductSubCategory(id, { is_sold_directly: isSoldDirectly });
};

// UPDATE - อัปเดต ProductSubCategory note
export const updateProductSubCategoryNote = (
  id: string,
  note: string
): ProductSubCategory | null => {
  return updateProductSubCategory(id, { note });
};

// UPDATE - อัปเดต ProductSubCategory category_id
export const updateProductSubCategoryCategory = (
  id: string,
  categoryId: string
): ProductSubCategory | null => {
  return updateProductSubCategory(id, { product_category_id: categoryId });
};

// DELETE - ลบ ProductSubCategory (soft delete)
export const deleteProductSubCategory = (
  id: string,
  deletedById: string
): boolean => {
  const index = productSubCategories.findIndex(
    (subCategory) => subCategory.id === id
  );

  if (index === -1) {
    return false;
  }

  productSubCategories[index] = {
    ...productSubCategories[index],
    deleted_at: getCurrentTimestamp(),
    deleted_by_id: deletedById,
  };

  return true;
};

// DELETE - ลบ ProductSubCategory แบบถาวร
export const hardDeleteProductSubCategory = (id: string): boolean => {
  const index = productSubCategories.findIndex(
    (subCategory) => subCategory.id === id
  );

  if (index === -1) {
    return false;
  }

  productSubCategories.splice(index, 1);
  return true;
};

// DELETE - ลบ ProductSubCategory ตาม name
export const deleteProductSubCategoryByName = (
  name: string,
  deletedById: string
): boolean => {
  const subCategory = getProductSubCategoryByName(name);
  if (subCategory) {
    return deleteProductSubCategory(subCategory.id, deletedById);
  }
  return false;
};

// DELETE - ลบ ProductSubCategory ตาม product_category_id
export const deleteProductSubCategoriesByCategory = (
  categoryId: string,
  deletedById: string
): number => {
  let deletedCount = 0;

  productSubCategories.forEach((subCategory) => {
    if (
      subCategory.product_category_id === categoryId &&
      !subCategory.deleted_at
    ) {
      subCategory.deleted_at = getCurrentTimestamp();
      subCategory.deleted_by_id = deletedById;
      deletedCount++;
    }
  });

  return deletedCount;
};

// DELETE - ลบ ProductSubCategory ที่ inactive
export const deleteInactiveProductSubCategories = (
  deletedById: string
): number => {
  let deletedCount = 0;

  productSubCategories.forEach((subCategory) => {
    if (!subCategory.is_active && !subCategory.deleted_at) {
      subCategory.deleted_at = getCurrentTimestamp();
      subCategory.deleted_by_id = deletedById;
      deletedCount++;
    }
  });

  return deletedCount;
};

// Utility function สำหรับล้างข้อมูลทั้งหมด (ใช้สำหรับ testing)
export const clearAllProductSubCategories = (): void => {
  productSubCategories.length = 0;
};

// Utility function สำหรับนับจำนวน ProductSubCategory
export const getProductSubCategoryCount = (): number => {
  return productSubCategories.length;
};

// Utility function สำหรับนับจำนวน ProductSubCategory ที่ active
export const getActiveProductSubCategoryCount = (): number => {
  return productSubCategories.filter((subCategory) => subCategory.is_active)
    .length;
};

// Utility function สำหรับนับจำนวน ProductSubCategory ที่ inactive
export const getInactiveProductSubCategoryCount = (): number => {
  return productSubCategories.filter((subCategory) => !subCategory.is_active)
    .length;
};

// Utility function สำหรับนับจำนวน ProductSubCategory ตาม product_category_id
export const getProductSubCategoryCountByCategory = (
  categoryId: string
): number => {
  return productSubCategories.filter(
    (subCategory) => subCategory.product_category_id === categoryId
  ).length;
};

// Utility function สำหรับตรวจสอบ ProductSubCategory name ซ้ำ
export const isProductSubCategoryNameExists = (name: string): boolean => {
  return productSubCategories.some((subCategory) => subCategory.name === name);
};

// Utility function สำหรับตรวจสอบ ProductSubCategory ที่ถูกลบแล้ว
export const getDeletedProductSubCategories = (): ProductSubCategory[] => {
  return productSubCategories.filter(
    (subCategory) => subCategory.deleted_at !== null
  );
};

// Utility function สำหรับกู้คืน ProductSubCategory ที่ถูกลบแล้ว
export const restoreProductSubCategory = (id: string): boolean => {
  const index = productSubCategories.findIndex(
    (subCategory) => subCategory.id === id
  );

  if (index === -1) {
    return false;
  }

  if (productSubCategories[index].deleted_at) {
    productSubCategories[index] = {
      ...productSubCategories[index],
      deleted_at: null,
      deleted_by_id: null,
    };
    return true;
  }

  return false;
};

// Utility function สำหรับค้นหา ProductSubCategory แบบ advanced search
export const searchProductSubCategoriesAdvanced = (searchCriteria: {
  product_category_id?: string;
  code?: string;
  name?: string;
  description?: string;
  is_active?: boolean;
  is_used_in_recipe?: boolean;
  is_sold_directly?: boolean;
  has_note?: boolean;
  price_deviation_limit?: string;
  qty_deviation_limit?: string;
}): ProductSubCategory[] => {
  return productSubCategories.filter((subCategory) => {
    if (
      searchCriteria.product_category_id &&
      subCategory.product_category_id !== searchCriteria.product_category_id
    ) {
      return false;
    }

    if (searchCriteria.code && subCategory.code !== searchCriteria.code) {
      return false;
    }

    if (
      searchCriteria.name &&
      !subCategory.name
        .toLowerCase()
        .includes(searchCriteria.name.toLowerCase())
    ) {
      return false;
    }

    if (
      searchCriteria.description &&
      subCategory.description &&
      !subCategory.description
        .toLowerCase()
        .includes(searchCriteria.description.toLowerCase())
    ) {
      return false;
    }

    if (
      searchCriteria.is_active !== undefined &&
      subCategory.is_active !== searchCriteria.is_active
    ) {
      return false;
    }

    if (
      searchCriteria.is_used_in_recipe !== undefined &&
      subCategory.is_used_in_recipe !== searchCriteria.is_used_in_recipe
    ) {
      return false;
    }

    if (
      searchCriteria.is_sold_directly !== undefined &&
      subCategory.is_sold_directly !== searchCriteria.is_sold_directly
    ) {
      return false;
    }

    if (searchCriteria.has_note !== undefined) {
      const hasNote = subCategory.note && subCategory.note.trim() !== "";
      if (hasNote !== searchCriteria.has_note) {
        return false;
      }
    }

    if (
      searchCriteria.price_deviation_limit &&
      subCategory.price_deviation_limit !== searchCriteria.price_deviation_limit
    ) {
      return false;
    }

    if (
      searchCriteria.qty_deviation_limit &&
      subCategory.qty_deviation_limit !== searchCriteria.qty_deviation_limit
    ) {
      return false;
    }

    return true;
  });
};
