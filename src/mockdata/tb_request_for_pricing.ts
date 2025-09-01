import { generateId, getCurrentTimestamp } from "@/libs/utils";

export interface RequestForPricing {
  id: string;
  pricelist_template_id: string;
  start_date: string;
  end_date: string;
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

export const requestForPricings: RequestForPricing[] = [
  {
    id: 'rfp-001',
    pricelist_template_id: 'plt-001',
    start_date: '2024-01-01T00:00:00Z',
    end_date: '2024-12-31T23:59:59Z',
    info: {
      category: 'IT Equipment',
      priority: 'high',
      vendor_count: 5,
      evaluation_criteria: ['price', 'quality', 'delivery']
    },
    dimension: {
      cost_center: 'IT-001',
      project_code: 'IT-2024',
      budget: 1000000
    },
    doc_version: '1',
    created_at: '2024-01-01T10:00:00Z',
    created_by_id: 'user-001',
    updated_at: '2024-01-01T10:00:00Z',
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: 'rfp-002',
    pricelist_template_id: 'plt-002',
    start_date: '2024-02-01T00:00:00Z',
    end_date: '2024-08-31T23:59:59Z',
    info: {
      category: 'Office Supplies',
      priority: 'medium',
      vendor_count: 3,
      evaluation_criteria: ['price', 'availability']
    },
    dimension: {
      cost_center: 'ADMIN-001',
      project_code: 'ADMIN-2024',
      budget: 500000
    },
    doc_version: '1',
    created_at: '2024-02-01T09:00:00Z',
    created_by_id: 'user-002',
    updated_at: '2024-02-01T09:00:00Z',
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: 'rfp-003',
    pricelist_template_id: 'plt-003',
    start_date: '2024-03-01T00:00:00Z',
    end_date: '2024-06-30T23:59:59Z',
    info: {
      category: 'Marketing Materials',
      priority: 'low',
      vendor_count: 4,
      evaluation_criteria: ['price', 'creativity', 'timeline']
    },
    dimension: {
      cost_center: 'MKT-001',
      project_code: 'MKT-2024',
      budget: 300000
    },
    doc_version: '1',
    created_at: '2024-03-01T11:00:00Z',
    created_by_id: 'user-003',
    updated_at: '2024-03-01T11:00:00Z',
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null
  }
];

// CREATE - สร้าง RequestForPricing ใหม่
export const createRequestForPricing = (data: Omit<RequestForPricing, 'id' | 'created_at' | 'created_by_id'>): RequestForPricing => {
  const newRfp: RequestForPricing = {
    ...data,
    id: generateId(),
    created_at: getCurrentTimestamp(),
    created_by_id: 'system'
  };
  
  requestForPricings.push(newRfp);
  return newRfp;
};

// READ - อ่าน RequestForPricing ทั้งหมด
export const getAllRequestForPricings = (): RequestForPricing[] => {
  return requestForPricings.filter(rfp => !rfp.deleted_at);
};

// READ - อ่าน RequestForPricing ตาม ID
export const getRequestForPricingById = (id: string): RequestForPricing | null => {
  const rfp = requestForPricings.find(rfp => rfp.id === id && !rfp.deleted_at);
  return rfp || null;
};

// READ - อ่าน RequestForPricing ตาม pricelist_template_id
export const getRequestForPricingsByPricelistTemplateId = (pricelistTemplateId: string): RequestForPricing[] => {
  return requestForPricings.filter(rfp => rfp.pricelist_template_id === pricelistTemplateId && !rfp.deleted_at);
};

// READ - อ่าน RequestForPricing ตาม start_date
export const getRequestForPricingsByStartDate = (startDate: string): RequestForPricing[] => {
  return requestForPricings.filter(rfp => rfp.start_date === startDate && !rfp.deleted_at);
};

// READ - อ่าน RequestForPricings ตามช่วงวันที่
export const getRequestForPricingsByDateRange = (startDate: string, endDate: string): RequestForPricing[] => {
  return requestForPricings.filter(rfp => {
    const rfpStart = new Date(rfp.start_date);
    const rfpEnd = new Date(rfp.end_date);
    const searchStart = new Date(startDate);
    const searchEnd = new Date(endDate);
    return rfpStart >= searchStart && rfpEnd <= searchEnd && !rfp.deleted_at;
  });
};

// READ - อ่าน RequestForPricing ที่ active (อยู่ในช่วงวันที่ปัจจุบัน)
export const getActiveRequestForPricings = (): RequestForPricing[] => {
  const now = new Date();
  return requestForPricings.filter(rfp => {
    const start = new Date(rfp.start_date);
    const end = new Date(rfp.end_date);
    return start <= now && end >= now && !rfp.deleted_at;
  });
};

// READ - อ่าน RequestForPricing ที่ expired (สิ้นสุดแล้ว)
export const getExpiredRequestForPricings = (): RequestForPricing[] => {
  const now = new Date();
  return requestForPricings.filter(rfp => {
    const end = new Date(rfp.end_date);
    return end < now && !rfp.deleted_at;
  });
};

// READ - อ่าน RequestForPricing ที่ upcoming (ยังไม่เริ่ม)
export const getUpcomingRequestForPricings = (): RequestForPricing[] => {
  const now = new Date();
  return requestForPricings.filter(rfp => {
    const start = new Date(rfp.start_date);
    return start > now && !rfp.deleted_at;
  });
};

// READ - อ่าน RequestForPricing ที่มี info
export const getRequestForPricingsWithInfo = (): RequestForPricing[] => {
  return requestForPricings.filter(rfp => rfp.info && !rfp.deleted_at);
};

// READ - อ่าน RequestForPricing ที่มี dimension
export const getRequestForPricingsWithDimension = (): RequestForPricing[] => {
  return requestForPricings.filter(rfp => rfp.dimension && !rfp.deleted_at);
};

// READ - ค้นหา RequestForPricing แบบ fuzzy search
export const searchRequestForPricings = (searchTerm: string): RequestForPricing[] => {
  const lowerSearchTerm = searchTerm.toLowerCase();
  
  return requestForPricings.filter(rfp => 
    !rfp.deleted_at && (
      rfp.info?.category?.toLowerCase().includes(lowerSearchTerm) ||
      rfp.info?.priority?.toLowerCase().includes(lowerSearchTerm) ||
      rfp.dimension?.cost_center?.toLowerCase().includes(lowerSearchTerm) ||
      rfp.dimension?.project_code?.toLowerCase().includes(lowerSearchTerm)
    )
  );
};

// UPDATE - อัปเดต RequestForPricing
export const updateRequestForPricing = (id: string, updates: Partial<Omit<RequestForPricing, 'id' | 'created_at' | 'created_by_id'>>): RequestForPricing | null => {
  const index = requestForPricings.findIndex(rfp => rfp.id === id);
  
  if (index === -1) {
    return null;
  }
  
  requestForPricings[index] = {
    ...requestForPricings[index],
    ...updates,
    updated_at: getCurrentTimestamp()
  };
  
  return requestForPricings[index];
};

// UPDATE - อัปเดต RequestForPricing dates
export const updateRequestForPricingDates = (id: string, startDate: string, endDate: string): RequestForPricing | null => {
  return updateRequestForPricing(id, { 
    start_date: startDate,
    end_date: endDate
  });
};

// UPDATE - อัปเดต RequestForPricing info
export const updateRequestForPricingInfo = (id: string, info: any): RequestForPricing | null => {
  return updateRequestForPricing(id, { info });
};

// UPDATE - อัปเดต RequestForPricing dimension
export const updateRequestForPricingDimension = (id: string, dimension: any): RequestForPricing | null => {
  return updateRequestForPricing(id, { dimension });
};

// UPDATE - อัปเดต RequestForPricing doc_version
export const updateRequestForPricingDocVersion = (id: string, docVersion: string): RequestForPricing | null => {
  return updateRequestForPricing(id, { doc_version: docVersion });
};

// DELETE - ลบ RequestForPricing (soft delete)
export const deleteRequestForPricing = (id: string, deletedById: string): boolean => {
  const index = requestForPricings.findIndex(rfp => rfp.id === id);
  
  if (index === -1) {
    return false;
  }
  
  requestForPricings[index] = {
    ...requestForPricings[index],
    deleted_at: getCurrentTimestamp(),
    deleted_by_id: deletedById
  };
  
  return true;
};

// DELETE - ลบ RequestForPricing แบบถาวร
export const hardDeleteRequestForPricing = (id: string): boolean => {
  const index = requestForPricings.findIndex(rfp => rfp.id === id);
  
  if (index === -1) {
    return false;
  }
  
  requestForPricings.splice(index, 1);
  return true;
};

// DELETE - ลบ RequestForPricing ตาม pricelist_template_id
export const deleteRequestForPricingsByPricelistTemplateId = (pricelistTemplateId: string, deletedById: string): number => {
  let deletedCount = 0;
  
  requestForPricings.forEach(rfp => {
    if (rfp.pricelist_template_id === pricelistTemplateId && !rfp.deleted_at) {
      rfp.deleted_at = getCurrentTimestamp();
      rfp.deleted_by_id = deletedById;
      deletedCount++;
    }
  });
  
  return deletedCount;
};

// DELETE - ลบ RequestForPricing ที่ expired
export const deleteExpiredRequestForPricings = (deletedById: string): number => {
  let deletedCount = 0;
  const now = new Date();
  
  requestForPricings.forEach(rfp => {
    const end = new Date(rfp.end_date);
    if (end < now && !rfp.deleted_at) {
      rfp.deleted_at = getCurrentTimestamp();
      rfp.deleted_by_id = deletedById;
      deletedCount++;
    }
  });
  
  return deletedCount;
};

// RESTORE - กู้คืน RequestForPricing ที่ถูกลบ
export const restoreRequestForPricing = (id: string): boolean => {
  const index = requestForPricings.findIndex(rfp => rfp.id === id);
  
  if (index === -1) {
    return false;
  }
  
  if (requestForPricings[index].deleted_at) {
    requestForPricings[index] = {
      ...requestForPricings[index],
      deleted_at: null,
      deleted_by_id: null
    };
    return true;
  }
  
  return false;
};

// RESTORE - กู้คืน RequestForPricing ตาม pricelist_template_id
export const restoreRequestForPricingsByPricelistTemplateId = (pricelistTemplateId: string): number => {
  let restoredCount = 0;
  
  requestForPricings.forEach(rfp => {
    if (rfp.pricelist_template_id === pricelistTemplateId && rfp.deleted_at) {
      rfp.deleted_at = null;
      rfp.deleted_by_id = null;
      restoredCount++;
    }
  });
  
  return restoredCount;
};

// Utility function สำหรับล้างข้อมูลทั้งหมด (ใช้สำหรับ testing)
export const clearAllRequestForPricings = (): void => {
  requestForPricings.length = 0;
};

// Utility function สำหรับนับจำนวน RequestForPricing
export const getRequestForPricingCount = (): number => {
  return requestForPricings.length;
};

// Utility function สำหรับนับจำนวน RequestForPricing ตาม pricelist_template_id
export const getRequestForPricingCountByPricelistTemplateId = (pricelistTemplateId: string): number => {
  return requestForPricings.filter(rfp => rfp.pricelist_template_id === pricelistTemplateId).length;
};

// Utility function สำหรับนับจำนวน RequestForPricing ที่ active
export const getActiveRequestForPricingCount = (): number => {
  const now = new Date();
  return requestForPricings.filter(rfp => {
    const start = new Date(rfp.start_date);
    const end = new Date(rfp.end_date);
    return start <= now && end >= now;
  }).length;
};

// Utility function สำหรับนับจำนวน RequestForPricing ที่ expired
export const getExpiredRequestForPricingCount = (): number => {
  const now = new Date();
  return requestForPricings.filter(rfp => {
    const end = new Date(rfp.end_date);
    return end < now;
  }).length;
};

// Utility function สำหรับนับจำนวน RequestForPricing ที่ upcoming
export const getUpcomingRequestForPricingCount = (): number => {
  const now = new Date();
  return requestForPricings.filter(rfp => {
    const start = new Date(rfp.start_date);
    return start > now;
  }).length;
};

// Utility function สำหรับตรวจสอบ RequestForPricing ที่ถูกลบแล้ว
export const getDeletedRequestForPricings = (): RequestForPricing[] => {
  return requestForPricings.filter(rfp => rfp.deleted_at !== null);
};

// Utility function สำหรับตรวจสอบ RequestForPricing ที่มี info
export const hasRequestForPricingInfo = (id: string): boolean => {
  const rfp = getRequestForPricingById(id);
  return rfp ? (rfp.info && rfp.info !== null) : false;
};

// Utility function สำหรับตรวจสอบ RequestForPricing ที่มี dimension
export const hasRequestForPricingDimension = (id: string): boolean => {
  const rfp = getRequestForPricingById(id);
  return rfp ? (rfp.dimension && rfp.dimension !== null) : false;
};

// Utility function สำหรับตรวจสอบ RequestForPricing ที่มี created_by_id
export const hasRequestForPricingCreatedBy = (id: string): boolean => {
  const rfp = getRequestForPricingById(id);
  return rfp ? !!(rfp.created_by_id && (rfp.created_by_id as string).trim() !== '') : false;
};

// Utility function สำหรับตรวจสอบ RequestForPricing ที่มี updated_by_id
export const hasRequestForPricingUpdatedBy = (id: string): boolean => {
  const rfp = getRequestForPricingById(id);
  return rfp ? !!(rfp.updated_by_id && (rfp.updated_by_id as string).trim() !== '') : false;
};

// Utility function สำหรับตรวจสอบ RequestForPricing ที่มี deleted_by_id
export const hasRequestForPricingDeletedBy = (id: string): boolean => {
  const rfp = getRequestForPricingById(id);
  return rfp ? !!(rfp.deleted_by_id && (rfp.deleted_by_id as string).trim() !== '') : false;
};

// Utility function สำหรับตรวจสอบ RequestForPricing ที่มี created_at
export const hasRequestForPricingCreatedAt = (id: string): boolean => {
  const rfp = getRequestForPricingById(id);
  return rfp ? !!(rfp.created_at && (rfp.created_at as string).trim() !== '') : false;
};

// Utility function สำหรับตรวจสอบ RequestForPricing ที่มี updated_at
export const hasRequestForPricingUpdatedAt = (id: string): boolean => {
  const rfp = getRequestForPricingById(id);
  return rfp ? !!(rfp.updated_at && (rfp.updated_at as string).trim() !== '') : false;
};

// Utility function สำหรับตรวจสอบ RequestForPricing ที่มี deleted_at
export const hasRequestForPricingDeletedAt = (id: string): boolean => {
  const rfp = getRequestForPricingById(id);
  return rfp ? !!(rfp.deleted_at && (rfp.deleted_at as string).trim() !== '') : false;
};
