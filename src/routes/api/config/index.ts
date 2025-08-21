import type { Elysia } from "elysia";

export default (app: Elysia) =>
  app
    // Currencies
    .get("/api/config/currencies", ({ params, query, body, headers }) => (null))
    .post("/api/config/currencies", ({ params, query, body, headers }) => (null))
    .get("/api/config/currencies/:id", ({ params, query, body, headers }) => (null))
    .put("/api/config/currencies/:id", ({ params, query, body, headers }) => (null))
    .patch("/api/config/currencies/:id", ({ params, query, body, headers }) => (null))
    .delete("/api/config/currencies/:id", ({ params, query, body, headers }) => (null))
    
    // Delivery Point
    .get("/api/config/delivery-point", ({ params, query, body, headers }) => (null))
    .post("/api/config/delivery-point", ({ params, query, body, headers }) => (null))
    .get("/api/config/delivery-point/:id", ({ params, query, body, headers }) => (null))
    .put("/api/config/delivery-point/:id", ({ params, query, body, headers }) => (null))
    .patch("/api/config/delivery-point/:id", ({ params, query, body, headers }) => (null))
    .delete("/api/config/delivery-point/:id", ({ params, query, body, headers }) => (null))
    
    // Departments
    .get("/api/config/departments", ({ params, query, body, headers }) => (null))
    .post("/api/config/departments", ({ params, query, body, headers }) => (null))
    .get("/api/config/departments/:id", ({ params, query, body, headers }) => (null))
    .put("/api/config/departments/:id", ({ params, query, body, headers }) => (null))
    .patch("/api/config/departments/:id", ({ params, query, body, headers }) => (null))
    .delete("/api/config/departments/:id", ({ params, query, body, headers }) => (null))
    
    // Exchange Rate
    .get("/api/config/exchange-rate", ({ params, query, body, headers }) => (null))
    .post("/api/config/exchange-rate", ({ params, query, body, headers }) => (null))
    .get("/api/config/exchange-rate/:id", ({ params, query, body, headers }) => (null))
    .put("/api/config/exchange-rate/:id", ({ params, query, body, headers }) => (null))
    .patch("/api/config/exchange-rate/:id", ({ params, query, body, headers }) => (null))
    .delete("/api/config/exchange-rate/:id", ({ params, query, body, headers }) => (null))
    
    // Locations
    .get("/api/config/locations", ({ params, query, body, headers }) => (null))
    .post("/api/config/locations", ({ params, query, body, headers }) => (null))
    .get("/api/config/locations/:id", ({ params, query, body, headers }) => (null))
    .put("/api/config/locations/:id", ({ params, query, body, headers }) => (null))
    .patch("/api/config/locations/:id", ({ params, query, body, headers }) => (null))
    .delete("/api/config/locations/:id", ({ params, query, body, headers }) => (null))
    
    // Price List
    .get("/api/config/price-list", ({ params, query, body, headers }) => (null))
    .post("/api/config/price-list", ({ params, query, body, headers }) => (null))
    .post("/api/config/price-list/upload-excel", ({ params, query, body, headers }) => (null))
    .get("/api/config/price-list/:id", ({ params, query, body, headers }) => (null))
    .put("/api/config/price-list/:id", ({ params, query, body, headers }) => (null))
    .patch("/api/config/price-list/:id", ({ params, query, body, headers }) => (null))
    .delete("/api/config/price-list/:id", ({ params, query, body, headers }) => (null))
    .get("/api/config/price-list/:id/download-excel", ({ params, query, body, headers }) => (null))
    
    // Products
    .get("/api/config/products", ({ params, query, body, headers }) => (null))
    .post("/api/config/products", ({ params, query, body, headers }) => (null))
    .get("/api/config/products/:id", ({ params, query, body, headers }) => (null))
    .put("/api/config/products/:id", ({ params, query, body, headers }) => (null))
    .patch("/api/config/products/:id", ({ params, query, body, headers }) => (null))
    .delete("/api/config/products/:id", ({ params, query, body, headers }) => (null))
    
    // Products Category
    .get("/api/config/products/category", ({ params, query, body, headers }) => (null))
    .post("/api/config/products/category", ({ params, query, body, headers }) => (null))
    .get("/api/config/products/category/:id", ({ params, query, body, headers }) => (null))
    .put("/api/config/products/category/:id", ({ params, query, body, headers }) => (null))
    .patch("/api/config/products/category/:id", ({ params, query, body, headers }) => (null))
    .delete("/api/config/products/category/:id", ({ params, query, body, headers }) => (null))
    
    // Products Item Group
    .get("/api/config/products/item-group", ({ params, query, body, headers }) => (null))
    .post("/api/config/products/item-group", ({ params, query, body, headers }) => (null))
    .get("/api/config/products/item-group/:id", ({ params, query, body, headers }) => (null))
    .put("/api/config/products/item-group/:id", ({ params, query, body, headers }) => (null))
    .patch("/api/config/products/item-group/:id", ({ params, query, body, headers }) => (null))
    .delete("/api/config/products/item-group/:id", ({ params, query, body, headers }) => (null))
    
    // Products Sub Category
    .get("/api/config/products/sub-category", ({ params, query, body, headers }) => (null))
    .post("/api/config/products/sub-category", ({ params, query, body, headers }) => (null))
    .get("/api/config/products/sub-category/:id", ({ params, query, body, headers }) => (null))
    .put("/api/config/products/sub-category/:id", ({ params, query, body, headers }) => (null))
    .patch("/api/config/products/sub-category/:id", ({ params, query, body, headers }) => (null))
    .delete("/api/config/products/sub-category/:id", ({ params, query, body, headers }) => (null))
    
    // Units
    .get("/api/config/units", ({ params, query, body, headers }) => (null))
    .post("/api/config/units", ({ params, query, body, headers }) => (null))
    .get("/api/config/units/:id", ({ params, query, body, headers }) => (null))
    .put("/api/config/units/:id", ({ params, query, body, headers }) => (null))
    .patch("/api/config/units/:id", ({ params, query, body, headers }) => (null))
    .delete("/api/config/units/:id", ({ params, query, body, headers }) => (null))
    
    // Vendors
    .get("/api/config/vendors", ({ params, query, body, headers }) => (null))
    .post("/api/config/vendors", ({ params, query, body, headers }) => (null))
    .get("/api/config/vendors/:id", ({ params, query, body, headers }) => (null))
    .put("/api/config/vendors/:id", ({ params, query, body, headers }) => (null))
    .patch("/api/config/vendors/:id", ({ params, query, body, headers }) => (null))
    .delete("/api/config/vendors/:id", ({ params, query, body, headers }) => (null))
    
    // Workflows
    .get("/api/config/workflows", ({ params, query, body, headers }) => (null))
    .post("/api/config/workflows", ({ params, query, body, headers }) => (null))
    .get("/api/config/workflows/:id", ({ params, query, body, headers }) => (null))
    .put("/api/config/workflows/:id", ({ params, query, body, headers }) => (null))
    .patch("/api/config/workflows/:id", ({ params, query, body, headers }) => (null))
    .delete("/api/config/workflows/:id", ({ params, query, body, headers }) => (null))
    
    // Running Code
    .get("/api/config/running-code", ({ params, query, body, headers }) => (null))
    .post("/api/config/running-code", ({ params, query, body, headers }) => (null))
    .get("/api/config/running-code/:id", ({ params, query, body, headers }) => (null))
    .put("/api/config/running-code/:id", ({ params, query, body, headers }) => (null))
    .patch("/api/config/running-code/:id", ({ params, query, body, headers }) => (null))
    .delete("/api/config/running-code/:id", ({ params, query, body, headers }) => (null))
    .get("/api/config/running-code/result/:type", ({ params, query, body, headers }) => (null))
    
    // Vendor Business Type
    .get("/api/config/vendor-business-type", ({ params, query, body, headers }) => (null))
    .post("/api/config/vendor-business-type", ({ params, query, body, headers }) => (null))
    .get("/api/config/vendor-business-type/:id", ({ params, query, body, headers }) => (null))
    .put("/api/config/vendor-business-type/:id", ({ params, query, body, headers }) => (null))
    .patch("/api/config/vendor-business-type/:id", ({ params, query, body, headers }) => (null))
    .delete("/api/config/vendor-business-type/:id", ({ params, query, body, headers }) => (null))
    
    // Credit Term
    .get("/api/config/credit-term", ({ params, query, body, headers }) => (null))
    .post("/api/config/credit-term", ({ params, query, body, headers }) => (null))
    .get("/api/config/credit-term/:id", ({ params, query, body, headers }) => (null))
    .put("/api/config/credit-term/:id", ({ params, query, body, headers }) => (null))
    .patch("/api/config/credit-term/:id", ({ params, query, body, headers }) => (null))
    .delete("/api/config/credit-term/:id", ({ params, query, body, headers }) => (null))
    
    // Extra Cost Type
    .get("/api/config/extra-cost-type", ({ params, query, body, headers }) => (null))
    .post("/api/config/extra-cost-type", ({ params, query, body, headers }) => (null))
    .get("/api/config/extra-cost-type/:id", ({ params, query, body, headers }) => (null))
    .put("/api/config/extra-cost-type/:id", ({ params, query, body, headers }) => (null))
    .patch("/api/config/extra-cost-type/:id", ({ params, query, body, headers }) => (null))
    .delete("/api/config/extra-cost-type/:id", ({ params, query, body, headers }) => (null))
    
    // Tax Profile
    .get("/api/config/tax-profile", ({ params, query, body, headers }) => (null))
    .post("/api/config/tax-profile", ({ params, query, body, headers }) => (null))
    .get("/api/config/tax-profile/:id", ({ params, query, body, headers }) => (null))
    .put("/api/config/tax-profile/:id", ({ params, query, body, headers }) => (null))
    .patch("/api/config/tax-profile/:id", ({ params, query, body, headers }) => (null))
    .delete("/api/config/tax-profile/:id", ({ params, query, body, headers }) => (null));

