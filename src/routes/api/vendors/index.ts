import type { Elysia } from "elysia";

import jwt from "@elysiajs/jwt";
import { t } from "elysia";
import { CheckHeaderHasAccessToken, CheckHeaderHasAppId } from "@/libs/header";
import { tbBusinessUnit, tbPurchaseRequest, tbStoreRequisition, tbVendor } from "@/mockdata";
import { resNotFound } from "@/libs/res.error";
import { resSuccessWithPaginate } from "@/libs/response.paginate";
import { PARAM_X_APP_ID } from "@mockdata/const";

export default (app: Elysia) =>
  app
    .use(
      jwt({
        name: "jwt",
        secret: process.env.JWT_SECRET || "secret",
      })
    )

    .get("/api/:bu_code/config/vendors", async (ctx) => {
      const { bu_code } = ctx.params;
      const { error: errorAppId } = CheckHeaderHasAppId(ctx.headers);
      if (errorAppId) {
        ctx.set.status = 400;
        return errorAppId;
      }

      const { error: errorAccessToken } = await CheckHeaderHasAccessToken(ctx.headers, ctx.jwt);
      if (errorAccessToken) {
        ctx.set.status = 401;
        return errorAccessToken;
      }

      const bu = tbBusinessUnit.getBusinessUnitByCode(bu_code);
      if (!bu) {
        return resNotFound("Business unit not found");
      }

      const vendors = tbVendor.getActiveVendors();
      const res = resSuccessWithPaginate(vendors, vendors.length, 1, 10, 1);
      return res;
    }, {
      detail: {
        tags: ["vendors"],
        summary: "Get vendors by business unit",
        description: "Retrieve all active vendors for a specific business unit with pagination",
        parameters: [
          PARAM_X_APP_ID,
          {
            name: "Authorization",
            in: "header",
            required: true,
            description: "Bearer JWT access token",
            schema: {
              type: "string",
              example: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
            }
          },
          {
            name: "bu_code",
            in: "path",
            required: true,
            description: "Business unit code",
            schema: {
              type: "string",
              example: "BU001"
            }
          }
        ],
        responses: {
          200: {
            description: "List of vendors with pagination",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    data: {
                      type: "array",
                      items: {
                        type: "object",
                        properties: {
                          id: { type: "string", example: "550e8400-e29b-41d4-a716-446655440001" },
                          name: { type: "string", example: "บริษัท ABC จำกัด" },
                          code: { type: "string", example: "VENDOR001" },
                          contact_person: { type: "string", example: "นายสมชาย ใจดี" },
                          email: { type: "string", example: "contact@abc.com" },
                          phone: { type: "string", example: "02-123-4567" },
                          address: { type: "string", example: "123 ถนนสุขุมวิท แขวงคลองเตย เขตคลองเตย กรุงเทพมหานคร 10110" },
                          is_active: { type: "boolean", example: true }
                        }
                      }
                    },
                    pagination: {
                      type: "object",
                      properties: {
                        total: { type: "number", example: 25 },
                        page: { type: "number", example: 1 },
                        limit: { type: "number", example: 10 },
                        total_pages: { type: "number", example: 3 }
                      }
                    }
                  }
                },
                example: {
                  data: [
                    {
                      id: "550e8400-e29b-41d4-a716-446655440001",
                      name: "บริษัท ABC จำกัด",
                      code: "VENDOR001",
                      contact_person: "นายสมชาย ใจดี",
                      email: "contact@abc.com",
                      phone: "02-123-4567",
                      address: "123 ถนนสุขุมวิท แขวงคลองเตย เขตคลองเตย กรุงเทพมหานคร 10110",
                      is_active: true
                    }
                  ],
                  pagination: {
                    total: 25,
                    page: 1,
                    limit: 10,
                    total_pages: 3
                  }
                }
              }
            }
          },
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
          }
        }
      }
    })

