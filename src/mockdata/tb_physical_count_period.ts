import { generateId, getCurrentTimestamp } from "@/libs/utils";
import { getUuidByName } from "./mapping.uuid";

export interface PhysicalCountPeriod {
  id: string;
  counting_period_from_date: string;
  counting_period_to_date: string;
  status: "draft" | "counting" | "completed";
    // description: string | null;
    // note: string | null;
    // info: any;
    // doc_version: string;
  created_at: string;
  created_by_id: string;
  updated_at: string;
  updated_by_id: string | null;
  deleted_at: string | null;
  deleted_by_id: string | null;
}

export const physicalCountPeriod: PhysicalCountPeriod[] = [
  {
    id: getUuidByName("PHYSICAL_COUNT_PERIOD_01"),
    counting_period_from_date: "2024-01-01T00:00:00.000Z",
    counting_period_to_date: "2024-01-31T23:59:59.999Z",
    status: "counting",
    // description: "Physical count for January 2024",
    // note: "Comprehensive physical count for all locations",
    // info: { category: "inventory", type: "monthly", priority: "high" },
    // doc_version: "1.0",
    created_at: "2024-01-01T00:00:00.000Z",
    created_by_id: getUuidByName("USER_01"),
    updated_at: "2024-01-15T08:30:00.000Z",
    updated_by_id: getUuidByName("USER_02"),
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("PHYSICAL_COUNT_PERIOD_02"),
    counting_period_from_date: "2024-02-01T00:00:00.000Z",
    counting_period_to_date: "2024-02-29T23:59:59.999Z",
    status: "draft",
    // description: "Physical count for February 2024",
    //  note: "Including locations that are not counted regularly",
    //  info: { category: "inventory", type: "monthly", priority: "medium" },
    // doc_version: "1.0",
    created_at: "2024-02-01T00:00:00.000Z",
    created_by_id: getUuidByName("USER_02"),
    updated_at: "2024-02-01T00:00:00.000Z",
    updated_by_id: getUuidByName("USER_02"),
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("PHYSICAL_COUNT_PERIOD_03"),
    counting_period_from_date: "2024-03-01T00:00:00.000Z",
    counting_period_to_date: "2024-03-31T23:59:59.999Z",
    status: "completed",
    // description: "Physical count for March 2024",
    // note: "Completed physical count with reconciliation",
    // info: { category: "inventory", type: "monthly", priority: "high" },
    // doc_version: "1.1",
    created_at: "2024-03-01T00:00:00.000Z",
    created_by_id: getUuidByName("USER_03"),
    updated_at: "2024-03-31T23:59:00.000Z",
    updated_by_id: getUuidByName("USER_01"),
    deleted_at: null,
    deleted_by_id: null,
  },
];

// CREATE - สร้าง PhysicalCount ใหม่
export const createPhysicalCountPeriod = (
  data: Omit<PhysicalCountPeriod, "id" | "created_at" | "updated_at">
): PhysicalCountPeriod => {
  const newPhysicalCountPeriod: PhysicalCountPeriod = {
    ...data,
    id: generateId(),
    created_at: getCurrentTimestamp(),
    updated_at: getCurrentTimestamp(),
  };

  physicalCountPeriod.push(newPhysicalCountPeriod);
  return newPhysicalCountPeriod;
};

// CREATE - สร้าง PhysicalCount พร้อมค่าเริ่มต้น
export const createPhysicalCountPeriodWithDefaults = (
  fromDate: string,
  toDate: string,
  createdById: string,
  // description?: string
): PhysicalCountPeriod => {
  return createPhysicalCountPeriod({
    counting_period_from_date: fromDate,
    counting_period_to_date: toDate,
    status: "draft",
    // description: description || null,
    // note: null,
    // info: null,
    // doc_version: "1.0",
    created_by_id: createdById,
    updated_by_id: createdById,
    deleted_at: null,
    deleted_by_id: null,
  });
};

// READ - อ่าน PhysicalCount ทั้งหมด
export const getAllPhysicalCountPeriods = (): PhysicalCountPeriod[] => {
  return physicalCountPeriod.filter(count => !count.deleted_at);
};

// READ - อ่าน PhysicalCount ตาม ID
export const getPhysicalCountPeriodById = (id: string): PhysicalCountPeriod | null => {
  const count = physicalCountPeriod.find(c => c.id === id && !c.deleted_at);
  return count || null;
};

// READ - อ่าน PhysicalCount ตาม created_by_id
export const getPhysicalCountPeriodsByCreatedBy = (createdById: string): PhysicalCountPeriod[] => {
  return physicalCountPeriod.filter(count =>
    count.created_by_id === createdById && !count.deleted_at
  );
};

// READ - อ่าน PhysicalCount ตาม updated_by_id
export const getPhysicalCountPeriodsByUpdatedBy = (updatedById: string): PhysicalCountPeriod[] => {
  return physicalCountPeriod.filter(count =>
    count.updated_by_id === updatedById && !count.deleted_at
  );
};

// READ - อ่าน PhysicalCount ตาม status
export const getPhysicalCountPeriodsByStatus = (status: "draft" | "counting" | "completed"): PhysicalCountPeriod[] => {
  return physicalCountPeriod.filter(count =>
    count.status === status && !count.deleted_at
  );
};

// READ - อ่าน PhysicalCount ตามช่วงวันที่นับ
export const getPhysicalCountPeriodsByCountingPeriod = (
  fromDate: string,
  toDate: string
): PhysicalCountPeriod[] => {
  return physicalCountPeriod.filter(count => {
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
export const getPhysicalCountPeriodsByDateRange = (startDate: string, endDate: string): PhysicalCountPeriod[] => {
  return physicalCountPeriod.filter(count => {
    if (count.deleted_at) return false;
    const createdDate = new Date(count.created_at);
    const start = new Date(startDate);
    const end = new Date(endDate);
    return createdDate >= start && createdDate <= end;
  });
};

// UPDATE - อัปเดต PhysicalCount
export const updatePhysicalCountPeriod = (
  id: string,
  data: Partial<Omit<PhysicalCountPeriod, "id" | "created_at" | "created_by_id">>
): PhysicalCountPeriod | null => {
  const index = physicalCountPeriod.findIndex(count => count.id === id && !count.deleted_at);

  if (index === -1) {
    return null;
  }

  physicalCountPeriod[index] = {
    ...physicalCountPeriod[index],
    ...data,
    updated_at: getCurrentTimestamp(),
  };

  return physicalCountPeriod[index];
};

// UPDATE - อัปเดต counting period ของ PhysicalCount
export const updatePhysicalCountPeriodPeriod = (
  id: string,
  fromDate: string,
  toDate: string,
  updatedById: string
): PhysicalCountPeriod | null => {
  return updatePhysicalCountPeriod(id, {
    counting_period_from_date: fromDate,
    counting_period_to_date: toDate,
    updated_by_id: updatedById
  });
};

// UPDATE - อัปเดต status ของ PhysicalCount
export const updatePhysicalCountPeriodStatus = (
  id: string,
  status: "draft" | "counting" | "completed",
  updatedById: string
): PhysicalCountPeriod | null => {
  return updatePhysicalCountPeriod(id, {
    status: status,
    updated_by_id: updatedById
  });
};

// UPDATE - อัปเดต description
export const updatePhysicalCountPeriodDescription = (
  id: string,
  description: string,
  updatedById: string
): PhysicalCountPeriod | null => {
  return updatePhysicalCountPeriod(id, { updated_by_id: updatedById });
};

// UPDATE - อัปเดต note
export const updatePhysicalCountPeriodNote = (
  id: string,
  note: string,
  updatedById: string
): PhysicalCountPeriod | null => {
  return updatePhysicalCountPeriod(id, { updated_by_id: updatedById });
};

// UPDATE - อัปเดต info
export const updatePhysicalCountPeriodInfo = (
  id: string,
  info: any,
  updatedById: string
): PhysicalCountPeriod | null => {
  return updatePhysicalCountPeriod(id, { updated_by_id: updatedById });
};

// UPDATE - อัปเดต doc_version
export const updatePhysicalCountPeriodDocVersion = (
  id: string,
  docVersion: string,
  updatedById: string
): PhysicalCountPeriod | null => {
  return updatePhysicalCountPeriod(id, { updated_by_id: updatedById });
};

// DELETE - Soft delete PhysicalCount
export const softDeletePhysicalCountPeriod = (id: string, deletedById: string): PhysicalCountPeriod | null => {
  const count = getPhysicalCountPeriodById(id);
  if (!count) return null;

  count.deleted_at = getCurrentTimestamp();
  count.deleted_by_id = deletedById;
  count.updated_at = getCurrentTimestamp();
  count.updated_by_id = deletedById;

  return count;
};

// DELETE - Hard delete PhysicalCount
export const hardDeletePhysicalCountPeriod = (id: string): boolean => {
  const index = physicalCountPeriod.findIndex(count => count.id === id);

  if (index === -1) {
    return false;
  }

  physicalCountPeriod.splice(index, 1);
  return true;
};

// DELETE - ลบ PhysicalCount หลายรายการ
export const deleteMultiplePhysicalCountPeriods = (
  ids: string[],
  deletedById: string
): PhysicalCountPeriod[] => {
  const deletedCounts: PhysicalCountPeriod[] = [];

  ids.forEach(id => {
    const deletedCount = softDeletePhysicalCountPeriod(id, deletedById);
    if (deletedCount) {
      deletedCounts.push(deletedCount);
    }
  });

  return deletedCounts;
};

// DELETE - ลบ PhysicalCount ตาม status
export const deletePhysicalCountPeriodsByStatus = (
  status: "draft" | "counting" | "completed",
  deletedById: string
): boolean => {
  const counts = getPhysicalCountPeriodsByStatus(status);
  let deletedCount = 0;

  counts.forEach(count => {
    if (softDeletePhysicalCountPeriod(count.id, deletedById)) {
      deletedCount++;
    }
  });

  return deletedCount > 0;
};

// DELETE - ลบ PhysicalCount ตาม created_by_id
export const deletePhysicalCountPeriodsByCreatedBy = (
  createdById: string,
  deletedById: string
): boolean => {
  const counts = getPhysicalCountPeriodsByCreatedBy(createdById);
  let deletedCount = 0;

  counts.forEach(count => {
    if (softDeletePhysicalCountPeriod(count.id, deletedById)) {
      deletedCount++;
    }
  });

  return deletedCount > 0;
};

// RESTORE - กู้คืน PhysicalCount ที่ถูก soft delete
export const restorePhysicalCountPeriod = (id: string): PhysicalCountPeriod | null => {
  const count = physicalCountPeriod.find(c => c.id === id);
  if (!count || !count.deleted_at) return null;

  count.deleted_at = null;
  count.deleted_by_id = null;
  count.updated_at = getCurrentTimestamp();

  return count;
};

// ADVANCED SEARCH - ค้นหา PhysicalCount แบบขั้นสูง
export const searchPhysicalCountPeriods = (criteria: {
  status?: "draft" | "counting" | "completed";
  // description?: string;
  // note?: string;
  // doc_version?: string;
  created_by_id?: string;
  updated_by_id?: string;
  counting_period_from?: string;
  counting_period_to?: string;
  start_date?: string;
  end_date?: string;
}): PhysicalCountPeriod[] => {
  return physicalCountPeriod.filter(count => {
    if (count.deleted_at) return false;

    if (criteria.status && count.status !== criteria.status) {
      return false;
    }

    if (criteria.status && count.status !== criteria.status) {
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
export const getPhysicalCountPeriodCount = (): number => {
  return physicalCountPeriod.filter(count => !count.deleted_at).length;
};

export const getPhysicalCountCountByIncludeLocationNotCount = (includeLocationNotCount: boolean): number => {
  return physicalCountPeriod.filter(count =>
    count.status === status && !count.deleted_at
  ).length;
};

export const getPhysicalCountPeriodCountByStatus = (status: "draft" | "counting" | "completed"): number => {
    return physicalCountPeriod.filter(count =>
    count.status === status && !count.deleted_at
  ).length;
};

export const isPhysicalCountPeriodExists = (id: string): boolean => {
  return physicalCountPeriod.some(count => count.id === id && !count.deleted_at);
};

export const hasPhysicalCountPeriodsByCreatedBy = (createdById: string): boolean => {
  return physicalCountPeriod.some(count =>
    count.created_by_id === createdById && !count.deleted_at
  );
};

export const hasPhysicalCountPeriodsByStatus = (status: "draft" | "counting" | "completed"): boolean => {
  return physicalCountPeriod.some(count =>
    count.status === status && !count.deleted_at
  );
};

export const getActivePhysicalCountPeriods = (): PhysicalCountPeriod[] => {
  return physicalCountPeriod.filter(count =>
    (count.status === "counting" || count.status === "draft") && !count.deleted_at
  );
};

export const getCompletedPhysicalCountPeriods = (): PhysicalCountPeriod[] => {
  return physicalCountPeriod.filter(count =>
    count.status === "completed" && !count.deleted_at
  );
};

export const getCurrentPhysicalCountPeriods = (currentDate?: string): PhysicalCountPeriod[] => {
  const now = currentDate ? new Date(currentDate) : new Date();

  return physicalCountPeriod.filter(count => {
    if (count.deleted_at) return false;
    const fromDate = new Date(count.counting_period_from_date);
    const toDate = new Date(count.counting_period_to_date);
    return fromDate <= now && now <= toDate;
  });
};

export const clearAllPhysicalCountPeriods = (): void => {
  physicalCountPeriod.length = 0;
};


export const getPhysicalCountPeriodsOnCounting = (): PhysicalCountPeriod | null => {
  return physicalCountPeriod.find(count =>
    count.status === "counting" && !count.deleted_at
  ) || null;
};