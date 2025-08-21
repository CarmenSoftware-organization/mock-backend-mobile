import type { Elysia } from "elysia";

export default (app: Elysia) =>
  app
  .post('/api/xxx', {
    schema: {
      body: Object({
        username: String(),
        password: String(),
      }),
      response: Object({
        status: Number(),
        message: String(),
        data: Object({
          token: String(),
        }),
      }),
    },
  })
    // Login
    .post("/api/auth/login", ({ params, query, body, headers }) => (null))
    
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

