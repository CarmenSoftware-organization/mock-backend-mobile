import { generateId, getCurrentTimestamp } from "@/libs/utils";
import { getUuidByName } from "./mapping.uuid";

export type PeriodStatus = "open" | "closed" | "locked" | "draft";

export interface Period {
  id: string;
  period: string; // YYMM format
  fiscal_year: number; // YYYY
  fiscal_month: number; // 1-12
  start_at: Date;
  end_at: Date;
  status: PeriodStatus;
  note: string | null;
  info: any;
  dimension: any;
  created_at: Date;
  created_by_id: string | null;
  updated_at: Date;
  updated_by_id: string | null;
  deleted_at: Date | null;
  deleted_by_id: string | null;
}

export const periods: Period[] = [
  {
    id: getUuidByName("PERIOD_2024_01"),
    period: "2401",
    fiscal_year: 2024,
    fiscal_month: 1,
    start_at: new Date("2024-01-01T00:00:00Z"),
    end_at: new Date("2024-01-31T23:59:59Z"),
    status: "closed",
    note: "January 2024 fiscal period",
    info: {},
    dimension: {},
    created_at: new Date("2024-01-01T00:00:00Z"),
    created_by_id: "system",
    updated_at: new Date("2024-01-01T00:00:00Z"),
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("PERIOD_2024_02"),
    period: "2402",
    fiscal_year: 2024,
    fiscal_month: 2,
    start_at: new Date("2024-02-01T00:00:00Z"),
    end_at: new Date("2024-02-29T23:59:59Z"),
    status: "closed",
    note: "February 2024 fiscal period",
    info: {},
    dimension: {},
    created_at: new Date("2024-02-01T00:00:00Z"),
    created_by_id: "system",
    updated_at: new Date("2024-02-01T00:00:00Z"),
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("PERIOD_2024_03"),
    period: "2403",
    fiscal_year: 2024,
    fiscal_month: 3,
    start_at: new Date("2024-03-01T00:00:00Z"),
    end_at: new Date("2024-03-31T23:59:59Z"),
    status: "closed",
    note: "March 2024 fiscal period",
    info: {},
    dimension: {},
    created_at: new Date("2024-03-01T00:00:00Z"),
    created_by_id: "system",
    updated_at: new Date("2024-03-01T00:00:00Z"),
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("PERIOD_2024_04"),
    period: "2404",
    fiscal_year: 2024,
    fiscal_month: 4,
    start_at: new Date("2024-04-01T00:00:00Z"),
    end_at: new Date("2024-04-30T23:59:59Z"),
    status: "open",
    note: "April 2024 fiscal period",
    info: {},
    dimension: {},
    created_at: new Date("2024-04-01T00:00:00Z"),
    created_by_id: "system",
    updated_at: new Date("2024-04-01T00:00:00Z"),
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("PERIOD_2024_05"),
    period: "2405",
    fiscal_year: 2024,
    fiscal_month: 5,
    start_at: new Date("2024-05-01T00:00:00Z"),
    end_at: new Date("2024-05-31T23:59:59Z"),
    status: "draft",
    note: "May 2024 fiscal period",
    info: {},
    dimension: {},
    created_at: new Date("2024-05-01T00:00:00Z"),
    created_by_id: "system",
    updated_at: new Date("2024-05-01T00:00:00Z"),
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
];

// CREATE - สร้าง Period ใหม่
export const createPeriod = (
  data: Omit<Period, "id" | "created_at">
): Period => {
  const newPeriod: Period = {
    ...data,
    id: generateId(),
    created_at: new Date(getCurrentTimestamp()),
  };

  periods.push(newPeriod);
  return newPeriod;
};

// READ - อ่าน Period ทั้งหมด
export const getAllPeriods = (): Period[] => {
  return periods.filter((period) => !period.deleted_at);
};

// READ - อ่าน Period ตาม ID
export const getPeriodById = (id: string): Period | null => {
  const period = periods.find((p) => p.id === id && !p.deleted_at);
  return period || null;
};

export const getDateStartOnStatusIsOpen = (): Date => {
  const openPeriods = getOpenPeriods();
  if (openPeriods.length === 0) {
    return new Date();
  }
  const sortedOpenPeriods = openPeriods.sort(
    (a, b) => a.start_at.getTime() - b.start_at.getTime()
  );
  return sortedOpenPeriods[0].start_at;
}

export const getDateEndOnStatusIsOpen = (): Date => {
  const openPeriods = getOpenPeriods();
  if (openPeriods.length === 0) {
    return new Date();
  }
  const sortedOpenPeriods = openPeriods.sort(
    (a, b) => b.end_at.getTime() - a.end_at.getTime()
  );
  return sortedOpenPeriods[0].end_at;
}

// READ - อ่าน Period ตาม period code (YYMM)
export const getPeriodByCode = (periodCode: string): Period | null => {
  const period = periods.find(
    (p) => p.period === periodCode && !p.deleted_at
  );
  return period || null;
};

// READ - อ่าน Period ตาม fiscal year และ month
export const getPeriodByFiscalYearMonth = (
  fiscalYear: number,
  fiscalMonth: number
): Period | null => {
  const period = periods.find(
    (p) =>
      p.fiscal_year === fiscalYear &&
      p.fiscal_month === fiscalMonth &&
      !p.deleted_at
  );
  return period || null;
};

// READ - อ่าน Period ตาม status
export const getPeriodsByStatus = (status: PeriodStatus): Period[] => {
  return periods.filter((p) => p.status === status && !p.deleted_at);
};

// READ - อ่าน Period ที่ open
export const getOpenPeriods = (): Period[] => {
  return periods.filter((p) => p.status === "open" && !p.deleted_at);
};

// READ - อ่าน Period ที่ closed
export const getClosedPeriods = (): Period[] => {
  return periods.filter((p) => p.status === "closed" && !p.deleted_at);
};

// READ - อ่าน Period ที่ locked
export const getLockedPeriods = (): Period[] => {
  return periods.filter((p) => p.status === "locked" && !p.deleted_at);
};

// READ - อ่าน Period ตาม fiscal year
export const getPeriodsByFiscalYear = (fiscalYear: number): Period[] => {
  return periods.filter(
    (p) => p.fiscal_year === fiscalYear && !p.deleted_at
  );
};

// READ - อ่าน Period ในช่วงวันที่
export const getPeriodsInDateRange = (
  startDate: Date,
  endDate: Date
): Period[] => {
  return periods.filter(
    (p) =>
      !p.deleted_at &&
      ((p.start_at >= startDate && p.start_at <= endDate) ||
        (p.end_at >= startDate && p.end_at <= endDate) ||
        (p.start_at <= startDate && p.end_at >= endDate))
  );
};

// READ - อ่าน Period ที่กำลังใช้งาน (current period)
export const getCurrentPeriod = (): Period | null => {
  const now = new Date();
  const period = periods.find(
    (p) => !p.deleted_at && p.start_at <= now && p.end_at >= now
  );
  return period || null;
};

// READ - ค้นหา Period
export const searchPeriods = (searchTerm: string): Period[] => {
  const lowerSearchTerm = searchTerm.toLowerCase();
  return periods.filter(
    (p) =>
      !p.deleted_at &&
      (p.period.toLowerCase().includes(lowerSearchTerm) ||
        p.note?.toLowerCase().includes(lowerSearchTerm) ||
        p.fiscal_year.toString().includes(lowerSearchTerm))
  );
};

// UPDATE - อัปเดต Period
export const updatePeriod = (
  id: string,
  updateData: Partial<Omit<Period, "id" | "created_at" | "created_by_id">>
): Period | null => {
  const index = periods.findIndex((p) => p.id === id);

  if (index === -1) {
    return null;
  }

  periods[index] = {
    ...periods[index],
    ...updateData,
    updated_at: new Date(getCurrentTimestamp()),
  };

  return periods[index];
};

// UPDATE - อัปเดต Period status
export const updatePeriodStatus = (
  id: string,
  status: PeriodStatus
): Period | null => {
  return updatePeriod(id, { status });
};

// UPDATE - ปิด Period (close period)
export const closePeriod = (id: string): Period | null => {
  return updatePeriod(id, { status: "closed" });
};

// UPDATE - เปิด Period (open period)
export const openPeriod = (id: string): Period | null => {
  return updatePeriod(id, { status: "open" });
};

// UPDATE - ล็อค Period (lock period)
export const lockPeriod = (id: string): Period | null => {
  return updatePeriod(id, { status: "locked" });
};

// UPDATE - อัปเดต Period note
export const updatePeriodNote = (id: string, note: string): Period | null => {
  return updatePeriod(id, { note });
};

// DELETE - ลบ Period (soft delete)
export const deletePeriod = (id: string, deletedById: string): boolean => {
  const index = periods.findIndex((p) => p.id === id);

  if (index === -1) {
    return false;
  }

  periods[index] = {
    ...periods[index],
    deleted_at: new Date(getCurrentTimestamp()),
    deleted_by_id: deletedById,
  };

  return true;
};

// DELETE - ลบ Period แบบถาวร
export const hardDeletePeriod = (id: string): boolean => {
  const index = periods.findIndex((p) => p.id === id);

  if (index === -1) {
    return false;
  }

  periods.splice(index, 1);
  return true;
};

// Utility function สำหรับล้างข้อมูลทั้งหมด (ใช้สำหรับ testing)
export const clearAllPeriods = (): void => {
  periods.length = 0;
};

// Utility function สำหรับนับจำนวน Period
export const getPeriodCount = (): number => {
  return periods.filter((p) => !p.deleted_at).length;
};

// Utility function สำหรับนับจำนวน Period ตาม status
export const getPeriodCountByStatus = (status: PeriodStatus): number => {
  return periods.filter((p) => p.status === status && !p.deleted_at).length;
};

// Utility function สำหรับตรวจสอบ Period ที่ถูกลบแล้ว
export const getDeletedPeriods = (): Period[] => {
  return periods.filter((p) => p.deleted_at !== null);
};

// Utility function สำหรับกู้คืน Period ที่ถูกลบแล้ว
export const restorePeriod = (id: string): boolean => {
  const index = periods.findIndex((p) => p.id === id);

  if (index === -1) {
    return false;
  }

  if (periods[index].deleted_at) {
    periods[index] = {
      ...periods[index],
      deleted_at: null,
      deleted_by_id: null,
    };
    return true;
  }

  return false;
};

// Utility function สำหรับสร้างรหัส period จาก fiscal year และ month
export const generatePeriodCode = (
  fiscalYear: number,
  fiscalMonth: number
): string => {
  const yearPart = fiscalYear.toString().slice(-2);
  const monthPart = fiscalMonth.toString().padStart(2, "0");
  return `${yearPart}${monthPart}`;
};

// Utility function สำหรับตรวจสอบว่า period ซ้อนทับกับ period อื่นหรือไม่
export const isPeriodOverlapping = (
  startAt: Date,
  endAt: Date,
  excludeId?: string
): boolean => {
  return periods.some(
    (p) =>
      !p.deleted_at &&
      p.id !== excludeId &&
      ((startAt >= p.start_at && startAt <= p.end_at) ||
        (endAt >= p.start_at && endAt <= p.end_at) ||
        (startAt <= p.start_at && endAt >= p.end_at))
  );
};

// Utility function สำหรับตรวจสอบว่า period code ซ้ำหรือไม่
export const isPeriodCodeExists = (
  periodCode: string,
  excludeId?: string
): boolean => {
  return periods.some(
    (p) => !p.deleted_at && p.period === periodCode && p.id !== excludeId
  );
};

// Utility function สำหรับตรวจสอบว่า fiscal year/month ซ้ำหรือไม่
export const isFiscalYearMonthExists = (
  fiscalYear: number,
  fiscalMonth: number,
  excludeId?: string
): boolean => {
  return periods.some(
    (p) =>
      !p.deleted_at &&
      p.fiscal_year === fiscalYear &&
      p.fiscal_month === fiscalMonth &&
      p.id !== excludeId
  );
};
