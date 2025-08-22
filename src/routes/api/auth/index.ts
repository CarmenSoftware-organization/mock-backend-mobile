import type { Elysia } from "elysia";
import { users } from "../../../mockdata";
import jwt from "jsonwebtoken";

export default (app: Elysia) =>
  app

  // Login
    .post("/api/auth/login", ({ params, query, body, headers }) => {
      return login(body as { username: string, password: string })
    })

    // Logout
    .post("/api/auth/logout", ({ params, query, body, headers }) => (null))
    
    // Register
    .post("/api/auth/register", ({ params, query, body, headers }) => (null))
    
    // Invite User
    .post("/api/auth/invite-user", ({ params, query, body, headers }) => (null))
    
    // Register Confirm
    .post("/api/auth/register-confirm", ({ params, query, body, headers }) => (null))
    
    // Refresh Token
    .post("/api/auth/refresh-token", ({ params, query, body, headers }) => (null))
    
    // Forgot Password
    .post("/api/auth/forgot-password", ({ params, query, body, headers }) => (null))
    
    // Mobile Auth
    .post("/api/auth/mobile", ({ params, query, body, headers }) => (null))
    
    // Web Auth
    .post("/api/auth/web", ({ params, query, body, headers }) => (null));


function login(body: { username: string, password: string }) {

  const user = users.users.find((user) => user.email === body.username);
  if (!user) {
    return {
        "status": 401,
        "message": "Invalid login credentials"
    }
  }

  if (user.password !== body.password) {
    return {
      "status": 401,
      "message": "Invalid login credentials"
    }
  }


  if (!process.env.JWT_SECRET) {
    return {
      status: 500,
      message: "JWT secret is not configured"
    };
  }

  const refresh_token = jwt.sign(
    {
      id: user.id,
      email: user.email
    },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );

  const access_token = jwt.sign({
    id: user?.id,
    email: user?.email
  }, process.env.JWT_SECRET, { expiresIn: '1d' });

  return {
    access_token,
    refresh_token
  }
}

