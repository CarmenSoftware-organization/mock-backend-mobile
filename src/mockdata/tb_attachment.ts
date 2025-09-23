import { generateId, getCurrentTimestamp } from "@/libs/utils";

/**
 * Additional information stored with attachment
 */
export interface AttachmentInfo {
  category?: string;
  pages?: number;
  resolution?: string;
  [key: string]: unknown;
}

/**
 * Main attachment interface representing file attachments in the system
 */
export interface Attachment {
  /** Unique identifier for the attachment */
  id: string;
  /** S3 storage token for file access */
  s3_token: string;
  /** S3 folder/bucket path */
  s3_folder: string;
  /** Name of the file without extension */
  file_name: string;
  /** File extension (pdf, jpg, etc.) */
  file_ext: string;
  /** MIME type of the file */
  file_type: string;
  /** File size in bytes */
  file_size: number;
  /** Complete URL to access the file */
  file_url: string;
  /** Additional metadata about the file */
  info: AttachmentInfo;
  /** Document version number */
  doc_version: string;
  /** ISO timestamp when created */
  created_at: string;
  /** ID of user who created the attachment */
  created_by_id: string;
  /** ISO timestamp when last updated */
  updated_at: string;
  /** ID of user who last updated the attachment */
  updated_by_id: string;
  /** ISO timestamp when soft deleted (null if not deleted) */
  deleted_at: string | null;
  /** ID of user who deleted the attachment (null if not deleted) */
  deleted_by_id: string | null;
}

/** Data required to create a new attachment */
export type CreateAttachmentData = Omit<Attachment, "id" | "created_at" | "updated_at">;

/** Data that can be updated on an attachment */
export type UpdateAttachmentData = Partial<Omit<Attachment, "id" | "created_at" | "created_by_id">>;

/**
 * Search criteria for finding attachments
 */
export interface AttachmentSearchCriteria {
  /** Search in file names (case insensitive) */
  file_name?: string;
  /** Exact S3 folder match */
  s3_folder?: string;
  /** Exact file extension match */
  file_ext?: string;
  /** Exact file type/MIME type match */
  file_type?: string;
  /** Exact document version match */
  doc_version?: string;
  /** Minimum file size in bytes */
  min_file_size?: number;
  /** Maximum file size in bytes */
  max_file_size?: number;
  /** Whether to include soft deleted attachments */
  include_deleted?: boolean;
}

export const attachments: Attachment[] = [
  {
    id: "550e8400-e29b-41d4-a716-446655440001",
    s3_token: "att_001_token",
    s3_folder: "invoices",
    file_name: "invoice_001",
    file_ext: "pdf",
    file_type: "application/pdf",
    file_size: 1024000,
    file_url: "https://s3.amazonaws.com/bucket/invoices/invoice_001.pdf",
    info: { category: "invoice", pages: 2 },
    doc_version: "1.0",
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440002",
    s3_token: "att_002_token",
    s3_folder: "receipts",
    file_name: "receipt_001",
    file_ext: "jpg",
    file_type: "image/jpeg",
    file_size: 512000,
    file_url: "https://s3.amazonaws.com/bucket/receipts/receipt_001.jpg",
    info: { category: "receipt", resolution: "1920x1080" },
    doc_version: "1.0",
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440003",
    s3_token: "att_003_token",
    s3_folder: "contracts",
    file_name: "contract_001",
    file_ext: "docx",
    file_type:
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    file_size: 2048000,
    file_url: "https://s3.amazonaws.com/bucket/contracts/contract_001.docx",
    info: { category: "contract", pages: 5 },
    doc_version: "1.0",
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    deleted_at: null,
    deleted_by_id: null,
  },
];

/**
 * Creates a new attachment record
 * @param attachmentData - Data for the new attachment
 * @returns The created attachment
 * @throws Error if S3 token already exists
 */
export const createAttachment = (
  attachmentData: CreateAttachmentData
): Attachment => {
  if (isAttachmentS3TokenExists(attachmentData.s3_token)) {
    throw new Error(`S3 token '${attachmentData.s3_token}' already exists`);
  }

  const newAttachment: Attachment = {
    ...attachmentData,
    id: generateId(),
    created_at: getCurrentTimestamp(),
    updated_at: getCurrentTimestamp(),
  };

  attachments.push(newAttachment);
  return newAttachment;
};

/**
 * Retrieves all attachments
 * @param includeDeleted - Whether to include soft deleted attachments
 * @returns Array of attachments
 */
export const getAllAttachments = (includeDeleted = false): Attachment[] => {
  return includeDeleted
    ? [...attachments]
    : attachments.filter(attachment => !attachment.deleted_at);
};

/**
 * Retrieves an attachment by its ID
 * @param id - The attachment ID
 * @param includeDeleted - Whether to include soft deleted attachments
 * @returns The attachment or undefined if not found
 */
export const getAttachmentById = (id: string, includeDeleted = false): Attachment | undefined => {
  const attachment = attachments.find((attachment) => attachment.id === id);
  return (includeDeleted || !attachment?.deleted_at) ? attachment : undefined;
};

export const getAttachmentByS3Token = (
  s3Token: string,
  includeDeleted = false
): Attachment | undefined => {
  const attachment = attachments.find((attachment) => attachment.s3_token === s3Token);
  return (includeDeleted || !attachment?.deleted_at) ? attachment : undefined;
};

export const getAttachmentsByFileName = (
  fileName: string,
  includeDeleted = false
): Attachment[] => {
  return attachments.filter((attachment) => {
    const matchesName = attachment.file_name.toLowerCase().includes(fileName.toLowerCase());
    return matchesName && (includeDeleted || !attachment.deleted_at);
  });
};

export const getAttachmentsByS3Folder = (
  s3Folder: string,
  includeDeleted = false
): Attachment[] => {
  return attachments.filter((attachment) => {
    const matchesFolder = attachment.s3_folder === s3Folder;
    return matchesFolder && (includeDeleted || !attachment.deleted_at);
  });
};

export const getAttachmentsByFileExt = (
  fileExt: string,
  includeDeleted = false
): Attachment[] => {
  return attachments.filter((attachment) => {
    const matchesExt = attachment.file_ext === fileExt;
    return matchesExt && (includeDeleted || !attachment.deleted_at);
  });
};

export const getAttachmentsByFileType = (
  fileType: string,
  includeDeleted = false
): Attachment[] => {
  return attachments.filter((attachment) => {
    const matchesType = attachment.file_type === fileType;
    return matchesType && (includeDeleted || !attachment.deleted_at);
  });
};

export const getAttachmentsByFileSize = (
  minSize?: number,
  maxSize?: number,
  includeDeleted = false
): Attachment[] => {
  return attachments.filter((attachment) => {
    const withinSizeRange =
      (!minSize || attachment.file_size >= minSize) &&
      (!maxSize || attachment.file_size <= maxSize);
    return withinSizeRange && (includeDeleted || !attachment.deleted_at);
  });
};

export const getAttachmentsByDocVersion = (
  docVersion: string,
  includeDeleted = false
): Attachment[] => {
  return attachments.filter((attachment) => {
    const matchesVersion = attachment.doc_version === docVersion;
    return matchesVersion && (includeDeleted || !attachment.deleted_at);
  });
};

/**
 * Updates an existing attachment
 * @param id - The attachment ID to update
 * @param updateData - Data to update
 * @returns The updated attachment or null if not found/deleted
 * @throws Error if trying to update S3 token to one that already exists
 */
export const updateAttachment = (
  id: string,
  updateData: UpdateAttachmentData
): Attachment | null => {
  const index = attachments.findIndex((attachment) => attachment.id === id);

  if (index === -1 || attachments[index].deleted_at) {
    return null;
  }

  if (updateData.s3_token && updateData.s3_token !== attachments[index].s3_token) {
    if (isAttachmentS3TokenExists(updateData.s3_token)) {
      throw new Error(`S3 token '${updateData.s3_token}' already exists`);
    }
  }

  attachments[index] = {
    ...attachments[index],
    ...updateData,
    updated_at: getCurrentTimestamp(),
  };

  return attachments[index];
};

export const updateAttachmentFileName = (
  id: string,
  fileName: string
): Attachment | null => {
  return updateAttachment(id, { file_name: fileName });
};

export const updateAttachmentFileUrl = (
  id: string,
  fileUrl: string
): Attachment | null => {
  return updateAttachment(id, { file_url: fileUrl });
};

export const updateAttachmentInfo = (
  id: string,
  info: AttachmentInfo
): Attachment | null => {
  return updateAttachment(id, { info });
};

export const updateAttachmentDocVersion = (
  id: string,
  docVersion: string
): Attachment | null => {
  return updateAttachment(id, { doc_version: docVersion });
};

/**
 * Soft deletes an attachment
 * @param id - The attachment ID to delete
 * @param deletedById - ID of the user performing the deletion
 * @returns True if deleted successfully, false if not found or already deleted
 */
export const deleteAttachment = (id: string, deletedById: string): boolean => {
  const index = attachments.findIndex((attachment) => attachment.id === id);

  if (index === -1 || attachments[index].deleted_at) {
    return false;
  }

  attachments[index] = {
    ...attachments[index],
    deleted_at: getCurrentTimestamp(),
    deleted_by_id: deletedById,
  };

  return true;
};

export const hardDeleteAttachment = (id: string): boolean => {
  const index = attachments.findIndex((attachment) => attachment.id === id);

  if (index === -1) {
    return false;
  }

  attachments.splice(index, 1);
  return true;
};

export const restoreAttachment = (id: string): boolean => {
  const index = attachments.findIndex((attachment) => attachment.id === id);

  if (index === -1 || !attachments[index].deleted_at) {
    return false;
  }

  attachments[index] = {
    ...attachments[index],
    deleted_at: null,
    deleted_by_id: null,
    updated_at: getCurrentTimestamp(),
  };

  return true;
};

// DELETE - ลบ Attachment ตาม s3_token
export const deleteAttachmentByS3Token = (
  s3Token: string,
  deletedById: string
): boolean => {
  const attachment = attachments.find((att) => att.s3_token === s3Token);
  if (!attachment) return false;

  return deleteAttachment(attachment.id, deletedById);
};

// DELETE - ลบ Attachment ตาม s3_folder
export const deleteAttachmentsByS3Folder = (
  s3Folder: string,
  deletedById: string
): number => {
  let deletedCount = 0;

  attachments.forEach((attachment) => {
    if (attachment.s3_folder === s3Folder && !attachment.deleted_at) {
      attachment.deleted_at = getCurrentTimestamp();
      attachment.deleted_by_id = deletedById;
      deletedCount++;
    }
  });

  return deletedCount;
};

// DELETE - ลบ Attachment ตาม file_ext
export const deleteAttachmentsByFileExt = (
  fileExt: string,
  deletedById: string
): number => {
  let deletedCount = 0;

  attachments.forEach((attachment) => {
    if (attachment.file_ext === fileExt && !attachment.deleted_at) {
      attachment.deleted_at = getCurrentTimestamp();
      attachment.deleted_by_id = deletedById;
      deletedCount++;
    }
  });

  return deletedCount;
};

/**
 * Clears all attachment data (primarily for testing)
 * @warning This permanently removes all data
 */
export const clearAllAttachments = (): void => {
  attachments.length = 0;
};

export const getAttachmentCount = (includeDeleted = false): number => {
  return includeDeleted
    ? attachments.length
    : attachments.filter(attachment => !attachment.deleted_at).length;
};

export const getAttachmentCountByS3Folder = (
  s3Folder: string,
  includeDeleted = false
): number => {
  return attachments.filter((attachment) => {
    const matchesFolder = attachment.s3_folder === s3Folder;
    return matchesFolder && (includeDeleted || !attachment.deleted_at);
  }).length;
};

export const getAttachmentCountByFileExt = (
  fileExt: string,
  includeDeleted = false
): number => {
  return attachments.filter((attachment) => {
    const matchesExt = attachment.file_ext === fileExt;
    return matchesExt && (includeDeleted || !attachment.deleted_at);
  }).length;
};

export const getTotalFileSize = (includeDeleted = false): number => {
  return attachments
    .filter(attachment => includeDeleted || !attachment.deleted_at)
    .reduce((total, attachment) => total + attachment.file_size, 0);
};

export const getFileSizeByCategory = (includeDeleted = false): Record<string, number> => {
  const sizeByCategory: Record<string, number> = {};

  attachments
    .filter(attachment => includeDeleted || !attachment.deleted_at)
    .forEach(attachment => {
      const category = attachment.info.category || 'unknown';
      sizeByCategory[category] = (sizeByCategory[category] || 0) + attachment.file_size;
    });

  return sizeByCategory;
};

/**
 * Advanced search for attachments with multiple criteria
 * @param searchCriteria - Search parameters
 * @returns Array of attachments matching all criteria
 */
export const searchAttachments = (searchCriteria: AttachmentSearchCriteria): Attachment[] => {
  return attachments.filter((attachment) => {
    if (!searchCriteria.include_deleted && attachment.deleted_at) {
      return false;
    }

    const checks = [
      !searchCriteria.file_name ||
        attachment.file_name.toLowerCase().includes(searchCriteria.file_name.toLowerCase()),
      !searchCriteria.s3_folder ||
        attachment.s3_folder === searchCriteria.s3_folder,
      !searchCriteria.file_ext ||
        attachment.file_ext === searchCriteria.file_ext,
      !searchCriteria.file_type ||
        attachment.file_type === searchCriteria.file_type,
      !searchCriteria.doc_version ||
        attachment.doc_version === searchCriteria.doc_version,
      !searchCriteria.min_file_size ||
        attachment.file_size >= searchCriteria.min_file_size,
      !searchCriteria.max_file_size ||
        attachment.file_size <= searchCriteria.max_file_size,
    ];

    return checks.every(Boolean);
  });
};

export const isAttachmentS3TokenExists = (s3Token: string, excludeId?: string): boolean => {
  return attachments.some((attachment) =>
    attachment.s3_token === s3Token &&
    attachment.id !== excludeId &&
    !attachment.deleted_at
  );
};

export const isAttachmentFileNameExists = (
  fileName: string,
  s3Folder?: string,
  excludeId?: string
): boolean => {
  return attachments.some((attachment) =>
    attachment.file_name === fileName &&
    (!s3Folder || attachment.s3_folder === s3Folder) &&
    attachment.id !== excludeId &&
    !attachment.deleted_at
  );
};

export const getAttachmentsByDateRange = (
  startDate: string,
  endDate: string,
  includeDeleted = false
): Attachment[] => {
  return attachments.filter((attachment) => {
    const createdAt = new Date(attachment.created_at);
    const start = new Date(startDate);
    const end = new Date(endDate);
    const withinRange = createdAt >= start && createdAt <= end;
    return withinRange && (includeDeleted || !attachment.deleted_at);
  });
};

export const getUniqueS3Folders = (includeDeleted = false): string[] => {
  const folders = new Set<string>();
  attachments
    .filter(attachment => includeDeleted || !attachment.deleted_at)
    .forEach(attachment => folders.add(attachment.s3_folder));
  return Array.from(folders).sort();
};

export const getUniqueFileExtensions = (includeDeleted = false): string[] => {
  const extensions = new Set<string>();
  attachments
    .filter(attachment => includeDeleted || !attachment.deleted_at)
    .forEach(attachment => extensions.add(attachment.file_ext));
  return Array.from(extensions).sort();
};
