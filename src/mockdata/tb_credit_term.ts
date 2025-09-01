import { generateId, getCurrentTimestamp } from "@/libs/utils";

export interface CreditTerm {
  id: string;
  name: string;
  value: number;
  description: string;
  note: string;
  is_active: boolean;
  info: any;
  doc_version: string;
  created_at: string;
  created_by_id: string;
  updated_at: string;
  updated_by_id: string | null;
  deleted_at: string | null;
  deleted_by_id: string | null;
}

export const creditTerms: CreditTerm[] = [
  {
    id: "550e8400-e29b-41d4-a716-446655440001",
    name: "Net 30",
    value: 30,
    description: "Payment due within 30 days",
    note: "Standard credit term",
    is_active: true,
    info: { category: "standard" },
    doc_version: "1.0",
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440002",
    name: "Net 60",
    value: 60,
    description: "Payment due within 60 days",
    note: "Extended credit term",
    is_active: true,
    info: { category: "extended" },
    doc_version: "1.0",
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440003",
    name: "Net 90",
    value: 90,
    description: "Payment due within 90 days",
    note: "Long-term credit term",
    is_active: false,
    info: { category: "long-term" },
    doc_version: "1.0",
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    deleted_at: null,
    deleted_by_id: null
  }
];

// CREATE - สร้าง CreditTerm ใหม่
export const createCreditTerm = (creditTermData: Omit<CreditTerm, 'id' | 'created_at' | 'updated_at'>): CreditTerm => {
  const newCreditTerm: CreditTerm = {
    ...creditTermData,
    id: generateId(),
    created_at: getCurrentTimestamp(),
    updated_at: getCurrentTimestamp()
  };
  
  creditTerms.push(newCreditTerm);
  return newCreditTerm;
};

// READ - อ่าน CreditTerm ทั้งหมด
export const getAllCreditTerms = (): CreditTerm[] => {
  return [...creditTerms];
};

// READ - อ่าน CreditTerm ตาม ID
export const getCreditTermById = (id: string): CreditTerm | undefined => {
  return creditTerms.find(creditTerm => creditTerm.id === id);
};

// READ - อ่าน CreditTerm ตาม name
export const getCreditTermByName = (name: string): CreditTerm[] => {
  return creditTerms.filter(creditTerm => 
    creditTerm.name.toLowerCase().includes(name.toLowerCase())
  );
};

// READ - อ่าน CreditTerm ตาม value
export const getCreditTermByValue = (value: number): CreditTerm[] => {
  return creditTerms.filter(creditTerm => creditTerm.value === value);
};

// READ - อ่าน CreditTerm ที่ active
export const getActiveCreditTerms = (): CreditTerm[] => {
  return creditTerms.filter(creditTerm => creditTerm.is_active);
};

// READ - อ่าน CreditTerm ที่ inactive
export const getInactiveCreditTerms = (): CreditTerm[] => {
  return creditTerms.filter(creditTerm => !creditTerm.is_active);
};

// READ - อ่าน CreditTerm ตาม doc_version
export const getCreditTermsByDocVersion = (docVersion: string): CreditTerm[] => {
  return creditTerms.filter(creditTerm => creditTerm.doc_version === docVersion);
};

// UPDATE - อัปเดต CreditTerm
export const updateCreditTerm = (id: string, updateData: Partial<Omit<CreditTerm, 'id' | 'created_at' | 'created_by_id'>>): CreditTerm | null => {
  const index = creditTerms.findIndex(creditTerm => creditTerm.id === id);
  
  if (index === -1) {
    return null;
  }
  
  creditTerms[index] = {
    ...creditTerms[index],
    ...updateData,
    updated_at: getCurrentTimestamp()
  };
  
  return creditTerms[index];
};

// UPDATE - อัปเดต CreditTerm status
export const updateCreditTermStatus = (id: string, isActive: boolean): CreditTerm | null => {
  return updateCreditTerm(id, { is_active: isActive });
};

// UPDATE - อัปเดต CreditTerm name
export const updateCreditTermName = (id: string, name: string): CreditTerm | null => {
  return updateCreditTerm(id, { name });
};

// UPDATE - อัปเดต CreditTerm value
export const updateCreditTermValue = (id: string, value: number): CreditTerm | null => {
  return updateCreditTerm(id, { value });
};

// UPDATE - อัปเดต CreditTerm description
export const updateCreditTermDescription = (id: string, description: string): CreditTerm | null => {
  return updateCreditTerm(id, { description });
};

// UPDATE - อัปเดต CreditTerm note
export const updateCreditTermNote = (id: string, note: string): CreditTerm | null => {
  return updateCreditTerm(id, { note });
};

// UPDATE - อัปเดต CreditTerm doc version
export const updateCreditTermDocVersion = (id: string, docVersion: string): CreditTerm | null => {
  return updateCreditTerm(id, { doc_version: docVersion });
};

// DELETE - ลบ CreditTerm (soft delete)
export const deleteCreditTerm = (id: string, deletedById: string): boolean => {
  const index = creditTerms.findIndex(creditTerm => creditTerm.id === id);
  
  if (index === -1) {
    return false;
  }
  
  creditTerms[index] = {
    ...creditTerms[index],
    deleted_at: getCurrentTimestamp(),
    deleted_by_id: deletedById
  };
  
  return true;
};

// DELETE - ลบ CreditTerm แบบถาวร
export const hardDeleteCreditTerm = (id: string): boolean => {
  const index = creditTerms.findIndex(creditTerm => creditTerm.id === id);
  
  if (index === -1) {
    return false;
  }
  
  creditTerms.splice(index, 1);
  return true;
};

// DELETE - ลบ CreditTerm ตาม name
export const deleteCreditTermByName = (name: string, deletedById: string): boolean => {
  const creditTerm = creditTerms.find(ct => ct.name === name);
  if (!creditTerm) return false;
  
  return deleteCreditTerm(creditTerm.id, deletedById);
};

// DELETE - ลบ CreditTerm ตาม value
export const deleteCreditTermByValue = (value: number, deletedById: string): boolean => {
  const creditTerm = creditTerms.find(ct => ct.value === value);
  if (!creditTerm) return false;
  
  return deleteCreditTerm(creditTerm.id, deletedById);
};

// Utility function สำหรับล้างข้อมูลทั้งหมด (ใช้สำหรับ testing)
export const clearAllCreditTerms = (): void => {
  creditTerms.length = 0;
};

// Utility function สำหรับนับจำนวน CreditTerm
export const getCreditTermCount = (): number => {
  return creditTerms.length;
};

// Utility function สำหรับนับจำนวน CreditTerm ที่ active
export const getActiveCreditTermCount = (): number => {
  return creditTerms.filter(creditTerm => creditTerm.is_active).length;
};

// Utility function สำหรับค้นหา CreditTerm แบบ advanced search
export const searchCreditTerms = (searchCriteria: {
  name?: string;
  value?: number;
  description?: string;
  is_active?: boolean;
  doc_version?: string;
}): CreditTerm[] => {
  return creditTerms.filter(creditTerm => {
    if (searchCriteria.name && !creditTerm.name.toLowerCase().includes(searchCriteria.name.toLowerCase())) {
      return false;
    }
    
    if (searchCriteria.value && creditTerm.value !== searchCriteria.value) {
      return false;
    }
    
    if (searchCriteria.description && !creditTerm.description.toLowerCase().includes(searchCriteria.description.toLowerCase())) {
      return false;
    }
    
    if (searchCriteria.is_active !== undefined && creditTerm.is_active !== searchCriteria.is_active) {
      return false;
    }
    
    if (searchCriteria.doc_version && creditTerm.doc_version !== searchCriteria.doc_version) {
      return false;
    }
    
    return true;
  });
};

// Utility function สำหรับตรวจสอบ name ซ้ำ
export const isCreditTermNameExists = (name: string): boolean => {
  return creditTerms.some(creditTerm => creditTerm.name === name);
};

// Utility function สำหรับตรวจสอบ value ซ้ำ
export const isCreditTermValueExists = (value: number): boolean => {
  return creditTerms.some(creditTerm => creditTerm.value === value);
};

// Utility function สำหรับตรวจสอบ CreditTerm ที่ active
export const hasActiveCreditTerms = (): boolean => {
  return creditTerms.some(creditTerm => creditTerm.is_active);
};
