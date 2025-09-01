import { generateId, getCurrentTimestamp } from "@/libs/utils";

export interface StockOut {
  id: string;
  so_no: string;
  description: string;
  doc_status: 'draft' | 'submitted' | 'approved' | 'rejected' | 'completed';
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

// Sample data
export const stockOuts: StockOut[] = [
  {
    id: 'so-001',
    so_no: 'SO-2024-001',
    description: 'IT Equipment Distribution',
    doc_status: 'completed',
    workflow_id: 'wf-002',
    workflow_name: 'Stock Out Approval',
    workflow_history: [
      { stage: 'draft', date: '2024-01-10T09:00:00Z', user: 'user-001' },
      { stage: 'submitted', date: '2024-01-10T10:00:00Z', user: 'user-001' },
      { stage: 'approved', date: '2024-01-10T14:00:00Z', user: 'user-002' },
      { stage: 'completed', date: '2024-01-11T08:00:00Z', user: 'user-003' }
    ],
    workflow_current_stage: 'completed',
    workflow_previous_stage: 'approved',
    workflow_next_stage: '',
    user_action: { can_edit: false, can_delete: false, can_approve: false },
    last_action: 'complete',
    last_action_at_date: '2024-01-11T08:00:00Z',
    last_action_by_id: 'user-003',
    last_action_by_name: 'Warehouse Manager',
    note: 'IT equipment distributed to new employees',
    info: { category: 'IT', priority: 'high', department: 'IT Department' },
    dimension: { cost_center: 'IT-001', project: 'New Hire Setup' },
    doc_version: '1',
    created_at: '2024-01-10T09:00:00Z',
    created_by_id: 'user-001',
    updated_at: '2024-01-11T08:00:00Z',
    updated_by_id: 'user-003',
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: 'so-002',
    so_no: 'SO-2024-002',
    description: 'Office Supplies Distribution',
    doc_status: 'approved',
    workflow_id: 'wf-002',
    workflow_name: 'Stock Out Approval',
    workflow_history: [
      { stage: 'draft', date: '2024-01-18T08:00:00Z', user: 'user-004' },
      { stage: 'submitted', date: '2024-01-18T09:00:00Z', user: 'user-004' },
      { stage: 'approved', date: '2024-01-18T16:00:00Z', user: 'user-002' }
    ],
    workflow_current_stage: 'approved',
    workflow_previous_stage: 'submitted',
    workflow_next_stage: 'completed',
    user_action: { can_edit: false, can_delete: false, can_approve: false },
    last_action: 'approve',
    last_action_at_date: '2024-01-18T16:00:00Z',
    last_action_by_id: 'user-002',
    last_action_by_name: 'Department Head',
    note: 'Office supplies for various departments',
    info: { category: 'Office Supplies', priority: 'medium', department: 'Admin Department' },
    dimension: { cost_center: 'ADMIN-001', project: 'Department Supplies' },
    doc_version: '1',
    created_at: '2024-01-18T08:00:00Z',
    created_by_id: 'user-004',
    updated_at: '2024-01-18T16:00:00Z',
    updated_by_id: 'user-002',
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: 'so-003',
    so_no: 'SO-2024-003',
    description: 'Marketing Materials Distribution',
    doc_status: 'draft',
    workflow_id: 'wf-002',
    workflow_name: 'Stock Out Approval',
    workflow_history: [
      { stage: 'draft', date: '2024-01-22T11:00:00Z', user: 'user-005' }
    ],
    workflow_current_stage: 'draft',
    workflow_previous_stage: '',
    workflow_next_stage: 'submitted',
    user_action: { can_edit: true, can_delete: true, can_approve: false },
    last_action: 'submit',
    last_action_at_date: '2024-01-22T11:00:00Z',
    last_action_by_id: 'user-005',
    last_action_by_name: 'Marketing Staff',
    note: 'Marketing materials for Q1 campaign',
    info: { category: 'Marketing', priority: 'low', department: 'Marketing Department' },
    dimension: { cost_center: 'MKT-001', project: 'Q1 Campaign' },
    doc_version: '1',
    created_at: '2024-01-22T11:00:00Z',
    created_by_id: 'user-005',
    updated_at: '2024-01-22T11:00:00Z',
    updated_by_id: 'user-005',
    deleted_at: null,
    deleted_by_id: null
  }
];

// CREATE - สร้าง StockOut ใหม่
export const createStockOut = (data: Omit<StockOut, 'id' | 'created_at' | 'created_by_id' | 'updated_at' | 'updated_by_id'>): StockOut => {
  const newStockOut: StockOut = {
    ...data,
    id: generateId(),
    created_at: getCurrentTimestamp(),
    created_by_id: 'system',
    updated_at: getCurrentTimestamp(),
    updated_by_id: 'system',
    deleted_at: null,
    deleted_by_id: null
  };
  stockOuts.push(newStockOut);
  return newStockOut;
};

// READ - อ่านข้อมูล StockOut
export const getAllStockOuts = (): StockOut[] => {
  return stockOuts.filter(stockOut => !stockOut.deleted_at);
};

export const getStockOutById = (id: string): StockOut | null => {
  const stockOut = stockOuts.find(so => so.id === id && !so.deleted_at);
  return stockOut || null;
};

export const getStockOutByNo = (soNo: string): StockOut | null => {
  const stockOut = stockOuts.find(so => so.so_no === soNo && !so.deleted_at);
  return stockOut || null;
};

export const getStockOutsByStatus = (status: StockOut['doc_status']): StockOut[] => {
  return stockOuts.filter(so => so.doc_status === status && !so.deleted_at);
};

export const getStockOutsByWorkflow = (workflowId: string): StockOut[] => {
  return stockOuts.filter(so => so.workflow_id === workflowId && !so.deleted_at);
};

export const getStockOutsByCreator = (createdById: string): StockOut[] => {
  return stockOuts.filter(so => so.created_by_id === createdById && !so.deleted_at);
};

export const getStockOutsByDateRange = (startDate: string, endDate: string): StockOut[] => {
  return stockOuts.filter(so => {
    const createdDate = new Date(so.created_at);
    const start = new Date(startDate);
    const end = new Date(endDate);
    return createdDate >= start && createdDate <= end && !so.deleted_at;
  });
};

// UPDATE - อัปเดต StockOut
export const updateStockOut = (id: string, data: Partial<Omit<StockOut, 'id' | 'created_at' | 'created_by_id'>>): StockOut | null => {
  const index = stockOuts.findIndex(so => so.id === id && !so.deleted_at);
  if (index === -1) return null;

  stockOuts[index] = {
    ...stockOuts[index],
    ...data,
    updated_at: getCurrentTimestamp(),
    updated_by_id: 'system'
  };
  return stockOuts[index];
};

// UPDATE - อัปเดต StockOut status
export const updateStockOutStatus = (id: string, status: StockOut['doc_status']): StockOut | null => {
  return updateStockOut(id, { doc_status: status });
};

// UPDATE - อัปเดต StockOut workflow
export const updateStockOutWorkflow = (id: string, workflowId: string, workflowName: string): StockOut | null => {
  return updateStockOut(id, { 
    workflow_id: workflowId,
    workflow_name: workflowName
  });
};

// UPDATE - อัปเดต StockOut note
export const updateStockOutNote = (id: string, note: string): StockOut | null => {
  return updateStockOut(id, { note });
};

// UPDATE - อัปเดต StockOut info
export const updateStockOutInfo = (id: string, info: any): StockOut | null => {
  return updateStockOut(id, { info });
};

// UPDATE - อัปเดต StockOut dimension
export const updateStockOutDimension = (id: string, dimension: any): StockOut | null => {
  return updateStockOut(id, { dimension });
};

// DELETE - Soft delete StockOut
export const softDeleteStockOut = (id: string, deletedById: string): StockOut | null => {
  const stockOut = getStockOutById(id);
  if (!stockOut) return null;

  stockOut.deleted_at = getCurrentTimestamp();
  stockOut.deleted_by_id = deletedById;
  stockOut.updated_at = getCurrentTimestamp();
  stockOut.updated_by_id = deletedById;

  return stockOut;
};

// DELETE - Hard delete StockOut
export const hardDeleteStockOut = (id: string): boolean => {
  const index = stockOuts.findIndex(so => so.id === id);
  if (index === -1) return false;

  stockOuts.splice(index, 1);
  return true;
};

// RESTORE - กู้คืน StockOut ที่ถูก soft delete
export const restoreStockOut = (id: string): StockOut | null => {
  const stockOut = stockOuts.find(so => so.id === id);
  if (!stockOut || !stockOut.deleted_at) return null;

  stockOut.deleted_at = null;
  stockOut.deleted_by_id = null;
  stockOut.updated_at = getCurrentTimestamp();
  stockOut.updated_by_id = 'system';

  return stockOut;
};

// ADVANCED SEARCH - ค้นหา StockOut แบบขั้นสูง
export const searchStockOuts = (criteria: {
  status?: StockOut['doc_status'];
  workflowId?: string;
  createdById?: string;
  startDate?: string;
  endDate?: string;
  description?: string;
  note?: string;
}): StockOut[] => {
  return stockOuts.filter(so => {
    if (so.deleted_at) return false;
    
    if (criteria.status && so.doc_status !== criteria.status) return false;
    if (criteria.workflowId && so.workflow_id !== criteria.workflowId) return false;
    if (criteria.createdById && so.created_by_id !== criteria.createdById) return false;
    
    if (criteria.startDate || criteria.endDate) {
      const createdDate = new Date(so.created_at);
      if (criteria.startDate && createdDate < new Date(criteria.startDate)) return false;
      if (criteria.endDate && createdDate > new Date(criteria.endDate)) return false;
    }
    
    if (criteria.description && !so.description.toLowerCase().includes(criteria.description.toLowerCase())) return false;
    if (criteria.note && !so.note.toLowerCase().includes(criteria.note.toLowerCase())) return false;
    
    return true;
  });
};

// UTILITY FUNCTIONS - ฟังก์ชันเสริม
export const getStockOutCount = (): number => {
  return stockOuts.filter(so => !so.deleted_at).length;
};

export const getStockOutCountByStatus = (status: StockOut['doc_status']): number => {
  return stockOuts.filter(so => so.doc_status === status && !so.deleted_at).length;
};

export const isStockOutExists = (id: string): boolean => {
  return stockOuts.some(so => so.id === id && !so.deleted_at);
};

export const isStockOutNoExists = (soNo: string): boolean => {
  return stockOuts.some(so => so.so_no === soNo && !so.deleted_at);
};

export const clearAllStockOuts = (): void => {
  stockOuts.length = 0;
};

export const getNextStockOutNo = (): string => {
  const currentYear = new Date().getFullYear();
  const yearStockOuts = stockOuts.filter(so => 
    so.so_no.includes(`SO-${currentYear}-`) && !so.deleted_at
  );
  
  if (yearStockOuts.length === 0) {
    return `SO-${currentYear}-001`;
  }
  
  const numbers = yearStockOuts.map(so => {
    const match = so.so_no.match(/SO-\d{4}-(\d+)/);
    return match ? parseInt(match[1]) : 0;
  });
  
  const maxNumber = Math.max(...numbers);
  const nextNumber = maxNumber + 1;
  return `SO-${currentYear}-${nextNumber.toString().padStart(3, '0')}`;
};
