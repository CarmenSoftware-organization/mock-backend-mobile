import { generateId, getCurrentTimestamp } from "@/libs/utils";

export interface UserProfile {
  id: string;
  user_id: string;
  firstname: string;
  middlename: string;
  lastname: string;
  bio: any;
  created_at: string;
  created_by_id: string | null;
  updated_at: string;
  updated_by_id: string | null;
}

// Sample data
export const userProfiles: UserProfile[] = [
  {
    id: "550e8400-e29b-41d4-a716-446655440001",
    user_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    firstname: "system-admin",
    middlename: "",
    lastname: "system-admin",
    bio: {},
    created_at: "2025-07-29T01:37:27.159Z",
    created_by_id: null,
    updated_at: "2025-07-29T01:37:27.159Z",
    updated_by_id: null
  },
  {
    id: "df030cd8-962d-49ed-9ad6-b75109c12fc0",
    user_id: "1bfdb891-58ee-499c-8115-34a964de8122",
    firstname: "test",
    middlename: "",
    lastname: "test",
    bio: {},
    created_at: "2025-07-29T01:37:27.541Z",
    created_by_id: null,
    updated_at: "2025-07-29T01:37:27.541Z",
    updated_by_id: null
  },
  {
    id: "9cd129f4-ab43-4f5c-a752-1cb78e8cd9b3",
    user_id: "3c5280a7-492e-421d-b739-7447455ce99e",
    firstname: "admin",
    middlename: "",
    lastname: "admin",
    bio: {},
    created_at: "2025-07-29T01:37:27.819Z",
    created_by_id: null,
    updated_at: "2025-07-29T01:37:27.819Z",
    updated_by_id: null
  },
  {
    id: "0494a73a-ba78-41a7-a45f-b9efb49d6f2d",
    user_id: "c7092848-78f7-4cfe-bb6d-095c286a1019",
    firstname: "user1",
    middlename: "",
    lastname: "staff",
    bio: {},
    created_at: "2025-07-29T01:37:28.038Z",
    created_by_id: null,
    updated_at: "2025-07-29T01:37:28.038Z",
    updated_by_id: null
  },
  {
    id: "f0db2292-5ae4-4e73-a379-ed5ef3d3f95c",
    user_id: "d9aef974-0dd1-4acd-93b7-93c8ccc8cfeb",
    firstname: "user2",
    middlename: "",
    lastname: "department-manager",
    bio: {},
    created_at: "2025-07-29T01:37:28.269Z",
    created_by_id: null,
    updated_at: "2025-07-29T01:37:28.269Z",
    updated_by_id: null
  },
  {
    id: "fd177757-0e4d-44f7-bb4d-57118829be2d",
    user_id: "e88e8da4-ad87-4255-befc-1556d1b66b69",
    firstname: "user3",
    middlename: "",
    lastname: "purchasing-staff",
    bio: {},
    created_at: "2025-07-29T01:37:28.504Z",
    created_by_id: null,
    updated_at: "2025-07-29T01:37:28.504Z",
    updated_by_id: null
  },
  {
    id: "f685cca4-899f-49e6-9753-cfe2180f2f11",
    user_id: "57c0721a-4afd-4e8f-b118-f0480c537215",
    firstname: "user4",
    middlename: "",
    lastname: "finance-manager",
    bio: {},
    created_at: "2025-07-29T01:37:28.757Z",
    created_by_id: null,
    updated_at: "2025-07-29T01:37:28.757Z",
    updated_by_id: null
  },
  {
    id: "683df8ab-59f2-49d9-af58-637630d9955f",
    user_id: "59c4ce87-84e5-48e5-b246-7d0f6d2c5594",
    firstname: "user5",
    middlename: "",
    lastname: "general-manager",
    bio: {},
    created_at: "2025-07-29T01:37:28.991Z",
    created_by_id: null,
    updated_at: "2025-07-29T01:37:28.991Z",
    updated_by_id: null
  },
  {
    id: "d3ba9c08-162f-4e81-8337-75d3d56f6aff",
    user_id: "d3ba9c08-162f-4e81-8337-75d3d56f6aff",
    firstname: "tt",
    middlename: "",
    lastname: "",
    bio: {},
    created_at: "2025-07-30T20:00:19.073Z",
    created_by_id: null,
    updated_at: "2025-07-30T20:00:19.073Z",
    updated_by_id: null
  }
];

// CREATE - สร้าง UserProfile ใหม่
export const createUserProfile = (data: Omit<UserProfile, 'id' | 'created_at' | 'created_by_id' | 'updated_at' | 'updated_by_id'>): UserProfile => {
  const newUserProfile: UserProfile = {
    ...data,
    id: generateId(),
    created_at: getCurrentTimestamp(),
    created_by_id: 'system',
    updated_at: getCurrentTimestamp(),
    updated_by_id: 'system'
  };
  
  userProfiles.push(newUserProfile);
  return newUserProfile;
};

// READ - อ่านข้อมูล UserProfile
export const getAllUserProfiles = (): UserProfile[] => {
  return [...userProfiles];
};

export const getUserProfileById = (id: string): UserProfile | null => {
  const profile = userProfiles.find(p => p.id === id);
  return profile || null;
};

export const getUserProfileByUserId = (userId: string): UserProfile | null => {
  const profile = userProfiles.find(p => p.user_id === userId);
  return profile || null;
};

export const getUserProfilesByFirstName = (firstName: string): UserProfile[] => {
  return userProfiles.filter(profile => 
    profile.firstname.toLowerCase().includes(firstName.toLowerCase())
  );
};

export const getUserProfilesByLastName = (lastName: string): UserProfile[] => {
  return userProfiles.filter(profile => 
    profile.lastname.toLowerCase().includes(lastName.toLowerCase())
  );
};

export const getUserProfilesByCreator = (createdById: string): UserProfile[] => {
  return userProfiles.filter(profile => profile.created_by_id === createdById);
};

export const getUserProfilesByDateRange = (startDate: string, endDate: string): UserProfile[] => {
  return userProfiles.filter(profile => {
    const createdDate = new Date(profile.created_at);
    const start = new Date(startDate);
    const end = new Date(endDate);
    return createdDate >= start && createdDate <= end;
  });
};

export const getUserProfilesWithBio = (): UserProfile[] => {
  return userProfiles.filter(profile => profile.bio && Object.keys(profile.bio).length > 0);
};

export const getUserProfilesWithoutBio = (): UserProfile[] => {
  return userProfiles.filter(profile => !profile.bio || Object.keys(profile.bio).length === 0);
};

// UPDATE - อัปเดต UserProfile
export const updateUserProfile = (id: string, data: Partial<Omit<UserProfile, 'id' | 'created_at' | 'created_by_id'>>): UserProfile | null => {
  const index = userProfiles.findIndex(profile => profile.id === id);
  
  if (index === -1) {
    return null;
  }
  
  userProfiles[index] = {
    ...userProfiles[index],
    ...data,
    updated_at: getCurrentTimestamp(),
    updated_by_id: 'system'
  };
  
  return userProfiles[index];
};

// UPDATE - อัปเดต UserProfile firstname
export const updateUserProfileFirstname = (id: string, firstname: string): UserProfile | null => {
  return updateUserProfile(id, { firstname });
};

// UPDATE - อัปเดต UserProfile middlename
export const updateUserProfileMiddlename = (id: string, middlename: string): UserProfile | null => {
  return updateUserProfile(id, { middlename });
};

// UPDATE - อัปเดต UserProfile lastname
export const updateUserProfileLastname = (id: string, lastname: string): UserProfile | null => {
  return updateUserProfile(id, { lastname });
};

// UPDATE - อัปเดต UserProfile bio
export const updateUserProfileBio = (id: string, bio: any): UserProfile | null => {
  return updateUserProfile(id, { bio });
};

// DELETE - Hard delete UserProfile
export const hardDeleteUserProfile = (id: string): boolean => {
  const index = userProfiles.findIndex(profile => profile.id === id);
  
  if (index === -1) {
    return false;
  }
  
  userProfiles.splice(index, 1);
  return true;
};

// DELETE - ลบ UserProfile ตาม user_id
export const deleteUserProfileByUserId = (userId: string): boolean => {
  const profile = getUserProfileByUserId(userId);
  if (profile) {
    return hardDeleteUserProfile(profile.id);
  }
  return false;
};

// ADVANCED SEARCH - ค้นหา UserProfile แบบขั้นสูง
export const searchUserProfiles = (criteria: {
  firstname?: string;
  lastname?: string;
  user_id?: string;
  created_by_id?: string;
  has_bio?: boolean;
  start_date?: string;
  end_date?: string;
}): UserProfile[] => {
  return userProfiles.filter(profile => {
    if (criteria.firstname && !profile.firstname.toLowerCase().includes(criteria.firstname.toLowerCase())) {
      return false;
    }
    
    if (criteria.lastname && !profile.lastname.toLowerCase().includes(criteria.lastname.toLowerCase())) {
      return false;
    }
    
    if (criteria.user_id && profile.user_id !== criteria.user_id) {
      return false;
    }
    
    if (criteria.created_by_id && profile.created_by_id !== criteria.created_by_id) {
      return false;
    }
    
    if (criteria.has_bio !== undefined) {
      const hasBio = profile.bio && Object.keys(profile.bio).length > 0;
      if (hasBio !== criteria.has_bio) {
        return false;
      }
    }
    
    if (criteria.start_date || criteria.end_date) {
      const createdDate = new Date(profile.created_at);
      if (criteria.start_date && createdDate < new Date(criteria.start_date)) return false;
      if (criteria.end_date && createdDate > new Date(criteria.end_date)) return false;
    }
    
    return true;
  });
};

// UTILITY FUNCTIONS - ฟังก์ชันเสริม
export const getUserProfileCount = (): number => {
  return userProfiles.length;
};

export const getUserProfileCountByCreator = (createdById: string): number => {
  return userProfiles.filter(profile => profile.created_by_id === createdById).length;
};

export const isUserProfileExists = (id: string): boolean => {
  return userProfiles.some(profile => profile.id === id);
};

export const isUserProfileExistsByUserId = (userId: string): boolean => {
  return userProfiles.some(profile => profile.user_id === userId);
};

export const hasUserProfilesWithBio = (): boolean => {
  return userProfiles.some(profile => profile.bio && Object.keys(profile.bio).length > 0);
};

export const clearAllUserProfiles = (): void => {
  userProfiles.length = 0;
};
