import type { Elysia } from "elysia";
import {
  resBadRequest,
  resError,
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
import { CheckHeaderHasAccessToken, CheckHeaderHasAppId } from "@/libs/header";

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
      async (ctx) => {

        // check app id
        const { error: appIdError } = CheckHeaderHasAppId(ctx.headers);
        if (appIdError) {
          ctx.set.status = 400;
          return resError(400, appIdError);
        }

        const { error, currentUser } = await CheckHeaderHasAccessToken(ctx.headers, ctx.jwt);
        if (error) {
          ctx.set.status = 401;
          return error;
        }

        let res = {};

        try {
          // Get the actual user from mock data
          let getUser = tbUser.users.find((u: any) => u.id === currentUser.id);

          // If no user found, return error
          if (!getUser) {
            return resNotFound("User not found");
          }

          const getUserInfo = tbUserProfile.userProfiles.find(
            (u: any) => u.user_id === getUser.id
          );

          // Use user data directly since we don't have separate profile table
          const cUserProfile = {
            firstname:
              getUserInfo?.firstname ||
              getUserInfo?.firstname?.split(" ")[0] ||
              "Unknown",
            middlename: getUserInfo?.middlename || "",
            lastname:
              getUserInfo?.lastname ||
              getUserInfo?.lastname?.split(" ").slice(1).join(" ") ||
              "Unknown",
          };

          // get all bu list
          const getUserBU = tbUserTbBusinessUnit.userBusinessUnits.filter(
            (u: any) => u.user_id === getUser.id
          );

          const cBusiness_unit = getUserBU
            .filter((user_bu) =>
              tbBusinessUnit.businessUnits.find(
                (u) => u.id === user_bu.business_unit_id
              )
            )
            .map((user_bu) => {
              const cBU = tbBusinessUnit.businessUnits.find(
                (u) => u.id === user_bu.business_unit_id
              );

              const cDepartmentUser =
                tbDepartmentUser.getDepartmentUsersByUserId(user_bu.user_id);

              let departmentInfo = {};
              if (cDepartmentUser) {
                const getDepartment = tbDepartment.getDepartmentById(
                  cDepartmentUser[0].department_id
                );
                departmentInfo = {
                  id: getDepartment?.id,
                  name: getDepartment?.name,
                  is_hod: cDepartmentUser[0].is_hod,
                };
              }

              if (cBU) {
                return {
                  id: cBU.id,
                  name: cBU.name,
                  alias_name: cBU.alias_name,
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
            id: getUser.id,
            email: getUser.email,
            user_info: cUserProfile,
            business_unit: cBusiness_unit,
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
