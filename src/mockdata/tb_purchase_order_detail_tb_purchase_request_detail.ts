import { generateId, getCurrentTimestamp } from "@/libs/utils";
import { getUuidByName } from "./mapping.uuid";

export interface PurchaseOrderDetailPurchaseRequestDetail {
  id: string;
  po_detail_id: string;
  pr_detail_id: string;
  pr_detail_order_unit_id: string;
  pr_detail_order_unit_name: string;
  pr_detail_qty: string;
  pr_detail_base_qty: string;
  pr_detail_base_unit_id: string;
  pr_detail_base_unit_name: string;
  pr_detail_remaining_qty: string;
  pr_detail_unit_conversion_factor: number;
  created_at: string;
  created_by_id: string;
  updated_at: string | null;
  updated_by_id: string | null;
  deleted_at: string | null;
  deleted_by_id: string | null;
}

export const purchaseOrderDetailPurchaseRequestDetails: PurchaseOrderDetailPurchaseRequestDetail[] =
  [
    {
      id: getUuidByName("PURCHASE_ORDER_DETAIL_PURCHASE_REQUEST_DETAIL_01"),
      po_detail_id: getUuidByName("PURCHASE_ORDER_DETAIL_01"),
      pr_detail_id: getUuidByName("PURCHASE_REQUEST_DETAIL_01"),
      pr_detail_order_unit_id: getUuidByName("UNIT_01"),
      pr_detail_order_unit_name: "ชิ้น",
      pr_detail_qty: "100.00000",
      pr_detail_base_qty: "100.00000",
      pr_detail_base_unit_id: getUuidByName("UNIT_01"),
      pr_detail_base_unit_name: "ชิ้น",
      pr_detail_remaining_qty: "100.00000",
      pr_detail_unit_conversion_factor: 1,
      created_at: "2024-01-15T10:00:00Z",
      created_by_id: getUuidByName("USER_01"),
      updated_at: null,
      updated_by_id: null,
      deleted_at: null,
      deleted_by_id: null,
    },
    {
      id: getUuidByName("PURCHASE_ORDER_DETAIL_PURCHASE_REQUEST_DETAIL_02"),
      po_detail_id: getUuidByName("PURCHASE_ORDER_DETAIL_01"),
      pr_detail_id: getUuidByName("PURCHASE_REQUEST_DETAIL_02"),
      pr_detail_order_unit_id: getUuidByName("UNIT_02"),
      pr_detail_order_unit_name: "กล่อง",
      pr_detail_qty: "50.00000",
      pr_detail_base_qty: "500.00000",
      pr_detail_base_unit_id: getUuidByName("UNIT_03"),
      pr_detail_base_unit_name: "ชิ้น",
      pr_detail_remaining_qty: "50.00000",
      pr_detail_unit_conversion_factor: 10,
      created_at: "2024-01-16T11:00:00Z",
      created_by_id: getUuidByName("USER_02"),
      updated_at: null,
      updated_by_id: null,
      deleted_at: null,
      deleted_by_id: null,
    },
    {
      id: getUuidByName("PURCHASE_ORDER_DETAIL_PURCHASE_REQUEST_DETAIL_03"),
      po_detail_id: getUuidByName("PURCHASE_ORDER_DETAIL_01"),
      pr_detail_id: "pr-detail-003",
      pr_detail_order_unit_id: getUuidByName("UNIT_04"),
      pr_detail_order_unit_name: "เมตร",
      pr_detail_qty: "200.00000",
      pr_detail_base_qty: "20000.00000",
      pr_detail_base_unit_id: getUuidByName("UNIT_05"),
      pr_detail_base_unit_name: "เซนติเมตร",
      pr_detail_remaining_qty: "200.00000",
      pr_detail_unit_conversion_factor: 100,
      created_at: "2024-01-17T12:00:00Z",
      created_by_id: getUuidByName("USER_03"),
      updated_at: null,
      updated_by_id: null,
      deleted_at: null,
      deleted_by_id: null,
    },
  ];

// CREATE - สร้าง PurchaseOrderDetailPurchaseRequestDetail ใหม่
export const createPurchaseOrderDetailPurchaseRequestDetail = (
  data: Omit<
    PurchaseOrderDetailPurchaseRequestDetail,
    "id" | "created_at" | "created_by_id"
  >
): PurchaseOrderDetailPurchaseRequestDetail => {
  const newDetail: PurchaseOrderDetailPurchaseRequestDetail = {
    ...data,
    id: generateId(),
    created_at: getCurrentTimestamp(),
    created_by_id: "system",
  };

  purchaseOrderDetailPurchaseRequestDetails.push(newDetail);
  return newDetail;
};

// READ - อ่าน PurchaseOrderDetailPurchaseRequestDetail ทั้งหมด
export const getAllPurchaseOrderDetailPurchaseRequestDetails =
  (): PurchaseOrderDetailPurchaseRequestDetail[] => {
    return purchaseOrderDetailPurchaseRequestDetails.filter(
      (detail) => !detail.deleted_at
    );
  };

// READ - อ่าน PurchaseOrderDetailPurchaseRequestDetail ตาม ID
export const getPurchaseOrderDetailPurchaseRequestDetailById = (
  id: string
): PurchaseOrderDetailPurchaseRequestDetail | null => {
  const detail = purchaseOrderDetailPurchaseRequestDetails.find(
    (detail) => detail.id === id && !detail.deleted_at
  );
  return detail || null;
};

// READ - อ่าน PurchaseOrderDetailPurchaseRequestDetail ตาม po_detail_id
export const getPurchaseOrderDetailPurchaseRequestDetailsByPoDetailId = (
  poDetailId: string
): PurchaseOrderDetailPurchaseRequestDetail[] => {
  return purchaseOrderDetailPurchaseRequestDetails.filter(
    (detail) => detail.po_detail_id === poDetailId && !detail.deleted_at
  );
};

// READ - อ่าน PurchaseOrderDetailPurchaseRequestDetail ตาม pr_detail_id
export const getPurchaseOrderDetailPurchaseRequestDetailsByPrDetailId = (
  prDetailId: string
): PurchaseOrderDetailPurchaseRequestDetail[] => {
  return purchaseOrderDetailPurchaseRequestDetails.filter(
    (detail) => detail.pr_detail_id === prDetailId && !detail.deleted_at
  );
};

// READ - อ่าน PurchaseOrderDetailPurchaseRequestDetail ตาม order unit
export const getPurchaseOrderDetailPurchaseRequestDetailsByOrderUnit = (
  orderUnitId: string
): PurchaseOrderDetailPurchaseRequestDetail[] => {
  return purchaseOrderDetailPurchaseRequestDetails.filter(
    (detail) =>
      detail.pr_detail_order_unit_id === orderUnitId && !detail.deleted_at
  );
};

// READ - อ่าน PurchaseOrderDetailPurchaseRequestDetail ตาม base unit
export const getPurchaseOrderDetailPurchaseRequestDetailsByBaseUnit = (
  baseUnitId: string
): PurchaseOrderDetailPurchaseRequestDetail[] => {
  return purchaseOrderDetailPurchaseRequestDetails.filter(
    (detail) =>
      detail.pr_detail_base_unit_id === baseUnitId && !detail.deleted_at
  );
};

// READ - ค้นหา PurchaseOrderDetailPurchaseRequestDetail แบบ fuzzy search
export const searchPurchaseOrderDetailPurchaseRequestDetails = (
  searchTerm: string
): PurchaseOrderDetailPurchaseRequestDetail[] => {
  const lowerSearchTerm = searchTerm.toLowerCase();

  return purchaseOrderDetailPurchaseRequestDetails.filter(
    (detail) =>
      !detail.deleted_at &&
      (detail.pr_detail_order_unit_name
        ?.toLowerCase()
        .includes(lowerSearchTerm) ||
        detail.pr_detail_base_unit_name
          ?.toLowerCase()
          .includes(lowerSearchTerm) ||
        detail.pr_detail_qty?.toLowerCase().includes(lowerSearchTerm) ||
        detail.pr_detail_base_qty?.toLowerCase().includes(lowerSearchTerm))
  );
};

// UPDATE - อัปเดต PurchaseOrderDetailPurchaseRequestDetail
export const updatePurchaseOrderDetailPurchaseRequestDetail = (
  id: string,
  updates: Partial<
    Omit<
      PurchaseOrderDetailPurchaseRequestDetail,
      "id" | "created_at" | "created_by_id"
    >
  >
): PurchaseOrderDetailPurchaseRequestDetail | null => {
  const index = purchaseOrderDetailPurchaseRequestDetails.findIndex(
    (detail) => detail.id === id
  );

  if (index === -1) {
    return null;
  }

  purchaseOrderDetailPurchaseRequestDetails[index] = {
    ...purchaseOrderDetailPurchaseRequestDetails[index],
    ...updates,
    updated_at: getCurrentTimestamp(),
  };

  return purchaseOrderDetailPurchaseRequestDetails[index];
};

// UPDATE - อัปเดต PurchaseOrderDetailPurchaseRequestDetail order unit
export const updatePurchaseOrderDetailPurchaseRequestDetailOrderUnit = (
  id: string,
  orderUnitId: string,
  orderUnitName: string
): PurchaseOrderDetailPurchaseRequestDetail | null => {
  return updatePurchaseOrderDetailPurchaseRequestDetail(id, {
    pr_detail_order_unit_id: orderUnitId,
    pr_detail_order_unit_name: orderUnitName,
  });
};

// UPDATE - อัปเดต PurchaseOrderDetailPurchaseRequestDetail base unit
export const updatePurchaseOrderDetailPurchaseRequestDetailBaseUnit = (
  id: string,
  baseUnitId: string,
  baseUnitName: string
): PurchaseOrderDetailPurchaseRequestDetail | null => {
  return updatePurchaseOrderDetailPurchaseRequestDetail(id, {
    pr_detail_base_unit_id: baseUnitId,
    pr_detail_base_unit_name: baseUnitName,
  });
};

// UPDATE - อัปเดต PurchaseOrderDetailPurchaseRequestDetail quantities
export const updatePurchaseOrderDetailPurchaseRequestDetailQuantities = (
  id: string,
  orderQty: string,
  baseQty: string
): PurchaseOrderDetailPurchaseRequestDetail | null => {
  return updatePurchaseOrderDetailPurchaseRequestDetail(id, {
    pr_detail_qty: orderQty,
    pr_detail_base_qty: baseQty,
  });
};

// DELETE - ลบ PurchaseOrderDetailPurchaseRequestDetail (soft delete)
export const deletePurchaseOrderDetailPurchaseRequestDetail = (
  id: string,
  deletedById: string
): boolean => {
  const index = purchaseOrderDetailPurchaseRequestDetails.findIndex(
    (detail) => detail.id === id
  );

  if (index === -1) {
    return false;
  }

  purchaseOrderDetailPurchaseRequestDetails[index] = {
    ...purchaseOrderDetailPurchaseRequestDetails[index],
    deleted_at: getCurrentTimestamp(),
    deleted_by_id: deletedById,
  };

  return true;
};

// DELETE - ลบ PurchaseOrderDetailPurchaseRequestDetail แบบถาวร
export const hardDeletePurchaseOrderDetailPurchaseRequestDetail = (
  id: string
): boolean => {
  const index = purchaseOrderDetailPurchaseRequestDetails.findIndex(
    (detail) => detail.id === id
  );

  if (index === -1) {
    return false;
  }

  purchaseOrderDetailPurchaseRequestDetails.splice(index, 1);
  return true;
};

// DELETE - ลบ PurchaseOrderDetailPurchaseRequestDetail ตาม po_detail_id
export const deletePurchaseOrderDetailPurchaseRequestDetailsByPoDetailId = (
  poDetailId: string,
  deletedById: string
): number => {
  let deletedCount = 0;

  purchaseOrderDetailPurchaseRequestDetails.forEach((detail) => {
    if (detail.po_detail_id === poDetailId && !detail.deleted_at) {
      detail.deleted_at = getCurrentTimestamp();
      detail.deleted_by_id = deletedById;
      deletedCount++;
    }
  });

  return deletedCount;
};

// DELETE - ลบ PurchaseOrderDetailPurchaseRequestDetail ตาม pr_detail_id
export const deletePurchaseOrderDetailPurchaseRequestDetailsByPrDetailId = (
  prDetailId: string,
  deletedById: string
): number => {
  let deletedCount = 0;

  purchaseOrderDetailPurchaseRequestDetails.forEach((detail) => {
    if (detail.pr_detail_id === prDetailId && !detail.deleted_at) {
      detail.deleted_at = getCurrentTimestamp();
      detail.deleted_by_id = deletedById;
      deletedCount++;
    }
  });

  return deletedCount;
};

// RESTORE - กู้คืน PurchaseOrderDetailPurchaseRequestDetail ที่ถูกลบ
export const restorePurchaseOrderDetailPurchaseRequestDetail = (
  id: string
): boolean => {
  const index = purchaseOrderDetailPurchaseRequestDetails.findIndex(
    (detail) => detail.id === id
  );

  if (index === -1) {
    return false;
  }

  if (purchaseOrderDetailPurchaseRequestDetails[index].deleted_at) {
    purchaseOrderDetailPurchaseRequestDetails[index] = {
      ...purchaseOrderDetailPurchaseRequestDetails[index],
      deleted_at: null,
      deleted_by_id: null,
    };
    return true;
  }

  return false;
};

// RESTORE - กู้คืน PurchaseOrderDetailPurchaseRequestDetail ตาม po_detail_id
export const restorePurchaseOrderDetailPurchaseRequestDetailsByPoDetailId = (
  poDetailId: string
): number => {
  let restoredCount = 0;

  purchaseOrderDetailPurchaseRequestDetails.forEach((detail) => {
    if (detail.po_detail_id === poDetailId && detail.deleted_at) {
      detail.deleted_at = null;
      detail.deleted_by_id = null;
      restoredCount++;
    }
  });

  return restoredCount;
};

// RESTORE - กู้คืน PurchaseOrderDetailPurchaseRequestDetail ตาม pr_detail_id
export const restorePurchaseOrderDetailPurchaseRequestDetailsByPrDetailId = (
  prDetailId: string
): number => {
  let restoredCount = 0;

  purchaseOrderDetailPurchaseRequestDetails.forEach((detail) => {
    if (detail.pr_detail_id === prDetailId && detail.deleted_at) {
      detail.deleted_at = null;
      detail.deleted_by_id = null;
      restoredCount++;
    }
  });

  return restoredCount;
};

// Utility function สำหรับล้างข้อมูลทั้งหมด (ใช้สำหรับ testing)
export const clearAllPurchaseOrderDetailPurchaseRequestDetails = (): void => {
  purchaseOrderDetailPurchaseRequestDetails.length = 0;
};

// Utility function สำหรับนับจำนวน PurchaseOrderDetailPurchaseRequestDetail
export const getPurchaseOrderDetailPurchaseRequestDetailCount = (): number => {
  return purchaseOrderDetailPurchaseRequestDetails.length;
};

// Utility function สำหรับนับจำนวน PurchaseOrderDetailPurchaseRequestDetail ตาม po_detail_id
export const getPurchaseOrderDetailPurchaseRequestDetailCountByPoDetailId = (
  poDetailId: string
): number => {
  return purchaseOrderDetailPurchaseRequestDetails.filter(
    (detail) => detail.po_detail_id === poDetailId
  ).length;
};

// Utility function สำหรับนับจำนวน PurchaseOrderDetailPurchaseRequestDetail ตาม pr_detail_id
export const getPurchaseOrderDetailPurchaseRequestDetailCountByPrDetailId = (
  prDetailId: string
): number => {
  return purchaseOrderDetailPurchaseRequestDetails.filter(
    (detail) => detail.pr_detail_id === prDetailId
  ).length;
};

// Utility function สำหรับตรวจสอบ PurchaseOrderDetailPurchaseRequestDetail ที่ถูกลบแล้ว
export const getDeletedPurchaseOrderDetailPurchaseRequestDetails =
  (): PurchaseOrderDetailPurchaseRequestDetail[] => {
    return purchaseOrderDetailPurchaseRequestDetails.filter(
      (detail) => detail.deleted_at !== null
    );
  };

// Utility function สำหรับตรวจสอบ PurchaseOrderDetailPurchaseRequestDetail ที่มี order unit
export const hasPurchaseOrderDetailPurchaseRequestDetailOrderUnit = (
  id: string
): boolean => {
  const detail = getPurchaseOrderDetailPurchaseRequestDetailById(id);
  return detail
    ? !!(
      detail.pr_detail_order_unit_id &&
      (detail.pr_detail_order_unit_id as string).trim() !== ""
    )
    : false;
};

// Utility function สำหรับตรวจสอบ PurchaseOrderDetailPurchaseRequestDetail ที่มี base unit
export const hasPurchaseOrderDetailPurchaseRequestDetailBaseUnit = (
  id: string
): boolean => {
  const detail = getPurchaseOrderDetailPurchaseRequestDetailById(id);
  return detail
    ? !!(
      detail.pr_detail_base_unit_id &&
      (detail.pr_detail_base_unit_id as string).trim() !== ""
    )
    : false;
};

// Utility function สำหรับตรวจสอบ PurchaseOrderDetailPurchaseRequestDetail ที่มี quantities
export const hasPurchaseOrderDetailPurchaseRequestDetailQuantities = (
  id: string
): boolean => {
  const detail = getPurchaseOrderDetailPurchaseRequestDetailById(id);
  return detail ? !!(detail.pr_detail_qty && detail.pr_detail_base_qty) : false;
};

// Utility function สำหรับตรวจสอบ PurchaseOrderDetailPurchaseRequestDetail ที่มี created_by_id
export const hasPurchaseOrderDetailPurchaseRequestDetailCreatedBy = (
  id: string
): boolean => {
  const detail = getPurchaseOrderDetailPurchaseRequestDetailById(id);
  return detail
    ? !!(detail.created_by_id && (detail.created_by_id as string).trim() !== "")
    : false;
};

// Utility function สำหรับตรวจสอบ PurchaseOrderDetailPurchaseRequestDetail ที่มี updated_by_id
export const hasPurchaseOrderDetailPurchaseRequestDetailUpdatedBy = (
  id: string
): boolean => {
  const detail = getPurchaseOrderDetailPurchaseRequestDetailById(id);
  return detail
    ? !!(detail.updated_by_id && (detail.updated_by_id as string).trim() !== "")
    : false;
};

// Utility function สำหรับตรวจสอบ PurchaseOrderDetailPurchaseRequestDetail ที่มี deleted_by_id
export const hasPurchaseOrderDetailPurchaseRequestDetailDeletedBy = (
  id: string
): boolean => {
  const detail = getPurchaseOrderDetailPurchaseRequestDetailById(id);
  return detail
    ? !!(detail.deleted_by_id && (detail.deleted_by_id as string).trim() !== "")
    : false;
};

// Utility function สำหรับตรวจสอบ PurchaseOrderDetailPurchaseRequestDetail ที่มี created_at
export const hasPurchaseOrderDetailPurchaseRequestDetailCreatedAt = (
  id: string
): boolean => {
  const detail = getPurchaseOrderDetailPurchaseRequestDetailById(id);
  return detail
    ? !!(detail.created_at && (detail.created_at as string).trim() !== "")
    : false;
};

// Utility function สำหรับตรวจสอบ PurchaseOrderDetailPurchaseRequestDetail ที่มี updated_at
export const hasPurchaseOrderDetailPurchaseRequestDetailUpdatedAt = (
  id: string
): boolean => {
  const detail = getPurchaseOrderDetailPurchaseRequestDetailById(id);
  return detail
    ? !!(detail.updated_at && (detail.updated_at as string).trim() !== "")
    : false;
};

// Utility function สำหรับตรวจสอบ PurchaseOrderDetailPurchaseRequestDetail ที่มี deleted_at
export const hasPurchaseOrderDetailPurchaseRequestDetailDeletedAt = (
  id: string
): boolean => {
  const detail = getPurchaseOrderDetailPurchaseRequestDetailById(id);
  return detail
    ? !!(detail.deleted_at && (detail.deleted_at as string).trim() !== "")
    : false;
};
