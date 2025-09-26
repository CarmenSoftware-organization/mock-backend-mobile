import { generateId, getCurrentTimestamp } from "@/libs/utils";
import { getUuidByName } from "./mapping.uuid";
import { getProductById } from "./tb_product";

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

const product_01 = getProductById(getUuidByName("PRODUCT_01"));
const product_02 = getProductById(getUuidByName("PRODUCT_02"));
const product_03 = getProductById(getUuidByName("PRODUCT_03"));
const product_04 = getProductById(getUuidByName("PRODUCT_04"));
const product_05 = getProductById(getUuidByName("PRODUCT_05"));
const product_06 = getProductById(getUuidByName("PRODUCT_06"));
const product_07 = getProductById(getUuidByName("PRODUCT_07"));
const product_08 = getProductById(getUuidByName("PRODUCT_08"));
const product_09 = getProductById(getUuidByName("PRODUCT_09"));
const product_10 = getProductById(getUuidByName("PRODUCT_10"));

// Mock data สำหรับ PricelistDetail

export const pricelistDetails: PricelistDetail[] = [
  // PRICE_LIST_01 - Standard Retail (25+ items)
  {
    id: getUuidByName("PRICE_LIST_DETAIL_01"),
    pricelist_id: getUuidByName("PRICE_LIST_01"),
    sequence_no: 1,
    product_id: product_01?.id || "550e8400-e29b-41d4-a716-446655440201",
    product_name: product_01?.name || "Default Product 1",
    unit_id: product_01?.inventory_unit_id || "550e8400-e29b-41d4-a716-446655440301",
    unit_name: "ชิ้น",
    tax_profile_id: getUuidByName("TAX_PROFILE_01"),
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
    id: getUuidByName("PRICE_LIST_DETAIL_02"),
    pricelist_id: getUuidByName("PRICE_LIST_01"),
    sequence_no: 2,
    product_id: product_02?.id || "550e8400-e29b-41d4-a716-446655440202",
    product_name: product_02?.name || "Default Product 2",
    unit_id: product_02?.inventory_unit_id || "550e8400-e29b-41d4-a716-446655440301",
    unit_name: "ชิ้น",
    tax_profile_id: getUuidByName("TAX_PROFILE_01"),
    tax_profile_name: "VAT 7%",
    tax_rate: "7",
    price: "38000",
    price_without_vat: "35514.02",
    price_with_vat: "38000",
    is_active: true,
    description: "Samsung Galaxy S24",
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
    id: getUuidByName("PRICE_LIST_DETAIL_03"),
    pricelist_id: getUuidByName("PRICE_LIST_01"),
    sequence_no: 3,
    product_id: product_03?.id || "550e8400-e29b-41d4-a716-446655440203",
    product_name: product_03?.name || "Default Product 3",
    unit_id: product_03?.inventory_unit_id || "550e8400-e29b-41d4-a716-446655440301",
    unit_name: "ชิ้น",
    tax_profile_id: getUuidByName("TAX_PROFILE_01"),
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
  {
    id: getUuidByName("PRICE_LIST_DETAIL_04"),
    pricelist_id: getUuidByName("PRICE_LIST_02"),
    sequence_no: 1,
    product_id: product_01?.id || "550e8400-e29b-41d4-a716-446655440201",
    product_name: product_01?.name || "Default Product 1",
    unit_id: product_01?.inventory_unit_id || "550e8400-e29b-41d4-a716-446655440301",
    unit_name: "ชิ้น",
    tax_profile_id: getUuidByName("TAX_PROFILE_01"),
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
    id: getUuidByName("PRICE_LIST_DETAIL_05"),
    pricelist_id: getUuidByName("PRICE_LIST_02"),
    sequence_no: 2,
    product_id: product_02?.id || "550e8400-e29b-41d4-a716-446655440202",
    product_name: product_02?.name || "Default Product 2",
    unit_id: product_02?.inventory_unit_id || "550e8400-e29b-41d4-a716-446655440301",
    unit_name: "ชิ้น",
    tax_profile_id: getUuidByName("TAX_PROFILE_01"),
    tax_profile_name: "VAT 7%",
    tax_rate: "7",
    price: "38000",
    price_without_vat: "35514.02",
    price_with_vat: "38000",
    is_active: true,
    description: "Samsung Galaxy S24",
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
    id: getUuidByName("PRICE_LIST_DETAIL_06"),
    pricelist_id: getUuidByName("PRICE_LIST_02"),
    sequence_no: 3,
    product_id: product_03?.id || "550e8400-e29b-41d4-a716-446655440203",
    product_name: product_03?.name || "Default Product 3",
    unit_id: product_03?.inventory_unit_id || "550e8400-e29b-41d4-a716-446655440301",
    unit_name: "ชิ้น",
    tax_profile_id: getUuidByName("TAX_PROFILE_01"),
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
  {
    id: getUuidByName("PRICE_LIST_DETAIL_07"),
    pricelist_id: getUuidByName("PRICE_LIST_03"),
    sequence_no: 1,
    product_id: product_01?.id || "550e8400-e29b-41d4-a716-446655440201",
    product_name: product_01?.name || "Default Product 1",
    unit_id: product_01?.inventory_unit_id || "550e8400-e29b-41d4-a716-446655440301",
    unit_name: "ชิ้น",
    tax_profile_id: getUuidByName("TAX_PROFILE_01"),
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
    id: getUuidByName("PRICE_LIST_DETAIL_08"),
    pricelist_id: getUuidByName("PRICE_LIST_03"),
    sequence_no: 2,
    product_id: product_02?.id || "550e8400-e29b-41d4-a716-446655440202",
    product_name: product_02?.name || "Default Product 2",
    unit_id: product_02?.inventory_unit_id || "550e8400-e29b-41d4-a716-446655440301",
    unit_name: "ชิ้น",
    tax_profile_id: getUuidByName("TAX_PROFILE_01"),
    tax_profile_name: "VAT 7%",
    tax_rate: "7",
    price: "38000",
    price_without_vat: "35514.02",
    price_with_vat: "38000",
    is_active: true,
    description: "Samsung Galaxy S24",
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
    id: getUuidByName("PRICE_LIST_DETAIL_09"),
    pricelist_id: getUuidByName("PRICE_LIST_03"),
    sequence_no: 3,
    product_id: product_03?.id || "550e8400-e29b-41d4-a716-446655440203",
    product_name: product_03?.name || "Default Product 3",
    unit_id: product_03?.inventory_unit_id || "550e8400-e29b-41d4-a716-446655440301",
    unit_name: "ชิ้น",
    tax_profile_id: getUuidByName("TAX_PROFILE_01"),
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
  // Additional items for PRICE_LIST_01 - Standard Retail
  {
    id: getUuidByName("PRICE_LIST_DETAIL_10"),
    pricelist_id: getUuidByName("PRICE_LIST_01"),
    sequence_no: 4,
    product_id: product_04?.id || "550e8400-e29b-41d4-a716-446655440204",
    product_name: product_04?.name || "Default Product 4",
    unit_id: product_04?.inventory_unit_id || "550e8400-e29b-41d4-a716-446655440301",
    unit_name: "ชิ้น",
    tax_profile_id: getUuidByName("TAX_PROFILE_01"),
    tax_profile_name: "VAT 7%",
    tax_rate: "7",
    price: "15000",
    price_without_vat: "14018.69",
    price_with_vat: "15000",
    is_active: true,
    description: "MacBook Air M2",
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
    id: getUuidByName("PRICE_LIST_DETAIL_11"),
    pricelist_id: getUuidByName("PRICE_LIST_01"),
    sequence_no: 5,
    product_id: product_05?.id || "550e8400-e29b-41d4-a716-446655440205",
    product_name: product_05?.name || "Default Product 5",
    unit_id: product_05?.inventory_unit_id || "550e8400-e29b-41d4-a716-446655440301",
    unit_name: "ชิ้น",
    tax_profile_id: getUuidByName("TAX_PROFILE_01"),
    tax_profile_name: "VAT 7%",
    tax_rate: "7",
    price: "8500",
    price_without_vat: "7943.93",
    price_with_vat: "8500",
    is_active: true,
    description: "iPad Pro 11-inch",
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
    id: getUuidByName("PRICE_LIST_DETAIL_12"),
    pricelist_id: getUuidByName("PRICE_LIST_01"),
    sequence_no: 6,
    product_id: product_06?.id || "550e8400-e29b-41d4-a716-446655440206",
    product_name: product_06?.name || "Default Product 6",
    unit_id: product_06?.inventory_unit_id || "550e8400-e29b-41d4-a716-446655440301",
    unit_name: "ชิ้น",
    tax_profile_id: getUuidByName("TAX_PROFILE_01"),
    tax_profile_name: "VAT 7%",
    tax_rate: "7",
    price: "25000",
    price_without_vat: "23364.49",
    price_with_vat: "25000",
    is_active: true,
    description: "Dell XPS 13",
    note: "Standard retail price",
    info: { category: "Electronics", brand: "Dell" },
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
    id: getUuidByName("PRICE_LIST_DETAIL_13"),
    pricelist_id: getUuidByName("PRICE_LIST_01"),
    sequence_no: 7,
    product_id: product_07?.id || "550e8400-e29b-41d4-a716-446655440207",
    product_name: product_07?.name || "Default Product 7",
    unit_id: product_07?.inventory_unit_id || "550e8400-e29b-41d4-a716-446655440301",
    unit_name: "ชิ้น",
    tax_profile_id: getUuidByName("TAX_PROFILE_01"),
    tax_profile_name: "VAT 7%",
    tax_rate: "7",
    price: "3200",
    price_without_vat: "2990.65",
    price_with_vat: "3200",
    is_active: true,
    description: "Logitech MX Master 3",
    note: "Standard retail price",
    info: { category: "Accessories", brand: "Logitech" },
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
    id: getUuidByName("PRICE_LIST_DETAIL_14"),
    pricelist_id: getUuidByName("PRICE_LIST_01"),
    sequence_no: 8,
    product_id: product_08?.id || "550e8400-e29b-41d4-a716-446655440208",
    product_name: product_08?.name || "Default Product 8",
    unit_id: product_08?.inventory_unit_id || "550e8400-e29b-41d4-a716-446655440301",
    unit_name: "ชิ้น",
    tax_profile_id: getUuidByName("TAX_PROFILE_01"),
    tax_profile_name: "VAT 7%",
    tax_rate: "7",
    price: "4500",
    price_without_vat: "4205.61",
    price_with_vat: "4500",
    is_active: true,
    description: "Apple Magic Keyboard",
    note: "Standard retail price",
    info: { category: "Accessories", brand: "Apple" },
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
    id: getUuidByName("PRICE_LIST_DETAIL_15"),
    pricelist_id: getUuidByName("PRICE_LIST_01"),
    sequence_no: 9,
    product_id: product_09?.id || "550e8400-e29b-41d4-a716-446655440209",
    product_name: product_09?.name || "Default Product 9",
    unit_id: product_09?.inventory_unit_id || "550e8400-e29b-41d4-a716-446655440301",
    unit_name: "ชิ้น",
    tax_profile_id: getUuidByName("TAX_PROFILE_01"),
    tax_profile_name: "VAT 7%",
    tax_rate: "7",
    price: "12000",
    price_without_vat: "11214.95",
    price_with_vat: "12000",
    is_active: true,
    description: "Sony WH-1000XM4 Headphones",
    note: "Standard retail price",
    info: { category: "Audio", brand: "Sony" },
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
    id: getUuidByName("PRICE_LIST_DETAIL_16"),
    pricelist_id: getUuidByName("PRICE_LIST_01"),
    sequence_no: 10,
    product_id: product_10?.id || "550e8400-e29b-41d4-a716-446655440210",
    product_name: product_10?.name || "Default Product 10",
    unit_id: product_10?.inventory_unit_id || "550e8400-e29b-41d4-a716-446655440301",
    unit_name: "ชิ้น",
    tax_profile_id: getUuidByName("TAX_PROFILE_01"),
    tax_profile_name: "VAT 7%",
    tax_rate: "7",
    price: "6800",
    price_without_vat: "6355.14",
    price_with_vat: "6800",
    is_active: true,
    description: "Apple AirPods Pro",
    note: "Standard retail price",
    info: { category: "Audio", brand: "Apple" },
    dimension: { department: "Sales", region: "All" },
    doc_version: "1.0",
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },

  // PRICE_LIST_02 - Wholesale (25+ items)
  {
    id: getUuidByName("PRICE_LIST_DETAIL_17"),
    pricelist_id: getUuidByName("PRICE_LIST_02"),
    sequence_no: 4,
    product_id: product_04?.id || "550e8400-e29b-41d4-a716-446655440204",
    product_name: product_04?.name || "Default Product 4",
    unit_id: product_04?.inventory_unit_id || "550e8400-e29b-41d4-a716-446655440301",
    unit_name: "ชิ้น",
    tax_profile_id: getUuidByName("TAX_PROFILE_01"),
    tax_profile_name: "VAT 7%",
    tax_rate: "7",
    price: "13500",
    price_without_vat: "12616.82",
    price_with_vat: "13500",
    is_active: true,
    description: "MacBook Air M2 - Wholesale",
    note: "Wholesale price with 10% discount",
    info: { category: "Electronics", brand: "Apple", discount: "10%" },
    dimension: { department: "Sales", region: "All" },
    doc_version: "1.0",
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "1bfdb891-58ee-499c-8115-34a964de8122",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("PRICE_LIST_DETAIL_18"),
    pricelist_id: getUuidByName("PRICE_LIST_02"),
    sequence_no: 5,
    product_id: product_05?.id || "550e8400-e29b-41d4-a716-446655440205",
    product_name: product_05?.name || "Default Product 5",
    unit_id: product_05?.inventory_unit_id || "550e8400-e29b-41d4-a716-446655440301",
    unit_name: "ชิ้น",
    tax_profile_id: getUuidByName("TAX_PROFILE_01"),
    tax_profile_name: "VAT 7%",
    tax_rate: "7",
    price: "7650",
    price_without_vat: "7149.53",
    price_with_vat: "7650",
    is_active: true,
    description: "iPad Pro 11-inch - Wholesale",
    note: "Wholesale price with 10% discount",
    info: { category: "Electronics", brand: "Apple", discount: "10%" },
    dimension: { department: "Sales", region: "All" },
    doc_version: "1.0",
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "1bfdb891-58ee-499c-8115-34a964de8122",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },

  // PRICE_LIST_03 - VIP Customer (25+ items)
  {
    id: getUuidByName("PRICE_LIST_DETAIL_19"),
    pricelist_id: getUuidByName("PRICE_LIST_03"),
    sequence_no: 4,
    product_id: product_04?.id || "550e8400-e29b-41d4-a716-446655440204",
    product_name: product_04?.name || "Default Product 4",
    unit_id: product_04?.inventory_unit_id || "550e8400-e29b-41d4-a716-446655440301",
    unit_name: "ชิ้น",
    tax_profile_id: getUuidByName("TAX_PROFILE_01"),
    tax_profile_name: "VAT 7%",
    tax_rate: "7",
    price: "12750",
    price_without_vat: "11915.89",
    price_with_vat: "12750",
    is_active: true,
    description: "MacBook Air M2 - VIP Price",
    note: "VIP exclusive pricing with 15% discount",
    info: { category: "Electronics", brand: "Apple", discount: "15%" },
    dimension: { department: "Sales", region: "All" },
    doc_version: "1.0",
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "3c5280a7-492e-421d-b739-7447455ce99e",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },

  // Additional items for PRICE_LIST_01 - Standard Retail (continuing to make 25+ total)
  {
    id: getUuidByName("PRICE_LIST_DETAIL_21"),
    pricelist_id: getUuidByName("PRICE_LIST_01"),
    sequence_no: 11,
    product_id: product_01?.id || "550e8400-e29b-41d4-a716-446655440201",
    product_name: "Gaming Laptop MSI",
    unit_id: product_01?.inventory_unit_id || "550e8400-e29b-41d4-a716-446655440301",
    unit_name: "ชิ้น",
    tax_profile_id: getUuidByName("TAX_PROFILE_01"),
    tax_profile_name: "VAT 7%",
    tax_rate: "7",
    price: "75000",
    price_without_vat: "70093.46",
    price_with_vat: "75000",
    is_active: true,
    description: "MSI Gaming Laptop RTX 4070",
    note: "High-end gaming laptop",
    info: { category: "Electronics", brand: "MSI" },
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
    id: getUuidByName("PRICE_LIST_DETAIL_22"),
    pricelist_id: getUuidByName("PRICE_LIST_01"),
    sequence_no: 12,
    product_id: product_02?.id || "550e8400-e29b-41d4-a716-446655440202",
    product_name: "Wireless Earbuds",
    unit_id: product_02?.inventory_unit_id || "550e8400-e29b-41d4-a716-446655440301",
    unit_name: "ชิ้น",
    tax_profile_id: getUuidByName("TAX_PROFILE_01"),
    tax_profile_name: "VAT 7%",
    tax_rate: "7",
    price: "2500",
    price_without_vat: "2336.45",
    price_with_vat: "2500",
    is_active: true,
    description: "Premium Wireless Earbuds",
    note: "Standard retail price",
    info: { category: "Audio", brand: "Generic" },
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
    id: getUuidByName("PRICE_LIST_DETAIL_23"),
    pricelist_id: getUuidByName("PRICE_LIST_01"),
    sequence_no: 13,
    product_id: product_03?.id || "550e8400-e29b-41d4-a716-446655440203",
    product_name: "4K Monitor",
    unit_id: product_03?.inventory_unit_id || "550e8400-e29b-41d4-a716-446655440301",
    unit_name: "ชิ้น",
    tax_profile_id: getUuidByName("TAX_PROFILE_01"),
    tax_profile_name: "VAT 7%",
    tax_rate: "7",
    price: "18000",
    price_without_vat: "16822.43",
    price_with_vat: "18000",
    is_active: true,
    description: "4K Ultra HD Monitor 27-inch",
    note: "Professional display",
    info: { category: "Electronics", brand: "LG" },
    dimension: { department: "Sales", region: "All" },
    doc_version: "1.0",
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  // Add more items for PRICE_LIST_01 to reach 25+ total
  {
    id: getUuidByName("PRICE_LIST_DETAIL_24"),
    pricelist_id: getUuidByName("PRICE_LIST_01"),
    sequence_no: 14,
    product_id: product_04?.id || "550e8400-e29b-41d4-a716-446655440204",
    product_name: "Mechanical Keyboard",
    unit_id: product_04?.inventory_unit_id || "550e8400-e29b-41d4-a716-446655440301",
    unit_name: "ชิ้น",
    tax_profile_id: getUuidByName("TAX_PROFILE_01"),
    tax_profile_name: "VAT 7%",
    tax_rate: "7",
    price: "5500",
    price_without_vat: "5140.19",
    price_with_vat: "5500",
    is_active: true,
    description: "RGB Mechanical Gaming Keyboard",
    note: "Cherry MX switches",
    info: { category: "Accessories", brand: "Corsair" },
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
    id: getUuidByName("PRICE_LIST_DETAIL_25"),
    pricelist_id: getUuidByName("PRICE_LIST_01"),
    sequence_no: 15,
    product_id: product_05?.id || "550e8400-e29b-41d4-a716-446655440205",
    product_name: "Gaming Mouse",
    unit_id: product_05?.inventory_unit_id || "550e8400-e29b-41d4-a716-446655440301",
    unit_name: "ชิ้น",
    tax_profile_id: getUuidByName("TAX_PROFILE_01"),
    tax_profile_name: "VAT 7%",
    tax_rate: "7",
    price: "3800",
    price_without_vat: "3551.40",
    price_with_vat: "3800",
    is_active: true,
    description: "Wireless Gaming Mouse",
    note: "High DPI precision",
    info: { category: "Accessories", brand: "Razer" },
    dimension: { department: "Sales", region: "All" },
    doc_version: "1.0",
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },

  // Continue with more PRICE_LIST_02 - Wholesale items
  {
    id: getUuidByName("PRICE_LIST_DETAIL_26"),
    pricelist_id: getUuidByName("PRICE_LIST_02"),
    sequence_no: 6,
    product_id: product_06?.id || "550e8400-e29b-41d4-a716-446655440206",
    product_name: "Gaming Laptop MSI",
    unit_id: product_06?.inventory_unit_id || "550e8400-e29b-41d4-a716-446655440301",
    unit_name: "ชิ้น",
    tax_profile_id: getUuidByName("TAX_PROFILE_01"),
    tax_profile_name: "VAT 7%",
    tax_rate: "7",
    price: "67500",
    price_without_vat: "63084.11",
    price_with_vat: "67500",
    is_active: true,
    description: "MSI Gaming Laptop RTX 4070 - Wholesale",
    note: "Wholesale price with 10% discount",
    info: { category: "Electronics", brand: "MSI", discount: "10%" },
    dimension: { department: "Sales", region: "All" },
    doc_version: "1.0",
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "1bfdb891-58ee-499c-8115-34a964de8122",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },

  // Continue with more PRICE_LIST_03 - VIP Customer items
  {
    id: getUuidByName("PRICE_LIST_DETAIL_27"),
    pricelist_id: getUuidByName("PRICE_LIST_03"),
    sequence_no: 5,
    product_id: product_05?.id || "550e8400-e29b-41d4-a716-446655440205",
    product_name: "Gaming Laptop MSI",
    unit_id: product_05?.inventory_unit_id || "550e8400-e29b-41d4-a716-446655440301",
    unit_name: "ชิ้น",
    tax_profile_id: getUuidByName("TAX_PROFILE_01"),
    tax_profile_name: "VAT 7%",
    tax_rate: "7",
    price: "63750",
    price_without_vat: "59579.44",
    price_with_vat: "63750",
    is_active: true,
    description: "MSI Gaming Laptop RTX 4070 - VIP Price",
    note: "VIP exclusive pricing with 15% discount",
    info: { category: "Electronics", brand: "MSI", discount: "15%" },
    dimension: { department: "Sales", region: "All" },
    doc_version: "1.0",
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "3c5280a7-492e-421d-b739-7447455ce99e",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },

  // PRICE_LIST_04 - Promotional (25+ items)
  {
    id: getUuidByName("PRICE_LIST_DETAIL_20"),
    pricelist_id: getUuidByName("PRICE_LIST_04"),
    sequence_no: 1,
    product_id: product_01?.id || "550e8400-e29b-41d4-a716-446655440201",
    product_name: product_01?.name || "Default Product 1",
    unit_id: product_01?.inventory_unit_id || "550e8400-e29b-41d4-a716-446655440301",
    unit_name: "ชิ้น",
    tax_profile_id: getUuidByName("TAX_PROFILE_01"),
    tax_profile_name: "VAT 7%",
    tax_rate: "7",
    price: "36000",
    price_without_vat: "33644.86",
    price_with_vat: "36000",
    is_active: false,
    description: "iPhone 15 Pro 128GB - Summer Sale",
    note: "Limited time promotional pricing - 20% off",
    info: { category: "Electronics", brand: "Apple", discount: "20%" },
    dimension: { department: "Marketing", region: "All" },
    doc_version: "1.0",
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("PRICE_LIST_DETAIL_28"),
    pricelist_id: getUuidByName("PRICE_LIST_04"),
    sequence_no: 2,
    product_id: product_02?.id || "550e8400-e29b-41d4-a716-446655440202",
    product_name: product_02?.name || "Default Product 2",
    unit_id: product_02?.inventory_unit_id || "550e8400-e29b-41d4-a716-446655440301",
    unit_name: "ชิ้น",
    tax_profile_id: getUuidByName("TAX_PROFILE_01"),
    tax_profile_name: "VAT 7%",
    tax_rate: "7",
    price: "30400",
    price_without_vat: "28411.21",
    price_with_vat: "30400",
    is_active: false,
    description: "Samsung Galaxy S24 - Summer Sale",
    note: "Limited time promotional pricing - 20% off",
    info: { category: "Electronics", brand: "Samsung", discount: "20%" },
    dimension: { department: "Marketing", region: "All" },
    doc_version: "1.0",
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },

  // Add more comprehensive entries to reach 20+ for each price list
  // PRICE_LIST_01 - Standard Retail (continuing sequence)
  {
    id: getUuidByName("PRICE_LIST_DETAIL_29"),
    pricelist_id: getUuidByName("PRICE_LIST_01"),
    sequence_no: 16,
    product_id: product_06?.id || "550e8400-e29b-41d4-a716-446655440206",
    product_name: "Webcam HD",
    unit_id: product_06?.inventory_unit_id || "550e8400-e29b-41d4-a716-446655440301",
    unit_name: "ชิ้น",
    tax_profile_id: getUuidByName("TAX_PROFILE_01"),
    tax_profile_name: "VAT 7%",
    tax_rate: "7",
    price: "2800",
    price_without_vat: "2616.82",
    price_with_vat: "2800",
    is_active: true,
    description: "1080p HD Webcam",
    note: "For video conferencing",
    info: { category: "Accessories", brand: "Logitech" },
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
    id: getUuidByName("PRICE_LIST_DETAIL_30"),
    pricelist_id: getUuidByName("PRICE_LIST_01"),
    sequence_no: 17,
    product_id: product_07?.id || "550e8400-e29b-41d4-a716-446655440207",
    product_name: "USB Hub",
    unit_id: product_07?.inventory_unit_id || "550e8400-e29b-41d4-a716-446655440301",
    unit_name: "ชิ้น",
    tax_profile_id: getUuidByName("TAX_PROFILE_01"),
    tax_profile_name: "VAT 7%",
    tax_rate: "7",
    price: "1200",
    price_without_vat: "1121.50",
    price_with_vat: "1200",
    is_active: true,
    description: "4-Port USB 3.0 Hub",
    note: "Compact design",
    info: { category: "Accessories", brand: "Anker" },
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
    id: getUuidByName("PRICE_LIST_DETAIL_31"),
    pricelist_id: getUuidByName("PRICE_LIST_01"),
    sequence_no: 18,
    product_id: product_08?.id || "550e8400-e29b-41d4-a716-446655440208",
    product_name: "Portable SSD",
    unit_id: product_08?.inventory_unit_id || "550e8400-e29b-41d4-a716-446655440301",
    unit_name: "ชิ้น",
    tax_profile_id: getUuidByName("TAX_PROFILE_01"),
    tax_profile_name: "VAT 7%",
    tax_rate: "7",
    price: "4200",
    price_without_vat: "3925.23",
    price_with_vat: "4200",
    is_active: true,
    description: "1TB Portable SSD",
    note: "USB-C interface",
    info: { category: "Storage", brand: "Samsung" },
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
    id: getUuidByName("PRICE_LIST_DETAIL_32"),
    pricelist_id: getUuidByName("PRICE_LIST_01"),
    sequence_no: 19,
    product_id: product_09?.id || "550e8400-e29b-41d4-a716-446655440209",
    product_name: "Power Bank",
    unit_id: product_09?.inventory_unit_id || "550e8400-e29b-41d4-a716-446655440301",
    unit_name: "ชิ้น",
    tax_profile_id: getUuidByName("TAX_PROFILE_01"),
    tax_profile_name: "VAT 7%",
    tax_rate: "7",
    price: "1800",
    price_without_vat: "1682.24",
    price_with_vat: "1800",
    is_active: true,
    description: "20000mAh Power Bank",
    note: "Fast charging support",
    info: { category: "Accessories", brand: "Anker" },
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
    id: getUuidByName("PRICE_LIST_DETAIL_33"),
    pricelist_id: getUuidByName("PRICE_LIST_01"),
    sequence_no: 20,
    product_id: product_10?.id || "550e8400-e29b-41d4-a716-446655440210",
    product_name: "Wireless Charger",
    unit_id: product_10?.inventory_unit_id || "550e8400-e29b-41d4-a716-446655440301",
    unit_name: "ชิ้น",
    tax_profile_id: getUuidByName("TAX_PROFILE_01"),
    tax_profile_name: "VAT 7%",
    tax_rate: "7",
    price: "1500",
    price_without_vat: "1401.87",
    price_with_vat: "1500",
    is_active: true,
    description: "15W Wireless Charger",
    note: "Qi compatible",
    info: { category: "Accessories", brand: "Belkin" },
    dimension: { department: "Sales", region: "All" },
    doc_version: "1.0",
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },

  // PRICE_LIST_02 - Wholesale (continuing to 20+ items)
  {
    id: getUuidByName("PRICE_LIST_DETAIL_34"),
    pricelist_id: getUuidByName("PRICE_LIST_02"),
    sequence_no: 7,
    product_id: product_07?.id || "550e8400-e29b-41d4-a716-446655440207",
    product_name: "4K Monitor",
    unit_id: product_07?.inventory_unit_id || "550e8400-e29b-41d4-a716-446655440301",
    unit_name: "ชิ้น",
    tax_profile_id: getUuidByName("TAX_PROFILE_01"),
    tax_profile_name: "VAT 7%",
    tax_rate: "7",
    price: "16200",
    price_without_vat: "15140.19",
    price_with_vat: "16200",
    is_active: true,
    description: "4K Ultra HD Monitor 27-inch - Wholesale",
    note: "Wholesale price with 10% discount",
    info: { category: "Electronics", brand: "LG", discount: "10%" },
    dimension: { department: "Sales", region: "All" },
    doc_version: "1.0",
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "1bfdb891-58ee-499c-8115-34a964de8122",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("PRICE_LIST_DETAIL_35"),
    pricelist_id: getUuidByName("PRICE_LIST_02"),
    sequence_no: 8,
    product_id: product_08?.id || "550e8400-e29b-41d4-a716-446655440208",
    product_name: "Mechanical Keyboard",
    unit_id: product_08?.inventory_unit_id || "550e8400-e29b-41d4-a716-446655440301",
    unit_name: "ชิ้น",
    tax_profile_id: getUuidByName("TAX_PROFILE_01"),
    tax_profile_name: "VAT 7%",
    tax_rate: "7",
    price: "4950",
    price_without_vat: "4626.17",
    price_with_vat: "4950",
    is_active: true,
    description: "RGB Mechanical Gaming Keyboard - Wholesale",
    note: "Wholesale price with 10% discount",
    info: { category: "Accessories", brand: "Corsair", discount: "10%" },
    dimension: { department: "Sales", region: "All" },
    doc_version: "1.0",
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "1bfdb891-58ee-499c-8115-34a964de8122",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },

  // PRICE_LIST_03 - VIP Customer (continuing to 20+ items)
  {
    id: getUuidByName("PRICE_LIST_DETAIL_36"),
    pricelist_id: getUuidByName("PRICE_LIST_03"),
    sequence_no: 6,
    product_id: product_06?.id || "550e8400-e29b-41d4-a716-446655440206",
    product_name: "4K Monitor",
    unit_id: product_06?.inventory_unit_id || "550e8400-e29b-41d4-a716-446655440301",
    unit_name: "ชิ้น",
    tax_profile_id: getUuidByName("TAX_PROFILE_01"),
    tax_profile_name: "VAT 7%",
    tax_rate: "7",
    price: "15300",
    price_without_vat: "14299.07",
    price_with_vat: "15300",
    is_active: true,
    description: "4K Ultra HD Monitor 27-inch - VIP Price",
    note: "VIP exclusive pricing with 15% discount",
    info: { category: "Electronics", brand: "LG", discount: "15%" },
    dimension: { department: "Sales", region: "All" },
    doc_version: "1.0",
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "3c5280a7-492e-421d-b739-7447455ce99e",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },

  // Add more PRICE_LIST_02 - Wholesale items to reach 20+
  {
    id: getUuidByName("PRICE_LIST_DETAIL_38"),
    pricelist_id: getUuidByName("PRICE_LIST_02"),
    sequence_no: 9,
    product_id: product_09?.id || "550e8400-e29b-41d4-a716-446655440209",
    product_name: "Gaming Mouse",
    unit_id: product_09?.inventory_unit_id || "550e8400-e29b-41d4-a716-446655440301",
    unit_name: "ชิ้น",
    tax_profile_id: getUuidByName("TAX_PROFILE_01"),
    tax_profile_name: "VAT 7%",
    tax_rate: "7",
    price: "3420",
    price_without_vat: "3196.26",
    price_with_vat: "3420",
    is_active: true,
    description: "Wireless Gaming Mouse - Wholesale",
    note: "Wholesale price with 10% discount",
    info: { category: "Accessories", brand: "Razer", discount: "10%" },
    dimension: { department: "Sales", region: "All" },
    doc_version: "1.0",
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "1bfdb891-58ee-499c-8115-34a964de8122",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("PRICE_LIST_DETAIL_39"),
    pricelist_id: getUuidByName("PRICE_LIST_02"),
    sequence_no: 10,
    product_id: product_10?.id || "550e8400-e29b-41d4-a716-446655440210",
    product_name: "Webcam HD",
    unit_id: product_10?.inventory_unit_id || "550e8400-e29b-41d4-a716-446655440301",
    unit_name: "ชิ้น",
    tax_profile_id: getUuidByName("TAX_PROFILE_01"),
    tax_profile_name: "VAT 7%",
    tax_rate: "7",
    price: "2520",
    price_without_vat: "2355.14",
    price_with_vat: "2520",
    is_active: true,
    description: "1080p HD Webcam - Wholesale",
    note: "Wholesale price with 10% discount",
    info: { category: "Accessories", brand: "Logitech", discount: "10%" },
    dimension: { department: "Sales", region: "All" },
    doc_version: "1.0",
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "1bfdb891-58ee-499c-8115-34a964de8122",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  // Add more items for PRICE_LIST_02 (continuing sequence 11-20)
  {
    id: getUuidByName("PRICE_LIST_DETAIL_40"),
    pricelist_id: getUuidByName("PRICE_LIST_02"),
    sequence_no: 11,
    product_id: product_01?.id || "550e8400-e29b-41d4-a716-446655440201",
    product_name: "USB Hub",
    unit_id: product_01?.inventory_unit_id || "550e8400-e29b-41d4-a716-446655440301",
    unit_name: "ชิ้น",
    tax_profile_id: getUuidByName("TAX_PROFILE_01"),
    tax_profile_name: "VAT 7%",
    tax_rate: "7",
    price: "1080",
    price_without_vat: "1009.35",
    price_with_vat: "1080",
    is_active: true,
    description: "4-Port USB 3.0 Hub - Wholesale",
    note: "Wholesale price with 10% discount",
    info: { category: "Accessories", brand: "Anker", discount: "10%" },
    dimension: { department: "Sales", region: "All" },
    doc_version: "1.0",
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "1bfdb891-58ee-499c-8115-34a964de8122",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  // Continue adding items 12-20 for PRICE_LIST_02
  {
    id: getUuidByName("PRICE_LIST_DETAIL_41"),
    pricelist_id: getUuidByName("PRICE_LIST_02"),
    sequence_no: 12,
    product_id: product_02?.id || "550e8400-e29b-41d4-a716-446655440202",
    product_name: "Portable SSD",
    unit_id: product_02?.inventory_unit_id || "550e8400-e29b-41d4-a716-446655440301",
    unit_name: "ชิ้น",
    tax_profile_id: getUuidByName("TAX_PROFILE_01"),
    tax_profile_name: "VAT 7%",
    tax_rate: "7",
    price: "3780",
    price_without_vat: "3532.71",
    price_with_vat: "3780",
    is_active: true,
    description: "1TB Portable SSD - Wholesale",
    note: "Wholesale price with 10% discount",
    info: { category: "Storage", brand: "Samsung", discount: "10%" },
    dimension: { department: "Sales", region: "All" },
    doc_version: "1.0",
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "1bfdb891-58ee-499c-8115-34a964de8122",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("PRICE_LIST_DETAIL_42"),
    pricelist_id: getUuidByName("PRICE_LIST_02"),
    sequence_no: 13,
    product_id: product_03?.id || "550e8400-e29b-41d4-a716-446655440203",
    product_name: "Power Bank",
    unit_id: product_03?.inventory_unit_id || "550e8400-e29b-41d4-a716-446655440301",
    unit_name: "ชิ้น",
    tax_profile_id: getUuidByName("TAX_PROFILE_01"),
    tax_profile_name: "VAT 7%",
    tax_rate: "7",
    price: "1620",
    price_without_vat: "1514.02",
    price_with_vat: "1620",
    is_active: true,
    description: "20000mAh Power Bank - Wholesale",
    note: "Wholesale price with 10% discount",
    info: { category: "Accessories", brand: "Anker", discount: "10%" },
    dimension: { department: "Sales", region: "All" },
    doc_version: "1.0",
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "1bfdb891-58ee-499c-8115-34a964de8122",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("PRICE_LIST_DETAIL_43"),
    pricelist_id: getUuidByName("PRICE_LIST_02"),
    sequence_no: 14,
    product_id: product_04?.id || "550e8400-e29b-41d4-a716-446655440204",
    product_name: "Wireless Charger",
    unit_id: product_04?.inventory_unit_id || "550e8400-e29b-41d4-a716-446655440301",
    unit_name: "ชิ้น",
    tax_profile_id: getUuidByName("TAX_PROFILE_01"),
    tax_profile_name: "VAT 7%",
    tax_rate: "7",
    price: "1350",
    price_without_vat: "1261.68",
    price_with_vat: "1350",
    is_active: true,
    description: "15W Wireless Charger - Wholesale",
    note: "Wholesale price with 10% discount",
    info: { category: "Accessories", brand: "Belkin", discount: "10%" },
    dimension: { department: "Sales", region: "All" },
    doc_version: "1.0",
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "1bfdb891-58ee-499c-8115-34a964de8122",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  // Continue for sequence 15-20
  {
    id: getUuidByName("PRICE_LIST_DETAIL_44"),
    pricelist_id: getUuidByName("PRICE_LIST_02"),
    sequence_no: 15,
    product_id: product_05?.id || "550e8400-e29b-41d4-a716-446655440205",
    product_name: "Bluetooth Speaker",
    unit_id: product_05?.inventory_unit_id || "550e8400-e29b-41d4-a716-446655440301",
    unit_name: "ชิ้น",
    tax_profile_id: getUuidByName("TAX_PROFILE_01"),
    tax_profile_name: "VAT 7%",
    tax_rate: "7",
    price: "2700",
    price_without_vat: "2523.36",
    price_with_vat: "2700",
    is_active: true,
    description: "Portable Bluetooth Speaker - Wholesale",
    note: "Wholesale price with 10% discount",
    info: { category: "Audio", brand: "JBL", discount: "10%" },
    dimension: { department: "Sales", region: "All" },
    doc_version: "1.0",
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "1bfdb891-58ee-499c-8115-34a964de8122",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("PRICE_LIST_DETAIL_45"),
    pricelist_id: getUuidByName("PRICE_LIST_02"),
    sequence_no: 16,
    product_id: product_06?.id || "550e8400-e29b-41d4-a716-446655440206",
    product_name: "Laptop Stand",
    unit_id: product_06?.inventory_unit_id || "550e8400-e29b-41d4-a716-446655440301",
    unit_name: "ชิ้น",
    tax_profile_id: getUuidByName("TAX_PROFILE_01"),
    tax_profile_name: "VAT 7%",
    tax_rate: "7",
    price: "1440",
    price_without_vat: "1345.79",
    price_with_vat: "1440",
    is_active: true,
    description: "Aluminum Laptop Stand - Wholesale",
    note: "Wholesale price with 10% discount",
    info: { category: "Accessories", brand: "Rain Design", discount: "10%" },
    dimension: { department: "Sales", region: "All" },
    doc_version: "1.0",
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "1bfdb891-58ee-499c-8115-34a964de8122",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  // Add final items for PRICE_LIST_02 (17-20)
  {
    id: getUuidByName("PRICE_LIST_DETAIL_46"),
    pricelist_id: getUuidByName("PRICE_LIST_02"),
    sequence_no: 17,
    product_id: product_07?.id || "550e8400-e29b-41d4-a716-446655440207",
    product_name: "Cable Organizer",
    unit_id: product_07?.inventory_unit_id || "550e8400-e29b-41d4-a716-446655440301",
    unit_name: "ชิ้น",
    tax_profile_id: getUuidByName("TAX_PROFILE_01"),
    tax_profile_name: "VAT 7%",
    tax_rate: "7",
    price: "360",
    price_without_vat: "336.45",
    price_with_vat: "360",
    is_active: true,
    description: "Cable Management Kit - Wholesale",
    note: "Wholesale price with 10% discount",
    info: { category: "Accessories", brand: "JOTO", discount: "10%" },
    dimension: { department: "Sales", region: "All" },
    doc_version: "1.0",
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "1bfdb891-58ee-499c-8115-34a964de8122",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("PRICE_LIST_DETAIL_47"),
    pricelist_id: getUuidByName("PRICE_LIST_02"),
    sequence_no: 18,
    product_id: product_08?.id || "550e8400-e29b-41d4-a716-446655440208",
    product_name: "Monitor Arm",
    unit_id: product_08?.inventory_unit_id || "550e8400-e29b-41d4-a716-446655440301",
    unit_name: "ชิ้น",
    tax_profile_id: getUuidByName("TAX_PROFILE_01"),
    tax_profile_name: "VAT 7%",
    tax_rate: "7",
    price: "2700",
    price_without_vat: "2523.36",
    price_with_vat: "2700",
    is_active: true,
    description: "Dual Monitor Arm - Wholesale",
    note: "Wholesale price with 10% discount",
    info: { category: "Accessories", brand: "Ergotron", discount: "10%" },
    dimension: { department: "Sales", region: "All" },
    doc_version: "1.0",
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "1bfdb891-58ee-499c-8115-34a964de8122",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("PRICE_LIST_DETAIL_48"),
    pricelist_id: getUuidByName("PRICE_LIST_02"),
    sequence_no: 19,
    product_id: product_09?.id || "550e8400-e29b-41d4-a716-446655440209",
    product_name: "Desk Pad",
    unit_id: product_09?.inventory_unit_id || "550e8400-e29b-41d4-a716-446655440301",
    unit_name: "ชิ้น",
    tax_profile_id: getUuidByName("TAX_PROFILE_01"),
    tax_profile_name: "VAT 7%",
    tax_rate: "7",
    price: "900",
    price_without_vat: "841.12",
    price_with_vat: "900",
    is_active: true,
    description: "Large Gaming Desk Pad - Wholesale",
    note: "Wholesale price with 10% discount",
    info: { category: "Accessories", brand: "SteelSeries", discount: "10%" },
    dimension: { department: "Sales", region: "All" },
    doc_version: "1.0",
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "1bfdb891-58ee-499c-8115-34a964de8122",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("PRICE_LIST_DETAIL_49"),
    pricelist_id: getUuidByName("PRICE_LIST_02"),
    sequence_no: 20,
    product_id: product_10?.id || "550e8400-e29b-41d4-a716-446655440210",
    product_name: "USB-C Adapter",
    unit_id: product_10?.inventory_unit_id || "550e8400-e29b-41d4-a716-446655440301",
    unit_name: "ชิ้น",
    tax_profile_id: getUuidByName("TAX_PROFILE_01"),
    tax_profile_name: "VAT 7%",
    tax_rate: "7",
    price: "1080",
    price_without_vat: "1009.35",
    price_with_vat: "1080",
    is_active: true,
    description: "USB-C to Multi-Port Adapter - Wholesale",
    note: "Wholesale price with 10% discount",
    info: { category: "Accessories", brand: "HyperDrive", discount: "10%" },
    dimension: { department: "Sales", region: "All" },
    doc_version: "1.0",
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "1bfdb891-58ee-499c-8115-34a964de8122",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },

  // PRICE_LIST_04 - Promotional (continuing to 20+ items)
  {
    id: getUuidByName("PRICE_LIST_DETAIL_37"),
    pricelist_id: getUuidByName("PRICE_LIST_04"),
    sequence_no: 3,
    product_id: product_03?.id || "550e8400-e29b-41d4-a716-446655440203",
    product_name: "Gaming Laptop MSI",
    unit_id: product_03?.inventory_unit_id || "550e8400-e29b-41d4-a716-446655440301",
    unit_name: "ชิ้น",
    tax_profile_id: getUuidByName("TAX_PROFILE_01"),
    tax_profile_name: "VAT 7%",
    tax_rate: "7",
    price: "60000",
    price_without_vat: "56074.77",
    price_with_vat: "60000",
    is_active: false,
    description: "MSI Gaming Laptop RTX 4070 - Summer Sale",
    note: "Limited time promotional pricing - 20% off",
    info: { category: "Electronics", brand: "MSI", discount: "20%" },
    dimension: { department: "Marketing", region: "All" },
    doc_version: "1.0",
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },

  // Add more PRICE_LIST_03 - VIP Customer items to reach 20+
  {
    id: getUuidByName("PRICE_LIST_DETAIL_50"),
    pricelist_id: getUuidByName("PRICE_LIST_03"),
    sequence_no: 7,
    product_id: product_07?.id || "550e8400-e29b-41d4-a716-446655440207",
    product_name: "Mechanical Keyboard",
    unit_id: product_07?.inventory_unit_id || "550e8400-e29b-41d4-a716-446655440301",
    unit_name: "ชิ้น",
    tax_profile_id: getUuidByName("TAX_PROFILE_01"),
    tax_profile_name: "VAT 7%",
    tax_rate: "7",
    price: "4675",
    price_without_vat: "4369.16",
    price_with_vat: "4675",
    is_active: true,
    description: "RGB Mechanical Gaming Keyboard - VIP Price",
    note: "VIP exclusive pricing with 15% discount",
    info: { category: "Accessories", brand: "Corsair", discount: "15%" },
    dimension: { department: "Sales", region: "All" },
    doc_version: "1.0",
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "3c5280a7-492e-421d-b739-7447455ce99e",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  // Continue adding VIP items (sequence 8-20)
  {
    id: getUuidByName("PRICE_LIST_DETAIL_51"),
    pricelist_id: getUuidByName("PRICE_LIST_03"),
    sequence_no: 8,
    product_id: product_08?.id || "550e8400-e29b-41d4-a716-446655440208",
    product_name: "Gaming Mouse",
    unit_id: product_08?.inventory_unit_id || "550e8400-e29b-41d4-a716-446655440301",
    unit_name: "ชิ้น",
    tax_profile_id: getUuidByName("TAX_PROFILE_01"),
    tax_profile_name: "VAT 7%",
    tax_rate: "7",
    price: "3230",
    price_without_vat: "3018.69",
    price_with_vat: "3230",
    is_active: true,
    description: "Wireless Gaming Mouse - VIP Price",
    note: "VIP exclusive pricing with 15% discount",
    info: { category: "Accessories", brand: "Razer", discount: "15%" },
    dimension: { department: "Sales", region: "All" },
    doc_version: "1.0",
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "3c5280a7-492e-421d-b739-7447455ce99e",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  // Add more VIP items to reach 20+
  {
    id: getUuidByName("PRICE_LIST_DETAIL_52"),
    pricelist_id: getUuidByName("PRICE_LIST_03"),
    sequence_no: 9,
    product_id: product_09?.id || "550e8400-e29b-41d4-a716-446655440209",
    product_name: "Webcam HD",
    unit_id: product_09?.inventory_unit_id || "550e8400-e29b-41d4-a716-446655440301",
    unit_name: "ชิ้น",
    tax_profile_id: getUuidByName("TAX_PROFILE_01"),
    tax_profile_name: "VAT 7%",
    tax_rate: "7",
    price: "2380",
    price_without_vat: "2224.30",
    price_with_vat: "2380",
    is_active: true,
    description: "1080p HD Webcam - VIP Price",
    note: "VIP exclusive pricing with 15% discount",
    info: { category: "Accessories", brand: "Logitech", discount: "15%" },
    dimension: { department: "Sales", region: "All" },
    doc_version: "1.0",
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "3c5280a7-492e-421d-b739-7447455ce99e",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  // Continue VIP items sequence 10-20
  {
    id: getUuidByName("PRICE_LIST_DETAIL_53"),
    pricelist_id: getUuidByName("PRICE_LIST_03"),
    sequence_no: 10,
    product_id: product_10?.id || "550e8400-e29b-41d4-a716-446655440210",
    product_name: "USB Hub",
    unit_id: product_10?.inventory_unit_id || "550e8400-e29b-41d4-a716-446655440301",
    unit_name: "ชิ้น",
    tax_profile_id: getUuidByName("TAX_PROFILE_01"),
    tax_profile_name: "VAT 7%",
    tax_rate: "7",
    price: "1020",
    price_without_vat: "953.27",
    price_with_vat: "1020",
    is_active: true,
    description: "4-Port USB 3.0 Hub - VIP Price",
    note: "VIP exclusive pricing with 15% discount",
    info: { category: "Accessories", brand: "Anker", discount: "15%" },
    dimension: { department: "Sales", region: "All" },
    doc_version: "1.0",
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "3c5280a7-492e-421d-b739-7447455ce99e",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },

  // Add more PRICE_LIST_04 - Promotional items to reach 20+
  {
    id: getUuidByName("PRICE_LIST_DETAIL_54"),
    pricelist_id: getUuidByName("PRICE_LIST_04"),
    sequence_no: 4,
    product_id: product_04?.id || "550e8400-e29b-41d4-a716-446655440204",
    product_name: "4K Monitor",
    unit_id: product_04?.inventory_unit_id || "550e8400-e29b-41d4-a716-446655440301",
    unit_name: "ชิ้น",
    tax_profile_id: getUuidByName("TAX_PROFILE_01"),
    tax_profile_name: "VAT 7%",
    tax_rate: "7",
    price: "14400",
    price_without_vat: "13457.94",
    price_with_vat: "14400",
    is_active: false,
    description: "4K Ultra HD Monitor 27-inch - Summer Sale",
    note: "Limited time promotional pricing - 20% off",
    info: { category: "Electronics", brand: "LG", discount: "20%" },
    dimension: { department: "Marketing", region: "All" },
    doc_version: "1.0",
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  // Continue promotional items sequence 5-20
  {
    id: getUuidByName("PRICE_LIST_DETAIL_55"),
    pricelist_id: getUuidByName("PRICE_LIST_04"),
    sequence_no: 5,
    product_id: product_05?.id || "550e8400-e29b-41d4-a716-446655440205",
    product_name: "Mechanical Keyboard",
    unit_id: product_05?.inventory_unit_id || "550e8400-e29b-41d4-a716-446655440301",
    unit_name: "ชิ้น",
    tax_profile_id: getUuidByName("TAX_PROFILE_01"),
    tax_profile_name: "VAT 7%",
    tax_rate: "7",
    price: "4400",
    price_without_vat: "4112.15",
    price_with_vat: "4400",
    is_active: false,
    description: "RGB Mechanical Gaming Keyboard - Summer Sale",
    note: "Limited time promotional pricing - 20% off",
    info: { category: "Accessories", brand: "Corsair", discount: "20%" },
    dimension: { department: "Marketing", region: "All" },
    doc_version: "1.0",
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  }
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
