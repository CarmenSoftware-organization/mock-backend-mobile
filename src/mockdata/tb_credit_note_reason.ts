import { generateId, getCurrentTimestamp } from "@/libs/utils";

export interface CreditNoteReason {
  id: string;
  name: string;
  description: string;
  note: string;
  info: any;
  dimension: any;
  created_at: string;
  created_by_id: string;
  updated_at: string;
  updated_by_id: string | null;
  deleted_at: string | null;
  deleted_by_id: string | null;
}

export const creditNoteReasons: CreditNoteReason[] = [
  {
    id: "550e8400-e29b-41d4-a716-446655440001",
    name: "Return of Goods",
    description: "Customer returned damaged or defective goods",
    note: "Standard return reason",
    info: { category: "return" },
    dimension: null,
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440002",
    name: "Price Adjustment",
    description: "Price correction due to pricing error",
    note: "Pricing correction",
    info: { category: "pricing" },
    dimension: null,
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440003",
    name: "Service Cancellation",
    description: "Service was cancelled before completion",
    note: "Service cancellation",
    info: { category: "service" },
    dimension: null,
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    deleted_at: null,
    deleted_by_id: null,
  },
];

// CREATE - สร้าง CreditNoteReason ใหม่
export const createCreditNoteReason = (
  creditNoteReasonData: Omit<
    CreditNoteReason,
    "id" | "created_at" | "updated_at"
  >
): CreditNoteReason => {
  const newCreditNoteReason: CreditNoteReason = {
    ...creditNoteReasonData,
    id: generateId(),
    created_at: getCurrentTimestamp(),
    updated_at: getCurrentTimestamp(),
  };

  creditNoteReasons.push(newCreditNoteReason);
  return newCreditNoteReason;
};

// READ - อ่าน CreditNoteReason ทั้งหมด
export const getAllCreditNoteReasons = (): CreditNoteReason[] => {
  return [...creditNoteReasons];
};

// READ - อ่าน CreditNoteReason ตาม ID
export const getCreditNoteReasonById = (
  id: string
): CreditNoteReason | undefined => {
  return creditNoteReasons.find(
    (creditNoteReason) => creditNoteReason.id === id
  );
};

// READ - อ่าน CreditNoteReason ตาม name
export const getCreditNoteReasonByName = (name: string): CreditNoteReason[] => {
  return creditNoteReasons.filter((creditNoteReason) =>
    creditNoteReason.name.toLowerCase().includes(name.toLowerCase())
  );
};

// READ - อ่าน CreditNoteReason ตาม description
export const getCreditNoteReasonByDescription = (
  description: string
): CreditNoteReason[] => {
  return creditNoteReasons.filter((creditNoteReason) =>
    creditNoteReason.description
      .toLowerCase()
      .includes(description.toLowerCase())
  );
};

// READ - อ่าน CreditNoteReason ตาม note
export const getCreditNoteReasonByNote = (note: string): CreditNoteReason[] => {
  return creditNoteReasons.filter((creditNoteReason) =>
    creditNoteReason.note.toLowerCase().includes(note.toLowerCase())
  );
};

// UPDATE - อัปเดต CreditNoteReason
export const updateCreditNoteReason = (
  id: string,
  updateData: Partial<
    Omit<CreditNoteReason, "id" | "created_at" | "created_by_id">
  >
): CreditNoteReason | null => {
  const index = creditNoteReasons.findIndex(
    (creditNoteReason) => creditNoteReason.id === id
  );

  if (index === -1) {
    return null;
  }

  creditNoteReasons[index] = {
    ...creditNoteReasons[index],
    ...updateData,
    updated_at: getCurrentTimestamp(),
  };

  return creditNoteReasons[index];
};

// UPDATE - อัปเดต CreditNoteReason name
export const updateCreditNoteReasonName = (
  id: string,
  name: string
): CreditNoteReason | null => {
  return updateCreditNoteReason(id, { name });
};

// UPDATE - อัปเดต CreditNoteReason description
export const updateCreditNoteReasonDescription = (
  id: string,
  description: string
): CreditNoteReason | null => {
  return updateCreditNoteReason(id, { description });
};

// UPDATE - อัปเดต CreditNoteReason note
export const updateCreditNoteReasonNote = (
  id: string,
  note: string
): CreditNoteReason | null => {
  return updateCreditNoteReason(id, { note });
};

// UPDATE - อัปเดต CreditNoteReason info
export const updateCreditNoteReasonInfo = (
  id: string,
  info: any
): CreditNoteReason | null => {
  return updateCreditNoteReason(id, { info });
};

// DELETE - ลบ CreditNoteReason (soft delete)
export const deleteCreditNoteReason = (
  id: string,
  deletedById: string
): boolean => {
  const index = creditNoteReasons.findIndex(
    (creditNoteReason) => creditNoteReason.id === id
  );

  if (index === -1) {
    return false;
  }

  creditNoteReasons[index] = {
    ...creditNoteReasons[index],
    deleted_at: getCurrentTimestamp(),
    deleted_by_id: deletedById,
  };

  return true;
};

// DELETE - ลบ CreditNoteReason แบบถาวร
export const hardDeleteCreditNoteReason = (id: string): boolean => {
  const index = creditNoteReasons.findIndex(
    (creditNoteReason) => creditNoteReason.id === id
  );

  if (index === -1) {
    return false;
  }

  creditNoteReasons.splice(index, 1);
  return true;
};

// DELETE - ลบ CreditNoteReason ตาม name
export const deleteCreditNoteReasonByName = (
  name: string,
  deletedById: string
): boolean => {
  const creditNoteReason = creditNoteReasons.find((cnr) => cnr.name === name);
  if (!creditNoteReason) return false;

  return deleteCreditNoteReason(creditNoteReason.id, deletedById);
};

// Utility function สำหรับล้างข้อมูลทั้งหมด (ใช้สำหรับ testing)
export const clearAllCreditNoteReasons = (): void => {
  creditNoteReasons.length = 0;
};

// Utility function สำหรับนับจำนวน CreditNoteReason
export const getCreditNoteReasonCount = (): number => {
  return creditNoteReasons.length;
};

// Utility function สำหรับค้นหา CreditNoteReason แบบ advanced search
export const searchCreditNoteReasons = (searchCriteria: {
  name?: string;
  description?: string;
  note?: string;
}): CreditNoteReason[] => {
  return creditNoteReasons.filter((creditNoteReason) => {
    if (
      searchCriteria.name &&
      !creditNoteReason.name
        .toLowerCase()
        .includes(searchCriteria.name.toLowerCase())
    ) {
      return false;
    }

    if (
      searchCriteria.description &&
      !creditNoteReason.description
        .toLowerCase()
        .includes(searchCriteria.description.toLowerCase())
    ) {
      return false;
    }

    if (
      searchCriteria.note &&
      !creditNoteReason.note
        .toLowerCase()
        .includes(searchCriteria.note.toLowerCase())
    ) {
      return false;
    }

    return true;
  });
};

// Utility function สำหรับตรวจสอบ name ซ้ำ
export const isCreditNoteReasonNameExists = (name: string): boolean => {
  return creditNoteReasons.some(
    (creditNoteReason) => creditNoteReason.name === name
  );
};
