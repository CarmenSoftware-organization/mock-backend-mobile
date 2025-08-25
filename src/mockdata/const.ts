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
    example: "00000000-0000-0000-0000-000000000000",
  },
} as const;
