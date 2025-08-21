import type { Elysia } from "elysia";
import { mockUsers, getUserProfile, getAllUsersWithBusinessUnits } from "../../../mockdata/users";

export default (app: Elysia) =>
  app
    // Get all users in tenant
    .get("/api/user", ({ params, query, body, headers }) => {
      try {
        const users = getAllUsersWithBusinessUnits();
        return {
          success: true,
          data: users,
          message: "Users retrieved successfully",
          timestamp: new Date().toISOString()
        };
      } catch (error) {
        return {
          success: false,
          error: "Failed to retrieve users",
          message: error instanceof Error ? error.message : "Unknown error",
          timestamp: new Date().toISOString()
        };
      }
    })
    
    // Get user profile
    .get("/api/user/profile", ({ params, query, body, headers }) => {
      try {
        // In a real app, this would get the user ID from JWT token
        // For now, return the first user as an example
        const userProfile = getUserProfile(mockUsers[0].id);
        
        if (!userProfile) {
          return {
            success: false,
            error: "User not found",
            message: "User profile not found",
            timestamp: new Date().toISOString()
          };
        }

        return {
          success: true,
          data: userProfile,
          message: "User profile retrieved successfully",
          timestamp: new Date().toISOString()
        };
      } catch (error) {
        return {
          success: false,
          error: "Failed to retrieve user profile",
          message: error instanceof Error ? error.message : "Unknown error",
          timestamp: new Date().toISOString()
        };
      }
    })

    // Get user by ID
    .get("/api/user/:id", ({ params, query, body, headers }) => {
      try {
        const { id } = params;
        const userProfile = getUserProfile(id);
        
        if (!userProfile) {
          return {
            success: false,
            error: "User not found",
            message: `User with ID ${id} not found`,
            timestamp: new Date().toISOString()
          };
        }

        return {
          success: true,
          data: userProfile,
          message: "User retrieved successfully",
          timestamp: new Date().toISOString()
        };
      } catch (error) {
        return {
          success: false,
          error: "Failed to retrieve user",
          message: error instanceof Error ? error.message : "Unknown error",
          timestamp: new Date().toISOString()
        };
      }
    });