import { generateId, getCurrentTimestamp } from "@/libs/utils";

export interface UserLocation {
  id: string;
  user_id: string;
  location_id: string;
  note: string | null;
  info: any;
  created_at: string;
  created_by_id: string;
  updated_at: string;
  updated_by_id: string | null;
  deleted_at: string | null;
  deleted_by_id: string | null;
}

// Sample data
export const userLocations: UserLocation[] = [
  {
    id: "38693773-cb5b-4756-8f58-1bffc92f1f26",
    user_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    location_id: "c5dfc615-d064-4a9e-a972-bc4e708eaabe",
    note: null,
    info: null,
    created_at: "2025-07-29T01:06:01.326Z",
    created_by_id: "1bfdb891-58ee-499c-8115-34a964de8122",
    updated_at: "2025-07-29T01:06:01.327Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "c0b587d2-8097-4b7c-a16c-05e004004268",
    user_id: "1bfdb891-58ee-499c-8115-34a964de8122",
    location_id: "c5dfc615-d064-4a9e-a972-bc4e708eaabe",
    note: null,
    info: null,
    created_at: "2025-07-29T01:06:01.377Z",
    created_by_id: "1bfdb891-58ee-499c-8115-34a964de8122",
    updated_at: "2025-07-29T01:06:01.378Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "f80bd61b-9a5f-420e-98b4-b90f04e5cfc3",
    user_id: "3c5280a7-492e-421d-b739-7447455ce99e",
    location_id: "c5dfc615-d064-4a9e-a972-bc4e708eaabe",
    note: null,
    info: null,
    created_at: "2025-07-29T01:06:01.409Z",
    created_by_id: "1bfdb891-58ee-499c-8115-34a964de8122",
    updated_at: "2025-07-29T01:06:01.410Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "3a48777e-eff8-4156-a685-2420cf078711",
    user_id: "c7092848-78f7-4cfe-bb6d-095c286a1019",
    location_id: "c5dfc615-d064-4a9e-a972-bc4e708eaabe",
    note: null,
    info: null,
    created_at: "2025-07-29T01:06:01.440Z",
    created_by_id: "1bfdb891-58ee-499c-8115-34a964de8122",
    updated_at: "2025-07-29T01:06:01.441Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "c571bd72-76ac-4359-aac7-ae851918e25c",
    user_id: "d9aef974-0dd1-4acd-93b7-93c8ccc8cfeb",
    location_id: "c5dfc615-d064-4a9e-a972-bc4e708eaabe",
    note: null,
    info: null,
    created_at: "2025-07-29T01:06:01.472Z",
    created_by_id: "1bfdb891-58ee-499c-8115-34a964de8122",
    updated_at: "2025-07-29T01:06:01.473Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "0cc426a7-f896-40df-87ed-815cbb46bd07",
    user_id: "e88e8da4-ad87-4255-befc-1556d1b66b69",
    location_id: "c5dfc615-d064-4a9e-a972-bc4e708eaabe",
    note: null,
    info: null,
    created_at: "2025-07-29T01:06:01.502Z",
    created_by_id: "1bfdb891-58ee-499c-8115-34a964de8122",
    updated_at: "2025-07-29T01:06:01.503Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "46b67fe6-5770-4569-8adc-7e361b0a91f5",
    user_id: "57c0721a-4afd-4e8f-b118-f0480c537215",
    location_id: "c5dfc615-d064-4a9e-a972-bc4e708eaabe",
    note: null,
    info: null,
    created_at: "2025-07-29T01:06:01.532Z",
    created_by_id: "1bfdb891-58ee-499c-8115-34a964de8122",
    updated_at: "2025-07-29T01:06:01.533Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "d9f8e68f-393c-4cc5-9768-c681984d34cc",
    user_id: "59c4ce87-84e5-48e5-b246-7d0f6d2c5594",
    location_id: "c5dfc615-d064-4a9e-a972-bc4e708eaabe",
    note: null,
    info: null,
    created_at: "2025-07-29T01:06:01.562Z",
    created_by_id: "1bfdb891-58ee-499c-8115-34a964de8122",
    updated_at: "2025-07-29T01:06:01.563Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "7b878126-4565-4324-904c-a0e7f2206784",
    user_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    location_id: "a9929da1-651e-46bc-8e1d-4411199ed098",
    note: null,
    info: null,
    created_at: "2025-07-29T01:06:01.591Z",
    created_by_id: "1bfdb891-58ee-499c-8115-34a964de8122",
    updated_at: "2025-07-29T01:06:01.591Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "9b9bffae-09db-4af1-ba8c-f97e843832bb",
    user_id: "1bfdb891-58ee-499c-8115-34a964de8122",
    location_id: "a9929da1-651e-46bc-8e1d-4411199ed098",
    note: null,
    info: null,
    created_at: "2025-07-29T01:06:01.620Z",
    created_by_id: "1bfdb891-58ee-499c-8115-34a964de8122",
    updated_at: "2025-07-29T01:06:01.621Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null
  }
];

// CREATE - สร้าง UserLocation ใหม่
export const createUserLocation = (data: Omit<UserLocation, 'id' | 'created_at' | 'created_by_id' | 'updated_at' | 'updated_by_id'>): UserLocation => {
  const newUserLocation: UserLocation = {
    ...data,
    id: generateId(),
    created_at: getCurrentTimestamp(),
    created_by_id: 'system',
    updated_at: getCurrentTimestamp(),
    updated_by_id: 'system'
  };
  
  userLocations.push(newUserLocation);
  return newUserLocation;
};

// READ - อ่านข้อมูล UserLocation
export const getAllUserLocations = (): UserLocation[] => {
  return userLocations.filter(userLocation => !userLocation.deleted_at);
};

export const getUserLocationById = (id: string): UserLocation | null => {
  const userLocation = userLocations.find(ul => ul.id === id && !ul.deleted_at);
  return userLocation || null;
};

export const getUserLocationsByUser = (userId: string): UserLocation[] => {
  return userLocations.filter(userLocation => userLocation.user_id === userId && !userLocation.deleted_at);
};

export const getUserLocationsByLocation = (locationId: string): UserLocation[] => {
  return userLocations.filter(userLocation => userLocation.location_id === locationId && !userLocation.deleted_at);
};

export const getUserLocationsByCreator = (createdById: string): UserLocation[] => {
  return userLocations.filter(userLocation => userLocation.created_by_id === createdById && !userLocation.deleted_at);
};

export const getUserLocationsByDateRange = (startDate: string, endDate: string): UserLocation[] => {
  return userLocations.filter(userLocation => {
    const createdDate = new Date(userLocation.created_at);
    const start = new Date(startDate);
    const end = new Date(endDate);
    return createdDate >= start && createdDate <= end && !userLocation.deleted_at;
  });
};

export const getUserLocationsWithNote = (): UserLocation[] => {
  return userLocations.filter(userLocation => userLocation.note !== null && !userLocation.deleted_at);
};

export const getUserLocationsWithoutNote = (): UserLocation[] => {
  return userLocations.filter(userLocation => userLocation.note === null && !userLocation.deleted_at);
};

// UPDATE - อัปเดต UserLocation
export const updateUserLocation = (id: string, data: Partial<Omit<UserLocation, 'id' | 'created_at' | 'created_by_id'>>): UserLocation | null => {
  const index = userLocations.findIndex(userLocation => userLocation.id === id && !userLocation.deleted_at);
  
  if (index === -1) {
    return null;
  }
  
  userLocations[index] = {
    ...userLocations[index],
    ...data,
    updated_at: getCurrentTimestamp(),
    updated_by_id: 'system'
  };
  
  return userLocations[index];
};

// UPDATE - อัปเดต UserLocation note
export const updateUserLocationNote = (id: string, note: string): UserLocation | null => {
  return updateUserLocation(id, { note });
};

// UPDATE - อัปเดต UserLocation info
export const updateUserLocationInfo = (id: string, info: any): UserLocation | null => {
  return updateUserLocation(id, { info });
};

// UPDATE - อัปเดต UserLocation location
export const updateUserLocationLocation = (id: string, locationId: string): UserLocation | null => {
  return updateUserLocation(id, { location_id: locationId });
};

// DELETE - Soft delete UserLocation
export const softDeleteUserLocation = (id: string, deletedById: string): UserLocation | null => {
  const userLocation = getUserLocationById(id);
  if (!userLocation) return null;

  userLocation.deleted_at = getCurrentTimestamp();
  userLocation.deleted_by_id = deletedById;
  userLocation.updated_at = getCurrentTimestamp();
  userLocation.updated_by_id = deletedById;

  return userLocation;
};

// DELETE - Hard delete UserLocation
export const hardDeleteUserLocation = (id: string): boolean => {
  const index = userLocations.findIndex(userLocation => userLocation.id === id);
  
  if (index === -1) {
    return false;
  }
  
  userLocations.splice(index, 1);
  return true;
};

// DELETE - ลบ UserLocation ตาม user
export const deleteUserLocationsByUser = (userId: string, deletedById: string): boolean => {
  const userLocationsByUser = getUserLocationsByUser(userId);
  let deletedCount = 0;
  
  userLocationsByUser.forEach(userLocation => {
    if (softDeleteUserLocation(userLocation.id, deletedById)) {
      deletedCount++;
    }
  });
  
  return deletedCount > 0;
};

// DELETE - ลบ UserLocation ตาม location
export const deleteUserLocationsByLocation = (locationId: string, deletedById: string): boolean => {
  const userLocationsByLocation = getUserLocationsByLocation(locationId);
  let deletedCount = 0;
  
  userLocationsByLocation.forEach(userLocation => {
    if (softDeleteUserLocation(userLocation.id, deletedById)) {
      deletedCount++;
    }
  });
  
  return deletedCount > 0;
};

// RESTORE - กู้คืน UserLocation ที่ถูก soft delete
export const restoreUserLocation = (id: string): UserLocation | null => {
  const userLocation = userLocations.find(ul => ul.id === id);
  if (!userLocation || !userLocation.deleted_at) return null;

  userLocation.deleted_at = null;
  userLocation.deleted_by_id = null;
  userLocation.updated_at = getCurrentTimestamp();
  userLocation.updated_by_id = 'system';

  return userLocation;
};

// ADVANCED SEARCH - ค้นหา UserLocation แบบขั้นสูง
export const searchUserLocations = (criteria: {
  user_id?: string;
  location_id?: string;
  has_note?: boolean;
  created_by_id?: string;
  start_date?: string;
  end_date?: string;
}): UserLocation[] => {
  return userLocations.filter(userLocation => {
    if (userLocation.deleted_at) return false;
    
    if (criteria.user_id && userLocation.user_id !== criteria.user_id) {
      return false;
    }
    
    if (criteria.location_id && userLocation.location_id !== criteria.location_id) {
      return false;
    }
    
    if (criteria.has_note !== undefined) {
      const hasNote = userLocation.note !== null;
      if (hasNote !== criteria.has_note) {
        return false;
      }
    }
    
    if (criteria.created_by_id && userLocation.created_by_id !== criteria.created_by_id) {
      return false;
    }
    
    if (criteria.start_date || criteria.end_date) {
      const createdDate = new Date(userLocation.created_at);
      if (criteria.start_date && createdDate < new Date(criteria.start_date)) return false;
      if (criteria.end_date && createdDate > new Date(criteria.end_date)) return false;
    }
    
    return true;
  });
};

// UTILITY FUNCTIONS - ฟังก์ชันเสริม
export const getUserLocationCount = (): number => {
  return userLocations.filter(userLocation => !userLocation.deleted_at).length;
};

export const getUserLocationCountByUser = (userId: string): number => {
  return userLocations.filter(userLocation => userLocation.user_id === userId && !userLocation.deleted_at).length;
};

export const getUserLocationCountByLocation = (locationId: string): number => {
  return userLocations.filter(userLocation => userLocation.location_id === locationId && !userLocation.deleted_at).length;
};

export const isUserLocationExists = (id: string): boolean => {
  return userLocations.some(userLocation => userLocation.id === id && !userLocation.deleted_at);
};

export const isUserLocationExistsByUserAndLocation = (userId: string, locationId: string): boolean => {
  return userLocations.some(userLocation => 
    userLocation.user_id === userId && 
    userLocation.location_id === locationId && 
    !userLocation.deleted_at
  );
};

export const hasUserLocationsByUser = (userId: string): boolean => {
  return userLocations.some(userLocation => userLocation.user_id === userId && !userLocation.deleted_at);
};

export const hasUserLocationsByLocation = (locationId: string): boolean => {
  return userLocations.some(userLocation => userLocation.location_id === locationId && !userLocation.deleted_at);
};

export const clearAllUserLocations = (): void => {
  userLocations.length = 0;
};
