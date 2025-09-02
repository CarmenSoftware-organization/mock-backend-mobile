import { generateId, getCurrentTimestamp } from "@/libs/utils";

export interface PricelistTemplate {
  id: string;
  name: string;
  description: string;
  note: string;
  status: "draft" | "active" | "inactive";
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

export const pricelistTemplates: PricelistTemplate[] = [
  {
    id: "550e8400-e29b-41d4-a716-446655440501",
    name: "Standard Retail Template",
    description: "Template for standard retail pricing",
    note: "Base template for retail pricing",
    status: "active",
    info: { category: "Retail", type: "Standard" },
    dimension: { department: "Sales", region: "All" },
    doc_version: "1.0",
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440502",
    name: "Wholesale Template",
    description: "Template for wholesale pricing",
    note: "Base template for wholesale pricing",
    status: "active",
    info: { category: "Wholesale", type: "Volume" },
    dimension: { department: "Sales", region: "All" },
    doc_version: "1.0",
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "1bfdb891-58ee-499c-8115-34a964de8122",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440503",
    name: "VIP Customer Template",
    description: "Template for VIP customer pricing",
    note: "Base template for VIP pricing",
    status: "active",
    info: { category: "VIP", type: "Premium" },
    dimension: { department: "Sales", region: "All" },
    doc_version: "1.0",
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "3c5280a7-492e-421d-b739-7447455ce99e",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440504",
    name: "Promotional Template",
    description: "Template for promotional pricing",
    note: "Base template for promotional pricing",
    status: "draft",
    info: { category: "Promotional", type: "Limited" },
    dimension: { department: "Marketing", region: "All" },
    doc_version: "1.0",
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
];

// CREATE - สร้าง PricelistTemplate ใหม่
export const createPricelistTemplate = (
  templateData: Omit<PricelistTemplate, "id" | "created_at" | "updated_at">
): PricelistTemplate => {
  const newTemplate: PricelistTemplate = {
    ...templateData,
    id: generateId(),
    created_at: getCurrentTimestamp(),
    updated_at: getCurrentTimestamp(),
  };

  pricelistTemplates.push(newTemplate);
  return newTemplate;
};

// READ - อ่าน PricelistTemplate ทั้งหมด
export const getAllPricelistTemplates = (): PricelistTemplate[] => {
  return [...pricelistTemplates];
};

// READ - อ่าน PricelistTemplate ตาม ID
export const getPricelistTemplateById = (
  id: string
): PricelistTemplate | undefined => {
  return pricelistTemplates.find((template) => template.id === id);
};

// READ - อ่าน PricelistTemplate ตาม name
export const getPricelistTemplateByName = (
  name: string
): PricelistTemplate | undefined => {
  return pricelistTemplates.find((template) => template.name === name);
};

// READ - อ่าน PricelistTemplate ตาม status
export const getPricelistTemplatesByStatus = (
  status: "draft" | "active" | "inactive"
): PricelistTemplate[] => {
  return pricelistTemplates.filter((template) => template.status === status);
};

// READ - อ่าน PricelistTemplate ที่ active
export const getActivePricelistTemplates = (): PricelistTemplate[] => {
  return pricelistTemplates.filter((template) => template.status === "active");
};

// READ - อ่าน PricelistTemplate ที่ draft
export const getDraftPricelistTemplates = (): PricelistTemplate[] => {
  return pricelistTemplates.filter((template) => template.status === "draft");
};

// READ - อ่าน PricelistTemplate ที่ inactive
export const getInactivePricelistTemplates = (): PricelistTemplate[] => {
  return pricelistTemplates.filter(
    (template) => template.status === "inactive"
  );
};

// READ - ค้นหา PricelistTemplate แบบ fuzzy search
export const searchPricelistTemplates = (
  searchTerm: string
): PricelistTemplate[] => {
  const lowerSearchTerm = searchTerm.toLowerCase();
  return pricelistTemplates.filter(
    (template) =>
      template.name.toLowerCase().includes(lowerSearchTerm) ||
      template.description.toLowerCase().includes(lowerSearchTerm) ||
      template.note.toLowerCase().includes(lowerSearchTerm)
  );
};

// UPDATE - อัปเดต PricelistTemplate
export const updatePricelistTemplate = (
  id: string,
  updateData: Partial<
    Omit<PricelistTemplate, "id" | "created_at" | "created_by_id">
  >
): PricelistTemplate | null => {
  const index = pricelistTemplates.findIndex((template) => template.id === id);

  if (index === -1) {
    return null;
  }

  pricelistTemplates[index] = {
    ...pricelistTemplates[index],
    ...updateData,
    updated_at: getCurrentTimestamp(),
  };

  return pricelistTemplates[index];
};

// UPDATE - อัปเดต PricelistTemplate name
export const updatePricelistTemplateName = (
  id: string,
  name: string
): PricelistTemplate | null => {
  return updatePricelistTemplate(id, { name });
};

// UPDATE - อัปเดต PricelistTemplate description
export const updatePricelistTemplateDescription = (
  id: string,
  description: string
): PricelistTemplate | null => {
  return updatePricelistTemplate(id, { description });
};

// UPDATE - อัปเดต PricelistTemplate status
export const updatePricelistTemplateStatus = (
  id: string,
  status: "draft" | "active" | "inactive"
): PricelistTemplate | null => {
  return updatePricelistTemplate(id, { status });
};

// UPDATE - อัปเดต PricelistTemplate note
export const updatePricelistTemplateNote = (
  id: string,
  note: string
): PricelistTemplate | null => {
  return updatePricelistTemplate(id, { note });
};

// DELETE - ลบ PricelistTemplate (soft delete)
export const deletePricelistTemplate = (
  id: string,
  deletedById: string
): boolean => {
  const index = pricelistTemplates.findIndex((template) => template.id === id);

  if (index === -1) {
    return false;
  }

  pricelistTemplates[index] = {
    ...pricelistTemplates[index],
    deleted_at: getCurrentTimestamp(),
    deleted_by_id: deletedById,
  };

  return true;
};

// DELETE - ลบ PricelistTemplate แบบถาวร
export const hardDeletePricelistTemplate = (id: string): boolean => {
  const index = pricelistTemplates.findIndex((template) => template.id === id);

  if (index === -1) {
    return false;
  }

  pricelistTemplates.splice(index, 1);
  return true;
};

// DELETE - ลบ PricelistTemplate ตาม name
export const deletePricelistTemplateByName = (
  name: string,
  deletedById: string
): boolean => {
  const template = getPricelistTemplateByName(name);
  if (template) {
    return deletePricelistTemplate(template.id, deletedById);
  }
  return false;
};

// DELETE - ลบ PricelistTemplate ตาม status
export const deletePricelistTemplatesByStatus = (
  status: "draft" | "active" | "inactive",
  deletedById: string
): number => {
  let deletedCount = 0;

  pricelistTemplates.forEach((template) => {
    if (template.status === status && !template.deleted_at) {
      template.deleted_at = getCurrentTimestamp();
      template.deleted_by_id = deletedById;
      deletedCount++;
    }
  });

  return deletedCount;
};

// Utility function สำหรับล้างข้อมูลทั้งหมด (ใช้สำหรับ testing)
export const clearAllPricelistTemplates = (): void => {
  pricelistTemplates.length = 0;
};

// Utility function สำหรับนับจำนวน PricelistTemplate
export const getPricelistTemplateCount = (): number => {
  return pricelistTemplates.length;
};

// Utility function สำหรับนับจำนวน PricelistTemplate ตาม status
export const getPricelistTemplateCountByStatus = (
  status: "draft" | "active" | "inactive"
): number => {
  return pricelistTemplates.filter((template) => template.status === status)
    .length;
};

// Utility function สำหรับนับจำนวน PricelistTemplate ที่ active
export const getActivePricelistTemplateCount = (): number => {
  return pricelistTemplates.filter((template) => template.status === "active")
    .length;
};

// Utility function สำหรับตรวจสอบ PricelistTemplate name ซ้ำ
export const isPricelistTemplateNameExists = (name: string): boolean => {
  return pricelistTemplates.some((template) => template.name === name);
};

// Utility function สำหรับตรวจสอบ PricelistTemplate ที่ถูกลบแล้ว
export const getDeletedPricelistTemplates = (): PricelistTemplate[] => {
  return pricelistTemplates.filter((template) => template.deleted_at !== null);
};

// Utility function สำหรับกู้คืน PricelistTemplate ที่ถูกลบแล้ว
export const restorePricelistTemplate = (id: string): boolean => {
  const index = pricelistTemplates.findIndex((template) => template.id === id);

  if (index === -1) {
    return false;
  }

  if (pricelistTemplates[index].deleted_at) {
    pricelistTemplates[index] = {
      ...pricelistTemplates[index],
      deleted_at: null,
      deleted_by_id: null,
    };
    return true;
  }

  return false;
};

// Utility function สำหรับค้นหา PricelistTemplate แบบ advanced search
export const searchPricelistTemplatesAdvanced = (searchCriteria: {
  name?: string;
  description?: string;
  status?: "draft" | "active" | "inactive";
  category?: string;
}): PricelistTemplate[] => {
  return pricelistTemplates.filter((template) => {
    if (
      searchCriteria.name &&
      !template.name.toLowerCase().includes(searchCriteria.name.toLowerCase())
    ) {
      return false;
    }

    if (
      searchCriteria.description &&
      !template.description
        .toLowerCase()
        .includes(searchCriteria.description.toLowerCase())
    ) {
      return false;
    }

    if (searchCriteria.status && template.status !== searchCriteria.status) {
      return false;
    }

    if (
      searchCriteria.category &&
      template.info?.category !== searchCriteria.category
    ) {
      return false;
    }

    return true;
  });
};

// Utility function สำหรับเปลี่ยน status ของ PricelistTemplate เป็น active
export const activatePricelistTemplate = (
  id: string
): PricelistTemplate | null => {
  return updatePricelistTemplateStatus(id, "active");
};

// Utility function สำหรับเปลี่ยน status ของ PricelistTemplate เป็น inactive
export const deactivatePricelistTemplate = (
  id: string
): PricelistTemplate | null => {
  return updatePricelistTemplateStatus(id, "inactive");
};

// Utility function สำหรับเปลี่ยน status ของ PricelistTemplate เป็น draft
export const setPricelistTemplateToDraft = (
  id: string
): PricelistTemplate | null => {
  return updatePricelistTemplateStatus(id, "draft");
};
