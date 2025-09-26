import { generateId, getCurrentTimestamp, getRandomInt } from "@/libs/utils";
import { getUuidByName } from "./mapping.uuid";
import { tbSpotCheck } from ".";
import { getProductById } from "./tb_product";

export interface SpotCheckDetailDTO {
  product_id: string;
  actual_qty: number;
}

export interface SpotCheckUpdateDTO {

  items: SpotCheckDetailDTO[]
}

export interface SpotCheckDetail {
  id: string;
  spot_check_id: string;
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
const product11 = getProductById(getUuidByName("PRODUCT_11"));
const product12 = getProductById(getUuidByName("PRODUCT_12"));
const product13 = getProductById(getUuidByName("PRODUCT_13"));
const product14 = getProductById(getUuidByName("PRODUCT_14"));
const product15 = getProductById(getUuidByName("PRODUCT_15"));
const product16 = getProductById(getUuidByName("PRODUCT_16"));
const product17 = getProductById(getUuidByName("PRODUCT_17"));
const product18 = getProductById(getUuidByName("PRODUCT_18"));
const product19 = getProductById(getUuidByName("PRODUCT_19"));
const product20 = getProductById(getUuidByName("PRODUCT_20"));

export const spotChecksDetails: SpotCheckDetail[] = [
  {
    id: getUuidByName("SPOT_CHECK_DETAIL_01"),
    spot_check_id: getUuidByName("SPOT_CHECK_01"),
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
    id: getUuidByName("SPOT_CHECK_DETAIL_02"),
    spot_check_id: getUuidByName("SPOT_CHECK_01"),
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
    id: getUuidByName("SPOT_CHECK_DETAIL_03"),
    spot_check_id: getUuidByName("SPOT_CHECK_01"),
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
    id: getUuidByName("SPOT_CHECK_DETAIL_04"),
    spot_check_id: getUuidByName("SPOT_CHECK_01"),
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
    id: getUuidByName("SPOT_CHECK_DETAIL_05"),
    spot_check_id: getUuidByName("SPOT_CHECK_01"),
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
    id: getUuidByName("SPOT_CHECK_DETAIL_06"),
    spot_check_id: getUuidByName("SPOT_CHECK_01"),
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
    id: getUuidByName("SPOT_CHECK_DETAIL_07"),
    spot_check_id: getUuidByName("SPOT_CHECK_01"),
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
    id: getUuidByName("SPOT_CHECK_DETAIL_08"),
    spot_check_id: getUuidByName("SPOT_CHECK_01"),
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
    id: getUuidByName("SPOT_CHECK_DETAIL_09"),
    spot_check_id: getUuidByName("SPOT_CHECK_01"),
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
    id: getUuidByName("SPOT_CHECK_DETAIL_10"),
    spot_check_id: getUuidByName("SPOT_CHECK_01"),
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

  // SPOT_CHECK_02 details
  {
    id: getUuidByName("SPOT_CHECK_DETAIL_11"),
    spot_check_id: getUuidByName("SPOT_CHECK_02"),
    sequence_no: 1,
    product_id: product11?.id || "",
    product_name: product11?.name || "",
    sku: product11?.sku || "",
    on_hand_qty: 450,
    actual_qty: 445,
    submitted_qty: 445,
    created_at: new Date("2024-12-08T10:00:00.000Z"),
    created_by_id: getUuidByName("USER_02"),
    updated_at: new Date("2024-12-08T15:30:00.000Z"),
    updated_by_id: getUuidByName("USER_02"),
  },
  {
    id: getUuidByName("SPOT_CHECK_DETAIL_12"),
    spot_check_id: getUuidByName("SPOT_CHECK_02"),
    sequence_no: 2,
    product_id: product12?.id || "",
    product_name: product12?.name || "",
    sku: product12?.sku || "",
    on_hand_qty: 280,
    actual_qty: 285,
    submitted_qty: 285,
    created_at: new Date("2024-12-08T10:15:00.000Z"),
    created_by_id: getUuidByName("USER_02"),
    updated_at: new Date("2024-12-08T15:45:00.000Z"),
    updated_by_id: getUuidByName("USER_02"),
  },
  {
    id: getUuidByName("SPOT_CHECK_DETAIL_13"),
    spot_check_id: getUuidByName("SPOT_CHECK_02"),
    sequence_no: 3,
    product_id: product13?.id || "",
    product_name: product13?.name || "",
    sku: product13?.sku || "",
    on_hand_qty: 150,
    actual_qty: 150,
    submitted_qty: 150,
    created_at: new Date("2024-12-08T10:30:00.000Z"),
    created_by_id: getUuidByName("USER_02"),
    updated_at: new Date("2024-12-08T16:00:00.000Z"),
    updated_by_id: getUuidByName("USER_02"),
  },

  // SPOT_CHECK_03 details (completed)
  {
    id: getUuidByName("SPOT_CHECK_DETAIL_14"),
    spot_check_id: getUuidByName("SPOT_CHECK_03"),
    sequence_no: 1,
    product_id: product14?.id || "",
    product_name: product14?.name || "",
    sku: product14?.sku || "",
    on_hand_qty: 75,
    actual_qty: 72,
    submitted_qty: 72,
    created_at: new Date("2024-12-10T09:00:00.000Z"),
    created_by_id: getUuidByName("USER_03"),
    updated_at: new Date("2024-12-10T14:00:00.000Z"),
    updated_by_id: getUuidByName("USER_03"),
  },
  {
    id: getUuidByName("SPOT_CHECK_DETAIL_15"),
    spot_check_id: getUuidByName("SPOT_CHECK_03"),
    sequence_no: 2,
    product_id: product15?.id || "",
    product_name: product15?.name || "",
    sku: product15?.sku || "",
    on_hand_qty: 120,
    actual_qty: 118,
    submitted_qty: 118,
    created_at: new Date("2024-12-10T09:20:00.000Z"),
    created_by_id: getUuidByName("USER_03"),
    updated_at: new Date("2024-12-10T14:20:00.000Z"),
    updated_by_id: getUuidByName("USER_03"),
  },

  // SPOT_CHECK_09 details (high-value electronics)
  {
    id: getUuidByName("SPOT_CHECK_DETAIL_16"),
    spot_check_id: getUuidByName("SPOT_CHECK_09"),
    sequence_no: 1,
    product_id: product1?.id || "",
    product_name: product1?.name || "",
    sku: product1?.sku || "",
    on_hand_qty: 25,
    actual_qty: 23,
    submitted_qty: 0,
    created_at: new Date("2024-12-15T09:00:00.000Z"),
    created_by_id: getUuidByName("USER_02"),
    updated_at: new Date("2024-12-15T11:30:00.000Z"),
    updated_by_id: getUuidByName("USER_02"),
  },
  {
    id: getUuidByName("SPOT_CHECK_DETAIL_17"),
    spot_check_id: getUuidByName("SPOT_CHECK_09"),
    sequence_no: 2,
    product_id: product2?.id || "",
    product_name: product2?.name || "",
    sku: product2?.sku || "",
    on_hand_qty: 15,
    actual_qty: 15,
    submitted_qty: 0,
    created_at: new Date("2024-12-15T09:15:00.000Z"),
    created_by_id: getUuidByName("USER_02"),
    updated_at: new Date("2024-12-15T11:45:00.000Z"),
    updated_by_id: getUuidByName("USER_02"),
  },
  {
    id: getUuidByName("SPOT_CHECK_DETAIL_18"),
    spot_check_id: getUuidByName("SPOT_CHECK_09"),
    sequence_no: 3,
    product_id: product3?.id || "",
    product_name: product3?.name || "",
    sku: product3?.sku || "",
    on_hand_qty: 8,
    actual_qty: 8,
    submitted_qty: 0,
    created_at: new Date("2024-12-15T09:30:00.000Z"),
    created_by_id: getUuidByName("USER_02"),
    updated_at: new Date("2024-12-15T12:00:00.000Z"),
    updated_by_id: getUuidByName("USER_02"),
  },

  // SPOT_CHECK_10 details (pharmaceuticals completed)
  {
    id: getUuidByName("SPOT_CHECK_DETAIL_19"),
    spot_check_id: getUuidByName("SPOT_CHECK_10"),
    sequence_no: 1,
    product_id: product16?.id || "",
    product_name: product16?.name || "",
    sku: product16?.sku || "",
    on_hand_qty: 500,
    actual_qty: 498,
    submitted_qty: 498,
    created_at: new Date("2024-12-18T08:00:00.000Z"),
    created_by_id: getUuidByName("USER_04"),
    updated_at: new Date("2024-12-18T16:30:00.000Z"),
    updated_by_id: getUuidByName("USER_04"),
  },
  {
    id: getUuidByName("SPOT_CHECK_DETAIL_20"),
    spot_check_id: getUuidByName("SPOT_CHECK_10"),
    sequence_no: 2,
    product_id: product17?.id || "",
    product_name: product17?.name || "",
    sku: product17?.sku || "",
    on_hand_qty: 350,
    actual_qty: 345,
    submitted_qty: 345,
    created_at: new Date("2024-12-18T08:30:00.000Z"),
    created_by_id: getUuidByName("USER_04"),
    updated_at: new Date("2024-12-18T16:45:00.000Z"),
    updated_by_id: getUuidByName("USER_04"),
  },
  {
    id: getUuidByName("SPOT_CHECK_DETAIL_21"),
    spot_check_id: getUuidByName("SPOT_CHECK_10"),
    sequence_no: 3,
    product_id: product18?.id || "",
    product_name: product18?.name || "",
    sku: product18?.sku || "",
    on_hand_qty: 200,
    actual_qty: 200,
    submitted_qty: 200,
    created_at: new Date("2024-12-18T09:00:00.000Z"),
    created_by_id: getUuidByName("USER_04"),
    updated_at: new Date("2024-12-18T17:00:00.000Z"),
    updated_by_id: getUuidByName("USER_04"),
  },

  // SPOT_CHECK_12 details (fashion items reviewing)
  {
    id: getUuidByName("SPOT_CHECK_DETAIL_22"),
    spot_check_id: getUuidByName("SPOT_CHECK_12"),
    sequence_no: 1,
    product_id: product4?.id || "",
    product_name: product4?.name || "",
    sku: product4?.sku || "",
    on_hand_qty: 85,
    actual_qty: 83,
    submitted_qty: 83,
    created_at: new Date("2024-12-22T10:00:00.000Z"),
    created_by_id: getUuidByName("USER_01"),
    updated_at: new Date("2024-12-22T15:30:00.000Z"),
    updated_by_id: getUuidByName("USER_01"),
  },
  {
    id: getUuidByName("SPOT_CHECK_DETAIL_23"),
    spot_check_id: getUuidByName("SPOT_CHECK_12"),
    sequence_no: 2,
    product_id: product5?.id || "",
    product_name: product5?.name || "",
    sku: product5?.sku || "",
    on_hand_qty: 120,
    actual_qty: 125,
    submitted_qty: 125,
    created_at: new Date("2024-12-22T10:30:00.000Z"),
    created_by_id: getUuidByName("USER_01"),
    updated_at: new Date("2024-12-22T16:00:00.000Z"),
    updated_by_id: getUuidByName("USER_01"),
  },

  // SPOT_CHECK_14 details (food storage completed)
  {
    id: getUuidByName("SPOT_CHECK_DETAIL_24"),
    spot_check_id: getUuidByName("SPOT_CHECK_14"),
    sequence_no: 1,
    product_id: product19?.id || "",
    product_name: product19?.name || "",
    sku: product19?.sku || "",
    on_hand_qty: 300,
    actual_qty: 295,
    submitted_qty: 295,
    created_at: new Date("2024-12-26T07:00:00.000Z"),
    created_by_id: getUuidByName("USER_05"),
    updated_at: new Date("2024-12-26T18:30:00.000Z"),
    updated_by_id: getUuidByName("USER_05"),
  },
  {
    id: getUuidByName("SPOT_CHECK_DETAIL_25"),
    spot_check_id: getUuidByName("SPOT_CHECK_14"),
    sequence_no: 2,
    product_id: product20?.id || "",
    product_name: product20?.name || "",
    sku: product20?.sku || "",
    on_hand_qty: 150,
    actual_qty: 148,
    submitted_qty: 148,
    created_at: new Date("2024-12-26T07:30:00.000Z"),
    created_by_id: getUuidByName("USER_05"),
    updated_at: new Date("2024-12-26T18:45:00.000Z"),
    updated_by_id: getUuidByName("USER_05"),
  },
  {
    id: getUuidByName("SPOT_CHECK_DETAIL_26"),
    spot_check_id: getUuidByName("SPOT_CHECK_14"),
    sequence_no: 3,
    product_id: product6?.id || "",
    product_name: product6?.name || "",
    sku: product6?.sku || "",
    on_hand_qty: 75,
    actual_qty: 75,
    submitted_qty: 75,
    created_at: new Date("2024-12-26T08:00:00.000Z"),
    created_by_id: getUuidByName("USER_05"),
    updated_at: new Date("2024-12-26T19:00:00.000Z"),
    updated_by_id: getUuidByName("USER_05"),
  },

  // SPOT_CHECK_16 details (jewelry high-value in progress)
  {
    id: getUuidByName("SPOT_CHECK_DETAIL_27"),
    spot_check_id: getUuidByName("SPOT_CHECK_16"),
    sequence_no: 1,
    product_id: product7?.id || "",
    product_name: product7?.name || "",
    sku: product7?.sku || "",
    on_hand_qty: 12,
    actual_qty: 11,
    submitted_qty: 0,
    created_at: new Date("2024-12-30T09:00:00.000Z"),
    created_by_id: getUuidByName("USER_03"),
    updated_at: new Date("2024-12-30T14:15:00.000Z"),
    updated_by_id: getUuidByName("USER_03"),
  },
  {
    id: getUuidByName("SPOT_CHECK_DETAIL_28"),
    spot_check_id: getUuidByName("SPOT_CHECK_16"),
    sequence_no: 2,
    product_id: product8?.id || "",
    product_name: product8?.name || "",
    sku: product8?.sku || "",
    on_hand_qty: 5,
    actual_qty: 5,
    submitted_qty: 0,
    created_at: new Date("2024-12-30T09:30:00.000Z"),
    created_by_id: getUuidByName("USER_03"),
    updated_at: new Date("2024-12-30T14:30:00.000Z"),
    updated_by_id: getUuidByName("USER_03"),
  },

  // SPOT_CHECK_18 details (automotive parts completed)
  {
    id: getUuidByName("SPOT_CHECK_DETAIL_29"),
    spot_check_id: getUuidByName("SPOT_CHECK_18"),
    sequence_no: 1,
    product_id: product9?.id || "",
    product_name: product9?.name || "",
    sku: product9?.sku || "",
    on_hand_qty: 45,
    actual_qty: 44,
    submitted_qty: 44,
    created_at: new Date("2025-01-05T08:00:00.000Z"),
    created_by_id: getUuidByName("USER_02"),
    updated_at: new Date("2025-01-05T17:30:00.000Z"),
    updated_by_id: getUuidByName("USER_02"),
  },
  {
    id: getUuidByName("SPOT_CHECK_DETAIL_30"),
    spot_check_id: getUuidByName("SPOT_CHECK_18"),
    sequence_no: 2,
    product_id: product10?.id || "",
    product_name: product10?.name || "",
    sku: product10?.sku || "",
    on_hand_qty: 30,
    actual_qty: 30,
    submitted_qty: 30,
    created_at: new Date("2025-01-05T08:30:00.000Z"),
    created_by_id: getUuidByName("USER_02"),
    updated_at: new Date("2025-01-05T17:45:00.000Z"),
    updated_by_id: getUuidByName("USER_02"),
  },
];

export const getSpotCheckDetailById = (id: string): SpotCheckDetail | undefined => {
  return spotChecksDetails.find(detail => detail.id === id);
};

export const getSpotCheckDetailsBySpotCheckId = (spotCheckId: string): SpotCheckDetail[] => {
  return spotChecksDetails.filter(detail => detail.spot_check_id === spotCheckId);
};

export const getAllSpotCheckDetails = (): SpotCheckDetail[] => {
  return spotChecksDetails;
};

export const createSpotCheckDetail = (data: Omit<SpotCheckDetail, 'id' | 'created_at' | 'updated_at'>): SpotCheckDetail => {
  const newDetail: SpotCheckDetail = {
    id: generateId(),
    ...data,
    created_at: new Date(),
    updated_at: new Date(),
  };

  spotChecksDetails.push(newDetail);
  return newDetail;
};

export const updateSpotCheckDetail = (id: string, data: Partial<Omit<SpotCheckDetail, 'id' | 'created_at'>>, updatedBy: string): SpotCheckDetail | null => {
  const index = spotChecksDetails.findIndex(detail => detail.id === id);

  if (index === -1) {
    return null;
  }

  spotChecksDetails[index] = {
    ...spotChecksDetails[index],
    ...data,
    updated_at: new Date(),
    updated_by_id: updatedBy,
  };

  return spotChecksDetails[index];
};

export const deleteSpotCheckDetail = (id: string): boolean => {
  const index = spotChecksDetails.findIndex(detail => detail.id === id);

  if (index === -1) {
    return false;
  }

  spotChecksDetails.splice(index, 1);
  return true;
};

export const deleteSpotCheckDetailsBySpotCheckId = (spotCheckId: string): number => {
  const initialLength = spotChecksDetails.length;

  for (let i = spotChecksDetails.length - 1; i >= 0; i--) {
    if (spotChecksDetails[i].spot_check_id === spotCheckId) {
      spotChecksDetails.splice(i, 1);
    }
  }

  return initialLength - spotChecksDetails.length;
};

export const getNextSequenceNumber = (spotCheckId: string): number => {
  const details = getSpotCheckDetailsBySpotCheckId(spotCheckId);
  if (details.length === 0) {
    return 1;
  }

  const maxSequence = Math.max(...details.map(detail => detail.sequence_no));
  return maxSequence + 1;
};

export const getSpotcheckById = (id: string) => {

  const spotChecks = tbSpotCheck.getSpotCheckById(id);
  const details = spotChecksDetails.filter(spotcheck => spotcheck.spot_check_id === id).map(spotcheck => ({
    id: spotcheck.id,
    spot_check_id: spotcheck.spot_check_id,
    sequence_no: spotcheck.sequence_no,
    product_id: spotcheck.product_id,
    product_name: spotcheck.product_name,
    sku: spotcheck.sku,
    on_hand_qty: spotcheck.on_hand_qty,
    actual_qty: spotcheck.actual_qty,
    submitted_qty: spotcheck.submitted_qty,
    created_at: spotcheck.created_at,
    created_by_id: spotcheck.created_by_id,
    updated_at: spotcheck.updated_at,
    updated_by_id: spotcheck.updated_by_id,
  }))

  if (!spotChecks) {
    return null;
  }

  const res = {
    ...spotChecks,
    details: details,
  }

  return res;
}