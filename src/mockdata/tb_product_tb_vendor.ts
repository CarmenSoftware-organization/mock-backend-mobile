import { generateId, getCurrentTimestamp } from "@/libs/utils";

export interface ProductVendor {
  id: string;
  product_id: string;
  product_name: string;
  vendor_id: string;
  vendor_product_code: string;
  vendor_product_name: string;
  description: string | null;
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

export const productVendors: ProductVendor[] = [
  {
    id: "550e8400-e29b-41d4-a716-446655440001",
    product_id: "550e8400-e29b-41d4-a716-446655440001",
    product_name: "Beef Tenderloin",
    vendor_id: "550e8400-e29b-41d4-a716-446655440001",
    vendor_product_code: "BT001",
    vendor_product_name: "Premium Beef Tenderloin",
    description: "High-quality beef tenderloin from vendor",
    is_active: true,
    note: "Preferred vendor for beef products",
    info: { category: "Meat", grade: "Premium" },
    dimension: { department: "Purchasing", region: "Central" },
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440002",
    product_id: "550e8400-e29b-41d4-a716-446655440002",
    product_name: "Ground Beef A",
    vendor_id: "550e8400-e29b-41d4-a716-446655440002",
    vendor_product_code: "GB002",
    vendor_product_name: "Fresh Ground Beef",
    description: "Fresh ground beef from local vendor",
    is_active: true,
    note: "Local supplier for ground beef",
    info: { category: "Meat", grade: "Standard" },
    dimension: { department: "Purchasing", region: "North" },
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "1bfdb891-58ee-499c-8115-34a964de8122",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440003",
    product_id: "550e8400-e29b-41d4-a716-446655440003",
    product_name: "Beef Tenderloin Grade A",
    vendor_id: "550e8400-e29b-41d4-a716-446655440003",
    vendor_product_code: "BTA003",
    vendor_product_name: "Grade A Beef Tenderloin",
    description: "Premium grade A beef tenderloin",
    is_active: true,
    note: "Premium supplier for grade A beef",
    info: { category: "Meat", grade: "Grade A" },
    dimension: { department: "Purchasing", region: "South" },
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "3c5280a7-492e-421d-b739-7447455ce99e",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440004",
    product_id: "550e8400-e29b-41d4-a716-446655440004",
    product_name: "Beef Tenderloin Grade AAA",
    vendor_id: "550e8400-e29b-41d4-a716-446655440004",
    vendor_product_code: "BTAAA004",
    vendor_product_name: "Grade AAA Beef Tenderloin",
    description: "Highest quality grade AAA beef tenderloin",
    is_active: false,
    note: "Discontinued supplier",
    info: { category: "Meat", grade: "Grade AAA" },
    dimension: { department: "Purchasing", region: "Central" },
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
];

// CREATE - สร้าง ProductVendor ใหม่
export const createProductVendor = (
  data: Omit<ProductVendor, "id" | "created_at" | "created_by_id">
): ProductVendor => {
  const newProductVendor: ProductVendor = {
    ...data,
    id: generateId(),
    created_at: getCurrentTimestamp(),
    created_by_id: "system",
  };

  productVendors.push(newProductVendor);
  return newProductVendor;
};

// READ - อ่าน ProductVendor ทั้งหมด
export const getAllProductVendors = (): ProductVendor[] => {
  return productVendors.filter((vendor) => !vendor.deleted_at);
};

// READ - อ่าน ProductVendor ตาม ID
export const getProductVendorById = (id: string): ProductVendor | null => {
  const vendor = productVendors.find(
    (vendor) => vendor.id === id && !vendor.deleted_at
  );
  return vendor || null;
};

// READ - อ่าน ProductVendor ตาม product_id
export const getProductVendorsByProduct = (
  productId: string
): ProductVendor[] => {
  return productVendors.filter(
    (vendor) => vendor.product_id === productId && !vendor.deleted_at
  );
};

// READ - อ่าน ProductVendor ตาม vendor_id
export const getProductVendorsByVendor = (
  vendorId: string
): ProductVendor[] => {
  return productVendors.filter(
    (vendor) => vendor.vendor_id === vendorId && !vendor.deleted_at
  );
};

// READ - อ่าน ProductVendor ตาม vendor_product_code
export const getProductVendorByVendorCode = (
  vendorProductCode: string
): ProductVendor | null => {
  const vendor = productVendors.find(
    (vendor) =>
      vendor.vendor_product_code === vendorProductCode && !vendor.deleted_at
  );
  return vendor || null;
};

// READ - อ่าน ProductVendor ที่ active
export const getActiveProductVendors = (): ProductVendor[] => {
  return productVendors.filter(
    (vendor) => vendor.is_active && !vendor.deleted_at
  );
};

// READ - อ่าน ProductVendor ที่ inactive
export const getInactiveProductVendors = (): ProductVendor[] => {
  return productVendors.filter(
    (vendor) => !vendor.is_active && !vendor.deleted_at
  );
};

// READ - อ่าน ProductVendor ที่มี note
export const getProductVendorsWithNote = (): ProductVendor[] => {
  return productVendors.filter(
    (vendor) => vendor.note && vendor.note.trim() !== "" && !vendor.deleted_at
  );
};

// READ - ค้นหา ProductVendor แบบ fuzzy search
export const searchProductVendors = (searchTerm: string): ProductVendor[] => {
  const lowerSearchTerm = searchTerm.toLowerCase();
  return productVendors.filter(
    (vendor) =>
      !vendor.deleted_at &&
      (vendor.product_name.toLowerCase().includes(lowerSearchTerm) ||
        vendor.vendor_product_code.toLowerCase().includes(lowerSearchTerm) ||
        vendor.vendor_product_name.toLowerCase().includes(lowerSearchTerm) ||
        (vendor.description &&
          vendor.description.toLowerCase().includes(lowerSearchTerm)) ||
        (vendor.note && vendor.note.toLowerCase().includes(lowerSearchTerm)))
  );
};

// UPDATE - อัปเดต ProductVendor
export const updateProductVendor = (
  id: string,
  updateData: Partial<
    Omit<ProductVendor, "id" | "created_at" | "created_by_id">
  >
): ProductVendor | null => {
  const index = productVendors.findIndex((vendor) => vendor.id === id);

  if (index === -1) {
    return null;
  }

  productVendors[index] = {
    ...productVendors[index],
    ...updateData,
    updated_at: getCurrentTimestamp(),
  };

  return productVendors[index];
};

// UPDATE - อัปเดต ProductVendor vendor_product_code
export const updateProductVendorCode = (
  id: string,
  vendorProductCode: string
): ProductVendor | null => {
  return updateProductVendor(id, { vendor_product_code: vendorProductCode });
};

// UPDATE - อัปเดต ProductVendor vendor_product_name
export const updateProductVendorName = (
  id: string,
  vendorProductName: string
): ProductVendor | null => {
  return updateProductVendor(id, { vendor_product_name: vendorProductName });
};

// UPDATE - อัปเดต ProductVendor description
export const updateProductVendorDescription = (
  id: string,
  description: string
): ProductVendor | null => {
  return updateProductVendor(id, { description });
};

// UPDATE - อัปเดต ProductVendor active status
export const updateProductVendorActiveStatus = (
  id: string,
  isActive: boolean
): ProductVendor | null => {
  return updateProductVendor(id, { is_active: isActive });
};

// UPDATE - อัปเดต ProductVendor note
export const updateProductVendorNote = (
  id: string,
  note: string
): ProductVendor | null => {
  return updateProductVendor(id, { note });
};

// DELETE - ลบ ProductVendor (soft delete)
export const deleteProductVendor = (
  id: string,
  deletedById: string
): boolean => {
  const index = productVendors.findIndex((vendor) => vendor.id === id);

  if (index === -1) {
    return false;
  }

  productVendors[index] = {
    ...productVendors[index],
    deleted_at: getCurrentTimestamp(),
    deleted_by_id: deletedById,
  };

  return true;
};

// DELETE - ลบ ProductVendor แบบถาวร
export const hardDeleteProductVendor = (id: string): boolean => {
  const index = productVendors.findIndex((vendor) => vendor.id === id);

  if (index === -1) {
    return false;
  }

  productVendors.splice(index, 1);
  return true;
};

// DELETE - ลบ ProductVendor ตาม product_id
export const deleteProductVendorsByProduct = (
  productId: string,
  deletedById: string
): number => {
  let deletedCount = 0;

  productVendors.forEach((vendor) => {
    if (vendor.product_id === productId && !vendor.deleted_at) {
      vendor.deleted_at = getCurrentTimestamp();
      vendor.deleted_by_id = deletedById;
      deletedCount++;
    }
  });

  return deletedCount;
};

// DELETE - ลบ ProductVendor ตาม vendor_id
export const deleteProductVendorsByVendor = (
  vendorId: string,
  deletedById: string
): number => {
  let deletedCount = 0;

  productVendors.forEach((vendor) => {
    if (vendor.vendor_id === vendorId && !vendor.deleted_at) {
      vendor.deleted_at = getCurrentTimestamp();
      vendor.deleted_by_id = deletedById;
      deletedCount++;
    }
  });

  return deletedCount;
};

// DELETE - ลบ ProductVendor ที่ inactive
export const deleteInactiveProductVendors = (deletedById: string): number => {
  let deletedCount = 0;

  productVendors.forEach((vendor) => {
    if (!vendor.is_active && !vendor.deleted_at) {
      vendor.deleted_at = getCurrentTimestamp();
      vendor.deleted_by_id = deletedById;
      deletedCount++;
    }
  });

  return deletedCount;
};

// Utility function สำหรับล้างข้อมูลทั้งหมด (ใช้สำหรับ testing)
export const clearAllProductVendors = (): void => {
  productVendors.length = 0;
};

// Utility function สำหรับนับจำนวน ProductVendor
export const getProductVendorCount = (): number => {
  return productVendors.length;
};

// Utility function สำหรับนับจำนวน ProductVendor ที่ active
export const getActiveProductVendorCount = (): number => {
  return productVendors.filter((vendor) => vendor.is_active).length;
};

// Utility function สำหรับนับจำนวน ProductVendor ที่ inactive
export const getInactiveProductVendorCount = (): number => {
  return productVendors.filter((vendor) => !vendor.is_active).length;
};

// Utility function สำหรับนับจำนวน ProductVendor ตาม product_id
export const getProductVendorCountByProduct = (productId: string): number => {
  return productVendors.filter((vendor) => vendor.product_id === productId)
    .length;
};

// Utility function สำหรับนับจำนวน ProductVendor ตาม vendor_id
export const getProductVendorCountByVendor = (vendorId: string): number => {
  return productVendors.filter((vendor) => vendor.vendor_id === vendorId)
    .length;
};

// Utility function สำหรับตรวจสอบ ProductVendor ที่ถูกลบแล้ว
export const getDeletedProductVendors = (): ProductVendor[] => {
  return productVendors.filter((vendor) => vendor.deleted_at !== null);
};

// Utility function สำหรับกู้คืน ProductVendor ที่ถูกลบแล้ว
export const restoreProductVendor = (id: string): boolean => {
  const index = productVendors.findIndex((vendor) => vendor.id === id);

  if (index === -1) {
    return false;
  }

  if (productVendors[index].deleted_at) {
    productVendors[index] = {
      ...productVendors[index],
      deleted_at: null,
      deleted_by_id: null,
    };
    return true;
  }

  return false;
};

// Utility function สำหรับค้นหา ProductVendor แบบ advanced search
export const searchProductVendorsAdvanced = (searchCriteria: {
  product_id?: string;
  vendor_id?: string;
  vendor_product_code?: string;
  vendor_product_name?: string;
  description?: string;
  is_active?: boolean;
  has_note?: boolean;
}): ProductVendor[] => {
  return productVendors.filter((vendor) => {
    if (
      searchCriteria.product_id &&
      vendor.product_id !== searchCriteria.product_id
    ) {
      return false;
    }

    if (
      searchCriteria.vendor_id &&
      vendor.vendor_id !== searchCriteria.vendor_id
    ) {
      return false;
    }

    if (
      searchCriteria.vendor_product_code &&
      vendor.vendor_product_code !== searchCriteria.vendor_product_code
    ) {
      return false;
    }

    if (
      searchCriteria.vendor_product_name &&
      !vendor.vendor_product_name
        .toLowerCase()
        .includes(searchCriteria.vendor_product_name.toLowerCase())
    ) {
      return false;
    }

    if (
      searchCriteria.description &&
      vendor.description &&
      !vendor.description
        .toLowerCase()
        .includes(searchCriteria.description.toLowerCase())
    ) {
      return false;
    }

    if (
      searchCriteria.is_active !== undefined &&
      vendor.is_active !== searchCriteria.is_active
    ) {
      return false;
    }

    if (searchCriteria.has_note !== undefined) {
      const hasNote = vendor.note && vendor.note.trim() !== "";
      if (hasNote !== searchCriteria.has_note) {
        return false;
      }
    }

    return true;
  });
};
