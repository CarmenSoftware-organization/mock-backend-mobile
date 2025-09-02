import { generateId, getCurrentTimestamp } from "@/libs/utils";

export interface ExtraCost {
  id: string;
  name: string;
  good_received_note_id: string;
  allocate_extra_cost_type:
    | "by_value"
    | "by_quantity"
    | "by_weight"
    | "by_volume";
  description: string;
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

export const extraCosts: ExtraCost[] = [
  {
    id: "550e8400-e29b-41d4-a716-446655440001",
    name: "Shipping Fee",
    good_received_note_id: "550e8400-e29b-41d4-a716-446655440001",
    allocate_extra_cost_type: "by_value",
    description: "Standard shipping cost for orders",
    note: "Standard delivery service",
    info: {
      type: "shipping",
      amount: 150.0,
      currency_id: "550e8400-e29b-41d4-a716-446655440003",
      is_percentage: false,
      is_active: true,
    },
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
    name: "Handling Fee",
    good_received_note_id: "550e8400-e29b-41d4-a716-446655440002",
    allocate_extra_cost_type: "by_value",
    description: "Processing and handling charge",
    note: "Standard handling service",
    info: {
      type: "handling",
      amount: 50.0,
      currency_id: "550e8400-e29b-41d4-a716-446655440003",
      is_percentage: false,
      is_active: true,
    },
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
    good_received_note_id: "550e8400-e29b-41d4-a716-446655440003",
    allocate_extra_cost_type: "by_value",
    description: "Value Added Tax (VAT)",
    note: "7% VAT calculation",
    info: {
      type: "tax",
      amount: 7.0,
      currency_id: "550e8400-e29b-41d4-a716-446655440003",
      is_percentage: true,
      is_active: true,
    },
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
    good_received_note_id: "550e8400-e29b-41d4-a716-446655440004",
    allocate_extra_cost_type: "by_value",
    description: "Package insurance coverage",
    note: "Basic insurance protection",
    info: {
      type: "insurance",
      amount: 25.0,
      currency_id: "550e8400-e29b-41d4-a716-446655440003",
      is_percentage: false,
      is_active: false,
    },
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
    name: "Express Delivery",
    good_received_note_id: "550e8400-e29b-41d4-a716-446655440005",
    allocate_extra_cost_type: "by_value",
    description: "Fast delivery service",
    note: "Next day delivery",
    info: {
      type: "shipping",
      amount: 300.0,
      currency_id: "550e8400-e29b-41d4-a716-446655440003",
      is_percentage: false,
      is_active: true,
    },
    doc_version: "1.0",
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "1bfdb891-58ee-499c-8115-34a964de8122",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
];

// CREATE - สร้าง ExtraCost ใหม่
export const createExtraCost = (
  extraCostData: Omit<ExtraCost, "id" | "created_at" | "updated_at">
): ExtraCost => {
  const newExtraCost: ExtraCost = {
    ...extraCostData,
    id: generateId(),
    created_at: getCurrentTimestamp(),
    updated_at: getCurrentTimestamp(),
  };

  extraCosts.push(newExtraCost);
  return newExtraCost;
};

// READ - อ่าน ExtraCost ทั้งหมด
export const getAllExtraCosts = (): ExtraCost[] => {
  return [...extraCosts];
};

// READ - อ่าน ExtraCost ตาม ID
export const getExtraCostById = (id: string): ExtraCost | undefined => {
  return extraCosts.find((extraCost) => extraCost.id === id);
};

// READ - อ่าน ExtraCost ตาม name
export const getExtraCostByName = (name: string): ExtraCost | undefined => {
  return extraCosts.find((extraCost) => extraCost.name === name);
};

// READ - อ่าน ExtraCost ตาม type
export const getExtraCostsByType = (type: string): ExtraCost[] => {
  return extraCosts.filter((extraCost) => extraCost.info.type === type);
};

// READ - อ่าน ExtraCost ตาม currency_id
export const getExtraCostsByCurrency = (currencyId: string): ExtraCost[] => {
  return extraCosts.filter(
    (extraCost) => extraCost.info.currency_id === currencyId
  );
};

// READ - อ่าน ExtraCost ที่ active
export const getActiveExtraCosts = (): ExtraCost[] => {
  return extraCosts.filter((extraCost) => extraCost.info.is_active);
};

// READ - อ่าน ExtraCost ที่ inactive
export const getInactiveExtraCosts = (): ExtraCost[] => {
  return extraCosts.filter((extraCost) => !extraCost.info.is_active);
};

// READ - อ่าน ExtraCost ที่เป็น percentage
export const getPercentageExtraCosts = (): ExtraCost[] => {
  return extraCosts.filter((extraCost) => extraCost.info.is_percentage);
};

// READ - อ่าน ExtraCost ที่เป็น fixed amount
export const getFixedAmountExtraCosts = (): ExtraCost[] => {
  return extraCosts.filter((extraCost) => !extraCost.info.is_percentage);
};

// READ - อ่าน ExtraCost ตาม amount range
export const getExtraCostsByAmountRange = (
  minAmount: number,
  maxAmount: number
): ExtraCost[] => {
  return extraCosts.filter(
    (extraCost) =>
      extraCost.info.amount >= minAmount && extraCost.info.amount <= maxAmount
  );
};

// READ - อ่าน ExtraCost ตาม description
export const getExtraCostsByDescription = (
  description: string
): ExtraCost[] => {
  return extraCosts.filter((extraCost) =>
    extraCost.description.toLowerCase().includes(description.toLowerCase())
  );
};

// READ - ค้นหา ExtraCost แบบ fuzzy search
export const searchExtraCosts = (searchTerm: string): ExtraCost[] => {
  const lowerSearchTerm = searchTerm.toLowerCase();
  return extraCosts.filter(
    (extraCost) =>
      extraCost.name.toLowerCase().includes(lowerSearchTerm) ||
      extraCost.info.type.toLowerCase().includes(lowerSearchTerm) ||
      extraCost.description.toLowerCase().includes(lowerSearchTerm)
  );
};

// UPDATE - อัปเดต ExtraCost
export const updateExtraCost = (
  id: string,
  updateData: Partial<Omit<ExtraCost, "id" | "created_at" | "created_by_id">>
): ExtraCost | null => {
  const index = extraCosts.findIndex((extraCost) => extraCost.id === id);

  if (index === -1) {
    return null;
  }

  extraCosts[index] = {
    ...extraCosts[index],
    ...updateData,
    updated_at: getCurrentTimestamp(),
  };

  return extraCosts[index];
};

// UPDATE - อัปเดต ExtraCost name
export const updateExtraCostName = (
  id: string,
  name: string
): ExtraCost | null => {
  return updateExtraCost(id, { name });
};

// UPDATE - อัปเดต ExtraCost type
export const updateExtraCostTypeField = (
  id: string,
  type: string
): ExtraCost | null => {
  return updateExtraCost(id, { info: { ...extraCosts[0].info, type } });
};

// UPDATE - อัปเดต ExtraCost amount
export const updateExtraCostAmount = (
  id: string,
  amount: number
): ExtraCost | null => {
  return updateExtraCost(id, { info: { ...extraCosts[0].info, amount } });
};

// UPDATE - อัปเดต ExtraCost currency
export const updateExtraCostCurrency = (
  id: string,
  currencyId: string
): ExtraCost | null => {
  return updateExtraCost(id, {
    info: { ...extraCosts[0].info, currency_id: currencyId },
  });
};

// UPDATE - อัปเดต ExtraCost percentage flag
export const updateExtraCostPercentageFlag = (
  id: string,
  isPercentage: boolean
): ExtraCost | null => {
  return updateExtraCost(id, {
    info: { ...extraCosts[0].info, is_percentage: isPercentage },
  });
};

// UPDATE - อัปเดต ExtraCost active status
export const updateExtraCostActiveStatus = (
  id: string,
  isActive: boolean
): ExtraCost | null => {
  return updateExtraCost(id, {
    info: { ...extraCosts[0].info, is_active: isActive },
  });
};

// UPDATE - อัปเดต ExtraCost description
export const updateExtraCostDescription = (
  id: string,
  description: string
): ExtraCost | null => {
  return updateExtraCost(id, { description });
};

// DELETE - ลบ ExtraCost (soft delete)
export const deleteExtraCost = (id: string, deletedById: string): boolean => {
  const index = extraCosts.findIndex((extraCost) => extraCost.id === id);

  if (index === -1) {
    return false;
  }

  extraCosts[index] = {
    ...extraCosts[index],
    deleted_at: getCurrentTimestamp(),
    deleted_by_id: deletedById,
  };

  return true;
};

// DELETE - ลบ ExtraCost แบบถาวร
export const hardDeleteExtraCost = (id: string): boolean => {
  const index = extraCosts.findIndex((extraCost) => extraCost.id === id);

  if (index === -1) {
    return false;
  }

  extraCosts.splice(index, 1);
  return true;
};

// DELETE - ลบ ExtraCost ตาม name
export const deleteExtraCostByName = (
  name: string,
  deletedById: string
): boolean => {
  const extraCost = getExtraCostByName(name);
  if (extraCost) {
    return deleteExtraCost(extraCost.id, deletedById);
  }
  return false;
};

// DELETE - ลบ ExtraCost ตาม type
export const deleteExtraCostsByType = (
  type: string,
  deletedById: string
): number => {
  let deletedCount = 0;

  extraCosts.forEach((extraCost) => {
    if (extraCost.info.type === type && !extraCost.deleted_at) {
      extraCost.deleted_at = getCurrentTimestamp();
      extraCost.deleted_by_id = deletedById;
      deletedCount++;
    }
  });

  return deletedCount;
};

// DELETE - ลบ ExtraCost ตาม currency_id
export const deleteExtraCostsByCurrency = (
  currencyId: string,
  deletedById: string
): number => {
  let deletedCount = 0;

  extraCosts.forEach((extraCost) => {
    if (extraCost.info.currency_id === currencyId && !extraCost.deleted_at) {
      extraCost.deleted_at = getCurrentTimestamp();
      extraCost.deleted_by_id = deletedById;
      deletedCount++;
    }
  });

  return deletedCount;
};

// DELETE - ลบ ExtraCost ที่ inactive
export const deleteInactiveExtraCosts = (deletedById: string): number => {
  let deletedCount = 0;

  extraCosts.forEach((extraCost) => {
    if (!extraCost.info.is_active && !extraCost.deleted_at) {
      extraCost.deleted_at = getCurrentTimestamp();
      extraCost.deleted_by_id = deletedById;
      deletedCount++;
    }
  });

  return deletedCount;
};

// Utility function สำหรับล้างข้อมูลทั้งหมด (ใช้สำหรับ testing)
export const clearAllExtraCosts = (): void => {
  extraCosts.length = 0;
};

// Utility function สำหรับนับจำนวน ExtraCost
export const getExtraCostCount = (): number => {
  return extraCosts.length;
};

// Utility function สำหรับนับจำนวน ExtraCost ที่ active
export const getActiveExtraCostCount = (): number => {
  return extraCosts.filter((extraCost) => extraCost.info.is_active).length;
};

// Utility function สำหรับนับจำนวน ExtraCost ที่ inactive
export const getInactiveExtraCostCount = (): number => {
  return extraCosts.filter((extraCost) => !extraCost.info.is_active).length;
};

// Utility function สำหรับนับจำนวน ExtraCost ตาม type
export const getExtraCostCountByType = (type: string): number => {
  return extraCosts.filter((extraCost) => extraCost.info.type === type).length;
};

// Utility function สำหรับนับจำนวน ExtraCost ตาม currency_id
export const getExtraCostCountByCurrency = (currencyId: string): number => {
  return extraCosts.filter(
    (extraCost) => extraCost.info.currency_id === currencyId
  ).length;
};

// Utility function สำหรับนับจำนวน ExtraCost ที่เป็น percentage
export const getPercentageExtraCostCount = (): number => {
  return extraCosts.filter((extraCost) => extraCost.info.is_percentage).length;
};

// Utility function สำหรับนับจำนวน ExtraCost ที่เป็น fixed amount
export const getFixedAmountExtraCostCount = (): number => {
  return extraCosts.filter((extraCost) => !extraCost.info.is_percentage).length;
};

// Utility function สำหรับตรวจสอบ ExtraCost name ซ้ำ
export const isExtraCostNameExists = (name: string): boolean => {
  return extraCosts.some((extraCost) => extraCost.name === name);
};

// Utility function สำหรับตรวจสอบ ExtraCost ที่ถูกลบแล้ว
export const getDeletedExtraCosts = (): ExtraCost[] => {
  return extraCosts.filter((extraCost) => extraCost.deleted_at !== null);
};

// Utility function สำหรับกู้คืน ExtraCost ที่ถูกลบแล้ว
export const restoreExtraCost = (id: string): boolean => {
  const index = extraCosts.findIndex((extraCost) => extraCost.id === id);

  if (index === -1) {
    return false;
  }

  if (extraCosts[index].deleted_at) {
    extraCosts[index] = {
      ...extraCosts[index],
      deleted_at: null,
      deleted_by_id: null,
    };
    return true;
  }

  return false;
};

// Utility function สำหรับค้นหา ExtraCost แบบ advanced search
export const searchExtraCostsAdvanced = (searchCriteria: {
  name?: string;
  type?: string;
  currency_id?: string;
  is_percentage?: boolean;
  is_active?: boolean;
  min_amount?: number;
  max_amount?: number;
}): ExtraCost[] => {
  return extraCosts.filter((extraCost) => {
    if (
      searchCriteria.name &&
      !extraCost.name.toLowerCase().includes(searchCriteria.name.toLowerCase())
    ) {
      return false;
    }

    if (searchCriteria.type && extraCost.info.type !== searchCriteria.type) {
      return false;
    }

    if (
      searchCriteria.currency_id &&
      extraCost.info.currency_id !== searchCriteria.currency_id
    ) {
      return false;
    }

    if (
      searchCriteria.is_percentage !== undefined &&
      extraCost.info.is_percentage !== searchCriteria.is_percentage
    ) {
      return false;
    }

    if (
      searchCriteria.is_active !== undefined &&
      extraCost.info.is_active !== searchCriteria.is_active
    ) {
      return false;
    }

    if (
      searchCriteria.min_amount &&
      extraCost.info.amount < searchCriteria.min_amount
    ) {
      return false;
    }

    if (
      searchCriteria.max_amount &&
      extraCost.info.amount > searchCriteria.max_amount
    ) {
      return false;
    }

    return true;
  });
};
