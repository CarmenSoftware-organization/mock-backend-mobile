import { generateId, getCurrentTimestamp } from "@/libs/utils";

export interface DbConnection {
  host: string;
  port: number;
  schema: string;
  database: string;
  password: string;
  provider: string;
  username: string;
}

export interface BusinessUnit {
  id: string;
  cluster_id: string;
  code: string;
  name: string;
  description: string | null;
  is_hq: boolean;
  is_active: boolean;
  db_connection: DbConnection;
  config: any | null;
  created_at: string;
  created_by_id: string;
  updated_at: string;
  updated_by_id: string | null;
  info: any | null;
  alias_name: string;
}

export const businessUnits: BusinessUnit[] = [
  {
    id: "e4a432c0-86d9-4d75-8b03-096caf03c2d1",
    cluster_id: "75e036ab-19c5-4825-97cf-24581ff2dda3",
    code: "CARMEN-1",
    name: "BU-CARMEN-1",
    description: null,
    is_hq: true,
    is_active: true,
    db_connection: {
      host: "dev.blueledgers.com",
      port: 6432,
      schema: "A01",
      database: "postgres",
      password: "123456",
      provider: "postgresql",
      username: "developer",
    },
    config: null,
    created_at: "2025-07-29T01:37:29.002Z",
    created_by_id: "3c5280a7-492e-421d-b739-7447455ce99e",
    updated_at: "2025-07-29T01:37:29.002Z",
    updated_by_id: null,
    info: null,
    alias_name: "AA",
  },
  {
    id: "5c7b29ca-484f-401a-a21f-325f3d20eecc",
    cluster_id: "75e036ab-19c5-4825-97cf-24581ff2dda3",
    code: "CARMEN-2",
    name: "BU-CARMEN-2",
    description: null,
    is_hq: false,
    is_active: true,
    db_connection: {
      host: "dev.blueledgers.com",
      port: 6432,
      schema: "A01",
      database: "postgres",
      password: "123456",
      provider: "postgresql",
      username: "developer",
    },
    config: null,
    created_at: "2025-07-29T01:37:29.004Z",
    created_by_id: "3c5280a7-492e-421d-b739-7447455ce99e",
    updated_at: "2025-07-29T01:37:29.004Z",
    updated_by_id: null,
    info: null,
    alias_name: "BB",
  },
  {
    id: "3a397114-e1fc-42a8-836c-d8cfef1bd169",
    cluster_id: "75e036ab-19c5-4825-97cf-24581ff2dda3",
    code: "CARMEN-3",
    name: "BU-CARMEN-3",
    description: null,
    is_hq: false,
    is_active: true,
    db_connection: {
      host: "dev.blueledgers.com",
      port: 6432,
      schema: "A01",
      database: "postgres",
      password: "123456",
      provider: "postgresql",
      username: "developer",
    },
    config: null,
    created_at: "2025-07-29T01:37:29.005Z",
    created_by_id: "3c5280a7-492e-421d-b739-7447455ce99e",
    updated_at: "2025-07-29T01:37:29.005Z",
    updated_by_id: null,
    info: null,
    alias_name: "CC",
  },
];

// CREATE - สร้าง BusinessUnit ใหม่
export const createBusinessUnit = (
  businessUnitData: Omit<BusinessUnit, "id" | "created_at" | "updated_at">
): BusinessUnit => {
  const newBusinessUnit: BusinessUnit = {
    ...businessUnitData,
    id: generateId(),
    created_at: getCurrentTimestamp(),
    updated_at: getCurrentTimestamp(),
  };

  businessUnits.push(newBusinessUnit);
  return newBusinessUnit;
};

// READ - อ่าน BusinessUnit ทั้งหมด
export const getAllBusinessUnits = (): BusinessUnit[] => {
  return [...businessUnits];
};

// READ - อ่าน BusinessUnit ตาม ID
export const getBusinessUnitById = (id: string): BusinessUnit | undefined => {
  return businessUnits.find((businessUnit) => businessUnit.id === id);
};

// READ - อ่าน BusinessUnit ตาม code
export const getBusinessUnitByCode = (
  code: string
): BusinessUnit | undefined => {
  return businessUnits.find((businessUnit) => businessUnit.code === code);
};

// READ - อ่าน BusinessUnit ตาม name
export const getBusinessUnitByName = (name: string): BusinessUnit[] => {
  return businessUnits.filter((businessUnit) =>
    businessUnit.name.toLowerCase().includes(name.toLowerCase())
  );
};

// READ - อ่าน BusinessUnit ตาม cluster_id
export const getBusinessUnitsByCluster = (
  clusterId: string
): BusinessUnit[] => {
  return businessUnits.filter(
    (businessUnit) => businessUnit.cluster_id === clusterId
  );
};

// READ - อ่าน BusinessUnit ที่ active
export const getActiveBusinessUnits = (): BusinessUnit[] => {
  return businessUnits.filter((businessUnit) => businessUnit.is_active);
};

// READ - อ่าน BusinessUnit ที่ inactive
export const getInactiveBusinessUnits = (): BusinessUnit[] => {
  return businessUnits.filter((businessUnit) => !businessUnit.is_active);
};

// READ - อ่าน BusinessUnit ที่เป็น HQ
export const getHQBusinessUnits = (): BusinessUnit[] => {
  return businessUnits.filter((businessUnit) => businessUnit.is_hq);
};

// READ - อ่าน BusinessUnit ที่ไม่ใช่ HQ
export const getNonHQBusinessUnits = (): BusinessUnit[] => {
  return businessUnits.filter((businessUnit) => !businessUnit.is_hq);
};

// READ - อ่าน BusinessUnit ที่มี alias_name
export const getBusinessUnitsWithAlias = (): BusinessUnit[] => {
  return businessUnits.filter(
    (businessUnit) => businessUnit.alias_name !== null
  );
};

// READ - อ่าน BusinessUnit ที่ไม่มี alias_name
export const getBusinessUnitsWithoutAlias = (): BusinessUnit[] => {
  return businessUnits.filter(
    (businessUnit) => businessUnit.alias_name === null
  );
};

// UPDATE - อัปเดต BusinessUnit
export const updateBusinessUnit = (
  id: string,
  updateData: Partial<Omit<BusinessUnit, "id" | "created_at" | "created_by_id">>
): BusinessUnit | null => {
  const index = businessUnits.findIndex(
    (businessUnit) => businessUnit.id === id
  );

  if (index === -1) {
    return null;
  }

  businessUnits[index] = {
    ...businessUnits[index],
    ...updateData,
    updated_at: getCurrentTimestamp(),
  };

  return businessUnits[index];
};

// UPDATE - อัปเดต BusinessUnit status
export const updateBusinessUnitStatus = (
  id: string,
  isActive: boolean
): BusinessUnit | null => {
  return updateBusinessUnit(id, { is_active: isActive });
};

// UPDATE - อัปเดต BusinessUnit HQ status
export const updateBusinessUnitHQStatus = (
  id: string,
  isHQ: boolean
): BusinessUnit | null => {
  return updateBusinessUnit(id, { is_hq: isHQ });
};

// UPDATE - อัปเดต BusinessUnit code
export const updateBusinessUnitCode = (
  id: string,
  code: string
): BusinessUnit | null => {
  return updateBusinessUnit(id, { code });
};

// UPDATE - อัปเดต BusinessUnit name
export const updateBusinessUnitName = (
  id: string,
  name: string
): BusinessUnit | null => {
  return updateBusinessUnit(id, { name });
};

// UPDATE - อัปเดต BusinessUnit description
export const updateBusinessUnitDescription = (
  id: string,
  description: string
): BusinessUnit | null => {
  return updateBusinessUnit(id, { description });
};

// UPDATE - อัปเดต BusinessUnit alias name
export const updateBusinessUnitAliasName = (
  id: string,
  aliasName: string
): BusinessUnit | null => {
  return updateBusinessUnit(id, { alias_name: aliasName });
};

// UPDATE - อัปเดต BusinessUnit database connection
export const updateBusinessUnitDbConnection = (
  id: string,
  dbConnection: DbConnection
): BusinessUnit | null => {
  return updateBusinessUnit(id, { db_connection: dbConnection });
};

// UPDATE - อัปเดต BusinessUnit config
export const updateBusinessUnitConfig = (
  id: string,
  config: any
): BusinessUnit | null => {
  return updateBusinessUnit(id, { config });
};

// DELETE - ลบ BusinessUnit
export const deleteBusinessUnit = (id: string): boolean => {
  const index = businessUnits.findIndex(
    (businessUnit) => businessUnit.id === id
  );

  if (index === -1) {
    return false;
  }

  businessUnits.splice(index, 1);
  return true;
};

// DELETE - ลบ BusinessUnit ตาม code
export const deleteBusinessUnitByCode = (code: string): boolean => {
  const businessUnit = getBusinessUnitByCode(code);
  if (!businessUnit) return false;

  return deleteBusinessUnit(businessUnit.id);
};

// DELETE - ลบ BusinessUnit ตาม cluster_id
export const deleteBusinessUnitsByCluster = (clusterId: string): number => {
  const initialLength = businessUnits.length;
  const filteredBusinessUnits = businessUnits.filter(
    (businessUnit) => businessUnit.cluster_id !== clusterId
  );
  const deletedCount = initialLength - filteredBusinessUnits.length;

  businessUnits.length = 0;
  businessUnits.push(...filteredBusinessUnits);

  return deletedCount;
};

// Utility function สำหรับล้างข้อมูลทั้งหมด (ใช้สำหรับ testing)
export const clearAllBusinessUnits = (): void => {
  businessUnits.length = 0;
};

// Utility function สำหรับนับจำนวน BusinessUnit
export const getBusinessUnitCount = (): number => {
  return businessUnits.length;
};

// Utility function สำหรับนับจำนวน BusinessUnit ที่ active
export const getActiveBusinessUnitCount = (): number => {
  return businessUnits.filter((businessUnit) => businessUnit.is_active).length;
};

// Utility function สำหรับนับจำนวน BusinessUnit ที่เป็น HQ
export const getHQBusinessUnitCount = (): number => {
  return businessUnits.filter((businessUnit) => businessUnit.is_hq).length;
};

// Utility function สำหรับค้นหา BusinessUnit แบบ advanced search
export const searchBusinessUnits = (searchCriteria: {
  code?: string;
  name?: string;
  cluster_id?: string;
  is_active?: boolean;
  is_hq?: boolean;
  has_alias?: boolean;
  has_config?: boolean;
}): BusinessUnit[] => {
  return businessUnits.filter((businessUnit) => {
    if (
      searchCriteria.code &&
      !businessUnit.code
        .toLowerCase()
        .includes(searchCriteria.code.toLowerCase())
    ) {
      return false;
    }

    if (
      searchCriteria.name &&
      !businessUnit.name
        .toLowerCase()
        .includes(searchCriteria.name.toLowerCase())
    ) {
      return false;
    }

    if (
      searchCriteria.cluster_id &&
      businessUnit.cluster_id !== searchCriteria.cluster_id
    ) {
      return false;
    }

    if (
      searchCriteria.is_active !== undefined &&
      businessUnit.is_active !== searchCriteria.is_active
    ) {
      return false;
    }

    if (
      searchCriteria.is_hq !== undefined &&
      businessUnit.is_hq !== searchCriteria.is_hq
    ) {
      return false;
    }

    if (searchCriteria.has_alias !== undefined) {
      const hasAlias = businessUnit.alias_name !== null;
      if (hasAlias !== searchCriteria.has_alias) {
        return false;
      }
    }

    if (searchCriteria.has_config !== undefined) {
      const hasConfig = businessUnit.config !== null;
      if (hasConfig !== searchCriteria.has_config) {
        return false;
      }
    }

    return true;
  });
};

// Utility function สำหรับตรวจสอบ code ซ้ำ
export const isBusinessUnitCodeExists = (code: string): boolean => {
  return businessUnits.some((businessUnit) => businessUnit.code === code);
};

// Utility function สำหรับตรวจสอบ BusinessUnit ที่ active
export const hasActiveBusinessUnits = (): boolean => {
  return businessUnits.some((businessUnit) => businessUnit.is_active);
};

// Utility function สำหรับตรวจสอบ BusinessUnit ที่เป็น HQ
export const hasHQBusinessUnits = (): boolean => {
  return businessUnits.some((businessUnit) => businessUnit.is_hq);
};

// Utility function สำหรับตรวจสอบ BusinessUnit ที่มี alias
export const hasBusinessUnitsWithAlias = (): boolean => {
  return businessUnits.some((businessUnit) => businessUnit.alias_name !== null);
};
