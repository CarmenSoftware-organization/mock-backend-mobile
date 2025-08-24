// =============== LEGACY TYPES (For Backward Compatibility) ===============

// Legacy interfaces for backward compatibility
export interface User {
  id: string;
  email: string;
  password: string;
  first_name: string;
  middle_name?: string;
  last_name: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface UserBusinessUnit {
  id: string;
  user_id: string;
  business_unit_id: string;
  is_hod: boolean;
  is_default: boolean;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface UserProfile {
  user: User;
  business_units: UserBusinessUnit[];
}

// New types for profile response pattern
export interface UserInfo {
  firstname: string;
  middlename: string;
  lastname: string;
}

export interface Department {
  is_hod: boolean;
  id: string;
  name: string;
}

export interface HotelConfig {
  name: string;
  email: string;
  address: string;
  country: string;
  zip_code: string;
  telephone: string;
}

export interface CompanyConfig {
  name: string;
  email: string;
  address: string;
  country: string;
  zip_code: string;
  telephone: string;
}

export interface FormatConfig {
  locales: string;
  minimumIntegerDigits: number;
}

export interface BusinessUnitConfig {
  hotel: HotelConfig;
  company: CompanyConfig;
  tax_id: string;
  branch_no: string;
  calculation_method: string;
  currency_base: string;
  date_format: string;
  long_time_format: string;
  short_time_format: string;
  timezone: string;
  perpage: string;
  amount: FormatConfig;
  quantity: FormatConfig;
  recipe: FormatConfig;
}

export interface BusinessUnitProfile {
  id: string;
  name: string;
  is_default: boolean;
  department: Department;
  config: BusinessUnitConfig;
}

export interface UserProfileResponse {
  id: string;
  email: string;
  user_info: UserInfo;
  business_unit: BusinessUnitProfile[];
}
