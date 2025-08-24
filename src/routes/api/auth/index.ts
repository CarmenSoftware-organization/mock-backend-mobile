import * as mockdata from "@mockdata/index";
import { Elysia, t } from "elysia";
import { jwt } from "@elysiajs/jwt";
import { resNotImplemented } from "@libs/res.error";
import type { LoginDto, LoginError, LoginResponse } from "@/types/auth";

// Types moved to src/types/auth.ts

export default (app: Elysia) =>
  app
    .model({
      loginDto: t.Object(
        {
          email: t.String({
            format: "email",
            description: "User email address",
            examples: ["admin@example.com", "manager@example.com"]
          }),
          password: t.String({
            description: "User password",
            examples: ["123456"]
          }),
        },
        {
          examples: [
            {
              email: "admin@example.com",
              password: "123456"
            },
            {
              email: "manager@example.com",
              password: "123456"
            },
            {
              email: "purchaser@example.com",
              password: "123456"
            },
            {
              email: "accountant@example.com",
              password: "123456"
            },
            {
              email: "warehouse@example.com",
              password: "123456"
            },
            {
              email: "sales@example.com",
              password: "123456"
            },
            {
              email: "hr@example.com",
              password: "123456"
            },
            {
              email: "system@example.com",
              password: "123456"
            }
          ]
        }
      ),
    })

    .use(
      jwt({
        name: "jwt",
        secret: process.env.JWT_SECRET || "secret",
      })
    )

    // Login
    .post(
      "/api/auth/login",
      (ctx) => {
        const body = ctx.body as LoginDto;
        const fn = login(body, ctx.jwt);
        if ('message' in fn) {
          return Response.json(fn, { status: 401 });
        }
        return Response.json(fn);
      },
      {
        body: "loginDto",
        response: {
          200: t.Object({
            access_token: t.String(),
            refresh_token: t.String(),
          }),
          401: t.Object({
            message: t.String({ default: "Invalid login credentials" }),
          }),
          500: t.Object({
            message: t.String({ default: "Internal Server Error" }),
          }),
        },
        detail: {
          tags: ["auth"],
          summary: "Login",
          description:
            "Authenticate user with email and password to receive access and refresh tokens",
          requestBody: {
            required: true,
            content: {
              "application/json": {
                examples: {
                  AdminLogin: {
                    summary: "Admin Login",
                    description: "Login as administrator",
                    value: {
                      email: "admin@example.com",
                      password: "123456"
                    }
                  },
                  ManagerLogin: {
                    summary: "Manager Login",
                    description: "Login as manager",
                    value: {
                      email: "manager@example.com",
                      password: "123456"
                    }
                  },
                  PurchaserLogin: {
                    summary: "Purchaser Login",
                    description: "Login as purchaser",
                    value: {
                      email: "purchaser@example.com",
                      password: "123456"
                    }
                  },
                  AccountantLogin: {
                    summary: "Accountant Login",
                    description: "Login as accountant",
                    value: {
                      email: "accountant@example.com",
                      password: "123456"
                    }
                  },
                  WarehouseLogin: {
                    summary: "Warehouse Login",
                    description: "Login as warehouse staff",
                    value: {
                      email: "warehouse@example.com",
                      password: "123456"
                    }
                  },
                  SalesLogin: {
                    summary: "Sales Login",
                    description: "Login as sales staff",
                    value: {
                      email: "sales@example.com",
                      password: "123456"
                    }
                  },
                  HRLogin: {
                    summary: "HR Login",
                    description: "Login as HR staff",
                    value: {
                      email: "hr@example.com",
                      password: "123456"
                    }
                  },
                  SystemLogin: {
                    summary: "System Login",
                    description: "Login as system user",
                    value: {
                      email: "system@example.com",
                      password: "123456"
                    }
                  }
                }
              }
            }
          },
          responses: {
            200: {
              description: "Login successful",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      access_token: {
                        type: "string",
                        description: "JWT access token"
                      },
                      refresh_token: {
                        type: "string",
                        description: "JWT refresh token"
                      }
                    }
                  },
                  example: {
                    access_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
                    refresh_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
                  }
                }
              }
            },
            401: {
              description: "Invalid credentials",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      message: { type: "string" }
                    }
                  },
                  example: {
                    message: "Invalid login credentials"
                  }
                }
              }
            },
            500: {
              description: "Internal server error",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      message: { type: "string" }
                    }
                  },
                  example: {
                    message: "Internal Server Error"
                  }
                }
              }
            }
          }
        },
      }
    )

    // Logout
    .post(
      "/api/auth/logout",
      (ctx) => {
        const token = ctx.headers.authorization?.split(" ")[1];
        const fn = logout(token || "");
        return Response.json(fn, { status: fn.status });
      },
      {
        detail: {
          tags: ["auth"],
          summary: "Logout",
          description: "Logout from the system",
        },
      }
    )

    // Register
    .post("/api/auth/register", ({ params, query, body, headers }) => {
      return Response.json(resNotImplemented, { status: 501 });
    })

    // Invite User
    .post("/api/auth/invite-user", ({ params, query, body, headers }) => {
      return Response.json(resNotImplemented, { status: 501 });
    })

    // Register Confirm
    .post("/api/auth/register-confirm", ({ params, query, body, headers }) => {
      return Response.json(resNotImplemented, { status: 501 });
    })

    // Refresh Token
    .post("/api/auth/refresh-token", ({ params, query, body, headers }) => {
      return Response.json(resNotImplemented, { status: 501 });
    })

    // Forgot Password
    .post("/api/auth/forgot-password", ({ params, query, body, headers }) => {
      return Response.json(resNotImplemented, { status: 501 });
    })

    // Mobile Auth
    .post("/api/auth/mobile", ({ params, query, body, headers }) => {
      return Response.json(resNotImplemented, { status: 501 });
    })

    // Web Auth
    .post("/api/auth/web", ({ params, query, body, headers }) => {
      return Response.json(resNotImplemented, { status: 501 });
    });

// Login function implementation
function login(
  body: LoginDto,
  jwt: any
): LoginResponse | LoginError {
  const user = mockdata.mockUsers.find((user) => user.email === body.email);

  if (!user) {
    return { message: "Invalid login credentials" };
  }

  if (user.password !== body.password) {
    return { message: "Invalid login credentials" };
  }

  if (!process.env.JWT_SECRET) {
    return { message: "JWT secret is not configured" };
  }

  return {
    access_token: "123",
    refresh_token: "456",
  };
}

function logout(token: string) {
  return { status: 200, message: "Logged out" };
}
