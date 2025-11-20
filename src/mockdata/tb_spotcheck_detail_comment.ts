import { generateId, getCurrentTimestamp } from "@/libs/utils";
import { getUuidByName } from "./mapping.uuid";

export type CommentType = "user" | "system" | "automated";

export interface SpotcheckDetailComment {
  id: string;
  spotcheck_detail_id: string;
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

export const spotcheckDetailComments: SpotcheckDetailComment[] = [
  {
    id: getUuidByName("SPOTCHECK_DETAIL_COMMENT_01"),
    spotcheck_detail_id: "scd1a2b3-4d5e-6f7a-8b9c-0d1e2f3a4b5c",
    type: "user",
    user_id: getUuidByName("USER_01"),
    user_name: "John Doe",
    message: "Spot check completed. Inventory matches system records.",
    attachments: {},
    info: {},
    note: null,
    created_at: new Date("2024-01-22T09:00:00Z"),
    created_by_id: getUuidByName("USER_01"),
    updated_at: new Date("2024-01-22T09:00:00Z"),
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("SPOTCHECK_DETAIL_COMMENT_02"),
    spotcheck_detail_id: "scd1a2b3-4d5e-6f7a-8b9c-0d1e2f3a4b5c",
    type: "user",
    user_id: getUuidByName("USER_02"),
    user_name: "Jane Smith",
    message: "Random sample verified with photo evidence.",
    attachments: {
      files: [
        {
          name: "spotcheck_photo_1.jpg",
          url: "/uploads/spotcheck_photo_1.jpg",
          type: "image/jpeg",
        },
        {
          name: "spotcheck_photo_2.jpg",
          url: "/uploads/spotcheck_photo_2.jpg",
          type: "image/jpeg",
        },
      ],
    },
    info: {},
    note: "Photo verification completed",
    created_at: new Date("2024-01-22T09:30:00Z"),
    created_by_id: getUuidByName("USER_02"),
    updated_at: new Date("2024-01-22T09:30:00Z"),
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("SPOTCHECK_DETAIL_COMMENT_03"),
    spotcheck_detail_id: "scd2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d",
    type: "system",
    user_id: null,
    user_name: "System",
    message: "Variance alert: Spot check shows -3 unit discrepancy.",
    attachments: {},
    info: {},
    note: null,
    created_at: new Date("2024-01-22T10:00:00Z"),
    created_by_id: null,
    updated_at: new Date("2024-01-22T10:00:00Z"),
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("SPOTCHECK_DETAIL_COMMENT_04"),
    spotcheck_detail_id: "scd2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d",
    type: "user",
    user_id: getUuidByName("USER_03"),
    user_name: "Bob Wilson",
    message: "Discrepancy investigated. 3 units found in secondary storage location.",
    attachments: {
      files: [
        {
          name: "secondary_storage_photo.jpg",
          url: "/uploads/secondary_storage_photo.jpg",
          type: "image/jpeg",
        },
        {
          name: "variance_resolution.pdf",
          url: "/uploads/variance_resolution.pdf",
          type: "application/pdf",
        },
      ],
    },
    info: {},
    note: "Variance resolved - items relocated",
    created_at: new Date("2024-01-22T11:00:00Z"),
    created_by_id: getUuidByName("USER_03"),
    updated_at: new Date("2024-01-22T11:00:00Z"),
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("SPOTCHECK_DETAIL_COMMENT_05"),
    spotcheck_detail_id: "scd3c4d5-6f7a-8b9c-0d1e-2f3a4b5c6d7e",
    type: "user",
    user_id: getUuidByName("USER_01"),
    user_name: "John Doe",
    message: "High-value item spot check completed with supervisor verification.",
    attachments: {
      files: [
        {
          name: "supervisor_sign_off.pdf",
          url: "/uploads/supervisor_sign_off.pdf",
          type: "application/pdf",
        },
      ],
    },
    info: {},
    note: "Supervisor verified",
    created_at: new Date("2024-01-22T14:00:00Z"),
    created_by_id: getUuidByName("USER_01"),
    updated_at: new Date("2024-01-22T14:00:00Z"),
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("SPOTCHECK_DETAIL_COMMENT_06"),
    spotcheck_detail_id: "scd3c4d5-6f7a-8b9c-0d1e-2f3a4b5c6d7e",
    type: "automated",
    user_id: null,
    user_name: "System",
    message: "Spot check results logged. No action required.",
    attachments: {},
    info: {},
    note: null,
    created_at: new Date("2024-01-22T14:05:00Z"),
    created_by_id: null,
    updated_at: new Date("2024-01-22T14:05:00Z"),
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("SPOTCHECK_DETAIL_COMMENT_07"),
    spotcheck_detail_id: "scd4d5e6-7f8a-9b0c-1d2e-3f4a5b6c7d8e",
    type: "user",
    user_id: getUuidByName("USER_02"),
    user_name: "Jane Smith",
    message: "Expiry date check performed. All items within acceptable date range.",
    attachments: {
      files: [
        {
          name: "expiry_check_log.xlsx",
          url: "/uploads/expiry_check_log.xlsx",
          type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        },
      ],
    },
    info: {},
    note: "Expiry date verification",
    created_at: new Date("2024-01-22T15:30:00Z"),
    created_by_id: getUuidByName("USER_02"),
    updated_at: new Date("2024-01-22T15:30:00Z"),
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
];

// CREATE - สร้าง SpotcheckDetailComment ใหม่
export const createSpotcheckDetailComment = (
  data: Omit<SpotcheckDetailComment, "id" | "created_at">
): SpotcheckDetailComment => {
  const newComment: SpotcheckDetailComment = {
    ...data,
    id: generateId(),
    created_at: new Date(getCurrentTimestamp()),
  };

  spotcheckDetailComments.push(newComment);
  return newComment;
};

// READ - อ่าน SpotcheckDetailComment ทั้งหมด
export const getAllSpotcheckDetailComments = (): SpotcheckDetailComment[] => {
  return spotcheckDetailComments.filter((comment) => !comment.deleted_at);
};

// READ - อ่าน SpotcheckDetailComment ตาม ID
export const getSpotcheckDetailCommentById = (
  id: string
): SpotcheckDetailComment | null => {
  const comment = spotcheckDetailComments.find(
    (c) => c.id === id && !c.deleted_at
  );
  return comment || null;
};

// READ - อ่าน SpotcheckDetailComment ตาม spotcheck_detail_id
export const getSpotcheckDetailCommentsByDetailId = (
  detailId: string
): SpotcheckDetailComment[] => {
  return spotcheckDetailComments.filter(
    (c) => c.spotcheck_detail_id === detailId && !c.deleted_at
  );
};

// READ - อ่าน SpotcheckDetailComment ตาม user_id
export const getSpotcheckDetailCommentsByUserId = (
  userId: string
): SpotcheckDetailComment[] => {
  return spotcheckDetailComments.filter(
    (c) => c.user_id === userId && !c.deleted_at
  );
};

// READ - อ่าน SpotcheckDetailComment ตาม type
export const getSpotcheckDetailCommentsByType = (
  type: CommentType
): SpotcheckDetailComment[] => {
  return spotcheckDetailComments.filter(
    (c) => c.type === type && !c.deleted_at
  );
};

// READ - อ่าน SpotcheckDetailComment ที่เป็น user comments
export const getUserComments = (): SpotcheckDetailComment[] => {
  return spotcheckDetailComments.filter(
    (c) => c.type === "user" && !c.deleted_at
  );
};

// READ - อ่าน SpotcheckDetailComment ที่เป็น system comments
export const getSystemComments = (): SpotcheckDetailComment[] => {
  return spotcheckDetailComments.filter(
    (c) => c.type === "system" && !c.deleted_at
  );
};

// READ - อ่าน SpotcheckDetailComment ที่เป็น automated comments
export const getAutomatedComments = (): SpotcheckDetailComment[] => {
  return spotcheckDetailComments.filter(
    (c) => c.type === "automated" && !c.deleted_at
  );
};

// READ - อ่าน SpotcheckDetailComment ที่มี attachments
export const getCommentsWithAttachments = (): SpotcheckDetailComment[] => {
  return spotcheckDetailComments.filter(
    (c) =>
      !c.deleted_at &&
      c.attachments &&
      Object.keys(c.attachments).length > 0 &&
      c.attachments.files &&
      c.attachments.files.length > 0
  );
};

// READ - อ่าน SpotcheckDetailComment ตาม detail และ user
export const getSpotcheckDetailCommentsByDetailAndUser = (
  detailId: string,
  userId: string
): SpotcheckDetailComment[] => {
  return spotcheckDetailComments.filter(
    (c) =>
      c.spotcheck_detail_id === detailId &&
      c.user_id === userId &&
      !c.deleted_at
  );
};

// READ - อ่าน SpotcheckDetailComment ที่มีการรายงาน variance
export const getVarianceComments = (): SpotcheckDetailComment[] => {
  return spotcheckDetailComments.filter(
    (c) =>
      !c.deleted_at &&
      (c.message?.toLowerCase().includes("variance") ||
        c.message?.toLowerCase().includes("discrepancy"))
  );
};

// READ - ค้นหา SpotcheckDetailComment
export const searchSpotcheckDetailComments = (
  searchTerm: string
): SpotcheckDetailComment[] => {
  const lowerSearchTerm = searchTerm.toLowerCase();
  return spotcheckDetailComments.filter(
    (c) =>
      !c.deleted_at &&
      (c.message?.toLowerCase().includes(lowerSearchTerm) ||
        c.user_name?.toLowerCase().includes(lowerSearchTerm) ||
        c.note?.toLowerCase().includes(lowerSearchTerm))
  );
};

// UPDATE - อัปเดต SpotcheckDetailComment
export const updateSpotcheckDetailComment = (
  id: string,
  updateData: Partial<
    Omit<SpotcheckDetailComment, "id" | "created_at" | "created_by_id">
  >
): SpotcheckDetailComment | null => {
  const index = spotcheckDetailComments.findIndex((c) => c.id === id);

  if (index === -1) {
    return null;
  }

  spotcheckDetailComments[index] = {
    ...spotcheckDetailComments[index],
    ...updateData,
    updated_at: new Date(getCurrentTimestamp()),
  };

  return spotcheckDetailComments[index];
};

// UPDATE - อัปเดต message
export const updateSpotcheckDetailCommentMessage = (
  id: string,
  message: string
): SpotcheckDetailComment | null => {
  return updateSpotcheckDetailComment(id, { message });
};

// UPDATE - อัปเดต attachments
export const updateSpotcheckDetailCommentAttachments = (
  id: string,
  attachments: any
): SpotcheckDetailComment | null => {
  return updateSpotcheckDetailComment(id, { attachments });
};

// UPDATE - เพิ่ม attachment
export const addAttachmentToComment = (
  id: string,
  attachment: { name: string; url: string; type: string }
): SpotcheckDetailComment | null => {
  const comment = getSpotcheckDetailCommentById(id);
  if (!comment) {
    return null;
  }

  const currentAttachments = comment.attachments || {};
  const currentFiles = currentAttachments.files || [];

  return updateSpotcheckDetailComment(id, {
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
): SpotcheckDetailComment | null => {
  const comment = getSpotcheckDetailCommentById(id);
  if (!comment) {
    return null;
  }

  const currentAttachments = comment.attachments || {};
  const currentFiles = currentAttachments.files || [];

  return updateSpotcheckDetailComment(id, {
    attachments: {
      ...currentAttachments,
      files: currentFiles.filter((f: any) => f.name !== attachmentName),
    },
  });
};

// UPDATE - อัปเดต note
export const updateSpotcheckDetailCommentNote = (
  id: string,
  note: string
): SpotcheckDetailComment | null => {
  return updateSpotcheckDetailComment(id, { note });
};

// DELETE - ลบ SpotcheckDetailComment (soft delete)
export const deleteSpotcheckDetailComment = (
  id: string,
  deletedById: string
): boolean => {
  const index = spotcheckDetailComments.findIndex((c) => c.id === id);

  if (index === -1) {
    return false;
  }

  spotcheckDetailComments[index] = {
    ...spotcheckDetailComments[index],
    deleted_at: new Date(getCurrentTimestamp()),
    deleted_by_id: deletedById,
  };

  return true;
};

// DELETE - ลบ SpotcheckDetailComment แบบถาวร
export const hardDeleteSpotcheckDetailComment = (id: string): boolean => {
  const index = spotcheckDetailComments.findIndex((c) => c.id === id);

  if (index === -1) {
    return false;
  }

  spotcheckDetailComments.splice(index, 1);
  return true;
};

// DELETE - ลบ SpotcheckDetailComment ทั้งหมดของ detail
export const deleteSpotcheckDetailCommentsByDetailId = (
  detailId: string,
  deletedById: string
): number => {
  let deletedCount = 0;

  spotcheckDetailComments.forEach((c) => {
    if (c.spotcheck_detail_id === detailId && !c.deleted_at) {
      c.deleted_at = new Date(getCurrentTimestamp());
      c.deleted_by_id = deletedById;
      deletedCount++;
    }
  });

  return deletedCount;
};

// DELETE - ลบ SpotcheckDetailComment ทั้งหมดของ user
export const deleteSpotcheckDetailCommentsByUserId = (
  userId: string,
  deletedById: string
): number => {
  let deletedCount = 0;

  spotcheckDetailComments.forEach((c) => {
    if (c.user_id === userId && !c.deleted_at) {
      c.deleted_at = new Date(getCurrentTimestamp());
      c.deleted_by_id = deletedById;
      deletedCount++;
    }
  });

  return deletedCount;
};

// Utility function สำหรับล้างข้อมูลทั้งหมด (ใช้สำหรับ testing)
export const clearAllSpotcheckDetailComments = (): void => {
  spotcheckDetailComments.length = 0;
};

// Utility function สำหรับนับจำนวน SpotcheckDetailComment
export const getSpotcheckDetailCommentCount = (): number => {
  return spotcheckDetailComments.filter((c) => !c.deleted_at).length;
};

// Utility function สำหรับนับจำนวน SpotcheckDetailComment ตาม detail
export const getSpotcheckDetailCommentCountByDetailId = (
  detailId: string
): number => {
  return spotcheckDetailComments.filter(
    (c) => c.spotcheck_detail_id === detailId && !c.deleted_at
  ).length;
};

// Utility function สำหรับนับจำนวน SpotcheckDetailComment ตาม user
export const getSpotcheckDetailCommentCountByUserId = (
  userId: string
): number => {
  return spotcheckDetailComments.filter(
    (c) => c.user_id === userId && !c.deleted_at
  ).length;
};

// Utility function สำหรับนับจำนวน SpotcheckDetailComment ตาม type
export const getSpotcheckDetailCommentCountByType = (
  type: CommentType
): number => {
  return spotcheckDetailComments.filter(
    (c) => c.type === type && !c.deleted_at
  ).length;
};

// Utility function สำหรับตรวจสอบ SpotcheckDetailComment ที่ถูกลบแล้ว
export const getDeletedSpotcheckDetailComments =
  (): SpotcheckDetailComment[] => {
    return spotcheckDetailComments.filter((c) => c.deleted_at !== null);
  };

// Utility function สำหรับกู้คืน SpotcheckDetailComment ที่ถูกลบแล้ว
export const restoreSpotcheckDetailComment = (id: string): boolean => {
  const index = spotcheckDetailComments.findIndex((c) => c.id === id);

  if (index === -1) {
    return false;
  }

  if (spotcheckDetailComments[index].deleted_at) {
    spotcheckDetailComments[index] = {
      ...spotcheckDetailComments[index],
      deleted_at: null,
      deleted_by_id: null,
    };
    return true;
  }

  return false;
};

// Utility function สำหรับ sort comments ตามวันที่
export const sortCommentsByDate = (
  comments: SpotcheckDetailComment[],
  order: "asc" | "desc" = "desc"
): SpotcheckDetailComment[] => {
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
): SpotcheckDetailComment[] => {
  const comments = getSpotcheckDetailCommentsByDetailId(detailId);
  const sorted = sortCommentsByDate(comments, "desc");
  return sorted.slice(0, limit);
};

// Utility function สำหรับหา comments ที่ต้องการ supervisor verification
export const getSupervisorVerificationComments =
  (): SpotcheckDetailComment[] => {
    return spotcheckDetailComments.filter(
      (c) =>
        !c.deleted_at &&
        (c.message?.toLowerCase().includes("supervisor") ||
          c.note?.toLowerCase().includes("supervisor"))
    );
  };

// Utility function สำหรับหา comments ที่เกี่ยวกับ expiry date check
export const getExpiryDateCheckComments = (): SpotcheckDetailComment[] => {
  return spotcheckDetailComments.filter(
    (c) =>
      !c.deleted_at &&
      (c.message?.toLowerCase().includes("expiry") ||
        c.message?.toLowerCase().includes("expire") ||
        c.note?.toLowerCase().includes("expiry"))
  );
};

// Utility function สำหรับหา comments ที่มีการแก้ไข variance
export const getResolvedVarianceComments = (): SpotcheckDetailComment[] => {
  return spotcheckDetailComments.filter(
    (c) =>
      !c.deleted_at &&
      (c.message?.toLowerCase().includes("resolved") ||
        c.note?.toLowerCase().includes("resolved"))
  );
};
