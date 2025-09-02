import { generateId, getCurrentTimestamp } from "@/libs/utils";

export interface DimensionDisplayIn {
  id: string;
  dimension_id: string;
  display_in: "product" | "vendor" | "customer" | "location" | "other";
  default_value: any;
  note: string;
  info: any;
  doc_version: string;
  created_at: string;
  created_by_id: string;
  updated_at: string;
  updated_by_id: string | null;
  deleted_at: string | null;
  deleted_by_id: string | null;
}

export const dimensionDisplayIns: DimensionDisplayIn[] = [
  {
    id: "550e8400-e29b-41d4-a716-446655440001",
    dimension_id: "550e8400-e29b-41d4-a716-446655440001",
    display_in: "product",
    default_value: "0",
    note: "Default length for products",
    info: { unit: "cm", min_value: 0, max_value: 1000 },
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
    dimension_id: "550e8400-e29b-41d4-a716-446655440002",
    display_in: "product",
    default_value: "0",
    note: "Default width for products",
    info: { unit: "cm", min_value: 0, max_value: 1000 },
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
    dimension_id: "550e8400-e29b-41d4-a716-446655440003",
    display_in: "product",
    default_value: "0",
    note: "Default height for products",
    info: { unit: "cm", min_value: 0, max_value: 1000 },
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
    dimension_id: "550e8400-e29b-41d4-a716-446655440004",
    display_in: "product",
    default_value: "0",
    note: "Default weight for products",
    info: { unit: "kg", min_value: 0, max_value: 1000 },
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
    dimension_id: "550e8400-e29b-41d4-a716-446655440001",
    display_in: "vendor",
    default_value: "100",
    note: "Default length for vendor items",
    info: { unit: "cm", min_value: 0, max_value: 500 },
    doc_version: "1.0",
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "1bfdb891-58ee-499c-8115-34a964de8122",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
];

// CREATE - สร้าง DimensionDisplayIn ใหม่
export const createDimensionDisplayIn = (
  dimensionDisplayInData: Omit<
    DimensionDisplayIn,
    "id" | "created_at" | "updated_at"
  >
): DimensionDisplayIn => {
  const newDimensionDisplayIn: DimensionDisplayIn = {
    ...dimensionDisplayInData,
    id: generateId(),
    created_at: getCurrentTimestamp(),
    updated_at: getCurrentTimestamp(),
  };

  dimensionDisplayIns.push(newDimensionDisplayIn);
  return newDimensionDisplayIn;
};

// READ - อ่าน DimensionDisplayIn ทั้งหมด
export const getAllDimensionDisplayIns = (): DimensionDisplayIn[] => {
  return [...dimensionDisplayIns];
};

// READ - อ่าน DimensionDisplayIn ตาม ID
export const getDimensionDisplayInById = (
  id: string
): DimensionDisplayIn | undefined => {
  return dimensionDisplayIns.find(
    (dimensionDisplayIn) => dimensionDisplayIn.id === id
  );
};

// READ - อ่าน DimensionDisplayIn ตาม dimension_id
export const getDimensionDisplayInsByDimensionId = (
  dimensionId: string
): DimensionDisplayIn[] => {
  return dimensionDisplayIns.filter(
    (dimensionDisplayIn) => dimensionDisplayIn.dimension_id === dimensionId
  );
};

// READ - อ่าน DimensionDisplayIn ตาม display_in
export const getDimensionDisplayInsByDisplayIn = (
  displayIn: "product" | "vendor" | "customer" | "location" | "other"
): DimensionDisplayIn[] => {
  return dimensionDisplayIns.filter(
    (dimensionDisplayIn) => dimensionDisplayIn.display_in === displayIn
  );
};

// READ - อ่าน DimensionDisplayIn ตาม note
export const getDimensionDisplayInsByNote = (
  note: string
): DimensionDisplayIn[] => {
  return dimensionDisplayIns.filter((dimensionDisplayIn) =>
    dimensionDisplayIn.note.toLowerCase().includes(note.toLowerCase())
  );
};

// READ - อ่าน DimensionDisplayIn ที่ active (ไม่ถูกลบ)
export const getActiveDimensionDisplayIns = (): DimensionDisplayIn[] => {
  return dimensionDisplayIns.filter(
    (dimensionDisplayIn) => dimensionDisplayIn.deleted_at === null
  );
};

// READ - อ่าน DimensionDisplayIn ที่ถูกลบแล้ว
export const getDeletedDimensionDisplayIns = (): DimensionDisplayIn[] => {
  return dimensionDisplayIns.filter(
    (dimensionDisplayIn) => dimensionDisplayIn.deleted_at !== null
  );
};

// READ - อ่าน DimensionDisplayIn ตาม doc_version
export const getDimensionDisplayInsByDocVersion = (
  docVersion: string
): DimensionDisplayIn[] => {
  return dimensionDisplayIns.filter(
    (dimensionDisplayIn) => dimensionDisplayIn.doc_version === docVersion
  );
};

// READ - อ่าน DimensionDisplayIn ตาม created_by_id
export const getDimensionDisplayInsByCreatedBy = (
  createdById: string
): DimensionDisplayIn[] => {
  return dimensionDisplayIns.filter(
    (dimensionDisplayIn) => dimensionDisplayIn.created_by_id === createdById
  );
};

// READ - อ่าน DimensionDisplayIn ตาม updated_by_id
export const getDimensionDisplayInsByUpdatedBy = (
  updatedById: string
): DimensionDisplayIn[] => {
  return dimensionDisplayIns.filter(
    (dimensionDisplayIn) => dimensionDisplayIn.updated_by_id === updatedById
  );
};

// READ - อ่าน DimensionDisplayIn ที่มี default_value
export const getDimensionDisplayInsWithDefaultValue =
  (): DimensionDisplayIn[] => {
    return dimensionDisplayIns.filter(
      (dimensionDisplayIn) => dimensionDisplayIn.default_value !== null
    );
  };

// READ - อ่าน DimensionDisplayIn ที่ไม่มี default_value
export const getDimensionDisplayInsWithoutDefaultValue =
  (): DimensionDisplayIn[] => {
    return dimensionDisplayIns.filter(
      (dimensionDisplayIn) => dimensionDisplayIn.default_value === null
    );
  };

// UPDATE - อัปเดต DimensionDisplayIn
export const updateDimensionDisplayIn = (
  id: string,
  updateData: Partial<
    Omit<DimensionDisplayIn, "id" | "created_at" | "created_by_id">
  >
): DimensionDisplayIn | null => {
  const index = dimensionDisplayIns.findIndex(
    (dimensionDisplayIn) => dimensionDisplayIn.id === id
  );

  if (index === -1) {
    return null;
  }

  dimensionDisplayIns[index] = {
    ...dimensionDisplayIns[index],
    ...updateData,
    updated_at: getCurrentTimestamp(),
  };

  return dimensionDisplayIns[index];
};

// UPDATE - อัปเดต DimensionDisplayIn display_in
export const updateDimensionDisplayInDisplayIn = (
  id: string,
  displayIn: "product" | "vendor" | "customer" | "location" | "other"
): DimensionDisplayIn | null => {
  return updateDimensionDisplayIn(id, { display_in: displayIn });
};

// UPDATE - อัปเดต DimensionDisplayIn default_value
export const updateDimensionDisplayInDefaultValue = (
  id: string,
  defaultValue: any
): DimensionDisplayIn | null => {
  return updateDimensionDisplayIn(id, { default_value: defaultValue });
};

// UPDATE - อัปเดต DimensionDisplayIn note
export const updateDimensionDisplayInNote = (
  id: string,
  note: string
): DimensionDisplayIn | null => {
  return updateDimensionDisplayIn(id, { note });
};

// UPDATE - อัปเดต DimensionDisplayIn info
export const updateDimensionDisplayInInfo = (
  id: string,
  info: any
): DimensionDisplayIn | null => {
  return updateDimensionDisplayIn(id, { info });
};

// UPDATE - อัปเดต DimensionDisplayIn doc_version
export const updateDimensionDisplayInDocVersion = (
  id: string,
  docVersion: string
): DimensionDisplayIn | null => {
  return updateDimensionDisplayIn(id, { doc_version: docVersion });
};

// UPDATE - อัปเดต DimensionDisplayIn โดย dimension_id และ display_in
export const updateDimensionDisplayInByDimensionAndDisplay = (
  dimensionId: string,
  displayIn: "product" | "vendor" | "customer" | "location" | "other",
  updateData: Partial<
    Omit<DimensionDisplayIn, "id" | "created_at" | "created_by_id">
  >
): DimensionDisplayIn | null => {
  const index = dimensionDisplayIns.findIndex(
    (ddi) => ddi.dimension_id === dimensionId && ddi.display_in === displayIn
  );

  if (index === -1) {
    return null;
  }

  dimensionDisplayIns[index] = {
    ...dimensionDisplayIns[index],
    ...updateData,
    updated_at: getCurrentTimestamp(),
  };

  return dimensionDisplayIns[index];
};

// DELETE - ลบ DimensionDisplayIn (soft delete)
export const deleteDimensionDisplayIn = (
  id: string,
  deletedById: string
): boolean => {
  const index = dimensionDisplayIns.findIndex(
    (dimensionDisplayIn) => dimensionDisplayIn.id === id
  );

  if (index === -1) {
    return false;
  }

  dimensionDisplayIns[index] = {
    ...dimensionDisplayIns[index],
    deleted_at: getCurrentTimestamp(),
    deleted_by_id: deletedById,
  };

  return true;
};

// DELETE - ลบ DimensionDisplayIn แบบถาวร
export const hardDeleteDimensionDisplayIn = (id: string): boolean => {
  const index = dimensionDisplayIns.findIndex(
    (dimensionDisplayIn) => dimensionDisplayIn.id === id
  );

  if (index === -1) {
    return false;
  }

  dimensionDisplayIns.splice(index, 1);
  return true;
};

// DELETE - ลบ DimensionDisplayIn ตาม dimension_id
export const deleteDimensionDisplayInsByDimensionId = (
  dimensionId: string,
  deletedById: string
): number => {
  let deletedCount = 0;

  dimensionDisplayIns.forEach((dimensionDisplayIn) => {
    if (
      dimensionDisplayIn.dimension_id === dimensionId &&
      !dimensionDisplayIn.deleted_at
    ) {
      dimensionDisplayIn.deleted_at = getCurrentTimestamp();
      dimensionDisplayIn.deleted_by_id = deletedById;
      deletedCount++;
    }
  });

  return deletedCount;
};

// DELETE - ลบ DimensionDisplayIn ตาม display_in
export const deleteDimensionDisplayInsByDisplayIn = (
  displayIn: "product" | "vendor" | "customer" | "location" | "other",
  deletedById: string
): number => {
  let deletedCount = 0;

  dimensionDisplayIns.forEach((dimensionDisplayIn) => {
    if (
      dimensionDisplayIn.display_in === displayIn &&
      !dimensionDisplayIn.deleted_at
    ) {
      dimensionDisplayIn.deleted_at = getCurrentTimestamp();
      dimensionDisplayIn.deleted_by_id = deletedById;
      deletedCount++;
    }
  });

  return deletedCount;
};

// DELETE - ลบ DimensionDisplayIn โดย dimension_id และ display_in
export const deleteDimensionDisplayInByDimensionAndDisplay = (
  dimensionId: string,
  displayIn: "product" | "vendor" | "customer" | "location" | "other",
  deletedById: string
): boolean => {
  const index = dimensionDisplayIns.findIndex(
    (ddi) => ddi.dimension_id === dimensionId && ddi.display_in === displayIn
  );

  if (index === -1) {
    return false;
  }

  dimensionDisplayIns[index] = {
    ...dimensionDisplayIns[index],
    deleted_at: getCurrentTimestamp(),
    deleted_by_id: deletedById,
  };

  return true;
};

// RESTORE - กู้คืน DimensionDisplayIn ที่ถูกลบแล้ว
export const restoreDimensionDisplayIn = (id: string): boolean => {
  const index = dimensionDisplayIns.findIndex(
    (dimensionDisplayIn) => dimensionDisplayIn.id === id
  );

  if (index === -1) {
    return false;
  }

  if (dimensionDisplayIns[index].deleted_at) {
    dimensionDisplayIns[index] = {
      ...dimensionDisplayIns[index],
      deleted_at: null,
      deleted_by_id: null,
    };
    return true;
  }

  return false;
};

// RESTORE - กู้คืน DimensionDisplayIn ตาม dimension_id
export const restoreDimensionDisplayInsByDimensionId = (
  dimensionId: string
): number => {
  let restoredCount = 0;

  dimensionDisplayIns.forEach((dimensionDisplayIn) => {
    if (
      dimensionDisplayIn.dimension_id === dimensionId &&
      dimensionDisplayIn.deleted_at
    ) {
      dimensionDisplayIn.deleted_at = null;
      dimensionDisplayIn.deleted_by_id = null;
      restoredCount++;
    }
  });

  return restoredCount;
};

// RESTORE - กู้คืน DimensionDisplayIn ตาม display_in
export const restoreDimensionDisplayInsByDisplayIn = (
  displayIn: "product" | "vendor" | "customer" | "location" | "other"
): number => {
  let restoredCount = 0;

  dimensionDisplayIns.forEach((dimensionDisplayIn) => {
    if (
      dimensionDisplayIn.display_in === displayIn &&
      dimensionDisplayIn.deleted_at
    ) {
      dimensionDisplayIn.deleted_at = null;
      dimensionDisplayIn.deleted_by_id = null;
      restoredCount++;
    }
  });

  return restoredCount;
};

// Utility function สำหรับล้างข้อมูลทั้งหมด (ใช้สำหรับ testing)
export const clearAllDimensionDisplayIns = (): void => {
  dimensionDisplayIns.length = 0;
};

// Utility function สำหรับนับจำนวน DimensionDisplayIn
export const getDimensionDisplayInCount = (): number => {
  return dimensionDisplayIns.length;
};

// Utility function สำหรับนับจำนวน DimensionDisplayIn ที่ active
export const getActiveDimensionDisplayInCount = (): number => {
  return dimensionDisplayIns.filter(
    (dimensionDisplayIn) => dimensionDisplayIn.deleted_at === null
  ).length;
};

// Utility function สำหรับนับจำนวน DimensionDisplayIn ที่ถูกลบแล้ว
export const getDeletedDimensionDisplayInCount = (): number => {
  return dimensionDisplayIns.filter(
    (dimensionDisplayIn) => dimensionDisplayIn.deleted_at !== null
  ).length;
};

// Utility function สำหรับนับจำนวน DimensionDisplayIn ตาม dimension_id
export const getDimensionDisplayInCountByDimensionId = (
  dimensionId: string
): number => {
  return dimensionDisplayIns.filter(
    (dimensionDisplayIn) => dimensionDisplayIn.dimension_id === dimensionId
  ).length;
};

// Utility function สำหรับนับจำนวน DimensionDisplayIn ตาม display_in
export const getDimensionDisplayInCountByDisplayIn = (
  displayIn: "product" | "vendor" | "customer" | "location" | "other"
): number => {
  return dimensionDisplayIns.filter(
    (dimensionDisplayIn) => dimensionDisplayIn.display_in === displayIn
  ).length;
};

// Utility function สำหรับนับจำนวน DimensionDisplayIn ตาม doc_version
export const getDimensionDisplayInCountByDocVersion = (
  docVersion: string
): number => {
  return dimensionDisplayIns.filter(
    (dimensionDisplayIn) => dimensionDisplayIn.doc_version === docVersion
  ).length;
};

// Utility function สำหรับนับจำนวน DimensionDisplayIn ตาม created_by_id
export const getDimensionDisplayInCountByCreatedBy = (
  createdById: string
): number => {
  return dimensionDisplayIns.filter(
    (dimensionDisplayIn) => dimensionDisplayIn.created_by_id === createdById
  ).length;
};

// Utility function สำหรับค้นหา DimensionDisplayIn แบบ advanced search
export const searchDimensionDisplayIns = (searchCriteria: {
  dimension_id?: string;
  display_in?: "product" | "vendor" | "customer" | "location" | "other";
  doc_version?: string;
  created_by_id?: string;
  updated_by_id?: string;
  has_default_value?: boolean;
  has_note?: boolean;
  has_info?: boolean;
}): DimensionDisplayIn[] => {
  return dimensionDisplayIns.filter((dimensionDisplayIn) => {
    if (
      searchCriteria.dimension_id &&
      dimensionDisplayIn.dimension_id !== searchCriteria.dimension_id
    ) {
      return false;
    }

    if (
      searchCriteria.display_in &&
      dimensionDisplayIn.display_in !== searchCriteria.display_in
    ) {
      return false;
    }

    if (
      searchCriteria.doc_version &&
      dimensionDisplayIn.doc_version !== searchCriteria.doc_version
    ) {
      return false;
    }

    if (
      searchCriteria.created_by_id &&
      dimensionDisplayIn.created_by_id !== searchCriteria.created_by_id
    ) {
      return false;
    }

    if (
      searchCriteria.updated_by_id &&
      dimensionDisplayIn.updated_by_id !== searchCriteria.updated_by_id
    ) {
      return false;
    }

    if (searchCriteria.has_default_value !== undefined) {
      const hasDefaultValue = dimensionDisplayIn.default_value !== null;
      if (hasDefaultValue !== searchCriteria.has_default_value) {
        return false;
      }
    }

    if (searchCriteria.has_note !== undefined) {
      const hasNote = dimensionDisplayIn.note !== null;
      if (hasNote !== searchCriteria.has_note) {
        return false;
      }
    }

    if (searchCriteria.has_info !== undefined) {
      const hasInfo = dimensionDisplayIn.info !== null;
      if (hasInfo !== searchCriteria.has_info) {
        return false;
      }
    }

    return true;
  });
};

// Utility function สำหรับตรวจสอบ DimensionDisplayIn ตาม dimension_id
export const isDimensionDisplayInExistsByDimensionId = (
  dimensionId: string
): boolean => {
  return dimensionDisplayIns.some(
    (dimensionDisplayIn) => dimensionDisplayIn.dimension_id === dimensionId
  );
};

// Utility function สำหรับตรวจสอบ DimensionDisplayIn ตาม display_in
export const isDimensionDisplayInExistsByDisplayIn = (
  displayIn: "product" | "vendor" | "customer" | "location" | "other"
): boolean => {
  return dimensionDisplayIns.some(
    (dimensionDisplayIn) => dimensionDisplayIn.display_in === displayIn
  );
};

// Utility function สำหรับตรวจสอบ DimensionDisplayIn โดย dimension_id และ display_in
export const isDimensionDisplayInExistsByDimensionAndDisplay = (
  dimensionId: string,
  displayIn: "product" | "vendor" | "customer" | "location" | "other"
): boolean => {
  return dimensionDisplayIns.some(
    (ddi) => ddi.dimension_id === dimensionId && ddi.display_in === displayIn
  );
};

// Utility function สำหรับตรวจสอบ DimensionDisplayIn ที่มี default_value
export const hasDimensionDisplayInsWithDefaultValue = (): boolean => {
  return dimensionDisplayIns.some(
    (dimensionDisplayIn) => dimensionDisplayIn.default_value !== null
  );
};

// Utility function สำหรับตรวจสอบ DimensionDisplayIn ที่มี note
export const hasDimensionDisplayInsWithNote = (): boolean => {
  return dimensionDisplayIns.some(
    (dimensionDisplayIn) => dimensionDisplayIn.note !== null
  );
};

// Utility function สำหรับตรวจสอบ DimensionDisplayIn ที่มี info
export const hasDimensionDisplayInsWithInfo = (): boolean => {
  return dimensionDisplayIns.some(
    (dimensionDisplayIn) => dimensionDisplayIn.info !== null
  );
};

// Bulk operations
// เพิ่ม DimensionDisplayIn หลายรายการ
export const addMultipleDimensionDisplayIns = (
  dimensionDisplayInsData: Omit<
    DimensionDisplayIn,
    "id" | "created_at" | "updated_at"
  >[]
): DimensionDisplayIn[] => {
  const newDimensionDisplayIns: DimensionDisplayIn[] = [];

  dimensionDisplayInsData.forEach((data) => {
    const newDimensionDisplayIn = createDimensionDisplayIn(data);
    newDimensionDisplayIns.push(newDimensionDisplayIn);
  });

  return newDimensionDisplayIns;
};

// ลบ DimensionDisplayIn หลายรายการตาม dimension_id
export const removeMultipleDimensionDisplayInsByDimensionId = (
  dimensionId: string,
  deletedById: string
): number => {
  return deleteDimensionDisplayInsByDimensionId(dimensionId, deletedById);
};

// ลบ DimensionDisplayIn หลายรายการตาม display_in
export const removeMultipleDimensionDisplayInsByDisplayIn = (
  displayIn: "product" | "vendor" | "customer" | "location" | "other",
  deletedById: string
): number => {
  return deleteDimensionDisplayInsByDisplayIn(displayIn, deletedById);
};

// Hard delete operations
export const hardDeleteDimensionDisplayInsByDimensionId = (
  dimensionId: string
): number => {
  let deletedCount = 0;

  for (let i = dimensionDisplayIns.length - 1; i >= 0; i--) {
    if (dimensionDisplayIns[i].dimension_id === dimensionId) {
      dimensionDisplayIns.splice(i, 1);
      deletedCount++;
    }
  }

  return deletedCount;
};

export const hardDeleteDimensionDisplayInsByDisplayIn = (
  displayIn: "product" | "vendor" | "customer" | "location" | "other"
): number => {
  let deletedCount = 0;

  for (let i = dimensionDisplayIns.length - 1; i >= 0; i--) {
    if (dimensionDisplayIns[i].display_in === displayIn) {
      dimensionDisplayIns.splice(i, 1);
      deletedCount++;
    }
  }

  return deletedCount;
};
