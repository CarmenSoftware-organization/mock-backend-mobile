import type { Elysia } from "elysia";
import {
  resInternalServerError,
  resNotFound,
  resUnauthorized,
} from "@libs/res.error";
import { jwt } from "@elysiajs/jwt";
import { t } from "elysia";
import {
  tbUser,
  tbUserProfile,
  tbBusinessUnit,
  tbUserTbBusinessUnit,
  tbDepartmentUser,
  tbDepartment,
} from "@/mockdata";

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
        const allUsers = tbUser.users;
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
          let user = tbUser.users.find((u: any) => u.id === currentUser.id);

          // Fallback to first user if current user not found
          if (!user) {
            user = tbUser.users[0] || null;
          }

          // If no user found, return error
          if (!user) {
            return resNotFound("User not found");
          }

          const user_info = tbUserProfile.userProfiles.find(
            (u: any) => u.user_id === user.id
          );

          // Use user data directly since we don't have separate profile table
          const userProfile = {
            firstname:
              user_info?.firstname ||
              user_info?.firstname?.split(" ")[0] ||
              "Unknown",
            middlename: user_info?.middlename || "",
            lastname:
              user_info?.lastname ||
              user_info?.lastname?.split(" ").slice(1).join(" ") ||
              "Unknown",
          };

          // get all bu list
          const bu_user = tbUserTbBusinessUnit.userBusinessUnits.filter(
            (u: any) => u.user_id === user.id
          );
          const business_unit = bu_user
            .filter((user_bu) =>
              tbBusinessUnit.businessUnits.find(
                (u) => u.id === user_bu.business_unit_id
              )
            )
            .map((user_bu) => {
              const getBU = tbBusinessUnit.businessUnits.find(
                (u) => u.id === user_bu.business_unit_id
              );

              const getDepartmentUser =
                tbDepartmentUser.getDepartmentUsersByUserId(user_bu.user_id);

              let departmentInfo = {};
              if (getDepartmentUser) {
                const getDepartment = tbDepartment.getDepartmentById(
                  getDepartmentUser[0].department_id
                );
                departmentInfo = {
                  id: getDepartment?.id,
                  name: getDepartment?.name,
                  is_hod: getDepartmentUser[0].is_hod,
                };
              }

              if (getBU) {
                return {
                  id: getBU.id,
                  name: getBU.name,
                  alias_name: getBU.alias_name,
                  is_default: user_bu.is_default,
                  department: departmentInfo,
                };
              }
              return {
                id: user_bu.business_unit_id,
                is_default: user_bu.is_default,
                department: departmentInfo,
              };
            });

          res = {
            id: user.id,
            email: user.email,
            user_info: userProfile,
            business_unit: business_unit,
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
