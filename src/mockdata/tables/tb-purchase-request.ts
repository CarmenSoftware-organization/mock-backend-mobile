import { TbPurchaseRequest } from './types';
import { generateUuid, getCurrentTimestamp } from './utils';
import { UUID_MAPPING } from './uuid-mapping';

// =============== MOCK TB_PURCHASE_REQUEST DATA ===============
export let mockTbPurchaseRequest: TbPurchaseRequest[] = [
  {
    id: "pr-001",
    purchase_request_no: "PR-2024-001",
    reference_no: "REF-KIT-001",
    request_date: "2024-01-15T00:00:00.000Z",
    required_date: "2024-01-25T00:00:00.000Z",
    requester_id: UUID_MAPPING['user-003'],
    requester_name: "Chef Manager",
    department_id: UUID_MAPPING['dept-001'],
    department_name: "Kitchen",
    delivery_point_id: "dp-001",
    delivery_point_name: "Main Kitchen",
    total_amount: 15750.00,
    currency_id: "cur-001-thb",
    currency_name: "Thai Baht",
    status: "approved",
    workflow_id: "wf-001",
    workflow_stage: "stage-4",
    priority: "normal",
    note: "Weekly ingredient restocking",
    info: {
      approval_history: [
        {
          stage: "stage-2",
          approved_by: UUID_MAPPING['user-001'],
          approved_at: "2024-01-16T10:30:00.000Z",
          status: "approved"
        },
        {
          stage: "stage-3",
          approved_by: UUID_MAPPING['user-002'],
          approved_at: "2024-01-16T14:15:00.000Z",
          status: "approved"
        }
      ],
      items_count: 8,
      vendor_preferences: ["vendor-001", "vendor-002"]
    },
    dimension: {},
    doc_version: 3,
    created_at: "2024-01-15T09:00:00.000Z",
    created_by_id: UUID_MAPPING['user-003'],
    updated_at: "2024-01-16T14:15:00.000Z",
    updated_by_id: UUID_MAPPING['user-002'],
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "pr-002",
    purchase_request_no: "PR-2024-002",
    reference_no: "REF-BAR-001",
    request_date: "2024-01-16T00:00:00.000Z",
    required_date: "2024-01-20T00:00:00.000Z",
    requester_id: UUID_MAPPING['user-004'],
    requester_name: "Bar Manager",
    department_id: UUID_MAPPING['dept-002'],
    department_name: "Bar",
    delivery_point_id: "dp-003",
    delivery_point_name: "Beverage Station",
    total_amount: 8500.00,
    currency_id: "cur-001-thb",
    currency_name: "Thai Baht",
    status: "pending_approval",
    workflow_id: "wf-001",
    workflow_stage: "stage-2",
    priority: "high",
    note: "Urgently needed for weekend events",
    info: {
      approval_history: [
        {
          stage: "stage-1",
          approved_by: UUID_MAPPING['user-004'],
          approved_at: "2024-01-16T11:00:00.000Z",
          status: "submitted"
        }
      ],
      items_count: 5,
      vendor_preferences: ["vendor-004"]
    },
    dimension: {},
    doc_version: 1,
    created_at: "2024-01-16T10:30:00.000Z",
    created_by_id: UUID_MAPPING['user-004'],
    updated_at: "2024-01-16T11:00:00.000Z",
    updated_by_id: UUID_MAPPING['user-004'],
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "pr-003",
    purchase_request_no: "PR-2024-003",
    reference_no: "REF-CAT-001",
    request_date: "2024-01-17T00:00:00.000Z",
    required_date: "2024-02-01T00:00:00.000Z",
    requester_id: UUID_MAPPING['user-005'],
    requester_name: "Catering Manager",
    department_id: UUID_MAPPING['dept-003'],
    department_name: "Catering",
    delivery_point_id: "dp-004",
    delivery_point_name: "Catering Kitchen",
    total_amount: 45000.00,
    currency_id: "cur-001-thb",
    currency_name: "Thai Baht",
    status: "draft",
    workflow_id: "wf-004",
    workflow_stage: "stage-1",
    priority: "normal",
    note: "Large catering event - February corporate function",
    info: {
      approval_history: [],
      items_count: 15,
      vendor_preferences: ["vendor-001", "vendor-003"],
      special_requirements: "HACCP certified vendors only"
    },
    dimension: {},
    doc_version: 1,
    created_at: "2024-01-17T14:00:00.000Z",
    created_by_id: UUID_MAPPING['user-005'],
    updated_at: "2024-01-17T16:30:00.000Z",
    updated_by_id: UUID_MAPPING['user-005'],
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "pr-004",
    purchase_request_no: "PR-2024-004",
    reference_no: "REF-PACK-001",
    request_date: "2024-01-18T00:00:00.000Z",
    required_date: "2024-01-28T00:00:00.000Z",
    requester_id: UUID_MAPPING['user-006'],
    requester_name: "Operations Manager",
    department_id: UUID_MAPPING['dept-004'],
    department_name: "Operations",
    delivery_point_id: "dp-006",
    delivery_point_name: "Dry Storage",
    total_amount: 12300.00,
    currency_id: "cur-001-thb",
    currency_name: "Thai Baht",
    status: "submitted",
    workflow_id: "wf-001",
    workflow_stage: "stage-2",
    priority: "low",
    note: "Monthly packaging supplies replenishment",
    info: {
      approval_history: [
        {
          stage: "stage-1",
          approved_by: UUID_MAPPING['user-006'],
          approved_at: "2024-01-18T09:15:00.000Z",
          status: "submitted"
        }
      ],
      items_count: 6,
      vendor_preferences: ["vendor-006"],
      bulk_order: true
    },
    dimension: {},
    doc_version: 1,
    created_at: "2024-01-18T08:45:00.000Z",
    created_by_id: UUID_MAPPING['user-006'],
    updated_at: "2024-01-18T09:15:00.000Z",
    updated_by_id: UUID_MAPPING['user-006'],
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "pr-005",
    purchase_request_no: "PR-2024-005",
    reference_no: "REF-SPICE-001",
    request_date: "2024-01-19T00:00:00.000Z",
    required_date: "2024-02-15T00:00:00.000Z",
    requester_id: UUID_MAPPING['user-003'],
    requester_name: "Chef Manager",
    department_id: UUID_MAPPING['dept-001'],
    department_name: "Kitchen",
    delivery_point_id: "dp-001",
    delivery_point_name: "Main Kitchen",
    total_amount: 28500.00,
    currency_id: "cur-002-usd",
    currency_name: "US Dollar",
    status: "rejected",
    workflow_id: "wf-001",
    workflow_stage: "stage-3",
    priority: "normal",
    note: "Import spices for new menu items",
    info: {
      approval_history: [
        {
          stage: "stage-2",
          approved_by: UUID_MAPPING['user-001'],
          approved_at: "2024-01-20T10:00:00.000Z",
          status: "approved"
        },
        {
          stage: "stage-3",
          approved_by: UUID_MAPPING['user-002'],
          approved_at: "2024-01-20T15:30:00.000Z",
          status: "rejected",
          reason: "Budget exceeded for Q1. Please resubmit in Q2."
        }
      ],
      items_count: 12,
      vendor_preferences: ["vendor-005"],
      import_requirements: "FDA approval required"
    },
    dimension: {},
    doc_version: 2,
    created_at: "2024-01-19T13:20:00.000Z",
    created_by_id: UUID_MAPPING['user-003'],
    updated_at: "2024-01-20T15:30:00.000Z",
    updated_by_id: UUID_MAPPING['user-002'],
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "pr-006",
    purchase_request_no: "PR-2024-006",
    reference_no: "REF-DAIRY-001",
    request_date: getCurrentTimestamp(),
    required_date: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString(),
    requester_id: UUID_MAPPING['user-007'],
    requester_name: "Pastry Chef",
    department_id: UUID_MAPPING['dept-005'],
    department_name: "Bakery",
    delivery_point_id: "dp-002",
    delivery_point_name: "Bakery Section",
    total_amount: 6750.00,
    currency_id: "cur-001-thb",
    currency_name: "Thai Baht",
    status: "draft",
    workflow_id: "wf-002",
    workflow_stage: "stage-1",
    priority: "urgent",
    note: "Emergency dairy order - current stock depleted",
    info: {
      approval_history: [],
      items_count: 4,
      vendor_preferences: ["vendor-004"],
      emergency_order: true
    },
    dimension: {},
    doc_version: 1,
    created_at: getCurrentTimestamp(),
    created_by_id: UUID_MAPPING['user-007'],
    updated_at: getCurrentTimestamp(),
    updated_by_id: UUID_MAPPING['user-007'],
    deleted_at: null,
    deleted_by_id: null
  }
];

// =============== TB_PURCHASE_REQUEST CRUD FUNCTIONS ===============
export const tbPurchaseRequestCrud = {
  // Create new purchase request
  create: (data: Omit<TbPurchaseRequest, 'id' | 'created_at' | 'updated_at'>): TbPurchaseRequest => {
    const newPR: TbPurchaseRequest = {
      id: generateUuid(),
      created_at: getCurrentTimestamp(),
      updated_at: getCurrentTimestamp(),
      doc_version: 1,
      status: 'draft',
      ...data
    };
    mockTbPurchaseRequest.push(newPR);
    return newPR;
  },

  // Find by ID
  findById: (id: string): TbPurchaseRequest | null => {
    return mockTbPurchaseRequest.find(pr => pr.id === id && !pr.deleted_at) || null;
  },

  // Find by purchase request number
  findByPRNo: (prNo: string): TbPurchaseRequest | null => {
    return mockTbPurchaseRequest.find(pr => pr.purchase_request_no === prNo && !pr.deleted_at) || null;
  },

  // Find by requester
  findByRequester: (requesterId: string): TbPurchaseRequest[] => {
    return mockTbPurchaseRequest
      .filter(pr => !pr.deleted_at && pr.requester_id === requesterId)
      .sort((a, b) => new Date(b.created_at || '').getTime() - new Date(a.created_at || '').getTime());
  },

  // Find by department
  findByDepartment: (departmentId: string): TbPurchaseRequest[] => {
    return mockTbPurchaseRequest
      .filter(pr => !pr.deleted_at && pr.department_id === departmentId)
      .sort((a, b) => new Date(b.created_at || '').getTime() - new Date(a.created_at || '').getTime());
  },

  // Find by status
  findByStatus: (status: string): TbPurchaseRequest[] => {
    return mockTbPurchaseRequest
      .filter(pr => !pr.deleted_at && pr.status === status)
      .sort((a, b) => new Date(b.created_at || '').getTime() - new Date(a.created_at || '').getTime());
  },

  // Find by priority
  findByPriority: (priority: string): TbPurchaseRequest[] => {
    return mockTbPurchaseRequest
      .filter(pr => !pr.deleted_at && pr.priority === priority)
      .sort((a, b) => new Date(b.created_at || '').getTime() - new Date(a.created_at || '').getTime());
  },

  // Find pending approval
  findPendingApproval: (): TbPurchaseRequest[] => {
    return mockTbPurchaseRequest
      .filter(pr => !pr.deleted_at && pr.status === 'pending_approval')
      .sort((a, b) => new Date(a.created_at || '').getTime() - new Date(b.created_at || '').getTime());
  },

  // Find by date range
  findByDateRange: (startDate: string, endDate: string): TbPurchaseRequest[] => {
    const start = new Date(startDate).getTime();
    const end = new Date(endDate).getTime();
    
    return mockTbPurchaseRequest
      .filter(pr => {
        if (!pr.request_date || pr.deleted_at) return false;
        const prDate = new Date(pr.request_date).getTime();
        return prDate >= start && prDate <= end;
      })
      .sort((a, b) => new Date(b.request_date || '').getTime() - new Date(a.request_date || '').getTime());
  },

  // Find overdue requests
  findOverdue: (): TbPurchaseRequest[] => {
    const now = new Date().getTime();
    
    return mockTbPurchaseRequest
      .filter(pr => {
        if (!pr.required_date || pr.deleted_at) return false;
        if (pr.status === 'completed' || pr.status === 'cancelled') return false;
        
        const requiredDate = new Date(pr.required_date).getTime();
        return requiredDate < now;
      })
      .sort((a, b) => new Date(a.required_date || '').getTime() - new Date(b.required_date || '').getTime());
  },

  // Find all active purchase requests
  findAllActive: (): TbPurchaseRequest[] => {
    return mockTbPurchaseRequest
      .filter(pr => !pr.deleted_at)
      .sort((a, b) => new Date(b.created_at || '').getTime() - new Date(a.created_at || '').getTime());
  },

  // Find all purchase requests (including deleted)
  findAll: (): TbPurchaseRequest[] => {
    return mockTbPurchaseRequest
      .sort((a, b) => new Date(b.created_at || '').getTime() - new Date(a.created_at || '').getTime());
  },

  // Search purchase requests
  search: (query: string): TbPurchaseRequest[] => {
    const lowerQuery = query.toLowerCase();
    return mockTbPurchaseRequest
      .filter(pr => 
        !pr.deleted_at &&
        (pr.purchase_request_no.toLowerCase().includes(lowerQuery) || 
         pr.reference_no?.toLowerCase().includes(lowerQuery) ||
         pr.requester_name?.toLowerCase().includes(lowerQuery) ||
         pr.note?.toLowerCase().includes(lowerQuery))
      )
      .sort((a, b) => new Date(b.created_at || '').getTime() - new Date(a.created_at || '').getTime());
  },

  // Update purchase request
  update: (id: string, data: Partial<TbPurchaseRequest>, updated_by_id?: string): TbPurchaseRequest | null => {
    const index = mockTbPurchaseRequest.findIndex(pr => pr.id === id && !pr.deleted_at);
    if (index === -1) return null;

    const currentVersion = mockTbPurchaseRequest[index].doc_version || 1;
    mockTbPurchaseRequest[index] = {
      ...mockTbPurchaseRequest[index],
      ...data,
      doc_version: currentVersion + 1,
      updated_at: getCurrentTimestamp(),
      updated_by_id: updated_by_id || null
    };
    return mockTbPurchaseRequest[index];
  },

  // Soft delete purchase request
  delete: (id: string, deleted_by_id?: string): boolean => {
    const index = mockTbPurchaseRequest.findIndex(pr => pr.id === id && !pr.deleted_at);
    if (index === -1) return false;

    mockTbPurchaseRequest[index].deleted_at = getCurrentTimestamp();
    mockTbPurchaseRequest[index].deleted_by_id = deleted_by_id || null;
    return true;
  },

  // Submit purchase request
  submit: (id: string, updated_by_id?: string): TbPurchaseRequest | null => {
    const pr = tbPurchaseRequestCrud.findById(id);
    if (!pr || pr.status !== 'draft') return null;

    return tbPurchaseRequestCrud.update(id, {
      status: 'submitted',
      workflow_stage: 'stage-1'
    }, updated_by_id);
  },

  // Approve purchase request
  approve: (id: string, approver_id: string, stage: string): TbPurchaseRequest | null => {
    const pr = tbPurchaseRequestCrud.findById(id);
    if (!pr) return null;

    const approvalHistory = pr.info?.approval_history || [];
    approvalHistory.push({
      stage: stage,
      approved_by: approver_id,
      approved_at: getCurrentTimestamp(),
      status: 'approved'
    });

    // Determine next stage or completion
    let newStatus = pr.status;
    let newStage = pr.workflow_stage;

    if (stage === 'stage-4') {
      newStatus = 'approved';
    } else {
      newStatus = 'pending_approval';
      newStage = `stage-${parseInt(stage.split('-')[1]) + 1}`;
    }

    return tbPurchaseRequestCrud.update(id, {
      status: newStatus,
      workflow_stage: newStage,
      info: {
        ...pr.info,
        approval_history: approvalHistory
      }
    }, approver_id);
  },

  // Reject purchase request
  reject: (id: string, rejector_id: string, reason: string): TbPurchaseRequest | null => {
    const pr = tbPurchaseRequestCrud.findById(id);
    if (!pr) return null;

    const approvalHistory = pr.info?.approval_history || [];
    approvalHistory.push({
      stage: pr.workflow_stage,
      approved_by: rejector_id,
      approved_at: getCurrentTimestamp(),
      status: 'rejected',
      reason: reason
    });

    return tbPurchaseRequestCrud.update(id, {
      status: 'rejected',
      info: {
        ...pr.info,
        approval_history: approvalHistory,
        rejection_reason: reason
      }
    }, rejector_id);
  },

  // Cancel purchase request
  cancel: (id: string, updated_by_id?: string, reason?: string): TbPurchaseRequest | null => {
    return tbPurchaseRequestCrud.update(id, {
      status: 'cancelled',
      info: {
        cancelled_reason: reason,
        cancelled_at: getCurrentTimestamp()
      }
    }, updated_by_id);
  },

  // Generate purchase request number
  generatePRNumber: (): string => {
    const year = new Date().getFullYear();
    const existingPRs = mockTbPurchaseRequest.filter(pr => 
      pr.purchase_request_no.startsWith(`PR-${year}-`)
    );
    const nextNumber = existingPRs.length + 1;
    return `PR-${year}-${nextNumber.toString().padStart(3, '0')}`;
  },

  // Get purchase request statistics
  getStats: () => {
    const allPRs = mockTbPurchaseRequest.filter(pr => !pr.deleted_at);
    const totalAmount = allPRs.reduce((sum, pr) => sum + (pr.total_amount || 0), 0);
    const avgAmount = allPRs.length > 0 ? totalAmount / allPRs.length : 0;
    
    return {
      total: allPRs.length,
      totalAmount: totalAmount,
      avgAmount: avgAmount,
      byStatus: allPRs.reduce((acc, pr) => {
        const status = pr.status || 'unknown';
        acc[status] = (acc[status] || 0) + 1;
        return acc;
      }, {} as Record<string, number>),
      byPriority: allPRs.reduce((acc, pr) => {
        const priority = pr.priority || 'unknown';
        acc[priority] = (acc[priority] || 0) + 1;
        return acc;
      }, {} as Record<string, number>),
      byDepartment: allPRs.reduce((acc, pr) => {
        const dept = pr.department_name || 'Unknown';
        acc[dept] = (acc[dept] || 0) + 1;
        return acc;
      }, {} as Record<string, number>),
      byCurrency: allPRs.reduce((acc, pr) => {
        const currency = pr.currency_name || 'Unknown';
        acc[currency] = (acc[currency] || 0) + 1;
        return acc;
      }, {} as Record<string, number>),
      pendingApproval: allPRs.filter(pr => pr.status === 'pending_approval').length,
      overdue: tbPurchaseRequestCrud.findOverdue().length
    };
  }
};
