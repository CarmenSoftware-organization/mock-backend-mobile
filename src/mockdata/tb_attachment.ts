import { generateId, getCurrentTimestamp } from "@/libs/utils";

export interface Attachment {
  id: string;
  s3_token: string;
  s3_folder: string;
  file_name: string;
  file_ext: string;
  file_type: string;
  file_size: number;
  file_url: string;
  info: any;
  doc_version: string;
  created_at: string;
  created_by_id: string;
  updated_at: string;
  updated_by_id: string;
  deleted_at: string | null;
  deleted_by_id: string | null;
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
    deleted_by_id: null
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
    deleted_by_id: null
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440003",
    s3_token: "att_003_token",
    s3_folder: "contracts",
    file_name: "contract_001",
    file_ext: "docx",
    file_type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    file_size: 2048000,
    file_url: "https://s3.amazonaws.com/bucket/contracts/contract_001.docx",
    info: { category: "contract", pages: 5 },
    doc_version: "1.0",
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    deleted_at: null,
    deleted_by_id: null
  }
];

// CREATE - สร้าง Attachment ใหม่
export const createAttachment = (attachmentData: Omit<Attachment, 'id' | 'created_at' | 'updated_at'>): Attachment => {
  const newAttachment: Attachment = {
    ...attachmentData,
    id: generateId(),
    created_at: getCurrentTimestamp(),
    updated_at: getCurrentTimestamp()
  };
  
  attachments.push(newAttachment);
  return newAttachment;
};

// READ - อ่าน Attachment ทั้งหมด
export const getAllAttachments = (): Attachment[] => {
  return [...attachments];
};

// READ - อ่าน Attachment ตาม ID
export const getAttachmentById = (id: string): Attachment | undefined => {
  return attachments.find(attachment => attachment.id === id);
};

// READ - อ่าน Attachment ตาม s3_token
export const getAttachmentByS3Token = (s3Token: string): Attachment | undefined => {
  return attachments.find(attachment => attachment.s3_token === s3Token);
};

// READ - อ่าน Attachment ตาม file_name
export const getAttachmentByFileName = (fileName: string): Attachment[] => {
  return attachments.filter(attachment => 
    attachment.file_name.toLowerCase().includes(fileName.toLowerCase())
  );
};

// READ - อ่าน Attachment ตาม s3_folder
export const getAttachmentsByS3Folder = (s3Folder: string): Attachment[] => {
  return attachments.filter(attachment => attachment.s3_folder === s3Folder);
};

// READ - อ่าน Attachment ตาม file_ext
export const getAttachmentsByFileExt = (fileExt: string): Attachment[] => {
  return attachments.filter(attachment => attachment.file_ext === fileExt);
};

// READ - อ่าน Attachment ตาม file_type
export const getAttachmentsByFileType = (fileType: string): Attachment[] => {
  return attachments.filter(attachment => attachment.file_type === fileType);
};

// READ - อ่าน Attachment ที่มีขนาดไฟล์มากกว่า
export const getAttachmentsByMinFileSize = (minSize: number): Attachment[] => {
  return attachments.filter(attachment => attachment.file_size >= minSize);
};

// READ - อ่าน Attachment ที่มีขนาดไฟล์น้อยกว่า
export const getAttachmentsByMaxFileSize = (maxSize: number): Attachment[] => {
  return attachments.filter(attachment => attachment.file_size <= maxSize);
};

// READ - อ่าน Attachment ตาม doc_version
export const getAttachmentsByDocVersion = (docVersion: string): Attachment[] => {
  return attachments.filter(attachment => attachment.doc_version === docVersion);
};

// UPDATE - อัปเดต Attachment
export const updateAttachment = (id: string, updateData: Partial<Omit<Attachment, 'id' | 'created_at' | 'created_by_id'>>): Attachment | null => {
  const index = attachments.findIndex(attachment => attachment.id === id);
  
  if (index === -1) {
    return null;
  }
  
  attachments[index] = {
    ...attachments[index],
    ...updateData,
    updated_at: getCurrentTimestamp()
  };
  
  return attachments[index];
};

// UPDATE - อัปเดต Attachment file name
export const updateAttachmentFileName = (id: string, fileName: string): Attachment | null => {
  return updateAttachment(id, { file_name: fileName });
};

// UPDATE - อัปเดต Attachment file URL
export const updateAttachmentFileUrl = (id: string, fileUrl: string): Attachment | null => {
  return updateAttachment(id, { file_url: fileUrl });
};

// UPDATE - อัปเดต Attachment info
export const updateAttachmentInfo = (id: string, info: any): Attachment | null => {
  return updateAttachment(id, { info });
};

// UPDATE - อัปเดต Attachment doc version
export const updateAttachmentDocVersion = (id: string, docVersion: string): Attachment | null => {
  return updateAttachment(id, { doc_version: docVersion });
};

// DELETE - ลบ Attachment (soft delete)
export const deleteAttachment = (id: string, deletedById: string): boolean => {
  const index = attachments.findIndex(attachment => attachment.id === id);
  
  if (index === -1) {
    return false;
  }
  
  attachments[index] = {
    ...attachments[index],
    deleted_at: getCurrentTimestamp(),
    deleted_by_id: deletedById
  };
  
  return true;
};

// DELETE - ลบ Attachment แบบถาวร
export const hardDeleteAttachment = (id: string): boolean => {
  const index = attachments.findIndex(attachment => attachment.id === id);
  
  if (index === -1) {
    return false;
  }
  
  attachments.splice(index, 1);
  return true;
};

// DELETE - ลบ Attachment ตาม s3_token
export const deleteAttachmentByS3Token = (s3Token: string, deletedById: string): boolean => {
  const attachment = attachments.find(att => att.s3_token === s3Token);
  if (!attachment) return false;
  
  return deleteAttachment(attachment.id, deletedById);
};

// DELETE - ลบ Attachment ตาม s3_folder
export const deleteAttachmentsByS3Folder = (s3Folder: string, deletedById: string): number => {
  let deletedCount = 0;
  
  attachments.forEach(attachment => {
    if (attachment.s3_folder === s3Folder && !attachment.deleted_at) {
      attachment.deleted_at = getCurrentTimestamp();
      attachment.deleted_by_id = deletedById;
      deletedCount++;
    }
  });
  
  return deletedCount;
};

// DELETE - ลบ Attachment ตาม file_ext
export const deleteAttachmentsByFileExt = (fileExt: string, deletedById: string): number => {
  let deletedCount = 0;
  
  attachments.forEach(attachment => {
    if (attachment.file_ext === fileExt && !attachment.deleted_at) {
      attachment.deleted_at = getCurrentTimestamp();
      attachment.deleted_by_id = deletedById;
      deletedCount++;
    }
  });
  
  return deletedCount;
};

// Utility function สำหรับล้างข้อมูลทั้งหมด (ใช้สำหรับ testing)
export const clearAllAttachments = (): void => {
  attachments.length = 0;
};

// Utility function สำหรับนับจำนวน Attachment
export const getAttachmentCount = (): number => {
  return attachments.length;
};

// Utility function สำหรับนับจำนวน Attachment ตาม s3_folder
export const getAttachmentCountByS3Folder = (s3Folder: string): number => {
  return attachments.filter(attachment => attachment.s3_folder === s3Folder).length;
};

// Utility function สำหรับนับจำนวน Attachment ตาม file_ext
export const getAttachmentCountByFileExt = (fileExt: string): number => {
  return attachments.filter(attachment => attachment.file_ext === fileExt).length;
};

// Utility function สำหรับคำนวณขนาดไฟล์รวม
export const getTotalFileSize = (): number => {
  return attachments.reduce((total, attachment) => total + attachment.file_size, 0);
};

// Utility function สำหรับค้นหา Attachment แบบ advanced search
export const searchAttachments = (searchCriteria: {
  file_name?: string;
  s3_folder?: string;
  file_ext?: string;
  file_type?: string;
  doc_version?: string;
  min_file_size?: number;
  max_file_size?: number;
}): Attachment[] => {
  return attachments.filter(attachment => {
    if (searchCriteria.file_name && !attachment.file_name.toLowerCase().includes(searchCriteria.file_name.toLowerCase())) {
      return false;
    }
    
    if (searchCriteria.s3_folder && attachment.s3_folder !== searchCriteria.s3_folder) {
      return false;
    }
    
    if (searchCriteria.file_ext && attachment.file_ext !== searchCriteria.file_ext) {
      return false;
    }
    
    if (searchCriteria.file_type && attachment.file_type !== searchCriteria.file_type) {
      return false;
    }
    
    if (searchCriteria.doc_version && attachment.doc_version !== searchCriteria.doc_version) {
      return false;
    }
    
    if (searchCriteria.min_file_size && attachment.file_size < searchCriteria.min_file_size) {
      return false;
    }
    
    if (searchCriteria.max_file_size && attachment.file_size > searchCriteria.max_file_size) {
      return false;
    }
    
    return true;
  });
};

// Utility function สำหรับตรวจสอบ s3_token ซ้ำ
export const isAttachmentS3TokenExists = (s3Token: string): boolean => {
  return attachments.some(attachment => attachment.s3_token === s3Token);
};

// Utility function สำหรับตรวจสอบ file_name ซ้ำ
export const isAttachmentFileNameExists = (fileName: string): boolean => {
  return attachments.some(attachment => attachment.file_name === fileName);
};
