import { generateId, getCurrentTimestamp, getRandomInt } from "@/libs/utils";
import { getUuidByName } from "./mapping.uuid";
import { getLocationById } from "./tb_location";
import { tbPhysicalCountPeriod } from ".";

export interface PhysicalCount {
  id: string;
  physical_count_period_id: string;
  location_id: string;
  location_name: string;
  location_type: "inventory" | "consignment" | "direct";
  description: string | null;
  physical_count_type: "yes" | "no"
  status: "pending" | "in_progress" | "completed";
  start_count_at: Date | null;
  end_count_at: Date | null;
  product_counted: number;
  product_total: number;
  created_at: Date;
  created_by_id: string;
  updated_at: Date | null;
  updated_by_id: string | null;
}

const location1 = getLocationById(getUuidByName("LOCATION_01"));
const location2 = getLocationById(getUuidByName("LOCATION_02"));
const location3 = getLocationById(getUuidByName("LOCATION_03"));
const location4 = getLocationById(getUuidByName("LOCATION_04"));
const location5 = getLocationById(getUuidByName("LOCATION_05"));
const location6 = getLocationById(getUuidByName("LOCATION_06"));
const location7 = getLocationById(getUuidByName("LOCATION_07"));
const location8 = getLocationById(getUuidByName("LOCATION_08"));
const location9 = getLocationById(getUuidByName("LOCATION_09"));
const location10 = getLocationById(getUuidByName("LOCATION_10"));

export const physicalCounts: PhysicalCount[] = [
  {
    id: getUuidByName("PHYSICAL_COUNT_01"),
    physical_count_period_id: getUuidByName("PHYSICAL_COUNT_PERIOD_01"),
    location_id: location1?.id || "",
    location_name: location1?.name || "",
    location_type: location1?.location_type || "inventory",
    description: "Physical count for location 1",
    physical_count_type: "yes",
    status: "pending",
    start_count_at: null,
    end_count_at: null,
    product_counted: 0,
    product_total: getRandomInt(100, 1000),
    created_at: new Date(getCurrentTimestamp()),
    created_by_id: getUuidByName("USER_01"),
    updated_at: new Date(getCurrentTimestamp()),
    updated_by_id: getUuidByName("USER_01"),
  },
  {
    id: getUuidByName("PHYSICAL_COUNT_02"),
    physical_count_period_id: getUuidByName("PHYSICAL_COUNT_PERIOD_01"),
    location_id: location2?.id || "",
    location_name: location2?.name || "",
    location_type: location2?.location_type || "inventory",
    description: "Physical count detail for location 2",
    physical_count_type: "yes",
    status: "in_progress",
    start_count_at: new Date(getCurrentTimestamp()),
    end_count_at: null,
    product_counted: 20,
    product_total: getRandomInt(100, 1000),
    created_at: new Date(getCurrentTimestamp()),
    created_by_id: getUuidByName("USER_01"),
    updated_at: new Date(getCurrentTimestamp()),
    updated_by_id: getUuidByName("USER_02"),
  },
  {
    id: getUuidByName("PHYSICAL_COUNT_03"),
    physical_count_period_id: getUuidByName("PHYSICAL_COUNT_PERIOD_01"),
    location_id: location3?.id || "",
    location_name: location3?.name || "",
    location_type: location3?.location_type || "consignment",
    description: "Physical count detail for location 3",
    physical_count_type: "yes",
    status: "completed",
    start_count_at: new Date(getCurrentTimestamp()),
    end_count_at: new Date(getCurrentTimestamp()),
    product_counted: 89,
    product_total: 89,
    created_at: new Date(getCurrentTimestamp()),
    created_by_id: getUuidByName("USER_01"),
    updated_at: new Date(getCurrentTimestamp()),
    updated_by_id: getUuidByName("USER_03"),
  },
  {
    id: getUuidByName("PHYSICAL_COUNT_04"),
    physical_count_period_id: getUuidByName("PHYSICAL_COUNT_PERIOD_01"),
    location_id: location4?.id || "",
    location_name: location4?.name || "",
    location_type: location4?.location_type || "inventory",
    description: "Physical count detail for location 4",
    physical_count_type: "yes",
    status: "pending",
    start_count_at: null,
    end_count_at: null,
    product_counted: 0,
    product_total: getRandomInt(100, 1000),
    created_at: new Date(getCurrentTimestamp()),
    created_by_id: getUuidByName("USER_02"),
    updated_at: new Date(getCurrentTimestamp()),
    updated_by_id: getUuidByName("USER_02"),
  },
  {
    id: getUuidByName("PHYSICAL_COUNT_05"),
    physical_count_period_id: getUuidByName("PHYSICAL_COUNT_PERIOD_01"),
    location_id: location5?.id || "",
    location_name: location5?.name || "",
    location_type: location5?.location_type || "inventory",
    description: "Physical count detail for location 5",
    physical_count_type: "no",
    status: "pending",
    start_count_at: null,
    end_count_at: null,
    product_counted: 0,
    product_total: getRandomInt(100, 1000),
    created_at: new Date(getCurrentTimestamp()),
    created_by_id: getUuidByName("USER_02"),
    updated_at: new Date(getCurrentTimestamp()),
    updated_by_id: getUuidByName("USER_03"),
  },
  {
    id: getUuidByName("PHYSICAL_COUNT_06"),
    physical_count_period_id: getUuidByName("PHYSICAL_COUNT_PERIOD_01"),
    location_id: location6?.id || "",
    location_name: location6?.name || "",
    location_type: location6?.location_type || "consignment",
    description: "Physical count detail for location 6",
    physical_count_type: "no",
    status: "pending",
    start_count_at: null,
    end_count_at: null,
    product_counted: 0,
    product_total: getRandomInt(100, 1000),
    created_at: new Date(getCurrentTimestamp()),
    created_by_id: getUuidByName("USER_02"),
    updated_at: new Date(getCurrentTimestamp()),
    updated_by_id: getUuidByName("USER_02"),
  },
  {
    id: getUuidByName("PHYSICAL_COUNT_07"),
    physical_count_period_id: getUuidByName("PHYSICAL_COUNT_PERIOD_01"),
    location_id: location7?.id || "",
    location_name: location7?.name || "",
    location_type: location7?.location_type || "inventory",
    description: "Physical count detail for location 7",
    physical_count_type: "no",
    status: "completed",
    start_count_at: new Date(getCurrentTimestamp()),
    end_count_at: new Date(getCurrentTimestamp()),
    product_counted: 89,
    product_total: 89,
    created_at: new Date(getCurrentTimestamp()),
    created_by_id: getUuidByName("USER_03"),
    updated_at: new Date(getCurrentTimestamp()),
    updated_by_id: getUuidByName("USER_01"),
  },
  {
    id: getUuidByName("PHYSICAL_COUNT_08"),
    physical_count_period_id: getUuidByName("PHYSICAL_COUNT_PERIOD_01"),
    location_id: location8?.id || "",
    location_name: location8?.name || "",
    location_type: location8?.location_type || "consignment",
    description: "Physical count detail for location 8",
    physical_count_type: "no",
    status: "completed",
    start_count_at: new Date(getCurrentTimestamp()),
    end_count_at: new Date(getCurrentTimestamp()),
    product_counted: 89,
    product_total: 89,
    created_at: new Date(getCurrentTimestamp()),
    created_by_id: getUuidByName("USER_03"),
    updated_at: new Date(getCurrentTimestamp()),
    updated_by_id: getUuidByName("USER_01"),
  },
];

// CREATE - สร้าง PhysicalCountDetail ใหม่
export const createPhysicalCount = (
  data: Omit<PhysicalCount, "id" | "created_at" | "updated_at">
): PhysicalCount => {
  const newDetail: PhysicalCount = {
    ...data,
    id: generateId(),
    created_at: new Date(getCurrentTimestamp()),
    updated_at: new Date(getCurrentTimestamp()),
  };

  physicalCounts.push(newDetail);
  return newDetail;
};

// CREATE - สร้าง PhysicalCountDetail หลายรายการ
export const createMultiplePhysicalCounts = (
  details: Omit<PhysicalCount, "id" | "created_at" | "updated_at">[]
): PhysicalCount[] => {
  const newDetails = details.map(detail => createPhysicalCount(detail));
  return newDetails;
};

// READ - อ่าน PhysicalCountDetail ทั้งหมด
export const getAllPhysicalCounts = (): PhysicalCount[] => {
  return physicalCounts;
};

// READ - อ่าน PhysicalCountDetail ตาม ID
export const getPhysicalCountById = (id: string): PhysicalCount | null => {
  const detail = physicalCounts.find(d => d.id === id);
  return detail || null;
};

// READ - อ่าน PhysicalCountDetail ตาม physical_count_id
export const getPhysicalCountsByPhysicalCountId = (physicalCountId: string, include_not_count: boolean): PhysicalCount[] => {

  const physicalCount = tbPhysicalCountPeriod.getPhysicalCountPeriodById(physicalCountId);
  if (!physicalCount) {
    return [];
  }


  const details = physicalCounts.filter(detail =>
    detail.physical_count_period_id === physicalCountId
  );
    
  let res = details;

  if (include_not_count) {
    res = details;
  } else {
    res = details.filter(detail => detail.physical_count_type === "yes");
  }
  return res;
};

// READ - อ่าน PhysicalCountDetail ตาม location_id
export const getPhysicalCountsByLocationId = (locationId: string, include_not_count: boolean): PhysicalCount[] => {
  
  const details = physicalCounts.filter(detail =>
    detail.location_id === locationId
  );

  if (include_not_count) {
    return details;
  } else {
    return details.filter(detail => detail.physical_count_type === "yes");
  }
};

// READ - อ่าน PhysicalCountDetail ตาม location_type
export const getPhysicalCountsByLocationType = (locationType: "inventory" | "consignment" | "direct"): PhysicalCount[] => {
  return physicalCounts.filter(detail =>
    detail.location_type === locationType
  );
};

// READ - อ่าน PhysicalCountDetail ตาม status
export const getPhysicalCountsByStatus = (status: "pending" | "in_progress" | "completed"): PhysicalCount[] => {
  return physicalCounts.filter(detail =>
    detail.status === status
  );
};

// READ - อ่าน PhysicalCountDetail ตาม created_by_id
export const getPhysicalCountsByCreatedBy = (createdById: string): PhysicalCount[] => {
  return physicalCounts.filter(detail =>
    detail.created_by_id === createdById
  );
};

// READ - อ่าน PhysicalCountDetail ตาม updated_by_id
export const getPhysicalCountsByUpdatedBy = (updatedById: string): PhysicalCount[] => {
  return physicalCounts.filter(detail =>
    detail.updated_by_id === updatedById
  );
};

// READ - อ่าน PhysicalCountDetail ตามช่วงวันที่สร้าง
export const getPhysicalCountsByDateRange = (startDate: string, endDate: string): PhysicalCount[] => {
  return physicalCounts.filter(detail => {
    const createdDate = new Date(detail.created_at);
    const start = new Date(startDate);
    const end = new Date(endDate);
    return createdDate >= start && createdDate <= end;
  });
};

// UPDATE - อัปเดต PhysicalCountDetail
export const updatePhysicalCount = (
  id: string,
  data: Partial<Omit<PhysicalCount, "id" | "created_at" | "created_by_id">>
): PhysicalCount | null => {
  const index = physicalCounts.findIndex(detail => detail.id === id);

  if (index === -1) {
    return null;
  }

  physicalCounts[index] = {
    ...physicalCounts[index],
    ...data,
    updated_at: new Date(getCurrentTimestamp()),
  };

  return physicalCounts[index];
};

// UPDATE - อัปเดต status ของ PhysicalCountDetail
export const updatePhysicalCountStatus = (
  id: string,
  status: "pending" | "in_progress" | "completed",
  updatedById: string
): PhysicalCount | null => {
  return updatePhysicalCount(id, { status, updated_by_id: updatedById });
};

// UPDATE - อัปเดต location ของ PhysicalCountDetail
export const updatePhysicalCountLocation = (
  id: string,
  locationId: string,
  locationName: string,
  updatedById: string
): PhysicalCount | null => {
  return updatePhysicalCount(id, {
    location_id: locationId,
    location_name: locationName,
    updated_by_id: updatedById
  });
};

// UPDATE - อัปเดต location_type ของ PhysicalCountDetail
export const updatePhysicalCountLocationType = (
  id: string,
  locationType: "inventory" | "consignment" | "direct",
  updatedById: string
): PhysicalCount | null => {
  return updatePhysicalCount(id, { location_type: locationType, updated_by_id: updatedById });
};

// UPDATE - อัปเดต PhysicalCountDetail หลายรายการ
export const updateMultiplePhysicalCounts = (
  updates: { id: string; data: Partial<Omit<PhysicalCount, "id" | "created_at" | "created_by_id">> }[]
): PhysicalCount[] => {
  const updatedDetails: PhysicalCount[] = [];

  updates.forEach(update => {
    const updatedDetail = updatePhysicalCount(update.id, update.data);
    if (updatedDetail) {
      updatedDetails.push(updatedDetail);
    }
  });

  return updatedDetails;
};

// DELETE - Hard delete PhysicalCountDetail
export const hardDeletePhysicalCount = (id: string): boolean => {
  const index = physicalCounts.findIndex(detail => detail.id === id);

  if (index === -1) {
    return false;
  }

  physicalCounts.splice(index, 1);
  return true;
};


// ADVANCED SEARCH - ค้นหา PhysicalCountDetail แบบขั้นสูง
export const searchPhysicalCounts = (criteria: {
  physical_count_id?: string;
  location_id?: string;
  location_name?: string;
  location_type?: "inventory" | "consignment" | "direct";
  status?: "pending" | "in_progress" | "completed";
  created_by_id?: string;
  updated_by_id?: string;
  start_date?: string;
  end_date?: string;
}): PhysicalCount[] => {
  return physicalCounts.filter(detail => {

    if (criteria.physical_count_id && detail.physical_count_period_id !== criteria.physical_count_id) {
      return false;
    }

    if (criteria.location_id && detail.location_id !== criteria.location_id) {
      return false;
    }

    if (criteria.location_name && !detail.location_name.toLowerCase().includes(criteria.location_name.toLowerCase())) {
      return false;
    }

    if (criteria.location_type && detail.location_type !== criteria.location_type) {
      return false;
    }

    if (criteria.status && detail.status !== criteria.status) {
      return false;
    }

    if (criteria.created_by_id && detail.created_by_id !== criteria.created_by_id) {
      return false;
    }

    if (criteria.updated_by_id && detail.updated_by_id !== criteria.updated_by_id) {
      return false;
    }

    if (criteria.start_date || criteria.end_date) {
      const createdDate = new Date(detail.created_at);
      if (criteria.start_date && createdDate < new Date(criteria.start_date)) return false;
      if (criteria.end_date && createdDate > new Date(criteria.end_date)) return false;
    }

    return true;
  });
};

// UTILITY FUNCTIONS - ฟังก์ชันเสริม
export const getPhysicalCountCount = (): number => {
  return physicalCounts.length;
};

export const getPhysicalCountCountByPhysicalCountId = (physicalCountId: string): number => {
  return physicalCounts.filter(detail =>
    detail.physical_count_period_id === physicalCountId
  ).length;
};

export const getPhysicalCountCountByStatus = (status: "pending" | "in_progress" | "completed"): number => {
  return physicalCounts.filter(detail =>
    detail.status === status
  ).length;
};

export const getPhysicalCountCountByLocationType = (locationType: "inventory" | "consignment" | "direct"): number => {
  return physicalCounts.filter(detail =>
    detail.location_type === locationType
  ).length;
};

export const isPhysicalCountExists = (id: string): boolean => {
  return physicalCounts.some(detail => detail.id === id);
};

export const hasPhysicalCountsForPhysicalCount = (physicalCountId: string): boolean => {
  return physicalCounts.some(detail =>
    detail.physical_count_period_id === physicalCountId
  );
};

export const hasPhysicalCountsForLocation = (locationId: string): boolean => {
  return physicalCounts.some(detail =>
    detail.location_id === locationId
  );
};

export const clearAllPhysicalCounts = (): void => {
  physicalCounts.length = 0;
};