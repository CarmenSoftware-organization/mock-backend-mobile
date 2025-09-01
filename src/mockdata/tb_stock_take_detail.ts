import { generateId, getCurrentTimestamp } from "@/libs/utils";

export interface StockTakeDetail {
  id: string;
  inventory_transaction_id: string;
  stock_take_id: string;
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
export const stockTakeDetails: StockTakeDetail[] = [
  {
    id: 'std-001',
    inventory_transaction_id: 'inv-005',
    stock_take_id: 'stk-001',
    sequence_no: 1,
    description: 'Laptop Dell XPS 13 Stock Take',
    location_id: 'loc-it-001',
    location_name: 'IT Storage Room',
    product_id: 'prod-laptop-001',
    product_name: 'Dell XPS 13 Laptop',
    product_local_name: 'แล็ปท็อป Dell XPS 13',
    qty: '5.00',
    note: 'All laptops counted and verified',
    info: { counted_by: 'IT Staff', verification: 'Passed', condition: 'Good' },
    dimension: { cost_center: 'IT-001', project: 'Q1 Stock Take' },
    doc_version: '1',
    created_at: '2024-01-05T08:00:00Z',
    created_by_id: 'user-001',
    updated_at: '2024-01-05T08:00:00Z',
    updated_by_id: 'user-001',
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: 'std-002',
    inventory_transaction_id: 'inv-005',
    stock_take_id: 'stk-001',
    sequence_no: 2,
    description: 'External Monitor 27" Stock Take',
    location_id: 'loc-it-001',
    location_name: 'IT Storage Room',
    product_id: 'prod-monitor-001',
    product_name: 'LG 27" 4K Monitor',
    product_local_name: 'จอภาพ LG 27" 4K',
    qty: '5.00',
    note: 'All monitors counted and verified',
    info: { counted_by: 'IT Staff', verification: 'Passed', condition: 'Good' },
    dimension: { cost_center: 'IT-001', project: 'Q1 Stock Take' },
    doc_version: '1',
    created_at: '2024-01-05T08:00:00Z',
    created_by_id: 'user-001',
    updated_at: '2024-01-05T08:00:00Z',
    updated_by_id: 'user-001',
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: 'std-003',
    inventory_transaction_id: 'inv-006',
    stock_take_id: 'stk-002',
    sequence_no: 1,
    description: 'Office Chairs Stock Take',
    location_id: 'loc-admin-001',
    location_name: 'Admin Storage',
    product_id: 'prod-chair-001',
    product_name: 'Ergonomic Office Chair',
    product_local_name: 'เก้าอี้สำนักงานแบบยืดหยุ่น',
    qty: '20.00',
    note: 'All chairs counted and verified',
    info: { counted_by: 'Admin Staff', verification: 'Passed', condition: 'Good' },
    dimension: { cost_center: 'ADMIN-001', project: 'Q1 Stock Take' },
    doc_version: '1',
    created_at: '2024-01-12T09:00:00Z',
    created_by_id: 'user-004',
    updated_at: '2024-01-12T09:00:00Z',
    updated_by_id: 'user-004',
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: 'std-004',
    inventory_transaction_id: 'inv-006',
    stock_take_id: 'stk-002',
    sequence_no: 2,
    description: 'Desk Lamps Stock Take',
    location_id: 'loc-admin-001',
    location_name: 'Admin Storage',
    product_id: 'prod-lamp-001',
    product_name: 'LED Desk Lamp',
    product_local_name: 'โคมไฟโต๊ะ LED',
    qty: '25.00',
    note: 'All lamps counted and verified',
    info: { counted_by: 'Admin Staff', verification: 'Passed', condition: 'Good' },
    dimension: { cost_center: 'ADMIN-001', project: 'Q1 Stock Take' },
    doc_version: '1',
    created_at: '2024-01-12T09:00:00Z',
    created_by_id: 'user-004',
    updated_at: '2024-01-12T09:00:00Z',
    updated_by_id: 'user-004',
    deleted_at: null,
    deleted_by_id: null
  }
];

// CREATE - สร้าง StockTakeDetail ใหม่
export const createStockTakeDetail = (data: Omit<StockTakeDetail, 'id' | 'created_at' | 'created_by_id' | 'updated_at' | 'updated_by_id'>): StockTakeDetail => {
  const newDetail: StockTakeDetail = {
    ...data,
    id: generateId(),
    created_at: getCurrentTimestamp(),
    created_by_id: 'system',
    updated_at: getCurrentTimestamp(),
    updated_by_id: 'system'
  };
  stockTakeDetails.push(newDetail);
  return newDetail;
};

// READ - อ่านข้อมูล StockTakeDetail
export const getAllStockTakeDetails = (): StockTakeDetail[] => {
  return stockTakeDetails.filter(detail => !detail.deleted_at);
};

export const getStockTakeDetailById = (id: string): StockTakeDetail | null => {
  const detail = stockTakeDetails.find(d => d.id === id && !d.deleted_at);
  return detail || null;
};

export const getStockTakeDetailsByStockTakeId = (stockTakeId: string): StockTakeDetail[] => {
  return stockTakeDetails.filter(d => d.stock_take_id === stockTakeId && !d.deleted_at);
};

export const getStockTakeDetailsByInventoryTransactionId = (inventoryTransactionId: string): StockTakeDetail[] => {
  return stockTakeDetails.filter(d => d.inventory_transaction_id === inventoryTransactionId && !d.deleted_at);
};

export const getStockTakeDetailsByProductId = (productId: string): StockTakeDetail[] => {
  return stockTakeDetails.filter(d => d.product_id === productId && !d.deleted_at);
};

export const getStockTakeDetailsByLocationId = (locationId: string): StockTakeDetail[] => {
  return stockTakeDetails.filter(d => d.location_id === locationId && !d.deleted_at);
};

export const getStockTakeDetailsBySequenceNo = (stockTakeId: string, sequenceNo: number): StockTakeDetail | null => {
  const detail = stockTakeDetails.find(d => 
    d.stock_take_id === stockTakeId && 
    d.sequence_no === sequenceNo && 
    !d.deleted_at
  );
  return detail || null;
};

// UPDATE - อัปเดต StockTakeDetail
export const updateStockTakeDetail = (id: string, data: Partial<Omit<StockTakeDetail, 'id' | 'created_at' | 'created_by_id'>>): StockTakeDetail | null => {
  const index = stockTakeDetails.findIndex(d => d.id === id && !d.deleted_at);
  if (index === -1) return null;

  stockTakeDetails[index] = {
    ...stockTakeDetails[index],
    ...data,
    updated_at: getCurrentTimestamp(),
    updated_by_id: 'system'
  };
  return stockTakeDetails[index];
};

// UPDATE - อัปเดต StockTakeDetail description
export const updateStockTakeDetailDescription = (id: string, description: string): StockTakeDetail | null => {
  return updateStockTakeDetail(id, { description });
};

// UPDATE - อัปเดต StockTakeDetail qty
export const updateStockTakeDetailQty = (id: string, qty: string): StockTakeDetail | null => {
  return updateStockTakeDetail(id, { qty });
};

// UPDATE - อัปเดต StockTakeDetail note
export const updateStockTakeDetailNote = (id: string, note: string): StockTakeDetail | null => {
  return updateStockTakeDetail(id, { note });
};

// UPDATE - อัปเดต StockTakeDetail info
export const updateStockTakeDetailInfo = (id: string, info: any): StockTakeDetail | null => {
  return updateStockTakeDetail(id, { info });
};

// UPDATE - อัปเดต StockTakeDetail dimension
export const updateStockTakeDetailDimension = (id: string, dimension: any): StockTakeDetail | null => {
  return updateStockTakeDetail(id, { dimension });
};

// UPDATE - อัปเดต StockTakeDetail location
export const updateStockTakeDetailLocation = (id: string, locationId: string, locationName: string): StockTakeDetail | null => {
  return updateStockTakeDetail(id, { 
    location_id: locationId,
    location_name: locationName
  });
};

// UPDATE - อัปเดต StockTakeDetail product
export const updateStockTakeDetailProduct = (id: string, productId: string, productName: string, productLocalName: string): StockTakeDetail | null => {
  return updateStockTakeDetail(id, { 
    product_id: productId,
    product_name: productName,
    product_local_name: productLocalName
  });
};

// DELETE - Soft delete StockTakeDetail
export const softDeleteStockTakeDetail = (id: string, deletedById: string): StockTakeDetail | null => {
  const detail = getStockTakeDetailById(id);
  if (!detail) return null;

  detail.deleted_at = getCurrentTimestamp();
  detail.deleted_by_id = deletedById;
  detail.updated_at = getCurrentTimestamp();
  detail.updated_by_id = deletedById;

  return detail;
};

// DELETE - Hard delete StockTakeDetail
export const hardDeleteStockTakeDetail = (id: string): boolean => {
  const index = stockTakeDetails.findIndex(d => d.id === id);
  if (index === -1) return false;

  stockTakeDetails.splice(index, 1);
  return true;
};

// DELETE - ลบ StockTakeDetails ตาม StockTake ID
export const deleteStockTakeDetailsByStockTakeId = (stockTakeId: string, deletedById: string): number => {
  let deletedCount = 0;
  stockTakeDetails.forEach(detail => {
    if (detail.stock_take_id === stockTakeId && !detail.deleted_at) {
      detail.deleted_at = getCurrentTimestamp();
      detail.deleted_by_id = deletedById;
      detail.updated_at = getCurrentTimestamp();
      detail.updated_by_id = deletedById;
      deletedCount++;
    }
  });
  return deletedCount;
};

// RESTORE - กู้คืน StockTakeDetail ที่ถูก soft delete
export const restoreStockTakeDetail = (id: string): StockTakeDetail | null => {
  const detail = stockTakeDetails.find(d => d.id === id);
  if (!detail || !detail.deleted_at) return null;

  detail.deleted_at = null;
  detail.deleted_by_id = null;
  detail.updated_at = getCurrentTimestamp();
  detail.updated_by_id = 'system';

  return detail;
};

// ADVANCED SEARCH - ค้นหา StockTakeDetail แบบขั้นสูง
export const searchStockTakeDetails = (criteria: {
  stockTakeId?: string;
  inventoryTransactionId?: string;
  productId?: string;
  locationId?: string;
  description?: string;
  note?: string;
  startDate?: string;
  endDate?: string;
}): StockTakeDetail[] => {
  return stockTakeDetails.filter(detail => {
    if (detail.deleted_at) return false;
    
    if (criteria.stockTakeId && detail.stock_take_id !== criteria.stockTakeId) return false;
    if (criteria.inventoryTransactionId && detail.inventory_transaction_id !== criteria.inventoryTransactionId) return false;
    if (criteria.productId && detail.product_id !== criteria.productId) return false;
    if (criteria.locationId && detail.location_id !== criteria.locationId) return false;
    
    if (criteria.startDate || criteria.endDate) {
      const createdDate = new Date(detail.created_at);
      if (criteria.startDate && createdDate < new Date(criteria.startDate)) return false;
      if (criteria.endDate && createdDate > new Date(criteria.endDate)) return false;
    }
    
    if (criteria.description && !detail.description.toLowerCase().includes(criteria.description.toLowerCase())) return false;
    if (criteria.note && detail.note && !detail.note.toLowerCase().includes(criteria.note.toLowerCase())) return false;
    
    return true;
  });
};

// UTILITY FUNCTIONS - ฟังก์ชันเสริม
export const getStockTakeDetailCount = (): number => {
  return stockTakeDetails.filter(detail => !detail.deleted_at).length;
};

export const getStockTakeDetailCountByStockTakeId = (stockTakeId: string): number => {
  return stockTakeDetails.filter(detail => detail.stock_take_id === stockTakeId && !detail.deleted_at).length;
};

export const isStockTakeDetailExists = (id: string): boolean => {
  return stockTakeDetails.some(detail => detail.id === id && !detail.deleted_at);
};

export const isSequenceNoExists = (stockTakeId: string, sequenceNo: number): boolean => {
  return stockTakeDetails.some(detail => 
    detail.stock_take_id === stockTakeId && 
    detail.sequence_no === sequenceNo && 
    !detail.deleted_at
  );
};

export const getNextSequenceNo = (stockTakeId: string): number => {
  const details = getStockTakeDetailsByStockTakeId(stockTakeId);
  if (details.length === 0) return 1;
  
  const maxSequenceNo = Math.max(...details.map(d => d.sequence_no));
  return maxSequenceNo + 1;
};

export const clearAllStockTakeDetails = (): void => {
  stockTakeDetails.length = 0;
};

export const clearStockTakeDetailsByStockTakeId = (stockTakeId: string): void => {
  const indicesToRemove: number[] = [];
  stockTakeDetails.forEach((detail, index) => {
    if (detail.stock_take_id === stockTakeId) {
      indicesToRemove.push(index);
    }
  });
  
  // Remove from highest index to lowest to avoid shifting issues
  indicesToRemove.reverse().forEach(index => {
    stockTakeDetails.splice(index, 1);
  });
};
