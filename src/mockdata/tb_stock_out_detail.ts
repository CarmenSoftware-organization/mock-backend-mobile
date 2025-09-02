import { generateId, getCurrentTimestamp } from "@/libs/utils";

export interface StockOutDetail {
  id: string;
  inventory_transaction_id: string;
  stock_out_id: string;
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
export const stockOutDetails: StockOutDetail[] = [
  {
    id: "sod-001",
    inventory_transaction_id: "inv-003",
    stock_out_id: "so-001",
    sequence_no: 1,
    description: "Laptop Dell XPS 13 Distribution",
    location_id: "loc-it-001",
    location_name: "IT Storage Room",
    product_id: "prod-laptop-001",
    product_name: "Dell XPS 13 Laptop",
    product_local_name: "แล็ปท็อป Dell XPS 13",
    qty: "3.00",
    note: "Distributed to new developers",
    info: {
      recipient: "Developer Team",
      purpose: "Development Work",
      warranty: "3 years",
    },
    dimension: { cost_center: "IT-001", project: "New Hire Setup" },
    doc_version: "1",
    created_at: "2024-01-10T09:00:00Z",
    created_by_id: "user-001",
    updated_at: "2024-01-10T09:00:00Z",
    updated_by_id: "user-001",
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: "sod-002",
    inventory_transaction_id: "inv-003",
    stock_out_id: "so-001",
    sequence_no: 2,
    description: 'External Monitor 27" Distribution',
    location_id: "loc-it-001",
    location_name: "IT Storage Room",
    product_id: "prod-monitor-001",
    product_name: 'LG 27" 4K Monitor',
    product_local_name: 'จอภาพ LG 27" 4K',
    qty: "3.00",
    note: "Distributed to new developers",
    info: {
      recipient: "Developer Team",
      purpose: "Development Work",
      resolution: "4K UHD",
    },
    dimension: { cost_center: "IT-001", project: "New Hire Setup" },
    doc_version: "1",
    created_at: "2024-01-10T09:00:00Z",
    created_by_id: "user-001",
    updated_at: "2024-01-10T09:00:00Z",
    updated_by_id: "user-001",
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: "sod-003",
    inventory_transaction_id: "inv-004",
    stock_out_id: "so-002",
    sequence_no: 1,
    description: "Office Chairs Distribution",
    location_id: "loc-admin-001",
    location_name: "Admin Storage",
    product_id: "prod-chair-001",
    product_name: "Ergonomic Office Chair",
    product_local_name: "เก้าอี้สำนักงานแบบยืดหยุ่น",
    qty: "15.00",
    note: "Distributed to various departments",
    info: {
      recipient: "Multiple Departments",
      purpose: "Office Setup",
      material: "Mesh",
    },
    dimension: { cost_center: "ADMIN-001", project: "Department Supplies" },
    doc_version: "1",
    created_at: "2024-01-18T08:00:00Z",
    created_by_id: "user-004",
    updated_at: "2024-01-18T08:00:00Z",
    updated_by_id: "user-004",
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: "sod-004",
    inventory_transaction_id: "inv-004",
    stock_out_id: "so-002",
    sequence_no: 2,
    description: "Desk Lamps Distribution",
    location_id: "loc-admin-001",
    location_name: "Admin Storage",
    product_id: "prod-lamp-001",
    product_name: "LED Desk Lamp",
    product_local_name: "โคมไฟโต๊ะ LED",
    qty: "20.00",
    note: "Distributed to various departments",
    info: {
      recipient: "Multiple Departments",
      purpose: "Office Setup",
      power: "10W LED",
    },
    dimension: { cost_center: "ADMIN-001", project: "Department Supplies" },
    doc_version: "1",
    created_at: "2024-01-18T08:00:00Z",
    created_by_id: "user-004",
    updated_at: "2024-01-18T08:00:00Z",
    updated_by_id: "user-004",
    deleted_at: null,
    deleted_by_id: null,
  },
];

// CREATE - สร้าง StockOutDetail ใหม่
export const createStockOutDetail = (
  data: Omit<
    StockOutDetail,
    "id" | "created_at" | "created_by_id" | "updated_at" | "updated_by_id"
  >
): StockOutDetail => {
  const newDetail: StockOutDetail = {
    ...data,
    id: generateId(),
    created_at: getCurrentTimestamp(),
    created_by_id: "system",
    updated_at: getCurrentTimestamp(),
    updated_by_id: "system",
  };
  stockOutDetails.push(newDetail);
  return newDetail;
};

// READ - อ่านข้อมูล StockOutDetail
export const getAllStockOutDetails = (): StockOutDetail[] => {
  return stockOutDetails.filter((detail) => !detail.deleted_at);
};

export const getStockOutDetailById = (id: string): StockOutDetail | null => {
  const detail = stockOutDetails.find((d) => d.id === id && !d.deleted_at);
  return detail || null;
};

export const getStockOutDetailsByStockOutId = (
  stockOutId: string
): StockOutDetail[] => {
  return stockOutDetails.filter(
    (d) => d.stock_out_id === stockOutId && !d.deleted_at
  );
};

export const getStockOutDetailsByInventoryTransactionId = (
  inventoryTransactionId: string
): StockOutDetail[] => {
  return stockOutDetails.filter(
    (d) =>
      d.inventory_transaction_id === inventoryTransactionId && !d.deleted_at
  );
};

export const getStockOutDetailsByProductId = (
  productId: string
): StockOutDetail[] => {
  return stockOutDetails.filter(
    (d) => d.product_id === productId && !d.deleted_at
  );
};

export const getStockOutDetailsByLocationId = (
  locationId: string
): StockOutDetail[] => {
  return stockOutDetails.filter(
    (d) => d.location_id === locationId && !d.deleted_at
  );
};

export const getStockOutDetailsBySequenceNo = (
  stockOutId: string,
  sequenceNo: number
): StockOutDetail | null => {
  const detail = stockOutDetails.find(
    (d) =>
      d.stock_out_id === stockOutId &&
      d.sequence_no === sequenceNo &&
      !d.deleted_at
  );
  return detail || null;
};

// UPDATE - อัปเดต StockOutDetail
export const updateStockOutDetail = (
  id: string,
  data: Partial<Omit<StockOutDetail, "id" | "created_at" | "created_by_id">>
): StockOutDetail | null => {
  const index = stockOutDetails.findIndex((d) => d.id === id && !d.deleted_at);
  if (index === -1) return null;

  stockOutDetails[index] = {
    ...stockOutDetails[index],
    ...data,
    updated_at: getCurrentTimestamp(),
    updated_by_id: "system",
  };
  return stockOutDetails[index];
};

// UPDATE - อัปเดต StockOutDetail description
export const updateStockOutDetailDescription = (
  id: string,
  description: string
): StockOutDetail | null => {
  return updateStockOutDetail(id, { description });
};

// UPDATE - อัปเดต StockOutDetail qty
export const updateStockOutDetailQty = (
  id: string,
  qty: string
): StockOutDetail | null => {
  return updateStockOutDetail(id, { qty });
};

// UPDATE - อัปเดต StockOutDetail note
export const updateStockOutDetailNote = (
  id: string,
  note: string
): StockOutDetail | null => {
  return updateStockOutDetail(id, { note });
};

// UPDATE - อัปเดต StockOutDetail info
export const updateStockOutDetailInfo = (
  id: string,
  info: any
): StockOutDetail | null => {
  return updateStockOutDetail(id, { info });
};

// UPDATE - อัปเดต StockOutDetail dimension
export const updateStockOutDetailDimension = (
  id: string,
  dimension: any
): StockOutDetail | null => {
  return updateStockOutDetail(id, { dimension });
};

// UPDATE - อัปเดต StockOutDetail location
export const updateStockOutDetailLocation = (
  id: string,
  locationId: string,
  locationName: string
): StockOutDetail | null => {
  return updateStockOutDetail(id, {
    location_id: locationId,
    location_name: locationName,
  });
};

// UPDATE - อัปเดต StockOutDetail product
export const updateStockOutDetailProduct = (
  id: string,
  productId: string,
  productName: string,
  productLocalName: string
): StockOutDetail | null => {
  return updateStockOutDetail(id, {
    product_id: productId,
    product_name: productName,
    product_local_name: productLocalName,
  });
};

// DELETE - Soft delete StockOutDetail
export const softDeleteStockOutDetail = (
  id: string,
  deletedById: string
): StockOutDetail | null => {
  const detail = getStockOutDetailById(id);
  if (!detail) return null;

  detail.deleted_at = getCurrentTimestamp();
  detail.deleted_by_id = deletedById;
  detail.updated_at = getCurrentTimestamp();
  detail.updated_by_id = deletedById;

  return detail;
};

// DELETE - Hard delete StockOutDetail
export const hardDeleteStockOutDetail = (id: string): boolean => {
  const index = stockOutDetails.findIndex((d) => d.id === id);
  if (index === -1) return false;

  stockOutDetails.splice(index, 1);
  return true;
};

// DELETE - ลบ StockOutDetails ตาม StockOut ID
export const deleteStockOutDetailsByStockOutId = (
  stockOutId: string,
  deletedById: string
): number => {
  let deletedCount = 0;
  stockOutDetails.forEach((detail) => {
    if (detail.stock_out_id === stockOutId && !detail.deleted_at) {
      detail.deleted_at = getCurrentTimestamp();
      detail.deleted_by_id = deletedById;
      detail.updated_at = getCurrentTimestamp();
      detail.updated_by_id = deletedById;
      deletedCount++;
    }
  });
  return deletedCount;
};

// RESTORE - กู้คืน StockOutDetail ที่ถูก soft delete
export const restoreStockOutDetail = (id: string): StockOutDetail | null => {
  const detail = stockOutDetails.find((d) => d.id === id);
  if (!detail || !detail.deleted_at) return null;

  detail.deleted_at = null;
  detail.deleted_by_id = null;
  detail.updated_at = getCurrentTimestamp();
  detail.updated_by_id = "system";

  return detail;
};

// ADVANCED SEARCH - ค้นหา StockOutDetail แบบขั้นสูง
export const searchStockOutDetails = (criteria: {
  stockOutId?: string;
  inventoryTransactionId?: string;
  productId?: string;
  locationId?: string;
  description?: string;
  note?: string;
  startDate?: string;
  endDate?: string;
}): StockOutDetail[] => {
  return stockOutDetails.filter((detail) => {
    if (detail.deleted_at) return false;

    if (criteria.stockOutId && detail.stock_out_id !== criteria.stockOutId)
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
export const getStockOutDetailCount = (): number => {
  return stockOutDetails.filter((detail) => !detail.deleted_at).length;
};

export const getStockOutDetailCountByStockOutId = (
  stockOutId: string
): number => {
  return stockOutDetails.filter(
    (detail) => detail.stock_out_id === stockOutId && !detail.deleted_at
  ).length;
};

export const isStockOutDetailExists = (id: string): boolean => {
  return stockOutDetails.some(
    (detail) => detail.id === id && !detail.deleted_at
  );
};

export const isSequenceNoExists = (
  stockOutId: string,
  sequenceNo: number
): boolean => {
  return stockOutDetails.some(
    (detail) =>
      detail.stock_out_id === stockOutId &&
      detail.sequence_no === sequenceNo &&
      !detail.deleted_at
  );
};

export const getNextSequenceNo = (stockOutId: string): number => {
  const details = getStockOutDetailsByStockOutId(stockOutId);
  if (details.length === 0) return 1;

  const maxSequenceNo = Math.max(...details.map((d) => d.sequence_no));
  return maxSequenceNo + 1;
};

export const clearAllStockOutDetails = (): void => {
  stockOutDetails.length = 0;
};

export const clearStockOutDetailsByStockOutId = (stockOutId: string): void => {
  const indicesToRemove: number[] = [];
  stockOutDetails.forEach((detail, index) => {
    if (detail.stock_out_id === stockOutId) {
      indicesToRemove.push(index);
    }
  });

  // Remove from highest index to lowest to avoid shifting issues
  indicesToRemove.reverse().forEach((index) => {
    stockOutDetails.splice(index, 1);
  });
};
