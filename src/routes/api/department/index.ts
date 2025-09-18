import type { Elysia } from "elysia";
import { resNotImplemented } from "@/libs/res.error";
import { t } from "elysia";
import { PARAM_X_APP_ID } from "@mockdata/const";

export default (app: Elysia) =>
  app
  .get("/api/department", ({ params, query, body, headers }) => {
    return Response.json(resNotImplemented, { status: 501 });
  }, {
    detail: {
      tags: ["department"],
      summary: "Get all departments",
      description: "Retrieve all departments (Not implemented)",
      parameters: [PARAM_X_APP_ID],
      responses: {
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
      }
    }
  })
  .get("/api/department/:id", ({ params, query, body, headers }) => {
    return Response.json(resNotImplemented, { status: 501 });
  }, {
    detail: {
      tags: ["department"],
      summary: "Get department by ID",
      description: "Retrieve a specific department by ID (Not implemented)",
      parameters: [
        PARAM_X_APP_ID,
        {
          name: "id",
          in: "path",
          required: true,
          description: "Department ID",
          schema: {
            type: "string",
            example: "550e8400-e29b-41d4-a716-446655440001"
          }
        }
      ],
      responses: {
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
      }
    }
  });