import { generateId, getCurrentTimestamp } from "@/libs/utils";

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
    id: "c5dfc615-d064-4a9e-a972-bc4e708eaabe",
    name: "Main Kitchen",
    location_type: "inventory",
    description: null,
    delivery_point_id: "03d8b4bd-31f0-4e25-8188-a6478c5026b3",
    delivery_point_name: "Main",
    physical_count_type: "yes",
    is_active: true,
    note: null,
    info: null,
    dimension: null,
    created_at: "2025-07-29T01:05:58.068Z",
    created_by_id: "1bfdb891-58ee-499c-8115-34a964de8122",
    updated_at: "2025-07-29T01:05:58.069Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: "a9929da1-651e-46bc-8e1d-4411199ed098",
    name: "ABF Kitchen",
    location_type: "inventory",
    description: null,
    delivery_point_id: "03d8b4bd-31f0-4e25-8188-a6478c5026b3",
    delivery_point_name: "Main",
    physical_count_type: "yes",
    is_active: true,
    note: null,
    info: null,
    dimension: null,
    created_at: "2025-07-29T01:05:58.130Z",
    created_by_id: "1bfdb891-58ee-499c-8115-34a964de8122",
    updated_at: "2025-07-29T01:05:58.131Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: "7af4554b-2f51-4054-a418-14cbd7943ad0",
    name: "Bakery",
    location_type: "inventory",
    description: null,
    delivery_point_id: "03d8b4bd-31f0-4e25-8188-a6478c5026b3",
    delivery_point_name: "Main",
    physical_count_type: "yes",
    is_active: true,
    note: null,
    info: null,
    dimension: null,
    created_at: "2025-07-29T01:05:58.178Z",
    created_by_id: "1bfdb891-58ee-499c-8115-34a964de8122",
    updated_at: "2025-07-29T01:05:58.179Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: "54817bac-053a-4c45-beb0-53015ea63c59",
    name: "Staff Canteen",
    location_type: "inventory",
    description: null,
    delivery_point_id: "03d8b4bd-31f0-4e25-8188-a6478c5026b3",
    delivery_point_name: "Main",
    physical_count_type: "yes",
    is_active: true,
    note: null,
    info: null,
    dimension: null,
    created_at: "2025-07-29T01:05:58.222Z",
    created_by_id: "1bfdb891-58ee-499c-8115-34a964de8122",
    updated_at: "2025-07-29T01:05:58.223Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: "0d3c3307-4e75-4185-8771-1feb75c2c8a6",
    name: "Bar",
    location_type: "inventory",
    description: null,
    delivery_point_id: "03d8b4bd-31f0-4e25-8188-a6478c5026b3",
    delivery_point_name: "Main",
    physical_count_type: "yes",
    is_active: true,
    note: null,
    info: null,
    dimension: null,
    created_at: "2025-07-29T01:05:58.270Z",
    created_by_id: "1bfdb891-58ee-499c-8115-34a964de8122",
    updated_at: "2025-07-29T01:05:58.272Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: "12907b64-d921-4931-9a17-8a915586656b",
    name: "Banquet",
    location_type: "inventory",
    description: null,
    delivery_point_id: "03d8b4bd-31f0-4e25-8188-a6478c5026b3",
    delivery_point_name: "Main",
    physical_count_type: "yes",
    is_active: true,
    note: null,
    info: null,
    dimension: null,
    created_at: "2025-07-29T01:05:58.318Z",
    created_by_id: "1bfdb891-58ee-499c-8115-34a964de8122",
    updated_at: "2025-07-29T01:05:58.319Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: "ae9c430e-c86a-418c-bbd2-6d951533fa87",
    name: "Mini Bar",
    location_type: "inventory",
    description: null,
    delivery_point_id: "03d8b4bd-31f0-4e25-8188-a6478c5026b3",
    delivery_point_name: "Main",
    physical_count_type: "yes",
    is_active: true,
    note: null,
    info: null,
    dimension: null,
    created_at: "2025-07-29T01:05:58.367Z",
    created_by_id: "1bfdb891-58ee-499c-8115-34a964de8122",
    updated_at: "2025-07-29T01:05:58.368Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: "9bd75627-7839-4cc8-96a8-7da506269c6a",
    name: "Grocery",
    location_type: "inventory",
    description: null,
    delivery_point_id: "03d8b4bd-31f0-4e25-8188-a6478c5026b3",
    delivery_point_name: "Main",
    physical_count_type: "yes",
    is_active: true,
    note: null,
    info: null,
    dimension: null,
    created_at: "2025-07-29T01:05:58.410Z",
    created_by_id: "1bfdb891-58ee-499c-8115-34a964de8122",
    updated_at: "2025-07-29T01:05:58.411Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: "853a2d29-b143-48ad-a23e-54b12ae2fca1",
    name: "OE Front Ofice",
    location_type: "inventory",
    description: null,
    delivery_point_id: "03d8b4bd-31f0-4e25-8188-a6478c5026b3",
    delivery_point_name: "Main",
    physical_count_type: "no",
    is_active: true,
    note: null,
    info: null,
    dimension: null,
    created_at: "2025-07-29T01:05:58.456Z",
    created_by_id: "1bfdb891-58ee-499c-8115-34a964de8122",
    updated_at: "2025-07-29T01:05:58.456Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: "6d1d23f3-35b7-4f69-bd41-a3a2efb50c6d",
    name: "OE Spa",
    location_type: "inventory",
    description: null,
    delivery_point_id: "03d8b4bd-31f0-4e25-8188-a6478c5026b3",
    delivery_point_name: "Main",
    physical_count_type: "no",
    is_active: true,
    note: null,
    info: null,
    dimension: null,
    created_at: "2025-07-29T01:05:58.507Z",
    created_by_id: "1bfdb891-58ee-499c-8115-34a964de8122",
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
