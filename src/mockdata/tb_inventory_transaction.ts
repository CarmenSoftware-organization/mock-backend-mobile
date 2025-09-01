import { generateId, getCurrentTimestamp } from "@/libs/utils";

export interface InventoryTransaction {
  id: string;
  inventory_doc_type: 'grn' | 'issue' | 'transfer' | 'adjustment' | 'count' | 'other';
  inventory_doc_no: string;
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

export const inventoryTransactions: InventoryTransaction[] = [
  {
    id: "550e8400-e29b-41d4-a716-446655440001",
    inventory_doc_type: "grn",
    inventory_doc_no: "GRN-2024-001",
    note: "Initial stock received",
    info: { transaction_type: "in", product_id: "550e8400-e29b-41d4-a716-446655440001", location_id: "550e8400-e29b-41d4-a716-446655440001", quantity: 100, unit_price: 150.00, currency_id: "550e8400-e29b-41d4-a716-446655440003", transaction_date: "2024-01-15", reference_number: "INV-2024-001" },
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
    inventory_doc_type: "issue",
    inventory_doc_no: "ISSUE-2024-001",
    note: "Sales order fulfillment",
    info: { transaction_type: "out", product_id: "550e8400-e29b-41d4-a716-446655440002", location_id: "550e8400-e29b-41d4-a716-446655440002", quantity: 25, unit_price: 200.00, currency_id: "550e8400-e29b-41d4-a716-446655440003", transaction_date: "2024-01-16", reference_number: "INV-2024-002" },
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
    inventory_doc_type: "adjustment",
    inventory_doc_no: "ADJ-2024-001",
    note: "Damage adjustment",
    info: { transaction_type: "adjustment", product_id: "550e8400-e29b-41d4-a716-446655440003", location_id: "550e8400-e29b-41d4-a716-446655440003", quantity: 5, unit_price: 0.00, currency_id: "550e8400-e29b-41d4-a716-446655440003", transaction_date: "2024-01-17", reference_number: "INV-2024-003" },
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
    inventory_doc_type: "transfer",
    inventory_doc_no: "TRANSFER-2024-001",
    note: "Location transfer",
    info: { transaction_type: "transfer", product_id: "550e8400-e29b-41d4-a716-446655440004", location_id: "550e8400-e29b-41d4-a716-446655440004", quantity: 50, unit_price: 0.00, currency_id: "550e8400-e29b-41d4-a716-446655440003", transaction_date: "2024-01-18", reference_number: "INV-2024-004" },
    dimension: null,
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null
  }
];

// CREATE - สร้าง InventoryTransaction ใหม่
export const createInventoryTransaction = (inventoryTransactionData: Omit<InventoryTransaction, 'id' | 'created_at' | 'updated_at'>): InventoryTransaction => {
  const newInventoryTransaction: InventoryTransaction = {
    ...inventoryTransactionData,
    id: generateId(),
    created_at: getCurrentTimestamp(),
    updated_at: getCurrentTimestamp()
  };
  
  inventoryTransactions.push(newInventoryTransaction);
  return newInventoryTransaction;
};

// READ - อ่าน InventoryTransaction ทั้งหมด
export const getAllInventoryTransactions = (): InventoryTransaction[] => {
  return [...inventoryTransactions];
};

// READ - อ่าน InventoryTransaction ตาม ID
export const getInventoryTransactionById = (id: string): InventoryTransaction | undefined => {
  return inventoryTransactions.find(transaction => transaction.id === id);
};

// READ - อ่าน InventoryTransaction ตาม transaction_type
export const getInventoryTransactionsByType = (transactionType: string): InventoryTransaction[] => {
  return inventoryTransactions.filter(transaction => transaction.info?.transaction_type === transactionType);
};

// READ - อ่าน InventoryTransaction ตาม product_id
export const getInventoryTransactionsByProduct = (productId: string): InventoryTransaction[] => {
  return inventoryTransactions.filter(transaction => transaction.info?.product_id === productId);
};

// READ - อ่าน InventoryTransaction ตาม location_id
export const getInventoryTransactionsByLocation = (locationId: string): InventoryTransaction[] => {
  return inventoryTransactions.filter(transaction => transaction.info?.location_id === locationId);
};

// READ - อ่าน InventoryTransaction ตาม transaction_date
export const getInventoryTransactionsByDate = (transactionDate: string): InventoryTransaction[] => {
  return inventoryTransactions.filter(transaction => transaction.info?.transaction_date === transactionDate);
};

// READ - อ่าน InventoryTransaction ตาม date range
export const getInventoryTransactionsByDateRange = (startDate: string, endDate: string): InventoryTransaction[] => {
  return inventoryTransactions.filter(transaction => 
    transaction.info?.transaction_date >= startDate && transaction.info?.transaction_date <= endDate
  );
};

// READ - อ่าน InventoryTransaction ตาม reference_number
export const getInventoryTransactionByReference = (referenceNumber: string): InventoryTransaction | undefined => {
  return inventoryTransactions.find(transaction => transaction.info?.reference_number === referenceNumber);
};

// READ - อ่าน InventoryTransaction ตาม currency_id
export const getInventoryTransactionsByCurrency = (currencyId: string): InventoryTransaction[] => {
  return inventoryTransactions.filter(transaction => transaction.info?.currency_id === currencyId);
};

// READ - อ่าน InventoryTransaction ที่มี notes
export const getInventoryTransactionsWithNotes = (): InventoryTransaction[] => {
  return inventoryTransactions.filter(transaction => transaction.note && transaction.note.trim() !== '');
};

// READ - อ่าน InventoryTransaction ตาม quantity range
export const getInventoryTransactionsByQuantityRange = (minQuantity: number, maxQuantity: number): InventoryTransaction[] => {
  return inventoryTransactions.filter(transaction => 
    transaction.info?.quantity >= minQuantity && transaction.info?.quantity <= maxQuantity
  );
};

// READ - อ่าน InventoryTransaction ตาม unit price range
export const getInventoryTransactionsByPriceRange = (minPrice: number, maxPrice: number): InventoryTransaction[] => {
  return inventoryTransactions.filter(transaction => 
    transaction.info?.unit_price >= minPrice && transaction.info?.unit_price <= maxPrice
  );
};

// READ - ค้นหา InventoryTransaction แบบ fuzzy search
export const searchInventoryTransactions = (searchTerm: string): InventoryTransaction[] => {
  const lowerSearchTerm = searchTerm.toLowerCase();
  return inventoryTransactions.filter(transaction => 
    transaction.info?.reference_number?.toLowerCase().includes(lowerSearchTerm) ||
    (transaction.note && transaction.note.toLowerCase().includes(lowerSearchTerm))
  );
};

// UPDATE - อัปเดต InventoryTransaction
export const updateInventoryTransaction = (id: string, updateData: Partial<Omit<InventoryTransaction, 'id' | 'created_at' | 'created_by_id'>>): InventoryTransaction | null => {
  const index = inventoryTransactions.findIndex(transaction => transaction.id === id);
  
  if (index === -1) {
    return null;
  }
  
  inventoryTransactions[index] = {
    ...inventoryTransactions[index],
    ...updateData,
    updated_at: getCurrentTimestamp()
  };
  
  return inventoryTransactions[index];
};

// UPDATE - อัปเดต InventoryTransaction type
export const updateInventoryTransactionType = (id: string, transactionType: string): InventoryTransaction | null => {
  return updateInventoryTransaction(id, { info: { ...inventoryTransactions.find(t => t.id === id)?.info, transaction_type: transactionType } });
};

// UPDATE - อัปเดต InventoryTransaction quantity
export const updateInventoryTransactionQuantity = (id: string, quantity: number): InventoryTransaction | null => {
  return updateInventoryTransaction(id, { info: { ...inventoryTransactions.find(t => t.id === id)?.info, quantity } });
};

// UPDATE - อัปเดต InventoryTransaction unit price
export const updateInventoryTransactionUnitPrice = (id: string, unitPrice: number): InventoryTransaction | null => {
  return updateInventoryTransaction(id, { info: { ...inventoryTransactions.find(t => t.id === id)?.info, unit_price: unitPrice } });
};

// UPDATE - อัปเดต InventoryTransaction date
export const updateInventoryTransactionDate = (id: string, transactionDate: string): InventoryTransaction | null => {
  return updateInventoryTransaction(id, { info: { ...inventoryTransactions.find(t => t.id === id)?.info, transaction_date: transactionDate } });
};

// UPDATE - อัปเดต InventoryTransaction reference number
export const updateInventoryTransactionReference = (id: string, referenceNumber: string): InventoryTransaction | null => {
  return updateInventoryTransaction(id, { info: { ...inventoryTransactions.find(t => t.id === id)?.info, reference_number: referenceNumber } });
};

// UPDATE - อัปเดต InventoryTransaction notes
export const updateInventoryTransactionNotes = (id: string, notes: string): InventoryTransaction | null => {
  return updateInventoryTransaction(id, { note: notes });
};

// UPDATE - อัปเดต InventoryTransaction product
export const updateInventoryTransactionProduct = (id: string, productId: string): InventoryTransaction | null => {
  return updateInventoryTransaction(id, { info: { ...inventoryTransactions.find(t => t.id === id)?.info, product_id: productId } });
};

// UPDATE - อัปเดต InventoryTransaction location
export const updateInventoryTransactionLocation = (id: string, locationId: string): InventoryTransaction | null => {
  return updateInventoryTransaction(id, { info: { ...inventoryTransactions.find(t => t.id === id)?.info, location_id: locationId } });
};

// UPDATE - อัปเดต InventoryTransaction currency
export const updateInventoryTransactionCurrency = (id: string, currencyId: string): InventoryTransaction | null => {
  return updateInventoryTransaction(id, { info: { ...inventoryTransactions.find(t => t.id === id)?.info, currency_id: currencyId } });
};

// DELETE - ลบ InventoryTransaction (soft delete)
export const deleteInventoryTransaction = (id: string, deletedById: string): boolean => {
  const index = inventoryTransactions.findIndex(transaction => transaction.id === id);
  
  if (index === -1) {
    return false;
  }
  
  inventoryTransactions[index] = {
    ...inventoryTransactions[index],
    deleted_at: getCurrentTimestamp(),
    deleted_by_id: deletedById
  };
  
  return true;
};

// DELETE - ลบ InventoryTransaction แบบถาวร
export const hardDeleteInventoryTransaction = (id: string): boolean => {
  const index = inventoryTransactions.findIndex(transaction => transaction.id === id);
  
  if (index === -1) {
    return false;
  }
  
  inventoryTransactions.splice(index, 1);
  return true;
};

// DELETE - ลบ InventoryTransaction ตาม reference number
export const deleteInventoryTransactionByReference = (referenceNumber: string, deletedById: string): boolean => {
  const transaction = getInventoryTransactionByReference(referenceNumber);
  if (transaction) {
    return deleteInventoryTransaction(transaction.id, deletedById);
  }
  return false;
};

// DELETE - ลบ InventoryTransaction ตาม transaction_type
export const deleteInventoryTransactionsByType = (transactionType: string, deletedById: string): number => {
  let deletedCount = 0;
  
  inventoryTransactions.forEach(transaction => {
    if (transaction.info?.transaction_type === transactionType && !transaction.deleted_at) {
      transaction.deleted_at = getCurrentTimestamp();
      transaction.deleted_by_id = deletedById;
      deletedCount++;
    }
  });
  
  return deletedCount;
};

// DELETE - ลบ InventoryTransaction ตาม product_id
export const deleteInventoryTransactionsByProduct = (productId: string, deletedById: string): number => {
  let deletedCount = 0;
  
  inventoryTransactions.forEach(transaction => {
    if (transaction.info?.product_id === productId && !transaction.deleted_at) {
      transaction.deleted_at = getCurrentTimestamp();
      transaction.deleted_by_id = deletedById;
      deletedCount++;
    }
  });
  
  return deletedCount;
};

// DELETE - ลบ InventoryTransaction ตาม location_id
export const deleteInventoryTransactionsByLocation = (locationId: string, deletedById: string): number => {
  let deletedCount = 0;
  
  inventoryTransactions.forEach(transaction => {
    if (transaction.info?.location_id === locationId && !transaction.deleted_at) {
      transaction.deleted_at = getCurrentTimestamp();
      transaction.deleted_by_id = deletedById;
      deletedCount++;
    }
  });
  
  return deletedCount;
};

// Utility function สำหรับล้างข้อมูลทั้งหมด (ใช้สำหรับ testing)
export const clearAllInventoryTransactions = (): void => {
  inventoryTransactions.length = 0;
};

// Utility function สำหรับนับจำนวน InventoryTransaction
export const getInventoryTransactionCount = (): number => {
  return inventoryTransactions.length;
};

// Utility function สำหรับนับจำนวน InventoryTransaction ตาม transaction_type
export const getInventoryTransactionCountByType = (transactionType: string): number => {
  return inventoryTransactions.filter(transaction => transaction.info?.transaction_type === transactionType).length;
};

// Utility function สำหรับนับจำนวน InventoryTransaction ตาม product_id
export const getInventoryTransactionCountByProduct = (productId: string): number => {
  return inventoryTransactions.filter(transaction => transaction.info?.product_id === productId).length;
};

// Utility function สำหรับนับจำนวน InventoryTransaction ตาม location_id
export const getInventoryTransactionCountByLocation = (locationId: string): number => {
  return inventoryTransactions.filter(transaction => transaction.info?.location_id === locationId).length;
};

// Utility function สำหรับนับจำนวน InventoryTransaction ตาม currency_id
export const getInventoryTransactionCountByCurrency = (currencyId: string): number => {
  return inventoryTransactions.filter(transaction => transaction.info?.currency_id === currencyId).length;
};

// Utility function สำหรับตรวจสอบ InventoryTransaction reference number ซ้ำ
export const isInventoryTransactionReferenceExists = (referenceNumber: string): boolean => {
  return inventoryTransactions.some(transaction => transaction.info?.reference_number === referenceNumber);
};

// Utility function สำหรับตรวจสอบ InventoryTransaction ที่ถูกลบแล้ว
export const getDeletedInventoryTransactions = (): InventoryTransaction[] => {
  return inventoryTransactions.filter(transaction => transaction.deleted_at !== null);
};

// Utility function สำหรับกู้คืน InventoryTransaction ที่ถูกลบแล้ว
export const restoreInventoryTransaction = (id: string): boolean => {
  const index = inventoryTransactions.findIndex(transaction => transaction.id === id);
  
  if (index === -1) {
    return false;
  }
  
  if (inventoryTransactions[index].deleted_at) {
    inventoryTransactions[index] = {
      ...inventoryTransactions[index],
      deleted_at: null,
      deleted_by_id: null
    };
    return true;
  }
  
  return false;
};

// Utility function สำหรับค้นหา InventoryTransaction แบบ advanced search
export const searchInventoryTransactionsAdvanced = (searchCriteria: {
  transaction_type?: string;
  product_id?: string;
  location_id?: string;
  transaction_date?: string;
  reference_number?: string;
  currency_id?: string;
  min_quantity?: number;
  max_quantity?: number;
  min_price?: number;
  max_price?: number;
  has_notes?: boolean;
}): InventoryTransaction[] => {
  return inventoryTransactions.filter(transaction => {
    if (searchCriteria.transaction_type && transaction.info?.transaction_type !== searchCriteria.transaction_type) {
      return false;
    }
    
    if (searchCriteria.product_id && transaction.info?.product_id !== searchCriteria.product_id) {
      return false;
    }
    
    if (searchCriteria.location_id && transaction.info?.location_id !== searchCriteria.location_id) {
      return false;
    }
    
    if (searchCriteria.transaction_date && transaction.info?.transaction_date !== searchCriteria.transaction_date) {
      return false;
    }
    
    if (searchCriteria.reference_number && !transaction.info?.reference_number?.toLowerCase().includes(searchCriteria.reference_number.toLowerCase())) {
      return false;
    }
    
    if (searchCriteria.currency_id && transaction.info?.currency_id !== searchCriteria.currency_id) {
      return false;
    }
    
    if (searchCriteria.min_quantity && transaction.info?.quantity < searchCriteria.min_quantity) {
      return false;
    }
    
    if (searchCriteria.max_quantity && transaction.info?.quantity > searchCriteria.max_quantity) {
      return false;
    }
    
    if (searchCriteria.min_price && transaction.info?.unit_price < searchCriteria.min_price) {
      return false;
    }
    
    if (searchCriteria.max_price && transaction.info?.unit_price > searchCriteria.max_price) {
      return false;
    }
    
    if (searchCriteria.has_notes !== undefined) {
      const hasNotes = transaction.note && transaction.note.trim() !== '';
      if (hasNotes !== searchCriteria.has_notes) {
        return false;
      }
    }
    
    return true;
  });
};
