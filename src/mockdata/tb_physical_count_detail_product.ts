import { generateId, getCurrentTimestamp, getRandomInt } from "@/libs/utils";
import { getUuidByName } from "./mapping.uuid";
import { getProductById } from "./tb_product";

export interface PhysicalCountDetailProductDTO {
  product_id: string;
  actual_qty: number;
}

export interface PhysicalCountDetailUpdateDTO {

  items: PhysicalCountDetailProductDTO[]
}

export interface PhysicalCountDetailProduct {
  id: string;
  physical_count_detail_id: string;
  sequence_no: number;
  product_id: string;
  product_name: string;
  sku: string;
  on_hand_qty?: number;
  actual_qty: number;
  submitted_qty?: number;
  created_at: Date;
  created_by_id: string;
  updated_at: Date | null;
  updated_by_id: string | null;
}

const product1 = getProductById(getUuidByName("PRODUCT_01"));
const product2 = getProductById(getUuidByName("PRODUCT_02"));
const product3 = getProductById(getUuidByName("PRODUCT_03"));
const product4 = getProductById(getUuidByName("PRODUCT_04"));
const product5 = getProductById(getUuidByName("PRODUCT_05"));
const product6 = getProductById(getUuidByName("PRODUCT_06"));
const product7 = getProductById(getUuidByName("PRODUCT_07"));
const product8 = getProductById(getUuidByName("PRODUCT_08"));
const product9 = getProductById(getUuidByName("PRODUCT_09"));
const product10 = getProductById(getUuidByName("PRODUCT_10"));

export const PhysicalCountDetailProducts: PhysicalCountDetailProduct[] = [
  {
    id: getUuidByName("PHYSICAL_COUNT_DETAIL_PRODUCT_01"),
    physical_count_detail_id: getUuidByName("PHYSICAL_COUNT_DETAIL_01"),
    sequence_no: 1,
    product_id: product1?.id || "",
    product_name: product1?.name || "",
    sku: product1?.sku || "",
    on_hand_qty: getRandomInt(100, 1000),
    actual_qty: getRandomInt(100, 1000),
    submitted_qty: 0,
    created_at: new Date(getCurrentTimestamp()),
    created_by_id: getUuidByName("USER_01"),
    updated_at: new Date(getCurrentTimestamp()),
    updated_by_id: getUuidByName("USER_01"),
  },
  {
    id: getUuidByName("PHYSICAL_COUNT_DETAIL_PRODUCT_02"),
    physical_count_detail_id: getUuidByName("PHYSICAL_COUNT_DETAIL_01"),
    sequence_no: 2,
    product_id: product2?.id || "",
    product_name: product2?.name || "",
    sku: product2?.sku || "",
    on_hand_qty: getRandomInt(100, 1000),
    actual_qty: getRandomInt(100, 1000),
    submitted_qty: 0,
    created_at: new Date(getCurrentTimestamp()),
    created_by_id: getUuidByName("USER_01"),
    updated_at: new Date(getCurrentTimestamp()),
    updated_by_id: getUuidByName("USER_01"),
  },
  {
    id: getUuidByName("PHYSICAL_COUNT_DETAIL_PRODUCT_03"),
    physical_count_detail_id: getUuidByName("PHYSICAL_COUNT_DETAIL_01"),
    sequence_no: 3,
    product_id: product3?.id || "",
    product_name: product3?.name || "",
    sku: product3?.sku || "",
    on_hand_qty: getRandomInt(100, 1000),
    actual_qty: getRandomInt(100, 1000),
    submitted_qty: 0,
    created_at: new Date(getCurrentTimestamp()),
    created_by_id: getUuidByName("USER_01"),
    updated_at: new Date(getCurrentTimestamp()),
    updated_by_id: getUuidByName("USER_01"),
  },
  {
    id: getUuidByName("PHYSICAL_COUNT_DETAIL_PRODUCT_04"),
    physical_count_detail_id: getUuidByName("PHYSICAL_COUNT_DETAIL_01"),
    sequence_no: 4,
    product_id: product4?.id || "",
    product_name: product4?.name || "",
    sku: product4?.sku || "",
    on_hand_qty: getRandomInt(100, 1000),
    actual_qty: getRandomInt(100, 1000),
    submitted_qty: 0,
    created_at: new Date(getCurrentTimestamp()),
    created_by_id: getUuidByName("USER_01"),
    updated_at: new Date(getCurrentTimestamp()),
    updated_by_id: getUuidByName("USER_01"),
  },
  {
    id: getUuidByName("PHYSICAL_COUNT_DETAIL_PRODUCT_05"),
    physical_count_detail_id: getUuidByName("PHYSICAL_COUNT_DETAIL_01"),
    sequence_no: 5,
    product_id: product5?.id || "",
    product_name: product5?.name || "",
    sku: product5?.sku || "",
    on_hand_qty: getRandomInt(100, 1000),
    actual_qty: getRandomInt(100, 1000),
    submitted_qty: 0,
    created_at: new Date(getCurrentTimestamp()),
    created_by_id: getUuidByName("USER_01"),
    updated_at: new Date(getCurrentTimestamp()),
    updated_by_id: getUuidByName("USER_01"),
  },  
  {
    id: getUuidByName("PHYSICAL_COUNT_DETAIL_PRODUCT_06"),
    physical_count_detail_id: getUuidByName("PHYSICAL_COUNT_DETAIL_01"),
    sequence_no: 6,
    product_id: product6?.id || "",
    product_name: product6?.name || "",
    sku: product6?.sku || "",
    on_hand_qty: getRandomInt(100, 1000),
    actual_qty: getRandomInt(100, 1000),
    submitted_qty: 0,
    created_at: new Date(getCurrentTimestamp()),
    created_by_id: getUuidByName("USER_01"),
    updated_at: new Date(getCurrentTimestamp()),
    updated_by_id: getUuidByName("USER_01"),
  },
  {
    id: getUuidByName("PHYSICAL_COUNT_DETAIL_PRODUCT_07"),
    physical_count_detail_id: getUuidByName("PHYSICAL_COUNT_DETAIL_01"),
    sequence_no: 7,
    product_id: product7?.id || "",
    product_name: product7?.name || "",
    sku: product7?.sku || "",
    on_hand_qty: getRandomInt(100, 1000),
    actual_qty: getRandomInt(100, 1000),
    submitted_qty: 0,
    created_at: new Date(getCurrentTimestamp()),
    created_by_id: getUuidByName("USER_01"),
    updated_at: new Date(getCurrentTimestamp()),
    updated_by_id: getUuidByName("USER_01"),
  },
  {
    id: getUuidByName("PHYSICAL_COUNT_DETAIL_PRODUCT_08"),
    physical_count_detail_id: getUuidByName("PHYSICAL_COUNT_DETAIL_01"),
    sequence_no: 8,
    product_id: product8?.id || "",
    product_name: product8?.name || "",
    sku: product8?.sku || "",
    on_hand_qty: getRandomInt(100, 1000),
    actual_qty: getRandomInt(100, 1000),
    submitted_qty: 0,
    created_at: new Date(getCurrentTimestamp()),
    created_by_id: getUuidByName("USER_01"),
    updated_at: new Date(getCurrentTimestamp()),
    updated_by_id: getUuidByName("USER_01"),
  },
  {
    id: getUuidByName("PHYSICAL_COUNT_DETAIL_PRODUCT_09"),
    physical_count_detail_id: getUuidByName("PHYSICAL_COUNT_DETAIL_01"),
    sequence_no: 9,
    product_id: product9?.id || "",
    product_name: product9?.name || "",
    sku: product9?.sku || "",
    on_hand_qty: getRandomInt(100, 1000),
    actual_qty: getRandomInt(100, 1000),
    submitted_qty: 0,
    created_at: new Date(getCurrentTimestamp()),
    created_by_id: getUuidByName("USER_01"),
    updated_at: new Date(getCurrentTimestamp()),
    updated_by_id: getUuidByName("USER_01"),
  },
  {
    id: getUuidByName("PHYSICAL_COUNT_DETAIL_PRODUCT_10"),
    physical_count_detail_id: getUuidByName("PHYSICAL_COUNT_DETAIL_01"),
    sequence_no: 10,
    product_id: product10?.id || "",
    product_name: product10?.name || "",
    sku: product10?.sku || "",
    on_hand_qty: getRandomInt(100, 1000),
    actual_qty: getRandomInt(100, 1000),
    submitted_qty: 0,
    created_at: new Date(getCurrentTimestamp()),
    created_by_id: getUuidByName("USER_01"),
    updated_at: new Date(getCurrentTimestamp()),
    updated_by_id: getUuidByName("USER_01"),
  },
];
