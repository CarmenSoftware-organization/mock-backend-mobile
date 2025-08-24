import { TbSubscriptionDetail } from './types';
import { generateUuid, getCurrentTimestamp } from './utils';
import { UUID_MAPPING } from './uuid-mapping';

// =============== MOCK TB_SUBSCRIPTION_DETAIL DATA ===============
export let mockTbSubscriptionDetail: TbSubscriptionDetail[] = [
  // Enterprise Plus (sub-001) - Carmen Software HQ
  { id: "sd-001", subscription_id: UUID_MAPPING['sub-001'], business_unit_id: UUID_MAPPING['bu-001'], module_id: UUID_MAPPING['mod-001'], max_users: null, is_active: true, created_at: "2023-01-01T00:00:00.000Z", created_by_id: UUID_MAPPING['system'] }, // Inventory
  { id: "sd-002", subscription_id: UUID_MAPPING['sub-001'], business_unit_id: UUID_MAPPING['bu-001'], module_id: UUID_MAPPING['mod-002'], max_users: null, is_active: true, created_at: "2023-01-01T00:00:00.000Z", created_by_id: UUID_MAPPING['system'] }, // Procurement
  { id: "sd-003", subscription_id: UUID_MAPPING['sub-001'], business_unit_id: UUID_MAPPING['bu-001'], module_id: UUID_MAPPING['mod-003'], max_users: null, is_active: true, created_at: "2023-01-01T00:00:00.000Z", created_by_id: UUID_MAPPING['system'] }, // Accounting
  { id: "sd-004", subscription_id: UUID_MAPPING['sub-001'], business_unit_id: UUID_MAPPING['bu-001'], module_id: UUID_MAPPING['mod-004'], max_users: null, is_active: true, created_at: "2023-01-01T00:00:00.000Z", created_by_id: UUID_MAPPING['system'] }, // HR
  { id: "sd-005", subscription_id: UUID_MAPPING['sub-001'], business_unit_id: UUID_MAPPING['bu-001'], module_id: UUID_MAPPING['mod-005'], max_users: null, is_active: true, created_at: "2023-01-01T00:00:00.000Z", created_by_id: UUID_MAPPING['system'] }, // CRM
  { id: "sd-006", subscription_id: UUID_MAPPING['sub-001'], business_unit_id: UUID_MAPPING['bu-001'], module_id: UUID_MAPPING['mod-008'], max_users: null, is_active: true, created_at: "2023-01-01T00:00:00.000Z", created_by_id: UUID_MAPPING['system'] }, // Reporting
  { id: "sd-007", subscription_id: UUID_MAPPING['sub-001'], business_unit_id: UUID_MAPPING['bu-001'], module_id: UUID_MAPPING['mod-009'], max_users: null, is_active: true, created_at: "2023-01-01T00:00:00.000Z", created_by_id: UUID_MAPPING['system'] }, // Settings

  // Hospitality Pro (sub-002) - Royal Grand Hotel
  { id: "sd-008", subscription_id: UUID_MAPPING['sub-002'], business_unit_id: UUID_MAPPING['bu-002'], module_id: UUID_MAPPING['mod-001'], max_users: 50, is_active: true, created_at: "2023-02-01T00:00:00.000Z", created_by_id: UUID_MAPPING['user-001'] }, // Inventory
  { id: "sd-009", subscription_id: UUID_MAPPING['sub-002'], business_unit_id: UUID_MAPPING['bu-002'], module_id: UUID_MAPPING['mod-002'], max_users: 20, is_active: true, created_at: "2023-02-01T00:00:00.000Z", created_by_id: UUID_MAPPING['user-001'] }, // Procurement
  { id: "sd-010", subscription_id: UUID_MAPPING['sub-002'], business_unit_id: UUID_MAPPING['bu-002'], module_id: UUID_MAPPING['mod-003'], max_users: 10, is_active: true, created_at: "2023-02-01T00:00:00.000Z", created_by_id: UUID_MAPPING['user-001'] }, // Accounting
  { id: "sd-011", subscription_id: UUID_MAPPING['sub-002'], business_unit_id: UUID_MAPPING['bu-002'], module_id: UUID_MAPPING['mod-004'], max_users: 30, is_active: true, created_at: "2023-02-01T00:00:00.000Z", created_by_id: UUID_MAPPING['user-001'] }, // HR
  { id: "sd-012", subscription_id: UUID_MAPPING['sub-002'], business_unit_id: UUID_MAPPING['bu-002'], module_id: UUID_MAPPING['mod-006'], max_users: 100, is_active: true, created_at: "2023-02-01T00:00:00.000Z", created_by_id: UUID_MAPPING['user-001'] }, // PMS
  { id: "sd-013", subscription_id: UUID_MAPPING['sub-002'], business_unit_id: UUID_MAPPING['bu-002'], module_id: UUID_MAPPING['mod-007'], max_users: 25, is_active: true, created_at: "2023-02-01T00:00:00.000Z", created_by_id: UUID_MAPPING['user-001'] }, // POS
  { id: "sd-014", subscription_id: UUID_MAPPING['sub-002'], business_unit_id: UUID_MAPPING['bu-002'], module_id: UUID_MAPPING['mod-008'], max_users: 15, is_active: true, created_at: "2023-02-01T00:00:00.000Z", created_by_id: UUID_MAPPING['user-001'] }, // Reporting
  { id: "sd-015", subscription_id: UUID_MAPPING['sub-002'], business_unit_id: UUID_MAPPING['bu-002'], module_id: UUID_MAPPING['mod-009'], max_users: 5, is_active: true, created_at: "2023-02-01T00:00:00.000Z", created_by_id: UUID_MAPPING['user-001'] }, // Settings
  { id: "sd-016", subscription_id: UUID_MAPPING['sub-002'], business_unit_id: UUID_MAPPING['bu-002'], module_id: UUID_MAPPING['mod-011'], max_users: 20, is_active: true, created_at: "2023-02-01T00:00:00.000Z", created_by_id: UUID_MAPPING['user-001'] }, // Maintenance

  // Restaurant Business (sub-003) - Spice Garden Restaurant
  { id: "sd-017", subscription_id: UUID_MAPPING['sub-003'], business_unit_id: UUID_MAPPING['bu-003'], module_id: UUID_MAPPING['mod-001'], max_users: 25, is_active: true, created_at: "2023-03-01T00:00:00.000Z", created_by_id: UUID_MAPPING['user-001'] }, // Inventory
  { id: "sd-018", subscription_id: UUID_MAPPING['sub-003'], business_unit_id: UUID_MAPPING['bu-003'], module_id: UUID_MAPPING['mod-002'], max_users: 10, is_active: true, created_at: "2023-03-01T00:00:00.000Z", created_by_id: UUID_MAPPING['user-001'] }, // Procurement
  { id: "sd-019", subscription_id: UUID_MAPPING['sub-003'], business_unit_id: UUID_MAPPING['bu-003'], module_id: UUID_MAPPING['mod-003'], max_users: 5, is_active: true, created_at: "2023-03-01T00:00:00.000Z", created_by_id: UUID_MAPPING['user-001'] }, // Accounting
  { id: "sd-020", subscription_id: UUID_MAPPING['sub-003'], business_unit_id: UUID_MAPPING['bu-003'], module_id: UUID_MAPPING['mod-004'], max_users: 15, is_active: true, created_at: "2023-03-01T00:00:00.000Z", created_by_id: UUID_MAPPING['user-001'] }, // HR
  { id: "sd-021", subscription_id: UUID_MAPPING['sub-003'], business_unit_id: UUID_MAPPING['bu-003'], module_id: UUID_MAPPING['mod-007'], max_users: 30, is_active: true, created_at: "2023-03-01T00:00:00.000Z", created_by_id: UUID_MAPPING['user-001'] }, // POS
  { id: "sd-022", subscription_id: UUID_MAPPING['sub-003'], business_unit_id: UUID_MAPPING['bu-003'], module_id: UUID_MAPPING['mod-008'], max_users: 8, is_active: true, created_at: "2023-03-01T00:00:00.000Z", created_by_id: UUID_MAPPING['user-001'] }, // Reporting
  { id: "sd-023", subscription_id: UUID_MAPPING['sub-003'], business_unit_id: UUID_MAPPING['bu-003'], module_id: UUID_MAPPING['mod-009'], max_users: 3, is_active: true, created_at: "2023-03-01T00:00:00.000Z", created_by_id: UUID_MAPPING['user-001'] }, // Settings
  { id: "sd-024", subscription_id: UUID_MAPPING['sub-003'], business_unit_id: UUID_MAPPING['bu-003'], module_id: UUID_MAPPING['mod-010'], max_users: 20, is_active: true, created_at: "2023-03-01T00:00:00.000Z", created_by_id: UUID_MAPPING['user-001'] }, // Delivery
  { id: "sd-025", subscription_id: UUID_MAPPING['sub-003'], business_unit_id: UUID_MAPPING['bu-003'], module_id: UUID_MAPPING['mod-012'], max_users: 10, is_active: true, created_at: "2023-03-01T00:00:00.000Z", created_by_id: UUID_MAPPING['user-001'] }, // Quality

  // Developer Unlimited (sub-004) - Development Test Unit
  { id: "sd-026", subscription_id: UUID_MAPPING['sub-004'], business_unit_id: UUID_MAPPING['bu-005'], module_id: null, max_users: null, is_active: true, created_at: getCurrentTimestamp(), created_by_id: UUID_MAPPING['system'] }, // All modules unlimited

  // Hotel Trial Extension (sub-005) - Royal Grand Hotel additional modules
  { id: "sd-027", subscription_id: UUID_MAPPING['sub-005'], business_unit_id: UUID_MAPPING['bu-002'], module_id: UUID_MAPPING['mod-014'], max_users: 50, is_active: true, created_at: "2023-12-01T00:00:00.000Z", created_by_id: UUID_MAPPING['user-004'] }, // Communications
  { id: "sd-028", subscription_id: UUID_MAPPING['sub-005'], business_unit_id: UUID_MAPPING['bu-002'], module_id: UUID_MAPPING['mod-015'], max_users: 100, is_active: true, created_at: "2023-12-01T00:00:00.000Z", created_by_id: UUID_MAPPING['user-004'] }, // Mobile

  // Expired Basic Plan (sub-006) - Spice Garden Restaurant (inactive)
  { id: "sd-029", subscription_id: UUID_MAPPING['sub-006'], business_unit_id: UUID_MAPPING['bu-003'], module_id: UUID_MAPPING['mod-001'], max_users: 10, is_active: false, created_at: "2022-03-01T00:00:00.000Z", created_by_id: UUID_MAPPING['user-001'] }, // Inventory (expired)
  { id: "sd-030", subscription_id: UUID_MAPPING['sub-006'], business_unit_id: UUID_MAPPING['bu-003'], module_id: UUID_MAPPING['mod-007'], max_users: 15, is_active: false, created_at: "2022-03-01T00:00:00.000Z", created_by_id: UUID_MAPPING['user-001'] }, // POS (expired)

  // Hospitality Pro Renewal (sub-008) - Royal Grand Hotel
  { id: "sd-031", subscription_id: UUID_MAPPING['sub-008'], business_unit_id: UUID_MAPPING['bu-002'], module_id: UUID_MAPPING['mod-001'], max_users: 60, is_active: true, created_at: "2024-01-15T00:00:00.000Z", created_by_id: UUID_MAPPING['user-004'] }, // Inventory (upgraded)
  { id: "sd-032", subscription_id: UUID_MAPPING['sub-008'], business_unit_id: UUID_MAPPING['bu-002'], module_id: UUID_MAPPING['mod-002'], max_users: 25, is_active: true, created_at: "2024-01-15T00:00:00.000Z", created_by_id: UUID_MAPPING['user-004'] }, // Procurement (upgraded)
  { id: "sd-033", subscription_id: UUID_MAPPING['sub-008'], business_unit_id: UUID_MAPPING['bu-002'], module_id: UUID_MAPPING['mod-006'], max_users: 120, is_active: true, created_at: "2024-01-15T00:00:00.000Z", created_by_id: UUID_MAPPING['user-004'] }, // PMS (upgraded)
  { id: "sd-034", subscription_id: UUID_MAPPING['sub-008'], business_unit_id: UUID_MAPPING['bu-002'], module_id: UUID_MAPPING['mod-013'], max_users: 10, is_active: true, created_at: "2024-01-15T00:00:00.000Z", created_by_id: UUID_MAPPING['user-004'] }, // Workflow (new)

  // Add-on Modules (sub-009) - Carmen Software HQ
  { id: "sd-035", subscription_id: UUID_MAPPING['sub-009'], business_unit_id: UUID_MAPPING['bu-001'], module_id: UUID_MAPPING['mod-013'], max_users: null, is_active: true, created_at: "2023-06-01T00:00:00.000Z", created_by_id: UUID_MAPPING['user-001'] }, // Workflow
  { id: "sd-036", subscription_id: UUID_MAPPING['sub-009'], business_unit_id: UUID_MAPPING['bu-001'], module_id: UUID_MAPPING['mod-014'], max_users: null, is_active: true, created_at: "2023-06-01T00:00:00.000Z", created_by_id: UUID_MAPPING['user-001'] }, // Communications
  { id: "sd-037", subscription_id: UUID_MAPPING['sub-009'], business_unit_id: UUID_MAPPING['bu-001'], module_id: UUID_MAPPING['mod-015'], max_users: null, is_active: true, created_at: "2023-06-01T00:00:00.000Z", created_by_id: UUID_MAPPING['user-001'] }, // Mobile

  // Holiday Season Special (sub-010) - Spice Garden Restaurant
  { id: "sd-038", subscription_id: UUID_MAPPING['sub-010'], business_unit_id: UUID_MAPPING['bu-003'], module_id: UUID_MAPPING['mod-001'], max_users: 40, is_active: true, created_at: "2023-10-15T00:00:00.000Z", created_by_id: UUID_MAPPING['user-006'] }, // Enhanced Inventory
  { id: "sd-039", subscription_id: UUID_MAPPING['sub-010'], business_unit_id: UUID_MAPPING['bu-003'], module_id: UUID_MAPPING['mod-007'], max_users: 50, is_active: true, created_at: "2023-10-15T00:00:00.000Z", created_by_id: UUID_MAPPING['user-006'] }, // Enhanced POS
  { id: "sd-040", subscription_id: UUID_MAPPING['sub-010'], business_unit_id: UUID_MAPPING['bu-003'], module_id: UUID_MAPPING['mod-010'], max_users: 35, is_active: true, created_at: "2023-10-15T00:00:00.000Z", created_by_id: UUID_MAPPING['user-006'] }, // Enhanced Delivery
  { id: "sd-041", subscription_id: UUID_MAPPING['sub-010'], business_unit_id: UUID_MAPPING['bu-003'], module_id: UUID_MAPPING['mod-014'], max_users: 25, is_active: true, created_at: "2023-10-15T00:00:00.000Z", created_by_id: UUID_MAPPING['user-006'] }  // Communications
];

// =============== TB_SUBSCRIPTION_DETAIL CRUD FUNCTIONS ===============
export const tbSubscriptionDetailCrud = {
  // Create new subscription detail
  create: (data: Omit<TbSubscriptionDetail, 'id' | 'created_at' | 'updated_at'>): TbSubscriptionDetail => {
    const newDetail: TbSubscriptionDetail = {
      id: generateUuid(),
      is_active: true,
      created_at: getCurrentTimestamp(),
      updated_at: getCurrentTimestamp(),
      ...data
    };
    mockTbSubscriptionDetail.push(newDetail);
    return newDetail;
  },

  // Find by ID
  findById: (id: string): TbSubscriptionDetail | null => {
    return mockTbSubscriptionDetail.find(detail => detail.id === id) || null;
  },

  // Find by subscription ID
  findBySubscriptionId: (subscriptionId: string): TbSubscriptionDetail[] => {
    return mockTbSubscriptionDetail
      .filter(detail => detail.subscription_id === subscriptionId)
      .sort((a, b) => (a.created_at || '').localeCompare(b.created_at || ''));
  },

  // Find active by subscription ID
  findActiveBySubscriptionId: (subscriptionId: string): TbSubscriptionDetail[] => {
    return mockTbSubscriptionDetail
      .filter(detail => detail.subscription_id === subscriptionId && detail.is_active)
      .sort((a, b) => (a.created_at || '').localeCompare(b.created_at || ''));
  },

  // Find by business unit ID
  findByBusinessUnitId: (businessUnitId: string): TbSubscriptionDetail[] => {
    return mockTbSubscriptionDetail
      .filter(detail => detail.business_unit_id === businessUnitId)
      .sort((a, b) => (a.created_at || '').localeCompare(b.created_at || ''));
  },

  // Find active by business unit ID
  findActiveByBusinessUnitId: (businessUnitId: string): TbSubscriptionDetail[] => {
    return mockTbSubscriptionDetail
      .filter(detail => detail.business_unit_id === businessUnitId && detail.is_active)
      .sort((a, b) => (a.created_at || '').localeCompare(b.created_at || ''));
  },

  // Find by module ID
  findByModuleId: (moduleId: string): TbSubscriptionDetail[] => {
    return mockTbSubscriptionDetail
      .filter(detail => detail.module_id === moduleId)
      .sort((a, b) => (a.created_at || '').localeCompare(b.created_at || ''));
  },

  // Find specific subscription detail
  findBySubscriptionAndBusinessUnit: (subscriptionId: string, businessUnitId: string, moduleId?: string): TbSubscriptionDetail[] => {
    return mockTbSubscriptionDetail
      .filter(detail => 
        detail.subscription_id === subscriptionId && 
        detail.business_unit_id === businessUnitId &&
        (!moduleId || detail.module_id === moduleId)
      )
      .sort((a, b) => (a.created_at || '').localeCompare(b.created_at || ''));
  },

  // Get subscription modules for business unit
  getSubscriptionModules: (subscriptionId: string, businessUnitId: string): string[] => {
    return mockTbSubscriptionDetail
      .filter(detail => 
        detail.subscription_id === subscriptionId && 
        detail.business_unit_id === businessUnitId && 
        detail.is_active &&
        detail.module_id
      )
      .map(detail => detail.module_id!);
  },

  // Get business unit's active modules across all subscriptions
  getBusinessUnitActiveModules: (businessUnitId: string): string[] => {
    const modules = mockTbSubscriptionDetail
      .filter(detail => 
        detail.business_unit_id === businessUnitId && 
        detail.is_active &&
        detail.module_id
      )
      .map(detail => detail.module_id!);
    
    // Remove duplicates
    return [...new Set(modules)];
  },

  // Check if business unit has module access
  hasModuleAccess: (businessUnitId: string, moduleId: string): boolean => {
    return mockTbSubscriptionDetail.some(detail => 
      detail.business_unit_id === businessUnitId && 
      detail.module_id === moduleId && 
      detail.is_active
    );
  },

  // Get module user limit
  getModuleUserLimit: (businessUnitId: string, moduleId: string): number | null => {
    const detail = mockTbSubscriptionDetail.find(detail => 
      detail.business_unit_id === businessUnitId && 
      detail.module_id === moduleId && 
      detail.is_active
    );
    
    return detail ? (detail.max_users ?? null) : null;
  },

  // Find all details
  findAll: (): TbSubscriptionDetail[] => {
    return mockTbSubscriptionDetail.sort((a, b) => 
      (a.created_at || '').localeCompare(b.created_at || '')
    );
  },

  // Update detail
  update: (id: string, data: Partial<TbSubscriptionDetail>, updated_by_id?: string): TbSubscriptionDetail | null => {
    const index = mockTbSubscriptionDetail.findIndex(detail => detail.id === id);
    if (index === -1) return null;

    mockTbSubscriptionDetail[index] = {
      ...mockTbSubscriptionDetail[index],
      ...data,
      updated_at: getCurrentTimestamp(),
      updated_by_id: updated_by_id || null
    };
    return mockTbSubscriptionDetail[index];
  },

  // Delete detail (hard delete)
  delete: (id: string): boolean => {
    const index = mockTbSubscriptionDetail.findIndex(detail => detail.id === id);
    if (index === -1) return false;
    
    mockTbSubscriptionDetail.splice(index, 1);
    return true;
  },

  // Activate detail
  activate: (id: string, updated_by_id?: string): TbSubscriptionDetail | null => {
    return tbSubscriptionDetailCrud.update(id, { is_active: true }, updated_by_id);
  },

  // Deactivate detail
  deactivate: (id: string, updated_by_id?: string): TbSubscriptionDetail | null => {
    return tbSubscriptionDetailCrud.update(id, { is_active: false }, updated_by_id);
  },

  // Update user limit
  updateUserLimit: (id: string, maxUsers: number | null, updated_by_id?: string): TbSubscriptionDetail | null => {
    return tbSubscriptionDetailCrud.update(id, { max_users: maxUsers }, updated_by_id);
  },

  // Add module to subscription
  addModuleToSubscription: (subscriptionId: string, businessUnitId: string, moduleId: string, maxUsers?: number, created_by_id?: string): TbSubscriptionDetail => {
    return tbSubscriptionDetailCrud.create({
      subscription_id: subscriptionId,
      business_unit_id: businessUnitId,
      module_id: moduleId,
      max_users: maxUsers || null,
      created_by_id: created_by_id || null
    });
  },

  // Remove module from subscription
  removeModuleFromSubscription: (subscriptionId: string, businessUnitId: string, moduleId: string, updated_by_id?: string): boolean => {
    const details = tbSubscriptionDetailCrud.findBySubscriptionAndBusinessUnit(subscriptionId, businessUnitId, moduleId);
    let removed = false;
    
    details.forEach(detail => {
      if (tbSubscriptionDetailCrud.deactivate(detail.id, updated_by_id)) {
        removed = true;
      }
    });
    
    return removed;
  },

  // Bulk add modules to subscription
  bulkAddModulesToSubscription: (subscriptionId: string, businessUnitId: string, moduleConfigs: { moduleId: string; maxUsers?: number }[], created_by_id?: string): TbSubscriptionDetail[] => {
    return moduleConfigs.map(config => 
      tbSubscriptionDetailCrud.addModuleToSubscription(
        subscriptionId, 
        businessUnitId, 
        config.moduleId, 
        config.maxUsers, 
        created_by_id
      )
    );
  },

  // Copy subscription details to new subscription
  copySubscriptionDetails: (fromSubscriptionId: string, toSubscriptionId: string, created_by_id?: string): TbSubscriptionDetail[] => {
    const sourceDetails = tbSubscriptionDetailCrud.findActiveBySubscriptionId(fromSubscriptionId);
    
    return sourceDetails.map(sourceDetail => 
      tbSubscriptionDetailCrud.create({
        subscription_id: toSubscriptionId,
        business_unit_id: sourceDetail.business_unit_id,
        module_id: sourceDetail.module_id,
        max_users: sourceDetail.max_users,
        created_by_id: created_by_id || null
      })
    );
  },

  // Find unlimited access details
  findUnlimitedAccess: (): TbSubscriptionDetail[] => {
    return mockTbSubscriptionDetail
      .filter(detail => detail.is_active && detail.max_users === null)
      .sort((a, b) => (a.created_at || '').localeCompare(b.created_at || ''));
  },

  // Find details by user limit range
  findByUserLimitRange: (minUsers: number, maxUsers: number): TbSubscriptionDetail[] => {
    return mockTbSubscriptionDetail
      .filter(detail => 
        detail.is_active && 
        detail.max_users !== null &&
        detail.max_users !== undefined &&
        detail.max_users >= minUsers && 
        detail.max_users <= maxUsers
      )
      .sort((a, b) => (a.max_users || 0) - (b.max_users || 0));
  },

  // Get subscription summary
  getSubscriptionSummary: (subscriptionId: string): {
    totalDetails: number;
    activeDetails: number;
    businessUnits: number;
    modules: number;
    totalUserLimit: number | null;
    unlimitedModules: number;
  } => {
    const allDetails = tbSubscriptionDetailCrud.findBySubscriptionId(subscriptionId);
    const activeDetails = allDetails.filter(d => d.is_active);
    
    const businessUnits = new Set(activeDetails.map(d => d.business_unit_id)).size;
    const modules = new Set(activeDetails.filter(d => d.module_id).map(d => d.module_id)).size;
    
    const unlimitedModules = activeDetails.filter(d => d.max_users === null).length;
    const limitedDetails = activeDetails.filter(d => d.max_users !== null);
    const totalUserLimit = limitedDetails.length > 0 ? 
      limitedDetails.reduce((sum, d) => sum + (d.max_users || 0), 0) : null;

    return {
      totalDetails: allDetails.length,
      activeDetails: activeDetails.length,
      businessUnits,
      modules,
      totalUserLimit: unlimitedModules > 0 ? null : totalUserLimit,
      unlimitedModules
    };
  },

  // Get detail statistics
  getStats: () => {
    const allDetails = mockTbSubscriptionDetail;
    const activeDetails = allDetails.filter(d => d.is_active);
    
    return {
      total: allDetails.length,
      active: activeDetails.length,
      inactive: allDetails.length - activeDetails.length,
      bySubscription: allDetails.reduce((acc, detail) => {
        acc[detail.subscription_id] = (acc[detail.subscription_id] || 0) + 1;
        return acc;
      }, {} as Record<string, number>),
      byBusinessUnit: activeDetails.reduce((acc, detail) => {
        acc[detail.business_unit_id] = (acc[detail.business_unit_id] || 0) + 1;
        return acc;
      }, {} as Record<string, number>),
      byModule: activeDetails.filter(d => d.module_id).reduce((acc, detail) => {
        acc[detail.module_id!] = (acc[detail.module_id!] || 0) + 1;
        return acc;
      }, {} as Record<string, number>),
      unlimitedAccess: activeDetails.filter(d => d.max_users === null).length,
      avgUserLimitPerModule: (() => {
        const limitedDetails = activeDetails.filter(d => d.max_users !== null);
        if (limitedDetails.length === 0) return 0;
        return Math.round(limitedDetails.reduce((sum, d) => sum + (d.max_users || 0), 0) / limitedDetails.length);
      })(),
      totalUserCapacity: (() => {
        const limitedDetails = activeDetails.filter(d => d.max_users !== null);
        return limitedDetails.reduce((sum, d) => sum + (d.max_users || 0), 0);
      })()
    };
  }
};
