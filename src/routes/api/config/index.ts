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

  .get("/api/:bu_code/config/currencies", async(ctx) => {
    return Response.json(resNotImplemented, { status: 501 });
  }, {
    detail: {
      tags: ["config"],
      summary: "Get currencies configuration",
      description: "Retrieve all currency configurations for a business unit (Not implemented)",
      parameters: [...authHeaders, buCodeParam],
      responses: standardResponses
    }
  })
  .post("/api/:bu_code/config/currencies", async(ctx) => {
    return Response.json(resNotImplemented, { status: 501 });
  }, {
    detail: {
      tags: ["config"],
      summary: "Create currency configuration",
      description: "Create a new currency configuration for a business unit (Not implemented)",
      parameters: [...authHeaders, buCodeParam],
      requestBody: {
        description: "Currency configuration data",
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                name: { type: "string", example: "US Dollar" },
                code: { type: "string", example: "USD" },
                symbol: { type: "string", example: "$" },
                decimal_places: { type: "number", example: 2 }
              },
              required: ["name", "code", "symbol"]
            },
            example: {
              name: "US Dollar",
              code: "USD",
              symbol: "$",
              decimal_places: 2
            }
          }
        }
      },
      responses: standardResponses
    }
  })
  .get("/api/:bu_code/config/currencies/:id", async(ctx) => {
    return Response.json(resNotImplemented, { status: 501 });
  }, {
    detail: {
      tags: ["config"],
      summary: "Get currency configuration by ID",
      description: "Retrieve a specific currency configuration by ID (Not implemented)",
      parameters: [...authHeaders, buCodeParam, idParam],
      responses: standardResponses
    }
  })
  .put("/api/:bu_code/config/currencies/:id", async(ctx) => {
    return Response.json(resNotImplemented, { status: 501 });
  }, {
    detail: {
      tags: ["config"],
      summary: "Update currency configuration",
      description: "Update an existing currency configuration (Not implemented)",
      parameters: [...authHeaders, buCodeParam, idParam],
      requestBody: {
        description: "Currency configuration data",
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                name: { type: "string", example: "US Dollar" },
                code: { type: "string", example: "USD" },
                symbol: { type: "string", example: "$" },
                decimal_places: { type: "number", example: 2 }
              }
            }
          }
        }
      },
      responses: standardResponses
    }
  })
  .patch("/api/:bu_code/config/currencies/:id", async(ctx) => {
    return Response.json(resNotImplemented, { status: 501 });
  }, {
    detail: {
      tags: ["config"],
      summary: "Partially update currency configuration",
      description: "Partially update an existing currency configuration (Not implemented)",
      parameters: [...authHeaders, buCodeParam, idParam],
      requestBody: {
        description: "Partial currency configuration data",
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                name: { type: "string", example: "US Dollar" },
                code: { type: "string", example: "USD" },
                symbol: { type: "string", example: "$" },
                decimal_places: { type: "number", example: 2 }
              }
            }
          }
        }
      },
      responses: standardResponses
    }
  })
  .delete("/api/:bu_code/config/currencies/:id", async(ctx) => {
    return Response.json(resNotImplemented, { status: 501 });
  }, {
    detail: {
      tags: ["config"],
      summary: "Delete currency configuration",
      description: "Delete a currency configuration (Not implemented)",
      parameters: [...authHeaders, buCodeParam, idParam],
      responses: standardResponses
    }
  })
  .get("/api/:bu_code/config/delivery-point", async(ctx) => {
    return Response.json(resNotImplemented, { status: 501 });
  }, {
    detail: {
      tags: ["config"],
      summary: "Get delivery points configuration",
      description: "Retrieve all delivery point configurations for a business unit (Not implemented)",
      parameters: [...authHeaders, buCodeParam],
      responses: standardResponses
    }
  })
  .post("/api/:bu_code/config/delivery-point", async(ctx) => {
    return Response.json(resNotImplemented, { status: 501 });
  }, {
    detail: {
      tags: ["config"],
      summary: "Create delivery point configuration",
      description: "Create a new delivery point configuration for a business unit (Not implemented)",
      parameters: [...authHeaders, buCodeParam],
      requestBody: {
        description: "Delivery point configuration data",
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                name: { type: "string", example: "จุดจัดส่งหลัก" },
                code: { type: "string", example: "DP001" },
                address: { type: "string", example: "123 ถนนสุขุมวิท แขวงคลองเตย เขตคลองเตย กรุงเทพมหานคร 10110" },
                is_active: { type: "boolean", example: true }
              },
              required: ["name", "code", "address"]
            }
          }
        }
      },
      responses: standardResponses
    }
  })
  .get("/api/:bu_code/config/delivery-point/:id", async(ctx) => {
    return Response.json(resNotImplemented, { status: 501 });
  }, {
    detail: {
      tags: ["config"],
      summary: "Get delivery point configuration by ID",
      description: "Retrieve a specific delivery point configuration by ID (Not implemented)",
      parameters: [...authHeaders, buCodeParam, idParam],
      responses: standardResponses
    }
  })
  .put("/api/:bu_code/config/delivery-point/:id", async(ctx) => {
    return Response.json(resNotImplemented, { status: 501 });
  }, {
    detail: {
      tags: ["config"],
      summary: "Update delivery point configuration",
      description: "Update an existing delivery point configuration (Not implemented)",
      parameters: [...authHeaders, buCodeParam, idParam],
      requestBody: {
        description: "Delivery point configuration data",
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                name: { type: "string", example: "จุดจัดส่งหลัก" },
                code: { type: "string", example: "DP001" },
                address: { type: "string", example: "123 ถนนสุขุมวิท แขวงคลองเตย เขตคลองเตย กรุงเทพมหานคร 10110" },
                is_active: { type: "boolean", example: true }
              }
            }
          }
        }
      },
      responses: standardResponses
    }
  })
  .patch("/api/:bu_code/config/delivery-point/:id", async(ctx) => {
    return Response.json(resNotImplemented, { status: 501 });
  }, {
    detail: {
      tags: ["config"],
      summary: "Partially update delivery point configuration",
      description: "Partially update an existing delivery point configuration (Not implemented)",
      parameters: [...authHeaders, buCodeParam, idParam],
      requestBody: {
        description: "Partial delivery point configuration data",
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                name: { type: "string", example: "จุดจัดส่งหลัก" },
                code: { type: "string", example: "DP001" },
                address: { type: "string", example: "123 ถนนสุขุมวิท แขวงคลองเตย เขตคลองเตย กรุงเทพมหานคร 10110" },
                is_active: { type: "boolean", example: true }
              }
            }
          }
        }
      },
      responses: standardResponses
    }
  })
  .delete("/api/:bu_code/config/delivery-point/:id", async(ctx) => {
    return Response.json(resNotImplemented, { status: 501 });
  }, {
    detail: {
      tags: ["config"],
      summary: "Delete delivery point configuration",
      description: "Delete a delivery point configuration (Not implemented)",
      parameters: [...authHeaders, buCodeParam, idParam],
      responses: standardResponses
    }
  })
  .get("/api/:bu_code/config/departments", async(ctx) => {
    return Response.json(resNotImplemented, { status: 501 });
  }, {
    detail: {
      tags: ["config"],
      summary: "Get departments configuration",
      description: "Retrieve all department configurations for a business unit (Not implemented)",
      parameters: [...authHeaders, buCodeParam],
      responses: standardResponses
    }
  })
  .post("/api/:bu_code/config/departments", async(ctx) => {
    return Response.json(resNotImplemented, { status: 501 });
  }, {
    detail: {
      tags: ["config"],
      summary: "Create department configuration",
      description: "Create a new department configuration for a business unit (Not implemented)",
      parameters: [...authHeaders, buCodeParam],
      requestBody: {
        description: "Department configuration data",
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                name: { type: "string", example: "แผนกจัดซื้อ" },
                code: { type: "string", example: "DEPT001" },
                description: { type: "string", example: "แผนกที่รับผิดชอบการจัดซื้อสินค้า" },
                is_active: { type: "boolean", example: true }
              },
              required: ["name", "code"]
            }
          }
        }
      },
      responses: standardResponses
    }
  })
  .get("/api/:bu_code/config/departments/:id", async(ctx) => {
    return Response.json(resNotImplemented, { status: 501 });
  }, {
    detail: {
      tags: ["config"],
      summary: "Get department configuration by ID",
      description: "Retrieve a specific department configuration by ID (Not implemented)",
      parameters: [...authHeaders, buCodeParam, idParam],
      responses: standardResponses
    }
  })
  .put("/api/:bu_code/config/departments/:id", async(ctx) => {
    return Response.json(resNotImplemented, { status: 501 });
  }, {
    detail: {
      tags: ["config"],
      summary: "Update department configuration",
      description: "Update an existing department configuration (Not implemented)",
      parameters: [...authHeaders, buCodeParam, idParam],
      requestBody: {
        description: "Department configuration data",
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                name: { type: "string", example: "แผนกจัดซื้อ" },
                code: { type: "string", example: "DEPT001" },
                description: { type: "string", example: "แผนกที่รับผิดชอบการจัดซื้อสินค้า" },
                is_active: { type: "boolean", example: true }
              }
            }
          }
        }
      },
      responses: standardResponses
    }
  });

