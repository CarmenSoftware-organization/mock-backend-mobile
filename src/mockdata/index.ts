
/**
 * Mock Backend Mobile - Central Data Export Hub
 *
 * This file serves as the central aggregator for all mock data tables and provides
 * organized exports for the comprehensive ERP mock database system.
 *
 * The mock database includes 90+ tables covering:
 * - User Management & Authentication
 * - Business Structure & Organization
 * - Product Catalog & Inventory
 * - Procurement & Purchase Management
 * - Financial & Accounting
 * - Operations & Workflow
 * - System Configuration
 *
 * Usage:
 * ```typescript
 * import { tbUser, tbProduct, const as constants } from '@mockdata/index';
 * import { MockDataManager } from '@mockdata/index';
 * ```
 *
 * @version 1.0.0
 * @author Carmen Software
 * @since 2024
 */

// =============================================================================
// CORE CONFIGURATION & CONSTANTS
// =============================================================================

/**
 * Application constants and configuration values
 * Contains authentication, business logic, validation patterns, and API constants
 */
export * as const from "./const";

// =============================================================================
// USER MANAGEMENT & AUTHENTICATION
// =============================================================================

/**
 * User authentication and profile management
 */
export * as tbUser from "./tb_user";
export * as tbUserProfile from "./tb_user_profile";
export * as tbUserLocation from "./tb_user_location";
export * as tbUserTbBusinessUnit from "./tb_user_tb_business_unit";
export * as tbUserTbApplicationRole from "./tb_user_tb_application_role";
export * as tbUserLoginSession from "./tb_user_login_session";
export * as tbPassword from "./tb_password";

/**
 * Permissions and access control
 */
export * as tbPermission from "./tb_permission";
export * as tbUserPermission from "./temp_tb_user_permission";
export * as tbApplicationRole from "./tb_application_role";
export * as tbApplicationRoleTbPermission from "./tb_application_role_tb_permission";

// =============================================================================
// BUSINESS STRUCTURE & ORGANIZATION
// =============================================================================

/**
 * Business organization and structure
 */
export * as tbBusinessUnit from "./tb_business_unit";
export * as tbBusinessUnitTbModule from "./tb_business_unit_tb_module";
export * as tbDepartment from "./tb_department";
export * as tbDepartmentUser from "./tb_department_user";
export * as tbCluster from "./tb_cluster";
export * as tbClusterUser from "./tb_cluster_user";
export * as tbLocation from "./tb_location";
export * as tbDeliveryPoint from "./tb_delivery_point";

/**
 * System modules and menu structure
 */
export * as tbModule from "./tb_module";
export * as tbMenu from "./tb_menu";

// =============================================================================
// PRODUCT CATALOG & INVENTORY
// =============================================================================

/**
 * Product management and catalog
 */
export * as tbProduct from "./tb_product";
export * as tbProductCategory from "./tb_product_category";
export * as tbProductSubCategory from "./tb_product_sub_category";
export * as tbProductItemGroup from "./tb_product_item_group";
export * as tbProductLocation from "./tb_product_location";
export * as tbProductTbVendor from "./tb_product_tb_vendor";

/**
 * Units of measurement and conversions
 */
export * as tbUnit from "./tb_unit";
export * as tbUnitComment from "./tb_unit_comment";
export * as tbUnitConversion from "./tb_unit_conversion";
export * as tbDimension from "./tb_dimension";
export * as tbDimensionDisplayIn from "./tb_dimension_display_in";

/**
 * Unit conversion utilities and helper functions
 */
export {
  getUnitConversionFactor,
  getUnitToUnitConversionFactor,
  convertQuantity,
} from "./temp_unit_factor";

/**
 * Pricing and price lists
 */
export * as tbPricelist from "./tb_pricelist";
export * as tbPricelistDetail from "./tb_pricelist_detail";
export * as tbPricelistTemplate from "./tb_pricelist_template";
export * as tbPricelistTemplateDetail from "./tb_pricelist_template_detail";

// =============================================================================
// INVENTORY MANAGEMENT
// =============================================================================

/**
 * Stock movements and inventory transactions
 */
export * as tbInventoryTransaction from "./tb_inventory_transaction";
export * as tbInventoryTransactionDetail from "./tb_inventory_transaction_detail";
export * as tbInventoryTransactionClosingBalance from "./tb_inventory_transaction_closing_balance";

/**
 * Stock operations
 */
export * as tbStockIn from "./tb_stock_in";
export * as tbStockInDetail from "./tb_stock_in_detail";
export * as tbStockOut from "./tb_stock_out";
export * as tbStockOutDetail from "./tb_stock_out_detail";

/**
 * Stock counting and physical inventory
 */
export * as tbCountStock from "./tb_count_stock";
export * as tbCountStockDetail from "./tb_count_stock_detail";
export * as tbCountStockDetailComment from "./tb_count_stock_detail_comment";
export * as tbStockTake from "./tb_stock_take";
export * as tbStockTakeDetail from "./tb_stock_take_detail";
export * as tbPhysicalCountPeriod from "./tb_physical_count_period";
export * as tbPhysicalCount from "./tb_physical_count";
export * as tbPhysicalCountDetail from "./tb_physical_count_detail";
export * as tbSpotCheck from "./tb_spot_check";
export * as tbSpotCheckDetail from "./tb_spot_check_detail";

// =============================================================================
// PROCUREMENT & PURCHASE MANAGEMENT
// =============================================================================

/**
 * Purchase requests and requisitions
 */
export * as tbPurchaseRequest from "./tb_purchase_request";
export * as tbPurchaseRequestDetail from "./tb_purchase_request_detail";
export * as tbPurchaseRequestTemplate from "./tb_purchase_request_template";
export * as tbPurchaseRequestTemplateDetail from "./tb_purchase_request_template_detail";
export * as tbStoreRequisition from "./tb_store_requisition";
export * as tbStoreRequisitionDetail from "./tb_store_requisition_detail";

/**
 * Purchase orders and receiving
 */
export * as tbPurchaseOrder from "./tb_purchase_order";
export * as tbPurchaseOrderDetail from "./tb_purchase_order_detail";
export * as tbPurchaseOrderDetailTbPurchaseRequestDetail from "./tb_purchase_order_detail_tb_purchase_request_detail";
export * as tbGoodReceivedNote from "./tb_good_received_note";
export * as tbGoodReceivedNoteComment from "./tb_good_received_note_comment";
export * as tbGoodReceivedNoteDetail from "./tb_good_received_note_detail";

/**
 * Vendor management and pricing
 */
export * as tbVendor from "./tb_vendor";
export * as tbVendorAddress from "./tb_vendor_address";
export * as tbVendorContact from "./tb_vendor_contact";
export * as tbVendorBusinessType from "./tb_vendor_business_type";
export * as tbRequestForPricing from "./tb_request_for_pricing";
export * as tbRequestForPricingDetail from "./tb_request_for_pricing_detail";

// =============================================================================
// FINANCIAL & ACCOUNTING
// =============================================================================

/**
 * Currency and exchange management
 */
export * as tbCurrency from "./tb_currency";
export * as tbCurrencyIso from "./tb_currency_iso";
export * as tbCurrencyComment from "./tb_currency_comment";
export * as tbExchangeRate from "./tb_exchange_rate";
export * as tbPeriod from "./tb_period";

/**
 * Financial terms and profiles
 */
export * as tbCreditTerm from "./tb_credit_term";
export * as tbTaxProfile from "./tb_tax_profile";

/**
 * Journal vouchers and credit notes
 */
export * as tbJvHeader from "./tb_jv_header";
export * as tbJvDetail from "./tb_jv_detail";
export * as tbCreditNote from "./tb_credit_note";
export * as tbCreditNoteDetail from "./tb_credit_note_detail";
export * as tbCreditNoteReason from "./tb_credit_note_reason";

/**
 * Extra costs and charges
 */
export * as tbExtraCost from "./tb_extra_cost";
export * as tbExtraCostDetail from "./tb_extra_cost_detail";
export * as tbExtraCostType from "./tb_extra_cost_type";

// =============================================================================
// SYSTEM CONFIGURATION & OPERATIONS
// =============================================================================

/**
 * Application configuration
 */
export * as tbApplicationConfig from "./tb_application_config";
export * as tbApplicationUserConfig from "./tb_application_user_config";
export * as tbConfigRunningCode from "./tb_config_running_code";

/**
 * Workflow and activity tracking
 */
export * as tbWorkflow from "./tb_workflow";
export * as tbActivity from "./tb_activity";

/**
 * Communication and notifications
 */
export * as tbNotification from "./tb_notification";
export * as tbMessageFormat from "./tb_message_format";
export * as tbSubscription from "./tb_subscription";
export * as tbSubscriptionDetail from "./tb_subscription_detail";

/**
 * File attachments and documents
 */
export * as tbAttachment from "./tb_attachment";

// =============================================================================
// TYPE DEFINITIONS & INTERFACES
// =============================================================================

/**
 * Common interface for all mock data table records
 */
export interface BaseMockRecord {
  readonly id: string;
  readonly created_at?: string;
  readonly updated_at?: string;
  readonly is_active?: boolean;
}

/**
 * Interface for paginated mock data queries
 */
export interface MockDataQuery {
  readonly page?: number;
  readonly limit?: number;
  readonly search?: string;
  readonly filter?: Record<string, any>;
  readonly sort?: string;
  readonly order?: 'asc' | 'desc';
}

/**
 * Interface for mock data CRUD operations result
 */
export interface MockDataResult<T> {
  readonly success: boolean;
  readonly data?: T;
  readonly error?: string;
  readonly count?: number;
}

/**
 * Type for business unit filtering
 */
export type BusinessUnitFilter = {
  readonly bu_code?: string;
  readonly bu_id?: string;
};

/**
 * Union type for all mock table names
 */
export type MockTableName =
  | 'tb_user' | 'tb_user_profile' | 'tb_user_location'
  | 'tb_business_unit' | 'tb_department' | 'tb_location'
  | 'tb_product' | 'tb_product_category' | 'tb_product_location'
  | 'tb_inventory_transaction' | 'tb_stock_in' | 'tb_stock_out'
  | 'tb_purchase_request' | 'tb_purchase_order' | 'tb_vendor'
  | 'tb_currency' | 'tb_tax_profile' | 'tb_credit_term'
  | 'tb_workflow' | 'tb_activity' | 'tb_notification';

// =============================================================================
// CENTRALIZED MOCK DATA MANAGEMENT
// =============================================================================

/**
 * Central mock data manager providing unified access to all tables
 */
export class MockDataManager {
  /**
   * Get total count of records across all tables
   */
  static getTotalRecordCount(): number {
    // Implementation would aggregate counts from all tables
    return 0; // Placeholder
  }

  /**
   * Search across multiple tables
   */
  static globalSearch(query: string, tables: MockTableName[] = []): MockDataResult<any[]> {
    // Implementation would search across specified tables
    return { success: true, data: [], count: 0 };
  }

  /**
   * Get table statistics
   */
  static getTableStats(): Record<MockTableName, number> {
    // Implementation would return record counts for each table
    return {} as Record<MockTableName, number>;
  }

  /**
   * Validate business unit access across all operations
   */
  static validateBusinessUnitAccess(bu_code: string, table: MockTableName): boolean {
    // Implementation would validate BU access for table operations
    return true; // Placeholder
  }
}

// =============================================================================
// UTILITY FUNCTIONS FOR MOCK DATA OPERATIONS
// =============================================================================

/**
 * Generate consistent timestamps for mock data
 */
export const generateMockTimestamp = (): string => {
  return new Date().toISOString();
};

/**
 * Filter records by business unit code
 */
export const filterByBusinessUnit = <T extends { bu_code?: string }>(
  records: T[],
  bu_code: string
): T[] => {
  return records.filter(record => record.bu_code === bu_code);
};

/**
 * Sort records by any field
 */
export const sortMockData = <T extends Record<string, any>>(
  records: T[],
  field: keyof T,
  order: 'asc' | 'desc' = 'asc'
): T[] => {
  return [...records].sort((a, b) => {
    const aVal = a[field];
    const bVal = b[field];

    if (order === 'asc') {
      return aVal < bVal ? -1 : aVal > bVal ? 1 : 0;
    } else {
      return aVal > bVal ? -1 : aVal < bVal ? 1 : 0;
    }
  });
};

/**
 * Paginate mock data arrays
 */
export const paginateMockData = <T>(
  records: T[],
  page: number = 1,
  limit: number = 10
): { data: T[]; total: number; page: number; limit: number; totalPages: number } => {
  const offset = (page - 1) * limit;
  const data = records.slice(offset, offset + limit);
  const total = records.length;
  const totalPages = Math.ceil(total / limit);

  return {
    data,
    total,
    page,
    limit,
    totalPages
  };
};

/**
 * Search within mock data arrays
 */
export const searchMockData = <T extends Record<string, any>>(
  records: T[],
  searchTerm: string,
  searchFields: (keyof T)[] = []
): T[] => {
  if (!searchTerm.trim()) return records;

  const term = searchTerm.toLowerCase();

  return records.filter(record => {
    if (searchFields.length === 0) {
      // Search all string fields if none specified
      return Object.values(record).some(value =>
        typeof value === 'string' && value.toLowerCase().includes(term)
      );
    }

    // Search only specified fields
    return searchFields.some(field => {
      const value = record[field];
      return typeof value === 'string' && value.toLowerCase().includes(term);
    });
  });
};

/**
 * Generate mock UUIDs for testing (matches the format used across the system)
 */
export const generateMockId = (): string => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
};

/**
 * Validate mock data structure
 */
export const validateMockRecord = <T extends BaseMockRecord>(record: T): boolean => {
  return !!record.id && typeof record.id === 'string';
};

/**
 * Deep clone mock data for safe mutations
 */
export const cloneMockData = <T>(data: T): T => {
  return JSON.parse(JSON.stringify(data));
};

// =============================================================================
// EXPORT SUMMARY
// =============================================================================

/**
 * Export summary for documentation and tooling
 */
export const MOCK_DATA_EXPORTS = {
  // Core configuration
  constants: 'const',

  // User & Authentication (7 tables)
  userTables: [
    'tbUser', 'tbUserProfile', 'tbUserLocation', 'tbUserTbBusinessUnit',
    'tbUserTbApplicationRole', 'tbUserLoginSession', 'tbPassword'
  ],

  // Permissions & Access (4 tables)
  permissionTables: [
    'tbPermission', 'tbUserPermission', 'tbApplicationRole', 'tbApplicationRoleTbPermission'
  ],

  // Business Structure (8 tables)
  businessTables: [
    'tbBusinessUnit', 'tbBusinessUnitTbModule', 'tbDepartment', 'tbDepartmentUser',
    'tbCluster', 'tbClusterUser', 'tbLocation', 'tbDeliveryPoint'
  ],

  // Product & Inventory (28 tables)
  productTables: [
    'tbProduct', 'tbProductCategory', 'tbProductSubCategory', 'tbProductItemGroup',
    'tbProductLocation', 'tbProductTbVendor', 'tbUnit', 'tbUnitComment',
    'tbUnitConversion', 'tbDimension', 'tbDimensionDisplayIn', 'tbPricelist',
    'tbPricelistDetail', 'tbPricelistTemplate', 'tbPricelistTemplateDetail',
    'tbInventoryTransaction', 'tbInventoryTransactionDetail', 'tbInventoryTransactionClosingBalance',
    'tbStockIn', 'tbStockInDetail', 'tbStockOut', 'tbStockOutDetail',
    'tbCountStock', 'tbCountStockDetail', 'tbStockTake', 'tbStockTakeDetail',
    'tbPhysicalCountPeriod', 'tbPhysicalCount', 'tbPhysicalCountDetail',
    'tbSpotCheck', 'tbSpotCheckDetail'
  ],

  // Procurement (12 tables)
  procurementTables: [
    'tbPurchaseRequest', 'tbPurchaseRequestDetail', 'tbPurchaseRequestTemplate',
    'tbPurchaseRequestTemplateDetail', 'tbStoreRequisition', 'tbStoreRequisitionDetail',
    'tbPurchaseOrder', 'tbPurchaseOrderDetail', 'tbPurchaseOrderDetailTbPurchaseRequestDetail',
    'tbGoodReceivedNote', 'tbGoodReceivedNoteDetail', 'tbVendor',
    'tbVendorAddress', 'tbVendorContact', 'tbVendorBusinessType',
    'tbRequestForPricing', 'tbRequestForPricingDetail'
  ],

  // Financial (13 tables)
  financialTables: [
    'tbCurrency', 'tbCurrencyIso', 'tbCurrencyComment', 'tbExchangeRate',
    'tbCreditTerm', 'tbTaxProfile', 'tbJvHeader', 'tbJvDetail',
    'tbCreditNote', 'tbCreditNoteDetail', 'tbCreditNoteReason',
    'tbExtraCost', 'tbExtraCostDetail', 'tbExtraCostType'
  ],

  // System & Operations (9 tables)
  systemTables: [
    'tbApplicationConfig', 'tbApplicationUserConfig', 'tbConfigRunningCode',
    'tbWorkflow', 'tbActivity', 'tbNotification', 'tbMessageFormat',
    'tbSubscription', 'tbSubscriptionDetail', 'tbAttachment'
  ],

  totalTables: 81
} as const;