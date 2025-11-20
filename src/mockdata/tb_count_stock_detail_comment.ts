import { generateId, getCurrentTimestamp } from "@/libs/utils";
import { getUuidByName } from "./mapping.uuid";

export type CommentType = "user" | "system" | "automated";

export interface CountStockDetailComment {
  id: string;
  count_stock_detail_id: string;
  type: CommentType;
  user_id: string | null;
  user_name: string | null;
  message: string | null;
  attachments: any;
  info: any;
  note: string | null;
  created_at: Date;
  created_by_id: string | null;
  updated_at: Date;
  updated_by_id: string | null;
  deleted_at: Date | null;
  deleted_by_id: string | null;
}

export const countStockDetailComments: CountStockDetailComment[] = [
  {
    id: getUuidByName("COUNT_STOCK_DETAIL_COMMENT_01"),
    count_stock_detail_id: getUuidByName("COUNT_STOCK_DETAIL_01"),
    type: "user",
    user_id: getUuidByName("USER_01"),
    user_name: "John Doe",
    message: "Physical count verified. Stock count matches system records.",
    attachments: {},
    info: { verified: true, variance: 0 },
    note: null,
    created_at: new Date("2024-01-20T10:00:00Z"),
    created_by_id: getUuidByName("USER_01"),
    updated_at: new Date("2024-01-20T10:00:00Z"),
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("COUNT_STOCK_DETAIL_COMMENT_02"),
    count_stock_detail_id: getUuidByName("COUNT_STOCK_DETAIL_01"),
    type: "user",
    user_id: getUuidByName("USER_02"),
    user_name: "Jane Smith",
    message: "Count photo attached for verification.",
    attachments: {
      files: [
        {
          name: "count_photo_1.jpg",
          url: "/uploads/count_photo_1.jpg",
          type: "image/jpeg",
        },
      ],
    },
    info: { has_photo: true },
    note: "Photo evidence",
    created_at: new Date("2024-01-20T10:15:00Z"),
    created_by_id: getUuidByName("USER_02"),
    updated_at: new Date("2024-01-20T10:15:00Z"),
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("COUNT_STOCK_DETAIL_COMMENT_03"),
    count_stock_detail_id: getUuidByName("COUNT_STOCK_DETAIL_02"),
    type: "system",
    user_id: null,
    user_name: "System",
    message: "Variance detected: Expected 500, Found 495. Difference: -5 units.",
    attachments: {},
    info: {
      automated: true,
      expected: 500,
      actual: 495,
      variance: -5,
      variance_percentage: -1.0,
    },
    note: null,
    created_at: new Date("2024-01-20T11:00:00Z"),
    created_by_id: null,
    updated_at: new Date("2024-01-20T11:00:00Z"),
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("COUNT_STOCK_DETAIL_COMMENT_04"),
    count_stock_detail_id: getUuidByName("COUNT_STOCK_DETAIL_02"),
    type: "user",
    user_id: getUuidByName("USER_03"),
    user_name: "Bob Wilson",
    message:
      "Discrepancy found. 5 units missing. Recounting scheduled for tomorrow.",
    attachments: {
      files: [
        {
          name: "variance_report.pdf",
          url: "/uploads/variance_report.pdf",
          type: "application/pdf",
        },
      ],
    },
    info: {
      recount_scheduled: true,
      recount_date: "2024-01-21",
      variance_reason: "possible_misplacement",
    },
    note: "Recount required",
    created_at: new Date("2024-01-20T11:30:00Z"),
    created_by_id: getUuidByName("USER_03"),
    updated_at: new Date("2024-01-20T11:30:00Z"),
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("COUNT_STOCK_DETAIL_COMMENT_05"),
    count_stock_detail_id: getUuidByName("COUNT_STOCK_DETAIL_03"),
    type: "user",
    user_id: getUuidByName("USER_01"),
    user_name: "John Doe",
    message: "Excess inventory found. 3 additional units discovered in overflow storage.",
    attachments: {
      files: [
        {
          name: "overflow_storage.jpg",
          url: "/uploads/overflow_storage.jpg",
          type: "image/jpeg",
        },
        {
          name: "excess_inventory_log.xlsx",
          url: "/uploads/excess_inventory_log.xlsx",
          type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        },
      ],
    },
    info: {
      variance: 3,
      location: "Overflow Storage Area B",
      action_taken: "updated_system",
    },
    note: "Positive variance resolved",
    created_at: new Date("2024-01-20T14:00:00Z"),
    created_by_id: getUuidByName("USER_01"),
    updated_at: new Date("2024-01-20T14:00:00Z"),
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("COUNT_STOCK_DETAIL_COMMENT_06"),
    count_stock_detail_id: getUuidByName("COUNT_STOCK_DETAIL_03"),
    type: "automated",
    user_id: null,
    user_name: "System",
    message: "Stock adjustment posted automatically. Inventory updated.",
    attachments: {},
    info: {
      automated: true,
      adjustment_posted: true,
      adjustment_id: "ADJ-2024-001",
      action: "inventory_adjustment",
    },
    note: null,
    created_at: new Date("2024-01-20T14:05:00Z"),
    created_by_id: null,
    updated_at: new Date("2024-01-20T14:05:00Z"),
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
];

// CREATE - สร้าง CountStockDetailComment ใหม่
export const createCountStockDetailComment = (
  data: Omit<CountStockDetailComment, "id" | "created_at">
): CountStockDetailComment => {
  const newComment: CountStockDetailComment = {
    ...data,
    id: generateId(),
    created_at: new Date(getCurrentTimestamp()),
  };

  countStockDetailComments.push(newComment);
  return newComment;
};

// READ - อ่าน CountStockDetailComment ทั้งหมด
export const getAllCountStockDetailComments = (): CountStockDetailComment[] => {
  return countStockDetailComments.filter((comment) => !comment.deleted_at);
};

// READ - อ่าน CountStockDetailComment ตาม ID
export const getCountStockDetailCommentById = (
  id: string
): CountStockDetailComment | null => {
  const comment = countStockDetailComments.find(
    (c) => c.id === id && !c.deleted_at
  );
  return comment || null;
};

// READ - อ่าน CountStockDetailComment ตาม count_stock_detail_id
export const getCountStockDetailCommentsByDetailId = (
  detailId: string
): CountStockDetailComment[] => {
  return countStockDetailComments.filter(
    (c) => c.count_stock_detail_id === detailId && !c.deleted_at
  );
};

// READ - อ่าน CountStockDetailComment ตาม user_id
export const getCountStockDetailCommentsByUserId = (
  userId: string
): CountStockDetailComment[] => {
  return countStockDetailComments.filter(
    (c) => c.user_id === userId && !c.deleted_at
  );
};

// READ - อ่าน CountStockDetailComment ตาม type
export const getCountStockDetailCommentsByType = (
  type: CommentType
): CountStockDetailComment[] => {
  return countStockDetailComments.filter(
    (c) => c.type === type && !c.deleted_at
  );
};

// READ - อ่าน CountStockDetailComment ที่เป็น user comments
export const getUserComments = (): CountStockDetailComment[] => {
  return countStockDetailComments.filter(
    (c) => c.type === "user" && !c.deleted_at
  );
};

// READ - อ่าน CountStockDetailComment ที่เป็น system comments
export const getSystemComments = (): CountStockDetailComment[] => {
  return countStockDetailComments.filter(
    (c) => c.type === "system" && !c.deleted_at
  );
};

// READ - อ่าน CountStockDetailComment ที่เป็น automated comments
export const getAutomatedComments = (): CountStockDetailComment[] => {
  return countStockDetailComments.filter(
    (c) => c.type === "automated" && !c.deleted_at
  );
};

// READ - อ่าน CountStockDetailComment ที่มี attachments
export const getCommentsWithAttachments = (): CountStockDetailComment[] => {
  return countStockDetailComments.filter(
    (c) =>
      !c.deleted_at &&
      c.attachments &&
      Object.keys(c.attachments).length > 0 &&
      c.attachments.files &&
      c.attachments.files.length > 0
  );
};

// READ - อ่าน CountStockDetailComment ตาม detail และ user
export const getCountStockDetailCommentsByDetailAndUser = (
  detailId: string,
  userId: string
): CountStockDetailComment[] => {
  return countStockDetailComments.filter(
    (c) =>
      c.count_stock_detail_id === detailId &&
      c.user_id === userId &&
      !c.deleted_at
  );
};

// READ - อ่าน CountStockDetailComment ที่มีการรายงาน variance
export const getVarianceComments = (): CountStockDetailComment[] => {
  return countStockDetailComments.filter(
    (c) =>
      !c.deleted_at &&
      c.info &&
      c.info.variance !== undefined &&
      c.info.variance !== 0
  );
};

// READ - ค้นหา CountStockDetailComment
export const searchCountStockDetailComments = (
  searchTerm: string
): CountStockDetailComment[] => {
  const lowerSearchTerm = searchTerm.toLowerCase();
  return countStockDetailComments.filter(
    (c) =>
      !c.deleted_at &&
      (c.message?.toLowerCase().includes(lowerSearchTerm) ||
        c.user_name?.toLowerCase().includes(lowerSearchTerm) ||
        c.note?.toLowerCase().includes(lowerSearchTerm))
  );
};

// UPDATE - อัปเดต CountStockDetailComment
export const updateCountStockDetailComment = (
  id: string,
  updateData: Partial<
    Omit<CountStockDetailComment, "id" | "created_at" | "created_by_id">
  >
): CountStockDetailComment | null => {
  const index = countStockDetailComments.findIndex((c) => c.id === id);

  if (index === -1) {
    return null;
  }

  countStockDetailComments[index] = {
    ...countStockDetailComments[index],
    ...updateData,
    updated_at: new Date(getCurrentTimestamp()),
  };

  return countStockDetailComments[index];
};

// UPDATE - อัปเดต message
export const updateCountStockDetailCommentMessage = (
  id: string,
  message: string
): CountStockDetailComment | null => {
  return updateCountStockDetailComment(id, { message });
};

// UPDATE - อัปเดต attachments
export const updateCountStockDetailCommentAttachments = (
  id: string,
  attachments: any
): CountStockDetailComment | null => {
  return updateCountStockDetailComment(id, { attachments });
};

// UPDATE - เพิ่ม attachment
export const addAttachmentToComment = (
  id: string,
  attachment: { name: string; url: string; type: string }
): CountStockDetailComment | null => {
  const comment = getCountStockDetailCommentById(id);
  if (!comment) {
    return null;
  }

  const currentAttachments = comment.attachments || {};
  const currentFiles = currentAttachments.files || [];

  return updateCountStockDetailComment(id, {
    attachments: {
      ...currentAttachments,
      files: [...currentFiles, attachment],
    },
  });
};

// UPDATE - ลบ attachment
export const removeAttachmentFromComment = (
  id: string,
  attachmentName: string
): CountStockDetailComment | null => {
  const comment = getCountStockDetailCommentById(id);
  if (!comment) {
    return null;
  }

  const currentAttachments = comment.attachments || {};
  const currentFiles = currentAttachments.files || [];

  return updateCountStockDetailComment(id, {
    attachments: {
      ...currentAttachments,
      files: currentFiles.filter((f: any) => f.name !== attachmentName),
    },
  });
};

// UPDATE - อัปเดต note
export const updateCountStockDetailCommentNote = (
  id: string,
  note: string
): CountStockDetailComment | null => {
  return updateCountStockDetailComment(id, { note });
};

// DELETE - ลบ CountStockDetailComment (soft delete)
export const deleteCountStockDetailComment = (
  id: string,
  deletedById: string
): boolean => {
  const index = countStockDetailComments.findIndex((c) => c.id === id);

  if (index === -1) {
    return false;
  }

  countStockDetailComments[index] = {
    ...countStockDetailComments[index],
    deleted_at: new Date(getCurrentTimestamp()),
    deleted_by_id: deletedById,
  };

  return true;
};

// DELETE - ลบ CountStockDetailComment แบบถาวร
export const hardDeleteCountStockDetailComment = (id: string): boolean => {
  const index = countStockDetailComments.findIndex((c) => c.id === id);

  if (index === -1) {
    return false;
  }

  countStockDetailComments.splice(index, 1);
  return true;
};

// DELETE - ลบ CountStockDetailComment ทั้งหมดของ detail
export const deleteCountStockDetailCommentsByDetailId = (
  detailId: string,
  deletedById: string
): number => {
  let deletedCount = 0;

  countStockDetailComments.forEach((c) => {
    if (c.count_stock_detail_id === detailId && !c.deleted_at) {
      c.deleted_at = new Date(getCurrentTimestamp());
      c.deleted_by_id = deletedById;
      deletedCount++;
    }
  });

  return deletedCount;
};

// DELETE - ลบ CountStockDetailComment ทั้งหมดของ user
export const deleteCountStockDetailCommentsByUserId = (
  userId: string,
  deletedById: string
): number => {
  let deletedCount = 0;

  countStockDetailComments.forEach((c) => {
    if (c.user_id === userId && !c.deleted_at) {
      c.deleted_at = new Date(getCurrentTimestamp());
      c.deleted_by_id = deletedById;
      deletedCount++;
    }
  });

  return deletedCount;
};

// Utility function สำหรับล้างข้อมูลทั้งหมด (ใช้สำหรับ testing)
export const clearAllCountStockDetailComments = (): void => {
  countStockDetailComments.length = 0;
};

// Utility function สำหรับนับจำนวน CountStockDetailComment
export const getCountStockDetailCommentCount = (): number => {
  return countStockDetailComments.filter((c) => !c.deleted_at).length;
};

// Utility function สำหรับนับจำนวน CountStockDetailComment ตาม detail
export const getCountStockDetailCommentCountByDetailId = (
  detailId: string
): number => {
  return countStockDetailComments.filter(
    (c) => c.count_stock_detail_id === detailId && !c.deleted_at
  ).length;
};

// Utility function สำหรับนับจำนวน CountStockDetailComment ตาม user
export const getCountStockDetailCommentCountByUserId = (
  userId: string
): number => {
  return countStockDetailComments.filter(
    (c) => c.user_id === userId && !c.deleted_at
  ).length;
};

// Utility function สำหรับนับจำนวน CountStockDetailComment ตาม type
export const getCountStockDetailCommentCountByType = (
  type: CommentType
): number => {
  return countStockDetailComments.filter(
    (c) => c.type === type && !c.deleted_at
  ).length;
};

// Utility function สำหรับตรวจสอบ CountStockDetailComment ที่ถูกลบแล้ว
export const getDeletedCountStockDetailComments =
  (): CountStockDetailComment[] => {
    return countStockDetailComments.filter((c) => c.deleted_at !== null);
  };

// Utility function สำหรับกู้คืน CountStockDetailComment ที่ถูกลบแล้ว
export const restoreCountStockDetailComment = (id: string): boolean => {
  const index = countStockDetailComments.findIndex((c) => c.id === id);

  if (index === -1) {
    return false;
  }

  if (countStockDetailComments[index].deleted_at) {
    countStockDetailComments[index] = {
      ...countStockDetailComments[index],
      deleted_at: null,
      deleted_by_id: null,
    };
    return true;
  }

  return false;
};

// Utility function สำหรับ sort comments ตามวันที่
export const sortCommentsByDate = (
  comments: CountStockDetailComment[],
  order: "asc" | "desc" = "desc"
): CountStockDetailComment[] => {
  return [...comments].sort((a, b) => {
    const timeA = a.created_at.getTime();
    const timeB = b.created_at.getTime();
    return order === "asc" ? timeA - timeB : timeB - timeA;
  });
};

// Utility function สำหรับดึง comments ล่าสุดของ detail
export const getLatestCommentsByDetailId = (
  detailId: string,
  limit: number = 5
): CountStockDetailComment[] => {
  const comments = getCountStockDetailCommentsByDetailId(detailId);
  const sorted = sortCommentsByDate(comments, "desc");
  return sorted.slice(0, limit);
};

// Utility function สำหรับหา comments ที่มี variance สูง
export const getHighVarianceComments = (
  thresholdPercentage: number = 5
): CountStockDetailComment[] => {
  return countStockDetailComments.filter(
    (c) =>
      !c.deleted_at &&
      c.info &&
      c.info.variance_percentage !== undefined &&
      Math.abs(c.info.variance_percentage) >= thresholdPercentage
  );
};

// Utility function สำหรับหา comments ที่ต้อง recount
export const getRecountRequiredComments = (): CountStockDetailComment[] => {
  return countStockDetailComments.filter(
    (c) =>
      !c.deleted_at && c.info && c.info.recount_scheduled === true
  );
};
