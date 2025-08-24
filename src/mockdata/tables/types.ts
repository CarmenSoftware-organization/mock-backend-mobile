// =============== MOCK TABLE TYPES ===============
// Types for Mock Tables based on Prisma schema

export interface TbUserProfile {
  user_id: string;
  firstname: string;
  middlename?: string;
  lastname: string;
  bio?: any;
}

export interface TbDepartment {
  id: string;
  name: string;
  description?: string;
  is_active: boolean;
  note?: string | null;
  info?: any;
  dimension?: any;
  created_at: string;
  created_by_id?: string | null;
  updated_at: string;
  updated_by_id?: string | null;
  deleted_at?: string | null;
  deleted_by_id?: string | null;
}

export interface TbDepartmentUser {
  id: string;
  user_id: string;
  department_id: string;
  is_hod: boolean;
  note?: string | null;
  info?: any;
  dimension?: any;
  doc_version: number;
  created_at: string;
  created_by_id?: string | null;
  updated_at: string;
  updated_by_id?: string | null;
  deleted_at?: string | null;
  deleted_by_id?: string | null;
}

export interface TbApplicationConfig {
  id: string;
  key: string;
  value: any;
  created_at: string;
  created_by_id?: string | null;
  updated_at: string;
  updated_by_id?: string | null;
  deleted_at?: string | null;
  deleted_by_id?: string | null;
}

export interface TbApplicationUserConfig {
  id: string;
  user_id: string;
  key: string;
  value: any;
  created_at: string;
  created_by_id?: string | null;
  updated_at: string;
  updated_by_id?: string | null;
  deleted_at?: string | null;
  deleted_by_id?: string | null;
}

export interface TbLocation {
  id: string;
  name: string;
  location_type: 'inventory' | 'direct' | 'consignment';
  description?: string;
  delivery_point_id?: string | null;
  delivery_point_name?: string | null;
  physical_count_type: 'no' | 'yes';
  is_active: boolean;
  note?: string | null;
  info?: any;
  dimension?: any;
  created_at: string;
  created_by_id?: string | null;
  updated_at: string;
  updated_by_id?: string | null;
  deleted_at?: string | null;
  deleted_by_id?: string | null;
}

export interface TbUserLocation {
  id: string;
  user_id: string;
  location_id: string;
  note?: string | null;
  info?: any;
  created_at: string;
  created_by_id?: string | null;
  updated_at: string;
  updated_by_id?: string | null;
  deleted_at?: string | null;
  deleted_by_id?: string | null;
}

export interface TbCurrency {
  id: string;
  code: string;
  name: string;
  symbol?: string | null;
  description?: string | null;
  decimal_places?: number | null;
  is_active?: boolean | null;
  exchange_rate?: number | null;
  exchange_rate_at?: string | null;
  note?: string | null;
  info?: any | null;
  dimension?: any | null;
  created_at?: string | null;
  created_by_id?: string | null;
  updated_at?: string | null;
  updated_by_id?: string | null;
  deleted_at?: string | null;
  deleted_by_id?: string | null;
}

export interface TbUnit {
  id: string;
  name: string;
  description?: string | null;
  is_active?: boolean | null;
  note?: string | null;
  info?: any | null;
  dimension?: any | null;
  created_at?: string | null;
  created_by_id?: string | null;
  updated_at?: string | null;
  updated_by_id?: string | null;
  deleted_at?: string | null;
  deleted_by_id?: string | null;
}

export interface TbVendor {
  id: string;
  name: string;
  description?: string | null;
  note?: string | null;
  business_type_id?: string | null;
  business_type_name?: string | null;
  tax_profile_id?: string | null;
  tax_profile_name?: string | null;
  tax_rate?: number | null;
  is_active?: boolean | null;
  info?: any | null;
  dimension?: any | null;
  created_at?: string | null;
  created_by_id?: string | null;
  updated_at?: string | null;
  updated_by_id?: string | null;
  deleted_at?: string | null;
  deleted_by_id?: string | null;
}

export interface TbProduct {
  id: string;
  code: string;
  name: string;
  local_name?: string | null;
  description?: string | null;
  inventory_unit_id: string;
  inventory_unit_name?: string;
  product_status_type?: 'active' | 'inactive';
  product_item_group_id?: string | null;
  is_used_in_recipe?: boolean | null;
  is_sold_directly?: boolean | null;
  barcode?: string | null;
  sku?: string | null;
  price_deviation_limit?: number | null;
  qty_deviation_limit?: number | null;
  note?: string | null;
  info?: any | null;
  dimension?: any | null;
  created_at?: string | null;
  created_by_id?: string | null;
  updated_at?: string | null;
  updated_by_id?: string | null;
  deleted_at?: string | null;
  deleted_by_id?: string | null;
}

export interface TbMenu {
  id: string;
  module_id: string;
  name: string;
  url: string;
  description?: string | null;
  is_visible?: boolean | null;
  is_active?: boolean | null;
  is_lock?: boolean | null;
  created_at?: string | null;
  created_by_id?: string | null;
  updated_at?: string | null;
  updated_by_id?: string | null;
  deleted_at?: string | null;
  deleted_by_id?: string | null;
}

export interface TbWorkflow {
  id: string;
  name: string;
  workflow_type: 'purchase_request_workflow' | 'store_requisition_workflow';
  data?: any | null;
  is_active?: boolean | null;
  description?: string | null;
  note?: string | null;
  info?: any | null;
  dimension?: any | null;
  created_at?: string | null;
  created_by_id?: string | null;
  updated_at?: string | null;
  updated_by_id?: string | null;
  deleted_at?: string | null;
  deleted_by_id?: string | null;
}

export interface TbDeliveryPoint {
  id: string;
  name: string;
  is_active?: boolean | null;
  note?: string | null;
  info?: any | null;
  dimension?: any | null;
  created_at?: string | null;
  created_by_id?: string | null;
  updated_at?: string | null;
  updated_by_id?: string | null;
  deleted_at?: string | null;
  deleted_by_id?: string | null;
}

export interface TbProductCategory {
  id: string;
  code: string;
  name: string;
  description?: string | null;
  is_active?: boolean | null;
  price_deviation_limit?: number | null;
  qty_deviation_limit?: number | null;
  is_used_in_recipe?: boolean | null;
  is_sold_directly?: boolean | null;
  note?: string | null;
  info?: any | null;
  dimension?: any | null;
  created_at?: string | null;
  created_by_id?: string | null;
  updated_at?: string | null;
  updated_by_id?: string | null;
  deleted_at?: string | null;
  deleted_by_id?: string | null;
}

export interface TbExchangeRate {
  id: string;
  at_date?: string | null;
  currency_id?: string | null;
  currency_code?: string | null;
  currency_name?: string | null;
  exchange_rate?: number | null;
  note?: string | null;
  info?: any | null;
  dimension?: any | null;
  created_at?: string | null;
  created_by_id?: string | null;
  updated_at?: string | null;
  updated_by_id?: string | null;
  deleted_at?: string | null;
  deleted_by_id?: string | null;
}

export interface TbDimension {
  id: string;
  key: string;
  type?: 'string' | 'number' | 'boolean' | 'date' | 'datetime' | 'json' | 'dataset' | 'lookup' | 'lookup_dataset';
  value?: any | null;
  description?: string | null;
  note?: string | null;
  default_value?: any | null;
  is_active?: boolean | null;
  info?: any | null;
  doc_version?: number;
  created_at?: string | null;
  created_by_id?: string | null;
  updated_at?: string | null;
  updated_by_id?: string | null;
  deleted_at?: string | null;
  deleted_by_id?: string | null;
}

export interface TbProductSubCategory {
  id: string;
  product_category_id: string;
  code?: string;
  name: string;
  description?: string | null;
  price_deviation_limit?: number | null;
  qty_deviation_limit?: number | null;
  is_used_in_recipe?: boolean | null;
  is_sold_directly?: boolean | null;
  is_active?: boolean | null;
  note?: string | null;
  info?: any | null;
  dimension?: any | null;
  created_at?: string | null;
  created_by_id?: string | null;
  updated_at?: string | null;
  updated_by_id?: string | null;
  deleted_at?: string | null;
  deleted_by_id?: string | null;
}

export interface TbProductItemGroup {
  id: string;
  product_subcategory_id: string;
  code?: string;
  name: string;
  description?: string | null;
  price_deviation_limit?: number | null;
  qty_deviation_limit?: number | null;
  is_used_in_recipe?: boolean | null;
  is_sold_directly?: boolean | null;
  is_active?: boolean | null;
  note?: string | null;
  info?: any | null;
  dimension?: any | null;
  created_at?: string | null;
  created_by_id?: string | null;
  updated_at?: string | null;
  updated_by_id?: string | null;
  deleted_at?: string | null;
  deleted_by_id?: string | null;
}

export interface TbUnitConversion {
  id: string;
  product_id?: string | null;
  unit_type: 'order_unit' | 'ingredient_unit';
  from_unit_id?: string | null;
  from_unit_name: string;
  from_unit_qty?: number | null;
  to_unit_id?: string | null;
  to_unit_name: string;
  to_unit_qty?: number | null;
  is_default?: boolean | null;
  description?: any | null;
  is_active?: boolean | null;
  note?: string | null;
  info?: any | null;
  dimension?: any | null;
  created_at?: string | null;
  created_by_id?: string | null;
  updated_at?: string | null;
  updated_by_id?: string | null;
  deleted_at?: string | null;
  deleted_by_id?: string | null;
}

export interface TbPricelist {
  id: string;
  pricelist_no: string;
  name?: string | null;
  url_token?: string | null;
  vendor_id?: string | null;
  vendor_name?: string | null;
  from_date?: string | null;
  to_date?: string | null;
  currency_id?: string | null;
  currency_name?: string | null;
  is_active?: boolean | null;
  description?: string | null;
  note?: string | null;
  info?: any | null;
  dimension?: any | null;
  doc_version?: number;
  created_at?: string | null;
  created_by_id?: string | null;
  updated_at?: string | null;
  updated_by_id?: string | null;
  deleted_at?: string | null;
  deleted_by_id?: string | null;
}

export interface TbPricelistDetail {
  id: string;
  pricelist_id: string;
  sequence_no?: number | null;
  product_id: string;
  product_name?: string | null;
  unit_id?: string | null;
  unit_name?: string | null;
  tax_profile_id?: string | null;
  tax_profile_name?: string | null;
  tax_rate?: number | null;
  price?: number | null;
  price_without_vat?: number | null;
  price_with_vat?: number | null;
  is_active?: boolean | null;
  description?: string | null;
  note?: string | null;
  info?: any | null;
  dimension?: any | null;
  doc_version?: number;
  created_at?: string | null;
  created_by_id?: string | null;
  updated_at?: string | null;
  updated_by_id?: string | null;
  deleted_at?: string | null;
  deleted_by_id?: string | null;
}

export interface TbCreditTerm {
  id: string;
  name: string;
  value?: number | null;
  description?: string | null;
  note?: string | null;
  is_active?: boolean | null;
  info?: any | null;
  doc_version?: number;
  created_at?: string | null;
  created_by_id?: string | null;
  updated_at?: string | null;
  updated_by_id?: string | null;
  deleted_at?: string | null;
  deleted_by_id?: string | null;
}

export interface TbActivity {
  id: string;
  action?: 'view' | 'create' | 'update' | 'delete' | 'login' | 'logout' | 'approve' | 'reject' | 'cancel' | 'void' | 'print' | 'email' | 'other' | 'upload' | 'download' | 'export' | 'import' | 'copy' | 'move' | 'rename' | 'save' | null;
  entity_type?: 'user' | 'business_unit' | 'product' | 'location' | 'department' | 'unit' | 'currency' | 'exchange_rate' | 'menu' | 'delivery_point' | 'purchase_request' | 'purchase_order' | 'good_received_note' | 'other' | null;
  entity_id?: string | null;
  actor_id?: string | null;
  meta_data?: any | null;
  old_data?: any | null;
  new_data?: any | null;
  ip_address?: string | null;
  user_agent?: string | null;
  description?: string | null;
  created_at?: string | null;
  created_by_id?: string | null;
}

export interface TbGoodReceivedNote {
  id: string;
  good_received_note_no: string;
  reference_no?: string | null;
  purchase_order_id?: string | null;
  purchase_order_no?: string | null;
  vendor_id?: string | null;
  vendor_name?: string | null;
  delivery_date?: string | null;
  received_date?: string | null;
  received_by_id?: string | null;
  received_by_name?: string | null;
  delivery_point_id?: string | null;
  delivery_point_name?: string | null;
  total_amount?: number | null;
  currency_id?: string | null;
  currency_name?: string | null;
  status?: 'draft' | 'received' | 'partial' | 'completed' | 'cancelled' | null;
  note?: string | null;
  info?: any | null;
  dimension?: any | null;
  doc_version?: number;
  created_at?: string | null;
  created_by_id?: string | null;
  updated_at?: string | null;
  updated_by_id?: string | null;
  deleted_at?: string | null;
  deleted_by_id?: string | null;
}

export interface TbPurchaseRequest {
  id: string;
  purchase_request_no: string;
  reference_no?: string | null;
  request_date?: string | null;
  required_date?: string | null;
  requester_id?: string | null;
  requester_name?: string | null;
  department_id?: string | null;
  department_name?: string | null;
  delivery_point_id?: string | null;
  delivery_point_name?: string | null;
  total_amount?: number | null;
  currency_id?: string | null;
  currency_name?: string | null;
  status?: 'draft' | 'submitted' | 'pending_approval' | 'approved' | 'rejected' | 'cancelled' | 'completed' | null;
  workflow_id?: string | null;
  workflow_stage?: string | null;
  priority?: 'low' | 'normal' | 'high' | 'urgent' | null;
  note?: string | null;
  info?: any | null;
  dimension?: any | null;
  doc_version?: number;
  created_at?: string | null;
  created_by_id?: string | null;
  updated_at?: string | null;
  updated_by_id?: string | null;
  deleted_at?: string | null;
  deleted_by_id?: string | null;
}

export interface TbPurchaseOrder {
  id: string;
  purchase_order_no: string;
  reference_no?: string | null;
  purchase_request_id?: string | null;
  purchase_request_no?: string | null;
  order_date?: string | null;
  delivery_date?: string | null;
  vendor_id?: string | null;
  vendor_name?: string | null;
  delivery_point_id?: string | null;
  delivery_point_name?: string | null;
  total_amount?: number | null;
  currency_id?: string | null;
  currency_name?: string | null;
  credit_term_id?: string | null;
  credit_term_name?: string | null;
  status?: 'draft' | 'sent' | 'confirmed' | 'partial_received' | 'received' | 'completed' | 'cancelled' | null;
  note?: string | null;
  info?: any | null;
  dimension?: any | null;
  doc_version?: number;
  created_at?: string | null;
  created_by_id?: string | null;
  updated_at?: string | null;
  updated_by_id?: string | null;
  deleted_at?: string | null;
  deleted_by_id?: string | null;
}

export interface TbBusinessUnit {
  id: string;
  cluster_id: string;
  code: string;
  name: string;
  description?: string | null;
  info?: any | null;
  is_hq?: boolean | null;
  is_active?: boolean | null;
  db_connection?: any | null;
  config?: any | null;
  created_at?: string | null;
  created_by_id?: string | null;
  updated_at?: string | null;
  updated_by_id?: string | null;
}

export interface TbCluster {
  id: string;
  code: string;
  name: string;
  is_active?: boolean | null;
  info?: any | null;
  created_at?: string | null;
  created_by_id?: string | null;
  updated_at?: string | null;
  updated_by_id?: string | null;
}

export interface TbModule {
  id: string;
  code: string;
  name: string;
  description?: string | null;
  icon?: string | null;
  is_active?: boolean | null;
  sequence?: number | null;
  created_at?: string | null;
  created_by_id?: string | null;
  updated_at?: string | null;
  updated_by_id?: string | null;
}

export interface TbPermission {
  id: string;
  code: string;
  name: string;
  description?: string | null;
  module_id?: string | null;
  is_active?: boolean | null;
  created_at?: string | null;
  created_by_id?: string | null;
  updated_at?: string | null;
  updated_by_id?: string | null;
}

export interface TbApplicationRole {
  id: string;
  business_unit_id: string;
  code: string;
  name: string;
  description?: string | null;
  is_active?: boolean | null;
  created_at?: string | null;
  created_by_id?: string | null;
  updated_at?: string | null;
  updated_by_id?: string | null;
}

export interface TbApplicationRolePermission {
  id: string;
  application_role_id: string;
  permission_id: string;
  created_at?: string | null;
  created_by_id?: string | null;
  updated_at?: string | null;
  updated_by_id?: string | null;
}

export interface TbUser {
  id: string;
  username: string;
  email: string;
  platform_role?: 'platform_admin' | 'support_manager' | 'support_staff' | 'security_officer' | 'integration_developer' | 'user' | null;
  is_active?: boolean | null;
  is_consent?: boolean | null;
  consent_at?: string | null;
  permissions?: string[] | null;
  created_at?: string | null;
  created_by_id?: string | null;
  updated_at?: string | null;
  updated_by_id?: string | null;
}

export interface TbUserApplicationRole {
  id: string;
  user_id: string;
  application_role_id: string;
  created_at?: string | null;
  created_by_id?: string | null;
  updated_at?: string | null;
  updated_by_id?: string | null;
}

export interface TbUserBusinessUnit {
  id: string;
  user_id?: string | null;
  business_unit_id?: string | null;
  role?: 'admin' | 'user' | null;
  is_default?: boolean | null;
  is_active?: boolean | null;
  created_at?: string | null;
  created_by_id?: string | null;
  updated_at?: string | null;
  updated_by_id?: string | null;
}

export interface TbUserApplicationRole {
  id: string;
  user_id: string;
  application_role_id: string;
  created_at?: string | null;
  created_by_id?: string | null;
  updated_at?: string | null;
  updated_by_id?: string | null;
}

export interface TbUserLoginSession {
  id: string;
  token: string;
  token_type?: 'access_token' | 'refresh_token' | null;
  user_id: string;
  expired_on?: string | null;
}

export interface TbBusinessUnitModule {
  id: string;
  business_unit_id: string;
  module_id: string;
  created_at?: string | null;
  created_by_id?: string | null;
  updated_at?: string | null;
  updated_by_id?: string | null;
}

export interface TbClusterUser {
  id: string;
  cluster_id: string;
  user_id: string;
  role?: 'admin' | 'user' | null;
  is_active?: boolean | null;
  created_at?: string | null;
  created_by_id?: string | null;
  updated_at?: string | null;
  updated_by_id?: string | null;
}

export interface TbSubscription {
  id: string;
  cluster_id: string;
  name: string;
  description?: string | null;
  status?: 'active' | 'inactive' | 'expired' | null;
  start_date?: string | null;
  end_date?: string | null;
  is_active?: boolean | null;
  created_at?: string | null;
  created_by_id?: string | null;
  updated_at?: string | null;
  updated_by_id?: string | null;
}

export interface TbSubscriptionDetail {
  id: string;
  subscription_id: string;
  business_unit_id: string;
  module_id?: string | null;
  max_users?: number | null;
  is_active?: boolean | null;
  created_at?: string | null;
  created_by_id?: string | null;
  updated_at?: string | null;
  updated_by_id?: string | null;
}

export interface TbClusterUser {
  id: string;
  cluster_id: string;
  user_id: string;
  role?: 'admin' | 'user' | null;
  is_active?: boolean | null;
  created_at?: string | null;
  created_by_id?: string | null;
  updated_at?: string | null;
  updated_by_id?: string | null;
}

export interface TbCurrencyIso {
  id: string;
  code: string;
  name: string;
  symbol?: string | null;
  decimal_places?: number | null;
  is_active?: boolean | null;
  created_at?: string | null;
  created_by_id?: string | null;
  updated_at?: string | null;
  updated_by_id?: string | null;
}

export interface TbMessageFormat {
  id: string;
  name: string;
  message?: string | null;
  is_email?: boolean | null;
  is_sms?: boolean | null;
  is_in_app?: boolean | null;
  created_at?: string | null;
  created_by_id?: string | null;
  updated_at?: string | null;
  updated_by_id?: string | null;
}

export interface TbNotification {
  id: string;
  title: string;
  message: string;
  type?: 'info' | 'warning' | 'error' | 'success' | null;
  priority?: 'low' | 'medium' | 'high' | 'urgent' | null;
  user_id?: string | null;
  business_unit_id?: string | null;
  is_read?: boolean | null;
  read_at?: string | null;
  expires_at?: string | null;
  is_active?: boolean | null;
  created_at?: string | null;
  created_by_id?: string | null;
  updated_at?: string | null;
  updated_by_id?: string | null;
}

export interface TbPassword {
  id: string;
  user_id: string;
  password_hash: string;
  salt?: string | null;
  algorithm?: string | null;
  iterations?: number | null;
  is_active?: boolean | null;
  expires_at?: string | null;
  last_changed_at?: string | null;
  created_at?: string | null;
  created_by_id?: string | null;
  updated_at?: string | null;
  updated_by_id?: string | null;
}
