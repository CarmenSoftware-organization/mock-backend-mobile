import { TbPricelist } from './types';
import { generateUuid, getCurrentTimestamp } from './utils';

// =============== MOCK TB_PRICELIST DATA ===============
export let mockTbPricelist: TbPricelist[] = [
  {
    id: "pl-001",
    pricelist_no: "PL-2024-001",
    name: "ABC Food Suppliers - Q1 2024",
    url_token: "abc-food-q1-2024",
    vendor_id: "vendor-001",
    vendor_name: "ABC Food Suppliers",
    from_date: "2024-01-01T00:00:00.000Z",
    to_date: "2024-03-31T23:59:59.999Z",
    currency_id: "cur-001-thb",
    currency_name: "Thai Baht",
    is_active: true,
    description: "Quarterly pricelist for fresh ingredients",
    note: "Updated prices for Q1 2024",
    info: {
      category: "quarterly",
      approval_status: "approved",
      approved_by: "procurement_manager",
      approved_date: "2023-12-15T00:00:00.000Z"
    },
    dimension: {},
    doc_version: 2,
    created_at: "2023-12-01T00:00:00.000Z",
    created_by_id: "user-001",
    updated_at: getCurrentTimestamp(),
    updated_by_id: "user-001",
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "pl-002",
    pricelist_no: "PL-2024-002",
    name: "Thai Organic Farm - 2024 Annual",
    url_token: "thai-organic-2024",
    vendor_id: "vendor-002",
    vendor_name: "Thai Organic Farm Co., Ltd.",
    from_date: "2024-01-01T00:00:00.000Z",
    to_date: "2024-12-31T23:59:59.999Z",
    currency_id: "cur-001-thb",
    currency_name: "Thai Baht",
    is_active: true,
    description: "Annual contract pricing for organic produce",
    note: "Fixed pricing for certified organic items",
    info: {
      category: "annual",
      approval_status: "approved",
      approved_by: "procurement_manager",
      approved_date: "2023-11-30T00:00:00.000Z",
      contract_type: "fixed_price"
    },
    dimension: {},
    doc_version: 1,
    created_at: "2023-11-15T00:00:00.000Z",
    created_by_id: "user-001",
    updated_at: "2023-11-30T00:00:00.000Z",
    updated_by_id: "user-001",
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "pl-003",
    pricelist_no: "PL-2024-003",
    name: "Bangkok Meat Processing - Weekly",
    url_token: "bkk-meat-weekly",
    vendor_id: "vendor-003",
    vendor_name: "Bangkok Meat Processing",
    from_date: getCurrentTimestamp().split('T')[0] + "T00:00:00.000Z",
    to_date: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
    currency_id: "cur-001-thb",
    currency_name: "Thai Baht",
    is_active: true,
    description: "Weekly pricing for fresh meat products",
    note: "Updated weekly based on market prices",
    info: {
      category: "weekly",
      approval_status: "approved",
      approved_by: "procurement_officer",
      approved_date: getCurrentTimestamp(),
      contract_type: "market_price"
    },
    dimension: {},
    doc_version: 5,
    created_at: getCurrentTimestamp(),
    created_by_id: "user-002",
    updated_at: getCurrentTimestamp(),
    updated_by_id: "user-002",
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "pl-004",
    pricelist_no: "PL-2024-004",
    name: "Siam Dairy Products - Monthly",
    url_token: "siam-dairy-monthly",
    vendor_id: "vendor-004",
    vendor_name: "Siam Dairy Products",
    from_date: "2024-01-01T00:00:00.000Z",
    to_date: "2024-01-31T23:59:59.999Z",
    currency_id: "cur-001-thb",
    currency_name: "Thai Baht",
    is_active: false, // Expired
    description: "Monthly pricing for dairy products - January 2024",
    note: "Expired - replaced by PL-2024-007",
    info: {
      category: "monthly",
      approval_status: "expired",
      approved_by: "procurement_officer",
      approved_date: "2023-12-28T00:00:00.000Z"
    },
    dimension: {},
    doc_version: 1,
    created_at: "2023-12-28T00:00:00.000Z",
    created_by_id: "user-002",
    updated_at: "2024-02-01T00:00:00.000Z",
    updated_by_id: "system",
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "pl-005",
    pricelist_no: "PL-2024-005",
    name: "Global Spices Trading - Q1-Q2 2024",
    url_token: "global-spices-h1-2024",
    vendor_id: "vendor-005",
    vendor_name: "Global Spices Trading",
    from_date: "2024-01-01T00:00:00.000Z",
    to_date: "2024-06-30T23:59:59.999Z",
    currency_id: "cur-002-usd",
    currency_name: "US Dollar",
    is_active: true,
    description: "Half-year pricing for imported spices",
    note: "USD pricing due to import nature",
    info: {
      category: "half_yearly",
      approval_status: "approved",
      approved_by: "procurement_manager",
      approved_date: "2023-12-20T00:00:00.000Z",
      contract_type: "fixed_price",
      import_terms: "CIF Bangkok"
    },
    dimension: {},
    doc_version: 1,
    created_at: "2023-12-10T00:00:00.000Z",
    created_by_id: "user-001",
    updated_at: "2023-12-20T00:00:00.000Z",
    updated_by_id: "user-001",
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "pl-006",
    pricelist_no: "PL-2024-006",
    name: "Local Equipment Supply - Service",
    url_token: "local-equipment-service",
    vendor_id: "vendor-006",
    vendor_name: "Local Equipment Supply",
    from_date: "2024-01-01T00:00:00.000Z",
    to_date: "2024-12-31T23:59:59.999Z",
    currency_id: "cur-001-thb",
    currency_name: "Thai Baht",
    is_active: false, // Vendor inactive
    description: "Equipment maintenance and repair services",
    note: "Vendor currently inactive",
    info: {
      category: "service",
      approval_status: "suspended",
      approved_by: "procurement_manager",
      approved_date: "2023-12-01T00:00:00.000Z"
    },
    dimension: {},
    doc_version: 1,
    created_at: "2023-12-01T00:00:00.000Z",
    created_by_id: "user-001",
    updated_at: "2024-02-15T00:00:00.000Z",
    updated_by_id: "user-001",
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "pl-007",
    pricelist_no: "PL-2024-007",
    name: "Siam Dairy Products - February 2024",
    url_token: "siam-dairy-feb-2024",
    vendor_id: "vendor-004",
    vendor_name: "Siam Dairy Products",
    from_date: "2024-02-01T00:00:00.000Z",
    to_date: "2024-02-29T23:59:59.999Z",
    currency_id: "cur-001-thb",
    currency_name: "Thai Baht",
    is_active: true,
    description: "Updated monthly pricing for dairy products",
    note: "Replaced PL-2024-004 with new pricing",
    info: {
      category: "monthly",
      approval_status: "approved",
      approved_by: "procurement_officer",
      approved_date: "2024-01-30T00:00:00.000Z",
      replaces: "PL-2024-004"
    },
    dimension: {},
    doc_version: 1,
    created_at: "2024-01-25T00:00:00.000Z",
    created_by_id: "user-002",
    updated_at: "2024-01-30T00:00:00.000Z",
    updated_by_id: "user-002",
    deleted_at: null,
    deleted_by_id: null
  }
];

// =============== TB_PRICELIST CRUD FUNCTIONS ===============
export const tbPricelistCrud = {
  // Create new pricelist
  create: (data: Omit<TbPricelist, 'id' | 'created_at' | 'updated_at'>): TbPricelist => {
    const newPricelist: TbPricelist = {
      id: generateUuid(),
      created_at: getCurrentTimestamp(),
      updated_at: getCurrentTimestamp(),
      doc_version: 1,
      ...data
    };
    mockTbPricelist.push(newPricelist);
    return newPricelist;
  },

  // Find by ID
  findById: (id: string): TbPricelist | null => {
    return mockTbPricelist.find(pl => pl.id === id && !pl.deleted_at) || null;
  },

  // Find by pricelist number
  findByPricelistNo: (pricelistNo: string): TbPricelist | null => {
    return mockTbPricelist.find(pl => pl.pricelist_no === pricelistNo && !pl.deleted_at) || null;
  },

  // Find by name
  findByName: (name: string): TbPricelist | null => {
    return mockTbPricelist.find(pl => pl.name === name && !pl.deleted_at) || null;
  },

  // Find by URL token
  findByUrlToken: (urlToken: string): TbPricelist | null => {
    return mockTbPricelist.find(pl => pl.url_token === urlToken && !pl.deleted_at) || null;
  },

  // Find by vendor ID
  findByVendorId: (vendorId: string): TbPricelist[] => {
    return mockTbPricelist.filter(pl => 
      !pl.deleted_at && 
      pl.vendor_id === vendorId
    );
  },

  // Find active pricelists by vendor
  findActiveByVendor: (vendorId: string): TbPricelist[] => {
    return mockTbPricelist.filter(pl => 
      !pl.deleted_at && 
      pl.is_active &&
      pl.vendor_id === vendorId
    );
  },

  // Find current pricelists (active and within date range)
  findCurrent: (asOfDate?: string): TbPricelist[] => {
    const checkDate = asOfDate || getCurrentTimestamp();
    
    return mockTbPricelist.filter(pl => {
      if (!pl.is_active || pl.deleted_at) return false;
      
      const fromDate = pl.from_date ? new Date(pl.from_date) : new Date(0);
      const toDate = pl.to_date ? new Date(pl.to_date) : new Date('2099-12-31');
      const check = new Date(checkDate);
      
      return check >= fromDate && check <= toDate;
    });
  },

  // Find by currency
  findByCurrency: (currencyId: string): TbPricelist[] => {
    return mockTbPricelist.filter(pl => 
      !pl.deleted_at && 
      pl.is_active &&
      pl.currency_id === currencyId
    );
  },

  // Find by category
  findByCategory: (category: string): TbPricelist[] => {
    return mockTbPricelist.filter(pl => 
      !pl.deleted_at && 
      pl.is_active &&
      pl.info?.category === category
    );
  },

  // Find expired pricelists
  findExpired: (asOfDate?: string): TbPricelist[] => {
    const checkDate = asOfDate || getCurrentTimestamp();
    
    return mockTbPricelist.filter(pl => {
      if (pl.deleted_at) return false;
      
      const toDate = pl.to_date ? new Date(pl.to_date) : new Date('2099-12-31');
      const check = new Date(checkDate);
      
      return check > toDate;
    });
  },

  // Find all active pricelists
  findAllActive: (): TbPricelist[] => {
    return mockTbPricelist.filter(pl => !pl.deleted_at && pl.is_active);
  },

  // Find all pricelists (including inactive)
  findAll: (): TbPricelist[] => {
    return mockTbPricelist.filter(pl => !pl.deleted_at);
  },

  // Search pricelists by name, description, or vendor
  search: (query: string): TbPricelist[] => {
    const lowerQuery = query.toLowerCase();
    return mockTbPricelist.filter(pl => 
      !pl.deleted_at && 
      pl.is_active &&
      (pl.name?.toLowerCase().includes(lowerQuery) || 
       pl.description?.toLowerCase().includes(lowerQuery) ||
       pl.vendor_name?.toLowerCase().includes(lowerQuery) ||
       pl.pricelist_no.toLowerCase().includes(lowerQuery))
    );
  },

  // Update pricelist
  update: (id: string, data: Partial<TbPricelist>, updated_by_id?: string): TbPricelist | null => {
    const index = mockTbPricelist.findIndex(pl => pl.id === id && !pl.deleted_at);
    if (index === -1) return null;

    const currentVersion = mockTbPricelist[index].doc_version || 1;
    mockTbPricelist[index] = {
      ...mockTbPricelist[index],
      ...data,
      doc_version: currentVersion + 1,
      updated_at: getCurrentTimestamp(),
      updated_by_id: updated_by_id || null
    };
    return mockTbPricelist[index];
  },

  // Soft delete pricelist
  delete: (id: string, deleted_by_id?: string): boolean => {
    const index = mockTbPricelist.findIndex(pl => pl.id === id && !pl.deleted_at);
    if (index === -1) return false;

    mockTbPricelist[index].deleted_at = getCurrentTimestamp();
    mockTbPricelist[index].deleted_by_id = deleted_by_id || null;
    return true;
  },

  // Activate pricelist
  activate: (id: string, updated_by_id?: string): TbPricelist | null => {
    return tbPricelistCrud.update(id, { is_active: true }, updated_by_id);
  },

  // Deactivate pricelist
  deactivate: (id: string, updated_by_id?: string): TbPricelist | null => {
    return tbPricelistCrud.update(id, { is_active: false }, updated_by_id);
  },

  // Extend validity period
  extendValidity: (id: string, newToDate: string, updated_by_id?: string): TbPricelist | null => {
    return tbPricelistCrud.update(id, { to_date: newToDate }, updated_by_id);
  },

  // Check if pricelist is valid for date
  isValidForDate: (id: string, checkDate?: string): boolean => {
    const pricelist = tbPricelistCrud.findById(id);
    if (!pricelist || !pricelist.is_active) return false;

    const date = checkDate || getCurrentTimestamp();
    const fromDate = pricelist.from_date ? new Date(pricelist.from_date) : new Date(0);
    const toDate = pricelist.to_date ? new Date(pricelist.to_date) : new Date('2099-12-31');
    const check = new Date(date);

    return check >= fromDate && check <= toDate;
  },

  // Get latest pricelist for vendor
  getLatestForVendor: (vendorId: string): TbPricelist | null => {
    const vendorPricelists = tbPricelistCrud.findByVendorId(vendorId)
      .filter(pl => pl.is_active)
      .sort((a, b) => new Date(b.created_at || '').getTime() - new Date(a.created_at || '').getTime());
    
    return vendorPricelists[0] || null;
  },

  // Get current pricelist for vendor
  getCurrentForVendor: (vendorId: string, asOfDate?: string): TbPricelist | null => {
    const currentPricelists = tbPricelistCrud.findCurrent(asOfDate)
      .filter(pl => pl.vendor_id === vendorId)
      .sort((a, b) => new Date(b.created_at || '').getTime() - new Date(a.created_at || '').getTime());
    
    return currentPricelists[0] || null;
  },

  // Auto-expire pricelists
  autoExpire: (asOfDate?: string): TbPricelist[] => {
    const expiredPricelists = tbPricelistCrud.findExpired(asOfDate);
    const updated: TbPricelist[] = [];

    expiredPricelists.forEach(pl => {
      if (pl.is_active) {
        const updatedPl = tbPricelistCrud.deactivate(pl.id, 'system');
        if (updatedPl) {
          updated.push(updatedPl);
        }
      }
    });

    return updated;
  },

  // Get pricelist statistics
  getStats: () => {
    const allPricelists = mockTbPricelist.filter(pl => !pl.deleted_at);
    const activePricelists = allPricelists.filter(pl => pl.is_active);
    const currentPricelists = tbPricelistCrud.findCurrent();
    const expiredPricelists = tbPricelistCrud.findExpired();
    
    return {
      total: allPricelists.length,
      active: activePricelists.length,
      inactive: allPricelists.length - activePricelists.length,
      current: currentPricelists.length,
      expired: expiredPricelists.length,
      byVendor: activePricelists.reduce((acc, pl) => {
        const vendor = pl.vendor_name || 'Unknown';
        acc[vendor] = (acc[vendor] || 0) + 1;
        return acc;
      }, {} as Record<string, number>),
      byCategory: activePricelists.reduce((acc, pl) => {
        const category = pl.info?.category || 'unknown';
        acc[category] = (acc[category] || 0) + 1;
        return acc;
      }, {} as Record<string, number>),
      byCurrency: activePricelists.reduce((acc, pl) => {
        const currency = pl.currency_name || 'Unknown';
        acc[currency] = (acc[currency] || 0) + 1;
        return acc;
      }, {} as Record<string, number>)
    };
  }
};
