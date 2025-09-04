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

  const deliveryPoint1 = getDeliveryPointById(
    getUuidByName("DELIVERY_POINT_01")
  );
  const deliveryPoint2 = getDeliveryPointById(
    getUuidByName("DELIVERY_POINT_02")
  );
  const deliveryPoint3 = getDeliveryPointById(
    getUuidByName("DELIVERY_POINT_03")
  );

  const vendor = getVendorById(getUuidByName("VENDOR_01"));
  const pricelistDetail = getPricelistDetailById(
    getUuidByName("PRICELIST_DETAIL_01")
  );
  const purchaseRequest = getPurchaseRequestById(
    getUuidByName("PURCHASE_REQUEST_01")
  );

  return [
    {
      id: getUuidByName("PURCHASE_REQUEST_DETAIL_01"),
      purchase_request_id: getUuidByName("PURCHASE_REQUEST_01"),
      sequence_no: 1,
      location_id: location1?.id || "",
      location_name: location1?.name || "",
      delivery_point_id: deliveryPoint1?.id || "",
      delivery_point_name: deliveryPoint1?.name || "",
      delivery_date: "2025-06-30T08:36:00.898Z",
      product_id: product1?.id || "",
      product_name: product1?.name || "",
      product_local_name: product1?.local_name || "",
      inventory_unit_id:
        product1?.inventory_unit_id || "",
      inventory_unit_name:
        product1?.inventory_unit_name || "",
      description: "dddddd",
      comment: null,
      vendor_id: null,
      vendor_name: null,
      pricelist_detail_id: null,
      pricelist_no: null,
      pricelist_unit: null,
      pricelist_price: null,
      currency_id: currency1?.id || "",
      currency_name: currency1?.name || "",
      exchange_rate: 0,
      exchange_rate_date: null,
      requested_qty: 5.0,
      requested_unit_id: unit1?.id || "",
      requested_unit_name: unit1?.name || "",
      requested_unit_conversion_factor: 1,
      requested_base_qty: 1,
      approved_qty: 0,
      approved_unit_id: unit1?.id || "",
      approved_unit_name: unit1?.name || "",
      approved_unit_conversion_factor: 1,
      approved_base_qty: 1,
      foc_qty: 0,
      foc_unit_id: unit1?.id || "",
      foc_unit_name: unit1?.name || "",
      foc_unit_conversion_factor: 1,
      foc_base_qty: 1,
      tax_profile_id: taxProfile1?.id || "",
      tax_profile_name: taxProfile1?.name || "",
      tax_rate: 7,
      tax_amount: (7 * 1) / 100,
      base_tax_amount: (7 * 1) / 100,
      is_tax_adjustment: false,
      discount_rate: 0.0,
      discount_amount: 0.0,
      base_discount_amount: 0.0,
      is_discount_adjustment: false,
      sub_total_price: 1,
      net_amount: 1,
      total_price: 1,
      base_price: 1,
      base_sub_total_price: 1,
      base_net_amount: 1,
      base_total_price: 1 + (7 * 1) / 100,
      history: null,
      stages_status: [
        {
          seq: 1,
          status: "submit",
          name: "Submit - it should come from workflow",
        },
      ],
      info: null,
      dimension: null,
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
      purchase_request_id: getUuidByName("PURCHASE_REQUEST_01"),
      sequence_no: 1,
      location_id: location2?.id || "",
      location_name: location2?.name || "",
      delivery_point_id: deliveryPoint2?.id || "",
      delivery_point_name: deliveryPoint2?.name || "",
      delivery_date: "2025-07-30T17:00:00.000Z",
      product_id: product2?.id || "",
      product_name: product2?.name || "",
      product_local_name: product2?.local_name || "",
      inventory_unit_id: product2?.inventory_unit_id || "",
      inventory_unit_name: product2?.inventory_unit_name || "",
      description: "",
      comment: null,
      vendor_id: null,
      vendor_name: vendor?.name || "",
      pricelist_detail_id: null,
      pricelist_no: null,
      pricelist_unit: null,
      pricelist_price: null,
      currency_id: currency2?.id || "",
      currency_name: currency2?.name || "",
      exchange_rate: 35.0,
      exchange_rate_date: null,
      requested_qty: 2.0,
      requested_unit_id: unit2?.id || "",
      requested_unit_name: unit2?.name || "",
      requested_unit_conversion_factor: 1,
      requested_base_qty: 1,
      approved_qty: 1,
      approved_unit_id: unit2?.id || "",
      approved_unit_name: unit2?.name || "",
      approved_unit_conversion_factor: 1,
      approved_base_qty: 1,
      foc_qty: 1,
      foc_unit_id: unit2?.id || "",
      foc_unit_name: unit2?.name || "",
      foc_unit_conversion_factor: 1,
      foc_base_qty: 1,
      tax_profile_id: taxProfile1?.id || "",
      tax_profile_name: taxProfile1?.name || "",
      tax_rate: 7,
      tax_amount: (7 * 1) / 100,
      base_tax_amount: (7 * 1) / 100 * 35,
      is_tax_adjustment: false,
      discount_rate: 0.0,
      discount_amount: 0.0,
      base_discount_amount: 0.0,
      is_discount_adjustment: false,
      sub_total_price: 1 * 35,
      net_amount: 1,
      total_price: 1,
      base_price: 1 * 35,
      base_sub_total_price: 1,
      base_net_amount: 1,
      base_total_price: 1 + (7 * 1) / 100 * 35,
      history: null,
      stages_status: null,
      info: null,
      dimension: null,
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
      product_name: product3?.name || "",
      product_local_name: product3?.local_name || "",
      inventory_unit_id: product3?.inventory_unit_id || "",
      inventory_unit_name: product3?.inventory_unit_name || "",
      description: "Office supplies for Q4",
      comment: "Required for Grand Ballroom Event catering preparation",
      vendor_id: vendor?.id || "",
      vendor_name: vendor?.name || "",
      pricelist_detail_id: null,
      pricelist_no: null,
      pricelist_unit: product3?.inventory_unit_id || "",
      pricelist_price: null,
      currency_id: currency1?.id || "",
      currency_name: currency1?.name || "",
      exchange_rate: 1.0,
      exchange_rate_date: "2024-08-07T00:00:00.000Z",
      requested_qty: 5.0,
      requested_unit_id: unit3?.id || "",
      requested_unit_name: unit3?.name || "",
      requested_unit_conversion_factor: 1,
      requested_base_qty: 1,
      approved_qty: 10.0,
      approved_unit_id: unit3?.id || "",
      approved_unit_name: unit3?.name || "",
      approved_unit_conversion_factor: 1000.0,
      approved_base_qty: 10000.0,
      foc_qty: 5.0,
      foc_unit_id: unit3?.id || "",
      foc_unit_name: unit3?.name || "",
      foc_unit_conversion_factor: 1.0,
      foc_base_qty: 10.0,
      tax_profile_id: taxProfile1?.id || "",
      tax_profile_name: taxProfile1?.name || "",
      tax_rate: 7.0,
      tax_amount: 70.0,
      base_tax_amount: 70.0,
      is_tax_adjustment: false,
      discount_rate: 5.0,
      discount_amount: 50.0,
      base_discount_amount: 50.0,
      is_discount_adjustment: false,
      sub_total_price: 950.0,
      net_amount: 1070.0,
      total_price: 1000.0,
      base_price: 10.0,
      base_sub_total_price: 950.0,
      base_net_amount: 1070.0,
      base_total_price: 1000.0,
      history: null,
      stages_status:
        '[{"seq":1,"status":"submit","name":"user submit","message":""},{"seq":2,"status":"approve","name":"approve state","message":"Approved by purchasing department"},{"seq":3,"status":"approve","name":"approve state","message":"Approved by purchasing department"},{"seq":4,"status":"approve","name":"approve state","message":"Approved by purchasing department"},{"seq":5,"status":"approve","name":"approve state","message":"Approved by purchasing department"},{"seq":6,"status":"approve","name":"approve state","message":"Approved by purchasing department"},{"seq":7,"status":"approve","name":"Completed","message":"Approved by purchasing department"},{"seq":8,"status":"approve","name":"Stage 3","message":"Approved by purchasing department"},{"seq":9,"status":"approve","name":"Stage 2","message":"Approved by purchasing department"},{"seq":10,"status":"approve","name":"Stage 2","message":"Approved by purchasing department"},{"seq":11,"status":"approve","name":"Stage 2","message":"Approved by purchasing department"},{"seq":12,"status":"approve","name":"Stage 2","message":"Approved by purchasing department"},{"seq":13,"status":"approve","name":"Stage 3","message":"Approved by purchasing department"},{"seq":14,"status":"approve","name":"Completed","message":"Approved by purchasing department"},{"seq":15,"status":"approve","name":"Stage 2","message":"Approved by purchasing department"},{"seq":16,"status":"approve","name":"Stage 3","message":"Approved by purchasing department"},{"seq":17,"status":"approve","name":"Completed","message":"Approved by purchasing department"},{"seq":18,"status":"approve","name":"Completed","message":"Approved by purchasing department"},{"seq":19,"status":"approve","name":"Completed","message":"Approved by purchasing department"},{"seq":20,"status":"approve","name":"Stage 2","message":"Approved by purchasing department"},{"seq":21,"status":"approve","name":"Stage 3","message":"Approved by purchasing department"},{"seq":22,"status":"approve","name":"Completed","message":"Approved by purchasing department"},{"seq":23,"status":"approve","name":"Stage 2","message":"Approved by purchasing department"},{"seq":24,"status":"approve","name":"Stage 3","message":"Approved by purchasing department"},{"seq":25,"status":"approve","name":"Completed","message":"Approved by purchasing department"},{"seq":26,"status":"approve","name":"Stage 2","message":"Approved by purchasing department"},{"seq":27,"status":"approve","name":"Stage 3","message":"Approved by purchasing department"},{"seq":28,"status":"approve","name":"Completed","message":"Approved by purchasing department"},{"seq":29,"status":"approve","name":"Stage 2","message":"Approved by purchasing department"},{"seq":30,"status":"approve","name":"Stage 3","message":"Approved by purchasing department"},{"seq":31,"status":"approve","name":"Completed","message":"Approved by purchasing department"},{"seq":32,"status":"approve","name":"Stage 2","message":"Approved by purchasing department"},{"seq":33,"status":"approve","name":"Stage 3","message":"Approved by purchasing department"},{"seq":34,"status":"approve","name":"Completed","message":"Approved by purchasing department"},{"seq":35,"status":"approve","name":"Stage 2","message":"Approved by purchasing department"},{"seq":36,"status":"approve","name":"Stage 3","message":"Approved by purchasing department"},{"seq":37,"status":"approve","name":"Completed","message":"Approved by purchasing department"}]',
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
      product_name: product4?.name || "",
      product_local_name: product4?.local_name || "",
      inventory_unit_id: product4?.inventory_unit_id || "",
      inventory_unit_name: product4?.inventory_unit_name || "",
      description: "",
      comment: null,
      vendor_id: null,
      vendor_name: vendor?.name || "",
      pricelist_detail_id: null,
      pricelist_no: null,
      pricelist_unit: null,
      pricelist_price: null,
      currency_id: currency1?.id || "",
      currency_name: currency1?.name || "",
      exchange_rate: 1,
      exchange_rate_date: null,
      requested_qty: 5.0,
      requested_unit_id: unit4?.id || "",
      requested_unit_name: unit4?.name || "",
      requested_unit_conversion_factor: 1,
      requested_base_qty: 1,
      approved_qty: 1,
      approved_unit_id: unit4?.id || "",
      approved_unit_name: unit4?.name || "",
      approved_unit_conversion_factor: 1,
      approved_base_qty: 1,
      foc_qty: 1,
      foc_unit_id: unit4?.id || "",
      foc_unit_name: unit4?.name || "",
      foc_unit_conversion_factor: 1,
      foc_base_qty: 1,
      tax_profile_id: taxProfile1?.id || "",
      tax_profile_name: taxProfile1?.name || "",
      tax_rate: 1,
      tax_amount: 1,
      base_tax_amount: 1,
      is_tax_adjustment: false,
      discount_rate: 0.0,
      discount_amount: 0.0,
      base_discount_amount: 1,
      is_discount_adjustment: false,
      sub_total_price: 1,
      net_amount: 1,
      total_price: 1,
      base_price: 1,
      base_sub_total_price: 1,
      base_net_amount: 1,
      base_total_price: 1,
      history: null,
      stages_status: null,
      info: null,
      dimension: null,
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
      product_name: product5?.name || "",
      product_local_name: product5?.local_name || "",
      inventory_unit_id: product5?.inventory_unit_id || "",
      inventory_unit_name: product5?.inventory_unit_name || "",
      description: "omg description",
      comment: null,
      vendor_id: null,
      vendor_name: vendor?.name || "",
      pricelist_detail_id: null,
      pricelist_no: null,
      pricelist_unit: null,
      pricelist_price: null,
      currency_id: currency1?.id || "",
      currency_name: currency1?.name || "",
      exchange_rate: 1,
      exchange_rate_date: null,
      requested_qty: 5.0,
      requested_unit_id: unit5?.id || "",
      requested_unit_name: unit5?.name || "",
      requested_unit_conversion_factor: 1,
      requested_base_qty: 1,
      approved_qty: 1,
      approved_unit_id: unit5?.id || "",
      approved_unit_name: unit5?.name || "",
      approved_unit_conversion_factor: 1,
      approved_base_qty: 1,
      foc_qty: 1,
      foc_unit_id: unit5?.id || "",
      foc_unit_name: unit5?.name || "",
      foc_unit_conversion_factor: 1,
      foc_base_qty: 1,
      tax_profile_id: taxProfile1?.id || "",
      tax_profile_name: taxProfile1?.name || "",
      tax_rate: 1,
      tax_amount: 1,
      base_tax_amount: 1,
      is_tax_adjustment: false,
      discount_rate: 0.0,
      discount_amount: 0.0,
      base_discount_amount: 1,
      is_discount_adjustment: false,
      sub_total_price: 1,
      net_amount: 1,
      total_price: 1,
      base_price: 1,
      base_sub_total_price: 1,
      base_net_amount: 1,
      base_total_price: 1,
      history: null,
      stages_status: null,
      info: null,
      dimension: null,
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
      product_name: product5?.name || "",
      product_local_name: product5?.local_name || "",
      inventory_unit_id: product5?.inventory_unit_id || "",
      inventory_unit_name: product5?.inventory_unit_name || "",
      description: "dddddd",
      comment: null,
      vendor_id: null,
      vendor_name: vendor?.name || "",
      pricelist_detail_id: null,
      pricelist_no: null,
      pricelist_unit: null,
      pricelist_price: null,
      currency_id: currency1?.id || "",
      currency_name: currency1?.name || "",
      exchange_rate: 1,
      exchange_rate_date: null,
      requested_qty: 5.0,
      requested_unit_id: unit5?.id || "",
      requested_unit_name: unit5?.name || "",
      requested_unit_conversion_factor: 1,
      requested_base_qty: 1,
      approved_qty: 1,
      approved_unit_id: unit5?.id || "",
      approved_unit_name: unit5?.name || "",
      approved_unit_conversion_factor: 1,
      approved_base_qty: 1,
      foc_qty: 1,
      foc_unit_id: unit5?.id || "",
      foc_unit_name: unit5?.name || "",
      foc_unit_conversion_factor: 1,
      foc_base_qty: 1,
      tax_profile_id: taxProfile1?.id || "",
      tax_profile_name: null,
      tax_rate: 1,
      tax_amount: 1,
      base_tax_amount: 1,
      is_tax_adjustment: false,
      discount_rate: 0.0,
      discount_amount: 0.0,
      base_discount_amount: 1,
      is_discount_adjustment: false,
      sub_total_price: 1,
      net_amount: 1,
      total_price: 1,
      base_price: 1,
      base_sub_total_price: 1,
      base_net_amount: 1,
      base_total_price: 1,
      history: null,
      stages_status: null,
      info: null,
      dimension: null,
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
      product_name: product5?.name || "",
      product_local_name: product5?.local_name || "",
      inventory_unit_id: product5?.inventory_unit_id || "",
      inventory_unit_name: product5?.inventory_unit_name || "",
      description: "dddddd",
      comment: null,
      vendor_id: null,
      vendor_name: vendor?.name || "",
      pricelist_detail_id: null,
      pricelist_no: null,
      pricelist_unit: null,
      pricelist_price: null,
      currency_id: currency1?.id || "",
      currency_name: currency1?.name || "",
      exchange_rate: 1,
      exchange_rate_date: null,
      requested_qty: 5.0,
      requested_unit_id: unit5?.id || "",
      requested_unit_name: unit5?.name || "",
      requested_unit_conversion_factor: 1,
      requested_base_qty: 1,
      approved_qty: 1,
      approved_unit_id: unit5?.id || "",
      approved_unit_name: unit5?.name || "",
      approved_unit_conversion_factor: 1,
      approved_base_qty: 1,
      foc_qty: 1,
      foc_unit_id: unit5?.id || "",
      foc_unit_name: unit5?.name || "",
      foc_unit_conversion_factor: 1,
      foc_base_qty: 1,
      tax_profile_id: taxProfile1?.id || "",
      tax_profile_name: null,
      tax_rate: 1,
      tax_amount: 1,
      base_tax_amount: 1,
      is_tax_adjustment: false,
      discount_rate: 0.0,
      discount_amount: 0.0,
      base_discount_amount: 1,
      is_discount_adjustment: false,
      sub_total_price: 1,
      net_amount: 1,
      total_price: 1,
      base_price: 1,
      base_sub_total_price: 1,
      base_net_amount: 1,
      base_total_price: 1,
      history: null,
      stages_status: null,
      info: null,
      dimension: null,
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
      product_name: product5?.name || "",
      product_local_name: product5?.local_name || "",
      inventory_unit_id: product5?.inventory_unit_id || "",
      inventory_unit_name: product5?.inventory_unit_name || "",
      description: "dddddd",
      comment: null,
      vendor_id: null,
      vendor_name: vendor?.name || "",
      pricelist_detail_id: null,
      pricelist_no: null,
      pricelist_unit: null,
      pricelist_price: null,
      currency_id: currency1?.id || "",
      currency_name: currency1?.name || "",
      exchange_rate: 1,
      exchange_rate_date: null,
      requested_qty: 5,
      requested_unit_id: unit5?.id || "",
      requested_unit_name: unit5?.name || "",
      requested_unit_conversion_factor: 1,
      requested_base_qty: 1,
      approved_qty: 1,
      approved_unit_id: unit5?.id || "",
      approved_unit_name: unit5?.name || "",
      approved_unit_conversion_factor: 1,
      approved_base_qty: 1,
      foc_qty: 1,
      foc_unit_id: unit5?.id || "",
      foc_unit_name: unit5?.name || "",
      foc_unit_conversion_factor: 1,
      foc_base_qty: 1,
      tax_profile_id: taxProfile1?.id || "",
      tax_profile_name: null,
      tax_rate: 1,
      tax_amount: 1,
      base_tax_amount: 1,
      is_tax_adjustment: false,
      discount_rate: 0.0,
      discount_amount: 0.0,
      base_discount_amount: 1,
      is_discount_adjustment: false,
      sub_total_price: 1,
      net_amount: 1,
      total_price: 1,
      base_price: 1,
      base_sub_total_price: 1,
      base_net_amount: 1,
      base_total_price: 1,
      history: null,
      stages_status: null,
      info: null,
      dimension: null,
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
      product_name: product6?.name || "",
      product_local_name: "สะเต๊ะไก่",
      inventory_unit_id: product6?.inventory_unit_id || "",
      inventory_unit_name: product6?.inventory_unit_name || "",
      description: product6?.description || "",
      comment: null,
      vendor_id: null,
      vendor_name: vendor?.name || "",
      pricelist_detail_id: null,
      pricelist_no: null,
      pricelist_unit: null,
      pricelist_price: null,
      currency_id: currency1?.id || "",
      currency_name: currency1?.name || "",
      exchange_rate: 1,
      exchange_rate_date: null,
      requested_qty: 2,
      requested_unit_id: unit5?.id || "",
      requested_unit_name: unit5?.name || "",
      requested_unit_conversion_factor: 1,
      requested_base_qty: 1,
      approved_qty: 1,
      approved_unit_id: unit5?.id || "",
      approved_unit_name: unit5?.name || "",
      approved_unit_conversion_factor: 1,
      approved_base_qty: 1,
      foc_qty: 1,
      foc_unit_id: unit5?.id || "",
      foc_unit_name: unit5?.name || "",
      foc_unit_conversion_factor: 1,
      foc_base_qty: 1,
      tax_profile_id: taxProfile1?.id || "",
      tax_profile_name: null,
      tax_rate: 1,
      tax_amount: 1,
      base_tax_amount: 1,
      is_tax_adjustment: false,
      discount_rate: 0.0,
      discount_amount: 0.0,
      base_discount_amount: 1,
      is_discount_adjustment: false,
      sub_total_price: 1,
      net_amount: 1,
      total_price: 1,
      base_price: 1,
      base_sub_total_price: 1,
      base_net_amount: 1,
      base_total_price: 1,
      history: null,
      stages_status: null,
      info: null,
      dimension: null,
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
      product_name: product2?.name || "",
      product_local_name: product2?.local_name || "",
      inventory_unit_id: product2?.inventory_unit_id || "",
      inventory_unit_name: product2?.inventory_unit_name || "",
      description: product2?.description || "",
      comment: null,
      vendor_id: null,
      vendor_name: vendor?.name || "",
      pricelist_detail_id: null,
      pricelist_no: null,
      pricelist_unit: null,
      pricelist_price: null,
      currency_id: currency2?.id || "",
      currency_name: currency2?.name || "",
      exchange_rate: 1,
      exchange_rate_date: null,
      requested_qty: 24,
      requested_unit_id: unit2?.id || "",
      requested_unit_name: unit2?.name || "",
      requested_unit_conversion_factor: 1,
      requested_base_qty: 1,
      approved_qty: 1,
      approved_unit_id: unit2?.id || "",
      approved_unit_name: unit2?.name || "",
      approved_unit_conversion_factor: 1,
      approved_base_qty: 1,
      foc_qty: 1,
      foc_unit_id: unit2?.id || "",
      foc_unit_name: unit2?.name || "",
      foc_unit_conversion_factor: 1,
      foc_base_qty: 1,
      tax_profile_id: taxProfile2?.id || "",
      tax_profile_name: taxProfile2?.name || "",
      tax_rate: 1,
      tax_amount: 1,
      base_tax_amount: 1,
      is_tax_adjustment: false,
      discount_rate: 0.0,
      discount_amount: 0.0,
      base_discount_amount: 1,
      is_discount_adjustment: false,
      sub_total_price: 1,
      net_amount: 1,
      total_price: 1,
      base_price: 1,
      base_sub_total_price: 1,
      base_net_amount: 1,
      base_total_price: 1,
      history: null,
      stages_status: null,
      info: null,
      dimension: null,
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
export const getPurchaseRequestDetailById = (
  id: string
): PurchaseRequestDetail | null => {
  const detail = purchaseRequestDetails.find(
    (detail) => detail.id === id && !detail.deleted_at
  );
  return detail || null;
};

// READ - อ่าน PurchaseRequestDetail ตาม purchase_request_id
export const getPurchaseRequestDetailsByPurchaseRequestId = (
  purchaseRequestId: string
): PurchaseRequestDetail[] => {
  return purchaseRequestDetails.filter(
    (detail) =>
      detail.purchase_request_id === purchaseRequestId && !detail.deleted_at
  );
};

// READ - อ่าน PurchaseRequestDetail ตาม sequence_no
export const getPurchaseRequestDetailsBySequenceNo = (
  sequenceNo: number
): PurchaseRequestDetail[] => {
  return purchaseRequestDetails.filter(
    (detail) => detail.sequence_no === sequenceNo && !detail.deleted_at
  );
};

// READ - อ่าน PurchaseRequestDetail ตาม location_id
export const getPurchaseRequestDetailsByLocationId = (
  locationId: string
): PurchaseRequestDetail[] => {
  return purchaseRequestDetails.filter(
    (detail) => detail.location_id === locationId && !detail.deleted_at
  );
};

// READ - อ่าน PurchaseRequestDetail ตาม product_id
export const getPurchaseRequestDetailsByProductId = (
  productId: string
): PurchaseRequestDetail[] => {
  return purchaseRequestDetails.filter(
    (detail) => detail.product_id === productId && !detail.deleted_at
  );
};

// READ - อ่าน PurchaseRequestDetail ตาม vendor_id
export const getPurchaseRequestDetailsByVendorId = (
  vendorId: string
): PurchaseRequestDetail[] => {
  return purchaseRequestDetails.filter(
    (detail) => detail.vendor_id === vendorId && !detail.deleted_at
  );
};

// READ - อ่าน PurchaseRequestDetail ตาม currency_id
export const getPurchaseRequestDetailsByCurrencyId = (
  currencyId: string
): PurchaseRequestDetail[] => {
  return purchaseRequestDetails.filter(
    (detail) => detail.currency_id === currencyId && !detail.deleted_at
  );
};

// READ - อ่าน PurchaseRequestDetail ตาม delivery_date
export const getPurchaseRequestDetailsByDeliveryDate = (
  deliveryDate: string
): PurchaseRequestDetail[] => {
  return purchaseRequestDetails.filter(
    (detail) => detail.delivery_date === deliveryDate && !detail.deleted_at
  );
};

// READ - อ่าน PurchaseRequestDetail ที่มี description
export const getPurchaseRequestDetailsWithDescription =
  (): PurchaseRequestDetail[] => {
    return purchaseRequestDetails.filter(
      (detail) =>
        detail.description &&
        detail.description.trim() !== "" &&
        !detail.deleted_at
    );
  };

// READ - อ่าน PurchaseRequestDetail ที่มี comment
export const getPurchaseRequestDetailsWithComment =
  (): PurchaseRequestDetail[] => {
    return purchaseRequestDetails.filter(
      (detail) =>
        detail.comment && detail.comment.trim() !== "" && !detail.deleted_at
    );
  };

// READ - อ่าน PurchaseRequestDetail ที่มี approved_qty
export const getPurchaseRequestDetailsWithApprovedQty =
  (): PurchaseRequestDetail[] => {
    return purchaseRequestDetails.filter(
      (detail) => detail.approved_qty && !detail.deleted_at
    );
  };

// READ - อ่าน PurchaseRequestDetail ที่มี foc_qty
export const getPurchaseRequestDetailsWithFocQty =
  (): PurchaseRequestDetail[] => {
    return purchaseRequestDetails.filter(
      (detail) => detail.foc_qty && !detail.deleted_at
    );
  };

// READ - อ่าน PurchaseRequestDetail ที่มี tax_amount
export const getPurchaseRequestDetailsWithTaxAmount =
  (): PurchaseRequestDetail[] => {
    return purchaseRequestDetails.filter(
      (detail) => detail.tax_amount && !detail.deleted_at
    );
  };

// READ - อ่าน PurchaseRequestDetail ที่มี discount_amount
export const getPurchaseRequestDetailsWithDiscountAmount =
  (): PurchaseRequestDetail[] => {
    return purchaseRequestDetails.filter(
      (detail) => detail.discount_amount && !detail.deleted_at
    );
  };

// READ - อ่าน PurchaseRequestDetail ที่มี total_price
export const getPurchaseRequestDetailsWithTotalPrice =
  (): PurchaseRequestDetail[] => {
    return purchaseRequestDetails.filter(
      (detail) => detail.total_price && !detail.deleted_at
    );
  };

// READ - อ่าน PurchaseRequestDetail ที่มี base_total_price
export const getPurchaseRequestDetailsWithBaseTotalPrice =
  (): PurchaseRequestDetail[] => {
    return purchaseRequestDetails.filter(
      (detail) => detail.base_total_price && !detail.deleted_at
    );
  };

// READ - อ่าน PurchaseRequestDetail ที่มี history
export const getPurchaseRequestDetailsWithHistory =
  (): PurchaseRequestDetail[] => {
    return purchaseRequestDetails.filter(
      (detail) => detail.history && !detail.deleted_at
    );
  };

// READ - อ่าน PurchaseRequestDetail ที่มี stages_status
export const getPurchaseRequestDetailsWithStagesStatus =
  (): PurchaseRequestDetail[] => {
    return purchaseRequestDetails.filter(
      (detail) => detail.stages_status && !detail.deleted_at
    );
  };

// READ - อ่าน PurchaseRequestDetail ที่มี info
export const getPurchaseRequestDetailsWithInfo =
  (): PurchaseRequestDetail[] => {
    return purchaseRequestDetails.filter(
      (detail) => detail.info && !detail.deleted_at
    );
  };

// READ - อ่าน PurchaseRequestDetail ที่มี dimension
export const getPurchaseRequestDetailsWithDimension =
  (): PurchaseRequestDetail[] => {
    return purchaseRequestDetails.filter(
      (detail) => detail.dimension && !detail.deleted_at
    );
  };

// READ - ค้นหา PurchaseRequestDetail แบบ fuzzy search
export const searchPurchaseRequestDetails = (
  searchTerm: string
): PurchaseRequestDetail[] => {
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
  updates: Partial<
    Omit<PurchaseRequestDetail, "id" | "created_at" | "created_by_id">
  >
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
export const updatePurchaseRequestDetailSequenceNo = (
  id: string,
  sequenceNo: number
): PurchaseRequestDetail | null => {
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
export const updatePurchaseRequestDetailComment = (
  id: string,
  comment: string
): PurchaseRequestDetail | null => {
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
export const updatePurchaseRequestDetailFocQty = (
  id: string,
  focQty: number
): PurchaseRequestDetail | null => {
  return updatePurchaseRequestDetail(id, { foc_qty: focQty });
};

// UPDATE - อัปเดต PurchaseRequestDetail tax_amount
export const updatePurchaseRequestDetailTaxAmount = (
  id: string,
  taxAmount: number
): PurchaseRequestDetail | null => {
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
export const updatePurchaseRequestDetailTotalPrice = (
  id: string,
  totalPrice: number
): PurchaseRequestDetail | null => {
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
export const updatePurchaseRequestDetailHistory = (
  id: string,
  history: any
): PurchaseRequestDetail | null => {
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
export const updatePurchaseRequestDetailInfo = (
  id: string,
  info: any
): PurchaseRequestDetail | null => {
  return updatePurchaseRequestDetail(id, { info });
};

// UPDATE - อัปเดต PurchaseRequestDetail dimension
export const updatePurchaseRequestDetailDimension = (
  id: string,
  dimension: any
): PurchaseRequestDetail | null => {
  return updatePurchaseRequestDetail(id, { dimension });
};

// UPDATE - อัปเดต PurchaseRequestDetail doc_version
export const updatePurchaseRequestDetailDocVersion = (
  id: string,
  docVersion: string
): PurchaseRequestDetail | null => {
  return updatePurchaseRequestDetail(id, { doc_version: docVersion });
};

// DELETE - ลบ PurchaseRequestDetail (soft delete)
export const deletePurchaseRequestDetail = (
  id: string,
  deletedById: string
): boolean => {
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
    if (
      detail.purchase_request_id === purchaseRequestId &&
      !detail.deleted_at
    ) {
      detail.deleted_at = getCurrentTimestamp();
      detail.deleted_by_id = deletedById;
      deletedCount++;
    }
  });

  return deletedCount;
};

// DELETE - ลบ PurchaseRequestDetail ตาม location_id
export const deletePurchaseRequestDetailsByLocationId = (
  locationId: string,
  deletedById: string
): number => {
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
export const deletePurchaseRequestDetailsByProductId = (
  productId: string,
  deletedById: string
): number => {
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
export const deletePurchaseRequestDetailsByVendorId = (
  vendorId: string,
  deletedById: string
): number => {
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
export const restorePurchaseRequestDetailsByPurchaseRequestId = (
  purchaseRequestId: string
): number => {
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
export const restorePurchaseRequestDetailsByLocationId = (
  locationId: string
): number => {
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
export const restorePurchaseRequestDetailsByProductId = (
  productId: string
): number => {
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
export const restorePurchaseRequestDetailsByVendorId = (
  vendorId: string
): number => {
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
export const getPurchaseRequestDetailCountByPurchaseRequestId = (
  purchaseRequestId: string
): number => {
  return purchaseRequestDetails.filter(
    (detail) => detail.purchase_request_id === purchaseRequestId
  ).length;
};

// Utility function สำหรับนับจำนวน PurchaseRequestDetail ตาม location_id
export const getPurchaseRequestDetailCountByLocationId = (
  locationId: string
): number => {
  return purchaseRequestDetails.filter(
    (detail) => detail.location_id === locationId
  ).length;
};

// Utility function สำหรับนับจำนวน PurchaseRequestDetail ตาม product_id
export const getPurchaseRequestDetailCountByProductId = (
  productId: string
): number => {
  return purchaseRequestDetails.filter(
    (detail) => detail.product_id === productId
  ).length;
};

// Utility function สำหรับนับจำนวน PurchaseRequestDetail ตาม vendor_id
export const getPurchaseRequestDetailCountByVendorId = (
  vendorId: string
): number => {
  return purchaseRequestDetails.filter(
    (detail) => detail.vendor_id === vendorId
  ).length;
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
  return detail
    ? !!(detail.approved_qty && detail.approved_qty !== null)
    : false;
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
  return detail
    ? !!(detail.discount_amount && detail.discount_amount !== null)
    : false;
};

// Utility function สำหรับตรวจสอบ PurchaseRequestDetail ที่มี total_price
export const hasPurchaseRequestDetailTotalPrice = (id: string): boolean => {
  const detail = getPurchaseRequestDetailById(id);
  return detail ? !!(detail.total_price && detail.total_price !== null) : false;
};

// Utility function สำหรับตรวจสอบ PurchaseRequestDetail ที่มี base_total_price
export const hasPurchaseRequestDetailBaseTotalPrice = (id: string): boolean => {
  const detail = getPurchaseRequestDetailById(id);
  return detail
    ? !!(detail.base_total_price && detail.base_total_price !== null)
    : false;
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
  return detail
    ? !!(detail.created_by_id && detail.created_by_id !== null)
    : false;
};

// Utility function สำหรับตรวจสอบ PurchaseRequestDetail ที่มี updated_by_id
export const hasPurchaseRequestDetailUpdatedBy = (id: string): boolean => {
  const detail = getPurchaseRequestDetailById(id);
  return detail
    ? !!(detail.updated_by_id && detail.updated_by_id !== null)
    : false;
};

// Utility function สำหรับตรวจสอบ PurchaseRequestDetail ที่มี deleted_by_id
export const hasPurchaseRequestDetailDeletedBy = (id: string): boolean => {
  const detail = getPurchaseRequestDetailById(id);
  return detail
    ? !!(detail.deleted_by_id && detail.deleted_by_id !== null)
    : false;
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
