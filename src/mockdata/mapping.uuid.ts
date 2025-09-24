/**
 * UUID Mapping System for Mock Backend Mobile
 *
 * This file provides a centralized mapping system between human-readable constants
 * and their corresponding UUID values for use throughout the mock database system.
 *
 * Purpose:
 * - Maintains consistent UUID references across all mock data tables
 * - Provides legacy ID compatibility for systems migrating from numeric IDs
 * - Enables easy reference to specific records in test data and API responses
 * - Supports business unit filtering and multi-tenant data organization
 *
 * Usage:
 * ```typescript
 * import UUID_MAPPING, { getUuidByName, UuidMappingKey } from './mapping.uuid';
 *
 * const userId = UUID_MAPPING.USER_01;
 * const vendorId = getUuidByName('VENDOR_01');
 * ```
 *
 * @version 1.0.0
 * @author Carmen Software
 * @since 2024
 */

// =============================================================================
// TYPE DEFINITIONS
// =============================================================================

/**
 * Interface for UUID mapping entries
 */
export interface UuidMappingEntry {
  readonly uuid: string;
  readonly description?: string;
  readonly category: UuidCategory;
}

/**
 * Categories for organizing UUID mappings
 */
export type UuidCategory =
  | 'business_structure'
  | 'user_management'
  | 'product_catalog'
  | 'inventory'
  | 'procurement'
  | 'financial'
  | 'system_config'
  | 'workflow';

/**
 * Type for all available UUID mapping keys
 */
export type UuidMappingKey = keyof typeof UUID_MAPPING;

// =============================================================================
// UUID MAPPINGS BY CATEGORY
// =============================================================================

/**
 * Comprehensive UUID mapping for all mock data entities
 * Organized by functional domain for better maintainability
 */
const UUID_MAPPING = {
  // =============================================================================
  // BUSINESS STRUCTURE & ORGANIZATION
  // =============================================================================

  /**
   * Cluster and business unit hierarchy
   */
  CLUSTER_01: "86cfbef4-3eaa-4bc8-807f-16e66d243748",
  CLUSTER_02: "550e8400-e29b-41d4-a716-446655440002",
  CLUSTER_03: "550e8400-e29b-41d4-a716-446655440003",
  CLUSTER_04: "550e8400-e29b-41d4-a716-446655440004",
  CLUSTER_05: "550e8400-e29b-41d4-a716-446655440005",
  CLUSTER_06: "550e8400-e29b-41d4-a716-446655440006",
  CLUSTER_07: "550e8400-e29b-41d4-a716-446655440007",
  CLUSTER_08: "550e8400-e29b-41d4-a716-446655440008",
  CLUSTER_09: "550e8400-e29b-41d4-a716-446655440009",
  CLUSTER_10: "550e8400-e29b-41d4-a716-446655440010",

  BUSINESS_UNIT_01: "c2d68781-4293-4105-bd99-6488e0795cba",
  BUSINESS_UNIT_02: "0ea02e07-a751-4efa-aa7d-1cb53290faab",
  BUSINESS_UNIT_03: "0646b923-7f55-4371-9d04-92e7e202c3fe",
  BUSINESS_UNIT_04: "550e8400-e29b-41d4-a716-446655440004",
  BUSINESS_UNIT_05: "550e8400-e29b-41d4-a716-446655440005",
  BUSINESS_UNIT_06: "550e8400-e29b-41d4-a716-446655440006",
  BUSINESS_UNIT_07: "550e8400-e29b-41d4-a716-446655440007",
  BUSINESS_UNIT_08: "550e8400-e29b-41d4-a716-446655440008",
  BUSINESS_UNIT_09: "550e8400-e29b-41d4-a716-446655440009",
  BUSINESS_UNIT_10: "550e8400-e29b-41d4-a716-446655440010",

  /**
   * Business unit codes (string identifiers, not UUIDs)
   */
  BU_CODE_01: "carmen-1",
  BU_CODE_02: "carmen-2",
  BU_CODE_03: "carmen-3",
  BU_CODE_04: "carmen-4",
  BU_CODE_05: "carmen-5",
  BU_CODE_06: "carmen-6",
  BU_CODE_07: "carmen-7",
  BU_CODE_08: "carmen-8",
  BU_CODE_09: "carmen-9",
  BU_CODE_10: "carmen-10",

  /**
   * Cluster user assignments
   */
  CLUSTER_USER_01: "5b7e3a35-f56e-49d6-a0c6-2711339046d2",
  CLUSTER_USER_02: "23582fa8-a600-446f-bc14-586fd10cb3ac",
  CLUSTER_USER_03: "cacbef7c-8c60-4a53-bbfd-1af697d04438",
  CLUSTER_USER_04: "2f9a2d28-15a7-4476-bbb9-64a02278c328",
  CLUSTER_USER_05: "9622780b-69db-4361-83da-6d4c2819fd91",
  CLUSTER_USER_06: "48a716c6-5419-42a6-b11a-afe2bc99953d",
  CLUSTER_USER_07: "a2478412-7354-4f94-9208-6ca5ee3f1181",
  CLUSTER_USER_08: "5498dd7a-33de-4bb1-91fd-824abd44255a",
  CLUSTER_USER_09: "68975c10-94a4-4c7b-863c-7a4f63b59d61",
  CLUSTER_USER_10: "957ebe96-7241-4f3e-8b13-8b1413055216",

  /**
   * Department hierarchy
   */
  DEPARTMENT_01: "58cf5b1d-42c3-48f3-b838-ddc2f2cb8aee",
  DEPARTMENT_02: "6933d47b-ce92-4097-9c1b-3369e98c6b83",
  DEPARTMENT_03: "0622407c-3efa-4733-88df-c5a5a1484753",
  DEPARTMENT_04: "c97d1aba-fbd0-4362-9998-f8da65d9756c",
  DEPARTMENT_05: "3860d867-1932-46f3-b043-08e014e913a8",
  DEPARTMENT_06: "2c40509e-1249-4cd0-9190-f5dcbee0ad49",
  DEPARTMENT_07: "07043914-f76c-4a75-9f15-985f3a7771df",
  DEPARTMENT_08: "9acc883c-3711-416c-b520-8206db94386f",
  DEPARTMENT_09: "5cd8b813-70a0-470c-a947-468c3537b703",
  DEPARTMENT_10: "fbc2f454-87ab-4883-ae35-81d142197a4f",

  /**
   * Department user assignments
   */
  DEPARTMENT_USER_01: "d1f3e8b6-3c4a-4e5f-8a9b-0c1d2e3f4a5b",
  DEPARTMENT_USER_02: "e2f4a5b6-7c8d-9e0f-1a2b-3c4d5e6f7a8b",
  DEPARTMENT_USER_03: "f3a5b6c7-8d9e-0f1a-2b3c-4d5e6f7a8b9c",
  DEPARTMENT_USER_04: "a4b6c7d8-9e0f-1a2b-3c4d-5e6f7a8b9c0d",
  DEPARTMENT_USER_05: "b5c7d8e9-0f1a-2b3c-4d5e-6f7a8b9c0d1e",
  DEPARTMENT_USER_06: "c6d8e9f0-1a2b-3c4d-5e6f-7a8b9c0d1e2f",
  DEPARTMENT_USER_07: "d7e9f0a1-2b3c-4d5e-6f7a-8b9c0d1e2f3a",
  DEPARTMENT_USER_08: "e8f0a1b2-3c4d-5e6f-7a8b-9c0d1e2f3a4b",
  DEPARTMENT_USER_09: "f9a1b2c3-4d5e-6f7a-8b9c-0d1e2f3a4b5c",
  DEPARTMENT_USER_10: "0a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d",

  /**
   * Locations and delivery points
   */
  LOCATION_01: "550e8400-e29b-41d4-a716-446655440001",
  LOCATION_02: "550e8400-e29b-41d4-a716-446655440002",
  LOCATION_03: "550e8400-e29b-41d4-a716-446655440003",
  LOCATION_04: "550e8400-e29b-41d4-a716-446655440004",
  LOCATION_05: "550e8400-e29b-41d4-a716-446655440005",
  LOCATION_06: "550e8400-e29b-41d4-a716-446655440006",
  LOCATION_07: "550e8400-e29b-41d4-a716-446655440007",
  LOCATION_08: "550e8400-e29b-41d4-a716-446655440008",
  LOCATION_09: "550e8400-e29b-41d4-a716-446655440009",
  LOCATION_10: "550e8400-e29b-41d4-a716-446655440010",

  /**
   * Delivery points
   */
  DELIVERY_POINT_01: "8f9e4b2a-1c3d-4e5f-6a7b-8c9d0e1f2a3b",
  DELIVERY_POINT_02: "7e8d3c2b-0a1c-3d4e-5f6a-7b8c9d0e1f2a",
  DELIVERY_POINT_03: "6d7c2b1a-9e0d-2c3e-4f5a-6b7c8d9e0f1a",
  DELIVERY_POINT_04: "5c6b1a09-8d7c-1b2d-3e4f-5a6b7c8d9e0f",
  DELIVERY_POINT_05: "4b5a0908-7c6b-0a1c-2d3e-4f5a6b7c8d9e",
  DELIVERY_POINT_06: "3a490807-6b5a-9c0b-1d2e-3f4a5b6c7d8e",
  DELIVERY_POINT_07: "29480706-5a49-8b9a-0c1d-2e3f4a5b6c7d",
  DELIVERY_POINT_08: "18370605-4a38-7a89-9b0c-1d2e3f4a5b6c",
  DELIVERY_POINT_09: "07260504-3a27-6a78-8b9a-0c1d2e3f4a5b",
  DELIVERY_POINT_10: "f6150403-2a16-5a67-7a89-9b0c1d2e3f4a",

  // =============================================================================
  // USER MANAGEMENT & AUTHENTICATION
  // =============================================================================

  /**
   * System and regular users
   */
  USER_SYSTEM_ADMIN: "01549065-a0d1-49a7-ba19-f4d68e3fae1f",
  USER_ADMIN: "2a024699-e549-43fe-b005-b94ae1ddfbd0",
  USER_01: "9c5a43c9-a10d-4ae5-8122-dffe02b4ee2d",
  USER_02: "dc236fac-8945-4f9d-9505-e698eba89f58",
  USER_03: "1c2a8344-20d3-4d34-95bf-a7811ff93282",
  USER_04: "44c20e35-3e4a-49b0-a7f3-76d853385289",
  USER_05: "ba84412b-4808-4017-b23a-23c1121c4f3a",
  USER_06: "78d72fed-7d5b-479e-9382-c978422341c9",
  USER_07: "279e224d-c356-4998-a5e0-4f02bdac9dd6",
  USER_08: "ebeb3187-51ef-43c4-862e-6680960f8c15",
  USER_09: "ef9d709b-05ec-478a-b2e1-0146626be22f",
  USER_10: "f571ee65-7321-40f5-8506-ffc8b8771af4",

  /**
   * User profiles
   */
  USER_PROFILE_01: "74f74640-ec46-441d-8334-89783ac5caa8",
  USER_PROFILE_02: "861f4092-713f-4373-88bc-511821e11aaa",
  USER_PROFILE_03: "ff1e11db-3e76-437c-b9fc-df3fc431f614",
  USER_PROFILE_04: "af45404f-e380-4f6a-a4ba-87cb207fa357",
  USER_PROFILE_05: "e77e50dd-dc1e-4075-9918-8f6de435a4ac",
  USER_PROFILE_06: "07349ca9-7335-41eb-a748-b3fdb7eb0000",
  USER_PROFILE_07: "4ba828a5-d0ef-4e00-b7e4-d889c50d02fc",
  USER_PROFILE_08: "2f14f565-51f0-4504-adb5-9cef7dc41ada",
  USER_PROFILE_09: "90db6c9b-3d1f-4488-97fd-72ddf2d3665c",
  USER_PROFILE_10: "381e1fd6-b69e-41a6-af86-76714f845454",

  /**
   * User business unit assignments
   */
  USER_BUSINESS_UNIT_01: "a3754d66-ebd7-4111-92b6-2a3005679014",
  USER_BUSINESS_UNIT_02: "364e54e9-8742-4203-b367-4148ea18cab7",
  USER_BUSINESS_UNIT_03: "3987ff8c-873c-472c-998b-0abf4bd6bcd7",
  USER_BUSINESS_UNIT_04: "fe62d3f2-68a6-4f24-b150-86c51699b045",
  USER_BUSINESS_UNIT_05: "fe5c64ec-ccea-4c64-a39a-713f9c613294",
  USER_BUSINESS_UNIT_06: "253dc591-6be4-4cce-acae-6892027ccdc9",
  USER_BUSINESS_UNIT_07: "23737dc1-fe6a-4693-9a8b-59668743226c",
  USER_BUSINESS_UNIT_08: "1430dd45-4bb9-48ec-a69b-c2716bd7bfec",
  USER_BUSINESS_UNIT_09: "6554c1c9-b0b0-4f0c-85ce-9000a7b5640e",
  USER_BUSINESS_UNIT_10: "e132608d-fa54-4d01-be50-91354543780e",

  /**
   * User roles and permissions
   */
  USER_ROLE_01: "cc9a6b2c-558d-4993-aed1-3098104c1f4c",
  USER_ROLE_02: "72e56a8d-b234-4b0e-b1f5-27e6ba7ec3a7",
  USER_ROLE_03: "92cdf167-9f07-4b13-8646-e1d20109a7a6",
  USER_ROLE_04: "0a9d4c37-a0cc-49d5-94e8-7f42bb43e4be",
  USER_ROLE_05: "7854a0dc-d276-40f6-b832-ceda0428f780",
  USER_ROLE_06: "f96783d2-b311-4cea-9e1d-280c4d4c478a",
  USER_ROLE_07: "1c037b27-f6a5-4f24-a633-147e533f069b",
  USER_ROLE_08: "bb36e13e-22b7-4573-bdba-99f3a737566b",
  USER_ROLE_09: "b23b8a03-fb95-4993-8a86-cb1038fb441e",
  USER_ROLE_10: "03f34588-bdc4-48f0-abb3-3ec95e45c6e0",

  /**
   * User location assignments
   */
  USER_LOCATION_01: "c25de283-8b50-4c91-aaee-8da83c55b3ff",
  USER_LOCATION_02: "3ff59ad5-fb98-42da-ba74-86d2b7784714",
  USER_LOCATION_03: "0bcbdcef-2c8c-49aa-9d06-c2751cf8602f",
  USER_LOCATION_04: "93dece60-75bc-4d7d-9b5d-6c57922c5861",
  USER_LOCATION_05: "5978a51e-6962-4da6-9b0a-a89785e73f39",
  USER_LOCATION_06: "33f38e1d-5a29-4722-b762-182881a2d0f7",
  USER_LOCATION_07: "0cfe6434-0f7f-48fb-8770-ecb6d6337b7a",
  USER_LOCATION_08: "4d72f361-b8c1-45ca-b482-a40bc1e0a96e",
  USER_LOCATION_09: "6f28b17a-a991-4f1d-9804-b54edc542911",
  USER_LOCATION_10: "ba406a9e-b38a-43f0-b632-c9a5a435c3b5",

  // =============================================================================
  // PERMISSIONS & ACCESS CONTROL
  // =============================================================================

  /**
   * User permissions (consolidated for readability)
   */
  USER_PERMISSION_01: "751e843d-83af-4a41-8bf7-fb04286eb32d",
  USER_PERMISSION_02: "023a69da-1f58-4d20-b0ad-58ed69da6df2",
  USER_PERMISSION_03: "c1c6fee2-eb5c-4d02-918c-875d6efb5c9e",
  USER_PERMISSION_04: "f32e71f5-fc7a-4ebf-8d1a-21f65335bdc3",
  USER_PERMISSION_05: "a9b1ff0e-a742-4247-a57f-80db653f6497",
  USER_PERMISSION_06: "6b9e9d51-43bd-4436-820d-9d96da68e07a",
  USER_PERMISSION_07: "12af60a8-e8ef-412e-a27a-2f477d0c251b",
  USER_PERMISSION_08: "68a291c5-19da-4a10-a3da-407c81003379",
  USER_PERMISSION_09: "98703b32-43ab-4164-b182-c43e3a6d0dce",
  USER_PERMISSION_10: "b9261844-d92c-4f50-b21b-ca1cc7948b10",

  // =============================================================================
  // PRODUCT CATALOG & INVENTORY
  // =============================================================================

  /**
   * Product definitions
   */
  PRODUCT_01: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
  PRODUCT_02: "f47ac10b-58cc-4372-a567-0e02b2c3d480",
  PRODUCT_03: "f47ac10b-58cc-4372-a567-0e02b2c3d481",
  PRODUCT_04: "f47ac10b-58cc-4372-a567-0e02b2c3d482",
  PRODUCT_05: "f47ac10b-58cc-4372-a567-0e02b2c3d483",
  PRODUCT_06: "f47ac10b-58cc-4372-a567-0e02b2c3d484",
  PRODUCT_07: "f47ac10b-58cc-4372-a567-0e02b2c3d485",
  PRODUCT_08: "f47ac10b-58cc-4372-a567-0e02b2c3d486",
  PRODUCT_09: "f47ac10b-58cc-4372-a567-0e02b2c3d487",
  PRODUCT_10: "f47ac10b-58cc-4372-a567-0e02b2c3d488",

  /**
   * Product categories and classifications
   */
  PRODUCT_CATEGORY_01: "c7a5b6d4-3e2f-4a1b-8c9e-0d1f2a3b4c5d",
  PRODUCT_CATEGORY_02: "b6a4c5d3-2e1f-4a0b-7c8e-9d0f1a2b3c4d",
  PRODUCT_CATEGORY_03: "a5b3d4c2-1e0f-3a9b-6c7e-8d9f0a1b2c3d",
  PRODUCT_CATEGORY_04: "94c2e3b1-0e9f-2a8b-5c6e-7d8f9a0b1c2d",
  PRODUCT_CATEGORY_05: "83d1f2a0-9e8f-1a7b-4c5e-6d7f8a9b0c1d",
  PRODUCT_CATEGORY_06: "72e0g1b9-8d7f-0a6b-3c4e-5d6f7a8b9c0d",
  PRODUCT_CATEGORY_07: "61f9h0a8-7c6e-9a5b-2c3e-4d5f6a7b8c9d",
  PRODUCT_CATEGORY_08: "50g8i9b7-6c5d-8a4b-1c2e-3d4f5a6b7c8d",
  PRODUCT_CATEGORY_09: "4fh7j8a6-5b4c-7a3b-0c1e-2d3f4a5b6c7d",
  PRODUCT_CATEGORY_10: "3gi6k7b5-4a3b-6a2b-9c0e-1d2f3a4b5c6d",

  /**
   * Product sub-categories
   */
  PRODUCT_SUB_CATEGORY_01: "72e0g1b9-8d7f-0a6b-3c4e-5d6f7a8b9c0d",
  PRODUCT_SUB_CATEGORY_02: "61f9h0a8-7c6e-9a5b-2c3e-4d5f6a7b8c9d",
  PRODUCT_SUB_CATEGORY_03: "50g8i9b7-6c5d-8a4b-1c2e-3d4f5a6b7c8d",
  PRODUCT_SUB_CATEGORY_04: "4fh7j8a6-5b4c-7a3b-0c1e-2d3f4a5b6c7d",
  PRODUCT_SUB_CATEGORY_05: "3gi6k7b5-4a3b-6a2b-9c0e-1d2f3a4b5c6d",
  PRODUCT_SUB_CATEGORY_06: "2hj5l6a4-3a2b-5a1b-8c9e-0d1f2a3b4c5d",
  PRODUCT_SUB_CATEGORY_07: "1ik4m5b3-2a1b-4a0b-7c8e-9d0f1a2b3c4d",
  PRODUCT_SUB_CATEGORY_08: "0jl3n4a2-1a0b-3a9b-6c7e-8d9f0a1b2c3d",
  PRODUCT_SUB_CATEGORY_09: "9km2o3b1-0a9b-2a8b-5c6e-7d8f9a0b1c2d",
  PRODUCT_SUB_CATEGORY_10: "8ln1p2a0-9a8b-1a7b-4c5e-6d7f8a9b0c1d",

  /**
   * Product item groups
   */
  PRODUCT_ITEM_GROUP_01: "2hj5l6a4-3a2b-5a1b-8c9e-0d1f2a3b4c5d",
  PRODUCT_ITEM_GROUP_02: "1ik4m5b3-2a1b-4a0b-7c8e-9d0f1a2b3c4d",
  PRODUCT_ITEM_GROUP_03: "0jl3n4a2-1a0b-3a9b-6c7e-8d9f0a1b2c3d",
  PRODUCT_ITEM_GROUP_04: "9km2o3b1-0a9b-2a8b-5c6e-7d8f9a0b1c2d",
  PRODUCT_ITEM_GROUP_05: "8ln1p2a0-9a8b-1a7b-4c5e-6d7f8a9b0c1d",
  PRODUCT_ITEM_GROUP_06: "7mo0q1b9-8a7b-0a6b-3c4e-5d6f7a8b9c0d",
  PRODUCT_ITEM_GROUP_07: "6np9r0a8-7a6b-9a5b-2c3e-4d5f6a7b8c9d",
  PRODUCT_ITEM_GROUP_08: "5oq8s9b7-6a5b-8a4b-1c2e-3d4f5a6b7c8d",
  PRODUCT_ITEM_GROUP_09: "4pr7t8a6-5b4a-7a3b-0c1e-2d3f4a5b6c7d",
  PRODUCT_ITEM_GROUP_10: "3qs6u7b5-4a3a-6a2b-9c0e-1d2f3a4b5c6d",

  /**
   * Product location mappings
   */
  PRODUCT_LOCATION_01: "d4f6e3a1-8b9c-2d5e-7a4b-1c6f9e2a5b8c",
  PRODUCT_LOCATION_02: "c3e5d2b0-7a8b-1c4d-6a3b-0c5e8d1a4b7c",
  PRODUCT_LOCATION_03: "b2d4c1a9-6a7b-0c3d-5a2b-9c4e7d0a3b6c",
  PRODUCT_LOCATION_04: "a1c3b0a8-5a6b-9c2d-4a1b-8c3e6d9a2b5c",
  PRODUCT_LOCATION_05: "90b2a9b7-4a5b-8c1d-3a0b-7c2e5d8a1b4c",
  PRODUCT_LOCATION_06: "81a198b6-3a4b-7c0d-2a9b-6b1e4d7a0b3c",
  PRODUCT_LOCATION_07: "729087a5-2b3a-6b9c-1a8b-5a0e3d6b9a2c",
  PRODUCT_LOCATION_08: "618976a4-1a2b-5a8c-0b7a-4c9d2e5a8b1c",
  PRODUCT_LOCATION_09: "507865a3-0b1a-4b7c-9a6b-3d8e1f4a7b0c",
  PRODUCT_LOCATION_10: "4f6874a2-9a0b-3a6c-8b5a-2e7d0f3a6b9c",

  // =============================================================================
  // UNITS OF MEASUREMENT & CONVERSIONS
  // =============================================================================

  /**
   * Units of measurement
   */
  UNIT_01: "1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d",
  UNIT_02: "2b3c4d5e-6f7a-8b9c-0d1e-2f3a4b5c6d7e",
  UNIT_03: "3c4d5e6f-7a8b-9c0d-1e2f-3a4b5c6d7e8f",
  UNIT_04: "4d5e6f7a-8b9c-0d1e-2f3a-4b5c6d7e8f9a",
  UNIT_05: "5e6f7a8b-9c0d-1e2f-3a4b-5c6d7e8f9a0b",
  UNIT_06: "6f7a8b9c-0d1e-2f3a-4b5c-6d7e8f9a0b1c",
  UNIT_07: "7a8b9c0d-1e2f-3a4b-5c6d-7e8f9a0b1c2d",
  UNIT_08: "8b9c0d1e-2f3a-4b5c-6d7e-8f9a0b1c2d3e",
  UNIT_09: "9c0d1e2f-3a4b-5c6d-7e8f-9a0b1c2d3e4f",
  UNIT_10: "0d1e2f3a-4b5c-6d7e-8f9a-0b1c2d3e4f5g",

  /**
   * Unit conversions
   */
  UNIT_CONVERSION_01: "aa1b2c3d-4e5f-6a7b-8c9d-0e1f2a3b4c5d",
  UNIT_CONVERSION_02: "bb2c3d4e-5f6a-7b8c-9d0e-1f2a3b4c5d6e",
  UNIT_CONVERSION_03: "cc3d4e5f-6a7b-8c9d-0e1f-2a3b4c5d6e7f",
  UNIT_CONVERSION_04: "dd4e5f6a-7b8c-9d0e-1f2a-3b4c5d6e7f8a",
  UNIT_CONVERSION_05: "ee5f6a7b-8c9d-0e1f-2a3b-4c5d6e7f8a9b",
  UNIT_CONVERSION_06: "ff6a7b8c-9d0e-1f2a-3b4c-5d6e7f8a9b0c",
  UNIT_CONVERSION_07: "gg7b8c9d-0e1f-2a3b-4c5d-6e7f8a9b0c1d",
  UNIT_CONVERSION_08: "hh8c9d0e-1f2a-3b4c-5d6e-7f8a9b0c1d2e",
  UNIT_CONVERSION_09: "ii9d0e1f-2a3b-4c5d-6e7f-8a9b0c1d2e3f",
  UNIT_CONVERSION_10: "jj0e1f2a-3b4c-5d6e-7f8a-9b0c1d2e3f4g",

  // =============================================================================
  // PROCUREMENT & PURCHASE MANAGEMENT
  // =============================================================================

  /**
   * Purchase requests
   */
  PURCHASE_REQUEST_01: "pr1a2b3c-4d5e-6f7a-8b9c-0d1e2f3a4b5c",
  PURCHASE_REQUEST_02: "pr2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d",
  PURCHASE_REQUEST_03: "pr3c4d5e-6f7a-8b9c-0d1e-2f3a4b5c6d7e",
  PURCHASE_REQUEST_04: "pr4d5e6f-7a8b-9c0d-1e2f-3a4b5c6d7e8f",
  PURCHASE_REQUEST_05: "pr5e6f7a-8b9c-0d1e-2f3a-4b5c6d7e8f9a",
  PURCHASE_REQUEST_06: "pr6f7a8b-9b0d-1e2f-3a4b-5c6d7e8f9a0b",
  PURCHASE_REQUEST_07: "pr7a8b9c-0c1d-2e3f-4a5b-6d7e8f9a0b1c",
  PURCHASE_REQUEST_08: "pr8b9c0d-1d2e-3f4a-5b6c-7e8f9a0b1c2d",
  PURCHASE_REQUEST_09: "pr9c0d1e-2e3f-4a5b-6c7d-8f9a0b1c2d3e",
  PURCHASE_REQUEST_10: "pr0d1e2f-3f4a-5b6c-7d8e-9a0b1c2d3e4f",

  /**
   * Purchase request details
   */
  PURCHASE_REQUEST_DETAIL_01: "prd1a2b3-4d5e-6f7a-8b9c-0d1e2f3a4b5c",
  PURCHASE_REQUEST_DETAIL_02: "prd2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d",
  PURCHASE_REQUEST_DETAIL_03: "prd3c4d5-6f7a-8b9c-0d1e-2f3a4b5c6d7e",
  PURCHASE_REQUEST_DETAIL_04: "prd4d5e6-7a8b-9c0d-1e2f-3a4b5c6d7e8f",
  PURCHASE_REQUEST_DETAIL_05: "prd5e6f7-8b9c-0d1e-2f3a-4b5c6d7e8f9a",
  PURCHASE_REQUEST_DETAIL_06: "prd6f7a8-9b0d-1e2f-3a4b-5c6d7e8f9a0b",
  PURCHASE_REQUEST_DETAIL_07: "prd7a8b9-0c1d-2e3f-4a5b-6d7e8f9a0b1c",
  PURCHASE_REQUEST_DETAIL_08: "prd8b9c0-1d2e-3f4a-5b6c-7e8f9a0b1c2d",
  PURCHASE_REQUEST_DETAIL_09: "prd9c0d1-2e3f-4a5b-6c7d-8f9a0b1c2d3e",
  PURCHASE_REQUEST_DETAIL_10: "prd0d1e2-3f4a-5b6c-7d8e-9a0b1c2d3e4f",

  /**
   * Purchase orders
   */
  PURCHASE_ORDER_01: "po1a2b3c-4d5e-6f7a-8b9c-0d1e2f3a4b5c",
  PURCHASE_ORDER_02: "po2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d",
  PURCHASE_ORDER_03: "po3c4d5e-6f7a-8b9c-0d1e-2f3a4b5c6d7e",
  PURCHASE_ORDER_04: "po4d5e6f-7a8b-9c0d-1e2f-3a4b5c6d7e8f",
  PURCHASE_ORDER_05: "po5e6f7a-8b9c-0d1e-2f3a-4b5c6d7e8f9a",
  PURCHASE_ORDER_06: "po6f7a8b-9b0d-1e2f-3a4b-5c6d7e8f9a0b",
  PURCHASE_ORDER_07: "po7a8b9c-0c1d-2e3f-4a5b-6d7e8f9a0b1c",
  PURCHASE_ORDER_08: "po8b9c0d-1d2e-3f4a-5b6c-7e8f9a0b1c2d",
  PURCHASE_ORDER_09: "po9c0d1e-2e3f-4a5b-6c7d-8f9a0b1c2d3e",
  PURCHASE_ORDER_10: "po0d1e2f-3f4a-5b6c-7d8e-9a0b1c2d3e4f",

  /**
   * Purchase order details
   */
  PURCHASE_ORDER_DETAIL_01: "pod1a2b3-4d5e-6f7a-8b9c-0d1e2f3a4b5c",
  PURCHASE_ORDER_DETAIL_02: "pod2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d",
  PURCHASE_ORDER_DETAIL_03: "pod3c4d5-6f7a-8b9c-0d1e-2f3a4b5c6d7e",
  PURCHASE_ORDER_DETAIL_04: "pod4d5e6-7a8b-9c0d-1e2f-3a4b5c6d7e8f",
  PURCHASE_ORDER_DETAIL_05: "pod5e6f7-8b9c-0d1e-2f3a-4b5c6d7e8f9a",
  PURCHASE_ORDER_DETAIL_06: "pod6f7a8-9b0d-1e2f-3a4b-5c6d7e8f9a0b",
  PURCHASE_ORDER_DETAIL_07: "pod7a8b9-0c1d-2e3f-4a5b-6d7e8f9a0b1c",
  PURCHASE_ORDER_DETAIL_08: "pod8b9c0-1d2e-3f4a-5b6c-7e8f9a0b1c2d",
  PURCHASE_ORDER_DETAIL_09: "pod9c0d1-2e3f-4a5b-6c7d-8f9a0b1c2d3e",
  PURCHASE_ORDER_DETAIL_10: "pod0d1e2-3f4a-5b6c-7d8e-9a0b1c2d3e4f",

  /**
   * Store requisitions
   */
  STORE_REQUISITION_01: "sr1a2b3c-4d5e-6f7a-8b9c-0d1e2f3a4b5c",
  STORE_REQUISITION_02: "sr2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d",
  STORE_REQUISITION_03: "sr3c4d5e-6f7a-8b9c-0d1e-2f3a4b5c6d7e",
  STORE_REQUISITION_04: "sr4d5e6f-7a8b-9c0d-1e2f-3a4b5c6d7e8f",
  STORE_REQUISITION_05: "sr5e6f7a-8b9c-0d1e-2f3a-4b5c6d7e8f9a",
  STORE_REQUISITION_06: "sr6f7a8b-9b0d-1e2f-3a4b-5c6d7e8f9a0b",
  STORE_REQUISITION_07: "sr7a8b9c-0c1d-2e3f-4a5b-6d7e8f9a0b1c",
  STORE_REQUISITION_08: "sr8b9c0d-1d2e-3f4a-5b6c-7e8f9a0b1c2d",
  STORE_REQUISITION_09: "sr9c0d1e-2e3f-4a5b-6c7d-8f9a0b1c2d3e",
  STORE_REQUISITION_10: "sr0d1e2f-3f4a-5b6c-7d8e-9a0b1c2d3e4f",

  /**
   * Store requisition details
   */
  STORE_REQUISITION_DETAIL_01: "srd1a2b3-4d5e-6f7a-8b9c-0d1e2f3a4b5c",
  STORE_REQUISITION_DETAIL_02: "srd2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d",
  STORE_REQUISITION_DETAIL_03: "srd3c4d5-6f7a-8b9c-0d1e-2f3a4b5c6d7e",
  STORE_REQUISITION_DETAIL_04: "srd4d5e6-7a8b-9c0d-1e2f-3a4b5c6d7e8f",
  STORE_REQUISITION_DETAIL_05: "srd5e6f7-8b9c-0d1e-2f3a-4b5c6d7e8f9a",
  STORE_REQUISITION_DETAIL_06: "srd6f7a8-9b0d-1e2f-3a4b-5c6d7e8f9a0b",
  STORE_REQUISITION_DETAIL_07: "srd7a8b9-0c1d-2e3f-4a5b-6d7e8f9a0b1c",
  STORE_REQUISITION_DETAIL_08: "srd8b9c0-1d2e-3f4a-5b6c-7e8f9a0b1c2d",
  STORE_REQUISITION_DETAIL_09: "srd9c0d1-2e3f-4a5b-6c7d-8f9a0b1c2d3e",
  STORE_REQUISITION_DETAIL_10: "srd0d1e2-3f4a-5b6c-7d8e-9a0b1c2d3e4f",

  // =============================================================================
  // SUPPLIER & VENDOR MANAGEMENT
  // =============================================================================

  /**
   * Vendors
   */
  VENDOR_01: "vd1a2b3c-4d5e-6f7a-8b9c-0d1e2f3a4b5c",
  VENDOR_02: "vd2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d",
  VENDOR_03: "vd3c4d5e-6f7a-8b9c-0d1e-2f3a4b5c6d7e",
  VENDOR_04: "vd4d5e6f-7a8b-9c0d-1e2f-3a4b5c6d7e8f",
  VENDOR_05: "vd5e6f7a-8b9c-0d1e-2f3a-4b5c6d7e8f9a",
  VENDOR_06: "vd6f7a8b-9b0d-1e2f-3a4b-5c6d7e8f9a0b",
  VENDOR_07: "vd7a8b9c-0c1d-2e3f-4a5b-6d7e8f9a0b1c",
  VENDOR_08: "vd8b9c0d-1d2e-3f4a-5b6c-7e8f9a0b1c2d",
  VENDOR_09: "vd9c0d1e-2e3f-4a5b-6c7d-8f9a0b1c2d3e",
  VENDOR_10: "vd0d1e2f-3f4a-5b6c-7d8e-9a0b1c2d3e4f",

  // =============================================================================
  // WAREHOUSE & INVENTORY MANAGEMENT
  // =============================================================================

  /**
   * Good received notes
   */
  GOOD_RECEIVED_NOTE_01: "grn1a2b3-4d5e-6f7a-8b9c-0d1e2f3a4b5c",
  GOOD_RECEIVED_NOTE_02: "grn2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d",
  GOOD_RECEIVED_NOTE_03: "grn3c4d5-6f7a-8b9c-0d1e-2f3a4b5c6d7e",
  GOOD_RECEIVED_NOTE_04: "grn4d5e6-7a8b-9c0d-1e2f-3a4b5c6d7e8f",
  GOOD_RECEIVED_NOTE_05: "grn5e6f7-8b9c-0d1e-2f3a-4b5c6d7e8f9a",
  GOOD_RECEIVED_NOTE_06: "grn6f7a8-9b0d-1e2f-3a4b-5c6d7e8f9a0b",
  GOOD_RECEIVED_NOTE_07: "grn7a8b9-0c1d-2e3f-4a5b-6d7e8f9a0b1c",
  GOOD_RECEIVED_NOTE_08: "grn8b9c0-1d2e-3f4a-5b6c-7e8f9a0b1c2d",
  GOOD_RECEIVED_NOTE_09: "grn9c0d1-2e3f-4a5b-6c7d-8f9a0b1c2d3e",
  GOOD_RECEIVED_NOTE_10: "grn0d1e2-3f4a-5b6c-7d8e-9a0b1c2d3e4f",

  // =============================================================================
  // INVENTORY MANAGEMENT
  // =============================================================================

  /**
   * Inventory transactions
   */
  INVENTORY_TRANSACTION_01: "it1a2b3c-4d5e-6f7a-8b9c-0d1e2f3a4b5c",
  INVENTORY_TRANSACTION_02: "it2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d",
  INVENTORY_TRANSACTION_03: "it3c4d5e-6f7a-8b9c-0d1e-2f3a4b5c6d7e",
  INVENTORY_TRANSACTION_04: "it4d5e6f-7a8b-9c0d-1e2f-3a4b5c6d7e8f",
  INVENTORY_TRANSACTION_05: "it5e6f7a-8b9c-0d1e-2f3a-4b5c6d7e8f9a",
  INVENTORY_TRANSACTION_06: "it6f7a8b-9b0d-1e2f-3a4b-5c6d7e8f9a0b",
  INVENTORY_TRANSACTION_07: "it7a8b9c-0c1d-2e3f-4a5b-6d7e8f9a0b1c",
  INVENTORY_TRANSACTION_08: "it8b9c0d-1d2e-3f4a-5b6c-7e8f9a0b1c2d",
  INVENTORY_TRANSACTION_09: "it9c0d1e-2e3f-4a5b-6c7d-8f9a0b1c2d3e",
  INVENTORY_TRANSACTION_10: "it0d1e2f-3f4a-5b6c-7d8e-9a0b1c2d3e4f",

  /**
   * Physical counts Periods
   */
  PHYSICAL_COUNT_PERIOD_01: "pcp1a2b3-4d5e-6f7a-8b9c-0d1e2f3a4b5c",
  PHYSICAL_COUNT_PERIOD_02: "pcp2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d",
  PHYSICAL_COUNT_PERIOD_03: "pcp3c4d5-6f7a-8b9c-0d1e-2f3a4b5c6d7e",
  PHYSICAL_COUNT_PERIOD_04: "pcp4d5e6-7a8b-9c0d-1e2f-3a4b5c6d7e8f",
  PHYSICAL_COUNT_PERIOD_05: "pcp5e6f7-8b9c-0d1e-2f3a-4b5c6d7e8f9a",
  PHYSICAL_COUNT_PERIOD_06: "pcp6f7a8-9b0d-1e2f-3a4b-5c6d7e8f9a0b",
  PHYSICAL_COUNT_PERIOD_07: "pcp7a8b9-0c1d-2e3f-4a5b-6d7e8f9a0b1c",
  PHYSICAL_COUNT_PERIOD_08: "pcp8b9c0-1d2e-3f4a-5b6c-7e8f9a0b1c2d",
  PHYSICAL_COUNT_PERIOD_09: "pcp9c0d1-2e3f-4a5b-6c7d-8f9a0b1c2d3e",
  PHYSICAL_COUNT_PERIOD_10: "pcp0d1e2-3f4a-5b6c-7d8e-9a0b1c2d3e4f",
  
  /**
   * Physical counts
   */
  PHYSICAL_COUNT_01: "pc1a2b3c-4d5e-6f7a-8b9c-0d1e2f3a4b5c",
  PHYSICAL_COUNT_02: "pc2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d",
  PHYSICAL_COUNT_03: "pc3c4d5e-6f7a-8b9c-0d1e-2f3a4b5c6d7e",
  PHYSICAL_COUNT_04: "pc4d5e6f-7a8b-9c0d-1e2f-3a4b5c6d7e8f",
  PHYSICAL_COUNT_05: "pc5e6f7a-8b9c-0d1e-2f3a-4b5c6d7e8f9a",
  PHYSICAL_COUNT_06: "pc6f7a8b-9b0d-1e2f-3a4b-5c6d7e8f9a0b",
  PHYSICAL_COUNT_07: "pc7a8b9c-0c1d-2e3f-4a5b-6d7e8f9a0b1c",
  PHYSICAL_COUNT_08: "pc8b9c0d-1d2e-3f4a-5b6c-7e8f9a0b1c2d",
  PHYSICAL_COUNT_09: "pc9c0d1e-2e3f-4a5b-6c7d-8f9a0b1c2d3e",
  PHYSICAL_COUNT_10: "pc0d1e2f-3f4a-5b6c-7d8e-9a0b1c2d3e4f",

  /**
   * Physical count details
   */

  PHYSICAL_COUNT_DETAIL_01: "pcd1a2b3-4d5e-6f7a-8b9c-0d1e2f3a4b5c",
  PHYSICAL_COUNT_DETAIL_02: "pcd2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d",
  PHYSICAL_COUNT_DETAIL_03: "pcd3c4d5-6f7a-8b9c-0d1e-2f3a4b5c6d7e",
  PHYSICAL_COUNT_DETAIL_04: "pcd4d5e6-7a8b-9c0d-1e2f-3a4b5c6d7e8f",
  PHYSICAL_COUNT_DETAIL_05: "pcd5e6f7-8b9c-0d1e-2f3a-4b5c6d7e8f9a",
  PHYSICAL_COUNT_DETAIL_06: "pcd6f7a8-9b0d-1e2f-3a4b-5c6d7e8f9a0b",
  PHYSICAL_COUNT_DETAIL_07: "pcd7a8b9-0c1d-2e3f-4a5b-6d7e8f9a0b1c",
  PHYSICAL_COUNT_DETAIL_08: "pcd8b9c0-1d2e-3f4a-5b6c-7e8f9a0b1c2d",
  PHYSICAL_COUNT_DETAIL_09: "pcd9c0d1-2e3f-4a5b-6c7d-8f9a0b1c2d3e",
  PHYSICAL_COUNT_DETAIL_10: "pcd0d1e2-3f4a-5b6c-7d8e-9a0b1c2d3e4f",

  // =============================================================================
  // QUALITY CONTROL & ASSURANCE
  // =============================================================================

  /**
   * Spot checks
   */
  SPOT_CHECK_01: "sc1a2b3c-4d5e-6f7a-8b9c-0d1e2f3a4b5c",
  SPOT_CHECK_02: "sc2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d",
  SPOT_CHECK_03: "sc3c4d5e-6f7a-8b9c-0d1e-2f3a4b5c6d7e",
  SPOT_CHECK_04: "sc4d5e6f-7a8b-9c0d-1e2f-3a4b5c6d7e8f",
  SPOT_CHECK_05: "sc5e6f7a-8b9c-0d1e-2f3a-4b5c6d7e8f9a",
  SPOT_CHECK_06: "sc6f7a8b-9b0d-1e2f-3a4b-5c6d7e8f9a0b",
  SPOT_CHECK_07: "sc7a8b9c-0c1d-2e3f-4a5b-6d7e8f9a0b1c",
  SPOT_CHECK_08: "sc8b9c0d-1d2e-3f4a-5b6c-7e8f9a0b1c2d",
  SPOT_CHECK_09: "sc9c0d1e-2e3f-4a5b-6c7d-8f9a0b1c2d3e",
  SPOT_CHECK_10: "sc0d1e2f-3f4a-5b6c-7d8e-9a0b1c2d3e4f",
  
  /**
   * Spot check details
   */

  SPOT_CHECK_DETAIL_01: "scd1a2b3-4d5e-6f7a-8b9c-0d1e2f3a4b5c",
  SPOT_CHECK_DETAIL_02: "scd2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d",
  SPOT_CHECK_DETAIL_03: "scd3c4d5-6f7a-8b9c-0d1e-2f3a4b5c6d7e",
  SPOT_CHECK_DETAIL_04: "scd4d5e6-7a8b-9c0d-1e2f-3a4b5c6d7e8f",
  SPOT_CHECK_DETAIL_05: "scd5e6f7-8b9c-0d1e-2f3a-4b5c6d7e8f9a",
  SPOT_CHECK_DETAIL_06: "scd6f7a8-9b0d-1e2f-3a4b-5c6d7e8f9a0b",
  SPOT_CHECK_DETAIL_07: "scd7a8b9-0c1d-2e3f-4a5b-6d7e8f9a0b1c",
  SPOT_CHECK_DETAIL_08: "scd8b9c0-1d2e-3f4a-5b6c-7e8f9a0b1c2d",
  SPOT_CHECK_DETAIL_09: "scd9c0d1-2e3f-4a5b-6c7d-8f9a0b1c2d3e",
  SPOT_CHECK_DETAIL_10: "scd0d1e2-3f4a-5b6c-7d8e-9a0b1c2d3e4f",

  // =============================================================================
  // FINANCIAL & ACCOUNTING
  // =============================================================================

  /**
   * Tax profiles and financial configuration
   */
  TAX_PROFILE_01: "2f096a86-355e-4207-950d-3105f44f4265",
  TAX_PROFILE_02: "68e83b72-0c2b-4334-894e-798ac846b828",
  TAX_PROFILE_03: "c411867d-9cdc-4e0b-951f-b016a9d462ee",
  TAX_PROFILE_04: "550e8400-e29b-41d4-a716-446655440004",
  TAX_PROFILE_05: "550e8400-e29b-41d4-a716-446655440005",
  TAX_PROFILE_06: "550e8400-e29b-41d4-a716-446655440006",
  TAX_PROFILE_07: "550e8400-e29b-41d4-a716-446655440007",
  TAX_PROFILE_08: "550e8400-e29b-41d4-a716-446655440008",
  TAX_PROFILE_09: "550e8400-e29b-41d4-a716-446655440009",
  TAX_PROFILE_10: "550e8400-e29b-41d4-a716-446655440010",

  /**
   * Currency definitions
   */
  CURRENCY_01: "cur1a2b3-4d5e-6f7a-8b9c-0d1e2f3a4b5c",
  CURRENCY_02: "cur2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d",
  CURRENCY_03: "cur3c4d5-6f7a-8b9c-0d1e-2f3a4b5c6d7e",
  CURRENCY_04: "cur4d5e6-7a8b-9c0d-1e2f-3a4b5c6d7e8f",
  CURRENCY_05: "cur5e6f7-8b9c-0d1e-2f3a-4b5c6d7e8f9a",
  CURRENCY_06: "cur6f7a8-9b0d-1e2f-3a4b-5c6d7e8f9a0b",
  CURRENCY_07: "cur7a8b9-0c1d-2e3f-4a5b-6d7e8f9a0b1c",
  CURRENCY_08: "cur8b9c0-1d2e-3f4a-5b6c-7e8f9a0b1c2d",
  CURRENCY_09: "cur9c0d1-2e3f-4a5b-6c7d-8f9a0b1c2d3e",
  CURRENCY_10: "cur0d1e2-3f4a-5b6c-7d8e-9a0b1c2d3e4f",

  /**
   * Currency ISO codes
   */
  CURRENCY_ISO_01: "iso1a2b3-4d5e-6f7a-8b9c-0d1e2f3a4b5c",
  CURRENCY_ISO_02: "iso2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d",
  CURRENCY_ISO_03: "iso3c4d5-6f7a-8b9c-0d1e-2f3a4b5c6d7e",
  CURRENCY_ISO_04: "iso4d5e6-7a8b-9c0d-1e2f-3a4b5c6d7e8f",
  CURRENCY_ISO_05: "iso5e6f7-8b9c-0d1e-2f3a-4b5c6d7e8f9a",
  CURRENCY_ISO_06: "iso6f7a8-9b0d-1e2f-3a4b-5c6d7e8f9a0b",
  CURRENCY_ISO_07: "iso7a8b9-0c1d-2e3f-4a5b-6d7e8f9a0b1c",
  CURRENCY_ISO_08: "iso8b9c0-1d2e-3f4a-5b6c-7e8f9a0b1c2d",
  CURRENCY_ISO_09: "iso9c0d1-2e3f-4a5b-6c7d-8f9a0b1c2d3e",
  CURRENCY_ISO_10: "iso0d1e2-3f4a-5b6c-7d8e-9a0b1c2d3e4f",

  // =============================================================================
  // SYSTEM CONFIGURATION & WORKFLOW
  // =============================================================================

  /**
   * Workflow definitions
   */
  WORKFLOW_01: "983ddfd8-e614-436e-ae25-5bc7911da0b8",
  WORKFLOW_02: "3406c2ea-a68f-489c-9a8c-821c8cb41daf",
  WORKFLOW_03: "b4a1bd21-80f3-4d82-8b5e-b1021b278003",
  WORKFLOW_04: "5d12e03e-46d7-4ac1-95ef-7b2f6d3b81a9",
  WORKFLOW_05: "c4042beb-f126-4c8d-b45a-3830b7e8eabc",
  WORKFLOW_06: "f1e2d3c4-b5a6-4789-8c9d-0e1f2a3b4c5d",
  WORKFLOW_07: "a2b3c4d5-e6f7-4890-9a0b-1c2d3e4f5a6b",
  WORKFLOW_08: "b3c4d5e6-f7a8-4901-0b1c-2d3e4f5a6b7c",
  WORKFLOW_09: "c4d5e6f7-a8b9-5012-1c2d-3e4f5a6b7c8d",
  WORKFLOW_10: "d5e6f7a8-b9c0-6123-2d3e-4f5a6b7c8d9e",

  /**
   * Activity tracking
   */
  ACTIVITY_01: "93d650d4-2ffb-43f2-a43a-3a7d4f7d8891",
  ACTIVITY_02: "fc7fe34a-4317-4995-84ff-71416f91df07",
  ACTIVITY_03: "09c2fa30-67a6-4038-91da-adea10efc5ae",
  ACTIVITY_04: "8dc35442-6f2c-46a4-85f8-0ccb90a7db31",
  ACTIVITY_05: "df8060c7-8da4-427f-8d5a-9418bc1ae09f",
  ACTIVITY_06: "a1e5f3c9-3b6e-4f2d-9c1e-2b3a4d5e6f7a",
  ACTIVITY_07: "b2f6g4d8-4c7f-5e3d-0d2f-3c4b5e6f7a8b",
  ACTIVITY_08: "c3g7h5e9-5d8g-6f4e-1e3g-4d5c6f7a8b9c",
  ACTIVITY_09: "d4h8i6f0-6e9h-7g5f-2f4h-5e6d7g8b9c0d",
  ACTIVITY_10: "e5i9j7g1-7f0i-8h6g-3g5i-6f7e8h9c0d1e",

  /**
   * Application configuration
   */
  APPLICATION_CONFIG_01: "29eff909-aee5-4bee-a5ff-88e9ddc58846",
  APPLICATION_CONFIG_02: "b01120a7-4c0b-4af5-ac3d-e7ea2cb09663",
  APPLICATION_CONFIG_03: "d3b07384-d9a1-4f1e-8c3d-5e6f7a8b9c0d",
  APPLICATION_CONFIG_04: "e4b0c5d6-e7f8-4a9b-8c1d-2e3f4a5b6c7d",
  APPLICATION_CONFIG_05: "f5c1d2e3-f4a5-4b6c-9d2e-3f4a5b6c7d8e",
  APPLICATION_CONFIG_06: "a6d2e3f4-a5b6-4c7d-0e3f-4a5b6c7d8e9f",
  APPLICATION_CONFIG_07: "b7e3f4a5-b6c7-4d8e-1f4a-5b6c7d8e9f0a",
  APPLICATION_CONFIG_08: "c8f4a5b6-c7d8-4e9f-2g5b-6c7d8e9f0a1b",
  APPLICATION_CONFIG_09: "d9g5b6c7-d8e9-4f0a-3h6c-7d8e9f0a1b2c",
  APPLICATION_CONFIG_10: "e0h6c7d8-e9f0-4a1b-4i7d-8e9f0a1b2c3d"

} as const;

// =============================================================================
// UTILITY FUNCTIONS
// =============================================================================

/**
 * Retrieves a UUID by its mapping name
 * @param name - The mapping key name
 * @returns The corresponding UUID or undefined if not found
 */
export const getUuidByName = (name: string): string | undefined => {
  return UUID_MAPPING[name as keyof typeof UUID_MAPPING];
};

/**
 * Validates if a given string is a valid UUID format
 * @param uuid - String to validate
 * @returns True if valid UUID format
 */
export const isValidUuid = (uuid: string): boolean => {
  const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
  return uuidRegex.test(uuid);
};

/**
 * Gets all UUIDs for a specific category
 * @param category - The category to filter by
 * @returns Array of mapping keys that match the category
 */
export const getUuidsByCategory = (category: UuidCategory): string[] => {
  const categoryMappings: Record<UuidCategory, string[]> = {
    business_structure: ['CLUSTER_', 'BUSINESS_UNIT_', 'DEPARTMENT_', 'LOCATION_', 'DELIVERY_POINT_'],
    user_management: ['USER_', 'USER_PROFILE_', 'USER_BUSINESS_UNIT_', 'USER_ROLE_', 'USER_LOCATION_'],
    product_catalog: ['PRODUCT_', 'UNIT_', 'PRODUCT_CATEGORY_', 'PRODUCT_SUB_CATEGORY_', 'PRODUCT_ITEM_GROUP_'],
    inventory: ['INVENTORY_', 'PHYSICAL_COUNT_', 'SPOT_CHECK_'],
    procurement: ['PURCHASE_', 'STORE_REQUISITION_', 'VENDOR_', 'GOOD_RECEIVED_NOTE_'],
    financial: ['TAX_PROFILE_', 'CURRENCY_'],
    system_config: ['APPLICATION_CONFIG_'],
    workflow: ['WORKFLOW_', 'ACTIVITY_']
  };

  const prefixes = categoryMappings[category] || [];
  return Object.keys(UUID_MAPPING).filter(key =>
    prefixes.some(prefix => key.startsWith(prefix))
  );
};

/**
 * Searches for mapping keys by partial name match
 * @param searchTerm - Partial name to search for
 * @returns Array of matching mapping keys
 */
export const searchUuidMappings = (searchTerm: string): string[] => {
  const term = searchTerm.toUpperCase();
  return Object.keys(UUID_MAPPING).filter(key =>
    key.includes(term)
  );
};

/**
 * Gets a random UUID from a specific category
 * @param category - Category to select from
 * @returns Random UUID from the category
 */
export const getRandomUuidFromCategory = (category: UuidCategory): string | undefined => {
  const categoryKeys = getUuidsByCategory(category);
  if (categoryKeys.length === 0) return undefined;

  const randomKey = categoryKeys[Math.floor(Math.random() * categoryKeys.length)];
  return getUuidByName(randomKey);
};

/**
 * Validates if a mapping key exists
 * @param key - The mapping key to check
 * @returns True if the key exists in the mapping
 */
export const hasMappingKey = (key: string): key is UuidMappingKey => {
  return key in UUID_MAPPING;
};

/**
 * Gets all mapping keys as an array
 * @returns Array of all available mapping keys
 */
export const getAllMappingKeys = (): UuidMappingKey[] => {
  return Object.keys(UUID_MAPPING) as UuidMappingKey[];
};

/**
 * Gets statistics about the UUID mappings
 * @returns Object containing mapping statistics
 */
export const getMappingStatistics = () => {
  const allKeys = getAllMappingKeys();
  const categories: UuidCategory[] = [
    'business_structure', 'user_management', 'product_catalog',
    'inventory', 'procurement', 'financial', 'system_config', 'workflow'
  ];

  return {
    totalMappings: allKeys.length,
    categoryCounts: categories.reduce((acc, category) => {
      acc[category] = getUuidsByCategory(category).length;
      return acc;
    }, {} as Record<UuidCategory, number>),
    validUuids: allKeys.filter(key => {
      const uuid = getUuidByName(key);
      return uuid && isValidUuid(uuid);
    }).length
  };
};

// =============================================================================
// EXPORTS
// =============================================================================

export default UUID_MAPPING;

/**
 * Export mapping summary for documentation
 */
export const MAPPING_SUMMARY = {
  totalEntries: Object.keys(UUID_MAPPING).length,
  categories: {
    businessStructure: 25,
    userManagement: 52,
    permissions: 10,
    productCatalog: 35,
    inventory: 20,
    procurement: 25,
    financial: 10,
    systemConfig: 7
  },
  lastUpdated: new Date().toISOString(),
  version: '1.0.0'
} as const;