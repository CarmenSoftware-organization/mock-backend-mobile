import { TbPermission } from './types';
import { generateUuid, getCurrentTimestamp } from './utils';
import { UUID_MAPPING } from './uuid-mapping';

// =============== MOCK TB_PERMISSION DATA ===============
export let mockTbPermission: TbPermission[] = [
  // Inventory Module Permissions
  {
    id: UUID_MAPPING['perm-001'],
    code: "inventory.view",
    name: "View Inventory",
    description: "View inventory items and stock levels",
    module_id: UUID_MAPPING['mod-001'],
    is_active: true,
    created_at: "2023-01-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['system'],
    updated_at: "2023-01-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['system']
  },
  {
    id: UUID_MAPPING['perm-002'],
    code: "inventory.create",
    name: "Create Inventory Items",
    description: "Create new inventory items and categories",
    module_id: UUID_MAPPING['mod-001'],
    is_active: true,
    created_at: "2023-01-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['system'],
    updated_at: "2023-01-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['system']
  },
  {
    id: UUID_MAPPING['perm-003'],
    code: "inventory.edit",
    name: "Edit Inventory Items",
    description: "Edit existing inventory items and details",
    module_id: UUID_MAPPING['mod-001'],
    is_active: true,
    created_at: "2023-01-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['system'],
    updated_at: "2023-01-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['system']
  },
  {
    id: UUID_MAPPING['perm-004'],
    code: "inventory.delete",
    name: "Delete Inventory Items",
    description: "Delete inventory items (admin only)",
    module_id: UUID_MAPPING['mod-001'],
    is_active: true,
    created_at: "2023-01-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['system'],
    updated_at: "2023-01-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['system']
  },
  {
    id: UUID_MAPPING['perm-005'],
    code: "inventory.adjust",
    name: "Stock Adjustments",
    description: "Perform stock level adjustments",
    module_id: UUID_MAPPING['mod-001'],
    is_active: true,
    created_at: "2023-01-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['system'],
    updated_at: "2023-01-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['system']
  },

  // Procurement Module Permissions
  {
    id: UUID_MAPPING['perm-006'],
    code: "procurement.view",
    name: "View Procurement",
    description: "View purchase requests and orders",
    module_id: UUID_MAPPING['mod-002'],
    is_active: true,
    created_at: "2023-01-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['system'],
    updated_at: "2023-01-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['system']
  },
  {
    id: UUID_MAPPING['perm-007'],
    code: "procurement.create",
    name: "Create Purchase Requests",
    description: "Create new purchase requests",
    module_id: UUID_MAPPING['mod-002'],
    is_active: true,
    created_at: "2023-01-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['system'],
    updated_at: "2023-01-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['system']
  },
  {
    id: UUID_MAPPING['perm-008'],
    code: "procurement.approve",
    name: "Approve Purchase Requests",
    description: "Approve or reject purchase requests",
    module_id: UUID_MAPPING['mod-002'],
    is_active: true,
    created_at: "2023-01-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['system'],
    updated_at: "2023-01-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['system']
  },
  {
    id: UUID_MAPPING['perm-009'],
    code: "procurement.purchase_order",
    name: "Manage Purchase Orders",
    description: "Create and manage purchase orders",
    module_id: UUID_MAPPING['mod-002'],
    is_active: true,
    created_at: "2023-01-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['system'],
    updated_at: "2023-01-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['system']
  },
  {
    id: UUID_MAPPING['perm-010'],
    code: "procurement.receive",
    name: "Receive Goods",
    description: "Process goods received notes",
    module_id: UUID_MAPPING['mod-002'],
    is_active: true,
    created_at: "2023-01-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['system'],
    updated_at: "2023-01-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['system']
  },

  // Accounting Module Permissions
  {
    id: UUID_MAPPING['perm-011'],
    code: "accounting.view",
    name: "View Financial Data",
    description: "View financial reports and accounts",
    module_id: UUID_MAPPING['mod-003'],
    is_active: true,
    created_at: "2023-01-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['system'],
    updated_at: "2023-01-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['system']
  },
  {
    id: UUID_MAPPING['perm-012'],
    code: "accounting.journal",
    name: "Manage Journal Entries",
    description: "Create and edit journal entries",
    module_id: UUID_MAPPING['mod-003'],
    is_active: true,
    created_at: "2023-01-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['system'],
    updated_at: "2023-01-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['system']
  },
  {
    id: UUID_MAPPING['perm-013'],
    code: "accounting.reports",
    name: "Financial Reports",
    description: "Generate and export financial reports",
    module_id: UUID_MAPPING['mod-003'],
    is_active: true,
    created_at: "2023-01-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['system'],
    updated_at: "2023-01-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['system']
  },

  // HR Module Permissions
  {
    id: UUID_MAPPING['perm-014'],
    code: "hr.view",
    name: "View Employee Data",
    description: "View employee information and records",
    module_id: UUID_MAPPING['mod-004'],
    is_active: true,
    created_at: "2023-01-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['system'],
    updated_at: "2023-01-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['system']
  },
  {
    id: UUID_MAPPING['perm-015'],
    code: "hr.manage",
    name: "Manage Employees",
    description: "Create, edit, and manage employee records",
    module_id: UUID_MAPPING['mod-004'],
    is_active: true,
    created_at: "2023-01-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['system'],
    updated_at: "2023-01-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['system']
  },
  {
    id: UUID_MAPPING['perm-016'],
    code: "hr.payroll",
    name: "Manage Payroll",
    description: "Process payroll and salary information",
    module_id: UUID_MAPPING['mod-004'],
    is_active: true,
    created_at: "2023-01-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['system'],
    updated_at: "2023-01-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['system']
  },

  // CRM Module Permissions
  {
    id: UUID_MAPPING['perm-017'],
    code: "crm.view",
    name: "View Customer Data",
    description: "View customer information and history",
    module_id: UUID_MAPPING['mod-005'],
    is_active: true,
    created_at: "2023-01-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['system'],
    updated_at: "2023-01-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['system']
  },
  {
    id: UUID_MAPPING['perm-018'],
    code: "crm.manage",
    name: "Manage Customers",
    description: "Create and manage customer records",
    module_id: UUID_MAPPING['mod-005'],
    is_active: true,
    created_at: "2023-01-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['system'],
    updated_at: "2023-01-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['system']
  },

  // PMS Module Permissions
  {
    id: UUID_MAPPING['perm-019'],
    code: "pms.view",
    name: "View Hotel Data",
    description: "View room status and reservations",
    module_id: UUID_MAPPING['mod-006'],
    is_active: true,
    created_at: "2023-01-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['system'],
    updated_at: "2023-01-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['system']
  },
  {
    id: UUID_MAPPING['perm-020'],
    code: "pms.reservations",
    name: "Manage Reservations",
    description: "Create and manage hotel reservations",
    module_id: UUID_MAPPING['mod-006'],
    is_active: true,
    created_at: "2023-01-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['system'],
    updated_at: "2023-01-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['system']
  },

  // POS Module Permissions
  {
    id: UUID_MAPPING['perm-021'],
    code: "pos.view",
    name: "View POS Data",
    description: "View sales and order information",
    module_id: UUID_MAPPING['mod-007'],
    is_active: true,
    created_at: "2023-01-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['system'],
    updated_at: "2023-01-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['system']
  },
  {
    id: UUID_MAPPING['perm-022'],
    code: "pos.sell",
    name: "Process Sales",
    description: "Process sales transactions and orders",
    module_id: UUID_MAPPING['mod-007'],
    is_active: true,
    created_at: "2023-01-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['system'],
    updated_at: "2023-01-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['system']
  },

  // Reporting Module Permissions
  {
    id: UUID_MAPPING['perm-023'],
    code: "reporting.view",
    name: "View Reports",
    description: "View business reports and analytics",
    module_id: UUID_MAPPING['mod-008'],
    is_active: true,
    created_at: "2023-01-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['system'],
    updated_at: "2023-01-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['system']
  },
  {
    id: UUID_MAPPING['perm-024'],
    code: "reporting.export",
    name: "Export Reports",
    description: "Export reports in various formats",
    module_id: UUID_MAPPING['mod-008'],
    is_active: true,
    created_at: "2023-01-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['system'],
    updated_at: "2023-01-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['system']
  },

  // Settings Module Permissions
  {
    id: UUID_MAPPING['perm-025'],
    code: "settings.view",
    name: "View System Settings",
    description: "View system configuration and settings",
    module_id: UUID_MAPPING['mod-009'],
    is_active: true,
    created_at: "2023-01-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['system'],
    updated_at: "2023-01-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['system']
  },
  {
    id: UUID_MAPPING['perm-026'],
    code: "settings.manage",
    name: "Manage System Settings",
    description: "Modify system configuration and settings",
    module_id: UUID_MAPPING['mod-009'],
    is_active: true,
    created_at: "2023-01-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['system'],
    updated_at: "2023-01-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['system']
  },
  {
    id: UUID_MAPPING['perm-027'],
    code: "settings.users",
    name: "Manage Users",
    description: "Create and manage user accounts",
    module_id: UUID_MAPPING['mod-009'],
    is_active: true,
    created_at: "2023-01-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['system'],
    updated_at: "2023-01-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['system']
  },
  {
    id: UUID_MAPPING['perm-028'],
    code: "settings.roles",
    name: "Manage Roles",
    description: "Create and manage user roles and permissions",
    module_id: UUID_MAPPING['mod-009'],
    is_active: true,
    created_at: "2023-01-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['system'],
    updated_at: "2023-01-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['system']
  },

  // Quality Module Permissions
  {
    id: UUID_MAPPING['perm-029'],
    code: "quality.view",
    name: "View Quality Data",
    description: "View quality control information",
    module_id: UUID_MAPPING['mod-012'],
    is_active: true,
    created_at: "2023-04-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['user-003'],
    updated_at: "2023-04-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['user-003']
  },
  {
    id: UUID_MAPPING['perm-030'],
    code: "quality.inspect",
    name: "Perform Quality Inspections",
    description: "Conduct quality inspections and record results",
    module_id: UUID_MAPPING['mod-012'],
    is_active: true,
    created_at: "2023-04-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['user-003'],
    updated_at: "2023-04-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['user-003']
  },

  // Hotel Procurement & Inventory Permissions
  {
    id: UUID_MAPPING['perm-pr-create'],
    code: "pr.create",
    name: "Create Purchase Request",
    description: "Create new purchase requests",
    module_id: UUID_MAPPING['mod-002'],
    is_active: true,
    abac_rule: {
      condition: "user.can_create_requisitions == true || user.authority_level in ['supervisor', 'manager', 'department_head', 'executive']",
      context_check: "resource.department_id in user.department_ids"
    },
    created_at: "2024-01-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['system'],
    updated_at: "2024-01-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['system']
  },
  {
    id: UUID_MAPPING['perm-pr-view-own'],
    code: "pr.view.own",
    name: "View Own Purchase Requests",
    description: "View purchase requests created by user",
    module_id: UUID_MAPPING['mod-002'],
    is_active: true,
    abac_rule: {
      condition: "resource.created_by_id == user.id",
      context_check: "always_allow"
    },
    created_at: "2024-01-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['system'],
    updated_at: "2024-01-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['system']
  },
  {
    id: UUID_MAPPING['perm-pr-view-dept'],
    code: "pr.view.department",
    name: "View Department Purchase Requests",
    description: "View purchase requests from user's department",
    module_id: UUID_MAPPING['mod-002'],
    is_active: true,
    abac_rule: {
      condition: "user.authority_level in ['supervisor', 'manager', 'department_head']",
      context_check: "resource.department_id in user.department_ids"
    },
    created_at: "2024-01-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['system'],
    updated_at: "2024-01-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['system']
  },
  {
    id: UUID_MAPPING['perm-pr-view-all'],
    code: "pr.view.all",
    name: "View All Purchase Requests",
    description: "View all purchase requests across departments",
    module_id: UUID_MAPPING['mod-002'],
    is_active: true,
    abac_rule: {
      condition: "user.authority_level in ['executive'] || user.role_code == 'purchasing_manager'",
      context_check: "user.can_view_all_departments == true"
    },
    created_at: "2024-01-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['system'],
    updated_at: "2024-01-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['system']
  },
  {
    id: UUID_MAPPING['perm-pr-approve-l1'],
    code: "pr.approve.level1",
    name: "Approve PR Level 1 (≤$5,000)",
    description: "Approve purchase requests up to $5,000",
    module_id: UUID_MAPPING['mod-002'],
    is_active: true,
    abac_rule: {
      condition: "user.approval_limit >= 5000",
      context_check: "resource.amount <= 5000 && resource.department_id in user.department_ids"
    },
    created_at: "2024-01-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['system'],
    updated_at: "2024-01-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['system']
  },
  {
    id: UUID_MAPPING['perm-pr-approve-l2'],
    code: "pr.approve.level2",
    name: "Approve PR Level 2 (≤$25,000)",
    description: "Approve purchase requests up to $25,000",
    module_id: UUID_MAPPING['mod-002'],
    is_active: true,
    abac_rule: {
      condition: "user.approval_limit >= 25000",
      context_check: "resource.amount <= 25000 && resource.category in user.approval_categories"
    },
    created_at: "2024-01-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['system'],
    updated_at: "2024-01-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['system']
  },
  {
    id: UUID_MAPPING['perm-pr-approve-l3'],
    code: "pr.approve.level3",
    name: "Approve PR Level 3 (≤$100,000)",
    description: "Approve purchase requests up to $100,000",
    module_id: UUID_MAPPING['mod-002'],
    is_active: true,
    abac_rule: {
      condition: "user.approval_limit >= 100000 || user.authority_level == 'executive'",
      context_check: "resource.amount <= 100000"
    },
    created_at: "2024-01-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['system'],
    updated_at: "2024-01-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['system']
  },
  {
    id: UUID_MAPPING['perm-pr-approve-unlimited'],
    code: "pr.approve.unlimited",
    name: "Approve PR Unlimited",
    description: "Approve purchase requests of any amount",
    module_id: UUID_MAPPING['mod-002'],
    is_active: true,
    abac_rule: {
      condition: "user.approval_limit == 'unlimited' || user.role_code == 'GENERAL_MANAGER'",
      context_check: "user.can_override_budget == true"
    },
    created_at: "2024-01-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['system'],
    updated_at: "2024-01-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['system']
  },
  {
    id: UUID_MAPPING['perm-pr-emergency'],
    code: "pr.emergency",
    name: "Create Emergency Purchase Request",
    description: "Create emergency purchase requests with expedited approval",
    module_id: UUID_MAPPING['mod-002'],
    is_active: true,
    abac_rule: {
      condition: "user.can_approve_emergency == true",
      context_check: "resource.urgency == 'emergency' || context.inventory_level == 'critical'"
    },
    created_at: "2024-01-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['system'],
    updated_at: "2024-01-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['system']
  },
  {
    id: UUID_MAPPING['perm-sr-create'],
    code: "sr.create",
    name: "Create Store Requisition",
    description: "Create new store requisitions",
    module_id: UUID_MAPPING['mod-001'],
    is_active: true,
    abac_rule: {
      condition: "user.can_create_requisitions == true",
      context_check: "resource.department_id in user.department_ids"
    },
    created_at: "2024-01-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['system'],
    updated_at: "2024-01-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['system']
  },
  {
    id: UUID_MAPPING['perm-sr-view-own'],
    code: "sr.view.own",
    name: "View Own Store Requisitions",
    description: "View store requisitions created by user",
    module_id: UUID_MAPPING['mod-001'],
    is_active: true,
    abac_rule: {
      condition: "resource.created_by_id == user.id",
      context_check: "always_allow"
    },
    created_at: "2024-01-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['system'],
    updated_at: "2024-01-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['system']
  },
  {
    id: UUID_MAPPING['perm-sr-view-dept'],
    code: "sr.view.department",
    name: "View Department Store Requisitions",
    description: "View store requisitions from user's department",
    module_id: UUID_MAPPING['mod-001'],
    is_active: true,
    abac_rule: {
      condition: "user.authority_level in ['supervisor', 'manager', 'department_head']",
      context_check: "resource.department_id in user.department_ids"
    },
    created_at: "2024-01-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['system'],
    updated_at: "2024-01-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['system']
  },
  {
    id: UUID_MAPPING['perm-sr-view-all'],
    code: "sr.view.all",
    name: "View All Store Requisitions",
    description: "View all store requisitions across departments",
    module_id: UUID_MAPPING['mod-001'],
    is_active: true,
    abac_rule: {
      condition: "user.authority_level in ['executive'] || user.role_code in ['STOREKEEPER', 'PURCHASING_MANAGER']",
      context_check: "user.can_view_all_departments == true"
    },
    created_at: "2024-01-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['system'],
    updated_at: "2024-01-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['system']
  },
  {
    id: UUID_MAPPING['perm-sr-approve'],
    code: "sr.approve",
    name: "Approve Store Requisitions",
    description: "Approve store requisitions from departments",
    module_id: UUID_MAPPING['mod-001'],
    is_active: true,
    abac_rule: {
      condition: "user.authority_level in ['supervisor', 'manager', 'department_head'] || user.role_code == 'STOREKEEPER'",
      context_check: "resource.department_id in user.department_ids || user.can_approve_all_departments == true"
    },
    created_at: "2024-01-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['system'],
    updated_at: "2024-01-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['system']
  },
  {
    id: UUID_MAPPING['perm-sr-issue'],
    code: "sr.issue",
    name: "Issue Store Items",
    description: "Issue items from store inventory to departments",
    module_id: UUID_MAPPING['mod-001'],
    is_active: true,
    abac_rule: {
      condition: "user.can_issue_items == true",
      context_check: "user.department_ids contains 'dept-stores'"
    },
    created_at: "2024-01-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['system'],
    updated_at: "2024-01-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['system']
  },
  {
    id: UUID_MAPPING['perm-sr-emergency'],
    code: "sr.emergency",
    name: "Create Emergency Store Requisition",
    description: "Create emergency store requisitions with expedited processing",
    module_id: UUID_MAPPING['mod-001'],
    is_active: true,
    abac_rule: {
      condition: "user.can_approve_emergency == true || 'critical_repairs' in user.emergency_categories",
      context_check: "resource.urgency == 'emergency'"
    },
    created_at: "2024-01-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['system'],
    updated_at: "2024-01-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['system']
  },
  {
    id: UUID_MAPPING['perm-inv-view'],
    code: "inventory.view",
    name: "View Inventory Levels",
    description: "View current inventory stock levels and item details",
    module_id: UUID_MAPPING['mod-001'],
    is_active: true,
    abac_rule: {
      condition: "user.authority_level in ['staff', 'supervisor', 'manager', 'department_head', 'executive']",
      context_check: "user.can_view_inventory == true"
    },
    created_at: "2024-01-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['system'],
    updated_at: "2024-01-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['system']
  },
  {
    id: UUID_MAPPING['perm-inv-adjust'],
    code: "inventory.adjust",
    name: "Adjust Inventory Levels",
    description: "Make inventory adjustments for stock corrections",
    module_id: UUID_MAPPING['mod-001'],
    is_active: true,
    abac_rule: {
      condition: "user.role_code in ['STOREKEEPER', 'STORE_CLERK'] || user.authority_level in ['department_head', 'executive']",
      context_check: "user.can_adjust_inventory == true"
    },
    created_at: "2024-01-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['system'],
    updated_at: "2024-01-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['system']
  },
  {
    id: UUID_MAPPING['perm-inv-transfer'],
    code: "inventory.transfer",
    name: "Transfer Inventory",
    description: "Transfer inventory items between departments or locations",
    module_id: UUID_MAPPING['mod-001'],
    is_active: true,
    abac_rule: {
      condition: "user.role_code in ['STOREKEEPER', 'PURCHASING_MANAGER'] || user.authority_level in ['department_head', 'executive']",
      context_check: "user.can_transfer_inventory == true"
    },
    created_at: "2024-01-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['system'],
    updated_at: "2024-01-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['system']
  },
  {
    id: UUID_MAPPING['perm-inv-count'],
    code: "inventory.count",
    name: "Perform Inventory Count",
    description: "Conduct physical inventory counting and reconciliation",
    module_id: UUID_MAPPING['mod-001'],
    is_active: true,
    abac_rule: {
      condition: "user.role_code in ['STOREKEEPER', 'STORE_CLERK'] || user.authority_level in ['supervisor', 'manager', 'department_head']",
      context_check: "user.can_count_inventory == true"
    },
    created_at: "2024-01-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['system'],
    updated_at: "2024-01-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['system']
  }
];

// =============== TB_PERMISSION CRUD FUNCTIONS ===============
export const tbPermissionCrud = {
  // Create new permission
  create: (data: Omit<TbPermission, 'id' | 'created_at' | 'updated_at'>): TbPermission => {
    const newPermission: TbPermission = {
      id: generateUuid(),
      created_at: getCurrentTimestamp(),
      updated_at: getCurrentTimestamp(),
      is_active: true,
      ...data
    };
    mockTbPermission.push(newPermission);
    return newPermission;
  },

  // Find by ID
  findById: (id: string): TbPermission | null => {
    return mockTbPermission.find(permission => permission.id === id) || null;
  },

  // Find by code
  findByCode: (code: string): TbPermission | null => {
    return mockTbPermission.find(permission => permission.code === code) || null;
  },

  // Find by module ID
  findByModuleId: (moduleId: string): TbPermission[] => {
    return mockTbPermission
      .filter(permission => permission.module_id === moduleId && permission.is_active)
      .sort((a, b) => a.name.localeCompare(b.name));
  },

  // Find by module code
  findByModuleCode: (moduleCode: string): TbPermission[] => {
    return mockTbPermission
      .filter(permission => 
        permission.is_active && 
        permission.code.startsWith(moduleCode + '.')
      )
      .sort((a, b) => a.name.localeCompare(b.name));
  },

  // Find all active permissions
  findActive: (): TbPermission[] => {
    return mockTbPermission
      .filter(permission => permission.is_active)
      .sort((a, b) => a.code.localeCompare(b.code));
  },

  // Find all permissions
  findAll: (): TbPermission[] => {
    return mockTbPermission.sort((a, b) => a.code.localeCompare(b.code));
  },

  // Search permissions
  search: (query: string): TbPermission[] => {
    const lowerQuery = query.toLowerCase();
    return mockTbPermission
      .filter(permission => 
        permission.is_active &&
        (permission.code.toLowerCase().includes(lowerQuery) ||
         permission.name.toLowerCase().includes(lowerQuery) ||
         permission.description?.toLowerCase().includes(lowerQuery))
      )
      .sort((a, b) => a.code.localeCompare(b.code));
  },

  // Find permissions by action type
  findByAction: (action: 'view' | 'create' | 'edit' | 'delete' | 'manage'): TbPermission[] => {
    return mockTbPermission
      .filter(permission => 
        permission.is_active && 
        permission.code.includes('.' + action)
      )
      .sort((a, b) => a.code.localeCompare(b.code));
  },

  // Find administrative permissions
  findAdminPermissions: (): TbPermission[] => {
    const adminActions = ['delete', 'manage', 'roles', 'users', 'settings'];
    return mockTbPermission
      .filter(permission => 
        permission.is_active && 
        adminActions.some(action => permission.code.includes(action))
      )
      .sort((a, b) => a.code.localeCompare(b.code));
  },

  // Find read-only permissions
  findReadOnlyPermissions: (): TbPermission[] => {
    return mockTbPermission
      .filter(permission => 
        permission.is_active && 
        permission.code.includes('.view')
      )
      .sort((a, b) => a.code.localeCompare(b.code));
  },

  // Update permission
  update: (id: string, data: Partial<TbPermission>, updated_by_id?: string): TbPermission | null => {
    const index = mockTbPermission.findIndex(permission => permission.id === id);
    if (index === -1) return null;

    mockTbPermission[index] = {
      ...mockTbPermission[index],
      ...data,
      updated_at: getCurrentTimestamp(),
      updated_by_id: updated_by_id || null
    };
    return mockTbPermission[index];
  },

  // Delete permission (soft delete by deactivating)
  delete: (id: string, updated_by_id?: string): boolean => {
    return tbPermissionCrud.update(id, { is_active: false }, updated_by_id) !== null;
  },

  // Activate permission
  activate: (id: string, updated_by_id?: string): TbPermission | null => {
    return tbPermissionCrud.update(id, { is_active: true }, updated_by_id);
  },

  // Deactivate permission
  deactivate: (id: string, updated_by_id?: string): TbPermission | null => {
    return tbPermissionCrud.update(id, { is_active: false }, updated_by_id);
  },

  // Get permission tree by module
  getPermissionTree: () => {
    const activePermissions = tbPermissionCrud.findActive();
    const tree: Record<string, TbPermission[]> = {};
    
    activePermissions.forEach(permission => {
      const moduleCode = permission.code.split('.')[0];
      if (!tree[moduleCode]) {
        tree[moduleCode] = [];
      }
      tree[moduleCode].push(permission);
    });
    
    return tree;
  },

  // Check if user has permission (mock implementation)
  hasPermission: (userPermissions: string[], requiredPermission: string): boolean => {
    return userPermissions.includes(requiredPermission);
  },

  // Get permission statistics
  getStats: () => {
    const allPermissions = mockTbPermission;
    const activePermissions = allPermissions.filter(permission => permission.is_active);
    
    return {
      total: allPermissions.length,
      active: activePermissions.length,
      inactive: allPermissions.length - activePermissions.length,
      byModule: activePermissions.reduce((acc, permission) => {
        const moduleCode = permission.code.split('.')[0];
        acc[moduleCode] = (acc[moduleCode] || 0) + 1;
        return acc;
      }, {} as Record<string, number>),
      byAction: activePermissions.reduce((acc, permission) => {
        const action = permission.code.split('.')[1] || 'other';
        acc[action] = (acc[action] || 0) + 1;
        return acc;
      }, {} as Record<string, number>),
      adminPermissions: tbPermissionCrud.findAdminPermissions().length,
      readOnlyPermissions: tbPermissionCrud.findReadOnlyPermissions().length
    };
  }
};
