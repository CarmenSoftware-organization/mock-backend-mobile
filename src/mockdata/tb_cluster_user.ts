import { getUuidByName } from "./mapping.uuid";

export interface ClusterUser {
  id: string;
  user_id: string;
  cluster_id: string;
  is_active: boolean;
  role: "admin" | "user";
  created_at: string;
  created_by_id: string;
  updated_at: string;
  updated_by_id: string | null;
}

export const clusterUsers: ClusterUser[] = [
  {
    id: getUuidByName("CLUSTER_USER_01"),
    user_id: getUuidByName("USER_01"),
    cluster_id: getUuidByName("CLUSTER_01"),
    is_active: true,
    role: "admin",
    created_at: "2025-07-29T01:37:28.994Z",
    created_by_id: getUuidByName("USER_ADMIN"),
    updated_at: "2025-07-29T01:37:28.995Z",
    updated_by_id: null,
  },
  {
    id: getUuidByName("CLUSTER_USER_02"),
    user_id: getUuidByName("USER_02"),
    cluster_id: getUuidByName("CLUSTER_01"),
    is_active: true,
    role: "user",
    created_at: "2025-07-29T01:37:28.996Z",
    created_by_id: getUuidByName("USER_ADMIN"),
    updated_at: "2025-07-29T01:37:28.997Z",
    updated_by_id: null,
  },
  {
    id: getUuidByName("CLUSTER_USER_03"),
    user_id: getUuidByName("USER_03"),
    cluster_id: getUuidByName("CLUSTER_01"),
    is_active: true,
    role: "admin",
    created_at: "2025-07-29T01:37:28.997Z",
    created_by_id: getUuidByName("USER_ADMIN"),
    updated_at: "2025-07-29T01:37:28.998Z",
    updated_by_id: null,
  },
  {
    id: getUuidByName("CLUSTER_USER_04"),
    user_id: getUuidByName("USER_04"),
    cluster_id: getUuidByName("CLUSTER_01"),
    is_active: true,
    role: "user",
    created_at: "2025-07-29T01:37:28.998Z",
    created_by_id: getUuidByName("USER_ADMIN"),
    updated_at: "2025-07-29T01:37:28.998Z",
    updated_by_id: null,
  },
  {
    id: getUuidByName("CLUSTER_USER_05"),
    user_id: getUuidByName("USER_05"),
    cluster_id: getUuidByName("CLUSTER_01"),
    is_active: true,
    role: "user",
    created_at: "2025-07-29T01:37:28.999Z",
    created_by_id: getUuidByName("USER_ADMIN"),
    updated_at: "2025-07-29T01:37:28.999Z",
    updated_by_id: null,
  },
  {
    id: getUuidByName("CLUSTER_USER_06"),
    user_id: getUuidByName("USER_06"),
    cluster_id: getUuidByName("CLUSTER_01"),
    is_active: true,
    role: "user",
    created_at: "2025-07-29T01:37:28.999Z",
    created_by_id: getUuidByName("USER_ADMIN"),
    updated_at: "2025-07-29T01:37:29.000Z",
    updated_by_id: null,
  },
  {
    id: getUuidByName("CLUSTER_USER_07"),
    user_id: getUuidByName("USER_07"),
    cluster_id: getUuidByName("CLUSTER_01"),
    is_active: true,
    role: "user",
    created_at: "2025-07-29T01:37:29.000Z",
    created_by_id: getUuidByName("USER_ADMIN"),
    updated_at: "2025-07-29T01:37:29.001Z",
    updated_by_id: null,
  },
  {
    id: getUuidByName("CLUSTER_USER_08"),
    user_id: getUuidByName("USER_08"),
    cluster_id: getUuidByName("CLUSTER_01"),
    is_active: true,
    role: "user",
    created_at: "2025-07-29T01:37:29.001Z",
    created_by_id: getUuidByName("USER_ADMIN"),
    updated_at: "2025-07-29T01:37:29.001Z",
    updated_by_id: null,
  },
];
