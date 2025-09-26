import { generateId, getCurrentTimestamp } from "@/libs/utils";
import { getUuidByName } from "./mapping.uuid";

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

const businessUnit1: BusinessUnit ={
  id: getUuidByName("BUSINESS_UNIT_01"),
  cluster_id: getUuidByName("CLUSTER_01"),
  code: getUuidByName("BU_CODE_01"),
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
  created_by_id: getUuidByName("USER_ADMIN"),
  updated_at: "2025-07-29T01:37:29.002Z",
  updated_by_id: getUuidByName("USER_ADMIN"),
  info: null,
  alias_name: "AA",
};

const businessUnit2: BusinessUnit =  {
  id: getUuidByName("BUSINESS_UNIT_02"),
  cluster_id: getUuidByName("CLUSTER_01"),
  code: getUuidByName("BU_CODE_02"),
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
  created_by_id: getUuidByName("USER_ADMIN"),
  updated_at: "2025-07-29T01:37:29.004Z",
  updated_by_id: getUuidByName("USER_ADMIN"),
  info: null,
  alias_name: "BB",
};

const businessUnit3: BusinessUnit =   {
  id: getUuidByName("BUSINESS_UNIT_03"),
  cluster_id: getUuidByName("CLUSTER_01"),
  code: getUuidByName("BU_CODE_03"),
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
  created_by_id: getUuidByName("USER_ADMIN"),
  updated_at: "2025-07-29T01:37:29.005Z",
  updated_by_id: getUuidByName("USER_ADMIN"),
  info: null,
  alias_name: "CC",
};

const businessUnit4: BusinessUnit = {
  id: getUuidByName("BUSINESS_UNIT_04"),
  cluster_id: getUuidByName("CLUSTER_02"),
  code: getUuidByName("BU_CODE_04"),
  name: "BU-CARMEN-NORTH",
  description: "Northern Region Business Unit",
  is_hq: false,
  is_active: true,
  db_connection: {
    host: "north.blueledgers.com",
    port: 6432,
    schema: "N01",
    database: "postgres",
    password: "north123",
    provider: "postgresql",
    username: "developer",
  },
  config: {
    timezone: "Asia/Bangkok",
    currency: "THB",
    language: "th-TH",
    region: "north"
  },
  created_at: "2025-07-29T02:15:00.000Z",
  created_by_id: getUuidByName("USER_ADMIN"),
  updated_at: "2025-07-29T02:15:00.000Z",
  updated_by_id: getUuidByName("USER_ADMIN"),
  info: {
    region_code: "NORTH",
    manager: "Somchai Jaidee",
    phone: "053-123-456",
    email: "north@carmen.com"
  },
  alias_name: "NT",
};

const businessUnit5: BusinessUnit = {
  id: getUuidByName("BUSINESS_UNIT_05"),
  cluster_id: getUuidByName("CLUSTER_02"),
  code: getUuidByName("BU_CODE_05"),
  name: "BU-CARMEN-SOUTH",
  description: "Southern Region Business Unit",
  is_hq: false,
  is_active: true,
  db_connection: {
    host: "south.blueledgers.com",
    port: 6432,
    schema: "S01",
    database: "postgres",
    password: "south123",
    provider: "postgresql",
    username: "developer",
  },
  config: {
    timezone: "Asia/Bangkok",
    currency: "THB",
    language: "th-TH",
    region: "south"
  },
  created_at: "2025-07-29T02:20:00.000Z",
  created_by_id: getUuidByName("USER_ADMIN"),
  updated_at: "2025-07-29T02:20:00.000Z",
  updated_by_id: getUuidByName("USER_ADMIN"),
  info: {
    region_code: "SOUTH",
    manager: "Somporn Nakprasert",
    phone: "074-123-456",
    email: "south@carmen.com"
  },
  alias_name: "ST",
};

const businessUnit6: BusinessUnit = {
  id: getUuidByName("BUSINESS_UNIT_06"),
  cluster_id: getUuidByName("CLUSTER_03"),
  code: getUuidByName("BU_CODE_06"),
  name: "BU-CARMEN-CENTRAL",
  description: "Central Region Business Unit",
  is_hq: false,
  is_active: true,
  db_connection: {
    host: "central.blueledgers.com",
    port: 6432,
    schema: "C01",
    database: "postgres",
    password: "central123",
    provider: "postgresql",
    username: "developer",
  },
  config: {
    timezone: "Asia/Bangkok",
    currency: "THB",
    language: "th-TH",
    region: "central"
  },
  created_at: "2025-07-29T02:25:00.000Z",
  created_by_id: getUuidByName("USER_ADMIN"),
  updated_at: "2025-07-29T02:25:00.000Z",
  updated_by_id: getUuidByName("USER_ADMIN"),
  info: {
    region_code: "CENTRAL",
    manager: "Prakit Wongsawat",
    phone: "02-987-654",
    email: "central@carmen.com"
  },
  alias_name: "CT",
};

const businessUnit7: BusinessUnit = {
  id: getUuidByName("BUSINESS_UNIT_07"),
  cluster_id: getUuidByName("CLUSTER_03"),
  code: getUuidByName("BU_CODE_07"),
  name: "BU-CARMEN-EAST",
  description: "Eastern Region Business Unit",
  is_hq: false,
  is_active: true,
  db_connection: {
    host: "east.blueledgers.com",
    port: 6432,
    schema: "E01",
    database: "postgres",
    password: "east123",
    provider: "postgresql",
    username: "developer",
  },
  config: {
    timezone: "Asia/Bangkok",
    currency: "THB",
    language: "th-TH",
    region: "east"
  },
  created_at: "2025-07-29T02:30:00.000Z",
  created_by_id: getUuidByName("USER_ADMIN"),
  updated_at: "2025-07-29T02:30:00.000Z",
  updated_by_id: getUuidByName("USER_ADMIN"),
  info: {
    region_code: "EAST",
    manager: "Wanlop Sirikit",
    phone: "038-234-567",
    email: "east@carmen.com"
  },
  alias_name: "ET",
};

const businessUnit8: BusinessUnit = {
  id: getUuidByName("BUSINESS_UNIT_08"),
  cluster_id: getUuidByName("CLUSTER_04"),
  code: getUuidByName("BU_CODE_08"),
  name: "BU-CARMEN-WEST",
  description: "Western Region Business Unit",
  is_hq: false,
  is_active: true,
  db_connection: {
    host: "west.blueledgers.com",
    port: 6432,
    schema: "W01",
    database: "postgres",
    password: "west123",
    provider: "postgresql",
    username: "developer",
  },
  config: {
    timezone: "Asia/Bangkok",
    currency: "THB",
    language: "th-TH",
    region: "west"
  },
  created_at: "2025-07-29T02:35:00.000Z",
  created_by_id: getUuidByName("USER_ADMIN"),
  updated_at: "2025-07-29T02:35:00.000Z",
  updated_by_id: getUuidByName("USER_ADMIN"),
  info: {
    region_code: "WEST",
    manager: "Malee Thongsuk",
    phone: "032-345-678",
    email: "west@carmen.com"
  },
  alias_name: "WT",
};

const businessUnit9: BusinessUnit = {
  id: getUuidByName("BUSINESS_UNIT_09"),
  cluster_id: getUuidByName("CLUSTER_04"),
  code: getUuidByName("BU_CODE_09"),
  name: "BU-CARMEN-LOGISTICS",
  description: "Logistics and Distribution Center",
  is_hq: false,
  is_active: true,
  db_connection: {
    host: "logistics.blueledgers.com",
    port: 6432,
    schema: "L01",
    database: "postgres",
    password: "logistics123",
    provider: "postgresql",
    username: "developer",
  },
  config: {
    timezone: "Asia/Bangkok",
    currency: "THB",
    language: "th-TH",
    business_type: "logistics",
    warehouse_count: 5
  },
  created_at: "2025-07-29T02:40:00.000Z",
  created_by_id: getUuidByName("USER_ADMIN"),
  updated_at: "2025-07-29T02:40:00.000Z",
  updated_by_id: getUuidByName("USER_ADMIN"),
  info: {
    region_code: "LOGISTICS",
    manager: "Chaiwat Bumrung",
    phone: "02-456-789",
    email: "logistics@carmen.com",
    warehouse_locations: ["Bangkok", "Chonburi", "Ayutthaya"]
  },
  alias_name: "LG",
};

const businessUnit10: BusinessUnit = {
  id: getUuidByName("BUSINESS_UNIT_10"),
  cluster_id: getUuidByName("CLUSTER_05"),
  code: getUuidByName("BU_CODE_10"),
  name: "BU-CARMEN-TRAINING",
  description: "Training and Development Center",
  is_hq: false,
  is_active: false,
  db_connection: {
    host: "training.blueledgers.com",
    port: 6432,
    schema: "T01",
    database: "postgres",
    password: "training123",
    provider: "postgresql",
    username: "developer",
  },
  config: {
    timezone: "Asia/Bangkok",
    currency: "THB",
    language: "th-TH",
    business_type: "training",
    capacity: 200
  },
  created_at: "2025-07-29T02:45:00.000Z",
  created_by_id: getUuidByName("USER_ADMIN"),
  updated_at: "2025-07-29T03:00:00.000Z",
  updated_by_id: getUuidByName("USER_ADMIN"),
  info: {
    region_code: "TRAINING",
    manager: "Siriporn Education",
    phone: "02-567-890",
    email: "training@carmen.com",
    status: "temporarily_closed"
  },
  alias_name: "TR",
};


export const businessUnits: BusinessUnit[] = [
  businessUnit1,
  businessUnit2,
  businessUnit3,
  businessUnit4,
  businessUnit5,
  businessUnit6,
  businessUnit7,
  businessUnit8,
  businessUnit9,
  businessUnit10,
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
