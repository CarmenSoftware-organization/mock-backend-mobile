import type { Elysia } from "elysia";
import { mockUsers, getUserProfileResponse, getNewUserProfileResponse, UUID_MAPPING } from "@mockdata/index";
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
        let userProfile = getNewUserProfileResponse(currentUser.id as string);
        
        // Fallback to test@test.com user if profile not found
        if (!userProfile) {
          userProfile = getNewUserProfileResponse(UUID_MAPPING['user-008']); // test@test.com as fallback
        }
        
        // If still no profile, return demo data matching the required pattern
        if (!userProfile) {
          userProfile = {
            id: "1bfdb891-58ee-499c-8115-34a964de8122",
            email: "test@test.com",
            user_info: {
              firstname: "test",
              middlename: "",
              lastname: "test"
            },
            business_unit: [
              {
                id: "c8aa7601-6a25-42fc-8a23-9f4de373fb4f",
                name: "BU-CARMEN-1",
                is_default: true,
                department: {
                  is_hod: false,
                  id: "9722b9f0-7646-4f06-a0f5-2f7ffccdedef",
                  name: "Front Office"
                },
                config: {
                  hotel: {
                    name: "The Yama Phuket Hotel",
                    email: "fc@theyamaphuket.com",
                    address: "5 Patak Soi 2,  Karon, Muang Phuket, Phuket, 83100",
                    country: "THAILAND",
                    zip_code: "83100",
                    telephone: "076-303-456"
                  },
                  company: {
                    name: "Puranakarn Co., Ltd   (Head Office)",
                    email: "fc@theyamaphuket.com",
                    address: "5 Patak Soi 2,  Karon, Muang Phuket, Phuket, 83100",
                    country: "THAILAND",
                    zip_code: "83100",
                    telephone: "076-303-456"
                  },
                  tax_id: "0835553001610",
                  branch_no: "00000",
                  calculation_method: "AVG",
                  currency_base: "THB",
                  date_format: "dd/mm/yyyy",
                  long_time_format: "HH:mm:ss",
                  short_time_format: "HH:mm",
                  timezone: "Asia/Bangkok",
                  perpage: "20",
                  amount: {
                    locales: "th-TH",
                    minimumIntegerDigits: 2
                  },
                  quantity: {
                    locales: "th-TH",
                    minimumIntegerDigits: 2
                  },
                  recipe: {
                    locales: "th-TH",
                    minimumIntegerDigits: 3
                  }
                }
              },
              {
                id: "1ced51eb-8f3b-46c3-ac63-08e6520ce004",
                name: "BU-CARMEN-2",
                is_default: false,
                department: {
                  is_hod: false,
                  id: "9722b9f0-7646-4f06-a0f5-2f7ffccdedef",
                  name: "Front Office"
                },
                config: {
                  hotel: {
                    name: "The Yama Phuket Hotel",
                    email: "fc@theyamaphuket.com",
                    address: "5 Patak Soi 2,  Karon, Muang Phuket, Phuket, 83100",
                    country: "THAILAND",
                    zip_code: "83100",
                    telephone: "076-303-456"
                  },
                  company: {
                    name: "Puranakarn Co., Ltd   (Head Office)",
                    email: "fc@theyamaphuket.com",
                    address: "5 Patak Soi 2,  Karon, Muang Phuket, Phuket, 83100",
                    country: "THAILAND",
                    zip_code: "83100",
                    telephone: "076-303-456"
                  },
                  tax_id: "0835553001610",
                  branch_no: "00000",
                  calculation_method: "FIFO",
                  currency_base: "THB",
                  date_format: "dd/mm/yyyy",
                  long_time_format: "HH:mm:ss",
                  short_time_format: "HH:mm",
                  timezone: "Asia/Bangkok",
                  perpage: "20",
                  amount: {
                    locales: "th-TH",
                    minimumIntegerDigits: 2
                  },
                  quantity: {
                    locales: "th-TH",
                    minimumIntegerDigits: 2
                  },
                  recipe: {
                    locales: "th-TH",
                    minimumIntegerDigits: 3
                  }
                }
              },
              {
                id: "357929b2-34ee-4765-8550-d956de9a46c3",
                name: "BU-CARMEN-3",
                is_default: false,
                department: {
                  is_hod: false,
                  id: "9406b74e-22f5-4dec-bda8-5f7a200bc9f5",
                  name: "New payload dp"
                },
                config: {
                  hotel: {
                    name: "The Yama Phuket Hotel",
                    email: "fc@theyamaphuket.com",
                    address: "5 Patak Soi 2,  Karon, Muang Phuket, Phuket, 83100",
                    country: "THAILAND",
                    zip_code: "83100",
                    telephone: "076-303-456"
                  },
                  company: {
                    name: "Puranakarn Co., Ltd   (Head Office)",
                    email: "fc@theyamaphuket.com",
                    address: "5 Patak Soi 2,  Karon, Muang Phuket, Phuket, 83100",
                    country: "THAILAND",
                    zip_code: "83100",
                    telephone: "076-303-456"
                  },
                  tax_id: "0835553001610",
                  branch_no: "00000",
                  calculation_method: "AVG",
                  currency_base: "THB",
                  date_format: "dd/MM/yyyy",
                  long_time_format: "HH:mm:ss",
                  short_time_format: "HH:mm",
                  timezone: "Asia/Bangkok",
                  perpage: "20",
                  amount: {
                    locales: "th-TH",
                    minimumIntegerDigits: 2
                  },
                  quantity: {
                    locales: "th-TH",
                    minimumIntegerDigits: 2
                  },
                  recipe: {
                    locales: "th-TH",
                    minimumIntegerDigits: 3
                  }
                }
              }
            ]
          };
        }

        return userProfile;

      } catch (error) {
        set.status = 500;
        return {
          message: error instanceof Error ? error.message : "Internal server error"
        };
      }
    }, {
      detail: {
        tags: ["user"],
        summary: "Get user profile",
        description: "Get user profile",
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