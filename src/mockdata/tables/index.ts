// =============== MOCK TABLES INDEX ===============

// Export all types
export * from './types';

// Export utilities
export * from './utils';

// Export all tables and CRUD functions
export * from './tb-user-profile';
export * from './tb-department';
export * from './tb-department-user';
export * from './tb-application-config';
export * from './tb-application-user-config';
export * from './tb-location';
export * from './tb-user-location';
export * from './tb-currency';
export * from './tb-unit';
export * from './tb-vendor';
export * from './tb-product';
export * from './tb-menu';
export * from './tb-workflow';
export * from './tb-delivery-point';
export * from './tb-product-category';
export * from './tb-exchange-rate';
export * from './tb-dimension';
export * from './tb-product-sub-category';
export * from './tb-product-item-group';
export * from './tb-unit-conversion';
export * from './tb-credit-term';
export * from './tb-pricelist';
export * from './tb-pricelist-detail';
export * from './tb-activity';
export * from './tb-purchase-request';
export * from './tb-purchase-order';
export * from './tb-good-received-note';
export * from './tb-cluster';
export * from './tb-business-unit';
export * from './tb-module';
export * from './tb-permission';
export * from './tb-application-role';
export * from './tb-application-role-permission';
export * from './tb-user';
export * from './tb-user-business-unit';
export * from './tb-user-application-role';
export * from './tb-user-login-session';
export * from './tb-business-unit-module';
export * from './tb-cluster-user';
export * from './tb-subscription';
export * from './tb-subscription-detail';
export * from './tb-notification';
export * from './tb-password';
export * from './tb-currency-iso';
export * from './tb-message-format';

// Import CRUD functions for relationships
import { tbUserProfileCrud } from './tb-user-profile';
import { tbDepartmentCrud } from './tb-department';
import { tbDepartmentUserCrud } from './tb-department-user';
import { tbApplicationConfigCrud } from './tb-application-config';

// =============== RELATIONSHIP FUNCTIONS ===============

// Get user with department information
export const getUserWithDepartment = (userId: string) => {
  const userProfile = tbUserProfileCrud.findByUserId(userId);
  if (!userProfile) return null;

  const departmentUsers = tbDepartmentUserCrud.findByUserId(userId);
  const departments = departmentUsers.map(du => {
    const department = tbDepartmentCrud.findById(du.department_id);
    return {
      ...department,
      is_hod: du.is_hod,
      department_user_id: du.id
    };
  }).filter(Boolean);

  return {
    ...userProfile,
    departments
  };
};

// Get department with users
export const getDepartmentWithUsers = (departmentId: string) => {
  const department = tbDepartmentCrud.findById(departmentId);
  if (!department) return null;

  const departmentUsers = tbDepartmentUserCrud.findByDepartmentId(departmentId);
  const users = departmentUsers.map(du => {
    const userProfile = tbUserProfileCrud.findByUserId(du.user_id);
    return {
      ...userProfile,
      is_hod: du.is_hod,
      department_user_id: du.id
    };
  }).filter(Boolean);

  return {
    ...department,
    users
  };
};

// Import other CRUD functions
import { tbApplicationUserConfigCrud } from './tb-application-user-config';
import { tbLocationCrud } from './tb-location';
import { tbUserLocationCrud } from './tb-user-location';
import { tbCurrencyCrud } from './tb-currency';
import { tbUnitCrud } from './tb-unit';
import { tbVendorCrud } from './tb-vendor';
import { tbProductCrud } from './tb-product';
import { tbMenuCrud } from './tb-menu';
import { tbWorkflowCrud } from './tb-workflow';
import { tbDeliveryPointCrud } from './tb-delivery-point';
import { tbProductCategoryCrud } from './tb-product-category';
import { tbExchangeRateCrud } from './tb-exchange-rate';
import { tbDimensionCrud } from './tb-dimension';
import { tbProductSubCategoryCrud } from './tb-product-sub-category';
import { tbProductItemGroupCrud } from './tb-product-item-group';
import { tbUnitConversionCrud } from './tb-unit-conversion';
import { tbCreditTermCrud } from './tb-credit-term';
import { tbPricelistCrud } from './tb-pricelist';
import { tbPricelistDetailCrud } from './tb-pricelist-detail';
import { tbActivityCrud } from './tb-activity';
import { tbPurchaseRequestCrud } from './tb-purchase-request';
import { tbPurchaseOrderCrud } from './tb-purchase-order';
import { tbGoodReceivedNoteCrud } from './tb-good-received-note';
import { tbClusterCrud } from './tb-cluster';
import { tbBusinessUnitCrud } from './tb-business-unit';
import { tbModuleCrud } from './tb-module';
import { tbPermissionCrud } from './tb-permission';
import { tbApplicationRoleCrud } from './tb-application-role';
import { tbApplicationRolePermissionCrud } from './tb-application-role-permission';
import { tbUserCrud } from './tb-user';
import { tbUserBusinessUnitCrud } from './tb-user-business-unit';
import { tbUserApplicationRoleCrud } from './tb-user-application-role';
import { tbUserLoginSessionCrud } from './tb-user-login-session';
import { tbBusinessUnitModuleCrud } from './tb-business-unit-module';
import { tbClusterUserCrud } from './tb-cluster-user';
import { tbSubscriptionCrud } from './tb-subscription';
import { tbSubscriptionDetailCrud } from './tb-subscription-detail';
import { tbNotificationCrud } from './tb-notification';
import { tbPasswordCrud } from './tb-password';
import { tbCurrencyIsoCrud } from './tb-currency-iso';
import { tbMessageFormatCrud } from './tb-message-format';

// Export all CRUD functions as a group
export const mockTablesCrud = {
  tbUserProfileCrud,
  tbDepartmentCrud,
  tbDepartmentUserCrud,
  tbApplicationConfigCrud,
  tbApplicationUserConfigCrud,
  tbLocationCrud,
  tbUserLocationCrud,
  tbCurrencyCrud,
  tbUnitCrud,
  tbVendorCrud,
  tbProductCrud,
  tbMenuCrud,
  tbWorkflowCrud,
  tbDeliveryPointCrud,
  tbProductCategoryCrud,
  tbExchangeRateCrud,
  tbDimensionCrud,
  tbProductSubCategoryCrud,
  tbProductItemGroupCrud,
  tbUnitConversionCrud,
  tbCreditTermCrud,
  tbPricelistCrud,
  tbPricelistDetailCrud,
  tbActivityCrud,
  tbPurchaseRequestCrud,
  tbPurchaseOrderCrud,
  tbGoodReceivedNoteCrud,
  tbClusterCrud,
  tbBusinessUnitCrud,
  tbModuleCrud,
  tbPermissionCrud,
  tbApplicationRoleCrud,
  tbApplicationRolePermissionCrud,
  tbUserCrud,
  tbUserBusinessUnitCrud,
  tbUserApplicationRoleCrud,
  tbUserLoginSessionCrud,
  tbBusinessUnitModuleCrud,
  tbClusterUserCrud,
  tbSubscriptionCrud,
  tbSubscriptionDetailCrud,
  tbNotificationCrud,
  tbPasswordCrud,
  tbCurrencyIsoCrud,
  tbMessageFormatCrud,
  
  // Relationship functions
  getUserWithDepartment,
  getDepartmentWithUsers
};
