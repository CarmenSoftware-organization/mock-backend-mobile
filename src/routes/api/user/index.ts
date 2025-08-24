import type { Elysia } from "elysia";
import { mockUsers, getUserProfileResponse, UUID_MAPPING } from "@mockdata/index";
import { tbUserCrud, getUserWithDepartment } from "@mockdata/tables";
import { resNotFound, resUnauthorized } from "@libs/res.error";
import { jwt } from "@elysiajs/jwt";
import { t } from "elysia";

export default (app: Elysia) =>
  app

    .use(jwt({
      name: "jwt",
      secret: process.env.JWT_SECRET || "secret",
    }))

    // Get all users in tenant
    .get("/api/user", ({ params, query, body, headers }) => {
      try {
        // Get all users with their department relationships
        const usersWithDepartments = mockUsers.map((user: any) => {
          try {
            return getUserWithDepartment(user.id);
          } catch {
            return user;
          }
        });
        return {
          success: true,
          data: usersWithDepartments,
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
    .get("/api/user/profile", async ({ jwt, params, query, body, headers, set }) => {
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

      try {
        let userProfile = getUserProfileResponse(currentUser.id as string);
        
        // Fallback to first user (test@test.com) if profile not found
        if (!userProfile) {
          userProfile = getUserProfileResponse(UUID_MAPPING['user-002']); // John Doe as fallback
        }
        
        if (!userProfile) {
          set.status = 404;
          return resNotFound;
        }

        return userProfile;

      } catch (error) {
        set.status = 500;
        return {
          message: error instanceof Error ? error.message : "Internal server error"
        };
      }
    })

    // Get user by ID
    .get("/api/user/:id", ({ params, query, body, headers }) => {
      try {
        const { id } = params;
        
        // Try to get user with department relationship
        let userProfile;
        try {
          userProfile = getUserWithDepartment(id);
        } catch {
          // Fallback to basic user lookup
          userProfile = mockUsers.find((user: any) => user.id === id);
        }
        
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