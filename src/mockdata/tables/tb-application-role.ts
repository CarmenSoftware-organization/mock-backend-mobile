import { TbApplicationRole } from './types';
import { generateUuid, getCurrentTimestamp } from './utils';
import { UUID_MAPPING } from './uuid-mapping';

// =============== MOCK TB_APPLICATION_ROLE DATA ===============
export let mockTbApplicationRole: TbApplicationRole[] = [
  // Carmen Software Bangkok Roles
  {
    id: UUID_MAPPING['app-role-001'],
    business_unit_id: UUID_MAPPING['bu-001'],
    code: "SUPER_ADMIN",
    name: "Super Administrator",
    description: "Full system access with all permissions",
    is_active: true,
    created_at: "2023-01-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['system'],
    updated_at: "2023-01-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['system']
  },
  {
    id: UUID_MAPPING['app-role-002'],
    business_unit_id: UUID_MAPPING['bu-001'],
    code: "SYSTEM_ADMIN",
    name: "System Administrator",
    description: "System configuration and user management",
    is_active: true,
    created_at: "2023-01-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['system'],
    updated_at: "2023-01-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['system']
  },
  {
    id: UUID_MAPPING['app-role-003'],
    business_unit_id: UUID_MAPPING['bu-001'],
    code: "FINANCE_MANAGER",
    name: "Finance Manager",
    description: "Financial data access and accounting management",
    is_active: true,
    created_at: "2023-01-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['system'],
    updated_at: "2023-01-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['system']
  },
  {
    id: UUID_MAPPING['app-role-004'],
    business_unit_id: UUID_MAPPING['bu-001'],
    code: "PROCUREMENT_MANAGER",
    name: "Procurement Manager",
    description: "Purchase approval and vendor management",
    is_active: true,
    created_at: "2023-01-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['system'],
    updated_at: "2023-01-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['system']
  },
  {
    id: UUID_MAPPING['app-role-005'],
    business_unit_id: UUID_MAPPING['bu-001'],
    code: "INVENTORY_MANAGER",
    name: "Inventory Manager",
    description: "Stock management and inventory control",
    is_active: true,
    created_at: "2023-01-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['system'],
    updated_at: "2023-01-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['system']
  },
  {
    id: UUID_MAPPING['app-role-006'],
    business_unit_id: UUID_MAPPING['bu-001'],
    code: "HR_MANAGER",
    name: "HR Manager",
    description: "Human resources and payroll management",
    is_active: true,
    created_at: "2023-01-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['system'],
    updated_at: "2023-01-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['system']
  },
  {
    id: UUID_MAPPING['app-role-007'],
    business_unit_id: UUID_MAPPING['bu-001'],
    code: "EMPLOYEE",
    name: "Employee",
    description: "Standard employee access level",
    is_active: true,
    created_at: "2023-01-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['system'],
    updated_at: "2023-01-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['system']
  },

  // Royal Grand Hotel Roles
  {
    id: UUID_MAPPING['app-role-008'],
    business_unit_id: UUID_MAPPING['bu-002'],
    code: "HOTEL_MANAGER",
    name: "Hotel Manager",
    description: "Complete hotel operations management",
    is_active: true,
    created_at: "2023-02-15T00:00:00.000Z",
    created_by_id: UUID_MAPPING['user-001'],
    updated_at: "2023-02-15T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['user-001']
  },
  {
    id: UUID_MAPPING['app-role-009'],
    business_unit_id: UUID_MAPPING['bu-002'],
    code: "FRONT_DESK_MANAGER",
    name: "Front Desk Manager",
    description: "Front desk operations and guest services",
    is_active: true,
    created_at: "2023-02-15T00:00:00.000Z",
    created_by_id: UUID_MAPPING['user-001'],
    updated_at: "2023-02-15T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['user-001']
  },
  {
    id: UUID_MAPPING['app-role-010'],
    business_unit_id: UUID_MAPPING['bu-002'],
    code: "HOUSEKEEPING_MANAGER",
    name: "Housekeeping Manager",
    description: "Room cleaning and maintenance supervision",
    is_active: true,
    created_at: "2023-02-15T00:00:00.000Z",
    created_by_id: UUID_MAPPING['user-001'],
    updated_at: "2023-02-15T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['user-001']
  },
  {
    id: UUID_MAPPING['app-role-011'],
    business_unit_id: UUID_MAPPING['bu-002'],
    code: "CHEF_MANAGER",
    name: "Chef Manager",
    description: "Kitchen operations and food preparation",
    is_active: true,
    created_at: "2023-02-15T00:00:00.000Z",
    created_by_id: UUID_MAPPING['user-001'],
    updated_at: "2023-02-15T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['user-001']
  },
  {
    id: UUID_MAPPING['app-role-012'],
    business_unit_id: UUID_MAPPING['bu-002'],
    code: "RECEPTIONIST",
    name: "Receptionist",
    description: "Guest check-in/out and basic services",
    is_active: true,
    created_at: "2023-02-15T00:00:00.000Z",
    created_by_id: UUID_MAPPING['user-001'],
    updated_at: "2023-02-15T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['user-001']
  },

  // Spice Garden Restaurant Roles
  {
    id: UUID_MAPPING['app-role-013'],
    business_unit_id: UUID_MAPPING['bu-003'],
    code: "RESTAURANT_MANAGER",
    name: "Restaurant Manager",
    description: "Complete restaurant operations management",
    is_active: true,
    created_at: "2023-03-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['user-002'],
    updated_at: "2023-03-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['user-002']
  },
  {
    id: UUID_MAPPING['app-role-014'],
    business_unit_id: UUID_MAPPING['bu-003'],
    code: "HEAD_CHEF",
    name: "Head Chef",
    description: "Kitchen management and menu planning",
    is_active: true,
    created_at: "2023-03-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['user-002'],
    updated_at: "2023-03-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['user-002']
  },
  {
    id: UUID_MAPPING['app-role-015'],
    business_unit_id: UUID_MAPPING['bu-003'],
    code: "CASHIER",
    name: "Cashier",
    description: "POS operations and payment processing",
    is_active: true,
    created_at: "2023-03-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['user-002'],
    updated_at: "2023-03-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['user-002']
  },
  {
    id: UUID_MAPPING['app-role-016'],
    business_unit_id: UUID_MAPPING['bu-003'],
    code: "WAITER",
    name: "Waiter/Waitress",
    description: "Customer service and order taking",
    is_active: true,
    created_at: "2023-03-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['user-002'],
    updated_at: "2023-03-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['user-002']
  },
  {
    id: UUID_MAPPING['app-role-017'],
    business_unit_id: UUID_MAPPING['bu-003'],
    code: "COOK",
    name: "Cook",
    description: "Food preparation and cooking",
    is_active: true,
    created_at: "2023-03-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['user-002'],
    updated_at: "2023-03-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['user-002']
  },

  // Carmen Software Singapore Roles
  {
    id: UUID_MAPPING['app-role-018'],
    business_unit_id: UUID_MAPPING['bu-004'],
    code: "REGIONAL_MANAGER",
    name: "Regional Manager",
    description: "APAC regional operations management",
    is_active: true,
    created_at: "2023-04-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['user-003'],
    updated_at: "2023-04-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['user-003']
  },
  {
    id: UUID_MAPPING['app-role-019'],
    business_unit_id: UUID_MAPPING['bu-004'],
    code: "SALES_MANAGER",
    name: "Sales Manager",
    description: "Sales operations and customer relations",
    is_active: true,
    created_at: "2023-04-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['user-003'],
    updated_at: "2023-04-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['user-003']
  },
  {
    id: UUID_MAPPING['app-role-020'],
    business_unit_id: UUID_MAPPING['bu-004'],
    code: "SUPPORT_ENGINEER",
    name: "Support Engineer",
    description: "Technical support and customer assistance",
    is_active: true,
    created_at: "2023-04-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['user-003'],
    updated_at: "2023-04-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['user-003']
  },

  // Development Test Unit Roles
  {
    id: UUID_MAPPING['app-role-021'],
    business_unit_id: UUID_MAPPING['bu-005'],
    code: "DEVELOPER",
    name: "Developer",
    description: "Software development and testing",
    is_active: true,
    created_at: getCurrentTimestamp(),
    created_by_id: UUID_MAPPING['developer'],
    updated_at: getCurrentTimestamp(),
    updated_by_id: UUID_MAPPING['developer']
  },
  {
    id: UUID_MAPPING['app-role-022'],
    business_unit_id: UUID_MAPPING['bu-005'],
    code: "QA_TESTER",
    name: "QA Tester",
    description: "Quality assurance and testing",
    is_active: true,
    created_at: getCurrentTimestamp(),
    created_by_id: UUID_MAPPING['developer'],
    updated_at: getCurrentTimestamp(),
    updated_by_id: UUID_MAPPING['developer']
  },

  // Hotel Procurement & Operations Roles (Royal Grand Hotel)
  {
    id: UUID_MAPPING['role-gm'],
    business_unit_id: UUID_MAPPING['bu-002'],
    code: "GENERAL_MANAGER",
    name: "General Manager",
    description: "Chief executive of hotel operations with unlimited approval authority",
    is_active: true,
    abac_attributes: {
      approval_limit: "unlimited",
      can_approve_emergency: true,
      authority_level: "executive",
      can_override_budget: true,
      reports_to: null
    },
    created_at: "2024-01-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['system'],
    updated_at: "2024-01-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['system']
  },
  {
    id: UUID_MAPPING['role-financial-controller'],
    business_unit_id: UUID_MAPPING['bu-002'],
    code: "FINANCIAL_CONTROLLER",
    name: "Financial Controller",
    description: "Financial oversight and high-value procurement approvals",
    is_active: true,
    abac_attributes: {
      approval_limit: 100000,
      can_approve_emergency: true,
      authority_level: "executive",
      budget_oversight: true,
      reports_to: UUID_MAPPING['role-gm']
    },
    created_at: "2024-01-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['system'],
    updated_at: "2024-01-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['system']
  },
  {
    id: UUID_MAPPING['role-exec-chef'],
    business_unit_id: UUID_MAPPING['bu-002'],
    code: "EXECUTIVE_CHEF",
    name: "Executive Chef",
    description: "Head of kitchen operations and food procurement",
    is_active: true,
    abac_attributes: {
      approval_limit: 25000,
      can_approve_emergency: true,
      authority_level: "department_head",
      department_ids: [UUID_MAPPING['dept-kitchen']],
      approval_categories: ["food", "kitchen_equipment", "kitchen_supplies"],
      reports_to: UUID_MAPPING['role-fb-manager']
    },
    created_at: "2024-01-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['system'],
    updated_at: "2024-01-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['system']
  },
  {
    id: UUID_MAPPING['role-sous-chef'],
    business_unit_id: UUID_MAPPING['bu-002'],
    code: "SOUS_CHEF",
    name: "Sous Chef",
    description: "Kitchen supervisor and food procurement assistant",
    is_active: true,
    abac_attributes: {
      approval_limit: 5000,
      can_approve_emergency: false,
      authority_level: "supervisor",
      department_ids: [UUID_MAPPING['dept-kitchen']],
      approval_categories: ["food", "kitchen_supplies"],
      reports_to: UUID_MAPPING['role-exec-chef']
    },
    created_at: "2024-01-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['system'],
    updated_at: "2024-01-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['system']
  },
  {
    id: UUID_MAPPING['role-exec-housekeeper'],
    business_unit_id: UUID_MAPPING['bu-002'],
    code: "EXECUTIVE_HOUSEKEEPER",
    name: "Executive Housekeeper",
    description: "Head of housekeeping operations and supplies procurement",
    is_active: true,
    abac_attributes: {
      approval_limit: 15000,
      can_approve_emergency: true,
      authority_level: "department_head",
      department_ids: [UUID_MAPPING['dept-housekeeping'], UUID_MAPPING['dept-laundry']],
      approval_categories: ["cleaning_supplies", "linens", "toiletries", "housekeeping_equipment"],
      reports_to: UUID_MAPPING['role-gm']
    },
    created_at: "2024-01-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['system'],
    updated_at: "2024-01-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['system']
  },
  {
    id: UUID_MAPPING['role-fb-manager'],
    business_unit_id: UUID_MAPPING['bu-002'],
    code: "FB_MANAGER",
    name: "Food & Beverage Manager",
    description: "F&B operations manager with procurement oversight",
    is_active: true,
    abac_attributes: {
      approval_limit: 20000,
      can_approve_emergency: true,
      authority_level: "department_head",
      department_ids: [UUID_MAPPING['dept-kitchen'], UUID_MAPPING['dept-fb-service']],
      approval_categories: ["food", "beverages", "fb_equipment", "pos_supplies"],
      reports_to: UUID_MAPPING['role-gm']
    },
    created_at: "2024-01-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['system'],
    updated_at: "2024-01-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['system']
  },
  {
    id: UUID_MAPPING['role-chief-engineer'],
    business_unit_id: UUID_MAPPING['bu-002'],
    code: "CHIEF_ENGINEER",
    name: "Chief Engineer",
    description: "Head of engineering and maintenance procurement",
    is_active: true,
    abac_attributes: {
      approval_limit: 30000,
      can_approve_emergency: true,
      authority_level: "department_head",
      department_ids: [UUID_MAPPING['dept-engineering']],
      approval_categories: ["maintenance_supplies", "tools", "spare_parts", "safety_equipment", "engineering_services"],
      reports_to: UUID_MAPPING['role-gm']
    },
    created_at: "2024-01-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['system'],
    updated_at: "2024-01-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['system']
  },
  {
    id: UUID_MAPPING['role-purchasing-manager'],
    business_unit_id: UUID_MAPPING['bu-002'],
    code: "PURCHASING_MANAGER",
    name: "Purchasing Manager",
    description: "Central procurement manager with cross-department authority",
    is_active: true,
    abac_attributes: {
      approval_limit: 50000,
      can_approve_emergency: true,
      authority_level: "department_head",
      department_ids: [UUID_MAPPING['dept-purchasing']],
      approval_categories: ["all_categories"],
      reports_to: UUID_MAPPING['role-financial-controller']
    },
    created_at: "2024-01-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['system'],
    updated_at: "2024-01-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['system']
  },
  {
    id: UUID_MAPPING['role-kitchen-supervisor'],
    business_unit_id: UUID_MAPPING['bu-002'],
    code: "KITCHEN_SUPERVISOR",
    name: "Kitchen Supervisor",
    description: "Kitchen operations supervisor with limited procurement authority",
    is_active: true,
    abac_attributes: {
      approval_limit: 2000,
      can_approve_emergency: false,
      authority_level: "supervisor",
      department_ids: [UUID_MAPPING['dept-kitchen']],
      approval_categories: ["food", "kitchen_supplies"],
      reports_to: UUID_MAPPING['role-sous-chef']
    },
    created_at: "2024-01-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['system'],
    updated_at: "2024-01-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['system']
  },
  {
    id: UUID_MAPPING['role-housekeeping-supervisor'],
    business_unit_id: UUID_MAPPING['bu-002'],
    code: "HOUSEKEEPING_SUPERVISOR",
    name: "Housekeeping Supervisor",
    description: "Housekeeping operations supervisor with supplies authority",
    is_active: true,
    abac_attributes: {
      approval_limit: 3000,
      can_approve_emergency: false,
      authority_level: "supervisor",
      department_ids: [UUID_MAPPING['dept-housekeeping']],
      approval_categories: ["cleaning_supplies", "linens", "toiletries"],
      reports_to: UUID_MAPPING['role-exec-housekeeper']
    },
    created_at: "2024-01-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['system'],
    updated_at: "2024-01-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['system']
  },
  {
    id: UUID_MAPPING['role-restaurant-supervisor'],
    business_unit_id: UUID_MAPPING['bu-002'],
    code: "RESTAURANT_SUPERVISOR",
    name: "Restaurant Supervisor",
    description: "F&B service supervisor with limited procurement authority",
    is_active: true,
    abac_attributes: {
      approval_limit: 3000,
      can_approve_emergency: false,
      authority_level: "supervisor",
      department_ids: [UUID_MAPPING['dept-fb-service']],
      approval_categories: ["beverages", "pos_supplies", "service_equipment"],
      reports_to: UUID_MAPPING['role-fb-manager']
    },
    created_at: "2024-01-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['system'],
    updated_at: "2024-01-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['system']
  },
  {
    id: UUID_MAPPING['role-maintenance-supervisor'],
    business_unit_id: UUID_MAPPING['bu-002'],
    code: "MAINTENANCE_SUPERVISOR",
    name: "Maintenance Supervisor",
    description: "Engineering supervisor with tools and supplies authority",
    is_active: true,
    abac_attributes: {
      approval_limit: 5000,
      can_approve_emergency: true,
      authority_level: "supervisor",
      department_ids: [UUID_MAPPING['dept-engineering']],
      approval_categories: ["maintenance_supplies", "tools", "spare_parts"],
      reports_to: UUID_MAPPING['role-chief-engineer']
    },
    created_at: "2024-01-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['system'],
    updated_at: "2024-01-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['system']
  },
  {
    id: UUID_MAPPING['role-storekeeper'],
    business_unit_id: UUID_MAPPING['bu-002'],
    code: "STOREKEEPER",
    name: "Storekeeper",
    description: "Inventory manager with store requisition authority",
    is_active: true,
    abac_attributes: {
      approval_limit: 5000,
      can_approve_emergency: false,
      authority_level: "manager",
      department_ids: [UUID_MAPPING['dept-stores']],
      can_issue_items: true,
      manages_categories: ["all_inventory"],
      reports_to: UUID_MAPPING['role-purchasing-manager']
    },
    created_at: "2024-01-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['system'],
    updated_at: "2024-01-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['system']
  },
  {
    id: UUID_MAPPING['role-purchase-officer'],
    business_unit_id: UUID_MAPPING['bu-002'],
    code: "PURCHASE_OFFICER",
    name: "Purchase Officer",
    description: "Procurement specialist with vendor management authority",
    is_active: true,
    abac_attributes: {
      approval_limit: 10000,
      can_approve_emergency: false,
      authority_level: "officer",
      department_ids: [UUID_MAPPING['dept-purchasing']],
      can_create_po: true,
      approval_categories: ["general_supplies", "services"],
      reports_to: UUID_MAPPING['role-purchasing-manager']
    },
    created_at: "2024-01-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['system'],
    updated_at: "2024-01-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['system']
  },
  {
    id: UUID_MAPPING['role-store-clerk'],
    business_unit_id: UUID_MAPPING['bu-002'],
    code: "STORE_CLERK",
    name: "Store Clerk",
    description: "Inventory clerk with item issuance authority",
    is_active: true,
    abac_attributes: {
      approval_limit: 1000,
      can_approve_emergency: false,
      authority_level: "staff",
      department_ids: [UUID_MAPPING['dept-stores']],
      can_issue_items: true,
      can_receive_items: true,
      reports_to: UUID_MAPPING['role-storekeeper']
    },
    created_at: "2024-01-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['system'],
    updated_at: "2024-01-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['system']
  },
  {
    id: UUID_MAPPING['role-kitchen-staff'],
    business_unit_id: UUID_MAPPING['bu-002'],
    code: "KITCHEN_STAFF",
    name: "Kitchen Staff",
    description: "Kitchen worker with requisition creation authority",
    is_active: true,
    abac_attributes: {
      approval_limit: 0,
      can_approve_emergency: false,
      authority_level: "staff",
      department_ids: [UUID_MAPPING['dept-kitchen']],
      can_create_requisitions: true,
      reports_to: UUID_MAPPING['role-kitchen-supervisor']
    },
    created_at: "2024-01-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['system'],
    updated_at: "2024-01-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['system']
  },
  {
    id: UUID_MAPPING['role-room-attendant'],
    business_unit_id: UUID_MAPPING['bu-002'],
    code: "ROOM_ATTENDANT",
    name: "Room Attendant",
    description: "Housekeeping staff with supplies requisition authority",
    is_active: true,
    abac_attributes: {
      approval_limit: 0,
      can_approve_emergency: false,
      authority_level: "staff",
      department_ids: [UUID_MAPPING['dept-housekeeping']],
      can_create_requisitions: true,
      reports_to: UUID_MAPPING['role-housekeeping-supervisor']
    },
    created_at: "2024-01-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['system'],
    updated_at: "2024-01-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['system']
  },
  {
    id: UUID_MAPPING['role-maintenance-tech'],
    business_unit_id: UUID_MAPPING['bu-002'],
    code: "MAINTENANCE_TECH",
    name: "Maintenance Technician",
    description: "Engineering technician with tools and parts requisition authority",
    is_active: true,
    abac_attributes: {
      approval_limit: 0,
      can_approve_emergency: true,
      authority_level: "staff",
      department_ids: [UUID_MAPPING['dept-engineering']],
      can_create_requisitions: true,
      emergency_categories: ["critical_repairs", "safety_equipment"],
      reports_to: UUID_MAPPING['role-maintenance-supervisor']
    },
    created_at: "2024-01-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['system'],
    updated_at: "2024-01-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['system']
  },
  {
    id: UUID_MAPPING['role-restaurant-staff'],
    business_unit_id: UUID_MAPPING['bu-002'],
    code: "RESTAURANT_STAFF",
    name: "Restaurant Staff",
    description: "F&B service staff with supplies requisition authority",
    is_active: true,
    abac_attributes: {
      approval_limit: 0,
      can_approve_emergency: false,
      authority_level: "staff",
      department_ids: [UUID_MAPPING['dept-fb-service']],
      can_create_requisitions: true,
      reports_to: UUID_MAPPING['role-restaurant-supervisor']
    },
    created_at: "2024-01-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['system'],
    updated_at: "2024-01-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['system']
  },
  {
    id: UUID_MAPPING['role-laundry-attendant'],
    business_unit_id: UUID_MAPPING['bu-002'],
    code: "LAUNDRY_ATTENDANT",
    name: "Laundry Attendant",
    description: "Laundry staff with chemical and supplies requisition authority",
    is_active: true,
    abac_attributes: {
      approval_limit: 0,
      can_approve_emergency: false,
      authority_level: "staff",
      department_ids: [UUID_MAPPING['dept-laundry']],
      can_create_requisitions: true,
      reports_to: UUID_MAPPING['role-exec-housekeeper']
    },
    created_at: "2024-01-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['system'],
    updated_at: "2024-01-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['system']
  }
];

// =============== TB_APPLICATION_ROLE CRUD FUNCTIONS ===============
export const tbApplicationRoleCrud = {
  // Create new application role
  create: (data: Omit<TbApplicationRole, 'id' | 'created_at' | 'updated_at'>): TbApplicationRole => {
    const newRole: TbApplicationRole = {
      id: generateUuid(),
      created_at: getCurrentTimestamp(),
      updated_at: getCurrentTimestamp(),
      is_active: true,
      ...data
    };
    mockTbApplicationRole.push(newRole);
    return newRole;
  },

  // Find by ID
  findById: (id: string): TbApplicationRole | null => {
    return mockTbApplicationRole.find(role => role.id === id) || null;
  },

  // Find by code
  findByCode: (code: string): TbApplicationRole | null => {
    return mockTbApplicationRole.find(role => role.code === code) || null;
  },

  // Find by business unit ID
  findByBusinessUnitId: (businessUnitId: string): TbApplicationRole[] => {
    return mockTbApplicationRole
      .filter(role => role.business_unit_id === businessUnitId && role.is_active)
      .sort((a, b) => a.name.localeCompare(b.name));
  },

  // Find by business unit code
  findByBusinessUnitCode: (businessUnitCode: string): TbApplicationRole[] => {
    // Note: This would typically require joining with business unit table
    // For now, we'll filter by partial matching of role codes
    return mockTbApplicationRole
      .filter(role => role.is_active)
      .sort((a, b) => a.name.localeCompare(b.name));
  },

  // Find all active roles
  findActive: (): TbApplicationRole[] => {
    return mockTbApplicationRole
      .filter(role => role.is_active)
      .sort((a, b) => a.name.localeCompare(b.name));
  },

  // Find all roles
  findAll: (): TbApplicationRole[] => {
    return mockTbApplicationRole.sort((a, b) => a.name.localeCompare(b.name));
  },

  // Search roles
  search: (query: string): TbApplicationRole[] => {
    const lowerQuery = query.toLowerCase();
    return mockTbApplicationRole
      .filter(role => 
        role.is_active &&
        (role.code.toLowerCase().includes(lowerQuery) ||
         role.name.toLowerCase().includes(lowerQuery) ||
         role.description?.toLowerCase().includes(lowerQuery))
      )
      .sort((a, b) => a.name.localeCompare(b.name));
  },

  // Find administrative roles
  findAdminRoles: (): TbApplicationRole[] => {
    const adminKeywords = ['admin', 'manager', 'supervisor'];
    return mockTbApplicationRole
      .filter(role => 
        role.is_active &&
        adminKeywords.some(keyword => 
          role.code.toLowerCase().includes(keyword) ||
          role.name.toLowerCase().includes(keyword)
        )
      )
      .sort((a, b) => a.name.localeCompare(b.name));
  },

  // Find roles by business type
  findByBusinessType: (businessType: 'hotel' | 'restaurant' | 'software' | 'general'): TbApplicationRole[] => {
    const businessRolePatterns = {
      hotel: ['hotel', 'front_desk', 'housekeeping', 'receptionist'],
      restaurant: ['restaurant', 'chef', 'cook', 'waiter', 'cashier'],
      software: ['developer', 'qa', 'support', 'engineer', 'admin'],
      general: ['manager', 'employee', 'admin', 'finance', 'hr', 'procurement']
    };

    const patterns = businessRolePatterns[businessType] || businessRolePatterns.general;
    
    return mockTbApplicationRole
      .filter(role => 
        role.is_active &&
        patterns.some(pattern => 
          role.code.toLowerCase().includes(pattern) ||
          role.name.toLowerCase().includes(pattern)
        )
      )
      .sort((a, b) => a.name.localeCompare(b.name));
  },

  // Find roles with specific permissions (mock - would need permission relationship)
  findRolesWithPermission: (permissionCode: string): TbApplicationRole[] => {
    // This is a mock implementation - in real scenario would join with permission tables
    const relevantRoles = {
      'inventory.manage': ['INVENTORY_MANAGER', 'SUPER_ADMIN', 'SYSTEM_ADMIN'],
      'procurement.approve': ['PROCUREMENT_MANAGER', 'SUPER_ADMIN', 'FINANCE_MANAGER'],
      'accounting.view': ['FINANCE_MANAGER', 'SUPER_ADMIN', 'SYSTEM_ADMIN'],
      'settings.manage': ['SUPER_ADMIN', 'SYSTEM_ADMIN'],
      'pms.reservations': ['HOTEL_MANAGER', 'FRONT_DESK_MANAGER', 'RECEPTIONIST'],
      'pos.sell': ['CASHIER', 'RESTAURANT_MANAGER', 'WAITER']
    };

    const roleCodes = relevantRoles[permissionCode as keyof typeof relevantRoles] || [];
    
    return mockTbApplicationRole
      .filter(role => 
        role.is_active && 
        roleCodes.includes(role.code)
      )
      .sort((a, b) => a.name.localeCompare(b.name));
  },

  // Update application role
  update: (id: string, data: Partial<TbApplicationRole>, updated_by_id?: string): TbApplicationRole | null => {
    const index = mockTbApplicationRole.findIndex(role => role.id === id);
    if (index === -1) return null;

    mockTbApplicationRole[index] = {
      ...mockTbApplicationRole[index],
      ...data,
      updated_at: getCurrentTimestamp(),
      updated_by_id: updated_by_id || null
    };
    return mockTbApplicationRole[index];
  },

  // Delete application role (soft delete by deactivating)
  delete: (id: string, updated_by_id?: string): boolean => {
    return tbApplicationRoleCrud.update(id, { is_active: false }, updated_by_id) !== null;
  },

  // Activate role
  activate: (id: string, updated_by_id?: string): TbApplicationRole | null => {
    return tbApplicationRoleCrud.update(id, { is_active: true }, updated_by_id);
  },

  // Deactivate role
  deactivate: (id: string, updated_by_id?: string): TbApplicationRole | null => {
    return tbApplicationRoleCrud.update(id, { is_active: false }, updated_by_id);
  },

  // Get role hierarchy (mock implementation)
  getRoleHierarchy: (businessUnitId: string) => {
    const roles = tbApplicationRoleCrud.findByBusinessUnitId(businessUnitId);
    
    // Simple hierarchy based on role naming patterns
    const hierarchy = {
      executives: roles.filter(r => r.code.includes('MANAGER') || r.code.includes('ADMIN')),
      supervisors: roles.filter(r => r.code.includes('SUPERVISOR') || r.code.includes('HEAD')),
      specialists: roles.filter(r => r.code.includes('ENGINEER') || r.code.includes('CHEF')),
      staff: roles.filter(r => 
        !r.code.includes('MANAGER') && 
        !r.code.includes('ADMIN') && 
        !r.code.includes('SUPERVISOR') && 
        !r.code.includes('HEAD') &&
        !r.code.includes('ENGINEER') &&
        !r.code.includes('CHEF')
      )
    };
    
    return hierarchy;
  },

  // Get role statistics
  getStats: () => {
    const allRoles = mockTbApplicationRole;
    const activeRoles = allRoles.filter(role => role.is_active);
    
    return {
      total: allRoles.length,
      active: activeRoles.length,
      inactive: allRoles.length - activeRoles.length,
      byBusinessUnit: activeRoles.reduce((acc, role) => {
        acc[role.business_unit_id] = (acc[role.business_unit_id] || 0) + 1;
        return acc;
      }, {} as Record<string, number>),
      adminRoles: tbApplicationRoleCrud.findAdminRoles().length,
      byBusinessType: {
        hotel: tbApplicationRoleCrud.findByBusinessType('hotel').length,
        restaurant: tbApplicationRoleCrud.findByBusinessType('restaurant').length,
        software: tbApplicationRoleCrud.findByBusinessType('software').length,
        general: tbApplicationRoleCrud.findByBusinessType('general').length
      }
    };
  }
};
