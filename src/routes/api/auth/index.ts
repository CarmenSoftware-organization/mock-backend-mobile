import { Elysia, t } from "elysia";
import { jwt } from "@elysiajs/jwt";
import { resNotImplemented, resUnauthorized } from "@libs/res.error";
import type { LoginDto, LoginError, LoginResponse } from "@/types/auth";
import {
  APP_ID,
  PARAM_X_APP_ID,
  PARAM_X_TENANT_ID_OPTIONAL,
} from "@mockdata/const";
import { tbUser } from "@mockdata/index";
import { CheckHeaderHasAppId } from "@/libs/header";

// Types moved to src/types/auth.ts

export default (app: Elysia) =>
  app
    .model({
      loginDto: t.Object({
        email: t.String({
          format: "email",
          description: "User email address",
        }),
        password: t.String({
          description: "User password",
        }),
      }),
    })

    .use(
      jwt({
        name: "jwt",
        secret: process.env.JWT_SECRET || "secret",
      })
    )

    .get(
      "/mockdata/users",
      (ctx) => {
        return tbUser.users;
      },
      {
        detail: {
          tags: ["Mock"],
          summary: "Mock data users",
          description: "Mock data users",
        },
      }
    )

    .get(
      "/api/auth",
      async ({ headers, status, set, jwt }) => {
        // check token
        const token = headers.authorization?.split(" ")[1];
        if (!token) {
          set.status = 401;
          return resUnauthorized;
        }
        const currentUser = await jwt.verify(token);
        if (!currentUser) {
          set.status = 401;
          return resUnauthorized;
        }

        // get user permissions
        // const userPermissions = await tbUserCrud.getUserPermissions(currentUser.id as string);

        return {};
      },
      {
        detail: {
          tags: ["user"],
          summary: "all permissions of current user",
          description:
            "all permissions of current user. if add x-tenant-id header it will return all permissions of user in that tenant",
          parameters: [PARAM_X_APP_ID, PARAM_X_TENANT_ID_OPTIONAL],
        },
      }
    )

    .get(
      "/api/auth",
      async ({ headers, jwt, set }) => {
        // check token
        const token = headers.authorization?.split(" ")[1];
        if (!token) {
          set.status = 401;
          return resUnauthorized;
        }

        // check x-tenant-id
        const tenantId = headers["x-tenant-id"];
        const isUseTenantId = tenantId ? true : false;

        const currentUser = await jwt.verify(token);
        if (!currentUser) {
          set.status = 401;
          return resUnauthorized;
        }

        // get user permissions
        // const userPermissions = await tbUserCrud.getUserPermissions(currentUser.id as string);

        // Mock user permissions data
        const userPermissions = {
          user_id: currentUser.id,
          permissions: [
            "read:user",
            "write:user",
            "read:product",
            "write:product",
          ],
        };

        return {
          data: userPermissions,
        };
      },
      {
        detail: {
          tags: ["user"],
          summary: "all permissions of current user (Mobile)",
          description:
            "all permissions of current user (Mobile). if add x-tenant-id header it will return all permissions of user in that tenant",
          parameters: [PARAM_X_APP_ID, PARAM_X_TENANT_ID_OPTIONAL],
        },
      }
    )

    // Login
    .post(
      "/api/auth/login",
      async (ctx) => {
        const { error } = CheckHeaderHasAppId(ctx.headers);
        if (error) {
          ctx.set.status = 400;
          return { message: error };
        }

        const result = await login(ctx.body, ctx.jwt);
        if ("message" in result) {
          ctx.set.status = 401;
          return result;
        }
        return result;
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
          parameters: [PARAM_X_APP_ID],
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
                      description: "User email address",
                    },
                    password: {
                      type: "string",
                      description: "User password",
                    },
                  },
                  required: ["email", "password"],
                },
              },
            },
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
                        description: "JWT access token",
                      },
                      refresh_token: {
                        type: "string",
                        description: "JWT refresh token",
                      },
                    },
                  },
                  example: {
                    access_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
                    refresh_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
                  },
                },
              },
            },
            400: {
              description: "Bad request - Missing or invalid headers",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      message: { type: "string" },
                    },
                  },
                  examples: {
                    MissingAppId: {
                      summary: "Missing x-app-id header",
                      value: {
                        message: "Invalid header 'x-app-id'",
                      },
                    },
                    InvalidAppId: {
                      summary: "Invalid x-app-id value",
                      value: {
                        message:
                          "Invalid header 'x-app-id' should be '00000000-0000-0000-0000-000000000000'",
                      },
                    },
                  },
                },
              },
            },
            401: {
              description: "Invalid credentials",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      message: { type: "string" },
                    },
                  },
                  example: {
                    message: "Invalid login credentials",
                  },
                },
              },
            },
            500: {
              description: "Internal server error",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      message: { type: "string" },
                    },
                  },
                  example: {
                    message: "Internal Server Error",
                  },
                },
              },
            },
          },
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
          parameters: [PARAM_X_APP_ID],
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
    // .post("/api/auth/mobile", (ctx) => {
    //   ctx.set.status = 501;
    //   return resNotImplemented;
    // })

    // Web Auth
    .post("/api/auth/web", (ctx) => {
      ctx.set.status = 501;
      return resNotImplemented;
    });

// Login function implementation
async function login(body: LoginDto, jwt: any): Promise<LoginResponse | LoginError> {
  const user = tbUser.users.find((user: any) => user.email === body.email);

  if (!user) {
    return { message: "Invalid login credentials" };
  }

  // For demo purposes, accept any password
  // In production, would use tbPasswordCrud.verifyPassword(user.id, body.password)
  if (body.password !== "123456") {
    return { message: "Invalid login credentials" };
  }

  if (!process.env.JWT_SECRET) {
    return { message: "JWT secret is not configured" };
  }

  try {
    const accessToken = await jwt.sign({
      id: user.id,
      email: user.email,
    });

    const refreshToken = await jwt.sign({
      id: user.id,
      email: user.email,
      type: "refresh",
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
