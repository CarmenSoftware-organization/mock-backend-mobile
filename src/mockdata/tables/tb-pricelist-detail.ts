import { TbPricelistDetail } from './types';
import { generateUuid, getCurrentTimestamp } from './utils';

// =============== MOCK TB_PRICELIST_DETAIL DATA ===============
export let mockTbPricelistDetail: TbPricelistDetail[] = [
  // ABC Food Suppliers - Q1 2024 Details
  {
    id: "pld-001",
    pricelist_id: "pl-001",
    sequence_no: 1,
    product_id: "prod-001",
    product_name: "Fresh Tomatoes",
    unit_id: "unit-002-kg",
    unit_name: "Kilogram",
    tax_profile_id: "tax-001",
    tax_profile_name: "VAT 7%",
    tax_rate: 7.0,
    price: 85.60,
    price_without_vat: 80.00,
    price_with_vat: 85.60,
    is_active: true,
    description: "Grade A fresh tomatoes",
    note: "Premium quality",
    info: {
      grade: "A",
      origin: "Local",
      certification: "GAP"
    },
    dimension: {},
    doc_version: 1,
    created_at: "2023-12-01T00:00:00.000Z",
    created_by_id: "user-001",
    updated_at: "2023-12-01T00:00:00.000Z",
    updated_by_id: "user-001",
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "pld-002",
    pricelist_id: "pl-001",
    sequence_no: 2,
    product_id: "prod-005",
    product_name: "Fresh Onions",
    unit_id: "unit-002-kg",
    unit_name: "Kilogram",
    tax_profile_id: "tax-001",
    tax_profile_name: "VAT 7%",
    tax_rate: 7.0,
    price: 42.80,
    price_without_vat: 40.00,
    price_with_vat: 42.80,
    is_active: true,
    description: "Yellow onions, medium size",
    note: "Standard quality",
    info: {
      grade: "B",
      origin: "Local",
      size: "Medium"
    },
    dimension: {},
    doc_version: 1,
    created_at: "2023-12-01T00:00:00.000Z",
    created_by_id: "user-001",
    updated_at: "2023-12-01T00:00:00.000Z",
    updated_by_id: "user-001",
    deleted_at: null,
    deleted_by_id: null
  },
  // Thai Organic Farm - 2024 Annual Details
  {
    id: "pld-003",
    pricelist_id: "pl-002",
    sequence_no: 1,
    product_id: "prod-001",
    product_name: "Organic Fresh Tomatoes",
    unit_id: "unit-002-kg",
    unit_name: "Kilogram",
    tax_profile_id: "tax-001",
    tax_profile_name: "VAT 7%",
    tax_rate: 7.0,
    price: 128.40,
    price_without_vat: 120.00,
    price_with_vat: 128.40,
    is_active: true,
    description: "Certified organic tomatoes",
    note: "Premium organic product",
    info: {
      grade: "A+",
      origin: "Organic Farm",
      certification: "Organic Thailand"
    },
    dimension: {},
    doc_version: 1,
    created_at: "2023-11-15T00:00:00.000Z",
    created_by_id: "user-001",
    updated_at: "2023-11-15T00:00:00.000Z",
    updated_by_id: "user-001",
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "pld-004",
    pricelist_id: "pl-002",
    sequence_no: 2,
    product_id: "prod-005",
    product_name: "Organic Fresh Onions",
    unit_id: "unit-002-kg",
    unit_name: "Kilogram",
    tax_profile_id: "tax-001",
    tax_profile_name: "VAT 7%",
    tax_rate: 7.0,
    price: 64.20,
    price_without_vat: 60.00,
    price_with_vat: 64.20,
    is_active: true,
    description: "Organic yellow onions",
    note: "Chemical-free cultivation",
    info: {
      grade: "A",
      origin: "Organic Farm",
      certification: "Organic Thailand"
    },
    dimension: {},
    doc_version: 1,
    created_at: "2023-11-15T00:00:00.000Z",
    created_by_id: "user-001",
    updated_at: "2023-11-15T00:00:00.000Z",
    updated_by_id: "user-001",
    deleted_at: null,
    deleted_by_id: null
  },
  // Bangkok Meat Processing - Weekly Details
  {
    id: "pld-005",
    pricelist_id: "pl-003",
    sequence_no: 1,
    product_id: "prod-002",
    product_name: "Fresh Chicken Breast",
    unit_id: "unit-002-kg",
    unit_name: "Kilogram",
    tax_profile_id: "tax-001",
    tax_profile_name: "VAT 7%",
    tax_rate: 7.0,
    price: 267.50,
    price_without_vat: 250.00,
    price_with_vat: 267.50,
    is_active: true,
    description: "Premium chicken breast, boneless",
    note: "Fresh daily delivery",
    info: {
      grade: "Premium",
      origin: "Local Farm",
      processing: "HACCP Certified"
    },
    dimension: {},
    doc_version: 1,
    created_at: getCurrentTimestamp(),
    created_by_id: "user-002",
    updated_at: getCurrentTimestamp(),
    updated_by_id: "user-002",
    deleted_at: null,
    deleted_by_id: null
  },
  // Siam Dairy Products - February 2024 Details
  {
    id: "pld-006",
    pricelist_id: "pl-007",
    sequence_no: 1,
    product_id: "prod-003",
    product_name: "Fresh Milk",
    unit_id: "unit-004-l",
    unit_name: "Liter",
    tax_profile_id: "tax-001",
    tax_profile_name: "VAT 7%",
    tax_rate: 7.0,
    price: 32.10,
    price_without_vat: 30.00,
    price_with_vat: 32.10,
    is_active: true,
    description: "UHT fresh milk, 3.25% fat",
    note: "Updated February pricing",
    info: {
      fat_content: "3.25%",
      pasteurized: true,
      shelf_life: "30 days"
    },
    dimension: {},
    doc_version: 1,
    created_at: "2024-01-25T00:00:00.000Z",
    created_by_id: "user-002",
    updated_at: "2024-01-25T00:00:00.000Z",
    updated_by_id: "user-002",
    deleted_at: null,
    deleted_by_id: null
  },
  // Global Spices Trading - Q1-Q2 2024 Details (USD)
  {
    id: "pld-007",
    pricelist_id: "pl-005",
    sequence_no: 1,
    product_id: "prod-004",
    product_name: "Black Pepper Powder",
    unit_id: "unit-003-g",
    unit_name: "Gram",
    tax_profile_id: "tax-002",
    tax_profile_name: "VAT 0% (Import)",
    tax_rate: 0.0,
    price: 0.28,
    price_without_vat: 0.28,
    price_with_vat: 0.28,
    is_active: true,
    description: "Premium ground black pepper",
    note: "Import pricing in USD",
    info: {
      grade: "Premium",
      origin: "Vietnam",
      processing: "Steam Sterilized"
    },
    dimension: {},
    doc_version: 1,
    created_at: "2023-12-10T00:00:00.000Z",
    created_by_id: "user-001",
    updated_at: "2023-12-10T00:00:00.000Z",
    updated_by_id: "user-001",
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "pld-008",
    pricelist_id: "pl-005",
    sequence_no: 2,
    product_id: "prod-004",
    product_name: "Black Pepper Powder - Bulk",
    unit_id: "unit-002-kg",
    unit_name: "Kilogram",
    tax_profile_id: "tax-002",
    tax_profile_name: "VAT 0% (Import)",
    tax_rate: 0.0,
    price: 280.00,
    price_without_vat: 280.00,
    price_with_vat: 280.00,
    is_active: true,
    description: "Bulk packaging for restaurants",
    note: "Better pricing for bulk orders",
    info: {
      grade: "Premium",
      origin: "Vietnam",
      packaging: "25kg bags"
    },
    dimension: {},
    doc_version: 1,
    created_at: "2023-12-10T00:00:00.000Z",
    created_by_id: "user-001",
    updated_at: "2023-12-10T00:00:00.000Z",
    updated_by_id: "user-001",
    deleted_at: null,
    deleted_by_id: null
  },
  // Promotional pricing
  {
    id: "pld-009",
    pricelist_id: "pl-001",
    sequence_no: 3,
    product_id: "prod-006",
    product_name: "Small Food Container",
    unit_id: "unit-001-pcs",
    unit_name: "Pieces",
    tax_profile_id: "tax-001",
    tax_profile_name: "VAT 7%",
    tax_rate: 7.0,
    price: 1.07,
    price_without_vat: 1.00,
    price_with_vat: 1.07,
    is_active: true,
    description: "Disposable food container, 500ml",
    note: "Bulk pricing available",
    info: {
      material: "PP Plastic",
      capacity: "500ml",
      microwave_safe: true
    },
    dimension: {},
    doc_version: 1,
    created_at: "2023-12-01T00:00:00.000Z",
    created_by_id: "user-001",
    updated_at: "2023-12-01T00:00:00.000Z",
    updated_by_id: "user-001",
    deleted_at: null,
    deleted_by_id: null
  },
  // Seasonal pricing
  {
    id: "pld-010",
    pricelist_id: "pl-002",
    sequence_no: 3,
    product_id: "prod-006",
    product_name: "Eco-Friendly Food Container",
    unit_id: "unit-001-pcs",
    unit_name: "Pieces",
    tax_profile_id: "tax-001",
    tax_profile_name: "VAT 7%",
    tax_rate: 7.0,
    price: 1.60,
    price_without_vat: 1.50,
    price_with_vat: 1.60,
    is_active: true,
    description: "Biodegradable food container",
    note: "Environmentally friendly option",
    info: {
      material: "Bagasse",
      capacity: "500ml",
      biodegradable: true
    },
    dimension: {},
    doc_version: 1,
    created_at: "2023-11-15T00:00:00.000Z",
    created_by_id: "user-001",
    updated_at: "2023-11-15T00:00:00.000Z",
    updated_by_id: "user-001",
    deleted_at: null,
    deleted_by_id: null
  }
];

// =============== TB_PRICELIST_DETAIL CRUD FUNCTIONS ===============
export const tbPricelistDetailCrud = {
  // Create new pricelist detail
  create: (data: Omit<TbPricelistDetail, 'id' | 'created_at' | 'updated_at'>): TbPricelistDetail => {
    const newDetail: TbPricelistDetail = {
      id: generateUuid(),
      created_at: getCurrentTimestamp(),
      updated_at: getCurrentTimestamp(),
      doc_version: 1,
      ...data
    };
    mockTbPricelistDetail.push(newDetail);
    return newDetail;
  },

  // Find by ID
  findById: (id: string): TbPricelistDetail | null => {
    return mockTbPricelistDetail.find(detail => detail.id === id && !detail.deleted_at) || null;
  },

  // Find by pricelist ID
  findByPricelistId: (pricelistId: string): TbPricelistDetail[] => {
    return mockTbPricelistDetail
      .filter(detail => !detail.deleted_at && detail.pricelist_id === pricelistId)
      .sort((a, b) => (a.sequence_no || 0) - (b.sequence_no || 0));
  },

  // Find active details by pricelist ID
  findActiveByPricelistId: (pricelistId: string): TbPricelistDetail[] => {
    return mockTbPricelistDetail
      .filter(detail => 
        !detail.deleted_at && 
        detail.is_active &&
        detail.pricelist_id === pricelistId
      )
      .sort((a, b) => (a.sequence_no || 0) - (b.sequence_no || 0));
  },

  // Find by product ID
  findByProductId: (productId: string): TbPricelistDetail[] => {
    return mockTbPricelistDetail.filter(detail => 
      !detail.deleted_at && 
      detail.is_active &&
      detail.product_id === productId
    );
  },

  // Find by product and pricelist
  findByProductAndPricelist: (productId: string, pricelistId: string): TbPricelistDetail | null => {
    return mockTbPricelistDetail.find(detail => 
      !detail.deleted_at && 
      detail.is_active &&
      detail.product_id === productId &&
      detail.pricelist_id === pricelistId
    ) || null;
  },

  // Find all active details
  findAllActive: (): TbPricelistDetail[] => {
    return mockTbPricelistDetail.filter(detail => !detail.deleted_at && detail.is_active);
  },

  // Find all details (including inactive)
  findAll: (): TbPricelistDetail[] => {
    return mockTbPricelistDetail.filter(detail => !detail.deleted_at);
  },

  // Search details by product name or description
  search: (query: string): TbPricelistDetail[] => {
    const lowerQuery = query.toLowerCase();
    return mockTbPricelistDetail.filter(detail => 
      !detail.deleted_at && 
      detail.is_active &&
      (detail.product_name?.toLowerCase().includes(lowerQuery) || 
       detail.description?.toLowerCase().includes(lowerQuery))
    );
  },

  // Find by price range
  findByPriceRange: (minPrice: number, maxPrice: number): TbPricelistDetail[] => {
    return mockTbPricelistDetail.filter(detail => 
      !detail.deleted_at && 
      detail.is_active &&
      detail.price !== null &&
      detail.price !== undefined &&
      detail.price >= minPrice && 
      detail.price <= maxPrice
    );
  },

  // Find by unit
  findByUnit: (unitId: string): TbPricelistDetail[] => {
    return mockTbPricelistDetail.filter(detail => 
      !detail.deleted_at && 
      detail.is_active &&
      detail.unit_id === unitId
    );
  },

  // Find by tax profile
  findByTaxProfile: (taxProfileId: string): TbPricelistDetail[] => {
    return mockTbPricelistDetail.filter(detail => 
      !detail.deleted_at && 
      detail.is_active &&
      detail.tax_profile_id === taxProfileId
    );
  },

  // Update pricelist detail
  update: (id: string, data: Partial<TbPricelistDetail>, updated_by_id?: string): TbPricelistDetail | null => {
    const index = mockTbPricelistDetail.findIndex(detail => detail.id === id && !detail.deleted_at);
    if (index === -1) return null;

    const currentVersion = mockTbPricelistDetail[index].doc_version || 1;
    
    // Auto-calculate VAT if price_without_vat and tax_rate are provided
    const updatedData = { ...data };
    if (updatedData.price_without_vat && updatedData.tax_rate !== undefined && updatedData.tax_rate !== null) {
      const taxAmount = updatedData.price_without_vat * (updatedData.tax_rate / 100);
      updatedData.price_with_vat = updatedData.price_without_vat + taxAmount;
      updatedData.price = updatedData.price_with_vat;
    }

    mockTbPricelistDetail[index] = {
      ...mockTbPricelistDetail[index],
      ...updatedData,
      doc_version: currentVersion + 1,
      updated_at: getCurrentTimestamp(),
      updated_by_id: updated_by_id || null
    };
    return mockTbPricelistDetail[index];
  },

  // Soft delete pricelist detail
  delete: (id: string, deleted_by_id?: string): boolean => {
    const index = mockTbPricelistDetail.findIndex(detail => detail.id === id && !detail.deleted_at);
    if (index === -1) return false;

    mockTbPricelistDetail[index].deleted_at = getCurrentTimestamp();
    mockTbPricelistDetail[index].deleted_by_id = deleted_by_id || null;
    return true;
  },

  // Activate detail
  activate: (id: string, updated_by_id?: string): TbPricelistDetail | null => {
    return tbPricelistDetailCrud.update(id, { is_active: true }, updated_by_id);
  },

  // Deactivate detail
  deactivate: (id: string, updated_by_id?: string): TbPricelistDetail | null => {
    return tbPricelistDetailCrud.update(id, { is_active: false }, updated_by_id);
  },

  // Update price (auto-calculate VAT)
  updatePrice: (
    id: string, 
    priceWithoutVat: number, 
    taxRate: number, 
    updated_by_id?: string
  ): TbPricelistDetail | null => {
    const taxAmount = priceWithoutVat * (taxRate / 100);
    const priceWithVat = priceWithoutVat + taxAmount;
    
    return tbPricelistDetailCrud.update(id, {
      price_without_vat: priceWithoutVat,
      tax_rate: taxRate,
      price_with_vat: priceWithVat,
      price: priceWithVat
    }, updated_by_id);
  },

  // Bulk update prices for pricelist
  bulkUpdatePrices: (
    pricelistId: string, 
    priceAdjustment: number, 
    adjustmentType: 'percentage' | 'fixed',
    updated_by_id?: string
  ): TbPricelistDetail[] => {
    const details = tbPricelistDetailCrud.findActiveByPricelistId(pricelistId);
    const updated: TbPricelistDetail[] = [];

    details.forEach(detail => {
      if (detail.price_without_vat !== null && detail.price_without_vat !== undefined) {
        let newPrice = detail.price_without_vat;
        
        if (adjustmentType === 'percentage') {
          newPrice = detail.price_without_vat * (1 + priceAdjustment / 100);
        } else {
          newPrice = detail.price_without_vat + priceAdjustment;
        }

        const updatedDetail = tbPricelistDetailCrud.updatePrice(
          detail.id, 
          newPrice, 
          detail.tax_rate || 0, 
          updated_by_id
        );
        
        if (updatedDetail) {
          updated.push(updatedDetail);
        }
      }
    });

    return updated;
  },

  // Copy details from one pricelist to another
  copyFromPricelist: (
    sourcePricelistId: string, 
    targetPricelistId: string, 
    created_by_id?: string
  ): TbPricelistDetail[] => {
    const sourceDetails = tbPricelistDetailCrud.findActiveByPricelistId(sourcePricelistId);
    const copied: TbPricelistDetail[] = [];

    sourceDetails.forEach(detail => {
      const newDetail = tbPricelistDetailCrud.create({
        pricelist_id: targetPricelistId,
        sequence_no: detail.sequence_no,
        product_id: detail.product_id,
        product_name: detail.product_name,
        unit_id: detail.unit_id,
        unit_name: detail.unit_name,
        tax_profile_id: detail.tax_profile_id,
        tax_profile_name: detail.tax_profile_name,
        tax_rate: detail.tax_rate,
        price: detail.price,
        price_without_vat: detail.price_without_vat,
        price_with_vat: detail.price_with_vat,
        is_active: detail.is_active,
        description: detail.description,
        note: `Copied from ${sourcePricelistId}`,
        info: detail.info,
        dimension: detail.dimension,
        doc_version: 1,
        created_by_id: created_by_id || null,
        updated_by_id: created_by_id || null,
        deleted_at: null,
        deleted_by_id: null
      });
      copied.push(newDetail);
    });

    return copied;
  },

  // Get price for product in pricelist
  getPrice: (productId: string, pricelistId: string): number | null => {
    const detail = tbPricelistDetailCrud.findByProductAndPricelist(productId, pricelistId);
    return detail?.price || null;
  },

  // Get cheapest price for product across all active pricelists
  getCheapestPrice: (productId: string): { price: number; pricelistId: string; detail: TbPricelistDetail } | null => {
    const details = tbPricelistDetailCrud.findByProductId(productId);
    if (details.length === 0) return null;

    const cheapest = details.reduce((min, current) => {
      const currentPrice = current.price || Infinity;
      const minPrice = min.price || Infinity;
      return currentPrice < minPrice ? current : min;
    });

    return {
      price: cheapest.price || 0,
      pricelistId: cheapest.pricelist_id,
      detail: cheapest
    };
  },

  // Get pricelist detail statistics
  getStats: () => {
    const allDetails = mockTbPricelistDetail.filter(detail => !detail.deleted_at);
    const activeDetails = allDetails.filter(detail => detail.is_active);
    const prices = activeDetails.map(detail => detail.price || 0).filter(price => price > 0);
    
    return {
      total: allDetails.length,
      active: activeDetails.length,
      inactive: allDetails.length - activeDetails.length,
      avgPrice: prices.length > 0 ? prices.reduce((sum, price) => sum + price, 0) / prices.length : 0,
      minPrice: prices.length > 0 ? Math.min(...prices) : 0,
      maxPrice: prices.length > 0 ? Math.max(...prices) : 0,
      byPricelist: activeDetails.reduce((acc, detail) => {
        acc[detail.pricelist_id] = (acc[detail.pricelist_id] || 0) + 1;
        return acc;
      }, {} as Record<string, number>),
      byUnit: activeDetails.reduce((acc, detail) => {
        const unit = detail.unit_name || 'Unknown';
        acc[unit] = (acc[unit] || 0) + 1;
        return acc;
      }, {} as Record<string, number>),
      byTaxRate: activeDetails.reduce((acc, detail) => {
        const rate = detail.tax_rate?.toString() || '0';
        acc[rate + '%'] = (acc[rate + '%'] || 0) + 1;
        return acc;
      }, {} as Record<string, number>)
    };
  }
};
