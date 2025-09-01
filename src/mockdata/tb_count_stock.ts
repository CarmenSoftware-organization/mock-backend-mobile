import { generateId, getCurrentTimestamp } from "@/libs/utils";

export interface CountStock {
  id: string;
  count_stock_no: string;
  start_date: string;
  end_date: string;
  location_id: string;
  location_name: string;
  doc_status: 'draft' | 'submitted' | 'approved' | 'rejected' | 'completed';
  count_stock_type: 'cycle' | 'physical' | 'random';
  description: string;
  note: string;
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

export const countStocks: CountStock[] = [
  {
    id: "b1c2d3e4-f5g6-7890-bcde-f23456789012",
    count_stock_no: "CS-2025-001",
    start_date: "2025-07-31T00:00:00.000Z",
    end_date: "2025-07-31T23:59:59.000Z",
    location_id: "loc_001",
    location_name: "Main Warehouse",
    doc_status: "draft",
    count_stock_type: "cycle",
    description: "Monthly cycle count for main warehouse",
    note: "Regular monthly count",
    info: { category: "monthly", priority: "normal" },
    dimension: { area: "A1", section: "1" },
    doc_version: "1.0",
    created_at: "2025-07-31T06:00:00.000Z",
    created_by_id: "1bfdb891-58ee-499c-8115-34a964de8122",
    updated_at: "2025-07-31T06:00:00.000Z",
    updated_by_id: "1bfdb891-58ee-499c-8115-34a964de8122",
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "c2d3e4f5-g6h7-8901-cdef-345678901234",
    count_stock_no: "CS-2025-002",
    start_date: "2025-08-01T00:00:00.000Z",
    end_date: "2025-08-01T23:59:59.000Z",
    location_id: "loc_002",
    location_name: "Secondary Warehouse",
    doc_status: "submitted",
    count_stock_type: "physical",
    description: "Physical count for secondary warehouse",
    note: "Annual physical count",
    info: { category: "annual", priority: "high" },
    dimension: { area: "B1", section: "2" },
    doc_version: "1.0",
    created_at: "2025-07-31T07:00:00.000Z",
    created_by_id: "1bfdb891-58ee-499c-8115-34a964de8122",
    updated_at: "2025-07-31T07:00:00.000Z",
    updated_by_id: "1bfdb891-58ee-499c-8115-34a964de8122",
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "d3e4f5g6-h7i8-9012-defg-456789012345",
    count_stock_no: "CS-2025-003",
    start_date: "2025-08-02T00:00:00.000Z",
    end_date: "2025-08-02T23:59:59.000Z",
    location_id: "loc_003",
    location_name: "Retail Store",
    doc_status: "approved",
    count_stock_type: "random",
    description: "Random count for retail store",
    note: "Spot check count",
    info: { category: "random", priority: "medium" },
    dimension: { area: "C1", section: "3" },
    doc_version: "1.0",
    created_at: "2025-07-31T08:00:00.000Z",
    created_by_id: "1bfdb891-58ee-499c-8115-34a964de8122",
    updated_at: "2025-07-31T08:00:00.000Z",
    updated_by_id: "1bfdb891-58ee-499c-8115-34a964de8122",
    deleted_at: null,
    deleted_by_id: null
  }
];

// CREATE - สร้าง CountStock ใหม่
export const createCountStock = (countStockData: Omit<CountStock, 'id' | 'created_at' | 'updated_at'>): CountStock => {
  const newCountStock: CountStock = {
    ...countStockData,
    id: generateId(),
    created_at: getCurrentTimestamp(),
    updated_at: getCurrentTimestamp()
  };
  
  countStocks.push(newCountStock);
  return newCountStock;
};

// READ - อ่าน CountStock ทั้งหมด
export const getAllCountStocks = (): CountStock[] => {
  return [...countStocks];
};

// READ - อ่าน CountStock ตาม ID
export const getCountStockById = (id: string): CountStock | undefined => {
  return countStocks.find(countStock => countStock.id === id);
};

// READ - อ่าน CountStock ตาม count_stock_no
export const getCountStockByNo = (countStockNo: string): CountStock | undefined => {
  return countStocks.find(countStock => countStock.count_stock_no === countStockNo);
};

// READ - อ่าน CountStock ตาม location_id
export const getCountStocksByLocationId = (locationId: string): CountStock[] => {
  return countStocks.filter(countStock => countStock.location_id === locationId);
};

// READ - อ่าน CountStock ตาม doc_status
export const getCountStocksByStatus = (docStatus: CountStock['doc_status']): CountStock[] => {
  return countStocks.filter(countStock => countStock.doc_status === docStatus);
};

// READ - อ่าน CountStock ตาม count_stock_type
export const getCountStocksByType = (countStockType: CountStock['count_stock_type']): CountStock[] => {
  return countStocks.filter(countStock => countStock.count_stock_type === countStockType);
};

// READ - อ่าน CountStock ตาม created_by_id
export const getCountStocksByCreatedBy = (createdById: string): CountStock[] => {
  return countStocks.filter(countStock => countStock.created_by_id === createdById);
};

// READ - อ่าน CountStock ตามช่วงเวลา
export const getCountStocksByDateRange = (startDate: string, endDate: string): CountStock[] => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  
  return countStocks.filter(countStock => {
    const countStartDate = new Date(countStock.start_date);
    const countEndDate = new Date(countStock.end_date);
    
    return countStartDate >= start && countEndDate <= end;
  });
};

// READ - อ่าน CountStock ที่ไม่ถูกลบ
export const getActiveCountStocks = (): CountStock[] => {
  return countStocks.filter(countStock => !countStock.deleted_at);
};

// READ - อ่าน CountStock ที่ถูกลบ
export const getDeletedCountStocks = (): CountStock[] => {
  return countStocks.filter(countStock => countStock.deleted_at);
};

// UPDATE - อัปเดต CountStock
export const updateCountStock = (
  id: string, 
  updateData: Partial<Omit<CountStock, 'id' | 'created_at' | 'created_by_id'>>,
  updatedById: string
): CountStock | null => {
  const index = countStocks.findIndex(countStock => countStock.id === id);
  
  if (index === -1) {
    return null;
  }
  
  countStocks[index] = {
    ...countStocks[index],
    ...updateData,
    updated_at: getCurrentTimestamp(),
    updated_by_id: updatedById
  };
  
  return countStocks[index];
};

// UPDATE - อัปเดต CountStock status
export const updateCountStockStatus = (id: string, docStatus: CountStock['doc_status'], updatedById: string): CountStock | null => {
  return updateCountStock(id, { doc_status: docStatus }, updatedById);
};

// UPDATE - อัปเดต CountStock description
export const updateCountStockDescription = (id: string, description: string, updatedById: string): CountStock | null => {
  return updateCountStock(id, { description }, updatedById);
};

// UPDATE - อัปเดต CountStock note
export const updateCountStockNote = (id: string, note: string, updatedById: string): CountStock | null => {
  return updateCountStock(id, { note }, updatedById);
};

// UPDATE - อัปเดต CountStock info
export const updateCountStockInfo = (id: string, info: any, updatedById: string): CountStock | null => {
  return updateCountStock(id, { info }, updatedById);
};

// UPDATE - อัปเดต CountStock dimension
export const updateCountStockDimension = (id: string, dimension: any, updatedById: string): CountStock | null => {
  return updateCountStock(id, { dimension }, updatedById);
};

// UPDATE - อัปเดต CountStock โดย count_stock_no
export const updateCountStockByNo = (
  countStockNo: string, 
  updateData: Partial<Omit<CountStock, 'id' | 'count_stock_no' | 'created_at' | 'created_by_id'>>,
  updatedById: string
): CountStock | null => {
  const countStock = getCountStockByNo(countStockNo);
  if (!countStock) return null;
  
  return updateCountStock(countStock.id, updateData, updatedById);
};

// DELETE - ลบ CountStock (soft delete)
export const deleteCountStock = (id: string, deletedById: string): boolean => {
  const index = countStocks.findIndex(countStock => countStock.id === id);
  
  if (index === -1) {
    return false;
  }
  
  countStocks[index] = {
    ...countStocks[index],
    deleted_at: getCurrentTimestamp(),
    deleted_by_id: deletedById
  };
  
  return true;
};

// DELETE - ลบ CountStock แบบถาวร
export const hardDeleteCountStock = (id: string): boolean => {
  const index = countStocks.findIndex(countStock => countStock.id === id);
  
  if (index === -1) {
    return false;
  }
  
  countStocks.splice(index, 1);
  return true;
};

// DELETE - ลบ CountStock ตาม count_stock_no
export const deleteCountStockByNo = (countStockNo: string, deletedById: string): boolean => {
  const countStock = countStocks.find(cs => cs.count_stock_no === countStockNo);
  if (!countStock) return false;
  
  return deleteCountStock(countStock.id, deletedById);
};

// DELETE - ลบ CountStock ตาม location_id
export const deleteCountStocksByLocationId = (locationId: string, deletedById: string): number => {
  let deletedCount = 0;
  
  countStocks.forEach(countStock => {
    if (countStock.location_id === locationId && !countStock.deleted_at) {
      countStock.deleted_at = getCurrentTimestamp();
      countStock.deleted_by_id = deletedById;
      deletedCount++;
    }
  });
  
  return deletedCount;
};

// RESTORE - กู้คืน CountStock ที่ถูกลบ
export const restoreCountStock = (id: string, restoredById: string): CountStock | null => {
  const index = countStocks.findIndex(countStock => countStock.id === id);
  
  if (index === -1) {
    return null;
  }
  
  countStocks[index] = {
    ...countStocks[index],
    deleted_at: null,
    deleted_by_id: null,
    updated_at: getCurrentTimestamp(),
    updated_by_id: restoredById
  };
  
  return countStocks[index];
};

// Utility function สำหรับล้างข้อมูลทั้งหมด (ใช้สำหรับ testing)
export const clearAllCountStocks = (): void => {
  countStocks.length = 0;
};

// Utility function สำหรับนับจำนวน CountStock
export const getCountStockCount = (): number => {
  return countStocks.length;
};

// Utility function สำหรับนับจำนวน CountStock ที่ไม่ถูกลบ
export const getActiveCountStockCount = (): number => {
  return countStocks.filter(countStock => !countStock.deleted_at).length;
};

// Utility function สำหรับนับจำนวน CountStock ตาม status
export const getCountStockCountByStatus = (docStatus: CountStock['doc_status']): number => {
  return countStocks.filter(countStock => countStock.doc_status === docStatus && !countStock.deleted_at).length;
};

// Utility function สำหรับนับจำนวน CountStock ตาม type
export const getCountStockCountByType = (countStockType: CountStock['count_stock_type']): number => {
  return countStocks.filter(countStock => countStock.count_stock_type === countStockType && !countStock.deleted_at).length;
};

// Utility function สำหรับนับจำนวน CountStock ตาม location
export const getCountStockCountByLocation = (locationId: string): number => {
  return countStocks.filter(countStock => countStock.location_id === locationId && !countStock.deleted_at).length;
};

// Utility function สำหรับค้นหา CountStock แบบ advanced search
export const searchCountStocks = (searchCriteria: {
  count_stock_no?: string;
  location_id?: string;
  location_name?: string;
  doc_status?: CountStock['doc_status'];
  count_stock_type?: CountStock['count_stock_type'];
  description?: string;
  note?: string;
  created_by_id?: string;
  is_deleted?: boolean;
  start_date?: string;
  end_date?: string;
}): CountStock[] => {
  return countStocks.filter(countStock => {
    // ตรวจสอบ count_stock_no
    if (searchCriteria.count_stock_no && !countStock.count_stock_no.toLowerCase().includes(searchCriteria.count_stock_no.toLowerCase())) {
      return false;
    }
    
    // ตรวจสอบ location_id
    if (searchCriteria.location_id && countStock.location_id !== searchCriteria.location_id) {
      return false;
    }
    
    // ตรวจสอบ location_name
    if (searchCriteria.location_name && !countStock.location_name.toLowerCase().includes(searchCriteria.location_name.toLowerCase())) {
      return false;
    }
    
    // ตรวจสอบ doc_status
    if (searchCriteria.doc_status && countStock.doc_status !== searchCriteria.doc_status) {
      return false;
    }
    
    // ตรวจสอบ count_stock_type
    if (searchCriteria.count_stock_type && countStock.count_stock_type !== searchCriteria.count_stock_type) {
      return false;
    }
    
    // ตรวจสอบ description
    if (searchCriteria.description && !countStock.description.toLowerCase().includes(searchCriteria.description.toLowerCase())) {
      return false;
    }
    
    // ตรวจสอบ note
    if (searchCriteria.note && !countStock.note.toLowerCase().includes(searchCriteria.note.toLowerCase())) {
      return false;
    }
    
    // ตรวจสอบ created_by_id
    if (searchCriteria.created_by_id && countStock.created_by_id !== searchCriteria.created_by_id) {
      return false;
    }
    
    // ตรวจสอบสถานะการลบ
    if (searchCriteria.is_deleted !== undefined) {
      const isDeleted = !!countStock.deleted_at;
      if (isDeleted !== searchCriteria.is_deleted) {
        return false;
      }
    }
    
    // ตรวจสอบช่วงเวลา
    if (searchCriteria.start_date || searchCriteria.end_date) {
      const countStockDate = new Date(countStock.created_at);
      
      if (searchCriteria.start_date) {
        const startDate = new Date(searchCriteria.start_date);
        if (countStockDate < startDate) {
          return false;
        }
      }
      
      if (searchCriteria.end_date) {
        const endDate = new Date(searchCriteria.end_date);
        if (countStockDate > endDate) {
          return false;
        }
      }
    }
    
    return true;
  });
};

// Utility function สำหรับตรวจสอบ count_stock_no ซ้ำ
export const isCountStockNoExists = (countStockNo: string): boolean => {
  return countStocks.some(countStock => countStock.count_stock_no === countStockNo && !countStock.deleted_at);
};

// Utility function สำหรับตรวจสอบ count_stock_no ซ้ำทั้งหมด
export const isCountStockNoExistsAll = (countStockNo: string): boolean => {
  return countStocks.some(countStock => countStock.count_stock_no === countStockNo);
};

// Utility function สำหรับสร้าง count_stock_no ใหม่
export const generateCountStockNo = (prefix: string = "CS"): string => {
  const now = new Date();
  const year = now.getFullYear();
  const month = (now.getMonth() + 1).toString().padStart(2, '0');
  
  // หา sequence number สูงสุดของเดือนนี้
  const currentMonthStocks = countStocks.filter(cs => {
    const stockDate = new Date(cs.created_at);
    return stockDate.getFullYear() === year && (stockDate.getMonth() + 1) === parseInt(month);
  });
  
  const maxSequence = Math.max(0, ...currentMonthStocks.map(cs => {
    const match = cs.count_stock_no.match(/\d+$/);
    return match ? parseInt(match[0]) : 0;
  }));
  
  const nextSequence = maxSequence + 1;
  return `${prefix}-${year}-${month}-${nextSequence.toString().padStart(3, '0')}`;
};
