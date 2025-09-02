import { generateId, getCurrentTimestamp } from "@/libs/utils";

export interface CurrencyComment {
  id: string;
  type: "currency" | "exchange_rate" | "other";
  user_id: string;
  message: string;
  attachments: any;
  info: any;
  note: string;
  created_at: string;
  created_by_id: string;
  updated_at: string;
  updated_by_id: string | null;
  deleted_at: string | null;
  deleted_by_id: string | null;
}

export const currencyComments: CurrencyComment[] = [
  {
    id: "550e8400-e29b-41d4-a716-446655440001",
    type: "currency",
    user_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    message: "USD exchange rate has been updated",
    attachments: null,
    info: { currency_code: "USD", old_rate: "1.25", new_rate: "1.30" },
    note: "Rate update due to market changes",
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440002",
    type: "exchange_rate",
    user_id: "1bfdb891-58ee-499c-8115-34a964de8122",
    message: "EUR to THB rate fluctuation",
    attachments: null,
    info: { from_currency: "EUR", to_currency: "THB", rate: "38.50" },
    note: "Monitoring rate changes",
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "1bfdb891-58ee-499c-8115-34a964de8122",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440003",
    type: "other",
    user_id: "3c5280a7-492e-421d-b739-7447455ce99e",
    message: "Currency conversion fee adjustment",
    attachments: null,
    info: { fee_type: "conversion", old_fee: "2.5%", new_fee: "2.0%" },
    note: "Fee reduction for better customer experience",
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "3c5280a7-492e-421d-b739-7447455ce99e",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
];

// CREATE - สร้าง CurrencyComment ใหม่
export const createCurrencyComment = (
  currencyCommentData: Omit<CurrencyComment, "id" | "created_at" | "updated_at">
): CurrencyComment => {
  const newCurrencyComment: CurrencyComment = {
    ...currencyCommentData,
    id: generateId(),
    created_at: getCurrentTimestamp(),
    updated_at: getCurrentTimestamp(),
  };

  currencyComments.push(newCurrencyComment);
  return newCurrencyComment;
};

// READ - อ่าน CurrencyComment ทั้งหมด
export const getAllCurrencyComments = (): CurrencyComment[] => {
  return [...currencyComments];
};

// READ - อ่าน CurrencyComment ตาม ID
export const getCurrencyCommentById = (
  id: string
): CurrencyComment | undefined => {
  return currencyComments.find((currencyComment) => currencyComment.id === id);
};

// READ - อ่าน CurrencyComment ตาม type
export const getCurrencyCommentsByType = (
  type: "currency" | "exchange_rate" | "other"
): CurrencyComment[] => {
  return currencyComments.filter(
    (currencyComment) => currencyComment.type === type
  );
};

// READ - อ่าน CurrencyComment ตาม user_id
export const getCurrencyCommentsByUser = (
  userId: string
): CurrencyComment[] => {
  return currencyComments.filter(
    (currencyComment) => currencyComment.user_id === userId
  );
};

// READ - อ่าน CurrencyComment ตาม message
export const getCurrencyCommentsByMessage = (
  message: string
): CurrencyComment[] => {
  return currencyComments.filter((currencyComment) =>
    currencyComment.message.toLowerCase().includes(message.toLowerCase())
  );
};

// READ - อ่าน CurrencyComment ตาม note
export const getCurrencyCommentsByNote = (note: string): CurrencyComment[] => {
  return currencyComments.filter((currencyComment) =>
    currencyComment.note.toLowerCase().includes(note.toLowerCase())
  );
};

// READ - CurrencyComment ที่มี attachments
export const getCurrencyCommentsWithAttachments = (): CurrencyComment[] => {
  return currencyComments.filter(
    (currencyComment) => currencyComment.attachments !== null
  );
};

// READ - CurrencyComment ที่ไม่มี attachments
export const getCurrencyCommentsWithoutAttachments = (): CurrencyComment[] => {
  return currencyComments.filter(
    (currencyComment) => currencyComment.attachments === null
  );
};

// UPDATE - อัปเดต CurrencyComment
export const updateCurrencyComment = (
  id: string,
  updateData: Partial<
    Omit<CurrencyComment, "id" | "created_at" | "created_by_id">
  >
): CurrencyComment | null => {
  const index = currencyComments.findIndex(
    (currencyComment) => currencyComment.id === id
  );

  if (index === -1) {
    return null;
  }

  currencyComments[index] = {
    ...currencyComments[index],
    ...updateData,
    updated_at: getCurrentTimestamp(),
  };

  return currencyComments[index];
};

// UPDATE - อัปเดต CurrencyComment type
export const updateCurrencyCommentType = (
  id: string,
  type: "currency" | "exchange_rate" | "other"
): CurrencyComment | null => {
  return updateCurrencyComment(id, { type });
};

// UPDATE - อัปเดต CurrencyComment message
export const updateCurrencyCommentMessage = (
  id: string,
  message: string
): CurrencyComment | null => {
  return updateCurrencyComment(id, { message });
};

// UPDATE - อัปเดต CurrencyComment note
export const updateCurrencyCommentNote = (
  id: string,
  note: string
): CurrencyComment | null => {
  return updateCurrencyComment(id, { note });
};

// UPDATE - อัปเดต CurrencyComment attachments
export const updateCurrencyCommentAttachments = (
  id: string,
  attachments: any
): CurrencyComment | null => {
  return updateCurrencyComment(id, { attachments });
};

// UPDATE - อัปเดต CurrencyComment info
export const updateCurrencyCommentInfo = (
  id: string,
  info: any
): CurrencyComment | null => {
  return updateCurrencyComment(id, { info });
};

// DELETE - ลบ CurrencyComment (soft delete)
export const deleteCurrencyComment = (
  id: string,
  deletedById: string
): boolean => {
  const index = currencyComments.findIndex(
    (currencyComment) => currencyComment.id === id
  );

  if (index === -1) {
    return false;
  }

  currencyComments[index] = {
    ...currencyComments[index],
    deleted_at: getCurrentTimestamp(),
    deleted_by_id: deletedById,
  };

  return true;
};

// DELETE - ลบ CurrencyComment แบบถาวร
export const hardDeleteCurrencyComment = (id: string): boolean => {
  const index = currencyComments.findIndex(
    (currencyComment) => currencyComment.id === id
  );

  if (index === -1) {
    return false;
  }

  currencyComments.splice(index, 1);
  return true;
};

// DELETE - ลบ CurrencyComment ตาม type
export const deleteCurrencyCommentsByType = (
  type: "currency" | "exchange_rate" | "other",
  deletedById: string
): number => {
  let deletedCount = 0;

  currencyComments.forEach((currencyComment) => {
    if (currencyComment.type === type && !currencyComment.deleted_at) {
      currencyComment.deleted_at = getCurrentTimestamp();
      currencyComment.deleted_by_id = deletedById;
      deletedCount++;
    }
  });

  return deletedCount;
};

// DELETE - ลบ CurrencyComment ตาม user_id
export const deleteCurrencyCommentsByUser = (
  userId: string,
  deletedById: string
): number => {
  let deletedCount = 0;

  currencyComments.forEach((currencyComment) => {
    if (currencyComment.user_id === userId && !currencyComment.deleted_at) {
      currencyComment.deleted_at = getCurrentTimestamp();
      currencyComment.deleted_by_id = deletedById;
      deletedCount++;
    }
  });

  return deletedCount;
};

// Utility function สำหรับล้างข้อมูลทั้งหมด (ใช้สำหรับ testing)
export const clearAllCurrencyComments = (): void => {
  currencyComments.length = 0;
};

// Utility function สำหรับนับจำนวน CurrencyComment
export const getCurrencyCommentCount = (): number => {
  return currencyComments.length;
};

// Utility function สำหรับนับจำนวน CurrencyComment ตาม type
export const getCurrencyCommentCountByType = (
  type: "currency" | "exchange_rate" | "other"
): number => {
  return currencyComments.filter(
    (currencyComment) => currencyComment.type === type
  ).length;
};

// Utility function สำหรับนับจำนวน CurrencyComment ตาม user_id
export const getCurrencyCommentCountByUser = (userId: string): number => {
  return currencyComments.filter(
    (currencyComment) => currencyComment.user_id === userId
  ).length;
};

// Utility function สำหรับค้นหา CurrencyComment แบบ advanced search
export const searchCurrencyComments = (searchCriteria: {
  type?: "currency" | "exchange_rate" | "other";
  user_id?: string;
  message?: string;
  note?: string;
  has_attachments?: boolean;
}): CurrencyComment[] => {
  return currencyComments.filter((currencyComment) => {
    if (searchCriteria.type && currencyComment.type !== searchCriteria.type) {
      return false;
    }

    if (
      searchCriteria.user_id &&
      currencyComment.user_id !== searchCriteria.user_id
    ) {
      return false;
    }

    if (
      searchCriteria.message &&
      !currencyComment.message
        .toLowerCase()
        .includes(searchCriteria.message.toLowerCase())
    ) {
      return false;
    }

    if (
      searchCriteria.note &&
      !currencyComment.note
        .toLowerCase()
        .includes(searchCriteria.note.toLowerCase())
    ) {
      return false;
    }

    if (searchCriteria.has_attachments !== undefined) {
      const hasAttachments = currencyComment.attachments !== null;
      if (hasAttachments !== searchCriteria.has_attachments) {
        return false;
      }
    }

    return true;
  });
};

// Utility function สำหรับตรวจสอบ CurrencyComment ตาม type
export const hasCurrencyCommentsByType = (
  type: "currency" | "exchange_rate" | "other"
): boolean => {
  return currencyComments.some(
    (currencyComment) => currencyComment.type === type
  );
};

// Utility function สำหรับตรวจสอบ CurrencyComment ตาม user
export const hasCurrencyCommentsByUser = (userId: string): boolean => {
  return currencyComments.some(
    (currencyComment) => currencyComment.user_id === userId
  );
};

// Utility function สำหรับตรวจสอบ CurrencyComment ที่มี attachments
export const hasCurrencyCommentsWithAttachments = (): boolean => {
  return currencyComments.some(
    (currencyComment) => currencyComment.attachments !== null
  );
};
