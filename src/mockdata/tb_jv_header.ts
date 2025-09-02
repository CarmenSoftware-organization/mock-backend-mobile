import { generateId, getCurrentTimestamp } from "@/libs/utils";

export interface JvHeader {
  id: string;
  currency_id: string;
  currency_name: string;
  exchange_rate: string;
  base_currency_id: string;
  base_currency_name: string;
  jv_type: string;
  jv_no: string;
  jv_date: string;
  description: string;
  note: string;
  jv_status: "draft" | "posted" | "cancelled";
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

export const jvHeaders: JvHeader[] = [
  {
    id: "550e8400-e29b-41d4-a716-446655440801",
    currency_id: "550e8400-e29b-41d4-a716-446655440003",
    currency_name: "THB",
    exchange_rate: "1.00",
    base_currency_id: "550e8400-e29b-41d4-a716-446655440003",
    base_currency_name: "THB",
    jv_type: "General",
    jv_no: "JV-2024-001",
    jv_date: "2024-01-15",
    description: "Monthly expense allocation",
    note: "Regular monthly journal entry",
    jv_status: "posted",
    workflow_id: "550e8400-e29b-41d4-a716-446655440901",
    workflow_name: "JV Approval Workflow",
    workflow_history: [
      {
        stage: "Draft",
        action: "Created",
        date: "2024-01-15T10:00:00Z",
        user: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
      },
      {
        stage: "Review",
        action: "Submitted",
        date: "2024-01-15T10:15:00Z",
        user: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
      },
      {
        stage: "Approval",
        action: "Approved",
        date: "2024-01-15T10:25:00Z",
        user: "3c5280a7-492e-421d-b739-7447455ce99e",
      },
    ],
    workflow_current_stage: "Completed",
    workflow_previous_stage: "Approval",
    workflow_next_stage: "Completed",
    user_action: {
      current_user: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
      available_actions: ["view"],
    },
    last_action: "complete",
    last_action_at_date: "2024-01-15T10:30:00Z",
    last_action_by_id: "3c5280a7-492e-421d-b739-7447455ce99e",
    last_action_by_name: "John Manager",
    info: {
      total_debit: 100000.0,
      total_credit: 100000.0,
      posted_date: "2024-01-15",
    },
    dimension: { department: "Finance", region: "All" },
    doc_version: "1.0",
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440802",
    currency_id: "550e8400-e29b-41d4-a716-446655440003",
    currency_name: "THB",
    exchange_rate: "1.00",
    base_currency_id: "550e8400-e29b-41d4-a716-446655440003",
    base_currency_name: "THB",
    jv_type: "Inventory",
    jv_no: "JV-2024-002",
    jv_date: "2024-01-16",
    description: "Inventory adjustment",
    note: "Year-end inventory valuation",
    jv_status: "draft",
    workflow_id: "550e8400-e29b-41d4-a716-446655440901",
    workflow_name: "JV Approval Workflow",
    workflow_history: [
      {
        stage: "Draft",
        action: "Created",
        date: "2024-01-16T09:00:00Z",
        user: "1bfdb891-58ee-499c-8115-34a964de8122",
      },
    ],
    workflow_current_stage: "Draft",
    workflow_previous_stage: "Draft",
    workflow_next_stage: "Review",
    user_action: {
      current_user: "1bfdb891-58ee-499c-8115-34a964de8122",
      available_actions: ["edit", "submit", "delete"],
    },
    last_action: "submit",
    last_action_at_date: "2024-01-16T09:00:00Z",
    last_action_by_id: "1bfdb891-58ee-499c-8115-34a964de8122",
    last_action_by_name: "Jane Accountant",
    info: { total_debit: 75000.0, total_credit: 75000.0, posted_date: null },
    dimension: { department: "Finance", region: "All" },
    doc_version: "1.0",
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "1bfdb891-58ee-499c-8115-34a964de8122",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440803",
    currency_id: "550e8400-e29b-41d4-a716-446655440003",
    currency_name: "THB",
    exchange_rate: "1.00",
    base_currency_id: "550e8400-e29b-41d4-a716-446655440003",
    base_currency_name: "THB",
    jv_type: "Depreciation",
    jv_no: "JV-2024-003",
    jv_date: "2024-01-17",
    description: "Depreciation expense",
    note: "Monthly depreciation calculation",
    jv_status: "posted",
    workflow_id: "550e8400-e29b-41d4-a716-446655440901",
    workflow_name: "JV Approval Workflow",
    workflow_history: [
      {
        stage: "Draft",
        action: "Created",
        date: "2024-01-17T08:00:00Z",
        user: "3c5280a7-492e-421d-b739-7447455ce99e",
      },
      {
        stage: "Review",
        action: "Submitted",
        date: "2024-01-17T08:15:00Z",
        user: "3c5280a7-492e-421d-b739-7447455ce99e",
      },
      {
        stage: "Approval",
        action: "Approved",
        date: "2024-01-17T08:25:00Z",
        user: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
      },
    ],
    workflow_current_stage: "Completed",
    workflow_previous_stage: "Approval",
    workflow_next_stage: "Completed",
    user_action: {
      current_user: "3c5280a7-492e-421d-b739-7447455ce99e",
      available_actions: ["view"],
    },
    last_action: "complete",
    last_action_at_date: "2024-01-17T08:30:00Z",
    last_action_by_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    last_action_by_name: "Sam Admin",
    info: {
      total_debit: 25000.0,
      total_credit: 25000.0,
      posted_date: "2024-01-17",
    },
    dimension: { department: "Finance", region: "All" },
    doc_version: "1.0",
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "3c5280a7-492e-421d-b739-7447455ce99e",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
];

// CREATE - สร้าง JvHeader ใหม่
export const createJvHeader = (
  jvHeaderData: Omit<JvHeader, "id" | "created_at" | "updated_at">
): JvHeader => {
  const newJvHeader: JvHeader = {
    ...jvHeaderData,
    id: generateId(),
    created_at: getCurrentTimestamp(),
    updated_at: getCurrentTimestamp(),
  };

  jvHeaders.push(newJvHeader);
  return newJvHeader;
};

// READ - อ่าน JvHeader ทั้งหมด
export const getAllJvHeaders = (): JvHeader[] => {
  return [...jvHeaders];
};

// READ - อ่าน JvHeader ตาม ID
export const getJvHeaderById = (id: string): JvHeader | undefined => {
  return jvHeaders.find((jv) => jv.id === id);
};

// READ - อ่าน JvHeader ตาม JV number
export const getJvHeaderByNumber = (jvNumber: string): JvHeader | undefined => {
  return jvHeaders.find((jv) => jv.jv_no === jvNumber);
};

// READ - อ่าน JvHeader ตาม status
export const getJvHeadersByStatus = (
  status: "draft" | "posted" | "cancelled"
): JvHeader[] => {
  return jvHeaders.filter((jv) => jv.jv_status === status);
};

// READ - อ่าน JvHeader ตาม JV date
export const getJvHeadersByDate = (jvDate: string): JvHeader[] => {
  return jvHeaders.filter((jv) => jv.jv_date === jvDate);
};

// READ - อ่าน JvHeader ตาม date range
export const getJvHeadersByDateRange = (
  startDate: string,
  endDate: string
): JvHeader[] => {
  return jvHeaders.filter(
    (jv) => jv.jv_date >= startDate && jv.jv_date <= endDate
  );
};

// READ - อ่าน JvHeader ตาม currency_id
export const getJvHeadersByCurrency = (currencyId: string): JvHeader[] => {
  return jvHeaders.filter((jv) => jv.currency_id === currencyId);
};

// READ - อ่าน JvHeader ที่ posted
export const getPostedJvHeaders = (): JvHeader[] => {
  return jvHeaders.filter((jv) => jv.jv_status === "posted");
};

// READ - อ่าน JvHeader ที่ draft
export const getDraftJvHeaders = (): JvHeader[] => {
  return jvHeaders.filter((jv) => jv.jv_status === "draft");
};

// READ - อ่าน JvHeader ที่ cancelled
export const getCancelledJvHeaders = (): JvHeader[] => {
  return jvHeaders.filter((jv) => jv.jv_status === "cancelled");
};

// READ - อ่าน JvHeader ตาม description
export const getJvHeadersByDescription = (description: string): JvHeader[] => {
  return jvHeaders.filter((jv) =>
    jv.description.toLowerCase().includes(description.toLowerCase())
  );
};

// READ - อ่าน JvHeader ตาม amount range
export const getJvHeadersByAmountRange = (
  minAmount: number,
  maxAmount: number
): JvHeader[] => {
  return jvHeaders.filter((jv) => {
    const totalDebit = jv.info?.total_debit || 0;
    return totalDebit >= minAmount && totalDebit <= maxAmount;
  });
};

// READ - อ่าน JvHeader ที่มี notes
export const getJvHeadersWithNotes = (): JvHeader[] => {
  return jvHeaders.filter((jv) => jv.note && jv.note.trim() !== "");
};

// READ - ค้นหา JvHeader แบบ fuzzy search
export const searchJvHeaders = (searchTerm: string): JvHeader[] => {
  const lowerSearchTerm = searchTerm.toLowerCase();
  return jvHeaders.filter(
    (jv) =>
      jv.jv_no.toLowerCase().includes(lowerSearchTerm) ||
      jv.description.toLowerCase().includes(lowerSearchTerm) ||
      (jv.note && jv.note.toLowerCase().includes(lowerSearchTerm))
  );
};

// UPDATE - อัปเดต JvHeader
export const updateJvHeader = (
  id: string,
  updateData: Partial<Omit<JvHeader, "id" | "created_at" | "created_by_id">>
): JvHeader | null => {
  const index = jvHeaders.findIndex((jv) => jv.id === id);

  if (index === -1) {
    return null;
  }

  jvHeaders[index] = {
    ...jvHeaders[index],
    ...updateData,
    updated_at: getCurrentTimestamp(),
  };

  return jvHeaders[index];
};

// UPDATE - อัปเดต JvHeader status
export const updateJvHeaderStatus = (
  id: string,
  status: "draft" | "posted" | "cancelled"
): JvHeader | null => {
  return updateJvHeader(id, { jv_status: status });
};

// UPDATE - อัปเดต JvHeader JV date
export const updateJvHeaderDate = (
  id: string,
  jvDate: string
): JvHeader | null => {
  return updateJvHeader(id, { jv_date: jvDate });
};

// UPDATE - อัปเดต JvHeader description
export const updateJvHeaderDescription = (
  id: string,
  description: string
): JvHeader | null => {
  return updateJvHeader(id, { description });
};

// UPDATE - อัปเดต JvHeader totals
export const updateJvHeaderTotals = (
  id: string,
  totalDebit: number,
  totalCredit: number
): JvHeader | null => {
  return updateJvHeader(id, {
    info: {
      total_debit: totalDebit,
      total_credit: totalCredit,
      posted_date: new Date().toISOString().split("T")[0],
    },
  });
};

// UPDATE - อัปเดต JvHeader note
export const updateJvHeaderNote = (
  id: string,
  note: string
): JvHeader | null => {
  return updateJvHeader(id, { note });
};

// UPDATE - อัปเดต JvHeader currency
export const updateJvHeaderCurrency = (
  id: string,
  currencyId: string
): JvHeader | null => {
  return updateJvHeader(id, { currency_id: currencyId });
};

// UPDATE - Post JvHeader
export const postJvHeader = (
  id: string,
  postedById: string
): JvHeader | null => {
  const today = new Date().toISOString().split("T")[0];
  return updateJvHeader(id, {
    jv_status: "posted",
    info: {
      posted_date: today,
    },
    last_action: "complete",
    last_action_at_date: new Date().toISOString(),
    last_action_by_id: postedById,
  });
};

// UPDATE - Unpost JvHeader
export const unpostJvHeader = (id: string): JvHeader | null => {
  return updateJvHeader(id, {
    jv_status: "draft",
    info: {
      posted_date: null,
    },
    last_action: "submit",
    last_action_at_date: new Date().toISOString(),
  });
};

// DELETE - ลบ JvHeader (soft delete)
export const deleteJvHeader = (id: string, deletedById: string): boolean => {
  const index = jvHeaders.findIndex((jv) => jv.id === id);

  if (index === -1) {
    return false;
  }

  jvHeaders[index] = {
    ...jvHeaders[index],
    deleted_at: getCurrentTimestamp(),
    deleted_by_id: deletedById,
  };

  return true;
};

// DELETE - ลบ JvHeader แบบถาวร
export const hardDeleteJvHeader = (id: string): boolean => {
  const index = jvHeaders.findIndex((jv) => jv.id === id);

  if (index === -1) {
    return false;
  }

  jvHeaders.splice(index, 1);
  return true;
};

// DELETE - ลบ JvHeader ตาม JV number
export const deleteJvHeaderByNumber = (
  jvNumber: string,
  deletedById: string
): boolean => {
  const jv = getJvHeaderByNumber(jvNumber);
  if (jv) {
    return deleteJvHeader(jv.id, deletedById);
  }
  return false;
};

// DELETE - ลบ JvHeader ตาม status
export const deleteJvHeadersByStatus = (
  status: "draft" | "posted" | "cancelled",
  deletedById: string
): number => {
  let deletedCount = 0;

  jvHeaders.forEach((jv) => {
    if (jv.jv_status === status && !jv.deleted_at) {
      jv.deleted_at = getCurrentTimestamp();
      jv.deleted_by_id = deletedById;
      deletedCount++;
    }
  });

  return deletedCount;
};

// DELETE - ลบ JvHeader ตาม currency_id
export const deleteJvHeadersByCurrency = (
  currencyId: string,
  deletedById: string
): number => {
  let deletedCount = 0;

  jvHeaders.forEach((jv) => {
    if (jv.currency_id === currencyId && !jv.deleted_at) {
      jv.deleted_at = getCurrentTimestamp();
      jv.deleted_by_id = deletedById;
      deletedCount++;
    }
  });

  return deletedCount;
};

// Utility function สำหรับล้างข้อมูลทั้งหมด (ใช้สำหรับ testing)
export const clearAllJvHeaders = (): void => {
  jvHeaders.length = 0;
};

// Utility function สำหรับนับจำนวน JvHeader
export const getJvHeaderCount = (): number => {
  return jvHeaders.length;
};

// Utility function สำหรับนับจำนวน JvHeader ตาม status
export const getJvHeaderCountByStatus = (
  status: "draft" | "posted" | "cancelled"
): number => {
  return jvHeaders.filter((jv) => jv.jv_status === status).length;
};

// Utility function สำหรับนับจำนวน JvHeader ตาม currency_id
export const getJvHeaderCountByCurrency = (currencyId: string): number => {
  return jvHeaders.filter((jv) => jv.currency_id === currencyId).length;
};

// Utility function สำหรับตรวจสอบ JvHeader JV number ซ้ำ
export const isJvHeaderNumberExists = (jvNumber: string): boolean => {
  return jvHeaders.some((jv) => jv.jv_no === jvNumber);
};

// Utility function สำหรับตรวจสอบ JvHeader ที่ถูกลบแล้ว
export const getDeletedJvHeaders = (): JvHeader[] => {
  return jvHeaders.filter((jv) => jv.deleted_at !== null);
};

// Utility function สำหรับกู้คืน JvHeader ที่ถูกลบแล้ว
export const restoreJvHeader = (id: string): boolean => {
  const index = jvHeaders.findIndex((jv) => jv.id === id);

  if (index === -1) {
    return false;
  }

  if (jvHeaders[index].deleted_at) {
    jvHeaders[index] = {
      ...jvHeaders[index],
      deleted_at: null,
      deleted_by_id: null,
    };
    return true;
  }

  return false;
};

// Utility function สำหรับค้นหา JvHeader แบบ advanced search
export const searchJvHeadersAdvanced = (searchCriteria: {
  jv_no?: string;
  jv_status?: "draft" | "posted" | "cancelled";
  jv_date?: string;
  currency_id?: string;
  min_amount?: number;
  max_amount?: number;
  has_notes?: boolean;
  is_posted?: boolean;
}): JvHeader[] => {
  return jvHeaders.filter((jv) => {
    if (
      searchCriteria.jv_no &&
      !jv.jv_no.toLowerCase().includes(searchCriteria.jv_no.toLowerCase())
    ) {
      return false;
    }

    if (searchCriteria.jv_status && jv.jv_status !== searchCriteria.jv_status) {
      return false;
    }

    if (searchCriteria.jv_date && jv.jv_date !== searchCriteria.jv_date) {
      return false;
    }

    if (
      searchCriteria.currency_id &&
      jv.currency_id !== searchCriteria.currency_id
    ) {
      return false;
    }

    if (
      searchCriteria.min_amount &&
      (jv.info?.total_debit || 0) < searchCriteria.min_amount
    ) {
      return false;
    }

    if (
      searchCriteria.max_amount &&
      (jv.info?.total_debit || 0) > searchCriteria.max_amount
    ) {
      return false;
    }

    if (searchCriteria.has_notes !== undefined) {
      const hasNotes = jv.note && jv.note.trim() !== "";
      if (hasNotes !== searchCriteria.has_notes) {
        return false;
      }
    }

    if (searchCriteria.is_posted !== undefined) {
      const isPosted = jv.jv_status === "posted";
      if (isPosted !== searchCriteria.is_posted) {
        return false;
      }
    }

    return true;
  });
};
