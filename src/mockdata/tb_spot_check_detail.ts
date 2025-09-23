import { generateId, getCurrentTimestamp, getRandomInt } from "@/libs/utils";
import { getUuidByName } from "./mapping.uuid";
import { getLocationById } from "./tb_location";
import { tbSpotCheck } from ".";
import { getProductById } from "./tb_product";

export interface SpotCheckDetail {
  id: string;
  spot_check_id: string;
  sequence_no: number;
  product_id: string;
  product_name: string;
  sku: string;
  actual_count: number;
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

export const spotChecksDetails: SpotCheckDetail[] = [
  {
    id: getUuidByName("SPOT_CHECK_DETAIL_01"),
    spot_check_id: getUuidByName("SPOT_CHECK_01"),
    sequence_no: 1,
    product_id: product1?.id || "",
    product_name: product1?.name || "",
    sku: product1?.sku || "",
    actual_count: getRandomInt(100, 1000),
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
    actual_count: getRandomInt(100, 1000),
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
    actual_count: getRandomInt(100, 1000),
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
    actual_count: getRandomInt(100, 1000),
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
    actual_count: getRandomInt(100, 1000),
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
    actual_count: getRandomInt(100, 1000),
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
    actual_count: getRandomInt(100, 1000),
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
    actual_count: getRandomInt(100, 1000),
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
    actual_count: getRandomInt(100, 1000),    
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
    actual_count: getRandomInt(100, 1000),
    created_at: new Date(getCurrentTimestamp()),
    created_by_id: getUuidByName("USER_01"),
    updated_at: new Date(getCurrentTimestamp()),
    updated_by_id: getUuidByName("USER_01"),
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
  const details = spotChecksDetails.filter(spotcheck => spotcheck.spot_check_id === id);

  const res = {
    ...spotChecks,
    details: details,
  }

  return res;
}