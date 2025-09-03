import { generateId, getCurrentTimestamp } from "@/libs/utils";
import { getUuidByName } from "./mapping.uuid";

export interface PurchaseRequest {
  id: string;
  bu_id: string;
  pr_no: string;
  pr_date: string;
  description: string | null;
  workflow_id: string;
  workflow_name: string;
  workflow_history: any;
  workflow_current_stage: string | null;
  workflow_previous_stage: string | null;
  workflow_next_stage: string | null;
  user_action: any;
  last_action: "submitted" | "approved" | "rejected" | "completed";
  last_action_at_date: string | null;
  last_action_by_id: string | null;
  last_action_by_name: string | null;
  pr_status: "draft" | "in_progress" | "completed" | "cancelled";
  requestor_id: string;
  requestor_name: string;
  department_id: string;
  department_name: string | null;
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

export const purchaseRequests: PurchaseRequest[] = [
  {
    id: getUuidByName("PURCHASE_REQUEST_01"),
    bu_id: getUuidByName("BU_01"),  
    pr_no: "PR-2024-001",
    pr_date: "2024-01-15",
    description: "IT equipment request for new employees",
    workflow_id: getUuidByName("WORKFLOW_01"),
    workflow_name: "Purchase Request Approval",
    workflow_history: [{ stage: "draft", date: "2024-01-15", user: "user1" }],
    workflow_current_stage: "submitted",
    workflow_previous_stage: "draft",
    workflow_next_stage: "approved",
    user_action: { action: "submit", comment: "Submitted for approval" },
    last_action: "submitted",
    last_action_at_date: "2024-01-15",
    last_action_by_id: "user1",
    last_action_by_name: "John Requestor",
    pr_status: "in_progress",
    requestor_id: getUuidByName("USER_01"),
    requestor_name: "John Requestor",
    department_id: getUuidByName("DEPARTMENT_01"),
    department_name: "IT Department",
    note: "Urgent request for Q1 hiring",
    info: { category: "IT Equipment", priority: "High" },
    dimension: { department: "IT", region: "Central" },
    doc_version: "1.0",
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: getUuidByName("USER_01"),
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("PURCHASE_REQUEST_02"),
    bu_id: getUuidByName("BU_01"),
    pr_no: "PR-2024-002",
    pr_date: "2024-01-16",
    description: "Office supplies for admin team",
    workflow_id: getUuidByName("WORKFLOW_01"),
    workflow_name: "Purchase Request Approval",
    workflow_history: [{ stage: "draft", date: "2024-01-16", user: "user2" }],
    workflow_current_stage: "completed",
    workflow_previous_stage: "approved",
    workflow_next_stage: null,
    user_action: { action: "complete", comment: "Request completed" },
    last_action: "completed",
    last_action_at_date: "2024-01-18",
    last_action_by_id: getUuidByName("USER_03"),
    last_action_by_name: "Mary Manager",
    pr_status: "completed",
    requestor_id: getUuidByName("USER_02"),
    requestor_name: "Jane Requestor",
    department_id: getUuidByName("DEPARTMENT_01"),
    department_name: "Admin Department",
    note: "Standard office supplies",
    info: { category: "Office Supplies", priority: "Medium" },
    dimension: { department: "Admin", region: "All" },
    doc_version: "1.0",
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: getUuidByName("USER_02"),
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("PURCHASE_REQUEST_03"),
    bu_id: getUuidByName("BU_01"),
    pr_no: "PR-2024-003",
    pr_date: "2024-01-17",
    description: "Marketing materials for campaign",
    workflow_id: getUuidByName("WORKFLOW_01"),
    workflow_name: "Purchase Request Approval",
    workflow_history: [{ stage: "draft", date: "2024-01-17", user: "user4" }],
    workflow_current_stage: "rejected",
    workflow_previous_stage: "submitted",
    workflow_next_stage: null,
    user_action: { action: "reject", comment: "Budget exceeded" },
    last_action: "rejected",
    last_action_at_date: "2024-01-19",
    last_action_by_id: getUuidByName("USER_05"),
    last_action_by_name: "Bob Manager",
    pr_status: "cancelled",
    requestor_id: getUuidByName("USER_04"),
    requestor_name: "Alice Requestor",
    department_id: getUuidByName("DEPARTMENT_01"),
    department_name: "Marketing Department",
    note: "Campaign materials for Q1",
    info: { category: "Marketing", priority: "Medium" },
    dimension: { department: "Marketing", region: "All" },
    doc_version: "1.0",
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: getUuidByName("USER_04"),
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("PURCHASE_REQUEST_04"),
    bu_id: getUuidByName("BU_01"),
    pr_no: "PR-2024-004",
    pr_date: "2024-01-18",
    description: "Marketing materials for campaign",
    workflow_id: getUuidByName("WORKFLOW_01"),
    workflow_name: "Purchase Request Approval",
    workflow_history: [{ stage: "draft", date: "2024-01-18", user: "user6" }],
    workflow_current_stage: "submitted",
    workflow_previous_stage: "draft",
    workflow_next_stage: "approved",
    user_action: { action: "submit", comment: "Submitted for approval" },
    last_action: "submitted",
    last_action_at_date: "2024-01-18",
    last_action_by_id: getUuidByName("USER_06"),
    last_action_by_name: "John Requestor",
    pr_status: "in_progress",
    requestor_id: getUuidByName("USER_05"),
    requestor_name: "Jane Requestor",
    department_id: getUuidByName("DEPARTMENT_01"),
    department_name: "Marketing Department",
    note: "Campaign materials for Q1",
    info: { category: "Marketing", priority: "Medium" },
    dimension: { department: "Marketing", region: "All" },
    doc_version: "1.0",
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: getUuidByName("USER_01"),
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("PURCHASE_REQUEST_05"),
    bu_id: getUuidByName("BU_01"),
    pr_no: "PR-2024-005",
    pr_date: "2024-01-19",
    description: "Marketing materials for campaign",
    workflow_id: getUuidByName("WORKFLOW_01"),
    workflow_name: "Purchase Request Approval",
    workflow_history: [{ stage: "draft", date: "2024-01-19", user: "user7" }],
    workflow_current_stage: "submitted",
    workflow_previous_stage: "draft",
    workflow_next_stage: "approved",
    user_action: { action: "submit", comment: "Submitted for approval" },
    last_action: "submitted",
    last_action_at_date: "2024-01-19",
    last_action_by_id: getUuidByName("USER_02"),
    last_action_by_name: "John Requestor",
    pr_status: "in_progress",
    requestor_id: getUuidByName("USER_02"),
    requestor_name: "Jane Requestor",
    department_id: getUuidByName("DEPARTMENT_01"),
    department_name: "Marketing Department",
    note: "Campaign materials for Q1",
    info: { category: "Marketing", priority: "Medium" },
    dimension: { department: "Marketing", region: "All" },
    doc_version: "1.0",
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: getUuidByName("USER_01"),
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
];

// CREATE - สร้าง PurchaseRequest ใหม่
export const createPurchaseRequest = (
  data: Omit<PurchaseRequest, "id" | "created_at" | "created_by_id">
): PurchaseRequest => {
  const newPurchaseRequest: PurchaseRequest = {
    ...data,
    id: generateId(),
    created_at: getCurrentTimestamp(),
    created_by_id: "system",
  };

  purchaseRequests.push(newPurchaseRequest);
  return newPurchaseRequest;
};

// READ - อ่าน PurchaseRequest ทั้งหมด
export const getAllPurchaseRequests = (): PurchaseRequest[] => {
  return purchaseRequests.filter((pr) => !pr.deleted_at);
};

// READ - อ่าน PurchaseRequest ตาม ID
export const getPurchaseRequestById = (id: string): PurchaseRequest | null => {
  const pr = purchaseRequests.find((pr) => pr.id === id && !pr.deleted_at);
  return pr || null;
};

// READ - อ่าน PurchaseRequest ตาม pr_no
export const getPurchaseRequestByPrNo = (
  prNo: string
): PurchaseRequest | null => {
  const pr = purchaseRequests.find((pr) => pr.pr_no === prNo && !pr.deleted_at);
  return pr || null;
};

// READ - อ่าน PurchaseRequest ตาม pr_status
export const getPurchaseRequestsByStatus = (
  status: PurchaseRequest["pr_status"]
): PurchaseRequest[] => {
  return purchaseRequests.filter(
    (pr) => pr.pr_status === status && !pr.deleted_at
  );
};

// READ - อ่าน PurchaseRequest ตาม requestor_id
export const getPurchaseRequestsByRequestor = (
  requestorId: string
): PurchaseRequest[] => {
  return purchaseRequests.filter(
    (pr) => pr.requestor_id === requestorId && !pr.deleted_at
  );
};

// READ - อ่าน PurchaseRequest ตาม department_id
export const getPurchaseRequestsByDepartment = (
  departmentId: string
): PurchaseRequest[] => {
  return purchaseRequests.filter(
    (pr) => pr.department_id === departmentId && !pr.deleted_at
  );
};

// READ - อ่าน PurchaseRequest ตาม last_action
export const getPurchaseRequestsByLastAction = (
  lastAction: PurchaseRequest["last_action"]
): PurchaseRequest[] => {
  return purchaseRequests.filter(
    (pr) => pr.last_action === lastAction && !pr.deleted_at
  );
};


// READ - อ่าน PurchaseRequest ตาม bu_id
export const getPurchaseRequestsByBuId = (
  buId: string
): PurchaseRequest[] => {
  return purchaseRequests.filter(
    (pr) => pr.bu_id === buId && !pr.deleted_at
  );
};

// READ - อ่าน PurchaseRequest ที่มี note
export const getPurchaseRequestsWithNote = (): PurchaseRequest[] => {
  return purchaseRequests.filter(
    (pr) => pr.note && pr.note.trim() !== "" && !pr.deleted_at
  );
};

// READ - อ่าน PurchaseRequest ตามวันที่
export const getPurchaseRequestsByDate = (
  prDate: string
): PurchaseRequest[] => {
  return purchaseRequests.filter(
    (pr) => pr.pr_date === prDate && !pr.deleted_at
  );
};

// READ - อ่าน PurchaseRequests ตามช่วงวันที่
export const getPurchaseRequestsByDateRange = (
  startDate: string,
  endDate: string
): PurchaseRequest[] => {
  return purchaseRequests.filter((pr) => {
    const prDate = new Date(pr.pr_date);
    const start = new Date(startDate);
    const end = new Date(endDate);
    return prDate >= start && prDate <= end && !pr.deleted_at;
  });
};

// READ - อ่าน PurchaseRequests ที่เสร็จสิ้น
export const getCompletedPurchaseRequests = (): PurchaseRequest[] => {
  return purchaseRequests.filter(
    (pr) => pr.pr_status === "completed" && !pr.deleted_at
  );
};

// READ - อ่าน PurchaseRequests ที่รอการอนุมัติ
export const getInProgressPurchaseRequests = (): PurchaseRequest[] => {
  return purchaseRequests.filter(
    (pr) => pr.pr_status === "in_progress" && !pr.deleted_at
  );
};

// READ - อ่าน PurchaseRequests ที่ถูกยกเลิก
export const getCancelledPurchaseRequests = (): PurchaseRequest[] => {
  return purchaseRequests.filter(
    (pr) => pr.pr_status === "cancelled" && !pr.deleted_at
  );
};

// READ - อ่าน PurchaseRequests ที่เป็น draft
export const getDraftPurchaseRequests = (): PurchaseRequest[] => {
  return purchaseRequests.filter(
    (pr) => pr.pr_status === "draft" && !pr.deleted_at
  );
};

// READ - ค้นหา PurchaseRequest แบบ fuzzy search
export const searchPurchaseRequests = (
  searchTerm: string
): PurchaseRequest[] => {
  const lowerSearchTerm = searchTerm.toLowerCase();
  return purchaseRequests.filter(
    (pr) =>
      !pr.deleted_at &&
      (pr.pr_no.toLowerCase().includes(lowerSearchTerm) ||
        pr.description?.toLowerCase().includes(lowerSearchTerm) ||
        pr.requestor_name.toLowerCase().includes(lowerSearchTerm) ||
        pr.department_name?.toLowerCase().includes(lowerSearchTerm) ||
        pr.note?.toLowerCase().includes(lowerSearchTerm))
  );
};

// DELETE - ลบ PurchaseRequest (soft delete)
export const deletePurchaseRequest = (
  id: string,
  deletedById: string
): boolean => {
  const index = purchaseRequests.findIndex((pr) => pr.id === id);

  if (index === -1) {
    return false;
  }

  purchaseRequests[index] = {
    ...purchaseRequests[index],
    deleted_at: getCurrentTimestamp(),
    deleted_by_id: deletedById,
  };

  return true;
};

// DELETE - ลบ PurchaseRequest แบบถาวร
export const hardDeletePurchaseRequest = (id: string): boolean => {
  const index = purchaseRequests.findIndex((pr) => pr.id === id);

  if (index === -1) {
    return false;
  }

  purchaseRequests.splice(index, 1);
  return true;
};

// DELETE - ลบ PurchaseRequest ตาม requestor_id
export const deletePurchaseRequestsByRequestor = (
  requestorId: string,
  deletedById: string
): number => {
  let deletedCount = 0;

  purchaseRequests.forEach((pr) => {
    if (pr.requestor_id === requestorId && !pr.deleted_at) {
      pr.deleted_at = getCurrentTimestamp();
      pr.deleted_by_id = deletedById;
      deletedCount++;
    }
  });

  return deletedCount;
};

// DELETE - ลบ PurchaseRequest ตาม department_id
export const deletePurchaseRequestsByDepartment = (
  departmentId: string,
  deletedById: string
): number => {
  let deletedCount = 0;

  purchaseRequests.forEach((pr) => {
    if (pr.department_id === departmentId && !pr.deleted_at) {
      pr.deleted_at = getCurrentTimestamp();
      pr.deleted_by_id = deletedById;
      deletedCount++;
    }
  });

  return deletedCount;
};

// DELETE - ลบ PurchaseRequest ตาม status
export const deletePurchaseRequestsByStatus = (
  status: PurchaseRequest["pr_status"],
  deletedById: string
): number => {
  let deletedCount = 0;

  purchaseRequests.forEach((pr) => {
    if (pr.pr_status === status && !pr.deleted_at) {
      pr.deleted_at = getCurrentTimestamp();
      pr.deleted_by_id = deletedById;
      deletedCount++;
    }
  });

  return deletedCount;
};

// DELETE - ลบ PurchaseRequest ตาม priority
export const deletePurchaseRequestsByPriority = (
  priority: string,
  deletedById: string
): number => {
  let deletedCount = 0;

  purchaseRequests.forEach((pr) => {
    if (pr.pr_status === priority && !pr.deleted_at) {
      pr.deleted_at = getCurrentTimestamp();
      pr.deleted_by_id = deletedById;
      deletedCount++;
    }
  });

  return deletedCount;
};

// DELETE - ลบ PurchaseRequest ตาม currency_id
export const deletePurchaseRequestsByCurrency = (
  currencyId: string,
  deletedById: string
): number => {
  let deletedCount = 0;

  purchaseRequests.forEach((pr) => {
    if (pr.workflow_id === currencyId && !pr.deleted_at) {
      pr.deleted_at = getCurrentTimestamp();
      pr.deleted_by_id = deletedById;
      deletedCount++;
    }
  });

  return deletedCount;
};

// Utility function สำหรับตรวจสอบ PurchaseRequest PR number ซ้ำ
export const isPurchaseRequestNumberExists = (prNumber: string): boolean => {
  return purchaseRequests.some((pr) => pr.pr_no === prNumber);
};

// Utility function สำหรับตรวจสอบ PurchaseRequest ที่ถูกลบแล้ว
export const getDeletedPurchaseRequests = (): PurchaseRequest[] => {
  return purchaseRequests.filter((pr) => pr.deleted_at !== null);
};

// Utility function สำหรับกู้คืน PurchaseRequest ที่ถูกลบแล้ว
export const restorePurchaseRequest = (id: string): boolean => {
  const index = purchaseRequests.findIndex((pr) => pr.id === id);

  if (index === -1) {
    return false;
  }

  if (purchaseRequests[index].deleted_at) {
    purchaseRequests[index] = {
      ...purchaseRequests[index],
      deleted_at: null,
      deleted_by_id: null,
    };
    return true;
  }

  return false;
};
