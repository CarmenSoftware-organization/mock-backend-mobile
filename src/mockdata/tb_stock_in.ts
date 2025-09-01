import { generateId, getCurrentTimestamp } from "@/libs/utils";

export interface StockIn {
  id: string;
  si_no: string;
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
  updated_by_id: string;
  deleted_at: string | null;
  deleted_by_id: string | null;
}

// Sample data
export const stockIns: StockIn[] = [
  {
    id: 'si-001',
    si_no: 'SI-2024-001',
    description: 'IT Equipment Stock In',
    doc_status: 'completed',
    workflow_id: 'wf-001',
    workflow_name: 'Stock In Approval',
    workflow_history: [
      { stage: 'draft', date: '2024-01-15T10:00:00Z', user: 'user-001' },
      { stage: 'submitted', date: '2024-01-15T11:00:00Z', user: 'user-001' },
      { stage: 'approved', date: '2024-01-15T14:00:00Z', user: 'user-002' },
      { stage: 'completed', date: '2024-01-16T09:00:00Z', user: 'user-003' }
    ],
    workflow_current_stage: 'completed',
    workflow_previous_stage: 'approved',
    workflow_next_stage: '',
    user_action: { can_edit: false, can_delete: false, can_approve: false },
    last_action: 'complete',
    last_action_at_date: '2024-01-16T09:00:00Z',
    last_action_by_id: 'user-003',
    last_action_by_name: 'Warehouse Manager',
    note: 'IT equipment received and verified',
    info: { category: 'IT', priority: 'high', supplier: 'ABC Tech' },
    dimension: { cost_center: 'IT-001', project: 'Office Setup' },
    doc_version: '1',
    created_at: '2024-01-15T10:00:00Z',
    created_by_id: 'user-001',
    updated_at: '2024-01-16T09:00:00Z',
    updated_by_id: 'user-003',
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: 'si-002',
    si_no: 'SI-2024-002',
    description: 'Office Supplies Stock In',
    doc_status: 'approved',
    workflow_id: 'wf-001',
    workflow_name: 'Stock In Approval',
    workflow_history: [
      { stage: 'draft', date: '2024-01-20T09:00:00Z', user: 'user-004' },
      { stage: 'submitted', date: '2024-01-20T10:00:00Z', user: 'user-004' },
      { stage: 'approved', date: '2024-01-20T15:00:00Z', user: 'user-002' }
    ],
    workflow_current_stage: 'approved',
    workflow_previous_stage: 'submitted',
    workflow_next_stage: 'completed',
    user_action: { can_edit: false, can_delete: false, can_approve: false },
    last_action: 'approve',
    last_action_at_date: '2024-01-20T15:00:00Z',
    last_action_by_id: 'user-002',
    last_action_by_name: 'Department Head',
    note: 'Office supplies for Q1 2024',
    info: { category: 'Office Supplies', priority: 'medium', supplier: 'Office Plus' },
    dimension: { cost_center: 'ADMIN-001', project: 'Q1 Supplies' },
    doc_version: '1',
    created_at: '2024-01-20T09:00:00Z',
    created_by_id: 'user-004',
    updated_at: '2024-01-20T15:00:00Z',
    updated_by_id: 'user-002',
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: 'si-003',
    si_no: 'SI-2024-003',
    description: 'Marketing Materials Stock In',
    doc_status: 'draft',
    workflow_id: 'wf-001',
    workflow_name: 'Stock In Approval',
    workflow_history: [
      { stage: 'draft', date: '2024-01-25T14:00:00Z', user: 'user-005' }
    ],
    workflow_current_stage: 'draft',
    workflow_previous_stage: '',
    workflow_next_stage: 'submitted',
    user_action: { can_edit: true, can_delete: true, can_approve: false },
    last_action: 'submit',
    last_action_at_date: '2024-01-25T14:00:00Z',
    last_action_by_id: 'user-005',
    last_action_by_name: 'Marketing Staff',
    note: 'Marketing materials for Q1 campaign',
    info: { category: 'Marketing', priority: 'low', supplier: 'Print Pro' },
    dimension: { cost_center: 'MKT-001', project: 'Q1 Campaign' },
    doc_version: '1',
    created_at: '2024-01-25T14:00:00Z',
    created_by_id: 'user-005',
    updated_at: '2024-01-25T14:00:00Z',
    updated_by_id: 'user-005',
    deleted_at: null,
    deleted_by_id: null
  }
];

// CREATE - สร้าง StockIn ใหม่
export const createStockIn = (data: Omit<StockIn, 'id' | 'created_at' | 'created_by_id' | 'updated_at' | 'updated_by_id'>): StockIn => {
  const newStockIn: StockIn = {
    ...data,
    id: generateId(),
    created_at: getCurrentTimestamp(),
    created_by_id: 'system',
    updated_at: getCurrentTimestamp(),
    updated_by_id: 'system'
  };
  stockIns.push(newStockIn);
  return newStockIn;
};

// READ - อ่านข้อมูล StockIn
export const getAllStockIns = (): StockIn[] => {
  return stockIns.filter(stockIn => !stockIn.deleted_at);
};

export const getStockInById = (id: string): StockIn | null => {
  const stockIn = stockIns.find(si => si.id === id && !si.deleted_at);
  return stockIn || null;
};

export const getStockInByNo = (siNo: string): StockIn | null => {
  const stockIn = stockIns.find(si => si.si_no === siNo && !si.deleted_at);
  return stockIn || null;
};

export const getStockInsByStatus = (status: StockIn['doc_status']): StockIn[] => {
  return stockIns.filter(si => si.doc_status === status && !si.deleted_at);
};

export const getStockInsByWorkflow = (workflowId: string): StockIn[] => {
  return stockIns.filter(si => si.workflow_id === workflowId && !si.deleted_at);
};

export const getStockInsByCreator = (createdById: string): StockIn[] => {
  return stockIns.filter(si => si.created_by_id === createdById && !si.deleted_at);
};

export const getStockInsByDateRange = (startDate: string, endDate: string): StockIn[] => {
  return stockIns.filter(si => {
    const createdDate = new Date(si.created_at);
    const start = new Date(startDate);
    const end = new Date(endDate);
    return createdDate >= start && createdDate <= end && !si.deleted_at;
  });
};

// UPDATE - อัปเดต StockIn
export const updateStockIn = (id: string, data: Partial<Omit<StockIn, 'id' | 'created_at' | 'created_by_id'>>): StockIn | null => {
  const index = stockIns.findIndex(si => si.id === id && !si.deleted_at);
  if (index === -1) return null;

  stockIns[index] = {
    ...stockIns[index],
    ...data,
    updated_at: getCurrentTimestamp(),
    updated_by_id: 'system'
  };
  return stockIns[index];
};

// UPDATE - อัปเดต StockIn status
export const updateStockInStatus = (id: string, status: StockIn['doc_status']): StockIn | null => {
  return updateStockIn(id, { doc_status: status });
};

// UPDATE - อัปเดต StockIn workflow
export const updateStockInWorkflow = (id: string, workflowId: string, workflowName: string): StockIn | null => {
  return updateStockIn(id, { 
    workflow_id: workflowId,
    workflow_name: workflowName
  });
};

// UPDATE - อัปเดต StockIn note
export const updateStockInNote = (id: string, note: string): StockIn | null => {
  return updateStockIn(id, { note });
};

// UPDATE - อัปเดต StockIn info
export const updateStockInInfo = (id: string, info: any): StockIn | null => {
  return updateStockIn(id, { info });
};

// UPDATE - อัปเดต StockIn dimension
export const updateStockInDimension = (id: string, dimension: any): StockIn | null => {
  return updateStockIn(id, { dimension });
};

// DELETE - Soft delete StockIn
export const softDeleteStockIn = (id: string, deletedById: string): StockIn | null => {
  const stockIn = getStockInById(id);
  if (!stockIn) return null;

  stockIn.deleted_at = getCurrentTimestamp();
  stockIn.deleted_by_id = deletedById;
  stockIn.updated_at = getCurrentTimestamp();
  stockIn.updated_by_id = deletedById;

  return stockIn;
};

// DELETE - Hard delete StockIn
export const hardDeleteStockIn = (id: string): boolean => {
  const index = stockIns.findIndex(si => si.id === id);
  if (index === -1) return false;

  stockIns.splice(index, 1);
  return true;
};

// RESTORE - กู้คืน StockIn ที่ถูก soft delete
export const restoreStockIn = (id: string): StockIn | null => {
  const stockIn = stockIns.find(si => si.id === id);
  if (!stockIn || !stockIn.deleted_at) return null;

  stockIn.deleted_at = null;
  stockIn.deleted_by_id = null;
  stockIn.updated_at = getCurrentTimestamp();
  stockIn.updated_by_id = 'system';

  return stockIn;
};

// ADVANCED SEARCH - ค้นหา StockIn แบบขั้นสูง
export const searchStockIns = (criteria: {
  status?: StockIn['doc_status'];
  workflowId?: string;
  createdById?: string;
  startDate?: string;
  endDate?: string;
  description?: string;
  note?: string;
}): StockIn[] => {
  return stockIns.filter(si => {
    if (si.deleted_at) return false;
    
    if (criteria.status && si.doc_status !== criteria.status) return false;
    if (criteria.workflowId && si.workflow_id !== criteria.workflowId) return false;
    if (criteria.createdById && si.created_by_id !== criteria.createdById) return false;
    
    if (criteria.startDate || criteria.endDate) {
      const createdDate = new Date(si.created_at);
      if (criteria.startDate && createdDate < new Date(criteria.startDate)) return false;
      if (criteria.endDate && createdDate > new Date(criteria.endDate)) return false;
    }
    
    if (criteria.description && !si.description.toLowerCase().includes(criteria.description.toLowerCase())) return false;
    if (criteria.note && !si.note.toLowerCase().includes(criteria.note.toLowerCase())) return false;
    
    return true;
  });
};

// UTILITY FUNCTIONS - ฟังก์ชันเสริม
export const getStockInCount = (): number => {
  return stockIns.filter(si => !si.deleted_at).length;
};

export const getStockInCountByStatus = (status: StockIn['doc_status']): number => {
  return stockIns.filter(si => si.doc_status === status && !si.deleted_at).length;
};

export const isStockInExists = (id: string): boolean => {
  return stockIns.some(si => si.id === id && !si.deleted_at);
};

export const isStockInNoExists = (siNo: string): boolean => {
  return stockIns.some(si => si.si_no === siNo && !si.deleted_at);
};

export const clearAllStockIns = (): void => {
  stockIns.length = 0;
};

export const getNextStockInNo = (): string => {
  const currentYear = new Date().getFullYear();
  const yearStockIns = stockIns.filter(si => 
    si.si_no.includes(`SI-${currentYear}-`) && !si.deleted_at
  );
  
  if (yearStockIns.length === 0) {
    return `SI-${currentYear}-001`;
  }
  
  const numbers = yearStockIns.map(si => {
    const match = si.si_no.match(/SI-\d{4}-(\d+)/);
    return match ? parseInt(match[1]) : 0;
  });
  
  const maxNumber = Math.max(...numbers);
  const nextNumber = maxNumber + 1;
  return `SI-${currentYear}-${nextNumber.toString().padStart(3, '0')}`;
};
