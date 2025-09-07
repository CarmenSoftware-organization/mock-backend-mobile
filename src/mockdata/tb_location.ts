import { generateId, getCurrentTimestamp } from "@/libs/utils";
import { getUuidByName } from "./mapping.uuid";
import { tbBusinessUnit } from ".";

export interface Location {
  id: string;
  name: string;
  location_type: "inventory" | "non_inventory";
  description: string | null;
  delivery_point_id: string;
  delivery_point_name: string;
  physical_count_type: "yes" | "no";
  is_active: boolean;
  note: string | null;
  info: any;
  dimension: any;
  created_at: string;
  created_by_id: string;
  updated_at: string;
  updated_by_id: string | null;
  deleted_at: string | null;
  deleted_by_id: string | null;
}

export const locations: Location[] = [
  {
    id: getUuidByName("LOCATION_01"),
    name: "Main Kitchen",
    location_type: "inventory",
    description: null,
    delivery_point_id: getUuidByName("DELIVERY_POINT_01"),
    delivery_point_name: "Main",
    physical_count_type: "yes",
    is_active: true,
    note: null,
    info: null,
    dimension: null,
    created_at: "2025-07-29T01:05:58.068Z",
    created_by_id: getUuidByName("USER_01"),
    updated_at: "2025-07-29T01:05:58.069Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("LOCATION_02"),
    name: "ABF Kitchen",
    location_type: "inventory",
    description: null,
    delivery_point_id: getUuidByName("DELIVERY_POINT_01"),
    delivery_point_name: "Main",
    physical_count_type: "yes",
    is_active: true,
    note: null,
    info: null,
    dimension: null,
    created_at: "2025-07-29T01:05:58.130Z",
    created_by_id: getUuidByName("USER_01"),
    updated_at: "2025-07-29T01:05:58.131Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("LOCATION_03"),
    name: "Bakery",
    location_type: "inventory",
    description: null,
    delivery_point_id: getUuidByName("DELIVERY_POINT_01"),
    delivery_point_name: "Main",
    physical_count_type: "yes",
    is_active: true,
    note: null,
    info: null,
    dimension: null,
    created_at: "2025-07-29T01:05:58.178Z",
    created_by_id: getUuidByName("USER_01"),
    updated_at: "2025-07-29T01:05:58.179Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("LOCATION_04"),
    name: "Staff Canteen",
    location_type: "inventory",
    description: null,
    delivery_point_id: getUuidByName("DELIVERY_POINT_01"),
    delivery_point_name: "Main",
    physical_count_type: "yes",
    is_active: true,
    note: null,
    info: null,
    dimension: null,
    created_at: "2025-07-29T01:05:58.222Z",
    created_by_id: getUuidByName("USER_01"),
    updated_at: "2025-07-29T01:05:58.223Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("LOCATION_05"),
    name: "Bar",
    location_type: "inventory",
    description: null,
    delivery_point_id: getUuidByName("DELIVERY_POINT_01"),
    delivery_point_name: "Main",
    physical_count_type: "yes",
    is_active: true,
    note: null,
    info: null,
    dimension: null,
    created_at: "2025-07-29T01:05:58.270Z",
    created_by_id: getUuidByName("USER_01"),
    updated_at: "2025-07-29T01:05:58.272Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("LOCATION_06"),
    name: "Banquet",
    location_type: "inventory",
    description: null,
    delivery_point_id: getUuidByName("DELIVERY_POINT_01"),
    delivery_point_name: "Main",
    physical_count_type: "yes",
    is_active: true,
    note: null,
    info: null,
    dimension: null,
    created_at: "2025-07-29T01:05:58.318Z",
    created_by_id: getUuidByName("USER_01"),
    updated_at: "2025-07-29T01:05:58.319Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("LOCATION_07"),
    name: "Mini Bar",
    location_type: "inventory",
    description: null,
    delivery_point_id: getUuidByName("DELIVERY_POINT_01"),
    delivery_point_name: "Main",
    physical_count_type: "yes",
    is_active: true,
    note: null,
    info: null,
    dimension: null,
    created_at: "2025-07-29T01:05:58.367Z",
    created_by_id: getUuidByName("USER_01"),
    updated_at: "2025-07-29T01:05:58.368Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("LOCATION_08"),
    name: "Grocery",
    location_type: "inventory",
    description: null,
    delivery_point_id: getUuidByName("DELIVERY_POINT_01"),
    delivery_point_name: "Main",
    physical_count_type: "yes",
    is_active: true,
    note: null,
    info: null,
    dimension: null,
    created_at: "2025-07-29T01:05:58.410Z",
    created_by_id: getUuidByName("USER_01"),
    updated_at: "2025-07-29T01:05:58.411Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("LOCATION_09"),
    name: "OE Front Ofice",
    location_type: "inventory",
    description: null,
    delivery_point_id: getUuidByName("DELIVERY_POINT_01"),
    delivery_point_name: "Main",
    physical_count_type: "no",
    is_active: true,
    note: null,
    info: null,
    dimension: null,
    created_at: "2025-07-29T01:05:58.456Z",
    created_by_id: getUuidByName("USER_01"),
    updated_at: "2025-07-29T01:05:58.456Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("LOCATION_10"),
    name: "OE Spa",
    location_type: "inventory",
    description: null,
    delivery_point_id: getUuidByName("DELIVERY_POINT_01"),
    delivery_point_name: "Main",
    physical_count_type: "no",
    is_active: true,
    note: null,
    info: null,
    dimension: null,
    created_at: "2025-07-29T01:05:58.507Z",
    created_by_id: getUuidByName("USER_01"),
    updated_at: "2025-07-29T01:05:58.508Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
];

// CREATE - สร้าง Location ใหม่
export const createLocation = (
  locationData: Omit<Location, "id" | "created_at" | "updated_at">
): Location => {
  const newLocation: Location = {
    ...locationData,
    id: generateId(),
    created_at: getCurrentTimestamp(),
    updated_at: getCurrentTimestamp(),
  };

  locations.push(newLocation);
  return newLocation;
};

// READ - อ่าน Location ทั้งหมด
export const getAllLocations = (): Location[] => {
  return [...locations];
};

// READ - อ่าน Location ตาม ID
export const getLocationById = (id: string): Location | undefined => {
  return locations.find((location) => location.id === id);
};

// READ - อ่าน Location ตาม name
export const getLocationByName = (name: string): Location[] => {
  return locations.filter((location) =>
    location.name.toLowerCase().includes(name.toLowerCase())
  );
};

// READ - อ่าน Location ตาม location_type
export const getLocationsByType = (locationType: string): Location[] => {
  return locations.filter(
    (location) => location.location_type === locationType
  );
};

// READ - อ่าน Location ตาม business_unit_code
export const getLocationsByBusinessUnitCode = (businessUnitCode: string): Location[] => {
  return locations;
};

// READ - อ่าน Location ตาม delivery_point_id
export const getLocationsByDeliveryPoint = (
  deliveryPointId: string
): Location[] => {
  return locations.filter(
    (location) => location.delivery_point_id === deliveryPointId
  );
};

// READ - อ่าน Location ที่ active
export const getActiveLocations = (): Location[] => {
  return locations.filter((location) => location.is_active);
};

// READ - อ่าน Location ที่มี physical count
export const getLocationsWithPhysicalCount = (): Location[] => {
  return locations.filter((location) => location.physical_count_type === "yes");
};

// READ - อ่าน Location ที่ไม่มี physical count
export const getLocationsWithoutPhysicalCount = (): Location[] => {
  return locations.filter((location) => location.physical_count_type === "no");
};

// UPDATE - อัปเดต Location
export const updateLocation = (
  id: string,
  updateData: Partial<Omit<Location, "id" | "created_at" | "created_by_id">>
): Location | null => {
  const index = locations.findIndex((location) => location.id === id);

  if (index === -1) {
    return null;
  }

  locations[index] = {
    ...locations[index],
    ...updateData,
    updated_at: getCurrentTimestamp(),
  };

  return locations[index];
};

// UPDATE - อัปเดต Location status
export const updateLocationStatus = (
  id: string,
  isActive: boolean
): Location | null => {
  return updateLocation(id, { is_active: isActive });
};

// UPDATE - อัปเดต Location physical count type
export const updateLocationPhysicalCountType = (
  id: string,
  physicalCountType: "yes" | "no"
): Location | null => {
  return updateLocation(id, { physical_count_type: physicalCountType });
};

// UPDATE - อัปเดต Location delivery point
export const updateLocationDeliveryPoint = (
  id: string,
  deliveryPointId: string,
  deliveryPointName: string
): Location | null => {
  return updateLocation(id, {
    delivery_point_id: deliveryPointId,
    delivery_point_name: deliveryPointName,
  });
};

// DELETE - ลบ Location (soft delete)
export const deleteLocation = (id: string, deletedById: string): boolean => {
  const index = locations.findIndex((location) => location.id === id);

  if (index === -1) {
    return false;
  }

  locations[index] = {
    ...locations[index],
    deleted_at: getCurrentTimestamp(),
    deleted_by_id: deletedById,
  };

  return true;
};

// DELETE - ลบ Location แบบถาวร
export const hardDeleteLocation = (id: string): boolean => {
  const index = locations.findIndex((location) => location.id === id);

  if (index === -1) {
    return false;
  }

  locations.splice(index, 1);
  return true;
};

// DELETE - ลบ Location ตาม delivery_point_id
export const deleteLocationsByDeliveryPoint = (
  deliveryPointId: string,
  deletedById: string
): number => {
  let deletedCount = 0;

  locations.forEach((location) => {
    if (
      location.delivery_point_id === deliveryPointId &&
      !location.deleted_at
    ) {
      location.deleted_at = getCurrentTimestamp();
      location.deleted_by_id = deletedById;
      deletedCount++;
    }
  });

  return deletedCount;
};

// DELETE - ลบ Location ตาม location_type
export const deleteLocationsByType = (
  locationType: string,
  deletedById: string
): number => {
  let deletedCount = 0;

  locations.forEach((location) => {
    if (location.location_type === locationType && !location.deleted_at) {
      location.deleted_at = getCurrentTimestamp();
      location.deleted_by_id = deletedById;
      deletedCount++;
    }
  });

  return deletedCount;
};

// Utility function สำหรับล้างข้อมูลทั้งหมด (ใช้สำหรับ testing)
export const clearAllLocations = (): void => {
  locations.length = 0;
};

// Utility function สำหรับนับจำนวน Location
export const getLocationCount = (): number => {
  return locations.length;
};

// Utility function สำหรับนับจำนวน Location ที่ active
export const getActiveLocationCount = (): number => {
  return locations.filter((location) => location.is_active).length;
};

// Utility function สำหรับค้นหา Location แบบ advanced search
export const searchLocations = (searchCriteria: {
  name?: string;
  location_type?: string;
  delivery_point_id?: string;
  physical_count_type?: "yes" | "no";
  is_active?: boolean;
}): Location[] => {
  return locations.filter((location) => {
    if (
      searchCriteria.name &&
      !location.name.toLowerCase().includes(searchCriteria.name.toLowerCase())
    ) {
      return false;
    }

    if (
      searchCriteria.location_type &&
      location.location_type !== searchCriteria.location_type
    ) {
      return false;
    }

    if (
      searchCriteria.delivery_point_id &&
      location.delivery_point_id !== searchCriteria.delivery_point_id
    ) {
      return false;
    }

    if (
      searchCriteria.physical_count_type &&
      location.physical_count_type !== searchCriteria.physical_count_type
    ) {
      return false;
    }

    if (
      searchCriteria.is_active !== undefined &&
      location.is_active !== searchCriteria.is_active
    ) {
      return false;
    }

    return true;
  });
};

// Utility function สำหรับตรวจสอบ name ซ้ำ
export const isLocationNameExists = (name: string): boolean => {
  return locations.some((location) => location.name === name);
};

// Utility function สำหรับตรวจสอบ Location ที่มี physical count
export const hasPhysicalCountLocations = (): boolean => {
  return locations.some((location) => location.physical_count_type === "yes");
};
