import { generateId, getCurrentTimestamp } from "@/libs/utils";

export interface VendorBusinessType {
  id: string;
  name: string;
  description: string;
  note: string;
  is_active: boolean;
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
export const vendorBusinessTypes: VendorBusinessType[] = [
  {
    id: "34532270-a404-4bc6-a461-a1201ffac7b9",
    name: "E2E Test Business Type",
    description: "Business type created by E2E test",
    note: "",
    is_active: true,
    info: null,
    dimension: null,
    doc_version: "0",
    created_at: "2025-07-30T06:02:54.878Z",
    created_by_id: "1bfdb891-58ee-499c-8115-34a964de8122",
    updated_at: "2025-07-30T06:02:54.878Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "b0689243-f1e9-4b76-b427-4be42380586f",
    name: "View Test Business Type",
    description: "Test business type for viewing",
    note: "",
    is_active: true,
    info: null,
    dimension: null,
    doc_version: "0",
    created_at: "2025-07-30T06:15:26.837Z",
    created_by_id: "1bfdb891-58ee-499c-8115-34a964de8122",
    updated_at: "2025-07-30T06:15:26.837Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "5fc895ef-61af-4f1f-8a01-12571150676c",
    name: "Update Test Business Type",
    description: "Initial description",
    note: "",
    is_active: true,
    info: null,
    dimension: null,
    doc_version: "0",
    created_at: "2025-07-30T06:15:37.723Z",
    created_by_id: "1bfdb891-58ee-499c-8115-34a964de8122",
    updated_at: "2025-07-30T06:15:37.723Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "72a48cf1-47c5-4f2c-9865-1cef8b00346b",
    name: "Delete Test Business Type",
    description: "Business type to be deleted",
    note: "",
    is_active: true,
    info: null,
    dimension: null,
    doc_version: "0",
    created_at: "2025-07-30T06:15:38.389Z",
    created_by_id: "1bfdb891-58ee-499c-8115-34a964de8122",
    updated_at: "2025-07-30T06:15:38.389Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "125be0b8-1473-457e-8b14-d05c7b101c1d",
    name: "Corporation",
    description: "Corporate business entity",
    note: "",
    is_active: true,
    info: null,
    dimension: null,
    doc_version: "0",
    created_at: "2025-07-30T06:15:39.545Z",
    created_by_id: "1bfdb891-58ee-499c-8115-34a964de8122",
    updated_at: "2025-07-30T06:15:39.545Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "fdfb8f72-1214-456a-b521-d0b88d187b70",
    name: "A",
    description: "",
    note: "",
    is_active: true,
    info: null,
    dimension: null,
    doc_version: "0",
    created_at: "2025-07-30T06:15:52.828Z",
    created_by_id: "1bfdb891-58ee-499c-8115-34a964de8122",
    updated_at: "2025-07-30T06:15:52.828Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "8f0aff55-c657-4778-924d-2fc991e84808",
    name: "Valid Business Type Name",
    description: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
    note: "",
    is_active: true,
    info: null,
    dimension: null,
    doc_version: "0",
    created_at: "2025-07-30T06:15:52.950Z",
    created_by_id: "1bfdb891-58ee-499c-8115-34a964de8122",
    updated_at: "2025-07-30T06:15:52.950Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "256bd0e1-f86f-480b-bad3-29a1b7916df7",
    name: "Unique Business Type",
    description: "First business type",
    note: "",
    is_active: true,
    info: null,
    dimension: null,
    doc_version: "0",
    created_at: "2025-07-30T06:16:01.004Z",
    created_by_id: "1bfdb891-58ee-499c-8115-34a964de8122",
    updated_at: "2025-07-30T06:16:01.004Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "89114ca4-012f-47ab-b36b-735ebd56c918",
    name: "Test<script>",
    description: "",
    note: "",
    is_active: true,
    info: null,
    dimension: null,
    doc_version: "0",
    created_at: "2025-07-30T06:16:02.757Z",
    created_by_id: "1bfdb891-58ee-499c-8115-34a964de8122",
    updated_at: "2025-07-30T06:16:02.757Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "3e9757f0-f397-4bcb-9dc9-3b67f433986c",
    name: "Bulk Test Type 1",
    description: "First bulk business type",
    note: "",
    is_active: true,
    info: null,
    dimension: null,
    doc_version: "0",
    created_at: "2025-07-30T06:16:05.637Z",
    created_by_id: "1bfdb891-58ee-499c-8115-34a964de8122",
    updated_at: "2025-07-30T06:16:05.637Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null
  }
];

// CREATE - สร้าง VendorBusinessType ใหม่
export const createVendorBusinessType = (data: Omit<VendorBusinessType, 'id' | 'created_at' | 'created_by_id' | 'updated_at' | 'updated_by_id'>): VendorBusinessType => {
  const newBusinessType: VendorBusinessType = {
    ...data,
    id: generateId(),
    created_at: getCurrentTimestamp(),
    created_by_id: 'system',
    updated_at: getCurrentTimestamp(),
    updated_by_id: 'system'
  };
  
  vendorBusinessTypes.push(newBusinessType);
  return newBusinessType;
};

// READ - อ่านข้อมูล VendorBusinessType
export const getAllVendorBusinessTypes = (): VendorBusinessType[] => {
  return vendorBusinessTypes.filter(businessType => !businessType.deleted_at);
};

export const getVendorBusinessTypeById = (id: string): VendorBusinessType | null => {
  const businessType = vendorBusinessTypes.find(bt => bt.id === id && !bt.deleted_at);
  return businessType || null;
};

export const getVendorBusinessTypeByName = (name: string): VendorBusinessType[] => {
  return vendorBusinessTypes.filter(businessType => 
    businessType.name.toLowerCase().includes(name.toLowerCase()) && !businessType.deleted_at
  );
};

export const getActiveVendorBusinessTypes = (): VendorBusinessType[] => {
  return vendorBusinessTypes.filter(businessType => businessType.is_active && !businessType.deleted_at);
};

export const getInactiveVendorBusinessTypes = (): VendorBusinessType[] => {
  return vendorBusinessTypes.filter(businessType => !businessType.is_active && !businessType.deleted_at);
};

export const getVendorBusinessTypesByCreator = (createdById: string): VendorBusinessType[] => {
  return vendorBusinessTypes.filter(businessType => businessType.created_by_id === createdById && !businessType.deleted_at);
};

export const getVendorBusinessTypesByDateRange = (startDate: string, endDate: string): VendorBusinessType[] => {
  return vendorBusinessTypes.filter(businessType => {
    const createdDate = new Date(businessType.created_at);
    const start = new Date(startDate);
    const end = new Date(endDate);
    return createdDate >= start && createdDate <= end && !businessType.deleted_at;
  });
};

export const getVendorBusinessTypesWithNote = (): VendorBusinessType[] => {
  return vendorBusinessTypes.filter(businessType => businessType.note !== "" && !businessType.deleted_at);
};

export const getVendorBusinessTypesWithoutNote = (): VendorBusinessType[] => {
  return vendorBusinessTypes.filter(businessType => businessType.note === "" && !businessType.deleted_at);
};

// UPDATE - อัปเดต VendorBusinessType
export const updateVendorBusinessType = (id: string, data: Partial<Omit<VendorBusinessType, 'id' | 'created_at' | 'created_by_id'>>): VendorBusinessType | null => {
  const index = vendorBusinessTypes.findIndex(businessType => businessType.id === id && !businessType.deleted_at);
  
  if (index === -1) {
    return null;
  }
  
  vendorBusinessTypes[index] = {
    ...vendorBusinessTypes[index],
    ...data,
    updated_at: getCurrentTimestamp(),
    updated_by_id: 'system'
  };
  
  return vendorBusinessTypes[index];
};

// UPDATE - อัปเดต VendorBusinessType status
export const updateVendorBusinessTypeStatus = (id: string, isActive: boolean): VendorBusinessType | null => {
  return updateVendorBusinessType(id, { is_active: isActive });
};

// UPDATE - อัปเดต VendorBusinessType name
export const updateVendorBusinessTypeName = (id: string, name: string): VendorBusinessType | null => {
  return updateVendorBusinessType(id, { name });
};

// UPDATE - อัปเดต VendorBusinessType description
export const updateVendorBusinessTypeDescription = (id: string, description: string): VendorBusinessType | null => {
  return updateVendorBusinessType(id, { description });
};

// UPDATE - อัปเดต VendorBusinessType note
export const updateVendorBusinessTypeNote = (id: string, note: string): VendorBusinessType | null => {
  return updateVendorBusinessType(id, { note });
};

// UPDATE - อัปเดต VendorBusinessType info
export const updateVendorBusinessTypeInfo = (id: string, info: any): VendorBusinessType | null => {
  return updateVendorBusinessType(id, { info });
};

// UPDATE - อัปเดต VendorBusinessType dimension
export const updateVendorBusinessTypeDimension = (id: string, dimension: any): VendorBusinessType | null => {
  return updateVendorBusinessType(id, { dimension });
};

// UPDATE - อัปเดต VendorBusinessType doc version
export const updateVendorBusinessTypeDocVersion = (id: string, docVersion: string): VendorBusinessType | null => {
  return updateVendorBusinessType(id, { doc_version: docVersion });
};

// DELETE - Soft delete VendorBusinessType
export const softDeleteVendorBusinessType = (id: string, deletedById: string): VendorBusinessType | null => {
  const businessType = getVendorBusinessTypeById(id);
  if (!businessType) return null;

  businessType.deleted_at = getCurrentTimestamp();
  businessType.deleted_by_id = deletedById;
  businessType.updated_at = getCurrentTimestamp();
  businessType.updated_by_id = deletedById;

  return businessType;
};

// DELETE - Hard delete VendorBusinessType
export const hardDeleteVendorBusinessType = (id: string): boolean => {
  const index = vendorBusinessTypes.findIndex(businessType => businessType.id === id);
  
  if (index === -1) {
    return false;
  }
  
  vendorBusinessTypes.splice(index, 1);
  return true;
};

// DELETE - ลบ VendorBusinessType ตาม name
export const deleteVendorBusinessTypeByName = (name: string, deletedById: string): boolean => {
  const businessType = vendorBusinessTypes.find(bt => bt.name === name && !bt.deleted_at);
  if (!businessType) return false;
  
  return softDeleteVendorBusinessType(businessType.id, deletedById) !== null;
};

// RESTORE - กู้คืน VendorBusinessType ที่ถูก soft delete
export const restoreVendorBusinessType = (id: string): VendorBusinessType | null => {
  const businessType = vendorBusinessTypes.find(bt => bt.id === id);
  if (!businessType || !businessType.deleted_at) return null;

  businessType.deleted_at = null;
  businessType.deleted_by_id = null;
  businessType.updated_at = getCurrentTimestamp();
  businessType.updated_by_id = 'system';

  return businessType;
};

// ADVANCED SEARCH - ค้นหา VendorBusinessType แบบขั้นสูง
export const searchVendorBusinessTypes = (criteria: {
  name?: string;
  description?: string;
  is_active?: boolean;
  has_note?: boolean;
  created_by_id?: string;
  start_date?: string;
  end_date?: string;
}): VendorBusinessType[] => {
  return vendorBusinessTypes.filter(businessType => {
    if (businessType.deleted_at) return false;
    
    if (criteria.name && !businessType.name.toLowerCase().includes(criteria.name.toLowerCase())) {
      return false;
    }
    
    if (criteria.description && !businessType.description.toLowerCase().includes(criteria.description.toLowerCase())) {
      return false;
    }
    
    if (criteria.is_active !== undefined && businessType.is_active !== criteria.is_active) {
      return false;
    }
    
    if (criteria.has_note !== undefined) {
      const hasNote = businessType.note !== "";
      if (hasNote !== criteria.has_note) {
        return false;
      }
    }
    
    if (criteria.created_by_id && businessType.created_by_id !== criteria.created_by_id) {
      return false;
    }
    
    if (criteria.start_date || criteria.end_date) {
      const createdDate = new Date(businessType.created_at);
      if (criteria.start_date && createdDate < new Date(criteria.start_date)) return false;
      if (criteria.end_date && createdDate > new Date(criteria.end_date)) return false;
    }
    
    return true;
  });
};

// UTILITY FUNCTIONS - ฟังก์ชันเสริม
export const getVendorBusinessTypeCount = (): number => {
  return vendorBusinessTypes.filter(businessType => !businessType.deleted_at).length;
};

export const getActiveVendorBusinessTypeCount = (): number => {
  return vendorBusinessTypes.filter(businessType => businessType.is_active && !businessType.deleted_at).length;
};

export const getInactiveVendorBusinessTypeCount = (): number => {
  return vendorBusinessTypes.filter(businessType => !businessType.is_active && !businessType.deleted_at).length;
};

export const isVendorBusinessTypeExists = (id: string): boolean => {
  return vendorBusinessTypes.some(businessType => businessType.id === id && !businessType.deleted_at);
};

export const isVendorBusinessTypeNameExists = (name: string): boolean => {
  return vendorBusinessTypes.some(businessType => businessType.name === name && !businessType.deleted_at);
};

export const hasActiveVendorBusinessTypes = (): boolean => {
  return vendorBusinessTypes.some(businessType => businessType.is_active && !businessType.deleted_at);
};

export const hasVendorBusinessTypesWithNote = (): boolean => {
  return vendorBusinessTypes.some(businessType => businessType.note !== "" && !businessType.deleted_at);
};

export const clearAllVendorBusinessTypes = (): void => {
  vendorBusinessTypes.length = 0;
};
