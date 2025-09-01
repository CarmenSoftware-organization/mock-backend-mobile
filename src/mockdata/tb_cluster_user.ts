export interface ClusterUser {
  id: string;
  user_id: string;
  cluster_id: string;
  is_active: boolean;
  role: 'admin' | 'user';
  created_at: string;
  created_by_id: string;
  updated_at: string;
  updated_by_id: string | null;
}

export const clusterUsers: ClusterUser[] = [
  {
    id: "5a00a37b-e361-4bca-89f0-415fac66fbaa",
    user_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    cluster_id: "75e036ab-19c5-4825-97cf-24581ff2dda3",
    is_active: true,
    role: "admin",
    created_at: "2025-07-29T01:37:28.994Z",
    created_by_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    updated_at: "2025-07-29T01:37:28.995Z",
    updated_by_id: null
  },
  {
    id: "af9afd6b-c008-4297-9b7c-7dca46100ce8",
    user_id: "1bfdb891-58ee-499c-8115-34a964de8122",
    cluster_id: "75e036ab-19c5-4825-97cf-24581ff2dda3",
    is_active: true,
    role: "user",
    created_at: "2025-07-29T01:37:28.996Z",
    created_by_id: "1bfdb891-58ee-499c-8115-34a964de8122",
    updated_at: "2025-07-29T01:37:28.997Z",
    updated_by_id: null
  },
  {
    id: "1e531b18-6617-472e-8dfd-cba6e73a133c",
    user_id: "3c5280a7-492e-421d-b739-7447455ce99e",
    cluster_id: "75e036ab-19c5-4825-97cf-24581ff2dda3",
    is_active: true,
    role: "admin",
    created_at: "2025-07-29T01:37:28.997Z",
    created_by_id: "3c5280a7-492e-421d-b739-7447455ce99e",
    updated_at: "2025-07-29T01:37:28.998Z",
    updated_by_id: null
  },
  {
    id: "4ba9f0b0-3e67-4e38-aa19-1bcae4e81b32",
    user_id: "c7092848-78f7-4cfe-bb6d-095c286a1019",
    cluster_id: "75e036ab-19c5-4825-97cf-24581ff2dda3",
    is_active: true,
    role: "user",
    created_at: "2025-07-29T01:37:28.998Z",
    created_by_id: "3c5280a7-492e-421d-b739-7447455ce99e",
    updated_at: "2025-07-29T01:37:28.998Z",
    updated_by_id: null
  },
  {
    id: "2c309f2d-f7c4-4719-81f9-b7e79d723835",
    user_id: "d9aef974-0dd1-4acd-93b7-93c8ccc8cfeb",
    cluster_id: "75e036ab-19c5-4825-97cf-24581ff2dda3",
    is_active: true,
    role: "user",
    created_at: "2025-07-29T01:37:28.999Z",
    created_by_id: "3c5280a7-492e-421d-b739-7447455ce99e",
    updated_at: "2025-07-29T01:37:28.999Z",
    updated_by_id: null
  },
  {
    id: "eb58c1b7-4592-45c1-8c75-5eaa8c18d437",
    user_id: "e88e8da4-ad87-4255-befc-1556d1b66b69",
    cluster_id: "75e036ab-19c5-4825-97cf-24581ff2dda3",
    is_active: true,
    role: "user",
    created_at: "2025-07-29T01:37:28.999Z",
    created_by_id: "3c5280a7-492e-421d-b739-7447455ce99e",
    updated_at: "2025-07-29T01:37:29.000Z",
    updated_by_id: null
  },
  {
    id: "a5faa395-59f1-41e4-80c9-771d4f24ad9a",
    user_id: "57c0721a-4afd-4e8f-b118-f0480c537215",
    cluster_id: "75e036ab-19c5-4825-97cf-24581ff2dda3",
    is_active: true,
    role: "user",
    created_at: "2025-07-29T01:37:29.000Z",
    created_by_id: "3c5280a7-492e-421d-b739-7447455ce99e",
    updated_at: "2025-07-29T01:37:29.001Z",
    updated_by_id: null
  },
  {
    id: "72fb271f-d065-4d6d-a903-03cf6315765c",
    user_id: "59c4ce87-84e5-48e5-b246-7d0f6d2c5594",
    cluster_id: "75e036ab-19c5-4825-97cf-24581ff2dda3",
    is_active: true,
    role: "user",
    created_at: "2025-07-29T01:37:29.001Z",
    created_by_id: "3c5280a7-492e-421d-b739-7447455ce99e",
    updated_at: "2025-07-29T01:37:29.001Z",
    updated_by_id: null
  }
];
