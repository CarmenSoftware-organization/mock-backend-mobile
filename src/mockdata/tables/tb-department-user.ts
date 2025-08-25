// =============== TB_DEPARTMENT_USER TABLE ===============

import { TbDepartmentUser } from './types';
import { generateUuid, getCurrentTimestamp } from './utils';
import { UUID_MAPPING } from './uuid-mapping';

// Mock Department Users Table (tb_department_user)
export let mockTbDepartmentUser: TbDepartmentUser[] = [
  {
    id: '550e8400-e29b-41d4-a716-446655440301',
    user_id: UUID_MAPPING['user-001'],
    department_id: UUID_MAPPING['dept-001'],
    is_hod: false,
    note: null,
    info: {},
    dimension: {},
    doc_version: 0,
    created_at: '2024-01-15T08:00:00Z',
    created_by_id: null,
    updated_at: '2024-01-15T08:00:00Z',
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: '550e8400-e29b-41d4-a716-446655440302',
    user_id: UUID_MAPPING['user-002'],
    department_id: UUID_MAPPING['dept-001'],
    is_hod: true,
    note: null,
    info: {},
    dimension: {},
    doc_version: 0,
    created_at: '2024-01-16T09:00:00Z',
    created_by_id: null,
    updated_at: '2024-01-16T09:00:00Z',
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: '550e8400-e29b-41d4-a716-446655440303',
    user_id: UUID_MAPPING['user-003'],
    department_id: UUID_MAPPING['dept-002'],
    is_hod: true,
    note: null,
    info: {},
    dimension: {},
    doc_version: 0,
    created_at: '2024-01-17T10:00:00Z',
    created_by_id: null,
    updated_at: '2024-01-17T10:00:00Z',
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: '550e8400-e29b-41d4-a716-446655440304',
    user_id: UUID_MAPPING['user-004'],
    department_id: UUID_MAPPING['dept-003'],
    is_hod: false,
    note: null,
    info: {},
    dimension: {},
    doc_version: 0,
    created_at: '2024-01-18T11:00:00Z',
    created_by_id: null,
    updated_at: '2024-01-18T11:00:00Z',
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: '550e8400-e29b-41d4-a716-446655440305',
    user_id: UUID_MAPPING['user-005'],
    department_id: UUID_MAPPING['dept-004'],
    is_hod: false,
    note: null,
    info: {},
    dimension: {},
    doc_version: 0,
    created_at: '2024-01-19T12:00:00Z',
    created_by_id: null,
    updated_at: '2024-01-19T12:00:00Z',
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: '550e8400-e29b-41d4-a716-446655440306',
    user_id: UUID_MAPPING['user-006'],
    department_id: UUID_MAPPING['dept-002'],
    is_hod: false,
    note: null,
    info: {},
    dimension: {},
    doc_version: 0,
    created_at: '2024-01-20T13:00:00Z',
    created_by_id: null,
    updated_at: '2024-01-20T13:00:00Z',
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: '550e8400-e29b-41d4-a716-446655440307',
    user_id: UUID_MAPPING['user-007'],
    department_id: UUID_MAPPING['dept-005'],
    is_hod: false,
    note: null,
    info: {},
    dimension: {},
    doc_version: 0,
    created_at: '2024-01-21T14:00:00Z',
    created_by_id: null,
    updated_at: '2024-01-21T14:00:00Z',
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null
  },{
    id: '550e8400-e29b-41d4-a716-446655440308',
    user_id: UUID_MAPPING['user-008'],
    department_id: UUID_MAPPING['dept-001'],
    is_hod: false,
    note: null,
    info: {},
    dimension: {},
    doc_version: 0,
    created_at: '2024-01-22T15:00:00Z',
    created_by_id: null,
    updated_at: '2024-01-22T15:00:00Z',
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null
  },{
    id: '550e8400-e29b-41d4-a716-446655440309',
    user_id: UUID_MAPPING['user-009'],
    department_id: UUID_MAPPING['dept-001'],
    is_hod: false,
    note: null,
    info: {},
    dimension: {},
    doc_version: 0,
    created_at: '2024-01-23T16:00:00Z',
    created_by_id: null,
    updated_at: '2024-01-23T16:00:00Z',
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null
  },

  // =============== HOTEL PROCUREMENT & OPERATIONS DEPARTMENT USERS ===============
  
  // Executive Level
  {
    id: UUID_MAPPING['dept-user-gm'],
    user_id: UUID_MAPPING['user-gm'],
    department_id: '*', // General Manager oversees all departments
    is_hod: true,
    note: 'General Manager - Executive oversight of all hotel operations',
    info: {
      role: 'general_manager',
      executive_level: true,
      all_department_access: true,
      emergency_approval_authority: true
    },
    dimension: {
      seniority_level: 10,
      approval_scope: 'unlimited',
      responsibility: 'hotel_operations'
    },
    doc_version: 0,
    created_at: '2024-01-10T08:00:00Z',
    created_by_id: UUID_MAPPING['system'],
    updated_at: '2024-01-10T08:00:00Z',
    updated_by_id: UUID_MAPPING['system'],
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: UUID_MAPPING['dept-user-financial-controller'],
    user_id: UUID_MAPPING['user-financial-controller'],
    department_id: UUID_MAPPING['dept-finance'],
    is_hod: true,
    note: 'Financial Controller - Budget oversight and financial approval authority',
    info: {
      role: 'financial_controller',
      budget_oversight: true,
      cross_department_authority: true,
      financial_reporting: true
    },
    dimension: {
      seniority_level: 9,
      approval_scope: 'financial',
      responsibility: 'budget_management'
    },
    doc_version: 0,
    created_at: '2024-01-10T08:30:00Z',
    created_by_id: UUID_MAPPING['system'],
    updated_at: '2024-01-10T08:30:00Z',
    updated_by_id: UUID_MAPPING['system'],
    deleted_at: null,
    deleted_by_id: null
  },

  // Kitchen Department
  {
    id: UUID_MAPPING['dept-user-exec-chef'],
    user_id: UUID_MAPPING['user-exec-chef'],
    department_id: UUID_MAPPING['dept-kitchen'],
    is_hod: true,
    note: 'Executive Chef - Head of Kitchen Operations',
    info: {
      role: 'executive_chef',
      department_head: true,
      culinary_authority: true,
      menu_planning: true
    },
    dimension: {
      seniority_level: 8,
      approval_scope: 'kitchen_operations',
      specialty: 'culinary_operations'
    },
    doc_version: 0,
    created_at: '2024-01-10T09:00:00Z',
    created_by_id: UUID_MAPPING['system'],
    updated_at: '2024-01-10T09:00:00Z',
    updated_by_id: UUID_MAPPING['system'],
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: UUID_MAPPING['dept-user-sous-chef'],
    user_id: UUID_MAPPING['user-sous-chef'],
    department_id: UUID_MAPPING['dept-kitchen'],
    is_hod: false,
    note: 'Sous Chef - Kitchen Supervisor',
    info: {
      role: 'sous_chef',
      reports_to: 'executive_chef',
      shift_supervisor: true,
      food_safety_responsibility: true
    },
    dimension: {
      seniority_level: 6,
      approval_scope: 'kitchen_supplies',
      specialty: 'food_preparation'
    },
    doc_version: 0,
    created_at: '2024-01-10T10:15:00Z',
    created_by_id: UUID_MAPPING['system'],
    updated_at: '2024-01-10T10:15:00Z',
    updated_by_id: UUID_MAPPING['system'],
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: UUID_MAPPING['dept-user-line-cook'],
    user_id: UUID_MAPPING['user-line-cook'],
    department_id: UUID_MAPPING['dept-kitchen'],
    is_hod: false,
    note: 'Line Cook - Kitchen Staff',
    info: {
      role: 'line_cook',
      reports_to: 'sous_chef',
      station: 'grill_station',
      food_handler_certified: true
    },
    dimension: {
      seniority_level: 3,
      approval_scope: 'basic_requests',
      specialty: 'food_preparation'
    },
    doc_version: 0,
    created_at: '2024-01-10T12:00:00Z',
    created_by_id: UUID_MAPPING['system'],
    updated_at: '2024-01-10T12:00:00Z',
    updated_by_id: UUID_MAPPING['system'],
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: UUID_MAPPING['dept-user-line-cook-2'],
    user_id: UUID_MAPPING['user-line-cook-2'],
    department_id: UUID_MAPPING['dept-kitchen'],
    is_hod: false,
    note: 'Line Cook 2 - Kitchen Staff',
    info: {
      role: 'line_cook',
      reports_to: 'sous_chef',
      station: 'pantry_station',
      food_handler_certified: true
    },
    dimension: {
      seniority_level: 3,
      approval_scope: 'basic_requests',
      specialty: 'cold_preparation'
    },
    doc_version: 0,
    created_at: '2024-01-10T12:15:00Z',
    created_by_id: UUID_MAPPING['system'],
    updated_at: '2024-01-10T12:15:00Z',
    updated_by_id: UUID_MAPPING['system'],
    deleted_at: null,
    deleted_by_id: null
  },

  // Housekeeping Department
  {
    id: UUID_MAPPING['dept-user-exec-housekeeper'],
    user_id: UUID_MAPPING['user-exec-housekeeper'],
    department_id: UUID_MAPPING['dept-housekeeping'],
    is_hod: true,
    note: 'Executive Housekeeper - Head of Housekeeping Operations',
    info: {
      role: 'executive_housekeeper',
      department_head: true,
      quality_standards: true,
      staff_management: true
    },
    dimension: {
      seniority_level: 8,
      approval_scope: 'housekeeping_operations',
      specialty: 'rooms_division'
    },
    doc_version: 0,
    created_at: '2024-01-10T09:15:00Z',
    created_by_id: UUID_MAPPING['system'],
    updated_at: '2024-01-10T09:15:00Z',
    updated_by_id: UUID_MAPPING['system'],
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: UUID_MAPPING['dept-user-asst-housekeeper'],
    user_id: UUID_MAPPING['user-asst-housekeeper'],
    department_id: UUID_MAPPING['dept-housekeeping'],
    is_hod: false,
    note: 'Assistant Housekeeper - Housekeeping Supervisor',
    info: {
      role: 'assistant_housekeeper',
      reports_to: 'executive_housekeeper',
      floor_supervisor: true,
      training_responsibility: true
    },
    dimension: {
      seniority_level: 5,
      approval_scope: 'housekeeping_supplies',
      specialty: 'guest_rooms'
    },
    doc_version: 0,
    created_at: '2024-01-10T10:30:00Z',
    created_by_id: UUID_MAPPING['system'],
    updated_at: '2024-01-10T10:30:00Z',
    updated_by_id: UUID_MAPPING['system'],
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: UUID_MAPPING['dept-user-room-attendant-1'],
    user_id: UUID_MAPPING['user-room-attendant-1'],
    department_id: UUID_MAPPING['dept-housekeeping'],
    is_hod: false,
    note: 'Room Attendant - Guest Room Cleaning',
    info: {
      role: 'room_attendant',
      reports_to: 'assistant_housekeeper',
      assigned_floors: ['floor_3', 'floor_4'],
      deep_cleaning_certified: true
    },
    dimension: {
      seniority_level: 2,
      approval_scope: 'supply_requests',
      specialty: 'room_cleaning'
    },
    doc_version: 0,
    created_at: '2024-01-10T12:30:00Z',
    created_by_id: UUID_MAPPING['system'],
    updated_at: '2024-01-10T12:30:00Z',
    updated_by_id: UUID_MAPPING['system'],
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: UUID_MAPPING['dept-user-room-attendant-2'],
    user_id: UUID_MAPPING['user-room-attendant-2'],
    department_id: UUID_MAPPING['dept-housekeeping'],
    is_hod: false,
    note: 'Room Attendant 2 - Guest Room Cleaning',
    info: {
      role: 'room_attendant',
      reports_to: 'assistant_housekeeper',
      assigned_floors: ['floor_5', 'floor_6'],
      deep_cleaning_certified: true
    },
    dimension: {
      seniority_level: 2,
      approval_scope: 'supply_requests',
      specialty: 'room_cleaning'
    },
    doc_version: 0,
    created_at: '2024-01-10T12:45:00Z',
    created_by_id: UUID_MAPPING['system'],
    updated_at: '2024-01-10T12:45:00Z',
    updated_by_id: UUID_MAPPING['system'],
    deleted_at: null,
    deleted_by_id: null
  },

  // F&B Service Department
  {
    id: UUID_MAPPING['dept-user-fb-manager'],
    user_id: UUID_MAPPING['user-fb-manager'],
    department_id: UUID_MAPPING['dept-fb-service'],
    is_hod: true,
    note: 'F&B Manager - Head of Food & Beverage Service',
    info: {
      role: 'fb_manager',
      department_head: true,
      revenue_responsibility: true,
      guest_experience: true
    },
    dimension: {
      seniority_level: 7,
      approval_scope: 'fb_operations',
      specialty: 'service_operations'
    },
    doc_version: 0,
    created_at: '2024-01-10T09:30:00Z',
    created_by_id: UUID_MAPPING['system'],
    updated_at: '2024-01-10T09:30:00Z',
    updated_by_id: UUID_MAPPING['system'],
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: UUID_MAPPING['dept-user-restaurant-supervisor'],
    user_id: UUID_MAPPING['user-restaurant-supervisor'],
    department_id: UUID_MAPPING['dept-fb-service'],
    is_hod: false,
    note: 'Restaurant Supervisor - Service Floor Supervision',
    info: {
      role: 'restaurant_supervisor',
      reports_to: 'fb_manager',
      shift_supervisor: true,
      customer_service_training: true
    },
    dimension: {
      seniority_level: 5,
      approval_scope: 'service_supplies',
      specialty: 'restaurant_service'
    },
    doc_version: 0,
    created_at: '2024-01-10T11:15:00Z',
    created_by_id: UUID_MAPPING['system'],
    updated_at: '2024-01-10T11:15:00Z',
    updated_by_id: UUID_MAPPING['system'],
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: UUID_MAPPING['dept-user-server-1'],
    user_id: UUID_MAPPING['user-server-1'],
    department_id: UUID_MAPPING['dept-fb-service'],
    is_hod: false,
    note: 'Server - Restaurant Service Staff',
    info: {
      role: 'server',
      reports_to: 'restaurant_supervisor',
      section: 'main_dining',
      wine_service_certified: true
    },
    dimension: {
      seniority_level: 2,
      approval_scope: 'basic_requests',
      specialty: 'table_service'
    },
    doc_version: 0,
    created_at: '2024-01-10T13:00:00Z',
    created_by_id: UUID_MAPPING['system'],
    updated_at: '2024-01-10T13:00:00Z',
    updated_by_id: UUID_MAPPING['system'],
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: UUID_MAPPING['dept-user-server-2'],
    user_id: UUID_MAPPING['user-server-2'],
    department_id: UUID_MAPPING['dept-fb-service'],
    is_hod: false,
    note: 'Server 2 - Restaurant Service Staff',
    info: {
      role: 'server',
      reports_to: 'restaurant_supervisor',
      section: 'private_dining',
      wine_service_certified: false
    },
    dimension: {
      seniority_level: 2,
      approval_scope: 'basic_requests',
      specialty: 'table_service'
    },
    doc_version: 0,
    created_at: '2024-01-10T13:15:00Z',
    created_by_id: UUID_MAPPING['system'],
    updated_at: '2024-01-10T13:15:00Z',
    updated_by_id: UUID_MAPPING['system'],
    deleted_at: null,
    deleted_by_id: null
  },

  // Engineering Department
  {
    id: UUID_MAPPING['dept-user-chief-engineer'],
    user_id: UUID_MAPPING['user-chief-engineer'],
    department_id: UUID_MAPPING['dept-engineering'],
    is_hod: true,
    note: 'Chief Engineer - Head of Engineering & Maintenance',
    info: {
      role: 'chief_engineer',
      department_head: true,
      safety_responsibility: true,
      hvac_expertise: true
    },
    dimension: {
      seniority_level: 8,
      approval_scope: 'engineering_operations',
      specialty: 'mechanical_systems'
    },
    doc_version: 0,
    created_at: '2024-01-10T09:45:00Z',
    created_by_id: UUID_MAPPING['system'],
    updated_at: '2024-01-10T09:45:00Z',
    updated_by_id: UUID_MAPPING['system'],
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: UUID_MAPPING['dept-user-maintenance-supervisor'],
    user_id: UUID_MAPPING['user-maintenance-supervisor'],
    department_id: UUID_MAPPING['dept-engineering'],
    is_hod: false,
    note: 'Maintenance Supervisor - Engineering Supervisor',
    info: {
      role: 'maintenance_supervisor',
      reports_to: 'chief_engineer',
      preventive_maintenance: true,
      emergency_response: true
    },
    dimension: {
      seniority_level: 5,
      approval_scope: 'maintenance_supplies',
      specialty: 'preventive_maintenance'
    },
    doc_version: 0,
    created_at: '2024-01-10T11:30:00Z',
    created_by_id: UUID_MAPPING['system'],
    updated_at: '2024-01-10T11:30:00Z',
    updated_by_id: UUID_MAPPING['system'],
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: UUID_MAPPING['dept-user-maintenance-tech-1'],
    user_id: UUID_MAPPING['user-maintenance-tech-1'],
    department_id: UUID_MAPPING['dept-engineering'],
    is_hod: false,
    note: 'Maintenance Technician - Engineering Staff',
    info: {
      role: 'maintenance_technician',
      reports_to: 'maintenance_supervisor',
      specialization: 'electrical_systems',
      certified_electrician: true
    },
    dimension: {
      seniority_level: 3,
      approval_scope: 'tool_requests',
      specialty: 'electrical'
    },
    doc_version: 0,
    created_at: '2024-01-10T13:30:00Z',
    created_by_id: UUID_MAPPING['system'],
    updated_at: '2024-01-10T13:30:00Z',
    updated_by_id: UUID_MAPPING['system'],
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: UUID_MAPPING['dept-user-maintenance-tech-2'],
    user_id: UUID_MAPPING['user-maintenance-tech-2'],
    department_id: UUID_MAPPING['dept-engineering'],
    is_hod: false,
    note: 'Maintenance Technician 2 - Engineering Staff',
    info: {
      role: 'maintenance_technician',
      reports_to: 'maintenance_supervisor',
      specialization: 'plumbing_systems',
      certified_plumber: true
    },
    dimension: {
      seniority_level: 3,
      approval_scope: 'tool_requests',
      specialty: 'plumbing'
    },
    doc_version: 0,
    created_at: '2024-01-10T13:45:00Z',
    created_by_id: UUID_MAPPING['system'],
    updated_at: '2024-01-10T13:45:00Z',
    updated_by_id: UUID_MAPPING['system'],
    deleted_at: null,
    deleted_by_id: null
  },

  // Purchasing Department
  {
    id: UUID_MAPPING['dept-user-purchasing-manager'],
    user_id: UUID_MAPPING['user-purchasing-manager'],
    department_id: UUID_MAPPING['dept-purchasing'],
    is_hod: true,
    note: 'Purchasing Manager - Head of Procurement Operations',
    info: {
      role: 'purchasing_manager',
      department_head: true,
      vendor_relationships: true,
      contract_negotiation: true
    },
    dimension: {
      seniority_level: 8,
      approval_scope: 'procurement_operations',
      specialty: 'vendor_management'
    },
    doc_version: 0,
    created_at: '2024-01-10T10:00:00Z',
    created_by_id: UUID_MAPPING['system'],
    updated_at: '2024-01-10T10:00:00Z',
    updated_by_id: UUID_MAPPING['system'],
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: UUID_MAPPING['dept-user-purchase-officer'],
    user_id: UUID_MAPPING['user-purchase-officer'],
    department_id: UUID_MAPPING['dept-purchasing'],
    is_hod: false,
    note: 'Purchase Officer - Procurement Specialist',
    info: {
      role: 'purchase_officer',
      reports_to: 'purchasing_manager',
      quotation_management: true,
      supplier_evaluation: true
    },
    dimension: {
      seniority_level: 6,
      approval_scope: 'purchase_orders',
      specialty: 'procurement_execution'
    },
    doc_version: 0,
    created_at: '2024-01-10T10:45:00Z',
    created_by_id: UUID_MAPPING['system'],
    updated_at: '2024-01-10T10:45:00Z',
    updated_by_id: UUID_MAPPING['system'],
    deleted_at: null,
    deleted_by_id: null
  },

  // Stores Department
  {
    id: UUID_MAPPING['dept-user-storekeeper'],
    user_id: UUID_MAPPING['user-storekeeper'],
    department_id: UUID_MAPPING['dept-stores'],
    is_hod: true,
    note: 'Storekeeper - Head of Inventory Operations',
    info: {
      role: 'storekeeper',
      department_head: true,
      inventory_control: true,
      stock_management: true
    },
    dimension: {
      seniority_level: 5,
      approval_scope: 'inventory_operations',
      specialty: 'stock_control'
    },
    doc_version: 0,
    created_at: '2024-01-10T11:00:00Z',
    created_by_id: UUID_MAPPING['system'],
    updated_at: '2024-01-10T11:00:00Z',
    updated_by_id: UUID_MAPPING['system'],
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: UUID_MAPPING['dept-user-store-clerk'],
    user_id: UUID_MAPPING['user-store-clerk'],
    department_id: UUID_MAPPING['dept-stores'],
    is_hod: false,
    note: 'Store Clerk - Inventory Assistant',
    info: {
      role: 'store_clerk',
      reports_to: 'storekeeper',
      receiving_goods: true,
      stock_issuing: true
    },
    dimension: {
      seniority_level: 3,
      approval_scope: 'stock_issues',
      specialty: 'inventory_management'
    },
    doc_version: 0,
    created_at: '2024-01-10T14:00:00Z',
    created_by_id: UUID_MAPPING['system'],
    updated_at: '2024-01-10T14:00:00Z',
    updated_by_id: UUID_MAPPING['system'],
    deleted_at: null,
    deleted_by_id: null
  },

  // Laundry Department
  {
    id: UUID_MAPPING['dept-user-laundry-supervisor'],
    user_id: UUID_MAPPING['user-laundry-supervisor'],
    department_id: UUID_MAPPING['dept-laundry'],
    is_hod: true,
    note: 'Laundry Supervisor - Head of Laundry Operations',
    info: {
      role: 'laundry_supervisor',
      department_head: true,
      quality_control: true,
      chemical_handling: true
    },
    dimension: {
      seniority_level: 4,
      approval_scope: 'laundry_operations',
      specialty: 'textile_care'
    },
    doc_version: 0,
    created_at: '2024-01-10T11:45:00Z',
    created_by_id: UUID_MAPPING['system'],
    updated_at: '2024-01-10T11:45:00Z',
    updated_by_id: UUID_MAPPING['system'],
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: UUID_MAPPING['dept-user-laundry-attendant-1'],
    user_id: UUID_MAPPING['user-laundry-attendant-1'],
    department_id: UUID_MAPPING['dept-laundry'],
    is_hod: false,
    note: 'Laundry Attendant - Laundry Operations Staff',
    info: {
      role: 'laundry_attendant',
      reports_to: 'laundry_supervisor',
      washing_operations: true,
      stain_treatment: true
    },
    dimension: {
      seniority_level: 2,
      approval_scope: 'supply_requests',
      specialty: 'washing_operations'
    },
    doc_version: 0,
    created_at: '2024-01-10T14:15:00Z',
    created_by_id: UUID_MAPPING['system'],
    updated_at: '2024-01-10T14:15:00Z',
    updated_by_id: UUID_MAPPING['system'],
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: UUID_MAPPING['dept-user-laundry-attendant-2'],
    user_id: UUID_MAPPING['user-laundry-attendant-2'],
    department_id: UUID_MAPPING['dept-laundry'],
    is_hod: false,
    note: 'Laundry Attendant 2 - Laundry Operations Staff',
    info: {
      role: 'laundry_attendant',
      reports_to: 'laundry_supervisor',
      pressing_operations: true,
      folding_operations: true
    },
    dimension: {
      seniority_level: 2,
      approval_scope: 'supply_requests',
      specialty: 'finishing_operations'
    },
    doc_version: 0,
    created_at: '2024-01-10T14:30:00Z',
    created_by_id: UUID_MAPPING['system'],
    updated_at: '2024-01-10T14:30:00Z',
    updated_by_id: UUID_MAPPING['system'],
    deleted_at: null,
    deleted_by_id: null
  },

  // Special Roles
  {
    id: UUID_MAPPING['dept-user-night-manager'],
    user_id: UUID_MAPPING['user-night-manager'],
    department_id: '*', // Night Manager has cross-departmental authority
    is_hod: false,
    note: 'Night Manager - After-hours Operations Management',
    info: {
      role: 'night_manager',
      reports_to: 'general_manager',
      emergency_authority: true,
      night_shift_supervisor: true
    },
    dimension: {
      seniority_level: 7,
      approval_scope: 'emergency_operations',
      specialty: 'night_operations'
    },
    doc_version: 0,
    created_at: '2024-01-10T14:45:00Z',
    created_by_id: UUID_MAPPING['system'],
    updated_at: '2024-01-10T14:45:00Z',
    updated_by_id: UUID_MAPPING['system'],
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: UUID_MAPPING['dept-user-security-guard'],
    user_id: UUID_MAPPING['user-security-guard'],
    department_id: 'security', // Special security department
    is_hod: false,
    note: 'Security Guard - Hotel Security Operations',
    info: {
      role: 'security_guard',
      reports_to: 'night_manager',
      safety_monitoring: true,
      incident_reporting: true
    },
    dimension: {
      seniority_level: 3,
      approval_scope: 'security_reports',
      specialty: 'security_operations'
    },
    doc_version: 0,
    created_at: '2024-01-10T15:00:00Z',
    created_by_id: UUID_MAPPING['system'],
    updated_at: '2024-01-10T15:00:00Z',
    updated_by_id: UUID_MAPPING['system'],
    deleted_at: null,
    deleted_by_id: null
  }
];

// =============== TB_DEPARTMENT_USER CRUD ===============

export const tbDepartmentUserCrud = {
  // Create
  create: (data: Omit<TbDepartmentUser, 'id' | 'created_at' | 'updated_at' | 'doc_version'>): TbDepartmentUser => {
    const now = getCurrentTimestamp();
    const departmentUser: TbDepartmentUser = {
      id: generateUuid(),
      user_id: data.user_id,
      department_id: data.department_id,
      is_hod: data.is_hod,
      note: data.note || null,
      info: data.info || {},
      dimension: data.dimension || {},
      doc_version: 0,
      created_at: now,
      created_by_id: data.created_by_id || null,
      updated_at: now,
      updated_by_id: data.updated_by_id || null,
      deleted_at: null,
      deleted_by_id: null
    };
    mockTbDepartmentUser.push(departmentUser);
    return departmentUser;
  },

  // Find by user_id
  findByUserId: (userId: string): TbDepartmentUser[] => {
    return mockTbDepartmentUser.filter(du => du.user_id === userId && !du.deleted_at);
  },

  // Find by department_id
  findByDepartmentId: (departmentId: string): TbDepartmentUser[] => {
    return mockTbDepartmentUser.filter(du => du.department_id === departmentId && !du.deleted_at);
  },

  // Find HODs by department
  findHodByDepartmentId: (departmentId: string): TbDepartmentUser[] => {
    return mockTbDepartmentUser.filter(du => 
      du.department_id === departmentId && du.is_hod && !du.deleted_at
    );
  },

  // Update
  update: (id: string, data: Partial<Omit<TbDepartmentUser, 'id' | 'created_at' | 'doc_version'>>): TbDepartmentUser | null => {
    const index = mockTbDepartmentUser.findIndex(du => du.id === id && !du.deleted_at);
    if (index === -1) return null;

    mockTbDepartmentUser[index] = {
      ...mockTbDepartmentUser[index],
      ...data,
      updated_at: getCurrentTimestamp(),
      doc_version: mockTbDepartmentUser[index].doc_version + 1
    };
    return mockTbDepartmentUser[index];
  },

  // Delete
  delete: (id: string, deletedById?: string): boolean => {
    const index = mockTbDepartmentUser.findIndex(du => du.id === id && !du.deleted_at);
    if (index === -1) return false;

    mockTbDepartmentUser[index] = {
      ...mockTbDepartmentUser[index],
      deleted_at: getCurrentTimestamp(),
      deleted_by_id: deletedById || null
    };
    return true;
  }
};
