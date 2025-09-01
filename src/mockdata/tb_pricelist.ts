import { generateId, getCurrentTimestamp } from "@/libs/utils";

export interface Pricelist {
  id: string;
  pricelist_no: string;
  name: string;
  vendor_id: string;
  vendor_name: string;
  from_date: string;
  to_date: string;
  is_active: boolean;
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
  currency_id: string;
  currency_name: string;
  url_token: string;
}

export const pricelists: Pricelist[] = [
  {
    id: "550e8400-e29b-41d4-a716-446655440001",
    pricelist_no: "PL-001",
    name: "Standard Retail",
    vendor_id: "550e8400-e29b-41d4-a716-446655440010",
    vendor_name: "General Supplier",
    from_date: "2024-01-01",
    to_date: "2024-12-31",
    is_active: true,
    description: "Standard retail pricing for all customers",
    note: "Standard pricing policy",
    info: {
      effective_date: "2024-01-01",
      expiry_date: "2024-12-31"
    },
    dimension: { department: "Sales", region: "All" },
    doc_version: "1.0",
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
    currency_id: "550e8400-e29b-41d4-a716-446655440003",
    currency_name: "THB",
    url_token: "std-retail-2024"
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440002",
    pricelist_no: "PL-002",
    name: "Wholesale",
    vendor_id: "550e8400-e29b-41d4-a716-446655440011",
    vendor_name: "Bulk Supplier",
    from_date: "2024-01-01",
    to_date: "2024-12-31",
    is_active: true,
    description: "Wholesale pricing for business customers",
    note: "Volume discount pricing",
    info: {
      effective_date: "2024-01-01",
      expiry_date: "2024-12-31"
    },
    dimension: { department: "Sales", region: "All" },
    doc_version: "1.0",
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "1bfdb891-58ee-499c-8115-34a964de8122",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
    currency_id: "550e8400-e29b-41d4-a716-446655440003",
    currency_name: "THB",
    url_token: "wholesale-2024"
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440003",
    pricelist_no: "PL-003",
    name: "VIP Customer",
    vendor_id: "550e8400-e29b-41d4-a716-446655440012",
    vendor_name: "Premium Supplier",
    from_date: "2024-01-01",
    to_date: "2024-12-31",
    is_active: true,
    description: "Special pricing for VIP customers",
    note: "Exclusive pricing for VIP members",
    info: {
      effective_date: "2024-01-01",
      expiry_date: "2024-12-31"
    },
    dimension: { department: "Sales", region: "All" },
    doc_version: "1.0",
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "3c5280a7-492e-421d-b739-7447455ce99e",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
    currency_id: "550e8400-e29b-41d4-a716-446655440003",
    currency_name: "THB",
    url_token: "vip-customer-2024"
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440004",
    pricelist_no: "PL-004",
    name: "Promotional",
    vendor_id: "550e8400-e29b-41d4-a716-446655440013",
    vendor_name: "Promo Supplier",
    from_date: "2024-06-01",
    to_date: "2024-06-30",
    is_active: false,
    description: "Limited time promotional pricing",
    note: "Summer sale pricing",
    info: {
      effective_date: "2024-06-01",
      expiry_date: "2024-06-30"
    },
    dimension: { department: "Marketing", region: "All" },
    doc_version: "1.0",
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
    currency_id: "550e8400-e29b-41d4-a716-446655440003",
    currency_name: "THB",
    url_token: "promo-summer-2024"
  }
];

// CREATE - สร้าง Pricelist ใหม่
export const createPricelist = (pricelistData: Omit<Pricelist, 'id' | 'created_at' | 'updated_at'>): Pricelist => {
  const newPricelist: Pricelist = {
    ...pricelistData,
    id: generateId(),
    created_at: getCurrentTimestamp(),
    updated_at: getCurrentTimestamp()
  };
  
  pricelists.push(newPricelist);
  return newPricelist;
};

// READ - อ่าน Pricelist ทั้งหมด
export const getAllPricelists = (): Pricelist[] => {
  return [...pricelists];
};

// READ - อ่าน Pricelist ตาม ID
export const getPricelistById = (id: string): Pricelist | undefined => {
  return pricelists.find(pricelist => pricelist.id === id);
};

// READ - อ่าน Pricelist ตาม name
export const getPricelistByName = (name: string): Pricelist | undefined => {
  return pricelists.find(pricelist => pricelist.name === name);
};

// READ - อ่าน Pricelist ตาม currency_id
export const getPricelistsByCurrency = (currencyId: string): Pricelist[] => {
  return pricelists.filter(pricelist => pricelist.currency_id === currencyId);
};

// READ - อ่าน Pricelist ที่ active
export const getActivePricelists = (): Pricelist[] => {
  return pricelists.filter(pricelist => pricelist.is_active);
};

// READ - อ่าน Pricelist ที่ inactive
export const getInactivePricelists = (): Pricelist[] => {
  return pricelists.filter(pricelist => !pricelist.is_active);
};

// READ - อ่าน Pricelist ตาม from_date
export const getPricelistsByFromDate = (fromDate: string): Pricelist[] => {
  return pricelists.filter(pricelist => pricelist.from_date === fromDate);
};

// READ - อ่าน Pricelist ที่ยังไม่หมดอายุ
export const getValidPricelists = (): Pricelist[] => {
  const today = new Date().toISOString().split('T')[0];
  return pricelists.filter(pricelist => 
    pricelist.from_date <= today && 
    pricelist.to_date >= today &&
    pricelist.is_active
  );
};

// READ - อ่าน Pricelist ที่หมดอายุแล้ว
export const getExpiredPricelists = (): Pricelist[] => {
  const today = new Date().toISOString().split('T')[0];
  return pricelists.filter(pricelist => pricelist.to_date < today);
};

// READ - อ่าน Pricelist ตาม description
export const getPricelistsByDescription = (description: string): Pricelist[] => {
  return pricelists.filter(pricelist => 
    pricelist.description.toLowerCase().includes(description.toLowerCase())
  );
};

// READ - ค้นหา Pricelist แบบ fuzzy search
export const searchPricelists = (searchTerm: string): Pricelist[] => {
  const lowerSearchTerm = searchTerm.toLowerCase();
  return pricelists.filter(pricelist => 
    pricelist.name.toLowerCase().includes(lowerSearchTerm) ||
    pricelist.description.toLowerCase().includes(lowerSearchTerm)
  );
};

// UPDATE - อัปเดต Pricelist
export const updatePricelist = (id: string, updateData: Partial<Omit<Pricelist, 'id' | 'created_at' | 'created_by_id'>>): Pricelist | null => {
  const index = pricelists.findIndex(pricelist => pricelist.id === id);
  
  if (index === -1) {
    return null;
  }
  
  pricelists[index] = {
    ...pricelists[index],
    ...updateData,
    updated_at: getCurrentTimestamp()
  };
  
  return pricelists[index];
};

// UPDATE - อัปเดต Pricelist name
export const updatePricelistName = (id: string, name: string): Pricelist | null => {
  return updatePricelist(id, { name });
};

// UPDATE - อัปเดต Pricelist description
export const updatePricelistDescription = (id: string, description: string): Pricelist | null => {
  return updatePricelist(id, { description });
};

// UPDATE - อัปเดต Pricelist active status
export const updatePricelistActiveStatus = (id: string, isActive: boolean): Pricelist | null => {
  return updatePricelist(id, { is_active: isActive });
};

// UPDATE - อัปเดต Pricelist from date
export const updatePricelistFromDate = (id: string, fromDate: string): Pricelist | null => {
  return updatePricelist(id, { from_date: fromDate });
};

// UPDATE - อัปเดต Pricelist to date
export const updatePricelistToDate = (id: string, toDate: string): Pricelist | null => {
  return updatePricelist(id, { to_date: toDate });
};

// UPDATE - อัปเดต Pricelist currency
export const updatePricelistCurrency = (id: string, currencyId: string): Pricelist | null => {
  return updatePricelist(id, { currency_id: currencyId });
};

// DELETE - ลบ Pricelist (soft delete)
export const deletePricelist = (id: string, deletedById: string): boolean => {
  const index = pricelists.findIndex(pricelist => pricelist.id === id);
  
  if (index === -1) {
    return false;
  }
  
  pricelists[index] = {
    ...pricelists[index],
    deleted_at: getCurrentTimestamp(),
    deleted_by_id: deletedById
  };
  
  return true;
};

// DELETE - ลบ Pricelist แบบถาวร
export const hardDeletePricelist = (id: string): boolean => {
  const index = pricelists.findIndex(pricelist => pricelist.id === id);
  
  if (index === -1) {
    return false;
  }
  
  pricelists.splice(index, 1);
  return true;
};

// DELETE - ลบ Pricelist ตาม name
export const deletePricelistByName = (name: string, deletedById: string): boolean => {
  const pricelist = getPricelistByName(name);
  if (pricelist) {
    return deletePricelist(pricelist.id, deletedById);
  }
  return false;
};

// DELETE - ลบ Pricelist ตาม currency_id
export const deletePricelistsByCurrency = (currencyId: string, deletedById: string): number => {
  let deletedCount = 0;
  
  pricelists.forEach(pricelist => {
    if (pricelist.currency_id === currencyId && !pricelist.deleted_at) {
      pricelist.deleted_at = getCurrentTimestamp();
      pricelist.deleted_by_id = deletedById;
      deletedCount++;
    }
  });
  
  return deletedCount;
};

// DELETE - ลบ Pricelist ที่ inactive
export const deleteInactivePricelists = (deletedById: string): number => {
  let deletedCount = 0;
  
  pricelists.forEach(pricelist => {
    if (!pricelist.is_active && !pricelist.deleted_at) {
      pricelist.deleted_at = getCurrentTimestamp();
      pricelist.deleted_by_id = deletedById;
      deletedCount++;
    }
  });
  
  return deletedCount;
};

// DELETE - ลบ Pricelist ที่หมดอายุแล้ว
export const deleteExpiredPricelists = (deletedById: string): number => {
  let deletedCount = 0;
  const today = new Date().toISOString().split('T')[0];
  
  pricelists.forEach(pricelist => {
    if (pricelist.to_date < today && !pricelist.deleted_at) {
      pricelist.deleted_at = getCurrentTimestamp();
      pricelist.deleted_by_id = deletedById;
      deletedCount++;
    }
  });
  
  return deletedCount;
};

// Utility function สำหรับล้างข้อมูลทั้งหมด (ใช้สำหรับ testing)
export const clearAllPricelists = (): void => {
  pricelists.length = 0;
};

// Utility function สำหรับนับจำนวน Pricelist
export const getPricelistCount = (): number => {
  return pricelists.length;
};

// Utility function สำหรับนับจำนวน Pricelist ที่ active
export const getActivePricelistCount = (): number => {
  return pricelists.filter(pricelist => pricelist.is_active).length;
};

// Utility function สำหรับนับจำนวน Pricelist ที่ inactive
export const getInactivePricelistCount = (): number => {
  return pricelists.filter(pricelist => !pricelist.is_active).length;
};

// Utility function สำหรับนับจำนวน Pricelist ตาม currency_id
export const getPricelistCountByCurrency = (currencyId: string): number => {
  return pricelists.filter(pricelist => pricelist.currency_id === currencyId).length;
};

// Utility function สำหรับตรวจสอบ Pricelist name ซ้ำ
export const isPricelistNameExists = (name: string): boolean => {
  return pricelists.some(pricelist => pricelist.name === name);
};

// Utility function สำหรับตรวจสอบ Pricelist ที่ถูกลบแล้ว
export const getDeletedPricelists = (): Pricelist[] => {
  return pricelists.filter(pricelist => pricelist.deleted_at !== null);
};

// Utility function สำหรับกู้คืน Pricelist ที่ถูกลบแล้ว
export const restorePricelist = (id: string): boolean => {
  const index = pricelists.findIndex(pricelist => pricelist.id === id);
  
  if (index === -1) {
    return false;
  }
  
  if (pricelists[index].deleted_at) {
    pricelists[index] = {
      ...pricelists[index],
      deleted_at: null,
      deleted_by_id: null
    };
    return true;
  }
  
  return false;
};

// Utility function สำหรับค้นหา Pricelist แบบ advanced search
export const searchPricelistsAdvanced = (searchCriteria: {
  name?: string;
  description?: string;
  currency_id?: string;
  is_active?: boolean;
  from_date?: string;
  to_date?: string;
  is_valid?: boolean;
}): Pricelist[] => {
  return pricelists.filter(pricelist => {
    if (searchCriteria.name && !pricelist.name.toLowerCase().includes(searchCriteria.name.toLowerCase())) {
      return false;
    }
    
    if (searchCriteria.description && !pricelist.description.toLowerCase().includes(searchCriteria.description.toLowerCase())) {
      return false;
    }
    
    if (searchCriteria.currency_id && pricelist.currency_id !== searchCriteria.currency_id) {
      return false;
    }
    
    if (searchCriteria.is_active !== undefined && pricelist.is_active !== searchCriteria.is_active) {
      return false;
    }
    
    if (searchCriteria.from_date && pricelist.from_date !== searchCriteria.from_date) {
      return false;
    }
    
    if (searchCriteria.to_date && pricelist.to_date !== searchCriteria.to_date) {
      return false;
    }
    
    if (searchCriteria.is_valid !== undefined) {
      const today = new Date().toISOString().split('T')[0];
      const isValid = pricelist.from_date <= today && 
                     pricelist.to_date >= today && 
                     pricelist.is_active;
      if (isValid !== searchCriteria.is_valid) {
        return false;
      }
    }
    
    return true;
  });
};
