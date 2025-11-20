import { generateId, getCurrentTimestamp } from "@/libs/utils";
import { getUuidByName } from "./mapping.uuid";

export interface CountStock {
  id: string;
  count_stock_no: string;
  start_date: string;
  end_date: string;
  location_id: string;
  location_name: string;
  doc_status: "draft" | "submitted" | "approved" | "rejected" | "completed";
  // count_stock_type: "cycle" | "physical" | "random";
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

export const countStocks: CountStock[] = [
  {
    id: getUuidByName("COUNT_STOCK_01"),
    count_stock_no: "CS-2025-001",
    start_date: "2025-07-31T00:00:00.000Z",
    end_date: "2025-07-31T23:59:59.000Z",
    location_id: "loc_001",
    location_name: "Main Warehouse",
    doc_status: "draft",
    // count_stock_type: "cycle",
    description: "Monthly cycle count for main warehouse",
    note: "Regular monthly count",
    info: { category: "monthly", priority: "normal" },
    dimension: { area: "A1", section: "1" },
    doc_version: "1.0",
    created_at: "2025-07-31T06:00:00.000Z",
    created_by_id: getUuidByName("USER_ADMIN"),
    updated_at: "2025-07-31T06:00:00.000Z",
    updated_by_id: getUuidByName("USER_ADMIN"),
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("COUNT_STOCK_02"),
    count_stock_no: "CS-2025-002",
    start_date: "2025-08-01T00:00:00.000Z",
    end_date: "2025-08-01T23:59:59.000Z",
    location_id: "loc_002",
    location_name: "Secondary Warehouse",
    doc_status: "submitted",
    // count_stock_type: "physical",
    description: "Physical count for secondary warehouse",
    note: "Annual physical count",
    info: { category: "annual", priority: "high" },
    dimension: { area: "B1", section: "2" },
    doc_version: "1.0",
    created_at: "2025-07-31T07:00:00.000Z",
    created_by_id: getUuidByName("USER_ADMIN"),
    updated_at: "2025-07-31T07:00:00.000Z",
    updated_by_id: getUuidByName("USER_ADMIN"),
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("COUNT_STOCK_03"),
    count_stock_no: "CS-2025-003",
    start_date: "2025-08-02T00:00:00.000Z",
    end_date: "2025-08-02T23:59:59.000Z",
    location_id: "loc_003",
    location_name: "Retail Store",
    doc_status: "approved",
    // count_stock_type: "random",
    description: "Random count for retail store",
    note: "Spot check count",
    info: { category: "random", priority: "medium" },
    dimension: { area: "C1", section: "3" },
    doc_version: "1.0",
    created_at: "2025-07-31T08:00:00.000Z",
    created_by_id: getUuidByName("USER_ADMIN"),
    updated_at: "2025-07-31T08:00:00.000Z",
    updated_by_id: getUuidByName("USER_ADMIN"),
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("COUNT_STOCK_04"),
    count_stock_no: "CS-2025-004",
    start_date: "2025-08-05T00:00:00.000Z",
    end_date: "2025-08-05T23:59:59.000Z",
    location_id: "loc_004",
    location_name: "Distribution Center A",
    doc_status: "completed",
    // count_stock_type: "cycle",
    description: "Weekly cycle count for distribution center",
    note: "All items verified and updated",
    info: { category: "weekly", priority: "normal", variance_count: 5 },
    dimension: { area: "DC-A", section: "All" },
    doc_version: "1.0",
    created_at: "2025-08-01T09:00:00.000Z",
    created_by_id: getUuidByName("USER_ADMIN"),
    updated_at: "2025-08-05T18:00:00.000Z",
    updated_by_id: getUuidByName("USER_ADMIN"),
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("COUNT_STOCK_05"),
    count_stock_no: "CS-2025-005",
    start_date: "2025-08-10T00:00:00.000Z",
    end_date: "2025-08-10T23:59:59.000Z",
    location_id: "loc_005",
    location_name: "Cold Storage Facility",
    doc_status: "rejected",
    // count_stock_type: "physical",
    description: "Monthly physical count for cold storage",
    note: "Rejected due to temperature variations during count",
    info: { category: "monthly", priority: "high", rejection_reason: "equipment_malfunction" },
    dimension: { area: "CS-1", section: "Cold", temperature: "-18°C" },
    doc_version: "1.0",
    created_at: "2025-08-02T10:00:00.000Z",
    created_by_id: getUuidByName("USER_ADMIN"),
    updated_at: "2025-08-10T16:30:00.000Z",
    updated_by_id: getUuidByName("USER_ADMIN"),
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("COUNT_STOCK_06"),
    count_stock_no: "CS-2025-006",
    start_date: "2025-08-15T00:00:00.000Z",
    end_date: "2025-08-15T23:59:59.000Z",
    location_id: "loc_006",
    location_name: "Electronics Department",
    doc_status: "approved",
    // count_stock_type: "random",
    description: "Random audit count for high-value electronics",
    note: "Approved for variance adjustments",
    info: { category: "audit", priority: "high", audit_type: "high_value_items" },
    dimension: { area: "ELEC", section: "Premium" },
    doc_version: "1.0",
    created_at: "2025-08-03T11:00:00.000Z",
    created_by_id: getUuidByName("USER_ADMIN"),
    updated_at: "2025-08-15T14:15:00.000Z",
    updated_by_id: getUuidByName("USER_ADMIN"),
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("COUNT_STOCK_07"),
    count_stock_no: "CS-2025-007",
    start_date: "2025-08-20T00:00:00.000Z",
    end_date: "2025-08-22T23:59:59.000Z",
    location_id: "loc_007",
    location_name: "Automotive Parts Warehouse",
    doc_status: "submitted",
    // count_stock_type: "physical",
    description: "Quarterly physical inventory for automotive parts",
    note: "3-day comprehensive count including all SKUs",
    info: {
      category: "quarterly",
      priority: "high",
      sku_count: 2500,
      team_size: 8,
      days_planned: 3
    },
    dimension: { area: "AUTO", section: "All", zones: ["A1", "A2", "A3", "B1", "B2"] },
    doc_version: "1.0",
    created_at: "2025-08-04T08:00:00.000Z",
    created_by_id: getUuidByName("USER_ADMIN"),
    updated_at: "2025-08-20T17:30:00.000Z",
    updated_by_id: getUuidByName("USER_ADMIN"),
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("COUNT_STOCK_08"),
    count_stock_no: "CS-2025-008",
    start_date: "2025-08-25T00:00:00.000Z",
    end_date: "2025-08-25T23:59:59.000Z",
    location_id: "loc_008",
    location_name: "Fashion Retail Store",
    doc_status: "draft",
    // count_stock_type: "cycle",
    description: "Seasonal inventory count for fashion items",
    note: "Focus on summer clearance and fall collection items",
    info: {
      category: "seasonal",
      priority: "medium",
      season: "summer_to_fall_transition",
      clearance_items: 150,
      new_collection: 200
    },
    dimension: { area: "FASHION", section: "Main Floor", floors: ["Ground", "First"] },
    doc_version: "1.0",
    created_at: "2025-08-05T12:00:00.000Z",
    created_by_id: getUuidByName("USER_ADMIN"),
    updated_at: "2025-08-05T12:00:00.000Z",
    updated_by_id: getUuidByName("USER_ADMIN"),
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("COUNT_STOCK_09"),
    count_stock_no: "CS-2025-009",
    start_date: "2025-08-28T00:00:00.000Z",
    end_date: "2025-08-28T23:59:59.000Z",
    location_id: "loc_009",
    location_name: "Pharmacy Storage",
    doc_status: "completed",
    // count_stock_type: "physical",
    description: "Monthly controlled substances inventory",
    note: "All controlled substances verified with dual verification",
    info: {
      category: "controlled_substances",
      priority: "critical",
      dual_verification: true,
      regulatory_compliance: "FDA_DEA",
      auditor_present: true
    },
    dimension: {
      area: "PHARM",
      section: "Controlled",
      vault: "Secure_A",
      temperature_controlled: true
    },
    doc_version: "1.0",
    created_at: "2025-08-06T13:00:00.000Z",
    created_by_id: getUuidByName("USER_ADMIN"),
    updated_at: "2025-08-28T20:45:00.000Z",
    updated_by_id: getUuidByName("USER_ADMIN"),
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("COUNT_STOCK_10"),
    count_stock_no: "CS-2025-010",
    start_date: "2025-09-01T00:00:00.000Z",
    end_date: "2025-09-01T23:59:59.000Z",
    location_id: "loc_010",
    location_name: "Book Warehouse",
    doc_status: "approved",
    // count_stock_type: "random",
    description: "Random sample count for book inventory",
    note: "Statistical sampling approved for large inventory",
    info: {
      category: "statistical_sampling",
      priority: "medium",
      total_books: 50000,
      sample_size: 500,
      confidence_level: "95%",
      sampling_method: "systematic_random"
    },
    dimension: {
      area: "BOOKS",
      section: "All",
      floors: ["Ground", "Mezzanine"],
      categories: ["Fiction", "Non-Fiction", "Academic", "Children"]
    },
    doc_version: "1.0",
    created_at: "2025-08-07T14:00:00.000Z",
    created_by_id: getUuidByName("USER_ADMIN"),
    updated_at: "2025-09-01T19:20:00.000Z",
    updated_by_id: getUuidByName("USER_ADMIN"),
    deleted_at: null,
    deleted_by_id: null,
  },
];

// CREATE - สร้าง CountStock ใหม่
export const createCountStock = (
  countStockData: Omit<CountStock, "id" | "created_at" | "updated_at">
): CountStock => {
  const newCountStock: CountStock = {
    ...countStockData,
    id: generateId(),
    created_at: getCurrentTimestamp(),
    updated_at: getCurrentTimestamp(),
  };

  countStocks.push(newCountStock);
  return newCountStock;
};

// READ - อ่าน CountStock ทั้งหมด
export const getAllCountStocks = (): CountStock[] => {
  return [...countStocks];
};

// READ - อ่าน CountStock ตาม ID
export const getCountStockById = (id: string): CountStock | undefined => {
  return countStocks.find((countStock) => countStock.id === id);
};

// READ - อ่าน CountStock ตาม count_stock_no
export const getCountStockByNo = (
  countStockNo: string
): CountStock | undefined => {
  return countStocks.find(
    (countStock) => countStock.count_stock_no === countStockNo
  );
};

// READ - อ่าน CountStock ตาม location_id
export const getCountStocksByLocationId = (
  locationId: string
): CountStock[] => {
  return countStocks.filter(
    (countStock) => countStock.location_id === locationId
  );
};

// READ - อ่าน CountStock ตาม doc_status
export const getCountStocksByStatus = (
  docStatus: CountStock["doc_status"]
): CountStock[] => {
  return countStocks.filter(
    (countStock) => countStock.doc_status === docStatus
  );
};

// READ - อ่าน CountStock ตาม created_by_id
export const getCountStocksByCreatedBy = (
  createdById: string
): CountStock[] => {
  return countStocks.filter(
    (countStock) => countStock.created_by_id === createdById
  );
};

// READ - อ่าน CountStock ตามช่วงเวลา
export const getCountStocksByDateRange = (
  startDate: string,
  endDate: string
): CountStock[] => {
  const start = new Date(startDate);
  const end = new Date(endDate);

  return countStocks.filter((countStock) => {
    const countStartDate = new Date(countStock.start_date);
    const countEndDate = new Date(countStock.end_date);

    return countStartDate >= start && countEndDate <= end;
  });
};

// READ - อ่าน CountStock ที่ไม่ถูกลบ
export const getActiveCountStocks = (): CountStock[] => {
  return countStocks.filter((countStock) => !countStock.deleted_at);
};

// READ - อ่าน CountStock ที่ถูกลบ
export const getDeletedCountStocks = (): CountStock[] => {
  return countStocks.filter((countStock) => countStock.deleted_at);
};

// UPDATE - อัปเดต CountStock
export const updateCountStock = (
  id: string,
  updateData: Partial<Omit<CountStock, "id" | "created_at" | "created_by_id">>,
  updatedById: string
): CountStock | null => {
  const index = countStocks.findIndex((countStock) => countStock.id === id);

  if (index === -1) {
    return null;
  }

  countStocks[index] = {
    ...countStocks[index],
    ...updateData,
    updated_at: getCurrentTimestamp(),
    updated_by_id: updatedById,
  };

  return countStocks[index];
};

// UPDATE - อัปเดต CountStock status
export const updateCountStockStatus = (
  id: string,
  docStatus: CountStock["doc_status"],
  updatedById: string
): CountStock | null => {
  return updateCountStock(id, { doc_status: docStatus }, updatedById);
};

// UPDATE - อัปเดต CountStock description
export const updateCountStockDescription = (
  id: string,
  description: string,
  updatedById: string
): CountStock | null => {
  return updateCountStock(id, { description }, updatedById);
};

// UPDATE - อัปเดต CountStock note
export const updateCountStockNote = (
  id: string,
  note: string,
  updatedById: string
): CountStock | null => {
  return updateCountStock(id, { note }, updatedById);
};

// UPDATE - อัปเดต CountStock info
export const updateCountStockInfo = (
  id: string,
  info: any,
  updatedById: string
): CountStock | null => {
  return updateCountStock(id, { info }, updatedById);
};

// UPDATE - อัปเดต CountStock dimension
export const updateCountStockDimension = (
  id: string,
  dimension: any,
  updatedById: string
): CountStock | null => {
  return updateCountStock(id, { dimension }, updatedById);
};

// UPDATE - อัปเดต CountStock โดย count_stock_no
export const updateCountStockByNo = (
  countStockNo: string,
  updateData: Partial<
    Omit<CountStock, "id" | "count_stock_no" | "created_at" | "created_by_id">
  >,
  updatedById: string
): CountStock | null => {
  const countStock = getCountStockByNo(countStockNo);
  if (!countStock) return null;

  return updateCountStock(countStock.id, updateData, updatedById);
};

// DELETE - ลบ CountStock (soft delete)
export const deleteCountStock = (id: string, deletedById: string): boolean => {
  const index = countStocks.findIndex((countStock) => countStock.id === id);

  if (index === -1) {
    return false;
  }

  countStocks[index] = {
    ...countStocks[index],
    deleted_at: getCurrentTimestamp(),
    deleted_by_id: deletedById,
  };

  return true;
};

// DELETE - ลบ CountStock แบบถาวร
export const hardDeleteCountStock = (id: string): boolean => {
  const index = countStocks.findIndex((countStock) => countStock.id === id);

  if (index === -1) {
    return false;
  }

  countStocks.splice(index, 1);
  return true;
};

// DELETE - ลบ CountStock ตาม count_stock_no
export const deleteCountStockByNo = (
  countStockNo: string,
  deletedById: string
): boolean => {
  const countStock = countStocks.find(
    (cs) => cs.count_stock_no === countStockNo
  );
  if (!countStock) return false;

  return deleteCountStock(countStock.id, deletedById);
};

// DELETE - ลบ CountStock ตาม location_id
export const deleteCountStocksByLocationId = (
  locationId: string,
  deletedById: string
): number => {
  let deletedCount = 0;

  countStocks.forEach((countStock) => {
    if (countStock.location_id === locationId && !countStock.deleted_at) {
      countStock.deleted_at = getCurrentTimestamp();
      countStock.deleted_by_id = deletedById;
      deletedCount++;
    }
  });

  return deletedCount;
};

// RESTORE - กู้คืน CountStock ที่ถูกลบ
export const restoreCountStock = (
  id: string,
  restoredById: string
): CountStock | null => {
  const index = countStocks.findIndex((countStock) => countStock.id === id);

  if (index === -1) {
    return null;
  }

  countStocks[index] = {
    ...countStocks[index],
    deleted_at: null,
    deleted_by_id: null,
    updated_at: getCurrentTimestamp(),
    updated_by_id: restoredById,
  };

  return countStocks[index];
};

// Utility function สำหรับล้างข้อมูลทั้งหมด (ใช้สำหรับ testing)
export const clearAllCountStocks = (): void => {
  countStocks.length = 0;
};

// Utility function สำหรับนับจำนวน CountStock
export const getCountStockCount = (): number => {
  return countStocks.length;
};

// Utility function สำหรับนับจำนวน CountStock ที่ไม่ถูกลบ
export const getActiveCountStockCount = (): number => {
  return countStocks.filter((countStock) => !countStock.deleted_at).length;
};

// Utility function สำหรับนับจำนวน CountStock ตาม status
export const getCountStockCountByStatus = (
  docStatus: CountStock["doc_status"]
): number => {
  return countStocks.filter(
    (countStock) =>
      countStock.doc_status === docStatus && !countStock.deleted_at
  ).length;
};

// Utility function สำหรับนับจำนวน CountStock ตาม type
export const getCountStockCountByType = (
  countStockType: CountStock["count_stock_type"]
): number => {
  return countStocks.filter(
    (countStock) =>
      countStock.count_stock_type === countStockType && !countStock.deleted_at
  ).length;
};

// Utility function สำหรับนับจำนวน CountStock ตาม location
export const getCountStockCountByLocation = (locationId: string): number => {
  return countStocks.filter(
    (countStock) =>
      countStock.location_id === locationId && !countStock.deleted_at
  ).length;
};

// Utility function สำหรับค้นหา CountStock แบบ advanced search
export const searchCountStocks = (searchCriteria: {
  count_stock_no?: string;
  location_id?: string;
  location_name?: string;
  doc_status?: CountStock["doc_status"];
  count_stock_type?: CountStock["count_stock_type"];
  description?: string;
  note?: string;
  created_by_id?: string;
  is_deleted?: boolean;
  start_date?: string;
  end_date?: string;
}): CountStock[] => {
  return countStocks.filter((countStock) => {
    // ตรวจสอบ count_stock_no
    if (
      searchCriteria.count_stock_no &&
      !countStock.count_stock_no
        .toLowerCase()
        .includes(searchCriteria.count_stock_no.toLowerCase())
    ) {
      return false;
    }

    // ตรวจสอบ location_id
    if (
      searchCriteria.location_id &&
      countStock.location_id !== searchCriteria.location_id
    ) {
      return false;
    }

    // ตรวจสอบ location_name
    if (
      searchCriteria.location_name &&
      !countStock.location_name
        .toLowerCase()
        .includes(searchCriteria.location_name.toLowerCase())
    ) {
      return false;
    }

    // ตรวจสอบ doc_status
    if (
      searchCriteria.doc_status &&
      countStock.doc_status !== searchCriteria.doc_status
    ) {
      return false;
    }

    // ตรวจสอบ count_stock_type
    if (
      searchCriteria.count_stock_type &&
      countStock.count_stock_type !== searchCriteria.count_stock_type
    ) {
      return false;
    }

    // ตรวจสอบ description
    if (
      searchCriteria.description &&
      !countStock.description
        .toLowerCase()
        .includes(searchCriteria.description.toLowerCase())
    ) {
      return false;
    }

    // ตรวจสอบ note
    if (
      searchCriteria.note &&
      !countStock.note.toLowerCase().includes(searchCriteria.note.toLowerCase())
    ) {
      return false;
    }

    // ตรวจสอบ created_by_id
    if (
      searchCriteria.created_by_id &&
      countStock.created_by_id !== searchCriteria.created_by_id
    ) {
      return false;
    }

    // ตรวจสอบสถานะการลบ
    if (searchCriteria.is_deleted !== undefined) {
      const isDeleted = !!countStock.deleted_at;
      if (isDeleted !== searchCriteria.is_deleted) {
        return false;
      }
    }

    // ตรวจสอบช่วงเวลา
    if (searchCriteria.start_date || searchCriteria.end_date) {
      const countStockDate = new Date(countStock.created_at);

      if (searchCriteria.start_date) {
        const startDate = new Date(searchCriteria.start_date);
        if (countStockDate < startDate) {
          return false;
        }
      }

      if (searchCriteria.end_date) {
        const endDate = new Date(searchCriteria.end_date);
        if (countStockDate > endDate) {
          return false;
        }
      }
    }

    return true;
  });
};

// Utility function สำหรับตรวจสอบ count_stock_no ซ้ำ
export const isCountStockNoExists = (countStockNo: string): boolean => {
  return countStocks.some(
    (countStock) =>
      countStock.count_stock_no === countStockNo && !countStock.deleted_at
  );
};

// Utility function สำหรับตรวจสอบ count_stock_no ซ้ำทั้งหมด
export const isCountStockNoExistsAll = (countStockNo: string): boolean => {
  return countStocks.some(
    (countStock) => countStock.count_stock_no === countStockNo
  );
};

// Utility function สำหรับสร้าง count_stock_no ใหม่
export const generateCountStockNo = (prefix: string = "CS"): string => {
  const now = new Date();
  const year = now.getFullYear();
  const month = (now.getMonth() + 1).toString().padStart(2, "0");

  // หา sequence number สูงสุดของเดือนนี้
  const currentMonthStocks = countStocks.filter((cs) => {
    const stockDate = new Date(cs.created_at);
    return (
      stockDate.getFullYear() === year &&
      stockDate.getMonth() + 1 === parseInt(month)
    );
  });

  const maxSequence = Math.max(
    0,
    ...currentMonthStocks.map((cs) => {
      const match = cs.count_stock_no.match(/\d+$/);
      return match ? parseInt(match[0]) : 0;
    })
  );

  const nextSequence = maxSequence + 1;
  return `${prefix}-${year}-${month}-${nextSequence
    .toString()
    .padStart(3, "0")}`;
};
