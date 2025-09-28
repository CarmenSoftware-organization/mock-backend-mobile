import { generateId, getCurrentTimestamp } from "@/libs/utils";
import { getUuidByName } from "./mapping.uuid";
import { getCurrencyById } from "./tb_currency";
import { getDeliveryPointById } from "./tb_delivery_point";
import { getLocationById } from "./tb_location";
import { getPricelistDetailById } from "./tb_pricelist_detail";
import { getProductById } from "./tb_product";
import { getPurchaseRequestById } from "./tb_purchase_request";
import { getTaxProfileById } from "./tb_tax_profile";
import { getUnitById } from "./tb_unit";
import { getVendorById } from "./tb_vendor";
import { getUserById } from "./tb_user";
import { getUserProfileById } from "./tb_user_profile";
import { getCalculatePriceInfo } from "@/libs/calculate.priceinfo";

export interface PurchaseRequestDetail {
  id: string;
  purchase_request_id: string | null;
  sequence_no: number;
  location_id: string;
  location_name: string | null;
  delivery_point_id: string | null;
  delivery_point_name: string | null;
  delivery_date: string;
  product_id: string;
  product_sku: string | null;
  product_name: string | null;
  product_local_name: string | null;
  inventory_unit_id: string | null;
  inventory_unit_name: string | null;
  description: string;
  comment: string | null;
  vendor_id: string | null;
  vendor_name: string | null;
  pricelist_detail_id: string | null;
  pricelist_no: string | null;
  pricelist_unit: string | null;
  pricelist_price: number | null;
  currency_id: string | null;
  currency_name: string | null;
  exchange_rate: number;
  exchange_rate_date: string | null;
  requested_qty: number;
  requested_unit_id: string;
  requested_unit_name: string | null;
  requested_unit_conversion_factor: number;
  requested_base_qty: number;
  approved_qty: number;
  approved_unit_id: string | null;
  approved_unit_name: string | null;
  approved_unit_conversion_factor: number;
  approved_base_qty: number;
  foc_qty: number;
  foc_unit_id: string | null;
  foc_unit_name: string | null;
  foc_unit_conversion_factor: number;
  foc_base_qty: number;
  tax_profile_id: string | null;
  tax_profile_name: string | null;
  tax_rate: number;
  tax_amount: number;
  base_tax_amount: number;
  is_tax_adjustment: boolean;
  discount_rate: number;
  discount_amount: number;
  base_discount_amount: number;
  is_discount_adjustment: boolean;
  sub_total_price: number;
  net_amount: number;
  total_price: number;
  base_price: number;
  base_sub_total_price: number;
  base_net_amount: number;
  base_total_price: number;
  history: any;
  stages_status: any;
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

export const purchaseRequestDetails: PurchaseRequestDetail[] = (() => {
  const user1 = getUserById(getUuidByName("USER_01"));
  const user2 = getUserById(getUuidByName("USER_02"));
  const user3 = getUserById(getUuidByName("USER_03"));

  const user1Profile = getUserProfileById(getUuidByName("USER_PROFILE_01"));
  const user2Profile = getUserProfileById(getUuidByName("USER_PROFILE_02"));
  const user3Profile = getUserProfileById(getUuidByName("USER_PROFILE_03"));

  const taxProfile1 = getTaxProfileById(getUuidByName("TAX_PROFILE_01"));
  const taxProfile2 = getTaxProfileById(getUuidByName("TAX_PROFILE_02"));
  const currency1 = getCurrencyById(getUuidByName("CURRENCY_01"));
  const currency2 = getCurrencyById(getUuidByName("CURRENCY_02"));
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

  const unit1 = getUnitById(getUuidByName("UNIT_01"));
  const unit2 = getUnitById(getUuidByName("UNIT_02"));
  const unit3 = getUnitById(getUuidByName("UNIT_03"));
  const unit4 = getUnitById(getUuidByName("UNIT_04"));
  const unit5 = getUnitById(getUuidByName("UNIT_05"));
  const unit6 = getUnitById(getUuidByName("UNIT_06"));
  const unit7 = getUnitById(getUuidByName("UNIT_07"));
  const unit8 = getUnitById(getUuidByName("UNIT_08"));
  const unit9 = getUnitById(getUuidByName("UNIT_09"));
  const unit10 = getUnitById(getUuidByName("UNIT_10"));

  const location1 = getLocationById(getUuidByName("LOCATION_01"));
  const location2 = getLocationById(getUuidByName("LOCATION_02"));
  const location3 = getLocationById(getUuidByName("LOCATION_03"));
  const location4 = getLocationById(getUuidByName("LOCATION_04"));
  const location5 = getLocationById(getUuidByName("LOCATION_05"));

  const vendor1 = getVendorById(getUuidByName("VENDOR_01"));
  const vendor2 = getVendorById(getUuidByName("VENDOR_02"));
  const vendor3 = getVendorById(getUuidByName("VENDOR_03"));

  const deliveryPoint1 = getDeliveryPointById(getUuidByName("DELIVERY_POINT_01"));
  const deliveryPoint2 = getDeliveryPointById(getUuidByName("DELIVERY_POINT_02"));
  const deliveryPoint3 = getDeliveryPointById(getUuidByName("DELIVERY_POINT_03"));

  const pricelistDetail1 = getPricelistDetailById(getUuidByName("PRICELIST_DETAIL_01"));
  const purchaseRequest1 = getPurchaseRequestById(getUuidByName("PURCHASE_REQUEST_01"));

  const pricelist01 = getVendorById(getUuidByName("PRICELIST_01"));
  const pricelist02 = getVendorById(getUuidByName("PRICELIST_02"));
  const pricelist03 = getVendorById(getUuidByName("PRICELIST_03"));

  const productPrice1 = getCalculatePriceInfo(5, 20, 1, 7, false, 0, 0, false, 0);
  const productPrice2 = getCalculatePriceInfo(10, 35, 35, 7, false, 0, 0, false, 0);
  const productPrice3 = getCalculatePriceInfo(8, 41, 1, 7, false, 0, 0, false, 0);
  const productPrice4 = getCalculatePriceInfo(5, 100, 35, 7, false, 0, 0, false, 0);
  const productPrice5 = getCalculatePriceInfo(5, 1, 1, 7, false, 0, 0, false, 0);
  const productPrice6 = getCalculatePriceInfo(5, 1, 1, 7, false, 0, 0, false, 0);
  const productPrice7 = getCalculatePriceInfo(5, 1, 1, 7, false, 0, 0, false, 0);
  const productPrice8 = getCalculatePriceInfo(5, 1, 1, 7, false, 0, 0, false, 0);
  const productPrice9 = getCalculatePriceInfo(5, 1, 1, 7, false, 0, 0, false, 0);
  const productPrice10 = getCalculatePriceInfo(5, 1, 1, 7, false, 0, 0, false, 0);

  return [
    {
      id: getUuidByName("PURCHASE_REQUEST_DETAIL_01"),
      purchase_request_id: purchaseRequest1?.id || "",
      sequence_no: 1,
      location_id: location1?.id || "",
      location_name: location1?.name || "",
      delivery_point_id: deliveryPoint1?.id || "",
      delivery_point_name: deliveryPoint1?.name || "",
      delivery_date: "2025-06-30T08:36:00.898Z",
      product_id: product1?.id || "",
      product_sku: product1?.sku || "",
      product_name: product1?.name || "",
      product_local_name: product1?.local_name || "",
      inventory_unit_id: product1?.inventory_unit_id || "",
      inventory_unit_name: product1?.inventory_unit_name || "",
      description: "",
      comment: null,
      vendor_id: vendor1?.id || "",
      vendor_name: vendor1?.name || "",
      pricelist_detail_id: pricelistDetail1?.id || "",
      pricelist_no: pricelist01?.name || "",
      pricelist_unit: unit1?.name || "",
      pricelist_price: productPrice1.price,
      currency_id: currency1?.id || "",
      currency_name: currency1?.code || "",
      exchange_rate: productPrice1.currency_rate,
      exchange_rate_date: "2025-07-31T03:25:45.468Z",
      requested_qty: productPrice1.qty,
      requested_unit_id: unit1?.id || "",
      requested_unit_name: unit1?.name || "",
      requested_unit_conversion_factor: 1,
      requested_base_qty: productPrice1.qty * 1,
      approved_qty: productPrice1.qty,
      approved_unit_id: unit1?.id || "",
      approved_unit_name: unit1?.name || "",
      approved_unit_conversion_factor: 1,
      approved_base_qty: productPrice1.qty * 1,
      foc_qty: 0,
      foc_unit_id: unit1?.id || "",
      foc_unit_name: unit1?.name || "",
      foc_unit_conversion_factor: 1,
      foc_base_qty: 0,
      tax_profile_id: taxProfile1?.id || "",
      tax_profile_name: taxProfile1?.name || "",
      tax_rate: productPrice1.tax_rate,
      tax_amount: productPrice1.tax_amount,
      base_tax_amount: productPrice1.tax_amount,
      is_tax_adjustment: false,
      discount_rate: productPrice1.discount_rate,
      discount_amount: productPrice1.discount_amount,
      base_discount_amount: productPrice1.base_discount_amount,
      is_discount_adjustment: false,
      sub_total_price: productPrice1.sub_total_price,
      net_amount: productPrice1.net_amount,
      total_price: productPrice1.total_price,
      base_price: productPrice1.base_price,
      base_sub_total_price: productPrice1.base_sub_total_price,
      base_net_amount: productPrice1.base_net_amount,
      base_total_price: productPrice1.base_total_price,
      history: [
        {
          action: "submit",
          user_id: user1?.id || "",
          user_name: user1?.username || "",
          user: user1Profile?.firstname + " " + user1Profile?.lastname || "",
          created_at: "2025-07-31T03:25:45.468Z",
          message: "",
        },
        {
          action: "review",
          user_id: user2?.id || "",
          user_name: user2?.username || "",
          user: user2Profile?.firstname + " " + user2Profile?.lastname || "",
          created_at: "2025-07-31T03:25:45.468Z",
          message: "Review price",
        },
        {
          action: "submit",
          user_id: user1?.id || "",
          user_name: user1?.username || "",
          user: user1Profile?.firstname + " " + user1Profile?.lastname || "",
          created_at: "2025-07-31T03:25:45.468Z",
          message: "",
        },
      ],
      stages_status: [
        {
          seq: 1,
          status: "submit",
          name: "Submit - it should come from workflow",
        },
      ],
      info: null,
      dimension: [
        {
          key: "project_code",
          label: "Project Code",
          type: "string",
          value: "PROJ-2025-001",
        },
        {
          key: "project_name",
          label: "Project Name",
          type: "string",
          value: "Project 1",
        },
        {
          key: "cost_center",
          label: "Cost Center",
          type: "string",
          value: "CC-F&B-001",
        },
        {
          key: "market_segment",
          label: "Market Segment",
          type: "string",
          value: "Corporate Events",
        },
        {
          key: "event",
          label: "Event",
          type: "string",
          value: "Annual Conference 2025",
        },
        {
          key: "department",
          label: "Department",
          type: "string",
          value: "Food & Beverage",
        },
        {
          key: "region",
          label: "Region",
          type: "string",
          value: "Singapore East",
        },
      ],
      doc_version: "1",
      created_at: "2025-07-31T03:25:45.468Z",
      created_by_id: "1bfdb891-58ee-499c-8115-34a964de8122",
      updated_at: "2025-07-31T03:25:45.468Z",
      updated_by_id: "1bfdb891-58ee-499c-8115-34a964de8122",
      deleted_at: null,
      deleted_by_id: null,
    },
    {
      id: getUuidByName("PURCHASE_REQUEST_DETAIL_02"),
      purchase_request_id: purchaseRequest1?.id || "",
      sequence_no: 2,
      location_id: location2?.id || "",
      location_name: location2?.name || "",
      delivery_point_id: deliveryPoint2?.id || "",
      delivery_point_name: deliveryPoint2?.name || "",
      delivery_date: "2025-07-30T17:00:00.000Z",
      product_id: product2?.id || "",
      product_sku: product2?.sku || "",
      product_name: product2?.name || "",
      product_local_name: product2?.local_name || "",
      inventory_unit_id: product2?.inventory_unit_id || "",
      inventory_unit_name: product2?.inventory_unit_name || "",
      description: "",
      comment: null,
      vendor_id: vendor1?.id || "",
      vendor_name: vendor1?.name || "",
      pricelist_detail_id: pricelistDetail1?.id || "",
      pricelist_no: pricelist02?.name || "",
      pricelist_unit: unit2?.name || "",
      pricelist_price: null,
      currency_id: currency2?.id || "",
      currency_name: currency2?.code || "",
      exchange_rate: productPrice2.currency_rate,
      exchange_rate_date: "2025-07-31T03:25:45.468Z",
      requested_qty: productPrice2.qty,
      requested_unit_id: unit2?.id || "",
      requested_unit_name: unit2?.name || "",
      requested_unit_conversion_factor: 1,
      requested_base_qty: productPrice2.qty * 1,
      approved_qty: productPrice2.qty,
      approved_unit_id: unit2?.id || "",
      approved_unit_name: unit2?.name || "",
      approved_unit_conversion_factor: 1,
      approved_base_qty: productPrice2.qty * 1,
      foc_qty: 0,
      foc_unit_id: unit2?.id || "",
      foc_unit_name: unit2?.name || "",
      foc_unit_conversion_factor: 1,
      foc_base_qty: 0,
      tax_profile_id: taxProfile1?.id || "",
      tax_profile_name: taxProfile1?.name || "",
      tax_rate: productPrice2.tax_rate,
      tax_amount: productPrice2.tax_amount,
      base_tax_amount: productPrice2.base_tax_amount,
      is_tax_adjustment: false,
      discount_rate: productPrice2.discount_rate,
      discount_amount: productPrice2.discount_amount,
      base_discount_amount: productPrice2.base_discount_amount,
      is_discount_adjustment: false,
      sub_total_price: productPrice2.sub_total_price,
      net_amount: productPrice2.net_amount,
      total_price: productPrice2.total_price,
      base_price: productPrice2.base_price,
      base_sub_total_price: productPrice2.base_sub_total_price,
      base_net_amount: productPrice2.base_net_amount,
      base_total_price: productPrice2.base_total_price,
      history: [
        {
          action: "submit",
          user_id: user1?.id || "",
          user_name: user1?.username || "",
          user: user1Profile?.firstname + " " + user1Profile?.lastname || "",
          created_at: "2025-07-31T03:25:45.468Z",
          message: "Submit purchase request",
        },
        {
          action: "approve",
          user_id: user2?.id || "",
          user_name: user2?.username || "",
          user: user2Profile?.firstname + " " + user2Profile?.lastname || "",
          created_at: "2025-07-31T03:25:45.468Z",
          message: "Approve purchase request",
        },
      ],
      stages_status: null,
      info: null,
      dimension: [
        {
          key: "project_code",
          label: "Project Code",
          type: "string",
          value: "PROJ-2025-001",
        },
        {
          key: "project_name",
          label: "Project Name",
          type: "string",
          value: "Project 1",
        },
        {
          key: "cost_center",
          label: "Cost Center",
          type: "string",
          value: "CC-F&B-001",
        },
        {
          key: "market_segment",
          label: "Market Segment",
          type: "string",
          value: "Corporate Events",
        },
        {
          key: "event",
          label: "Event",
          type: "string",
          value: "Annual Conference 2025",
        },
        {
          key: "department",
          label: "Department",
          type: "string",
          value: "Food & Beverage",
        },
        {
          key: "region",
          label: "Region",
          type: "string",
          value: "Singapore East",
        },
      ],
      doc_version: "0",
      created_at: "2025-07-31T05:08:04.223Z",
      created_by_id: "1bfdb891-58ee-499c-8115-34a964de8122",
      updated_at: "2025-07-31T05:08:04.223Z",
      updated_by_id: null,
      deleted_at: null,
      deleted_by_id: null,
    },
    {
      id: getUuidByName("PURCHASE_REQUEST_DETAIL_03"),
      purchase_request_id: getUuidByName("PURCHASE_REQUEST_01"),
      sequence_no: 1,
      location_id: location1?.id || "",
      location_name: location1?.name || "",
      delivery_point_id: deliveryPoint1?.id || "",
      delivery_point_name: deliveryPoint1?.name || "",
      delivery_date: "2025-06-30T08:36:00.898Z",
      product_id: product3?.id || "",
      product_sku: product3?.sku || "",
      product_name: product3?.name || "",
      product_local_name: product3?.local_name || "",
      inventory_unit_id: product3?.inventory_unit_id || "",
      inventory_unit_name: product3?.inventory_unit_name || "",
      description: "Office supplies for Q4",
      comment: "Required for Grand Ballroom Event catering preparation",
      vendor_id: vendor1?.id || "",
      vendor_name: vendor1?.name || "",
      pricelist_detail_id: pricelistDetail1?.id || "",
      pricelist_no: pricelist03?.name || "",
      pricelist_unit: product3?.inventory_unit_id || "",
      pricelist_price: null,
      currency_id: currency1?.id || "",
      currency_name: currency1?.name || "",
      exchange_rate: productPrice3.currency_rate,
      exchange_rate_date: "2024-08-07T00:00:00.000Z",
      requested_qty: productPrice3.qty,
      requested_unit_id: unit3?.id || "",
      requested_unit_name: unit3?.name || "",
      requested_unit_conversion_factor: 1,
      requested_base_qty: productPrice3.qty * 1,
      approved_qty: productPrice3.qty,
      approved_unit_id: unit3?.id || "",
      approved_unit_name: unit3?.name || "",
      approved_unit_conversion_factor: 1,
      approved_base_qty: productPrice3.qty * 1,
      foc_qty: 0,
      foc_unit_id: unit3?.id || "",
      foc_unit_name: unit3?.name || "",
      foc_unit_conversion_factor: 1,
      foc_base_qty: 0,
      tax_profile_id: taxProfile1?.id || "",
      tax_profile_name: taxProfile1?.name || "",
      tax_rate: productPrice3.tax_rate,
      tax_amount: productPrice3.tax_amount,
      base_tax_amount: productPrice3.base_tax_amount,
      is_tax_adjustment: false,
      discount_rate: productPrice3.discount_rate,
      discount_amount: productPrice3.discount_amount,
      base_discount_amount: productPrice3.base_discount_amount,
      is_discount_adjustment: false,
      sub_total_price: productPrice3.sub_total_price,
      net_amount: productPrice3.net_amount,
      total_price: productPrice3.total_price,
      base_price: productPrice3.base_price,
      base_sub_total_price: productPrice3.base_sub_total_price,
      base_net_amount: productPrice3.base_net_amount,
      base_total_price: productPrice3.base_total_price,
      history: [
        {
          action: "submit",
          user_id: user1?.id || "",
          user_name: user1?.username || "",
          user: user1Profile?.firstname + " " + user1Profile?.lastname || "",
          created_at: "2025-07-31T03:25:45.468Z",
          message: "Submit purchase request",
        },
      ],
      stages_status: [
        {
          seq: 1,
          status: "submit",
          name: "user submit",
          message: "",
        },
      ],
      info: null,
      dimension: [
        {
          key: "jobcode",
          label: "Job Code",
          type: "string",
          value: "20001",
        },
        {
          key: "event",
          label: "Event",
          type: "string",
          value: "Wedding in 2025",
        },
        {
          key: "market-segment",
          label: "Market Segment",
          type: "string",
          value: "Outlet 001",
        },
        {
          key: "region",
          label: "Region",
          type: "string",
          value: "Taiwan",
        },
      ],
      doc_version: "38",
      created_at: "2025-08-07T08:48:14.789Z",
      created_by_id: "1bfdb891-58ee-499c-8115-34a964de8122",
      updated_at: "2025-08-07T08:48:14.789Z",
      updated_by_id: "1bfdb891-58ee-499c-8115-34a964de8122",
      deleted_at: null,
      deleted_by_id: null,
    },
    {
      id: getUuidByName("PURCHASE_REQUEST_DETAIL_04"),
      purchase_request_id: getUuidByName("PURCHASE_REQUEST_02"),
      sequence_no: 1,
      location_id: location1?.id || "",
      location_name: location1?.name || "",
      delivery_point_id: deliveryPoint1?.id || "",
      delivery_point_name: deliveryPoint1?.name || "",
      delivery_date: "2025-06-30T08:36:00.898Z",
      product_id: product4?.id || "",
      product_sku: product4?.sku || "",
      product_name: product4?.name || "",
      product_local_name: product4?.local_name || "",
      inventory_unit_id: product4?.inventory_unit_id || "",
      inventory_unit_name: product4?.inventory_unit_name || "",
      description: "",
      comment: null,
      vendor_id: vendor1?.id || "",
      vendor_name: vendor1?.name || "",
      pricelist_detail_id: pricelistDetail1?.id || "",
      pricelist_no: pricelist01?.name || "",
      pricelist_unit: product4?.inventory_unit_id || "",
      pricelist_price: productPrice4.price,
      currency_id: currency1?.id || "",
      currency_name: currency1?.name || "",
      exchange_rate: productPrice4.currency_rate,
      exchange_rate_date: "2025-07-31T03:25:45.468Z",
      requested_qty: productPrice4.qty,
      requested_unit_id: unit4?.id || "",
      requested_unit_name: unit4?.name || "",
      requested_unit_conversion_factor: 1,
      requested_base_qty: productPrice4.qty * 1,
      approved_qty: productPrice4.qty,
      approved_unit_id: unit4?.id || "",
      approved_unit_name: unit4?.name || "",
      approved_unit_conversion_factor: 1,
      approved_base_qty: productPrice4.qty * 1,
      foc_qty: 0,
      foc_unit_id: unit4?.id || "",
      foc_unit_name: unit4?.name || "",
      foc_unit_conversion_factor: 1,
      foc_base_qty: 0,
      tax_profile_id: taxProfile1?.id || "",
      tax_profile_name: taxProfile1?.name || "",
      tax_rate: productPrice4.tax_rate,
      tax_amount: productPrice4.tax_amount,
      base_tax_amount: productPrice4.base_tax_amount,
      is_tax_adjustment: false,
      discount_rate: productPrice4.discount_rate,
      discount_amount: productPrice4.discount_amount,
      base_discount_amount: productPrice4.base_discount_amount,
      is_discount_adjustment: false,
      sub_total_price: productPrice4.sub_total_price,
      net_amount: productPrice4.net_amount,
      total_price: productPrice4.total_price,
      base_price: productPrice4.base_price,
      base_sub_total_price: productPrice4.base_sub_total_price,
      base_net_amount: productPrice4.base_net_amount,
      base_total_price: productPrice4.base_total_price,
      history: [
        {
          action: "submit",
          user_id: user1?.id || "",
          user_name: user1?.username || "",
          user: user1Profile?.firstname + " " + user1Profile?.lastname || "",
          created_at: "2025-07-31T03:25:45.468Z",
          message: "Submit purchase request",
        },
        {
          action: "review",
          user_id: user2?.id || "",
          user_name: user2?.username || "",
          user: user2Profile?.firstname + " " + user2Profile?.lastname || "",
          created_at: "2025-07-31T03:25:45.468Z",
          message: "Review purchase request",
        },
        {
          action: "submit",
          user_id: user1?.id || "",
          user_name: user1?.username || "",
          user: user1Profile?.firstname + " " + user1Profile?.lastname || "",
          created_at: "2025-07-31T03:25:45.468Z",
          message: "Submit purchase request",
        },
      ],
      stages_status: null,
      info: null,
      dimension: [
        {
          key: "project_code",
          label: "Project Code",
          type: "string",
          value: "PROJ-2025-001",
        },
        {
          key: "project_name",
          label: "Project Name",
          type: "string",
          value: "Project 1",
        },
        {
          key: "cost_center",
          label: "Cost Center",
          type: "string",
          value: "CC-F&B-001",
        },
        {
          key: "market_segment",
          label: "Market Segment",
          type: "string",
          value: "Corporate Events",
        },
        {
          key: "event",
          label: "Event",
          type: "string",
          value: "Annual Conference 2025",
        },
        {
          key: "department",
          label: "Department",
          type: "string",
          value: "Food & Beverage",
        },
        {
          key: "region",
          label: "Region",
          type: "string",
          value: "Singapore East",
        },
      ],
      doc_version: "0",
      created_at: "2025-08-27T10:10:30.493Z",
      created_by_id: "1bfdb891-58ee-499c-8115-34a964de8122",
      updated_at: "2025-08-27T10:10:30.493Z",
      updated_by_id: null,
      deleted_at: null,
      deleted_by_id: null,
    },
    {
      id: getUuidByName("PURCHASE_REQUEST_DETAIL_05"),
      purchase_request_id: getUuidByName("PURCHASE_REQUEST_03"),
      sequence_no: 1,
      location_id: location1?.id || "",
      location_name: location1?.name || "",
      delivery_point_id: deliveryPoint1?.id || "",
      delivery_point_name: deliveryPoint1?.name || "",
      delivery_date: "2025-06-30T08:36:00.898Z",
      product_id: product5?.id || "",
      product_sku: product5?.sku || "",
      product_name: product5?.name || "",
      product_local_name: product5?.local_name || "",
      inventory_unit_id: product5?.inventory_unit_id || "",
      inventory_unit_name: product5?.inventory_unit_name || "",
      description: "omg description",
      comment: null,
      vendor_id: vendor1?.id || "",
      vendor_name: vendor1?.name || "",
      pricelist_detail_id: pricelistDetail1?.id || "",
      pricelist_no: null,
      pricelist_unit: product5?.inventory_unit_id || "",
      pricelist_price: null,
      currency_id: currency1?.id || "",
      currency_name: currency1?.name || "",
      exchange_rate: productPrice5.currency_rate,
      exchange_rate_date: "2025-07-31T03:25:45.468Z",
      requested_qty: productPrice5.qty,
      requested_unit_id: unit5?.id || "",
      requested_unit_name: unit5?.name || "",
      requested_unit_conversion_factor: 1,
      requested_base_qty: productPrice5.qty * 1,
      approved_qty: productPrice5.qty,
      approved_unit_id: unit5?.id || "",
      approved_unit_name: unit5?.name || "",
      approved_unit_conversion_factor: 1,
      approved_base_qty: productPrice5.qty * 1,
      foc_qty: 0,
      foc_unit_id: unit5?.id || "",
      foc_unit_name: unit5?.name || "",
      foc_unit_conversion_factor: 1,
      foc_base_qty: 0,
      tax_profile_id: taxProfile1?.id || "",
      tax_profile_name: taxProfile1?.name || "",
      tax_rate: productPrice5.tax_rate,
      tax_amount: productPrice5.tax_amount,
      base_tax_amount: productPrice5.base_tax_amount,
      is_tax_adjustment: false,
      discount_rate: productPrice5.discount_rate,
      discount_amount: productPrice5.discount_amount,
      base_discount_amount: productPrice5.base_discount_amount,
      is_discount_adjustment: false,
      sub_total_price: productPrice5.sub_total_price,
      net_amount: productPrice5.net_amount,
      total_price: productPrice5.total_price,
      base_price: productPrice5.base_price,
      base_sub_total_price: productPrice5.base_sub_total_price,
      base_net_amount: productPrice5.base_net_amount,
      base_total_price: productPrice5.base_total_price,
      history: [
        {
          action: "submit",
          user_id: user1?.id || "",
          user_name: user1?.username || "",
          user: user1Profile?.firstname + " " + user1Profile?.lastname || "",
          created_at: "2025-07-31T03:25:45.468Z",
          message: "",
        },
        {
          action: "approve",
          user_id: user2?.id || "",
          user_name: user2?.username || "",
          user: user2Profile?.firstname + " " + user2Profile?.lastname || "",
          created_at: "2025-07-31T03:25:45.468Z",
          message: "Approve purchase request",
        },
        {
          action: "approve",
          user_id: user1?.id || "",
          user_name: user1?.username || "",
          user: user1Profile?.firstname + " " + user1Profile?.lastname || "",
          created_at: "2025-07-31T03:25:45.468Z",
          message: "",
        },
        {
          action: "approve",
          user_id: user3?.id || "",
          user_name: user3?.username || "",
          user: user3Profile?.firstname + " " + user3Profile?.lastname || "",
          created_at: "2025-07-31T03:25:45.468Z",
          message: "",
        },
      ],
      stages_status: null,
      info: null,
      dimension: [
        {
          key: "project_code",
          label: "Project Code",
          type: "string",
          value: "PROJ-2025-001",
        },
        {
          key: "project_name",
          label: "Project Name",
          type: "string",
          value: "Project 1",
        },
        {
          key: "cost_center",
          label: "Cost Center",
          type: "string",
          value: "CC-F&B-001",
        },
        {
          key: "market_segment",
          label: "Market Segment",
          type: "string",
          value: "Corporate Events",
        },
        {
          key: "event",
          label: "Event",
          type: "string",
          value: "Annual Conference 2025",
        },
        {
          key: "department",
          label: "Department",
          type: "string",
          value: "Food & Beverage",
        },
        {
          key: "region",
          label: "Region",
          type: "string",
          value: "Singapore East",
        },
      ],
      doc_version: "0",
      created_at: "2025-08-27T10:13:36.244Z",
      created_by_id: "1bfdb891-58ee-499c-8115-34a964de8122",
      updated_at: "2025-08-27T10:13:36.244Z",
      updated_by_id: null,
      deleted_at: null,
      deleted_by_id: null,
    },
    {
      id: getUuidByName("PURCHASE_REQUEST_DETAIL_06"),
      purchase_request_id: getUuidByName("PURCHASE_REQUEST_02"),
      sequence_no: 1,
      location_id: location1?.id || "",
      location_name: location1?.name || "",
      delivery_point_id: deliveryPoint1?.id || "",
      delivery_point_name: deliveryPoint1?.name || "",
      delivery_date: "2025-06-30T08:36:00.898Z",
      product_id: product5?.id || "",
      product_sku: product5?.sku || "",
      product_name: product5?.name || "",
      product_local_name: product5?.local_name || "",
      inventory_unit_id: product5?.inventory_unit_id || "",
      inventory_unit_name: product5?.inventory_unit_name || "",
      description: "dddddd",
      comment: null,
      vendor_id: vendor1?.id || "",
      vendor_name: vendor1?.name || "",
      pricelist_detail_id: pricelistDetail1?.id || "",
      pricelist_no: pricelist01?.name || "",
      pricelist_unit: product6?.inventory_unit_id || "",
      pricelist_price: productPrice6.price,
      currency_id: currency1?.id || "",
      currency_name: currency1?.name || "",
      exchange_rate: productPrice6.currency_rate,
      exchange_rate_date: "2025-07-31T03:25:45.468Z",
      requested_qty: productPrice6.qty,
      requested_unit_id: unit5?.id || "",
      requested_unit_name: unit5?.name || "",
      requested_unit_conversion_factor: 1,
      requested_base_qty: productPrice6.qty * 1,
      approved_qty: productPrice6.qty,
      approved_unit_id: unit5?.id || "",
      approved_unit_name: unit5?.name || "",
      approved_unit_conversion_factor: 1,
      approved_base_qty: productPrice6.qty * 1,
      foc_qty: 0,
      foc_unit_id: unit5?.id || "",
      foc_unit_name: unit5?.name || "",
      foc_unit_conversion_factor: 1,
      foc_base_qty: 0,
      tax_profile_id: taxProfile1?.id || "",
      tax_profile_name: taxProfile1?.name || "",
      tax_rate: productPrice6.tax_rate,
      tax_amount: productPrice6.tax_amount,
      base_tax_amount: productPrice6.base_tax_amount,
      is_tax_adjustment: false,
      discount_rate: productPrice6.discount_rate,
      discount_amount: productPrice6.discount_amount,
      base_discount_amount: productPrice6.base_discount_amount,
      is_discount_adjustment: false,
      sub_total_price: productPrice6.sub_total_price,
      net_amount: productPrice6.net_amount,
      total_price: productPrice6.total_price,
      base_price: productPrice6.base_price,
      base_sub_total_price: productPrice6.base_sub_total_price,
      base_net_amount: productPrice6.base_net_amount,
      base_total_price: productPrice6.base_total_price,
      history: null,
      stages_status: null,
      info: null,
      dimension: [
        {
          key: "project_code",
          label: "Project Code",
          type: "string",
          value: "PROJ-2025-001",
        },
        {
          key: "project_name",
          label: "Project Name",
          type: "string",
          value: "Project 1",
        },
        {
          key: "cost_center",
          label: "Cost Center",
          type: "string",
          value: "CC-F&B-001",
        },
        {
          key: "market_segment",
          label: "Market Segment",
          type: "string",
          value: "Corporate Events",
        },
        {
          key: "event",
          label: "Event",
          type: "string",
          value: "Annual Conference 2025",
        },
        {
          key: "department",
          label: "Department",
          type: "string",
          value: "Food & Beverage",
        },
        {
          key: "region",
          label: "Region",
          type: "string",
          value: "Singapore East",
        },
      ],
      doc_version: "0",
      created_at: "2025-08-28T04:50:55.267Z",
      created_by_id: "1bfdb891-58ee-499c-8115-34a964de8122",
      updated_at: "2025-08-28T04:50:55.267Z",
      updated_by_id: null,
      deleted_at: null,
      deleted_by_id: null,
    },
    {
      id: getUuidByName("PURCHASE_REQUEST_DETAIL_07"),
      purchase_request_id: getUuidByName("PURCHASE_REQUEST_02"),
      sequence_no: 1,
      location_id: location1?.id || "",
      location_name: location1?.name || "",
      delivery_point_id: deliveryPoint1?.id || "",
      delivery_point_name: deliveryPoint1?.name || "",
      delivery_date: "2025-06-30T08:36:00.898Z",
      product_id: product5?.id || "",
      product_sku: product5?.sku || "",
      product_name: product5?.name || "",
      product_local_name: product5?.local_name || "",
      inventory_unit_id: product5?.inventory_unit_id || "",
      inventory_unit_name: product5?.inventory_unit_name || "",
      description: "dddddd",
      comment: null,
      vendor_id: vendor1?.id || "",
      vendor_name: vendor1?.name || "",
      pricelist_detail_id: pricelistDetail1?.id || "",
      pricelist_no: pricelist01?.name || "",
      pricelist_unit: product7?.inventory_unit_id || "",
      pricelist_price: productPrice7.price,
      currency_id: currency1?.id || "",
      currency_name: currency1?.name || "",
      exchange_rate: productPrice7.currency_rate,
      exchange_rate_date: "2025-07-31T03:25:45.468Z",
      requested_qty: productPrice7.qty,
      requested_unit_id: unit5?.id || "",
      requested_unit_name: unit5?.name || "",
      requested_unit_conversion_factor: 1,
      requested_base_qty: productPrice7.qty * 1,
      approved_qty: productPrice7.qty,
      approved_unit_id: unit5?.id || "",
      approved_unit_name: unit5?.name || "",
      approved_unit_conversion_factor: 1,
      approved_base_qty: productPrice7.qty * 1,
      foc_qty: 0,
      foc_unit_id: unit5?.id || "",
      foc_unit_name: unit5?.name || "",
      foc_unit_conversion_factor: 1,
      foc_base_qty: 0,
      tax_profile_id: taxProfile1?.id || "",
      tax_profile_name: taxProfile1?.name || "",
      tax_rate: productPrice7.tax_rate,
      tax_amount: productPrice7.tax_amount,
      base_tax_amount: productPrice7.base_tax_amount,
      is_tax_adjustment: false,
      discount_rate: productPrice7.discount_rate,
      discount_amount: productPrice7.discount_amount,
      base_discount_amount: productPrice7.base_discount_amount,
      is_discount_adjustment: false,
      sub_total_price: productPrice7.sub_total_price,
      net_amount: productPrice7.net_amount,
      total_price: productPrice7.total_price,
      base_price: productPrice7.base_price,
      base_sub_total_price: productPrice7.base_sub_total_price,
      base_net_amount: productPrice7.base_net_amount,
      base_total_price: productPrice7.base_total_price,
      history: null,
      stages_status: null,
      info: null,
      dimension: [
        {
          key: "project_code",
          label: "Project Code",
          type: "string",
          value: "PROJ-2025-001",
        },
        {
          key: "project_name",
          label: "Project Name",
          type: "string",
          value: "Project 1",
        },
        {
          key: "cost_center",
          label: "Cost Center",
          type: "string",
          value: "CC-F&B-001",
        },
        {
          key: "market_segment",
          label: "Market Segment",
          type: "string",
          value: "Corporate Events",
        },
        {
          key: "event",
          label: "Event",
          type: "string",
          value: "Annual Conference 2025",
        },
        {
          key: "department",
          label: "Department",
          type: "string",
          value: "Food & Beverage",
        },
        {
          key: "region",
          label: "Region",
          type: "string",
          value: "Singapore East",
        },
      ],
      doc_version: "0",
      created_at: "2025-08-28T04:59:05.449Z",
      created_by_id: "1bfdb891-58ee-499c-8115-34a964de8122",
      updated_at: "2025-08-28T04:59:05.449Z",
      updated_by_id: null,
      deleted_at: null,
      deleted_by_id: null,
    },
    {
      id: getUuidByName("PURCHASE_REQUEST_DETAIL_08"),
      purchase_request_id: getUuidByName("PURCHASE_REQUEST_03"),
      sequence_no: 1,
      location_id: location1?.id || "",
      location_name: location1?.name || "",
      delivery_point_id: deliveryPoint1?.id || "",
      delivery_point_name: deliveryPoint1?.name || "",
      delivery_date: "2025-06-30T08:36:00.898Z",
      product_id: product5?.id || "",
      product_sku: product5?.sku || "",
      product_name: product5?.name || "",
      product_local_name: product5?.local_name || "",
      inventory_unit_id: product5?.inventory_unit_id || "",
      inventory_unit_name: product5?.inventory_unit_name || "",
      description: "dddddd",
      comment: null,
      vendor_id: vendor1?.id || "",
      vendor_name: vendor1?.name || "",
      pricelist_detail_id: pricelistDetail1?.id || "",
      pricelist_no: null,
      pricelist_unit: product8?.inventory_unit_id || "",
      pricelist_price: productPrice8.price,
      currency_id: currency1?.id || "",
      currency_name: currency1?.name || "",
      exchange_rate: productPrice8.currency_rate,
      exchange_rate_date: "2025-07-31T03:25:45.468Z",
      requested_qty: productPrice8.qty,
      requested_unit_id: unit5?.id || "",
      requested_unit_name: unit5?.name || "",
      requested_unit_conversion_factor: 1,
      requested_base_qty: productPrice8.qty * 1,
      approved_qty: productPrice8.qty,
      approved_unit_id: unit5?.id || "",
      approved_unit_name: unit5?.name || "",
      approved_unit_conversion_factor: 1,
      approved_base_qty: productPrice8.qty * 1,
      foc_qty: 0,
      foc_unit_id: unit5?.id || "",
      foc_unit_name: unit5?.name || "",
      foc_unit_conversion_factor: 1,
      foc_base_qty: 0,
      tax_profile_id: taxProfile1?.id || "",
      tax_profile_name: taxProfile1?.name || "",
      tax_rate: productPrice8.tax_rate,
      tax_amount: productPrice8.tax_amount,
      base_tax_amount: productPrice8.base_tax_amount,
      is_tax_adjustment: false,
      discount_rate: productPrice8.discount_rate,
      discount_amount: productPrice8.discount_amount,
      base_discount_amount: productPrice8.base_discount_amount,
      is_discount_adjustment: false,
      sub_total_price: productPrice8.sub_total_price,
      net_amount: productPrice8.net_amount,
      total_price: productPrice8.total_price,
      base_price: productPrice8.base_price,
      base_sub_total_price: productPrice8.base_sub_total_price,
      base_net_amount: productPrice8.base_net_amount,
      base_total_price: productPrice8.base_total_price,
      history: null,
      stages_status: null,
      info: null,
      dimension: [
        {
          key: "project_code",
          label: "Project Code",
          type: "string",
          value: "PROJ-2025-001",
        },
        {
          key: "project_name",
          label: "Project Name",
          type: "string",
          value: "Project 1",
        },
        {
          key: "cost_center",
          label: "Cost Center",
          type: "string",
          value: "CC-F&B-001",
        },
        {
          key: "market_segment",
          label: "Market Segment",
          type: "string",
          value: "Corporate Events",
        },
        {
          key: "event",
          label: "Event",
          type: "string",
          value: "Annual Conference 2025",
        },
        {
          key: "department",
          label: "Department",
          type: "string",
          value: "Food & Beverage",
        },
        {
          key: "region",
          label: "Region",
          type: "string",
          value: "Singapore East",
        },
      ],
      doc_version: "0",
      created_at: "2025-08-28T04:59:35.434Z",
      created_by_id: "1bfdb891-58ee-499c-8115-34a964de8122",
      updated_at: "2025-08-28T04:59:35.434Z",
      updated_by_id: null,
      deleted_at: null,
      deleted_by_id: null,
    },
    {
      id: getUuidByName("PURCHASE_REQUEST_DETAIL_09"),
      purchase_request_id: getUuidByName("PURCHASE_REQUEST_02"),
      sequence_no: 1,
      location_id: location1?.id || "",
      location_name: location1?.name || "",
      delivery_point_id: deliveryPoint1?.id || "",
      delivery_point_name: deliveryPoint1?.name || "",
      delivery_date: "2025-08-26T17:00:00.000Z",
      product_id: product6?.id || "",
      product_sku: product6?.sku || "",
      product_name: product6?.name || "",
      product_local_name: "สะเต๊ะไก่",
      inventory_unit_id: product6?.inventory_unit_id || "",
      inventory_unit_name: product6?.inventory_unit_name || "",
      description: product6?.description || "",
      comment: null,
      vendor_id: vendor1?.id || "",
      vendor_name: vendor1?.name || "",
      pricelist_detail_id: pricelistDetail1?.id || "",
      pricelist_no: pricelist01?.name || "",
      pricelist_unit: product6?.inventory_unit_id || "",
      pricelist_price: productPrice6.price,
      currency_id: currency1?.id || "",
      currency_name: currency1?.name || "",
      exchange_rate: productPrice6.currency_rate,
      exchange_rate_date: "2025-07-31T03:25:45.468Z",
      requested_qty: 2,
      requested_unit_id: unit5?.id || "",
      requested_unit_name: unit5?.name || "",
      requested_unit_conversion_factor: 1,
      requested_base_qty: productPrice6.qty * 1,
      approved_qty: productPrice6.qty,
      approved_unit_id: unit5?.id || "",
      approved_unit_name: unit5?.name || "",
      approved_unit_conversion_factor: 1,
      approved_base_qty: productPrice6.qty * 1,
      foc_qty: 0,
      foc_unit_id: unit5?.id || "",
      foc_unit_name: unit5?.name || "",
      foc_unit_conversion_factor: 1,
      foc_base_qty: 0,
      tax_profile_id: taxProfile1?.id || "",
      tax_profile_name: taxProfile1?.name || "",
      tax_rate: productPrice6.tax_rate,
      tax_amount: productPrice6.tax_amount,
      base_tax_amount: productPrice6.base_tax_amount,
      is_tax_adjustment: false,
      discount_rate: productPrice6.discount_rate,
      discount_amount: productPrice6.discount_amount,
      base_discount_amount: productPrice6.base_discount_amount,
      is_discount_adjustment: false,
      sub_total_price: productPrice6.sub_total_price,
      net_amount: productPrice6.net_amount,
      total_price: productPrice6.total_price,
      base_price: productPrice6.base_price,
      base_sub_total_price: productPrice6.base_sub_total_price,
      base_net_amount: productPrice6.base_net_amount,
      base_total_price: productPrice6.base_total_price,
      history: [
        {
          action: "submit",
          user_id: user1?.id || "",
          user_name: user1?.username || "",
          user: user1Profile?.firstname + " " + user1Profile?.lastname || "",
          created_at: "2025-08-28T07:23:19.407Z",
          message: "Submit purchase request for chicken satay",
        },
        {
          action: "review",
          user_id: user2?.id || "",
          user_name: user2?.username || "",
          user: user2Profile?.firstname + " " + user2Profile?.lastname || "",
          created_at: "2025-08-28T07:25:15.123Z",
          message: "Review pricing and quantity",
        },
      ],
      stages_status: null,
      info: null,
      dimension: [
        {
          key: "project_code",
          label: "Project Code",
          type: "string",
          value: "PROJ-2025-001",
        },
        {
          key: "project_name",
          label: "Project Name",
          type: "string",
          value: "Project 1",
        },
        {
          key: "cost_center",
          label: "Cost Center",
          type: "string",
          value: "CC-F&B-001",
        },
        {
          key: "market_segment",
          label: "Market Segment",
          type: "string",
          value: "Corporate Events",
        },
        {
          key: "event",
          label: "Event",
          type: "string",
          value: "Annual Conference 2025",
        },
        {
          key: "department",
          label: "Department",
          type: "string",
          value: "Food & Beverage",
        },
        {
          key: "region",
          label: "Region",
          type: "string",
          value: "Singapore East",
        },
      ],
      doc_version: "0",
      created_at: "2025-08-28T07:23:19.407Z",
      created_by_id: "1bfdb891-58ee-499c-8115-34a964de8122",
      updated_at: "2025-08-28T07:23:19.407Z",
      updated_by_id: null,
      deleted_at: null,
      deleted_by_id: null,
    },
    {
      id: getUuidByName("PURCHASE_REQUEST_DETAIL_10"),
      purchase_request_id: null,
      sequence_no: 2,
      location_id: location2?.id || "",
      location_name: location2?.name || "",
      delivery_point_id: deliveryPoint2?.id || "",
      delivery_point_name: deliveryPoint2?.name || "",
      delivery_date: "2025-08-26T17:00:00.000Z",
      product_id: product2?.id || "",
      product_sku: product2?.sku || "",
      product_name: product2?.name || "",
      product_local_name: product2?.local_name || "",
      inventory_unit_id: product2?.inventory_unit_id || "",
      inventory_unit_name: product2?.inventory_unit_name || "",
      description: product2?.description || "",
      comment: null,
      vendor_id: vendor1?.id || "",
      vendor_name: vendor1?.name || "",
      pricelist_detail_id: pricelistDetail1?.id || "",
      pricelist_no: pricelist01?.name || "",
      pricelist_unit: product2?.inventory_unit_id || "",
      pricelist_price: productPrice2.price,
      currency_id: currency2?.id || "",
      currency_name: currency2?.name || "",
      exchange_rate: productPrice2.currency_rate,
      exchange_rate_date: "2025-07-31T03:25:45.468Z",
      requested_qty: 24,
      requested_unit_id: unit2?.id || "",
      requested_unit_name: unit2?.name || "",
      requested_unit_conversion_factor: 1,
      requested_base_qty: productPrice2.qty * 1,
      approved_qty: productPrice2.qty,
      approved_unit_id: unit2?.id || "",
      approved_unit_name: unit2?.name || "",
      approved_unit_conversion_factor: 1,
      approved_base_qty: productPrice2.qty * 1,
      foc_qty: 0,
      foc_unit_id: unit2?.id || "",
      foc_unit_name: unit2?.name || "",
      foc_unit_conversion_factor: 1,
      foc_base_qty: 0,
      tax_profile_id: taxProfile2?.id || "",
      tax_profile_name: taxProfile2?.name || "",
      tax_rate: productPrice2.tax_rate,
      tax_amount: productPrice2.tax_amount,
      base_tax_amount: productPrice2.base_tax_amount,
      is_tax_adjustment: false,
      discount_rate: productPrice2.discount_rate,
      discount_amount: productPrice2.discount_amount,
      base_discount_amount: productPrice2.base_discount_amount,
      is_discount_adjustment: false,
      sub_total_price: productPrice2.sub_total_price,
      net_amount: productPrice2.net_amount,
      total_price: productPrice2.total_price,
      base_price: productPrice2.base_price,
      base_sub_total_price: productPrice2.base_sub_total_price,
      base_net_amount: productPrice2.base_net_amount,
      base_total_price: productPrice2.base_total_price,
      history: null,
      stages_status: null,
      info: null,
      dimension: [
        {
          key: "project_code",
          label: "Project Code",
          type: "string",
          value: "PROJ-2025-001",
        },

        {
          key: "project_name",
          label: "Project Name",
          type: "string",
          value: "Project 1",
        },

        {
          key: "cost_center",
          label: "Cost Center",
          type: "string",
          value: "CC-F&B-001",
        },

        {
          key: "market_segment",
          label: "Market Segment",
          type: "string",
          value: "Corporate Events",
        },

        {
          key: "event",
          label: "Event",
          type: "string",
          value: "Annual Conference 2025",
        },
      ],
      doc_version: "0",
      created_at: "2025-08-28T08:25:23.272Z",
      created_by_id: "1bfdb891-58ee-499c-8115-34a964de8122",
      updated_at: "2025-08-28T08:25:23.272Z",
      updated_by_id: null,
      deleted_at: null,
      deleted_by_id: null,
    },
  ];
})();

// CREATE - สร้าง PurchaseRequestDetail ใหม่
export const createPurchaseRequestDetail = (
  data: Omit<PurchaseRequestDetail, "id" | "created_at" | "created_by_id">
): PurchaseRequestDetail => {
  const newDetail: PurchaseRequestDetail = {
    ...data,
    id: generateId(),
    created_at: getCurrentTimestamp(),
    created_by_id: "system",
  };

  purchaseRequestDetails.push(newDetail);
  return newDetail;
};

// READ - อ่าน PurchaseRequestDetail ทั้งหมด
export const getAllPurchaseRequestDetails = (): PurchaseRequestDetail[] => {
  return purchaseRequestDetails.filter((detail) => !detail.deleted_at);
};

// READ - อ่าน PurchaseRequestDetail ตาม ID
export const getPurchaseRequestDetailById = (id: string): PurchaseRequestDetail | null => {
  const detail = purchaseRequestDetails.find((detail) => detail.id === id && !detail.deleted_at);
  return detail || null;
};

// READ - อ่าน PurchaseRequestDetail ตาม purchase_request_id
export const getPurchaseRequestDetailsByPurchaseRequestId = (purchaseRequestId: string): PurchaseRequestDetail[] => {
  return purchaseRequestDetails.filter(
    (detail) => detail.purchase_request_id === purchaseRequestId && !detail.deleted_at
  );
};

// READ - อ่าน PurchaseRequestDetail ตาม sequence_no
export const getPurchaseRequestDetailsBySequenceNo = (sequenceNo: number): PurchaseRequestDetail[] => {
  return purchaseRequestDetails.filter((detail) => detail.sequence_no === sequenceNo && !detail.deleted_at);
};

// READ - อ่าน PurchaseRequestDetail ตาม location_id
export const getPurchaseRequestDetailsByLocationId = (locationId: string): PurchaseRequestDetail[] => {
  return purchaseRequestDetails.filter((detail) => detail.location_id === locationId && !detail.deleted_at);
};

// READ - อ่าน PurchaseRequestDetail ตาม product_id
export const getPurchaseRequestDetailsByProductId = (productId: string): PurchaseRequestDetail[] => {
  return purchaseRequestDetails.filter((detail) => detail.product_id === productId && !detail.deleted_at);
};

// READ - อ่าน PurchaseRequestDetail ตาม vendor_id
export const getPurchaseRequestDetailsByVendorId = (vendorId: string): PurchaseRequestDetail[] => {
  return purchaseRequestDetails.filter((detail) => detail.vendor_id === vendorId && !detail.deleted_at);
};

// READ - อ่าน PurchaseRequestDetail ตาม currency_id
export const getPurchaseRequestDetailsByCurrencyId = (currencyId: string): PurchaseRequestDetail[] => {
  return purchaseRequestDetails.filter((detail) => detail.currency_id === currencyId && !detail.deleted_at);
};

// READ - อ่าน PurchaseRequestDetail ตาม delivery_date
export const getPurchaseRequestDetailsByDeliveryDate = (deliveryDate: string): PurchaseRequestDetail[] => {
  return purchaseRequestDetails.filter((detail) => detail.delivery_date === deliveryDate && !detail.deleted_at);
};

// READ - อ่าน PurchaseRequestDetail ที่มี description
export const getPurchaseRequestDetailsWithDescription = (): PurchaseRequestDetail[] => {
  return purchaseRequestDetails.filter(
    (detail) => detail.description && detail.description.trim() !== "" && !detail.deleted_at
  );
};

// READ - อ่าน PurchaseRequestDetail ที่มี comment
export const getPurchaseRequestDetailsWithComment = (): PurchaseRequestDetail[] => {
  return purchaseRequestDetails.filter(
    (detail) => detail.comment && detail.comment.trim() !== "" && !detail.deleted_at
  );
};

// READ - อ่าน PurchaseRequestDetail ที่มี approved_qty
export const getPurchaseRequestDetailsWithApprovedQty = (): PurchaseRequestDetail[] => {
  return purchaseRequestDetails.filter((detail) => detail.approved_qty && !detail.deleted_at);
};

// READ - อ่าน PurchaseRequestDetail ที่มี foc_qty
export const getPurchaseRequestDetailsWithFocQty = (): PurchaseRequestDetail[] => {
  return purchaseRequestDetails.filter((detail) => detail.foc_qty && !detail.deleted_at);
};

// READ - อ่าน PurchaseRequestDetail ที่มี tax_amount
export const getPurchaseRequestDetailsWithTaxAmount = (): PurchaseRequestDetail[] => {
  return purchaseRequestDetails.filter((detail) => detail.tax_amount && !detail.deleted_at);
};

// READ - อ่าน PurchaseRequestDetail ที่มี discount_amount
export const getPurchaseRequestDetailsWithDiscountAmount = (): PurchaseRequestDetail[] => {
  return purchaseRequestDetails.filter((detail) => detail.discount_amount && !detail.deleted_at);
};

// READ - อ่าน PurchaseRequestDetail ที่มี total_price
export const getPurchaseRequestDetailsWithTotalPrice = (): PurchaseRequestDetail[] => {
  return purchaseRequestDetails.filter((detail) => detail.total_price && !detail.deleted_at);
};

// READ - อ่าน PurchaseRequestDetail ที่มี base_total_price
export const getPurchaseRequestDetailsWithBaseTotalPrice = (): PurchaseRequestDetail[] => {
  return purchaseRequestDetails.filter((detail) => detail.base_total_price && !detail.deleted_at);
};

// READ - อ่าน PurchaseRequestDetail ที่มี history
export const getPurchaseRequestDetailsWithHistory = (): PurchaseRequestDetail[] => {
  return purchaseRequestDetails.filter((detail) => detail.history && !detail.deleted_at);
};

// READ - อ่าน PurchaseRequestDetail ที่มี stages_status
export const getPurchaseRequestDetailsWithStagesStatus = (): PurchaseRequestDetail[] => {
  return purchaseRequestDetails.filter((detail) => detail.stages_status && !detail.deleted_at);
};

// READ - อ่าน PurchaseRequestDetail ที่มี info
export const getPurchaseRequestDetailsWithInfo = (): PurchaseRequestDetail[] => {
  return purchaseRequestDetails.filter((detail) => detail.info && !detail.deleted_at);
};

// READ - อ่าน PurchaseRequestDetail ที่มี dimension
export const getPurchaseRequestDetailsWithDimension = (): PurchaseRequestDetail[] => {
  return purchaseRequestDetails.filter((detail) => detail.dimension && !detail.deleted_at);
};

// READ - ค้นหา PurchaseRequestDetail แบบ fuzzy search
export const searchPurchaseRequestDetails = (searchTerm: string): PurchaseRequestDetail[] => {
  const lowerSearchTerm = searchTerm.toLowerCase();

  return purchaseRequestDetails.filter(
    (detail) =>
      !detail.deleted_at &&
      (detail.description?.toLowerCase().includes(lowerSearchTerm) ||
        detail.comment?.toLowerCase().includes(lowerSearchTerm) ||
        detail.product_name?.toLowerCase().includes(lowerSearchTerm) ||
        detail.product_local_name?.toLowerCase().includes(lowerSearchTerm) ||
        detail.location_name?.toLowerCase().includes(lowerSearchTerm) ||
        detail.delivery_point_name?.toLowerCase().includes(lowerSearchTerm) ||
        detail.vendor_name?.toLowerCase().includes(lowerSearchTerm) ||
        detail.currency_name?.toLowerCase().includes(lowerSearchTerm) ||
        detail.inventory_unit_name?.toLowerCase().includes(lowerSearchTerm) ||
        detail.requested_unit_name?.toLowerCase().includes(lowerSearchTerm) ||
        detail.approved_unit_name?.toLowerCase().includes(lowerSearchTerm) ||
        detail.foc_unit_name?.toLowerCase().includes(lowerSearchTerm) ||
        detail.tax_profile_name?.toLowerCase().includes(lowerSearchTerm))
  );
};

// UPDATE - อัปเดต PurchaseRequestDetail
export const updatePurchaseRequestDetail = (
  id: string,
  updates: Partial<Omit<PurchaseRequestDetail, "id" | "created_at" | "created_by_id">>
): PurchaseRequestDetail | null => {
  const index = purchaseRequestDetails.findIndex((detail) => detail.id === id);

  if (index === -1) {
    return null;
  }

  purchaseRequestDetails[index] = {
    ...purchaseRequestDetails[index],
    ...updates,
    updated_at: getCurrentTimestamp(),
  };

  return purchaseRequestDetails[index];
};

// UPDATE - อัปเดต PurchaseRequestDetail sequence_no
export const updatePurchaseRequestDetailSequenceNo = (id: string, sequenceNo: number): PurchaseRequestDetail | null => {
  return updatePurchaseRequestDetail(id, { sequence_no: sequenceNo });
};

// UPDATE - อัปเดต PurchaseRequestDetail description
export const updatePurchaseRequestDetailDescription = (
  id: string,
  description: string
): PurchaseRequestDetail | null => {
  return updatePurchaseRequestDetail(id, { description });
};

// UPDATE - อัปเดต PurchaseRequestDetail comment
export const updatePurchaseRequestDetailComment = (id: string, comment: string): PurchaseRequestDetail | null => {
  return updatePurchaseRequestDetail(id, { comment });
};

// UPDATE - อัปเดต PurchaseRequestDetail delivery_date
export const updatePurchaseRequestDetailDeliveryDate = (
  id: string,
  deliveryDate: string
): PurchaseRequestDetail | null => {
  return updatePurchaseRequestDetail(id, { delivery_date: deliveryDate });
};

// UPDATE - อัปเดต PurchaseRequestDetail requested_qty
export const updatePurchaseRequestDetailRequestedQty = (
  id: string,
  requestedQty: number
): PurchaseRequestDetail | null => {
  return updatePurchaseRequestDetail(id, { requested_qty: requestedQty });
};

// UPDATE - อัปเดต PurchaseRequestDetail approved_qty
export const updatePurchaseRequestDetailApprovedQty = (
  id: string,
  approvedQty: number
): PurchaseRequestDetail | null => {
  return updatePurchaseRequestDetail(id, { approved_qty: approvedQty });
};

// UPDATE - อัปเดต PurchaseRequestDetail foc_qty
export const updatePurchaseRequestDetailFocQty = (id: string, focQty: number): PurchaseRequestDetail | null => {
  return updatePurchaseRequestDetail(id, { foc_qty: focQty });
};

// UPDATE - อัปเดต PurchaseRequestDetail tax_amount
export const updatePurchaseRequestDetailTaxAmount = (id: string, taxAmount: number): PurchaseRequestDetail | null => {
  return updatePurchaseRequestDetail(id, { tax_amount: taxAmount });
};

// UPDATE - อัปเดต PurchaseRequestDetail discount_amount
export const updatePurchaseRequestDetailDiscountAmount = (
  id: string,
  discountAmount: number
): PurchaseRequestDetail | null => {
  return updatePurchaseRequestDetail(id, { discount_amount: discountAmount });
};

// UPDATE - อัปเดต PurchaseRequestDetail total_price
export const updatePurchaseRequestDetailTotalPrice = (id: string, totalPrice: number): PurchaseRequestDetail | null => {
  return updatePurchaseRequestDetail(id, { total_price: totalPrice });
};

// UPDATE - อัปเดต PurchaseRequestDetail base_total_price
export const updatePurchaseRequestDetailBaseTotalPrice = (
  id: string,
  baseTotalPrice: number
): PurchaseRequestDetail | null => {
  return updatePurchaseRequestDetail(id, { base_total_price: baseTotalPrice });
};

// UPDATE - อัปเดต PurchaseRequestDetail history
export const updatePurchaseRequestDetailHistory = (id: string, history: any): PurchaseRequestDetail | null => {
  return updatePurchaseRequestDetail(id, { history });
};

// UPDATE - อัปเดต PurchaseRequestDetail stages_status
export const updatePurchaseRequestDetailStagesStatus = (
  id: string,
  stagesStatus: any
): PurchaseRequestDetail | null => {
  return updatePurchaseRequestDetail(id, { stages_status: stagesStatus });
};

// UPDATE - อัปเดต PurchaseRequestDetail info
export const updatePurchaseRequestDetailInfo = (id: string, info: any): PurchaseRequestDetail | null => {
  return updatePurchaseRequestDetail(id, { info });
};

// UPDATE - อัปเดต PurchaseRequestDetail dimension
export const updatePurchaseRequestDetailDimension = (id: string, dimension: any): PurchaseRequestDetail | null => {
  return updatePurchaseRequestDetail(id, { dimension });
};

// UPDATE - อัปเดต PurchaseRequestDetail doc_version
export const updatePurchaseRequestDetailDocVersion = (id: string, docVersion: string): PurchaseRequestDetail | null => {
  return updatePurchaseRequestDetail(id, { doc_version: docVersion });
};

// DELETE - ลบ PurchaseRequestDetail (soft delete)
export const deletePurchaseRequestDetail = (id: string, deletedById: string): boolean => {
  const index = purchaseRequestDetails.findIndex((detail) => detail.id === id);

  if (index === -1) {
    return false;
  }

  purchaseRequestDetails[index] = {
    ...purchaseRequestDetails[index],
    deleted_at: getCurrentTimestamp(),
    deleted_by_id: deletedById,
  };

  return true;
};

// DELETE - ลบ PurchaseRequestDetail แบบถาวร
export const hardDeletePurchaseRequestDetail = (id: string): boolean => {
  const index = purchaseRequestDetails.findIndex((detail) => detail.id === id);

  if (index === -1) {
    return false;
  }

  purchaseRequestDetails.splice(index, 1);
  return true;
};

// DELETE - ลบ PurchaseRequestDetail ตาม purchase_request_id
export const deletePurchaseRequestDetailsByPurchaseRequestId = (
  purchaseRequestId: string,
  deletedById: string
): number => {
  let deletedCount = 0;

  purchaseRequestDetails.forEach((detail) => {
    if (detail.purchase_request_id === purchaseRequestId && !detail.deleted_at) {
      detail.deleted_at = getCurrentTimestamp();
      detail.deleted_by_id = deletedById;
      deletedCount++;
    }
  });

  return deletedCount;
};

// DELETE - ลบ PurchaseRequestDetail ตาม location_id
export const deletePurchaseRequestDetailsByLocationId = (locationId: string, deletedById: string): number => {
  let deletedCount = 0;

  purchaseRequestDetails.forEach((detail) => {
    if (detail.location_id === locationId && !detail.deleted_at) {
      detail.deleted_at = getCurrentTimestamp();
      detail.deleted_by_id = deletedById;
      deletedCount++;
    }
  });

  return deletedCount;
};

// DELETE - ลบ PurchaseRequestDetail ตาม product_id
export const deletePurchaseRequestDetailsByProductId = (productId: string, deletedById: string): number => {
  let deletedCount = 0;

  purchaseRequestDetails.forEach((detail) => {
    if (detail.product_id === productId && !detail.deleted_at) {
      detail.deleted_at = getCurrentTimestamp();
      detail.deleted_by_id = deletedById;
      deletedCount++;
    }
  });

  return deletedCount;
};

// DELETE - ลบ PurchaseRequestDetail ตาม vendor_id
export const deletePurchaseRequestDetailsByVendorId = (vendorId: string, deletedById: string): number => {
  let deletedCount = 0;

  purchaseRequestDetails.forEach((detail) => {
    if (detail.vendor_id === vendorId && !detail.deleted_at) {
      detail.deleted_at = getCurrentTimestamp();
      detail.deleted_by_id = deletedById;
      deletedCount++;
    }
  });

  return deletedCount;
};

// RESTORE - กู้คืน PurchaseRequestDetail ที่ถูกลบ
export const restorePurchaseRequestDetail = (id: string): boolean => {
  const index = purchaseRequestDetails.findIndex((detail) => detail.id === id);

  if (index === -1) {
    return false;
  }

  if (purchaseRequestDetails[index].deleted_at) {
    purchaseRequestDetails[index] = {
      ...purchaseRequestDetails[index],
      deleted_at: null,
      deleted_by_id: null,
    };
    return true;
  }

  return false;
};

// RESTORE - กู้คืน PurchaseRequestDetail ตาม purchase_request_id
export const restorePurchaseRequestDetailsByPurchaseRequestId = (purchaseRequestId: string): number => {
  let restoredCount = 0;

  purchaseRequestDetails.forEach((detail) => {
    if (detail.purchase_request_id === purchaseRequestId && detail.deleted_at) {
      detail.deleted_at = null;
      detail.deleted_by_id = null;
      restoredCount++;
    }
  });

  return restoredCount;
};

// RESTORE - กู้คืน PurchaseRequestDetail ตาม location_id
export const restorePurchaseRequestDetailsByLocationId = (locationId: string): number => {
  let restoredCount = 0;

  purchaseRequestDetails.forEach((detail) => {
    if (detail.location_id === locationId && detail.deleted_at) {
      detail.deleted_at = null;
      detail.deleted_by_id = null;
      restoredCount++;
    }
  });

  return restoredCount;
};

// RESTORE - กู้คืน PurchaseRequestDetail ตาม product_id
export const restorePurchaseRequestDetailsByProductId = (productId: string): number => {
  let restoredCount = 0;

  purchaseRequestDetails.forEach((detail) => {
    if (detail.product_id === productId && detail.deleted_at) {
      detail.deleted_at = null;
      detail.deleted_by_id = null;
      restoredCount++;
    }
  });

  return restoredCount;
};

// RESTORE - กู้คืน PurchaseRequestDetail ตาม vendor_id
export const restorePurchaseRequestDetailsByVendorId = (vendorId: string): number => {
  let restoredCount = 0;

  purchaseRequestDetails.forEach((detail) => {
    if (detail.vendor_id === vendorId && detail.deleted_at) {
      detail.deleted_at = null;
      detail.deleted_by_id = null;
      restoredCount++;
    }
  });

  return restoredCount;
};

// Utility function สำหรับล้างข้อมูลทั้งหมด (ใช้สำหรับ testing)
export const clearAllPurchaseRequestDetails = (): void => {
  purchaseRequestDetails.length = 0;
};

// Utility function สำหรับนับจำนวน PurchaseRequestDetail
export const getPurchaseRequestDetailCount = (): number => {
  return purchaseRequestDetails.length;
};

// Utility function สำหรับนับจำนวน PurchaseRequestDetail ตาม purchase_request_id
export const getPurchaseRequestDetailCountByPurchaseRequestId = (purchaseRequestId: string): number => {
  return purchaseRequestDetails.filter((detail) => detail.purchase_request_id === purchaseRequestId).length;
};

// Utility function สำหรับนับจำนวน PurchaseRequestDetail ตาม location_id
export const getPurchaseRequestDetailCountByLocationId = (locationId: string): number => {
  return purchaseRequestDetails.filter((detail) => detail.location_id === locationId).length;
};

// Utility function สำหรับนับจำนวน PurchaseRequestDetail ตาม product_id
export const getPurchaseRequestDetailCountByProductId = (productId: string): number => {
  return purchaseRequestDetails.filter((detail) => detail.product_id === productId).length;
};

// Utility function สำหรับนับจำนวน PurchaseRequestDetail ตาม vendor_id
export const getPurchaseRequestDetailCountByVendorId = (vendorId: string): number => {
  return purchaseRequestDetails.filter((detail) => detail.vendor_id === vendorId).length;
};

// Utility function สำหรับตรวจสอบ PurchaseRequestDetail ที่ถูกลบแล้ว
export const getDeletedPurchaseRequestDetails = (): PurchaseRequestDetail[] => {
  return purchaseRequestDetails.filter((detail) => detail.deleted_at !== null);
};

// Utility function สำหรับตรวจสอบ PurchaseRequestDetail ที่มี description
export const hasPurchaseRequestDetailDescription = (id: string): boolean => {
  const detail = getPurchaseRequestDetailById(id);
  return detail ? !!(detail.description && detail.description !== null) : false;
};

// Utility function สำหรับตรวจสอบ PurchaseRequestDetail ที่มี comment
export const hasPurchaseRequestDetailComment = (id: string): boolean => {
  const detail = getPurchaseRequestDetailById(id);
  return detail ? !!(detail.comment && detail.comment !== null) : false;
};

// Utility function สำหรับตรวจสอบ PurchaseRequestDetail ที่มี approved_qty
export const hasPurchaseRequestDetailApprovedQty = (id: string): boolean => {
  const detail = getPurchaseRequestDetailById(id);
  return detail ? !!(detail.approved_qty && detail.approved_qty !== null) : false;
};

// Utility function สำหรับตรวจสอบ PurchaseRequestDetail ที่มี foc_qty
export const hasPurchaseRequestDetailFocQty = (id: string): boolean => {
  const detail = getPurchaseRequestDetailById(id);
  return detail ? !!(detail.foc_qty && detail.foc_qty !== null) : false;
};

// Utility function สำหรับตรวจสอบ PurchaseRequestDetail ที่มี tax_amount
export const hasPurchaseRequestDetailTaxAmount = (id: string): boolean => {
  const detail = getPurchaseRequestDetailById(id);
  return detail ? !!(detail.tax_amount && detail.tax_amount !== null) : false;
};

// Utility function สำหรับตรวจสอบ PurchaseRequestDetail ที่มี discount_amount
export const hasPurchaseRequestDetailDiscountAmount = (id: string): boolean => {
  const detail = getPurchaseRequestDetailById(id);
  return detail ? !!(detail.discount_amount && detail.discount_amount !== null) : false;
};

// Utility function สำหรับตรวจสอบ PurchaseRequestDetail ที่มี total_price
export const hasPurchaseRequestDetailTotalPrice = (id: string): boolean => {
  const detail = getPurchaseRequestDetailById(id);
  return detail ? !!(detail.total_price && detail.total_price !== null) : false;
};

// Utility function สำหรับตรวจสอบ PurchaseRequestDetail ที่มี base_total_price
export const hasPurchaseRequestDetailBaseTotalPrice = (id: string): boolean => {
  const detail = getPurchaseRequestDetailById(id);
  return detail ? !!(detail.base_total_price && detail.base_total_price !== null) : false;
};

// Utility function สำหรับตรวจสอบ PurchaseRequestDetail ที่มี history
export const hasPurchaseRequestDetailHistory = (id: string): boolean => {
  const detail = getPurchaseRequestDetailById(id);
  return detail ? detail.history && detail.history !== null : false;
};

// Utility function สำหรับตรวจสอบ PurchaseRequestDetail ที่มี stages_status
export const hasPurchaseRequestDetailStagesStatus = (id: string): boolean => {
  const detail = getPurchaseRequestDetailById(id);
  return detail ? detail.stages_status && detail.stages_status !== null : false;
};

// Utility function สำหรับตรวจสอบ PurchaseRequestDetail ที่มี info
export const hasPurchaseRequestDetailInfo = (id: string): boolean => {
  const detail = getPurchaseRequestDetailById(id);
  return detail ? detail.info && detail.info !== null : false;
};

// Utility function สำหรับตรวจสอบ PurchaseRequestDetail ที่มี dimension
export const hasPurchaseRequestDetailDimension = (id: string): boolean => {
  const detail = getPurchaseRequestDetailById(id);
  return detail ? detail.dimension && detail.dimension !== null : false;
};

// Utility function สำหรับตรวจสอบ PurchaseRequestDetail ที่มี created_by_id
export const hasPurchaseRequestDetailCreatedBy = (id: string): boolean => {
  const detail = getPurchaseRequestDetailById(id);
  return detail ? !!(detail.created_by_id && detail.created_by_id !== null) : false;
};

// Utility function สำหรับตรวจสอบ PurchaseRequestDetail ที่มี updated_by_id
export const hasPurchaseRequestDetailUpdatedBy = (id: string): boolean => {
  const detail = getPurchaseRequestDetailById(id);
  return detail ? !!(detail.updated_by_id && detail.updated_by_id !== null) : false;
};

// Utility function สำหรับตรวจสอบ PurchaseRequestDetail ที่มี deleted_by_id
export const hasPurchaseRequestDetailDeletedBy = (id: string): boolean => {
  const detail = getPurchaseRequestDetailById(id);
  return detail ? !!(detail.deleted_by_id && detail.deleted_by_id !== null) : false;
};

// Utility function สำหรับตรวจสอบ PurchaseRequestDetail ที่มี created_at
export const hasPurchaseRequestDetailCreatedAt = (id: string): boolean => {
  const detail = getPurchaseRequestDetailById(id);
  return detail ? !!(detail.created_at && detail.created_at !== null) : false;
};

// Utility function สำหรับตรวจสอบ PurchaseRequestDetail ที่มี updated_at
export const hasPurchaseRequestDetailUpdatedAt = (id: string): boolean => {
  const detail = getPurchaseRequestDetailById(id);
  return detail ? !!(detail.updated_at && detail.updated_at !== null) : false;
};

// Utility function สำหรับตรวจสอบ PurchaseRequestDetail ที่มี deleted_at
export const hasPurchaseRequestDetailDeletedAt = (id: string): boolean => {
  const detail = getPurchaseRequestDetailById(id);
  return detail ? !!(detail.deleted_at && detail.deleted_at !== null) : false;
};
