import { generateId, getCurrentTimestamp } from "@/libs/utils";
import { tbPermission, tbUser } from "./index";

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

const user1 = tbUser.users.find((user) => user.username === "user1@test.com");
const user2 = tbUser.users.find((user) => user.username === "user2@test.com");
const user3 = tbUser.users.find((user) => user.username === "user3@test.com");
const user4 = tbUser.users.find((user) => user.username === "user4@test.com");
const user5 = tbUser.users.find((user) => user.username === "user5@test.com");
const user6 = tbUser.users.find((user) => user.username === "user6@test.com");

const userPermissions_user1: UserPermission[] = [
  {
    id: "550e8400-e29b-41d4-a716-446655440001",
    user_id: user1?.id || "",
    permission_id: tbPermission.permissions[0].id,
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440002",
    user_id: user1?.id || "",
    permission_id: tbPermission.permissions[1].id,
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440003",
    user_id: user1?.id || "",
    permission_id: tbPermission.permissions[2].id,
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440004",
    user_id: user1?.id || "",
    permission_id: tbPermission.permissions[3].id,
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440005",
    user_id: user1?.id || "",
    permission_id: tbPermission.permissions[4].id,
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440006",
    user_id: user1?.id || "",
    permission_id: tbPermission.permissions[5].id,
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440007",
    user_id: user1?.id || "",
    permission_id: tbPermission.permissions[6].id,
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440009",
    user_id: user1?.id || "",
    permission_id: tbPermission.permissions[8].id,
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440010",
    user_id: user1?.id || "",
    permission_id: tbPermission.permissions[9].id,
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
];

const userPermissions_user2: UserPermission[] = [
  {
    id: "550e8400-e29b-41d4-a716-446655440001",
    user_id: user2?.id || "",
    permission_id: tbPermission.permissions[0].id,
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440002",
    user_id: user2?.id || "",
    permission_id: tbPermission.permissions[1].id,
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440003",
    user_id: user2?.id || "",
    permission_id: tbPermission.permissions[2].id,
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440004",
    user_id: user2?.id || "",
    permission_id: tbPermission.permissions[3].id,
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440005",
    user_id: user2?.id || "",
    permission_id: tbPermission.permissions[4].id,
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440006",
    user_id: user2?.id || "",
    permission_id: tbPermission.permissions[5].id,
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440007",
    user_id: user2?.id || "",
    permission_id: tbPermission.permissions[6].id,
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440009",
    user_id: user2?.id || "",
    permission_id: tbPermission.permissions[8].id,
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440010",
    user_id: user2?.id || "",
    permission_id: tbPermission.permissions[9].id,
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
];

const userPermissions_user3: UserPermission[] = [
  {
    id: "550e8400-e29b-41d4-a716-446655440001",
    user_id: user3?.id || "",
    permission_id: tbPermission.permissions[0].id,
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440002",
    user_id: user3?.id || "",
    permission_id: tbPermission.permissions[1].id,
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440003",
    user_id: user3?.id || "",
    permission_id: tbPermission.permissions[2].id,
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440004",
    user_id: user3?.id || "",
    permission_id: tbPermission.permissions[3].id,
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440005",
    user_id: user3?.id || "",
    permission_id: tbPermission.permissions[4].id,
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440006",
    user_id: user3?.id || "",
    permission_id: tbPermission.permissions[5].id,
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440007",
    user_id: user3?.id || "",
    permission_id: tbPermission.permissions[6].id,
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440009",
    user_id: user3?.id || "",
    permission_id: tbPermission.permissions[8].id,
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440010",
    user_id: user3?.id || "",
    permission_id: tbPermission.permissions[9].id,
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
];

const userPermissions_user4: UserPermission[] = [
  {
    id: "550e8400-e29b-41d4-a716-446655440001",
    user_id: user4?.id || "",
    permission_id: tbPermission.permissions[0].id,
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440002",
    user_id: user4?.id || "",
    permission_id: tbPermission.permissions[1].id,
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440003",
    user_id: user4?.id || "",
    permission_id: tbPermission.permissions[2].id,
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440004",
    user_id: user4?.id || "",
    permission_id: tbPermission.permissions[3].id,
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440005",
    user_id: user4?.id || "",
    permission_id: tbPermission.permissions[4].id,
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440006",
    user_id: user4?.id || "",
    permission_id: tbPermission.permissions[5].id,
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440007",
    user_id: user4?.id || "",
    permission_id: tbPermission.permissions[6].id,
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440009",
    user_id: user4?.id || "",
    permission_id: tbPermission.permissions[8].id,
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440010",
    user_id: user4?.id || "",
    permission_id: tbPermission.permissions[9].id,
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
];

const userPermissions_user5: UserPermission[] = [
  {
    id: "550e8400-e29b-41d4-a716-446655440001",
    user_id: user5?.id || "",
    permission_id: tbPermission.permissions[0].id,
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440002",
    user_id: user5?.id || "",
    permission_id: tbPermission.permissions[1].id,
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440003",
    user_id: user5?.id || "",
    permission_id: tbPermission.permissions[2].id,
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440004",
    user_id: user5?.id || "",
    permission_id: tbPermission.permissions[3].id,
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440005",
    user_id: user5?.id || "",
    permission_id: tbPermission.permissions[4].id,
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440006",
    user_id: user5?.id || "",
    permission_id: tbPermission.permissions[5].id,
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440007",
    user_id: user5?.id || "",
    permission_id: tbPermission.permissions[6].id,
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440009",
    user_id: user5?.id || "",
    permission_id: tbPermission.permissions[8].id,
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440010",
    user_id: user5?.id || "",
    permission_id: tbPermission.permissions[9].id,
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
];

const userPermissions_user6: UserPermission[] = [
  {
    id: "550e8400-e29b-41d4-a716-446655440001",
    user_id: user6?.id || "",
    permission_id: tbPermission.permissions[0].id,
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440002",
    user_id: user6?.id || "",
    permission_id: tbPermission.permissions[1].id,
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440003",
    user_id: user6?.id || "",
    permission_id: tbPermission.permissions[2].id,
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440004",
    user_id: user6?.id || "",
    permission_id: tbPermission.permissions[3].id,
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440005",
    user_id: user6?.id || "",
    permission_id: tbPermission.permissions[4].id,
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440006",
    user_id: user6?.id || "",
    permission_id: tbPermission.permissions[5].id,
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440007",
    user_id: user6?.id || "",
    permission_id: tbPermission.permissions[6].id,
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440009",
    user_id: user6?.id || "",
    permission_id: tbPermission.permissions[8].id,
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440010",
    user_id: user6?.id || "",
    permission_id: tbPermission.permissions[9].id,
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
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

