import { generateId, getCurrentTimestamp } from "@/libs/utils";

export interface ExtraCostDetail {
  id: string;
  extra_cost_id: string;
  sequence_no: number;
  extra_cost_type_id: string;
  name: string;
  description: string;
  note: string;
  amount: number;
  tax_profile_id: string;
  tax_profile_name: string;
  tax_rate: number;
  tax_amount: number;
  is_tax_adjustment: boolean;
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

export const extraCostDetails: ExtraCostDetail[] = [
  {
    id: "550e8400-e29b-41d4-a716-446655440001",
    extra_cost_id: "550e8400-e29b-41d4-a716-446655440001",
    sequence_no: 1,
    extra_cost_type_id: "550e8400-e29b-41d4-a716-446655440001",
    name: "Standard Shipping",
    description: "Regular shipping cost",
    note: "Standard delivery service",
    amount: 150.00,
    tax_profile_id: "550e8400-e29b-41d4-a716-446655440001",
    tax_profile_name: "VAT 7%",
    tax_rate: 7.00,
    tax_amount: 10.50,
    is_tax_adjustment: false,
    info: { service_type: "standard", delivery_time: "3-5 days" },
    dimension: null,
    doc_version: "1.0",
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440002",
    extra_cost_id: "550e8400-e29b-41d4-a716-446655440002",
    sequence_no: 1,
    extra_cost_type_id: "550e8400-e29b-41d4-a716-446655440002",
    name: "Processing Fee",
    description: "Order processing charge",
    note: "Handling and processing",
    amount: 50.00,
    tax_profile_id: "550e8400-e29b-41d4-a716-446655440001",
    tax_profile_name: "VAT 7%",
    tax_rate: 7.00,
    tax_amount: 3.50,
    is_tax_adjustment: false,
    info: { processing_type: "standard", turnaround_time: "24 hours" },
    dimension: null,
    doc_version: "1.0",
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "1bfdb891-58ee-499c-8115-34a964de8122",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440003",
    extra_cost_id: "550e8400-e29b-41d4-a716-446655440003",
    sequence_no: 1,
    extra_cost_type_id: "550e8400-e29b-41d4-a716-446655440003",
    name: "VAT Calculation",
    description: "Value Added Tax",
    note: "7% VAT on goods",
    amount: 7.00,
    tax_profile_id: "550e8400-e29b-41d4-a716-446655440001",
    tax_profile_name: "VAT 7%",
    tax_rate: 7.00,
    tax_amount: 0.00,
    is_tax_adjustment: true,
    info: { tax_type: "vat", calculation_method: "percentage" },
    dimension: null,
    doc_version: "1.0",
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "3c5280a7-492e-421d-b739-7447455ce99e",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440004",
    extra_cost_id: "550e8400-e29b-41d4-a716-446655440004",
    sequence_no: 1,
    extra_cost_type_id: "550e8400-e29b-41d4-a716-446655440004",
    name: "Package Insurance",
    description: "Insurance coverage",
    note: "Basic insurance protection",
    amount: 25.00,
    tax_profile_id: "550e8400-e29b-41d4-a716-446655440001",
    tax_profile_name: "VAT 7%",
    tax_rate: 7.00,
    tax_amount: 1.75,
    is_tax_adjustment: false,
    info: { coverage_amount: "10000", insurance_type: "basic" },
    dimension: null,
    doc_version: "1.0",
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440005",
    extra_cost_id: "550e8400-e29b-41d4-a716-446655440005",
    sequence_no: 1,
    extra_cost_type_id: "550e8400-e29b-41d4-a716-446655440001",
    name: "Express Delivery",
    description: "Fast delivery service",
    note: "Next day delivery",
    amount: 300.00,
    tax_profile_id: "550e8400-e29b-41d4-a716-446655440001",
    tax_profile_name: "VAT 7%",
    tax_rate: 7.00,
    tax_amount: 21.00,
    is_tax_adjustment: false,
    info: { service_type: "express", delivery_time: "24 hours" },
    dimension: null,
    doc_version: "1.0",
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "1bfdb891-58ee-499c-8115-34a964de8122",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null
  }
];

// CREATE - สร้าง ExtraCostDetail ใหม่
export const createExtraCostDetail = (extraCostDetailData: Omit<ExtraCostDetail, 'id' | 'created_at' | 'updated_at'>): ExtraCostDetail => {
  const newExtraCostDetail: ExtraCostDetail = {
    ...extraCostDetailData,
    id: generateId(),
    created_at: getCurrentTimestamp(),
    updated_at: getCurrentTimestamp()
  };
  
  extraCostDetails.push(newExtraCostDetail);
  return newExtraCostDetail;
};

// READ - อ่าน ExtraCostDetail ทั้งหมด
export const getAllExtraCostDetails = (): ExtraCostDetail[] => {
  return [...extraCostDetails];
};

// READ - อ่าน ExtraCostDetail ตาม ID
export const getExtraCostDetailById = (id: string): ExtraCostDetail | undefined => {
  return extraCostDetails.find(extraCostDetail => extraCostDetail.id === id);
};

// READ - อ่าน ExtraCostDetail ตาม extra_cost_id
export const getExtraCostDetailsByExtraCostId = (extraCostId: string): ExtraCostDetail[] => {
  return extraCostDetails.filter(extraCostDetail => extraCostDetail.extra_cost_id === extraCostId);
};

// READ - อ่าน ExtraCostDetail ตาม extra_cost_type_id
export const getExtraCostDetailsByTypeId = (typeId: string): ExtraCostDetail[] => {
  return extraCostDetails.filter(extraCostDetail => extraCostDetail.extra_cost_type_id === typeId);
};

// READ - อ่าน ExtraCostDetail ตาม sequence_no
export const getExtraCostDetailsBySequenceNo = (sequenceNo: number): ExtraCostDetail[] => {
  return extraCostDetails.filter(extraCostDetail => extraCostDetail.sequence_no === sequenceNo);
};

// READ - อ่าน ExtraCostDetail ตาม name
export const getExtraCostDetailsByName = (name: string): ExtraCostDetail[] => {
  return extraCostDetails.filter(extraCostDetail => 
    extraCostDetail.name.toLowerCase().includes(name.toLowerCase())
  );
};

// READ - อ่าน ExtraCostDetail ตาม tax_profile_id
export const getExtraCostDetailsByTaxProfile = (taxProfileId: string): ExtraCostDetail[] => {
  return extraCostDetails.filter(extraCostDetail => extraCostDetail.tax_profile_id === taxProfileId);
};

// READ - อ่าน ExtraCostDetail ที่ active (ไม่ถูกลบ)
export const getActiveExtraCostDetails = (): ExtraCostDetail[] => {
  return extraCostDetails.filter(extraCostDetail => extraCostDetail.deleted_at === null);
};

// READ - อ่าน ExtraCostDetail ที่ถูกลบแล้ว
export const getDeletedExtraCostDetails = (): ExtraCostDetail[] => {
  return extraCostDetails.filter(extraCostDetail => extraCostDetail.deleted_at !== null);
};

// READ - อ่าน ExtraCostDetail ตาม doc_version
export const getExtraCostDetailsByDocVersion = (docVersion: string): ExtraCostDetail[] => {
  return extraCostDetails.filter(extraCostDetail => extraCostDetail.doc_version === docVersion);
};

// READ - อ่าน ExtraCostDetail ตาม created_by_id
export const getExtraCostDetailsByCreatedBy = (createdById: string): ExtraCostDetail[] => {
  return extraCostDetails.filter(extraCostDetail => extraCostDetail.created_by_id === createdById);
};

// READ - อ่าน ExtraCostDetail ตาม updated_by_id
export const getExtraCostDetailsByUpdatedBy = (updatedById: string): ExtraCostDetail[] => {
  return extraCostDetails.filter(extraCostDetail => extraCostDetail.updated_by_id === updatedById);
};

// READ - อ่าน ExtraCostDetail ที่มี tax adjustment
export const getExtraCostDetailsWithTaxAdjustment = (): ExtraCostDetail[] => {
  return extraCostDetails.filter(extraCostDetail => extraCostDetail.is_tax_adjustment);
};

// READ - อ่าน ExtraCostDetail ที่ไม่มี tax adjustment
export const getExtraCostDetailsWithoutTaxAdjustment = (): ExtraCostDetail[] => {
  return extraCostDetails.filter(extraCostDetail => !extraCostDetail.is_tax_adjustment);
};

// READ - อ่าน ExtraCostDetail ตาม amount range
export const getExtraCostDetailsByAmountRange = (minAmount: number, maxAmount: number): ExtraCostDetail[] => {
  return extraCostDetails.filter(extraCostDetail => {
    const amount = extraCostDetail.amount;
    return amount >= minAmount && amount <= maxAmount;
  });
};

// UPDATE - อัปเดต ExtraCostDetail
export const updateExtraCostDetail = (id: string, updateData: Partial<Omit<ExtraCostDetail, 'id' | 'created_at' | 'created_by_id'>>): ExtraCostDetail | null => {
  const index = extraCostDetails.findIndex(extraCostDetail => extraCostDetail.id === id);
  
  if (index === -1) {
    return null;
  }
  
  extraCostDetails[index] = {
    ...extraCostDetails[index],
    ...updateData,
    updated_at: getCurrentTimestamp()
  };
  
  return extraCostDetails[index];
};

// UPDATE - อัปเดต ExtraCostDetail sequence_no
export const updateExtraCostDetailSequenceNo = (id: string, sequenceNo: number): ExtraCostDetail | null => {
  return updateExtraCostDetail(id, { sequence_no: sequenceNo });
};

// UPDATE - อัปเดต ExtraCostDetail name
export const updateExtraCostDetailName = (id: string, name: string): ExtraCostDetail | null => {
  return updateExtraCostDetail(id, { name });
};

// UPDATE - อัปเดต ExtraCostDetail description
export const updateExtraCostDetailDescription = (id: string, description: string): ExtraCostDetail | null => {
  return updateExtraCostDetail(id, { description });
};

// UPDATE - อัปเดต ExtraCostDetail note
export const updateExtraCostDetailNote = (id: string, note: string): ExtraCostDetail | null => {
  return updateExtraCostDetail(id, { note });
};

// UPDATE - อัปเดต ExtraCostDetail amount
export const updateExtraCostDetailAmount = (id: string, amount: number): ExtraCostDetail | null => {
  return updateExtraCostDetail(id, { amount });
};

// UPDATE - อัปเดต ExtraCostDetail tax information
export const updateExtraCostDetailTaxInfo = (id: string, taxProfileId: string, taxProfileName: string, taxRate: number, taxAmount: number): ExtraCostDetail | null => {
  return updateExtraCostDetail(id, { 
    tax_profile_id: taxProfileId,
    tax_profile_name: taxProfileName,
    tax_rate: taxRate,
    tax_amount: taxAmount
  });
};

// UPDATE - อัปเดต ExtraCostDetail tax adjustment flag
export const updateExtraCostDetailTaxAdjustment = (id: string, isTaxAdjustment: boolean): ExtraCostDetail | null => {
  return updateExtraCostDetail(id, { is_tax_adjustment: isTaxAdjustment });
};

// UPDATE - อัปเดต ExtraCostDetail info
export const updateExtraCostDetailInfo = (id: string, info: any): ExtraCostDetail | null => {
  return updateExtraCostDetail(id, { info });
};

// UPDATE - อัปเดต ExtraCostDetail dimension
export const updateExtraCostDetailDimension = (id: string, dimension: any): ExtraCostDetail | null => {
  return updateExtraCostDetail(id, { dimension });
};

// UPDATE - อัปเดต ExtraCostDetail doc_version
export const updateExtraCostDetailDocVersion = (id: string, docVersion: string): ExtraCostDetail | null => {
  return updateExtraCostDetail(id, { doc_version: docVersion });
};

// UPDATE - ExtraCostDetail โดย extra_cost_id และ sequence_no
export const updateExtraCostDetailByExtraCostAndSequence = (extraCostId: string, sequenceNo: number, updateData: Partial<Omit<ExtraCostDetail, 'id' | 'created_at' | 'created_by_id'>>): ExtraCostDetail | null => {
  const index = extraCostDetails.findIndex(ecd => ecd.extra_cost_id === extraCostId && ecd.sequence_no === sequenceNo);
  
  if (index === -1) {
    return null;
  }
  
  extraCostDetails[index] = {
    ...extraCostDetails[index],
    ...updateData,
    updated_at: getCurrentTimestamp()
  };
  
  return extraCostDetails[index];
};

// DELETE - ลบ ExtraCostDetail (soft delete)
export const deleteExtraCostDetail = (id: string, deletedById: string): boolean => {
  const index = extraCostDetails.findIndex(extraCostDetail => extraCostDetail.id === id);
  
  if (index === -1) {
    return false;
  }
  
  extraCostDetails[index] = {
    ...extraCostDetails[index],
    deleted_at: getCurrentTimestamp(),
    deleted_by_id: deletedById
  };
  
  return true;
};

// DELETE - ลบ ExtraCostDetail แบบถาวร
export const hardDeleteExtraCostDetail = (id: string): boolean => {
  const index = extraCostDetails.findIndex(extraCostDetail => extraCostDetail.id === id);
  
  if (index === -1) {
    return false;
  }
  
  extraCostDetails.splice(index, 1);
  return true;
};

// DELETE - ลบ ExtraCostDetail ตาม extra_cost_id
export const deleteExtraCostDetailsByExtraCostId = (extraCostId: string, deletedById: string): number => {
  let deletedCount = 0;
  
  extraCostDetails.forEach(extraCostDetail => {
    if (extraCostDetail.extra_cost_id === extraCostId && !extraCostDetail.deleted_at) {
      extraCostDetail.deleted_at = getCurrentTimestamp();
      extraCostDetail.deleted_by_id = deletedById;
      deletedCount++;
    }
  });
  
  return deletedCount;
};

// DELETE - ลบ ExtraCostDetail ตาม extra_cost_type_id
export const deleteExtraCostDetailsByTypeId = (typeId: string, deletedById: string): number => {
  let deletedCount = 0;
  
  extraCostDetails.forEach(extraCostDetail => {
    if (extraCostDetail.extra_cost_type_id === typeId && !extraCostDetail.deleted_at) {
      extraCostDetail.deleted_at = getCurrentTimestamp();
      extraCostDetail.deleted_by_id = deletedById;
      deletedCount++;
    }
  });
  
  return deletedCount;
};

// DELETE - ExtraCostDetail โดย extra_cost_id และ sequence_no
export const deleteExtraCostDetailByExtraCostAndSequence = (extraCostId: string, sequenceNo: number, deletedById: string): boolean => {
  const index = extraCostDetails.findIndex(ecd => ecd.extra_cost_id === extraCostId && ecd.sequence_no === sequenceNo);
  
  if (index === -1) {
    return false;
  }
  
  extraCostDetails[index] = {
    ...extraCostDetails[index],
    deleted_at: getCurrentTimestamp(),
    deleted_by_id: deletedById
  };
  
  return true;
};

// RESTORE - กู้คืน ExtraCostDetail ที่ถูกลบแล้ว
export const restoreExtraCostDetail = (id: string): boolean => {
  const index = extraCostDetails.findIndex(extraCostDetail => extraCostDetail.id === id);
  
  if (index === -1) {
    return false;
  }
  
  if (extraCostDetails[index].deleted_at) {
    extraCostDetails[index] = {
      ...extraCostDetails[index],
      deleted_at: null,
      deleted_by_id: null
    };
    return true;
  }
  
  return false;
};

// RESTORE - กู้คืน ExtraCostDetail ตาม extra_cost_id
export const restoreExtraCostDetailsByExtraCostId = (extraCostId: string): number => {
  let restoredCount = 0;
  
  extraCostDetails.forEach(extraCostDetail => {
    if (extraCostDetail.extra_cost_id === extraCostId && extraCostDetail.deleted_at) {
      extraCostDetail.deleted_at = null;
      extraCostDetail.deleted_by_id = null;
      restoredCount++;
    }
  });
  
  return restoredCount;
};

// RESTORE - กู้คืน ExtraCostDetail ตาม extra_cost_type_id
export const restoreExtraCostDetailsByTypeId = (typeId: string): number => {
  let restoredCount = 0;
  
  extraCostDetails.forEach(extraCostDetail => {
    if (extraCostDetail.extra_cost_type_id === typeId && extraCostDetail.deleted_at) {
      extraCostDetail.deleted_at = null;
      extraCostDetail.deleted_by_id = null;
      restoredCount++;
    }
  });
  
  return restoredCount;
};

// Utility function สำหรับล้างข้อมูลทั้งหมด (ใช้สำหรับ testing)
export const clearAllExtraCostDetails = (): void => {
  extraCostDetails.length = 0;
};

// Utility function สำหรับนับจำนวน ExtraCostDetail
export const getExtraCostDetailCount = (): number => {
  return extraCostDetails.length;
};

// Utility function สำหรับนับจำนวน ExtraCostDetail ที่ active
export const getActiveExtraCostDetailCount = (): number => {
  return extraCostDetails.filter(extraCostDetail => extraCostDetail.deleted_at === null).length;
};

// Utility function สำหรับนับจำนวน ExtraCostDetail ที่ถูกลบแล้ว
export const getDeletedExtraCostDetailCount = (): number => {
  return extraCostDetails.filter(extraCostDetail => extraCostDetail.deleted_at !== null).length;
};

// Utility function สำหรับนับจำนวน ExtraCostDetail ตาม extra_cost_id
export const getExtraCostDetailCountByExtraCostId = (extraCostId: string): number => {
  return extraCostDetails.filter(extraCostDetail => extraCostDetail.extra_cost_id === extraCostId).length;
};

// Utility function สำหรับนับจำนวน ExtraCostDetail ตาม extra_cost_type_id
export const getExtraCostDetailCountByTypeId = (typeId: string): number => {
  return extraCostDetails.filter(extraCostDetail => extraCostDetail.extra_cost_type_id === typeId).length;
};

// Utility function สำหรับนับจำนวน ExtraCostDetail ตาม tax_profile_id
export const getExtraCostDetailCountByTaxProfile = (taxProfileId: string): number => {
  return extraCostDetails.filter(extraCostDetail => extraCostDetail.tax_profile_id === taxProfileId).length;
};

// Utility function สำหรับนับจำนวน ExtraCostDetail ที่มี tax adjustment
export const getExtraCostDetailCountWithTaxAdjustment = (): number => {
  return extraCostDetails.filter(extraCostDetail => extraCostDetail.is_tax_adjustment).length;
};

// Utility function สำหรับนับจำนวน ExtraCostDetail ที่ไม่มี tax adjustment
export const getExtraCostDetailCountWithoutTaxAdjustment = (): number => {
  return extraCostDetails.filter(extraCostDetail => !extraCostDetail.is_tax_adjustment).length;
};

// Utility function สำหรับนับจำนวน ExtraCostDetail ตาม doc_version
export const getExtraCostDetailCountByDocVersion = (docVersion: string): number => {
  return extraCostDetails.filter(extraCostDetail => extraCostDetail.doc_version === docVersion).length;
};

// Utility function สำหรับนับจำนวน ExtraCostDetail ตาม created_by_id
export const getExtraCostDetailCountByCreatedBy = (createdById: string): number => {
  return extraCostDetails.filter(extraCostDetail => extraCostDetail.created_by_id === createdById).length;
};

// Utility function สำหรับค้นหา ExtraCostDetail แบบ advanced search
export const searchExtraCostDetails = (searchCriteria: {
  extra_cost_id?: string;
  extra_cost_type_id?: string;
  sequence_no?: number;
  name?: string;
  tax_profile_id?: string;
  is_tax_adjustment?: boolean;
  doc_version?: string;
  created_by_id?: string;
  updated_by_id?: string;
  has_note?: boolean;
  has_info?: boolean;
  has_dimension?: boolean;
  min_amount?: number;
  max_amount?: number;
}): ExtraCostDetail[] => {
  return extraCostDetails.filter(extraCostDetail => {
    if (searchCriteria.extra_cost_id && extraCostDetail.extra_cost_id !== searchCriteria.extra_cost_id) {
      return false;
    }
    
    if (searchCriteria.extra_cost_type_id && extraCostDetail.extra_cost_type_id !== searchCriteria.extra_cost_type_id) {
      return false;
    }
    
    if (searchCriteria.sequence_no !== undefined && extraCostDetail.sequence_no !== searchCriteria.sequence_no) {
      return false;
    }
    
    if (searchCriteria.name && !extraCostDetail.name.toLowerCase().includes(searchCriteria.name.toLowerCase())) {
      return false;
    }
    
    if (searchCriteria.tax_profile_id && extraCostDetail.tax_profile_id !== searchCriteria.tax_profile_id) {
      return false;
    }
    
    if (searchCriteria.is_tax_adjustment !== undefined && extraCostDetail.is_tax_adjustment !== searchCriteria.is_tax_adjustment) {
      return false;
    }
    
    if (searchCriteria.doc_version && extraCostDetail.doc_version !== searchCriteria.doc_version) {
      return false;
    }
    
    if (searchCriteria.created_by_id && extraCostDetail.created_by_id !== searchCriteria.created_by_id) {
      return false;
    }
    
    if (searchCriteria.updated_by_id && extraCostDetail.updated_by_id !== searchCriteria.updated_by_id) {
      return false;
    }
    
    if (searchCriteria.has_note !== undefined) {
      const hasNote = extraCostDetail.note && extraCostDetail.note.trim() !== '';
      if (hasNote !== searchCriteria.has_note) {
        return false;
      }
    }
    
    if (searchCriteria.has_info !== undefined) {
      const hasInfo = extraCostDetail.info !== null;
      if (hasInfo !== searchCriteria.has_info) {
        return false;
      }
    }
    
    if (searchCriteria.has_dimension !== undefined) {
      const hasDimension = extraCostDetail.dimension !== null;
      if (hasDimension !== searchCriteria.has_dimension) {
        return false;
      }
    }
    
    if (searchCriteria.min_amount !== undefined) {
      const amount = extraCostDetail.amount;
      if (amount < searchCriteria.min_amount) {
        return false;
      }
    }
    
    if (searchCriteria.max_amount !== undefined) {
      const amount = extraCostDetail.amount;
      if (amount > searchCriteria.max_amount) {
        return false;
      }
    }
    
    return true;
  });
};

// Utility function สำหรับตรวจสอบ ExtraCostDetail ตาม extra_cost_id
export const isExtraCostDetailExistsByExtraCostId = (extraCostId: string): boolean => {
  return extraCostDetails.some(extraCostDetail => extraCostDetail.extra_cost_id === extraCostId);
};

// Utility function สำหรับตรวจสอบ ExtraCostDetail ตาม extra_cost_type_id
export const isExtraCostDetailExistsByTypeId = (typeId: string): boolean => {
  return extraCostDetails.some(extraCostDetail => extraCostDetail.extra_cost_type_id === typeId);
};

// Utility function สำหรับตรวจสอบ ExtraCostDetail โดย extra_cost_id และ sequence_no
export const isExtraCostDetailExistsByExtraCostAndSequence = (extraCostId: string, sequenceNo: number): boolean => {
  return extraCostDetails.some(ecd => ecd.extra_cost_id === extraCostId && ecd.sequence_no === sequenceNo);
};

// Utility function สำหรับตรวจสอบ ExtraCostDetail ที่มี tax adjustment
export const hasExtraCostDetailsWithTaxAdjustment = (): boolean => {
  return extraCostDetails.some(extraCostDetail => extraCostDetail.is_tax_adjustment);
};

// Utility function สำหรับตรวจสอบ ExtraCostDetail ที่มี note
export const hasExtraCostDetailsWithNote = (): boolean => {
  return extraCostDetails.some(extraCostDetail => extraCostDetail.note && extraCostDetail.note.trim() !== '');
};

// Utility function สำหรับตรวจสอบ ExtraCostDetail ที่มี info
export const hasExtraCostDetailsWithInfo = (): boolean => {
  return extraCostDetails.some(extraCostDetail => extraCostDetail.info !== null);
};

// Utility function สำหรับตรวจสอบ ExtraCostDetail ที่มี dimension
export const hasExtraCostDetailsWithDimension = (): boolean => {
  return extraCostDetails.some(extraCostDetail => extraCostDetail.dimension !== null);
};

// Bulk operations
// เพิ่ม ExtraCostDetail หลายรายการ
export const addMultipleExtraCostDetails = (extraCostDetailsData: Omit<ExtraCostDetail, 'id' | 'created_at' | 'updated_at'>[]): ExtraCostDetail[] => {
  const newExtraCostDetails: ExtraCostDetail[] = [];
  
  extraCostDetailsData.forEach(data => {
    const newExtraCostDetail = createExtraCostDetail(data);
    newExtraCostDetails.push(newExtraCostDetail);
  });
  
  return newExtraCostDetails;
};

// ลบ ExtraCostDetail หลายรายการตาม extra_cost_id
export const removeMultipleExtraCostDetailsByExtraCostId = (extraCostId: string, deletedById: string): number => {
  return deleteExtraCostDetailsByExtraCostId(extraCostId, deletedById);
};

// ลบ ExtraCostDetail หลายรายการตาม extra_cost_type_id
export const removeMultipleExtraCostDetailsByTypeId = (typeId: string, deletedById: string): number => {
  return deleteExtraCostDetailsByTypeId(typeId, deletedById);
};

// Hard delete operations
export const hardDeleteExtraCostDetailsByExtraCostId = (extraCostId: string): number => {
  let deletedCount = 0;
  
  for (let i = extraCostDetails.length - 1; i >= 0; i--) {
    if (extraCostDetails[i].extra_cost_id === extraCostId) {
      extraCostDetails.splice(i, 1);
      deletedCount++;
    }
  }
  
  return deletedCount;
};

export const hardDeleteExtraCostDetailsByTypeId = (typeId: string): number => {
  let deletedCount = 0;
  
  for (let i = extraCostDetails.length - 1; i >= 0; i--) {
    if (extraCostDetails[i].extra_cost_type_id === typeId) {
      extraCostDetails.splice(i, 1);
      deletedCount++;
    }
  }
  
  return deletedCount;
};

// Sequence management
export const getNextExtraCostSequenceNo = (extraCostId: string): number => {
  const existingDetails = extraCostDetails.filter(ecd => ecd.extra_cost_id === extraCostId);
  if (existingDetails.length === 0) {
    return 1;
  }
  
  const maxSequenceNo = Math.max(...existingDetails.map(ecd => ecd.sequence_no));
  return maxSequenceNo + 1;
};

export const isSequenceNoExistsInExtraCost = (extraCostId: string, sequenceNo: number): boolean => {
  return extraCostDetails.some(ecd => ecd.extra_cost_id === extraCostId && ecd.sequence_no === sequenceNo);
};

export const isExtraCostSequenceNoExistsAll = (sequenceNo: number): boolean => {
  return extraCostDetails.some(ecd => ecd.sequence_no === sequenceNo);
};
