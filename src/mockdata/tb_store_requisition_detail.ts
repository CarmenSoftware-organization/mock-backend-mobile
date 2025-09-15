import { generateId, getCurrentTimestamp } from "@/libs/utils";
import { getUuidByName } from "./mapping.uuid";
import { getProductById } from "./tb_product";
import { getLocationById } from "./tb_location";

export interface StoreRequisitionDetail {
  id: string;
  inventory_transaction_id: string;
  store_requisition_id: string;
  sequence_no: number;
  description: string;
  to_location_id: string;
  to_location_name: string;
  product_id: string;
  product_name: string;
  product_local_name: string;
  sku: string;
  requested_qty: number;
  approved_qty: number;
  issued_qty: number;
  history: any;
  last_action: "submit" | "approve" | "reject" | "complete";
  approved_message: string | null;
  approved_by_id: string | null;
  approved_by_name: string | null;
  approved_date_at: string | null;
  review_message: string | null;
  review_by_id: string | null;
  review_by_name: string | null;
  review_date_at: string | null;
  reject_message: string | null;
  reject_by_id: string | null;
  reject_by_name: string | null;
  reject_date_at: string | null;
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

const product1 = getProductById(getUuidByName("PRODUCT_01"));
const product2 = getProductById(getUuidByName("PRODUCT_02"));
const product3 = getProductById(getUuidByName("PRODUCT_03"));
const product4 = getProductById(getUuidByName("PRODUCT_04"));
const product5 = getProductById(getUuidByName("PRODUCT_05"));
const product6 = getProductById(getUuidByName("PRODUCT_06"));
const product7 = getProductById(getUuidByName("PRODUCT_07"));
const product8 = getProductById(getUuidByName("PRODUCT_08"));
const product9 = getProductById(getUuidByName("PRODUCT_09"));
const product10 = getProductById(getUuidByName("PRODUCT_10"));

const location1 = getLocationById(getUuidByName("LOCATION_01"));
const location2 = getLocationById(getUuidByName("LOCATION_02"));
const location3 = getLocationById(getUuidByName("LOCATION_03"));

// Sample data
export const storeRequisitionDetails: StoreRequisitionDetail[] = [
  {
    id: getUuidByName("STORE_REQUISITION_DETAIL_01"),
    inventory_transaction_id: getUuidByName("INVENTORY_TRANSACTION_01"),
    store_requisition_id: getUuidByName("STORE_REQUISITION_01"),
    sequence_no: 1,
    description: "Cleaning supplies for kitchen",
    to_location_id: location2?.id || "",
    to_location_name: location2?.name || "",
    product_id: product1?.id || "",
    product_name: product1?.name || "",
    product_local_name: product1?.local_name || "",
    sku: product1?.sku || "",
    requested_qty: 10,
    approved_qty: 10,
    issued_qty: 10,
    history: [
      {
        action: "submit",
        date: "2024-01-15T10:00:00Z",
        user: getUuidByName("USER_01"),
        message: "Request submitted",
      },
      {
        action: "approve",
        date: "2024-01-15T15:00:00Z",
        user: getUuidByName("USER_02"),
        message: "Approved with quantity adjustment",
      },
      {
        action: "complete",
        date: "2024-01-16T09:00:00Z",
        user: getUuidByName("USER_04"),
        message: "Items issued",
      },
    ],
    last_action: "complete",
    approved_message: "Approved with quantity adjustment from 10 to 8 units",
    approved_by_id: getUuidByName("USER_02"),
    approved_by_name: "Kitchen Manager",
    approved_date_at: "2024-01-15T15:00:00Z",
    review_message: "Quantity reduced due to current stock availability",
    review_by_id: getUuidByName("USER_02"),
    review_by_name: "Kitchen Manager",
    review_date_at: "2024-01-15T14:30:00Z",
    reject_message: null,
    reject_by_id: null,
    reject_by_name: null,
    reject_date_at: null,
    info: {
      category: "Cleaning Supplies",
      priority: "high",
      supplier: "ABC Supplies",
    },
    dimension: { cost_center: "KITCHEN-001", project: "Daily Operations" },
    doc_version: "1",
    created_at: "2024-01-15T10:00:00Z",
    created_by_id: getUuidByName("USER_01"),
    updated_at: "2024-01-16T09:00:00Z",
    updated_by_id: getUuidByName("USER_04"),
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("STORE_REQUISITION_DETAIL_02"),
    inventory_transaction_id: getUuidByName("INVENTORY_TRANSACTION_01"),
    store_requisition_id: getUuidByName("STORE_REQUISITION_01"),
    sequence_no: 2,
    description: "Cooking ingredients for kitchen",
    to_location_id: location2?.id || "",
    to_location_name: location2?.name || "",
    product_id: product2?.id || "",
    product_name: product2?.name || "",
    product_local_name: product2?.local_name || "",
    sku: product2?.sku || "",
    requested_qty: 20,
    approved_qty: 20,
    issued_qty: 20,
    history: [
      {
        action: "submit",
        date: "2024-01-15T10:00:00Z",
        user: getUuidByName("USER_01"),
        message: "Request submitted",
      },
      {
        action: "approve",
        date: "2024-01-15T15:00:00Z",
        user: getUuidByName("USER_02"),
        message: "Approved as requested",
      },
      {
        action: "complete",
        date: "2024-01-16T09:00:00Z",
        user: getUuidByName("USER_04"),
        message: "Items issued",
      },
    ],
    last_action: "complete",
    approved_message: "Approved as requested",
    approved_by_id: getUuidByName("USER_02"),
    approved_by_name: "Kitchen Manager",
    approved_date_at: "2024-01-15T15:00:00Z",
    review_message: "Standard cooking oil for daily use",
    review_by_id: getUuidByName("USER_02"),
    review_by_name: "Kitchen Manager",
    review_date_at: "2024-01-15T14:30:00Z",
    reject_message: null,
    reject_by_id: null,
    reject_by_name: null,
    reject_date_at: null,
    info: {
      category: "Cooking Ingredients",
      priority: "high",
      supplier: "Food Plus",
    },
    dimension: { cost_center: "KITCHEN-001", project: "Daily Operations" },
    doc_version: "1",
    created_at: "2024-01-15T10:00:00Z",
    created_by_id: getUuidByName("USER_01"),
    updated_at: "2024-01-16T09:00:00Z",
    updated_by_id: getUuidByName("USER_04"),
    deleted_at: null,
    deleted_by_id: null,
  },
  {
        id: getUuidByName("STORE_REQUISITION_DETAIL_03"),
    inventory_transaction_id: getUuidByName("INVENTORY_TRANSACTION_01"),
    store_requisition_id: getUuidByName("STORE_REQUISITION_01"),
    sequence_no: 1,
    description: "Stationery supplies for office",
    to_location_id: location3?.id || "",
    to_location_name: location3?.name || "",
    product_id: product3?.id || "",
    product_name: product3?.name || "",
    product_local_name: product3?.local_name || "",
    sku: product3?.sku || "",
    requested_qty: 50,
    approved_qty: 50,
    issued_qty: 50,
    history: [
      {
        action: "submit",
        date: "2024-01-16T09:00:00Z",
        user: getUuidByName("USER_03"),
        message: "Request submitted",
      },
      {
        action: "approve",
        date: "2024-01-16T14:00:00Z",
        user: getUuidByName("USER_02"),
        message: "Approved as requested",
      },
      {
        action: "complete",
        date: "2024-01-17T09:00:00Z",
        user: getUuidByName("USER_04"),
        message: "Items issued",
      },
    ],
    last_action: "complete",
    approved_message: "Approved as requested",
    approved_by_id: getUuidByName("USER_02"),
    approved_by_name: "Department Head",
    approved_date_at: "2024-01-16T14:00:00Z",
    review_message: "Standard office supplies for daily use",
    review_by_id: getUuidByName("USER_02"),
    review_by_name: "Department Head",
    review_date_at: "2024-01-16T13:30:00Z",
    reject_message: null,
    reject_by_id: null,
    reject_by_name: null,
    reject_date_at: null,
    info: {
      category: "Office Supplies",
      priority: "medium",
      supplier: "Office Plus",
    },
    dimension: { cost_center: "OFFICE-001", project: "Monthly Supplies" },
    doc_version: "1",
    created_at: "2024-01-16T09:00:00Z",
    created_by_id: getUuidByName("USER_03"),
    updated_at: "2024-01-17T09:00:00Z",
    updated_by_id: getUuidByName("USER_04"),
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("STORE_REQUISITION_DETAIL_04"),
    inventory_transaction_id: getUuidByName("INVENTORY_TRANSACTION_01"),
    store_requisition_id: getUuidByName("STORE_REQUISITION_01"),
    sequence_no: 2,
    description: "Paper supplies for office",
    to_location_id: location3?.id || "",
    to_location_name: location3?.name || "",
    product_id: product4?.id || "",
    product_name: product4?.name || "",
    product_local_name: product4?.local_name || "",
    sku: product4?.sku || "",
    requested_qty: 10,
    approved_qty: 8,
    issued_qty: 8,
    history: [
      {
        action: "submit",
        date: "2024-01-16T09:00:00Z",
        user: getUuidByName("USER_03"),
        message: "Request submitted",
      },
      {
        action: "approve",
        date: "2024-01-16T14:00:00Z",
        user: getUuidByName("USER_02"),
        message: "Approved with quantity adjustment",
      },
      {
        action: "complete",
        date: "2024-01-17T09:00:00Z",
        user: getUuidByName("USER_04"),
        message: "Items issued",
      },
    ],
    last_action: "complete",
    approved_message: "Approved with quantity adjustment from 10 to 8 reams",
    approved_by_id: getUuidByName("USER_02"),
    approved_by_name: "Department Head",
    approved_date_at: "2024-01-16T14:00:00Z",
    review_message: "Quantity reduced due to current stock availability",
    review_by_id: getUuidByName("USER_02"),
    review_by_name: "Department Head",
    review_date_at: "2024-01-16T13:30:00Z",
    reject_message: null,
    reject_by_id: null,
    reject_by_name: null,
    reject_date_at: null,
    info: {
      category: "Office Supplies",
      priority: "medium",
      supplier: "Paper Pro",
    },
    dimension: { cost_center: "OFFICE-001", project: "Monthly Supplies" },
    doc_version: "1",
    created_at: "2024-01-16T09:00:00Z",
    created_by_id: getUuidByName("USER_03"),
    updated_at: "2024-01-17T09:00:00Z",
    updated_by_id: getUuidByName("USER_04"),
    deleted_at: null,
    deleted_by_id: null,
  },
];

// CREATE - สร้าง StoreRequisitionDetail ใหม่
export const createStoreRequisitionDetail = (
  data: Omit<
    StoreRequisitionDetail,
    "id" | "created_at" | "created_by_id" | "updated_at" | "updated_by_id"
  >
): StoreRequisitionDetail => {
  const newDetail: StoreRequisitionDetail = {
    ...data,
    id: generateId(),
    created_at: getCurrentTimestamp(),
    created_by_id: "system",
    updated_at: getCurrentTimestamp(),
    updated_by_id: "system",
  };
  storeRequisitionDetails.push(newDetail);
  return newDetail;
};

// READ - อ่านข้อมูล StoreRequisitionDetail
export const getAllStoreRequisitionDetails = (): StoreRequisitionDetail[] => {
  return storeRequisitionDetails.filter((detail) => !detail.deleted_at);
};

export const getStoreRequisitionDetailById = (
  id: string
): StoreRequisitionDetail | null => {
  const detail = storeRequisitionDetails.find(
    (d) => d.id === id && !d.deleted_at
  );
  return detail || null;
};

export const getStoreRequisitionDetailsByStoreRequisitionId = (
  storeRequisitionId: string
): StoreRequisitionDetail[] => {
  return storeRequisitionDetails.filter(
    (d) => d.store_requisition_id === storeRequisitionId && !d.deleted_at
  );
};

export const getStoreRequisitionDetailsByInventoryTransactionId = (
  inventoryTransactionId: string
): StoreRequisitionDetail[] => {
  return storeRequisitionDetails.filter(
    (d) =>
      d.inventory_transaction_id === inventoryTransactionId && !d.deleted_at
  );
};

export const getStoreRequisitionDetailsByProductId = (
  productId: string
): StoreRequisitionDetail[] => {
  return storeRequisitionDetails.filter(
    (d) => d.product_id === productId && !d.deleted_at
  );
};

export const getStoreRequisitionDetailsByLocationId = (
  locationId: string
): StoreRequisitionDetail[] => {
  return storeRequisitionDetails.filter(
    (d) => d.to_location_id === locationId && !d.deleted_at
  );
};

export const getStoreRequisitionDetailsBySequenceNo = (
  storeRequisitionId: string,
  sequenceNo: number
): StoreRequisitionDetail | null => {
  const detail = storeRequisitionDetails.find(
    (d) =>
      d.store_requisition_id === storeRequisitionId &&
      d.sequence_no === sequenceNo &&
      !d.deleted_at
  );
  return detail || null;
};

export const getStoreRequisitionDetailsByLastAction = (
  lastAction: StoreRequisitionDetail["last_action"]
): StoreRequisitionDetail[] => {
  return storeRequisitionDetails.filter(
    (d) => d.last_action === lastAction && !d.deleted_at
  );
};

// UPDATE - อัปเดต StoreRequisitionDetail
export const updateStoreRequisitionDetail = (
  id: string,
  data: Partial<
    Omit<StoreRequisitionDetail, "id" | "created_at" | "created_by_id">
  >
): StoreRequisitionDetail | null => {
  const index = storeRequisitionDetails.findIndex(
    (d) => d.id === id && !d.deleted_at
  );
  if (index === -1) return null;

  storeRequisitionDetails[index] = {
    ...storeRequisitionDetails[index],
    ...data,
    updated_at: getCurrentTimestamp(),
    updated_by_id: "system",
  };
  return storeRequisitionDetails[index];
};

// UPDATE - อัปเดต StoreRequisitionDetail description
export const updateStoreRequisitionDetailDescription = (
  id: string,
  description: string
): StoreRequisitionDetail | null => {
  return updateStoreRequisitionDetail(id, { description });
};

// UPDATE - อัปเดต StoreRequisitionDetail quantities
export const updateStoreRequisitionDetailQuantities = (
  id: string,
  requestedQty: number,
  approvedQty: number,
  issuedQty: number
): StoreRequisitionDetail | null => {
  return updateStoreRequisitionDetail(id, {
    requested_qty: requestedQty,
    approved_qty: approvedQty,
    issued_qty: issuedQty,
  });
};

// UPDATE - อัปเดต StoreRequisitionDetail approval
export const updateStoreRequisitionDetailApproval = (
  id: string,
  approvedQty: number,
  approvedMessage: string,
  approvedById: string,
  approvedByName: string
): StoreRequisitionDetail | null => {
  return updateStoreRequisitionDetail(id, {
    approved_qty: approvedQty,
    approved_message: approvedMessage,
    approved_by_id: approvedById,
    approved_by_name: approvedByName,
    approved_date_at: getCurrentTimestamp(),
    last_action: "approve",
  });
};

// UPDATE - อัปเดต StoreRequisitionDetail review
export const updateStoreRequisitionDetailReview = (
  id: string,
  reviewMessage: string,
  reviewById: string,
  reviewByName: string
): StoreRequisitionDetail | null => {
  return updateStoreRequisitionDetail(id, {
    review_message: reviewMessage,
    review_by_id: reviewById,
    review_by_name: reviewByName,
    review_date_at: getCurrentTimestamp(),
  });
};

// UPDATE - อัปเดต StoreRequisitionDetail rejection
export const updateStoreRequisitionDetailRejection = (
  id: string,
  rejectMessage: string,
  rejectById: string,
  rejectByName: string
): StoreRequisitionDetail | null => {
  return updateStoreRequisitionDetail(id, {
    reject_message: rejectMessage,
    reject_by_id: rejectById,
    reject_by_name: rejectByName,
    reject_date_at: getCurrentTimestamp(),
    last_action: "reject",
  });
};

// UPDATE - อัปเดต StoreRequisitionDetail completion
export const updateStoreRequisitionDetailCompletion = (
  id: string,
  issuedQty: number
): StoreRequisitionDetail | null => {
  return updateStoreRequisitionDetail(id, {
    issued_qty: issuedQty,
    last_action: "complete",
  });
};

// UPDATE - อัปเดต StoreRequisitionDetail location
export const updateStoreRequisitionDetailLocation = (
  id: string,
  locationId: string,
  locationName: string
): StoreRequisitionDetail | null => {
  return updateStoreRequisitionDetail(id, {
    to_location_id: locationId,
    to_location_name: locationName,
  });
};

// UPDATE - อัปเดต StoreRequisitionDetail product
export const updateStoreRequisitionDetailProduct = (
  id: string,
  productId: string,
  productName: string,
  productLocalName: string
): StoreRequisitionDetail | null => {
  return updateStoreRequisitionDetail(id, {
    product_id: productId,
    product_name: productName,
    product_local_name: productLocalName,
  });
};

// UPDATE - อัปเดต StoreRequisitionDetail info
export const updateStoreRequisitionDetailInfo = (
  id: string,
  info: any
): StoreRequisitionDetail | null => {
  return updateStoreRequisitionDetail(id, { info });
};

// UPDATE - อัปเดต StoreRequisitionDetail dimension
export const updateStoreRequisitionDetailDimension = (
  id: string,
  dimension: any
): StoreRequisitionDetail | null => {
  return updateStoreRequisitionDetail(id, { dimension });
};

// DELETE - Soft delete StoreRequisitionDetail
export const softDeleteStoreRequisitionDetail = (
  id: string,
  deletedById: string
): StoreRequisitionDetail | null => {
  const detail = getStoreRequisitionDetailById(id);
  if (!detail) return null;

  detail.deleted_at = getCurrentTimestamp();
  detail.deleted_by_id = deletedById;
  detail.updated_at = getCurrentTimestamp();
  detail.updated_by_id = deletedById;

  return detail;
};

// DELETE - Hard delete StoreRequisitionDetail
export const hardDeleteStoreRequisitionDetail = (id: string): boolean => {
  const index = storeRequisitionDetails.findIndex((d) => d.id === id);
  if (index === -1) return false;

  storeRequisitionDetails.splice(index, 1);
  return true;
};

// DELETE - ลบ StoreRequisitionDetails ตาม StoreRequisition ID
export const deleteStoreRequisitionDetailsByStoreRequisitionId = (
  storeRequisitionId: string,
  deletedById: string
): number => {
  let deletedCount = 0;
  storeRequisitionDetails.forEach((detail) => {
    if (
      detail.store_requisition_id === storeRequisitionId &&
      !detail.deleted_at
    ) {
      detail.deleted_at = getCurrentTimestamp();
      detail.deleted_by_id = deletedById;
      detail.updated_at = getCurrentTimestamp();
      detail.updated_by_id = deletedById;
      deletedCount++;
    }
  });
  return deletedCount;
};

// RESTORE - กู้คืน StoreRequisitionDetail ที่ถูก soft delete
export const restoreStoreRequisitionDetail = (
  id: string
): StoreRequisitionDetail | null => {
  const detail = storeRequisitionDetails.find((d) => d.id === id);
  if (!detail || !detail.deleted_at) return null;

  detail.deleted_at = null;
  detail.deleted_by_id = null;
  detail.updated_at = getCurrentTimestamp();
  detail.updated_by_id = "system";

  return detail;
};

// ADVANCED SEARCH - ค้นหา StoreRequisitionDetail แบบขั้นสูง
export const searchStoreRequisitionDetails = (criteria: {
  storeRequisitionId?: string;
  inventoryTransactionId?: string;
  productId?: string;
  locationId?: string;
  description?: string;
  lastAction?: StoreRequisitionDetail["last_action"];
  startDate?: string;
  endDate?: string;
}): StoreRequisitionDetail[] => {
  return storeRequisitionDetails.filter((detail) => {
    if (detail.deleted_at) return false;

    if (
      criteria.storeRequisitionId &&
      detail.store_requisition_id !== criteria.storeRequisitionId
    )
      return false;
    if (
      criteria.inventoryTransactionId &&
      detail.inventory_transaction_id !== criteria.inventoryTransactionId
    )
      return false;
    if (criteria.productId && detail.product_id !== criteria.productId)
      return false;
    if (criteria.locationId && detail.to_location_id !== criteria.locationId)
      return false;
    if (criteria.lastAction && detail.last_action !== criteria.lastAction)
      return false;

    if (criteria.startDate || criteria.endDate) {
      const createdDate = new Date(detail.created_at);
      if (criteria.startDate && createdDate < new Date(criteria.startDate))
        return false;
      if (criteria.endDate && createdDate > new Date(criteria.endDate))
        return false;
    }

    if (
      criteria.description &&
      !detail.description
        .toLowerCase()
        .includes(criteria.description.toLowerCase())
    )
      return false;

    return true;
  });
};

// UTILITY FUNCTIONS - ฟังก์ชันเสริม
export const getStoreRequisitionDetailCount = (): number => {
  return storeRequisitionDetails.filter((detail) => !detail.deleted_at).length;
};

export const getStoreRequisitionDetailCountByStoreRequisitionId = (
  storeRequisitionId: string
): number => {
  return storeRequisitionDetails.filter(
    (detail) =>
      detail.store_requisition_id === storeRequisitionId && !detail.deleted_at
  ).length;
};

export const getStoreRequisitionDetailCountByLastAction = (
  lastAction: StoreRequisitionDetail["last_action"]
): number => {
  return storeRequisitionDetails.filter(
    (detail) => detail.last_action === lastAction && !detail.deleted_at
  ).length;
};

export const isStoreRequisitionDetailExists = (id: string): boolean => {
  return storeRequisitionDetails.some(
    (detail) => detail.id === id && !detail.deleted_at
  );
};

export const isSequenceNoExists = (
  storeRequisitionId: string,
  sequenceNo: number
): boolean => {
  return storeRequisitionDetails.some(
    (detail) =>
      detail.store_requisition_id === storeRequisitionId &&
      detail.sequence_no === sequenceNo &&
      !detail.deleted_at
  );
};

export const getNextSequenceNo = (storeRequisitionId: string): number => {
  const details =
    getStoreRequisitionDetailsByStoreRequisitionId(storeRequisitionId);
  if (details.length === 0) return 1;

  const maxSequenceNo = Math.max(...details.map((d) => d.sequence_no));
  return maxSequenceNo + 1;
};

export const clearAllStoreRequisitionDetails = (): void => {
  storeRequisitionDetails.length = 0;
};

export const clearStoreRequisitionDetailsByStoreRequisitionId = (
  storeRequisitionId: string
): void => {
  const indicesToRemove: number[] = [];
  storeRequisitionDetails.forEach((detail, index) => {
    if (detail.store_requisition_id === storeRequisitionId) {
      indicesToRemove.push(index);
    }
  });

  // Remove from highest index to lowest to avoid shifting issues
  indicesToRemove.reverse().forEach((index) => {
    storeRequisitionDetails.splice(index, 1);
  });
};
