import { generateId, getCurrentTimestamp } from "@/libs/utils";
import { getUuidByName } from "./mapping.uuid";
import { unitConversions } from "./tb_unit_conversion";


export interface LastPurchaseByProductId {
  at_date: Date,
  vendor_id?: string | null,
  vendor_name: string | null,
  last_purchase_price: Number | null,
  last_purchase_date: string | null,
  currency_id: string,
  currency_name: string,
  exchange_rate: Number
}


export interface PriceListByProductId {
  at_date: Date,
  pricelist: {
    vendor_id?: string | null,
    vendor_name: string | null,
    price: Number | null,
    currency_id: string,
    currency_name: string,
    exchange_rate: Number
  }[],
}

export interface Product {
  id: string;
  sku: string;
  name: string;
  local_name: string;
  description: string | null;
  inventory_unit_id: string;
  inventory_unit_name: string;
  product_status_type: "active" | "inactive" | "discontinued";
  product_item_group_id: string;
  is_used_in_recipe: boolean;
  is_sold_directly: boolean;
  barcode: string | null;
  price_deviation_limit: string;
  qty_deviation_limit: string;
  note: string | null;
  info: any;
  dimension: any;
  created_at: string;
  created_by_id: string;
  updated_at: string;
  updated_by_id: string | null;
  deleted_at: string | null;
  deleted_by_id: string | null;
}

export const products: Product[] = [
  {
    id: getUuidByName("PRODUCT_01"),
    sku: "PRODUCT_CODE_01",
    name: "Beef Tenderloin",
    local_name: "เนื้อสันใน",
    description: null,
    inventory_unit_id: getUuidByName("UNIT_01"),
    inventory_unit_name: "KG",
    product_status_type: "active",
    product_item_group_id: getUuidByName("PRODUCT_ITEM_GROUP_01"),
    is_used_in_recipe: true,
    is_sold_directly: false,
    barcode: null,
    price_deviation_limit: "0.00000",
    qty_deviation_limit: "0.00000",
    note: null,
    info: null,
    dimension: null,
    created_at: "2025-07-29T01:05:40.575Z",
    created_by_id: getUuidByName("USER_01"),
    updated_at: "2025-07-29T01:05:40.576Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("PRODUCT_02"),
    sku: "PRODUCT_CODE_02",
    name: "Ground Beef A",
    local_name: "เนื้อบด A",
    description: null,
    inventory_unit_id: getUuidByName("UNIT_01"),
    inventory_unit_name: "KG",
    product_status_type: "active",
    product_item_group_id: getUuidByName("PRODUCT_ITEM_GROUP_01"),
    is_used_in_recipe: true,
    is_sold_directly: false,
    barcode: null,
    price_deviation_limit: "0.00000",
    qty_deviation_limit: "0.00000",
    note: null,
    info: null,
    dimension: null,
    created_at: "2025-07-29T01:05:40.624Z",
    created_by_id: getUuidByName("USER_01"),
    updated_at: "2025-07-29T01:05:40.625Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("PRODUCT_03"),
    sku: "PRODUCT_CODE_03",
    name: "Beef Tenderloin Grade A",
    local_name: "เนื้อสันในโคขุนแต่ง เกรด A",
    description: null,
    inventory_unit_id: getUuidByName("UNIT_01"),
    inventory_unit_name: "KG",
    product_status_type: "active",
    product_item_group_id: getUuidByName("PRODUCT_ITEM_GROUP_01"),
    is_used_in_recipe: true,
    is_sold_directly: false,
    barcode: null,
    price_deviation_limit: "0.00000",
    qty_deviation_limit: "0.00000",
    note: null,
    info: null,
    dimension: null,
    created_at: "2025-07-29T01:05:40.663Z",
    created_by_id: getUuidByName("USER_01"),
    updated_at: "2025-07-29T01:05:40.665Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("PRODUCT_04"),
    sku: "PRODUCT_CODE_04",
    name: "Beef Tenderloin Grade AAA",
    local_name: "เนื้อสันในโคขุนแต่ง เกรด AAA",
    description: null,
    inventory_unit_id: getUuidByName("UNIT_01"),
    inventory_unit_name: "KG",
    product_status_type: "active",
    product_item_group_id: getUuidByName("PRODUCT_ITEM_GROUP_01"),
    is_used_in_recipe: true,
    is_sold_directly: false,
    barcode: null,
    price_deviation_limit: "0.00000",
    qty_deviation_limit: "0.00000",
    note: null,
    info: null,
    dimension: null,
    created_at: "2025-07-29T01:05:40.699Z",
    created_by_id: getUuidByName("USER_01"),
    updated_at: "2025-07-29T01:05:40.700Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("PRODUCT_05"),
    sku: "PRODUCT_CODE_05",
    name: "Beef Hip Top",
    local_name: "เนื้อสะโพกโคขุน",
    description: null,
    inventory_unit_id: getUuidByName("UNIT_01"),
    inventory_unit_name: "KG",
    product_status_type: "active",
    product_item_group_id: getUuidByName("PRODUCT_ITEM_GROUP_01"),
    is_used_in_recipe: true,
    is_sold_directly: false,
    barcode: null,
    price_deviation_limit: "0.00000",
    qty_deviation_limit: "0.00000",
    note: null,
    info: null,
    dimension: null,
    created_at: "2025-07-29T01:05:40.732Z",
    created_by_id: getUuidByName("USER_01"),
    updated_at: "2025-07-29T01:05:40.733Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("PRODUCT_06"),
    sku: "PRODUCT_CODE_06",
    name: "Beef Burger 150G.",
    local_name: "เบอร์เกอร์เนื้อ 150กรัม",
    description: null,
    inventory_unit_id: getUuidByName("UNIT_01"),
    inventory_unit_name: "KG",
    product_status_type: "active",
    product_item_group_id: getUuidByName("PRODUCT_ITEM_GROUP_01"),
    is_used_in_recipe: true,
    is_sold_directly: false,
    barcode: null,
    price_deviation_limit: "0.00000",
    qty_deviation_limit: "0.00000",
    note: null,
    info: null,
    dimension: null,
    created_at: "2025-07-29T01:05:40.768Z",
    created_by_id: getUuidByName("USER_01"),
    updated_at: "2025-07-29T01:05:40.769Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("PRODUCT_07"),
    sku: "PRODUCT_CODE_07",
    name: "Ground Pork",
    local_name: "หมูบด",
    description: null,
    inventory_unit_id: getUuidByName("UNIT_01"),
    inventory_unit_name: "KG",
    product_status_type: "active",
    product_item_group_id: getUuidByName("PRODUCT_ITEM_GROUP_01"),
    is_used_in_recipe: true,
    is_sold_directly: false,
    barcode: null,
    price_deviation_limit: "0.00000",
    qty_deviation_limit: "0.00000",
    note: null,
    info: null,
    dimension: null,
    created_at: "2025-07-29T01:05:40.802Z",
    created_by_id: getUuidByName("USER_01"),
    updated_at: "2025-07-29T01:05:40.803Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("PRODUCT_08"),
    sku: "PRODUCT_CODE_08",
    name: "Pork Loin",
    local_name: "หมูสันนอก",
    description: null,
    inventory_unit_id: getUuidByName("UNIT_01"),
    inventory_unit_name: "KG",
    product_status_type: "active",
    product_item_group_id: getUuidByName("PRODUCT_ITEM_GROUP_01"),
    is_used_in_recipe: true,
    is_sold_directly: false,
    barcode: null,
    price_deviation_limit: "0.00000",
    qty_deviation_limit: "0.00000",
    note: null,
    info: null,
    dimension: null,
    created_at: "2025-07-29T01:05:40.833Z",
    created_by_id: getUuidByName("USER_01"),
    updated_at: "2025-07-29T01:05:40.834Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("PRODUCT_09"),
    sku: "PRODUCT_CODE_09",
    name: "Pork Top Round",
    local_name: "หมูสะโพก",
    description: null,
    inventory_unit_id: getUuidByName("UNIT_01"),
    inventory_unit_name: "KG",
    product_status_type: "active",
    product_item_group_id: getUuidByName("PRODUCT_ITEM_GROUP_01"),
    is_used_in_recipe: true,
    is_sold_directly: false,
    barcode: null,
    price_deviation_limit: "0.00000",
    qty_deviation_limit: "0.00000",
    note: null,
    info: null,
    dimension: null,
    created_at: "2025-07-29T01:05:40.869Z",
    created_by_id: getUuidByName("USER_01"),
    updated_at: "2025-07-29T01:05:40.870Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("PRODUCT_10"),
    sku: "PRODUCT_CODE_10",
    name: "Pork Top Round Slice",
    local_name: "หมูสะโพกหั่นชิ้น",
    description: null,
    inventory_unit_id: getUuidByName("UNIT_01"),
    inventory_unit_name: "KG",
    product_status_type: "active",
    product_item_group_id: getUuidByName("PRODUCT_ITEM_GROUP_01"),
    is_used_in_recipe: true,
    is_sold_directly: false,
    barcode: null,
    price_deviation_limit: "0.00000",
    qty_deviation_limit: "0.00000",
    note: null,
    info: null,
    dimension: null,
    created_at: "2025-07-29T01:05:40.902Z",
    created_by_id: getUuidByName("USER_01"),
    updated_at: "2025-07-29T01:05:40.903Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },

  // Electronics & Technology
  {
    id: getUuidByName("PRODUCT_11"),
    sku: "ELEC-LAPTOP-001",
    name: "Business Laptop 15 inch",
    local_name: "โน้ตบุ๊คสำหรับงาน 15 นิ้ว",
    description: "High-performance laptop for business use with Intel i7 processor",
    inventory_unit_id: getUuidByName("UNIT_11"),
    inventory_unit_name: "PCS",
    product_status_type: "active",
    product_item_group_id: getUuidByName("PRODUCT_ITEM_GROUP_02"),
    is_used_in_recipe: false,
    is_sold_directly: true,
    barcode: "8851234567890",
    price_deviation_limit: "5.00000",
    qty_deviation_limit: "1.00000",
    note: "Requires signature on delivery",
    info: {
      category: "Electronics",
      brand: "TechPro",
      warranty: "2 years",
      specifications: {
        processor: "Intel i7-12700H",
        ram: "16GB DDR4",
        storage: "512GB NVMe SSD",
        display: "15.6 inch Full HD"
      }
    },
    dimension: {
      length: 35.7,
      width: 24.2,
      height: 1.9,
      weight: 1.8
    },
    created_at: "2025-01-15T08:00:00.000Z",
    created_by_id: getUuidByName("USER_02"),
    updated_at: "2025-01-15T08:00:00.000Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("PRODUCT_12"),
    sku: "ELEC-PHONE-001",
    name: "Smartphone Pro Max 128GB",
    local_name: "สมาร์ทโฟนโปรแม็กซ์ 128GB",
    description: "Premium smartphone with advanced camera system",
    inventory_unit_id: getUuidByName("UNIT_11"),
    inventory_unit_name: "PCS",
    product_status_type: "active",
    product_item_group_id: getUuidByName("PRODUCT_ITEM_GROUP_02"),
    is_used_in_recipe: false,
    is_sold_directly: true,
    barcode: "8851234567891",
    price_deviation_limit: "3.00000",
    qty_deviation_limit: "1.00000",
    note: "High-value item - secure storage required",
    info: {
      category: "Electronics",
      brand: "TechMobile",
      warranty: "1 year",
      specifications: {
        storage: "128GB",
        ram: "8GB",
        camera: "108MP Triple Camera",
        battery: "4500mAh"
      }
    },
    dimension: {
      length: 16.1,
      width: 7.8,
      height: 0.8,
      weight: 0.228
    },
    created_at: "2025-01-15T08:30:00.000Z",
    created_by_id: getUuidByName("USER_02"),
    updated_at: "2025-01-15T08:30:00.000Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },

  // Beverages & Food
  {
    id: getUuidByName("PRODUCT_13"),
    sku: "BEV-COFFEE-001",
    name: "Premium Coffee Beans 1KG",
    local_name: "เมล็ดกาแฟพรีเมี่ยม 1กิโลกรัม",
    description: "Arabica coffee beans from northern Thailand mountains",
    inventory_unit_id: getUuidByName("UNIT_01"),
    inventory_unit_name: "KG",
    product_status_type: "active",
    product_item_group_id: getUuidByName("PRODUCT_ITEM_GROUP_03"),
    is_used_in_recipe: true,
    is_sold_directly: true,
    barcode: "8851234567892",
    price_deviation_limit: "2.00000",
    qty_deviation_limit: "0.50000",
    note: "Store in cool, dry place",
    info: {
      category: "Beverages",
      origin: "Chiang Mai, Thailand",
      roast_level: "Medium",
      expiry_months: 12,
      certifications: ["Organic", "Fair Trade"]
    },
    dimension: {
      length: 30,
      width: 20,
      height: 5,
      weight: 1.0
    },
    created_at: "2025-01-15T09:00:00.000Z",
    created_by_id: getUuidByName("USER_03"),
    updated_at: "2025-01-15T09:00:00.000Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("PRODUCT_14"),
    sku: "BEV-JUICE-001",
    name: "Fresh Orange Juice 1L",
    local_name: "น้ำส้มคั้นสด 1ลิตร",
    description: "100% pure orange juice with no added sugar",
    inventory_unit_id: getUuidByName("UNIT_12"),
    inventory_unit_name: "LTR",
    product_status_type: "active",
    product_item_group_id: getUuidByName("PRODUCT_ITEM_GROUP_03"),
    is_used_in_recipe: true,
    is_sold_directly: true,
    barcode: "8851234567893",
    price_deviation_limit: "1.00000",
    qty_deviation_limit: "0.25000",
    note: "Refrigerate after opening - consume within 3 days",
    info: {
      category: "Beverages",
      type: "Fresh Juice",
      refrigeration_required: true,
      shelf_life_days: 7,
      nutritional_info: {
        vitamin_c: "High",
        calories_per_100ml: 45
      }
    },
    dimension: {
      length: 8,
      width: 8,
      height: 25,
      weight: 1.05
    },
    created_at: "2025-01-15T09:30:00.000Z",
    created_by_id: getUuidByName("USER_03"),
    updated_at: "2025-01-15T09:30:00.000Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },

  // Office Supplies & Stationery
  {
    id: getUuidByName("PRODUCT_15"),
    sku: "OFF-PAPER-001",
    name: "A4 Copy Paper 80GSM - 500 Sheets",
    local_name: "กระดาษถ่ายเอกสาร A4 80แกรม 500แผ่น",
    description: "High-quality white copy paper suitable for printing and photocopying",
    inventory_unit_id: getUuidByName("UNIT_13"),
    inventory_unit_name: "PACK",
    product_status_type: "active",
    product_item_group_id: getUuidByName("PRODUCT_ITEM_GROUP_04"),
    is_used_in_recipe: false,
    is_sold_directly: true,
    barcode: "8851234567894",
    price_deviation_limit: "1.00000",
    qty_deviation_limit: "2.00000",
    note: "Store in dry conditions to prevent moisture damage",
    info: {
      category: "Office Supplies",
      paper_size: "A4 (210 x 297 mm)",
      weight: "80 GSM",
      whiteness: "96% CIE",
      eco_friendly: true
    },
    dimension: {
      length: 21,
      width: 29.7,
      height: 5,
      weight: 2.5
    },
    created_at: "2025-01-15T10:00:00.000Z",
    created_by_id: getUuidByName("USER_04"),
    updated_at: "2025-01-15T10:00:00.000Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("PRODUCT_16"),
    sku: "OFF-PEN-001",
    name: "Ballpoint Pen Blue - Pack of 12",
    local_name: "ปากกาลูกลื่นสีน้ำเงิน แพ็ค 12 ด้าม",
    description: "Smooth writing ballpoint pens with comfortable grip",
    inventory_unit_id: getUuidByName("UNIT_13"),
    inventory_unit_name: "PACK",
    product_status_type: "active",
    product_item_group_id: getUuidByName("PRODUCT_ITEM_GROUP_04"),
    is_used_in_recipe: false,
    is_sold_directly: true,
    barcode: "8851234567895",
    price_deviation_limit: "0.50000",
    qty_deviation_limit: "1.00000",
    note: "Popular office essential",
    info: {
      category: "Office Supplies",
      ink_color: "Blue",
      quantity_per_pack: 12,
      tip_size: "1.0mm",
      refillable: false
    },
    dimension: {
      length: 15,
      width: 10,
      height: 2,
      weight: 0.15
    },
    created_at: "2025-01-15T10:30:00.000Z",
    created_by_id: getUuidByName("USER_04"),
    updated_at: "2025-01-15T10:30:00.000Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },

  // Cleaning & Household
  {
    id: getUuidByName("PRODUCT_17"),
    sku: "CLN-DETERGENT-001",
    name: "Laundry Detergent Powder 3KG",
    local_name: "ผงซักฟอกกลิ่นหอม 3กิโลกรัม",
    description: "Concentrated laundry detergent powder with fresh scent",
    inventory_unit_id: getUuidByName("UNIT_01"),
    inventory_unit_name: "KG",
    product_status_type: "active",
    product_item_group_id: getUuidByName("PRODUCT_ITEM_GROUP_05"),
    is_used_in_recipe: false,
    is_sold_directly: true,
    barcode: "8851234567896",
    price_deviation_limit: "1.50000",
    qty_deviation_limit: "0.25000",
    note: "Keep away from children",
    info: {
      category: "Household",
      type: "Laundry Detergent",
      concentrated: true,
      scent: "Fresh Spring",
      suitable_for: ["Cotton", "Synthetic fabrics"],
      phosphate_free: true
    },
    dimension: {
      length: 25,
      width: 18,
      height: 12,
      weight: 3.2
    },
    created_at: "2025-01-15T11:00:00.000Z",
    created_by_id: getUuidByName("USER_05"),
    updated_at: "2025-01-15T11:00:00.000Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("PRODUCT_18"),
    sku: "CLN-SOAP-001",
    name: "Antibacterial Hand Soap 250ML",
    local_name: "สบู่เหลวล้างมือฆ่าเชื้อ 250มล.",
    description: "Gentle antibacterial hand soap with moisturizing formula",
    inventory_unit_id: getUuidByName("UNIT_08"),
    inventory_unit_name: "BTL",
    product_status_type: "active",
    product_item_group_id: getUuidByName("PRODUCT_ITEM_GROUP_05"),
    is_used_in_recipe: false,
    is_sold_directly: true,
    barcode: "8851234567897",
    price_deviation_limit: "0.75000",
    qty_deviation_limit: "1.00000",
    note: "Essential hygiene product",
    info: {
      category: "Household",
      type: "Hand Soap",
      volume_ml: 250,
      antibacterial: true,
      skin_type: "All skin types",
      pump_dispenser: true
    },
    dimension: {
      length: 6,
      width: 6,
      height: 18,
      weight: 0.3
    },
    created_at: "2025-01-15T11:30:00.000Z",
    created_by_id: getUuidByName("USER_05"),
    updated_at: "2025-01-15T11:30:00.000Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },

  // Health & Personal Care
  {
    id: getUuidByName("PRODUCT_19"),
    sku: "HLT-VITAMIN-001",
    name: "Vitamin C 1000mg - 30 Tablets",
    local_name: "วิตามินซี 1000มก. 30 เม็ด",
    description: "High-strength vitamin C tablets for immune system support",
    inventory_unit_id: getUuidByName("UNIT_13"),
    inventory_unit_name: "PACK",
    product_status_type: "active",
    product_item_group_id: getUuidByName("PRODUCT_ITEM_GROUP_06"),
    is_used_in_recipe: false,
    is_sold_directly: true,
    barcode: "8851234567898",
    price_deviation_limit: "2.00000",
    qty_deviation_limit: "1.00000",
    note: "Requires pharmacy license to sell - controlled item",
    info: {
      category: "Health & Wellness",
      type: "Dietary Supplement",
      strength: "1000mg",
      quantity: 30,
      dosage: "1 tablet daily",
      fda_approved: true,
      expiry_months: 24
    },
    dimension: {
      length: 8,
      width: 5,
      height: 8,
      weight: 0.08
    },
    created_at: "2025-01-15T12:00:00.000Z",
    created_by_id: getUuidByName("USER_06"),
    updated_at: "2025-01-15T12:00:00.000Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("PRODUCT_20"),
    sku: "HLT-MASK-001",
    name: "Surgical Face Mask - Box of 50",
    local_name: "หน้ากากอนามัยทางการแพทย์ กล่อง 50 ชิ้น",
    description: "3-layer disposable surgical masks for medical and general use",
    inventory_unit_id: getUuidByName("UNIT_03"),
    inventory_unit_name: "BOX",
    product_status_type: "active",
    product_item_group_id: getUuidByName("PRODUCT_ITEM_GROUP_06"),
    is_used_in_recipe: false,
    is_sold_directly: true,
    barcode: "8851234567899",
    price_deviation_limit: "1.00000",
    qty_deviation_limit: "2.00000",
    note: "High demand item during health emergencies",
    info: {
      category: "Health & Wellness",
      type: "Protective Equipment",
      layers: 3,
      quantity_per_box: 50,
      filtration_efficiency: "95%",
      medical_grade: true,
      ce_certified: true
    },
    dimension: {
      length: 20,
      width: 15,
      height: 10,
      weight: 0.25
    },
    created_at: "2025-01-15T12:30:00.000Z",
    created_by_id: getUuidByName("USER_06"),
    updated_at: "2025-01-15T12:30:00.000Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },

  // Sports & Recreation
  {
    id: getUuidByName("PRODUCT_21"),
    sku: "SPT-WATER-001",
    name: "Sports Water Bottle 750ML",
    local_name: "ขวดน้ำสำหรับกีฬา 750มล.",
    description: "BPA-free sports water bottle with leak-proof cap",
    inventory_unit_id: getUuidByName("UNIT_11"),
    inventory_unit_name: "PCS",
    product_status_type: "active",
    product_item_group_id: getUuidByName("PRODUCT_ITEM_GROUP_07"),
    is_used_in_recipe: false,
    is_sold_directly: true,
    barcode: "8851234567900",
    price_deviation_limit: "1.25000",
    qty_deviation_limit: "1.00000",
    note: "Popular fitness accessory",
    info: {
      category: "Sports & Recreation",
      type: "Water Bottle",
      capacity_ml: 750,
      material: "BPA-free Plastic",
      leak_proof: true,
      dishwasher_safe: true,
      colors: ["Blue", "Red", "Black", "Green"]
    },
    dimension: {
      length: 7,
      width: 7,
      height: 26,
      weight: 0.15
    },
    created_at: "2025-01-15T13:00:00.000Z",
    created_by_id: getUuidByName("USER_07"),
    updated_at: "2025-01-15T13:00:00.000Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("PRODUCT_22"),
    sku: "SPT-TOWEL-001",
    name: "Microfiber Sports Towel 30x60cm",
    local_name: "ผ้าเช็ดตัวไมโครไฟเบอร์สำหรับกีฬา 30x60ซม.",
    description: "Quick-dry microfiber towel perfect for gym and outdoor activities",
    inventory_unit_id: getUuidByName("UNIT_11"),
    inventory_unit_name: "PCS",
    product_status_type: "active",
    product_item_group_id: getUuidByName("PRODUCT_ITEM_GROUP_07"),
    is_used_in_recipe: false,
    is_sold_directly: true,
    barcode: "8851234567901",
    price_deviation_limit: "0.75000",
    qty_deviation_limit: "1.00000",
    note: "Lightweight and compact",
    info: {
      category: "Sports & Recreation",
      type: "Sports Towel",
      material: "Microfiber",
      size_cm: "30x60",
      quick_dry: true,
      antibacterial: true,
      machine_washable: true
    },
    dimension: {
      length: 30,
      width: 60,
      height: 0.3,
      weight: 0.1
    },
    created_at: "2025-01-15T13:30:00.000Z",
    created_by_id: getUuidByName("USER_07"),
    updated_at: "2025-01-15T13:30:00.000Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },

  // Automotive & Tools
  {
    id: getUuidByName("PRODUCT_23"),
    sku: "AUTO-OIL-001",
    name: "Engine Oil 5W-30 Synthetic 4L",
    local_name: "น้ำมันเครื่องสังเคราะห์ 5W-30 4ลิตร",
    description: "High-performance fully synthetic engine oil for modern vehicles",
    inventory_unit_id: getUuidByName("UNIT_12"),
    inventory_unit_name: "LTR",
    product_status_type: "active",
    product_item_group_id: getUuidByName("PRODUCT_ITEM_GROUP_08"),
    is_used_in_recipe: false,
    is_sold_directly: true,
    barcode: "8851234567902",
    price_deviation_limit: "3.00000",
    qty_deviation_limit: "0.25000",
    note: "Hazardous material - special storage requirements",
    info: {
      category: "Automotive",
      type: "Engine Oil",
      viscosity: "5W-30",
      oil_type: "Fully Synthetic",
      volume_liters: 4,
      suitable_for: ["Gasoline Engines", "Diesel Engines"],
      api_certification: "API SN/CF"
    },
    dimension: {
      length: 15,
      width: 15,
      height: 25,
      weight: 3.6
    },
    created_at: "2025-01-15T14:00:00.000Z",
    created_by_id: getUuidByName("USER_08"),
    updated_at: "2025-01-15T14:00:00.000Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("PRODUCT_24"),
    sku: "TOOL-WRENCH-001",
    name: "Adjustable Wrench Set 6-24mm",
    local_name: "ชุดประแจเลื่อน 6-24มม.",
    description: "Professional grade adjustable wrench set with ergonomic handles",
    inventory_unit_id: getUuidByName("UNIT_15"),
    inventory_unit_name: "SET",
    product_status_type: "active",
    product_item_group_id: getUuidByName("PRODUCT_ITEM_GROUP_08"),
    is_used_in_recipe: false,
    is_sold_directly: true,
    barcode: "8851234567903",
    price_deviation_limit: "2.50000",
    qty_deviation_limit: "1.00000",
    note: "Professional tool grade",
    info: {
      category: "Tools & Hardware",
      type: "Hand Tools",
      material: "Chrome Vanadium Steel",
      size_range: "6-24mm",
      pieces_per_set: 3,
      finish: "Chrome Plated",
      warranty_years: 5
    },
    dimension: {
      length: 25,
      width: 15,
      height: 3,
      weight: 0.8
    },
    created_at: "2025-01-15T14:30:00.000Z",
    created_by_id: getUuidByName("USER_08"),
    updated_at: "2025-01-15T14:30:00.000Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },

  // Fashion & Apparel
  {
    id: getUuidByName("PRODUCT_25"),
    sku: "FSH-SHIRT-001",
    name: "Cotton T-Shirt - Size M",
    local_name: "เสื้อยืดผ้าคอตตอน ไซส์ M",
    description: "100% cotton casual t-shirt with comfortable fit",
    inventory_unit_id: getUuidByName("UNIT_11"),
    inventory_unit_name: "PCS",
    product_status_type: "active",
    product_item_group_id: getUuidByName("PRODUCT_ITEM_GROUP_09"),
    is_used_in_recipe: false,
    is_sold_directly: true,
    barcode: "8851234567904",
    price_deviation_limit: "1.50000",
    qty_deviation_limit: "2.00000",
    note: "Available in multiple sizes and colors",
    info: {
      category: "Fashion & Apparel",
      type: "T-Shirt",
      material: "100% Cotton",
      size: "Medium",
      colors: ["White", "Black", "Navy", "Grey"],
      fit_type: "Regular Fit",
      care_instructions: "Machine washable"
    },
    dimension: {
      length: 35,
      width: 25,
      height: 2,
      weight: 0.2
    },
    created_at: "2025-01-15T15:00:00.000Z",
    created_by_id: getUuidByName("USER_09"),
    updated_at: "2025-01-15T15:00:00.000Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("PRODUCT_26"),
    sku: "FSH-SHOES-001",
    name: "Running Shoes - Size 42",
    local_name: "รองเท้าวิ่ง ไซส์ 42",
    description: "Lightweight running shoes with cushioned sole",
    inventory_unit_id: getUuidByName("UNIT_14"),
    inventory_unit_name: "PAIR",
    product_status_type: "active",
    product_item_group_id: getUuidByName("PRODUCT_ITEM_GROUP_09"),
    is_used_in_recipe: false,
    is_sold_directly: true,
    barcode: "8851234567905",
    price_deviation_limit: "4.00000",
    qty_deviation_limit: "1.00000",
    note: "Popular athletic footwear",
    info: {
      category: "Fashion & Apparel",
      type: "Athletic Shoes",
      size_eu: 42,
      size_us: 9,
      material: "Synthetic mesh upper",
      sole_type: "EVA foam midsole",
      colors: ["Black/White", "Navy/Blue", "Grey/Red"]
    },
    dimension: {
      length: 30,
      width: 12,
      height: 12,
      weight: 0.6
    },
    created_at: "2025-01-15T15:30:00.000Z",
    created_by_id: getUuidByName("USER_09"),
    updated_at: "2025-01-15T15:30:00.000Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },

  // Books & Media
  {
    id: getUuidByName("PRODUCT_27"),
    sku: "BOOK-BUSINESS-001",
    name: "Business Strategy Handbook",
    local_name: "คู่มือกลยุทธ์ทางธุรกิจ",
    description: "Comprehensive guide to modern business strategy and management",
    inventory_unit_id: getUuidByName("UNIT_11"),
    inventory_unit_name: "PCS",
    product_status_type: "active",
    product_item_group_id: getUuidByName("PRODUCT_ITEM_GROUP_10"),
    is_used_in_recipe: false,
    is_sold_directly: true,
    barcode: "9781234567890",
    price_deviation_limit: "2.00000",
    qty_deviation_limit: "1.00000",
    note: "Educational and professional development",
    info: {
      category: "Books & Media",
      type: "Business Book",
      author: "Dr. John Smith",
      pages: 450,
      language: "English/Thai",
      isbn: "9781234567890",
      publisher: "Business Press",
      edition: "3rd Edition"
    },
    dimension: {
      length: 24,
      width: 17,
      height: 3,
      weight: 0.8
    },
    created_at: "2025-01-15T16:00:00.000Z",
    created_by_id: getUuidByName("USER_10"),
    updated_at: "2025-01-15T16:00:00.000Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },

  // Pet Supplies
  {
    id: getUuidByName("PRODUCT_28"),
    sku: "PET-FOOD-001",
    name: "Premium Dog Food 15KG",
    local_name: "อาหารสุนัขเกรดพรีเมี่ยม 15กิโลกรัม",
    description: "High-quality dry dog food with chicken and rice formula",
    inventory_unit_id: getUuidByName("UNIT_01"),
    inventory_unit_name: "KG",
    product_status_type: "active",
    product_item_group_id: getUuidByName("PRODUCT_ITEM_GROUP_11"),
    is_used_in_recipe: false,
    is_sold_directly: true,
    barcode: "8851234567906",
    price_deviation_limit: "3.00000",
    qty_deviation_limit: "0.50000",
    note: "Store in cool, dry place away from pests",
    info: {
      category: "Pet Supplies",
      type: "Dog Food",
      main_ingredient: "Chicken",
      age_group: "Adult",
      breed_size: "All sizes",
      protein_content: "26%",
      expiry_months: 18
    },
    dimension: {
      length: 45,
      width: 30,
      height: 15,
      weight: 15.5
    },
    created_at: "2025-01-15T16:30:00.000Z",
    created_by_id: getUuidByName("USER_11"),
    updated_at: "2025-01-15T16:30:00.000Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },

  // Garden & Outdoor
  {
    id: getUuidByName("PRODUCT_29"),
    sku: "GAR-FERTILIZER-001",
    name: "Organic Plant Fertilizer 5KG",
    local_name: "ปุ๋ยพืชออร์แกนิค 5กิโลกรัม",
    description: "Natural organic fertilizer for vegetables and flowering plants",
    inventory_unit_id: getUuidByName("UNIT_01"),
    inventory_unit_name: "KG",
    product_status_type: "active",
    product_item_group_id: getUuidByName("PRODUCT_ITEM_GROUP_12"),
    is_used_in_recipe: false,
    is_sold_directly: true,
    barcode: "8851234567907",
    price_deviation_limit: "1.75000",
    qty_deviation_limit: "0.25000",
    note: "Organic certified - safe for food crops",
    info: {
      category: "Garden & Outdoor",
      type: "Organic Fertilizer",
      npk_ratio: "4-3-2",
      organic_certified: true,
      suitable_for: ["Vegetables", "Flowers", "Herbs"],
      application_rate: "50g per plant"
    },
    dimension: {
      length: 30,
      width: 20,
      height: 10,
      weight: 5.2
    },
    created_at: "2025-01-15T17:00:00.000Z",
    created_by_id: getUuidByName("USER_12"),
    updated_at: "2025-01-15T17:00:00.000Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },

  // Home & Kitchen
  {
    id: getUuidByName("PRODUCT_30"),
    sku: "KIT-COOKWARE-001",
    name: "Non-stick Frying Pan 28cm",
    local_name: "กะทะเคลือบไม่ติด 28เซนติเมตร",
    description: "High-quality non-stick frying pan with ergonomic handle",
    inventory_unit_id: getUuidByName("UNIT_11"),
    inventory_unit_name: "PCS",
    product_status_type: "active",
    product_item_group_id: getUuidByName("PRODUCT_ITEM_GROUP_13"),
    is_used_in_recipe: false,
    is_sold_directly: true,
    barcode: "8851234567908",
    price_deviation_limit: "2.25000",
    qty_deviation_limit: "1.00000",
    note: "Premium cookware - handle with care",
    info: {
      category: "Home & Kitchen",
      type: "Cookware",
      size_cm: 28,
      material: "Aluminum with non-stick coating",
      induction_compatible: true,
      dishwasher_safe: true,
      warranty_years: 2
    },
    dimension: {
      length: 50,
      width: 28,
      height: 8,
      weight: 1.2
    },
    created_at: "2025-01-15T17:30:00.000Z",
    created_by_id: getUuidByName("USER_13"),
    updated_at: "2025-01-15T17:30:00.000Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
];

// CREATE - สร้าง Product ใหม่
export const createProduct = (
  productData: Omit<Product, "id" | "created_at" | "updated_at">
): Product => {
  const newProduct: Product = {
    ...productData,
    id: generateId(),
    created_at: getCurrentTimestamp(),
    updated_at: getCurrentTimestamp(),
  };

  products.push(newProduct);
  return newProduct;
};

// READ - อ่าน Product ทั้งหมด
export const getAllProducts = (): Product[] => {
  return [...products];
};

// READ - อ่าน Product ตาม ID
export const getProductById = (id: string): Product | undefined => {
  return products.find((product) => product.id === id);
};

// READ - อ่าน Product ตาม code
export const getProductByCode = (code: string): Product | undefined => {
  return products.find((product) => product.sku === code);
};

// READ - อ่าน Product ตาม name
export const getProductByName = (name: string): Product[] => {
  return products.filter(
    (product) =>
      product.name.toLowerCase().includes(name.toLowerCase()) ||
      (product.local_name &&
        product.local_name.toLowerCase().includes(name.toLowerCase()))
  );
};

// READ - อ่าน Product ตาม product_status_type
export const getProductsByStatus = (
  status: "active" | "inactive" | "discontinued"
): Product[] => {
  return products.filter((product) => product.product_status_type === status);
};

// READ - อ่าน Product ตาม product_item_group_id
export const getProductsByItemGroup = (itemGroupId: string): Product[] => {
  return products.filter(
    (product) => product.product_item_group_id === itemGroupId
  );
};

// READ - อ่าน Product ตาม inventory_unit_id
export const getProductsByInventoryUnit = (unitId: string): Product[] => {
  return products.filter((product) => product.inventory_unit_id === unitId);
};

// READ - อ่าน Product ที่ใช้ใน recipe
export const getProductsUsedInRecipe = (): Product[] => {
  return products.filter((product) => product.is_used_in_recipe);
};

// READ - อ่าน Product ที่ขายโดยตรง
export const getProductsSoldDirectly = (): Product[] => {
  return products.filter((product) => product.is_sold_directly);
};

// READ - อ่าน Product ที่มี barcode
export const getProductsWithBarcode = (): Product[] => {
  return products.filter((product) => product.barcode !== null);
};

// READ - อ่าน Product ที่มี SKU
export const getProductsWithSKU = (): Product[] => {
  return products.filter((product) => product.sku !== null);
};

// READ - อ่าน Product ตาม business_unit_code
export const getProductsByBusinessUnitCode = (businessUnitCode: string): Product[] => {
  return products;
};

// UPDATE - อัปเดต Product
export const updateProduct = (
  id: string,
  updateData: Partial<Omit<Product, "id" | "created_at" | "created_by_id">>
): Product | null => {
  const index = products.findIndex((product) => product.id === id);

  if (index === -1) {
    return null;
  }

  products[index] = {
    ...products[index],
    ...updateData,
    updated_at: getCurrentTimestamp(),
  };

  return products[index];
};

// UPDATE - อัปเดต Product status
export const updateProductStatus = (
  id: string,
  status: "active" | "inactive" | "discontinued"
): Product | null => {
  return updateProduct(id, { product_status_type: status });
};

// UPDATE - อัปเดต Product price deviation limit
export const updateProductPriceDeviationLimit = (
  id: string,
  limit: string
): Product | null => {
  return updateProduct(id, { price_deviation_limit: limit });
};

// UPDATE - อัปเดต Product quantity deviation limit
export const updateProductQtyDeviationLimit = (
  id: string,
  limit: string
): Product | null => {
  return updateProduct(id, { qty_deviation_limit: limit });
};

// UPDATE - อัปเดต Product barcode
export const updateProductBarcode = (
  id: string,
  barcode: string
): Product | null => {
  return updateProduct(id, { barcode });
};

// UPDATE - อัปเดต Product SKU
export const updateProductSKU = (id: string, sku: string): Product | null => {
  return updateProduct(id, { sku });
};

// DELETE - ลบ Product (soft delete)
export const deleteProduct = (id: string, deletedById: string): boolean => {
  const index = products.findIndex((product) => product.id === id);

  if (index === -1) {
    return false;
  }

  products[index] = {
    ...products[index],
    deleted_at: getCurrentTimestamp(),
    deleted_by_id: deletedById,
  };

  return true;
};

// DELETE - ลบ Product แบบถาวร
export const hardDeleteProduct = (id: string): boolean => {
  const index = products.findIndex((product) => product.id === id);

  if (index === -1) {
    return false;
  }

  products.splice(index, 1);
  return true;
};

// DELETE - ลบ Product ตาม product_item_group_id
export const deleteProductsByItemGroup = (
  itemGroupId: string,
  deletedById: string
): number => {
  let deletedCount = 0;

  products.forEach((product) => {
    if (product.product_item_group_id === itemGroupId && !product.deleted_at) {
      product.deleted_at = getCurrentTimestamp();
      product.deleted_by_id = deletedById;
      deletedCount++;
    }
  });

  return deletedCount;
};

// Utility function สำหรับล้างข้อมูลทั้งหมด (ใช้สำหรับ testing)
export const clearAllProducts = (): void => {
  products.length = 0;
};

// Utility function สำหรับนับจำนวน Product
export const getProductCount = (): number => {
  return products.length;
};

// Utility function สำหรับนับจำนวน Product ที่ active
export const getActiveProductCount = (): number => {
  return products.filter((product) => product.product_status_type === "active")
    .length;
};

// Utility function สำหรับค้นหา Product แบบ advanced search
export const searchProducts = (searchCriteria: {
  code?: string;
  name?: string;
  local_name?: string;
  product_status_type?: string;
  product_item_group_id?: string;
  inventory_unit_id?: string;
  is_used_in_recipe?: boolean;
  is_sold_directly?: boolean;
  has_barcode?: boolean;
  has_sku?: boolean;
}): Product[] => {
  return products.filter((product) => {
    if (
      searchCriteria.code &&
      !product.sku.toLowerCase().includes(searchCriteria.code.toLowerCase())
    ) {
      return false;
    }

    if (
      searchCriteria.name &&
      !product.name.toLowerCase().includes(searchCriteria.name.toLowerCase())
    ) {
      return false;
    }

    if (
      searchCriteria.local_name &&
      product.local_name &&
      !product.local_name
        .toLowerCase()
        .includes(searchCriteria.local_name.toLowerCase())
    ) {
      return false;
    }

    if (
      searchCriteria.product_status_type &&
      product.product_status_type !== searchCriteria.product_status_type
    ) {
      return false;
    }

    if (
      searchCriteria.product_item_group_id &&
      product.product_item_group_id !== searchCriteria.product_item_group_id
    ) {
      return false;
    }

    if (
      searchCriteria.inventory_unit_id &&
      product.inventory_unit_id !== searchCriteria.inventory_unit_id
    ) {
      return false;
    }

    if (
      searchCriteria.is_used_in_recipe !== undefined &&
      product.is_used_in_recipe !== searchCriteria.is_used_in_recipe
    ) {
      return false;
    }

    if (
      searchCriteria.is_sold_directly !== undefined &&
      product.is_sold_directly !== searchCriteria.is_sold_directly
    ) {
      return false;
    }

    if (searchCriteria.has_barcode !== undefined) {
      const hasBarcode = product.barcode !== null;
      if (hasBarcode !== searchCriteria.has_barcode) {
        return false;
      }
    }

    if (searchCriteria.has_sku !== undefined) {
      const hasSKU = product.sku !== null;
      if (hasSKU !== searchCriteria.has_sku) {
        return false;
      }
    }

    return true;
  });
};

// Utility function สำหรับตรวจสอบ code ซ้ำ
export const isProductCodeExists = (code: string): boolean => {
  return products.some((product) => product.sku === code);
};

// Utility function สำหรับตรวจสอบ barcode ซ้ำ
export const isProductBarcodeExists = (barcode: string): boolean => {
  return products.some((product) => product.barcode === barcode);
};

// Utility function สำหรับตรวจสอบ SKU ซ้ำ
export const isProductSKUExists = (sku: string): boolean => {
  return products.some((product) => product.sku === sku);
};

export const getInventoryQtyByOrderQtyByProductId = (productId: string, orderQty: number, orderUnitId: string): number => {
  const product = products.find((product) => product.id === productId);
  if (!product) {
    return 0;
  }

  const orderUnit = unitConversions.find((unit) => unit.id === orderUnitId && product.id === unit.product_id && unit.unit_type === "order_unit");
  if (!orderUnit) {
    return 0;
  }

  return orderQty * orderUnit.from_unit_qty;
};

