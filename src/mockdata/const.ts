import { uuid } from "zod";

export const APP_ID = "00000000-0000-0000-0000-000000000000";

export const APP_ID_HEADER = "x-app-id";
export const PARAM_X_APP_ID = {
  name: APP_ID_HEADER,
  in: "header" as const,
  required: true,
  description: "Application ID for authentication",
  schema: {
    type: "string" as const,
    pattern: "^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$",
    example: APP_ID,
  },
} as const;

export const TENANT_ID = "00000000-0000-0000-0000-000000000000";

export const PARAM_X_TENANT_ID_OPTIONAL = {
  name: "x-tenant-id",
  in: "header" as const,
  required: false,
  description: "Tenant ID for authentication (Optional)",
  schema: {
    type: "string" as const,
    example: TENANT_ID,
  },
} as const;

export const PARAM_X_TENANT_ID_REQUIRED = {
  name: "x-tenant-id",
  in: "header" as const,
  required: true,
  description: "Tenant ID for authentication (Required)",
  schema: {
    type: "string" as const,
    example: TENANT_ID,
  },
} as const;
