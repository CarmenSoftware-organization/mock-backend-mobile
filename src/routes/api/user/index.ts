import type { Elysia } from "elysia";
import { getUserProfileResponse, getNewUserProfileResponse, UUID_MAPPING } from "@mockdata/index";
import { tbUserCrud, getUserWithDepartment } from "@mockdata/tables";
import { resNotFound, resUnauthorized } from "@libs/res.error";
import { jwt } from "@elysiajs/jwt";
import { t } from "elysia";
import { PARAM_X_APP_ID } from "@mockdata/const";

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
        const allUsers = tbUserCrud.findAll();
        const usersWithDepartments = allUsers.map((user: any) => {
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
        // Get the actual user from mock data
        let user = tbUserCrud.findById(currentUser.id as string);
        
        // Fallback to first active user if current user not found
        if (!user) {
          const activeUsers = tbUserCrud.findActive();
          user = activeUsers.length > 0 ? activeUsers[0] : null;
        }
        
        // If no user found, return error
        if (!user) {
          set.status = 404;
          return {
            success: false,
            error: "User not found",
            message: "User profile not found",
            timestamp: new Date().toISOString()
          };
        }

        // Return the actual user data from mock database
        return {
          success: true,
          data: user,
          message: "User profile retrieved successfully",
          timestamp: new Date().toISOString()
        };

      } catch (error) {
        set.status = 500;
        return {
          message: error instanceof Error ? error.message : "Internal server error"
        };
      }
    }, {
      detail: {
        tags: ["user"],
        summary: "current user profile",
        description: "Get current user profile",
        parameters: [
          PARAM_X_APP_ID
        ],
      },
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
          userProfile = tbUserCrud.findById(id);
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