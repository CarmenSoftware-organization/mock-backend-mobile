import type { Elysia } from "elysia";
import { resNotImplemented } from "@/libs/res.error";
import jwt from "@elysiajs/jwt";
import { t } from "elysia";
import { PARAM_X_APP_ID } from "@mockdata/const";

const authHeaders = [
  PARAM_X_APP_ID,
  {
    name: "Authorization",
    in: "header" as const,
    required: true,
    description: "Bearer JWT access token",
    schema: {
      type: "string" as const,
      example: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
    }
  }
];

const buCodeParam = {
  name: "bu_code",
  in: "path" as const,
  required: true,
  description: "Business unit code",
  schema: {
    type: "string" as const,
    example: "BU001"
  }
};

const idParam = {
  name: "id",
  in: "path" as const,
  required: true,
  description: "Resource ID",
  schema: {
    type: "string" as const,
    example: "550e8400-e29b-41d4-a716-446655440001"
  }
};

const standardResponses = {
  400: {
    description: "Bad request",
    content: {
      "application/json": {
        example: { message: "Invalid header 'x-app-id'" }
      }
    }
  },
  401: {
    description: "Unauthorized",
    content: {
      "application/json": {
        example: { message: "Unauthorized" }
      }
    }
  },
  404: {
    description: "Business unit not found",
    content: {
      "application/json": {
        example: { message: "Business unit not found" }
      }
    }
  },
  501: {
    description: "Not implemented",
    content: {
      "application/json": {
        schema: {
          type: "object",
          properties: {
            message: { type: "string" }
          }
        },
        example: { message: "Not implemented" }
      }
    }
  }
};

export default (app: Elysia) =>
  app

  .use(
    jwt({
      name: "jwt",
      secret: process.env.JWT_SECRET || "secret",
    })
  )

  // No implemented routes yet
  ;

