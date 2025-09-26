import { generateId, getCurrentTimestamp } from "@/libs/utils";
import { getUuidByName } from "./mapping.uuid";

export interface CountStockDetail {
  id: string;
  count_stock_id: string;
  sequence_no: number;
  product_id: string;
  product_name: string;
  qty: number;
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

export const countStockDetails: CountStockDetail[] = [
  {
    id: getUuidByName("COUNT_STOCK_DETAIL_01"),
    count_stock_id: getUuidByName("COUNT_STOCK_01"),
    sequence_no: 1,
    product_id: "prod_001",
    product_name: "Product A",
    qty: 100,
    description: "Count stock detail for Product A",
    note: "Regular count",
    info: { category: "electronics", condition: "good" },
    dimension: { length: "10cm", width: "5cm", height: "2cm" },
    doc_version: "1.0",
    created_at: "2025-07-31T06:30:00.000Z",
    created_by_id: getUuidByName("USER_ADMIN"),
    updated_at: "2025-07-31T06:30:00.000Z",
    updated_by_id: getUuidByName("USER_ADMIN"),
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("COUNT_STOCK_DETAIL_02"),
    count_stock_id: getUuidByName("COUNT_STOCK_01"),
    sequence_no: 2,
    product_id: "prod_002",
    product_name: "Product B",
    qty: 50,
    description: "Count stock detail for Product B",
    note: "Regular count",
    info: { category: "clothing", condition: "excellent" },
    dimension: { length: "20cm", width: "15cm", height: "1cm" },
    doc_version: "1.0",
    created_at: "2025-07-31T06:31:00.000Z",
    created_by_id: getUuidByName("USER_ADMIN"),
    updated_at: "2025-07-31T06:31:00.000Z",
    updated_by_id: getUuidByName("USER_ADMIN"),
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("COUNT_STOCK_DETAIL_03"),
    count_stock_id: getUuidByName("COUNT_STOCK_02"),
    sequence_no: 1,
    product_id: "prod_003",
    product_name: "Product C",
    qty: 75,
    description: "Count stock detail for Product C",
    note: "Physical count",
    info: { category: "furniture", condition: "good" },
    dimension: { length: "100cm", width: "60cm", height: "80cm" },
    doc_version: "1.0",
    created_at: "2025-07-31T07:30:00.000Z",
    created_by_id: getUuidByName("USER_ADMIN"),
    updated_at: "2025-07-31T07:30:00.000Z",
    updated_by_id: getUuidByName("USER_ADMIN"),
    deleted_at: null,
    deleted_by_id: null,
  },
  // Details for CS-2025-004 (Distribution Center A - Completed Cycle Count)
  {
    id: getUuidByName("COUNT_STOCK_DETAIL_04"),
    count_stock_id: getUuidByName("COUNT_STOCK_04"),
    sequence_no: 1,
    product_id: "prod_004",
    product_name: "Laptop Computers",
    qty: 45,
    description: "Distribution center laptop inventory count",
    note: "Variance: -2 units from system",
    info: { category: "electronics", condition: "excellent", variance: -2 },
    dimension: { length: "35cm", width: "25cm", height: "3cm", weight: "2.1kg" },
    doc_version: "1.0",
    created_at: "2025-08-01T10:00:00.000Z",
    created_by_id: getUuidByName("USER_ADMIN"),
    updated_at: "2025-08-05T17:30:00.000Z",
    updated_by_id: getUuidByName("USER_ADMIN"),
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("COUNT_STOCK_DETAIL_05"),
    count_stock_id: getUuidByName("COUNT_STOCK_04"),
    sequence_no: 2,
    product_id: "prod_005",
    product_name: "Office Chairs",
    qty: 120,
    description: "Ergonomic office chair count",
    note: "Matches system quantity exactly",
    info: { category: "furniture", condition: "good", variance: 0 },
    dimension: { length: "65cm", width: "65cm", height: "110cm", weight: "18kg" },
    doc_version: "1.0",
    created_at: "2025-08-01T10:15:00.000Z",
    created_by_id: getUuidByName("USER_ADMIN"),
    updated_at: "2025-08-05T17:30:00.000Z",
    updated_by_id: getUuidByName("USER_ADMIN"),
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("COUNT_STOCK_DETAIL_06"),
    count_stock_id: getUuidByName("COUNT_STOCK_04"),
    sequence_no: 3,
    product_id: "prod_006",
    product_name: "Printer Ink Cartridges",
    qty: 350,
    description: "Various ink cartridge models count",
    note: "Excess inventory identified: +25 units",
    info: { category: "consumables", condition: "excellent", variance: 25 },
    dimension: { length: "12cm", width: "8cm", height: "6cm", weight: "0.15kg" },
    doc_version: "1.0",
    created_at: "2025-08-01T10:30:00.000Z",
    created_by_id: getUuidByName("USER_ADMIN"),
    updated_at: "2025-08-05T17:30:00.000Z",
    updated_by_id: getUuidByName("USER_ADMIN"),
    deleted_at: null,
    deleted_by_id: null,
  },
  // Details for CS-2025-005 (Cold Storage - Rejected Physical Count)
  {
    id: getUuidByName("COUNT_STOCK_DETAIL_07"),
    count_stock_id: getUuidByName("COUNT_STOCK_05"),
    sequence_no: 1,
    product_id: "prod_007",
    product_name: "Frozen Vegetables",
    qty: 0,
    description: "Count interrupted due to temperature issues",
    note: "Count abandoned - temperature rose above -15°C",
    info: { category: "frozen_food", condition: "temperature_compromised", variance: "unknown" },
    dimension: { length: "25cm", width: "15cm", height: "8cm", temperature: "-18°C" },
    doc_version: "1.0",
    created_at: "2025-08-02T11:00:00.000Z",
    created_by_id: getUuidByName("USER_ADMIN"),
    updated_at: "2025-08-10T16:30:00.000Z",
    updated_by_id: getUuidByName("USER_ADMIN"),
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("COUNT_STOCK_DETAIL_08"),
    count_stock_id: getUuidByName("COUNT_STOCK_05"),
    sequence_no: 2,
    product_id: "prod_008",
    product_name: "Ice Cream Products",
    qty: 0,
    description: "Count terminated due to equipment failure",
    note: "Refrigeration unit malfunction detected",
    info: { category: "frozen_desserts", condition: "equipment_failure", variance: "unknown" },
    dimension: { length: "30cm", width: "20cm", height: "12cm", temperature: "-18°C" },
    doc_version: "1.0",
    created_at: "2025-08-02T11:15:00.000Z",
    created_by_id: getUuidByName("USER_ADMIN"),
    updated_at: "2025-08-10T16:30:00.000Z",
    updated_by_id: getUuidByName("USER_ADMIN"),
    deleted_at: null,
    deleted_by_id: null,
  },
  // Details for CS-2025-006 (Electronics Department - Approved Random Count)
  {
    id: getUuidByName("COUNT_STOCK_DETAIL_09"),
    count_stock_id: getUuidByName("COUNT_STOCK_06"),
    sequence_no: 1,
    product_id: "prod_009",
    product_name: "Gaming Consoles",
    qty: 25,
    description: "High-value gaming console audit count",
    note: "Security tags verified, all units accounted",
    info: {
      category: "gaming",
      condition: "excellent",
      variance: 0,
      security_verified: true,
      unit_value: 15000
    },
    dimension: { length: "40cm", width: "30cm", height: "15cm", weight: "4.2kg" },
    doc_version: "1.0",
    created_at: "2025-08-03T12:00:00.000Z",
    created_by_id: getUuidByName("USER_ADMIN"),
    updated_at: "2025-08-15T14:15:00.000Z",
    updated_by_id: getUuidByName("USER_ADMIN"),
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("COUNT_STOCK_DETAIL_10"),
    count_stock_id: getUuidByName("COUNT_STOCK_06"),
    sequence_no: 2,
    product_id: "prod_010",
    product_name: "Smart Phones",
    qty: 85,
    description: "Premium smartphone inventory verification",
    note: "Minor discrepancy: -1 unit, likely theft",
    info: {
      category: "mobile",
      condition: "excellent",
      variance: -1,
      security_alert: true,
      unit_value: 35000
    },
    dimension: { length: "16cm", width: "8cm", height: "1cm", weight: "0.2kg" },
    doc_version: "1.0",
    created_at: "2025-08-03T12:15:00.000Z",
    created_by_id: getUuidByName("USER_ADMIN"),
    updated_at: "2025-08-15T14:15:00.000Z",
    updated_by_id: getUuidByName("USER_ADMIN"),
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("COUNT_STOCK_DETAIL_11"),
    count_stock_id: getUuidByName("COUNT_STOCK_06"),
    sequence_no: 3,
    product_id: "prod_011",
    product_name: "4K Televisions",
    qty: 18,
    description: "Large screen TV inventory audit",
    note: "All units verified with serial numbers",
    info: {
      category: "television",
      condition: "excellent",
      variance: 0,
      serial_verified: true,
      unit_value: 25000
    },
    dimension: { length: "120cm", width: "75cm", height: "8cm", weight: "22kg" },
    doc_version: "1.0",
    created_at: "2025-08-03T12:30:00.000Z",
    created_by_id: getUuidByName("USER_ADMIN"),
    updated_at: "2025-08-15T14:15:00.000Z",
    updated_by_id: getUuidByName("USER_ADMIN"),
    deleted_at: null,
    deleted_by_id: null,
  },
  // Details for CS-2025-007 (Automotive Parts - Submitted Physical Count)
  {
    id: getUuidByName("COUNT_STOCK_DETAIL_12"),
    count_stock_id: getUuidByName("COUNT_STOCK_07"),
    sequence_no: 1,
    product_id: "prod_012",
    product_name: "Engine Oil Filters",
    qty: 450,
    description: "Various vehicle oil filter count",
    note: "Day 1 count completed - Zone A1",
    info: {
      category: "filters",
      condition: "good",
      zone: "A1",
      day_counted: 1,
      compatibility: ["Toyota", "Honda", "Nissan"]
    },
    dimension: { length: "12cm", width: "12cm", height: "8cm", weight: "0.3kg" },
    doc_version: "1.0",
    created_at: "2025-08-20T09:00:00.000Z",
    created_by_id: getUuidByName("USER_ADMIN"),
    updated_at: "2025-08-20T17:30:00.000Z",
    updated_by_id: getUuidByName("USER_ADMIN"),
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("COUNT_STOCK_DETAIL_13"),
    count_stock_id: getUuidByName("COUNT_STOCK_07"),
    sequence_no: 2,
    product_id: "prod_013",
    product_name: "Brake Pads Set",
    qty: 180,
    description: "Complete brake pad sets inventory",
    note: "Day 1 count completed - Zone A2",
    info: {
      category: "brake_parts",
      condition: "excellent",
      zone: "A2",
      day_counted: 1,
      safety_critical: true
    },
    dimension: { length: "20cm", width: "15cm", height: "5cm", weight: "1.2kg" },
    doc_version: "1.0",
    created_at: "2025-08-20T09:30:00.000Z",
    created_by_id: getUuidByName("USER_ADMIN"),
    updated_at: "2025-08-20T17:30:00.000Z",
    updated_by_id: getUuidByName("USER_ADMIN"),
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("COUNT_STOCK_DETAIL_14"),
    count_stock_id: getUuidByName("COUNT_STOCK_07"),
    sequence_no: 3,
    product_id: "prod_014",
    product_name: "Headlight Assemblies",
    qty: 95,
    description: "LED and halogen headlight units",
    note: "Day 2 count in progress - Zone A3",
    info: {
      category: "lighting",
      condition: "good",
      zone: "A3",
      day_counted: 2,
      led_count: 60,
      halogen_count: 35
    },
    dimension: { length: "45cm", width: "25cm", height: "20cm", weight: "2.8kg" },
    doc_version: "1.0",
    created_at: "2025-08-21T08:15:00.000Z",
    created_by_id: getUuidByName("USER_ADMIN"),
    updated_at: "2025-08-21T15:45:00.000Z",
    updated_by_id: getUuidByName("USER_ADMIN"),
    deleted_at: null,
    deleted_by_id: null,
  },
  // Details for CS-2025-008 (Fashion Store - Draft Seasonal Count)
  {
    id: getUuidByName("COUNT_STOCK_DETAIL_15"),
    count_stock_id: getUuidByName("COUNT_STOCK_08"),
    sequence_no: 1,
    product_id: "prod_015",
    product_name: "Summer Dresses",
    qty: 45,
    description: "Summer clearance dress inventory",
    note: "Clearance items - 70% discount applied",
    info: {
      category: "women_clothing",
      condition: "excellent",
      season: "summer_clearance",
      discount: 70,
      sizes: ["XS", "S", "M", "L", "XL"]
    },
    dimension: { length: "120cm", width: "60cm", height: "2cm", weight: "0.4kg" },
    doc_version: "1.0",
    created_at: "2025-08-05T13:00:00.000Z",
    created_by_id: getUuidByName("USER_ADMIN"),
    updated_at: "2025-08-05T13:00:00.000Z",
    updated_by_id: getUuidByName("USER_ADMIN"),
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("COUNT_STOCK_DETAIL_16"),
    count_stock_id: getUuidByName("COUNT_STOCK_08"),
    sequence_no: 2,
    product_id: "prod_016",
    product_name: "Fall Jackets",
    qty: 85,
    description: "New fall collection jacket inventory",
    note: "Fresh inventory - just received from supplier",
    info: {
      category: "outerwear",
      condition: "new",
      season: "fall_collection",
      supplier: "Fashion Forward Inc",
      received_date: "2025-08-01"
    },
    dimension: { length: "80cm", width: "50cm", height: "5cm", weight: "0.8kg" },
    doc_version: "1.0",
    created_at: "2025-08-05T13:15:00.000Z",
    created_by_id: getUuidByName("USER_ADMIN"),
    updated_at: "2025-08-05T13:15:00.000Z",
    updated_by_id: getUuidByName("USER_ADMIN"),
    deleted_at: null,
    deleted_by_id: null,
  },
  // Details for CS-2025-009 (Pharmacy - Completed Controlled Substances)
  {
    id: getUuidByName("COUNT_STOCK_DETAIL_17"),
    count_stock_id: getUuidByName("COUNT_STOCK_09"),
    sequence_no: 1,
    product_id: "prod_017",
    product_name: "Opioid Pain Medication",
    qty: 150,
    description: "Schedule II controlled substance count",
    note: "Dual verification completed - DEA compliance verified",
    info: {
      category: "controlled_substance",
      condition: "secure",
      schedule: "II",
      dea_verified: true,
      dual_count: true,
      auditor: "DEA Inspector J. Smith"
    },
    dimension: { length: "8cm", width: "5cm", height: "3cm", weight: "0.05kg" },
    doc_version: "1.0",
    created_at: "2025-08-28T14:00:00.000Z",
    created_by_id: getUuidByName("USER_ADMIN"),
    updated_at: "2025-08-28T20:45:00.000Z",
    updated_by_id: getUuidByName("USER_ADMIN"),
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("COUNT_STOCK_DETAIL_18"),
    count_stock_id: getUuidByName("COUNT_STOCK_09"),
    sequence_no: 2,
    product_id: "prod_018",
    product_name: "Anxiety Medication",
    qty: 200,
    description: "Schedule IV controlled substance count",
    note: "All quantities verified - no discrepancies",
    info: {
      category: "controlled_substance",
      condition: "secure",
      schedule: "IV",
      variance: 0,
      expiry_check: true,
      auditor: "DEA Inspector J. Smith"
    },
    dimension: { length: "6cm", width: "4cm", height: "2cm", weight: "0.03kg" },
    doc_version: "1.0",
    created_at: "2025-08-28T14:30:00.000Z",
    created_by_id: getUuidByName("USER_ADMIN"),
    updated_at: "2025-08-28T20:45:00.000Z",
    updated_by_id: getUuidByName("USER_ADMIN"),
    deleted_at: null,
    deleted_by_id: null,
  },
  // Details for CS-2025-010 (Book Warehouse - Approved Random Sample)
  {
    id: getUuidByName("COUNT_STOCK_DETAIL_19"),
    count_stock_id: getUuidByName("COUNT_STOCK_10"),
    sequence_no: 1,
    product_id: "prod_019",
    product_name: "Fiction Novels",
    qty: 125,
    description: "Statistical sample of fiction book inventory",
    note: "Sample represents 12,500 total fiction books",
    info: {
      category: "fiction_books",
      condition: "good",
      sample_multiplier: 100,
      total_represented: 12500,
      genres: ["Mystery", "Romance", "Sci-Fi", "Thriller"]
    },
    dimension: { length: "20cm", width: "13cm", height: "3cm", weight: "0.3kg" },
    doc_version: "1.0",
    created_at: "2025-09-01T15:00:00.000Z",
    created_by_id: getUuidByName("USER_ADMIN"),
    updated_at: "2025-09-01T19:20:00.000Z",
    updated_by_id: getUuidByName("USER_ADMIN"),
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("COUNT_STOCK_DETAIL_20"),
    count_stock_id: getUuidByName("COUNT_STOCK_10"),
    sequence_no: 2,
    product_id: "prod_020",
    product_name: "Academic Textbooks",
    qty: 200,
    description: "Statistical sample of academic textbook inventory",
    note: "Sample represents 20,000 total academic books",
    info: {
      category: "academic_books",
      condition: "excellent",
      sample_multiplier: 100,
      total_represented: 20000,
      subjects: ["Mathematics", "Science", "History", "Literature"]
    },
    dimension: { length: "25cm", width: "18cm", height: "4cm", weight: "0.8kg" },
    doc_version: "1.0",
    created_at: "2025-09-01T15:30:00.000Z",
    created_by_id: getUuidByName("USER_ADMIN"),
    updated_at: "2025-09-01T19:20:00.000Z",
    updated_by_id: getUuidByName("USER_ADMIN"),
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("COUNT_STOCK_DETAIL_21"),
    count_stock_id: getUuidByName("COUNT_STOCK_10"),
    sequence_no: 3,
    product_id: "prod_021",
    product_name: "Children's Books",
    qty: 175,
    description: "Statistical sample of children's book inventory",
    note: "Sample represents 17,500 total children's books",
    info: {
      category: "children_books",
      condition: "good",
      sample_multiplier: 100,
      total_represented: 17500,
      age_groups: ["0-3", "4-7", "8-12", "Teen"]
    },
    dimension: { length: "22cm", width: "15cm", height: "1cm", weight: "0.2kg" },
    doc_version: "1.0",
    created_at: "2025-09-01T16:00:00.000Z",
    created_by_id: getUuidByName("USER_ADMIN"),
    updated_at: "2025-09-01T19:20:00.000Z",
    updated_by_id: getUuidByName("USER_ADMIN"),
    deleted_at: null,
    deleted_by_id: null,
  },
];

// CREATE - สร้าง CountStockDetail ใหม่
export const createCountStockDetail = (
  detailData: Omit<CountStockDetail, "id" | "created_at" | "updated_at">
): CountStockDetail => {
  const newDetail: CountStockDetail = {
    ...detailData,
    id: generateId(),
    created_at: getCurrentTimestamp(),
    updated_at: getCurrentTimestamp(),
  };

  countStockDetails.push(newDetail);
  return newDetail;
};

// READ - อ่าน CountStockDetail ทั้งหมด
export const getAllCountStockDetails = (): CountStockDetail[] => {
  return [...countStockDetails];
};

// READ - อ่าน CountStockDetail ตาม ID
export const getCountStockDetailById = (
  id: string
): CountStockDetail | undefined => {
  return countStockDetails.find((detail) => detail.id === id);
};

// READ - อ่าน CountStockDetail ตาม count_stock_id
export const getCountStockDetailsByCountStockId = (
  countStockId: string
): CountStockDetail[] => {
  return countStockDetails.filter(
    (detail) => detail.count_stock_id === countStockId
  );
};

// READ - อ่าน CountStockDetail ตาม product_id
export const getCountStockDetailsByProductId = (
  productId: string
): CountStockDetail[] => {
  return countStockDetails.filter((detail) => detail.product_id === productId);
};

// READ - อ่าน CountStockDetail ตาม product_name
export const getCountStockDetailsByProductName = (
  productName: string
): CountStockDetail[] => {
  return countStockDetails.filter((detail) =>
    detail.product_name.toLowerCase().includes(productName.toLowerCase())
  );
};

// READ - อ่าน CountStockDetail ตาม sequence_no
export const getCountStockDetailsBySequenceNo = (
  sequenceNo: number
): CountStockDetail[] => {
  return countStockDetails.filter(
    (detail) => detail.sequence_no === sequenceNo
  );
};

// READ - อ่าน CountStockDetail ตาม created_by_id
export const getCountStockDetailsByCreatedBy = (
  createdById: string
): CountStockDetail[] => {
  return countStockDetails.filter(
    (detail) => detail.created_by_id === createdById
  );
};

// READ - อ่าน CountStockDetail ที่ไม่ถูกลบ
export const getActiveCountStockDetails = (): CountStockDetail[] => {
  return countStockDetails.filter((detail) => !detail.deleted_at);
};

// READ - อ่าน CountStockDetail ที่ถูกลบ
export const getDeletedCountStockDetails = (): CountStockDetail[] => {
  return countStockDetails.filter((detail) => detail.deleted_at);
};

// READ - อ่าน CountStockDetail ตามช่วงเวลา
export const getCountStockDetailsByDateRange = (
  startDate: string,
  endDate: string
): CountStockDetail[] => {
  const start = new Date(startDate);
  const end = new Date(endDate);

  return countStockDetails.filter((detail) => {
    const detailDate = new Date(detail.created_at);
    return detailDate >= start && detailDate <= end;
  });
};

// UPDATE - อัปเดต CountStockDetail
export const updateCountStockDetail = (
  id: string,
  updateData: Partial<
    Omit<CountStockDetail, "id" | "created_at" | "created_by_id">
  >,
  updatedById: string
): CountStockDetail | null => {
  const index = countStockDetails.findIndex((detail) => detail.id === id);

  if (index === -1) {
    return null;
  }

  countStockDetails[index] = {
    ...countStockDetails[index],
    ...updateData,
    updated_at: getCurrentTimestamp(),
    updated_by_id: updatedById,
  };

  return countStockDetails[index];
};

// UPDATE - อัปเดต CountStockDetail sequence_no
export const updateCountStockDetailSequenceNo = (
  id: string,
  sequenceNo: number,
  updatedById: string
): CountStockDetail | null => {
  return updateCountStockDetail(id, { sequence_no: sequenceNo }, updatedById);
};

// UPDATE - อัปเดต CountStockDetail qty
export const updateCountStockDetailQty = (
  id: string,
  qty: number,
  updatedById: string
): CountStockDetail | null => {
  return updateCountStockDetail(id, { qty }, updatedById);
};

// UPDATE - อัปเดต CountStockDetail description
export const updateCountStockDetailDescription = (
  id: string,
  description: string,
  updatedById: string
): CountStockDetail | null => {
  return updateCountStockDetail(id, { description }, updatedById);
};

// UPDATE - อัปเดต CountStockDetail note
export const updateCountStockDetailNote = (
  id: string,
  note: string,
  updatedById: string
): CountStockDetail | null => {
  return updateCountStockDetail(id, { note }, updatedById);
};

// UPDATE - อัปเดต CountStockDetail info
export const updateCountStockDetailInfo = (
  id: string,
  info: any,
  updatedById: string
): CountStockDetail | null => {
  return updateCountStockDetail(id, { info }, updatedById);
};

// UPDATE - อัปเดต CountStockDetail dimension
export const updateCountStockDetailDimension = (
  id: string,
  dimension: any,
  updatedById: string
): CountStockDetail | null => {
  return updateCountStockDetail(id, { dimension }, updatedById);
};

// UPDATE - อัปเดต CountStockDetail doc version
export const updateCountStockDetailDocVersion = (
  id: string,
  docVersion: string,
  updatedById: string
): CountStockDetail | null => {
  return updateCountStockDetail(id, { doc_version: docVersion }, updatedById);
};

// UPDATE - อัปเดต CountStockDetail โดย count_stock_id และ sequence_no
export const updateCountStockDetailByCountStockAndSequence = (
  countStockId: string,
  sequenceNo: number,
  updateData: Partial<
    Omit<
      CountStockDetail,
      "id" | "count_stock_id" | "sequence_no" | "created_at" | "created_by_id"
    >
  >,
  updatedById: string
): CountStockDetail | null => {
  const detail = countStockDetails.find(
    (d) => d.count_stock_id === countStockId && d.sequence_no === sequenceNo
  );

  if (!detail) return null;

  return updateCountStockDetail(detail.id, updateData, updatedById);
};

// DELETE - ลบ CountStockDetail (soft delete)
export const deleteCountStockDetail = (
  id: string,
  deletedById: string
): boolean => {
  const index = countStockDetails.findIndex((detail) => detail.id === id);

  if (index === -1) {
    return false;
  }

  countStockDetails[index] = {
    ...countStockDetails[index],
    deleted_at: getCurrentTimestamp(),
    deleted_by_id: deletedById,
  };

  return true;
};

// DELETE - ลบ CountStockDetail แบบถาวร
export const hardDeleteCountStockDetail = (id: string): boolean => {
  const index = countStockDetails.findIndex((detail) => detail.id === id);

  if (index === -1) {
    return false;
  }

  countStockDetails.splice(index, 1);
  return true;
};

// DELETE - ลบ CountStockDetail ตาม count_stock_id
export const deleteCountStockDetailsByCountStockId = (
  countStockId: string,
  deletedById: string
): number => {
  let deletedCount = 0;

  countStockDetails.forEach((detail) => {
    if (detail.count_stock_id === countStockId && !detail.deleted_at) {
      detail.deleted_at = getCurrentTimestamp();
      detail.deleted_by_id = deletedById;
      deletedCount++;
    }
  });

  return deletedCount;
};

// DELETE - ลบ CountStockDetail ตาม product_id
export const deleteCountStockDetailsByProductId = (
  productId: string,
  deletedById: string
): number => {
  let deletedCount = 0;

  countStockDetails.forEach((detail) => {
    if (detail.product_id === productId && !detail.deleted_at) {
      detail.deleted_at = getCurrentTimestamp();
      detail.deleted_by_id = deletedById;
      deletedCount++;
    }
  });

  return deletedCount;
};

// DELETE - ลบ CountStockDetail ตาม count_stock_id และ sequence_no
export const deleteCountStockDetailByCountStockAndSequence = (
  countStockId: string,
  sequenceNo: number,
  deletedById: string
): boolean => {
  const detail = countStockDetails.find(
    (d) => d.count_stock_id === countStockId && d.sequence_no === sequenceNo
  );

  if (!detail) return false;

  return deleteCountStockDetail(detail.id, deletedById);
};

// RESTORE - กู้คืน CountStockDetail ที่ถูกลบ
export const restoreCountStockDetail = (
  id: string,
  restoredById: string
): CountStockDetail | null => {
  const index = countStockDetails.findIndex((detail) => detail.id === id);

  if (index === -1) {
    return null;
  }

  countStockDetails[index] = {
    ...countStockDetails[index],
    deleted_at: null,
    deleted_by_id: null,
    updated_at: getCurrentTimestamp(),
    updated_by_id: restoredById,
  };

  return countStockDetails[index];
};

// RESTORE - กู้คืน CountStockDetail ทั้งหมดของ count_stock
export const restoreCountStockDetailsByCountStockId = (
  countStockId: string,
  restoredById: string
): number => {
  let restoredCount = 0;

  countStockDetails.forEach((detail) => {
    if (detail.count_stock_id === countStockId && detail.deleted_at) {
      detail.deleted_at = null;
      detail.deleted_by_id = null;
      detail.updated_at = getCurrentTimestamp();
      detail.updated_by_id = restoredById;
      restoredCount++;
    }
  });

  return restoredCount;
};

// Utility function สำหรับล้างข้อมูลทั้งหมด (ใช้สำหรับ testing)
export const clearAllCountStockDetails = (): void => {
  countStockDetails.length = 0;
};

// Utility function สำหรับนับจำนวน CountStockDetail
export const getCountStockDetailCount = (): number => {
  return countStockDetails.length;
};

// Utility function สำหรับนับจำนวน CountStockDetail ที่ไม่ถูกลบ
export const getActiveCountStockDetailCount = (): number => {
  return countStockDetails.filter((detail) => !detail.deleted_at).length;
};

// Utility function สำหรับนับจำนวน CountStockDetail ของ count_stock
export const getCountStockDetailCountByCountStockId = (
  countStockId: string
): number => {
  return countStockDetails.filter(
    (detail) => detail.count_stock_id === countStockId && !detail.deleted_at
  ).length;
};

// Utility function สำหรับนับจำนวน CountStockDetail ของ product
export const getCountStockDetailCountByProductId = (
  productId: string
): number => {
  return countStockDetails.filter(
    (detail) => detail.product_id === productId && !detail.deleted_at
  ).length;
};

// Utility function สำหรับหาลำดับ sequence_no ถัดไปของ count_stock
export const getNextCountStockSequenceNo = (countStockId: string): number => {
  const details = getCountStockDetailsByCountStockId(countStockId);
  if (details.length === 0) return 1;

  const maxSequence = Math.max(
    ...details.map((d: CountStockDetail) => d.sequence_no)
  );
  return maxSequence + 1;
};

// Utility function สำหรับค้นหา CountStockDetail แบบ advanced search
export const searchCountStockDetails = (searchCriteria: {
  count_stock_id?: string;
  product_id?: string;
  product_name?: string;
  qty?: number;
  description?: string;
  note?: string;
  created_by_id?: string;
  is_deleted?: boolean;
  start_date?: string;
  end_date?: string;
}): CountStockDetail[] => {
  return countStockDetails.filter((detail) => {
    // ตรวจสอบ count_stock_id
    if (
      searchCriteria.count_stock_id &&
      detail.count_stock_id !== searchCriteria.count_stock_id
    ) {
      return false;
    }

    // ตรวจสอบ product_id
    if (
      searchCriteria.product_id &&
      detail.product_id !== searchCriteria.product_id
    ) {
      return false;
    }

    // ตรวจสอบ product_name
    if (
      searchCriteria.product_name &&
      !detail.product_name
        .toLowerCase()
        .includes(searchCriteria.product_name.toLowerCase())
    ) {
      return false;
    }

    // ตรวจสอบ qty
    if (searchCriteria.qty && detail.qty !== searchCriteria.qty) {
      return false;
    }

    // ตรวจสอบ description
    if (
      searchCriteria.description &&
      !detail.description
        .toLowerCase()
        .includes(searchCriteria.description.toLowerCase())
    ) {
      return false;
    }

    // ตรวจสอบ note
    if (
      searchCriteria.note &&
      !detail.note.toLowerCase().includes(searchCriteria.note.toLowerCase())
    ) {
      return false;
    }

    // ตรวจสอบ created_by_id
    if (
      searchCriteria.created_by_id &&
      detail.created_by_id !== searchCriteria.created_by_id
    ) {
      return false;
    }

    // ตรวจสอบสถานะการลบ
    if (searchCriteria.is_deleted !== undefined) {
      const isDeleted = !!detail.deleted_at;
      if (isDeleted !== searchCriteria.is_deleted) {
        return false;
      }
    }

    // ตรวจสอบช่วงเวลา
    if (searchCriteria.start_date || searchCriteria.end_date) {
      const detailDate = new Date(detail.created_at);

      if (searchCriteria.start_date) {
        const startDate = new Date(searchCriteria.start_date);
        if (detailDate < startDate) {
          return false;
        }
      }

      if (searchCriteria.end_date) {
        const endDate = new Date(searchCriteria.end_date);
        if (detailDate > endDate) {
          return false;
        }
      }
    }

    return true;
  });
};

// Utility function สำหรับตรวจสอบ sequence_no ซ้ำใน count_stock
export const isSequenceNoExistsInCountStock = (
  countStockId: string,
  sequenceNo: number
): boolean => {
  return countStockDetails.some(
    (detail) =>
      detail.count_stock_id === countStockId &&
      detail.sequence_no === sequenceNo &&
      !detail.deleted_at
  );
};

// Utility function สำหรับตรวจสอบ sequence_no ซ้ำทั้งหมด
export const isCountStockSequenceNoExistsAll = (
  countStockId: string,
  sequenceNo: number
): boolean => {
  return countStockDetails.some(
    (detail) =>
      detail.count_stock_id === countStockId &&
      detail.sequence_no === sequenceNo
  );
};

// Utility function สำหรับลบ CountStockDetail ทั้งหมดของ count_stock (hard delete)
export const hardDeleteCountStockDetailsByCountStockId = (
  countStockId: string
): number => {
  const initialLength = countStockDetails.length;
  const filteredDetails = countStockDetails.filter(
    (detail) => detail.count_stock_id !== countStockId
  );
  const deletedCount = initialLength - filteredDetails.length;

  // แทนที่ array เดิม
  countStockDetails.length = 0;
  countStockDetails.push(...filteredDetails);

  return deletedCount;
};

// Utility function สำหรับลบ CountStockDetail ทั้งหมดของ product (hard delete)
export const hardDeleteCountStockDetailsByProductId = (
  productId: string
): number => {
  const initialLength = countStockDetails.length;
  const filteredDetails = countStockDetails.filter(
    (detail) => detail.product_id !== productId
  );
  const deletedCount = initialLength - filteredDetails.length;

  // แทนที่ array เดิม
  countStockDetails.length = 0;
  countStockDetails.push(...filteredDetails);

  return deletedCount;
};
