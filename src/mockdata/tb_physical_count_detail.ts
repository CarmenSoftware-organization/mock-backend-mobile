import { generateId, getCurrentTimestamp, getRandomInt } from "@/libs/utils";
import { getUuidByName } from "./mapping.uuid";
import { getLocationById } from "./tb_location";
import { tbPhysicalCount } from ".";

export interface PhysicalCountDetail {
  id: string;
  physical_count_id: string;
  location_id: string;
  location_name: string;
  location_type: "inventory" | "consignment" | "direct";
  description: string | null;
  physical_count_type: "yes" | "no"
  status: "Pending" | "Counting" | "Counted";
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

export const physicalCountsDetails: PhysicalCountDetail[] = [
  {
    id: getUuidByName("PHYSICAL_COUNT_DETAIL_01"),
    physical_count_id: getUuidByName("PHYSICAL_COUNT_01"),
    location_id: location1?.id || "",
    location_name: location1?.name || "",
    location_type: "inventory",
    description: "Physical count detail for location 1",
    physical_count_type: "yes",
    status: "Pending",
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
    id: getUuidByName("PHYSICAL_COUNT_DETAIL_02"),
    physical_count_id: getUuidByName("PHYSICAL_COUNT_01"),
    location_id: location2?.id || "",
    location_name: location2?.name || "",
    location_type: "inventory",
    description: "Physical count detail for location 2",
    physical_count_type: "yes",
    status: "Counting",
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
    id: getUuidByName("PHYSICAL_COUNT_DETAIL_03"),
    physical_count_id: getUuidByName("PHYSICAL_COUNT_01"),
    location_id: location3?.id || "",
    location_name: location3?.name || "",
    location_type: "consignment",
    description: "Physical count detail for location 3",
    physical_count_type: "yes",
    status: "Counted",
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
    id: getUuidByName("PHYSICAL_COUNT_DETAIL_04"),
    physical_count_id: getUuidByName("PHYSICAL_COUNT_02"),
    location_id: location4?.id || "",
    location_name: location4?.name || "",
    location_type: "inventory",
    description: "Physical count detail for location 4",
    physical_count_type: "yes",
    status: "Pending",
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
    id: getUuidByName("PHYSICAL_COUNT_DETAIL_05"),
    physical_count_id: getUuidByName("PHYSICAL_COUNT_02"),
    location_id: location5?.id || "",
    location_name: location5?.name || "",
    location_type: "inventory",
    description: "Physical count detail for location 5",
    physical_count_type: "yes",
    status: "Pending",
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
    id: getUuidByName("PHYSICAL_COUNT_DETAIL_06"),
    physical_count_id: getUuidByName("PHYSICAL_COUNT_02"),
    location_id: location6?.id || "",
    location_name: location6?.name || "",
    location_type: "consignment",
    description: "Physical count detail for location 6",
    physical_count_type: "yes",
    status: "Pending",
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
    id: getUuidByName("PHYSICAL_COUNT_DETAIL_07"),
    physical_count_id: getUuidByName("PHYSICAL_COUNT_03"),
    location_id: location7?.id || "",
    location_name: location7?.name || "",
    location_type: "inventory",
    description: "Physical count detail for location 7",
    physical_count_type: "yes",
    status: "Counted",
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
    id: getUuidByName("PHYSICAL_COUNT_DETAIL_08"),
    physical_count_id: getUuidByName("PHYSICAL_COUNT_03"),
    location_id: location8?.id || "",
    location_name: location8?.name || "",
    location_type: "consignment",
    description: "Physical count detail for location 8",
    physical_count_type: "yes",
    status: "Counted",
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
export const createPhysicalCountDetail = (
  data: Omit<PhysicalCountDetail, "id" | "created_at" | "updated_at">
): PhysicalCountDetail => {
  const newDetail: PhysicalCountDetail = {
    ...data,
    id: generateId(),
    created_at: new Date(getCurrentTimestamp()),
    updated_at: new Date(getCurrentTimestamp()),
  };

  physicalCountsDetails.push(newDetail);
  return newDetail;
};

// CREATE - สร้าง PhysicalCountDetail หลายรายการ
export const createMultiplePhysicalCountDetails = (
  details: Omit<PhysicalCountDetail, "id" | "created_at" | "updated_at">[]
): PhysicalCountDetail[] => {
  const newDetails = details.map(detail => createPhysicalCountDetail(detail));
  return newDetails;
};

// READ - อ่าน PhysicalCountDetail ทั้งหมด
export const getAllPhysicalCountDetails = (): PhysicalCountDetail[] => {
  return physicalCountsDetails;
};

// READ - อ่าน PhysicalCountDetail ตาม ID
export const getPhysicalCountDetailById = (id: string): PhysicalCountDetail | null => {
  const detail = physicalCountsDetails.find(d => d.id === id);
  return detail || null;
};

// READ - อ่าน PhysicalCountDetail ตาม physical_count_id
export const getPhysicalCountDetailsByPhysicalCountId = (physicalCountId: string): PhysicalCountDetail[] => {
  
  
  const physicalCount = tbPhysicalCount.getPhysicalCountById(physicalCountId);
  if (!physicalCount) {
    return [];
  }

  const details = physicalCountsDetails.filter(detail =>
    detail.physical_count_id === physicalCountId 
  );

  if (physicalCount.include_location_not_count === false) {
    return details.filter(detail => detail.physical_count_type === "yes");
  }

  return details;
};

// READ - อ่าน PhysicalCountDetail ตาม location_id
export const getPhysicalCountDetailsByLocationId = (locationId: string): PhysicalCountDetail[] => {
  return physicalCountsDetails.filter(detail =>
    detail.location_id === locationId 
  );
};

// READ - อ่าน PhysicalCountDetail ตาม location_type
export const getPhysicalCountDetailsByLocationType = (locationType: "inventory" | "consignment" | "direct"): PhysicalCountDetail[] => {
  return physicalCountsDetails.filter(detail =>
    detail.location_type === locationType 
  );
};

// READ - อ่าน PhysicalCountDetail ตาม status
export const getPhysicalCountDetailsByStatus = (status: "Pending" | "Counting" | "Counted"): PhysicalCountDetail[] => {
  return physicalCountsDetails.filter(detail =>
    detail.status === status 
  );
};

// READ - อ่าน PhysicalCountDetail ตาม created_by_id
export const getPhysicalCountDetailsByCreatedBy = (createdById: string): PhysicalCountDetail[] => {
  return physicalCountsDetails.filter(detail =>
    detail.created_by_id === createdById 
  );
};

// READ - อ่าน PhysicalCountDetail ตาม updated_by_id
export const getPhysicalCountDetailsByUpdatedBy = (updatedById: string): PhysicalCountDetail[] => {
  return physicalCountsDetails.filter(detail =>
    detail.updated_by_id === updatedById 
  );
};

// READ - อ่าน PhysicalCountDetail ตามช่วงวันที่สร้าง
export const getPhysicalCountDetailsByDateRange = (startDate: string, endDate: string): PhysicalCountDetail[] => {
  return physicalCountsDetails.filter(detail => {
    const createdDate = new Date(detail.created_at);
    const start = new Date(startDate);
    const end = new Date(endDate);
    return createdDate >= start && createdDate <= end;
  });
};

// UPDATE - อัปเดต PhysicalCountDetail
export const updatePhysicalCountDetail = (
  id: string,
  data: Partial<Omit<PhysicalCountDetail, "id" | "created_at" | "created_by_id">>
): PhysicalCountDetail | null => {
  const index = physicalCountsDetails.findIndex(detail => detail.id === id );

  if (index === -1) {
    return null;
  }

  physicalCountsDetails[index] = {
    ...physicalCountsDetails[index],
    ...data,
    updated_at: new Date(getCurrentTimestamp()),
  };

  return physicalCountsDetails[index];
};

// UPDATE - อัปเดต status ของ PhysicalCountDetail
export const updatePhysicalCountDetailStatus = (
  id: string,
  status: "Pending" | "Counting" | "Counted",
  updatedById: string
): PhysicalCountDetail | null => {
  return updatePhysicalCountDetail(id, { status, updated_by_id: updatedById });
};

// UPDATE - อัปเดต location ของ PhysicalCountDetail
export const updatePhysicalCountDetailLocation = (
  id: string,
  locationId: string,
  locationName: string,
  updatedById: string
): PhysicalCountDetail | null => {
  return updatePhysicalCountDetail(id, {
    location_id: locationId,
    location_name: locationName,
    updated_by_id: updatedById
  });
};

// UPDATE - อัปเดต location_type ของ PhysicalCountDetail
export const updatePhysicalCountDetailLocationType = (
  id: string,
  locationType: "inventory" | "consignment" | "direct",
  updatedById: string
): PhysicalCountDetail | null => {
  return updatePhysicalCountDetail(id, { location_type: locationType, updated_by_id: updatedById });
};

// UPDATE - อัปเดต PhysicalCountDetail หลายรายการ
export const updateMultiplePhysicalCountDetails = (
  updates: { id: string; data: Partial<Omit<PhysicalCountDetail, "id" | "created_at" | "created_by_id">> }[]
): PhysicalCountDetail[] => {
  const updatedDetails: PhysicalCountDetail[] = [];

  updates.forEach(update => {
    const updatedDetail = updatePhysicalCountDetail(update.id, update.data);
    if (updatedDetail) {
      updatedDetails.push(updatedDetail);
    }
  });

  return updatedDetails;
};

// DELETE - Hard delete PhysicalCountDetail
export const hardDeletePhysicalCountDetail = (id: string): boolean => {
  const index = physicalCountsDetails.findIndex(detail => detail.id === id);

  if (index === -1) {
    return false;
  }

  physicalCountsDetails.splice(index, 1);
  return true;
};


// ADVANCED SEARCH - ค้นหา PhysicalCountDetail แบบขั้นสูง
export const searchPhysicalCountDetails = (criteria: {
  physical_count_id?: string;
  location_id?: string;
  location_name?: string;
  location_type?: "inventory" | "consignment" | "direct";
  status?: "Pending" | "Counting" | "Counted";
  created_by_id?: string;
  updated_by_id?: string;
  start_date?: string;
  end_date?: string;
}): PhysicalCountDetail[] => {
  return physicalCountsDetails.filter(detail => {

    if (criteria.physical_count_id && detail.physical_count_id !== criteria.physical_count_id) {
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
export const getPhysicalCountDetailCount = (): number => {
  return physicalCountsDetails.length;
};

export const getPhysicalCountDetailCountByPhysicalCountId = (physicalCountId: string): number => {
  return physicalCountsDetails.filter(detail =>
    detail.physical_count_id === physicalCountId
  ).length;
};

export const getPhysicalCountDetailCountByStatus = (status: "Pending" | "Counting" | "Counted"): number => {
  return physicalCountsDetails.filter(detail =>
    detail.status === status 
  ).length;
};

export const getPhysicalCountDetailCountByLocationType = (locationType: "inventory" | "consignment" | "direct"): number => {
  return physicalCountsDetails.filter(detail =>
    detail.location_type === locationType 
  ).length;
};

export const isPhysicalCountDetailExists = (id: string): boolean => {
  return physicalCountsDetails.some(detail => detail.id === id );
};

export const hasPhysicalCountDetailsForPhysicalCount = (physicalCountId: string): boolean => {
  return physicalCountsDetails.some(detail =>
    detail.physical_count_id === physicalCountId 
  );
};

export const hasPhysicalCountDetailsForLocation = (locationId: string): boolean => {
  return physicalCountsDetails.some(detail =>
    detail.location_id === locationId 
  );
};

export const clearAllPhysicalCountDetails = (): void => {
  physicalCountsDetails.length = 0;
};