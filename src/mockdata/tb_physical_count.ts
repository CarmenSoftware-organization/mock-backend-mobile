import { generateId, getCurrentTimestamp } from "@/libs/utils";
import { getUuidByName } from "./mapping.uuid";

export interface PhysicalCount {
  id: string;
  counting_period_from_date: string;
  counting_period_to_date: string;
  include_location_not_count: boolean;
  status: "draft" | "counting" | "completed";
  description: string | null;
  note: string | null;
  info: any;
  doc_version: string;
  created_at: string;
  created_by_id: string;
  updated_at: string;
  updated_by_id: string | null;
  deleted_at: string | null;
  deleted_by_id: string | null;
}

export const physicalCounts: PhysicalCount[] = [
  {
    id: getUuidByName("PHYSICAL_COUNT_01"),
    counting_period_from_date: "2024-01-01T00:00:00.000Z",
    counting_period_to_date: "2024-01-31T23:59:59.999Z",
    include_location_not_count: false,
    status: "counting",
    description: "Physical count for January 2024",
    note: "Comprehensive physical count for all locations",
    info: { category: "inventory", type: "monthly", priority: "high" },
    doc_version: "1.0",
    created_at: "2024-01-01T00:00:00.000Z",
    created_by_id: getUuidByName("USER_01"),
    updated_at: "2024-01-15T08:30:00.000Z",
    updated_by_id: getUuidByName("USER_02"),
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("PHYSICAL_COUNT_02"),
    counting_period_from_date: "2024-02-01T00:00:00.000Z",
    counting_period_to_date: "2024-02-29T23:59:59.999Z",
    include_location_not_count: true,
    status: "draft",
    description: "Physical count for February 2024",
    note: "Including locations that are not counted regularly",
    info: { category: "inventory", type: "monthly", priority: "medium" },
    doc_version: "1.0",
    created_at: "2024-02-01T00:00:00.000Z",
    created_by_id: getUuidByName("USER_02"),
    updated_at: "2024-02-01T00:00:00.000Z",
    updated_by_id: getUuidByName("USER_02"),
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("PHYSICAL_COUNT_03"),
    counting_period_from_date: "2024-03-01T00:00:00.000Z",
    counting_period_to_date: "2024-03-31T23:59:59.999Z",
    include_location_not_count: false,
    status: "completed",
    description: "Physical count for March 2024",
    note: "Completed physical count with reconciliation",
    info: { category: "inventory", type: "monthly", priority: "high" },
    doc_version: "1.1",
    created_at: "2024-03-01T00:00:00.000Z",
    created_by_id: getUuidByName("USER_03"),
    updated_at: "2024-03-31T23:59:00.000Z",
    updated_by_id: getUuidByName("USER_01"),
    deleted_at: null,
    deleted_by_id: null,
  },
];

// CREATE - สร้าง PhysicalCount ใหม่
export const createPhysicalCount = (
  data: Omit<PhysicalCount, "id" | "created_at" | "updated_at">
): PhysicalCount => {
  const newPhysicalCount: PhysicalCount = {
    ...data,
    id: generateId(),
    created_at: getCurrentTimestamp(),
    updated_at: getCurrentTimestamp(),
  };

  physicalCounts.push(newPhysicalCount);
  return newPhysicalCount;
};

// CREATE - สร้าง PhysicalCount พร้อมค่าเริ่มต้น
export const createPhysicalCountWithDefaults = (
  fromDate: string,
  toDate: string,
  createdById: string,
  description?: string
): PhysicalCount => {
  return createPhysicalCount({
    counting_period_from_date: fromDate,
    counting_period_to_date: toDate,
    include_location_not_count: false,
    status: "draft",
    description: description || null,
    note: null,
    info: null,
    doc_version: "1.0",
    created_by_id: createdById,
    updated_by_id: createdById,
    deleted_at: null,
    deleted_by_id: null,
  });
};

// READ - อ่าน PhysicalCount ทั้งหมด
export const getAllPhysicalCounts = (): PhysicalCount[] => {
  return physicalCounts.filter(count => !count.deleted_at);
};

// READ - อ่าน PhysicalCount ตาม ID
export const getPhysicalCountById = (id: string): PhysicalCount | null => {
  const count = physicalCounts.find(c => c.id === id && !c.deleted_at);
  return count || null;
};

// READ - อ่าน PhysicalCount ตาม status
export const getPhysicalCountsByStatus = (status: "draft" | "counting" | "completed"): PhysicalCount[] => {
  return physicalCounts.filter(count =>
    count.status === status && !count.deleted_at
  );
};

// READ - อ่าน PhysicalCount ตาม created_by_id
export const getPhysicalCountsByCreatedBy = (createdById: string): PhysicalCount[] => {
  return physicalCounts.filter(count =>
    count.created_by_id === createdById && !count.deleted_at
  );
};

// READ - อ่าน PhysicalCount ตาม updated_by_id
export const getPhysicalCountsByUpdatedBy = (updatedById: string): PhysicalCount[] => {
  return physicalCounts.filter(count =>
    count.updated_by_id === updatedById && !count.deleted_at
  );
};

// READ - อ่าน PhysicalCount ตาม include_location_not_count
export const getPhysicalCountsByIncludeLocationNotCount = (includeLocationNotCount: boolean): PhysicalCount[] => {
  return physicalCounts.filter(count =>
    count.include_location_not_count === includeLocationNotCount && !count.deleted_at
  );
};

// READ - อ่าน PhysicalCount ตามช่วงวันที่นับ
export const getPhysicalCountsByCountingPeriod = (
  fromDate: string,
  toDate: string
): PhysicalCount[] => {
  return physicalCounts.filter(count => {
    if (count.deleted_at) return false;
    const countFromDate = new Date(count.counting_period_from_date);
    const countToDate = new Date(count.counting_period_to_date);
    const searchFromDate = new Date(fromDate);
    const searchToDate = new Date(toDate);

    // Check if counting periods overlap
    return countFromDate <= searchToDate && countToDate >= searchFromDate;
  });
};

// READ - อ่าน PhysicalCount ตามช่วงวันที่สร้าง
export const getPhysicalCountsByDateRange = (startDate: string, endDate: string): PhysicalCount[] => {
  return physicalCounts.filter(count => {
    if (count.deleted_at) return false;
    const createdDate = new Date(count.created_at);
    const start = new Date(startDate);
    const end = new Date(endDate);
    return createdDate >= start && createdDate <= end;
  });
};

// READ - อ่าน PhysicalCount ตาม doc_version
export const getPhysicalCountsByDocVersion = (docVersion: string): PhysicalCount[] => {
  return physicalCounts.filter(count =>
    count.doc_version === docVersion && !count.deleted_at
  );
};

// UPDATE - อัปเดต PhysicalCount
export const updatePhysicalCount = (
  id: string,
  data: Partial<Omit<PhysicalCount, "id" | "created_at" | "created_by_id">>
): PhysicalCount | null => {
  const index = physicalCounts.findIndex(count => count.id === id && !count.deleted_at);

  if (index === -1) {
    return null;
  }

  physicalCounts[index] = {
    ...physicalCounts[index],
    ...data,
    updated_at: getCurrentTimestamp(),
  };

  return physicalCounts[index];
};

// UPDATE - อัปเดต status ของ PhysicalCount
export const updatePhysicalCountStatus = (
  id: string,
  status: "draft" | "counting" | "completed",
  updatedById: string
): PhysicalCount | null => {
  return updatePhysicalCount(id, { status, updated_by_id: updatedById });
};

// UPDATE - อัปเดต counting period ของ PhysicalCount
export const updatePhysicalCountPeriod = (
  id: string,
  fromDate: string,
  toDate: string,
  updatedById: string
): PhysicalCount | null => {
  return updatePhysicalCount(id, {
    counting_period_from_date: fromDate,
    counting_period_to_date: toDate,
    updated_by_id: updatedById
  });
};

// UPDATE - อัปเดต include_location_not_count
export const updatePhysicalCountIncludeLocationNotCount = (
  id: string,
  includeLocationNotCount: boolean,
  updatedById: string
): PhysicalCount | null => {
  return updatePhysicalCount(id, {
    include_location_not_count: includeLocationNotCount,
    updated_by_id: updatedById
  });
};

// UPDATE - อัปเดต description
export const updatePhysicalCountDescription = (
  id: string,
  description: string,
  updatedById: string
): PhysicalCount | null => {
  return updatePhysicalCount(id, { description, updated_by_id: updatedById });
};

// UPDATE - อัปเดต note
export const updatePhysicalCountNote = (
  id: string,
  note: string,
  updatedById: string
): PhysicalCount | null => {
  return updatePhysicalCount(id, { note, updated_by_id: updatedById });
};

// UPDATE - อัปเดต info
export const updatePhysicalCountInfo = (
  id: string,
  info: any,
  updatedById: string
): PhysicalCount | null => {
  return updatePhysicalCount(id, { info, updated_by_id: updatedById });
};

// UPDATE - อัปเดต doc_version
export const updatePhysicalCountDocVersion = (
  id: string,
  docVersion: string,
  updatedById: string
): PhysicalCount | null => {
  return updatePhysicalCount(id, { doc_version: docVersion, updated_by_id: updatedById });
};

// DELETE - Soft delete PhysicalCount
export const softDeletePhysicalCount = (id: string, deletedById: string): PhysicalCount | null => {
  const count = getPhysicalCountById(id);
  if (!count) return null;

  count.deleted_at = getCurrentTimestamp();
  count.deleted_by_id = deletedById;
  count.updated_at = getCurrentTimestamp();
  count.updated_by_id = deletedById;

  return count;
};

// DELETE - Hard delete PhysicalCount
export const hardDeletePhysicalCount = (id: string): boolean => {
  const index = physicalCounts.findIndex(count => count.id === id);

  if (index === -1) {
    return false;
  }

  physicalCounts.splice(index, 1);
  return true;
};

// DELETE - ลบ PhysicalCount หลายรายการ
export const deleteMultiplePhysicalCounts = (
  ids: string[],
  deletedById: string
): PhysicalCount[] => {
  const deletedCounts: PhysicalCount[] = [];

  ids.forEach(id => {
    const deletedCount = softDeletePhysicalCount(id, deletedById);
    if (deletedCount) {
      deletedCounts.push(deletedCount);
    }
  });

  return deletedCounts;
};

// DELETE - ลบ PhysicalCount ตาม status
export const deletePhysicalCountsByStatus = (
  status: "draft" | "counting" | "completed",
  deletedById: string
): boolean => {
  const counts = getPhysicalCountsByStatus(status);
  let deletedCount = 0;

  counts.forEach(count => {
    if (softDeletePhysicalCount(count.id, deletedById)) {
      deletedCount++;
    }
  });

  return deletedCount > 0;
};

// DELETE - ลบ PhysicalCount ตาม created_by_id
export const deletePhysicalCountsByCreatedBy = (
  createdById: string,
  deletedById: string
): boolean => {
  const counts = getPhysicalCountsByCreatedBy(createdById);
  let deletedCount = 0;

  counts.forEach(count => {
    if (softDeletePhysicalCount(count.id, deletedById)) {
      deletedCount++;
    }
  });

  return deletedCount > 0;
};

// RESTORE - กู้คืน PhysicalCount ที่ถูก soft delete
export const restorePhysicalCount = (id: string): PhysicalCount | null => {
  const count = physicalCounts.find(c => c.id === id);
  if (!count || !count.deleted_at) return null;

  count.deleted_at = null;
  count.deleted_by_id = null;
  count.updated_at = getCurrentTimestamp();

  return count;
};

// ADVANCED SEARCH - ค้นหา PhysicalCount แบบขั้นสูง
export const searchPhysicalCounts = (criteria: {
  status?: "draft" | "counting" | "completed";
  include_location_not_count?: boolean;
  description?: string;
  note?: string;
  doc_version?: string;
  created_by_id?: string;
  updated_by_id?: string;
  counting_period_from?: string;
  counting_period_to?: string;
  start_date?: string;
  end_date?: string;
}): PhysicalCount[] => {
  return physicalCounts.filter(count => {
    if (count.deleted_at) return false;

    if (criteria.status && count.status !== criteria.status) {
      return false;
    }

    if (criteria.include_location_not_count !== undefined &&
        count.include_location_not_count !== criteria.include_location_not_count) {
      return false;
    }

    if (criteria.description && count.description &&
        !count.description.toLowerCase().includes(criteria.description.toLowerCase())) {
      return false;
    }

    if (criteria.note && count.note &&
        !count.note.toLowerCase().includes(criteria.note.toLowerCase())) {
      return false;
    }

    if (criteria.doc_version && count.doc_version !== criteria.doc_version) {
      return false;
    }

    if (criteria.created_by_id && count.created_by_id !== criteria.created_by_id) {
      return false;
    }

    if (criteria.updated_by_id && count.updated_by_id !== criteria.updated_by_id) {
      return false;
    }

    if (criteria.counting_period_from || criteria.counting_period_to) {
      const countFromDate = new Date(count.counting_period_from_date);
      const countToDate = new Date(count.counting_period_to_date);

      if (criteria.counting_period_from) {
        const searchFromDate = new Date(criteria.counting_period_from);
        if (countFromDate < searchFromDate) return false;
      }

      if (criteria.counting_period_to) {
        const searchToDate = new Date(criteria.counting_period_to);
        if (countToDate > searchToDate) return false;
      }
    }

    if (criteria.start_date || criteria.end_date) {
      const createdDate = new Date(count.created_at);
      if (criteria.start_date && createdDate < new Date(criteria.start_date)) return false;
      if (criteria.end_date && createdDate > new Date(criteria.end_date)) return false;
    }

    return true;
  });
};

// UTILITY FUNCTIONS - ฟังก์ชันเสริม
export const getPhysicalCountCount = (): number => {
  return physicalCounts.filter(count => !count.deleted_at).length;
};

export const getPhysicalCountCountByStatus = (status: "draft" | "counting" | "completed"): number => {
  return physicalCounts.filter(count =>
    count.status === status && !count.deleted_at
  ).length;
};

export const getPhysicalCountCountByIncludeLocationNotCount = (includeLocationNotCount: boolean): number => {
  return physicalCounts.filter(count =>
    count.include_location_not_count === includeLocationNotCount && !count.deleted_at
  ).length;
};

export const getPhysicalCountCountByDocVersion = (docVersion: string): number => {
  return physicalCounts.filter(count =>
    count.doc_version === docVersion && !count.deleted_at
  ).length;
};

export const isPhysicalCountExists = (id: string): boolean => {
  return physicalCounts.some(count => count.id === id && !count.deleted_at);
};

export const hasPhysicalCountsByCreatedBy = (createdById: string): boolean => {
  return physicalCounts.some(count =>
    count.created_by_id === createdById && !count.deleted_at
  );
};

export const hasPhysicalCountsByStatus = (status: "draft" | "counting" | "completed"): boolean => {
  return physicalCounts.some(count =>
    count.status === status && !count.deleted_at
  );
};

export const getActivePhysicalCounts = (): PhysicalCount[] => {
  return physicalCounts.filter(count =>
    (count.status === "counting" || count.status === "draft") && !count.deleted_at
  );
};

export const getCompletedPhysicalCounts = (): PhysicalCount[] => {
  return physicalCounts.filter(count =>
    count.status === "completed" && !count.deleted_at
  );
};

export const getCurrentPhysicalCounts = (currentDate?: string): PhysicalCount[] => {
  const now = currentDate ? new Date(currentDate) : new Date();

  return physicalCounts.filter(count => {
    if (count.deleted_at) return false;
    const fromDate = new Date(count.counting_period_from_date);
    const toDate = new Date(count.counting_period_to_date);
    return fromDate <= now && now <= toDate;
  });
};

export const clearAllPhysicalCounts = (): void => {
  physicalCounts.length = 0;
};


export const getPhysicalCountsOnCounting = (): PhysicalCount | null => {
  return physicalCounts.find(count =>
    count.status === "counting" && !count.deleted_at
  ) || null;
};