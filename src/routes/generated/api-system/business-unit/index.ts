import type { Elysia } from "elysia";

const register = (app: Elysia) =>
  app
    // Business Unit
    .get("/api-system/business-unit", ({ params, query, body, headers }) => (null))
    .post("/api-system/business-unit", ({ params, query, body, headers }) => (null))
    
    // Business Unit by ID
    .get("/api-system/business-unit/:id", ({ params, query, body, headers }) => (null))
    .put("/api-system/business-unit/:id", ({ params, query, body, headers }) => (null))
    .delete("/api-system/business-unit/:id", ({ params, query, body, headers }) => (null))
    
    // Business Unit System Configs
    .get("/api-system/business-unit/:id/system-configs", ({ params, query, body, headers }) => (null))
    
    // Business Unit Configs
    .get("/api-system/business-unit/:id/configs", ({ params, query, body, headers }) => (null))
    .put("/api-system/business-unit/:id/configs", ({ params, query, body, headers }) => (null))
    .patch("/api-system/business-unit/:id/configs", ({ params, query, body, headers }) => (null))
    
    // Business Unit Configs by Key
    .get("/api-system/business-unit/:id/configs/:key", ({ params, query, body, headers }) => (null))
    .delete("/api-system/business-unit/:id/configs/:key", ({ params, query, body, headers }) => (null))
    
    // Business Unit Configs Exists
    .get("/api-system/business-unit/:id/configs/:key/exists", ({ params, query, body, headers }) => (null));

export default register;