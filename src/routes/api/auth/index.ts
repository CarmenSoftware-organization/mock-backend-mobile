import { Elysia, t } from "elysia";
import { jwt } from "@elysiajs/jwt";
import { users } from "../../../mockdata";
import { resNotImplemented } from "../../library/res.error";

// Types for login functionality
type LoginDto = {
  email: string;
  password: string;
};

type LoginResponse = {
  status: number;
  access_token: string;
  refresh_token: string;
};

type LoginError = {
  status: number;
  message: string;
};

// JWT payload interface
type JWTPayload = {
  id: string;
  email: string;
}

export default (app: Elysia) =>
  app
    .model({
      loginDto: t.Object({
        email: t.String(),
        password: t.String(),
      }),
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
        const body = ctx.body as LoginDto;
        const fn = login(body, ctx.jwt);
        return Response.json(fn, { status: fn.status });
      },
      {
        body: "loginDto",
        response: {
          200: t.Object({
            access_token: t.String(),
            refresh_token: t.String(),
          }),
          401: t.Object({
            status: t.Number({ default: 401 }),
            message: t.String({ default: "Invalid login credentials" }),
          }),
          500: t.Object({
            status: t.Number({ default: 500 }),
            message: t.String({ default: "Internal Server Error" }),
          }),
        },
        detail: {
          tags: ["auth"],
          summary: "Login",
          description:
            "Authenticate user with email and password to receive access and refresh tokens",
          requestBody: {
            content: {
              "application/json": {
                examples: {
                  "Admin User": {
                    summary: "Login as Administrator",
                    description: "Full access to all system features",
                    value: {
                      email: "admin@example.com",
                      password: "123456",
                    },
                  },
                  "Manager User": {
                    summary: "Login as Manager",
                    description: "Management level access with approval rights",
                    value: {
                      email: "manager@example.com",
                      password: "123456",
                    },
                  },
                  "Purchaser User": {
                    summary: "Login as Purchaser",
                    description: "Purchase order and procurement access",
                    value: {
                      email: "purchaser@example.com",
                      password: "123456",
                    },
                  },
                  "Accountant User": {
                    summary: "Login as Accountant",
                    description: "Financial and accounting system access",
                    value: {
                      email: "accountant@example.com",
                      password: "123456",
                    },
                  },
                  "Warehouse User": {
                    summary: "Login as Warehouse Staff",
                    description: "Inventory and warehouse management access",
                    value: {
                      email: "warehouse@example.com",
                      password: "123456",
                    },
                  },
                  "Sales User": {
                    summary: "Login as Sales Staff",
                    description: "Sales and customer management access",
                    value: {
                      email: "sales@example.com",
                      password: "123456",
                    },
                  },
                  "HR User": {
                    summary: "Login as HR Staff",
                    description:
                      "Human resources and employee management access",
                    value: {
                      email: "hr@example.com",
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
): LoginResponse | (LoginError & { status: number }) {
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
