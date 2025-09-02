import { generateId, getCurrentTimestamp } from "@/libs/utils";

export interface PricelistDetail {
  id: string;
  pricelist_id: string;
  sequence_no: number;
  product_id: string;
  product_name: string;
  unit_id: string;
  unit_name: string;
  tax_profile_id: string;
  tax_profile_name: string;
  tax_rate: string;
  price: string;
  price_without_vat: string;
  price_with_vat: string;
  is_active: boolean;
  description: string;
  note: string;
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

export const pricelistDetails: PricelistDetail[] = [
  {
    id: "550e8400-e29b-41d4-a716-446655440101",
    pricelist_id: "550e8400-e29b-41d4-a716-446655440001",
    sequence_no: 1,
    product_id: "550e8400-e29b-41d4-a716-446655440201",
    product_name: "iPhone 15 Pro",
    unit_id: "550e8400-e29b-41d4-a716-446655440301",
    unit_name: "ชิ้น",
    tax_profile_id: "550e8400-e29b-41d4-a716-446655440401",
    tax_profile_name: "VAT 7%",
    tax_rate: "7",
    price: "45000",
    price_without_vat: "42056.07",
    price_with_vat: "45000",
    is_active: true,
    description: "iPhone 15 Pro 128GB",
    note: "Standard retail price",
    info: { category: "Electronics", brand: "Apple" },
    dimension: { department: "Sales", region: "All" },
    doc_version: "1.0",
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440102",
    pricelist_id: "550e8400-e29b-41d4-a716-446655440001",
    sequence_no: 2,
    product_id: "550e8400-e29b-41d4-a716-446655440202",
    product_name: "Samsung Galaxy S24",
    unit_id: "550e8400-e29b-41d4-a716-446655440301",
    unit_name: "ชิ้น",
    tax_profile_id: "550e8400-e29b-41d4-a716-446655440401",
    tax_profile_name: "VAT 7%",
    tax_rate: "7",
    price: "38000",
    price_without_vat: "35514.02",
    price_with_vat: "38000",
    is_active: true,
    description: "Samsung Galaxy S24 128GB",
    note: "Standard retail price",
    info: { category: "Electronics", brand: "Samsung" },
    dimension: { department: "Sales", region: "All" },
    doc_version: "1.0",
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440103",
    pricelist_id: "550e8400-e29b-41d4-a716-446655440002",
    sequence_no: 1,
    product_id: "550e8400-e29b-41d4-a716-446655440201",
    product_name: "iPhone 15 Pro",
    unit_id: "550e8400-e29b-41d4-a716-446655440301",
    unit_name: "ชิ้น",
    tax_profile_id: "550e8400-e29b-41d4-a716-446655440401",
    tax_profile_name: "VAT 7%",
    tax_rate: "7",
    price: "42000",
    price_without_vat: "39252.34",
    price_with_vat: "42000",
    is_active: true,
    description: "iPhone 15 Pro 128GB - Wholesale",
    note: "Wholesale price with volume discount",
    info: { category: "Electronics", brand: "Apple", discount: "6.67%" },
    dimension: { department: "Sales", region: "All" },
    doc_version: "1.0",
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "1bfdb891-58ee-499c-8115-34a964de8122",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
];

// CREATE - สร้าง PricelistDetail ใหม่
export const createPricelistDetail = (
  detailData: Omit<PricelistDetail, "id" | "created_at" | "updated_at">
): PricelistDetail => {
  const newDetail: PricelistDetail = {
    ...detailData,
    id: generateId(),
    created_at: getCurrentTimestamp(),
    updated_at: getCurrentTimestamp(),
  };

  pricelistDetails.push(newDetail);
  return newDetail;
};

// READ - อ่าน PricelistDetail ทั้งหมด
export const getAllPricelistDetails = (): PricelistDetail[] => {
  return [...pricelistDetails];
};

// READ - อ่าน PricelistDetail ตาม ID
export const getPricelistDetailById = (
  id: string
): PricelistDetail | undefined => {
  return pricelistDetails.find((detail) => detail.id === id);
};

// READ - อ่าน PricelistDetail ตาม pricelist_id
export const getPricelistDetailsByPricelistId = (
  pricelistId: string
): PricelistDetail[] => {
  return pricelistDetails.filter(
    (detail) => detail.pricelist_id === pricelistId
  );
};

// READ - อ่าน PricelistDetail ตาม product_id
export const getPricelistDetailsByProductId = (
  productId: string
): PricelistDetail[] => {
  return pricelistDetails.filter((detail) => detail.product_id === productId);
};

// READ - อ่าน PricelistDetail ที่ active
export const getActivePricelistDetails = (): PricelistDetail[] => {
  return pricelistDetails.filter((detail) => detail.is_active);
};

// READ - อ่าน PricelistDetail ตาม sequence_no
export const getPricelistDetailBySequence = (
  pricelistId: string,
  sequenceNo: number
): PricelistDetail | undefined => {
  return pricelistDetails.find(
    (detail) =>
      detail.pricelist_id === pricelistId && detail.sequence_no === sequenceNo
  );
};

// READ - อ่าน PricelistDetail ตาม price range
export const getPricelistDetailsByPriceRange = (
  minPrice: number,
  maxPrice: number
): PricelistDetail[] => {
  return pricelistDetails.filter((detail) => {
    const price = parseFloat(detail.price);
    return price >= minPrice && price <= maxPrice;
  });
};

// READ - ค้นหา PricelistDetail แบบ fuzzy search
export const searchPricelistDetails = (
  searchTerm: string
): PricelistDetail[] => {
  const lowerSearchTerm = searchTerm.toLowerCase();
  return pricelistDetails.filter(
    (detail) =>
      detail.product_name.toLowerCase().includes(lowerSearchTerm) ||
      detail.description.toLowerCase().includes(lowerSearchTerm) ||
      detail.note.toLowerCase().includes(lowerSearchTerm)
  );
};

// UPDATE - อัปเดต PricelistDetail
export const updatePricelistDetail = (
  id: string,
  updateData: Partial<
    Omit<PricelistDetail, "id" | "created_at" | "created_by_id">
  >
): PricelistDetail | null => {
  const index = pricelistDetails.findIndex((detail) => detail.id === id);

  if (index === -1) {
    return null;
  }

  pricelistDetails[index] = {
    ...pricelistDetails[index],
    ...updateData,
    updated_at: getCurrentTimestamp(),
  };

  return pricelistDetails[index];
};

// UPDATE - อัปเดต PricelistDetail price
export const updatePricelistDetailPrice = (
  id: string,
  price: string
): PricelistDetail | null => {
  return updatePricelistDetail(id, { price });
};

// UPDATE - อัปเดต PricelistDetail sequence
export const updatePricelistDetailSequence = (
  id: string,
  sequenceNo: number
): PricelistDetail | null => {
  return updatePricelistDetail(id, { sequence_no: sequenceNo });
};

// UPDATE - อัปเดต PricelistDetail active status
export const updatePricelistDetailActiveStatus = (
  id: string,
  isActive: boolean
): PricelistDetail | null => {
  return updatePricelistDetail(id, { is_active: isActive });
};

// DELETE - ลบ PricelistDetail (soft delete)
export const deletePricelistDetail = (
  id: string,
  deletedById: string
): boolean => {
  const index = pricelistDetails.findIndex((detail) => detail.id === id);

  if (index === -1) {
    return false;
  }

  pricelistDetails[index] = {
    ...pricelistDetails[index],
    deleted_at: getCurrentTimestamp(),
    deleted_by_id: deletedById,
  };

  return true;
};

// DELETE - ลบ PricelistDetail แบบถาวร
export const hardDeletePricelistDetail = (id: string): boolean => {
  const index = pricelistDetails.findIndex((detail) => detail.id === id);

  if (index === -1) {
    return false;
  }

  pricelistDetails.splice(index, 1);
  return true;
};

// DELETE - ลบ PricelistDetail ตาม pricelist_id
export const deletePricelistDetailsByPricelistId = (
  pricelistId: string,
  deletedById: string
): number => {
  let deletedCount = 0;

  pricelistDetails.forEach((detail) => {
    if (detail.pricelist_id === pricelistId && !detail.deleted_at) {
      detail.deleted_at = getCurrentTimestamp();
      detail.deleted_by_id = deletedById;
      deletedCount++;
    }
  });

  return deletedCount;
};

// DELETE - ลบ PricelistDetail ตาม product_id
export const deletePricelistDetailsByProductId = (
  productId: string,
  deletedById: string
): number => {
  let deletedCount = 0;

  pricelistDetails.forEach((detail) => {
    if (detail.product_id === productId && !detail.deleted_at) {
      detail.deleted_at = getCurrentTimestamp();
      detail.deleted_by_id = deletedById;
      deletedCount++;
    }
  });

  return deletedCount;
};

// Utility function สำหรับล้างข้อมูลทั้งหมด (ใช้สำหรับ testing)
export const clearAllPricelistDetails = (): void => {
  pricelistDetails.length = 0;
};

// Utility function สำหรับนับจำนวน PricelistDetail
export const getPricelistDetailCount = (): number => {
  return pricelistDetails.length;
};

// Utility function สำหรับนับจำนวน PricelistDetail ตาม pricelist_id
export const getPricelistDetailCountByPricelistId = (
  pricelistId: string
): number => {
  return pricelistDetails.filter(
    (detail) => detail.pricelist_id === pricelistId
  ).length;
};

// Utility function สำหรับนับจำนวน PricelistDetail ที่ active
export const getActivePricelistDetailCount = (): number => {
  return pricelistDetails.filter((detail) => detail.is_active).length;
};

// Utility function สำหรับตรวจสอบ sequence_no ซ้ำใน pricelist เดียวกัน
export const isSequenceNoExistsInPricelist = (
  pricelistId: string,
  sequenceNo: number
): boolean => {
  return pricelistDetails.some(
    (detail) =>
      detail.pricelist_id === pricelistId && detail.sequence_no === sequenceNo
  );
};

// Utility function สำหรับตรวจสอบ PricelistDetail ที่ถูกลบแล้ว
export const getDeletedPricelistDetails = (): PricelistDetail[] => {
  return pricelistDetails.filter((detail) => detail.deleted_at !== null);
};

// Utility function สำหรับกู้คืน PricelistDetail ที่ถูกลบแล้ว
export const restorePricelistDetail = (id: string): boolean => {
  const index = pricelistDetails.findIndex((detail) => detail.id === id);

  if (index === -1) {
    return false;
  }

  if (pricelistDetails[index].deleted_at) {
    pricelistDetails[index] = {
      ...pricelistDetails[index],
      deleted_at: null,
      deleted_by_id: null,
    };
    return true;
  }

  return false;
};

// Utility function สำหรับค้นหา PricelistDetail แบบ advanced search
export const searchPricelistDetailsAdvanced = (searchCriteria: {
  pricelist_id?: string;
  product_id?: string;
  product_name?: string;
  price_min?: number;
  price_max?: number;
  is_active?: boolean;
  tax_rate?: string;
}): PricelistDetail[] => {
  return pricelistDetails.filter((detail) => {
    if (
      searchCriteria.pricelist_id &&
      detail.pricelist_id !== searchCriteria.pricelist_id
    ) {
      return false;
    }

    if (
      searchCriteria.product_id &&
      detail.product_id !== searchCriteria.product_id
    ) {
      return false;
    }

    if (
      searchCriteria.product_name &&
      !detail.product_name
        .toLowerCase()
        .includes(searchCriteria.product_name.toLowerCase())
    ) {
      return false;
    }

    if (
      searchCriteria.price_min !== undefined ||
      searchCriteria.price_max !== undefined
    ) {
      const price = parseFloat(detail.price);
      if (
        searchCriteria.price_min !== undefined &&
        price < searchCriteria.price_min
      ) {
        return false;
      }
      if (
        searchCriteria.price_max !== undefined &&
        price > searchCriteria.price_max
      ) {
        return false;
      }
    }

    if (
      searchCriteria.is_active !== undefined &&
      detail.is_active !== searchCriteria.is_active
    ) {
      return false;
    }

    if (
      searchCriteria.tax_rate &&
      detail.tax_rate !== searchCriteria.tax_rate
    ) {
      return false;
    }

    return true;
  });
};

// Utility function สำหรับคำนวณราคารวมของ pricelist
export const calculatePricelistTotal = (pricelistId: string): number => {
  return pricelistDetails
    .filter((detail) => detail.pricelist_id === pricelistId && detail.is_active)
    .reduce((total, detail) => total + parseFloat(detail.price), 0);
};

// Utility function สำหรับคำนวณราคารวมแบบไม่มี VAT
export const calculatePricelistTotalWithoutVat = (
  pricelistId: string
): number => {
  return pricelistDetails
    .filter((detail) => detail.pricelist_id === pricelistId && detail.is_active)
    .reduce((total, detail) => total + parseFloat(detail.price_without_vat), 0);
};

// Utility function สำหรับคำนวณราคารวมแบบมี VAT
export const calculatePricelistTotalWithVat = (pricelistId: string): number => {
  return pricelistDetails
    .filter((detail) => detail.pricelist_id === pricelistId && detail.is_active)
    .reduce((total, detail) => total + parseFloat(detail.price_with_vat), 0);
};

// Utility function สำหรับคำนวณ VAT รวม
export const calculatePricelistTotalVat = (pricelistId: string): number => {
  return pricelistDetails
    .filter((detail) => detail.pricelist_id === pricelistId && detail.is_active)
    .reduce((total, detail) => {
      const priceWithVat = parseFloat(detail.price_with_vat);
      const priceWithoutVat = parseFloat(detail.price_without_vat);
      return total + (priceWithVat - priceWithoutVat);
    }, 0);
};
