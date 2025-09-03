import { generateId, getCurrentTimestamp } from "@/libs/utils";
import { getUuidByName } from "./mapping.uuid";

export interface Workflow {
  id: string;
  name: string;
  workflow_type:
    | "purchase_request_workflow"
    | "store_requisition_workflow"
    | "purchase_order_workflow"
    | "grn_workflow"
    | "other";
  data: any;
  is_active: boolean;
  description: string | null;
  note: string | null;
  info: any;
  dimension: any;
  created_at: string;
  created_by_id: string | null;
  updated_at: string;
  updated_by_id: string | null;
  deleted_at: string | null;
  deleted_by_id: string | null;
}

// Sample data
export const workflows: Workflow[] = [
  {
    id: getUuidByName("WORKFLOW_01"),
    name: "General Approval Workflow",
    workflow_type: "other",
    data: { stages: ["draft", "submitted", "approved", "completed"] },
    is_active: true,
    description: "Standard workflow for general approvals",
    note: "General purpose approval workflow",
    info: { version: "1.0", category: "approval" },
    dimension: { department: "General", region: "All" },
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: getUuidByName("USER_ADMIN"),
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("WORKFLOW_02"),
    name: "Purchase Request Workflow",
    workflow_type: "purchase_request_workflow",
    data: {
      stages: ["draft", "submitted", "reviewed", "approved", "purchased"],
    },
    is_active: true,
    description: "Workflow for purchase request approvals",
    note: "Purchase request approval process",
    info: { version: "2.0", category: "purchase" },
    dimension: { department: "Procurement", region: "All" },
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: getUuidByName("USER_ADMIN"),
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("WORKFLOW_03"),
    name: "Store Requisition Workflow",
    workflow_type: "store_requisition_workflow",
    data: { stages: ["draft", "submitted", "approved", "issued"] },
    is_active: true,
    description: "Workflow for store requisition approvals",
    note: "Store requisition process",
    info: { version: "1.5", category: "requisition" },
    dimension: { department: "Store", region: "All" },
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: getUuidByName("USER_ADMIN"),
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("WORKFLOW_04"),
    name: "Purchase Order Workflow",
    workflow_type: "purchase_order_workflow",
    data: { stages: ["draft", "submitted", "approved", "ordered", "received"] },
    is_active: true,
    description: "Workflow for purchase order processing",
    note: "Purchase order workflow",
    info: { version: "2.1", category: "purchase" },
    dimension: { department: "Procurement", region: "All" },
    created_at: "2024-01-16T09:00:00Z",
    created_by_id: getUuidByName("USER_ADMIN"),
    updated_at: "2024-01-16T09:00:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("WORKFLOW_05"),
    name: "GRN Workflow",
    workflow_type: "grn_workflow",
    data: {
      stages: ["draft", "submitted", "approved", "received", "completed"],
    },
    is_active: true,
    description: "Workflow for goods received note processing",
    note: "GRN workflow process",
    info: { version: "1.8", category: "receiving" },
    dimension: { department: "Warehouse", region: "All" },
    created_at: "2024-01-17T08:00:00Z",
    created_by_id: getUuidByName("USER_ADMIN"),
    updated_at: "2024-01-17T08:00:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
];

// CREATE - สร้าง Workflow ใหม่
export const createWorkflow = (
  data: Omit<
    Workflow,
    "id" | "created_at" | "created_by_id" | "updated_at" | "updated_by_id"
  >
): Workflow => {
  const newWorkflow: Workflow = {
    ...data,
    id: generateId(),
    created_at: getCurrentTimestamp(),
    created_by_id: "system",
    updated_at: getCurrentTimestamp(),
    updated_by_id: "system",
  };

  workflows.push(newWorkflow);
  return newWorkflow;
};

// READ - อ่านข้อมูล Workflow
export const getAllWorkflows = (): Workflow[] => {
  return workflows.filter((workflow) => !workflow.deleted_at);
};

export const getWorkflowById = (id: string): Workflow | null => {
  const workflow = workflows.find((w) => w.id === id && !w.deleted_at);
  return workflow || null;
};

export const getWorkflowByName = (name: string): Workflow[] => {
  return workflows.filter(
    (workflow) =>
      workflow.name.toLowerCase().includes(name.toLowerCase()) &&
      !workflow.deleted_at
  );
};

export const getWorkflowsByType = (
  workflowType:
    | "purchase_request_workflow"
    | "store_requisition_workflow"
    | "purchase_order_workflow"
    | "grn_workflow"
    | "other"
): Workflow[] => {
  return workflows.filter(
    (workflow) =>
      workflow.workflow_type === workflowType && !workflow.deleted_at
  );
};

export const getActiveWorkflows = (): Workflow[] => {
  return workflows.filter(
    (workflow) => workflow.is_active && !workflow.deleted_at
  );
};

export const getInactiveWorkflows = (): Workflow[] => {
  return workflows.filter(
    (workflow) => !workflow.is_active && !workflow.deleted_at
  );
};

export const getWorkflowsByCreator = (createdById: string): Workflow[] => {
  return workflows.filter(
    (workflow) => workflow.created_by_id === createdById && !workflow.deleted_at
  );
};

export const getWorkflowsByDateRange = (
  startDate: string,
  endDate: string
): Workflow[] => {
  return workflows.filter((workflow) => {
    const createdDate = new Date(workflow.created_at);
    const start = new Date(startDate);
    const end = new Date(endDate);
    return createdDate >= start && createdDate <= end && !workflow.deleted_at;
  });
};

export const getWorkflowsWithDescription = (): Workflow[] => {
  return workflows.filter(
    (workflow) => workflow.description !== null && !workflow.deleted_at
  );
};

export const getWorkflowsWithoutDescription = (): Workflow[] => {
  return workflows.filter(
    (workflow) => workflow.description === null && !workflow.deleted_at
  );
};

export const getWorkflowsWithNote = (): Workflow[] => {
  return workflows.filter(
    (workflow) => workflow.note !== null && !workflow.deleted_at
  );
};

export const getWorkflowsWithoutNote = (): Workflow[] => {
  return workflows.filter(
    (workflow) => workflow.note === null && !workflow.deleted_at
  );
};

// UPDATE - อัปเดต Workflow
export const updateWorkflow = (
  id: string,
  data: Partial<Omit<Workflow, "id" | "created_at" | "created_by_id">>
): Workflow | null => {
  const index = workflows.findIndex(
    (workflow) => workflow.id === id && !workflow.deleted_at
  );

  if (index === -1) {
    return null;
  }

  workflows[index] = {
    ...workflows[index],
    ...data,
    updated_at: getCurrentTimestamp(),
    updated_by_id: "system",
  };

  return workflows[index];
};

// UPDATE - อัปเดต Workflow name
export const updateWorkflowName = (
  id: string,
  name: string
): Workflow | null => {
  return updateWorkflow(id, { name });
};

// UPDATE - อัปเดต Workflow description
export const updateWorkflowDescription = (
  id: string,
  description: string
): Workflow | null => {
  return updateWorkflow(id, { description });
};

// UPDATE - อัปเดต Workflow type
export const updateWorkflowType = (
  id: string,
  workflowType:
    | "purchase_request_workflow"
    | "store_requisition_workflow"
    | "purchase_order_workflow"
    | "grn_workflow"
    | "other"
): Workflow | null => {
  return updateWorkflow(id, { workflow_type: workflowType });
};

// UPDATE - อัปเดต Workflow active status
export const updateWorkflowActiveStatus = (
  id: string,
  isActive: boolean
): Workflow | null => {
  return updateWorkflow(id, { is_active: isActive });
};

// UPDATE - อัปเดต Workflow note
export const updateWorkflowNote = (
  id: string,
  note: string
): Workflow | null => {
  return updateWorkflow(id, { note });
};

// UPDATE - อัปเดต Workflow info
export const updateWorkflowInfo = (id: string, info: any): Workflow | null => {
  return updateWorkflow(id, { info });
};

// UPDATE - อัปเดต Workflow dimension
export const updateWorkflowDimension = (
  id: string,
  dimension: any
): Workflow | null => {
  return updateWorkflow(id, { dimension });
};

// UPDATE - อัปเดต Workflow data
export const updateWorkflowData = (id: string, data: any): Workflow | null => {
  return updateWorkflow(id, { data });
};

// DELETE - Soft delete Workflow
export const softDeleteWorkflow = (
  id: string,
  deletedById: string
): Workflow | null => {
  const workflow = getWorkflowById(id);
  if (!workflow) return null;

  workflow.deleted_at = getCurrentTimestamp();
  workflow.deleted_by_id = deletedById;
  workflow.updated_at = getCurrentTimestamp();
  workflow.updated_by_id = deletedById;

  return workflow;
};

// DELETE - Hard delete Workflow
export const hardDeleteWorkflow = (id: string): boolean => {
  const index = workflows.findIndex((workflow) => workflow.id === id);

  if (index === -1) {
    return false;
  }

  workflows.splice(index, 1);
  return true;
};

// DELETE - ลบ Workflow ตาม name
export const deleteWorkflowByName = (
  name: string,
  deletedById: string
): boolean => {
  const workflow = workflows.find((w) => w.name === name && !w.deleted_at);
  if (!workflow) return false;

  return softDeleteWorkflow(workflow.id, deletedById) !== null;
};

// DELETE - ลบ Workflow ตาม type
export const deleteWorkflowsByType = (
  workflowType:
    | "purchase_request_workflow"
    | "store_requisition_workflow"
    | "purchase_order_workflow"
    | "grn_workflow"
    | "other",
  deletedById: string
): boolean => {
  const workflowsByType = getWorkflowsByType(workflowType);
  let deletedCount = 0;

  workflowsByType.forEach((workflow) => {
    if (softDeleteWorkflow(workflow.id, deletedById)) {
      deletedCount++;
    }
  });

  return deletedCount > 0;
};

// RESTORE - กู้คืน Workflow ที่ถูก soft delete
export const restoreWorkflow = (id: string): Workflow | null => {
  const workflow = workflows.find((w) => w.id === id);
  if (!workflow || !workflow.deleted_at) return null;

  workflow.deleted_at = null;
  workflow.deleted_by_id = null;
  workflow.updated_at = getCurrentTimestamp();
  workflow.updated_by_id = "system";

  return workflow;
};

// ADVANCED SEARCH - ค้นหา Workflow แบบขั้นสูง
export const searchWorkflows = (criteria: {
  name?: string;
  description?: string;
  workflow_type?:
    | "purchase_request_workflow"
    | "store_requisition_workflow"
    | "purchase_order_workflow"
    | "grn_workflow"
    | "other";
  is_active?: boolean;
  has_description?: boolean;
  has_note?: boolean;
  created_by_id?: string;
  start_date?: string;
  end_date?: string;
}): Workflow[] => {
  return workflows.filter((workflow) => {
    if (workflow.deleted_at) return false;

    if (
      criteria.name &&
      !workflow.name.toLowerCase().includes(criteria.name.toLowerCase())
    ) {
      return false;
    }

    if (
      criteria.description &&
      workflow.description &&
      !workflow.description
        .toLowerCase()
        .includes(criteria.description.toLowerCase())
    ) {
      return false;
    }

    if (
      criteria.workflow_type &&
      workflow.workflow_type !== criteria.workflow_type
    ) {
      return false;
    }

    if (
      criteria.is_active !== undefined &&
      workflow.is_active !== criteria.is_active
    ) {
      return false;
    }

    if (criteria.has_description !== undefined) {
      const hasDescription = workflow.description !== null;
      if (hasDescription !== criteria.has_description) {
        return false;
      }
    }

    if (criteria.has_note !== undefined) {
      const hasNote = workflow.note !== null;
      if (hasNote !== criteria.has_note) {
        return false;
      }
    }

    if (
      criteria.created_by_id &&
      workflow.created_by_id !== criteria.created_by_id
    ) {
      return false;
    }

    if (criteria.start_date || criteria.end_date) {
      const createdDate = new Date(workflow.created_at);
      if (criteria.start_date && createdDate < new Date(criteria.start_date))
        return false;
      if (criteria.end_date && createdDate > new Date(criteria.end_date))
        return false;
    }

    return true;
  });
};

// UTILITY FUNCTIONS - ฟังก์ชันเสริม
export const getWorkflowCount = (): number => {
  return workflows.filter((workflow) => !workflow.deleted_at).length;
};

export const getActiveWorkflowCount = (): number => {
  return workflows.filter(
    (workflow) => workflow.is_active && !workflow.deleted_at
  ).length;
};

export const getInactiveWorkflowCount = (): number => {
  return workflows.filter(
    (workflow) => !workflow.is_active && !workflow.deleted_at
  ).length;
};

export const getWorkflowCountByType = (
  workflowType:
    | "purchase_request_workflow"
    | "store_requisition_workflow"
    | "purchase_order_workflow"
    | "grn_workflow"
    | "other"
): number => {
  return workflows.filter(
    (workflow) =>
      workflow.workflow_type === workflowType && !workflow.deleted_at
  ).length;
};

export const isWorkflowExists = (id: string): boolean => {
  return workflows.some(
    (workflow) => workflow.id === id && !workflow.deleted_at
  );
};

export const isWorkflowNameExists = (name: string): boolean => {
  return workflows.some(
    (workflow) => workflow.name === name && !workflow.deleted_at
  );
};

export const hasActiveWorkflows = (): boolean => {
  return workflows.some(
    (workflow) => workflow.is_active && !workflow.deleted_at
  );
};

export const hasWorkflowsWithDescription = (): boolean => {
  return workflows.some(
    (workflow) => workflow.description !== null && !workflow.deleted_at
  );
};

export const hasWorkflowsWithNote = (): boolean => {
  return workflows.some(
    (workflow) => workflow.note !== null && !workflow.deleted_at
  );
};

export const clearAllWorkflows = (): void => {
  workflows.length = 0;
};
