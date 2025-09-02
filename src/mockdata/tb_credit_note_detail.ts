import { generateId, getCurrentTimestamp } from "@/libs/utils";

export interface CreditNoteDetail {
  id: string;
  credit_note_id: string;
  inventory_transaction_id: string;
  sequence_no: number;
  description: string;
  note: string;
  location_id: string;
  location_name: string;
  delivery_point_id: string;
  delivery_point_name: string;
  product_id: string;
  product_name: string;
  product_local_name: string;
  return_qty: number;
  return_unit_id: string;
  return_unit_name: string;
  return_conversion_factor: number;
  return_base_qty: number;
  price: number;
  tax_profile_id: string;
  tax_profile_name: string;
  tax_rate: number;
  tax_amount: number;
  base_tax_amount: number;
  is_tax_adjustment: boolean;
  discount_rate: number;
  discount_amount: number;
  base_discount_amount: number;
  is_discount_adjustment: boolean;
  extra_cost_amount: number;
  base_extra_cost_amount: number;
  sub_total_price: number;
  net_amount: number;
  total_price: number;
  base_price: number;
  base_sub_total_price: number;
  base_net_amount: number;
  base_total_price: number;
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

export const creditNoteDetails: CreditNoteDetail[] = [
  {
    id: "k0l1m2n3-o4p5-6789-jklm-123456789012",
    credit_note_id: "h7i8j9k0-l1m2-3456-ghij-890123456789",
    inventory_transaction_id: "inv_txn_001",
    sequence_no: 1,
    description: "Credit note detail for returned product",
    note: "Product returned due to damage",
    location_id: "loc_001",
    location_name: "Main Warehouse",
    delivery_point_id: "dp_001",
    delivery_point_name: "Customer Site",
    product_id: "prod_001",
    product_name: "Product A",
    product_local_name: "สินค้า A",
    return_qty: 10,
    return_unit_id: "unit_001",
    return_unit_name: "piece",
    return_conversion_factor: 1,
    return_base_qty: 10,
    price: 100.0,
    tax_profile_id: "tax_001",
    tax_profile_name: "VAT 7%",
    tax_rate: 7,
    tax_amount: 7.0,
    base_tax_amount: 7.0,
    is_tax_adjustment: false,
    discount_rate: 0,
    discount_amount: 0.0,
    base_discount_amount: 0.0,
    is_discount_adjustment: false,
    extra_cost_amount: 0.0,
    base_extra_cost_amount: 0.0,
    sub_total_price: 1000.0,
    net_amount: 1000.0,
    total_price: 1070.0,
    base_price: 100.0,
    base_sub_total_price: 1000.0,
    base_net_amount: 1000.0,
    base_total_price: 1070.0,
    info: { category: "return", condition: "damaged" },
    dimension: { department: "sales", region: "bangkok" },
    doc_version: "1.0",
    created_at: "2025-07-31T09:30:00.000Z",
    created_by_id: "user_001",
    updated_at: "2025-07-31T09:30:00.000Z",
    updated_by_id: "user_001",
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: "l1m2n3o4-p5q6-7890-klmn-234567890123",
    credit_note_id: "h7i8j9k0-l1m2-3456-ghij-890123456789",
    inventory_transaction_id: "inv_txn_002",
    sequence_no: 2,
    description: "Credit note detail for returned product",
    note: "Product returned due to defect",
    location_id: "loc_001",
    location_name: "Main Warehouse",
    delivery_point_id: "dp_001",
    delivery_point_name: "Customer Site",
    product_id: "prod_002",
    product_name: "Product B",
    product_local_name: "สินค้า B",
    return_qty: 5,
    return_unit_id: "unit_001",
    return_unit_name: "piece",
    return_conversion_factor: 1,
    return_base_qty: 5,
    price: 200.0,
    tax_profile_id: "tax_001",
    tax_profile_name: "VAT 7%",
    tax_rate: 7,
    tax_amount: 14.0,
    base_tax_amount: 14.0,
    is_tax_adjustment: false,
    discount_rate: 0,
    discount_amount: 0.0,
    base_discount_amount: 0.0,
    is_discount_adjustment: false,
    extra_cost_amount: 0.0,
    base_extra_cost_amount: 0.0,
    sub_total_price: 1000.0,
    net_amount: 1000.0,
    total_price: 1070.0,
    base_price: 200.0,
    base_sub_total_price: 1000.0,
    base_net_amount: 1000.0,
    base_total_price: 1070.0,
    info: { category: "return", condition: "defective" },
    dimension: { department: "sales", region: "bangkok" },
    doc_version: "1.0",
    created_at: "2025-07-31T09:31:00.000Z",
    created_by_id: "user_001",
    updated_at: "2025-07-31T09:31:00.000Z",
    updated_by_id: "user_001",
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: "m2n3o4p5-q6r7-8901-lmno-345678901234",
    credit_note_id: "i8j9k0l1-m2n3-4567-hijk-901234567890",
    inventory_transaction_id: "inv_txn_003",
    sequence_no: 1,
    description: "Credit note detail for price adjustment",
    note: "Price correction due to pricing error",
    location_id: "loc_002",
    location_name: "Secondary Warehouse",
    delivery_point_id: "dp_002",
    delivery_point_name: "Office",
    product_id: "prod_003",
    product_name: "Product C",
    product_local_name: "สินค้า C",
    return_qty: 0,
    return_unit_id: "unit_001",
    return_unit_name: "piece",
    return_conversion_factor: 1,
    return_base_qty: 0,
    price: 150.0,
    tax_profile_id: "tax_001",
    tax_profile_name: "VAT 7%",
    tax_rate: 7,
    tax_amount: 10.5,
    base_tax_amount: 10.5,
    is_tax_adjustment: true,
    discount_rate: 10,
    discount_amount: 15.0,
    base_discount_amount: 15.0,
    is_discount_adjustment: true,
    extra_cost_amount: 0.0,
    base_extra_cost_amount: 0.0,
    sub_total_price: 0.0,
    net_amount: -15.0,
    total_price: -4.5,
    base_price: 150.0,
    base_sub_total_price: 0.0,
    base_net_amount: -15.0,
    base_total_price: -4.5,
    info: { category: "pricing", adjustment_type: "discount" },
    dimension: { department: "finance", region: "bangkok" },
    doc_version: "1.0",
    created_at: "2025-07-31T10:30:00.000Z",
    created_by_id: "user_002",
    updated_at: "2025-07-31T10:30:00.000Z",
    updated_by_id: "user_002",
    deleted_at: null,
    deleted_by_id: null,
  },
];

// CREATE - สร้าง CreditNoteDetail ใหม่
export const createCreditNoteDetail = (
  detailData: Omit<CreditNoteDetail, "id" | "created_at" | "updated_at">
): CreditNoteDetail => {
  const newDetail: CreditNoteDetail = {
    ...detailData,
    id: generateId(),
    created_at: getCurrentTimestamp(),
    updated_at: getCurrentTimestamp(),
  };

  creditNoteDetails.push(newDetail);
  return newDetail;
};

// READ - อ่าน CreditNoteDetail ทั้งหมด
export const getAllCreditNoteDetails = (): CreditNoteDetail[] => {
  return [...creditNoteDetails];
};

// READ - อ่าน CreditNoteDetail ตาม ID
export const getCreditNoteDetailById = (
  id: string
): CreditNoteDetail | undefined => {
  return creditNoteDetails.find((detail) => detail.id === id);
};

// READ - อ่าน CreditNoteDetail ตาม credit_note_id
export const getCreditNoteDetailsByCreditNoteId = (
  creditNoteId: string
): CreditNoteDetail[] => {
  return creditNoteDetails.filter(
    (detail) => detail.credit_note_id === creditNoteId
  );
};

// READ - อ่าน CreditNoteDetail ตาม inventory_transaction_id
export const getCreditNoteDetailsByInventoryTransactionId = (
  inventoryTransactionId: string
): CreditNoteDetail[] => {
  return creditNoteDetails.filter(
    (detail) => detail.inventory_transaction_id === inventoryTransactionId
  );
};

// READ - อ่าน CreditNoteDetail ตาม product_id
export const getCreditNoteDetailsByProductId = (
  productId: string
): CreditNoteDetail[] => {
  return creditNoteDetails.filter((detail) => detail.product_id === productId);
};

// READ - อ่าน CreditNoteDetail ตาม location_id
export const getCreditNoteDetailsByLocationId = (
  locationId: string
): CreditNoteDetail[] => {
  return creditNoteDetails.filter(
    (detail) => detail.location_id === locationId
  );
};

// READ - อ่าน CreditNoteDetail ตาม sequence_no
export const getCreditNoteDetailsBySequenceNo = (
  sequenceNo: number
): CreditNoteDetail[] => {
  return creditNoteDetails.filter(
    (detail) => detail.sequence_no === sequenceNo
  );
};

// READ - อ่าน CreditNoteDetail ตาม created_by_id
export const getCreditNoteDetailsByCreatedBy = (
  createdById: string
): CreditNoteDetail[] => {
  return creditNoteDetails.filter(
    (detail) => detail.created_by_id === createdById
  );
};

// READ - อ่าน CreditNoteDetail ที่ไม่ถูกลบ
export const getActiveCreditNoteDetails = (): CreditNoteDetail[] => {
  return creditNoteDetails.filter((detail) => !detail.deleted_at);
};

// READ - อ่าน CreditNoteDetail ที่ถูกลบ
export const getDeletedCreditNoteDetails = (): CreditNoteDetail[] => {
  return creditNoteDetails.filter((detail) => detail.deleted_at);
};

// READ - อ่าน CreditNoteDetail ตามช่วงเวลา
export const getCreditNoteDetailsByDateRange = (
  startDate: string,
  endDate: string
): CreditNoteDetail[] => {
  const start = new Date(startDate);
  const end = new Date(endDate);

  return creditNoteDetails.filter((detail) => {
    const detailDate = new Date(detail.created_at);
    return detailDate >= start && detailDate <= end;
  });
};

// UPDATE - อัปเดต CreditNoteDetail
export const updateCreditNoteDetail = (
  id: string,
  updateData: Partial<
    Omit<CreditNoteDetail, "id" | "created_at" | "created_by_id">
  >,
  updatedById: string
): CreditNoteDetail | null => {
  const index = creditNoteDetails.findIndex((detail) => detail.id === id);

  if (index === -1) {
    return null;
  }

  creditNoteDetails[index] = {
    ...creditNoteDetails[index],
    ...updateData,
    updated_at: getCurrentTimestamp(),
    updated_by_id: updatedById,
  };

  return creditNoteDetails[index];
};

// UPDATE - อัปเดต CreditNoteDetail sequence_no
export const updateCreditNoteDetailSequenceNo = (
  id: string,
  sequenceNo: number,
  updatedById: string
): CreditNoteDetail | null => {
  return updateCreditNoteDetail(id, { sequence_no: sequenceNo }, updatedById);
};

// UPDATE - อัปเดต CreditNoteDetail description
export const updateCreditNoteDetailDescription = (
  id: string,
  description: string,
  updatedById: string
): CreditNoteDetail | null => {
  return updateCreditNoteDetail(id, { description }, updatedById);
};

// UPDATE - อัปเดต CreditNoteDetail note
export const updateCreditNoteDetailNote = (
  id: string,
  note: string,
  updatedById: string
): CreditNoteDetail | null => {
  return updateCreditNoteDetail(id, { note }, updatedById);
};

// UPDATE - อัปเดต CreditNoteDetail return_qty
export const updateCreditNoteDetailReturnQty = (
  id: string,
  returnQty: number,
  updatedById: string
): CreditNoteDetail | null => {
  return updateCreditNoteDetail(id, { return_qty: returnQty }, updatedById);
};

// UPDATE - อัปเดต CreditNoteDetail price
export const updateCreditNoteDetailPrice = (
  id: string,
  price: number,
  updatedById: string
): CreditNoteDetail | null => {
  return updateCreditNoteDetail(id, { price }, updatedById);
};

// UPDATE - อัปเดต CreditNoteDetail info
export const updateCreditNoteDetailInfo = (
  id: string,
  info: any,
  updatedById: string
): CreditNoteDetail | null => {
  return updateCreditNoteDetail(id, { info }, updatedById);
};

// UPDATE - อัปเดต CreditNoteDetail dimension
export const updateCreditNoteDetailDimension = (
  id: string,
  dimension: any,
  updatedById: string
): CreditNoteDetail | null => {
  return updateCreditNoteDetail(id, { dimension }, updatedById);
};

// UPDATE - อัปเดต CreditNoteDetail โดย credit_note_id และ sequence_no
export const updateCreditNoteDetailByCreditNoteAndSequence = (
  creditNoteId: string,
  sequenceNo: number,
  updateData: Partial<
    Omit<
      CreditNoteDetail,
      "id" | "credit_note_id" | "sequence_no" | "created_at" | "created_by_id"
    >
  >,
  updatedById: string
): CreditNoteDetail | null => {
  const detail = creditNoteDetails.find(
    (d) => d.credit_note_id === creditNoteId && d.sequence_no === sequenceNo
  );

  if (!detail) return null;

  return updateCreditNoteDetail(detail.id, updateData, updatedById);
};

// DELETE - ลบ CreditNoteDetail (soft delete)
export const deleteCreditNoteDetail = (
  id: string,
  deletedById: string
): boolean => {
  const index = creditNoteDetails.findIndex((detail) => detail.id === id);

  if (index === -1) {
    return false;
  }

  creditNoteDetails[index] = {
    ...creditNoteDetails[index],
    deleted_at: getCurrentTimestamp(),
    deleted_by_id: deletedById,
  };

  return true;
};

// DELETE - ลบ CreditNoteDetail แบบถาวร
export const hardDeleteCreditNoteDetail = (id: string): boolean => {
  const index = creditNoteDetails.findIndex((detail) => detail.id === id);

  if (index === -1) {
    return false;
  }

  creditNoteDetails.splice(index, 1);
  return true;
};

// DELETE - ลบ CreditNoteDetail ตาม credit_note_id
export const deleteCreditNoteDetailsByCreditNoteId = (
  creditNoteId: string,
  deletedById: string
): number => {
  let deletedCount = 0;

  creditNoteDetails.forEach((detail) => {
    if (detail.credit_note_id === creditNoteId && !detail.deleted_at) {
      detail.deleted_at = getCurrentTimestamp();
      detail.deleted_by_id = deletedById;
      deletedCount++;
    }
  });

  return deletedCount;
};

// DELETE - ลบ CreditNoteDetail ตาม product_id
export const deleteCreditNoteDetailsByProductId = (
  productId: string,
  deletedById: string
): number => {
  let deletedCount = 0;

  creditNoteDetails.forEach((detail) => {
    if (detail.product_id === productId && !detail.deleted_at) {
      detail.deleted_at = getCurrentTimestamp();
      detail.deleted_by_id = deletedById;
      deletedCount++;
    }
  });

  return deletedCount;
};

// DELETE - ลบ CreditNoteDetail ตาม credit_note_id และ sequence_no
export const deleteCreditNoteDetailByCreditNoteAndSequence = (
  creditNoteId: string,
  sequenceNo: number,
  deletedById: string
): boolean => {
  const detail = creditNoteDetails.find(
    (d) => d.credit_note_id === creditNoteId && d.sequence_no === sequenceNo
  );

  if (!detail) return false;

  return deleteCreditNoteDetail(detail.id, deletedById);
};

// RESTORE - กู้คืน CreditNoteDetail ที่ถูกลบ
export const restoreCreditNoteDetail = (
  id: string,
  restoredById: string
): CreditNoteDetail | null => {
  const index = creditNoteDetails.findIndex((detail) => detail.id === id);

  if (index === -1) {
    return null;
  }

  creditNoteDetails[index] = {
    ...creditNoteDetails[index],
    deleted_at: null,
    deleted_by_id: null,
    updated_at: getCurrentTimestamp(),
    updated_by_id: restoredById,
  };

  return creditNoteDetails[index];
};

// RESTORE - กู้คืน CreditNoteDetail ทั้งหมดของ credit_note
export const restoreCreditNoteDetailsByCreditNoteId = (
  creditNoteId: string,
  restoredById: string
): number => {
  let restoredCount = 0;

  creditNoteDetails.forEach((detail) => {
    if (detail.credit_note_id === creditNoteId && detail.deleted_at) {
      detail.deleted_at = null;
      detail.deleted_by_id = null;
      detail.updated_at = getCurrentTimestamp();
      detail.updated_by_id = restoredById;
      restoredCount++;
    }
  });

  return restoredCount;
};

// Utility function สำหรับล้างข้อมูลทั้งหมด (ใช้สำหรับ testing)
export const clearAllCreditNoteDetails = (): void => {
  creditNoteDetails.length = 0;
};

// Utility function สำหรับนับจำนวน CreditNoteDetail
export const getCreditNoteDetailCount = (): number => {
  return creditNoteDetails.length;
};

// Utility function สำหรับนับจำนวน CreditNoteDetail ที่ไม่ถูกลบ
export const getActiveCreditNoteDetailCount = (): number => {
  return creditNoteDetails.filter((detail) => !detail.deleted_at).length;
};

// Utility function สำหรับนับจำนวน CreditNoteDetail ของ credit_note
export const getCreditNoteDetailCountByCreditNoteId = (
  creditNoteId: string
): number => {
  return creditNoteDetails.filter(
    (detail) => detail.credit_note_id === creditNoteId && !detail.deleted_at
  ).length;
};

// Utility function สำหรับนับจำนวน CreditNoteDetail ของ product
export const getCreditNoteDetailCountByProductId = (
  productId: string
): number => {
  return creditNoteDetails.filter(
    (detail) => detail.product_id === productId && !detail.deleted_at
  ).length;
};

// Utility function สำหรับหาลำดับ sequence_no ถัดไปของ credit_note
export const getNextCreditNoteSequenceNo = (creditNoteId: string): number => {
  const details = getCreditNoteDetailsByCreditNoteId(creditNoteId);
  if (details.length === 0) return 1;

  const maxSequence = Math.max(
    ...details.map((d: CreditNoteDetail) => d.sequence_no)
  );
  return maxSequence + 1;
};

// Utility function สำหรับคำนวณ total_price
export const calculateTotalPrice = (detail: CreditNoteDetail): string => {
  const subTotal = detail.sub_total_price || 0;
  const taxAmount = detail.tax_amount || 0;
  const discountAmount = detail.discount_amount || 0;
  const extraCostAmount = detail.extra_cost_amount || 0;

  const total = subTotal + taxAmount - discountAmount + extraCostAmount;
  return total.toFixed(2);
};

// Utility function สำหรับคำนวณ base_total_price
export const calculateBaseTotalPrice = (detail: CreditNoteDetail): string => {
  const baseSubTotal = detail.base_sub_total_price || 0;
  const baseTaxAmount = detail.base_tax_amount || 0;
  const baseDiscountAmount = detail.base_discount_amount || 0;
  const baseExtraCostAmount = detail.base_extra_cost_amount || 0;

  const total =
    baseSubTotal + baseTaxAmount - baseDiscountAmount + baseExtraCostAmount;
  return total.toFixed(2);
};

// Utility function สำหรับค้นหา CreditNoteDetail แบบ advanced search
export const searchCreditNoteDetails = (searchCriteria: {
  credit_note_id?: string;
  product_id?: string;
  product_name?: string;
  location_id?: string;
  location_name?: string;
  description?: string;
  note?: string;
  created_by_id?: string;
  is_deleted?: boolean;
  start_date?: string;
  end_date?: string;
}): CreditNoteDetail[] => {
  return creditNoteDetails.filter((detail) => {
    // ตรวจสอบ credit_note_id
    if (
      searchCriteria.credit_note_id &&
      detail.credit_note_id !== searchCriteria.credit_note_id
    ) {
      return false;
    }

    // ตรวจสอบ product_id
    if (
      searchCriteria.product_id &&
      detail.product_id !== searchCriteria.product_id
    ) {
      return false;
    }

    // ตรวจสอบ product_name
    if (
      searchCriteria.product_name &&
      !detail.product_name
        .toLowerCase()
        .includes(searchCriteria.product_name.toLowerCase())
    ) {
      return false;
    }

    // ตรวจสอบ location_id
    if (
      searchCriteria.location_id &&
      detail.location_id !== searchCriteria.location_id
    ) {
      return false;
    }

    // ตรวจสอบ location_name
    if (
      searchCriteria.location_name &&
      !detail.location_name
        .toLowerCase()
        .includes(searchCriteria.location_name.toLowerCase())
    ) {
      return false;
    }

    // ตรวจสอบ description
    if (
      searchCriteria.description &&
      !detail.description
        .toLowerCase()
        .includes(searchCriteria.description.toLowerCase())
    ) {
      return false;
    }

    // ตรวจสอบ note
    if (
      searchCriteria.note &&
      !detail.note.toLowerCase().includes(searchCriteria.note.toLowerCase())
    ) {
      return false;
    }

    // ตรวจสอบ created_by_id
    if (
      searchCriteria.created_by_id &&
      detail.created_by_id !== searchCriteria.created_by_id
    ) {
      return false;
    }

    // ตรวจสอบสถานะการลบ
    if (searchCriteria.is_deleted !== undefined) {
      const isDeleted = !!detail.deleted_at;
      if (isDeleted !== searchCriteria.is_deleted) {
        return false;
      }
    }

    // ตรวจสอบช่วงเวลา
    if (searchCriteria.start_date || searchCriteria.end_date) {
      const detailDate = new Date(detail.created_at);

      if (searchCriteria.start_date) {
        const startDate = new Date(searchCriteria.start_date);
        if (detailDate < startDate) {
          return false;
        }
      }

      if (searchCriteria.end_date) {
        const endDate = new Date(searchCriteria.end_date);
        if (detailDate > endDate) {
          return false;
        }
      }
    }

    return true;
  });
};

// Utility function สำหรับตรวจสอบ sequence_no ซ้ำใน credit_note
export const isSequenceNoExistsInCreditNote = (
  creditNoteId: string,
  sequenceNo: number
): boolean => {
  return creditNoteDetails.some(
    (detail) =>
      detail.credit_note_id === creditNoteId &&
      detail.sequence_no === sequenceNo &&
      !detail.deleted_at
  );
};

// Utility function สำหรับตรวจสอบ sequence_no ซ้ำทั้งหมด
export const isCreditNoteSequenceNoExistsAll = (
  creditNoteId: string,
  sequenceNo: number
): boolean => {
  return creditNoteDetails.some(
    (detail) =>
      detail.credit_note_id === creditNoteId &&
      detail.sequence_no === sequenceNo
  );
};

// Utility function สำหรับลบ CreditNoteDetail ทั้งหมดของ credit_note (hard delete)
export const hardDeleteCreditNoteDetailsByCreditNoteId = (
  creditNoteId: string
): number => {
  const initialLength = creditNoteDetails.length;
  const filteredDetails = creditNoteDetails.filter(
    (detail) => detail.credit_note_id !== creditNoteId
  );
  const deletedCount = initialLength - filteredDetails.length;

  // แทนที่ array เดิม
  creditNoteDetails.length = 0;
  creditNoteDetails.push(...filteredDetails);

  return deletedCount;
};

// Utility function สำหรับลบ CreditNoteDetail ทั้งหมดของ product (hard delete)
export const hardDeleteCreditNoteDetailsByProductId = (
  productId: string
): number => {
  const initialLength = creditNoteDetails.length;
  const filteredDetails = creditNoteDetails.filter(
    (detail) => detail.product_id !== productId
  );
  const deletedCount = initialLength - filteredDetails.length;

  // แทนที่ array เดิม
  creditNoteDetails.length = 0;
  creditNoteDetails.push(...filteredDetails);

  return deletedCount;
};
