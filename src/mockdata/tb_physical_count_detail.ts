import { generateId, getCurrentTimestamp, getRandomInt } from "@/libs/utils";
import { getUuidByName } from "./mapping.uuid";
import { getProductById } from "./tb_product";
import { tbPhysicalCount, tbPhysicalCountPeriod } from ".";

export interface PhysicalCountDetailDTO {
  product_id: string;
  actual_qty: number;
}

export interface PhysicalCountDetailUpdateDTO {

  items: PhysicalCountDetailDTO[]
}

export interface PhysicalCountDetail {
  id: string;
  physical_count_id: string;
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

export const physicalCountDetails: PhysicalCountDetail[] = [
  {
    id: getUuidByName("PHYSICAL_COUNT_DETAIL_01"),
    physical_count_id: getUuidByName("PHYSICAL_COUNT_01"),
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
    id: getUuidByName("PHYSICAL_COUNT_DETAIL_02"),
    physical_count_id: getUuidByName("PHYSICAL_COUNT_01"),
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
    id: getUuidByName("PHYSICAL_COUNT_DETAIL_03"),
    physical_count_id: getUuidByName("PHYSICAL_COUNT_01"),
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
    id: getUuidByName("PHYSICAL_COUNT_DETAIL_04"),
    physical_count_id: getUuidByName("PHYSICAL_COUNT_01"),
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
    id: getUuidByName("PHYSICAL_COUNT_DETAIL_05"),
    physical_count_id: getUuidByName("PHYSICAL_COUNT_01"),
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
    id: getUuidByName("PHYSICAL_COUNT_DETAIL_06"),
    physical_count_id: getUuidByName("PHYSICAL_COUNT_01"),
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
    id: getUuidByName("PHYSICAL_COUNT_DETAIL_07"),
    physical_count_id: getUuidByName("PHYSICAL_COUNT_01"),
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
    id: getUuidByName("PHYSICAL_COUNT_DETAIL_08"),
    physical_count_id: getUuidByName("PHYSICAL_COUNT_01"),
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
    id: getUuidByName("PHYSICAL_COUNT_DETAIL_09"),
    physical_count_id: getUuidByName("PHYSICAL_COUNT_01"),
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
    id: getUuidByName("PHYSICAL_COUNT_DETAIL_10"),
    physical_count_id: getUuidByName("PHYSICAL_COUNT_01"),
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

// CRUD Operations

// Create
export function createPhysicalCountDetail(data: {
  physical_count_id: string;
  sequence_no: number;
  product_id: string;
  product_name: string;
  sku: string;
  on_hand_qty?: number;
  actual_qty: number;
  submitted_qty?: number;
  created_by_id: string;
  updated_by_id: string;
}): PhysicalCountDetail {
  const newProduct: PhysicalCountDetail = {
    id: generateId(),
    physical_count_id: data.physical_count_id,
    sequence_no: data.sequence_no,
    product_id: data.product_id,
    product_name: data.product_name,
    sku: data.sku,
    on_hand_qty: data.on_hand_qty,
    actual_qty: data.actual_qty,
    submitted_qty: data.submitted_qty || 0,
    created_at: new Date(),
    created_by_id: data.created_by_id,
    updated_at: new Date(),
    updated_by_id: data.updated_by_id,
  };

  physicalCountDetails.push(newProduct);
  return newProduct;
}

// Read - Get all
export function getAllPhysicalCountDetails(): PhysicalCountDetail[] {
  return physicalCountDetails;
}

// Read - Get by ID
export function getPhysicalCountDetailById(id: string): PhysicalCountDetail | undefined {
  return physicalCountDetails.find(product => product.id === id);
}

// Read - Get by Physical Count Detail ID
export function getPhysicalCountDetailsByDetailId(physical_count_detail_id: string): PhysicalCountDetail[] {
  return physicalCountDetails.filter(product => product.physical_count_id === physical_count_detail_id);
}

// Read - Get by Product ID
export function getPhysicalCountDetailsByProductId(product_id: string): PhysicalCountDetail[] {
  return physicalCountDetails.filter(product => product.product_id === product_id);
}

// Update
export function updatePhysicalCountDetail(
  id: string,
  updateData: Partial<Pick<PhysicalCountDetail, 'sequence_no' | 'product_id' | 'product_name' | 'sku' | 'on_hand_qty' | 'actual_qty' | 'submitted_qty'>>,
  updated_by_id: string
): PhysicalCountDetail | null {
  const index = physicalCountDetails.findIndex(product => product.id === id);

  if (index === -1) {
    return null;
  }

  physicalCountDetails[index] = {
    ...physicalCountDetails[index],
    ...updateData,
    updated_at: new Date(),
    updated_by_id,
  };

  return physicalCountDetails[index];
}

// Delete
export function deletePhysicalCountDetail(id: string): boolean {
  const index = physicalCountDetails.findIndex(product => product.id === id);

  if (index === -1) {
    return false;
  }

  physicalCountDetails.splice(index, 1);
  return true;
}

// Utility functions
export function getNextSequenceNumber(physical_count_id: string): number {
  const existingProducts = getPhysicalCountDetailsByDetailId(physical_count_id);
  const maxSequence = existingProducts.reduce((max, product) =>
    Math.max(max, product.sequence_no), 0
  );
  return maxSequence + 1;
}

export function getPhysicalCountDetailByDetailIdAndProductId(
  physical_count_detail_id: string,
  product_id: string
): PhysicalCountDetail | undefined {
  return physicalCountDetails.find(product =>
    product.physical_count_id === physical_count_detail_id &&
    product.product_id === product_id
  );
}

export function getPhysicalCountDetailByPhysicalCountId(physical_count_id: string): PhysicalCountDetail[] {
  return physicalCountDetails.filter(product => product.physical_count_id === physical_count_id);
}


export const getPhysicalCountById = (id: string) => {


  const header = tbPhysicalCount.getPhysicalCountById(id);

  if (!header) {
    return null;
  }

  const period = tbPhysicalCountPeriod.getPhysicalCountPeriodById(header?.physical_count_period_id || "");

  const details = physicalCountDetails.filter(physicalCount => physicalCount.physical_count_id === id).map(physicalCount => ({
    id: physicalCount.id,
    physical_count_id: physicalCount.physical_count_id,
    sequence_no: physicalCount.sequence_no,
    product_id: physicalCount.product_id,
    product_name: physicalCount.product_name,
    sku: physicalCount.sku,
    on_hand_qty: physicalCount.on_hand_qty,
    actual_qty: physicalCount.actual_qty,
    submitted_qty: physicalCount.submitted_qty,
    created_at: physicalCount.created_at,
    created_by_id: physicalCount.created_by_id,
    updated_at: physicalCount.updated_at,
    updated_by_id: physicalCount.updated_by_id,
  }))

  const {physical_count_period_id, ...restHeader} = header;

  const res = {
    ...restHeader,
    period : period || null,
    details: details,
  }

  return res;
}
