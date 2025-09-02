import { generateId, getCurrentTimestamp } from "@/libs/utils";

export interface JvDetail {
  id: string;
  jv_header_id: string;
  account_code: string;
  account_name: string;
  sequence_no: number;
  currency_id: string;
  currency_name: string;
  exchange_rate: string;
  debit: string;
  credit: string;
  base_currency_id: string;
  base_currency_name: string;
  base_debit: string;
  base_credit: string;
  description: string;
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

export const jvDetails: JvDetail[] = [
  {
    id: "550e8400-e29b-41d4-a716-446655440701",
    jv_header_id: "550e8400-e29b-41d4-a716-446655440801",
    account_code: "1101",
    account_name: "Cash in Bank",
    sequence_no: 1,
    currency_id: "550e8400-e29b-41d4-a716-446655440003",
    currency_name: "THB",
    exchange_rate: "1.00",
    debit: "100000.00",
    credit: "0.00",
    base_currency_id: "550e8400-e29b-41d4-a716-446655440003",
    base_currency_name: "THB",
    base_debit: "100000.00",
    base_credit: "0.00",
    description: "Cash received from customer",
    note: "Payment for invoice INV-001",
    info: { transaction_type: "Receipt", reference: "INV-001" },
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
    id: "550e8400-e29b-41d4-a716-446655440702",
    jv_header_id: "550e8400-e29b-41d4-a716-446655440801",
    account_code: "1201",
    account_name: "Accounts Receivable",
    sequence_no: 2,
    currency_id: "550e8400-e29b-41d4-a716-446655440003",
    currency_name: "THB",
    exchange_rate: "1.00",
    debit: "0.00",
    credit: "100000.00",
    base_currency_id: "550e8400-e29b-41d4-a716-446655440003",
    base_currency_name: "THB",
    base_debit: "0.00",
    base_credit: "100000.00",
    description: "Customer payment received",
    note: "Settlement of outstanding invoice",
    info: { transaction_type: "Receipt", reference: "INV-001" },
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
    id: "550e8400-e29b-41d4-a716-446655440703",
    jv_header_id: "550e8400-e29b-41d4-a716-446655440802",
    account_code: "5101",
    account_name: "Cost of Goods Sold",
    sequence_no: 1,
    currency_id: "550e8400-e29b-41d4-a716-446655440003",
    currency_name: "THB",
    exchange_rate: "1.00",
    debit: "75000.00",
    credit: "0.00",
    base_currency_id: "550e8400-e29b-41d4-a716-446655440003",
    base_currency_name: "THB",
    base_debit: "75000.00",
    base_credit: "0.00",
    description: "Cost of inventory sold",
    note: "Monthly cost allocation",
    info: { transaction_type: "Expense", reference: "INV-002" },
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
    id: "550e8400-e29b-41d4-a716-446655440704",
    jv_header_id: "550e8400-e29b-41d4-a716-446655440802",
    account_code: "1201",
    account_name: "Inventory",
    sequence_no: 2,
    currency_id: "550e8400-e29b-41d4-a716-446655440003",
    currency_name: "THB",
    exchange_rate: "1.00",
    debit: "0.00",
    credit: "75000.00",
    base_currency_id: "550e8400-e29b-41d4-a716-446655440003",
    base_currency_name: "THB",
    base_debit: "0.00",
    base_credit: "75000.00",
    description: "Inventory reduction",
    note: "Cost of goods sold adjustment",
    info: { transaction_type: "Expense", reference: "INV-002" },
    dimension: { department: "Finance", region: "All" },
    doc_version: "1.0",
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "1bfdb891-58ee-499c-8115-34a964de8122",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
];

// CREATE - สร้าง JvDetail ใหม่
export const createJvDetail = (
  detailData: Omit<JvDetail, "id" | "created_at" | "updated_at">
): JvDetail => {
  const newDetail: JvDetail = {
    ...detailData,
    id: generateId(),
    created_at: getCurrentTimestamp(),
    updated_at: getCurrentTimestamp(),
  };

  jvDetails.push(newDetail);
  return newDetail;
};

// READ - อ่าน JvDetail ทั้งหมด
export const getAllJvDetails = (): JvDetail[] => {
  return [...jvDetails];
};

// READ - อ่าน JvDetail ตาม ID
export const getJvDetailById = (id: string): JvDetail | undefined => {
  return jvDetails.find((detail) => detail.id === id);
};

// READ - อ่าน JvDetail ตาม jv_header_id
export const getJvDetailsByHeaderId = (headerId: string): JvDetail[] => {
  return jvDetails.filter((detail) => detail.jv_header_id === headerId);
};

// READ - อ่าน JvDetail ตาม account_code
export const getJvDetailsByAccountCode = (accountCode: string): JvDetail[] => {
  return jvDetails.filter((detail) => detail.account_code === accountCode);
};

// READ - อ่าน JvDetail ตาม account_name
export const getJvDetailsByAccountName = (accountName: string): JvDetail[] => {
  return jvDetails.filter((detail) =>
    detail.account_name.toLowerCase().includes(accountName.toLowerCase())
  );
};

// READ - อ่าน JvDetail ตาม sequence_no
export const getJvDetailBySequence = (
  headerId: string,
  sequenceNo: number
): JvDetail | undefined => {
  return jvDetails.find(
    (detail) =>
      detail.jv_header_id === headerId && detail.sequence_no === sequenceNo
  );
};

// READ - อ่าน JvDetail ตาม currency_id
export const getJvDetailsByCurrency = (currencyId: string): JvDetail[] => {
  return jvDetails.filter((detail) => detail.currency_id === currencyId);
};

// READ - อ่าน JvDetail ที่มี debit
export const getJvDetailsWithDebit = (): JvDetail[] => {
  return jvDetails.filter((detail) => parseFloat(detail.debit) > 0);
};

// READ - อ่าน JvDetail ที่มี credit
export const getJvDetailsWithCredit = (): JvDetail[] => {
  return jvDetails.filter((detail) => parseFloat(detail.credit) > 0);
};

// READ - ค้นหา JvDetail แบบ fuzzy search
export const searchJvDetails = (searchTerm: string): JvDetail[] => {
  const lowerSearchTerm = searchTerm.toLowerCase();
  return jvDetails.filter(
    (detail) =>
      detail.account_name.toLowerCase().includes(lowerSearchTerm) ||
      detail.description.toLowerCase().includes(lowerSearchTerm) ||
      detail.note.toLowerCase().includes(lowerSearchTerm) ||
      detail.account_code.includes(lowerSearchTerm)
  );
};

// UPDATE - อัปเดต JvDetail
export const updateJvDetail = (
  id: string,
  updateData: Partial<Omit<JvDetail, "id" | "created_at" | "created_by_id">>
): JvDetail | null => {
  const index = jvDetails.findIndex((detail) => detail.id === id);

  if (index === -1) {
    return null;
  }

  jvDetails[index] = {
    ...jvDetails[index],
    ...updateData,
    updated_at: getCurrentTimestamp(),
  };

  return jvDetails[index];
};

// UPDATE - อัปเดต JvDetail sequence
export const updateJvDetailSequence = (
  id: string,
  sequenceNo: number
): JvDetail | null => {
  return updateJvDetail(id, { sequence_no: sequenceNo });
};

// UPDATE - อัปเดต JvDetail amounts
export const updateJvDetailAmounts = (
  id: string,
  debit: string,
  credit: string,
  baseDebit: string,
  baseCredit: string
): JvDetail | null => {
  return updateJvDetail(id, {
    debit,
    credit,
    base_debit: baseDebit,
    base_credit: baseCredit,
  });
};

// UPDATE - อัปเดต JvDetail description
export const updateJvDetailDescription = (
  id: string,
  description: string
): JvDetail | null => {
  return updateJvDetail(id, { description });
};

// DELETE - ลบ JvDetail (soft delete)
export const deleteJvDetail = (id: string, deletedById: string): boolean => {
  const index = jvDetails.findIndex((detail) => detail.id === id);

  if (index === -1) {
    return false;
  }

  jvDetails[index] = {
    ...jvDetails[index],
    deleted_at: getCurrentTimestamp(),
    deleted_by_id: deletedById,
  };

  return true;
};

// DELETE - ลบ JvDetail แบบถาวร
export const hardDeleteJvDetail = (id: string): boolean => {
  const index = jvDetails.findIndex((detail) => detail.id === id);

  if (index === -1) {
    return false;
  }

  jvDetails.splice(index, 1);
  return true;
};

// DELETE - ลบ JvDetail ตาม jv_header_id
export const deleteJvDetailsByHeaderId = (
  headerId: string,
  deletedById: string
): number => {
  let deletedCount = 0;

  jvDetails.forEach((detail) => {
    if (detail.jv_header_id === headerId && !detail.deleted_at) {
      detail.deleted_at = getCurrentTimestamp();
      detail.deleted_by_id = deletedById;
      deletedCount++;
    }
  });

  return deletedCount;
};

// DELETE - ลบ JvDetail ตาม account_code
export const deleteJvDetailsByAccountCode = (
  accountCode: string,
  deletedById: string
): number => {
  let deletedCount = 0;

  jvDetails.forEach((detail) => {
    if (detail.account_code === accountCode && !detail.deleted_at) {
      detail.deleted_at = getCurrentTimestamp();
      detail.deleted_by_id = deletedById;
      deletedCount++;
    }
  });

  return deletedCount;
};

// Utility function สำหรับล้างข้อมูลทั้งหมด (ใช้สำหรับ testing)
export const clearAllJvDetails = (): void => {
  jvDetails.length = 0;
};

// Utility function สำหรับนับจำนวน JvDetail
export const getJvDetailCount = (): number => {
  return jvDetails.length;
};

// Utility function สำหรับนับจำนวน JvDetail ตาม header_id
export const getJvDetailCountByHeaderId = (headerId: string): number => {
  return jvDetails.filter((detail) => detail.jv_header_id === headerId).length;
};

// Utility function สำหรับนับจำนวน JvDetail ตาม account_code
export const getJvDetailCountByAccountCode = (accountCode: string): number => {
  return jvDetails.filter((detail) => detail.account_code === accountCode)
    .length;
};

// Utility function สำหรับตรวจสอบ sequence_no ซ้ำใน header เดียวกัน
export const isSequenceNoExistsInHeader = (
  headerId: string,
  sequenceNo: number
): boolean => {
  return jvDetails.some(
    (detail) =>
      detail.jv_header_id === headerId && detail.sequence_no === sequenceNo
  );
};

// Utility function สำหรับตรวจสอบ JvDetail ที่ถูกลบแล้ว
export const getDeletedJvDetails = (): JvDetail[] => {
  return jvDetails.filter((detail) => detail.deleted_at !== null);
};

// Utility function สำหรับกู้คืน JvDetail ที่ถูกลบแล้ว
export const restoreJvDetail = (id: string): boolean => {
  const index = jvDetails.findIndex((detail) => detail.id === id);

  if (index === -1) {
    return false;
  }

  if (jvDetails[index].deleted_at) {
    jvDetails[index] = {
      ...jvDetails[index],
      deleted_at: null,
      deleted_by_id: null,
    };
    return true;
  }

  return false;
};

// Utility function สำหรับค้นหา JvDetail แบบ advanced search
export const searchJvDetailsAdvanced = (searchCriteria: {
  jv_header_id?: string;
  account_code?: string;
  account_name?: string;
  currency_id?: string;
  debit_min?: number;
  debit_max?: number;
  credit_min?: number;
  credit_max?: number;
}): JvDetail[] => {
  return jvDetails.filter((detail) => {
    if (
      searchCriteria.jv_header_id &&
      detail.jv_header_id !== searchCriteria.jv_header_id
    ) {
      return false;
    }

    if (
      searchCriteria.account_code &&
      detail.account_code !== searchCriteria.account_code
    ) {
      return false;
    }

    if (
      searchCriteria.account_name &&
      !detail.account_name
        .toLowerCase()
        .includes(searchCriteria.account_name.toLowerCase())
    ) {
      return false;
    }

    if (
      searchCriteria.currency_id &&
      detail.currency_id !== searchCriteria.currency_id
    ) {
      return false;
    }

    if (
      searchCriteria.debit_min !== undefined ||
      searchCriteria.debit_max !== undefined
    ) {
      const debit = parseFloat(detail.debit);
      if (
        searchCriteria.debit_min !== undefined &&
        debit < searchCriteria.debit_min
      ) {
        return false;
      }
      if (
        searchCriteria.debit_max !== undefined &&
        debit > searchCriteria.debit_max
      ) {
        return false;
      }
    }

    if (
      searchCriteria.credit_min !== undefined ||
      searchCriteria.credit_max !== undefined
    ) {
      const credit = parseFloat(detail.credit);
      if (
        searchCriteria.credit_min !== undefined &&
        credit < searchCriteria.credit_min
      ) {
        return false;
      }
      if (
        searchCriteria.credit_max !== undefined &&
        credit > searchCriteria.credit_max
      ) {
        return false;
      }
    }

    return true;
  });
};

// Utility function สำหรับคำนวณยอดรวม debit ของ header
export const calculateHeaderTotalDebit = (headerId: string): number => {
  return jvDetails
    .filter((detail) => detail.jv_header_id === headerId)
    .reduce((total, detail) => total + parseFloat(detail.debit), 0);
};

// Utility function สำหรับคำนวณยอดรวม credit ของ header
export const calculateHeaderTotalCredit = (headerId: string): number => {
  return jvDetails
    .filter((detail) => detail.jv_header_id === headerId)
    .reduce((total, detail) => total + parseFloat(detail.credit), 0);
};

// Utility function สำหรับคำนวณยอดรวม base debit ของ header
export const calculateHeaderTotalBaseDebit = (headerId: string): number => {
  return jvDetails
    .filter((detail) => detail.jv_header_id === headerId)
    .reduce((total, detail) => total + parseFloat(detail.base_debit), 0);
};

// Utility function สำหรับคำนวณยอดรวม base credit ของ header
export const calculateHeaderTotalBaseCredit = (headerId: string): number => {
  return jvDetails
    .filter((detail) => detail.jv_header_id === headerId)
    .reduce((total, detail) => total + parseFloat(detail.base_credit), 0);
};

// Utility function สำหรับตรวจสอบความสมดุลของ header
export const isHeaderBalanced = (headerId: string): boolean => {
  const totalDebit = calculateHeaderTotalDebit(headerId);
  const totalCredit = calculateHeaderTotalCredit(headerId);
  return Math.abs(totalDebit - totalCredit) < 0.01; // Allow for rounding differences
};

// Utility function สำหรับตรวจสอบความสมดุลของ base currency
export const isHeaderBaseBalanced = (headerId: string): boolean => {
  const totalBaseDebit = calculateHeaderTotalBaseDebit(headerId);
  const totalBaseCredit = calculateHeaderTotalBaseCredit(headerId);
  return Math.abs(totalBaseDebit - totalBaseCredit) < 0.01; // Allow for rounding differences
};
