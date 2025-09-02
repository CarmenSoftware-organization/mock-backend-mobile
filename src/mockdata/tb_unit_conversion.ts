import { generateId, getCurrentTimestamp } from "@/libs/utils";

export interface UnitConversion {
  id: string;
  product_id: string;
  unit_type: "ingredient_unit" | "order_unit" | "inventory_unit" | "other";
  from_unit_id: string;
  from_unit_name: string;
  from_unit_qty: string;
  to_unit_id: string;
  to_unit_name: string;
  to_unit_qty: string;
  is_default: boolean;
  description: any;
  is_active: boolean;
  note: string | null;
  info: any;
  dimension: any;
  created_at: string;
  created_by_id: string | null;
  updated_at: string;
  updated_by_id: string | null;
  deleted_at: string | null;
  deleted_by_id: string | null;
}

// Sample data
export const unitConversions: UnitConversion[] = [
  {
    id: "d438ae4b-3db3-48d8-b72b-2aa79f6cd224",
    product_id: "7d28a000-a54f-4c79-8139-cd0dee2f136a",
    unit_type: "ingredient_unit",
    from_unit_id: "a944b693-3a71-4275-9d6a-ddca551533d7",
    from_unit_name: "KG",
    from_unit_qty: "1.00000",
    to_unit_id: "4442857f-36c9-4ed2-bb6e-cca8ccfd0e32",
    to_unit_name: "CUP",
    to_unit_qty: "5.00000",
    is_default: false,
    description: null,
    is_active: true,
    note: null,
    info: null,
    dimension: null,
    created_at: "2025-07-30T03:48:07.124Z",
    created_by_id: null,
    updated_at: "2025-07-30T03:48:07.124Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: "aa508ec4-5031-40bd-967b-af2547b97e01",
    product_id: "7d28a000-a54f-4c79-8139-cd0dee2f136a",
    unit_type: "order_unit",
    from_unit_id: "92850418-9a14-469e-befd-1a4cb13dfa93",
    from_unit_name: "PACK",
    from_unit_qty: "1.00000",
    to_unit_id: "a944b693-3a71-4275-9d6a-ddca551533d7",
    to_unit_name: "KG",
    to_unit_qty: "12.00000",
    is_default: true,
    description: null,
    is_active: true,
    note: null,
    info: null,
    dimension: null,
    created_at: "2025-07-30T02:48:32.460Z",
    created_by_id: null,
    updated_at: "2025-07-30T02:48:32.460Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: "a2cb4bc1-baab-462c-928b-761f4a6ad1c7",
    product_id: "7d28a000-a54f-4c79-8139-cd0dee2f136a",
    unit_type: "ingredient_unit",
    from_unit_id: "a944b693-3a71-4275-9d6a-ddca551533d7",
    from_unit_name: "KG",
    from_unit_qty: "1.00000",
    to_unit_id: "db76d19c-40af-4b54-bfa8-6da446aac7f3",
    to_unit_name: "BTL",
    to_unit_qty: "10.00000",
    is_default: true,
    description: null,
    is_active: true,
    note: null,
    info: null,
    dimension: null,
    created_at: "2025-07-30T03:49:44.642Z",
    created_by_id: null,
    updated_at: "2025-07-30T03:49:44.642Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
];

// CREATE - สร้าง UnitConversion ใหม่
export const createUnitConversion = (
  data: Omit<
    UnitConversion,
    "id" | "created_at" | "created_by_id" | "updated_at" | "updated_by_id"
  >
): UnitConversion => {
  const newConversion: UnitConversion = {
    ...data,
    id: generateId(),
    created_at: getCurrentTimestamp(),
    created_by_id: "system",
    updated_at: getCurrentTimestamp(),
    updated_by_id: "system",
  };

  unitConversions.push(newConversion);
  return newConversion;
};

// READ - อ่านข้อมูล UnitConversion
export const getAllUnitConversions = (): UnitConversion[] => {
  return unitConversions.filter((conversion) => !conversion.deleted_at);
};

export const getUnitConversionById = (id: string): UnitConversion | null => {
  const conversion = unitConversions.find((c) => c.id === id && !c.deleted_at);
  return conversion || null;
};

export const getUnitConversionsByProduct = (
  productId: string
): UnitConversion[] => {
  return unitConversions.filter(
    (conversion) =>
      conversion.product_id === productId && !conversion.deleted_at
  );
};

export const getUnitConversionsByType = (
  unitType: "ingredient_unit" | "order_unit" | "inventory_unit" | "other"
): UnitConversion[] => {
  return unitConversions.filter(
    (conversion) => conversion.unit_type === unitType && !conversion.deleted_at
  );
};

export const getUnitConversionsByFromUnit = (
  fromUnitId: string
): UnitConversion[] => {
  return unitConversions.filter(
    (conversion) =>
      conversion.from_unit_id === fromUnitId && !conversion.deleted_at
  );
};

export const getUnitConversionsByToUnit = (
  toUnitId: string
): UnitConversion[] => {
  return unitConversions.filter(
    (conversion) => conversion.to_unit_id === toUnitId && !conversion.deleted_at
  );
};

export const getDefaultUnitConversions = (): UnitConversion[] => {
  return unitConversions.filter(
    (conversion) => conversion.is_default && !conversion.deleted_at
  );
};

export const getActiveUnitConversions = (): UnitConversion[] => {
  return unitConversions.filter(
    (conversion) => conversion.is_active && !conversion.deleted_at
  );
};

export const getUnitConversionsByDateRange = (
  startDate: string,
  endDate: string
): UnitConversion[] => {
  return unitConversions.filter((conversion) => {
    const createdDate = new Date(conversion.created_at);
    const start = new Date(startDate);
    const end = new Date(endDate);
    return createdDate >= start && createdDate <= end && !conversion.deleted_at;
  });
};

// UPDATE - อัปเดต UnitConversion
export const updateUnitConversion = (
  id: string,
  data: Partial<Omit<UnitConversion, "id" | "created_at" | "created_by_id">>
): UnitConversion | null => {
  const index = unitConversions.findIndex(
    (conversion) => conversion.id === id && !conversion.deleted_at
  );

  if (index === -1) {
    return null;
  }

  unitConversions[index] = {
    ...unitConversions[index],
    ...data,
    updated_at: getCurrentTimestamp(),
    updated_by_id: "system",
  };

  return unitConversions[index];
};

// UPDATE - อัปเดต UnitConversion status
export const updateUnitConversionStatus = (
  id: string,
  isActive: boolean
): UnitConversion | null => {
  return updateUnitConversion(id, { is_active: isActive });
};

// UPDATE - อัปเดต UnitConversion default status
export const updateUnitConversionDefault = (
  id: string,
  isDefault: boolean
): UnitConversion | null => {
  return updateUnitConversion(id, { is_default: isDefault });
};

// UPDATE - อัปเดต UnitConversion quantities
export const updateUnitConversionQuantities = (
  id: string,
  fromQty: string,
  toQty: string
): UnitConversion | null => {
  return updateUnitConversion(id, {
    from_unit_qty: fromQty,
    to_unit_qty: toQty,
  });
};

// UPDATE - อัปเดต UnitConversion note
export const updateUnitConversionNote = (
  id: string,
  note: string
): UnitConversion | null => {
  return updateUnitConversion(id, { note });
};

// UPDATE - อัปเดต UnitConversion info
export const updateUnitConversionInfo = (
  id: string,
  info: any
): UnitConversion | null => {
  return updateUnitConversion(id, { info });
};

// UPDATE - อัปเดต UnitConversion dimension
export const updateUnitConversionDimension = (
  id: string,
  dimension: any
): UnitConversion | null => {
  return updateUnitConversion(id, { dimension });
};

// DELETE - Soft delete UnitConversion
export const softDeleteUnitConversion = (
  id: string,
  deletedById: string
): UnitConversion | null => {
  const conversion = getUnitConversionById(id);
  if (!conversion) return null;

  conversion.deleted_at = getCurrentTimestamp();
  conversion.deleted_by_id = deletedById;
  conversion.updated_at = getCurrentTimestamp();
  conversion.updated_by_id = deletedById;

  return conversion;
};

// DELETE - Hard delete UnitConversion
export const hardDeleteUnitConversion = (id: string): boolean => {
  const index = unitConversions.findIndex((conversion) => conversion.id === id);

  if (index === -1) {
    return false;
  }

  unitConversions.splice(index, 1);
  return true;
};

// DELETE - ลบ UnitConversion ตาม product
export const deleteUnitConversionsByProduct = (
  productId: string,
  deletedById: string
): boolean => {
  const conversions = getUnitConversionsByProduct(productId);
  let deletedCount = 0;

  conversions.forEach((conversion) => {
    if (softDeleteUnitConversion(conversion.id, deletedById)) {
      deletedCount++;
    }
  });

  return deletedCount > 0;
};

// RESTORE - กู้คืน UnitConversion ที่ถูก soft delete
export const restoreUnitConversion = (id: string): UnitConversion | null => {
  const conversion = unitConversions.find((c) => c.id === id);
  if (!conversion || !conversion.deleted_at) return null;

  conversion.deleted_at = null;
  conversion.deleted_by_id = null;
  conversion.updated_at = getCurrentTimestamp();
  conversion.updated_by_id = "system";

  return conversion;
};

// ADVANCED SEARCH - ค้นหา UnitConversion แบบขั้นสูง
export const searchUnitConversions = (criteria: {
  product_id?: string;
  unit_type?: "ingredient_unit" | "order_unit" | "inventory_unit" | "other";
  from_unit_id?: string;
  to_unit_id?: string;
  is_default?: boolean;
  is_active?: boolean;
  start_date?: string;
  end_date?: string;
}): UnitConversion[] => {
  return unitConversions.filter((conversion) => {
    if (conversion.deleted_at) return false;

    if (criteria.product_id && conversion.product_id !== criteria.product_id) {
      return false;
    }

    if (criteria.unit_type && conversion.unit_type !== criteria.unit_type) {
      return false;
    }

    if (
      criteria.from_unit_id &&
      conversion.from_unit_id !== criteria.from_unit_id
    ) {
      return false;
    }

    if (criteria.to_unit_id && conversion.to_unit_id !== criteria.to_unit_id) {
      return false;
    }

    if (
      criteria.is_default !== undefined &&
      conversion.is_default !== criteria.is_default
    ) {
      return false;
    }

    if (
      criteria.is_active !== undefined &&
      conversion.is_active !== criteria.is_active
    ) {
      return false;
    }

    if (criteria.start_date || criteria.end_date) {
      const createdDate = new Date(conversion.created_at);
      if (criteria.start_date && createdDate < new Date(criteria.start_date))
        return false;
      if (criteria.end_date && createdDate > new Date(criteria.end_date))
        return false;
    }

    return true;
  });
};

// UTILITY FUNCTIONS - ฟังก์ชันเสริม
export const getUnitConversionCount = (): number => {
  return unitConversions.filter((conversion) => !conversion.deleted_at).length;
};

export const getUnitConversionCountByProduct = (productId: string): number => {
  return unitConversions.filter(
    (conversion) =>
      conversion.product_id === productId && !conversion.deleted_at
  ).length;
};

export const getUnitConversionCountByType = (
  unitType: "ingredient_unit" | "order_unit" | "inventory_unit" | "other"
): number => {
  return unitConversions.filter(
    (conversion) => conversion.unit_type === unitType && !conversion.deleted_at
  ).length;
};

export const getDefaultUnitConversionCount = (): number => {
  return unitConversions.filter(
    (conversion) => conversion.is_default && !conversion.deleted_at
  ).length;
};

export const isUnitConversionExists = (id: string): boolean => {
  return unitConversions.some(
    (conversion) => conversion.id === id && !conversion.deleted_at
  );
};

export const hasUnitConversionsByProduct = (productId: string): boolean => {
  return unitConversions.some(
    (conversion) =>
      conversion.product_id === productId && !conversion.deleted_at
  );
};

export const hasDefaultUnitConversion = (
  productId: string,
  unitType: "ingredient_unit" | "order_unit" | "inventory_unit" | "other"
): boolean => {
  return unitConversions.some(
    (conversion) =>
      conversion.product_id === productId &&
      conversion.unit_type === unitType &&
      conversion.is_default &&
      !conversion.deleted_at
  );
};

export const clearAllUnitConversions = (): void => {
  unitConversions.length = 0;
};
