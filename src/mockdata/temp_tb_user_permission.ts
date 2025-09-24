import { generateId, getCurrentTimestamp } from "@/libs/utils";
import { tbPermission, tbUser } from "./index";
import { mock } from "./mock";
import { getUuidByName } from "./mapping.uuid";

export interface UserPermission {
  id: string;
  user_id: string;
  permission_id: string;
  created_at: string;
  created_by_id: string | null;
  updated_at: string;
  updated_by_id: string | null;
  deleted_at: string | null;
  deleted_by_id: string | null;
}

const mock_users = mock.users;


const userPermissions_user1: UserPermission[] = [
  {
    id: getUuidByName("USER_PERMISSION_01"),
    user_id: getUuidByName("USER_01"),
    permission_id: tbPermission.permissions[0].id,
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: getUuidByName("USER_SYSTEM_ADMIN"),
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("USER_PERMISSION_02"),
    user_id: getUuidByName("USER_01"),
    permission_id: tbPermission.permissions[1].id,
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: getUuidByName("USER_SYSTEM_ADMIN"),
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("USER_PERMISSION_03"),
    user_id: getUuidByName("USER_01"),
    permission_id: tbPermission.permissions[2].id,
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: getUuidByName("USER_SYSTEM_ADMIN"),
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("USER_PERMISSION_04"),
    user_id: getUuidByName("USER_01"),
    permission_id: tbPermission.permissions[3].id,
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: getUuidByName("USER_SYSTEM_ADMIN"),
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("USER_PERMISSION_05"),
    user_id: getUuidByName("USER_01"),
    permission_id: tbPermission.permissions[4].id,
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: getUuidByName("USER_SYSTEM_ADMIN"),
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("USER_PERMISSION_06"),
    user_id: getUuidByName("USER_01"),
    permission_id: tbPermission.permissions[5]?.id || tbPermission.permissions[0]?.id || "",
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: getUuidByName("USER_SYSTEM_ADMIN"),
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("USER_PERMISSION_07"),
    user_id: getUuidByName("USER_01"),
    permission_id: tbPermission.permissions[6].id,
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: getUuidByName("USER_SYSTEM_ADMIN"),
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("USER_PERMISSION_09"),
    user_id: getUuidByName("USER_01"),
    permission_id: tbPermission.permissions[8].id,
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: getUuidByName("USER_SYSTEM_ADMIN"),
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("USER_PERMISSION_10"),
    user_id: getUuidByName("USER_01"),
    permission_id: tbPermission.permissions[9].id,
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: getUuidByName("USER_SYSTEM_ADMIN"),
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
];

const userPermissions_user2: UserPermission[] = [
  {
    id: getUuidByName("USER_PERMISSION_11"),
    user_id: getUuidByName("USER_02"),
    permission_id: tbPermission.permissions[0].id,
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: getUuidByName("USER_SYSTEM_ADMIN"),
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("USER_PERMISSION_12"),
      user_id: getUuidByName("USER_02"),
    permission_id: tbPermission.permissions[1].id,
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: getUuidByName("USER_SYSTEM_ADMIN"),
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("USER_PERMISSION_13"),
    user_id: getUuidByName("USER_02"),
    permission_id: tbPermission.permissions[2].id,
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: getUuidByName("USER_SYSTEM_ADMIN"),
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("USER_PERMISSION_14"),
    user_id: getUuidByName("USER_02"),
    permission_id: tbPermission.permissions[3].id,
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: getUuidByName("USER_SYSTEM_ADMIN"),
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("USER_PERMISSION_15"),
    user_id: getUuidByName("USER_02"),
    permission_id: tbPermission.permissions[4].id,
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: getUuidByName("USER_SYSTEM_ADMIN"),
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("USER_PERMISSION_16"),
    user_id: getUuidByName("USER_02"),
    permission_id: tbPermission.permissions[5]?.id || tbPermission.permissions[0]?.id || "",
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: getUuidByName("USER_SYSTEM_ADMIN"),
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("USER_PERMISSION_17"),
    user_id: getUuidByName("USER_02"),
    permission_id: tbPermission.permissions[6].id,
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: getUuidByName("USER_SYSTEM_ADMIN"),
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("USER_PERMISSION_18"),
    user_id: getUuidByName("USER_02"),
    permission_id: tbPermission.permissions[8].id,
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: getUuidByName("USER_SYSTEM_ADMIN"),
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("USER_PERMISSION_19"),
    user_id: getUuidByName("USER_02"),
    permission_id: tbPermission.permissions[9].id,
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: getUuidByName("USER_SYSTEM_ADMIN"),
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
];

const userPermissions_user3: UserPermission[] = [
  {
    id: getUuidByName("USER_PERMISSION_20"),
    user_id: getUuidByName("USER_03"),
    permission_id: tbPermission.permissions[0].id,
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: getUuidByName("USER_SYSTEM_ADMIN"),
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("USER_PERMISSION_21"),
    user_id: getUuidByName("USER_03"),
    permission_id: tbPermission.permissions[1].id,
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: getUuidByName("USER_SYSTEM_ADMIN"),
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("USER_PERMISSION_22"),
    user_id: getUuidByName("USER_03"),
    permission_id: tbPermission.permissions[2].id,
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: getUuidByName("USER_SYSTEM_ADMIN"),
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("USER_PERMISSION_23"),
    user_id: getUuidByName("USER_03"),
    permission_id: tbPermission.permissions[3].id,
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: getUuidByName("USER_SYSTEM_ADMIN"),
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("USER_PERMISSION_24"),
    user_id: getUuidByName("USER_03"),
    permission_id: tbPermission.permissions[4].id,
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: getUuidByName("USER_SYSTEM_ADMIN"),
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("USER_PERMISSION_25"),
    user_id: getUuidByName("USER_03"),
    permission_id: tbPermission.permissions[5]?.id || tbPermission.permissions[0]?.id || "",
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: getUuidByName("USER_SYSTEM_ADMIN"),
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("USER_PERMISSION_26"),
    user_id: getUuidByName("USER_03"),
    permission_id: tbPermission.permissions[6].id,
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: getUuidByName("USER_SYSTEM_ADMIN"),
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("USER_PERMISSION_27"),
    user_id: getUuidByName("USER_03"),
    permission_id: tbPermission.permissions[8].id,
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: getUuidByName("USER_SYSTEM_ADMIN"),
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("USER_PERMISSION_28"),
    user_id: getUuidByName("USER_03"),
    permission_id: tbPermission.permissions[9].id,
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: getUuidByName("USER_SYSTEM_ADMIN"),
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
];

const userPermissions_user4: UserPermission[] = [
  {
    id: getUuidByName("USER_PERMISSION_29"),
    user_id: getUuidByName("USER_04"),
    permission_id: tbPermission.permissions[0].id,
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: getUuidByName("USER_SYSTEM_ADMIN"),
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("USER_PERMISSION_30"),
    user_id: getUuidByName("USER_04"),
    permission_id: tbPermission.permissions[1].id,
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: getUuidByName("USER_SYSTEM_ADMIN"),
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("USER_PERMISSION_31"),
    user_id: getUuidByName("USER_04"),
    permission_id: tbPermission.permissions[2].id,
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: getUuidByName("USER_SYSTEM_ADMIN"),
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("USER_PERMISSION_32"),
    user_id: getUuidByName("USER_04"),
    permission_id: tbPermission.permissions[3].id,
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: getUuidByName("USER_SYSTEM_ADMIN"),
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("USER_PERMISSION_33"),
    user_id: getUuidByName("USER_04"),
    permission_id: tbPermission.permissions[4].id,
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: getUuidByName("USER_SYSTEM_ADMIN"),
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("USER_PERMISSION_34"),
    user_id: getUuidByName("USER_04"),
    permission_id: tbPermission.permissions[5]?.id || tbPermission.permissions[0]?.id || "",
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: getUuidByName("USER_SYSTEM_ADMIN"),
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("USER_PERMISSION_35"),
    user_id: getUuidByName("USER_04"),
    permission_id: tbPermission.permissions[6].id,
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: getUuidByName("USER_SYSTEM_ADMIN"),
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("USER_PERMISSION_36"),
    user_id: getUuidByName("USER_04"),
    permission_id: tbPermission.permissions[8].id,
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: getUuidByName("USER_SYSTEM_ADMIN"),
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("USER_PERMISSION_37"),
    user_id: getUuidByName("USER_04"),
    permission_id: tbPermission.permissions[9].id,
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: getUuidByName("USER_SYSTEM_ADMIN"),
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
];

const userPermissions_user5: UserPermission[] = [
  {
    id: getUuidByName("USER_PERMISSION_38"),
    user_id: getUuidByName("USER_05"),
    permission_id: tbPermission.permissions[0].id,
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: getUuidByName("USER_SYSTEM_ADMIN"),
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("USER_PERMISSION_39"),
    user_id: getUuidByName("USER_05"),
    permission_id: tbPermission.permissions[1].id,
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: getUuidByName("USER_SYSTEM_ADMIN"),
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("USER_PERMISSION_40"),
    user_id: getUuidByName("USER_05"),
    permission_id: tbPermission.permissions[2].id,
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: getUuidByName("USER_SYSTEM_ADMIN"),
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("USER_PERMISSION_41"),
    user_id: getUuidByName("USER_05"),
    permission_id: tbPermission.permissions[3].id,
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: getUuidByName("USER_SYSTEM_ADMIN"),
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("USER_PERMISSION_42"),
    user_id: getUuidByName("USER_05"),
    permission_id: tbPermission.permissions[4].id,
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: getUuidByName("USER_SYSTEM_ADMIN"),
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("USER_PERMISSION_43"),
    user_id: getUuidByName("USER_05"),
    permission_id: tbPermission.permissions[5]?.id || tbPermission.permissions[0]?.id || "",
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: getUuidByName("USER_SYSTEM_ADMIN"),
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("USER_PERMISSION_44"),
    user_id: getUuidByName("USER_05"),
    permission_id: tbPermission.permissions[6].id,
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: getUuidByName("USER_SYSTEM_ADMIN"),
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("USER_PERMISSION_45"),
    user_id: getUuidByName("USER_05"),
    permission_id: tbPermission.permissions[8].id,
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: getUuidByName("USER_SYSTEM_ADMIN"),
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("USER_PERMISSION_46"),
    user_id: getUuidByName("USER_05"),
    permission_id: tbPermission.permissions[9].id,
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: getUuidByName("USER_SYSTEM_ADMIN"),
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
];

const userPermissions_user6: UserPermission[] = [
  {
    id: getUuidByName("USER_PERMISSION_47"),
    user_id: getUuidByName("USER_06"),
    permission_id: tbPermission.permissions[0].id,
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: getUuidByName("USER_SYSTEM_ADMIN"),
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("USER_PERMISSION_48"),
    user_id: getUuidByName("USER_06"),
    permission_id: tbPermission.permissions[1].id,
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: getUuidByName("USER_SYSTEM_ADMIN"),
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("USER_PERMISSION_49"),
    user_id: getUuidByName("USER_06"),
    permission_id: tbPermission.permissions[2].id,
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: getUuidByName("USER_SYSTEM_ADMIN"),
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("USER_PERMISSION_50"),
    user_id: getUuidByName("USER_06"),
    permission_id: tbPermission.permissions[3].id,
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: getUuidByName("USER_SYSTEM_ADMIN"),
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("USER_PERMISSION_51"),
    user_id: getUuidByName("USER_06"),
    permission_id: tbPermission.permissions[4].id,
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: getUuidByName("USER_SYSTEM_ADMIN"),
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("USER_PERMISSION_52"),
    user_id: getUuidByName("USER_06"),
    permission_id: tbPermission.permissions[5]?.id || tbPermission.permissions[0]?.id || "",
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: getUuidByName("USER_SYSTEM_ADMIN"),
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("USER_PERMISSION_53"),
    user_id: getUuidByName("USER_06"),
    permission_id: tbPermission.permissions[6].id,
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: getUuidByName("USER_SYSTEM_ADMIN"),
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("USER_PERMISSION_54"),
    user_id: getUuidByName("USER_06"),
    permission_id: tbPermission.permissions[8].id,
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: getUuidByName("USER_SYSTEM_ADMIN"),
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("USER_PERMISSION_55"),
    user_id: getUuidByName("USER_06"),
    permission_id: tbPermission.permissions[9].id,
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: getUuidByName("USER_SYSTEM_ADMIN"),
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
];

export const userPermissions = [
  ...userPermissions_user1,
  ...userPermissions_user2,
  ...userPermissions_user3,
  ...userPermissions_user4,
  ...userPermissions_user5,
  ...userPermissions_user6,
];

// ฟังก์ชัน CRUD สำหรับ userPermissions mock data

let userPermissionsStore: UserPermission[] = [...userPermissions];

export const getUserPermissions = (): UserPermission[] => {
  return [...userPermissionsStore];
};

export const getUserPermissionById = (
  id: string
): UserPermission | undefined => {
  return userPermissionsStore.find((permission) => permission.id === id);
};

export const getUserPermissionsByUserId = (
  user_id: string
): UserPermission[] => {
  return userPermissionsStore.filter((permission) => permission.user_id === user_id);
};

export const getUserPermissionsByPermissionId = (
  permission_id: string
): UserPermission[] => {
  return userPermissionsStore.filter((permission) => permission.permission_id === permission_id);
};

export const createUserPermission = (
  data: Omit<
    UserPermission,
    "id" | "created_at" | "updated_at" | "deleted_at" | "deleted_by_id"
  >
): UserPermission => {
  const newPermission: UserPermission = {
    ...data,
    id: generateId(),
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    deleted_at: null,
    deleted_by_id: null,
  };
  userPermissionsStore = [...userPermissionsStore, newPermission];
  return newPermission;
};

export const updateUserPermission = (
  id: string,
  data: Partial<
    Omit<
      UserPermission,
      "id" | "created_at" | "created_by_id" | "deleted_at" | "deleted_by_id"
    >
  > & { updated_by_id: string }
): UserPermission | undefined => {
  const index = userPermissionsStore.findIndex(
    (permission) => permission.id === id
  );
  if (index === -1) return undefined;
  const updatedPermission: UserPermission = {
    ...userPermissionsStore[index],
    ...data,
    updated_at: new Date().toISOString(),
    updated_by_id: data.updated_by_id,
  };
  userPermissionsStore = [
    ...userPermissionsStore.slice(0, index),
    updatedPermission,
    ...userPermissionsStore.slice(index + 1),
  ];
  return updatedPermission;
};

export const deleteUserPermission = (
  id: string,
  deleted_by_id: string
): UserPermission | undefined => {
  const index = userPermissionsStore.findIndex(
    (permission) => permission.id === id
  );
  if (index === -1) return undefined;
  const deletedPermission: UserPermission = {
    ...userPermissionsStore[index],
    deleted_at: new Date().toISOString(),
    deleted_by_id,
  };
  userPermissionsStore = [
    ...userPermissionsStore.slice(0, index),
    deletedPermission,
    ...userPermissionsStore.slice(index + 1),
  ];
  return deletedPermission;
};

