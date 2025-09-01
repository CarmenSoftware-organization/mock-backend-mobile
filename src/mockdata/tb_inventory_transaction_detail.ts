import { generateId, getCurrentTimestamp } from "@/libs/utils";

export interface InventoryTransactionDetail {
  id: string;
  inventory_transaction_id: string;
  from_lot_no: string;
  current_lot_no: string;
  location_id: string;
  product_id: string;
  qty: string;
  cost_per_unit: string;
  total_cost: string;
  note: string;
  info: any;
  dimension: any;
  created_at: string;
  created_by_id: string;
  updated_at: string;
  updated_by_id: string | null;
  deleted_at: string | null;
  deleted_by_id: string | null;
}

export const inventoryTransactionDetails: InventoryTransactionDetail[] = [
  {
    id: "550e8400-e29b-41d4-a716-446655440001",
    inventory_transaction_id: "550e8400-e29b-41d4-a716-446655440001",
    from_lot_no: "LOT-2024-001",
    current_lot_no: "LOT-2024-001",
    location_id: "550e8400-e29b-41d4-a716-446655440001",
    product_id: "550e8400-e29b-41d4-a716-446655440001",
    qty: "100",
    cost_per_unit: "150.00",
    total_cost: "15000.00",
    note: "Initial stock received",
    info: { brand: "Dell", model: "Latitude 5520", condition: "new" },
    dimension: null,
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440002",
    inventory_transaction_id: "550e8400-e29b-41d4-a716-446655440002",
    from_lot_no: "LOT-2024-001",
    current_lot_no: "LOT-2024-001",
    location_id: "550e8400-e29b-41d4-a716-446655440001",
    product_id: "550e8400-e29b-41d4-a716-446655440001",
    qty: "25",
    cost_per_unit: "150.00",
    total_cost: "3750.00",
    note: "Sales order fulfillment",
    info: { brand: "Dell", model: "Latitude 5520", condition: "new" },
    dimension: null,
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "1bfdb891-58ee-499c-8115-34a964de8122",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440003",
    inventory_transaction_id: "550e8400-e29b-41d4-a716-446655440003",
    from_lot_no: "LOT-2024-002",
    current_lot_no: "LOT-2024-002",
    location_id: "550e8400-e29b-41d4-a716-446655440002",
    product_id: "550e8400-e29b-41d4-a716-446655440002",
    qty: "50",
    cost_per_unit: "200.00",
    total_cost: "10000.00",
    note: "Office chair stock received",
    info: { material: "Leather", color: "Black", size: "Standard" },
    dimension: null,
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "3c5280a7-492e-421d-b739-7447455ce99e",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440004",
    inventory_transaction_id: "550e8400-e29b-41d4-a716-446655440004",
    from_lot_no: "LOT-2024-002",
    current_lot_no: "LOT-2024-002",
    location_id: "550e8400-e29b-41d4-a716-446655440002",
    product_id: "550e8400-e29b-41d4-a716-446655440002",
    qty: "10",
    cost_per_unit: "200.00",
    total_cost: "2000.00",
    note: "Office chair sales",
    info: { material: "Leather", color: "Black", size: "Standard" },
    dimension: null,
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440005",
    inventory_transaction_id: "550e8400-e29b-41d4-a716-446655440005",
    from_lot_no: "LOT-2024-003",
    current_lot_no: "LOT-2024-003",
    location_id: "550e8400-e29b-41d4-a716-446655440003",
    product_id: "550e8400-e29b-41d4-a716-446655440003",
    qty: "30",
    cost_per_unit: "300.00",
    total_cost: "9000.00",
    note: "Printer stock received",
    info: { type: "Laser", color: "Monochrome", network: true },
    dimension: null,
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "1bfdb891-58ee-499c-8115-34a964de8122",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null
  }
];

// CREATE - สร้าง InventoryTransactionDetail ใหม่
export const createInventoryTransactionDetail = (transactionDetailData: Omit<InventoryTransactionDetail, 'id' | 'created_at' | 'updated_at'>): InventoryTransactionDetail => {
  const newTransactionDetail: InventoryTransactionDetail = {
    ...transactionDetailData,
    id: generateId(),
    created_at: getCurrentTimestamp(),
    updated_at: getCurrentTimestamp()
  };
  
  inventoryTransactionDetails.push(newTransactionDetail);
  return newTransactionDetail;
};

// READ - อ่าน InventoryTransactionDetail ทั้งหมด
export const getAllInventoryTransactionDetails = (): InventoryTransactionDetail[] => {
  return [...inventoryTransactionDetails];
};

// READ - อ่าน InventoryTransactionDetail ตาม ID
export const getInventoryTransactionDetailById = (id: string): InventoryTransactionDetail | undefined => {
  return inventoryTransactionDetails.find(detail => detail.id === id);
};

// READ - อ่าน InventoryTransactionDetail ตาม inventory_transaction_id
export const getInventoryTransactionDetailsByTransactionId = (transactionId: string): InventoryTransactionDetail[] => {
  return inventoryTransactionDetails.filter(detail => detail.inventory_transaction_id === transactionId);
};

// READ - อ่าน InventoryTransactionDetail ตาม from_lot_no
export const getInventoryTransactionDetailsByFromLotNo = (fromLotNo: string): InventoryTransactionDetail[] => {
  return inventoryTransactionDetails.filter(detail => detail.from_lot_no === fromLotNo);
};

// READ - อ่าน InventoryTransactionDetail ตาม current_lot_no
export const getInventoryTransactionDetailsByCurrentLotNo = (currentLotNo: string): InventoryTransactionDetail[] => {
  return inventoryTransactionDetails.filter(detail => detail.current_lot_no === currentLotNo);
};

// READ - อ่าน InventoryTransactionDetail ตาม location_id
export const getInventoryTransactionDetailsByLocationId = (locationId: string): InventoryTransactionDetail[] => {
  return inventoryTransactionDetails.filter(detail => detail.location_id === locationId);
};

// READ - อ่าน InventoryTransactionDetail ตาม product_id
export const getInventoryTransactionDetailsByProductId = (productId: string): InventoryTransactionDetail[] => {
  return inventoryTransactionDetails.filter(detail => detail.product_id === productId);
};

// READ - อ่าน InventoryTransactionDetail ที่ active (ไม่ถูกลบ)
export const getActiveInventoryTransactionDetails = (): InventoryTransactionDetail[] => {
  return inventoryTransactionDetails.filter(detail => detail.deleted_at === null);
};

// READ - อ่าน InventoryTransactionDetail ที่ถูกลบแล้ว
export const getDeletedInventoryTransactionDetails = (): InventoryTransactionDetail[] => {
  return inventoryTransactionDetails.filter(detail => detail.deleted_at !== null);
};

// READ - อ่าน InventoryTransactionDetail ตาม created_by_id
export const getInventoryTransactionDetailsByCreatedBy = (createdById: string): InventoryTransactionDetail[] => {
  return inventoryTransactionDetails.filter(detail => detail.created_by_id === createdById);
};

// READ - อ่าน InventoryTransactionDetail ตาม updated_by_id
export const getInventoryTransactionDetailsByUpdatedBy = (updatedById: string): InventoryTransactionDetail[] => {
  return inventoryTransactionDetails.filter(detail => detail.updated_by_id === updatedById);
};

// READ - อ่าน InventoryTransactionDetail ที่มี note
export const getInventoryTransactionDetailsWithNote = (): InventoryTransactionDetail[] => {
  return inventoryTransactionDetails.filter(detail => detail.note && detail.note.trim() !== '');
};

// READ - อ่าน InventoryTransactionDetail ที่มี info
export const getInventoryTransactionDetailsWithInfo = (): InventoryTransactionDetail[] => {
  return inventoryTransactionDetails.filter(detail => detail.info !== null);
};

// READ - อ่าน InventoryTransactionDetail ที่มี dimension
export const getInventoryTransactionDetailsWithDimension = (): InventoryTransactionDetail[] => {
  return inventoryTransactionDetails.filter(detail => detail.dimension !== null);
};

// READ - อ่าน InventoryTransactionDetail ตาม qty range
export const getInventoryTransactionDetailsByQtyRange = (minQty: number, maxQty: number): InventoryTransactionDetail[] => {
  return inventoryTransactionDetails.filter(detail => {
    const qty = parseFloat(detail.qty);
    return qty >= minQty && qty <= maxQty;
  });
};

// READ - อ่าน InventoryTransactionDetail ตาม cost_per_unit range
export const getInventoryTransactionDetailsByCostRange = (minCost: number, maxCost: number): InventoryTransactionDetail[] => {
  return inventoryTransactionDetails.filter(detail => {
    const cost = parseFloat(detail.cost_per_unit);
    return cost >= minCost && cost <= maxCost;
  });
};

// READ - อ่าน InventoryTransactionDetail ตาม total_cost range
export const getInventoryTransactionDetailsByTotalCostRange = (minTotalCost: number, maxTotalCost: number): InventoryTransactionDetail[] => {
  return inventoryTransactionDetails.filter(detail => {
    const totalCost = parseFloat(detail.total_cost);
    return totalCost >= minTotalCost && totalCost <= maxTotalCost;
  });
};

// READ - ค้นหา InventoryTransactionDetail แบบ fuzzy search
export const searchInventoryTransactionDetailsFuzzy = (searchTerm: string): InventoryTransactionDetail[] => {
  const lowerSearchTerm = searchTerm.toLowerCase();
  return inventoryTransactionDetails.filter(detail => 
    detail.from_lot_no.toLowerCase().includes(lowerSearchTerm) ||
    detail.current_lot_no.toLowerCase().includes(lowerSearchTerm) ||
    (detail.note && detail.note.toLowerCase().includes(lowerSearchTerm))
  );
};

// UPDATE - อัปเดต InventoryTransactionDetail
export const updateInventoryTransactionDetail = (id: string, updateData: Partial<Omit<InventoryTransactionDetail, 'id' | 'created_at' | 'created_by_id'>>): InventoryTransactionDetail | null => {
  const index = inventoryTransactionDetails.findIndex(detail => detail.id === id);
  
  if (index === -1) {
    return null;
  }
  
  inventoryTransactionDetails[index] = {
    ...inventoryTransactionDetails[index],
    ...updateData,
    updated_at: getCurrentTimestamp()
  };
  
  return inventoryTransactionDetails[index];
};

// UPDATE - อัปเดต InventoryTransactionDetail from_lot_no
export const updateInventoryTransactionDetailFromLotNo = (id: string, fromLotNo: string): InventoryTransactionDetail | null => {
  return updateInventoryTransactionDetail(id, { from_lot_no: fromLotNo });
};

// UPDATE - อัปเดต InventoryTransactionDetail current_lot_no
export const updateInventoryTransactionDetailCurrentLotNo = (id: string, currentLotNo: string): InventoryTransactionDetail | null => {
  return updateInventoryTransactionDetail(id, { current_lot_no: currentLotNo });
};

// UPDATE - อัปเดต InventoryTransactionDetail qty
export const updateInventoryTransactionDetailQty = (id: string, qty: string): InventoryTransactionDetail | null => {
  return updateInventoryTransactionDetail(id, { qty });
};

// UPDATE - อัปเดต InventoryTransactionDetail cost_per_unit
export const updateInventoryTransactionDetailCostPerUnit = (id: string, costPerUnit: string): InventoryTransactionDetail | null => {
  return updateInventoryTransactionDetail(id, { cost_per_unit: costPerUnit });
};

// UPDATE - อัปเดต InventoryTransactionDetail total_cost
export const updateInventoryTransactionDetailTotalCost = (id: string, totalCost: string): InventoryTransactionDetail | null => {
  return updateInventoryTransactionDetail(id, { total_cost: totalCost });
};

// UPDATE - อัปเดต InventoryTransactionDetail note
export const updateInventoryTransactionDetailNote = (id: string, note: string): InventoryTransactionDetail | null => {
  return updateInventoryTransactionDetail(id, { note });
};

// UPDATE - อัปเดต InventoryTransactionDetail info
export const updateInventoryTransactionDetailInfo = (id: string, info: any): InventoryTransactionDetail | null => {
  return updateInventoryTransactionDetail(id, { info });
};

// UPDATE - อัปเดต InventoryTransactionDetail dimension
export const updateInventoryTransactionDetailDimension = (id: string, dimension: any): InventoryTransactionDetail | null => {
  return updateInventoryTransactionDetail(id, { dimension });
};

// UPDATE - InventoryTransactionDetail โดย inventory_transaction_id และ from_lot_no
export const updateInventoryTransactionDetailByTransactionAndFromLot = (transactionId: string, fromLotNo: string, updateData: Partial<Omit<InventoryTransactionDetail, 'id' | 'created_at' | 'created_by_id'>>): InventoryTransactionDetail | null => {
  const index = inventoryTransactionDetails.findIndex(detail => detail.inventory_transaction_id === transactionId && detail.from_lot_no === fromLotNo);
  
  if (index === -1) {
    return null;
  }
  
  inventoryTransactionDetails[index] = {
    ...inventoryTransactionDetails[index],
    ...updateData,
    updated_at: getCurrentTimestamp()
  };
  
  return inventoryTransactionDetails[index];
};

// DELETE - ลบ InventoryTransactionDetail (soft delete)
export const deleteInventoryTransactionDetail = (id: string, deletedById: string): boolean => {
  const index = inventoryTransactionDetails.findIndex(detail => detail.id === id);
  
  if (index === -1) {
    return false;
  }
  
  inventoryTransactionDetails[index] = {
    ...inventoryTransactionDetails[index],
    deleted_at: getCurrentTimestamp(),
    deleted_by_id: deletedById
  };
  
  return true;
};

// DELETE - ลบ InventoryTransactionDetail แบบถาวร
export const hardDeleteInventoryTransactionDetail = (id: string): boolean => {
  const index = inventoryTransactionDetails.findIndex(detail => detail.id === id);
  
  if (index === -1) {
    return false;
  }
  
  inventoryTransactionDetails.splice(index, 1);
  return true;
};

// DELETE - ลบ InventoryTransactionDetail ตาม inventory_transaction_id
export const deleteInventoryTransactionDetailsByTransactionId = (transactionId: string, deletedById: string): number => {
  let deletedCount = 0;
  
  inventoryTransactionDetails.forEach(detail => {
    if (detail.inventory_transaction_id === transactionId && !detail.deleted_at) {
      detail.deleted_at = getCurrentTimestamp();
      detail.deleted_by_id = deletedById;
      deletedCount++;
    }
  });
  
  return deletedCount;
};

// DELETE - ลบ InventoryTransactionDetail ตาม from_lot_no
export const deleteInventoryTransactionDetailsByFromLotNo = (fromLotNo: string, deletedById: string): number => {
  let deletedCount = 0;
  
  inventoryTransactionDetails.forEach(detail => {
    if (detail.from_lot_no === fromLotNo && !detail.deleted_at) {
      detail.deleted_at = getCurrentTimestamp();
      detail.deleted_by_id = deletedById;
      deletedCount++;
    }
  });
  
  return deletedCount;
};

// DELETE - ลบ InventoryTransactionDetail ตาม current_lot_no
export const deleteInventoryTransactionDetailsByCurrentLotNo = (currentLotNo: string, deletedById: string): number => {
  let deletedCount = 0;
  
  inventoryTransactionDetails.forEach(detail => {
    if (detail.current_lot_no === currentLotNo && !detail.deleted_at) {
      detail.deleted_at = getCurrentTimestamp();
      detail.deleted_by_id = deletedById;
      deletedCount++;
    }
  });
  
  return deletedCount;
};

// DELETE - ลบ InventoryTransactionDetail ตาม location_id
export const deleteInventoryTransactionDetailsByLocationId = (locationId: string, deletedById: string): number => {
  let deletedCount = 0;
  
  inventoryTransactionDetails.forEach(detail => {
    if (detail.location_id === locationId && !detail.deleted_at) {
      detail.deleted_at = getCurrentTimestamp();
      detail.deleted_by_id = deletedById;
      deletedCount++;
    }
  });
  
  return deletedCount;
};

// DELETE - ลบ InventoryTransactionDetail ตาม product_id
export const deleteInventoryTransactionDetailsByProductId = (productId: string, deletedById: string): number => {
  let deletedCount = 0;
  
  inventoryTransactionDetails.forEach(detail => {
    if (detail.product_id === productId && !detail.deleted_at) {
      detail.deleted_at = getCurrentTimestamp();
      detail.deleted_by_id = deletedById;
      deletedCount++;
    }
  });
  
  return deletedCount;
};

// DELETE - InventoryTransactionDetail โดย inventory_transaction_id และ from_lot_no
export const deleteInventoryTransactionDetailByTransactionAndFromLot = (transactionId: string, fromLotNo: string, deletedById: string): boolean => {
  const index = inventoryTransactionDetails.findIndex(detail => detail.inventory_transaction_id === transactionId && detail.from_lot_no === fromLotNo);
  
  if (index === -1) {
    return false;
  }
  
  inventoryTransactionDetails[index] = {
    ...inventoryTransactionDetails[index],
    deleted_at: getCurrentTimestamp(),
    deleted_by_id: deletedById
  };
  
  return true;
};

// RESTORE - กู้คืน InventoryTransactionDetail ที่ถูกลบแล้ว
export const restoreInventoryTransactionDetail = (id: string): boolean => {
  const index = inventoryTransactionDetails.findIndex(detail => detail.id === id);
  
  if (index === -1) {
    return false;
  }
  
  if (inventoryTransactionDetails[index].deleted_at) {
    inventoryTransactionDetails[index] = {
      ...inventoryTransactionDetails[index],
      deleted_at: null,
      deleted_by_id: null
    };
    return true;
  }
  
  return false;
};

// RESTORE - กู้คืน InventoryTransactionDetail ตาม inventory_transaction_id
export const restoreInventoryTransactionDetailsByTransactionId = (transactionId: string): number => {
  let restoredCount = 0;
  
  inventoryTransactionDetails.forEach(detail => {
    if (detail.inventory_transaction_id === transactionId && detail.deleted_at) {
      detail.deleted_at = null;
      detail.deleted_by_id = null;
      restoredCount++;
    }
  });
  
  return restoredCount;
};

// RESTORE - กู้คืน InventoryTransactionDetail ตาม from_lot_no
export const restoreInventoryTransactionDetailsByFromLotNo = (fromLotNo: string): number => {
  let restoredCount = 0;
  
  inventoryTransactionDetails.forEach(detail => {
    if (detail.from_lot_no === fromLotNo && detail.deleted_at) {
      detail.deleted_at = null;
      detail.deleted_by_id = null;
      restoredCount++;
    }
  });
  
  return restoredCount;
};

// RESTORE - กู้คืน InventoryTransactionDetail ตาม current_lot_no
export const restoreInventoryTransactionDetailsByCurrentLotNo = (currentLotNo: string): number => {
  let restoredCount = 0;
  
  inventoryTransactionDetails.forEach(detail => {
    if (detail.current_lot_no === currentLotNo && detail.deleted_at) {
      detail.deleted_at = null;
      detail.deleted_by_id = null;
      restoredCount++;
    }
  });
  
  return restoredCount;
};

// RESTORE - กู้คืน InventoryTransactionDetail ตาม location_id
export const restoreInventoryTransactionDetailsByLocationId = (locationId: string): number => {
  let restoredCount = 0;
  
  inventoryTransactionDetails.forEach(detail => {
    if (detail.location_id === locationId && detail.deleted_at) {
      detail.deleted_at = null;
      detail.deleted_by_id = null;
      restoredCount++;
    }
  });
  
  return restoredCount;
};

// RESTORE - กู้คืน InventoryTransactionDetail ตาม product_id
export const restoreInventoryTransactionDetailsByProductId = (productId: string): number => {
  let restoredCount = 0;
  
  inventoryTransactionDetails.forEach(detail => {
    if (detail.product_id === productId && detail.deleted_at) {
      detail.deleted_at = null;
      detail.deleted_by_id = null;
      restoredCount++;
    }
  });
  
  return restoredCount;
};

// Utility function สำหรับล้างข้อมูลทั้งหมด (ใช้สำหรับ testing)
export const clearAllInventoryTransactionDetails = (): void => {
  inventoryTransactionDetails.length = 0;
};

// Utility function สำหรับนับจำนวน InventoryTransactionDetail
export const getInventoryTransactionDetailCount = (): number => {
  return inventoryTransactionDetails.length;
};

// Utility function สำหรับนับจำนวน InventoryTransactionDetail ที่ active
export const getActiveInventoryTransactionDetailCount = (): number => {
  return inventoryTransactionDetails.filter(detail => detail.deleted_at === null).length;
};

// Utility function สำหรับนับจำนวน InventoryTransactionDetail ที่ถูกลบแล้ว
export const getDeletedInventoryTransactionDetailCount = (): number => {
  return inventoryTransactionDetails.filter(detail => detail.deleted_at !== null).length;
};

// Utility function สำหรับนับจำนวน InventoryTransactionDetail ตาม inventory_transaction_id
export const getInventoryTransactionDetailCountByTransactionId = (transactionId: string): number => {
  return inventoryTransactionDetails.filter(detail => detail.inventory_transaction_id === transactionId).length;
};

// Utility function สำหรับนับจำนวน InventoryTransactionDetail ตาม from_lot_no
export const getInventoryTransactionDetailCountByFromLotNo = (fromLotNo: string): number => {
  return inventoryTransactionDetails.filter(detail => detail.from_lot_no === fromLotNo).length;
};

// Utility function สำหรับนับจำนวน InventoryTransactionDetail ตาม current_lot_no
export const getInventoryTransactionDetailCountByCurrentLotNo = (currentLotNo: string): number => {
  return inventoryTransactionDetails.filter(detail => detail.current_lot_no === currentLotNo).length;
};

// Utility function สำหรับนับจำนวน InventoryTransactionDetail ตาม location_id
export const getInventoryTransactionDetailCountByLocationId = (locationId: string): number => {
  return inventoryTransactionDetails.filter(detail => detail.location_id === locationId).length;
};

// Utility function สำหรับนับจำนวน InventoryTransactionDetail ตาม product_id
export const getInventoryTransactionDetailCountByProductId = (productId: string): number => {
  return inventoryTransactionDetails.filter(detail => detail.product_id === productId).length;
};

// Utility function สำหรับนับจำนวน InventoryTransactionDetail ตาม created_by_id
export const getInventoryTransactionDetailCountByCreatedBy = (createdById: string): number => {
  return inventoryTransactionDetails.filter(detail => detail.created_by_id === createdById).length;
};

// Utility function สำหรับนับจำนวน InventoryTransactionDetail ตาม updated_by_id
export const getInventoryTransactionDetailCountByUpdatedBy = (updatedById: string): number => {
  return inventoryTransactionDetails.filter(detail => detail.updated_by_id === updatedById).length;
};

// Utility function สำหรับค้นหา InventoryTransactionDetail แบบ advanced search
export const searchInventoryTransactionDetails = (searchCriteria: {
  inventory_transaction_id?: string;
  from_lot_no?: string;
  current_lot_no?: string;
  location_id?: string;
  product_id?: string;
  created_by_id?: string;
  updated_by_id?: string;
  has_note?: boolean;
  has_info?: boolean;
  has_dimension?: boolean;
  min_qty?: number;
  max_qty?: number;
  min_cost_per_unit?: number;
  max_cost_per_unit?: number;
  min_total_cost?: number;
  max_total_cost?: number;
}): InventoryTransactionDetail[] => {
  return inventoryTransactionDetails.filter(detail => {
    if (searchCriteria.inventory_transaction_id && detail.inventory_transaction_id !== searchCriteria.inventory_transaction_id) {
      return false;
    }
    
    if (searchCriteria.from_lot_no && detail.from_lot_no !== searchCriteria.from_lot_no) {
      return false;
    }
    
    if (searchCriteria.current_lot_no && detail.current_lot_no !== searchCriteria.current_lot_no) {
      return false;
    }
    
    if (searchCriteria.location_id && detail.location_id !== searchCriteria.location_id) {
      return false;
    }
    
    if (searchCriteria.product_id && detail.product_id !== searchCriteria.product_id) {
      return false;
    }
    
    if (searchCriteria.created_by_id && detail.created_by_id !== searchCriteria.created_by_id) {
      return false;
    }
    
    if (searchCriteria.updated_by_id && detail.updated_by_id !== searchCriteria.updated_by_id) {
      return false;
    }
    
    if (searchCriteria.has_note !== undefined) {
      const hasNote = detail.note && detail.note.trim() !== '';
      if (hasNote !== searchCriteria.has_note) {
        return false;
      }
    }
    
    if (searchCriteria.has_info !== undefined) {
      const hasInfo = detail.info !== null;
      if (hasInfo !== searchCriteria.has_info) {
        return false;
      }
    }
    
    if (searchCriteria.has_dimension !== undefined) {
      const hasDimension = detail.dimension !== null;
      if (hasDimension !== searchCriteria.has_dimension) {
        return false;
      }
    }
    
    if (searchCriteria.min_qty !== undefined) {
      const qty = parseFloat(detail.qty);
      if (qty < searchCriteria.min_qty) {
        return false;
      }
    }
    
    if (searchCriteria.max_qty !== undefined) {
      const qty = parseFloat(detail.qty);
      if (qty > searchCriteria.max_qty) {
        return false;
      }
    }
    
    if (searchCriteria.min_cost_per_unit !== undefined) {
      const cost = parseFloat(detail.cost_per_unit);
      if (cost < searchCriteria.min_cost_per_unit) {
        return false;
      }
    }
    
    if (searchCriteria.max_cost_per_unit !== undefined) {
      const cost = parseFloat(detail.cost_per_unit);
      if (cost > searchCriteria.max_cost_per_unit) {
        return false;
      }
    }
    
    if (searchCriteria.min_total_cost !== undefined) {
      const totalCost = parseFloat(detail.total_cost);
      if (totalCost < searchCriteria.min_total_cost) {
        return false;
      }
    }
    
    if (searchCriteria.max_total_cost !== undefined) {
      const totalCost = parseFloat(detail.total_cost);
      if (totalCost > searchCriteria.max_total_cost) {
        return false;
      }
    }
    
    return true;
  });
};

// Utility function สำหรับตรวจสอบ InventoryTransactionDetail ตาม inventory_transaction_id
export const isInventoryTransactionDetailExistsByTransactionId = (transactionId: string): boolean => {
  return inventoryTransactionDetails.some(detail => detail.inventory_transaction_id === transactionId);
};

// Utility function สำหรับตรวจสอบ InventoryTransactionDetail ตาม from_lot_no
export const isInventoryTransactionDetailExistsByFromLotNo = (fromLotNo: string): boolean => {
  return inventoryTransactionDetails.some(detail => detail.from_lot_no === fromLotNo);
};

// Utility function สำหรับตรวจสอบ InventoryTransactionDetail ตาม current_lot_no
export const isInventoryTransactionDetailExistsByCurrentLotNo = (currentLotNo: string): boolean => {
  return inventoryTransactionDetails.some(detail => detail.current_lot_no === currentLotNo);
};

// Utility function สำหรับตรวจสอบ InventoryTransactionDetail โดย inventory_transaction_id และ from_lot_no
export const isInventoryTransactionDetailExistsByTransactionAndFromLot = (transactionId: string, fromLotNo: string): boolean => {
  return inventoryTransactionDetails.some(detail => detail.inventory_transaction_id === transactionId && detail.from_lot_no === fromLotNo);
};

// Utility function สำหรับตรวจสอบ InventoryTransactionDetail ที่มี note
export const hasInventoryTransactionDetailsWithNote = (): boolean => {
  return inventoryTransactionDetails.some(detail => detail.note && detail.note.trim() !== '');
};

// Utility function สำหรับตรวจสอบ InventoryTransactionDetail ที่มี info
export const hasInventoryTransactionDetailsWithInfo = (): boolean => {
  return inventoryTransactionDetails.some(detail => detail.info !== null);
};

// Utility function สำหรับตรวจสอบ InventoryTransactionDetail ที่มี dimension
export const hasInventoryTransactionDetailsWithDimension = (): boolean => {
  return inventoryTransactionDetails.some(detail => detail.dimension !== null);
};

// Bulk operations
// เพิ่ม InventoryTransactionDetail หลายรายการ
export const addMultipleInventoryTransactionDetails = (transactionDetailsData: Omit<InventoryTransactionDetail, 'id' | 'created_at' | 'updated_at'>[]): InventoryTransactionDetail[] => {
  const newTransactionDetails: InventoryTransactionDetail[] = [];
  
  transactionDetailsData.forEach(data => {
    const newTransactionDetail = createInventoryTransactionDetail(data);
    newTransactionDetails.push(newTransactionDetail);
  });
  
  return newTransactionDetails;
};

// ลบ InventoryTransactionDetail หลายรายการตาม inventory_transaction_id
export const removeMultipleInventoryTransactionDetailsByTransactionId = (transactionId: string, deletedById: string): number => {
  return deleteInventoryTransactionDetailsByTransactionId(transactionId, deletedById);
};

// ลบ InventoryTransactionDetail หลายรายการตาม from_lot_no
export const removeMultipleInventoryTransactionDetailsByFromLotNo = (fromLotNo: string, deletedById: string): number => {
  return deleteInventoryTransactionDetailsByFromLotNo(fromLotNo, deletedById);
};

// ลบ InventoryTransactionDetail หลายรายการตาม current_lot_no
export const removeMultipleInventoryTransactionDetailsByCurrentLotNo = (currentLotNo: string, deletedById: string): number => {
  return deleteInventoryTransactionDetailsByCurrentLotNo(currentLotNo, deletedById);
};

// ลบ InventoryTransactionDetail หลายรายการตาม location_id
export const removeMultipleInventoryTransactionDetailsByLocationId = (locationId: string, deletedById: string): number => {
  return deleteInventoryTransactionDetailsByLocationId(locationId, deletedById);
};

// ลบ InventoryTransactionDetail หลายรายการตาม product_id
export const removeMultipleInventoryTransactionDetailsByProductId = (productId: string, deletedById: string): number => {
  return deleteInventoryTransactionDetailsByProductId(productId, deletedById);
};

// Hard delete operations
export const hardDeleteInventoryTransactionDetailsByTransactionId = (transactionId: string): number => {
  let deletedCount = 0;
  
  for (let i = inventoryTransactionDetails.length - 1; i >= 0; i--) {
    if (inventoryTransactionDetails[i].inventory_transaction_id === transactionId) {
      inventoryTransactionDetails.splice(i, 1);
      deletedCount++;
    }
  }
  
  return deletedCount;
};

export const hardDeleteInventoryTransactionDetailsByFromLotNo = (fromLotNo: string): number => {
  let deletedCount = 0;
  
  for (let i = inventoryTransactionDetails.length - 1; i >= 0; i--) {
    if (inventoryTransactionDetails[i].from_lot_no === fromLotNo) {
      inventoryTransactionDetails.splice(i, 1);
      deletedCount++;
    }
  }
  
  return deletedCount;
};

export const hardDeleteInventoryTransactionDetailsByCurrentLotNo = (currentLotNo: string): number => {
  let deletedCount = 0;
  
  for (let i = inventoryTransactionDetails.length - 1; i >= 0; i--) {
    if (inventoryTransactionDetails[i].current_lot_no === currentLotNo) {
      inventoryTransactionDetails.splice(i, 1);
      deletedCount++;
    }
  }
  
  return deletedCount;
};

export const hardDeleteInventoryTransactionDetailsByLocationId = (locationId: string): number => {
  let deletedCount = 0;
  
  for (let i = inventoryTransactionDetails.length - 1; i >= 0; i--) {
    if (inventoryTransactionDetails[i].location_id === locationId) {
      inventoryTransactionDetails.splice(i, 1);
      deletedCount++;
    }
  }
  
  return deletedCount;
};

export const hardDeleteInventoryTransactionDetailsByProductId = (productId: string): number => {
  let deletedCount = 0;
  
  for (let i = inventoryTransactionDetails.length - 1; i >= 0; i--) {
    if (inventoryTransactionDetails[i].product_id === productId) {
      inventoryTransactionDetails.splice(i, 1);
      deletedCount++;
    }
  }
  
  return deletedCount;
};

// Calculation functions
export const calculateTotalCost = (costPerUnit: string, qty: string): string => {
  const costPerUnitNum = parseFloat(costPerUnit);
  const qtyNum = parseFloat(qty);
  
  const totalCost = costPerUnitNum * qtyNum;
  return totalCost.toFixed(2);
};

export const calculateAverageCost = (totalCost: string, qty: string): string => {
  const totalCostNum = parseFloat(totalCost);
  const qtyNum = parseFloat(qty);
  
  if (qtyNum === 0) {
    return "0.00";
  }
  
  const averageCost = totalCostNum / qtyNum;
  return averageCost.toFixed(2);
};
