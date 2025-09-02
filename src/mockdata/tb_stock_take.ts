import { generateId, getCurrentTimestamp } from "@/libs/utils";

export interface StockTake {
  id: string;
  name: string;
  stk_no: string;
  description: string;
  doc_status: "draft" | "submitted" | "approved" | "rejected" | "completed";
  workflow_id: string;
  workflow_name: string;
  workflow_history: any;
  workflow_current_stage: string;
  workflow_previous_stage: string;
  workflow_next_stage: string;
  user_action: any;
  last_action: "submit" | "approve" | "reject" | "complete";
  last_action_at_date: string;
  last_action_by_id: string;
  last_action_by_name: string;
  note: string | null;
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
export const stockTakes: StockTake[] = [
  {
    id: "stk-001",
    name: "Q1 2024 IT Equipment Stock Take",
    stk_no: "STK-2024-001",
    description: "Quarterly stock take for IT equipment and hardware",
    doc_status: "completed",
    workflow_id: "wf-003",
    workflow_name: "Stock Take Approval",
    workflow_history: [
      { stage: "draft", date: "2024-01-05T08:00:00Z", user: "user-001" },
      { stage: "submitted", date: "2024-01-05T09:00:00Z", user: "user-001" },
      { stage: "approved", date: "2024-01-05T15:00:00Z", user: "user-002" },
      { stage: "completed", date: "2024-01-06T10:00:00Z", user: "user-003" },
    ],
    workflow_current_stage: "completed",
    workflow_previous_stage: "approved",
    workflow_next_stage: "",
    user_action: { can_edit: false, can_delete: false, can_approve: false },
    last_action: "complete",
    last_action_at_date: "2024-01-06T10:00:00Z",
    last_action_by_id: "user-003",
    last_action_by_name: "Warehouse Manager",
    note: "All IT equipment counted and verified",
    info: {
      category: "IT Equipment",
      priority: "high",
      location: "IT Storage Room",
    },
    dimension: { cost_center: "IT-001", project: "Q1 Stock Take" },
    doc_version: "1",
    created_at: "2024-01-05T08:00:00Z",
    created_by_id: "user-001",
    updated_at: "2024-01-06T10:00:00Z",
    updated_by_id: "user-003",
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: "stk-002",
    name: "Q1 2024 Office Supplies Stock Take",
    stk_no: "STK-2024-002",
    description: "Quarterly stock take for office supplies and furniture",
    doc_status: "approved",
    workflow_id: "wf-003",
    workflow_name: "Stock Take Approval",
    workflow_history: [
      { stage: "draft", date: "2024-01-12T09:00:00Z", user: "user-004" },
      { stage: "submitted", date: "2024-01-12T10:00:00Z", user: "user-004" },
      { stage: "approved", date: "2024-01-12T16:00:00Z", user: "user-002" },
    ],
    workflow_current_stage: "approved",
    workflow_previous_stage: "submitted",
    workflow_next_stage: "completed",
    user_action: { can_edit: false, can_delete: false, can_approve: false },
    last_action: "approve",
    last_action_at_date: "2024-01-12T16:00:00Z",
    last_action_by_id: "user-002",
    last_action_by_name: "Department Head",
    note: "Office supplies counted, ready for completion",
    info: {
      category: "Office Supplies",
      priority: "medium",
      location: "Admin Storage",
    },
    dimension: { cost_center: "ADMIN-001", project: "Q1 Stock Take" },
    doc_version: "1",
    created_at: "2024-01-12T09:00:00Z",
    created_by_id: "user-004",
    updated_at: "2024-01-12T16:00:00Z",
    updated_by_id: "user-002",
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: "stk-003",
    name: "Q1 2024 Marketing Materials Stock Take",
    stk_no: "STK-2024-003",
    description:
      "Quarterly stock take for marketing materials and promotional items",
    doc_status: "draft",
    workflow_id: "wf-003",
    workflow_name: "Stock Take Approval",
    workflow_history: [
      { stage: "draft", date: "2024-01-19T14:00:00Z", user: "user-005" },
    ],
    workflow_current_stage: "draft",
    workflow_previous_stage: "",
    workflow_next_stage: "submitted",
    user_action: { can_edit: true, can_delete: true, can_approve: false },
    last_action: "submit",
    last_action_at_date: "2024-01-19T14:00:00Z",
    last_action_by_id: "user-005",
    last_action_by_name: "Marketing Staff",
    note: "Marketing materials stock take in progress",
    info: {
      category: "Marketing",
      priority: "low",
      location: "Marketing Storage",
    },
    dimension: { cost_center: "MKT-001", project: "Q1 Stock Take" },
    doc_version: "1",
    created_at: "2024-01-19T14:00:00Z",
    created_by_id: "user-005",
    updated_at: "2024-01-19T14:00:00Z",
    updated_by_id: "user-005",
    deleted_at: null,
    deleted_by_id: null,
  },
];

// CREATE - สร้าง StockTake ใหม่
export const createStockTake = (
  data: Omit<
    StockTake,
    "id" | "created_at" | "created_by_id" | "updated_at" | "updated_by_id"
  >
): StockTake => {
  const newStockTake: StockTake = {
    ...data,
    id: generateId(),
    created_at: getCurrentTimestamp(),
    created_by_id: "system",
    updated_at: getCurrentTimestamp(),
    updated_by_id: "system",
    deleted_at: null,
    deleted_by_id: null,
  };
  stockTakes.push(newStockTake);
  return newStockTake;
};

// READ - อ่านข้อมูล StockTake
export const getAllStockTakes = (): StockTake[] => {
  return stockTakes.filter((stockTake) => !stockTake.deleted_at);
};

export const getStockTakeById = (id: string): StockTake | null => {
  const stockTake = stockTakes.find((st) => st.id === id && !st.deleted_at);
  return stockTake || null;
};

export const getStockTakeByNo = (stkNo: string): StockTake | null => {
  const stockTake = stockTakes.find(
    (st) => st.stk_no === stkNo && !st.deleted_at
  );
  return stockTake || null;
};

export const getStockTakesByStatus = (
  status: StockTake["doc_status"]
): StockTake[] => {
  return stockTakes.filter((st) => st.doc_status === status && !st.deleted_at);
};

export const getStockTakesByWorkflow = (workflowId: string): StockTake[] => {
  return stockTakes.filter(
    (st) => st.workflow_id === workflowId && !st.deleted_at
  );
};

export const getStockTakesByCreator = (createdById: string): StockTake[] => {
  return stockTakes.filter(
    (st) => st.created_by_id === createdById && !st.deleted_at
  );
};

export const getStockTakesByDateRange = (
  startDate: string,
  endDate: string
): StockTake[] => {
  return stockTakes.filter((st) => {
    const createdDate = new Date(st.created_at);
    const start = new Date(startDate);
    const end = new Date(endDate);
    return createdDate >= start && createdDate <= end && !st.deleted_at;
  });
};

export const getStockTakesByName = (name: string): StockTake[] => {
  return stockTakes.filter(
    (st) => st.name.toLowerCase().includes(name.toLowerCase()) && !st.deleted_at
  );
};

// UPDATE - อัปเดต StockTake
export const updateStockTake = (
  id: string,
  data: Partial<Omit<StockTake, "id" | "created_at" | "created_by_id">>
): StockTake | null => {
  const index = stockTakes.findIndex((st) => st.id === id && !st.deleted_at);
  if (index === -1) return null;

  stockTakes[index] = {
    ...stockTakes[index],
    ...data,
    updated_at: getCurrentTimestamp(),
    updated_by_id: "system",
  };
  return stockTakes[index];
};

// UPDATE - อัปเดต StockTake name
export const updateStockTakeName = (
  id: string,
  name: string
): StockTake | null => {
  return updateStockTake(id, { name });
};

// UPDATE - อัปเดต StockTake description
export const updateStockTakeDescription = (
  id: string,
  description: string
): StockTake | null => {
  return updateStockTake(id, { description });
};

// UPDATE - อัปเดต StockTake status
export const updateStockTakeStatus = (
  id: string,
  status: StockTake["doc_status"]
): StockTake | null => {
  return updateStockTake(id, { doc_status: status });
};

// UPDATE - อัปเดต StockTake workflow
export const updateStockTakeWorkflow = (
  id: string,
  workflowId: string,
  workflowName: string
): StockTake | null => {
  return updateStockTake(id, {
    workflow_id: workflowId,
    workflow_name: workflowName,
  });
};

// UPDATE - อัปเดต StockTake note
export const updateStockTakeNote = (
  id: string,
  note: string
): StockTake | null => {
  return updateStockTake(id, { note });
};

// UPDATE - อัปเดต StockTake info
export const updateStockTakeInfo = (
  id: string,
  info: any
): StockTake | null => {
  return updateStockTake(id, { info });
};

// UPDATE - อัปเดต StockTake dimension
export const updateStockTakeDimension = (
  id: string,
  dimension: any
): StockTake | null => {
  return updateStockTake(id, { dimension });
};

// DELETE - Soft delete StockTake
export const softDeleteStockTake = (
  id: string,
  deletedById: string
): StockTake | null => {
  const stockTake = getStockTakeById(id);
  if (!stockTake) return null;

  stockTake.deleted_at = getCurrentTimestamp();
  stockTake.deleted_by_id = deletedById;
  stockTake.updated_at = getCurrentTimestamp();
  stockTake.updated_by_id = deletedById;

  return stockTake;
};

// DELETE - Hard delete StockTake
export const hardDeleteStockTake = (id: string): boolean => {
  const index = stockTakes.findIndex((st) => st.id === id);
  if (index === -1) return false;

  stockTakes.splice(index, 1);
  return true;
};

// RESTORE - กู้คืน StockTake ที่ถูก soft delete
export const restoreStockTake = (id: string): StockTake | null => {
  const stockTake = stockTakes.find((st) => st.id === id);
  if (!stockTake || !stockTake.deleted_at) return null;

  stockTake.deleted_at = null;
  stockTake.deleted_by_id = null;
  stockTake.updated_at = getCurrentTimestamp();
  stockTake.updated_by_id = "system";

  return stockTake;
};

// ADVANCED SEARCH - ค้นหา StockTake แบบขั้นสูง
export const searchStockTakes = (criteria: {
  status?: StockTake["doc_status"];
  workflowId?: string;
  createdById?: string;
  startDate?: string;
  endDate?: string;
  name?: string;
  description?: string;
  note?: string;
}): StockTake[] => {
  return stockTakes.filter((st) => {
    if (st.deleted_at) return false;

    if (criteria.status && st.doc_status !== criteria.status) return false;
    if (criteria.workflowId && st.workflow_id !== criteria.workflowId)
      return false;
    if (criteria.createdById && st.created_by_id !== criteria.createdById)
      return false;

    if (criteria.startDate || criteria.endDate) {
      const createdDate = new Date(st.created_at);
      if (criteria.startDate && createdDate < new Date(criteria.startDate))
        return false;
      if (criteria.endDate && createdDate > new Date(criteria.endDate))
        return false;
    }

    if (
      criteria.name &&
      !st.name.toLowerCase().includes(criteria.name.toLowerCase())
    )
      return false;
    if (
      criteria.description &&
      !st.description.toLowerCase().includes(criteria.description.toLowerCase())
    )
      return false;
    if (
      criteria.note &&
      st.note &&
      !st.note.toLowerCase().includes(criteria.note.toLowerCase())
    )
      return false;

    return true;
  });
};

// UTILITY FUNCTIONS - ฟังก์ชันเสริม
export const getStockTakeCount = (): number => {
  return stockTakes.filter((st) => !st.deleted_at).length;
};

export const getStockTakeCountByStatus = (
  status: StockTake["doc_status"]
): number => {
  return stockTakes.filter((st) => st.doc_status === status && !st.deleted_at)
    .length;
};

export const isStockTakeExists = (id: string): boolean => {
  return stockTakes.some((st) => st.id === id && !st.deleted_at);
};

export const isStockTakeNoExists = (stkNo: string): boolean => {
  return stockTakes.some((st) => st.stk_no === stkNo && !st.deleted_at);
};

export const clearAllStockTakes = (): void => {
  stockTakes.length = 0;
};

export const getNextStockTakeNo = (): string => {
  const currentYear = new Date().getFullYear();
  const yearStockTakes = stockTakes.filter(
    (st) => st.stk_no.includes(`STK-${currentYear}-`) && !st.deleted_at
  );

  if (yearStockTakes.length === 0) {
    return `STK-${currentYear}-001`;
  }

  const numbers = yearStockTakes.map((st) => {
    const match = st.stk_no.match(/STK-\d{4}-(\d+)/);
    return match ? parseInt(match[1]) : 0;
  });

  const maxNumber = Math.max(...numbers);
  const nextNumber = maxNumber + 1;
  return `STK-${currentYear}-${nextNumber.toString().padStart(3, "0")}`;
};
