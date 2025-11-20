import { generateId, getCurrentTimestamp } from "@/libs/utils";
import { getUuidByName } from "./mapping.uuid";

export type CommentType = "user" | "system" | "automated";

export interface GoodReceivedNoteComment {
  id: string;
  good_received_note_id: string;
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

export const goodReceivedNoteComments: GoodReceivedNoteComment[] = [
  {
    id: getUuidByName("GRN_COMMENT_01"),
    good_received_note_id: "550e8400-e29b-41d4-a716-446655440001",
    type: "user",
    user_id: getUuidByName("USER_01"),
    user_name: "John Doe",
    message: "Items received in good condition. Quality check passed.",
    attachments: {},
    info: {},
    note: null,
    created_at: new Date("2024-01-16T09:00:00Z"),
    created_by_id: getUuidByName("USER_01"),
    updated_at: new Date("2024-01-16T09:00:00Z"),
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("GRN_COMMENT_02"),
    good_received_note_id: "550e8400-e29b-41d4-a716-446655440001",
    type: "user",
    user_id: getUuidByName("USER_02"),
    user_name: "Jane Smith",
    message: "All items stored in warehouse section A-12.",
    attachments: {
      files: [
        {
          name: "storage_photo.jpg",
          url: "/uploads/storage_photo.jpg",
          type: "image/jpeg",
        },
      ],
    },
    info: { section: "A-12", verified: true },
    note: "Warehouse storage confirmation",
    created_at: new Date("2024-01-16T10:30:00Z"),
    created_by_id: getUuidByName("USER_02"),
    updated_at: new Date("2024-01-16T10:30:00Z"),
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("GRN_COMMENT_03"),
    good_received_note_id: "550e8400-e29b-41d4-a716-446655440001",
    type: "system",
    user_id: null,
    user_name: "System",
    message: "Automatic notification: GRN approved and items added to inventory.",
    attachments: {},
    info: { automated: true, action: "inventory_update" },
    note: null,
    created_at: new Date("2024-01-17T08:00:00Z"),
    created_by_id: null,
    updated_at: new Date("2024-01-17T08:00:00Z"),
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("GRN_COMMENT_04"),
    good_received_note_id: "550e8400-e29b-41d4-a716-446655440001",
    type: "user",
    user_id: getUuidByName("USER_03"),
    user_name: "Bob Wilson",
    message: "Minor damage found on 2 units. Vendor contacted for replacement.",
    attachments: {
      files: [
        {
          name: "damage_report.pdf",
          url: "/uploads/damage_report.pdf",
          type: "application/pdf",
        },
        {
          name: "damage_photo_1.jpg",
          url: "/uploads/damage_photo_1.jpg",
          type: "image/jpeg",
        },
      ],
    },
    info: { damaged_units: 2, vendor_contacted: true },
    note: "Damage reported",
    created_at: new Date("2024-01-17T11:15:00Z"),
    created_by_id: getUuidByName("USER_03"),
    updated_at: new Date("2024-01-17T11:15:00Z"),
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("GRN_COMMENT_05"),
    good_received_note_id: "550e8400-e29b-41d4-a716-446655440003",
    type: "user",
    user_id: getUuidByName("USER_01"),
    user_name: "John Doe",
    message: "All office supplies received and distributed to departments.",
    attachments: {},
    info: { distributed: true },
    note: null,
    created_at: new Date("2024-01-18T14:00:00Z"),
    created_by_id: getUuidByName("USER_01"),
    updated_at: new Date("2024-01-18T14:00:00Z"),
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
];

// CREATE - สร้าง GoodReceivedNoteComment ใหม่
export const createGoodReceivedNoteComment = (
  data: Omit<GoodReceivedNoteComment, "id" | "created_at">
): GoodReceivedNoteComment => {
  const newComment: GoodReceivedNoteComment = {
    ...data,
    id: generateId(),
    created_at: new Date(getCurrentTimestamp()),
  };

  goodReceivedNoteComments.push(newComment);
  return newComment;
};

// READ - อ่าน GoodReceivedNoteComment ทั้งหมด
export const getAllGoodReceivedNoteComments = (): GoodReceivedNoteComment[] => {
  return goodReceivedNoteComments.filter((comment) => !comment.deleted_at);
};

// READ - อ่าน GoodReceivedNoteComment ตาม ID
export const getGoodReceivedNoteCommentById = (id: string): GoodReceivedNoteComment | null => {
  const comment = goodReceivedNoteComments.find((c) => c.id === id && !c.deleted_at);
  return comment || null;
};

// READ - อ่าน GoodReceivedNoteComment ตาม good_received_note_id
export const getGoodReceivedNoteCommentsByGrnId = (grnId: string): GoodReceivedNoteComment[] => {
  return goodReceivedNoteComments.filter((c) => c.good_received_note_id === grnId && !c.deleted_at);
};

// READ - อ่าน GoodReceivedNoteComment ตาม user_id
export const getGoodReceivedNoteCommentsByUserId = (userId: string): GoodReceivedNoteComment[] => {
  return goodReceivedNoteComments.filter((c) => c.user_id === userId && !c.deleted_at);
};

// READ - อ่าน GoodReceivedNoteComment ตาม type
export const getGoodReceivedNoteCommentsByType = (type: CommentType): GoodReceivedNoteComment[] => {
  return goodReceivedNoteComments.filter((c) => c.type === type && !c.deleted_at);
};

// READ - อ่าน GoodReceivedNoteComment ที่เป็น user comments
export const getUserComments = (): GoodReceivedNoteComment[] => {
  return goodReceivedNoteComments.filter((c) => c.type === "user" && !c.deleted_at);
};

// READ - อ่าน GoodReceivedNoteComment ที่เป็น system comments
export const getSystemComments = (): GoodReceivedNoteComment[] => {
  return goodReceivedNoteComments.filter((c) => c.type === "system" && !c.deleted_at);
};

// READ - อ่าน GoodReceivedNoteComment ที่มี attachments
export const getCommentsWithAttachments = (): GoodReceivedNoteComment[] => {
  return goodReceivedNoteComments.filter(
    (c) =>
      !c.deleted_at &&
      c.attachments &&
      Object.keys(c.attachments).length > 0 &&
      c.attachments.files &&
      c.attachments.files.length > 0
  );
};

// READ - อ่าน GoodReceivedNoteComment ตาม GRN และ User
export const getGoodReceivedNoteCommentsByGrnAndUser = (grnId: string, userId: string): GoodReceivedNoteComment[] => {
  return goodReceivedNoteComments.filter(
    (c) => c.good_received_note_id === grnId && c.user_id === userId && !c.deleted_at
  );
};

// READ - ค้นหา GoodReceivedNoteComment
export const searchGoodReceivedNoteComments = (searchTerm: string): GoodReceivedNoteComment[] => {
  const lowerSearchTerm = searchTerm.toLowerCase();
  return goodReceivedNoteComments.filter(
    (c) =>
      !c.deleted_at &&
      (c.message?.toLowerCase().includes(lowerSearchTerm) ||
        c.user_name?.toLowerCase().includes(lowerSearchTerm) ||
        c.note?.toLowerCase().includes(lowerSearchTerm))
  );
};

// UPDATE - อัปเดต GoodReceivedNoteComment
export const updateGoodReceivedNoteComment = (
  id: string,
  updateData: Partial<Omit<GoodReceivedNoteComment, "id" | "created_at" | "created_by_id">>
): GoodReceivedNoteComment | null => {
  const index = goodReceivedNoteComments.findIndex((c) => c.id === id);

  if (index === -1) {
    return null;
  }

  goodReceivedNoteComments[index] = {
    ...goodReceivedNoteComments[index],
    ...updateData,
    updated_at: new Date(getCurrentTimestamp()),
  };

  return goodReceivedNoteComments[index];
};

// UPDATE - อัปเดต message
export const updateGoodReceivedNoteCommentMessage = (id: string, message: string): GoodReceivedNoteComment | null => {
  return updateGoodReceivedNoteComment(id, { message });
};

// UPDATE - อัปเดต attachments
export const updateGoodReceivedNoteCommentAttachments = (
  id: string,
  attachments: any
): GoodReceivedNoteComment | null => {
  return updateGoodReceivedNoteComment(id, { attachments });
};

// UPDATE - เพิ่ม attachment
export const addAttachmentToComment = (
  id: string,
  attachment: { name: string; url: string; type: string }
): GoodReceivedNoteComment | null => {
  const comment = getGoodReceivedNoteCommentById(id);
  if (!comment) {
    return null;
  }

  const currentAttachments = comment.attachments || {};
  const currentFiles = currentAttachments.files || [];

  return updateGoodReceivedNoteComment(id, {
    attachments: {
      ...currentAttachments,
      files: [...currentFiles, attachment],
    },
  });
};

// UPDATE - ลบ attachment
export const removeAttachmentFromComment = (id: string, attachmentName: string): GoodReceivedNoteComment | null => {
  const comment = getGoodReceivedNoteCommentById(id);
  if (!comment) {
    return null;
  }

  const currentAttachments = comment.attachments || {};
  const currentFiles = currentAttachments.files || [];

  return updateGoodReceivedNoteComment(id, {
    attachments: {
      ...currentAttachments,
      files: currentFiles.filter((f: any) => f.name !== attachmentName),
    },
  });
};

// UPDATE - อัปเดต note
export const updateGoodReceivedNoteCommentNote = (id: string, note: string): GoodReceivedNoteComment | null => {
  return updateGoodReceivedNoteComment(id, { note });
};

// DELETE - ลบ GoodReceivedNoteComment (soft delete)
export const deleteGoodReceivedNoteComment = (id: string, deletedById: string): boolean => {
  const index = goodReceivedNoteComments.findIndex((c) => c.id === id);

  if (index === -1) {
    return false;
  }

  goodReceivedNoteComments[index] = {
    ...goodReceivedNoteComments[index],
    deleted_at: new Date(getCurrentTimestamp()),
    deleted_by_id: deletedById,
  };

  return true;
};

// DELETE - ลบ GoodReceivedNoteComment แบบถาวร
export const hardDeleteGoodReceivedNoteComment = (id: string): boolean => {
  const index = goodReceivedNoteComments.findIndex((c) => c.id === id);

  if (index === -1) {
    return false;
  }

  goodReceivedNoteComments.splice(index, 1);
  return true;
};

// DELETE - ลบ GoodReceivedNoteComment ทั้งหมดของ GRN
export const deleteGoodReceivedNoteCommentsByGrnId = (grnId: string, deletedById: string): number => {
  let deletedCount = 0;

  goodReceivedNoteComments.forEach((c) => {
    if (c.good_received_note_id === grnId && !c.deleted_at) {
      c.deleted_at = new Date(getCurrentTimestamp());
      c.deleted_by_id = deletedById;
      deletedCount++;
    }
  });

  return deletedCount;
};

// DELETE - ลบ GoodReceivedNoteComment ทั้งหมดของ User
export const deleteGoodReceivedNoteCommentsByUserId = (userId: string, deletedById: string): number => {
  let deletedCount = 0;

  goodReceivedNoteComments.forEach((c) => {
    if (c.user_id === userId && !c.deleted_at) {
      c.deleted_at = new Date(getCurrentTimestamp());
      c.deleted_by_id = deletedById;
      deletedCount++;
    }
  });

  return deletedCount;
};

// Utility function สำหรับล้างข้อมูลทั้งหมด (ใช้สำหรับ testing)
export const clearAllGoodReceivedNoteComments = (): void => {
  goodReceivedNoteComments.length = 0;
};

// Utility function สำหรับนับจำนวน GoodReceivedNoteComment
export const getGoodReceivedNoteCommentCount = (): number => {
  return goodReceivedNoteComments.filter((c) => !c.deleted_at).length;
};

// Utility function สำหรับนับจำนวน GoodReceivedNoteComment ตาม GRN
export const getGoodReceivedNoteCommentCountByGrnId = (grnId: string): number => {
  return goodReceivedNoteComments.filter((c) => c.good_received_note_id === grnId && !c.deleted_at).length;
};

// Utility function สำหรับนับจำนวน GoodReceivedNoteComment ตาม User
export const getGoodReceivedNoteCommentCountByUserId = (userId: string): number => {
  return goodReceivedNoteComments.filter((c) => c.user_id === userId && !c.deleted_at).length;
};

// Utility function สำหรับนับจำนวน GoodReceivedNoteComment ตาม type
export const getGoodReceivedNoteCommentCountByType = (type: CommentType): number => {
  return goodReceivedNoteComments.filter((c) => c.type === type && !c.deleted_at).length;
};

// Utility function สำหรับตรวจสอบ GoodReceivedNoteComment ที่ถูกลบแล้ว
export const getDeletedGoodReceivedNoteComments = (): GoodReceivedNoteComment[] => {
  return goodReceivedNoteComments.filter((c) => c.deleted_at !== null);
};

// Utility function สำหรับกู้คืน GoodReceivedNoteComment ที่ถูกลบแล้ว
export const restoreGoodReceivedNoteComment = (id: string): boolean => {
  const index = goodReceivedNoteComments.findIndex((c) => c.id === id);

  if (index === -1) {
    return false;
  }

  if (goodReceivedNoteComments[index].deleted_at) {
    goodReceivedNoteComments[index] = {
      ...goodReceivedNoteComments[index],
      deleted_at: null,
      deleted_by_id: null,
    };
    return true;
  }

  return false;
};

// Utility function สำหรับ sort comments ตามวันที่
export const sortCommentsByDate = (
  comments: GoodReceivedNoteComment[],
  order: "asc" | "desc" = "desc"
): GoodReceivedNoteComment[] => {
  return [...comments].sort((a, b) => {
    const timeA = a.created_at.getTime();
    const timeB = b.created_at.getTime();
    return order === "asc" ? timeA - timeB : timeB - timeA;
  });
};

// Utility function สำหรับดึง comments ล่าสุดของ GRN
export const getLatestCommentsByGrnId = (grnId: string, limit: number = 5): GoodReceivedNoteComment[] => {
  const comments = getGoodReceivedNoteCommentsByGrnId(grnId);
  const sorted = sortCommentsByDate(comments, "desc");
  return sorted.slice(0, limit);
};
