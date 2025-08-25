// =============== UUID MAPPING FOR CONSISTENT REFERENCES ===============

// Core Entity UUIDs
export const UUID_MAPPING = {
  // Users
  'user-001': '550e8400-e29b-41d4-a716-446655440001', // staff@test.com
  'user-002': '550e8400-e29b-41d4-a716-446655440002', // department-manager@test.com
  'user-003': '550e8400-e29b-41d4-a716-446655440003', // financial-manager@test.com  
  'user-004': '550e8400-e29b-41d4-a716-446655440004', // purchasing-staff@test.com
  'user-005': '550e8400-e29b-41d4-a716-446655440005', // counter-staff@test.com
  'user-006': '550e8400-e29b-41d4-a716-446655440006', // chef@test.com
  'user-007': '550e8400-e29b-41d4-a716-446655440007', // admin@test.com
  'user-008': '550e8400-e29b-41d4-a716-446655440008', // test@test.com
  'user-009': '550e8400-e29b-41d4-a716-446655440009', // staff2@test.com
  'user-010': '550e8400-e29b-41d4-a716-446655440010', // Developer
  'user-011': '550e8400-e29b-41d4-a716-446655440011', // Support Manager
  'user-012': '550e8400-e29b-41d4-a716-446655440012', // Security Officer
  'system': '00000000-0000-0000-0000-000000000000', // System user
  'developer': '550e8400-e29b-41d4-a716-446655440010', // same as user-010

  // Clusters
  'cluster-001': '660e8400-e29b-41d4-a716-446655440001', // Carmen Software HQ
  'cluster-002': '660e8400-e29b-41d4-a716-446655440002', // Hotel Chain
  'cluster-003': '660e8400-e29b-41d4-a716-446655440003', // Restaurant Chain
  'cluster-004': '660e8400-e29b-41d4-a716-446655440004', // Development

  // Business Units
  'bu-001': '770e8400-e29b-41d4-a716-446655440001', // Carmen Software Bangkok
  'bu-002': '770e8400-e29b-41d4-a716-446655440002', // Royal Grand Hotel
  'bu-003': '770e8400-e29b-41d4-a716-446655440003', // Spice Garden Restaurant
  'bu-004': '770e8400-e29b-41d4-a716-446655440004', // Carmen Software Singapore
  'bu-005': '770e8400-e29b-41d4-a716-446655440005', // Development Test Unit

  // Departments
  'dept-001': '880e8400-e29b-41d4-a716-446655440001', // IT Department
  'dept-002': '880e8400-e29b-41d4-a716-446655440002', // Finance Department
  'dept-003': '880e8400-e29b-41d4-a716-446655440003', // Procurement Department
  'dept-004': '880e8400-e29b-41d4-a716-446655440004', // Front Office
  'dept-005': '880e8400-e29b-41d4-a716-446655440005', // Housekeeping
  'dept-006': '880e8400-e29b-41d4-a716-446655440006', // Kitchen
  'dept-007': '880e8400-e29b-41d4-a716-446655440007', // Service
  'dept-008': '880e8400-e29b-41d4-a716-446655440008', // Management
  'dept-009': '880e8400-e29b-41d4-a716-446655440009', // Support
  'dept-010': '880e8400-e29b-41d4-a716-446655440010', // Development

  // Locations
  'loc-001': '990e8400-e29b-41d4-a716-446655440001', // Bangkok HQ
  'loc-002': '990e8400-e29b-41d4-a716-446655440002', // Royal Grand Hotel Bangkok
  'loc-003': '990e8400-e29b-41d4-a716-446655440003', // Spice Garden Sukhumvit
  'loc-004': '990e8400-e29b-41d4-a716-446655440004', // Singapore Office
  'loc-005': '990e8400-e29b-41d4-a716-446655440005', // Development Lab

  // Modules
  'mod-001': 'aa0e8400-e29b-41d4-a716-446655440001', // Inventory Management
  'mod-002': 'aa0e8400-e29b-41d4-a716-446655440002', // Procurement
  'mod-003': 'aa0e8400-e29b-41d4-a716-446655440003', // Accounting
  'mod-004': 'aa0e8400-e29b-41d4-a716-446655440004', // Human Resources
  'mod-005': 'aa0e8400-e29b-41d4-a716-446655440005', // Customer Relationship Management
  'mod-006': 'aa0e8400-e29b-41d4-a716-446655440006', // Property Management System
  'mod-007': 'aa0e8400-e29b-41d4-a716-446655440007', // Point of Sale
  'mod-008': 'aa0e8400-e29b-41d4-a716-446655440008', // Reporting & Analytics
  'mod-009': 'aa0e8400-e29b-41d4-a716-446655440009', // System Settings
  'mod-010': 'aa0e8400-e29b-41d4-a716-446655440010', // Delivery Management
  'mod-011': 'aa0e8400-e29b-41d4-a716-446655440011', // Maintenance Management
  'mod-012': 'aa0e8400-e29b-41d4-a716-446655440012', // Quality Control
  'mod-013': 'aa0e8400-e29b-41d4-a716-446655440013', // Workflow Management
  'mod-014': 'aa0e8400-e29b-41d4-a716-446655440014', // Communications
  'mod-015': 'aa0e8400-e29b-41d4-a716-446655440015', // Mobile Application

  // Permissions  
  'perm-001': 'bb0e8400-e29b-41d4-a716-446655440001', // inventory.view
  'perm-002': 'bb0e8400-e29b-41d4-a716-446655440002', // inventory.create
  'perm-003': 'bb0e8400-e29b-41d4-a716-446655440003', // inventory.update
  'perm-004': 'bb0e8400-e29b-41d4-a716-446655440004', // inventory.delete
  'perm-005': 'bb0e8400-e29b-41d4-a716-446655440005', // procurement.view
  'perm-006': 'bb0e8400-e29b-41d4-a716-446655440006', // procurement.create
  'perm-007': 'bb0e8400-e29b-41d4-a716-446655440007', // procurement.approve
  'perm-008': 'bb0e8400-e29b-41d4-a716-446655440008', // accounting.view
  'perm-009': 'bb0e8400-e29b-41d4-a716-446655440009', // accounting.manage
  'perm-010': 'bb0e8400-e29b-41d4-a716-446655440010', // hr.view
  'perm-011': 'bb0e8400-e29b-41d4-a716-446655440011', // hr.manage
  'perm-012': 'bb0e8400-e29b-41d4-a716-446655440012', // crm.view
  'perm-013': 'bb0e8400-e29b-41d4-a716-446655440013', // crm.manage
  'perm-014': 'bb0e8400-e29b-41d4-a716-446655440014', // pms.view
  'perm-015': 'bb0e8400-e29b-41d4-a716-446655440015', // pms.manage
  'perm-016': 'bb0e8400-e29b-41d4-a716-446655440016', // pos.view
  'perm-017': 'bb0e8400-e29b-41d4-a716-446655440017', // pos.operate
  'perm-018': 'bb0e8400-e29b-41d4-a716-446655440018', // reports.view
  'perm-019': 'bb0e8400-e29b-41d4-a716-446655440019', // reports.generate
  'perm-020': 'bb0e8400-e29b-41d4-a716-446655440020', // settings.view
  'perm-021': 'bb0e8400-e29b-41d4-a716-446655440021', // settings.manage
  'perm-022': 'bb0e8400-e29b-41d4-a716-446655440022', // delivery.view
  'perm-023': 'bb0e8400-e29b-41d4-a716-446655440023', // delivery.manage
  'perm-024': 'bb0e8400-e29b-41d4-a716-446655440024', // maintenance.view
  'perm-025': 'bb0e8400-e29b-41d4-a716-446655440025', // maintenance.manage
  'perm-026': 'bb0e8400-e29b-41d4-a716-446655440026', // quality.view
  'perm-027': 'bb0e8400-e29b-41d4-a716-446655440027', // quality.control
  'perm-028': 'bb0e8400-e29b-41d4-a716-446655440028', // workflow.view
  'perm-029': 'bb0e8400-e29b-41d4-a716-446655440029', // workflow.manage
  'perm-030': 'bb0e8400-e29b-41d4-a716-446655440030', // communications.view
  'perm-031': 'bb0e8400-e29b-41d4-a716-446655440031', // communications.send
  'perm-032': 'bb0e8400-e29b-41d4-a716-446655440032', // mobile.access

  // Application Roles
  'app-role-001': 'cc0e8400-e29b-41d4-a716-446655440001', // Super Admin
  'app-role-002': 'cc0e8400-e29b-41d4-a716-446655440002', // System Admin
  'app-role-003': 'cc0e8400-e29b-41d4-a716-446655440003', // Finance Manager
  'app-role-004': 'cc0e8400-e29b-41d4-a716-446655440004', // Procurement Manager
  'app-role-005': 'cc0e8400-e29b-41d4-a716-446655440005', // Inventory Manager
  'app-role-006': 'cc0e8400-e29b-41d4-a716-446655440006', // HR Manager
  'app-role-007': 'cc0e8400-e29b-41d4-a716-446655440007', // Employee
  'app-role-008': 'cc0e8400-e29b-41d4-a716-446655440008', // Hotel Manager
  'app-role-009': 'cc0e8400-e29b-41d4-a716-446655440009', // Front Office Manager
  'app-role-010': 'cc0e8400-e29b-41d4-a716-446655440010', // Housekeeping Manager
  'app-role-011': 'cc0e8400-e29b-41d4-a716-446655440011', // Front Desk Staff
  'app-role-012': 'cc0e8400-e29b-41d4-a716-446655440012', // Receptionist
  'app-role-013': 'cc0e8400-e29b-41d4-a716-446655440013', // Restaurant Manager
  'app-role-014': 'cc0e8400-e29b-41d4-a716-446655440014', // Chef
  'app-role-015': 'cc0e8400-e29b-41d4-a716-446655440015', // Cashier
  'app-role-016': 'cc0e8400-e29b-41d4-a716-446655440016', // Waiter
  'app-role-017': 'cc0e8400-e29b-41d4-a716-446655440017', // Delivery Staff
  'app-role-018': 'cc0e8400-e29b-41d4-a716-446655440018', // Regional Manager
  'app-role-019': 'cc0e8400-e29b-41d4-a716-446655440019', // Area Manager
  'app-role-020': 'cc0e8400-e29b-41d4-a716-446655440020', // Support Engineer
  'app-role-021': 'cc0e8400-e29b-41d4-a716-446655440021', // Developer
  'app-role-022': 'cc0e8400-e29b-41d4-a716-446655440022', // QA Tester

  // Subscriptions
  'sub-001': 'dd0e8400-e29b-41d4-a716-446655440001', // Enterprise Plus
  'sub-002': 'dd0e8400-e29b-41d4-a716-446655440002', // Hospitality Pro
  'sub-003': 'dd0e8400-e29b-41d4-a716-446655440003', // Restaurant Business
  'sub-004': 'dd0e8400-e29b-41d4-a716-446655440004', // Developer Unlimited
  'sub-005': 'dd0e8400-e29b-41d4-a716-446655440005', // Hotel Trial Extension
  'sub-006': 'dd0e8400-e29b-41d4-a716-446655440006', // Basic Plan
  'sub-007': 'dd0e8400-e29b-41d4-a716-446655440007', // Starter Plan
  'sub-008': 'dd0e8400-e29b-41d4-a716-446655440008', // Hospitality Pro Renewal
  'sub-009': 'dd0e8400-e29b-41d4-a716-446655440009', // Add-on Modules
  'sub-010': 'dd0e8400-e29b-41d4-a716-446655440010'  // Holiday Season Special
};

// Helper function to get UUID from old ID
export const getUuidFromOldId = (oldId: string): string => {
  return UUID_MAPPING[oldId as keyof typeof UUID_MAPPING] || oldId;
};

// Helper function to convert all IDs in an object
export const convertIdsToUuid = <T extends Record<string, any>>(obj: T): T => {
  const converted = { ...obj } as any;
  
  // Convert common ID fields
  const idFields = ['id', 'user_id', 'business_unit_id', 'cluster_id', 'department_id', 'location_id', 
                   'module_id', 'permission_id', 'application_role_id', 'subscription_id', 
                   'created_by_id', 'updated_by_id'];
  
  idFields.forEach(field => {
    if (converted[field] && typeof converted[field] === 'string') {
      converted[field] = getUuidFromOldId(converted[field]);
    }
  });
  
  return converted as T;
};
