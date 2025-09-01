import { generateId, getCurrentTimestamp } from "@/libs/utils";

export interface PricelistTemplateDetail {
  id: string;
  pricelist_template_id: string;
  sequence_no: number;
  product_id: string;
  product_name: string;
  array_order_unit: any;
  info: any;
  dimension: any;
  doc_version: string;
  created_at: string;
  created_by_id: string;
  updated_at: string;
  updated_by_id: string | null;
  deleted_at: string | null;
  deleted_by_id: string | null;
}

export const pricelistTemplateDetails: PricelistTemplateDetail[] = [
  {
    id: "550e8400-e29b-41d4-a716-446655440601",
    pricelist_template_id: "550e8400-e29b-41d4-a716-446655440501",
    sequence_no: 1,
    product_id: "550e8400-e29b-41d4-a716-446655440201",
    product_name: "iPhone 15 Pro",
    array_order_unit: { unit_id: "550e8400-e29b-41d4-a716-446655440301", unit_name: "ชิ้น" },
    info: { category: "Electronics", brand: "Apple", base_price: "45000" },
    dimension: { department: "Sales", region: "All" },
    doc_version: "1.0",
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440602",
    pricelist_template_id: "550e8400-e29b-41d4-a716-446655440501",
    sequence_no: 2,
    product_id: "550e8400-e29b-41d4-a716-446655440202",
    product_name: "Samsung Galaxy S24",
    array_order_unit: { unit_id: "550e8400-e29b-41d4-a716-446655440301", unit_name: "ชิ้น" },
    info: { category: "Electronics", brand: "Samsung", base_price: "38000" },
    dimension: { department: "Sales", region: "All" },
    doc_version: "1.0",
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440603",
    pricelist_template_id: "550e8400-e29b-41d4-a716-446655440502",
    sequence_no: 1,
    product_id: "550e8400-e29b-41d4-a716-446655440201",
    product_name: "iPhone 15 Pro",
    array_order_unit: { unit_id: "550e8400-e29b-41d4-a716-446655440301", unit_name: "ชิ้น" },
    info: { category: "Electronics", brand: "Apple", base_price: "42000", discount: "6.67%" },
    dimension: { department: "Sales", region: "All" },
    doc_version: "1.0",
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "1bfdb891-58ee-499c-8115-34a964de8122",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440604",
    pricelist_template_id: "550e8400-e29b-41d4-a716-446655440503",
    sequence_no: 1,
    product_id: "550e8400-e29b-41d4-a716-446655440201",
    product_name: "iPhone 15 Pro",
    array_order_unit: { unit_id: "550e8400-e29b-41d4-a716-446655440301", unit_name: "ชิ้น" },
    info: { category: "Electronics", brand: "Apple", base_price: "43000", vip_discount: "4.44%" },
    dimension: { department: "Sales", region: "All" },
    doc_version: "1.0",
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "3c5280a7-492e-421d-b739-7447455ce99e",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null
  }
];

// CREATE - สร้าง PricelistTemplateDetail ใหม่
export const createPricelistTemplateDetail = (detailData: Omit<PricelistTemplateDetail, 'id' | 'created_at' | 'updated_at'>): PricelistTemplateDetail => {
  const newDetail: PricelistTemplateDetail = {
    ...detailData,
    id: generateId(),
    created_at: getCurrentTimestamp(),
    updated_at: getCurrentTimestamp()
  };
  
  pricelistTemplateDetails.push(newDetail);
  return newDetail;
};

// READ - อ่าน PricelistTemplateDetail ทั้งหมด
export const getAllPricelistTemplateDetails = (): PricelistTemplateDetail[] => {
  return [...pricelistTemplateDetails];
};

// READ - อ่าน PricelistTemplateDetail ตาม ID
export const getPricelistTemplateDetailById = (id: string): PricelistTemplateDetail | undefined => {
  return pricelistTemplateDetails.find(detail => detail.id === id);
};

// READ - อ่าน PricelistTemplateDetail ตาม pricelist_template_id
export const getPricelistTemplateDetailsByTemplateId = (templateId: string): PricelistTemplateDetail[] => {
  return pricelistTemplateDetails.filter(detail => detail.pricelist_template_id === templateId);
};

// READ - อ่าน PricelistTemplateDetail ตาม product_id
export const getPricelistTemplateDetailsByProductId = (productId: string): PricelistTemplateDetail[] => {
  return pricelistTemplateDetails.filter(detail => detail.product_id === productId);
};

// READ - อ่าน PricelistTemplateDetail ตาม sequence_no
export const getPricelistTemplateDetailBySequence = (templateId: string, sequenceNo: number): PricelistTemplateDetail | undefined => {
  return pricelistTemplateDetails.find(detail => 
    detail.pricelist_template_id === templateId && detail.sequence_no === sequenceNo
  );
};

// READ - อ่าน PricelistTemplateDetail ตาม product_name
export const getPricelistTemplateDetailsByProductName = (productName: string): PricelistTemplateDetail[] => {
  return pricelistTemplateDetails.filter(detail => 
    detail.product_name.toLowerCase().includes(productName.toLowerCase())
  );
};

// READ - ค้นหา PricelistTemplateDetail แบบ fuzzy search
export const searchPricelistTemplateDetails = (searchTerm: string): PricelistTemplateDetail[] => {
  const lowerSearchTerm = searchTerm.toLowerCase();
  return pricelistTemplateDetails.filter(detail => 
    detail.product_name.toLowerCase().includes(lowerSearchTerm) ||
    (detail.info?.category && detail.info.category.toLowerCase().includes(lowerSearchTerm)) ||
    (detail.info?.brand && detail.info.brand.toLowerCase().includes(lowerSearchTerm))
  );
};

// UPDATE - อัปเดต PricelistTemplateDetail
export const updatePricelistTemplateDetail = (id: string, updateData: Partial<Omit<PricelistTemplateDetail, 'id' | 'created_at' | 'created_by_id'>>): PricelistTemplateDetail | null => {
  const index = pricelistTemplateDetails.findIndex(detail => detail.id === id);
  
  if (index === -1) {
    return null;
  }
  
  pricelistTemplateDetails[index] = {
    ...pricelistTemplateDetails[index],
    ...updateData,
    updated_at: getCurrentTimestamp()
  };
  
  return pricelistTemplateDetails[index];
};

// UPDATE - อัปเดต PricelistTemplateDetail sequence
export const updatePricelistTemplateDetailSequence = (id: string, sequenceNo: number): PricelistTemplateDetail | null => {
  return updatePricelistTemplateDetail(id, { sequence_no: sequenceNo });
};

// UPDATE - อัปเดต PricelistTemplateDetail product_name
export const updatePricelistTemplateDetailProductName = (id: string, productName: string): PricelistTemplateDetail | null => {
  return updatePricelistTemplateDetail(id, { product_name: productName });
};

// UPDATE - อัปเดต PricelistTemplateDetail info
export const updatePricelistTemplateDetailInfo = (id: string, info: any): PricelistTemplateDetail | null => {
  return updatePricelistTemplateDetail(id, { info });
};

// DELETE - ลบ PricelistTemplateDetail (soft delete)
export const deletePricelistTemplateDetail = (id: string, deletedById: string): boolean => {
  const index = pricelistTemplateDetails.findIndex(detail => detail.id === id);
  
  if (index === -1) {
    return false;
  }
  
  pricelistTemplateDetails[index] = {
    ...pricelistTemplateDetails[index],
    deleted_at: getCurrentTimestamp(),
    deleted_by_id: deletedById
  };
  
  return true;
};

// DELETE - ลบ PricelistTemplateDetail แบบถาวร
export const hardDeletePricelistTemplateDetail = (id: string): boolean => {
  const index = pricelistTemplateDetails.findIndex(detail => detail.id === id);
  
  if (index === -1) {
    return false;
  }
  
  pricelistTemplateDetails.splice(index, 1);
  return true;
};

// DELETE - ลบ PricelistTemplateDetail ตาม pricelist_template_id
export const deletePricelistTemplateDetailsByTemplateId = (templateId: string, deletedById: string): number => {
  let deletedCount = 0;
  
  pricelistTemplateDetails.forEach(detail => {
    if (detail.pricelist_template_id === templateId && !detail.deleted_at) {
      detail.deleted_at = getCurrentTimestamp();
      detail.deleted_by_id = deletedById;
      deletedCount++;
    }
  });
  
  return deletedCount;
};

// DELETE - ลบ PricelistTemplateDetail ตาม product_id
export const deletePricelistTemplateDetailsByProductId = (productId: string, deletedById: string): number => {
  let deletedCount = 0;
  
  pricelistTemplateDetails.forEach(detail => {
    if (detail.product_id === productId && !detail.deleted_at) {
      detail.deleted_at = getCurrentTimestamp();
      detail.deleted_by_id = deletedById;
      deletedCount++;
    }
  });
  
  return deletedCount;
};

// Utility function สำหรับล้างข้อมูลทั้งหมด (ใช้สำหรับ testing)
export const clearAllPricelistTemplateDetails = (): void => {
  pricelistTemplateDetails.length = 0;
};

// Utility function สำหรับนับจำนวน PricelistTemplateDetail
export const getPricelistTemplateDetailCount = (): number => {
  return pricelistTemplateDetails.length;
};

// Utility function สำหรับนับจำนวน PricelistTemplateDetail ตาม template_id
export const getPricelistTemplateDetailCountByTemplateId = (templateId: string): number => {
  return pricelistTemplateDetails.filter(detail => detail.pricelist_template_id === templateId).length;
};

// Utility function สำหรับนับจำนวน PricelistTemplateDetail ตาม product_id
export const getPricelistTemplateDetailCountByProductId = (productId: string): number => {
  return pricelistTemplateDetails.filter(detail => detail.product_id === productId).length;
};

// Utility function สำหรับตรวจสอบ sequence_no ซ้ำใน template เดียวกัน
export const isSequenceNoExistsInTemplate = (templateId: string, sequenceNo: number): boolean => {
  return pricelistTemplateDetails.some(detail => 
    detail.pricelist_template_id === templateId && detail.sequence_no === sequenceNo
  );
};

// Utility function สำหรับตรวจสอบ PricelistTemplateDetail ที่ถูกลบแล้ว
export const getDeletedPricelistTemplateDetails = (): PricelistTemplateDetail[] => {
  return pricelistTemplateDetails.filter(detail => detail.deleted_at !== null);
};

// Utility function สำหรับกู้คืน PricelistTemplateDetail ที่ถูกลบแล้ว
export const restorePricelistTemplateDetail = (id: string): boolean => {
  const index = pricelistTemplateDetails.findIndex(detail => detail.id === id);
  
  if (index === -1) {
    return false;
  }
  
  if (pricelistTemplateDetails[index].deleted_at) {
    pricelistTemplateDetails[index] = {
      ...pricelistTemplateDetails[index],
      deleted_at: null,
      deleted_by_id: null
    };
    return true;
  }
  
  return false;
};

// Utility function สำหรับค้นหา PricelistTemplateDetail แบบ advanced search
export const searchPricelistTemplateDetailsAdvanced = (searchCriteria: {
  pricelist_template_id?: string;
  product_id?: string;
  product_name?: string;
  category?: string;
  brand?: string;
}): PricelistTemplateDetail[] => {
  return pricelistTemplateDetails.filter(detail => {
    if (searchCriteria.pricelist_template_id && detail.pricelist_template_id !== searchCriteria.pricelist_template_id) {
      return false;
    }
    
    if (searchCriteria.product_id && detail.product_id !== searchCriteria.product_id) {
      return false;
    }
    
    if (searchCriteria.product_name && !detail.product_name.toLowerCase().includes(searchCriteria.product_name.toLowerCase())) {
      return false;
    }
    
    if (searchCriteria.category && detail.info?.category !== searchCriteria.category) {
      return false;
    }
    
    if (searchCriteria.brand && detail.info?.brand !== searchCriteria.brand) {
      return false;
    }
    
    return true;
  });
};

// Utility function สำหรับคำนวณจำนวนสินค้าใน template
export const getProductCountInTemplate = (templateId: string): number => {
  return pricelistTemplateDetails.filter(detail => detail.pricelist_template_id === templateId).length;
};

// Utility function สำหรับคำนวณจำนวน template ที่มีสินค้า
export const getTemplateCountByProduct = (productId: string): number => {
  return pricelistTemplateDetails.filter(detail => detail.product_id === productId).length;
};

// Utility function สำหรับดึงข้อมูลสินค้าทั้งหมดใน template
export const getProductsInTemplate = (templateId: string): string[] => {
  return pricelistTemplateDetails
    .filter(detail => detail.pricelist_template_id === templateId)
    .map(detail => detail.product_name);
};

// Utility function สำหรับดึงข้อมูล template ทั้งหมดที่มีสินค้า
export const getTemplatesByProduct = (productId: string): string[] => {
  return pricelistTemplateDetails
    .filter(detail => detail.product_id === productId)
    .map(detail => detail.pricelist_template_id);
};
