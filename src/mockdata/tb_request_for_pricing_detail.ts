import { generateId, getCurrentTimestamp } from "@/libs/utils";

export interface RequestForPricingDetail {
  id: string;
  request_for_pricing_id: string;
  sequence_no: number;
  vendor_id: string;
  vendor_name: string;
  contact_person: string;
  contact_phone: string;
  contact_email: string;
  pricelist_id: string;
  pricelist_name: string;
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

export const requestForPricingDetails: RequestForPricingDetail[] = [
  {
    id: "rfpd-001",
    request_for_pricing_id: "rfp-001",
    sequence_no: 1,
    vendor_id: "vendor-001",
    vendor_name: "ABC Technology Co., Ltd.",
    contact_person: "John Smith",
    contact_phone: "+66-2-123-4567",
    contact_email: "john.smith@abc-tech.com",
    pricelist_id: "pl-001",
    pricelist_name: "ABC Tech Q1 2024",
    info: {
      category: "IT Equipment",
      response_time: "3 days",
      payment_terms: "Net 30",
      delivery_time: "2 weeks",
    },
    dimension: {
      cost_center: "IT-001",
      project_code: "IT-2024",
      budget_allocation: 200000,
    },
    doc_version: "1",
    created_at: "2024-01-01T10:00:00Z",
    created_by_id: "user-001",
    updated_at: "2024-01-01T10:00:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: "rfpd-002",
    request_for_pricing_id: "rfp-001",
    sequence_no: 2,
    vendor_id: "vendor-002",
    vendor_name: "XYZ Solutions Inc.",
    contact_person: "Jane Doe",
    contact_phone: "+66-2-234-5678",
    contact_email: "jane.doe@xyz-solutions.com",
    pricelist_id: "pl-002",
    pricelist_name: "XYZ Solutions 2024",
    info: {
      category: "IT Equipment",
      response_time: "2 days",
      payment_terms: "Net 45",
      delivery_time: "1 week",
    },
    dimension: {
      cost_center: "IT-001",
      project_code: "IT-2024",
      budget_allocation: 150000,
    },
    doc_version: "1",
    created_at: "2024-01-01T10:00:00Z",
    created_by_id: "user-001",
    updated_at: "2024-01-01T10:00:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: "rfpd-003",
    request_for_pricing_id: "rfp-002",
    sequence_no: 1,
    vendor_id: "vendor-003",
    vendor_name: "Office Supplies Plus",
    contact_person: "Mike Johnson",
    contact_phone: "+66-2-345-6789",
    contact_email: "mike.johnson@office-supplies.com",
    pricelist_id: "pl-003",
    pricelist_name: "Office Supplies 2024",
    info: {
      category: "Office Supplies",
      response_time: "1 day",
      payment_terms: "Net 30",
      delivery_time: "3 days",
    },
    dimension: {
      cost_center: "ADMIN-001",
      project_code: "ADMIN-2024",
      budget_allocation: 250000,
    },
    doc_version: "1",
    created_at: "2024-02-01T09:00:00Z",
    created_by_id: "user-002",
    updated_at: "2024-02-01T09:00:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
];

// CREATE - สร้าง RequestForPricingDetail ใหม่
export const createRequestForPricingDetail = (
  data: Omit<RequestForPricingDetail, "id" | "created_at" | "created_by_id">
): RequestForPricingDetail => {
  const newDetail: RequestForPricingDetail = {
    ...data,
    id: generateId(),
    created_at: getCurrentTimestamp(),
    created_by_id: "system",
  };

  requestForPricingDetails.push(newDetail);
  return newDetail;
};

// READ - อ่าน RequestForPricingDetail ทั้งหมด
export const getAllRequestForPricingDetails = (): RequestForPricingDetail[] => {
  return requestForPricingDetails.filter((detail) => !detail.deleted_at);
};

// READ - อ่าน RequestForPricingDetail ตาม ID
export const getRequestForPricingDetailById = (
  id: string
): RequestForPricingDetail | null => {
  const detail = requestForPricingDetails.find(
    (detail) => detail.id === id && !detail.deleted_at
  );
  return detail || null;
};

// READ - อ่าน RequestForPricingDetail ตาม request_for_pricing_id
export const getRequestForPricingDetailsByRequestId = (
  requestId: string
): RequestForPricingDetail[] => {
  return requestForPricingDetails.filter(
    (detail) =>
      detail.request_for_pricing_id === requestId && !detail.deleted_at
  );
};

// READ - อ่าน RequestForPricingDetail ตาม sequence_no
export const getRequestForPricingDetailsBySequenceNo = (
  sequenceNo: number
): RequestForPricingDetail[] => {
  return requestForPricingDetails.filter(
    (detail) => detail.sequence_no === sequenceNo && !detail.deleted_at
  );
};

// READ - อ่าน RequestForPricingDetail ตาม vendor_id
export const getRequestForPricingDetailsByVendorId = (
  vendorId: string
): RequestForPricingDetail[] => {
  return requestForPricingDetails.filter(
    (detail) => detail.vendor_id === vendorId && !detail.deleted_at
  );
};

// READ - อ่าน RequestForPricingDetail ตาม pricelist_id
export const getRequestForPricingDetailsByPricelistId = (
  pricelistId: string
): RequestForPricingDetail[] => {
  return requestForPricingDetails.filter(
    (detail) => detail.pricelist_id === pricelistId && !detail.deleted_at
  );
};

// READ - อ่าน RequestForPricingDetail ที่มี info
export const getRequestForPricingDetailsWithInfo =
  (): RequestForPricingDetail[] => {
    return requestForPricingDetails.filter(
      (detail) => detail.info && !detail.deleted_at
    );
  };

// READ - อ่าน RequestForPricingDetail ที่มี dimension
export const getRequestForPricingDetailsWithDimension =
  (): RequestForPricingDetail[] => {
    return requestForPricingDetails.filter(
      (detail) => detail.dimension && !detail.deleted_at
    );
  };

// READ - ค้นหา RequestForPricingDetail แบบ fuzzy search
export const searchRequestForPricingDetails = (
  searchTerm: string
): RequestForPricingDetail[] => {
  const lowerSearchTerm = searchTerm.toLowerCase();

  return requestForPricingDetails.filter(
    (detail) =>
      !detail.deleted_at &&
      (detail.vendor_name?.toLowerCase().includes(lowerSearchTerm) ||
        detail.contact_person?.toLowerCase().includes(lowerSearchTerm) ||
        detail.contact_email?.toLowerCase().includes(lowerSearchTerm) ||
        detail.pricelist_name?.toLowerCase().includes(lowerSearchTerm) ||
        detail.info?.category?.toLowerCase().includes(lowerSearchTerm) ||
        detail.info?.payment_terms?.toLowerCase().includes(lowerSearchTerm) ||
        detail.dimension?.cost_center
          ?.toLowerCase()
          .includes(lowerSearchTerm) ||
        detail.dimension?.project_code?.toLowerCase().includes(lowerSearchTerm))
  );
};

// UPDATE - อัปเดต RequestForPricingDetail
export const updateRequestForPricingDetail = (
  id: string,
  updates: Partial<
    Omit<RequestForPricingDetail, "id" | "created_at" | "created_by_id">
  >
): RequestForPricingDetail | null => {
  const index = requestForPricingDetails.findIndex(
    (detail) => detail.id === id
  );

  if (index === -1) {
    return null;
  }

  requestForPricingDetails[index] = {
    ...requestForPricingDetails[index],
    ...updates,
    updated_at: getCurrentTimestamp(),
  };

  return requestForPricingDetails[index];
};

// UPDATE - อัปเดต RequestForPricingDetail sequence_no
export const updateRequestForPricingDetailSequenceNo = (
  id: string,
  sequenceNo: number
): RequestForPricingDetail | null => {
  return updateRequestForPricingDetail(id, { sequence_no: sequenceNo });
};

// UPDATE - อัปเดต RequestForPricingDetail vendor info
export const updateRequestForPricingDetailVendorInfo = (
  id: string,
  vendorId: string,
  vendorName: string
): RequestForPricingDetail | null => {
  return updateRequestForPricingDetail(id, {
    vendor_id: vendorId,
    vendor_name: vendorName,
  });
};

// UPDATE - อัปเดต RequestForPricingDetail contact info
export const updateRequestForPricingDetailContactInfo = (
  id: string,
  contactPerson: string,
  contactPhone: string,
  contactEmail: string
): RequestForPricingDetail | null => {
  return updateRequestForPricingDetail(id, {
    contact_person: contactPerson,
    contact_phone: contactPhone,
    contact_email: contactEmail,
  });
};

// UPDATE - อัปเดต RequestForPricingDetail pricelist info
export const updateRequestForPricingDetailPricelistInfo = (
  id: string,
  pricelistId: string,
  pricelistName: string
): RequestForPricingDetail | null => {
  return updateRequestForPricingDetail(id, {
    pricelist_id: pricelistId,
    pricelist_name: pricelistName,
  });
};

// UPDATE - อัปเดต RequestForPricingDetail info
export const updateRequestForPricingDetailInfo = (
  id: string,
  info: any
): RequestForPricingDetail | null => {
  return updateRequestForPricingDetail(id, { info });
};

// UPDATE - อัปเดต RequestForPricingDetail dimension
export const updateRequestForPricingDetailDimension = (
  id: string,
  dimension: any
): RequestForPricingDetail | null => {
  return updateRequestForPricingDetail(id, { dimension });
};

// UPDATE - อัปเดต RequestForPricingDetail doc_version
export const updateRequestForPricingDetailDocVersion = (
  id: string,
  docVersion: string
): RequestForPricingDetail | null => {
  return updateRequestForPricingDetail(id, { doc_version: docVersion });
};

// DELETE - ลบ RequestForPricingDetail (soft delete)
export const deleteRequestForPricingDetail = (
  id: string,
  deletedById: string
): boolean => {
  const index = requestForPricingDetails.findIndex(
    (detail) => detail.id === id
  );

  if (index === -1) {
    return false;
  }

  requestForPricingDetails[index] = {
    ...requestForPricingDetails[index],
    deleted_at: getCurrentTimestamp(),
    deleted_by_id: deletedById,
  };

  return true;
};

// DELETE - ลบ RequestForPricingDetail แบบถาวร
export const hardDeleteRequestForPricingDetail = (id: string): boolean => {
  const index = requestForPricingDetails.findIndex(
    (detail) => detail.id === id
  );

  if (index === -1) {
    return false;
  }

  requestForPricingDetails.splice(index, 1);
  return true;
};

// DELETE - ลบ RequestForPricingDetail ตาม request_for_pricing_id
export const deleteRequestForPricingDetailsByRequestId = (
  requestId: string,
  deletedById: string
): number => {
  let deletedCount = 0;

  requestForPricingDetails.forEach((detail) => {
    if (detail.request_for_pricing_id === requestId && !detail.deleted_at) {
      detail.deleted_at = getCurrentTimestamp();
      detail.deleted_by_id = deletedById;
      deletedCount++;
    }
  });

  return deletedCount;
};

// DELETE - ลบ RequestForPricingDetail ตาม vendor_id
export const deleteRequestForPricingDetailsByVendorId = (
  vendorId: string,
  deletedById: string
): number => {
  let deletedCount = 0;

  requestForPricingDetails.forEach((detail) => {
    if (detail.vendor_id === vendorId && !detail.deleted_at) {
      detail.deleted_at = getCurrentTimestamp();
      detail.deleted_by_id = deletedById;
      deletedCount++;
    }
  });

  return deletedCount;
};

// DELETE - ลบ RequestForPricingDetail ตาม pricelist_id
export const deleteRequestForPricingDetailsByPricelistId = (
  pricelistId: string,
  deletedById: string
): number => {
  let deletedCount = 0;

  requestForPricingDetails.forEach((detail) => {
    if (detail.pricelist_id === pricelistId && !detail.deleted_at) {
      detail.deleted_at = getCurrentTimestamp();
      detail.deleted_by_id = deletedById;
      deletedCount++;
    }
  });

  return deletedCount;
};

// RESTORE - กู้คืน RequestForPricingDetail ที่ถูกลบ
export const restoreRequestForPricingDetail = (id: string): boolean => {
  const index = requestForPricingDetails.findIndex(
    (detail) => detail.id === id
  );

  if (index === -1) {
    return false;
  }

  if (requestForPricingDetails[index].deleted_at) {
    requestForPricingDetails[index] = {
      ...requestForPricingDetails[index],
      deleted_at: null,
      deleted_by_id: null,
    };
    return true;
  }

  return false;
};

// RESTORE - กู้คืน RequestForPricingDetail ตาม request_for_pricing_id
export const restoreRequestForPricingDetailsByRequestId = (
  requestId: string
): number => {
  let restoredCount = 0;

  requestForPricingDetails.forEach((detail) => {
    if (detail.request_for_pricing_id === requestId && detail.deleted_at) {
      detail.deleted_at = null;
      detail.deleted_by_id = null;
      restoredCount++;
    }
  });

  return restoredCount;
};

// RESTORE - กู้คืน RequestForPricingDetail ตาม vendor_id
export const restoreRequestForPricingDetailsByVendorId = (
  vendorId: string
): number => {
  let restoredCount = 0;

  requestForPricingDetails.forEach((detail) => {
    if (detail.vendor_id === vendorId && detail.deleted_at) {
      detail.deleted_at = null;
      detail.deleted_by_id = null;
      restoredCount++;
    }
  });

  return restoredCount;
};

// RESTORE - กู้คืน RequestForPricingDetail ตาม pricelist_id
export const restoreRequestForPricingDetailsByPricelistId = (
  pricelistId: string
): number => {
  let restoredCount = 0;

  requestForPricingDetails.forEach((detail) => {
    if (detail.pricelist_id === pricelistId && detail.deleted_at) {
      detail.deleted_at = null;
      detail.deleted_by_id = null;
      restoredCount++;
    }
  });

  return restoredCount;
};

// Utility function สำหรับล้างข้อมูลทั้งหมด (ใช้สำหรับ testing)
export const clearAllRequestForPricingDetails = (): void => {
  requestForPricingDetails.length = 0;
};

// Utility function สำหรับนับจำนวน RequestForPricingDetail
export const getRequestForPricingDetailCount = (): number => {
  return requestForPricingDetails.length;
};

// Utility function สำหรับนับจำนวน RequestForPricingDetail ตาม request_for_pricing_id
export const getRequestForPricingDetailCountByRequestId = (
  requestId: string
): number => {
  return requestForPricingDetails.filter(
    (detail) => detail.request_for_pricing_id === requestId
  ).length;
};

// Utility function สำหรับนับจำนวน RequestForPricingDetail ตาม vendor_id
export const getRequestForPricingDetailCountByVendorId = (
  vendorId: string
): number => {
  return requestForPricingDetails.filter(
    (detail) => detail.vendor_id === vendorId
  ).length;
};

// Utility function สำหรับนับจำนวน RequestForPricingDetail ตาม pricelist_id
export const getRequestForPricingDetailCountByPricelistId = (
  pricelistId: string
): number => {
  return requestForPricingDetails.filter(
    (detail) => detail.pricelist_id === pricelistId
  ).length;
};

// Utility function สำหรับตรวจสอบ RequestForPricingDetail ที่ถูกลบแล้ว
export const getDeletedRequestForPricingDetails =
  (): RequestForPricingDetail[] => {
    return requestForPricingDetails.filter(
      (detail) => detail.deleted_at !== null
    );
  };

// Utility function สำหรับตรวจสอบ RequestForPricingDetail ที่มี info
export const hasRequestForPricingDetailInfo = (id: string): boolean => {
  const detail = getRequestForPricingDetailById(id);
  return detail ? detail.info && detail.info !== null : false;
};

// Utility function สำหรับตรวจสอบ RequestForPricingDetail ที่มี dimension
export const hasRequestForPricingDetailDimension = (id: string): boolean => {
  const detail = getRequestForPricingDetailById(id);
  return detail ? detail.dimension && detail.dimension !== null : false;
};

// Utility function สำหรับตรวจสอบ RequestForPricingDetail ที่มี created_by_id
export const hasRequestForPricingDetailCreatedBy = (id: string): boolean => {
  const detail = getRequestForPricingDetailById(id);
  return detail
    ? !!(detail.created_by_id && (detail.created_by_id as string).trim() !== "")
    : false;
};

// Utility function สำหรับตรวจสอบ RequestForPricingDetail ที่มี updated_by_id
export const hasRequestForPricingDetailUpdatedBy = (id: string): boolean => {
  const detail = getRequestForPricingDetailById(id);
  return detail
    ? !!(detail.updated_by_id && (detail.updated_by_id as string).trim() !== "")
    : false;
};

// Utility function สำหรับตรวจสอบ RequestForPricingDetail ที่มี deleted_by_id
export const hasRequestForPricingDetailDeletedBy = (id: string): boolean => {
  const detail = getRequestForPricingDetailById(id);
  return detail
    ? !!(detail.deleted_by_id && (detail.deleted_by_id as string).trim() !== "")
    : false;
};

// Utility function สำหรับตรวจสอบ RequestForPricingDetail ที่มี created_at
export const hasRequestForPricingDetailCreatedAt = (id: string): boolean => {
  const detail = getRequestForPricingDetailById(id);
  return detail
    ? !!(detail.created_at && (detail.created_at as string).trim() !== "")
    : false;
};

// Utility function สำหรับตรวจสอบ RequestForPricingDetail ที่มี updated_at
export const hasRequestForPricingDetailUpdatedAt = (id: string): boolean => {
  const detail = getRequestForPricingDetailById(id);
  return detail
    ? !!(detail.updated_at && (detail.updated_at as string).trim() !== "")
    : false;
};

// Utility function สำหรับตรวจสอบ RequestForPricingDetail ที่มี deleted_at
export const hasRequestForPricingDetailDeletedAt = (id: string): boolean => {
  const detail = getRequestForPricingDetailById(id);
  return detail
    ? !!(detail.deleted_at && (detail.deleted_at as string).trim() !== "")
    : false;
};
