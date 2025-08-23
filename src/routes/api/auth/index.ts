import { Elysia, t } from "elysia";
import { bearer } from "@elysiajs/bearer";
import { jwt } from "@elysiajs/jwt";
import { users } from "../../../mockdata";

// Utility function for not implemented endpoints
const resNotImplemented = {
  success: false,
  error: "Not Implemented",
  message: "This endpoint is not implemented yet",
  timestamp: new Date().toISOString()
};

// Types for login functionality
interface LoginRequest {
  email: string;
  password: string;
}

interface LoginResponse {
  status: number;
  access_token: string;
  refresh_token: string;
}

interface LoginError {
  status: number;
  message: string;
}

// JWT payload interface
interface JWTPayload {
  id: string;
  email: string;
}

export default (app: Elysia) =>
  app
    .model({
      login: t.Object({
        email: t.String(),
        password: t.String(),
      }),
    })
    .model({
      loginResponse_200: t.Object({
        access_token: t.String(),
        refresh_token: t.String(),
      }),
    })
    .model({
      loginResponse_401: t.Object({
        message: t.String(),
      }),
    })
    .model({
      loginResponse_500: t.Object({
        message: t.String(),
      }),
    })
    .model({
      logoutResponse_200: t.Object({
        message: t.String(),
      }),
    })
    .model({
      registerResponse_200: t.Object({
        message: t.String(),
      }),
    })
    .model({
      inviteUserResponse_200: t.Object({}),
    })
    .model({
      registerConfirmResponse_200: t.Object({
        message: t.String(),
      }),
    })
    .model({
      refreshTokenResponse_200: t.Object({
        access_token: t.String(),
        refresh_token: t.String(),
      }),
    })
    .model({
      forgotPasswordResponse_200: t.Object({
        message: t.String(),
      }),
    })
    .model({
      mobileResponse_200: t.Object({
        message: t.String(),
      }),
    })
    .model({
      webResponse_200: t.Object({}),
    })

    .use(
      jwt({
        name: "jwt",
        secret: process.env.JWT_SECRET || "secret",
        schema: t.Object({
          id: t.String(),
          email: t.String(),
        }),
      })
    )

    // Login
    .post(
      "/api/auth/login",
      (ctx) => {
        const body = ctx.body;
        const fn = login(body, ctx.jwt);
        return Response.json(fn, { status: fn.status });
      },
      {
        body: t.Object({
          email: t.String({
            description: "User email address",
          }),
          password: t.String({
            description: "User password",
          }),
        }),
        response: {
          200: "loginResponse_200",
          401: "loginResponse_401",
          500: "loginResponse_500",
        },
        detail: {
          tags: ["auth"],
          summary: "Login to the system",
          description:
            "Authenticate user with email and password to receive access and refresh tokens",
          requestBody: {
            content: {
              "application/json": {
                examples: {
                  "Login as Admin": {
                    summary: "Login as Admin",
                    value: {
                      email: "admin@example.com",
                      password: "123456",
                    },
                  },
                  "Login as Manager": {
                    summary: "Login as Manager",
                    value: {
                      email: "manager@example.com",
                      password: "123456",
                    },
                  },
                  "Login as Purchaser": {
                    summary: "Login as Purchaser",
                    value: {
                      email: "purchaser@example.com",
                      password: "123456",
                    },
                  },
                  "Login as Accountant": {
                    summary: "Login as Accountant",
                    value: {
                      email: "accountant@example.com",
                      password: "123456",
                    },
                  },
                  "Login as Warehouse": {
                    summary: "Login as Warehouse",
                    value: {
                      email: "warehouse@example.com",
                      password: "123456",
                    },
                  },
                  "Login as Sales": {
                    summary: "Login as Sales",
                    value: {
                      email: "sales@example.com",
                      password: "123456",
                    },
                  },
                  "Login as HR": {
                    summary: "Login as HR",
                    value: {
                      email: "hr@example.com",
                      password: "123456",
                    },
                  },
                  "Login as Guest": {
                    summary: "Login as Guest",
                    value: {
                      email: "guest@example.com",
                      password: "123456",
                    },
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
    .post(
      "/api/auth/register-confirm",
      ({ params, query, body, headers }) => {
        return Response.json(resNotImplemented, { status: 501 });
      }
    )

    // Refresh Token
    .post("/api/auth/refresh-token", ({ params, query, body, headers }) => {
      return Response.json(resNotImplemented, { status: 501 });
    })

    // Forgot Password
    .post(
      "/api/auth/forgot-password",
      ({ params, query, body, headers }) => {
        return Response.json(resNotImplemented, { status: 501 });
      }
    )

    // Mobile Auth
    .post("/api/auth/mobile", ({ params, query, body, headers }) => {
      return Response.json(resNotImplemented, { status: 501 });
    })

    // Web Auth
    .post("/api/auth/web", ({ params, query, body, headers }) => {
      return Response.json(resNotImplemented, { status: 501 });
    });

// Login function implementation
function login(body: LoginRequest, jwt: any): LoginResponse | LoginError & { status: number } {
  const user = users.users.find((user) => user.email === body.email);
  
  if (!user) {
    return { status: 401, message: "Invalid login credentials" };
  }

  if (user.password !== body.password) {
    return { status: 401, message: "Invalid login credentials" };
  }

  if (!process.env.JWT_SECRET) {
    return { status: 500, message: "JWT secret is not configured" };
  }

  const refresh_token = jwt.sign(
    {
      id: user.id,
      email: user.email,
    },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );

  const access_token = jwt.sign(
    {
      id: user?.id,
      email: user?.email,
    },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );

  return {
    status: 200,
    access_token,
    refresh_token,
  };
}

function logout(token: string) {
  return { status: 200, message: "Logged out" };
}
