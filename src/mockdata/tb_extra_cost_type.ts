import { generateId, getCurrentTimestamp } from "@/libs/utils";

export interface ExtraCostType {
  id: string;
  name: string;
  description: string;
  note: string;
  is_active: boolean;
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

export const extraCostTypes: ExtraCostType[] = [
  {
    id: "550e8400-e29b-41d4-a716-446655440001",
    name: "Shipping",
    description: "Transportation and delivery costs",
    note: "Standard shipping services",
    is_active: true,
    info: { category: "logistics", default_rate: 150.0 },
    dimension: null,
    doc_version: "1.0",
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440002",
    name: "Handling",
    description: "Processing and handling charges",
    note: "Standard handling services",
    is_active: true,
    info: { category: "processing", default_rate: 50.0 },
    dimension: null,
    doc_version: "1.0",
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "1bfdb891-58ee-499c-8115-34a964de8122",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440003",
    name: "Tax",
    description: "Government taxes and duties",
    note: "VAT and other taxes",
    is_active: true,
    info: { category: "government", default_rate: 7.0, is_percentage: true },
    dimension: null,
    doc_version: "1.0",
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "3c5280a7-492e-421d-b739-7447455ce99e",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440004",
    name: "Insurance",
    description: "Insurance and protection costs",
    note: "Package insurance services",
    is_active: true,
    info: { category: "protection", default_rate: 25.0 },
    dimension: null,
    doc_version: "1.0",
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440005",
    name: "Customs",
    description: "Customs clearance and documentation",
    note: "Import/export customs services",
    is_active: false,
    info: { category: "government", default_rate: 100.0 },
    dimension: null,
    doc_version: "1.0",
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "1bfdb891-58ee-499c-8115-34a964de8122",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
];

// CREATE - สร้าง ExtraCostType ใหม่
export const createExtraCostType = (
  extraCostTypeData: Omit<ExtraCostType, "id" | "created_at" | "updated_at">
): ExtraCostType => {
  const newExtraCostType: ExtraCostType = {
    ...extraCostTypeData,
    id: generateId(),
    created_at: getCurrentTimestamp(),
    updated_at: getCurrentTimestamp(),
  };

  extraCostTypes.push(newExtraCostType);
  return newExtraCostType;
};

// READ - อ่าน ExtraCostType ทั้งหมด
export const getAllExtraCostTypes = (): ExtraCostType[] => {
  return [...extraCostTypes];
};

// READ - อ่าน ExtraCostType ตาม ID
export const getExtraCostTypeById = (id: string): ExtraCostType | undefined => {
  return extraCostTypes.find((extraCostType) => extraCostType.id === id);
};

// READ - อ่าน ExtraCostType ตาม name
export const getExtraCostTypeByName = (
  name: string
): ExtraCostType | undefined => {
  return extraCostTypes.find((extraCostType) => extraCostType.name === name);
};

// READ - อ่าน ExtraCostType ที่ active
export const getActiveExtraCostTypes = (): ExtraCostType[] => {
  return extraCostTypes.filter((extraCostType) => extraCostType.is_active);
};

// READ - อ่าน ExtraCostType ที่ inactive
export const getInactiveExtraCostTypes = (): ExtraCostType[] => {
  return extraCostTypes.filter((extraCostType) => !extraCostType.is_active);
};

// READ - อ่าน ExtraCostType ตาม description
export const getExtraCostTypesByDescription = (
  description: string
): ExtraCostType[] => {
  return extraCostTypes.filter((extraCostType) =>
    extraCostType.description.toLowerCase().includes(description.toLowerCase())
  );
};

// READ - ค้นหา ExtraCostType แบบ fuzzy search
export const searchExtraCostTypes = (searchTerm: string): ExtraCostType[] => {
  const lowerSearchTerm = searchTerm.toLowerCase();
  return extraCostTypes.filter(
    (extraCostType) =>
      extraCostType.name.toLowerCase().includes(lowerSearchTerm) ||
      extraCostType.description.toLowerCase().includes(lowerSearchTerm)
  );
};

// UPDATE - อัปเดต ExtraCostType
export const updateExtraCostType = (
  id: string,
  updateData: Partial<
    Omit<ExtraCostType, "id" | "created_at" | "created_by_id">
  >
): ExtraCostType | null => {
  const index = extraCostTypes.findIndex(
    (extraCostType) => extraCostType.id === id
  );

  if (index === -1) {
    return null;
  }

  extraCostTypes[index] = {
    ...extraCostTypes[index],
    ...updateData,
    updated_at: getCurrentTimestamp(),
  };

  return extraCostTypes[index];
};

// UPDATE - อัปเดต ExtraCostType name
export const updateExtraCostTypeName = (
  id: string,
  name: string
): ExtraCostType | null => {
  return updateExtraCostType(id, { name });
};

// UPDATE - อัปเดต ExtraCostType description
export const updateExtraCostTypeDescription = (
  id: string,
  description: string
): ExtraCostType | null => {
  return updateExtraCostType(id, { description });
};

// UPDATE - อัปเดต ExtraCostType active status
export const updateExtraCostTypeActiveStatus = (
  id: string,
  isActive: boolean
): ExtraCostType | null => {
  return updateExtraCostType(id, { is_active: isActive });
};

// DELETE - ลบ ExtraCostType (soft delete)
export const deleteExtraCostType = (
  id: string,
  deletedById: string
): boolean => {
  const index = extraCostTypes.findIndex(
    (extraCostType) => extraCostType.id === id
  );

  if (index === -1) {
    return false;
  }

  extraCostTypes[index] = {
    ...extraCostTypes[index],
    deleted_at: getCurrentTimestamp(),
    deleted_by_id: deletedById,
  };

  return true;
};

// DELETE - ลบ ExtraCostType แบบถาวร
export const hardDeleteExtraCostType = (id: string): boolean => {
  const index = extraCostTypes.findIndex(
    (extraCostType) => extraCostType.id === id
  );

  if (index === -1) {
    return false;
  }

  extraCostTypes.splice(index, 1);
  return true;
};

// DELETE - ลบ ExtraCostType ตาม name
export const deleteExtraCostTypeByName = (
  name: string,
  deletedById: string
): boolean => {
  const extraCostType = getExtraCostTypeByName(name);
  if (extraCostType) {
    return deleteExtraCostType(extraCostType.id, deletedById);
  }
  return false;
};

// DELETE - ลบ ExtraCostType ที่ inactive
export const deleteInactiveExtraCostTypes = (deletedById: string): number => {
  let deletedCount = 0;

  extraCostTypes.forEach((extraCostType) => {
    if (!extraCostType.is_active && !extraCostType.deleted_at) {
      extraCostType.deleted_at = getCurrentTimestamp();
      extraCostType.deleted_by_id = deletedById;
      deletedCount++;
    }
  });

  return deletedCount;
};

// Utility function สำหรับล้างข้อมูลทั้งหมด (ใช้สำหรับ testing)
export const clearAllExtraCostTypes = (): void => {
  extraCostTypes.length = 0;
};

// Utility function สำหรับนับจำนวน ExtraCostType
export const getExtraCostTypeCount = (): number => {
  return extraCostTypes.length;
};

// Utility function สำหรับนับจำนวน ExtraCostType ที่ active
export const getActiveExtraCostTypeCount = (): number => {
  return extraCostTypes.filter((extraCostType) => extraCostType.is_active)
    .length;
};

// Utility function สำหรับนับจำนวน ExtraCostType ที่ inactive
export const getInactiveExtraCostTypeCount = (): number => {
  return extraCostTypes.filter((extraCostType) => !extraCostType.is_active)
    .length;
};

// Utility function สำหรับตรวจสอบ ExtraCostType name ซ้ำ
export const isExtraCostTypeNameExists = (name: string): boolean => {
  return extraCostTypes.some((extraCostType) => extraCostType.name === name);
};

// Utility function สำหรับตรวจสอบ ExtraCostType ที่ถูกลบแล้ว
export const getDeletedExtraCostTypes = (): ExtraCostType[] => {
  return extraCostTypes.filter(
    (extraCostType) => extraCostType.deleted_at !== null
  );
};

// Utility function สำหรับกู้คืน ExtraCostType ที่ถูกลบแล้ว
export const restoreExtraCostType = (id: string): boolean => {
  const index = extraCostTypes.findIndex(
    (extraCostType) => extraCostType.id === id
  );

  if (index === -1) {
    return false;
  }

  if (extraCostTypes[index].deleted_at) {
    extraCostTypes[index] = {
      ...extraCostTypes[index],
      deleted_at: null,
      deleted_by_id: null,
    };
    return true;
  }

  return false;
};

// Utility function สำหรับค้นหา ExtraCostType แบบ advanced search
export const searchExtraCostTypesAdvanced = (searchCriteria: {
  name?: string;
  description?: string;
  is_active?: boolean;
}): ExtraCostType[] => {
  return extraCostTypes.filter((extraCostType) => {
    if (
      searchCriteria.name &&
      !extraCostType.name
        .toLowerCase()
        .includes(searchCriteria.name.toLowerCase())
    ) {
      return false;
    }

    if (
      searchCriteria.description &&
      !extraCostType.description
        .toLowerCase()
        .includes(searchCriteria.description.toLowerCase())
    ) {
      return false;
    }

    if (
      searchCriteria.is_active !== undefined &&
      extraCostType.is_active !== searchCriteria.is_active
    ) {
      return false;
    }

    return true;
  });
};
