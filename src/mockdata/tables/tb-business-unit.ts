import { TbBusinessUnit } from './types';
import { generateUuid, getCurrentTimestamp } from './utils';
import { UUID_MAPPING } from './uuid-mapping';

// =============== MOCK TB_BUSINESS_UNIT DATA ===============
export let mockTbBusinessUnit: TbBusinessUnit[] = [
  {
    id: UUID_MAPPING['bu-001'],
    cluster_id: UUID_MAPPING['cluster-004'],
    code: "CARMEN-BKK",
    name: "Carmen Software Bangkok",
    description: "Main headquarters in Bangkok, Thailand",
    info: {
      address: "123 Silom Road, Bangkok 10500",
      phone: "+66-2-123-4567",
      email: "info@carmensoftware.com",
      website: "https://carmensoftware.com",
      tax_id: "0105558123456",
      business_type: "Software Development",
      employees: 150
    },
    is_hq: true,
    is_active: true,
    db_connection: {
      host: "db-bkk.carmensoftware.com",
      database: "carmen_bkk_prod",
      ssl: true,
      pool_size: 20
    },
    config: {
      timezone: "Asia/Bangkok",
      currency: "THB",
      language: "th",
      date_format: "DD/MM/YYYY",
      time_format: "HH:mm",
      business_hours: {
        monday: "08:00-17:00",
        tuesday: "08:00-17:00", 
        wednesday: "08:00-17:00",
        thursday: "08:00-17:00",
        friday: "08:00-17:00",
        saturday: "closed",
        sunday: "closed"
      },
      features: {
        inventory: true,
        procurement: true,
        accounting: true,
        hr: true,
        crm: false
      }
    },
    created_at: "2023-01-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['system'],
    updated_at: "2023-01-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['system']
  },
  {
    id: UUID_MAPPING['bu-002'],
    cluster_id: UUID_MAPPING['cluster-004'],
    code: "HOTEL-ROYAL",
    name: "Royal Grand Hotel",
    description: "Luxury hotel in Bangkok city center",
    info: {
      address: "456 Sukhumvit Road, Bangkok 10110",
      phone: "+66-2-987-6543",
      email: "info@royalgrandhotel.com",
      website: "https://royalgrandhotel.com",
      tax_id: "0105559234567",
      business_type: "Hospitality",
      rooms: 200,
      star_rating: 5
    },
    is_hq: false,
    is_active: true,
    db_connection: {
      host: "db-hotel.carmensoftware.com",
      database: "royal_hotel_prod",
      ssl: true,
      pool_size: 15
    },
    config: {
      timezone: "Asia/Bangkok",
      currency: "THB",
      language: "en",
      date_format: "DD/MM/YYYY",
      time_format: "HH:mm",
      business_hours: {
        monday: "24/7",
        tuesday: "24/7",
        wednesday: "24/7",
        thursday: "24/7",
        friday: "24/7",
        saturday: "24/7",
        sunday: "24/7"
      },
      features: {
        inventory: true,
        procurement: true,
        accounting: true,
        hr: true,
        pms: true,
        restaurant: true
      }
    },
    created_at: "2023-02-15T00:00:00.000Z",
    created_by_id: UUID_MAPPING['user-001'],
    updated_at: "2023-02-15T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['user-001']
  },
  {
    id: UUID_MAPPING['bu-003'],
    cluster_id: UUID_MAPPING['cluster-004'],
    code: "REST-SPICE",
    name: "Spice Garden Restaurant",
    description: "Thai cuisine restaurant chain",
    info: {
      address: "789 Phayathai Road, Bangkok 10400",
      phone: "+66-2-555-7777",
      email: "info@spicegarden.co.th",
      website: "https://spicegarden.co.th",
      tax_id: "0105557345678",
      business_type: "Restaurant",
      locations: 12,
      cuisine: "Thai"
    },
    is_hq: false,
    is_active: true,
    db_connection: {
      host: "db-restaurant.carmensoftware.com",
      database: "spice_garden_prod",
      ssl: true,
      pool_size: 10
    },
    config: {
      timezone: "Asia/Bangkok",
      currency: "THB",
      language: "th",
      date_format: "DD/MM/YYYY",
      time_format: "HH:mm",
      business_hours: {
        monday: "10:00-22:00",
        tuesday: "10:00-22:00",
        wednesday: "10:00-22:00",
        thursday: "10:00-22:00",
        friday: "10:00-22:00",
        saturday: "10:00-23:00",
        sunday: "10:00-23:00"
      },
      features: {
        inventory: true,
        procurement: true,
        accounting: true,
        pos: true,
        delivery: true
      }
    },
    created_at: "2023-03-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['user-002'],
    updated_at: "2023-03-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['user-002']
  },
  {
    id: UUID_MAPPING['bu-004'],
    cluster_id: UUID_MAPPING['cluster-001'],
    code: "CARMEN-SG",
    name: "Carmen Software Singapore",
    description: "Regional office for APAC operations",
    info: {
      address: "1 Marina Bay, Singapore 018989",
      phone: "+65-6123-4567",
      email: "sg@carmensoftware.com",
      website: "https://carmensoftware.com",
      tax_id: "SG123456789",
      business_type: "Software Development",
      employees: 85
    },
    is_hq: false,
    is_active: true,
    db_connection: {
      host: "db-sg.carmensoftware.com",
      database: "carmen_sg_prod",
      ssl: true,
      pool_size: 15
    },
    config: {
      timezone: "Asia/Singapore",
      currency: "SGD",
      language: "en",
      date_format: "DD/MM/YYYY",
      time_format: "HH:mm",
      business_hours: {
        monday: "09:00-18:00",
        tuesday: "09:00-18:00",
        wednesday: "09:00-18:00",
        thursday: "09:00-18:00",
        friday: "09:00-18:00",
        saturday: "closed",
        sunday: "closed"
      },
      features: {
        inventory: true,
        procurement: true,
        accounting: true,
        hr: true,
        crm: true
      }
    },
    created_at: "2023-04-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['user-003'],
    updated_at: "2023-04-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['user-003']
  },
  {
    id: UUID_MAPPING['bu-005'],
    cluster_id: "cluster-005",
    code: "DEV-TEST",
    name: "Development Test Unit",
    description: "Test business unit for development and testing",
    info: {
      address: "Test Environment",
      phone: "+66-2-000-0000",
      email: "dev@carmensoftware.com",
      website: "https://dev.carmensoftware.com",
      tax_id: "TEST123456789",
      business_type: "Testing",
      employees: 10
    },
    is_hq: false,
    is_active: true,
    db_connection: {
      host: "localhost",
      database: "carmen_dev",
      ssl: false,
      pool_size: 5
    },
    config: {
      timezone: "Asia/Bangkok",
      currency: "THB",
      language: "en",
      date_format: "YYYY-MM-DD",
      time_format: "HH:mm:ss",
      business_hours: {
        monday: "24/7",
        tuesday: "24/7",
        wednesday: "24/7",
        thursday: "24/7",
        friday: "24/7",
        saturday: "24/7",
        sunday: "24/7"
      },
      features: {
        inventory: true,
        procurement: true,
        accounting: true,
        hr: true,
        crm: true,
        testing: true
      }
    },
    created_at: getCurrentTimestamp(),
    created_by_id: UUID_MAPPING['developer'],
    updated_at: getCurrentTimestamp(),
    updated_by_id: UUID_MAPPING['developer']
  }
];

// =============== TB_BUSINESS_UNIT CRUD FUNCTIONS ===============
export const tbBusinessUnitCrud = {
  // Create new business unit
  create: (data: Omit<TbBusinessUnit, 'id' | 'created_at' | 'updated_at'>): TbBusinessUnit => {
    const newBU: TbBusinessUnit = {
      id: generateUuid(),
      created_at: getCurrentTimestamp(),
      updated_at: getCurrentTimestamp(),
      is_active: true,
      is_hq: false,
      ...data
    };
    mockTbBusinessUnit.push(newBU);
    return newBU;
  },

  // Find by ID
  findById: (id: string): TbBusinessUnit | null => {
    return mockTbBusinessUnit.find(bu => bu.id === id) || null;
  },

  // Find by code
  findByCode: (code: string): TbBusinessUnit | null => {
    return mockTbBusinessUnit.find(bu => bu.code === code) || null;
  },

  // Find by cluster ID
  findByClusterId: (clusterId: string): TbBusinessUnit[] => {
    return mockTbBusinessUnit
      .filter(bu => bu.cluster_id === clusterId)
      .sort((a, b) => a.name.localeCompare(b.name));
  },

  // Find headquarters
  findHeadquarters: (): TbBusinessUnit[] => {
    return mockTbBusinessUnit
      .filter(bu => bu.is_hq && bu.is_active)
      .sort((a, b) => a.name.localeCompare(b.name));
  },

  // Find all active business units
  findActive: (): TbBusinessUnit[] => {
    return mockTbBusinessUnit
      .filter(bu => bu.is_active)
      .sort((a, b) => a.name.localeCompare(b.name));
  },

  // Find all business units
  findAll: (): TbBusinessUnit[] => {
    return mockTbBusinessUnit.sort((a, b) => a.name.localeCompare(b.name));
  },

  // Search business units
  search: (query: string): TbBusinessUnit[] => {
    const lowerQuery = query.toLowerCase();
    return mockTbBusinessUnit
      .filter(bu => 
        bu.code.toLowerCase().includes(lowerQuery) ||
        bu.name.toLowerCase().includes(lowerQuery) ||
        bu.description?.toLowerCase().includes(lowerQuery)
      )
      .sort((a, b) => a.name.localeCompare(b.name));
  },

  // Find by business type
  findByBusinessType: (businessType: string): TbBusinessUnit[] => {
    return mockTbBusinessUnit
      .filter(bu => 
        bu.is_active &&
        bu.info?.business_type?.toLowerCase() === businessType.toLowerCase()
      )
      .sort((a, b) => a.name.localeCompare(b.name));
  },

  // Update business unit
  update: (id: string, data: Partial<TbBusinessUnit>, updated_by_id?: string): TbBusinessUnit | null => {
    const index = mockTbBusinessUnit.findIndex(bu => bu.id === id);
    if (index === -1) return null;

    mockTbBusinessUnit[index] = {
      ...mockTbBusinessUnit[index],
      ...data,
      updated_at: getCurrentTimestamp(),
      updated_by_id: updated_by_id || null
    };
    return mockTbBusinessUnit[index];
  },

  // Delete business unit (soft delete by deactivating)
  delete: (id: string, updated_by_id?: string): boolean => {
    return tbBusinessUnitCrud.update(id, { is_active: false }, updated_by_id) !== null;
  },

  // Activate business unit
  activate: (id: string, updated_by_id?: string): TbBusinessUnit | null => {
    return tbBusinessUnitCrud.update(id, { is_active: true }, updated_by_id);
  },

  // Deactivate business unit
  deactivate: (id: string, updated_by_id?: string): TbBusinessUnit | null => {
    return tbBusinessUnitCrud.update(id, { is_active: false }, updated_by_id);
  },

  // Update business unit config
  updateConfig: (id: string, configData: any, updated_by_id?: string): TbBusinessUnit | null => {
    const bu = tbBusinessUnitCrud.findById(id);
    if (!bu) return null;

    const updatedConfig = {
      ...bu.config,
      ...configData
    };

    return tbBusinessUnitCrud.update(id, { config: updatedConfig }, updated_by_id);
  },

  // Update database connection
  updateDbConnection: (id: string, dbData: any, updated_by_id?: string): TbBusinessUnit | null => {
    const bu = tbBusinessUnitCrud.findById(id);
    if (!bu) return null;

    const updatedDbConnection = {
      ...bu.db_connection,
      ...dbData
    };

    return tbBusinessUnitCrud.update(id, { db_connection: updatedDbConnection }, updated_by_id);
  },

  // Get business unit statistics
  getStats: () => {
    const allBUs = mockTbBusinessUnit;
    const activeBUs = allBUs.filter(bu => bu.is_active);
    
    return {
      total: allBUs.length,
      active: activeBUs.length,
      inactive: allBUs.length - activeBUs.length,
      headquarters: allBUs.filter(bu => bu.is_hq).length,
      byCluster: activeBUs.reduce((acc, bu) => {
        acc[bu.cluster_id] = (acc[bu.cluster_id] || 0) + 1;
        return acc;
      }, {} as Record<string, number>),
      byBusinessType: activeBUs.reduce((acc, bu) => {
        const type = bu.info?.business_type || 'Unknown';
        acc[type] = (acc[type] || 0) + 1;
        return acc;
      }, {} as Record<string, number>),
      totalEmployees: activeBUs.reduce((sum, bu) => {
        return sum + (bu.info?.employees || 0);
      }, 0),
      supportedFeatures: Array.from(new Set(
        activeBUs.flatMap(bu => Object.keys(bu.config?.features || {}))
      )).sort()
    };
  }
};
