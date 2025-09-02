import { generateId, getCurrentTimestamp } from "@/libs/utils";

export interface PurchaseRequestTemplate {
  id: string;
  description: string | null;
  workflow_id: string;
  workflow_name: string;
  department_id: string;
  department_name: string;
  is_active: boolean;
  note: string | null;
  info: any;
  dimension: any;
  created_at: string;
  created_by_id: string;
  updated_at: string;
  updated_by_id: string | null;
  deleted_at: string | null;
  deleted_by_id: string | null;
}

export const purchaseRequestTemplates: PurchaseRequestTemplate[] = [
  {
    id: "550e8400-e29b-41d4-a716-446655440001",
    description: "Standard template for IT equipment requests",
    workflow_id: "550e8400-e29b-41d4-a716-446655440001",
    workflow_name: "IT Equipment Workflow",
    department_id: "550e8400-e29b-41d4-a716-446655440001",
    department_name: "IT Department",
    is_active: true,
    note: "Template for IT equipment and hardware requests",
    info: {
      category: "IT",
      priority: "medium",
      approval_levels: 2,
    },
    dimension: {
      cost_center: "IT-001",
      project_code: "IT-2024",
    },
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440002",
    description: "Template for office supplies and stationery",
    workflow_id: "550e8400-e29b-41d4-a716-446655440002",
    workflow_name: "Office Supplies Workflow",
    department_id: "550e8400-e29b-41d4-a716-446655440002",
    department_name: "Administration",
    is_active: true,
    note: "Standard template for office supplies",
    info: {
      category: "Office",
      priority: "low",
      approval_levels: 1,
    },
    dimension: {
      cost_center: "ADMIN-001",
      project_code: "ADMIN-2024",
    },
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "1bfdb891-58ee-499c-8115-34a964de8122",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440003",
    description: "Template for marketing and promotional materials",
    workflow_id: "550e8400-e29b-41d4-a716-446655440003",
    workflow_name: "Marketing Workflow",
    department_id: "550e8400-e29b-41d4-a716-446655440003",
    department_name: "Marketing",
    is_active: false,
    note: "Template for marketing materials and campaigns",
    info: {
      category: "Marketing",
      priority: "high",
      approval_levels: 3,
    },
    dimension: {
      cost_center: "MKT-001",
      project_code: "MKT-2024",
    },
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "3c5280a7-492e-421d-b739-7447455ce99e",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
];

// CREATE - สร้าง PurchaseRequestTemplate ใหม่
export const createPurchaseRequestTemplate = (
  templateData: Omit<
    PurchaseRequestTemplate,
    "id" | "created_at" | "updated_at"
  >
): PurchaseRequestTemplate => {
  const newTemplate: PurchaseRequestTemplate = {
    ...templateData,
    id: generateId(),
    created_at: getCurrentTimestamp(),
    updated_at: getCurrentTimestamp(),
  };

  purchaseRequestTemplates.push(newTemplate);
  return newTemplate;
};

// READ - อ่าน PurchaseRequestTemplate ทั้งหมด
export const getAllPurchaseRequestTemplates = (): PurchaseRequestTemplate[] => {
  return purchaseRequestTemplates.filter((template) => !template.deleted_at);
};

// READ - อ่าน PurchaseRequestTemplate ตาม ID
export const getPurchaseRequestTemplateById = (
  id: string
): PurchaseRequestTemplate | null => {
  const template = purchaseRequestTemplates.find(
    (template) => template.id === id && !template.deleted_at
  );
  return template || null;
};

// READ - อ่าน PurchaseRequestTemplate ตาม description
export const getPurchaseRequestTemplateByDescription = (
  description: string
): PurchaseRequestTemplate | null => {
  const template = purchaseRequestTemplates.find(
    (template) => template.description === description && !template.deleted_at
  );
  return template || null;
};

// READ - อ่าน PurchaseRequestTemplate ตาม department_id
export const getPurchaseRequestTemplatesByDepartment = (
  departmentId: string
): PurchaseRequestTemplate[] => {
  return purchaseRequestTemplates.filter(
    (template) =>
      template.department_id === departmentId && !template.deleted_at
  );
};

// READ - อ่าน PurchaseRequestTemplate ตาม workflow_id
export const getPurchaseRequestTemplatesByWorkflow = (
  workflowId: string
): PurchaseRequestTemplate[] => {
  return purchaseRequestTemplates.filter(
    (template) => template.workflow_id === workflowId && !template.deleted_at
  );
};

// READ - อ่าน PurchaseRequestTemplate ที่ active
export const getActivePurchaseRequestTemplates =
  (): PurchaseRequestTemplate[] => {
    return purchaseRequestTemplates.filter(
      (template) => template.is_active && !template.deleted_at
    );
  };

// READ - อ่าน PurchaseRequestTemplate ที่ inactive
export const getInactivePurchaseRequestTemplates =
  (): PurchaseRequestTemplate[] => {
    return purchaseRequestTemplates.filter(
      (template) => !template.is_active && !template.deleted_at
    );
  };

// READ - อ่าน PurchaseRequestTemplate ที่มี note
export const getPurchaseRequestTemplatesWithNote =
  (): PurchaseRequestTemplate[] => {
    return purchaseRequestTemplates.filter(
      (template) =>
        template.note && template.note.trim() !== "" && !template.deleted_at
    );
  };

// READ - อ่าน PurchaseRequestTemplate ที่มี info
export const getPurchaseRequestTemplatesWithInfo =
  (): PurchaseRequestTemplate[] => {
    return purchaseRequestTemplates.filter(
      (template) => template.info && !template.deleted_at
    );
  };

// READ - อ่าน PurchaseRequestTemplate ที่มี dimension
export const getPurchaseRequestTemplatesWithDimension =
  (): PurchaseRequestTemplate[] => {
    return purchaseRequestTemplates.filter(
      (template) => template.dimension && !template.deleted_at
    );
  };

// READ - ค้นหา PurchaseRequestTemplate แบบ fuzzy search
export const searchPurchaseRequestTemplates = (
  searchTerm: string
): PurchaseRequestTemplate[] => {
  const lowerSearchTerm = searchTerm.toLowerCase();
  return purchaseRequestTemplates.filter(
    (template) =>
      !template.deleted_at &&
      (template.description?.toLowerCase().includes(lowerSearchTerm) ||
        template.workflow_name?.toLowerCase().includes(lowerSearchTerm) ||
        template.department_name?.toLowerCase().includes(lowerSearchTerm) ||
        template.note?.toLowerCase().includes(lowerSearchTerm))
  );
};

// UPDATE - อัปเดต PurchaseRequestTemplate
export const updatePurchaseRequestTemplate = (
  id: string,
  updateData: Partial<
    Omit<PurchaseRequestTemplate, "id" | "created_at" | "created_by_id">
  >
): PurchaseRequestTemplate | null => {
  const index = purchaseRequestTemplates.findIndex(
    (template) => template.id === id
  );

  if (index === -1) {
    return null;
  }

  purchaseRequestTemplates[index] = {
    ...purchaseRequestTemplates[index],
    ...updateData,
    updated_at: getCurrentTimestamp(),
  };

  return purchaseRequestTemplates[index];
};

// UPDATE - อัปเดต PurchaseRequestTemplate description
export const updatePurchaseRequestTemplateDescription = (
  id: string,
  description: string
): PurchaseRequestTemplate | null => {
  return updatePurchaseRequestTemplate(id, { description });
};

// UPDATE - อัปเดต PurchaseRequestTemplate workflow
export const updatePurchaseRequestTemplateWorkflow = (
  id: string,
  workflowId: string,
  workflowName: string
): PurchaseRequestTemplate | null => {
  return updatePurchaseRequestTemplate(id, {
    workflow_id: workflowId,
    workflow_name: workflowName,
  });
};

// UPDATE - อัปเดต PurchaseRequestTemplate department
export const updatePurchaseRequestTemplateDepartment = (
  id: string,
  departmentId: string,
  departmentName: string
): PurchaseRequestTemplate | null => {
  return updatePurchaseRequestTemplate(id, {
    department_id: departmentId,
    department_name: departmentName,
  });
};

// UPDATE - อัปเดต PurchaseRequestTemplate active status
export const updatePurchaseRequestTemplateActiveStatus = (
  id: string,
  isActive: boolean
): PurchaseRequestTemplate | null => {
  return updatePurchaseRequestTemplate(id, { is_active: isActive });
};

// UPDATE - อัปเดต PurchaseRequestTemplate note
export const updatePurchaseRequestTemplateNote = (
  id: string,
  note: string
): PurchaseRequestTemplate | null => {
  return updatePurchaseRequestTemplate(id, { note });
};

// UPDATE - อัปเดต PurchaseRequestTemplate info
export const updatePurchaseRequestTemplateInfo = (
  id: string,
  info: any
): PurchaseRequestTemplate | null => {
  return updatePurchaseRequestTemplate(id, { info });
};

// UPDATE - อัปเดต PurchaseRequestTemplate dimension
export const updatePurchaseRequestTemplateDimension = (
  id: string,
  dimension: any
): PurchaseRequestTemplate | null => {
  return updatePurchaseRequestTemplate(id, { dimension });
};

// DELETE - ลบ PurchaseRequestTemplate (soft delete)
export const deletePurchaseRequestTemplate = (
  id: string,
  deletedById: string
): boolean => {
  const index = purchaseRequestTemplates.findIndex(
    (template) => template.id === id
  );

  if (index === -1) {
    return false;
  }

  purchaseRequestTemplates[index] = {
    ...purchaseRequestTemplates[index],
    deleted_at: getCurrentTimestamp(),
    deleted_by_id: deletedById,
  };

  return true;
};

// DELETE - ลบ PurchaseRequestTemplate แบบถาวร
export const hardDeletePurchaseRequestTemplate = (id: string): boolean => {
  const index = purchaseRequestTemplates.findIndex(
    (template) => template.id === id
  );

  if (index === -1) {
    return false;
  }

  purchaseRequestTemplates.splice(index, 1);
  return true;
};

// DELETE - ลบ PurchaseRequestTemplate ตาม description
export const deletePurchaseRequestTemplateByDescription = (
  description: string,
  deletedById: string
): boolean => {
  const template = getPurchaseRequestTemplateByDescription(description);
  if (template) {
    return deletePurchaseRequestTemplate(template.id, deletedById);
  }
  return false;
};

// DELETE - ลบ PurchaseRequestTemplate ตาม department_id
export const deletePurchaseRequestTemplatesByDepartment = (
  departmentId: string,
  deletedById: string
): number => {
  let deletedCount = 0;

  purchaseRequestTemplates.forEach((template) => {
    if (template.department_id === departmentId && !template.deleted_at) {
      template.deleted_at = getCurrentTimestamp();
      template.deleted_by_id = deletedById;
      deletedCount++;
    }
  });

  return deletedCount;
};

// DELETE - ลบ PurchaseRequestTemplate ตาม workflow_id
export const deletePurchaseRequestTemplatesByWorkflow = (
  workflowId: string,
  deletedById: string
): number => {
  let deletedCount = 0;

  purchaseRequestTemplates.forEach((template) => {
    if (template.workflow_id === workflowId && !template.deleted_at) {
      template.deleted_at = getCurrentTimestamp();
      template.deleted_by_id = deletedById;
      deletedCount++;
    }
  });

  return deletedCount;
};

// DELETE - ลบ PurchaseRequestTemplate ตาม active status
export const deletePurchaseRequestTemplatesByActiveStatus = (
  isActive: boolean,
  deletedById: string
): number => {
  let deletedCount = 0;

  purchaseRequestTemplates.forEach((template) => {
    if (template.is_active === isActive && !template.deleted_at) {
      template.deleted_at = getCurrentTimestamp();
      template.deleted_by_id = deletedById;
      deletedCount++;
    }
  });

  return deletedCount;
};

// RESTORE - กู้คืน PurchaseRequestTemplate ที่ถูกลบ
export const restorePurchaseRequestTemplate = (id: string): boolean => {
  const index = purchaseRequestTemplates.findIndex(
    (template) => template.id === id
  );

  if (index === -1) {
    return false;
  }

  if (purchaseRequestTemplates[index].deleted_at) {
    purchaseRequestTemplates[index] = {
      ...purchaseRequestTemplates[index],
      deleted_at: null,
      deleted_by_id: null,
    };
    return true;
  }

  return false;
};

// RESTORE - กู้คืน PurchaseRequestTemplate ตาม department_id
export const restorePurchaseRequestTemplatesByDepartment = (
  departmentId: string
): number => {
  let restoredCount = 0;

  purchaseRequestTemplates.forEach((template) => {
    if (template.department_id === departmentId && template.deleted_at) {
      template.deleted_at = null;
      template.deleted_by_id = null;
      restoredCount++;
    }
  });

  return restoredCount;
};

// RESTORE - กู้คืน PurchaseRequestTemplate ตาม workflow_id
export const restorePurchaseRequestTemplatesByWorkflow = (
  workflowId: string
): number => {
  let restoredCount = 0;

  purchaseRequestTemplates.forEach((template) => {
    if (template.workflow_id === workflowId && template.deleted_at) {
      template.deleted_at = null;
      template.deleted_by_id = null;
      restoredCount++;
    }
  });

  return restoredCount;
};

// Utility function สำหรับล้างข้อมูลทั้งหมด (ใช้สำหรับ testing)
export const clearAllPurchaseRequestTemplates = (): void => {
  purchaseRequestTemplates.length = 0;
};

// Utility function สำหรับนับจำนวน PurchaseRequestTemplate
export const getPurchaseRequestTemplateCount = (): number => {
  return purchaseRequestTemplates.length;
};

// Utility function สำหรับนับจำนวน PurchaseRequestTemplate ตาม department_id
export const getPurchaseRequestTemplateCountByDepartment = (
  departmentId: string
): number => {
  return purchaseRequestTemplates.filter(
    (template) => template.department_id === departmentId
  ).length;
};

// Utility function สำหรับนับจำนวน PurchaseRequestTemplate ตาม workflow_id
export const getPurchaseRequestTemplateCountByWorkflow = (
  workflowId: string
): number => {
  return purchaseRequestTemplates.filter(
    (template) => template.workflow_id === workflowId
  ).length;
};

// Utility function สำหรับนับจำนวน PurchaseRequestTemplate ที่ active
export const getActivePurchaseRequestTemplateCount = (): number => {
  return purchaseRequestTemplates.filter((template) => template.is_active)
    .length;
};

// Utility function สำหรับนับจำนวน PurchaseRequestTemplate ที่ inactive
export const getInactivePurchaseRequestTemplateCount = (): number => {
  return purchaseRequestTemplates.filter((template) => !template.is_active)
    .length;
};

// Utility function สำหรับตรวจสอบ PurchaseRequestTemplate description ซ้ำ
export const isPurchaseRequestTemplateDescriptionExists = (
  description: string
): boolean => {
  return purchaseRequestTemplates.some(
    (template) => template.description === description
  );
};

// Utility function สำหรับตรวจสอบ PurchaseRequestTemplate ที่ถูกลบแล้ว
export const getDeletedPurchaseRequestTemplates =
  (): PurchaseRequestTemplate[] => {
    return purchaseRequestTemplates.filter(
      (template) => template.deleted_at !== null
    );
  };

// Utility function สำหรับค้นหา PurchaseRequestTemplate แบบ advanced search
export const searchPurchaseRequestTemplatesAdvanced = (searchCriteria: {
  description?: string;
  department_id?: string;
  workflow_id?: string;
  is_active?: boolean;
  has_note?: boolean;
  has_info?: boolean;
  has_dimension?: boolean;
}): PurchaseRequestTemplate[] => {
  return purchaseRequestTemplates.filter((template) => {
    if (
      searchCriteria.description &&
      template.description &&
      !template.description
        .toLowerCase()
        .includes(searchCriteria.description.toLowerCase())
    ) {
      return false;
    }

    if (
      searchCriteria.department_id &&
      template.department_id !== searchCriteria.department_id
    ) {
      return false;
    }

    if (
      searchCriteria.workflow_id &&
      template.workflow_id !== searchCriteria.workflow_id
    ) {
      return false;
    }

    if (
      searchCriteria.is_active !== undefined &&
      template.is_active !== searchCriteria.is_active
    ) {
      return false;
    }

    if (searchCriteria.has_note !== undefined) {
      const hasNote = template.note && template.note.trim() !== "";
      if (hasNote !== searchCriteria.has_note) {
        return false;
      }
    }

    if (searchCriteria.has_info !== undefined) {
      const hasInfo = template.info && template.info !== null;
      if (hasInfo !== searchCriteria.has_info) {
        return false;
      }
    }

    if (searchCriteria.has_dimension !== undefined) {
      const hasDimension = template.dimension && template.dimension !== null;
      if (hasDimension !== searchCriteria.has_dimension) {
        return false;
      }
    }

    return !template.deleted_at;
  });
};
