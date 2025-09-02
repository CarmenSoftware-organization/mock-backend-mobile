import { generateId, getCurrentTimestamp } from "@/libs/utils";

export interface ProductLocation {
  id: string;
  product_id: string;
  product_name: string;
  location_id: string;
  location_name: string;
  min_qty: string;
  max_qty: string;
  re_order_qty: string;
  par_qty: string;
  note: string | null;
  info: any;
  dimension: any;
  doc_version: string;
  created_at: string;
  created_by_id: string;
  updated_at: string;
  updated_by_id: string | null;
  deleted_at: string | null;
  deleted_by_id: string | null;
}

export const productLocations: ProductLocation[] = [
  {
    id: "550e8400-e29b-41d4-a716-446655440001",
    product_id: "550e8400-e29b-41d4-a716-446655440001",
    product_name: "Beef Tenderloin",
    location_id: "550e8400-e29b-41d4-a716-446655440001",
    location_name: "Main Warehouse",
    min_qty: "10.00",
    max_qty: "100.00",
    re_order_qty: "20.00",
    par_qty: "45.00",
    note: "Main warehouse location",
    info: { zone: "A1", shelf: "S1" },
    dimension: { department: "Warehouse", region: "Central" },
    doc_version: "1.0",
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
    location_id: "550e8400-e29b-41d4-a716-446655440002",
    location_name: "Branch Office",
    min_qty: "5.00",
    max_qty: "50.00",
    re_order_qty: "10.00",
    par_qty: "15.00",
    note: "Branch office stock",
    info: { zone: "B1", shelf: "S2" },
    dimension: { department: "Warehouse", region: "North" },
    doc_version: "1.0",
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
    location_id: "550e8400-e29b-41d4-a716-446655440003",
    location_name: "Retail Store",
    min_qty: "20.00",
    max_qty: "200.00",
    re_order_qty: "40.00",
    par_qty: "35.00",
    note: "Retail store inventory",
    info: { zone: "C1", shelf: "S3" },
    dimension: { department: "Warehouse", region: "South" },
    doc_version: "1.0",
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
    location_id: "550e8400-e29b-41d4-a716-446655440001",
    location_name: "Main Warehouse",
    min_qty: "15.00",
    max_qty: "150.00",
    re_order_qty: "30.00",
    par_qty: "25.00",
    note: "Discontinued location",
    info: { zone: "A2", shelf: "S4" },
    dimension: { department: "Warehouse", region: "Central" },
    doc_version: "1.0",
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
];

// CREATE - สร้าง ProductLocation ใหม่
export const createProductLocation = (
  productLocationData: Omit<ProductLocation, "id" | "created_at" | "updated_at">
): ProductLocation => {
  const newProductLocation: ProductLocation = {
    ...productLocationData,
    id: generateId(),
    created_at: getCurrentTimestamp(),
    updated_at: getCurrentTimestamp(),
  };

  productLocations.push(newProductLocation);
  return newProductLocation;
};

// READ - อ่าน ProductLocation ทั้งหมด
export const getAllProductLocations = (): ProductLocation[] => {
  return [...productLocations];
};

// READ - อ่าน ProductLocation ตาม ID
export const getProductLocationById = (
  id: string
): ProductLocation | undefined => {
  return productLocations.find((productLocation) => productLocation.id === id);
};

// READ - อ่าน ProductLocation ตาม product_id
export const getProductLocationsByProduct = (
  productId: string
): ProductLocation[] => {
  return productLocations.filter(
    (productLocation) => productLocation.product_id === productId
  );
};

// READ - อ่าน ProductLocation ตาม location_id
export const getProductLocationsByLocation = (
  locationId: string
): ProductLocation[] => {
  return productLocations.filter(
    (productLocation) => productLocation.location_id === locationId
  );
};

// READ - อ่าน ProductLocation ตาม product_id และ location_id
export const getProductLocationByProductAndLocation = (
  productId: string,
  locationId: string
): ProductLocation | undefined => {
  return productLocations.find(
    (productLocation) =>
      productLocation.product_id === productId &&
      productLocation.location_id === locationId
  );
};

// READ - อ่าน ProductLocation ที่มี par_qty ต่ำกว่า re_order_qty
export const getProductLocationsBelowReorderQty = (): ProductLocation[] => {
  return productLocations.filter(
    (productLocation) =>
      parseFloat(productLocation.par_qty) <=
      parseFloat(productLocation.re_order_qty)
  );
};

// READ - อ่าน ProductLocation ที่มี par_qty ต่ำกว่า min_qty
export const getProductLocationsBelowMinQty = (): ProductLocation[] => {
  return productLocations.filter(
    (productLocation) =>
      parseFloat(productLocation.par_qty) < parseFloat(productLocation.min_qty)
  );
};

// READ - อ่าน ProductLocation ที่มี par_qty สูงกว่า max_qty
export const getProductLocationsAboveMaxQty = (): ProductLocation[] => {
  return productLocations.filter(
    (productLocation) =>
      parseFloat(productLocation.par_qty) > parseFloat(productLocation.max_qty)
  );
};

// READ - อ่าน ProductLocation ตาม par_qty range
export const getProductLocationsByParQtyRange = (
  minQty: string,
  maxQty: string
): ProductLocation[] => {
  return productLocations.filter((productLocation) => {
    const parQty = parseFloat(productLocation.par_qty);
    return parQty >= parseFloat(minQty) && parQty <= parseFloat(maxQty);
  });
};

// READ - อ่าน ProductLocation ที่มี note
export const getProductLocationsWithNote = (): ProductLocation[] => {
  return productLocations.filter(
    (productLocation) =>
      productLocation.note && productLocation.note.trim() !== ""
  );
};

// READ - ค้นหา ProductLocation แบบ fuzzy search
export const searchProductLocations = (
  searchTerm: string
): ProductLocation[] => {
  const lowerSearchTerm = searchTerm.toLowerCase();
  return productLocations.filter(
    (productLocation) =>
      (productLocation.note &&
        productLocation.note.toLowerCase().includes(lowerSearchTerm)) ||
      productLocation.product_name.toLowerCase().includes(lowerSearchTerm) ||
      productLocation.location_name.toLowerCase().includes(lowerSearchTerm)
  );
};

// UPDATE - อัปเดต ProductLocation
export const updateProductLocation = (
  id: string,
  updateData: Partial<
    Omit<ProductLocation, "id" | "created_at" | "created_by_id">
  >
): ProductLocation | null => {
  const index = productLocations.findIndex(
    (productLocation) => productLocation.id === id
  );

  if (index === -1) {
    return null;
  }

  productLocations[index] = {
    ...productLocations[index],
    ...updateData,
    updated_at: getCurrentTimestamp(),
  };

  return productLocations[index];
};

// UPDATE - อัปเดต ProductLocation quantity levels
export const updateProductLocationQtyLevels = (
  id: string,
  minQty: string,
  maxQty: string,
  reorderQty: string
): ProductLocation | null => {
  return updateProductLocation(id, {
    min_qty: minQty,
    max_qty: maxQty,
    re_order_qty: reorderQty,
  });
};

// UPDATE - อัปเดต ProductLocation par quantity
export const updateProductLocationParQty = (
  id: string,
  parQty: string
): ProductLocation | null => {
  return updateProductLocation(id, { par_qty: parQty });
};

// UPDATE - อัปเดต ProductLocation note
export const updateProductLocationNote = (
  id: string,
  note: string
): ProductLocation | null => {
  return updateProductLocation(id, { note });
};

// UPDATE - อัปเดต ProductLocation product
export const updateProductLocationProduct = (
  id: string,
  productId: string
): ProductLocation | null => {
  return updateProductLocation(id, { product_id: productId });
};

// UPDATE - อัปเดต ProductLocation location
export const updateProductLocationLocation = (
  id: string,
  locationId: string
): ProductLocation | null => {
  return updateProductLocation(id, { location_id: locationId });
};

// DELETE - ลบ ProductLocation (soft delete)
export const deleteProductLocation = (
  id: string,
  deletedById: string
): boolean => {
  const index = productLocations.findIndex(
    (productLocation) => productLocation.id === id
  );

  if (index === -1) {
    return false;
  }

  productLocations[index] = {
    ...productLocations[index],
    deleted_at: getCurrentTimestamp(),
    deleted_by_id: deletedById,
  };

  return true;
};

// DELETE - ลบ ProductLocation แบบถาวร
export const hardDeleteProductLocation = (id: string): boolean => {
  const index = productLocations.findIndex(
    (productLocation) => productLocation.id === id
  );

  if (index === -1) {
    return false;
  }

  productLocations.splice(index, 1);
  return true;
};

// DELETE - ลบ ProductLocation ตาม product_id
export const deleteProductLocationsByProduct = (
  productId: string,
  deletedById: string
): number => {
  let deletedCount = 0;

  productLocations.forEach((productLocation) => {
    if (
      productLocation.product_id === productId &&
      !productLocation.deleted_at
    ) {
      productLocation.deleted_at = getCurrentTimestamp();
      productLocation.deleted_by_id = deletedById;
      deletedCount++;
    }
  });

  return deletedCount;
};

// DELETE - ลบ ProductLocation ตาม location_id
export const deleteProductLocationsByLocation = (
  locationId: string,
  deletedById: string
): number => {
  let deletedCount = 0;

  productLocations.forEach((productLocation) => {
    if (
      productLocation.location_id === locationId &&
      !productLocation.deleted_at
    ) {
      productLocation.deleted_at = getCurrentTimestamp();
      productLocation.deleted_by_id = deletedById;
      deletedCount++;
    }
  });

  return deletedCount;
};

// DELETE - ลบ ProductLocation ที่มี par_qty ต่ำกว่า min_qty
export const deleteProductLocationsBelowMinQty = (
  deletedById: string
): number => {
  let deletedCount = 0;

  productLocations.forEach((productLocation) => {
    if (
      parseFloat(productLocation.par_qty) <
        parseFloat(productLocation.min_qty) &&
      !productLocation.deleted_at
    ) {
      productLocation.deleted_at = getCurrentTimestamp();
      productLocation.deleted_by_id = deletedById;
      deletedCount++;
    }
  });

  return deletedCount;
};

// Utility function สำหรับล้างข้อมูลทั้งหมด (ใช้สำหรับ testing)
export const clearAllProductLocations = (): void => {
  productLocations.length = 0;
};

// Utility function สำหรับนับจำนวน ProductLocation
export const getProductLocationCount = (): number => {
  return productLocations.length;
};

// Utility function สำหรับนับจำนวน ProductLocation ที่มี par_qty ต่ำกว่า min_qty
export const getProductLocationCountBelowMinQty = (): number => {
  return productLocations.filter(
    (productLocation) =>
      parseFloat(productLocation.par_qty) < parseFloat(productLocation.min_qty)
  ).length;
};

// Utility function สำหรับนับจำนวน ProductLocation ที่มี par_qty สูงกว่า max_qty
export const getProductLocationCountAboveMaxQty = (): number => {
  return productLocations.filter(
    (productLocation) =>
      parseFloat(productLocation.par_qty) > parseFloat(productLocation.max_qty)
  ).length;
};

// Utility function สำหรับนับจำนวน ProductLocation ตาม product_id
export const getProductLocationCountByProduct = (productId: string): number => {
  return productLocations.filter(
    (productLocation) => productLocation.product_id === productId
  ).length;
};

// Utility function สำหรับนับจำนวน ProductLocation ตาม location_id
export const getProductLocationCountByLocation = (
  locationId: string
): number => {
  return productLocations.filter(
    (productLocation) => productLocation.location_id === locationId
  ).length;
};

// Utility function สำหรับตรวจสอบ ProductLocation ที่ถูกลบแล้ว
export const getDeletedProductLocations = (): ProductLocation[] => {
  return productLocations.filter(
    (productLocation) => productLocation.deleted_at !== null
  );
};

// Utility function สำหรับกู้คืน ProductLocation ที่ถูกลบแล้ว
export const restoreProductLocation = (id: string): boolean => {
  const index = productLocations.findIndex(
    (productLocation) => productLocation.id === id
  );

  if (index === -1) {
    return false;
  }

  if (productLocations[index].deleted_at) {
    productLocations[index] = {
      ...productLocations[index],
      deleted_at: null,
      deleted_by_id: null,
    };
    return true;
  }

  return false;
};

// Utility function สำหรับค้นหา ProductLocation แบบ advanced search
export const searchProductLocationsAdvanced = (searchCriteria: {
  product_id?: string;
  location_id?: string;
  min_qty?: string;
  max_qty?: string;
  re_order_qty?: string;
  par_qty?: string;
  has_note?: boolean;
  below_reorder_qty?: boolean;
  below_min_qty?: boolean;
  above_max_qty?: boolean;
}): ProductLocation[] => {
  return productLocations.filter((productLocation) => {
    if (
      searchCriteria.product_id &&
      productLocation.product_id !== searchCriteria.product_id
    ) {
      return false;
    }

    if (
      searchCriteria.location_id &&
      productLocation.location_id !== searchCriteria.location_id
    ) {
      return false;
    }

    if (
      searchCriteria.min_qty &&
      productLocation.min_qty !== searchCriteria.min_qty
    ) {
      return false;
    }

    if (
      searchCriteria.max_qty &&
      productLocation.max_qty !== searchCriteria.max_qty
    ) {
      return false;
    }

    if (
      searchCriteria.re_order_qty &&
      productLocation.re_order_qty !== searchCriteria.re_order_qty
    ) {
      return false;
    }

    if (
      searchCriteria.par_qty &&
      productLocation.par_qty !== searchCriteria.par_qty
    ) {
      return false;
    }

    if (searchCriteria.has_note !== undefined) {
      const hasNote =
        productLocation.note && productLocation.note.trim() !== "";
      if (hasNote !== searchCriteria.has_note) {
        return false;
      }
    }

    if (searchCriteria.below_reorder_qty !== undefined) {
      const belowReorderQty =
        parseFloat(productLocation.par_qty) <=
        parseFloat(productLocation.re_order_qty);
      if (belowReorderQty !== searchCriteria.below_reorder_qty) {
        return false;
      }
    }

    if (searchCriteria.below_min_qty !== undefined) {
      const belowMinQty =
        parseFloat(productLocation.par_qty) <
        parseFloat(productLocation.min_qty);
      if (belowMinQty !== searchCriteria.below_min_qty) {
        return false;
      }
    }

    if (searchCriteria.above_max_qty !== undefined) {
      const aboveMaxQty =
        parseFloat(productLocation.par_qty) >
        parseFloat(productLocation.max_qty);
      if (aboveMaxQty !== searchCriteria.above_max_qty) {
        return false;
      }
    }

    return true;
  });
};
