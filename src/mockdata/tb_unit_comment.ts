import { generateId, getCurrentTimestamp } from "@/libs/utils";

export interface UnitComment {
  id: string;
  type: "unit" | "conversion" | "other";
  user_id: string;
  user_name: string;
  message: string;
  attachments: any;
  info: any;
  note: string | null;
  created_at: string;
  created_by_id: string;
  updated_at: string;
  updated_by_id: string | null;
  deleted_at: string | null;
  deleted_by_id: string | null;
}

// Sample data
export const unitComments: UnitComment[] = [
  {
    id: "uc-001",
    type: "unit",
    user_id: "user-001",
    user_name: "John Doe",
    message: "Unit BAG is commonly used for rice packaging",
    attachments: null,
    info: { category: "packaging", priority: "low" },
    note: "Standard packaging unit",
    created_at: "2024-01-15T10:00:00Z",
    created_by_id: "user-001",
    updated_at: "2024-01-15T10:00:00Z",
    updated_by_id: "user-001",
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: "uc-002",
    type: "conversion",
    user_id: "user-002",
    user_name: "Jane Smith",
    message: "BOX12 contains 12 individual items",
    attachments: null,
    info: { category: "conversion", priority: "medium" },
    note: "Bulk packaging conversion",
    created_at: "2024-01-16T11:00:00Z",
    created_by_id: "user-002",
    updated_at: "2024-01-16T11:00:00Z",
    updated_by_id: "user-002",
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: "uc-003",
    type: "other",
    user_id: "user-003",
    user_name: "Mike Johnson",
    message: "BTL unit is used for liquid products",
    attachments: null,
    info: { category: "liquid", priority: "high" },
    note: "Liquid container unit",
    created_at: "2024-01-17T12:00:00Z",
    created_by_id: "user-003",
    updated_at: "2024-01-17T12:00:00Z",
    updated_by_id: "user-003",
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: "uc-004",
    type: "unit",
    user_id: "user-001",
    user_name: "John Doe",
    message: "CUP unit is standard for beverages",
    attachments: null,
    info: { category: "beverage", priority: "medium" },
    note: "Beverage serving unit",
    created_at: "2024-01-18T13:00:00Z",
    created_by_id: "user-001",
    updated_at: "2024-01-18T13:00:00Z",
    updated_by_id: "user-001",
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: "uc-005",
    type: "conversion",
    user_id: "user-002",
    user_name: "Jane Smith",
    message: "BOX24 contains 24 individual items",
    attachments: null,
    info: { category: "conversion", priority: "medium" },
    note: "Large bulk packaging",
    created_at: "2024-01-19T14:00:00Z",
    created_by_id: "user-002",
    updated_at: "2024-01-19T14:00:00Z",
    updated_by_id: "user-002",
    deleted_at: null,
    deleted_by_id: null,
  },
];

// CREATE - สร้าง UnitComment ใหม่
export const createUnitComment = (
  data: Omit<
    UnitComment,
    "id" | "created_at" | "created_by_id" | "updated_at" | "updated_by_id"
  >
): UnitComment => {
  const newComment: UnitComment = {
    ...data,
    id: generateId(),
    created_at: getCurrentTimestamp(),
    created_by_id: "system",
    updated_at: getCurrentTimestamp(),
    updated_by_id: "system",
  };

  unitComments.push(newComment);
  return newComment;
};

// READ - อ่านข้อมูล UnitComment
export const getAllUnitComments = (): UnitComment[] => {
  return unitComments.filter((comment) => !comment.deleted_at);
};

export const getUnitCommentById = (id: string): UnitComment | null => {
  const comment = unitComments.find((c) => c.id === id && !c.deleted_at);
  return comment || null;
};

export const getUnitCommentsByType = (
  type: "unit" | "conversion" | "other"
): UnitComment[] => {
  return unitComments.filter(
    (comment) => comment.type === type && !comment.deleted_at
  );
};

export const getUnitCommentsByUser = (userId: string): UnitComment[] => {
  return unitComments.filter(
    (comment) => comment.user_id === userId && !comment.deleted_at
  );
};

export const getUnitCommentsByDateRange = (
  startDate: string,
  endDate: string
): UnitComment[] => {
  return unitComments.filter((comment) => {
    const createdDate = new Date(comment.created_at);
    const start = new Date(startDate);
    const end = new Date(endDate);
    return createdDate >= start && createdDate <= end && !comment.deleted_at;
  });
};

export const getUnitCommentsWithAttachments = (): UnitComment[] => {
  return unitComments.filter(
    (comment) => comment.attachments !== null && !comment.deleted_at
  );
};

export const getUnitCommentsWithNote = (): UnitComment[] => {
  return unitComments.filter(
    (comment) => comment.note !== null && !comment.deleted_at
  );
};

// UPDATE - อัปเดต UnitComment
export const updateUnitComment = (
  id: string,
  data: Partial<Omit<UnitComment, "id" | "created_at" | "created_by_id">>
): UnitComment | null => {
  const index = unitComments.findIndex(
    (comment) => comment.id === id && !comment.deleted_at
  );

  if (index === -1) {
    return null;
  }

  unitComments[index] = {
    ...unitComments[index],
    ...data,
    updated_at: getCurrentTimestamp(),
    updated_by_id: "system",
  };

  return unitComments[index];
};

// UPDATE - อัปเดต UnitComment message
export const updateUnitCommentMessage = (
  id: string,
  message: string
): UnitComment | null => {
  return updateUnitComment(id, { message });
};

// UPDATE - อัปเดต UnitComment note
export const updateUnitCommentNote = (
  id: string,
  note: string
): UnitComment | null => {
  return updateUnitComment(id, { note });
};

// UPDATE - อัปเดต UnitComment info
export const updateUnitCommentInfo = (
  id: string,
  info: any
): UnitComment | null => {
  return updateUnitComment(id, { info });
};

// UPDATE - อัปเดต UnitComment attachments
export const updateUnitCommentAttachments = (
  id: string,
  attachments: any
): UnitComment | null => {
  return updateUnitComment(id, { attachments });
};

// DELETE - Soft delete UnitComment
export const softDeleteUnitComment = (
  id: string,
  deletedById: string
): UnitComment | null => {
  const comment = getUnitCommentById(id);
  if (!comment) return null;

  comment.deleted_at = getCurrentTimestamp();
  comment.deleted_by_id = deletedById;
  comment.updated_at = getCurrentTimestamp();
  comment.updated_by_id = deletedById;

  return comment;
};

// DELETE - Hard delete UnitComment
export const hardDeleteUnitComment = (id: string): boolean => {
  const index = unitComments.findIndex((comment) => comment.id === id);

  if (index === -1) {
    return false;
  }

  unitComments.splice(index, 1);
  return true;
};

// DELETE - ลบ UnitComment ตาม user
export const deleteUnitCommentsByUser = (
  userId: string,
  deletedById: string
): boolean => {
  const comments = getUnitCommentsByUser(userId);
  let deletedCount = 0;

  comments.forEach((comment) => {
    if (softDeleteUnitComment(comment.id, deletedById)) {
      deletedCount++;
    }
  });

  return deletedCount > 0;
};

// RESTORE - กู้คืน UnitComment ที่ถูก soft delete
export const restoreUnitComment = (id: string): UnitComment | null => {
  const comment = unitComments.find((c) => c.id === id);
  if (!comment || !comment.deleted_at) return null;

  comment.deleted_at = null;
  comment.deleted_by_id = null;
  comment.updated_at = getCurrentTimestamp();
  comment.updated_by_id = "system";

  return comment;
};

// ADVANCED SEARCH - ค้นหา UnitComment แบบขั้นสูง
export const searchUnitComments = (criteria: {
  type?: "unit" | "conversion" | "other";
  user_id?: string;
  message?: string;
  has_attachments?: boolean;
  has_note?: boolean;
  start_date?: string;
  end_date?: string;
}): UnitComment[] => {
  return unitComments.filter((comment) => {
    if (comment.deleted_at) return false;

    if (criteria.type && comment.type !== criteria.type) {
      return false;
    }

    if (criteria.user_id && comment.user_id !== criteria.user_id) {
      return false;
    }

    if (
      criteria.message &&
      !comment.message.toLowerCase().includes(criteria.message.toLowerCase())
    ) {
      return false;
    }

    if (criteria.has_attachments !== undefined) {
      const hasAttachments = comment.attachments !== null;
      if (hasAttachments !== criteria.has_attachments) {
        return false;
      }
    }

    if (criteria.has_note !== undefined) {
      const hasNote = comment.note !== null;
      if (hasNote !== criteria.has_note) {
        return false;
      }
    }

    if (criteria.start_date || criteria.end_date) {
      const createdDate = new Date(comment.created_at);
      if (criteria.start_date && createdDate < new Date(criteria.start_date))
        return false;
      if (criteria.end_date && createdDate > new Date(criteria.end_date))
        return false;
    }

    return true;
  });
};

// UTILITY FUNCTIONS - ฟังก์ชันเสริม
export const getUnitCommentCount = (): number => {
  return unitComments.filter((comment) => !comment.deleted_at).length;
};

export const getUnitCommentCountByType = (
  type: "unit" | "conversion" | "other"
): number => {
  return unitComments.filter(
    (comment) => comment.type === type && !comment.deleted_at
  ).length;
};

export const getUnitCommentCountByUser = (userId: string): number => {
  return unitComments.filter(
    (comment) => comment.user_id === userId && !comment.deleted_at
  ).length;
};

export const isUnitCommentExists = (id: string): boolean => {
  return unitComments.some(
    (comment) => comment.id === id && !comment.deleted_at
  );
};

export const hasUnitCommentsByType = (
  type: "unit" | "conversion" | "other"
): boolean => {
  return unitComments.some(
    (comment) => comment.type === type && !comment.deleted_at
  );
};

export const hasUnitCommentsByUser = (userId: string): boolean => {
  return unitComments.some(
    (comment) => comment.user_id === userId && !comment.deleted_at
  );
};

export const clearAllUnitComments = (): void => {
  unitComments.length = 0;
};
