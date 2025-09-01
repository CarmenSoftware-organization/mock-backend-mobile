import { generateId, getCurrentTimestamp } from "@/libs/utils";

export interface CountStockDetail {
  id: string;
  count_stock_id: string;
  sequence_no: number;
  product_id: string;
  product_name: string;
  qty: number;
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

export const countStockDetails: CountStockDetail[] = [
  {
    id: "e4f5g6h7-i8j9-0123-efgh-567890123456",
    count_stock_id: "b1c2d3e4-f5g6-7890-bcde-f23456789012",
    sequence_no: 1,
    product_id: "prod_001",
    product_name: "Product A",
    qty: 100,
    description: "Count stock detail for Product A",
    note: "Regular count",
    info: { category: "electronics", condition: "good" },
    dimension: { length: "10cm", width: "5cm", height: "2cm" },
    doc_version: "1.0",
    created_at: "2025-07-31T06:30:00.000Z",
    created_by_id: "1bfdb891-58ee-499c-8115-34a964de8122",
    updated_at: "2025-07-31T06:30:00.000Z",
    updated_by_id: "1bfdb891-58ee-499c-8115-34a964de8122",
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "f5g6h7i8-j9k0-1234-fghi-678901234567",
    count_stock_id: "b1c2d3e4-f5g6-7890-bcde-f23456789012",
    sequence_no: 2,
    product_id: "prod_002",
    product_name: "Product B",
    qty: 50,
    description: "Count stock detail for Product B",
    note: "Regular count",
    info: { category: "clothing", condition: "excellent" },
    dimension: { length: "20cm", width: "15cm", height: "1cm" },
    doc_version: "1.0",
    created_at: "2025-07-31T06:31:00.000Z",
    created_by_id: "1bfdb891-58ee-499c-8115-34a964de8122",
    updated_at: "2025-07-31T06:31:00.000Z",
    updated_by_id: "1bfdb891-58ee-499c-8115-34a964de8122",
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "g6h7i8j9-k0l1-2345-ghij-789012345678",
    count_stock_id: "c2d3e4f5-g6h7-8901-cdef-345678901234",
    sequence_no: 1,
    product_id: "prod_003",
    product_name: "Product C",
    qty: 75,
    description: "Count stock detail for Product C",
    note: "Physical count",
    info: { category: "furniture", condition: "good" },
    dimension: { length: "100cm", width: "60cm", height: "80cm" },
    doc_version: "1.0",
    created_at: "2025-07-31T07:30:00.000Z",
    created_by_id: "1bfdb891-58ee-499c-8115-34a964de8122",
    updated_at: "2025-07-31T07:30:00.000Z",
    updated_by_id: "1bfdb891-58ee-499c-8115-34a964de8122",
    deleted_at: null,
    deleted_by_id: null
  }
];

// CREATE - สร้าง CountStockDetail ใหม่
export const createCountStockDetail = (detailData: Omit<CountStockDetail, 'id' | 'created_at' | 'updated_at'>): CountStockDetail => {
  const newDetail: CountStockDetail = {
    ...detailData,
    id: generateId(),
    created_at: getCurrentTimestamp(),
    updated_at: getCurrentTimestamp()
  };
  
  countStockDetails.push(newDetail);
  return newDetail;
};

// READ - อ่าน CountStockDetail ทั้งหมด
export const getAllCountStockDetails = (): CountStockDetail[] => {
  return [...countStockDetails];
};

// READ - อ่าน CountStockDetail ตาม ID
export const getCountStockDetailById = (id: string): CountStockDetail | undefined => {
  return countStockDetails.find(detail => detail.id === id);
};

// READ - อ่าน CountStockDetail ตาม count_stock_id
export const getCountStockDetailsByCountStockId = (countStockId: string): CountStockDetail[] => {
  return countStockDetails.filter(detail => detail.count_stock_id === countStockId);
};

// READ - อ่าน CountStockDetail ตาม product_id
export const getCountStockDetailsByProductId = (productId: string): CountStockDetail[] => {
  return countStockDetails.filter(detail => detail.product_id === productId);
};

// READ - อ่าน CountStockDetail ตาม product_name
export const getCountStockDetailsByProductName = (productName: string): CountStockDetail[] => {
  return countStockDetails.filter(detail => 
    detail.product_name.toLowerCase().includes(productName.toLowerCase())
  );
};

// READ - อ่าน CountStockDetail ตาม sequence_no
export const getCountStockDetailsBySequenceNo = (sequenceNo: number): CountStockDetail[] => {
  return countStockDetails.filter(detail => detail.sequence_no === sequenceNo);
};

// READ - อ่าน CountStockDetail ตาม created_by_id
export const getCountStockDetailsByCreatedBy = (createdById: string): CountStockDetail[] => {
  return countStockDetails.filter(detail => detail.created_by_id === createdById);
};

// READ - อ่าน CountStockDetail ที่ไม่ถูกลบ
export const getActiveCountStockDetails = (): CountStockDetail[] => {
  return countStockDetails.filter(detail => !detail.deleted_at);
};

// READ - อ่าน CountStockDetail ที่ถูกลบ
export const getDeletedCountStockDetails = (): CountStockDetail[] => {
  return countStockDetails.filter(detail => detail.deleted_at);
};

// READ - อ่าน CountStockDetail ตามช่วงเวลา
export const getCountStockDetailsByDateRange = (startDate: string, endDate: string): CountStockDetail[] => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  
  return countStockDetails.filter(detail => {
    const detailDate = new Date(detail.created_at);
    return detailDate >= start && detailDate <= end;
  });
};

// UPDATE - อัปเดต CountStockDetail
export const updateCountStockDetail = (
  id: string, 
  updateData: Partial<Omit<CountStockDetail, 'id' | 'created_at' | 'created_by_id'>>,
  updatedById: string
): CountStockDetail | null => {
  const index = countStockDetails.findIndex(detail => detail.id === id);
  
  if (index === -1) {
    return null;
  }
  
  countStockDetails[index] = {
    ...countStockDetails[index],
    ...updateData,
    updated_at: getCurrentTimestamp(),
    updated_by_id: updatedById
  };
  
  return countStockDetails[index];
};

// UPDATE - อัปเดต CountStockDetail sequence_no
export const updateCountStockDetailSequenceNo = (id: string, sequenceNo: number, updatedById: string): CountStockDetail | null => {
  return updateCountStockDetail(id, { sequence_no: sequenceNo }, updatedById);
};

// UPDATE - อัปเดต CountStockDetail qty
export const updateCountStockDetailQty = (id: string, qty: number, updatedById: string): CountStockDetail | null => {
  return updateCountStockDetail(id, { qty }, updatedById);
};

// UPDATE - อัปเดต CountStockDetail description
export const updateCountStockDetailDescription = (id: string, description: string, updatedById: string): CountStockDetail | null => {
  return updateCountStockDetail(id, { description }, updatedById);
};

// UPDATE - อัปเดต CountStockDetail note
export const updateCountStockDetailNote = (id: string, note: string, updatedById: string): CountStockDetail | null => {
  return updateCountStockDetail(id, { note }, updatedById);
};

// UPDATE - อัปเดต CountStockDetail info
export const updateCountStockDetailInfo = (id: string, info: any, updatedById: string): CountStockDetail | null => {
  return updateCountStockDetail(id, { info }, updatedById);
};

// UPDATE - อัปเดต CountStockDetail dimension
export const updateCountStockDetailDimension = (id: string, dimension: any, updatedById: string): CountStockDetail | null => {
  return updateCountStockDetail(id, { dimension }, updatedById);
};

// UPDATE - อัปเดต CountStockDetail doc version
export const updateCountStockDetailDocVersion = (id: string, docVersion: string, updatedById: string): CountStockDetail | null => {
  return updateCountStockDetail(id, { doc_version: docVersion }, updatedById);
};

// UPDATE - อัปเดต CountStockDetail โดย count_stock_id และ sequence_no
export const updateCountStockDetailByCountStockAndSequence = (
  countStockId: string, 
  sequenceNo: number, 
  updateData: Partial<Omit<CountStockDetail, 'id' | 'count_stock_id' | 'sequence_no' | 'created_at' | 'created_by_id'>>,
  updatedById: string
): CountStockDetail | null => {
  const detail = countStockDetails.find(d => 
    d.count_stock_id === countStockId && d.sequence_no === sequenceNo
  );
  
  if (!detail) return null;
  
  return updateCountStockDetail(detail.id, updateData, updatedById);
};

// DELETE - ลบ CountStockDetail (soft delete)
export const deleteCountStockDetail = (id: string, deletedById: string): boolean => {
  const index = countStockDetails.findIndex(detail => detail.id === id);
  
  if (index === -1) {
    return false;
  }
  
  countStockDetails[index] = {
    ...countStockDetails[index],
    deleted_at: getCurrentTimestamp(),
    deleted_by_id: deletedById
  };
  
  return true;
};

// DELETE - ลบ CountStockDetail แบบถาวร
export const hardDeleteCountStockDetail = (id: string): boolean => {
  const index = countStockDetails.findIndex(detail => detail.id === id);
  
  if (index === -1) {
    return false;
  }
  
  countStockDetails.splice(index, 1);
  return true;
};

// DELETE - ลบ CountStockDetail ตาม count_stock_id
export const deleteCountStockDetailsByCountStockId = (countStockId: string, deletedById: string): number => {
  let deletedCount = 0;
  
  countStockDetails.forEach(detail => {
    if (detail.count_stock_id === countStockId && !detail.deleted_at) {
      detail.deleted_at = getCurrentTimestamp();
      detail.deleted_by_id = deletedById;
      deletedCount++;
    }
  });
  
  return deletedCount;
};

// DELETE - ลบ CountStockDetail ตาม product_id
export const deleteCountStockDetailsByProductId = (productId: string, deletedById: string): number => {
  let deletedCount = 0;
  
  countStockDetails.forEach(detail => {
    if (detail.product_id === productId && !detail.deleted_at) {
      detail.deleted_at = getCurrentTimestamp();
      detail.deleted_by_id = deletedById;
      deletedCount++;
    }
  });
  
  return deletedCount;
};

// DELETE - ลบ CountStockDetail ตาม count_stock_id และ sequence_no
export const deleteCountStockDetailByCountStockAndSequence = (countStockId: string, sequenceNo: number, deletedById: string): boolean => {
  const detail = countStockDetails.find(d => 
    d.count_stock_id === countStockId && d.sequence_no === sequenceNo
  );
  
  if (!detail) return false;
  
  return deleteCountStockDetail(detail.id, deletedById);
};

// RESTORE - กู้คืน CountStockDetail ที่ถูกลบ
export const restoreCountStockDetail = (id: string, restoredById: string): CountStockDetail | null => {
  const index = countStockDetails.findIndex(detail => detail.id === id);
  
  if (index === -1) {
    return null;
  }
  
  countStockDetails[index] = {
    ...countStockDetails[index],
    deleted_at: null,
    deleted_by_id: null,
    updated_at: getCurrentTimestamp(),
    updated_by_id: restoredById
  };
  
  return countStockDetails[index];
};

// RESTORE - กู้คืน CountStockDetail ทั้งหมดของ count_stock
export const restoreCountStockDetailsByCountStockId = (countStockId: string, restoredById: string): number => {
  let restoredCount = 0;
  
  countStockDetails.forEach(detail => {
    if (detail.count_stock_id === countStockId && detail.deleted_at) {
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
export const clearAllCountStockDetails = (): void => {
  countStockDetails.length = 0;
};

// Utility function สำหรับนับจำนวน CountStockDetail
export const getCountStockDetailCount = (): number => {
  return countStockDetails.length;
};

// Utility function สำหรับนับจำนวน CountStockDetail ที่ไม่ถูกลบ
export const getActiveCountStockDetailCount = (): number => {
  return countStockDetails.filter(detail => !detail.deleted_at).length;
};

// Utility function สำหรับนับจำนวน CountStockDetail ของ count_stock
export const getCountStockDetailCountByCountStockId = (countStockId: string): number => {
  return countStockDetails.filter(detail => detail.count_stock_id === countStockId && !detail.deleted_at).length;
};

// Utility function สำหรับนับจำนวน CountStockDetail ของ product
export const getCountStockDetailCountByProductId = (productId: string): number => {
  return countStockDetails.filter(detail => detail.product_id === productId && !detail.deleted_at).length;
};

// Utility function สำหรับหาลำดับ sequence_no ถัดไปของ count_stock
export const getNextCountStockSequenceNo = (countStockId: string): number => {
  const details = getCountStockDetailsByCountStockId(countStockId);
  if (details.length === 0) return 1;
  
  const maxSequence = Math.max(...details.map((d: CountStockDetail) => d.sequence_no));
  return maxSequence + 1;
};

// Utility function สำหรับค้นหา CountStockDetail แบบ advanced search
export const searchCountStockDetails = (searchCriteria: {
  count_stock_id?: string;
  product_id?: string;
  product_name?: string;
  qty?: number;
  description?: string;
  note?: string;
  created_by_id?: string;
  is_deleted?: boolean;
  start_date?: string;
  end_date?: string;
}): CountStockDetail[] => {
  return countStockDetails.filter(detail => {
    // ตรวจสอบ count_stock_id
    if (searchCriteria.count_stock_id && detail.count_stock_id !== searchCriteria.count_stock_id) {
      return false;
    }
    
    // ตรวจสอบ product_id
    if (searchCriteria.product_id && detail.product_id !== searchCriteria.product_id) {
      return false;
    }
    
    // ตรวจสอบ product_name
    if (searchCriteria.product_name && !detail.product_name.toLowerCase().includes(searchCriteria.product_name.toLowerCase())) {
      return false;
    }
    
    // ตรวจสอบ qty
    if (searchCriteria.qty && detail.qty !== searchCriteria.qty) {
      return false;
    }
    
    // ตรวจสอบ description
    if (searchCriteria.description && !detail.description.toLowerCase().includes(searchCriteria.description.toLowerCase())) {
      return false;
    }
    
    // ตรวจสอบ note
    if (searchCriteria.note && !detail.note.toLowerCase().includes(searchCriteria.note.toLowerCase())) {
      return false;
    }
    
    // ตรวจสอบ created_by_id
    if (searchCriteria.created_by_id && detail.created_by_id !== searchCriteria.created_by_id) {
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

// Utility function สำหรับตรวจสอบ sequence_no ซ้ำใน count_stock
export const isSequenceNoExistsInCountStock = (countStockId: string, sequenceNo: number): boolean => {
  return countStockDetails.some(detail => 
    detail.count_stock_id === countStockId && 
    detail.sequence_no === sequenceNo && 
    !detail.deleted_at
  );
};

// Utility function สำหรับตรวจสอบ sequence_no ซ้ำทั้งหมด
export const isCountStockSequenceNoExistsAll = (countStockId: string, sequenceNo: number): boolean => {
  return countStockDetails.some(detail => 
    detail.count_stock_id === countStockId && detail.sequence_no === sequenceNo
  );
};

// Utility function สำหรับลบ CountStockDetail ทั้งหมดของ count_stock (hard delete)
export const hardDeleteCountStockDetailsByCountStockId = (countStockId: string): number => {
  const initialLength = countStockDetails.length;
  const filteredDetails = countStockDetails.filter(detail => detail.count_stock_id !== countStockId);
  const deletedCount = initialLength - filteredDetails.length;
  
  // แทนที่ array เดิม
  countStockDetails.length = 0;
  countStockDetails.push(...filteredDetails);
  
  return deletedCount;
};

// Utility function สำหรับลบ CountStockDetail ทั้งหมดของ product (hard delete)
export const hardDeleteCountStockDetailsByProductId = (productId: string): number => {
  const initialLength = countStockDetails.length;
  const filteredDetails = countStockDetails.filter(detail => detail.product_id !== productId);
  const deletedCount = initialLength - filteredDetails.length;
  
  // แทนที่ array เดิม
  countStockDetails.length = 0;
  countStockDetails.push(...filteredDetails);
  
  return deletedCount;
};
