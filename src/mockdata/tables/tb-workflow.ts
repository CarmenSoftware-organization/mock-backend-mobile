import { TbWorkflow } from './types';
import { generateUuid, getCurrentTimestamp } from './utils';
import { UUID_MAPPING } from './uuid-mapping';

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
    created_by_id: UUID_MAPPING['system'],
    updated_at: getCurrentTimestamp(),
    updated_by_id: UUID_MAPPING['system'],
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
    created_by_id: UUID_MAPPING['system'],
    updated_at: getCurrentTimestamp(),
    updated_by_id: UUID_MAPPING['system'],
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
    created_by_id: UUID_MAPPING['system'],
    updated_at: getCurrentTimestamp(),
    updated_by_id: UUID_MAPPING['system'],
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
    created_by_id: UUID_MAPPING['system'],
    updated_at: getCurrentTimestamp(),
    updated_by_id: UUID_MAPPING['system'],
    deleted_at: null,
    deleted_by_id: null
  },

  // =============== HOTEL PROCUREMENT & OPERATIONS WORKFLOWS ===============
  
  {
    id: UUID_MAPPING['workflow-pr-kitchen'],
    name: "Kitchen Purchase Request Workflow",
    workflow_type: "purchase_request_workflow",
    data: {
      stages: [
        {
          stage_id: "stage-1",
          stage_name: "Request Submission",
          stage_order: 1,
          required_role: "line_cook",
          actions: ["submit", "save_draft"],
          next_stages: ["stage-2"],
          abac_conditions: ["user.department_ids includes 'dept-kitchen'", "user.permissions includes 'pr.create'"]
        },
        {
          stage_id: "stage-2",
          stage_name: "Sous Chef Review",
          stage_order: 2,
          required_role: "sous_chef",
          actions: ["approve", "reject", "request_changes"],
          next_stages: ["stage-3", "stage-1"],
          auto_approve_conditions: ["amount <= 1000", "category == 'food'"],
          abac_conditions: ["amount <= 10000", "category in approval_categories"]
        },
        {
          stage_id: "stage-3",
          stage_name: "Executive Chef Approval",
          stage_order: 3,
          required_role: "executive_chef",
          actions: ["approve", "reject", "request_changes"],
          next_stages: ["stage-4", "stage-2"],
          abac_conditions: ["amount <= 25000", "department_match"]
        },
        {
          stage_id: "stage-4",
          stage_name: "Procurement Review",
          stage_order: 4,
          required_role: "purchasing_manager",
          actions: ["approve", "reject", "request_changes"],
          next_stages: ["stage-5", "stage-3"],
          abac_conditions: ["amount > 15000", "vendor_approved"]
        },
        {
          stage_id: "stage-5",
          stage_name: "Financial Approval",
          stage_order: 5,
          required_role: "financial_controller",
          actions: ["approve", "reject"],
          next_stages: [],
          abac_conditions: ["amount > 25000", "budget_available"]
        }
      ],
      rules: {
        auto_approve_limit: 1000,
        require_budget_check: true,
        max_approval_days: 5,
        emergency_override: true,
        category_restrictions: ["food", "kitchen_equipment", "beverages"],
        department_id: UUID_MAPPING['dept-kitchen'],
        escalation_timeout_hours: 8
      }
    },
    is_active: true,
    description: "Purchase request approval workflow for kitchen department with ABAC controls",
    note: "Includes emergency procurement and category-specific approvals",
    info: {
      approval_limits: {
        sous_chef: 10000,
        executive_chef: 25000,
        purchasing_manager: 50000,
        financial_controller: 100000
      }
    },
    dimension: {
      department: "Kitchen",
      workflow_priority: "high",
      sla_hours: 24
    },
    created_at: '2024-01-15T08:00:00Z',
    created_by_id: UUID_MAPPING['system'],
    updated_at: '2024-01-15T08:00:00Z',
    updated_by_id: UUID_MAPPING['system'],
    deleted_at: null,
    deleted_by_id: null
  },

  {
    id: UUID_MAPPING['workflow-pr-housekeeping'],
    name: "Housekeeping Purchase Request Workflow",
    workflow_type: "purchase_request_workflow",
    data: {
      stages: [
        {
          stage_id: "stage-1",
          stage_name: "Request Submission",
          stage_order: 1,
          required_role: "room_attendant",
          actions: ["submit", "save_draft"],
          next_stages: ["stage-2"],
          abac_conditions: ["user.department_ids includes 'dept-housekeeping'", "user.permissions includes 'pr.create'"]
        },
        {
          stage_id: "stage-2",
          stage_name: "Assistant Housekeeper Review",
          stage_order: 2,
          required_role: "assistant_housekeeper",
          actions: ["approve", "reject", "request_changes"],
          next_stages: ["stage-3", "stage-1"],
          auto_approve_conditions: ["amount <= 500", "category == 'cleaning_supplies'"],
          abac_conditions: ["amount <= 7500", "category in approval_categories"]
        },
        {
          stage_id: "stage-3",
          stage_name: "Executive Housekeeper Approval",
          stage_order: 3,
          required_role: "executive_housekeeper",
          actions: ["approve", "reject", "request_changes"],
          next_stages: ["stage-4", "stage-2"],
          abac_conditions: ["amount <= 20000", "department_match"]
        },
        {
          stage_id: "stage-4",
          stage_name: "Procurement Review",
          stage_order: 4,
          required_role: "purchasing_manager",
          actions: ["approve", "reject", "request_changes"],
          next_stages: ["stage-5", "stage-3"],
          abac_conditions: ["amount > 10000", "vendor_compliance"]
        },
        {
          stage_id: "stage-5",
          stage_name: "Financial Approval",
          stage_order: 5,
          required_role: "financial_controller",
          actions: ["approve", "reject"],
          next_stages: [],
          abac_conditions: ["amount > 20000", "budget_check"]
        }
      ],
      rules: {
        auto_approve_limit: 500,
        require_budget_check: true,
        max_approval_days: 3,
        emergency_override: true,
        category_restrictions: ["cleaning_supplies", "linens", "amenities", "laundry_chemicals"],
        department_id: UUID_MAPPING['dept-housekeeping'],
        escalation_timeout_hours: 6
      }
    },
    is_active: true,
    description: "Purchase request approval workflow for housekeeping department",
    note: "Fast-track approval for cleaning supplies and emergency requests",
    info: {
      approval_limits: {
        assistant_housekeeper: 7500,
        executive_housekeeper: 20000,
        purchasing_manager: 40000,
        financial_controller: 80000
      }
    },
    dimension: {
      department: "Housekeeping",
      workflow_priority: "medium",
      sla_hours: 12
    },
    created_at: '2024-01-15T08:30:00Z',
    created_by_id: UUID_MAPPING['system'],
    updated_at: '2024-01-15T08:30:00Z',
    updated_by_id: UUID_MAPPING['system'],
    deleted_at: null,
    deleted_by_id: null
  },

  {
    id: UUID_MAPPING['workflow-sr-stores'],
    name: "Store Requisition Workflow",
    workflow_type: "store_requisition_workflow",
    data: {
      stages: [
        {
          stage_id: "stage-1",
          stage_name: "Requisition Submission",
          stage_order: 1,
          required_role: "requester",
          actions: ["submit", "save_draft"],
          next_stages: ["stage-2"],
          abac_conditions: ["user.permissions includes 'sr.create'", "user.department_ids is not empty"]
        },
        {
          stage_id: "stage-2",
          stage_name: "Inventory Check",
          stage_order: 2,
          required_role: "store_clerk",
          actions: ["approve", "reject", "partial_approve"],
          next_stages: ["stage-3", "stage-4"],
          auto_approve_conditions: ["amount <= 200", "regular_stock_item"],
          abac_conditions: ["inventory_available", "valid_requestor"]
        },
        {
          stage_id: "stage-3",
          stage_name: "Storekeeper Authorization",
          stage_order: 3,
          required_role: "storekeeper",
          actions: ["authorize", "escalate", "create_pr"],
          next_stages: ["stage-4"],
          abac_conditions: ["amount <= 5000", "department_budget_ok"]
        },
        {
          stage_id: "stage-4",
          stage_name: "Stock Issue",
          stage_order: 4,
          required_role: "inventory_clerk",
          actions: ["issue", "partially_issue", "back_order"],
          next_stages: [],
          abac_conditions: ["authorized", "stock_available"]
        }
      ],
      rules: {
        auto_approve_limit: 200,
        require_stock_check: true,
        max_approval_days: 1,
        department_id: UUID_MAPPING['dept-stores'],
        escalation_on_stock_out: true,
        escalation_timeout_hours: 2
      }
    },
    is_active: true,
    description: "Standard workflow for store requisitions with inventory checks",
    note: "Automatically creates PR when stock is insufficient",
    info: {
      managed_inventory: ["food_items", "beverages", "cleaning_supplies", "linens", "amenities", "office_supplies"],
      approval_limits: {
        store_clerk: 1000,
        storekeeper: 5000
      }
    },
    dimension: {
      department: "Stores",
      workflow_priority: "high",
      sla_hours: 4
    },
    created_at: '2024-01-15T09:00:00Z',
    created_by_id: UUID_MAPPING['system'],
    updated_at: '2024-01-15T09:00:00Z',
    updated_by_id: UUID_MAPPING['system'],
    deleted_at: null,
    deleted_by_id: null
  },

  {
    id: UUID_MAPPING['workflow-emergency-procurement'],
    name: "Emergency Procurement Workflow",
    workflow_type: "purchase_request_workflow",
    data: {
      stages: [
        {
          stage_id: "stage-1",
          stage_name: "Emergency Declaration",
          stage_order: 1,
          required_role: "requester",
          actions: ["submit", "declare_emergency"],
          next_stages: ["stage-2"],
          abac_conditions: ["emergency_declared = true", "user.permissions includes 'pr.create'"]
        },
        {
          stage_id: "stage-2",
          stage_name: "Night Manager Review",
          stage_order: 2,
          required_role: "night_manager",
          actions: ["approve", "escalate", "reject"],
          next_stages: ["stage-3", "stage-4"],
          auto_approve_conditions: ["safety_critical", "amount <= 2000"],
          abac_conditions: ["emergency_justified", "amount <= 10000", "time_constraints_met"]
        },
        {
          stage_id: "stage-3",
          stage_name: "Department Head Confirmation",
          stage_order: 3,
          required_role: "department_head",
          actions: ["confirm", "reject", "modify"],
          next_stages: ["stage-4"],
          abac_conditions: ["department_match", "budget_impact_acceptable"]
        },
        {
          stage_id: "stage-4",
          stage_name: "Executive Override",
          stage_order: 4,
          required_role: "general_manager",
          actions: ["approve", "reject"],
          next_stages: [],
          abac_conditions: ["amount > 25000", "requires_executive_approval"]
        }
      ],
      rules: {
        auto_approve_limit: 2000,
        require_budget_check: false,
        max_approval_days: 1,
        emergency_override: true,
        after_hours_approval: true,
        escalation_timeout_hours: 1,
        notification_required: ["general_manager", "financial_controller"]
      }
    },
    is_active: true,
    description: "Fast-track approval workflow for emergency procurement",
    note: "24/7 availability with automatic escalation and executive notification",
    info: {
      emergency_categories: ["safety_equipment", "critical_repairs", "guest_satisfaction", "health_emergency"],
      approval_limits: {
        night_manager: 10000,
        department_head: 25000,
        general_manager: 100000
      }
    },
    dimension: {
      department: "*",
      workflow_priority: "critical",
      sla_hours: 2
    },
    created_at: '2024-01-15T09:30:00Z',
    created_by_id: UUID_MAPPING['system'],
    updated_at: '2024-01-15T09:30:00Z',
    updated_by_id: UUID_MAPPING['system'],
    deleted_at: null,
    deleted_by_id: null
  },

  {
    id: UUID_MAPPING['workflow-pr-engineering'],
    name: "Engineering Purchase Request Workflow",
    workflow_type: "purchase_request_workflow",
    data: {
      stages: [
        {
          stage_id: "stage-1",
          stage_name: "Technical Request",
          stage_order: 1,
          required_role: "maintenance_technician",
          actions: ["submit", "save_draft"],
          next_stages: ["stage-2"],
          abac_conditions: ["user.department_ids includes 'dept-engineering'", "user.permissions includes 'pr.create'"]
        },
        {
          stage_id: "stage-2",
          stage_name: "Supervisor Technical Review",
          stage_order: 2,
          required_role: "maintenance_supervisor",
          actions: ["approve", "reject", "request_specs"],
          next_stages: ["stage-3", "stage-1"],
          auto_approve_conditions: ["amount <= 2000", "routine_maintenance_item"],
          abac_conditions: ["amount <= 5000", "technical_specifications_valid"]
        },
        {
          stage_id: "stage-3",
          stage_name: "Chief Engineer Approval",
          stage_order: 3,
          required_role: "chief_engineer",
          actions: ["approve", "reject", "request_changes"],
          next_stages: ["stage-4", "stage-2"],
          abac_conditions: ["amount <= 25000", "safety_compliance_met"]
        },
        {
          stage_id: "stage-4",
          stage_name: "Procurement Coordination",
          stage_order: 4,
          required_role: "purchasing_manager",
          actions: ["approve", "reject", "vendor_check"],
          next_stages: ["stage-5", "stage-3"],
          abac_conditions: ["amount > 20000", "vendor_certification_required"]
        },
        {
          stage_id: "stage-5",
          stage_name: "Executive Approval",
          stage_order: 5,
          required_role: "general_manager",
          actions: ["approve", "reject"],
          next_stages: [],
          abac_conditions: ["amount > 40000", "capital_expenditure"]
        }
      ],
      rules: {
        auto_approve_limit: 2000,
        require_budget_check: true,
        max_approval_days: 5,
        emergency_override: true,
        category_restrictions: ["spare_parts", "tools", "safety_equipment", "chemicals", "hvac_equipment"],
        department_id: UUID_MAPPING['dept-engineering'],
        escalation_timeout_hours: 12,
        safety_priority: true
      }
    },
    is_active: true,
    description: "Purchase request workflow for engineering and maintenance with safety priority",
    note: "Expedited approval for safety equipment and critical repairs",
    info: {
      approval_limits: {
        maintenance_supervisor: 5000,
        chief_engineer: 25000,
        purchasing_manager: 50000,
        general_manager: 100000
      },
      safety_categories: ["safety_equipment", "fire_prevention", "electrical_safety"]
    },
    dimension: {
      department: "Engineering",
      workflow_priority: "high",
      sla_hours: 16
    },
    created_at: '2024-01-15T10:00:00Z',
    created_by_id: UUID_MAPPING['system'],
    updated_at: '2024-01-15T10:00:00Z',
    updated_by_id: UUID_MAPPING['system'],
    deleted_at: null,
    deleted_by_id: null
  },

  {
    id: UUID_MAPPING['workflow-goods-receipt'],
    name: "Goods Receipt Note Workflow",
    workflow_type: "goods_receipt_workflow",
    data: {
      stages: [
        {
          stage_id: "stage-1",
          stage_name: "Delivery Receipt",
          stage_order: 1,
          required_role: "store_clerk",
          actions: ["receive", "reject_delivery", "partial_receipt"],
          next_stages: ["stage-2"],
          abac_conditions: ["po_exists", "vendor_match", "delivery_on_time"]
        },
        {
          stage_id: "stage-2",
          stage_name: "Quality Inspection",
          stage_order: 2,
          required_role: "storekeeper",
          actions: ["approve", "reject", "conditional_accept"],
          next_stages: ["stage-3", "stage-4"],
          auto_approve_conditions: ["quantity_exact_match", "routine_supplier"],
          abac_conditions: ["quality_standards_met", "storage_capacity_available"]
        },
        {
          stage_id: "stage-3",
          stage_name: "Procurement Confirmation",
          stage_order: 3,
          required_role: "purchase_officer",
          actions: ["confirm", "investigate", "dispute"],
          next_stages: ["stage-4"],
          abac_conditions: ["amount > 5000", "variance_within_tolerance"]
        },
        {
          stage_id: "stage-4",
          stage_name: "Stock Entry",
          stage_order: 4,
          required_role: "inventory_clerk",
          actions: ["add_to_stock", "quarantine", "return"],
          next_stages: [],
          abac_conditions: ["approved", "storage_location_assigned"]
        }
      ],
      rules: {
        auto_approve_limit: 1000,
        require_po_match: true,
        max_approval_days: 2,
        quality_inspection_required: true,
        variance_tolerance_percent: 5,
        escalation_timeout_hours: 4
      }
    },
    is_active: true,
    description: "Standard workflow for goods receipt processing with quality controls",
    note: "Includes automatic PO matching and quality inspection requirements",
    info: {
      inspection_categories: ["perishable", "chemical", "equipment", "textile"],
      storage_requirements: ["temperature_controlled", "dry_storage", "chemical_storage"]
    },
    dimension: {
      department: "Stores",
      workflow_priority: "medium",
      sla_hours: 8
    },
    created_at: '2024-01-15T10:30:00Z',
    created_by_id: UUID_MAPPING['system'],
    updated_at: '2024-01-15T10:30:00Z',
    updated_by_id: UUID_MAPPING['system'],
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
  findByType: (workflowType: 'purchase_request_workflow' | 'store_requisition_workflow' | 'goods_receipt_workflow'): TbWorkflow[] => {
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
  getDefaultWorkflow: (workflowType: 'purchase_request_workflow' | 'store_requisition_workflow' | 'goods_receipt_workflow'): TbWorkflow | null => {
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
