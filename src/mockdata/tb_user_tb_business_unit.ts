import { getUuidByName } from "./mapping.uuid";

export interface UserBusinessUnit {
  id: string;
  user_id: string;
  business_unit_id: string;
  role: "admin" | "user";
  is_default: boolean;
  is_active: boolean;
  created_at: string;
  created_by_id: string | null;
  updated_at: string;
  updated_by_id: string | null;
}

export const userBusinessUnits: UserBusinessUnit[] = [
  {
    id: getUuidByName("USER_BUSINESS_UNIT_01"),
    user_id: getUuidByName("USER_01"),
    business_unit_id: getUuidByName("BUSINESS_UNIT_01"),
    role: "admin",
    is_default: true,
    is_active: true,
    created_at: "2025-07-29T01:37:29.005Z",
    created_by_id: null,
    updated_at: "2025-07-29T01:37:29.006Z",
    updated_by_id: null,
  },
  {
    id: getUuidByName("USER_BUSINESS_UNIT_02"),
    user_id: getUuidByName("USER_02"),
    business_unit_id: getUuidByName("BUSINESS_UNIT_01"),
    role: "admin",
    is_default: false,
    is_active: true,
    created_at: "2025-07-29T01:37:29.007Z",
    created_by_id: null,
    updated_at: "2025-07-29T01:37:29.008Z",
    updated_by_id: null,
  },
  {
    id: getUuidByName("USER_BUSINESS_UNIT_03"),
    user_id: getUuidByName("USER_03"),
    business_unit_id: getUuidByName("BUSINESS_UNIT_01"),
    role: "user",
    is_default: false,
    is_active: true,
    created_at: "2025-07-29T01:37:29.008Z",
    created_by_id: null,
    updated_at: "2025-07-29T01:37:29.009Z",
    updated_by_id: null,
  },
  {
    id: getUuidByName("USER_BUSINESS_UNIT_04"),
    user_id: getUuidByName("USER_04"),
    business_unit_id: getUuidByName("BUSINESS_UNIT_01"),
    role: "user",
    is_default: false,
    is_active: true,
    created_at: "2025-07-29T01:37:29.009Z",
    created_by_id: null,
    updated_at: "2025-07-29T01:37:29.009Z",
    updated_by_id: null,
  },
  {
    id: getUuidByName("USER_BUSINESS_UNIT_05"),
    user_id: getUuidByName("USER_05"),
    business_unit_id: getUuidByName("BUSINESS_UNIT_01"),
    role: "user",
    is_default: false,
    is_active: true,
    created_at: "2025-07-29T01:37:29.009Z",
    created_by_id: null,
    updated_at: "2025-07-29T01:37:29.010Z",
    updated_by_id: null,
  },
  {
    id: getUuidByName("USER_BUSINESS_UNIT_06"),
    user_id: getUuidByName("USER_06"),
    business_unit_id: getUuidByName("BUSINESS_UNIT_01"),
    role: "user",
    is_default: false,
    is_active: true,
    created_at: "2025-07-29T01:37:29.010Z",
    created_by_id: null,
    updated_at: "2025-07-29T01:37:29.010Z",
    updated_by_id: null,
  },
  {
    id: getUuidByName("USER_BUSINESS_UNIT_07"),
    user_id: getUuidByName("USER_07"),
    business_unit_id: getUuidByName("BUSINESS_UNIT_01"),
    role: "user",
    is_default: false,
    is_active: true,
    created_at: "2025-07-29T01:37:29.010Z",
    created_by_id: null,
    updated_at: "2025-07-29T01:37:29.011Z",
    updated_by_id: null,
  },
  {
    id: getUuidByName("USER_BUSINESS_UNIT_08"),
    user_id: getUuidByName("USER_01"),
    business_unit_id: getUuidByName("BUSINESS_UNIT_02"),
    role: "admin",
    is_default: false,
    is_active: true,
    created_at: "2025-07-29T01:37:29.011Z",
    created_by_id: null,
    updated_at: "2025-07-29T01:37:29.011Z",
    updated_by_id: null,
  },
  {
    id: getUuidByName("USER_BUSINESS_UNIT_09"),
    user_id: getUuidByName("USER_02"),
    business_unit_id: getUuidByName("BUSINESS_UNIT_02"),
    role: "admin",
    is_default: true,
    is_active: true,
    created_at: "2025-07-29T01:37:29.011Z",
    created_by_id: null,
    updated_at: "2025-07-29T01:37:29.012Z",
    updated_by_id: null,
  },
  {
    id: getUuidByName("USER_BUSINESS_UNIT_10"),
    user_id: getUuidByName("USER_03"),
    business_unit_id: getUuidByName("BUSINESS_UNIT_02"),
    role: "user",
    is_default: true,
    is_active: true,
    created_at: "2025-07-29T01:37:29.012Z",
    created_by_id: null,
    updated_at: "2025-07-29T01:37:29.012Z",
    updated_by_id: null,
  },
];
