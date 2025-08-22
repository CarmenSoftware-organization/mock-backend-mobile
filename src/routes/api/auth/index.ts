import { Elysia, t } from "elysia";
import { users } from "../../../mockdata";
import { bearer } from "@elysiajs/bearer";
import { jwt } from "@elysiajs/jwt";

const login_examples = [
  {
    name: "Login admin",
    value: {
      email: "admin@example.com",
      password: "123456",
    },
  },
  {
    name: "Login manager",
    value: {
      email: "manager@example.com",
      password: "123456",
    },
  },
  {
    name: "Login purchaser",
    value: {
      email: "purchaser@example.com",
      password: "123456",
    },
  },
  {
    name: "Login accountant",
    value: {
      email: "accountant@example.com",
      password: "123456",
    },
  },
  {
    name: "Login warehouse",
    value: {
      email: "warehouse@example.com",
      password: "123456",
    },
  },
  {
    name: "Login sales",
    value: {
      email: "sales@example.com",
      password: "123456",
    },
  },
  {
    name: "Login hr",
    value: {
      email: "hr@example.com",
      password: "123456",
    },
  },
];

export default (app: Elysia) =>
  app
    .model({
      login: t.Object({
        email: t.String(),
        password: t.String(),
      }),
    })
    .model({
      loginResponse: t.Object({
        access_token: t.String(),
        refresh_token: t.String(),
      }),
    })
    .model({
      logoutResponse: t.Object({
        message: t.String(),
      }),
    })
    .model({
      registerResponse: t.Object({
        message: t.String(),
      }),
    })
    .model({
      inviteUserResponse: t.Object({}),
    })
    .model({
      registerConfirmResponse: t.Object({
        message: t.String(),
      }),
    })
    .model({
      refreshTokenResponse: t.Object({
        access_token: t.String(),
        refresh_token: t.String(),
      }),
    })
    .model({
      forgotPasswordResponse: t.Object({
        message: t.String(),
      }),
    })
    .model({
      mobileResponse: t.Object({
        message: t.String(),
      }),
    })
    .model({
      webResponse: t.Object({
        message: t.String(),
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
        const body = ctx.body;
        const fn = login(body, jwt);
        return Response.json(fn, { status: fn.status });
      },
      {
        body: "login",
        response: {
          200: "loginResponse",
          401: t.Object({
            message: t.String(),
          }),
          500: t.Object({
            message: t.String(),
          }),
        },
        detail: {
          tags: ["auth"],
          summary: "Login",
          description: "Login to the system",
          examples: login_examples,
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
    .post("/api/auth/register", ({ params, query, body, headers }) => null)

    // Invite User
    .post("/api/auth/invite-user", ({ params, query, body, headers }) => null)

    // Register Confirm
    .post(
      "/api/auth/register-confirm",
      ({ params, query, body, headers }) => null
    )

    // Refresh Token
    .post("/api/auth/refresh-token", ({ params, query, body, headers }) => null)

    // Forgot Password
    .post(
      "/api/auth/forgot-password",
      ({ params, query, body, headers }) => null
    )

    // Mobile Auth
    .post("/api/auth/mobile", ({ params, query, body, headers }) => null)

    // Web Auth
    .post("/api/auth/web", ({ params, query, body, headers }) => null);

function login(body: { email: string; password: string }, jwt: any) {
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
    access_token,
    refresh_token,
  };
}

function logout(token: string) {
  return { status: 200, message: "Logged out" };
}
