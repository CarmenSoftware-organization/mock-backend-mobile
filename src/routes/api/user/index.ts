import type { Elysia } from "elysia";
import {
  resInternalServerError,
  resNotFound,
  resUnauthorized,
} from "@libs/res.error";
import { jwt } from "@elysiajs/jwt";
import { t } from "elysia";

// Mock users data
const mockUsers = [
  {
    id: "user-123",
    name: "John Doe",
    email: "john.doe@company.com",
    firstname: "John",
    middlename: "",
    lastname: "Doe",
    is_active: true
  },
  {
    id: "user-456",
    name: "Jane Smith",
    email: "jane.smith@company.com",
    firstname: "Jane",
    middlename: "",
    lastname: "Smith",
    is_active: true
  },
  {
    id: "user-789",
    name: "Bob Johnson",
    email: "bob.johnson@company.com",
    firstname: "Bob",
    middlename: "",
    lastname: "Johnson",
    is_active: false
  }
];

export default (app: Elysia) =>
  app

    .use(
      jwt({
        name: "jwt",
        secret: process.env.JWT_SECRET || "secret",
      })
    )

    // Get all users in tenant
    .get("/api/user", ({ params, query, body, headers }) => {
      try {
        // Get all users from mock data
        const allUsers = mockUsers;
        return {
          success: true,
          data: allUsers,
          message: "Users retrieved successfully",
          timestamp: new Date().toISOString(),
        };
      } catch (error) {
        return {
          success: false,
          error: "Failed to retrieve users",
          message: error instanceof Error ? error.message : "Unknown error",
          timestamp: new Date().toISOString(),
        };
      }
    })

    // Get user profile
    .get(
      "/api/user/profile",
      async ({ jwt, params, query, body, headers, set }) => {
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

        let res = {};

        try {
          // Get the actual user from mock data
          let user = mockUsers.find((u: any) => u.id === currentUser.id);

          // Fallback to first user if current user not found
          if (!user) {
            user = mockUsers[0] || null;
          }

          // If no user found, return error
          if (!user) {
            return resNotFound("User not found");
          }

          // Use user data directly since we don't have separate profile table
          const userProfile = {
            user_id: user.id,
            firstname: user.firstname || user.name?.split(' ')[0] || 'Unknown',
            middlename: user.middlename || '',
            lastname: user.lastname || user.name?.split(' ').slice(1).join(' ') || 'Unknown'
          };

          res = {
            id: user.id,
            email: user.email,
            user_info: {
              firstname: userProfile.firstname,
              middlename: userProfile.middlename,
              lastname: userProfile.lastname,
            },
            business_unit: "",
          };

          // Return the actual user data from mock database
          return res;
        } catch (error) {
          return resInternalServerError(
            error instanceof Error ? error.message : "Unknown error"
          );
        }
      },
      {
        detail: {
          tags: ["user"],
          summary: "current user profile",
          description: "Get current user profile",
        },
      }
    )

    // Get user by ID
    .get("/api/user/:id", ({ params, query, body, headers }) => {
      try {
        const { id } = params;

        // Get user from mock data
        const userProfile = mockUsers.find((u: any) => u.id === id);

        if (!userProfile) {
          return {
            success: false,
            error: "User not found",
            message: `User with ID ${id} not found`,
            timestamp: new Date().toISOString(),
          };
        }

        return {
          success: true,
          data: userProfile,
          message: "User retrieved successfully",
          timestamp: new Date().toISOString(),
        };
      } catch (error) {
        return {
          success: false,
          error: "Failed to retrieve user",
          message: error instanceof Error ? error.message : "Unknown error",
          timestamp: new Date().toISOString(),
        };
      }
    });
