import { generateId, getCurrentTimestamp } from "@/libs/utils";

export interface Unit {
  id: string;
  name: string;
  description: string;
  is_active: boolean;
  note: string | null;
  info: any | null;
  dimension: any | null;
  created_at: string;
  created_by_id: string;
  updated_at: string;
  updated_by_id: string | null;
  deleted_at: string | null;
  deleted_by_id: string | null;
}

// Sample data
export const units: Unit[] = [
  {
    id: "566c45dd-d5fa-4820-99d6-29b24ef06289",
    name: "BAG",
    description: "BAG",
    is_active: true,
    note: null,
    info: null,
    dimension: null,
    created_at: "2025-07-29T01:05:34.849Z",
    created_by_id: "1bfdb891-58ee-499c-8115-34a964de8122",
    updated_at: "2025-07-29T01:05:34.851Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: "6b24d5b6-b051-47cf-9abe-a0e40eb9390a",
    name: "BOOK",
    description: "BOOK",
    is_active: true,
    note: null,
    info: null,
    dimension: null,
    created_at: "2025-07-29T01:05:34.889Z",
    created_by_id: "1bfdb891-58ee-499c-8115-34a964de8122",
    updated_at: "2025-07-29T01:05:34.890Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: "473175cb-6e73-4498-9def-cc31c0737e12",
    name: "BOX",
    description: "BOX",
    is_active: true,
    note: null,
    info: null,
    dimension: null,
    created_at: "2025-07-29T01:05:34.907Z",
    created_by_id: "1bfdb891-58ee-499c-8115-34a964de8122",
    updated_at: "2025-07-29T01:05:34.908Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: "07b0e62c-e026-4d9f-b463-f0f45ae58f1b",
    name: "BOX5",
    description: "BOX5",
    is_active: true,
    note: null,
    info: null,
    dimension: null,
    created_at: "2025-07-29T01:05:34.925Z",
    created_by_id: "1bfdb891-58ee-499c-8115-34a964de8122",
    updated_at: "2025-07-29T01:05:34.926Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: "90fb9fee-f153-4801-92a9-617f6cb71565",
    name: "BOX12",
    description: "BOX12",
    is_active: true,
    note: null,
    info: null,
    dimension: null,
    created_at: "2025-07-29T01:05:34.942Z",
    created_by_id: "1bfdb891-58ee-499c-8115-34a964de8122",
    updated_at: "2025-07-29T01:05:34.944Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: "d8523864-9739-4606-8a64-ea69a1e7ff47",
    name: "BOX24",
    description: "BOX24",
    is_active: true,
    note: null,
    info: null,
    dimension: null,
    created_at: "2025-07-29T01:05:34.960Z",
    created_by_id: "1bfdb891-58ee-499c-8115-34a964de8122",
    updated_at: "2025-07-29T01:05:34.961Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: "7273e018-b551-40d7-8f1f-1e90d64e53fc",
    name: "BOX25",
    description: "BOX25",
    is_active: true,
    note: null,
    info: null,
    dimension: null,
    created_at: "2025-07-29T01:05:34.977Z",
    created_by_id: "1bfdb891-58ee-499c-8115-34a964de8122",
    updated_at: "2025-07-29T01:05:34.978Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: "db76d19c-40af-4b54-bfa8-6da446aac7f3",
    name: "BTL",
    description: "BTL",
    is_active: true,
    note: null,
    info: null,
    dimension: null,
    created_at: "2025-07-29T01:05:34.995Z",
    created_by_id: "1bfdb891-58ee-499c-8115-34a964de8122",
    updated_at: "2025-07-29T01:05:34.996Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: "da45e8b0-9336-4a27-b8fd-407911a9ea6e",
    name: "CAN",
    description: "CAN",
    is_active: true,
    note: null,
    info: null,
    dimension: null,
    created_at: "2025-07-29T01:05:35.011Z",
    created_by_id: "1bfdb891-58ee-499c-8115-34a964de8122",
    updated_at: "2025-07-29T01:05:35.012Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: "4442857f-36c9-4ed2-bb6e-cca8ccfd0e32",
    name: "CUP",
    description: "CUP",
    is_active: true,
    note: null,
    info: null,
    dimension: null,
    created_at: "2025-07-29T01:05:35.027Z",
    created_by_id: "1bfdb891-58ee-499c-8115-34a964de8122",
    updated_at: "2025-07-29T01:05:35.028Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
];

// CREATE - สร้าง Unit ใหม่
export const createUnit = (
  data: Omit<
    Unit,
    "id" | "created_at" | "created_by_id" | "updated_at" | "updated_by_id"
  >
): Unit => {
  const newUnit: Unit = {
    ...data,
    id: generateId(),
    created_at: getCurrentTimestamp(),
    created_by_id: "system",
    updated_at: getCurrentTimestamp(),
    updated_by_id: "system",
  };

  units.push(newUnit);
  return newUnit;
};

// READ - อ่านข้อมูล Unit
export const getAllUnits = (): Unit[] => {
  return units.filter((unit) => !unit.deleted_at);
};

export const getUnitById = (id: string): Unit | null => {
  const unit = units.find((u) => u.id === id && !u.deleted_at);
  return unit || null;
};

export const getUnitByName = (name: string): Unit[] => {
  return units.filter(
    (unit) =>
      unit.name.toLowerCase().includes(name.toLowerCase()) && !unit.deleted_at
  );
};

export const getActiveUnits = (): Unit[] => {
  return units.filter((unit) => unit.is_active && !unit.deleted_at);
};

export const getInactiveUnits = (): Unit[] => {
  return units.filter((unit) => !unit.is_active && !unit.deleted_at);
};

export const getUnitsWithNote = (): Unit[] => {
  return units.filter((unit) => unit.note !== null && !unit.deleted_at);
};

export const getUnitsWithoutNote = (): Unit[] => {
  return units.filter((unit) => unit.note === null && !unit.deleted_at);
};

export const getUnitsByCreator = (createdById: string): Unit[] => {
  return units.filter(
    (unit) => unit.created_by_id === createdById && !unit.deleted_at
  );
};

export const getUnitsByDateRange = (
  startDate: string,
  endDate: string
): Unit[] => {
  return units.filter((unit) => {
    const createdDate = new Date(unit.created_at);
    const start = new Date(startDate);
    const end = new Date(endDate);
    return createdDate >= start && createdDate <= end && !unit.deleted_at;
  });
};

// UPDATE - อัปเดต Unit
export const updateUnit = (
  id: string,
  data: Partial<Omit<Unit, "id" | "created_at" | "created_by_id">>
): Unit | null => {
  const index = units.findIndex((unit) => unit.id === id && !unit.deleted_at);

  if (index === -1) {
    return null;
  }

  units[index] = {
    ...units[index],
    ...data,
    updated_at: getCurrentTimestamp(),
    updated_by_id: "system",
  };

  return units[index];
};

// UPDATE - อัปเดต Unit status
export const updateUnitStatus = (
  id: string,
  isActive: boolean
): Unit | null => {
  return updateUnit(id, { is_active: isActive });
};

// UPDATE - อัปเดต Unit name
export const updateUnitName = (id: string, name: string): Unit | null => {
  return updateUnit(id, { name });
};

// UPDATE - อัปเดต Unit description
export const updateUnitDescription = (
  id: string,
  description: string
): Unit | null => {
  return updateUnit(id, { description });
};

// UPDATE - อัปเดต Unit note
export const updateUnitNote = (id: string, note: string): Unit | null => {
  return updateUnit(id, { note });
};

// UPDATE - อัปเดต Unit info
export const updateUnitInfo = (id: string, info: any): Unit | null => {
  return updateUnit(id, { info });
};

// UPDATE - อัปเดต Unit dimension
export const updateUnitDimension = (
  id: string,
  dimension: any
): Unit | null => {
  return updateUnit(id, { dimension });
};

// DELETE - Soft delete Unit
export const softDeleteUnit = (
  id: string,
  deletedById: string
): Unit | null => {
  const unit = getUnitById(id);
  if (!unit) return null;

  unit.deleted_at = getCurrentTimestamp();
  unit.deleted_by_id = deletedById;
  unit.updated_at = getCurrentTimestamp();
  unit.updated_by_id = deletedById;

  return unit;
};

// DELETE - Hard delete Unit
export const hardDeleteUnit = (id: string): boolean => {
  const index = units.findIndex((unit) => unit.id === id);

  if (index === -1) {
    return false;
  }

  units.splice(index, 1);
  return true;
};

// DELETE - ลบ Unit ตาม name
export const deleteUnitByName = (
  name: string,
  deletedById: string
): boolean => {
  const unit = units.find((u) => u.name === name && !u.deleted_at);
  if (!unit) return false;

  return softDeleteUnit(unit.id, deletedById) !== null;
};

// RESTORE - กู้คืน Unit ที่ถูก soft delete
export const restoreUnit = (id: string): Unit | null => {
  const unit = units.find((u) => u.id === id);
  if (!unit || !unit.deleted_at) return null;

  unit.deleted_at = null;
  unit.deleted_by_id = null;
  unit.updated_at = getCurrentTimestamp();
  unit.updated_by_id = "system";

  return unit;
};

// ADVANCED SEARCH - ค้นหา Unit แบบขั้นสูง
export const searchUnits = (criteria: {
  name?: string;
  description?: string;
  is_active?: boolean;
  has_note?: boolean;
  created_by_id?: string;
  start_date?: string;
  end_date?: string;
}): Unit[] => {
  return units.filter((unit) => {
    if (unit.deleted_at) return false;

    if (
      criteria.name &&
      !unit.name.toLowerCase().includes(criteria.name.toLowerCase())
    ) {
      return false;
    }

    if (
      criteria.description &&
      !unit.description
        .toLowerCase()
        .includes(criteria.description.toLowerCase())
    ) {
      return false;
    }

    if (
      criteria.is_active !== undefined &&
      unit.is_active !== criteria.is_active
    ) {
      return false;
    }

    if (criteria.has_note !== undefined) {
      const hasNote = unit.note !== null;
      if (hasNote !== criteria.has_note) {
        return false;
      }
    }

    if (
      criteria.created_by_id &&
      unit.created_by_id !== criteria.created_by_id
    ) {
      return false;
    }

    if (criteria.start_date || criteria.end_date) {
      const createdDate = new Date(unit.created_at);
      if (criteria.start_date && createdDate < new Date(criteria.start_date))
        return false;
      if (criteria.end_date && createdDate > new Date(criteria.end_date))
        return false;
    }

    return true;
  });
};

// UTILITY FUNCTIONS - ฟังก์ชันเสริม
export const getUnitCount = (): number => {
  return units.filter((unit) => !unit.deleted_at).length;
};

export const getActiveUnitCount = (): number => {
  return units.filter((unit) => unit.is_active && !unit.deleted_at).length;
};

export const getInactiveUnitCount = (): number => {
  return units.filter((unit) => !unit.is_active && !unit.deleted_at).length;
};

export const isUnitExists = (id: string): boolean => {
  return units.some((unit) => unit.id === id && !unit.deleted_at);
};

export const isUnitNameExists = (name: string): boolean => {
  return units.some((unit) => unit.name === name && !unit.deleted_at);
};

export const hasActiveUnits = (): boolean => {
  return units.some((unit) => unit.is_active && !unit.deleted_at);
};

export const hasUnitsWithNote = (): boolean => {
  return units.some((unit) => unit.note !== null && !unit.deleted_at);
};

export const clearAllUnits = (): void => {
  units.length = 0;
};
