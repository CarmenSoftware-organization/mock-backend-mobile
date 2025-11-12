import { generateId, getCurrentTimestamp } from "@/libs/utils";
import { getUuidByName } from "./mapping.uuid";

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
  telephone?: string;
}

// Sample data
export const userProfiles: UserProfile[] = [
  {
    id: getUuidByName("USER_PROFILE_01"),
    user_id: getUuidByName("USER_SYSTEM_ADMIN"),
    firstname: "system-admin",
    middlename: "",
    lastname: "system-admin",
    bio: {},
    telephone: "0812345678",
    created_at: "2025-07-29T01:37:27.159Z",
    created_by_id: null,
    updated_at: "2025-07-29T01:37:27.159Z",
    updated_by_id: null,
  },
  {
    id: getUuidByName("USER_PROFILE_02"),
    user_id: getUuidByName("USER_ADMIN"),
    firstname: "admin",
    middlename: "",
    lastname: "admin",
    telephone: "0812345678",
    bio: {},
    created_at: "2025-07-29T01:37:27.819Z",
    created_by_id: null,
    updated_at: "2025-07-29T01:37:27.819Z",
    updated_by_id: null,
  },
  {
    id: getUuidByName("USER_PROFILE_03"),
    user_id: getUuidByName("USER_01"),
    firstname: "user1",
    middlename: "",
    lastname: "staff",
    telephone: "0812345678",
    bio: {},
    created_at: "2025-07-29T01:37:28.038Z",
    created_by_id: null,
    updated_at: "2025-07-29T01:37:28.038Z",
    updated_by_id: null,
  },
  {
    id: getUuidByName("USER_PROFILE_04"),
    user_id: getUuidByName("USER_02"),
    firstname: "user2",
    middlename: "",
    lastname: "department-manager",
    telephone: "0812345678",
    bio: {},
    created_at: "2025-07-29T01:37:28.269Z",
    created_by_id: null,
    updated_at: "2025-07-29T01:37:28.269Z",
    updated_by_id: null,
  },
  {
    id: getUuidByName("USER_PROFILE_05"),
    user_id: getUuidByName("USER_03"),
    firstname: "user3",
    middlename: "",
    lastname: "purchasing-staff",
    telephone: "0812345678",
    bio: {},
    created_at: "2025-07-29T01:37:28.504Z",
    created_by_id: null,
    updated_at: "2025-07-29T01:37:28.504Z",
    updated_by_id: null,
  },
  {
    id: getUuidByName("USER_PROFILE_06"),
    user_id: getUuidByName("USER_04"),
    firstname: "user4",
    middlename: "",
    lastname: "finance-manager",
    telephone: "0812345678",
    bio: {},
    created_at: "2025-07-29T01:37:28.757Z",
    created_by_id: null,
    updated_at: "2025-07-29T01:37:28.757Z",
    updated_by_id: null,
  },
  {
    id: getUuidByName("USER_PROFILE_07"),
    user_id: getUuidByName("USER_05"),
    firstname: "user5",
    middlename: "",
    lastname: "general-manager",
    telephone: "0812345678",
    bio: {},
    created_at: "2025-07-29T01:37:28.991Z",
    created_by_id: null,
    updated_at: "2025-07-29T01:37:28.991Z",
    updated_by_id: null,
  },
  {
    id: getUuidByName("USER_PROFILE_08"),
    user_id: getUuidByName("USER_06"),
    firstname: "user6",
    middlename: "",
    lastname: "",
    telephone: "0812345678",
    bio: {},
    created_at: "2025-07-30T20:00:19.073Z",
    created_by_id: null,
    updated_at: "2025-07-30T20:00:19.073Z",
    updated_by_id: null,
  },
  {
    id: getUuidByName("USER_PROFILE_09"),
    user_id: getUuidByName("USER_07"),
    firstname: "test",
    middlename: "",
    lastname: "test",
    telephone: "0812345678",
    bio: {},
    created_at: "2025-07-29T01:37:27.541Z",
    created_by_id: null,
    updated_at: "2025-07-29T01:37:27.541Z",
    updated_by_id: null,
  },
];

// CREATE - สร้าง UserProfile ใหม่
export const createUserProfile = (
  data: Omit<
    UserProfile,
    "id" | "created_at" | "created_by_id" | "updated_at" | "updated_by_id"
  >
): UserProfile => {
  const newUserProfile: UserProfile = {
    ...data,
    id: generateId(),
    created_at: getCurrentTimestamp(),
    created_by_id: "system",
    updated_at: getCurrentTimestamp(),
    updated_by_id: "system",
  };

  userProfiles.push(newUserProfile);
  return newUserProfile;
};

// READ - อ่านข้อมูล UserProfile
export const getAllUserProfiles = (): UserProfile[] => {
  return [...userProfiles];
};

export const getUserProfileById = (id: string): UserProfile | null => {
  const profile = userProfiles.find((p) => p.id === id);
  return profile || null;
};

export const getUserProfileByUserId = (userId: string): UserProfile | null => {
  const profile = userProfiles.find((p) => p.user_id === userId);
  return profile || null;
};

export const getUserProfilesByFirstName = (
  firstName: string
): UserProfile[] => {
  return userProfiles.filter((profile) =>
    profile.firstname.toLowerCase().includes(firstName.toLowerCase())
  );
};

export const getUserProfilesByLastName = (lastName: string): UserProfile[] => {
  return userProfiles.filter((profile) =>
    profile.lastname.toLowerCase().includes(lastName.toLowerCase())
  );
};

export const getUserProfilesByCreator = (
  createdById: string
): UserProfile[] => {
  return userProfiles.filter(
    (profile) => profile.created_by_id === createdById
  );
};

export const getUserProfilesByDateRange = (
  startDate: string,
  endDate: string
): UserProfile[] => {
  return userProfiles.filter((profile) => {
    const createdDate = new Date(profile.created_at);
    const start = new Date(startDate);
    const end = new Date(endDate);
    return createdDate >= start && createdDate <= end;
  });
};

export const getUserProfilesWithBio = (): UserProfile[] => {
  return userProfiles.filter(
    (profile) => profile.bio && Object.keys(profile.bio).length > 0
  );
};

export const getUserProfilesWithoutBio = (): UserProfile[] => {
  return userProfiles.filter(
    (profile) => !profile.bio || Object.keys(profile.bio).length === 0
  );
};

// UPDATE - อัปเดต UserProfile
export const updateUserProfile = (
  id: string,
  data: Partial<Omit<UserProfile, "id" | "created_at" | "created_by_id">>
): UserProfile | null => {
  const index = userProfiles.findIndex((profile) => profile.id === id);

  if (index === -1) {
    return null;
  }

  userProfiles[index] = {
    ...userProfiles[index],
    ...data,
    updated_at: getCurrentTimestamp(),
    updated_by_id: "system",
  };

  return userProfiles[index];
};

// UPDATE - อัปเดต UserProfile firstname
export const updateUserProfileFirstname = (
  id: string,
  firstname: string
): UserProfile | null => {
  return updateUserProfile(id, { firstname });
};

// UPDATE - อัปเดต UserProfile middlename
export const updateUserProfileMiddlename = (
  id: string,
  middlename: string
): UserProfile | null => {
  return updateUserProfile(id, { middlename });
};

// UPDATE - อัปเดต UserProfile lastname
export const updateUserProfileLastname = (
  id: string,
  lastname: string
): UserProfile | null => {
  return updateUserProfile(id, { lastname });
};

// UPDATE - อัปเดต UserProfile bio
export const updateUserProfileBio = (
  id: string,
  bio: any
): UserProfile | null => {
  return updateUserProfile(id, { bio });
};

// DELETE - Hard delete UserProfile
export const hardDeleteUserProfile = (id: string): boolean => {
  const index = userProfiles.findIndex((profile) => profile.id === id);

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
  return userProfiles.filter((profile) => {
    if (
      criteria.firstname &&
      !profile.firstname
        .toLowerCase()
        .includes(criteria.firstname.toLowerCase())
    ) {
      return false;
    }

    if (
      criteria.lastname &&
      !profile.lastname.toLowerCase().includes(criteria.lastname.toLowerCase())
    ) {
      return false;
    }

    if (criteria.user_id && profile.user_id !== criteria.user_id) {
      return false;
    }

    if (
      criteria.created_by_id &&
      profile.created_by_id !== criteria.created_by_id
    ) {
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
      if (criteria.start_date && createdDate < new Date(criteria.start_date))
        return false;
      if (criteria.end_date && createdDate > new Date(criteria.end_date))
        return false;
    }

    return true;
  });
};

// UTILITY FUNCTIONS - ฟังก์ชันเสริม
export const getUserProfileCount = (): number => {
  return userProfiles.length;
};

export const getUserProfileCountByCreator = (createdById: string): number => {
  return userProfiles.filter((profile) => profile.created_by_id === createdById)
    .length;
};

export const isUserProfileExists = (id: string): boolean => {
  return userProfiles.some((profile) => profile.id === id);
};

export const isUserProfileExistsByUserId = (userId: string): boolean => {
  return userProfiles.some((profile) => profile.user_id === userId);
};

export const hasUserProfilesWithBio = (): boolean => {
  return userProfiles.some(
    (profile) => profile.bio && Object.keys(profile.bio).length > 0
  );
};

export const clearAllUserProfiles = (): void => {
  userProfiles.length = 0;
};
