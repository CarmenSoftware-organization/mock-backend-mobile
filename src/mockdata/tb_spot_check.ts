import { generateId, getCurrentTimestamp, getRandomInt } from "@/libs/utils";
import { getUuidByName } from "./mapping.uuid";
import { getLocationById } from "./tb_location";
import { tbSpotCheck } from ".";

export interface SpotCheck {
  id: string;
  location_id: string;
  location_name: string;
  location_type: "inventory" | "consignment" | "direct";
  description: string | null;
  physical_count_type: "yes" | "no"
  status: "pending" | "in_progress" | "reviewing" | "completed";
  method: "random" | "high_value" | "manual" | null;
  start_count_at: Date | null;
  end_count_at: Date | null;
  product_counted: number;
  product_total: number;
  created_at: Date;
  created_by_id: string;
  updated_at: Date | null;
  updated_by_id: string | null;
}

export interface ProductId {
  id: string;
}

export interface CreateSpotCheckDTO {
  location_id: string;
  method: "random" | "high_value" | "manual";
  items_total: number;
  min_value? : number;
  items? : [{id: string}]
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

export const spotChecks: SpotCheck[] = [
  {
    id: getUuidByName("SPOT_CHECK_01"),
    location_id: location1?.id || "",
    location_name: location1?.name || "",
    location_type: location1?.location_type || "inventory",
    description: "Physical count detail for location 1",
    physical_count_type: "yes",
    method: null,
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
    id: getUuidByName("SPOT_CHECK_02"),
    location_id: location2?.id || "",
    location_name: location2?.name || "",
    location_type: location2?.location_type || "inventory",
    description: "Physical count detail for location 2",
    physical_count_type: "yes",
    method: "high_value",
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
    id: getUuidByName("SPOT_CHECK_03"),
    location_id: location3?.id || "",
    location_name: location3?.name || "",
    location_type: location3?.location_type || "consignment",
    description: "Physical count detail for location 3",
    physical_count_type: "yes",
    method: "manual",
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
    id: getUuidByName("SPOT_CHECK_04"),
    location_id: location4?.id || "",
    location_name: location4?.name || "",
    location_type: location4?.location_type || "inventory",
    description: "Physical count detail for location 4",
    physical_count_type: "no",
    method: null,
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
    id: getUuidByName("SPOT_CHECK_05"),
    location_id: location5?.id || "",
    location_name: location5?.name || "",
    location_type: location5?.location_type || "inventory",
    description: "Physical count detail for location 5",
    physical_count_type: "no",
    method: null,
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
    id: getUuidByName("SPOT_CHECK_06"),
    location_id: location6?.id || "",
    location_name: location6?.name || "",
    location_type: location6?.location_type || "consignment",
    description: "Physical count detail for location 6",
    physical_count_type: "no",
    method: null,
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
    id: getUuidByName("SPOT_CHECK_07"),
    location_id: location7?.id || "",
    location_name: location7?.name || "",
    location_type: location7?.location_type || "inventory",
    description: "Physical count detail for location 7",
    physical_count_type: "no",
    method: null,
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
    id: getUuidByName("SPOT_CHECK_08"),
    location_id: location8?.id || "",
    location_name: location8?.name || "",
    location_type: location8?.location_type ||   "consignment",
    description: "Physical count detail for location 8",
    physical_count_type: "no",
    method: null,
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

// CREATE - สร้าง SpotCheck ใหม่
export const createSpotCheck = (
  method: "random" | "high_value" | "manual",
  location_id: string,
  items_total: number,
  items?: {id: string}[]
): SpotCheck => {
  const newDetail: SpotCheck = {
    id: getUuidByName("SPOT_CHECK_01"),
    method,
    location_id,
    location_name : getLocationById(location_id)?.name || "",
    location_type : getLocationById(location_id)?.location_type || "inventory",
    description : "Spot check for location " + location_id,
    physical_count_type : "yes",
    status : "in_progress",
    start_count_at : new Date(getCurrentTimestamp()),
    end_count_at : null,
    product_counted : 0,
    product_total : items_total,
    created_by_id : getUuidByName("USER_01"),
    updated_by_id : getUuidByName("USER_01"),
    created_at: new Date(getCurrentTimestamp()),
    updated_at: new Date(getCurrentTimestamp()),
  };

  spotChecks.push(newDetail);
  return newDetail;
};

// READ - อ่าน SpotCheck ทั้งหมด
export const getAllSpotChecks = (): SpotCheck[] => {
  return spotChecks;
};

// READ - อ่าน SpotCheck ตาม ID
export const getSpotCheckById = (id: string): SpotCheck | null => {
  const detail = spotChecks.find(d => d.id === id);
  return detail || null;
};

// READ - อ่าน SpotCheck ตาม id
export const getSpotChecksByPhysicalCountId = (id: string): SpotCheck[] => {


  const physicalCount = tbSpotCheck.getSpotCheckById(id);
  if (!physicalCount) {
    return [];
  }

  const details = spotChecks.filter(detail =>
    detail.id === id
  );  

  if (physicalCount.physical_count_type === "yes") {
    return details.filter(detail => detail.physical_count_type === "yes");
  }

  return details;
};

// READ - อ่าน SpotCheck ตาม location_id
export const getSpotChecksByLocationId = (locationId: string): SpotCheck[] => {
  return spotChecks.filter(detail =>
    detail.location_id === locationId
  );
};

// READ - อ่าน SpotCheck ตาม location_type
export const getSpotChecksByLocationType = (locationType: "inventory" | "consignment" | "direct"): SpotCheck[] => {
  return spotChecks.filter(detail =>
    detail.location_type === locationType
  );
};

// READ - อ่าน SpotCheck ตาม status
export const getSpotChecksByStatus = (status: "pending" | "in_progress" | "reviewing" | "completed"): SpotCheck[] => {
  return spotChecks.filter(detail =>
    detail.status === status
  );
};

// READ - อ่าน SpotCheck ตาม created_by_id
export const getSpotChecksByCreatedBy = (createdById: string): SpotCheck[] => {
  return spotChecks.filter(detail =>
    detail.created_by_id === createdById
  );
};

// READ - อ่าน SpotCheck ตาม updated_by_id
export const getSpotChecksByUpdatedBy = (updatedById: string): SpotCheck[] => {
  return spotChecks.filter(detail =>
    detail.updated_by_id === updatedById
  );
};

// READ - อ่าน SpotCheck ตามช่วงวันที่สร้าง
export const getSpotChecksByDateRange = (startDate: string, endDate: string): SpotCheck[] => {
  return spotChecks.filter(detail => {
    const createdDate = new Date(detail.created_at);
    const start = new Date(startDate);
    const end = new Date(endDate);
    return createdDate >= start && createdDate <= end;
  });
};

// UPDATE - อัปเดต SpotCheck
export const updateSpotCheck = (
  id: string,
  data: Partial<Omit<SpotCheck, "id" | "created_at" | "created_by_id">>
): SpotCheck | null => {
  const index = spotChecks.findIndex(detail => detail.id === id);

  if (index === -1) {
    return null;
  }

  spotChecks[index] = {
    ...spotChecks[index],
    ...data,
    updated_at: new Date(getCurrentTimestamp()),
  };

  return spotChecks[index];
};

// UPDATE - อัปเดต status ของ SpotCheck
  export const updateSpotCheckStatus = (
  id: string,
  status: "pending" | "in_progress" | "reviewing" | "completed",
  updatedById: string
): SpotCheck | null => {
  return updateSpotCheck(id, { status, updated_by_id: updatedById });
};

// UPDATE - อัปเดต location ของ SpotCheck
export const updateSpotCheckLocation = (
  id: string,
  locationId: string,
  locationName: string,
  updatedById: string
): SpotCheck | null => {
  return updateSpotCheck(id, {
    location_id: locationId,
    location_name: locationName,
    updated_by_id: updatedById
  });
};

// UPDATE - อัปเดต location_type ของ SpotCheck
export const updateSpotCheckLocationType = (
  id: string,
  locationType: "inventory" | "consignment" | "direct",
  updatedById: string
): SpotCheck | null => {
  return updateSpotCheck(id, { location_type: locationType, updated_by_id: updatedById });
};

// UPDATE - อัปเดต SpotCheck หลายรายการ
export const updateMultipleSpotChecks = (
  updates: { id: string; data: Partial<Omit<SpotCheck, "id" | "created_at" | "created_by_id">> }[]
): SpotCheck[] => {
  const updatedDetails: SpotCheck[] = [];

  updates.forEach(update => {
    const updatedDetail = updateSpotCheck(update.id, update.data);
    if (updatedDetail) {
      updatedDetails.push(updatedDetail);
    }
  });

  return updatedDetails;
};

// DELETE - Hard delete SpotCheck
export const hardDeleteSpotCheck = (id: string): boolean => {
  const index = spotChecks.findIndex(detail => detail.id === id);

  if (index === -1) {
    return false;
  }

  spotChecks.splice(index, 1);
  return true;
};


// ADVANCED SEARCH - ค้นหา SpotCheck แบบขั้นสูง
export const searchSpotChecks = (criteria: {
  id?: string;
  location_id?: string;
  location_name?: string;
  location_type?: "inventory" | "consignment" | "direct";
  status?: "pending" | "in_progress" | "completed";
  created_by_id?: string;
  updated_by_id?: string;
  start_date?: string;
  end_date?: string;
}): SpotCheck[] => {
  return spotChecks.filter(detail => {

    if (criteria.id && detail.id !== criteria.id) {
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
export const getSpotCheckCount = (): number => {
  return spotChecks.length;
};

export const getSpotCheckCountByPhysicalCountId = (physicalCountId: string): number => {
  return spotChecks.filter(detail =>
    detail.id === physicalCountId
  ).length;
};

export const getSpotCheckCountByStatus = (status: "pending" | "in_progress" | "reviewing" | "completed"): number => {
  return spotChecks.filter(detail =>
    detail.status === status
  ).length;
};

export const getSpotCheckCountByLocationType = (locationType: "inventory" | "consignment" | "direct"): number => {
  return spotChecks.filter(detail =>
    detail.location_type === locationType
  ).length;
};

export const isSpotCheckExists = (id: string): boolean => {
  return spotChecks.some(detail => detail.id === id);
};

export const hasSpotChecksForPhysicalCount = (physicalCountId: string): boolean => {
  return spotChecks.some(detail =>
    detail.id === physicalCountId
  );
};

export const hasSpotChecksForLocation = (locationId: string): boolean => {
  return spotChecks.some(detail =>
    detail.location_id === locationId
  );
};

export const clearAllSpotChecks = (): void => {
  spotChecks.length = 0;
};


export const getSpotCheck = (include_not_count: boolean): SpotCheck[] => {
  if (include_not_count) {
    return spotChecks;
  } else {
    return spotChecks.filter(detail => detail.physical_count_type === "yes");
  }
};
