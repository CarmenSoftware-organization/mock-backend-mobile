import { generateId, getCurrentTimestamp } from "@/libs/utils";

export interface PurchaseRequestTemplateDetail {
  id: string;
  purchase_request_template_id: string;
  location_id: string;
  location_name: string;
  delivery_point_id: string;
  delivery_point_name: string;
  product_id: string;
  product_name: string;
  product_local_name: string;
  inventory_unit_id: string;
  inventory_unit_name: string;
  description: string;
  comment: string | null;
  currency_id: string;
  currency_name: string;
  exchange_rate: string;
  exchange_rate_date: string;
  requested_qty: string;
  requested_unit_id: string;
  requested_unit_name: string;
  requested_unit_conversion_factor: string;
  requested_base_qty: string;
  foc_qty: string;
  foc_unit_id: string;
  foc_unit_name: string;
  foc_unit_conversion_factor: string;
  foc_base_qty: string;
  tax_profile_id: string;
  tax_profile_name: string;
  tax_rate: string;
  tax_amount: string;
  base_tax_amount: string;
  is_tax_adjustment: boolean;
  discount_rate: string;
  discount_amount: string;
  base_discount_amount: string;
  is_discount_adjustment: boolean;
  is_active: boolean;
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

export const purchaseRequestTemplateDetails: PurchaseRequestTemplateDetail[] = [
  {
    id: "prtd-001",
    purchase_request_template_id: "550e8400-e29b-41d4-a716-446655440001",
    location_id: "loc-001",
    location_name: "Main Warehouse",
    delivery_point_id: "dp-001",
    delivery_point_name: "Main Office",
    product_id: "prod-001",
    product_name: "Laptop Computer",
    product_local_name: "คอมพิวเตอร์แล็ปท็อป",
    inventory_unit_id: "unit-001",
    inventory_unit_name: "ชิ้น",
    description: "Standard laptop for IT staff",
    comment: "High performance required",
    currency_id: "curr-001",
    currency_name: "Thai Baht",
    exchange_rate: "1.00000",
    exchange_rate_date: "2024-01-15T00:00:00Z",
    requested_qty: "10.00000",
    requested_unit_id: "unit-001",
    requested_unit_name: "ชิ้น",
    requested_unit_conversion_factor: "1.00000",
    requested_base_qty: "10.00000",
    foc_qty: "1.00000",
    foc_unit_id: "unit-001",
    foc_unit_name: "ชิ้น",
    foc_unit_conversion_factor: "1.00000",
    foc_base_qty: "1.00000",
    tax_profile_id: "tax-001",
    tax_profile_name: "VAT 7%",
    tax_rate: "7.00000",
    tax_amount: "700.00000",
    base_tax_amount: "700.00000",
    is_tax_adjustment: false,
    discount_rate: "5.00000",
    discount_amount: "500.00000",
    base_discount_amount: "500.00000",
    is_discount_adjustment: false,
    is_active: true,
    info: {
      category: "IT Equipment",
      priority: "high",
      warranty: "3 years",
    },
    dimension: {
      cost_center: "IT-001",
      project_code: "IT-2024",
    },
    doc_version: "1",
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "user-001",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: "prtd-002",
    purchase_request_template_id: "550e8400-e29b-41d4-a716-446655440002",
    location_id: "loc-002",
    location_name: "Office Storage",
    delivery_point_id: "dp-002",
    delivery_point_name: "Admin Office",
    product_id: "prod-002",
    product_name: "Office Chair",
    product_local_name: "เก้าอี้สำนักงาน",
    inventory_unit_id: "unit-002",
    inventory_unit_name: "ตัว",
    description: "Ergonomic office chair",
    comment: "Adjustable height and backrest",
    currency_id: "curr-001",
    currency_name: "Thai Baht",
    exchange_rate: "1.00000",
    exchange_rate_date: "2024-01-15T00:00:00Z",
    requested_qty: "20.00000",
    requested_unit_id: "unit-002",
    requested_unit_name: "ตัว",
    requested_unit_conversion_factor: "1.00000",
    requested_base_qty: "20.00000",
    foc_qty: "2.00000",
    foc_unit_id: "unit-002",
    foc_unit_name: "ตัว",
    foc_unit_conversion_factor: "1.00000",
    foc_base_qty: "2.00000",
    tax_profile_id: "tax-001",
    tax_profile_name: "VAT 7%",
    tax_rate: "7.00000",
    tax_amount: "140.00000",
    base_tax_amount: "140.00000",
    is_tax_adjustment: false,
    discount_rate: "10.00000",
    discount_amount: "200.00000",
    base_discount_amount: "200.00000",
    is_discount_adjustment: false,
    is_active: true,
    info: {
      category: "Office Furniture",
      priority: "medium",
      warranty: "1 year",
    },
    dimension: {
      cost_center: "ADMIN-001",
      project_code: "ADMIN-2024",
    },
    doc_version: "1",
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "user-002",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: "prtd-003",
    purchase_request_template_id: "550e8400-e29b-41d4-a716-446655440003",
    location_id: "loc-003",
    location_name: "Marketing Storage",
    delivery_point_id: "dp-003",
    delivery_point_name: "Marketing Office",
    product_id: "prod-003",
    product_name: "Promotional Banner",
    product_local_name: "แบนเนอร์โฆษณา",
    inventory_unit_id: "unit-003",
    inventory_unit_name: "ชิ้น",
    description: "Large format promotional banner",
    comment: "Weather resistant material",
    currency_id: "curr-001",
    currency_name: "Thai Baht",
    exchange_rate: "1.00000",
    exchange_rate_date: "2024-01-15T00:00:00Z",
    requested_qty: "50.00000",
    requested_unit_id: "unit-003",
    requested_unit_name: "ชิ้น",
    requested_unit_conversion_factor: "1.00000",
    requested_base_qty: "50.00000",
    foc_qty: "5.00000",
    foc_unit_id: "unit-003",
    foc_unit_name: "ชิ้น",
    foc_unit_conversion_factor: "1.00000",
    foc_base_qty: "5.00000",
    tax_profile_id: "tax-001",
    tax_profile_name: "VAT 7%",
    tax_rate: "7.00000",
    tax_amount: "35.00000",
    base_tax_amount: "35.00000",
    is_tax_adjustment: false,
    discount_rate: "15.00000",
    discount_amount: "75.00000",
    base_discount_amount: "75.00000",
    is_discount_adjustment: false,
    is_active: false,
    info: {
      category: "Marketing Materials",
      priority: "low",
      durability: "6 months outdoor",
    },
    dimension: {
      cost_center: "MKT-001",
      project_code: "MKT-2024",
    },
    doc_version: "1",
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "user-003",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
];

// CREATE - สร้าง PurchaseRequestTemplateDetail ใหม่
export const createPurchaseRequestTemplateDetail = (
  data: Omit<
    PurchaseRequestTemplateDetail,
    "id" | "created_at" | "created_by_id"
  >
): PurchaseRequestTemplateDetail => {
  const newDetail: PurchaseRequestTemplateDetail = {
    ...data,
    id: generateId(),
    created_at: getCurrentTimestamp(),
    created_by_id: "system",
  };

  purchaseRequestTemplateDetails.push(newDetail);
  return newDetail;
};

// READ - อ่าน PurchaseRequestTemplateDetail ทั้งหมด
export const getAllPurchaseRequestTemplateDetails =
  (): PurchaseRequestTemplateDetail[] => {
    return purchaseRequestTemplateDetails.filter(
      (detail) => !detail.deleted_at
    );
  };

// READ - อ่าน PurchaseRequestTemplateDetail ตาม ID
export const getPurchaseRequestTemplateDetailById = (
  id: string
): PurchaseRequestTemplateDetail | null => {
  const detail = purchaseRequestTemplateDetails.find(
    (detail) => detail.id === id && !detail.deleted_at
  );
  return detail || null;
};

// READ - อ่าน PurchaseRequestTemplateDetail ตาม purchase_request_template_id
export const getPurchaseRequestTemplateDetailsByTemplateId = (
  templateId: string
): PurchaseRequestTemplateDetail[] => {
  return purchaseRequestTemplateDetails.filter(
    (detail) =>
      detail.purchase_request_template_id === templateId && !detail.deleted_at
  );
};

// READ - อ่าน PurchaseRequestTemplateDetail ตาม location_id
export const getPurchaseRequestTemplateDetailsByLocationId = (
  locationId: string
): PurchaseRequestTemplateDetail[] => {
  return purchaseRequestTemplateDetails.filter(
    (detail) => detail.location_id === locationId && !detail.deleted_at
  );
};

// READ - อ่าน PurchaseRequestTemplateDetail ตาม product_id
export const getPurchaseRequestTemplateDetailsByProductId = (
  productId: string
): PurchaseRequestTemplateDetail[] => {
  return purchaseRequestTemplateDetails.filter(
    (detail) => detail.product_id === productId && !detail.deleted_at
  );
};

// READ - อ่าน PurchaseRequestTemplateDetail ตาม currency_id
export const getPurchaseRequestTemplateDetailsByCurrencyId = (
  currencyId: string
): PurchaseRequestTemplateDetail[] => {
  return purchaseRequestTemplateDetails.filter(
    (detail) => detail.currency_id === currencyId && !detail.deleted_at
  );
};

// READ - อ่าน PurchaseRequestTemplateDetail ที่ active
export const getActivePurchaseRequestTemplateDetails =
  (): PurchaseRequestTemplateDetail[] => {
    return purchaseRequestTemplateDetails.filter(
      (detail) => detail.is_active && !detail.deleted_at
    );
  };

// READ - อ่าน PurchaseRequestTemplateDetail ที่ inactive
export const getInactivePurchaseRequestTemplateDetails =
  (): PurchaseRequestTemplateDetail[] => {
    return purchaseRequestTemplateDetails.filter(
      (detail) => !detail.is_active && !detail.deleted_at
    );
  };

// READ - อ่าน PurchaseRequestTemplateDetail ที่มี description
export const getPurchaseRequestTemplateDetailsWithDescription =
  (): PurchaseRequestTemplateDetail[] => {
    return purchaseRequestTemplateDetails.filter(
      (detail) =>
        detail.description &&
        detail.description.trim() !== "" &&
        !detail.deleted_at
    );
  };

// READ - อ่าน PurchaseRequestTemplateDetail ที่มี comment
export const getPurchaseRequestTemplateDetailsWithComment =
  (): PurchaseRequestTemplateDetail[] => {
    return purchaseRequestTemplateDetails.filter(
      (detail) =>
        detail.comment && detail.comment.trim() !== "" && !detail.deleted_at
    );
  };

// READ - อ่าน PurchaseRequestTemplateDetail ที่มี foc_qty
export const getPurchaseRequestTemplateDetailsWithFocQty =
  (): PurchaseRequestTemplateDetail[] => {
    return purchaseRequestTemplateDetails.filter(
      (detail) => detail.foc_qty && !detail.deleted_at
    );
  };

// READ - อ่าน PurchaseRequestTemplateDetail ที่มี tax_amount
export const getPurchaseRequestTemplateDetailsWithTaxAmount =
  (): PurchaseRequestTemplateDetail[] => {
    return purchaseRequestTemplateDetails.filter(
      (detail) => detail.tax_amount && !detail.deleted_at
    );
  };

// READ - อ่าน PurchaseRequestTemplateDetail ที่มี discount_amount
export const getPurchaseRequestTemplateDetailsWithDiscountAmount =
  (): PurchaseRequestTemplateDetail[] => {
    return purchaseRequestTemplateDetails.filter(
      (detail) => detail.discount_amount && !detail.deleted_at
    );
  };

// READ - อ่าน PurchaseRequestTemplateDetail ที่มี info
export const getPurchaseRequestTemplateDetailsWithInfo =
  (): PurchaseRequestTemplateDetail[] => {
    return purchaseRequestTemplateDetails.filter(
      (detail) => detail.info && !detail.deleted_at
    );
  };

// READ - อ่าน PurchaseRequestTemplateDetail ที่มี dimension
export const getPurchaseRequestTemplateDetailsWithDimension =
  (): PurchaseRequestTemplateDetail[] => {
    return purchaseRequestTemplateDetails.filter(
      (detail) => detail.dimension && !detail.deleted_at
    );
  };

// READ - ค้นหา PurchaseRequestTemplateDetail แบบ fuzzy search
export const searchPurchaseRequestTemplateDetails = (
  searchTerm: string
): PurchaseRequestTemplateDetail[] => {
  const lowerSearchTerm = searchTerm.toLowerCase();

  return purchaseRequestTemplateDetails.filter(
    (detail) =>
      !detail.deleted_at &&
      (detail.description?.toLowerCase().includes(lowerSearchTerm) ||
        detail.comment?.toLowerCase().includes(lowerSearchTerm) ||
        detail.product_name?.toLowerCase().includes(lowerSearchTerm) ||
        detail.product_local_name?.toLowerCase().includes(lowerSearchTerm) ||
        detail.location_name?.toLowerCase().includes(lowerSearchTerm) ||
        detail.delivery_point_name?.toLowerCase().includes(lowerSearchTerm) ||
        detail.currency_name?.toLowerCase().includes(lowerSearchTerm) ||
        detail.inventory_unit_name?.toLowerCase().includes(lowerSearchTerm) ||
        detail.requested_unit_name?.toLowerCase().includes(lowerSearchTerm) ||
        detail.foc_unit_name?.toLowerCase().includes(lowerSearchTerm) ||
        detail.tax_profile_name?.toLowerCase().includes(lowerSearchTerm))
  );
};

// UPDATE - อัปเดต PurchaseRequestTemplateDetail
export const updatePurchaseRequestTemplateDetail = (
  id: string,
  updates: Partial<
    Omit<PurchaseRequestTemplateDetail, "id" | "created_at" | "created_by_id">
  >
): PurchaseRequestTemplateDetail | null => {
  const index = purchaseRequestTemplateDetails.findIndex(
    (detail) => detail.id === id
  );

  if (index === -1) {
    return null;
  }

  purchaseRequestTemplateDetails[index] = {
    ...purchaseRequestTemplateDetails[index],
    ...updates,
    updated_at: getCurrentTimestamp(),
  };

  return purchaseRequestTemplateDetails[index];
};

// UPDATE - อัปเดต PurchaseRequestTemplateDetail description
export const updatePurchaseRequestTemplateDetailDescription = (
  id: string,
  description: string
): PurchaseRequestTemplateDetail | null => {
  return updatePurchaseRequestTemplateDetail(id, { description });
};

// UPDATE - อัปเดต PurchaseRequestTemplateDetail comment
export const updatePurchaseRequestTemplateDetailComment = (
  id: string,
  comment: string
): PurchaseRequestTemplateDetail | null => {
  return updatePurchaseRequestTemplateDetail(id, { comment });
};

// UPDATE - อัปเดต PurchaseRequestTemplateDetail requested_qty
export const updatePurchaseRequestTemplateDetailRequestedQty = (
  id: string,
  requestedQty: string
): PurchaseRequestTemplateDetail | null => {
  return updatePurchaseRequestTemplateDetail(id, {
    requested_qty: requestedQty,
  });
};

// UPDATE - อัปเดต PurchaseRequestTemplateDetail foc_qty
export const updatePurchaseRequestTemplateDetailFocQty = (
  id: string,
  focQty: string
): PurchaseRequestTemplateDetail | null => {
  return updatePurchaseRequestTemplateDetail(id, { foc_qty: focQty });
};

// UPDATE - อัปเดต PurchaseRequestTemplateDetail tax_amount
export const updatePurchaseRequestTemplateDetailTaxAmount = (
  id: string,
  taxAmount: string
): PurchaseRequestTemplateDetail | null => {
  return updatePurchaseRequestTemplateDetail(id, { tax_amount: taxAmount });
};

// UPDATE - อัปเดต PurchaseRequestTemplateDetail discount_amount
export const updatePurchaseRequestTemplateDetailDiscountAmount = (
  id: string,
  discountAmount: string
): PurchaseRequestTemplateDetail | null => {
  return updatePurchaseRequestTemplateDetail(id, {
    discount_amount: discountAmount,
  });
};

// UPDATE - อัปเดต PurchaseRequestTemplateDetail active status
export const updatePurchaseRequestTemplateDetailActiveStatus = (
  id: string,
  isActive: boolean
): PurchaseRequestTemplateDetail | null => {
  return updatePurchaseRequestTemplateDetail(id, { is_active: isActive });
};

// UPDATE - อัปเดต PurchaseRequestTemplateDetail info
export const updatePurchaseRequestTemplateDetailInfo = (
  id: string,
  info: any
): PurchaseRequestTemplateDetail | null => {
  return updatePurchaseRequestTemplateDetail(id, { info });
};

// UPDATE - อัปเดต PurchaseRequestTemplateDetail dimension
export const updatePurchaseRequestTemplateDetailDimension = (
  id: string,
  dimension: any
): PurchaseRequestTemplateDetail | null => {
  return updatePurchaseRequestTemplateDetail(id, { dimension });
};

// UPDATE - อัปเดต PurchaseRequestTemplateDetail doc_version
export const updatePurchaseRequestTemplateDetailDocVersion = (
  id: string,
  docVersion: string
): PurchaseRequestTemplateDetail | null => {
  return updatePurchaseRequestTemplateDetail(id, { doc_version: docVersion });
};

// DELETE - ลบ PurchaseRequestTemplateDetail (soft delete)
export const deletePurchaseRequestTemplateDetail = (
  id: string,
  deletedById: string
): boolean => {
  const index = purchaseRequestTemplateDetails.findIndex(
    (detail) => detail.id === id
  );

  if (index === -1) {
    return false;
  }

  purchaseRequestTemplateDetails[index] = {
    ...purchaseRequestTemplateDetails[index],
    deleted_at: getCurrentTimestamp(),
    deleted_by_id: deletedById,
  };

  return true;
};

// DELETE - ลบ PurchaseRequestTemplateDetail แบบถาวร
export const hardDeletePurchaseRequestTemplateDetail = (
  id: string
): boolean => {
  const index = purchaseRequestTemplateDetails.findIndex(
    (detail) => detail.id === id
  );

  if (index === -1) {
    return false;
  }

  purchaseRequestTemplateDetails.splice(index, 1);
  return true;
};

// DELETE - ลบ PurchaseRequestTemplateDetail ตาม template_id
export const deletePurchaseRequestTemplateDetailsByTemplateId = (
  templateId: string,
  deletedById: string
): number => {
  let deletedCount = 0;

  purchaseRequestTemplateDetails.forEach((detail) => {
    if (
      detail.purchase_request_template_id === templateId &&
      !detail.deleted_at
    ) {
      detail.deleted_at = getCurrentTimestamp();
      detail.deleted_by_id = deletedById;
      deletedCount++;
    }
  });

  return deletedCount;
};

// DELETE - ลบ PurchaseRequestTemplateDetail ตาม location_id
export const deletePurchaseRequestTemplateDetailsByLocationId = (
  locationId: string,
  deletedById: string
): number => {
  let deletedCount = 0;

  purchaseRequestTemplateDetails.forEach((detail) => {
    if (detail.location_id === locationId && !detail.deleted_at) {
      detail.deleted_at = getCurrentTimestamp();
      detail.deleted_by_id = deletedById;
      deletedCount++;
    }
  });

  return deletedCount;
};

// DELETE - ลบ PurchaseRequestTemplateDetail ตาม product_id
export const deletePurchaseRequestTemplateDetailsByProductId = (
  productId: string,
  deletedById: string
): number => {
  let deletedCount = 0;

  purchaseRequestTemplateDetails.forEach((detail) => {
    if (detail.product_id === productId && !detail.deleted_at) {
      detail.deleted_at = getCurrentTimestamp();
      detail.deleted_by_id = deletedById;
      deletedCount++;
    }
  });

  return deletedCount;
};

// RESTORE - กู้คืน PurchaseRequestTemplateDetail ที่ถูกลบ
export const restorePurchaseRequestTemplateDetail = (id: string): boolean => {
  const index = purchaseRequestTemplateDetails.findIndex(
    (detail) => detail.id === id
  );

  if (index === -1) {
    return false;
  }

  if (purchaseRequestTemplateDetails[index].deleted_at) {
    purchaseRequestTemplateDetails[index] = {
      ...purchaseRequestTemplateDetails[index],
      deleted_at: null,
      deleted_by_id: null,
    };
    return true;
  }

  return false;
};

// RESTORE - กู้คืน PurchaseRequestTemplateDetail ตาม template_id
export const restorePurchaseRequestTemplateDetailsByTemplateId = (
  templateId: string
): number => {
  let restoredCount = 0;

  purchaseRequestTemplateDetails.forEach((detail) => {
    if (
      detail.purchase_request_template_id === templateId &&
      detail.deleted_at
    ) {
      detail.deleted_at = null;
      detail.deleted_by_id = null;
      restoredCount++;
    }
  });

  return restoredCount;
};

// RESTORE - กู้คืน PurchaseRequestTemplateDetail ตาม location_id
export const restorePurchaseRequestTemplateDetailsByLocationId = (
  locationId: string
): number => {
  let restoredCount = 0;

  purchaseRequestTemplateDetails.forEach((detail) => {
    if (detail.location_id === locationId && detail.deleted_at) {
      detail.deleted_at = null;
      detail.deleted_by_id = null;
      restoredCount++;
    }
  });

  return restoredCount;
};

// RESTORE - กู้คืน PurchaseRequestTemplateDetail ตาม product_id
export const restorePurchaseRequestTemplateDetailsByProductId = (
  productId: string
): number => {
  let restoredCount = 0;

  purchaseRequestTemplateDetails.forEach((detail) => {
    if (detail.product_id === productId && detail.deleted_at) {
      detail.deleted_at = null;
      detail.deleted_by_id = null;
      restoredCount++;
    }
  });

  return restoredCount;
};

// Utility function สำหรับล้างข้อมูลทั้งหมด (ใช้สำหรับ testing)
export const clearAllPurchaseRequestTemplateDetails = (): void => {
  purchaseRequestTemplateDetails.length = 0;
};

// Utility function สำหรับนับจำนวน PurchaseRequestTemplateDetail
export const getPurchaseRequestTemplateDetailCount = (): number => {
  return purchaseRequestTemplateDetails.length;
};

// Utility function สำหรับนับจำนวน PurchaseRequestTemplateDetail ตาม template_id
export const getPurchaseRequestTemplateDetailCountByTemplateId = (
  templateId: string
): number => {
  return purchaseRequestTemplateDetails.filter(
    (detail) => detail.purchase_request_template_id === templateId
  ).length;
};

// Utility function สำหรับนับจำนวน PurchaseRequestTemplateDetail ตาม location_id
export const getPurchaseRequestTemplateDetailCountByLocationId = (
  locationId: string
): number => {
  return purchaseRequestTemplateDetails.filter(
    (detail) => detail.location_id === locationId
  ).length;
};

// Utility function สำหรับนับจำนวน PurchaseRequestTemplateDetail ตาม product_id
export const getPurchaseRequestTemplateDetailCountByProductId = (
  productId: string
): number => {
  return purchaseRequestTemplateDetails.filter(
    (detail) => detail.product_id === productId
  ).length;
};

// Utility function สำหรับนับจำนวน PurchaseRequestTemplateDetail ที่ active
export const getActivePurchaseRequestTemplateDetailCount = (): number => {
  return purchaseRequestTemplateDetails.filter((detail) => detail.is_active)
    .length;
};

// Utility function สำหรับนับจำนวน PurchaseRequestTemplateDetail ที่ inactive
export const getInactivePurchaseRequestTemplateDetailCount = (): number => {
  return purchaseRequestTemplateDetails.filter((detail) => !detail.is_active)
    .length;
};

// Utility function สำหรับตรวจสอบ PurchaseRequestTemplateDetail ที่ถูกลบแล้ว
export const getDeletedPurchaseRequestTemplateDetails =
  (): PurchaseRequestTemplateDetail[] => {
    return purchaseRequestTemplateDetails.filter(
      (detail) => detail.deleted_at !== null
    );
  };

// Utility function สำหรับตรวจสอบ PurchaseRequestTemplateDetail ที่มี description
export const hasPurchaseRequestTemplateDetailDescription = (
  id: string
): boolean => {
  const detail = getPurchaseRequestTemplateDetailById(id);
  return detail
    ? !!(detail.description && (detail.description as string).trim() !== "")
    : false;
};

// Utility function สำหรับตรวจสอบ PurchaseRequestTemplateDetail ที่มี comment
export const hasPurchaseRequestTemplateDetailComment = (
  id: string
): boolean => {
  const detail = getPurchaseRequestTemplateDetailById(id);
  return detail
    ? !!(detail.comment && (detail.comment as string).trim() !== "")
    : false;
};

// Utility function สำหรับตรวจสอบ PurchaseRequestTemplateDetail ที่มี foc_qty
export const hasPurchaseRequestTemplateDetailFocQty = (id: string): boolean => {
  const detail = getPurchaseRequestTemplateDetailById(id);
  return detail
    ? !!(detail.foc_qty && (detail.foc_qty as string).trim() !== "")
    : false;
};

// Utility function สำหรับตรวจสอบ PurchaseRequestTemplateDetail ที่มี tax_amount
export const hasPurchaseRequestTemplateDetailTaxAmount = (
  id: string
): boolean => {
  const detail = getPurchaseRequestTemplateDetailById(id);
  return detail
    ? !!(detail.tax_amount && (detail.tax_amount as string).trim() !== "")
    : false;
};

// Utility function สำหรับตรวจสอบ PurchaseRequestTemplateDetail ที่มี discount_amount
export const hasPurchaseRequestTemplateDetailDiscountAmount = (
  id: string
): boolean => {
  const detail = getPurchaseRequestTemplateDetailById(id);
  return detail
    ? !!(
        detail.discount_amount &&
        (detail.discount_amount as string).trim() !== ""
      )
    : false;
};

// Utility function สำหรับตรวจสอบ PurchaseRequestTemplateDetail ที่มี info
export const hasPurchaseRequestTemplateDetailInfo = (id: string): boolean => {
  const detail = getPurchaseRequestTemplateDetailById(id);
  return detail ? detail.info && detail.info !== null : false;
};

// Utility function สำหรับตรวจสอบ PurchaseRequestTemplateDetail ที่มี dimension
export const hasPurchaseRequestTemplateDetailDimension = (
  id: string
): boolean => {
  const detail = getPurchaseRequestTemplateDetailById(id);
  return detail ? detail.dimension && detail.dimension !== null : false;
};

// Utility function สำหรับตรวจสอบ PurchaseRequestTemplateDetail ที่มี created_by_id
export const hasPurchaseRequestTemplateDetailCreatedBy = (
  id: string
): boolean => {
  const detail = getPurchaseRequestTemplateDetailById(id);
  return detail
    ? !!(detail.created_by_id && (detail.created_by_id as string).trim() !== "")
    : false;
};

// Utility function สำหรับตรวจสอบ PurchaseRequestTemplateDetail ที่มี updated_by_id
export const hasPurchaseRequestTemplateDetailUpdatedBy = (
  id: string
): boolean => {
  const detail = getPurchaseRequestTemplateDetailById(id);
  return detail
    ? !!(detail.updated_by_id && (detail.updated_by_id as string).trim() !== "")
    : false;
};

// Utility function สำหรับตรวจสอบ PurchaseRequestTemplateDetail ที่มี deleted_by_id
export const hasPurchaseRequestTemplateDetailDeletedBy = (
  id: string
): boolean => {
  const detail = getPurchaseRequestTemplateDetailById(id);
  return detail
    ? !!(detail.deleted_by_id && (detail.deleted_by_id as string).trim() !== "")
    : false;
};

// Utility function สำหรับตรวจสอบ PurchaseRequestTemplateDetail ที่มี created_at
export const hasPurchaseRequestTemplateDetailCreatedAt = (
  id: string
): boolean => {
  const detail = getPurchaseRequestTemplateDetailById(id);
  return detail
    ? !!(detail.created_at && (detail.created_at as string).trim() !== "")
    : false;
};

// Utility function สำหรับตรวจสอบ PurchaseRequestTemplateDetail ที่มี updated_at
export const hasPurchaseRequestTemplateDetailUpdatedAt = (
  id: string
): boolean => {
  const detail = getPurchaseRequestTemplateDetailById(id);
  return detail
    ? !!(detail.updated_at && (detail.updated_at as string).trim() !== "")
    : false;
};

// Utility function สำหรับตรวจสอบ PurchaseRequestTemplateDetail ที่มี deleted_at
export const hasPurchaseRequestTemplateDetailDeletedAt = (
  id: string
): boolean => {
  const detail = getPurchaseRequestTemplateDetailById(id);
  return detail
    ? !!(detail.deleted_at && (detail.deleted_at as string).trim() !== "")
    : false;
};
