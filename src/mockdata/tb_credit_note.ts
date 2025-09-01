import { generateId, getCurrentTimestamp } from "@/libs/utils";

export interface CreditNote {
  id: string;
  cn_no: string;
  cn_date: string;
  doc_status: 'draft' | 'submitted' | 'approved' | 'rejected' | 'completed';
  credit_note_type: 'vendor' | 'customer' | 'adjustment';
  vendor_id: string;
  vendor_name: string;
  pricelist_detail_id: string;
  pricelist_no: string;
  pricelist_unit: string;
  pricelist_price: number;
  currency_id: string;
  currency_name: string;
  exchange_rate: number;
  exchange_rate_date: string;
  grn_id: string;
  grn_no: string;
  grn_date: string;
  cn_reason_id: string;
  cn_reason_name: string;
  cn_reason_description: string;
  invoice_no: string;
  invoice_date: string;
  tax_invoice_no: string;
  tax_invoice_date: string;
  note: string;
  description: string;
  workflow_id: string;
  workflow_name: string;
  workflow_history: any;
  workflow_current_stage: string;
  workflow_previous_stage: string;
  workflow_next_stage: string;
  user_action: any;
  last_action: 'submit' | 'approve' | 'reject' | 'complete';
  last_action_at_date: string;
  last_action_by_id: string;
  last_action_by_name: string;
  info: any;
  dimension: any;
  doc_version: string;
  created_at: string;
  created_by_id: string;
  updated_at: string;
  updated_by_id: string;
  deleted_at: string | null;
  deleted_by_id: string | null;
}

export const creditNotes: CreditNote[] = [
  {
    id: "h7i8j9k0-l1m2-3456-ghij-890123456789",
    cn_no: "CN-2025-001",
    cn_date: "2025-07-31T00:00:00.000Z",
    doc_status: "draft",
    credit_note_type: "vendor",
    vendor_id: "vendor_001",
    vendor_name: "ABC Supplier",
    pricelist_detail_id: "pl_001",
    pricelist_no: "PL-2025-001",
    pricelist_unit: "piece",
    pricelist_price: 100.00,
    currency_id: "curr_001",
    currency_name: "THB",
    exchange_rate: 1.00,
    exchange_rate_date: "2025-07-31T00:00:00.000Z",
    grn_id: "grn_001",
    grn_no: "GRN-2025-001",
    grn_date: "2025-07-30T00:00:00.000Z",
    cn_reason_id: "reason_001",
    cn_reason_name: "Return of Goods",
    cn_reason_description: "Customer returned damaged goods",
    invoice_no: "INV-2025-001",
    invoice_date: "2025-07-29T00:00:00.000Z",
    tax_invoice_no: "TI-2025-001",
    tax_invoice_date: "2025-07-29T00:00:00.000Z",
    note: "Credit note for returned goods",
    description: "Credit note issued for damaged goods returned by customer",
    workflow_id: "wf_001",
    workflow_name: "Credit Note Approval",
    workflow_history: [{ stage: "draft", date: "2025-07-31T09:00:00.000Z" }],
    workflow_current_stage: "draft",
    workflow_previous_stage: "",
    workflow_next_stage: "submitted",
    user_action: { action: "create", user: "user_001" },
    last_action: "submit",
    last_action_at_date: "2025-07-31T09:00:00.000Z",
    last_action_by_id: "user_001",
    last_action_by_name: "John Doe",
    info: { category: "return", priority: "normal" },
    dimension: { department: "sales", region: "bangkok" },
    doc_version: "1.0",
    created_at: "2025-07-31T09:00:00.000Z",
    created_by_id: "user_001",
    updated_at: "2025-07-31T09:00:00.000Z",
    updated_by_id: "user_001",
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "i8j9k0l1-m2n3-4567-hijk-901234567890",
    cn_no: "CN-2025-002",
    cn_date: "2025-07-31T00:00:00.000Z",
    doc_status: "submitted",
    credit_note_type: "customer",
    vendor_id: "vendor_002",
    vendor_name: "XYZ Corporation",
    pricelist_detail_id: "pl_002",
    pricelist_no: "PL-2025-002",
    pricelist_unit: "piece",
    pricelist_price: 200.00,
    currency_id: "curr_001",
    currency_name: "THB",
    exchange_rate: 1.00,
    exchange_rate_date: "2025-07-31T00:00:00.000Z",
    grn_id: "grn_002",
    grn_no: "GRN-2025-002",
    grn_date: "2025-07-29T00:00:00.000Z",
    cn_reason_id: "reason_002",
    cn_reason_name: "Price Adjustment",
    cn_reason_description: "Price correction due to pricing error",
    invoice_no: "INV-2025-002",
    invoice_date: "2025-07-28T00:00:00.000Z",
    tax_invoice_no: "TI-2025-002",
    tax_invoice_date: "2025-07-28T00:00:00.000Z",
    note: "Credit note for price adjustment",
    description: "Credit note issued for pricing error correction",
    workflow_id: "wf_001",
    workflow_name: "Credit Note Approval",
    workflow_history: [{ stage: "draft", date: "2025-07-31T10:00:00.000Z" }, { stage: "submitted", date: "2025-07-31T10:30:00.000Z" }],
    workflow_current_stage: "submitted",
    workflow_previous_stage: "draft",
    workflow_next_stage: "approved",
    user_action: { action: "submit", user: "user_002" },
    last_action: "submit",
    last_action_at_date: "2025-07-31T10:30:00.000Z",
    last_action_by_id: "user_002",
    last_action_by_name: "Jane Smith",
    info: { category: "pricing", priority: "high" },
    dimension: { department: "finance", region: "bangkok" },
    doc_version: "1.0",
    created_at: "2025-07-31T10:00:00.000Z",
    created_by_id: "user_002",
    updated_at: "2025-07-31T10:30:00.000Z",
    updated_by_id: "user_002",
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "j9k0l1m2-n3o4-5678-ijkl-012345678901",
    cn_no: "CN-2025-003",
    cn_date: "2025-07-31T00:00:00.000Z",
    doc_status: "approved",
    credit_note_type: "adjustment",
    vendor_id: "vendor_003",
    vendor_name: "DEF Trading",
    pricelist_detail_id: "pl_003",
    pricelist_no: "PL-2025-003",
    pricelist_unit: "piece",
    pricelist_price: 150.00,
    currency_id: "curr_001",
    currency_name: "THB",
    exchange_rate: 1.00,
    exchange_rate_date: "2025-07-31T00:00:00.000Z",
    grn_id: "grn_003",
    grn_no: "GRN-2025-003",
    grn_date: "2025-07-27T00:00:00.000Z",
    cn_reason_id: "reason_003",
    cn_reason_name: "Service Cancellation",
    cn_reason_description: "Service was cancelled before completion",
    invoice_no: "INV-2025-003",
    invoice_date: "2025-07-26T00:00:00.000Z",
    tax_invoice_no: "TI-2025-003",
    tax_invoice_date: "2025-07-26T00:00:00.000Z",
    note: "Credit note for cancelled service",
    description: "Credit note issued for cancelled service",
    workflow_id: "wf_001",
    workflow_name: "Credit Note Approval",
    workflow_history: [{ stage: "draft", date: "2025-07-31T11:00:00.000Z" }, { stage: "submitted", date: "2025-07-31T11:30:00.000Z" }, { stage: "approved", date: "2025-07-31T12:00:00.000Z" }],
    workflow_current_stage: "approved",
    workflow_previous_stage: "submitted",
    workflow_next_stage: "completed",
    user_action: { action: "approve", user: "manager_001" },
    last_action: "approve",
    last_action_at_date: "2025-07-31T12:00:00.000Z",
    last_action_by_id: "manager_001",
    last_action_by_name: "Manager User",
    info: { category: "service", priority: "medium" },
    dimension: { department: "operations", region: "bangkok" },
    doc_version: "1.0",
    created_at: "2025-07-31T11:00:00.000Z",
    created_by_id: "user_003",
    updated_at: "2025-07-31T12:00:00.000Z",
    updated_by_id: "manager_001",
    deleted_at: null,
    deleted_by_id: null
  }
];

// CREATE - สร้าง CreditNote ใหม่
export const createCreditNote = (creditNoteData: Omit<CreditNote, 'id' | 'created_at' | 'updated_at'>): CreditNote => {
  const newCreditNote: CreditNote = {
    ...creditNoteData,
    id: generateId(),
    created_at: getCurrentTimestamp(),
    updated_at: getCurrentTimestamp()
  };
  
  creditNotes.push(newCreditNote);
  return newCreditNote;
};

// READ - อ่าน CreditNote ทั้งหมด
export const getAllCreditNotes = (): CreditNote[] => {
  return [...creditNotes];
};

// READ - อ่าน CreditNote ตาม ID
export const getCreditNoteById = (id: string): CreditNote | undefined => {
  return creditNotes.find(creditNote => creditNote.id === id);
};

// READ - อ่าน CreditNote ตาม cn_no
export const getCreditNoteByNo = (cnNo: string): CreditNote | undefined => {
  return creditNotes.find(creditNote => creditNote.cn_no === cnNo);
};

// READ - อ่าน CreditNote ตาม vendor_id
export const getCreditNotesByVendorId = (vendorId: string): CreditNote[] => {
  return creditNotes.filter(creditNote => creditNote.vendor_id === vendorId);
};

// READ - อ่าน CreditNote ตาม doc_status
export const getCreditNotesByStatus = (docStatus: CreditNote['doc_status']): CreditNote[] => {
  return creditNotes.filter(creditNote => creditNote.doc_status === docStatus);
};

// READ - อ่าน CreditNote ตาม credit_note_type
export const getCreditNotesByType = (creditNoteType: CreditNote['credit_note_type']): CreditNote[] => {
  return creditNotes.filter(creditNote => creditNote.credit_note_type === creditNoteType);
};

// READ - อ่าน CreditNote ตาม created_by_id
export const getCreditNotesByCreatedBy = (createdById: string): CreditNote[] => {
  return creditNotes.filter(creditNote => creditNote.created_by_id === createdById);
};

// READ - อ่าน CreditNote ตาม last_action_by_id
export const getCreditNotesByLastActionBy = (lastActionById: string): CreditNote[] => {
  return creditNotes.filter(creditNote => creditNote.last_action_by_id === lastActionById);
};

// READ - อ่าน CreditNote ตามช่วงเวลา
export const getCreditNotesByDateRange = (startDate: string, endDate: string): CreditNote[] => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  
  return creditNotes.filter(creditNote => {
    const cnDate = new Date(creditNote.cn_date);
    return cnDate >= start && cnDate <= end;
  });
};

// READ - อ่าน CreditNote ที่ไม่ถูกลบ
export const getActiveCreditNotes = (): CreditNote[] => {
  return creditNotes.filter(creditNote => !creditNote.deleted_at);
};

// READ - อ่าน CreditNote ที่ถูกลบ
export const getDeletedCreditNotes = (): CreditNote[] => {
  return creditNotes.filter(creditNote => creditNote.deleted_at);
};

// READ - อ่าน CreditNote ตาม workflow_current_stage
export const getCreditNotesByWorkflowStage = (workflowStage: string): CreditNote[] => {
  return creditNotes.filter(creditNote => creditNote.workflow_current_stage === workflowStage);
};

// READ - อ่าน CreditNote ตาม last_action
export const getCreditNotesByLastAction = (lastAction: CreditNote['last_action']): CreditNote[] => {
  return creditNotes.filter(creditNote => creditNote.last_action === lastAction);
};

// UPDATE - อัปเดต CreditNote
export const updateCreditNote = (
  id: string, 
  updateData: Partial<Omit<CreditNote, 'id' | 'created_at' | 'created_by_id'>>,
  updatedById: string
): CreditNote | null => {
  const index = creditNotes.findIndex(creditNote => creditNote.id === id);
  
  if (index === -1) {
    return null;
  }
  
  creditNotes[index] = {
    ...creditNotes[index],
    ...updateData,
    updated_at: getCurrentTimestamp(),
    updated_by_id: updatedById
  };
  
  return creditNotes[index];
};

// UPDATE - อัปเดต CreditNote status
export const updateCreditNoteStatus = (id: string, docStatus: CreditNote['doc_status'], updatedById: string): CreditNote | null => {
  return updateCreditNote(id, { doc_status: docStatus }, updatedById);
};

// UPDATE - อัปเดต CreditNote workflow stage
export const updateCreditNoteWorkflowStage = (
  id: string, 
  currentStage: string, 
  previousStage: string, 
  nextStage: string, 
  updatedById: string
): CreditNote | null => {
  return updateCreditNote(id, { 
    workflow_current_stage: currentStage,
    workflow_previous_stage: previousStage,
    workflow_next_stage: nextStage
  }, updatedById);
};

// UPDATE - อัปเดต CreditNote last action
export const updateCreditNoteLastAction = (
  id: string, 
  lastAction: CreditNote['last_action'], 
  lastActionById: string, 
  lastActionByName: string, 
  updatedById: string
): CreditNote | null => {
  return updateCreditNote(id, { 
    last_action: lastAction,
    last_action_by_id: lastActionById,
    last_action_by_name: lastActionByName,
    last_action_at_date: getCurrentTimestamp()
  }, updatedById);
};

// UPDATE - อัปเดต CreditNote description
export const updateCreditNoteDescription = (id: string, description: string, updatedById: string): CreditNote | null => {
  return updateCreditNote(id, { description }, updatedById);
};

// UPDATE - อัปเดต CreditNote note
export const updateCreditNoteNote = (id: string, note: string, updatedById: string): CreditNote | null => {
  return updateCreditNote(id, { note }, updatedById);
};

// UPDATE - อัปเดต CreditNote info
export const updateCreditNoteInfo = (id: string, info: any, updatedById: string): CreditNote | null => {
  return updateCreditNote(id, { info }, updatedById);
};

// UPDATE - อัปเดต CreditNote dimension
export const updateCreditNoteDimension = (id: string, dimension: any, updatedById: string): CreditNote | null => {
  return updateCreditNote(id, { dimension }, updatedById);
};

// UPDATE - อัปเดต CreditNote โดย cn_no
export const updateCreditNoteByNo = (
  cnNo: string, 
  updateData: Partial<Omit<CreditNote, 'id' | 'cn_no' | 'created_at' | 'created_by_id'>>,
  updatedById: string
): CreditNote | null => {
  const creditNote = getCreditNoteByNo(cnNo);
  if (!creditNote) return null;
  
  return updateCreditNote(creditNote.id, updateData, updatedById);
};

// DELETE - ลบ CreditNote (soft delete)
export const deleteCreditNote = (id: string, deletedById: string): boolean => {
  const index = creditNotes.findIndex(creditNote => creditNote.id === id);
  
  if (index === -1) {
    return false;
  }
  
  creditNotes[index] = {
    ...creditNotes[index],
    deleted_at: getCurrentTimestamp(),
    deleted_by_id: deletedById
  };
  
  return true;
};

// DELETE - ลบ CreditNote แบบถาวร
export const hardDeleteCreditNote = (id: string): boolean => {
  const index = creditNotes.findIndex(creditNote => creditNote.id === id);
  
  if (index === -1) {
    return false;
  }
  
  creditNotes.splice(index, 1);
  return true;
};

// DELETE - ลบ CreditNote ตาม cn_no
export const deleteCreditNoteByNo = (cnNo: string, deletedById: string): boolean => {
  const creditNote = creditNotes.find(cn => cn.cn_no === cnNo);
  if (!creditNote) return false;
  
  return deleteCreditNote(creditNote.id, deletedById);
};

// DELETE - ลบ CreditNote ตาม vendor_id
export const deleteCreditNotesByVendorId = (vendorId: string, deletedById: string): number => {
  let deletedCount = 0;
  
  creditNotes.forEach(creditNote => {
    if (creditNote.vendor_id === vendorId && !creditNote.deleted_at) {
      creditNote.deleted_at = getCurrentTimestamp();
      creditNote.deleted_by_id = deletedById;
      deletedCount++;
    }
  });
  
  return deletedCount;
};

// RESTORE - กู้คืน CreditNote ที่ถูกลบ
export const restoreCreditNote = (id: string, restoredById: string): CreditNote | null => {
  const index = creditNotes.findIndex(creditNote => creditNote.id === id);
  
  if (index === -1) {
    return null;
  }
  
  creditNotes[index] = {
    ...creditNotes[index],
    deleted_at: null,
    deleted_by_id: null,
    updated_at: getCurrentTimestamp(),
    updated_by_id: restoredById
  };
  
  return creditNotes[index];
};

// Utility function สำหรับล้างข้อมูลทั้งหมด (ใช้สำหรับ testing)
export const clearAllCreditNotes = (): void => {
  creditNotes.length = 0;
};

// Utility function สำหรับนับจำนวน CreditNote
export const getCreditNoteCount = (): number => {
  return creditNotes.length;
};

// Utility function สำหรับนับจำนวน CreditNote ที่ไม่ถูกลบ
export const getActiveCreditNoteCount = (): number => {
  return creditNotes.filter(creditNote => !creditNote.deleted_at).length;
};

// Utility function สำหรับนับจำนวน CreditNote ตาม status
export const getCreditNoteCountByStatus = (docStatus: CreditNote['doc_status']): number => {
  return creditNotes.filter(creditNote => creditNote.doc_status === docStatus && !creditNote.deleted_at).length;
};

// Utility function สำหรับนับจำนวน CreditNote ตาม type
export const getCreditNoteCountByType = (creditNoteType: CreditNote['credit_note_type']): number => {
  return creditNotes.filter(creditNote => creditNote.credit_note_type === creditNoteType && !creditNote.deleted_at).length;
};

// Utility function สำหรับนับจำนวน CreditNote ตาม vendor
export const getCreditNoteCountByVendor = (vendorId: string): number => {
  return creditNotes.filter(creditNote => creditNote.vendor_id === vendorId && !creditNote.deleted_at).length;
};

// Utility function สำหรับค้นหา CreditNote แบบ advanced search
export const searchCreditNotes = (searchCriteria: {
  cn_no?: string;
  vendor_id?: string;
  vendor_name?: string;
  doc_status?: CreditNote['doc_status'];
  credit_note_type?: CreditNote['credit_note_type'];
  description?: string;
  note?: string;
  created_by_id?: string;
  last_action_by_id?: string;
  workflow_current_stage?: string;
  last_action?: CreditNote['last_action'];
  is_deleted?: boolean;
  start_date?: string;
  end_date?: string;
}): CreditNote[] => {
  return creditNotes.filter(creditNote => {
    // ตรวจสอบ cn_no
    if (searchCriteria.cn_no && !creditNote.cn_no.toLowerCase().includes(searchCriteria.cn_no.toLowerCase())) {
      return false;
    }
    
    // ตรวจสอบ vendor_id
    if (searchCriteria.vendor_id && creditNote.vendor_id !== searchCriteria.vendor_id) {
      return false;
    }
    
    // ตรวจสอบ vendor_name
    if (searchCriteria.vendor_name && !creditNote.vendor_name.toLowerCase().includes(searchCriteria.vendor_name.toLowerCase())) {
      return false;
    }
    
    // ตรวจสอบ doc_status
    if (searchCriteria.doc_status && creditNote.doc_status !== searchCriteria.doc_status) {
      return false;
    }
    
    // ตรวจสอบ credit_note_type
    if (searchCriteria.credit_note_type && creditNote.credit_note_type !== searchCriteria.credit_note_type) {
      return false;
    }
    
    // ตรวจสอบ description
    if (searchCriteria.description && !creditNote.description.toLowerCase().includes(searchCriteria.description.toLowerCase())) {
      return false;
    }
    
    // ตรวจสอบ note
    if (searchCriteria.note && !creditNote.note.toLowerCase().includes(searchCriteria.note.toLowerCase())) {
      return false;
    }
    
    // ตรวจสอบ created_by_id
    if (searchCriteria.created_by_id && creditNote.created_by_id !== searchCriteria.created_by_id) {
      return false;
    }
    
    // ตรวจสอบ last_action_by_id
    if (searchCriteria.last_action_by_id && creditNote.last_action_by_id !== searchCriteria.last_action_by_id) {
      return false;
    }
    
    // ตรวจสอบ workflow_current_stage
    if (searchCriteria.workflow_current_stage && creditNote.workflow_current_stage !== searchCriteria.workflow_current_stage) {
      return false;
    }
    
    // ตรวจสอบ last_action
    if (searchCriteria.last_action && creditNote.last_action !== searchCriteria.last_action) {
      return false;
    }
    
    // ตรวจสอบสถานะการลบ
    if (searchCriteria.is_deleted !== undefined) {
      const isDeleted = !!creditNote.deleted_at;
      if (isDeleted !== searchCriteria.is_deleted) {
        return false;
      }
    }
    
    // ตรวจสอบช่วงเวลา
    if (searchCriteria.start_date || searchCriteria.end_date) {
      const cnDate = new Date(creditNote.cn_date);
      
      if (searchCriteria.start_date) {
        const startDate = new Date(searchCriteria.start_date);
        if (cnDate < startDate) {
          return false;
        }
      }
      
      if (searchCriteria.end_date) {
        const endDate = new Date(searchCriteria.end_date);
        if (cnDate > endDate) {
          return false;
        }
      }
    }
    
    return true;
  });
};

// Utility function สำหรับตรวจสอบ cn_no ซ้ำ
export const isCreditNoteNoExists = (cnNo: string): boolean => {
  return creditNotes.some(creditNote => creditNote.cn_no === cnNo && !creditNote.deleted_at);
};

// Utility function สำหรับตรวจสอบ cn_no ซ้ำทั้งหมด
export const isCreditNoteNoExistsAll = (cnNo: string): boolean => {
  return creditNotes.some(creditNote => creditNote.cn_no === cnNo);
};

// Utility function สำหรับสร้าง cn_no ใหม่
export const generateCreditNoteNo = (prefix: string = "CN"): string => {
  const now = new Date();
  const year = now.getFullYear();
  const month = (now.getMonth() + 1).toString().padStart(2, '0');
  
  // หา sequence number สูงสุดของเดือนนี้
  const currentMonthCreditNotes = creditNotes.filter(cn => {
    const cnDate = new Date(cn.cn_date);
    return cnDate.getFullYear() === year && (cnDate.getMonth() + 1) === parseInt(month);
  });
  
  const maxSequence = Math.max(0, ...currentMonthCreditNotes.map(cn => {
    const match = cn.cn_no.match(/\d+$/);
    return match ? parseInt(match[0]) : 0;
  }));
  
  const nextSequence = maxSequence + 1;
  return `${prefix}-${year}-${month}-${nextSequence.toString().padStart(3, '0')}`;
};
