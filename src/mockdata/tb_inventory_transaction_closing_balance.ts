import { generateId, getCurrentTimestamp } from "@/libs/utils";

export interface InventoryTransactionClosingBalance {
  id: string;
  inventory_transaction_detail_id: string;
  lot_no: string;
  lot_index: number;
  location_id: string;
  product_id: string;
  in_qty: string;
  out_qty: string;
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

export const inventoryTransactionClosingBalances: InventoryTransactionClosingBalance[] = [
  {
    id: "550e8400-e29b-41d4-a716-446655440001",
    inventory_transaction_detail_id: "550e8400-e29b-41d4-a716-446655440001",
    lot_no: "LOT-2024-001",
    lot_index: 1,
    location_id: "550e8400-e29b-41d4-a716-446655440001",
    product_id: "550e8400-e29b-41d4-a716-446655440001",
    in_qty: "100",
    out_qty: "25",
    cost_per_unit: "150.00",
    total_cost: "11250.00",
    note: "Laptop closing balance",
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
    inventory_transaction_detail_id: "550e8400-e29b-41d4-a716-446655440002",
    lot_no: "LOT-2024-002",
    lot_index: 1,
    location_id: "550e8400-e29b-41d4-a716-446655440002",
    product_id: "550e8400-e29b-41d4-a716-446655440002",
    in_qty: "50",
    out_qty: "10",
    cost_per_unit: "200.00",
    total_cost: "8000.00",
    note: "Office chair closing balance",
    info: { material: "Leather", color: "Black", size: "Standard" },
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
    inventory_transaction_detail_id: "550e8400-e29b-41d4-a716-446655440003",
    lot_no: "LOT-2024-003",
    lot_index: 1,
    location_id: "550e8400-e29b-41d4-a716-446655440003",
    product_id: "550e8400-e29b-41d4-a716-446655440003",
    in_qty: "30",
    out_qty: "5",
    cost_per_unit: "300.00",
    total_cost: "7500.00",
    note: "Printer closing balance",
    info: { type: "Laser", color: "Monochrome", network: true },
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
    inventory_transaction_detail_id: "550e8400-e29b-41d4-a716-446655440004",
    lot_no: "LOT-2024-004",
    lot_index: 1,
    location_id: "550e8400-e29b-41d4-a716-446655440004",
    product_id: "550e8400-e29b-41d4-a716-446655440004",
    in_qty: "200",
    out_qty: "50",
    cost_per_unit: "75.00",
    total_cost: "11250.00",
    note: "Monitor closing balance",
    info: { size: "24 inch", resolution: "1920x1080", panel: "IPS" },
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
    inventory_transaction_detail_id: "550e8400-e29b-41d4-a716-446655440005",
    lot_no: "LOT-2024-005",
    lot_index: 1,
    location_id: "550e8400-e29b-41d4-a716-446655440005",
    product_id: "550e8400-e29b-41d4-a716-446655440005",
    in_qty: "75",
    out_qty: "15",
    cost_per_unit: "120.00",
    total_cost: "7200.00",
    note: "Keyboard closing balance",
    info: { type: "Mechanical", layout: "Full-size", backlight: true },
    dimension: null,
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "1bfdb891-58ee-499c-8115-34a964de8122",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null
  }
];

// CREATE - สร้าง InventoryTransactionClosingBalance ใหม่
export const createInventoryTransactionClosingBalance = (closingBalanceData: Omit<InventoryTransactionClosingBalance, 'id' | 'created_at' | 'updated_at'>): InventoryTransactionClosingBalance => {
  const newClosingBalance: InventoryTransactionClosingBalance = {
    ...closingBalanceData,
    id: generateId(),
    created_at: getCurrentTimestamp(),
    updated_at: getCurrentTimestamp()
  };
  
  inventoryTransactionClosingBalances.push(newClosingBalance);
  return newClosingBalance;
};

// READ - อ่าน InventoryTransactionClosingBalance ทั้งหมด
export const getAllInventoryTransactionClosingBalances = (): InventoryTransactionClosingBalance[] => {
  return [...inventoryTransactionClosingBalances];
};

// READ - อ่าน InventoryTransactionClosingBalance ตาม ID
export const getInventoryTransactionClosingBalanceById = (id: string): InventoryTransactionClosingBalance | undefined => {
  return inventoryTransactionClosingBalances.find(balance => balance.id === id);
};

// READ - อ่าน InventoryTransactionClosingBalance ตาม inventory_transaction_detail_id
export const getInventoryTransactionClosingBalancesByTransactionDetailId = (transactionDetailId: string): InventoryTransactionClosingBalance[] => {
  return inventoryTransactionClosingBalances.filter(balance => balance.inventory_transaction_detail_id === transactionDetailId);
};

// READ - อ่าน InventoryTransactionClosingBalance ตาม lot_no
export const getInventoryTransactionClosingBalancesByLotNo = (lotNo: string): InventoryTransactionClosingBalance[] => {
  return inventoryTransactionClosingBalances.filter(balance => balance.lot_no === lotNo);
};

// READ - อ่าน InventoryTransactionClosingBalance ตาม lot_index
export const getInventoryTransactionClosingBalancesByLotIndex = (lotIndex: number): InventoryTransactionClosingBalance[] => {
  return inventoryTransactionClosingBalances.filter(balance => balance.lot_index === lotIndex);
};

// READ - อ่าน InventoryTransactionClosingBalance ตาม location_id
export const getInventoryTransactionClosingBalancesByLocationId = (locationId: string): InventoryTransactionClosingBalance[] => {
  return inventoryTransactionClosingBalances.filter(balance => balance.location_id === locationId);
};

// READ - อ่าน InventoryTransactionClosingBalance ตาม product_id
export const getInventoryTransactionClosingBalancesByProductId = (productId: string): InventoryTransactionClosingBalance[] => {
  return inventoryTransactionClosingBalances.filter(balance => balance.product_id === productId);
};

// READ - อ่าน InventoryTransactionClosingBalance ที่ active (ไม่ถูกลบ)
export const getActiveInventoryTransactionClosingBalances = (): InventoryTransactionClosingBalance[] => {
  return inventoryTransactionClosingBalances.filter(balance => balance.deleted_at === null);
};

// READ - อ่าน InventoryTransactionClosingBalance ที่ถูกลบแล้ว
export const getDeletedInventoryTransactionClosingBalances = (): InventoryTransactionClosingBalance[] => {
  return inventoryTransactionClosingBalances.filter(balance => balance.deleted_at !== null);
};

// READ - อ่าน InventoryTransactionClosingBalance ตาม created_by_id
export const getInventoryTransactionClosingBalancesByCreatedBy = (createdById: string): InventoryTransactionClosingBalance[] => {
  return inventoryTransactionClosingBalances.filter(balance => balance.created_by_id === createdById);
};

// READ - อ่าน InventoryTransactionClosingBalance ตาม updated_by_id
export const getInventoryTransactionClosingBalancesByUpdatedBy = (updatedById: string): InventoryTransactionClosingBalance[] => {
  return inventoryTransactionClosingBalances.filter(balance => balance.updated_by_id === updatedById);
};

// READ - อ่าน InventoryTransactionClosingBalance ที่มี note
export const getInventoryTransactionClosingBalancesWithNote = (): InventoryTransactionClosingBalance[] => {
  return inventoryTransactionClosingBalances.filter(balance => balance.note && balance.note.trim() !== '');
};

// READ - อ่าน InventoryTransactionClosingBalance ที่มี info
export const getInventoryTransactionClosingBalancesWithInfo = (): InventoryTransactionClosingBalance[] => {
  return inventoryTransactionClosingBalances.filter(balance => balance.info !== null);
};

// READ - อ่าน InventoryTransactionClosingBalance ที่มี dimension
export const getInventoryTransactionClosingBalancesWithDimension = (): InventoryTransactionClosingBalance[] => {
  return inventoryTransactionClosingBalances.filter(balance => balance.dimension !== null);
};

// READ - อ่าน InventoryTransactionClosingBalance ตาม cost_per_unit range
export const getInventoryTransactionClosingBalancesByCostRange = (minCost: number, maxCost: number): InventoryTransactionClosingBalance[] => {
  return inventoryTransactionClosingBalances.filter(balance => {
    const cost = parseFloat(balance.cost_per_unit);
    return cost >= minCost && cost <= maxCost;
  });
};

// READ - อ่าน InventoryTransactionClosingBalance ตาม total_cost range
export const getInventoryTransactionClosingBalancesByTotalCostRange = (minTotalCost: number, maxTotalCost: number): InventoryTransactionClosingBalance[] => {
  return inventoryTransactionClosingBalances.filter(balance => {
    const totalCost = parseFloat(balance.total_cost);
    return totalCost >= minTotalCost && totalCost <= maxTotalCost;
  });
};

// READ - อ่าน InventoryTransactionClosingBalance ตาม in_qty range
export const getInventoryTransactionClosingBalancesByInQtyRange = (minInQty: number, maxInQty: number): InventoryTransactionClosingBalance[] => {
  return inventoryTransactionClosingBalances.filter(balance => {
    const inQty = parseFloat(balance.in_qty);
    return inQty >= minInQty && inQty <= maxInQty;
  });
};

// READ - อ่าน InventoryTransactionClosingBalance ตาม out_qty range
export const getInventoryTransactionClosingBalancesByOutQtyRange = (minOutQty: number, maxOutQty: number): InventoryTransactionClosingBalance[] => {
  return inventoryTransactionClosingBalances.filter(balance => {
    const outQty = parseFloat(balance.out_qty);
    return outQty >= minOutQty && outQty <= maxOutQty;
  });
};

// READ - ค้นหา InventoryTransactionClosingBalance แบบ fuzzy search
export const searchInventoryTransactionClosingBalancesFuzzy = (searchTerm: string): InventoryTransactionClosingBalance[] => {
  const lowerSearchTerm = searchTerm.toLowerCase();
  return inventoryTransactionClosingBalances.filter(balance => 
    balance.lot_no.toLowerCase().includes(lowerSearchTerm) ||
    (balance.note && balance.note.toLowerCase().includes(lowerSearchTerm))
  );
};

// UPDATE - อัปเดต InventoryTransactionClosingBalance
export const updateInventoryTransactionClosingBalance = (id: string, updateData: Partial<Omit<InventoryTransactionClosingBalance, 'id' | 'created_at' | 'created_by_id'>>): InventoryTransactionClosingBalance | null => {
  const index = inventoryTransactionClosingBalances.findIndex(balance => balance.id === id);
  
  if (index === -1) {
    return null;
  }
  
  inventoryTransactionClosingBalances[index] = {
    ...inventoryTransactionClosingBalances[index],
    ...updateData,
    updated_at: getCurrentTimestamp()
  };
  
  return inventoryTransactionClosingBalances[index];
};

// UPDATE - อัปเดต InventoryTransactionClosingBalance lot_no
export const updateInventoryTransactionClosingBalanceLotNo = (id: string, lotNo: string): InventoryTransactionClosingBalance | null => {
  return updateInventoryTransactionClosingBalance(id, { lot_no: lotNo });
};

// UPDATE - อัปเดต InventoryTransactionClosingBalance lot_index
export const updateInventoryTransactionClosingBalanceLotIndex = (id: string, lotIndex: number): InventoryTransactionClosingBalance | null => {
  return updateInventoryTransactionClosingBalance(id, { lot_index: lotIndex });
};

// UPDATE - อัปเดต InventoryTransactionClosingBalance in_qty
export const updateInventoryTransactionClosingBalanceInQty = (id: string, inQty: string): InventoryTransactionClosingBalance | null => {
  return updateInventoryTransactionClosingBalance(id, { in_qty: inQty });
};

// UPDATE - อัปเดต InventoryTransactionClosingBalance out_qty
export const updateInventoryTransactionClosingBalanceOutQty = (id: string, outQty: string): InventoryTransactionClosingBalance | null => {
  return updateInventoryTransactionClosingBalance(id, { out_qty: outQty });
};

// UPDATE - อัปเดต InventoryTransactionClosingBalance cost_per_unit
export const updateInventoryTransactionClosingBalanceCostPerUnit = (id: string, costPerUnit: string): InventoryTransactionClosingBalance | null => {
  return updateInventoryTransactionClosingBalance(id, { cost_per_unit: costPerUnit });
};

// UPDATE - อัปเดต InventoryTransactionClosingBalance total_cost
export const updateInventoryTransactionClosingBalanceTotalCost = (id: string, totalCost: string): InventoryTransactionClosingBalance | null => {
  return updateInventoryTransactionClosingBalance(id, { total_cost: totalCost });
};

// UPDATE - อัปเดต InventoryTransactionClosingBalance note
export const updateInventoryTransactionClosingBalanceNote = (id: string, note: string): InventoryTransactionClosingBalance | null => {
  return updateInventoryTransactionClosingBalance(id, { note });
};

// UPDATE - อัปเดต InventoryTransactionClosingBalance info
export const updateInventoryTransactionClosingBalanceInfo = (id: string, info: any): InventoryTransactionClosingBalance | null => {
  return updateInventoryTransactionClosingBalance(id, { info });
};

// UPDATE - อัปเดต InventoryTransactionClosingBalance dimension
export const updateInventoryTransactionClosingBalanceDimension = (id: string, dimension: any): InventoryTransactionClosingBalance | null => {
  return updateInventoryTransactionClosingBalance(id, { dimension });
};

// UPDATE - InventoryTransactionClosingBalance โดย lot_no และ lot_index
export const updateInventoryTransactionClosingBalanceByLotAndIndex = (lotNo: string, lotIndex: number, updateData: Partial<Omit<InventoryTransactionClosingBalance, 'id' | 'created_at' | 'created_by_id'>>): InventoryTransactionClosingBalance | null => {
  const index = inventoryTransactionClosingBalances.findIndex(balance => balance.lot_no === lotNo && balance.lot_index === lotIndex);
  
  if (index === -1) {
    return null;
  }
  
  inventoryTransactionClosingBalances[index] = {
    ...inventoryTransactionClosingBalances[index],
    ...updateData,
    updated_at: getCurrentTimestamp()
  };
  
  return inventoryTransactionClosingBalances[index];
};

// DELETE - ลบ InventoryTransactionClosingBalance (soft delete)
export const deleteInventoryTransactionClosingBalance = (id: string, deletedById: string): boolean => {
  const index = inventoryTransactionClosingBalances.findIndex(balance => balance.id === id);
  
  if (index === -1) {
    return false;
  }
  
  inventoryTransactionClosingBalances[index] = {
    ...inventoryTransactionClosingBalances[index],
    deleted_at: getCurrentTimestamp(),
    deleted_by_id: deletedById
  };
  
  return true;
};

// DELETE - ลบ InventoryTransactionClosingBalance แบบถาวร
export const hardDeleteInventoryTransactionClosingBalance = (id: string): boolean => {
  const index = inventoryTransactionClosingBalances.findIndex(balance => balance.id === id);
  
  if (index === -1) {
    return false;
  }
  
  inventoryTransactionClosingBalances.splice(index, 1);
  return true;
};

// DELETE - ลบ InventoryTransactionClosingBalance ตาม inventory_transaction_detail_id
export const deleteInventoryTransactionClosingBalancesByTransactionDetailId = (transactionDetailId: string, deletedById: string): number => {
  let deletedCount = 0;
  
  inventoryTransactionClosingBalances.forEach(balance => {
    if (balance.inventory_transaction_detail_id === transactionDetailId && !balance.deleted_at) {
      balance.deleted_at = getCurrentTimestamp();
      balance.deleted_by_id = deletedById;
      deletedCount++;
    }
  });
  
  return deletedCount;
};

// DELETE - ลบ InventoryTransactionClosingBalance ตาม lot_no
export const deleteInventoryTransactionClosingBalancesByLotNo = (lotNo: string, deletedById: string): number => {
  let deletedCount = 0;
  
  inventoryTransactionClosingBalances.forEach(balance => {
    if (balance.lot_no === lotNo && !balance.deleted_at) {
      balance.deleted_at = getCurrentTimestamp();
      balance.deleted_by_id = deletedById;
      deletedCount++;
    }
  });
  
  return deletedCount;
};

// DELETE - ลบ InventoryTransactionClosingBalance ตาม location_id
export const deleteInventoryTransactionClosingBalancesByLocationId = (locationId: string, deletedById: string): number => {
  let deletedCount = 0;
  
  inventoryTransactionClosingBalances.forEach(balance => {
    if (balance.location_id === locationId && !balance.deleted_at) {
      balance.deleted_at = getCurrentTimestamp();
      balance.deleted_by_id = deletedById;
      deletedCount++;
    }
  });
  
  return deletedCount;
};

// DELETE - ลบ InventoryTransactionClosingBalance ตาม product_id
export const deleteInventoryTransactionClosingBalancesByProductId = (productId: string, deletedById: string): number => {
  let deletedCount = 0;
  
  inventoryTransactionClosingBalances.forEach(balance => {
    if (balance.product_id === productId && !balance.deleted_at) {
      balance.deleted_at = getCurrentTimestamp();
      balance.deleted_by_id = deletedById;
      deletedCount++;
    }
  });
  
  return deletedCount;
};

// DELETE - InventoryTransactionClosingBalance โดย lot_no และ lot_index
export const deleteInventoryTransactionClosingBalanceByLotAndIndex = (lotNo: string, lotIndex: number, deletedById: string): boolean => {
  const index = inventoryTransactionClosingBalances.findIndex(balance => balance.lot_no === lotNo && balance.lot_index === lotIndex);
  
  if (index === -1) {
    return false;
  }
  
  inventoryTransactionClosingBalances[index] = {
    ...inventoryTransactionClosingBalances[index],
    deleted_at: getCurrentTimestamp(),
    deleted_by_id: deletedById
  };
  
  return true;
};

// RESTORE - กู้คืน InventoryTransactionClosingBalance ที่ถูกลบแล้ว
export const restoreInventoryTransactionClosingBalance = (id: string): boolean => {
  const index = inventoryTransactionClosingBalances.findIndex(balance => balance.id === id);
  
  if (index === -1) {
    return false;
  }
  
  if (inventoryTransactionClosingBalances[index].deleted_at) {
    inventoryTransactionClosingBalances[index] = {
      ...inventoryTransactionClosingBalances[index],
      deleted_at: null,
      deleted_by_id: null
    };
    return true;
  }
  
  return false;
};

// RESTORE - กู้คืน InventoryTransactionClosingBalance ตาม inventory_transaction_detail_id
export const restoreInventoryTransactionClosingBalancesByTransactionDetailId = (transactionDetailId: string): number => {
  let restoredCount = 0;
  
  inventoryTransactionClosingBalances.forEach(balance => {
    if (balance.inventory_transaction_detail_id === transactionDetailId && balance.deleted_at) {
      balance.deleted_at = null;
      balance.deleted_by_id = null;
      restoredCount++;
    }
  });
  
  return restoredCount;
};

// RESTORE - กู้คืน InventoryTransactionClosingBalance ตาม lot_no
export const restoreInventoryTransactionClosingBalancesByLotNo = (lotNo: string): number => {
  let restoredCount = 0;
  
  inventoryTransactionClosingBalances.forEach(balance => {
    if (balance.lot_no === lotNo && balance.deleted_at) {
      balance.deleted_at = null;
      balance.deleted_by_id = null;
      restoredCount++;
    }
  });
  
  return restoredCount;
};

// RESTORE - กู้คืน InventoryTransactionClosingBalance ตาม location_id
export const restoreInventoryTransactionClosingBalancesByLocationId = (locationId: string): number => {
  let restoredCount = 0;
  
  inventoryTransactionClosingBalances.forEach(balance => {
    if (balance.location_id === locationId && balance.deleted_at) {
      balance.deleted_at = null;
      balance.deleted_by_id = null;
      restoredCount++;
    }
  });
  
  return restoredCount;
};

// RESTORE - กู้คืน InventoryTransactionClosingBalance ตาม product_id
export const restoreInventoryTransactionClosingBalancesByProductId = (productId: string): number => {
  let restoredCount = 0;
  
  inventoryTransactionClosingBalances.forEach(balance => {
    if (balance.product_id === productId && balance.deleted_at) {
      balance.deleted_at = null;
      balance.deleted_by_id = null;
      restoredCount++;
    }
  });
  
  return restoredCount;
};

// Utility function สำหรับล้างข้อมูลทั้งหมด (ใช้สำหรับ testing)
export const clearAllInventoryTransactionClosingBalances = (): void => {
  inventoryTransactionClosingBalances.length = 0;
};

// Utility function สำหรับนับจำนวน InventoryTransactionClosingBalance
export const getInventoryTransactionClosingBalanceCount = (): number => {
  return inventoryTransactionClosingBalances.length;
};

// Utility function สำหรับนับจำนวน InventoryTransactionClosingBalance ที่ active
export const getActiveInventoryTransactionClosingBalanceCount = (): number => {
  return inventoryTransactionClosingBalances.filter(balance => balance.deleted_at === null).length;
};

// Utility function สำหรับนับจำนวน InventoryTransactionClosingBalance ที่ถูกลบแล้ว
export const getDeletedInventoryTransactionClosingBalanceCount = (): number => {
  return inventoryTransactionClosingBalances.filter(balance => balance.deleted_at !== null).length;
};

// Utility function สำหรับนับจำนวน InventoryTransactionClosingBalance ตาม inventory_transaction_detail_id
export const getInventoryTransactionClosingBalanceCountByTransactionDetailId = (transactionDetailId: string): number => {
  return inventoryTransactionClosingBalances.filter(balance => balance.inventory_transaction_detail_id === transactionDetailId).length;
};

// Utility function สำหรับนับจำนวน InventoryTransactionClosingBalance ตาม lot_no
export const getInventoryTransactionClosingBalanceCountByLotNo = (lotNo: string): number => {
  return inventoryTransactionClosingBalances.filter(balance => balance.lot_no === lotNo).length;
};

// Utility function สำหรับนับจำนวน InventoryTransactionClosingBalance ตาม location_id
export const getInventoryTransactionClosingBalanceCountByLocationId = (locationId: string): number => {
  return inventoryTransactionClosingBalances.filter(balance => balance.location_id === locationId).length;
};

// Utility function สำหรับนับจำนวน InventoryTransactionClosingBalance ตาม product_id
export const getInventoryTransactionClosingBalanceCountByProductId = (productId: string): number => {
  return inventoryTransactionClosingBalances.filter(balance => balance.product_id === productId).length;
};

// Utility function สำหรับนับจำนวน InventoryTransactionClosingBalance ตาม created_by_id
export const getInventoryTransactionClosingBalanceCountByCreatedBy = (createdById: string): number => {
  return inventoryTransactionClosingBalances.filter(balance => balance.created_by_id === createdById).length;
};

// Utility function สำหรับนับจำนวน InventoryTransactionClosingBalance ตาม updated_by_id
export const getInventoryTransactionClosingBalanceCountByUpdatedBy = (updatedById: string): number => {
  return inventoryTransactionClosingBalances.filter(balance => balance.updated_by_id === updatedById).length;
};

// Utility function สำหรับค้นหา InventoryTransactionClosingBalance แบบ advanced search
export const searchInventoryTransactionClosingBalances = (searchCriteria: {
  inventory_transaction_detail_id?: string;
  lot_no?: string;
  lot_index?: number;
  location_id?: string;
  product_id?: string;
  created_by_id?: string;
  updated_by_id?: string;
  has_note?: boolean;
  has_info?: boolean;
  has_dimension?: boolean;
  min_cost_per_unit?: number;
  max_cost_per_unit?: number;
  min_total_cost?: number;
  max_total_cost?: number;
  min_in_qty?: number;
  max_in_qty?: number;
  min_out_qty?: number;
  max_out_qty?: number;
}): InventoryTransactionClosingBalance[] => {
  return inventoryTransactionClosingBalances.filter(balance => {
    if (searchCriteria.inventory_transaction_detail_id && balance.inventory_transaction_detail_id !== searchCriteria.inventory_transaction_detail_id) {
      return false;
    }
    
    if (searchCriteria.lot_no && balance.lot_no !== searchCriteria.lot_no) {
      return false;
    }
    
    if (searchCriteria.lot_index !== undefined && balance.lot_index !== searchCriteria.lot_index) {
      return false;
    }
    
    if (searchCriteria.location_id && balance.location_id !== searchCriteria.location_id) {
      return false;
    }
    
    if (searchCriteria.product_id && balance.product_id !== searchCriteria.product_id) {
      return false;
    }
    
    if (searchCriteria.created_by_id && balance.created_by_id !== searchCriteria.created_by_id) {
      return false;
    }
    
    if (searchCriteria.updated_by_id && balance.updated_by_id !== searchCriteria.updated_by_id) {
      return false;
    }
    
    if (searchCriteria.has_note !== undefined) {
      const hasNote = balance.note && balance.note.trim() !== '';
      if (hasNote !== searchCriteria.has_note) {
        return false;
      }
    }
    
    if (searchCriteria.has_info !== undefined) {
      const hasInfo = balance.info !== null;
      if (hasInfo !== searchCriteria.has_info) {
        return false;
      }
    }
    
    if (searchCriteria.has_dimension !== undefined) {
      const hasDimension = balance.dimension !== null;
      if (hasDimension !== searchCriteria.has_dimension) {
        return false;
      }
    }
    
    if (searchCriteria.min_cost_per_unit !== undefined) {
      const cost = parseFloat(balance.cost_per_unit);
      if (cost < searchCriteria.min_cost_per_unit) {
        return false;
      }
    }
    
    if (searchCriteria.max_cost_per_unit !== undefined) {
      const cost = parseFloat(balance.cost_per_unit);
      if (cost > searchCriteria.max_cost_per_unit) {
        return false;
      }
    }
    
    if (searchCriteria.min_total_cost !== undefined) {
      const totalCost = parseFloat(balance.total_cost);
      if (totalCost < searchCriteria.min_total_cost) {
        return false;
      }
    }
    
    if (searchCriteria.max_total_cost !== undefined) {
      const totalCost = parseFloat(balance.total_cost);
      if (totalCost > searchCriteria.max_total_cost) {
        return false;
      }
    }
    
    if (searchCriteria.min_in_qty !== undefined) {
      const inQty = parseFloat(balance.in_qty);
      if (inQty < searchCriteria.min_in_qty) {
        return false;
      }
    }
    
    if (searchCriteria.max_in_qty !== undefined) {
      const inQty = parseFloat(balance.in_qty);
      if (inQty > searchCriteria.max_in_qty) {
        return false;
      }
    }
    
    if (searchCriteria.min_out_qty !== undefined) {
      const outQty = parseFloat(balance.out_qty);
      if (outQty < searchCriteria.min_out_qty) {
        return false;
      }
    }
    
    if (searchCriteria.max_out_qty !== undefined) {
      const outQty = parseFloat(balance.out_qty);
      if (outQty > searchCriteria.max_out_qty) {
        return false;
      }
    }
    
    return true;
  });
};

// Utility function สำหรับตรวจสอบ InventoryTransactionClosingBalance ตาม inventory_transaction_detail_id
export const isInventoryTransactionClosingBalanceExistsByTransactionDetailId = (transactionDetailId: string): boolean => {
  return inventoryTransactionClosingBalances.some(balance => balance.inventory_transaction_detail_id === transactionDetailId);
};

// Utility function สำหรับตรวจสอบ InventoryTransactionClosingBalance ตาม lot_no
export const isInventoryTransactionClosingBalanceExistsByLotNo = (lotNo: string): boolean => {
  return inventoryTransactionClosingBalances.some(balance => balance.lot_no === lotNo);
};

// Utility function สำหรับตรวจสอบ InventoryTransactionClosingBalance โดย lot_no และ lot_index
export const isInventoryTransactionClosingBalanceExistsByLotAndIndex = (lotNo: string, lotIndex: number): boolean => {
  return inventoryTransactionClosingBalances.some(balance => balance.lot_no === lotNo && balance.lot_index === lotIndex);
};

// Utility function สำหรับตรวจสอบ InventoryTransactionClosingBalance ที่มี note
export const hasInventoryTransactionClosingBalancesWithNote = (): boolean => {
  return inventoryTransactionClosingBalances.some(balance => balance.note && balance.note.trim() !== '');
};

// Utility function สำหรับตรวจสอบ InventoryTransactionClosingBalance ที่มี info
export const hasInventoryTransactionClosingBalancesWithInfo = (): boolean => {
  return inventoryTransactionClosingBalances.some(balance => balance.info !== null);
};

// Utility function สำหรับตรวจสอบ InventoryTransactionClosingBalance ที่มี dimension
export const hasInventoryTransactionClosingBalancesWithDimension = (): boolean => {
  return inventoryTransactionClosingBalances.some(balance => balance.dimension !== null);
};

// Bulk operations
// เพิ่ม InventoryTransactionClosingBalance หลายรายการ
export const addMultipleInventoryTransactionClosingBalances = (closingBalancesData: Omit<InventoryTransactionClosingBalance, 'id' | 'created_at' | 'updated_at'>[]): InventoryTransactionClosingBalance[] => {
  const newClosingBalances: InventoryTransactionClosingBalance[] = [];
  
  closingBalancesData.forEach(data => {
    const newClosingBalance = createInventoryTransactionClosingBalance(data);
    newClosingBalances.push(newClosingBalance);
  });
  
  return newClosingBalances;
};

// ลบ InventoryTransactionClosingBalance หลายรายการตาม inventory_transaction_detail_id
export const removeMultipleInventoryTransactionClosingBalancesByTransactionDetailId = (transactionDetailId: string, deletedById: string): number => {
  return deleteInventoryTransactionClosingBalancesByTransactionDetailId(transactionDetailId, deletedById);
};

// ลบ InventoryTransactionClosingBalance หลายรายการตาม lot_no
export const removeMultipleInventoryTransactionClosingBalancesByLotNo = (lotNo: string, deletedById: string): number => {
  return deleteInventoryTransactionClosingBalancesByLotNo(lotNo, deletedById);
};

// ลบ InventoryTransactionClosingBalance หลายรายการตาม location_id
export const removeMultipleInventoryTransactionClosingBalancesByLocationId = (locationId: string, deletedById: string): number => {
  return deleteInventoryTransactionClosingBalancesByLocationId(locationId, deletedById);
};

// ลบ InventoryTransactionClosingBalance หลายรายการตาม product_id
export const removeMultipleInventoryTransactionClosingBalancesByProductId = (productId: string, deletedById: string): number => {
  return deleteInventoryTransactionClosingBalancesByProductId(productId, deletedById);
};

// Hard delete operations
export const hardDeleteInventoryTransactionClosingBalancesByTransactionDetailId = (transactionDetailId: string): number => {
  let deletedCount = 0;
  
  for (let i = inventoryTransactionClosingBalances.length - 1; i >= 0; i--) {
    if (inventoryTransactionClosingBalances[i].inventory_transaction_detail_id === transactionDetailId) {
      inventoryTransactionClosingBalances.splice(i, 1);
      deletedCount++;
    }
  }
  
  return deletedCount;
};

export const hardDeleteInventoryTransactionClosingBalancesByLotNo = (lotNo: string): number => {
  let deletedCount = 0;
  
  for (let i = inventoryTransactionClosingBalances.length - 1; i >= 0; i--) {
    if (inventoryTransactionClosingBalances[i].lot_no === lotNo) {
      inventoryTransactionClosingBalances.splice(i, 1);
      deletedCount++;
    }
  }
  
  return deletedCount;
};

export const hardDeleteInventoryTransactionClosingBalancesByLocationId = (locationId: string): number => {
  let deletedCount = 0;
  
  for (let i = inventoryTransactionClosingBalances.length - 1; i >= 0; i--) {
    if (inventoryTransactionClosingBalances[i].location_id === locationId) {
      inventoryTransactionClosingBalances.splice(i, 1);
      deletedCount++;
    }
  }
  
  return deletedCount;
};

export const hardDeleteInventoryTransactionClosingBalancesByProductId = (productId: string): number => {
  let deletedCount = 0;
  
  for (let i = inventoryTransactionClosingBalances.length - 1; i >= 0; i--) {
    if (inventoryTransactionClosingBalances[i].product_id === productId) {
      inventoryTransactionClosingBalances.splice(i, 1);
      deletedCount++;
    }
  }
  
  return deletedCount;
};

// Sequence management
export const getNextLotIndex = (lotNo: string): number => {
  const existingBalances = inventoryTransactionClosingBalances.filter(balance => balance.lot_no === lotNo);
  if (existingBalances.length === 0) {
    return 1;
  }
  
  const maxLotIndex = Math.max(...existingBalances.map(balance => balance.lot_index));
  return maxLotIndex + 1;
};

export const isLotIndexExists = (lotNo: string, lotIndex: number): boolean => {
  return inventoryTransactionClosingBalances.some(balance => balance.lot_no === lotNo && balance.lot_index === lotIndex);
};

export const isLotIndexExistsAll = (lotIndex: number): boolean => {
  return inventoryTransactionClosingBalances.some(balance => balance.lot_index === lotIndex);
};

// Calculation functions
export const calculateTotalCost = (costPerUnit: string, inQty: string, outQty: string): string => {
  const costPerUnitNum = parseFloat(costPerUnit);
  const inQtyNum = parseFloat(inQty);
  const outQtyNum = parseFloat(outQty);
  
  const remainingQty = inQtyNum - outQtyNum;
  const totalCost = costPerUnitNum * remainingQty;
  
  return totalCost.toFixed(2);
};

export const calculateRemainingQty = (inQty: string, outQty: string): string => {
  const inQtyNum = parseFloat(inQty);
  const outQtyNum = parseFloat(outQty);
  
  const remainingQty = inQtyNum - outQtyNum;
  return remainingQty.toFixed(2);
};
