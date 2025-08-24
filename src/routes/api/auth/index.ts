import * as mockdata from "@mockdata/index";
import { Elysia, t } from "elysia";
import { jwt } from "@elysiajs/jwt";
import { resNotImplemented } from "@libs/res.error";
import type { LoginDto, LoginError, LoginResponse } from "@/types/auth";
import { APP_ID } from "@mockdata/index";

// Types moved to src/types/auth.ts

export default (app: Elysia) =>
  app
    .model({
      loginDto: t.Object({
        email: t.String({
          format: "email",
          description: "User email address"
        }),
        password: t.String({
          description: "User password"
        }),
      }),
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
      async (ctx) => {
        const headers = ctx.headers;
        if (!headers["x-app-id"]) {
          ctx.set.status = 400;
          return { message: "Invalid header 'x-app-id'" };
        }

        if (headers["x-app-id"] !== APP_ID) {
          ctx.set.status = 400;
          return { message: "Invalid header 'x-app-id' should be '" + APP_ID + "'" };
        }

        const body = ctx.body as LoginDto;
        const fn = await login(body, ctx.jwt);
        if ('message' in fn) {
          ctx.set.status = 401;
          return fn;
        }
        return fn;
      },
      {
        body: "loginDto",
        response: {
          200: t.Object({
            access_token: t.String(),
            refresh_token: t.String(),
          }),
          400: t.Object({
            message: t.String({ default: "Invalid header 'x-app-id'" }),
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
            "Authenticate user with email and password to receive access and refresh tokens. Requires 'x-app-id' header with value '00000000-0000-0000-0000-000000000000'",
          parameters: [
            {
              name: "x-app-id",
              in: "header",
              required: true,
              description: "Application ID for authentication",
              schema: {
                type: "string",
                pattern: "^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$",
                example: "00000000-0000-0000-0000-000000000000"
              }
            }
          ],
          requestBody: {
            description: "Login credentials",
            required: true,
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    email: {
                      type: "string",
                      format: "email",
                      description: "User email address"
                    },
                    password: {
                      type: "string",
                      description: "User password"
                    }
                  },
                  required: ["email", "password"]
                },
                examples: {
                  Admin: {
                    summary: "Admin Login",
                    value: {
                      email: "admin@example.com",
                      password: "123456"
                    }
                  },
                  Manager: {
                    summary: "Manager Login",
                    value: {
                      email: "manager@example.com",
                      password: "123456"
                    }
                  },
                  Purchaser: {
                    summary: "Purchaser Login",
                    value: {
                      email: "purchaser@example.com",
                      password: "123456"
                    }
                  },
                  Accountant: {
                    summary: "Accountant Login",
                    value: {
                      email: "accountant@example.com",
                      password: "123456"
                    }
                  },
                  Warehouse: {
                    summary: "Warehouse Login",
                    value: {
                      email: "warehouse@example.com",
                      password: "123456"
                    }
                  },
                  Sales: {
                    summary: "Sales Login",
                    value: {
                      email: "sales@example.com",
                      password: "123456"
                    }
                  },
                  HR: {
                    summary: "HR Login",
                    value: {
                      email: "hr@example.com",
                      password: "123456"
                    }
                  },
                  System: {
                    summary: "System Login",
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
            400: {
              description: "Bad request - Missing or invalid headers",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      message: { type: "string" }
                    }
                  },
                  examples: {
                    MissingAppId: {
                      summary: "Missing x-app-id header",
                      value: {
                        message: "Invalid header 'x-app-id'"
                      }
                    },
                    InvalidAppId: {
                      summary: "Invalid x-app-id value",
                      value: {
                        message: "Invalid header 'x-app-id' should be '00000000-0000-0000-0000-000000000000'"
                      }
                    }
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
        ctx.set.status = fn.status;
        return { message: fn.message };
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
    .post("/api/auth/register", (ctx) => {
      ctx.set.status = 501;
      return resNotImplemented;
    })

    // Invite User
    .post("/api/auth/invite-user", (ctx) => {
      ctx.set.status = 501;
      return resNotImplemented;
    })

    // Register Confirm
    .post("/api/auth/register-confirm", (ctx) => {
      ctx.set.status = 501;
      return resNotImplemented;
    })

    // Refresh Token
    .post("/api/auth/refresh-token", (ctx) => {
      ctx.set.status = 501;
      return resNotImplemented;
    })

    // Forgot Password
    .post("/api/auth/forgot-password", (ctx) => {
      ctx.set.status = 501;
      return resNotImplemented;
    })

    // Mobile Auth
    .post("/api/auth/mobile", (ctx) => {
      ctx.set.status = 501;
      return resNotImplemented;
    })

    // Web Auth
    .post("/api/auth/web", (ctx) => {
      ctx.set.status = 501;
      return resNotImplemented;
    });

// Login function implementation
async function login(
  body: LoginDto,
  jwt: any
): Promise<LoginResponse | LoginError> {
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

  try {
    const accessToken = await jwt.sign({
      id: user.id,
      email: user.email
    });

    const refreshToken = await jwt.sign({
      id: user.id,
      email: user.email,
      type: "refresh"
    });

    return {
      access_token: accessToken,
      refresh_token: refreshToken,
    };
  } catch (error) {
    return { message: "Failed to generate tokens" };
  }
}

function logout(token: string) {
  return { status: 200, message: "Logged out" };
}
