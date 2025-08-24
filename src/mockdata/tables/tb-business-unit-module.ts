import { TbBusinessUnitModule } from './types';
import { generateUuid, getCurrentTimestamp } from './utils';
import { UUID_MAPPING } from './uuid-mapping';

// =============== MOCK TB_BUSINESS_UNIT_TB_MODULE DATA ===============
export let mockTbBusinessUnitModule: TbBusinessUnitModule[] = [
  // Carmen Software Bangkok - All modules
  { id: "bum-001", business_unit_id: UUID_MAPPING['bu-001'], module_id: UUID_MAPPING['mod-001'], created_at: "2023-01-01T00:00:00.000Z", created_by_id: UUID_MAPPING['system'] }, // Inventory
  { id: "bum-002", business_unit_id: UUID_MAPPING['bu-001'], module_id: UUID_MAPPING['mod-002'], created_at: "2023-01-01T00:00:00.000Z", created_by_id: UUID_MAPPING['system'] }, // Procurement
  { id: "bum-003", business_unit_id: UUID_MAPPING['bu-001'], module_id: UUID_MAPPING['mod-003'], created_at: "2023-01-01T00:00:00.000Z", created_by_id: UUID_MAPPING['system'] }, // Accounting
  { id: "bum-004", business_unit_id: UUID_MAPPING['bu-001'], module_id: UUID_MAPPING['mod-004'], created_at: "2023-01-01T00:00:00.000Z", created_by_id: UUID_MAPPING['system'] }, // HR
  { id: "bum-005", business_unit_id: UUID_MAPPING['bu-001'], module_id: UUID_MAPPING['mod-005'], created_at: "2023-01-01T00:00:00.000Z", created_by_id: UUID_MAPPING['system'] }, // CRM
  { id: "bum-006", business_unit_id: UUID_MAPPING['bu-001'], module_id: UUID_MAPPING['mod-008'], created_at: "2023-01-01T00:00:00.000Z", created_by_id: UUID_MAPPING['system'] }, // Reporting
  { id: "bum-007", business_unit_id: UUID_MAPPING['bu-001'], module_id: UUID_MAPPING['mod-009'], created_at: "2023-01-01T00:00:00.000Z", created_by_id: UUID_MAPPING['system'] }, // Settings
  { id: "bum-008", business_unit_id: UUID_MAPPING['bu-001'], module_id: UUID_MAPPING['mod-013'], created_at: "2023-01-01T00:00:00.000Z", created_by_id: UUID_MAPPING['system'] }, // Workflow
  { id: "bum-009", business_unit_id: UUID_MAPPING['bu-001'], module_id: UUID_MAPPING['mod-014'], created_at: "2023-01-01T00:00:00.000Z", created_by_id: UUID_MAPPING['system'] }, // Communications
  { id: "bum-010", business_unit_id: UUID_MAPPING['bu-001'], module_id: UUID_MAPPING['mod-015'], created_at: "2023-01-01T00:00:00.000Z", created_by_id: UUID_MAPPING['system'] }, // Mobile

  // Royal Grand Hotel - Hotel-specific modules
  { id: "bum-011", business_unit_id: UUID_MAPPING['bu-002'], module_id: UUID_MAPPING['mod-001'], created_at: "2023-02-15T00:00:00.000Z", created_by_id: UUID_MAPPING['user-001'] }, // Inventory
  { id: "bum-012", business_unit_id: UUID_MAPPING['bu-002'], module_id: UUID_MAPPING['mod-002'], created_at: "2023-02-15T00:00:00.000Z", created_by_id: UUID_MAPPING['user-001'] }, // Procurement
  { id: "bum-013", business_unit_id: UUID_MAPPING['bu-002'], module_id: UUID_MAPPING['mod-003'], created_at: "2023-02-15T00:00:00.000Z", created_by_id: UUID_MAPPING['user-001'] }, // Accounting
  { id: "bum-014", business_unit_id: UUID_MAPPING['bu-002'], module_id: UUID_MAPPING['mod-004'], created_at: "2023-02-15T00:00:00.000Z", created_by_id: UUID_MAPPING['user-001'] }, // HR
  { id: "bum-015", business_unit_id: UUID_MAPPING['bu-002'], module_id: UUID_MAPPING['mod-006'], created_at: "2023-02-15T00:00:00.000Z", created_by_id: UUID_MAPPING['user-001'] }, // PMS
  { id: "bum-016", business_unit_id: UUID_MAPPING['bu-002'], module_id: UUID_MAPPING['mod-007'], created_at: "2023-02-15T00:00:00.000Z", created_by_id: UUID_MAPPING['user-001'] }, // POS (restaurant)
  { id: "bum-017", business_unit_id: UUID_MAPPING['bu-002'], module_id: UUID_MAPPING['mod-008'], created_at: "2023-02-15T00:00:00.000Z", created_by_id: UUID_MAPPING['user-001'] }, // Reporting
  { id: "bum-018", business_unit_id: UUID_MAPPING['bu-002'], module_id: UUID_MAPPING['mod-009'], created_at: "2023-02-15T00:00:00.000Z", created_by_id: UUID_MAPPING['user-001'] }, // Settings
  { id: "bum-019", business_unit_id: UUID_MAPPING['bu-002'], module_id: UUID_MAPPING['mod-011'], created_at: "2023-02-15T00:00:00.000Z", created_by_id: UUID_MAPPING['user-001'] }, // Maintenance
  { id: "bum-020", business_unit_id: UUID_MAPPING['bu-002'], module_id: UUID_MAPPING['mod-014'], created_at: "2023-02-15T00:00:00.000Z", created_by_id: UUID_MAPPING['user-001'] }, // Communications
  { id: "bum-021", business_unit_id: UUID_MAPPING['bu-002'], module_id: UUID_MAPPING['mod-015'], created_at: "2023-02-15T00:00:00.000Z", created_by_id: UUID_MAPPING['user-001'] }, // Mobile

  // Spice Garden Restaurant - Restaurant-specific modules
  { id: "bum-022", business_unit_id: UUID_MAPPING['bu-003'], module_id: UUID_MAPPING['mod-001'], created_at: "2023-03-01T00:00:00.000Z", created_by_id: UUID_MAPPING['user-002'] }, // Inventory
  { id: "bum-023", business_unit_id: UUID_MAPPING['bu-003'], module_id: UUID_MAPPING['mod-002'], created_at: "2023-03-01T00:00:00.000Z", created_by_id: UUID_MAPPING['user-002'] }, // Procurement
  { id: "bum-024", business_unit_id: UUID_MAPPING['bu-003'], module_id: UUID_MAPPING['mod-003'], created_at: "2023-03-01T00:00:00.000Z", created_by_id: UUID_MAPPING['user-002'] }, // Accounting
  { id: "bum-025", business_unit_id: UUID_MAPPING['bu-003'], module_id: UUID_MAPPING['mod-004'], created_at: "2023-03-01T00:00:00.000Z", created_by_id: UUID_MAPPING['user-002'] }, // HR
  { id: "bum-026", business_unit_id: UUID_MAPPING['bu-003'], module_id: UUID_MAPPING['mod-007'], created_at: "2023-03-01T00:00:00.000Z", created_by_id: UUID_MAPPING['user-002'] }, // POS
  { id: "bum-027", business_unit_id: UUID_MAPPING['bu-003'], module_id: UUID_MAPPING['mod-008'], created_at: "2023-03-01T00:00:00.000Z", created_by_id: UUID_MAPPING['user-002'] }, // Reporting
  { id: "bum-028", business_unit_id: UUID_MAPPING['bu-003'], module_id: UUID_MAPPING['mod-009'], created_at: "2023-03-01T00:00:00.000Z", created_by_id: UUID_MAPPING['user-002'] }, // Settings
  { id: "bum-029", business_unit_id: UUID_MAPPING['bu-003'], module_id: UUID_MAPPING['mod-010'], created_at: "2023-03-01T00:00:00.000Z", created_by_id: UUID_MAPPING['user-002'] }, // Delivery
  { id: "bum-030", business_unit_id: UUID_MAPPING['bu-003'], module_id: UUID_MAPPING['mod-012'], created_at: "2023-03-01T00:00:00.000Z", created_by_id: UUID_MAPPING['user-002'] }, // Quality
  { id: "bum-031", business_unit_id: UUID_MAPPING['bu-003'], module_id: UUID_MAPPING['mod-014'], created_at: "2023-03-01T00:00:00.000Z", created_by_id: UUID_MAPPING['user-002'] }, // Communications
  { id: "bum-032", business_unit_id: UUID_MAPPING['bu-003'], module_id: UUID_MAPPING['mod-015'], created_at: "2023-03-01T00:00:00.000Z", created_by_id: UUID_MAPPING['user-002'] }, // Mobile

  // Carmen Software Singapore - Business modules
  { id: "bum-033", business_unit_id: UUID_MAPPING['bu-004'], module_id: UUID_MAPPING['mod-001'], created_at: "2023-04-01T00:00:00.000Z", created_by_id: UUID_MAPPING['user-003'] }, // Inventory
  { id: "bum-034", business_unit_id: UUID_MAPPING['bu-004'], module_id: UUID_MAPPING['mod-002'], created_at: "2023-04-01T00:00:00.000Z", created_by_id: UUID_MAPPING['user-003'] }, // Procurement
  { id: "bum-035", business_unit_id: UUID_MAPPING['bu-004'], module_id: UUID_MAPPING['mod-003'], created_at: "2023-04-01T00:00:00.000Z", created_by_id: UUID_MAPPING['user-003'] }, // Accounting
  { id: "bum-036", business_unit_id: UUID_MAPPING['bu-004'], module_id: UUID_MAPPING['mod-004'], created_at: "2023-04-01T00:00:00.000Z", created_by_id: UUID_MAPPING['user-003'] }, // HR
  { id: "bum-037", business_unit_id: UUID_MAPPING['bu-004'], module_id: UUID_MAPPING['mod-005'], created_at: "2023-04-01T00:00:00.000Z", created_by_id: UUID_MAPPING['user-003'] }, // CRM
  { id: "bum-038", business_unit_id: UUID_MAPPING['bu-004'], module_id: UUID_MAPPING['mod-008'], created_at: "2023-04-01T00:00:00.000Z", created_by_id: UUID_MAPPING['user-003'] }, // Reporting
  { id: "bum-039", business_unit_id: UUID_MAPPING['bu-004'], module_id: UUID_MAPPING['mod-009'], created_at: "2023-04-01T00:00:00.000Z", created_by_id: UUID_MAPPING['user-003'] }, // Settings
  { id: "bum-040", business_unit_id: UUID_MAPPING['bu-004'], module_id: UUID_MAPPING['mod-014'], created_at: "2023-04-01T00:00:00.000Z", created_by_id: UUID_MAPPING['user-003'] }, // Communications
  { id: "bum-041", business_unit_id: UUID_MAPPING['bu-004'], module_id: UUID_MAPPING['mod-015'], created_at: "2023-04-01T00:00:00.000Z", created_by_id: UUID_MAPPING['user-003'] }, // Mobile

  // Development Test Unit - All modules for testing
  { id: "bum-042", business_unit_id: UUID_MAPPING['bu-005'], module_id: UUID_MAPPING['mod-001'], created_at: getCurrentTimestamp(), created_by_id: UUID_MAPPING['developer'] }, // Inventory
  { id: "bum-043", business_unit_id: UUID_MAPPING['bu-005'], module_id: UUID_MAPPING['mod-002'], created_at: getCurrentTimestamp(), created_by_id: UUID_MAPPING['developer'] }, // Procurement
  { id: "bum-044", business_unit_id: UUID_MAPPING['bu-005'], module_id: UUID_MAPPING['mod-003'], created_at: getCurrentTimestamp(), created_by_id: UUID_MAPPING['developer'] }, // Accounting
  { id: "bum-045", business_unit_id: UUID_MAPPING['bu-005'], module_id: UUID_MAPPING['mod-004'], created_at: getCurrentTimestamp(), created_by_id: UUID_MAPPING['developer'] }, // HR
  { id: "bum-046", business_unit_id: UUID_MAPPING['bu-005'], module_id: UUID_MAPPING['mod-005'], created_at: getCurrentTimestamp(), created_by_id: UUID_MAPPING['developer'] }, // CRM
  { id: "bum-047", business_unit_id: UUID_MAPPING['bu-005'], module_id: UUID_MAPPING['mod-006'], created_at: getCurrentTimestamp(), created_by_id: UUID_MAPPING['developer'] }, // PMS
  { id: "bum-048", business_unit_id: UUID_MAPPING['bu-005'], module_id: UUID_MAPPING['mod-007'], created_at: getCurrentTimestamp(), created_by_id: UUID_MAPPING['developer'] }, // POS
  { id: "bum-049", business_unit_id: UUID_MAPPING['bu-005'], module_id: UUID_MAPPING['mod-008'], created_at: getCurrentTimestamp(), created_by_id: UUID_MAPPING['developer'] }, // Reporting
  { id: "bum-050", business_unit_id: UUID_MAPPING['bu-005'], module_id: UUID_MAPPING['mod-009'], created_at: getCurrentTimestamp(), created_by_id: UUID_MAPPING['developer'] }, // Settings
  { id: "bum-051", business_unit_id: UUID_MAPPING['bu-005'], module_id: UUID_MAPPING['mod-010'], created_at: getCurrentTimestamp(), created_by_id: UUID_MAPPING['developer'] }, // Delivery
  { id: "bum-052", business_unit_id: UUID_MAPPING['bu-005'], module_id: UUID_MAPPING['mod-011'], created_at: getCurrentTimestamp(), created_by_id: UUID_MAPPING['developer'] }, // Maintenance
  { id: "bum-053", business_unit_id: UUID_MAPPING['bu-005'], module_id: UUID_MAPPING['mod-012'], created_at: getCurrentTimestamp(), created_by_id: UUID_MAPPING['developer'] }, // Quality
  { id: "bum-054", business_unit_id: UUID_MAPPING['bu-005'], module_id: UUID_MAPPING['mod-013'], created_at: getCurrentTimestamp(), created_by_id: UUID_MAPPING['developer'] }, // Workflow
  { id: "bum-055", business_unit_id: UUID_MAPPING['bu-005'], module_id: UUID_MAPPING['mod-014'], created_at: getCurrentTimestamp(), created_by_id: UUID_MAPPING['developer'] }, // Communications
  { id: "bum-056", business_unit_id: UUID_MAPPING['bu-005'], module_id: UUID_MAPPING['mod-015'], created_at: getCurrentTimestamp(), created_by_id: UUID_MAPPING['developer'] }  // Mobile
];

// =============== TB_BUSINESS_UNIT_TB_MODULE CRUD FUNCTIONS ===============
export const tbBusinessUnitModuleCrud = {
  // Create new business unit-module relationship
  create: (data: Omit<TbBusinessUnitModule, 'id' | 'created_at' | 'updated_at'>): TbBusinessUnitModule => {
    const newRelation: TbBusinessUnitModule = {
      id: generateUuid(),
      created_at: getCurrentTimestamp(),
      updated_at: getCurrentTimestamp(),
      ...data
    };
    mockTbBusinessUnitModule.push(newRelation);
    return newRelation;
  },

  // Find by ID
  findById: (id: string): TbBusinessUnitModule | null => {
    return mockTbBusinessUnitModule.find(relation => relation.id === id) || null;
  },

  // Find by business unit ID
  findByBusinessUnitId: (businessUnitId: string): TbBusinessUnitModule[] => {
    return mockTbBusinessUnitModule
      .filter(relation => relation.business_unit_id === businessUnitId)
      .sort((a, b) => (a.created_at || '').localeCompare(b.created_at || ''));
  },

  // Find by module ID
  findByModuleId: (moduleId: string): TbBusinessUnitModule[] => {
    return mockTbBusinessUnitModule
      .filter(relation => relation.module_id === moduleId)
      .sort((a, b) => (a.created_at || '').localeCompare(b.created_at || ''));
  },

  // Find specific business unit-module relationship
  findByBusinessUnitAndModule: (businessUnitId: string, moduleId: string): TbBusinessUnitModule | null => {
    return mockTbBusinessUnitModule.find(relation => 
      relation.business_unit_id === businessUnitId && 
      relation.module_id === moduleId
    ) || null;
  },

  // Get all modules for a business unit
  getBusinessUnitModules: (businessUnitId: string): string[] => {
    return mockTbBusinessUnitModule
      .filter(relation => relation.business_unit_id === businessUnitId)
      .map(relation => relation.module_id);
  },

  // Get all business units that have a specific module
  getBusinessUnitsWithModule: (moduleId: string): string[] => {
    return mockTbBusinessUnitModule
      .filter(relation => relation.module_id === moduleId)
      .map(relation => relation.business_unit_id);
  },

  // Check if business unit has module
  hasModule: (businessUnitId: string, moduleId: string): boolean => {
    return mockTbBusinessUnitModule.some(relation => 
      relation.business_unit_id === businessUnitId && 
      relation.module_id === moduleId
    );
  },

  // Find all relationships
  findAll: (): TbBusinessUnitModule[] => {
    return mockTbBusinessUnitModule.sort((a, b) => 
      (a.created_at || '').localeCompare(b.created_at || '')
    );
  },

  // Add module to business unit
  addModuleToBusinessUnit: (businessUnitId: string, moduleId: string, created_by_id?: string): TbBusinessUnitModule | null => {
    // Check if relationship already exists
    const existing = tbBusinessUnitModuleCrud.findByBusinessUnitAndModule(businessUnitId, moduleId);
    if (existing) {
      return existing; // Already exists
    }

    return tbBusinessUnitModuleCrud.create({
      business_unit_id: businessUnitId,
      module_id: moduleId,
      created_by_id: created_by_id || null
    });
  },

  // Remove module from business unit
  removeModuleFromBusinessUnit: (businessUnitId: string, moduleId: string): boolean => {
    const index = mockTbBusinessUnitModule.findIndex(relation => 
      relation.business_unit_id === businessUnitId && 
      relation.module_id === moduleId
    );
    
    if (index === -1) return false;
    
    mockTbBusinessUnitModule.splice(index, 1);
    return true;
  },

  // Update relationship
  update: (id: string, data: Partial<TbBusinessUnitModule>, updated_by_id?: string): TbBusinessUnitModule | null => {
    const index = mockTbBusinessUnitModule.findIndex(relation => relation.id === id);
    if (index === -1) return null;

    mockTbBusinessUnitModule[index] = {
      ...mockTbBusinessUnitModule[index],
      ...data,
      updated_at: getCurrentTimestamp(),
      updated_by_id: updated_by_id || null
    };
    return mockTbBusinessUnitModule[index];
  },

  // Delete relationship
  delete: (id: string): boolean => {
    const index = mockTbBusinessUnitModule.findIndex(relation => relation.id === id);
    if (index === -1) return false;
    
    mockTbBusinessUnitModule.splice(index, 1);
    return true;
  },

  // Bulk assign modules to business unit
  bulkAssignModules: (businessUnitId: string, moduleIds: string[], created_by_id?: string): TbBusinessUnitModule[] => {
    const results: TbBusinessUnitModule[] = [];
    
    moduleIds.forEach(moduleId => {
      const relation = tbBusinessUnitModuleCrud.addModuleToBusinessUnit(businessUnitId, moduleId, created_by_id);
      if (relation) {
        results.push(relation);
      }
    });
    
    return results;
  },

  // Bulk remove modules from business unit
  bulkRemoveModules: (businessUnitId: string, moduleIds: string[]): boolean => {
    let allRemoved = true;
    
    moduleIds.forEach(moduleId => {
      const removed = tbBusinessUnitModuleCrud.removeModuleFromBusinessUnit(businessUnitId, moduleId);
      if (!removed) {
        allRemoved = false;
      }
    });
    
    return allRemoved;
  },

  // Replace business unit's modules
  replaceBusinessUnitModules: (businessUnitId: string, newModuleIds: string[], updated_by_id?: string): TbBusinessUnitModule[] => {
    // Remove all existing modules for business unit
    const currentModules = tbBusinessUnitModuleCrud.getBusinessUnitModules(businessUnitId);
    tbBusinessUnitModuleCrud.bulkRemoveModules(businessUnitId, currentModules);
    
    // Assign new modules
    return tbBusinessUnitModuleCrud.bulkAssignModules(businessUnitId, newModuleIds, updated_by_id);
  },

  // Copy modules from one business unit to another
  copyBusinessUnitModules: (fromBusinessUnitId: string, toBusinessUnitId: string, created_by_id?: string): TbBusinessUnitModule[] => {
    const sourceModules = tbBusinessUnitModuleCrud.getBusinessUnitModules(fromBusinessUnitId);
    return tbBusinessUnitModuleCrud.bulkAssignModules(toBusinessUnitId, sourceModules, created_by_id);
  },

  // Get modules by business type
  getModulesByBusinessType: (businessType: 'hotel' | 'restaurant' | 'software' | 'general'): string[] => {
    const businessTypeModules = {
      hotel: ['mod-001', 'mod-002', 'mod-003', 'mod-004', 'mod-006', 'mod-007', 'mod-008', 'mod-009', 'mod-011', 'mod-014', 'mod-015'],
      restaurant: ['mod-001', 'mod-002', 'mod-003', 'mod-004', 'mod-007', 'mod-008', 'mod-009', 'mod-010', 'mod-012', 'mod-014', 'mod-015'],
      software: ['mod-001', 'mod-002', 'mod-003', 'mod-004', 'mod-005', 'mod-008', 'mod-009', 'mod-013', 'mod-014', 'mod-015'],
      general: ['mod-001', 'mod-002', 'mod-003', 'mod-004', 'mod-005', 'mod-008', 'mod-009']
    };
    
    return businessTypeModules[businessType] || businessTypeModules.general;
  },

  // Setup default modules for business unit based on type
  setupDefaultModules: (businessUnitId: string, businessType: 'hotel' | 'restaurant' | 'software' | 'general', created_by_id?: string): TbBusinessUnitModule[] => {
    const defaultModules = tbBusinessUnitModuleCrud.getModulesByBusinessType(businessType);
    return tbBusinessUnitModuleCrud.bulkAssignModules(businessUnitId, defaultModules, created_by_id);
  },

  // Find business units with all core modules
  findBusinessUnitsWithCoreModules: (): string[] => {
    const coreModules = ['mod-001', 'mod-002', 'mod-003', 'mod-009']; // Inventory, Procurement, Accounting, Settings
    const businessUnitModules = mockTbBusinessUnitModule.reduce((acc, relation) => {
      if (!acc[relation.business_unit_id]) {
        acc[relation.business_unit_id] = [];
      }
      acc[relation.business_unit_id].push(relation.module_id);
      return acc;
    }, {} as Record<string, string[]>);

    return Object.entries(businessUnitModules)
      .filter(([_, modules]) => coreModules.every(core => modules.includes(core)))
      .map(([businessUnitId, _]) => businessUnitId);
  },

  // Find orphaned relationships (invalid business unit or module IDs)
  findOrphanedRelationships: (validBusinessUnitIds: string[], validModuleIds: string[]): TbBusinessUnitModule[] => {
    return mockTbBusinessUnitModule
      .filter(relation => 
        !validBusinessUnitIds.includes(relation.business_unit_id) ||
        !validModuleIds.includes(relation.module_id)
      )
      .sort((a, b) => (a.created_at || '').localeCompare(b.created_at || ''));
  },

  // Get relationship statistics
  getStats: () => {
    const allRelations = mockTbBusinessUnitModule;
    
    return {
      total: allRelations.length,
      byBusinessUnit: allRelations.reduce((acc, relation) => {
        acc[relation.business_unit_id] = (acc[relation.business_unit_id] || 0) + 1;
        return acc;
      }, {} as Record<string, number>),
      byModule: allRelations.reduce((acc, relation) => {
        acc[relation.module_id] = (acc[relation.module_id] || 0) + 1;
        return acc;
      }, {} as Record<string, number>),
      avgModulesPerBusinessUnit: allRelations.length / new Set(allRelations.map(r => r.business_unit_id)).size,
      avgBusinessUnitsPerModule: allRelations.length / new Set(allRelations.map(r => r.module_id)).size,
      businessUnitsWithCoreModules: tbBusinessUnitModuleCrud.findBusinessUnitsWithCoreModules().length,
      mostPopularModule: Object.entries(
        allRelations.reduce((acc, relation) => {
          acc[relation.module_id] = (acc[relation.module_id] || 0) + 1;
          return acc;
        }, {} as Record<string, number>)
      ).sort(([,a], [,b]) => b - a)[0]?.[0] || null
    };
  }
};
