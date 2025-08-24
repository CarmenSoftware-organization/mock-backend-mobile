import { TbWorkflow } from './types';
import { generateUuid, getCurrentTimestamp } from './utils';

// =============== MOCK TB_WORKFLOW DATA ===============
export let mockTbWorkflow: TbWorkflow[] = [
  {
    id: "wf-001",
    name: "Standard Purchase Request Workflow",
    workflow_type: "purchase_request_workflow",
    data: {
      stages: [
        {
          stage_id: "stage-1",
          stage_name: "Request Submission",
          stage_order: 1,
          required_role: "requester",
          actions: ["submit", "save_draft"],
          next_stages: ["stage-2"]
        },
        {
          stage_id: "stage-2", 
          stage_name: "Department Head Approval",
          stage_order: 2,
          required_role: "department_head",
          actions: ["approve", "reject", "request_changes"],
          next_stages: ["stage-3", "stage-1"]
        },
        {
          stage_id: "stage-3",
          stage_name: "Procurement Review",
          stage_order: 3,
          required_role: "procurement_officer",
          actions: ["approve", "reject", "request_changes"],
          next_stages: ["stage-4", "stage-2"]
        },
        {
          stage_id: "stage-4",
          stage_name: "Final Approval",
          stage_order: 4,
          required_role: "procurement_manager",
          actions: ["approve", "reject"],
          next_stages: []
        }
      ],
      rules: {
        auto_approve_limit: 10000,
        require_budget_check: true,
        max_approval_days: 7
      }
    },
    is_active: true,
    description: "Standard workflow for purchase requests with department and procurement approval",
    note: "Default workflow for most purchase requests",
    info: {},
    dimension: {},
    created_at: getCurrentTimestamp(),
    created_by_id: "system",
    updated_at: getCurrentTimestamp(),
    updated_by_id: "system",
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "wf-002",
    name: "Express Purchase Request Workflow",
    workflow_type: "purchase_request_workflow",
    data: {
      stages: [
        {
          stage_id: "stage-1",
          stage_name: "Request Submission",
          stage_order: 1,
          required_role: "requester",
          actions: ["submit", "save_draft"],
          next_stages: ["stage-2"]
        },
        {
          stage_id: "stage-2",
          stage_name: "Procurement Approval",
          stage_order: 2,
          required_role: "procurement_manager",
          actions: ["approve", "reject"],
          next_stages: []
        }
      ],
      rules: {
        auto_approve_limit: 5000,
        require_budget_check: false,
        max_approval_days: 2
      }
    },
    is_active: true,
    description: "Fast-track workflow for urgent purchase requests",
    note: "Used for urgent or low-value purchases",
    info: {},
    dimension: {},
    created_at: getCurrentTimestamp(),
    created_by_id: "system",
    updated_at: getCurrentTimestamp(),
    updated_by_id: "system",
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "wf-003",
    name: "Standard Store Requisition Workflow",
    workflow_type: "store_requisition_workflow",
    data: {
      stages: [
        {
          stage_id: "stage-1",
          stage_name: "Requisition Submission",
          stage_order: 1,
          required_role: "requester",
          actions: ["submit", "save_draft"],
          next_stages: ["stage-2"]
        },
        {
          stage_id: "stage-2",
          stage_name: "Store Manager Review",
          stage_order: 2,
          required_role: "store_manager",
          actions: ["approve", "reject", "partial_approve"],
          next_stages: ["stage-3"]
        },
        {
          stage_id: "stage-3",
          stage_name: "Inventory Issue",
          stage_order: 3,
          required_role: "inventory_clerk",
          actions: ["issue", "partially_issue", "back_order"],
          next_stages: []
        }
      ],
      rules: {
        auto_approve_limit: null,
        require_stock_check: true,
        max_approval_days: 3
      }
    },
    is_active: true,
    description: "Standard workflow for store requisitions",
    note: "Used for internal inventory requests",
    info: {},
    dimension: {},
    created_at: getCurrentTimestamp(),
    created_by_id: "system",
    updated_at: getCurrentTimestamp(),
    updated_by_id: "system",
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "wf-004",
    name: "High Value Purchase Request Workflow",
    workflow_type: "purchase_request_workflow",
    data: {
      stages: [
        {
          stage_id: "stage-1",
          stage_name: "Request Submission",
          stage_order: 1,
          required_role: "requester",
          actions: ["submit", "save_draft"],
          next_stages: ["stage-2"]
        },
        {
          stage_id: "stage-2",
          stage_name: "Department Head Approval",
          stage_order: 2,
          required_role: "department_head",
          actions: ["approve", "reject", "request_changes"],
          next_stages: ["stage-3", "stage-1"]
        },
        {
          stage_id: "stage-3",
          stage_name: "Finance Review",
          stage_order: 3,
          required_role: "finance_manager",
          actions: ["approve", "reject", "request_changes"],
          next_stages: ["stage-4", "stage-2"]
        },
        {
          stage_id: "stage-4",
          stage_name: "Procurement Review",
          stage_order: 4,
          required_role: "procurement_officer",
          actions: ["approve", "reject", "request_changes"],
          next_stages: ["stage-5", "stage-3"]
        },
        {
          stage_id: "stage-5",
          stage_name: "Executive Approval",
          stage_order: 5,
          required_role: "executive",
          actions: ["approve", "reject"],
          next_stages: []
        }
      ],
      rules: {
        auto_approve_limit: 0,
        require_budget_check: true,
        require_quotes: true,
        min_quotes_required: 3,
        max_approval_days: 14
      }
    },
    is_active: true,
    description: "Workflow for high-value purchase requests requiring executive approval",
    note: "Used for purchases above 100,000 THB",
    info: {},
    dimension: {},
    created_at: getCurrentTimestamp(),
    created_by_id: "system",
    updated_at: getCurrentTimestamp(),
    updated_by_id: "system",
    deleted_at: null,
    deleted_by_id: null
  }
];

// =============== TB_WORKFLOW CRUD FUNCTIONS ===============
export const tbWorkflowCrud = {
  // Create new workflow
  create: (data: Omit<TbWorkflow, 'id' | 'created_at' | 'updated_at'>): TbWorkflow => {
    const newWorkflow: TbWorkflow = {
      id: generateUuid(),
      created_at: getCurrentTimestamp(),
      updated_at: getCurrentTimestamp(),
      ...data
    };
    mockTbWorkflow.push(newWorkflow);
    return newWorkflow;
  },

  // Find by ID
  findById: (id: string): TbWorkflow | null => {
    return mockTbWorkflow.find(workflow => workflow.id === id && !workflow.deleted_at) || null;
  },

  // Find by name
  findByName: (name: string): TbWorkflow | null => {
    return mockTbWorkflow.find(workflow => workflow.name === name && !workflow.deleted_at) || null;
  },

  // Find by workflow type
  findByType: (workflowType: 'purchase_request_workflow' | 'store_requisition_workflow'): TbWorkflow[] => {
    return mockTbWorkflow.filter(workflow => 
      !workflow.deleted_at && 
      workflow.is_active &&
      workflow.workflow_type === workflowType
    );
  },

  // Find all active workflows
  findAllActive: (): TbWorkflow[] => {
    return mockTbWorkflow.filter(workflow => !workflow.deleted_at && workflow.is_active);
  },

  // Find all workflows (including inactive)
  findAll: (): TbWorkflow[] => {
    return mockTbWorkflow.filter(workflow => !workflow.deleted_at);
  },

  // Get default workflow for type
  getDefaultWorkflow: (workflowType: 'purchase_request_workflow' | 'store_requisition_workflow'): TbWorkflow | null => {
    const workflows = tbWorkflowCrud.findByType(workflowType);
    // Return the first active workflow as default, or the standard one
    return workflows.find(wf => wf.name.includes('Standard')) || workflows[0] || null;
  },

  // Search workflows by name or description
  search: (query: string): TbWorkflow[] => {
    const lowerQuery = query.toLowerCase();
    return mockTbWorkflow.filter(workflow => 
      !workflow.deleted_at && 
      workflow.is_active &&
      (workflow.name.toLowerCase().includes(lowerQuery) || 
       workflow.description?.toLowerCase().includes(lowerQuery))
    );
  },

  // Update workflow
  update: (id: string, data: Partial<TbWorkflow>, updated_by_id?: string): TbWorkflow | null => {
    const index = mockTbWorkflow.findIndex(workflow => workflow.id === id && !workflow.deleted_at);
    if (index === -1) return null;

    mockTbWorkflow[index] = {
      ...mockTbWorkflow[index],
      ...data,
      updated_at: getCurrentTimestamp(),
      updated_by_id: updated_by_id || null
    };
    return mockTbWorkflow[index];
  },

  // Soft delete workflow
  delete: (id: string, deleted_by_id?: string): boolean => {
    const index = mockTbWorkflow.findIndex(workflow => workflow.id === id && !workflow.deleted_at);
    if (index === -1) return false;

    mockTbWorkflow[index].deleted_at = getCurrentTimestamp();
    mockTbWorkflow[index].deleted_by_id = deleted_by_id || null;
    return true;
  },

  // Activate workflow
  activate: (id: string, updated_by_id?: string): TbWorkflow | null => {
    return tbWorkflowCrud.update(id, { is_active: true }, updated_by_id);
  },

  // Deactivate workflow
  deactivate: (id: string, updated_by_id?: string): TbWorkflow | null => {
    return tbWorkflowCrud.update(id, { is_active: false }, updated_by_id);
  },

  // Get workflow stages
  getStages: (id: string): any[] => {
    const workflow = tbWorkflowCrud.findById(id);
    return workflow?.data?.stages || [];
  },

  // Get workflow rules
  getRules: (id: string): any => {
    const workflow = tbWorkflowCrud.findById(id);
    return workflow?.data?.rules || {};
  },

  // Update workflow stages
  updateStages: (id: string, stages: any[], updated_by_id?: string): TbWorkflow | null => {
    const workflow = tbWorkflowCrud.findById(id);
    if (!workflow) return null;

    const newData = {
      ...workflow.data,
      stages: stages
    };

    return tbWorkflowCrud.update(id, { data: newData }, updated_by_id);
  },

  // Update workflow rules
  updateRules: (id: string, rules: any, updated_by_id?: string): TbWorkflow | null => {
    const workflow = tbWorkflowCrud.findById(id);
    if (!workflow) return null;

    const newData = {
      ...workflow.data,
      rules: rules
    };

    return tbWorkflowCrud.update(id, { data: newData }, updated_by_id);
  },

  // Get workflow statistics
  getStats: () => {
    const allWorkflows = mockTbWorkflow.filter(workflow => !workflow.deleted_at);
    const activeWorkflows = allWorkflows.filter(workflow => workflow.is_active);
    
    return {
      total: allWorkflows.length,
      active: activeWorkflows.length,
      inactive: allWorkflows.length - activeWorkflows.length,
      byType: activeWorkflows.reduce((acc, workflow) => {
        acc[workflow.workflow_type] = (acc[workflow.workflow_type] || 0) + 1;
        return acc;
      }, {} as Record<string, number>)
    };
  }
};
