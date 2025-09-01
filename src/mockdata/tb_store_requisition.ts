import { generateId, getCurrentTimestamp } from "@/libs/utils";

export interface StoreRequisition {
  id: string;
  sr_no: string;
  sr_date: string;
  expected_date: string;
  description: string;
  doc_status: 'draft' | 'submitted' | 'approved' | 'rejected' | 'completed';
  from_location_id: string;
  from_location_name: string;
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
  requestor_id: string;
  requestor_name: string;
  department_id: string;
  department_name: string;
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
export const storeRequisitions: StoreRequisition[] = [
  {
    id: 'sr-001',
    sr_no: 'SR-2024-001',
    sr_date: '2024-01-15',
    expected_date: '2024-01-20',
    description: 'Kitchen supplies for daily operations',
    doc_status: 'approved',
    from_location_id: 'loc-kitchen-001',
    from_location_name: 'Kitchen Storage',
    workflow_id: 'wf-004',
    workflow_name: 'Store Requisition Approval',
    workflow_history: [
      { stage: 'draft', date: '2024-01-15T10:00:00Z', user: 'user-001' },
      { stage: 'submitted', date: '2024-01-15T11:00:00Z', user: 'user-001' },
      { stage: 'approved', date: '2024-01-15T15:00:00Z', user: 'user-002' }
    ],
    workflow_current_stage: 'approved',
    workflow_previous_stage: 'submitted',
    workflow_next_stage: 'completed',
    user_action: { can_edit: false, can_delete: false, can_approve: false },
    last_action: 'approve',
    last_action_at_date: '2024-01-15T15:00:00Z',
    last_action_by_id: 'user-002',
    last_action_by_name: 'Kitchen Manager',
    requestor_id: 'user-001',
    requestor_name: 'Kitchen Staff',
    department_id: 'dept-kitchen',
    department_name: 'Kitchen Department',
    info: { category: 'Kitchen Supplies', priority: 'high', items: ['cleaning supplies', 'cooking ingredients'] },
    dimension: { cost_center: 'KITCHEN-001', project: 'Daily Operations' },
    doc_version: '1',
    created_at: '2024-01-15T10:00:00Z',
    created_by_id: 'user-001',
    updated_at: '2024-01-15T15:00:00Z',
    updated_by_id: 'user-002',
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: 'sr-002',
    sr_no: 'SR-2024-002',
    sr_date: '2024-01-16',
    expected_date: '2024-01-22',
    description: 'Front office stationery supplies',
    doc_status: 'completed',
    from_location_id: 'loc-office-001',
    from_location_name: 'Office Storage',
    workflow_id: 'wf-004',
    workflow_name: 'Store Requisition Approval',
    workflow_history: [
      { stage: 'draft', date: '2024-01-16T09:00:00Z', user: 'user-003' },
      { stage: 'submitted', date: '2024-01-16T10:00:00Z', user: 'user-003' },
      { stage: 'approved', date: '2024-01-16T14:00:00Z', user: 'user-002' },
      { stage: 'completed', date: '2024-01-17T09:00:00Z', user: 'user-004' }
    ],
    workflow_current_stage: 'completed',
    workflow_previous_stage: 'approved',
    workflow_next_stage: '',
    user_action: { can_edit: false, can_delete: false, can_approve: false },
    last_action: 'complete',
    last_action_at_date: '2024-01-17T09:00:00Z',
    last_action_by_id: 'user-004',
    last_action_by_name: 'Office Manager',
    requestor_id: 'user-003',
    requestor_name: 'Front Office Staff',
    department_id: 'dept-office',
    department_name: 'Office Department',
    info: { category: 'Office Supplies', priority: 'medium', items: ['stationery', 'paper', 'pens'] },
    dimension: { cost_center: 'OFFICE-001', project: 'Monthly Supplies' },
    doc_version: '1',
    created_at: '2024-01-16T09:00:00Z',
    created_by_id: 'user-003',
    updated_at: '2024-01-17T09:00:00Z',
    updated_by_id: 'user-004',
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: 'sr-003',
    sr_no: 'SR-2024-003',
    sr_date: '2024-01-17',
    expected_date: '2024-01-19',
    description: 'Marketing materials for Q1 campaign',
    doc_status: 'draft',
    from_location_id: 'loc-marketing-001',
    from_location_name: 'Marketing Storage',
    workflow_id: 'wf-004',
    workflow_name: 'Store Requisition Approval',
    workflow_history: [
      { stage: 'draft', date: '2024-01-17T14:00:00Z', user: 'user-005' }
    ],
    workflow_current_stage: 'draft',
    workflow_previous_stage: '',
    workflow_next_stage: 'submitted',
    user_action: { can_edit: true, can_delete: true, can_approve: false },
    last_action: 'submit',
    last_action_at_date: '2024-01-17T14:00:00Z',
    last_action_by_id: 'user-005',
    last_action_by_name: 'Marketing Staff',
    requestor_id: 'user-005',
    requestor_name: 'Marketing Staff',
    department_id: 'dept-marketing',
    department_name: 'Marketing Department',
    info: { category: 'Marketing Materials', priority: 'low', items: ['brochures', 'banners', 'promotional items'] },
    dimension: { cost_center: 'MKT-001', project: 'Q1 Campaign' },
    doc_version: '1',
    created_at: '2024-01-17T14:00:00Z',
    created_by_id: 'user-005',
    updated_at: '2024-01-17T14:00:00Z',
    updated_by_id: 'user-005',
    deleted_at: null,
    deleted_by_id: null
  }
];

// CREATE - สร้าง StoreRequisition ใหม่
export const createStoreRequisition = (data: Omit<StoreRequisition, 'id' | 'created_at' | 'created_by_id' | 'updated_at' | 'updated_by_id'>): StoreRequisition => {
  const newStoreRequisition: StoreRequisition = {
    ...data,
    id: generateId(),
    created_at: getCurrentTimestamp(),
    created_by_id: 'system',
    updated_at: getCurrentTimestamp(),
    updated_by_id: 'system',
    deleted_at: null,
    deleted_by_id: null
  };
  storeRequisitions.push(newStoreRequisition);
  return newStoreRequisition;
};

// READ - อ่านข้อมูล StoreRequisition
export const getAllStoreRequisitions = (): StoreRequisition[] => {
  return storeRequisitions.filter(sr => !sr.deleted_at);
};

export const getStoreRequisitionById = (id: string): StoreRequisition | null => {
  const storeRequisition = storeRequisitions.find(sr => sr.id === id && !sr.deleted_at);
  return storeRequisition || null;
};

export const getStoreRequisitionByNo = (srNo: string): StoreRequisition | null => {
  const storeRequisition = storeRequisitions.find(sr => sr.sr_no === srNo && !sr.deleted_at);
  return storeRequisition || null;
};

export const getStoreRequisitionsByStatus = (status: StoreRequisition['doc_status']): StoreRequisition[] => {
  return storeRequisitions.filter(sr => sr.doc_status === status && !sr.deleted_at);
};

export const getStoreRequisitionsByWorkflow = (workflowId: string): StoreRequisition[] => {
  return storeRequisitions.filter(sr => sr.workflow_id === workflowId && !sr.deleted_at);
};

export const getStoreRequisitionsByRequestor = (requestorId: string): StoreRequisition[] => {
  return storeRequisitions.filter(sr => sr.requestor_id === requestorId && !sr.deleted_at);
};

export const getStoreRequisitionsByDepartment = (departmentId: string): StoreRequisition[] => {
  return storeRequisitions.filter(sr => sr.department_id === departmentId && !sr.deleted_at);
};

export const getStoreRequisitionsByLocation = (locationId: string): StoreRequisition[] => {
  return storeRequisitions.filter(sr => sr.from_location_id === locationId && !sr.deleted_at);
};

export const getStoreRequisitionsByDateRange = (startDate: string, endDate: string): StoreRequisition[] => {
  return storeRequisitions.filter(sr => {
    const srDate = new Date(sr.sr_date);
    const start = new Date(startDate);
    const end = new Date(endDate);
    return srDate >= start && srDate <= end && !sr.deleted_at;
  });
};

export const getStoreRequisitionsByExpectedDateRange = (startDate: string, endDate: string): StoreRequisition[] => {
  return storeRequisitions.filter(sr => {
    const expectedDate = new Date(sr.expected_date);
    const start = new Date(startDate);
    const end = new Date(endDate);
    return expectedDate >= start && expectedDate <= end && !sr.deleted_at;
  });
};

// UPDATE - อัปเดต StoreRequisition
export const updateStoreRequisition = (id: string, data: Partial<Omit<StoreRequisition, 'id' | 'created_at' | 'created_by_id'>>): StoreRequisition | null => {
  const index = storeRequisitions.findIndex(sr => sr.id === id && !sr.deleted_at);
  if (index === -1) return null;

  storeRequisitions[index] = {
    ...storeRequisitions[index],
    ...data,
    updated_at: getCurrentTimestamp(),
    updated_by_id: 'system'
  };
  return storeRequisitions[index];
};

// UPDATE - อัปเดต StoreRequisition status
export const updateStoreRequisitionStatus = (id: string, status: StoreRequisition['doc_status']): StoreRequisition | null => {
  return updateStoreRequisition(id, { doc_status: status });
};

// UPDATE - อัปเดต StoreRequisition workflow
export const updateStoreRequisitionWorkflow = (id: string, workflowId: string, workflowName: string): StoreRequisition | null => {
  return updateStoreRequisition(id, { 
    workflow_id: workflowId,
    workflow_name: workflowName
  });
};

// UPDATE - อัปเดต StoreRequisition description
export const updateStoreRequisitionDescription = (id: string, description: string): StoreRequisition | null => {
  return updateStoreRequisition(id, { description });
};

// UPDATE - อัปเดต StoreRequisition dates
export const updateStoreRequisitionDates = (id: string, srDate: string, expectedDate: string): StoreRequisition | null => {
  return updateStoreRequisition(id, { 
    sr_date: srDate,
    expected_date: expectedDate
  });
};

// UPDATE - อัปเดต StoreRequisition location
export const updateStoreRequisitionLocation = (id: string, locationId: string, locationName: string): StoreRequisition | null => {
  return updateStoreRequisition(id, { 
    from_location_id: locationId,
    from_location_name: locationName
  });
};

// UPDATE - อัปเดต StoreRequisition requestor
export const updateStoreRequisitionRequestor = (id: string, requestorId: string, requestorName: string): StoreRequisition | null => {
  return updateStoreRequisition(id, { 
    requestor_id: requestorId,
    requestor_name: requestorName
  });
};

// UPDATE - อัปเดต StoreRequisition department
export const updateStoreRequisitionDepartment = (id: string, departmentId: string, departmentName: string): StoreRequisition | null => {
  return updateStoreRequisition(id, { 
    department_id: departmentId,
    department_name: departmentName
  });
};

// UPDATE - อัปเดต StoreRequisition info
export const updateStoreRequisitionInfo = (id: string, info: any): StoreRequisition | null => {
  return updateStoreRequisition(id, { info });
};

// UPDATE - อัปเดต StoreRequisition dimension
export const updateStoreRequisitionDimension = (id: string, dimension: any): StoreRequisition | null => {
  return updateStoreRequisition(id, { dimension });
};

// DELETE - Soft delete StoreRequisition
export const softDeleteStoreRequisition = (id: string, deletedById: string): StoreRequisition | null => {
  const storeRequisition = getStoreRequisitionById(id);
  if (!storeRequisition) return null;

  storeRequisition.deleted_at = getCurrentTimestamp();
  storeRequisition.deleted_by_id = deletedById;
  storeRequisition.updated_at = getCurrentTimestamp();
  storeRequisition.updated_by_id = deletedById;

  return storeRequisition;
};

// DELETE - Hard delete StoreRequisition
export const hardDeleteStoreRequisition = (id: string): boolean => {
  const index = storeRequisitions.findIndex(sr => sr.id === id);
  if (index === -1) return false;

  storeRequisitions.splice(index, 1);
  return true;
};

// RESTORE - กู้คืน StoreRequisition ที่ถูก soft delete
export const restoreStoreRequisition = (id: string): StoreRequisition | null => {
  const storeRequisition = storeRequisitions.find(sr => sr.id === id);
  if (!storeRequisition || !storeRequisition.deleted_at) return null;

  storeRequisition.deleted_at = null;
  storeRequisition.deleted_by_id = null;
  storeRequisition.updated_at = getCurrentTimestamp();
  storeRequisition.updated_by_id = 'system';

  return storeRequisition;
};

// ADVANCED SEARCH - ค้นหา StoreRequisition แบบขั้นสูง
export const searchStoreRequisitions = (criteria: {
  status?: StoreRequisition['doc_status'];
  workflowId?: string;
  requestorId?: string;
  departmentId?: string;
  locationId?: string;
  startDate?: string;
  endDate?: string;
  expectedStartDate?: string;
  expectedEndDate?: string;
  description?: string;
}): StoreRequisition[] => {
  return storeRequisitions.filter(sr => {
    if (sr.deleted_at) return false;
    
    if (criteria.status && sr.doc_status !== criteria.status) return false;
    if (criteria.workflowId && sr.workflow_id !== criteria.workflowId) return false;
    if (criteria.requestorId && sr.requestor_id !== criteria.requestorId) return false;
    if (criteria.departmentId && sr.department_id !== criteria.departmentId) return false;
    if (criteria.locationId && sr.from_location_id !== criteria.locationId) return false;
    
    if (criteria.startDate || criteria.endDate) {
      const srDate = new Date(sr.sr_date);
      if (criteria.startDate && srDate < new Date(criteria.startDate)) return false;
      if (criteria.endDate && srDate > new Date(criteria.endDate)) return false;
    }
    
    if (criteria.expectedStartDate || criteria.expectedEndDate) {
      const expectedDate = new Date(sr.expected_date);
      if (criteria.expectedStartDate && expectedDate < new Date(criteria.expectedStartDate)) return false;
      if (criteria.expectedEndDate && expectedDate > new Date(criteria.expectedEndDate)) return false;
    }
    
    if (criteria.description && !sr.description.toLowerCase().includes(criteria.description.toLowerCase())) return false;
    
    return true;
  });
};

// UTILITY FUNCTIONS - ฟังก์ชันเสริม
export const getStoreRequisitionCount = (): number => {
  return storeRequisitions.filter(sr => !sr.deleted_at).length;
};

export const getStoreRequisitionCountByStatus = (status: StoreRequisition['doc_status']): number => {
  return storeRequisitions.filter(sr => sr.doc_status === status && !sr.deleted_at).length;
};

export const isStoreRequisitionExists = (id: string): boolean => {
  return storeRequisitions.some(sr => sr.id === id && !sr.deleted_at);
};

export const isStoreRequisitionNoExists = (srNo: string): boolean => {
  return storeRequisitions.some(sr => sr.sr_no === srNo && !sr.deleted_at);
};

export const clearAllStoreRequisitions = (): void => {
  storeRequisitions.length = 0;
};

export const getNextStoreRequisitionNo = (): string => {
  const currentYear = new Date().getFullYear();
  const yearStoreRequisitions = storeRequisitions.filter(sr => 
    sr.sr_no.includes(`SR-${currentYear}-`) && !sr.deleted_at
  );
  
  if (yearStoreRequisitions.length === 0) {
    return `SR-${currentYear}-001`;
  }
  
  const numbers = yearStoreRequisitions.map(sr => {
    const match = sr.sr_no.match(/SR-\d{4}-(\d+)/);
    return match ? parseInt(match[1]) : 0;
  });
  
  const maxNumber = Math.max(...numbers);
  const nextNumber = maxNumber + 1;
  return `SR-${currentYear}-${nextNumber.toString().padStart(3, '0')}`;
};
