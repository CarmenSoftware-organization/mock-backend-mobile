import { generateId, getCurrentTimestamp } from "@/libs/utils";

export interface Vendor {
  id: string;
  name: string;
  description: string | null;
  note: string | null;
  business_type_id: string | null;
  business_type_name: string | null;
  tax_profile_id: string | null;
  tax_profile_name: string | null;
  tax_rate: string | null;
  is_active: boolean;
  info: any;
  dimension: any;
  created_at: string;
  created_by_id: string;
  updated_at: string;
  updated_by_id: string | null;
  deleted_at: string | null;
  deleted_by_id: string | null;
}

// Sample data
export const vendors: Vendor[] = [
  {
    id: "1c837400-3069-49c7-a297-2549721e764d",
    name: "4 JOY SHOKUDO COMPANY LIMITED",
    description: null,
    note: null,
    business_type_id: null,
    business_type_name: null,
    tax_profile_id: null,
    tax_profile_name: null,
    tax_rate: null,
    is_active: true,
    info: null,
    dimension: null,
    created_at: "2025-07-29T01:17:05.099Z",
    created_by_id: "1bfdb891-58ee-499c-8115-34a964de8122",
    updated_at: "2025-07-29T01:17:05.099Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "e50de68e-8053-4574-9252-94f70187b95b",
    name: "A K & J TEXTILE CO.,LTD.",
    description: null,
    note: null,
    business_type_id: null,
    business_type_name: null,
    tax_profile_id: null,
    tax_profile_name: null,
    tax_rate: null,
    is_active: true,
    info: null,
    dimension: null,
    created_at: "2025-07-29T01:17:05.158Z",
    created_by_id: "1bfdb891-58ee-499c-8115-34a964de8122",
    updated_at: "2025-07-29T01:17:05.158Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "2a892635-4384-411a-9e00-fd33e39c1837",
    name: "โรงเรียนบ้านกะตะ(ตรีทศยุทธอุปถัมภ์)",
    description: null,
    note: null,
    business_type_id: null,
    business_type_name: null,
    tax_profile_id: null,
    tax_profile_name: null,
    tax_rate: null,
    is_active: true,
    info: null,
    dimension: null,
    created_at: "2025-07-29T01:17:05.184Z",
    created_by_id: "1bfdb891-58ee-499c-8115-34a964de8122",
    updated_at: "2025-07-29T01:17:05.185Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "0e370311-0b10-4703-a9a2-4e653364c558",
    name: "ADISAK TRADING CO.,LTD.",
    description: null,
    note: null,
    business_type_id: null,
    business_type_name: null,
    tax_profile_id: null,
    tax_profile_name: null,
    tax_rate: null,
    is_active: true,
    info: null,
    dimension: null,
    created_at: "2025-07-29T01:17:05.209Z",
    created_by_id: "1bfdb891-58ee-499c-8115-34a964de8122",
    updated_at: "2025-07-29T01:17:05.209Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "21463951-fef4-44b3-9afe-3098fe7e475a",
    name: "ADVANCE WIRELESS NETWORK CO.,LTD.",
    description: null,
    note: null,
    business_type_id: null,
    business_type_name: null,
    tax_profile_id: null,
    tax_profile_name: null,
    tax_rate: null,
    is_active: true,
    info: null,
    dimension: null,
    created_at: "2025-07-29T01:17:05.237Z",
    created_by_id: "1bfdb891-58ee-499c-8115-34a964de8122",
    updated_at: "2025-07-29T01:17:05.237Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "a08128e6-6016-4f28-9ace-5599d3384368",
    name: "ร้าน เอ็น เอส เอ็น ฮีท แอนด์เวอร์วิส(สำนักงานใหญ่)",
    description: null,
    note: null,
    business_type_id: null,
    business_type_name: null,
    tax_profile_id: null,
    tax_profile_name: null,
    tax_rate: null,
    is_active: true,
    info: null,
    dimension: null,
    created_at: "2025-07-29T01:17:05.263Z",
    created_by_id: "1bfdb891-58ee-499c-8115-34a964de8122",
    updated_at: "2025-07-29T01:17:05.264Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "a8fcf5ef-0975-47d1-92c5-9c5952fc5fd6",
    name: "ร้านมังกี้สกรีนเสื้อ",
    description: null,
    note: null,
    business_type_id: null,
    business_type_name: null,
    tax_profile_id: null,
    tax_profile_name: null,
    tax_rate: null,
    is_active: true,
    info: null,
    dimension: null,
    created_at: "2025-07-29T01:17:05.288Z",
    created_by_id: "1bfdb891-58ee-499c-8115-34a964de8122",
    updated_at: "2025-07-29T01:17:05.289Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "6a5d7154-b75f-4b8d-be4d-4250755467f4",
    name: "ร้านโชคอนันต์จักสาน (สำนักงานใหญ่) โดย นาย รัชชธีร์  ศรีธนสารวงศ์",
    description: null,
    note: null,
    business_type_id: null,
    business_type_name: null,
    tax_profile_id: null,
    tax_profile_name: null,
    tax_rate: null,
    is_active: true,
    info: null,
    dimension: null,
    created_at: "2025-07-29T01:17:05.314Z",
    created_by_id: "1bfdb891-58ee-499c-8115-34a964de8122",
    updated_at: "2025-07-29T01:17:05.316Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "57b7bcd8-cad7-4677-a572-3749066fc923",
    name: "ร้านจักรคริยา",
    description: null,
    note: null,
    business_type_id: null,
    business_type_name: null,
    tax_profile_id: null,
    tax_profile_name: null,
    tax_rate: null,
    is_active: true,
    info: null,
    dimension: null,
    created_at: "2025-07-29T01:17:05.364Z",
    created_by_id: "1bfdb891-58ee-499c-8115-34a964de8122",
    updated_at: "2025-07-29T01:17:05.366Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "68e26fcd-1726-4781-a6a7-9276c9ebe458",
    name: "เอ้กดี้เอ้ก",
    description: null,
    note: null,
    business_type_id: null,
    business_type_name: null,
    tax_profile_id: null,
    tax_profile_name: null,
    tax_rate: null,
    is_active: true,
    info: null,
    dimension: null,
    created_at: "2025-07-29T01:17:05.430Z",
    created_by_id: "1bfdb891-58ee-499c-8115-34a964de8122",
    updated_at: "2025-07-29T01:17:05.431Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null
  }
];

// CREATE - สร้าง Vendor ใหม่
export const createVendor = (data: Omit<Vendor, 'id' | 'created_at' | 'created_by_id' | 'updated_at' | 'updated_by_id'>): Vendor => {
  const newVendor: Vendor = {
    ...data,
    id: generateId(),
    created_at: getCurrentTimestamp(),
    created_by_id: 'system',
    updated_at: getCurrentTimestamp(),
    updated_by_id: 'system'
  };
  
  vendors.push(newVendor);
  return newVendor;
};

// READ - อ่านข้อมูล Vendor
export const getAllVendors = (): Vendor[] => {
  return vendors.filter(vendor => !vendor.deleted_at);
};

export const getVendorById = (id: string): Vendor | null => {
  const vendor = vendors.find(v => v.id === id && !v.deleted_at);
  return vendor || null;
};

export const getVendorByName = (name: string): Vendor[] => {
  return vendors.filter(vendor => 
    vendor.name.toLowerCase().includes(name.toLowerCase()) && !vendor.deleted_at
  );
};

export const getVendorsByBusinessType = (businessTypeId: string): Vendor[] => {
  return vendors.filter(vendor => vendor.business_type_id === businessTypeId && !vendor.deleted_at);
};

export const getVendorsByTaxProfile = (taxProfileId: string): Vendor[] => {
  return vendors.filter(vendor => vendor.tax_profile_id === taxProfileId && !vendor.deleted_at);
};

export const getActiveVendors = (): Vendor[] => {
  return vendors.filter(vendor => vendor.is_active && !vendor.deleted_at);
};

export const getInactiveVendors = (): Vendor[] => {
  return vendors.filter(vendor => !vendor.is_active && !vendor.deleted_at);
};

export const getVendorsWithBusinessType = (): Vendor[] => {
  return vendors.filter(vendor => vendor.business_type_id !== null && !vendor.deleted_at);
};

export const getVendorsWithTaxProfile = (): Vendor[] => {
  return vendors.filter(vendor => vendor.tax_profile_id !== null && !vendor.deleted_at);
};

export const getVendorsByCreator = (createdById: string): Vendor[] => {
  return vendors.filter(vendor => vendor.created_by_id === createdById && !vendor.deleted_at);
};

export const getVendorsByDateRange = (startDate: string, endDate: string): Vendor[] => {
  return vendors.filter(vendor => {
    const createdDate = new Date(vendor.created_at);
    const start = new Date(startDate);
    const end = new Date(endDate);
    return createdDate >= start && createdDate <= end && !vendor.deleted_at;
  });
};

export const getVendorsWithNote = (): Vendor[] => {
  return vendors.filter(vendor => vendor.note !== null && !vendor.deleted_at);
};

export const getVendorsWithoutNote = (): Vendor[] => {
  return vendors.filter(vendor => vendor.note === null && !vendor.deleted_at);
};

// UPDATE - อัปเดต Vendor
export const updateVendor = (id: string, data: Partial<Omit<Vendor, 'id' | 'created_at' | 'created_by_id'>>): Vendor | null => {
  const index = vendors.findIndex(vendor => vendor.id === id && !vendor.deleted_at);
  
  if (index === -1) {
    return null;
  }
  
  vendors[index] = {
    ...vendors[index],
    ...data,
    updated_at: getCurrentTimestamp(),
    updated_by_id: 'system'
  };
  
  return vendors[index];
};

// UPDATE - อัปเดต Vendor status
export const updateVendorStatus = (id: string, isActive: boolean): Vendor | null => {
  return updateVendor(id, { is_active: isActive });
};

// UPDATE - อัปเดต Vendor business type
export const updateVendorBusinessType = (id: string, businessTypeId: string, businessTypeName: string): Vendor | null => {
  return updateVendor(id, { 
    business_type_id: businessTypeId,
    business_type_name: businessTypeName
  });
};

// UPDATE - อัปเดต Vendor tax profile
export const updateVendorTaxProfile = (id: string, taxProfileId: string, taxProfileName: string, taxRate: string): Vendor | null => {
  return updateVendor(id, { 
    tax_profile_id: taxProfileId,
    tax_profile_name: taxProfileName,
    tax_rate: taxRate
  });
};

// UPDATE - อัปเดต Vendor description
export const updateVendorDescription = (id: string, description: string): Vendor | null => {
  return updateVendor(id, { description });
};

// UPDATE - อัปเดต Vendor note
export const updateVendorNote = (id: string, note: string): Vendor | null => {
  return updateVendor(id, { note });
};

// UPDATE - อัปเดต Vendor info
export const updateVendorInfo = (id: string, info: any): Vendor | null => {
  return updateVendor(id, { info });
};

// UPDATE - อัปเดต Vendor dimension
export const updateVendorDimension = (id: string, dimension: any): Vendor | null => {
  return updateVendor(id, { dimension });
};

// DELETE - Soft delete Vendor
export const softDeleteVendor = (id: string, deletedById: string): Vendor | null => {
  const vendor = getVendorById(id);
  if (!vendor) return null;

  vendor.deleted_at = getCurrentTimestamp();
  vendor.deleted_by_id = deletedById;
  vendor.updated_at = getCurrentTimestamp();
  vendor.updated_by_id = deletedById;

  return vendor;
};

// DELETE - Hard delete Vendor
export const hardDeleteVendor = (id: string): boolean => {
  const index = vendors.findIndex(vendor => vendor.id === id);
  
  if (index === -1) {
    return false;
  }
  
  vendors.splice(index, 1);
  return true;
};

// DELETE - ลบ Vendor ตาม business_type_id
export const deleteVendorsByBusinessType = (businessTypeId: string, deletedById: string): boolean => {
  const vendorsByBusinessType = getVendorsByBusinessType(businessTypeId);
  let deletedCount = 0;
  
  vendorsByBusinessType.forEach(vendor => {
    if (softDeleteVendor(vendor.id, deletedById)) {
      deletedCount++;
    }
  });
  
  return deletedCount > 0;
};

// DELETE - ลบ Vendor ตาม tax_profile_id
export const deleteVendorsByTaxProfile = (taxProfileId: string, deletedById: string): boolean => {
  const vendorsByTaxProfile = getVendorsByTaxProfile(taxProfileId);
  let deletedCount = 0;
  
  vendorsByTaxProfile.forEach(vendor => {
    if (softDeleteVendor(vendor.id, deletedById)) {
      deletedCount++;
    }
  });
  
  return deletedCount > 0;
};

// RESTORE - กู้คืน Vendor ที่ถูก soft delete
export const restoreVendor = (id: string): Vendor | null => {
  const vendor = vendors.find(v => v.id === id);
  if (!vendor || !vendor.deleted_at) return null;

  vendor.deleted_at = null;
  vendor.deleted_by_id = null;
  vendor.updated_at = getCurrentTimestamp();
  vendor.updated_by_id = 'system';

  return vendor;
};

// ADVANCED SEARCH - ค้นหา Vendor แบบขั้นสูง
export const searchVendors = (criteria: {
  name?: string;
  description?: string;
  business_type_id?: string;
  tax_profile_id?: string;
  is_active?: boolean;
  has_business_type?: boolean;
  has_tax_profile?: boolean;
  has_note?: boolean;
  created_by_id?: string;
  start_date?: string;
  end_date?: string;
}): Vendor[] => {
  return vendors.filter(vendor => {
    if (vendor.deleted_at) return false;
    
    if (criteria.name && !vendor.name.toLowerCase().includes(criteria.name.toLowerCase())) {
      return false;
    }
    
    if (criteria.description && vendor.description && !vendor.description.toLowerCase().includes(criteria.description.toLowerCase())) {
      return false;
    }
    
    if (criteria.business_type_id && vendor.business_type_id !== criteria.business_type_id) {
      return false;
    }
    
    if (criteria.tax_profile_id && vendor.tax_profile_id !== criteria.tax_profile_id) {
      return false;
    }
    
    if (criteria.is_active !== undefined && vendor.is_active !== criteria.is_active) {
      return false;
    }
    
    if (criteria.has_business_type !== undefined) {
      const hasBusinessType = vendor.business_type_id !== null;
      if (hasBusinessType !== criteria.has_business_type) {
        return false;
      }
    }
    
    if (criteria.has_tax_profile !== undefined) {
      const hasTaxProfile = vendor.tax_profile_id !== null;
      if (hasTaxProfile !== criteria.has_tax_profile) {
        return false;
      }
    }
    
    if (criteria.has_note !== undefined) {
      const hasNote = vendor.note !== null;
      if (hasNote !== criteria.has_note) {
        return false;
      }
    }
    
    if (criteria.created_by_id && vendor.created_by_id !== criteria.created_by_id) {
      return false;
    }
    
    if (criteria.start_date || criteria.end_date) {
      const createdDate = new Date(vendor.created_at);
      if (criteria.start_date && createdDate < new Date(criteria.start_date)) return false;
      if (criteria.end_date && createdDate > new Date(criteria.end_date)) return false;
    }
    
    return true;
  });
};

// UTILITY FUNCTIONS - ฟังก์ชันเสริม
export const getVendorCount = (): number => {
  return vendors.filter(vendor => !vendor.deleted_at).length;
};

export const getActiveVendorCount = (): number => {
  return vendors.filter(vendor => vendor.is_active && !vendor.deleted_at).length;
};

export const getInactiveVendorCount = (): number => {
  return vendors.filter(vendor => !vendor.is_active && !vendor.deleted_at).length;
};

export const getVendorCountByBusinessType = (businessTypeId: string): number => {
  return vendors.filter(vendor => vendor.business_type_id === businessTypeId && !vendor.deleted_at).length;
};

export const getVendorCountByTaxProfile = (taxProfileId: string): number => {
  return vendors.filter(vendor => vendor.tax_profile_id === taxProfileId && !vendor.deleted_at).length;
};

export const isVendorExists = (id: string): boolean => {
  return vendors.some(vendor => vendor.id === id && !vendor.deleted_at);
};

export const isVendorNameExists = (name: string): boolean => {
  return vendors.some(vendor => vendor.name === name && !vendor.deleted_at);
};

export const hasVendorsWithBusinessType = (): boolean => {
  return vendors.some(vendor => vendor.business_type_id !== null && !vendor.deleted_at);
};

export const hasVendorsWithTaxProfile = (): boolean => {
  return vendors.some(vendor => vendor.tax_profile_id !== null && !vendor.deleted_at);
};

export const hasVendorsWithNote = (): boolean => {
  return vendors.some(vendor => vendor.note !== null && !vendor.deleted_at);
};

export const clearAllVendors = (): void => {
  vendors.length = 0;
};
