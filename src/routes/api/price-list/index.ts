import type { Elysia } from "elysia";
import { resBadRequest, resErrorWithData, resNotFound, resNotImplemented } from "@/libs/res.error";
import { CheckHeaderHasAccessToken, CheckHeaderHasAppId } from "@/libs/header";
import jwt from "@elysiajs/jwt";
import { tbBusinessUnit } from "@/mockdata";

export default (app: Elysia) =>
  app

    .use(
      jwt({
        name: "jwt",
        secret: process.env.JWT_SECRET || "secret",
      })
    )


    .get("/api/price-list", ({ params, query, body, headers }) => ([
      {
        "id": "string",
        "vendor_id": "string",
        "vendor_name": "string",
        "product_id": "string",
        "product_name": "string",
        "price": 0,
        "price_with_vat": 0,
        "price_without_vat": 0,
        "from_date": "2025-08-21T02:25:12.740Z",
        "to_date": "2025-08-21T02:25:12.740Z",
        "created_at": "2025-08-21T02:25:12.740Z",
        "updated_at": "2025-08-21T02:25:12.740Z"
      }
    ]))
    .get("/api/price-list/:id", ({ params, query, body, headers }) => {
      return Response.json(resNotImplemented, { status: 501 });
    })

    .get("/api/:bu_code/price-list/:product_id", async (ctx) => {

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

      try {

        const { bu_code } = ctx.query;
        if (!bu_code) {
          return resBadRequest("Bu code is required");
        }

        const bu = tbBusinessUnit.getBusinessUnitByCode(bu_code);
        if (!bu) {
          return resNotFound("Business unit not found");
        }
        const { product_id } = ctx.params;
        if (!product_id) {
          return resBadRequest("Product ID is required");
        }

        return Response.json(resNotImplemented, { status: 501 });

      } catch (error) {
        console.error(error);
        return resErrorWithData("Internal server error", error);
      }
    },
      {
        detail: {
          tags: ["price-list"],
          summary: "Get price list by business unit code and product ID",
          description: "Retrieve the price list for a specific product within a given business unit (Not implemented)",
          parameters: [
            {
              name: "bu_code",
              in: "path",
              required: true,
              schema: {
                type: "string",
                example: "BU001"
              },
              description: "Business unit code"
            },
            {
              name: "product_id",
              in: "path",
              required: true,
              schema: {
                type: "string",
                example: "550e8400-e29b-41d4-a716-446655440000"
              },
              description: "Product ID"
            },
            {
              name: "X-App-Id",
              in: "header",
              required: true,
              schema: {
                type: "string",
                example: "my-app-id"
              },
              description: "Application ID"
            },
            {
              name: "Authorization",
              in: "header",
              required: true,
              schema: {
                type: "string",
                example: "Bearer <token>"
              },
              description: "Access token"
            }
          ],
          responses: {
            200: {
              description: "Successful response",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      id: { type: "string" },
                      vendor_id: { type: "string" },
                      vendor_name: { type: "string" },
                      product_id: { type: "string" },
                      product_name: { type: "string" },
                      price: { type: "number" },
                      price_with_vat: { type: "number" },
                      price_without_vat: { type: "number" },
                      from_date: { type: "string", format: "date-time" },
                      to_date: { type: "string", format: "date-time" },
                      created_at: { type: "string", format: "date-time" },
                      updated_at: { type: "string", format: "date-time" }
                    }
                  },
                  example: {
                    id: "string",
                    vendor_id: "string",
                    vendor_name: "string",
                    product_id: "string",
                    product_name: "string",
                    price: 0,
                    price_with_vat: 0,
                    price_without_vat: 0,
                    from_date: "2025-08-21T02:25:12.740Z",
                    to_date: "2025-08-21T02:25:12.740Z",
                    created_at: "2025-08-21T02:25:12.740Z",
                    updated_at: "2025-08-21T02:25:12.740Z"
                  }
                }
              }
            },
            400: {
              description: "Bad Request",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      message: { type: "string" }
                    }
                  },
                  example: {
                    message: "Bu code is required"
                  }
                }
              }
            },
            401: {
              description: "Unauthorized",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      message: { type: "string" }
                    }
                  },
                  example: {
                    message: "Invalid or missing access token"
                  }
                }
              }
            },
            404: {
              description: "Not Found",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      message: { type: "string" }
                    }
                  },
                  example: {
                    message: "Business unit not found"
                  }
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
                  example: {
                    message: "Not implemented"
                  }
                }
              }
            }
          }
        }
      })
  ;