import { Elysia, t } from "elysia";
import { jwt } from "@elysiajs/jwt";
import {
  resBadRequest,
  resError,
  resInternalServerError,
  resNotFound,
  resNotImplemented,
  resSuccess,
  resUnauthorized,
} from "@libs/res.error";
import type { LoginDto, LoginError, LoginResponse } from "@/types/auth";
import {
  PARAM_X_APP_ID,
  PARAM_X_TENANT_ID_OPTIONAL,
} from "@mockdata/const";
import {
  tbPermission,
  tbUser,
  tbUserPermission,
} from "@mockdata/index";
import { CheckHeaderHasAccessToken, CheckHeaderHasAppId } from "@/libs/header";

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
        const allUsers = tbUser.getAllUsers();

        try {
          const users = allUsers.map((users) => {
            let res = {};
            res = {
              id: users.id,
              username: users.username,
              email: users.email,
              is_active: users.is_active,
            };
            return res;
          });

          return users;
        } catch (error) {
          return resInternalServerError(
            error instanceof Error ? error.message : "Unknown error"
          );
        }
      },
      {
        detail: {
          tags: ["Mock"],
          summary: "Mock data users",
          description:
            "แสดงรายการผู้ใช้งานทั้งหมด ที่อยู่ในฐานข้อมูล (Mock data)",
        },
      }
    )

    // Login
    .post(
      "/api/auth/login",
      async (ctx) => {
        const { error: errorAppId } = CheckHeaderHasAppId(ctx.headers);
        if (errorAppId) {
          ctx.set.status = 400;
          return errorAppId;
        }

        const result = await login(ctx.body as LoginDto, ctx.jwt);
        if ("message" in result) {
          ctx.set.status = 401;
        }
        return result;
      },
      { loginEndpointDetail }
    )

    .get(
      "/api/auth",
      async (ctx) => {
        // check app id
        const { error: appIdError } = CheckHeaderHasAppId(ctx.headers);
        if (appIdError) {
          ctx.set.status = 400;
          return appIdError;
        }

        const {
          error: errorAccessToken,
          jwtUser,
          currentUser,
          userProfile,
          bussiness_Units,
        } = await CheckHeaderHasAccessToken(ctx.headers, ctx.jwt);
        if (errorAccessToken) {
          ctx.set.status = 401;
          return errorAccessToken;
        }

        let res = {};

        try {
          const cBusiness_unit = bussiness_Units.map((bu: any) => {
            // get permission by business unit id
            // dummy data is  know is same business unit id
            const permissions = tbUserPermission
              .getUserPermissionsByUserId(currentUser.id)
              .map((permission: any) => {
                const permissionObject = tbPermission.permissions.find(
                  (p: any) => p.id === permission.permission_id
                );
                return {
                  id: permission.id,
                  name:
                    permissionObject?.resource + ":" + permissionObject?.action,
                };
              });

            // สร้าง permissions array ในรูปแบบ string เช่น "pr.view", "po.view" ฯลฯ
            const permissionNames: string[] = tbUserPermission
              .getUserPermissionsByUserId(currentUser.id)
              .map((permission: any) => {
                const permissionObject = tbPermission.permissions.find(
                  (p: any) => p.id === permission.permission_id
                );
                if (!permissionObject) return null;
                // resource:action เช่น pr:view → pr.view
                return `${permissionObject.resource}.${permissionObject.action}`;
              })
              .filter((name: string | null): name is string => !!name);

            return {
              id: bu.id,
              name: bu.name,
              alias_name: bu.alias_name,
              permissions: permissionNames,
            };
          });

          res = {
            business_unit: cBusiness_unit,
          };

          return res;
        } catch (error) {
          return resInternalServerError(
            error instanceof Error ? error.message : "Unknown error"
          );
        }
      },
      {
        detail: {
          tags: ["user"],
          summary: "all permissions of current user",
          description: `all permissions of current user. if add '${PARAM_X_TENANT_ID_OPTIONAL.name}' header it will return all permissions of user in that tenant`,
          parameters: [PARAM_X_APP_ID, PARAM_X_TENANT_ID_OPTIONAL],
        },
      }
    )

    // Logout
    .post(
      "/api/auth/logout",
      async (ctx) => {
        const { error: errorAppId } = CheckHeaderHasAppId(ctx.headers);
        if (errorAppId) {
          ctx.set.status = 400;
          return errorAppId;
        }

        const { error: errorAccessToken, jwtUser } =
          await CheckHeaderHasAccessToken(ctx.headers, ctx.jwt);
        if (errorAccessToken) {
          ctx.set.status = 401;
          return errorAccessToken;
        }

        const fn = await logout(jwtUser.id, ctx.jwt);
        ctx.set.status = fn.status;
        return fn;
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
    .post("/api/auth/register", async (ctx) => {
      const { error: errorAppId } = CheckHeaderHasAppId(ctx.headers);
      if (errorAppId) {
        ctx.set.status = 400;
        return errorAppId;
      }

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
    .post(
      "/api/auth/refresh-token",
      async (ctx) => {
        const { error: errorAppId } = CheckHeaderHasAppId(ctx.headers);
        if (errorAppId) {
          ctx.set.status = 400;
          return errorAppId;
        }

        try {

          const getRefreshToken = ctx.request.body as unknown as {
            refresh_token: string;
          };
          const { access_token, refresh_token } = await refreshToken(
            getRefreshToken.refresh_token,
            ctx.jwt
          );
          return { access_token, refresh_token };
        } catch (error) {
          return resInternalServerError(
            error instanceof Error ? error.message : "Unknown error"
          );
        }
      },
      {
        refreshTokenEndpointDetail,
      }
    )

    // Forgot Password
    .post("/api/auth/forgot-password", (ctx) => {
      ctx.set.status = 501;
      return resNotImplemented;
    });

// Login function implementation
async function login(
  body: LoginDto,
  jwt: any
): Promise<LoginResponse | LoginError> {
  const user = tbUser.users.find((user: any) => user.email === body.email);

  if (!user) {
    return resError(401, "Invalid login credentials");
  }

  // For demo purposes, accept any password
  // In production, would use tbPasswordCrud.verifyPassword(user.id, body.password)
  if (body.password !== "123456") {
    return resUnauthorized("Invalid login credentials");
  }

  if (!process.env.JWT_SECRET) {
    return resInternalServerError("JWT secret is not configured");
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
    return resInternalServerError("Failed to generate tokens");
  }
}

// Logout function implementation
async function logout(token: string, jwt: any) {
  // delete refresh token from database
  const refreshToken = await jwt.verify(token);
  if (refreshToken) {
    await jwt.revoke(token);
  } else {
    return resUnauthorized("Invalid refresh token");
  }

  return resSuccess("Logged out");
}

// Refresh Token function implementation
async function refreshToken(refresh_token: string, jwt: any) {
  const { id, email } = await jwt.verify(refresh_token);
  return {
    access_token: await jwt.sign({ id, email }),
    refresh_token: await jwt.sign({ id, email, type: "refresh" }),
  };
}

const loginEndpointDetail = {
  body: "loginDto",
  response: {
    200: t.Object({
      access_token: t.String(),
      refresh_token: t.String(),
    }),
    400: t.Object({
      message: t.String({
        default: `Invalid header '${PARAM_X_APP_ID.name}'`,
      }),
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
    description: `Authenticate user with email and password to receive access and refresh tokens. Requires '${PARAM_X_APP_ID.name}' header with value '${PARAM_X_APP_ID.schema.example}'`,
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
                summary: `Missing ${PARAM_X_APP_ID.name} header`,
                value: {
                  message: `Invalid header '${PARAM_X_APP_ID.name}'`,
                },
              },
              InvalidAppId: {
                summary: `Invalid ${PARAM_X_APP_ID.name} value`,
                value: {
                  message: `Invalid header '${PARAM_X_APP_ID.name}' should be '${PARAM_X_APP_ID.schema.example}'`,
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
};

const refreshTokenEndpointDetail = {
  body: "refreshTokenDto",
  response: {
    200: t.Object({
      access_token: t.String(),
      refresh_token: t.String(),
    }),
  },
  detail: {
    tags: ["auth"],
    summary: "Refresh Token",
    description: "Refresh access token",
    parameters: [PARAM_X_APP_ID],
  },
  requestBody: {
    description: "Refresh token",
    required: true,
    content: {
      "application/json": {
        schema: {
          type: "object",
          properties: {
            refresh_token: {
              type: "string",
              description: "Refresh token",
            },
          },
        },
      },
    },
    example: {
      refresh_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    },
  },
};
