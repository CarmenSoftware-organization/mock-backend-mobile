import { generateId, getCurrentTimestamp } from "@/libs/utils";

export interface StockInDetail {
  id: string;
  inventory_transaction_id: string;
  stock_in_id: string;
  sequence_no: number;
  description: string;
  location_id: string;
  location_name: string;
  product_id: string;
  product_name: string;
  product_local_name: string;
  qty: string;
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

// Sample data
export const stockInDetails: StockInDetail[] = [
  {
    id: "sid-001",
    inventory_transaction_id: "inv-001",
    stock_in_id: "si-001",
    sequence_no: 1,
    description: "Laptop Dell XPS 13",
    location_id: "loc-it-001",
    location_name: "IT Storage Room",
    product_id: "prod-laptop-001",
    product_name: "Dell XPS 13 Laptop",
    product_local_name: "แล็ปท็อป Dell XPS 13",
    qty: "5.00",
    note: "High performance laptops for developers",
    info: { warranty: "3 years", supplier: "ABC Tech", model: "XPS 13-9310" },
    dimension: { cost_center: "IT-001", project: "Developer Setup" },
    doc_version: "1",
    created_at: "2024-01-15T10:00:00Z",
    created_by_id: "user-001",
    updated_at: "2024-01-15T10:00:00Z",
    updated_by_id: "user-001",
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: "sid-002",
    inventory_transaction_id: "inv-001",
    stock_in_id: "si-001",
    sequence_no: 2,
    description: 'External Monitor 27"',
    location_id: "loc-it-001",
    location_name: "IT Storage Room",
    product_id: "prod-monitor-001",
    product_name: 'LG 27" 4K Monitor',
    product_local_name: 'จอภาพ LG 27" 4K',
    qty: "5.00",
    note: "4K monitors for better productivity",
    info: { warranty: "2 years", supplier: "ABC Tech", resolution: "4K UHD" },
    dimension: { cost_center: "IT-001", project: "Developer Setup" },
    doc_version: "1",
    created_at: "2024-01-15T10:00:00Z",
    created_by_id: "user-001",
    updated_at: "2024-01-15T10:00:00Z",
    updated_by_id: "user-001",
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: "sid-003",
    inventory_transaction_id: "inv-002",
    stock_in_id: "si-002",
    sequence_no: 1,
    description: "Office Chairs",
    location_id: "loc-admin-001",
    location_name: "Admin Storage",
    product_id: "prod-chair-001",
    product_name: "Ergonomic Office Chair",
    product_local_name: "เก้าอี้สำนักงานแบบยืดหยุ่น",
    qty: "20.00",
    note: "Ergonomic chairs for better comfort",
    info: { warranty: "1 year", supplier: "Office Plus", material: "Mesh" },
    dimension: { cost_center: "ADMIN-001", project: "Q1 Supplies" },
    doc_version: "1",
    created_at: "2024-01-20T09:00:00Z",
    created_by_id: "user-004",
    updated_at: "2024-01-20T09:00:00Z",
    updated_by_id: "user-004",
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: "sid-004",
    inventory_transaction_id: "inv-002",
    stock_in_id: "si-002",
    sequence_no: 2,
    description: "Desk Lamps",
    location_id: "loc-admin-001",
    location_name: "Admin Storage",
    product_id: "prod-lamp-001",
    product_name: "LED Desk Lamp",
    product_local_name: "โคมไฟโต๊ะ LED",
    qty: "25.00",
    note: "LED lamps for energy efficiency",
    info: { warranty: "1 year", supplier: "Office Plus", power: "10W LED" },
    dimension: { cost_center: "ADMIN-001", project: "Q1 Supplies" },
    doc_version: "1",
    created_at: "2024-01-20T09:00:00Z",
    created_by_id: "user-004",
    updated_at: "2024-01-20T09:00:00Z",
    updated_by_id: "user-004",
    deleted_at: null,
    deleted_by_id: null,
  },
];

// CREATE - สร้าง StockInDetail ใหม่
export const createStockInDetail = (
  data: Omit<
    StockInDetail,
    "id" | "created_at" | "created_by_id" | "updated_at" | "updated_by_id"
  >
): StockInDetail => {
  const newDetail: StockInDetail = {
    ...data,
    id: generateId(),
    created_at: getCurrentTimestamp(),
    created_by_id: "system",
    updated_at: getCurrentTimestamp(),
    updated_by_id: "system",
  };
  stockInDetails.push(newDetail);
  return newDetail;
};

// READ - อ่านข้อมูล StockInDetail
export const getAllStockInDetails = (): StockInDetail[] => {
  return stockInDetails.filter((detail) => !detail.deleted_at);
};

export const getStockInDetailById = (id: string): StockInDetail | null => {
  const detail = stockInDetails.find((d) => d.id === id && !d.deleted_at);
  return detail || null;
};

export const getStockInDetailsByStockInId = (
  stockInId: string
): StockInDetail[] => {
  return stockInDetails.filter(
    (d) => d.stock_in_id === stockInId && !d.deleted_at
  );
};

export const getStockInDetailsByInventoryTransactionId = (
  inventoryTransactionId: string
): StockInDetail[] => {
  return stockInDetails.filter(
    (d) =>
      d.inventory_transaction_id === inventoryTransactionId && !d.deleted_at
  );
};

export const getStockInDetailsByProductId = (
  productId: string
): StockInDetail[] => {
  return stockInDetails.filter(
    (d) => d.product_id === productId && !d.deleted_at
  );
};

export const getStockInDetailsByLocationId = (
  locationId: string
): StockInDetail[] => {
  return stockInDetails.filter(
    (d) => d.location_id === locationId && !d.deleted_at
  );
};

export const getStockInDetailsBySequenceNo = (
  stockInId: string,
  sequenceNo: number
): StockInDetail | null => {
  const detail = stockInDetails.find(
    (d) =>
      d.stock_in_id === stockInId &&
      d.sequence_no === sequenceNo &&
      !d.deleted_at
  );
  return detail || null;
};

// UPDATE - อัปเดต StockInDetail
export const updateStockInDetail = (
  id: string,
  data: Partial<Omit<StockInDetail, "id" | "created_at" | "created_by_id">>
): StockInDetail | null => {
  const index = stockInDetails.findIndex((d) => d.id === id && !d.deleted_at);
  if (index === -1) return null;

  stockInDetails[index] = {
    ...stockInDetails[index],
    ...data,
    updated_at: getCurrentTimestamp(),
    updated_by_id: "system",
  };
  return stockInDetails[index];
};

// UPDATE - อัปเดต StockInDetail description
export const updateStockInDetailDescription = (
  id: string,
  description: string
): StockInDetail | null => {
  return updateStockInDetail(id, { description });
};

// UPDATE - อัปเดต StockInDetail qty
export const updateStockInDetailQty = (
  id: string,
  qty: string
): StockInDetail | null => {
  return updateStockInDetail(id, { qty });
};

// UPDATE - อัปเดต StockInDetail note
export const updateStockInDetailNote = (
  id: string,
  note: string
): StockInDetail | null => {
  return updateStockInDetail(id, { note });
};

// UPDATE - อัปเดต StockInDetail info
export const updateStockInDetailInfo = (
  id: string,
  info: any
): StockInDetail | null => {
  return updateStockInDetail(id, { info });
};

// UPDATE - อัปเดต StockInDetail dimension
export const updateStockInDetailDimension = (
  id: string,
  dimension: any
): StockInDetail | null => {
  return updateStockInDetail(id, { dimension });
};

// UPDATE - อัปเดต StockInDetail location
export const updateStockInDetailLocation = (
  id: string,
  locationId: string,
  locationName: string
): StockInDetail | null => {
  return updateStockInDetail(id, {
    location_id: locationId,
    location_name: locationName,
  });
};

// UPDATE - อัปเดต StockInDetail product
export const updateStockInDetailProduct = (
  id: string,
  productId: string,
  productName: string,
  productLocalName: string
): StockInDetail | null => {
  return updateStockInDetail(id, {
    product_id: productId,
    product_name: productName,
    product_local_name: productLocalName,
  });
};

// DELETE - Soft delete StockInDetail
export const softDeleteStockInDetail = (
  id: string,
  deletedById: string
): StockInDetail | null => {
  const detail = getStockInDetailById(id);
  if (!detail) return null;

  detail.deleted_at = getCurrentTimestamp();
  detail.deleted_by_id = deletedById;
  detail.updated_at = getCurrentTimestamp();
  detail.updated_by_id = deletedById;

  return detail;
};

// DELETE - Hard delete StockInDetail
export const hardDeleteStockInDetail = (id: string): boolean => {
  const index = stockInDetails.findIndex((d) => d.id === id);
  if (index === -1) return false;

  stockInDetails.splice(index, 1);
  return true;
};

// DELETE - ลบ StockInDetails ตาม StockIn ID
export const deleteStockInDetailsByStockInId = (
  stockInId: string,
  deletedById: string
): number => {
  let deletedCount = 0;
  stockInDetails.forEach((detail) => {
    if (detail.stock_in_id === stockInId && !detail.deleted_at) {
      detail.deleted_at = getCurrentTimestamp();
      detail.deleted_by_id = deletedById;
      detail.updated_at = getCurrentTimestamp();
      detail.updated_by_id = deletedById;
      deletedCount++;
    }
  });
  return deletedCount;
};

// RESTORE - กู้คืน StockInDetail ที่ถูก soft delete
export const restoreStockInDetail = (id: string): StockInDetail | null => {
  const detail = stockInDetails.find((d) => d.id === id);
  if (!detail || !detail.deleted_at) return null;

  detail.deleted_at = null;
  detail.deleted_by_id = null;
  detail.updated_at = getCurrentTimestamp();
  detail.updated_by_id = "system";

  return detail;
};

// ADVANCED SEARCH - ค้นหา StockInDetail แบบขั้นสูง
export const searchStockInDetails = (criteria: {
  stockInId?: string;
  inventoryTransactionId?: string;
  productId?: string;
  locationId?: string;
  description?: string;
  note?: string;
  startDate?: string;
  endDate?: string;
}): StockInDetail[] => {
  return stockInDetails.filter((detail) => {
    if (detail.deleted_at) return false;

    if (criteria.stockInId && detail.stock_in_id !== criteria.stockInId)
      return false;
    if (
      criteria.inventoryTransactionId &&
      detail.inventory_transaction_id !== criteria.inventoryTransactionId
    )
      return false;
    if (criteria.productId && detail.product_id !== criteria.productId)
      return false;
    if (criteria.locationId && detail.location_id !== criteria.locationId)
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
    if (
      criteria.note &&
      detail.note &&
      !detail.note.toLowerCase().includes(criteria.note.toLowerCase())
    )
      return false;

    return true;
  });
};

// UTILITY FUNCTIONS - ฟังก์ชันเสริม
export const getStockInDetailCount = (): number => {
  return stockInDetails.filter((detail) => !detail.deleted_at).length;
};

export const getStockInDetailCountByStockInId = (stockInId: string): number => {
  return stockInDetails.filter(
    (detail) => detail.stock_in_id === stockInId && !detail.deleted_at
  ).length;
};

export const isStockInDetailExists = (id: string): boolean => {
  return stockInDetails.some(
    (detail) => detail.id === id && !detail.deleted_at
  );
};

export const isSequenceNoExists = (
  stockInId: string,
  sequenceNo: number
): boolean => {
  return stockInDetails.some(
    (detail) =>
      detail.stock_in_id === stockInId &&
      detail.sequence_no === sequenceNo &&
      !detail.deleted_at
  );
};

export const getNextSequenceNo = (stockInId: string): number => {
  const details = getStockInDetailsByStockInId(stockInId);
  if (details.length === 0) return 1;

  const maxSequenceNo = Math.max(...details.map((d) => d.sequence_no));
  return maxSequenceNo + 1;
};

export const clearAllStockInDetails = (): void => {
  stockInDetails.length = 0;
};

export const clearStockInDetailsByStockInId = (stockInId: string): void => {
  const indicesToRemove: number[] = [];
  stockInDetails.forEach((detail, index) => {
    if (detail.stock_in_id === stockInId) {
      indicesToRemove.push(index);
    }
  });

  // Remove from highest index to lowest to avoid shifting issues
  indicesToRemove.reverse().forEach((index) => {
    stockInDetails.splice(index, 1);
  });
};
