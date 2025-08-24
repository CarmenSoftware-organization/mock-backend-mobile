import { TbDeliveryPoint } from './types';
import { generateUuid, getCurrentTimestamp } from './utils';

// =============== MOCK TB_DELIVERY_POINT DATA ===============
export let mockTbDeliveryPoint: TbDeliveryPoint[] = [
  {
    id: "dp-001",
    name: "Main Kitchen",
    is_active: true,
    note: "Primary kitchen for main restaurant",
    info: {
      location: "Ground Floor",
      capacity: "200 covers",
      operating_hours: "06:00-24:00"
    },
    dimension: {},
    created_at: getCurrentTimestamp(),
    created_by_id: "system",
    updated_at: getCurrentTimestamp(),
    updated_by_id: "system",
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "dp-002",
    name: "Bakery Section",
    is_active: true,
    note: "Dedicated bakery and pastry preparation area",
    info: {
      location: "Ground Floor - West Wing",
      capacity: "50 covers",
      operating_hours: "04:00-16:00"
    },
    dimension: {},
    created_at: getCurrentTimestamp(),
    created_by_id: "system",
    updated_at: getCurrentTimestamp(),
    updated_by_id: "system",
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "dp-003",
    name: "Beverage Station",
    is_active: true,
    note: "Bar and beverage preparation area",
    info: {
      location: "Ground Floor - East Wing",
      capacity: "100 covers",
      operating_hours: "11:00-02:00"
    },
    dimension: {},
    created_at: getCurrentTimestamp(),
    created_by_id: "system",
    updated_at: getCurrentTimestamp(),
    updated_by_id: "system",
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "dp-004",
    name: "Catering Kitchen",
    is_active: true,
    note: "Separate kitchen for catering and events",
    info: {
      location: "Second Floor",
      capacity: "500 covers",
      operating_hours: "08:00-22:00"
    },
    dimension: {},
    created_at: getCurrentTimestamp(),
    created_by_id: "system",
    updated_at: getCurrentTimestamp(),
    updated_by_id: "system",
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "dp-005",
    name: "Cold Storage",
    is_active: true,
    note: "Refrigerated storage for perishable items",
    info: {
      location: "Basement Level",
      temperature: "2-4°C",
      operating_hours: "24/7"
    },
    dimension: {},
    created_at: getCurrentTimestamp(),
    created_by_id: "system",
    updated_at: getCurrentTimestamp(),
    updated_by_id: "system",
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "dp-006",
    name: "Dry Storage",
    is_active: true,
    note: "Ambient temperature storage for dry goods",
    info: {
      location: "Basement Level",
      temperature: "18-25°C",
      operating_hours: "06:00-22:00"
    },
    dimension: {},
    created_at: getCurrentTimestamp(),
    created_by_id: "system",
    updated_at: getCurrentTimestamp(),
    updated_by_id: "system",
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "dp-007",
    name: "Loading Dock",
    is_active: true,
    note: "Main receiving area for deliveries",
    info: {
      location: "Rear Entrance",
      capacity: "3 trucks",
      operating_hours: "06:00-18:00"
    },
    dimension: {},
    created_at: getCurrentTimestamp(),
    created_by_id: "system",
    updated_at: getCurrentTimestamp(),
    updated_by_id: "system",
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "dp-008",
    name: "Prep Kitchen",
    is_active: true,
    note: "Food preparation and pre-cooking area",
    info: {
      location: "Ground Floor - Center",
      capacity: "50 covers",
      operating_hours: "05:00-14:00"
    },
    dimension: {},
    created_at: getCurrentTimestamp(),
    created_by_id: "system",
    updated_at: getCurrentTimestamp(),
    updated_by_id: "system",
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "dp-009",
    name: "Dishwash Area",
    is_active: true,
    note: "Dishwashing and cleaning station",
    info: {
      location: "Ground Floor - Back",
      capacity: "Equipment cleaning",
      operating_hours: "06:00-24:00"
    },
    dimension: {},
    created_at: getCurrentTimestamp(),
    created_by_id: "system",
    updated_at: getCurrentTimestamp(),
    updated_by_id: "system",
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "dp-010",
    name: "Office Storage",
    is_active: false,
    note: "Small storage area near offices (currently inactive)",
    info: {
      location: "First Floor",
      capacity: "Limited",
      operating_hours: "09:00-17:00"
    },
    dimension: {},
    created_at: getCurrentTimestamp(),
    created_by_id: "system",
    updated_at: getCurrentTimestamp(),
    updated_by_id: "system",
    deleted_at: null,
    deleted_by_id: null
  }
];

// =============== TB_DELIVERY_POINT CRUD FUNCTIONS ===============
export const tbDeliveryPointCrud = {
  // Create new delivery point
  create: (data: Omit<TbDeliveryPoint, 'id' | 'created_at' | 'updated_at'>): TbDeliveryPoint => {
    const newDeliveryPoint: TbDeliveryPoint = {
      id: generateUuid(),
      created_at: getCurrentTimestamp(),
      updated_at: getCurrentTimestamp(),
      ...data
    };
    mockTbDeliveryPoint.push(newDeliveryPoint);
    return newDeliveryPoint;
  },

  // Find by ID
  findById: (id: string): TbDeliveryPoint | null => {
    return mockTbDeliveryPoint.find(dp => dp.id === id && !dp.deleted_at) || null;
  },

  // Find by name
  findByName: (name: string): TbDeliveryPoint | null => {
    return mockTbDeliveryPoint.find(dp => dp.name === name && !dp.deleted_at) || null;
  },

  // Find all active delivery points
  findAllActive: (): TbDeliveryPoint[] => {
    return mockTbDeliveryPoint.filter(dp => !dp.deleted_at && dp.is_active);
  },

  // Find all delivery points (including inactive)
  findAll: (): TbDeliveryPoint[] => {
    return mockTbDeliveryPoint.filter(dp => !dp.deleted_at);
  },

  // Search delivery points by name or note
  search: (query: string): TbDeliveryPoint[] => {
    const lowerQuery = query.toLowerCase();
    return mockTbDeliveryPoint.filter(dp => 
      !dp.deleted_at && 
      dp.is_active &&
      (dp.name.toLowerCase().includes(lowerQuery) || 
       dp.note?.toLowerCase().includes(lowerQuery))
    );
  },

  // Find kitchen delivery points
  findKitchens: (): TbDeliveryPoint[] => {
    return mockTbDeliveryPoint.filter(dp => 
      !dp.deleted_at && 
      dp.is_active &&
      dp.name.toLowerCase().includes('kitchen')
    );
  },

  // Find storage delivery points
  findStorages: (): TbDeliveryPoint[] => {
    return mockTbDeliveryPoint.filter(dp => 
      !dp.deleted_at && 
      dp.is_active &&
      dp.name.toLowerCase().includes('storage')
    );
  },

  // Find delivery points by location
  findByLocation: (location: string): TbDeliveryPoint[] => {
    return mockTbDeliveryPoint.filter(dp => 
      !dp.deleted_at && 
      dp.is_active &&
      dp.info?.location?.toLowerCase().includes(location.toLowerCase())
    );
  },

  // Update delivery point
  update: (id: string, data: Partial<TbDeliveryPoint>, updated_by_id?: string): TbDeliveryPoint | null => {
    const index = mockTbDeliveryPoint.findIndex(dp => dp.id === id && !dp.deleted_at);
    if (index === -1) return null;

    mockTbDeliveryPoint[index] = {
      ...mockTbDeliveryPoint[index],
      ...data,
      updated_at: getCurrentTimestamp(),
      updated_by_id: updated_by_id || null
    };
    return mockTbDeliveryPoint[index];
  },

  // Soft delete delivery point
  delete: (id: string, deleted_by_id?: string): boolean => {
    const index = mockTbDeliveryPoint.findIndex(dp => dp.id === id && !dp.deleted_at);
    if (index === -1) return false;

    mockTbDeliveryPoint[index].deleted_at = getCurrentTimestamp();
    mockTbDeliveryPoint[index].deleted_by_id = deleted_by_id || null;
    return true;
  },

  // Activate delivery point
  activate: (id: string, updated_by_id?: string): TbDeliveryPoint | null => {
    return tbDeliveryPointCrud.update(id, { is_active: true }, updated_by_id);
  },

  // Deactivate delivery point
  deactivate: (id: string, updated_by_id?: string): TbDeliveryPoint | null => {
    return tbDeliveryPointCrud.update(id, { is_active: false }, updated_by_id);
  },

  // Update operating hours
  updateOperatingHours: (id: string, operatingHours: string, updated_by_id?: string): TbDeliveryPoint | null => {
    const deliveryPoint = tbDeliveryPointCrud.findById(id);
    if (!deliveryPoint) return null;

    const newInfo = {
      ...deliveryPoint.info,
      operating_hours: operatingHours
    };

    return tbDeliveryPointCrud.update(id, { info: newInfo }, updated_by_id);
  },

  // Update location
  updateLocation: (id: string, location: string, updated_by_id?: string): TbDeliveryPoint | null => {
    const deliveryPoint = tbDeliveryPointCrud.findById(id);
    if (!deliveryPoint) return null;

    const newInfo = {
      ...deliveryPoint.info,
      location: location
    };

    return tbDeliveryPointCrud.update(id, { info: newInfo }, updated_by_id);
  },

  // Get delivery point statistics
  getStats: () => {
    const allDeliveryPoints = mockTbDeliveryPoint.filter(dp => !dp.deleted_at);
    const activeDeliveryPoints = allDeliveryPoints.filter(dp => dp.is_active);
    const kitchens = activeDeliveryPoints.filter(dp => dp.name.toLowerCase().includes('kitchen'));
    const storages = activeDeliveryPoints.filter(dp => dp.name.toLowerCase().includes('storage'));
    
    return {
      total: allDeliveryPoints.length,
      active: activeDeliveryPoints.length,
      inactive: allDeliveryPoints.length - activeDeliveryPoints.length,
      kitchens: kitchens.length,
      storages: storages.length,
      byLocation: activeDeliveryPoints.reduce((acc, dp) => {
        const location = dp.info?.location || 'Unknown';
        acc[location] = (acc[location] || 0) + 1;
        return acc;
      }, {} as Record<string, number>)
    };
  }
};
