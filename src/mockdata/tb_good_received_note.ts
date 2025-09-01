import { generateId, getCurrentTimestamp } from "@/libs/utils";

export interface GoodReceivedNote {
  id: string;
  grn_no: string;
  grn_date: string;
  invoice_no: string;
  invoice_date: string;
  description: string;
  doc_status: 'draft' | 'submitted' | 'approved' | 'rejected' | 'completed';
  doc_type: 'purchase' | 'return' | 'adjustment' | 'other';
  vendor_id: string;
  vendor_name: string;
  currency_id: string;
  currency_name: string;
  currency_rate: string;
  workflow_id: string;
  workflow_name: string;
  workflow_history: any;
  workflow_current_stage: string | null;
  workflow_previous_stage: string | null;
  workflow_next_stage: string | null;
  user_action: any;
  last_action: 'submit' | 'approve' | 'reject' | 'complete';
  last_action_at_date: string;
  last_action_by_id: string;
  last_action_by_name: string;
  is_consignment: boolean;
  is_cash: boolean;
  signature_image_url: string;
  received_by_id: string;
  received_by_name: string;
  received_at: string;
  credit_term_id: string;
  credit_term_name: string;
  credit_term_days: number;
  payment_due_date: string;
  is_active: boolean;
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
}

export const goodReceivedNotes: GoodReceivedNote[] = [
  {
    id: "550e8400-e29b-41d4-a716-446655440001",
    grn_no: "GRN-2024-001",
    grn_date: "2024-01-15",
    invoice_no: "INV-2024-001",
    invoice_date: "2024-01-15",
    description: "Laptop computers delivery",
    doc_status: "completed",
    doc_type: "purchase",
    vendor_id: "550e8400-e29b-41d4-a716-446655440001",
    vendor_name: "Dell Technologies",
    currency_id: "550e8400-e29b-41d4-a716-446655440003",
    currency_name: "Thai Baht",
    currency_rate: "1.00",
    workflow_id: "550e8400-e29b-41d4-a716-446655440001",
    workflow_name: "Standard GRN Workflow",
    workflow_history: { stages: ["draft", "submitted", "approved", "completed"] },
    workflow_current_stage: "completed",
    workflow_previous_stage: "approved",
    workflow_next_stage: null,
    user_action: { action: "complete", timestamp: "2024-01-15T10:30:00Z" },
    last_action: "complete",
    last_action_at_date: "2024-01-15T10:30:00Z",
    last_action_by_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    last_action_by_name: "John Doe",
    is_consignment: false,
    is_cash: false,
    signature_image_url: "/signatures/grn-001.jpg",
    received_by_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    received_by_name: "John Doe",
    received_at: "2024-01-15T10:30:00Z",
    credit_term_id: "550e8400-e29b-41d4-a716-446655440001",
    credit_term_name: "Net 30",
    credit_term_days: 30,
    payment_due_date: "2024-02-14",
    is_active: true,
    note: "Standard delivery received",
    info: { total_amount: 15000.00, location_id: "550e8400-e29b-41d4-a716-446655440001" },
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
    grn_no: "GRN-2024-002",
    grn_date: "2024-01-16",
    invoice_no: "INV-2024-002",
    invoice_date: "2024-01-16",
    description: "Office furniture delivery",
    doc_status: "submitted",
    doc_type: "purchase",
    vendor_id: "550e8400-e29b-41d4-a716-446655440002",
    vendor_name: "Office Supplies Co.",
    currency_id: "550e8400-e29b-41d4-a716-446655440003",
    currency_name: "Thai Baht",
    currency_rate: "1.00",
    workflow_id: "550e8400-e29b-41d4-a716-446655440001",
    workflow_name: "Standard GRN Workflow",
    workflow_history: { stages: ["draft", "submitted"] },
    workflow_current_stage: "submitted",
    workflow_previous_stage: "draft",
    workflow_next_stage: "approved",
    user_action: { action: "submit", timestamp: "2024-01-16T10:30:00Z" },
    last_action: "submit",
    last_action_at_date: "2024-01-16T10:30:00Z",
    last_action_by_id: "1bfdb891-58ee-499c-8115-34a964de8122",
    last_action_by_name: "Jane Smith",
    is_consignment: false,
    is_cash: false,
    signature_image_url: "/signatures/grn-002.jpg",
    received_by_id: "1bfdb891-58ee-499c-8115-34a964de8122",
    received_by_name: "Jane Smith",
    received_at: "2024-01-16T10:30:00Z",
    credit_term_id: "550e8400-e29b-41d4-a716-446655440002",
    credit_term_name: "Net 45",
    credit_term_days: 45,
    payment_due_date: "2024-02-29",
    is_active: true,
    note: "Awaiting quality inspection",
    info: { total_amount: 8500.00, location_id: "550e8400-e29b-41d4-a716-446655440002" },
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
    grn_no: "GRN-2024-003",
    grn_date: "2024-01-17",
    invoice_no: "INV-2024-003",
    invoice_date: "2024-01-17",
    description: "Printer delivery",
    doc_status: "rejected",
    doc_type: "purchase",
    vendor_id: "550e8400-e29b-41d4-a716-446655440003",
    vendor_name: "PrintTech Solutions",
    currency_id: "550e8400-e29b-41d4-a716-446655440003",
    currency_name: "Thai Baht",
    currency_rate: "1.00",
    workflow_id: "550e8400-e29b-41d4-a716-446655440001",
    workflow_name: "Standard GRN Workflow",
    workflow_history: { stages: ["draft", "submitted", "rejected"] },
    workflow_current_stage: "rejected",
    workflow_previous_stage: "submitted",
    workflow_next_stage: null,
    user_action: { action: "reject", timestamp: "2024-01-17T10:30:00Z" },
    last_action: "reject",
    last_action_at_date: "2024-01-17T10:30:00Z",
    last_action_by_id: "3c5280a7-492e-421d-b739-7447455ce99e",
    last_action_by_name: "Bob Johnson",
    is_consignment: false,
    is_cash: false,
    signature_image_url: "/signatures/grn-003.jpg",
    received_by_id: "3c5280a7-492e-421d-b739-7447455ce99e",
    received_by_name: "Bob Johnson",
    received_at: "2024-01-17T10:30:00Z",
    credit_term_id: "550e8400-e29b-41d4-a716-446655440003",
    credit_term_name: "Net 30",
    credit_term_days: 30,
    payment_due_date: "2024-02-16",
    is_active: false,
    note: "Quality issues found, returned to vendor",
    info: { total_amount: 12000.00, location_id: "550e8400-e29b-41d4-a716-446655440003" },
    dimension: null,
    doc_version: "1.0",
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "3c5280a7-492e-421d-b739-7447455ce99e",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null
  }
];

// CREATE - สร้าง GoodReceivedNote ใหม่
export const createGoodReceivedNote = (goodReceivedNoteData: Omit<GoodReceivedNote, 'id' | 'created_at' | 'updated_at'>): GoodReceivedNote => {
  const newGoodReceivedNote: GoodReceivedNote = {
    ...goodReceivedNoteData,
    id: generateId(),
    created_at: getCurrentTimestamp(),
    updated_at: getCurrentTimestamp()
  };
  
  goodReceivedNotes.push(newGoodReceivedNote);
  return newGoodReceivedNote;
};

// READ - อ่าน GoodReceivedNote ทั้งหมด
export const getAllGoodReceivedNotes = (): GoodReceivedNote[] => {
  return [...goodReceivedNotes];
};

// READ - อ่าน GoodReceivedNote ตาม ID
export const getGoodReceivedNoteById = (id: string): GoodReceivedNote | undefined => {
  return goodReceivedNotes.find(grn => grn.id === id);
};

// READ - อ่าน GoodReceivedNote ตาม GRN number
export const getGoodReceivedNoteByNumber = (grnNumber: string): GoodReceivedNote | undefined => {
  return goodReceivedNotes.find(grn => grn.grn_no === grnNumber);
};

// READ - อ่าน GoodReceivedNote ตาม vendor_id
export const getGoodReceivedNotesByVendor = (vendorId: string): GoodReceivedNote[] => {
  return goodReceivedNotes.filter(grn => grn.vendor_id === vendorId);
};

// READ - อ่าน GoodReceivedNote ตาม location_id
export const getGoodReceivedNotesByLocation = (locationId: string): GoodReceivedNote[] => {
  return goodReceivedNotes.filter(grn => grn.info?.location_id === locationId);
};

// READ - อ่าน GoodReceivedNote ตาม status
export const getGoodReceivedNotesByStatus = (status: string): GoodReceivedNote[] => {
  return goodReceivedNotes.filter(grn => grn.doc_status === status);
};

// READ - อ่าน GoodReceivedNote ตาม received_date
export const getGoodReceivedNotesByDate = (receivedDate: string): GoodReceivedNote[] => {
  return goodReceivedNotes.filter(grn => grn.received_at === receivedDate);
};

// READ - อ่าน GoodReceivedNote ตาม date range
export const getGoodReceivedNotesByDateRange = (startDate: string, endDate: string): GoodReceivedNote[] => {
  return goodReceivedNotes.filter(grn => 
    grn.received_at >= startDate && grn.received_at <= endDate
  );
};

// READ - อ่าน GoodReceivedNote ตาม currency_id
export const getGoodReceivedNotesByCurrency = (currencyId: string): GoodReceivedNote[] => {
  return goodReceivedNotes.filter(grn => grn.currency_id === currencyId);
};

// READ - อ่าน GoodReceivedNote ตาม amount range
export const getGoodReceivedNotesByAmountRange = (minAmount: number, maxAmount: number): GoodReceivedNote[] => {
  return goodReceivedNotes.filter(grn => 
    grn.info?.total_amount >= minAmount && grn.info?.total_amount <= maxAmount
  );
};

// READ - อ่าน GoodReceivedNote ที่มี notes
export const getGoodReceivedNotesWithNotes = (): GoodReceivedNote[] => {
  return goodReceivedNotes.filter(grn => grn.note && grn.note.trim() !== '');
};

// READ - ค้นหา GoodReceivedNote แบบ fuzzy search
export const searchGoodReceivedNotes = (searchTerm: string): GoodReceivedNote[] => {
  const lowerSearchTerm = searchTerm.toLowerCase();
  return goodReceivedNotes.filter(grn => 
    grn.grn_no.toLowerCase().includes(lowerSearchTerm) ||
    (grn.note && grn.note.toLowerCase().includes(lowerSearchTerm))
  );
};

// UPDATE - อัปเดต GoodReceivedNote
export const updateGoodReceivedNote = (id: string, updateData: Partial<Omit<GoodReceivedNote, 'id' | 'created_at' | 'created_by_id'>>): GoodReceivedNote | null => {
  const index = goodReceivedNotes.findIndex(grn => grn.id === id);
  
  if (index === -1) {
    return null;
  }
  
  goodReceivedNotes[index] = {
    ...goodReceivedNotes[index],
    ...updateData,
    updated_at: getCurrentTimestamp()
  };
  
  return goodReceivedNotes[index];
};

// UPDATE - อัปเดต GoodReceivedNote status
export const updateGoodReceivedNoteStatus = (id: string, status: string): GoodReceivedNote | null => {
  return updateGoodReceivedNote(id, { doc_status: status as 'draft' | 'submitted' | 'approved' | 'rejected' | 'completed' });
};

// UPDATE - อัปเดต GoodReceivedNote received_date
export const updateGoodReceivedNoteDate = (id: string, receivedDate: string): GoodReceivedNote | null => {
  return updateGoodReceivedNote(id, { received_at: receivedDate });
};

// UPDATE - อัปเดต GoodReceivedNote total_amount
export const updateGoodReceivedNoteAmount = (id: string, totalAmount: number): GoodReceivedNote | null => {
  return updateGoodReceivedNote(id, { info: { ...goodReceivedNotes.find(grn => grn.id === id)?.info, total_amount: totalAmount } });
};

// UPDATE - อัปเดต GoodReceivedNote notes
export const updateGoodReceivedNoteNotes = (id: string, notes: string): GoodReceivedNote | null => {
  return updateGoodReceivedNote(id, { note: notes });
};

// UPDATE - อัปเดต GoodReceivedNote vendor
export const updateGoodReceivedNoteVendor = (id: string, vendorId: string): GoodReceivedNote | null => {
  return updateGoodReceivedNote(id, { vendor_id: vendorId });
};

// UPDATE - อัปเดต GoodReceivedNote location
export const updateGoodReceivedNoteLocation = (id: string, locationId: string): GoodReceivedNote | null => {
  return updateGoodReceivedNote(id, { info: { ...goodReceivedNotes.find(grn => grn.id === id)?.info, location_id: locationId } });
};

// UPDATE - อัปเดต GoodReceivedNote currency
export const updateGoodReceivedNoteCurrency = (id: string, currencyId: string): GoodReceivedNote | null => {
  return updateGoodReceivedNote(id, { currency_id: currencyId });
};

// DELETE - ลบ GoodReceivedNote (soft delete)
export const deleteGoodReceivedNote = (id: string, deletedById: string): boolean => {
  const index = goodReceivedNotes.findIndex(grn => grn.id === id);
  
  if (index === -1) {
    return false;
  }
  
  goodReceivedNotes[index] = {
    ...goodReceivedNotes[index],
    deleted_at: getCurrentTimestamp(),
    deleted_by_id: deletedById
  };
  
  return true;
};

// DELETE - ลบ GoodReceivedNote แบบถาวร
export const hardDeleteGoodReceivedNote = (id: string): boolean => {
  const index = goodReceivedNotes.findIndex(grn => grn.id === id);
  
  if (index === -1) {
    return false;
  }
  
  goodReceivedNotes.splice(index, 1);
  return true;
};

// DELETE - ลบ GoodReceivedNote ตาม GRN number
export const deleteGoodReceivedNoteByNumber = (grnNumber: string, deletedById: string): boolean => {
  const grn = getGoodReceivedNoteByNumber(grnNumber);
  if (grn) {
    return deleteGoodReceivedNote(grn.id, deletedById);
  }
  return false;
};

// DELETE - ลบ GoodReceivedNote ตาม vendor_id
export const deleteGoodReceivedNotesByVendor = (vendorId: string, deletedById: string): number => {
  let deletedCount = 0;
  
  goodReceivedNotes.forEach(grn => {
    if (grn.vendor_id === vendorId && !grn.deleted_at) {
      grn.deleted_at = getCurrentTimestamp();
      grn.deleted_by_id = deletedById;
      deletedCount++;
    }
  });
  
  return deletedCount;
};

// DELETE - ลบ GoodReceivedNote ตาม location_id
export const deleteGoodReceivedNotesByLocation = (locationId: string, deletedById: string): number => {
  let deletedCount = 0;
  
  goodReceivedNotes.forEach(grn => {
    if (grn.info?.location_id === locationId && !grn.deleted_at) {
      grn.deleted_at = getCurrentTimestamp();
      grn.deleted_by_id = deletedById;
      deletedCount++;
    }
  });
  
  return deletedCount;
};

// DELETE - ลบ GoodReceivedNote ตาม status
export const deleteGoodReceivedNotesByStatus = (status: string, deletedById: string): number => {
  let deletedCount = 0;
  
  goodReceivedNotes.forEach(grn => {
    if (grn.doc_status === status && !grn.deleted_at) {
      grn.deleted_at = getCurrentTimestamp();
      grn.deleted_by_id = deletedById;
      deletedCount++;
    }
  });
  
  return deletedCount;
};

// Utility function สำหรับล้างข้อมูลทั้งหมด (ใช้สำหรับ testing)
export const clearAllGoodReceivedNotes = (): void => {
  goodReceivedNotes.length = 0;
};

// Utility function สำหรับนับจำนวน GoodReceivedNote
export const getGoodReceivedNoteCount = (): number => {
  return goodReceivedNotes.length;
};

// Utility function สำหรับนับจำนวน GoodReceivedNote ตาม status
export const getGoodReceivedNoteCountByStatus = (status: string): number => {
  return goodReceivedNotes.filter(grn => grn.doc_status === status).length;
};

// Utility function สำหรับนับจำนวน GoodReceivedNote ตาม vendor_id
export const getGoodReceivedNoteCountByVendor = (vendorId: string): number => {
  return goodReceivedNotes.filter(grn => grn.vendor_id === vendorId).length;
};

// Utility function สำหรับนับจำนวน GoodReceivedNote ตาม location_id
export const getGoodReceivedNoteCountByLocation = (locationId: string): number => {
  return goodReceivedNotes.filter(grn => grn.info?.location_id === locationId).length;
};

// Utility function สำหรับนับจำนวน GoodReceivedNote ตาม currency_id
export const getGoodReceivedNoteCountByCurrency = (currencyId: string): number => {
  return goodReceivedNotes.filter(grn => grn.currency_id === currencyId).length;
};

// Utility function สำหรับตรวจสอบ GoodReceivedNote GRN number ซ้ำ
export const isGoodReceivedNoteNumberExists = (grnNumber: string): boolean => {
  return goodReceivedNotes.some(grn => grn.grn_no === grnNumber);
};

// Utility function สำหรับตรวจสอบ GoodReceivedNote ที่ถูกลบแล้ว
export const getDeletedGoodReceivedNotes = (): GoodReceivedNote[] => {
  return goodReceivedNotes.filter(grn => grn.deleted_at !== null);
};

// Utility function สำหรับกู้คืน GoodReceivedNote ที่ถูกลบแล้ว
export const restoreGoodReceivedNote = (id: string): boolean => {
  const index = goodReceivedNotes.findIndex(grn => grn.id === id);
  
  if (index === -1) {
    return false;
  }
  
  if (goodReceivedNotes[index].deleted_at) {
    goodReceivedNotes[index] = {
      ...goodReceivedNotes[index],
      deleted_at: null,
      deleted_by_id: null
    };
    return true;
  }
  
  return false;
};

// Utility function สำหรับค้นหา GoodReceivedNote แบบ advanced search
export const searchGoodReceivedNotesAdvanced = (searchCriteria: {
  grn_number?: string;
  vendor_id?: string;
  location_id?: string;
  status?: string;
  received_date?: string;
  currency_id?: string;
  min_amount?: number;
  max_amount?: number;
  has_notes?: boolean;
}): GoodReceivedNote[] => {
  return goodReceivedNotes.filter(grn => {
    if (searchCriteria.grn_number && !grn.grn_no.toLowerCase().includes(searchCriteria.grn_number.toLowerCase())) {
      return false;
    }
    
    if (searchCriteria.vendor_id && grn.vendor_id !== searchCriteria.vendor_id) {
      return false;
    }
    
    if (searchCriteria.location_id && grn.info?.location_id !== searchCriteria.location_id) {
      return false;
    }
    
    if (searchCriteria.status && grn.doc_status !== searchCriteria.status) {
      return false;
    }
    
    if (searchCriteria.received_date && grn.received_at !== searchCriteria.received_date) {
      return false;
    }
    
    if (searchCriteria.currency_id && grn.currency_id !== searchCriteria.currency_id) {
      return false;
    }
    
    if (searchCriteria.min_amount && grn.info?.total_amount < searchCriteria.min_amount) {
      return false;
    }
    
    if (searchCriteria.max_amount && grn.info?.total_amount > searchCriteria.max_amount) {
      return false;
    }
    
    if (searchCriteria.has_notes !== undefined) {
        const hasNotes = grn.note && grn.note.trim() !== '';
      if (hasNotes !== searchCriteria.has_notes) {
        return false;
      }
    }
    
    return true;
  });
};
