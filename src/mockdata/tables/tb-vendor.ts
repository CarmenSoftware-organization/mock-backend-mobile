import { TbVendor } from './types';
import { generateUuid, getCurrentTimestamp } from './utils';
import { UUID_MAPPING } from './uuid-mapping';

// =============== MOCK TB_VENDOR DATA ===============
export let mockTbVendor: TbVendor[] = [
  {
    id: "vendor-001",
    name: "ABC Food Suppliers",
    description: "Premium food ingredients supplier",
    note: "Main supplier for fresh ingredients",
    business_type_id: "bt-001",
    business_type_name: "Food Distributor",
    tax_profile_id: "tax-001",
    tax_profile_name: "VAT 7%",
    tax_rate: 7.0,
    is_active: true,
    info: {
      contact_person: "John Smith",
      phone: "02-123-4567",
      email: "contact@abcfood.co.th"
    },
    dimension: {},
    created_at: getCurrentTimestamp(),
    created_by_id: UUID_MAPPING['system'],
    updated_at: getCurrentTimestamp(),
    updated_by_id: UUID_MAPPING['system'],
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "vendor-002",
    name: "Thai Organic Farm Co., Ltd.",
    description: "Organic vegetables and fruits supplier",
    note: "Certified organic produce supplier",
    business_type_id: "bt-002",
    business_type_name: "Organic Farm",
    tax_profile_id: "tax-001",
    tax_profile_name: "VAT 7%",
    tax_rate: 7.0,
    is_active: true,
    info: {
      contact_person: "Somchai Jaidee",
      phone: "081-234-5678",
      email: "info@thaiorganic.com"
    },
    dimension: {},
    created_at: getCurrentTimestamp(),
    created_by_id: UUID_MAPPING['system'],
    updated_at: getCurrentTimestamp(),
    updated_by_id: UUID_MAPPING['system'],
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "vendor-003",
    name: "Bangkok Meat Processing",
    description: "Fresh and processed meat supplier",
    note: "HACCP certified meat processor",
    business_type_id: "bt-003",
    business_type_name: "Meat Processor",
    tax_profile_id: "tax-001",
    tax_profile_name: "VAT 7%",
    tax_rate: 7.0,
    is_active: true,
    info: {
      contact_person: "Peter Wong",
      phone: "02-987-6543",
      email: "sales@bkkmeats.co.th"
    },
    dimension: {},
    created_at: getCurrentTimestamp(),
    created_by_id: UUID_MAPPING['system'],
    updated_at: getCurrentTimestamp(),
    updated_by_id: UUID_MAPPING['system'],
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "vendor-004",
    name: "Siam Dairy Products",
    description: "Dairy and beverage supplier",
    note: "Premium dairy products provider",
    business_type_id: "bt-004",
    business_type_name: "Dairy Supplier",
    tax_profile_id: "tax-001",
    tax_profile_name: "VAT 7%",
    tax_rate: 7.0,
    is_active: true,
    info: {
      contact_person: "Mary Johnson",
      phone: "02-555-0123",
      email: "orders@siamdairy.com"
    },
    dimension: {},
    created_at: getCurrentTimestamp(),
    created_by_id: UUID_MAPPING['system'],
    updated_at: getCurrentTimestamp(),
    updated_by_id: UUID_MAPPING['system'],
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "vendor-005",
    name: "Global Spices Trading",
    description: "International spices and seasonings",
    note: "Import/Export spices specialist",
    business_type_id: "bt-005",
    business_type_name: "Import/Export",
    tax_profile_id: "tax-002",
    tax_profile_name: "VAT 0% (Export)",
    tax_rate: 0.0,
    is_active: true,
    info: {
      contact_person: "Ahmed Hassan",
      phone: "02-777-8888",
      email: "trade@globalspices.co.th"
    },
    dimension: {},
    created_at: getCurrentTimestamp(),
    created_by_id: UUID_MAPPING['system'],
    updated_at: getCurrentTimestamp(),
    updated_by_id: UUID_MAPPING['system'],
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "vendor-006",
    name: "Local Equipment Supply",
    description: "Kitchen equipment and tools",
    note: "Restaurant equipment specialist",
    business_type_id: "bt-006",
    business_type_name: "Equipment Supplier",
    tax_profile_id: "tax-001",
    tax_profile_name: "VAT 7%",
    tax_rate: 7.0,
    is_active: false,
    info: {
      contact_person: "David Lee",
      phone: "02-444-9999",
      email: "support@localequip.co.th"
    },
    dimension: {},
    created_at: getCurrentTimestamp(),
    created_by_id: UUID_MAPPING['system'],
    updated_at: getCurrentTimestamp(),
    updated_by_id: UUID_MAPPING['system'],
    deleted_at: null,
    deleted_by_id: null
  }
];

// =============== TB_VENDOR CRUD FUNCTIONS ===============
export const tbVendorCrud = {
  // Create new vendor
  create: (data: Omit<TbVendor, 'id' | 'created_at' | 'updated_at'>): TbVendor => {
    const newVendor: TbVendor = {
      id: generateUuid(),
      created_at: getCurrentTimestamp(),
      updated_at: getCurrentTimestamp(),
      ...data
    };
    mockTbVendor.push(newVendor);
    return newVendor;
  },

  // Find by ID
  findById: (id: string): TbVendor | null => {
    return mockTbVendor.find(vendor => vendor.id === id && !vendor.deleted_at) || null;
  },

  // Find by name
  findByName: (name: string): TbVendor | null => {
    return mockTbVendor.find(vendor => vendor.name === name && !vendor.deleted_at) || null;
  },

  // Find all active vendors
  findAllActive: (): TbVendor[] => {
    return mockTbVendor.filter(vendor => !vendor.deleted_at && vendor.is_active);
  },

  // Find all vendors (including inactive)
  findAll: (): TbVendor[] => {
    return mockTbVendor.filter(vendor => !vendor.deleted_at);
  },

  // Search vendors by name or description
  search: (query: string): TbVendor[] => {
    const lowerQuery = query.toLowerCase();
    return mockTbVendor.filter(vendor => 
      !vendor.deleted_at && 
      vendor.is_active &&
      (vendor.name.toLowerCase().includes(lowerQuery) || 
       vendor.description?.toLowerCase().includes(lowerQuery))
    );
  },

  // Find by business type
  findByBusinessType: (businessTypeId: string): TbVendor[] => {
    return mockTbVendor.filter(vendor => 
      !vendor.deleted_at && 
      vendor.is_active &&
      vendor.business_type_id === businessTypeId
    );
  },

  // Find by tax profile
  findByTaxProfile: (taxProfileId: string): TbVendor[] => {
    return mockTbVendor.filter(vendor => 
      !vendor.deleted_at && 
      vendor.is_active &&
      vendor.tax_profile_id === taxProfileId
    );
  },

  // Update vendor
  update: (id: string, data: Partial<TbVendor>, updated_by_id?: string): TbVendor | null => {
    const index = mockTbVendor.findIndex(vendor => vendor.id === id && !vendor.deleted_at);
    if (index === -1) return null;

    mockTbVendor[index] = {
      ...mockTbVendor[index],
      ...data,
      updated_at: getCurrentTimestamp(),
      updated_by_id: updated_by_id || null
    };
    return mockTbVendor[index];
  },

  // Soft delete vendor
  delete: (id: string, deleted_by_id?: string): boolean => {
    const index = mockTbVendor.findIndex(vendor => vendor.id === id && !vendor.deleted_at);
    if (index === -1) return false;

    mockTbVendor[index].deleted_at = getCurrentTimestamp();
    mockTbVendor[index].deleted_by_id = deleted_by_id || null;
    return true;
  },

  // Activate vendor
  activate: (id: string, updated_by_id?: string): TbVendor | null => {
    return tbVendorCrud.update(id, { is_active: true }, updated_by_id);
  },

  // Deactivate vendor
  deactivate: (id: string, updated_by_id?: string): TbVendor | null => {
    return tbVendorCrud.update(id, { is_active: false }, updated_by_id);
  },

  // Get vendor statistics
  getStats: () => {
    const allVendors = mockTbVendor.filter(vendor => !vendor.deleted_at);
    const activeVendors = allVendors.filter(vendor => vendor.is_active);
    const inactiveVendors = allVendors.filter(vendor => !vendor.is_active);
    
    return {
      total: allVendors.length,
      active: activeVendors.length,
      inactive: inactiveVendors.length,
      byBusinessType: allVendors.reduce((acc, vendor) => {
        const type = vendor.business_type_name || 'Unknown';
        acc[type] = (acc[type] || 0) + 1;
        return acc;
      }, {} as Record<string, number>)
    };
  }
};
