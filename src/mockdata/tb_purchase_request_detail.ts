import { generateId, getCurrentTimestamp } from "@/libs/utils";

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
  exchange_rate: number ;
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

export const purchaseRequestDetails: PurchaseRequestDetail[] = [
  {
    id: "0d31f523-3270-4517-8fbb-90e3b87f856c",
    purchase_request_id: "09783dec-6d03-485a-8f7b-90301b4923f7",
    sequence_no: 1,
    location_id: "a9929da1-651e-46bc-8e1d-4411199ed098",
    location_name: null,
    delivery_point_id: null,
    delivery_point_name: null,
    delivery_date: "2025-06-30T08:36:00.898Z",
    product_id: "d013f929-e797-4120-9823-112a33f3397d",
    product_name: null,
    product_local_name: null,
    inventory_unit_id: null,
    inventory_unit_name: null,
    description: "dddddd",
    comment: null,
    vendor_id: null,
    vendor_name: null,
    pricelist_detail_id: null,
    pricelist_no: null,
    pricelist_unit: null,
    pricelist_price: null,
    currency_id: null,
    currency_name: null,
    exchange_rate: 0,
    exchange_rate_date: null,
    requested_qty: 5.00000,
    requested_unit_id: "a944b693-3a71-4275-9d6a-ddca551533d7",
    requested_unit_name: null,
    requested_unit_conversion_factor: 1,
    requested_base_qty: 1,
    approved_qty: 0,
    approved_unit_id: null,
    approved_unit_name: null,
    approved_unit_conversion_factor: 1,
    approved_base_qty: 1,
    foc_qty: 0,
    foc_unit_id: null,
    foc_unit_name: null,
    foc_unit_conversion_factor: 1,
    foc_base_qty: 1,
    tax_profile_id: null,
    tax_profile_name: null,
    tax_rate: 1,
    tax_amount: 1,
    base_tax_amount: 1,
    is_tax_adjustment: false,
    discount_rate: 0.00000,
    discount_amount: 0.00000,
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
    stages_status: [
      {
        "seq": 1,
        "status": "submit",
        "name": "Submit - it should come from workflow"
      }
    ],
    info: null,
    dimension: null,
    doc_version: "1",
    created_at: "2025-07-31T03:25:45.468Z",
    created_by_id: "1bfdb891-58ee-499c-8115-34a964de8122",
    updated_at: "2025-07-31T03:25:45.468Z",
    updated_by_id: "1bfdb891-58ee-499c-8115-34a964de8122",
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "2ad568a2-e668-4ad0-b1ec-5c8062278b1d",
    purchase_request_id: "15220b4e-53f5-4c6e-800b-e8893348e7ca",
    sequence_no: 1,
    location_id: "54817bac-053a-4c45-beb0-53015ea63c59",
    location_name: null,
    delivery_point_id: null,
    delivery_point_name: null,
    delivery_date: "2025-07-30T17:00:00.000Z",
    product_id: "004ab105-a03b-4921-b63c-70c9b3639fa8",
    product_name: null,
    product_local_name: null,
    inventory_unit_id: null,
    inventory_unit_name: null,
    description: "",
    comment: null,
    vendor_id: null,
    vendor_name: null,
    pricelist_detail_id: null,
    pricelist_no: null,
    pricelist_unit: null,
    pricelist_price: null,
    currency_id: null,
    currency_name: null,
    exchange_rate: 0,
    exchange_rate_date: null,
    requested_qty: 2.00000,
    requested_unit_id: "6b24d5b6-b051-47cf-9abe-a0e40eb9390a",
    requested_unit_name: null,
    requested_unit_conversion_factor: 1,
    requested_base_qty: 1,
    approved_qty: 1,
    approved_unit_id: null,
    approved_unit_name: null,
    approved_unit_conversion_factor: 1,
    approved_base_qty: 1,
    foc_qty: 1,
    foc_unit_id: null,
    foc_unit_name: null,
    foc_unit_conversion_factor: 1,
    foc_base_qty: 1,
    tax_profile_id: null,
    tax_profile_name: null,
    tax_rate: 1,
    tax_amount: 1,
    base_tax_amount: 1,
    is_tax_adjustment: false,
    discount_rate: 0.00000,
    discount_amount: 0.00000,
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
    created_at: "2025-07-31T05:08:04.223Z",
    created_by_id: "1bfdb891-58ee-499c-8115-34a964de8122",
    updated_at: "2025-07-31T05:08:04.223Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "ccb4ea32-c631-4c28-b5a5-4f3a6be4b77e",
    purchase_request_id: "937e3e39-bc82-4c97-8b54-52dbedf08fc8",
    sequence_no: 1,
    location_id: "a9929da1-651e-46bc-8e1d-4411199ed098",
    location_name: "ABF Kitchen",
    delivery_point_id: "03d8b4bd-31f0-4e25-8188-a6478c5026b3",
    delivery_point_name: "Main",
    delivery_date: "2025-06-30T08:36:00.898Z",
    product_id: "d013f929-e797-4120-9823-112a33f3397d",
    product_name: "Beef Tenderloin Grade A",
    product_local_name: "เนื้อสันในโคขุนแต่ง เกรด A",
    inventory_unit_id: "eec2348c-7e18-46e3-89f8-fef3c3204bea",
    inventory_unit_name: "REAM",
    description: "Office supplies for Q4",
    comment: "Required for Grand Ballroom Event catering preparation",
    vendor_id: "e50de68e-8053-4574-9252-94f70187b95b",
    vendor_name: "A K & J TEXTILE CO.,LTD.",
    pricelist_detail_id: null,
    pricelist_no: null,
    pricelist_unit: null,
    pricelist_price: null,
    currency_id: "5d5e29b1-c566-413c-93b3-ba2f16ce51d9",
    currency_name: "Thai Baht",
    exchange_rate: 1.00000,
    exchange_rate_date: "2024-08-07T00:00:00.000Z",
    requested_qty: 5.00000,
    requested_unit_id: "a944b693-3a71-4275-9d6a-ddca551533d7",
    requested_unit_name: "KG",
    requested_unit_conversion_factor: 1,
    requested_base_qty: 1,
    approved_qty: 10.00000,
    approved_unit_id: "a944b693-3a71-4275-9d6a-ddca551533d7",
    approved_unit_name: "KG",
    approved_unit_conversion_factor: 1000.00000,
    approved_base_qty: 10000.00000,
    foc_qty: 5.00000,
    foc_unit_id: "e1efa522-ae62-4c92-9e70-44ced901b7bc",
    foc_unit_name: "GM",
    foc_unit_conversion_factor: 1.00000,
    foc_base_qty: 10.00000,
    tax_profile_id: "5840ede0-cb85-4c0e-b306-be118f5df614",
    tax_profile_name: "VAT 7%",
    tax_rate: 7.00000,
    tax_amount: 70.00000,
    base_tax_amount: 70.00000,
    is_tax_adjustment: false,
    discount_rate: 5.00000,
    discount_amount: 50.00000,
    base_discount_amount: 50.00000,
    is_discount_adjustment: false,
    sub_total_price: 950.00000,
    net_amount: 1070.00000,
    total_price: 1000.00000,
    base_price: 10.00000,
    base_sub_total_price: 950.00000,
    base_net_amount: 1070.00000,
    base_total_price: 1000.00000,
    history: null,
    stages_status: "[{\"seq\":1,\"status\":\"submit\",\"name\":\"user submit\",\"message\":\"\"},{\"seq\":2,\"status\":\"approve\",\"name\":\"approve state\",\"message\":\"Approved by purchasing department\"},{\"seq\":3,\"status\":\"approve\",\"name\":\"approve state\",\"message\":\"Approved by purchasing department\"},{\"seq\":4,\"status\":\"approve\",\"name\":\"approve state\",\"message\":\"Approved by purchasing department\"},{\"seq\":5,\"status\":\"approve\",\"name\":\"approve state\",\"message\":\"Approved by purchasing department\"},{\"seq\":6,\"status\":\"approve\",\"name\":\"approve state\",\"message\":\"Approved by purchasing department\"},{\"seq\":7,\"status\":\"approve\",\"name\":\"Completed\",\"message\":\"Approved by purchasing department\"},{\"seq\":8,\"status\":\"approve\",\"name\":\"Stage 3\",\"message\":\"Approved by purchasing department\"},{\"seq\":9,\"status\":\"approve\",\"name\":\"Stage 2\",\"message\":\"Approved by purchasing department\"},{\"seq\":10,\"status\":\"approve\",\"name\":\"Stage 2\",\"message\":\"Approved by purchasing department\"},{\"seq\":11,\"status\":\"approve\",\"name\":\"Stage 2\",\"message\":\"Approved by purchasing department\"},{\"seq\":12,\"status\":\"approve\",\"name\":\"Stage 2\",\"message\":\"Approved by purchasing department\"},{\"seq\":13,\"status\":\"approve\",\"name\":\"Stage 3\",\"message\":\"Approved by purchasing department\"},{\"seq\":14,\"status\":\"approve\",\"name\":\"Completed\",\"message\":\"Approved by purchasing department\"},{\"seq\":15,\"status\":\"approve\",\"name\":\"Stage 2\",\"message\":\"Approved by purchasing department\"},{\"seq\":16,\"status\":\"approve\",\"name\":\"Stage 3\",\"message\":\"Approved by purchasing department\"},{\"seq\":17,\"status\":\"approve\",\"name\":\"Completed\",\"message\":\"Approved by purchasing department\"},{\"seq\":18,\"status\":\"approve\",\"name\":\"Completed\",\"message\":\"Approved by purchasing department\"},{\"seq\":19,\"status\":\"approve\",\"name\":\"Completed\",\"message\":\"Approved by purchasing department\"},{\"seq\":20,\"status\":\"approve\",\"name\":\"Stage 2\",\"message\":\"Approved by purchasing department\"},{\"seq\":21,\"status\":\"approve\",\"name\":\"Stage 3\",\"message\":\"Approved by purchasing department\"},{\"seq\":22,\"status\":\"approve\",\"name\":\"Completed\",\"message\":\"Approved by purchasing department\"},{\"seq\":23,\"status\":\"approve\",\"name\":\"Stage 2\",\"message\":\"Approved by purchasing department\"},{\"seq\":24,\"status\":\"approve\",\"name\":\"Stage 3\",\"message\":\"Approved by purchasing department\"},{\"seq\":25,\"status\":\"approve\",\"name\":\"Completed\",\"message\":\"Approved by purchasing department\"},{\"seq\":26,\"status\":\"approve\",\"name\":\"Stage 2\",\"message\":\"Approved by purchasing department\"},{\"seq\":27,\"status\":\"approve\",\"name\":\"Stage 3\",\"message\":\"Approved by purchasing department\"},{\"seq\":28,\"status\":\"approve\",\"name\":\"Completed\",\"message\":\"Approved by purchasing department\"},{\"seq\":29,\"status\":\"approve\",\"name\":\"Stage 2\",\"message\":\"Approved by purchasing department\"},{\"seq\":30,\"status\":\"approve\",\"name\":\"Stage 3\",\"message\":\"Approved by purchasing department\"},{\"seq\":31,\"status\":\"approve\",\"name\":\"Completed\",\"message\":\"Approved by purchasing department\"},{\"seq\":32,\"status\":\"approve\",\"name\":\"Stage 2\",\"message\":\"Approved by purchasing department\"},{\"seq\":33,\"status\":\"approve\",\"name\":\"Stage 3\",\"message\":\"Approved by purchasing department\"},{\"seq\":34,\"status\":\"approve\",\"name\":\"Completed\",\"message\":\"Approved by purchasing department\"},{\"seq\":35,\"status\":\"approve\",\"name\":\"Stage 2\",\"message\":\"Approved by purchasing department\"},{\"seq\":36,\"status\":\"approve\",\"name\":\"Stage 3\",\"message\":\"Approved by purchasing department\"},{\"seq\":37,\"status\":\"approve\",\"name\":\"Completed\",\"message\":\"Approved by purchasing department\"}]",
    info: null,
    dimension: [
      {
        "key": "jobcode",
        "label": "Job Code",
        "type": "string",
        "value": "20001"
      },
      {
        "key": "event",
        "label": "Event",
        "type": "string",
        "value": "Wedding in 2025"
      },
      {
        "key": "market-segment",
        "label": "Market Segment",
        "type": "string",
        "value": "Outlet 001"
      },
      {
        "key": "region",
        "label": "Region",
        "type": "string",
        "value": "Taiwan"
      }
    ],
    doc_version: "38",
    created_at: "2025-08-07T08:48:14.789Z",
    created_by_id: "1bfdb891-58ee-499c-8115-34a964de8122",
    updated_at: "2025-08-07T08:48:14.789Z",
    updated_by_id: "1bfdb891-58ee-499c-8115-34a964de8122",
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "0aa46d23-4ad0-4a9e-abff-c4222301a878",
    purchase_request_id: "c07ae901-143c-477c-b2ba-7f1c1a91b8c1",
    sequence_no: 1,
    location_id: "a9929da1-651e-46bc-8e1d-4411199ed098",
    location_name: "ABF Kitchen",
    delivery_point_id: "03d8b4bd-31f0-4e25-8188-a6478c5026b3",
    delivery_point_name: "Main",
    delivery_date: "2025-06-30T08:36:00.898Z",
    product_id: "d013f929-e797-4120-9823-112a33f3397d",
    product_name: "Beef Tenderloin Grade A",
    product_local_name: "เนื้อสันในโคขุนแต่ง เกรด A",
    inventory_unit_id: null,
    inventory_unit_name: null,
    description: "dddddd",
    comment: null,
    vendor_id: null,
    vendor_name: null,
    pricelist_detail_id: null,
    pricelist_no: null,
    pricelist_unit: null,
    pricelist_price: null,
    currency_id: null,
    currency_name: null,
    exchange_rate: 1,
    exchange_rate_date: null,
    requested_qty: 5.00000,
    requested_unit_id: "a944b693-3a71-4275-9d6a-ddca551533d7",
    requested_unit_name: "KG",
    requested_unit_conversion_factor: 1,
    requested_base_qty: 1,
    approved_qty: 1,
    approved_unit_id: null,
    approved_unit_name: null,
    approved_unit_conversion_factor: 1,
    approved_base_qty: 1,
    foc_qty: 1,
    foc_unit_id: null,
    foc_unit_name: null,
    foc_unit_conversion_factor: 1,
    foc_base_qty: 1,
    tax_profile_id: null,
    tax_profile_name: null,
    tax_rate: 1,
    tax_amount: 1,
    base_tax_amount: 1,
    is_tax_adjustment: false,
    discount_rate: 0.00000,
    discount_amount: 0.00000,
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
    deleted_by_id: null
  },
  {
    id: "5b579c22-6235-4d70-9944-6beea63ad72b",
    purchase_request_id: "230e0e45-9196-449e-aee0-7f227c258e35",
    sequence_no: 1,
    location_id: "a9929da1-651e-46bc-8e1d-4411199ed098",
    location_name: "ABF Kitchen",
    delivery_point_id: "03d8b4bd-31f0-4e25-8188-a6478c5026b3",
    delivery_point_name: "Main",
    delivery_date: "2025-06-30T08:36:00.898Z",
    product_id: "d013f929-e797-4120-9823-112a33f3397d",
    product_name: "Beef Tenderloin Grade A",
    product_local_name: "เนื้อสันในโคขุนแต่ง เกรด A",
    inventory_unit_id: null,
    inventory_unit_name: null,
    description: "omg description",
    comment: null,
    vendor_id: null,
    vendor_name: null,
    pricelist_detail_id: null,
    pricelist_no: null,
    pricelist_unit: null,
    pricelist_price: null,
    currency_id: null,
    currency_name: null,
    exchange_rate: 1,
    exchange_rate_date: null,
    requested_qty: 5.00000,
    requested_unit_id: "a944b693-3a71-4275-9d6a-ddca551533d7",
    requested_unit_name: "KG",
    requested_unit_conversion_factor: 1,
    requested_base_qty: 1,
    approved_qty: 1,
    approved_unit_id: null,
    approved_unit_name: null,
    approved_unit_conversion_factor: 1,
    approved_base_qty: 1,
    foc_qty: 1,
    foc_unit_id: null,
    foc_unit_name: null,
    foc_unit_conversion_factor: 1,
    foc_base_qty: 1,
    tax_profile_id: null,
    tax_profile_name: null,
    tax_rate: 1,
    tax_amount: 1,
    base_tax_amount: 1,
    is_tax_adjustment: false,
    discount_rate: 0.00000,
    discount_amount: 0.00000,
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
    deleted_by_id: null
  },
  {
    id: "d0bea442-c91b-4a9e-b989-74a2e712f735",
    purchase_request_id: "f12aa5d2-286c-4374-b03a-0b7b39027942",
    sequence_no: 1,
    location_id: "a9929da1-651e-46bc-8e1d-4411199ed098",
    location_name: "ABF Kitchen",
    delivery_point_id: "03d8b4bd-31f0-4e25-8188-a6478c5026b3",
    delivery_point_name: "Main",
    delivery_date: "2025-06-30T08:36:00.898Z",
    product_id: "d013f929-e797-4120-9823-112a33f3397d",
    product_name: "Beef Tenderloin Grade A",
    product_local_name: "เนื้อสันในโคขุนแต่ง เกรด A",
    inventory_unit_id: null,
    inventory_unit_name: null,
    description: "dddddd",
    comment: null,
    vendor_id: null,
    vendor_name: null,
    pricelist_detail_id: null,
    pricelist_no: null,
    pricelist_unit: null,
    pricelist_price: null,
    currency_id: null,
    currency_name: null,
    exchange_rate: 1,
    exchange_rate_date: null,
    requested_qty: 5.00000,
    requested_unit_id: "a944b693-3a71-4275-9d6a-ddca551533d7",
    requested_unit_name: "KG",
    requested_unit_conversion_factor: 1,
    requested_base_qty: 1,
    approved_qty: 1,
    approved_unit_id: null,
    approved_unit_name: null,
    approved_unit_conversion_factor: 1,
    approved_base_qty: 1,
    foc_qty: 1,
    foc_unit_id: null,
    foc_unit_name: null,
    foc_unit_conversion_factor: 1,
    foc_base_qty: 1,
    tax_profile_id: null,
    tax_profile_name: null,
    tax_rate: 1,
    tax_amount: 1,
    base_tax_amount: 1,
    is_tax_adjustment: false,
    discount_rate: 0.00000,
    discount_amount: 0.00000,
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
    deleted_by_id: null
  },
  {
    id: "db1d669f-d3bf-4164-bf7a-ff93c76d6e63",
    purchase_request_id: "aa72ad03-dde6-4ee7-aa67-e0f2afab4e07",
    sequence_no: 1,
    location_id: "a9929da1-651e-46bc-8e1d-4411199ed098",
    location_name: "ABF Kitchen",
    delivery_point_id: "03d8b4bd-31f0-4e25-8188-a6478c5026b3",
    delivery_point_name: "Main",
    delivery_date: "2025-06-30T08:36:00.898Z",
    product_id: "d013f929-e797-4120-9823-112a33f3397d",
    product_name: "Beef Tenderloin Grade A",
    product_local_name: "เนื้อสันในโคขุนแต่ง เกรด A",
    inventory_unit_id: null,
    inventory_unit_name: null,
    description: "dddddd",
    comment: null,
    vendor_id: null,
    vendor_name: null,
    pricelist_detail_id: null,
    pricelist_no: null,
    pricelist_unit: null,
    pricelist_price: null,
    currency_id: null,
    currency_name: null,
    exchange_rate: 1,
    exchange_rate_date: null,
    requested_qty: 5.00000,
    requested_unit_id: "a944b693-3a71-4275-9d6a-ddca551533d7",
    requested_unit_name: "KG",
    requested_unit_conversion_factor: 1,
    requested_base_qty: 1,
    approved_qty: 1,
    approved_unit_id: null,
    approved_unit_name: null,
    approved_unit_conversion_factor: 1,
    approved_base_qty: 1,
    foc_qty: 1,
    foc_unit_id: null,
    foc_unit_name: null,
    foc_unit_conversion_factor: 1,
    foc_base_qty: 1,
    tax_profile_id: null,
    tax_profile_name: null,
    tax_rate: 1,
    tax_amount: 1,
    base_tax_amount: 1,
    is_tax_adjustment: false,
    discount_rate: 0.00000,
    discount_amount: 0.00000,
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
    deleted_by_id: null
  },
  {
    id: "d4b5d35f-0826-4dce-8bf6-64192d8a94f1",
    purchase_request_id: "ed0fd482-8f7b-4184-a442-e3355327b9bd",
    sequence_no: 1,
    location_id: "a9929da1-651e-46bc-8e1d-4411199ed098",
    location_name: "ABF Kitchen",
    delivery_point_id: "03d8b4bd-31f0-4e25-8188-a6478c5026b3",
    delivery_point_name: "Main",
    delivery_date: "2025-06-30T08:36:00.898Z",
    product_id: "d013f929-e797-4120-9823-112a33f3397d",
    product_name: "Beef Tenderloin Grade A",
    product_local_name: "เนื้อสันในโคขุนแต่ง เกรด A",
    inventory_unit_id: null,
    inventory_unit_name: null,
    description: "dddddd",
    comment: null,
    vendor_id: null,
    vendor_name: null,
    pricelist_detail_id: null,
    pricelist_no: null,
    pricelist_unit: null,
    pricelist_price: null,
    currency_id: null,
    currency_name: null,
    exchange_rate: 1,
    exchange_rate_date: null,
    requested_qty: 5,
    requested_unit_id: "a944b693-3a71-4275-9d6a-ddca551533d7",
    requested_unit_name: "KG",
    requested_unit_conversion_factor: 1,
    requested_base_qty: 1,
    approved_qty: 1,
    approved_unit_id: null,
    approved_unit_name: null,
    approved_unit_conversion_factor: 1,
    approved_base_qty: 1,
    foc_qty: 1,
    foc_unit_id: null,
    foc_unit_name: null,
    foc_unit_conversion_factor: 1,
    foc_base_qty: 1,
    tax_profile_id: null,
    tax_profile_name: null,
    tax_rate: 1,
    tax_amount: 1,
    base_tax_amount: 1,
    is_tax_adjustment: false,
    discount_rate: 0.00000,
    discount_amount: 0.00000,
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
    deleted_by_id: null
  },
  {
    id: "a7de548c-ece4-4793-8ba3-2c4e249ccb7a",
    purchase_request_id: "e51db328-de33-47fd-9e6f-629d05bcf2ff",
    sequence_no: 1,
    location_id: "12907b64-d921-4931-9a17-8a915586656b",
    location_name: "Banquet",
    delivery_point_id: "03d8b4bd-31f0-4e25-8188-a6478c5026b3",
    delivery_point_name: "Main",
    delivery_date: "2025-08-26T17:00:00.000Z",
    product_id: "033cd75b-0980-46b1-ba73-7b9083bec52a",
    product_name: "Chicken Satay",
    product_local_name: "สะเต๊ะไก่",
    inventory_unit_id: null,
    inventory_unit_name: null,
    description: "",
    comment: null,
    vendor_id: null,
    vendor_name: null,
    pricelist_detail_id: null,
    pricelist_no: null,
    pricelist_unit: null,
    pricelist_price: null,
    currency_id: null,
    currency_name: null,
    exchange_rate: 1,
    exchange_rate_date: null,
    requested_qty: 2,
    requested_unit_id: "07b0e62c-e026-4d9f-b463-f0f45ae58f1b",
    requested_unit_name: "BOX5",
    requested_unit_conversion_factor: 1,
    requested_base_qty: 1,
    approved_qty: 1,
    approved_unit_id: null,
    approved_unit_name: null,
    approved_unit_conversion_factor: 1,
    approved_base_qty: 1,
    foc_qty: 1,
    foc_unit_id: null,
    foc_unit_name: null,
    foc_unit_conversion_factor: 1,
    foc_base_qty: 1,
    tax_profile_id: null,
    tax_profile_name: null,
    tax_rate: 1,
    tax_amount: 1,
    base_tax_amount: 1,
    is_tax_adjustment: false,
    discount_rate: 0.00000,
    discount_amount: 0.00000,
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
    deleted_by_id: null
  },
  {
    id: "f22048eb-8b94-4bd3-955a-9f47819abbf2",
    purchase_request_id: null,
    sequence_no: 2,
    location_id: "ae9c430e-c86a-418c-bbd2-6d951533fa87",
    location_name: "Mini Bar",
    delivery_point_id: "03d8b4bd-31f0-4e25-8188-a6478c5026b3",
    delivery_point_name: "Main",
    delivery_date: "2025-08-26T17:00:00.000Z",
    product_id: "033cd75b-0980-46b1-ba73-7b9083bec52a",
    product_name: "Chicken Satay",
    product_local_name: null,
    inventory_unit_id: "a944b693-3a71-4275-9d6a-ddca551533d7",
    inventory_unit_name: "KG",
    description: "",
    comment: null,
    vendor_id: null,
    vendor_name: null,
    pricelist_detail_id: null,
    pricelist_no: null,
    pricelist_unit: null,
    pricelist_price: null,
    currency_id: null,
    currency_name: null,
    exchange_rate: 1,
    exchange_rate_date: null,
    requested_qty: 24,
    requested_unit_id: "da45e8b0-9336-4a27-b8fd-407911a9ea6e",
    requested_unit_name: "CAN",
    requested_unit_conversion_factor: 1,
    requested_base_qty: 1,
    approved_qty: 1,
    approved_unit_id: null,
    approved_unit_name: null,
    approved_unit_conversion_factor: 1,
    approved_base_qty: 1,
    foc_qty: 1,
    foc_unit_id: null,
    foc_unit_name: null,
    foc_unit_conversion_factor: 1,
    foc_base_qty: 1,
    tax_profile_id: null,
    tax_profile_name: null,
    tax_rate: 1,
    tax_amount: 1,
    base_tax_amount: 1,
    is_tax_adjustment: false,
    discount_rate: 0.00000,
    discount_amount: 0.00000,
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
    deleted_by_id: null
  }
];

// CREATE - สร้าง PurchaseRequestDetail ใหม่
export const createPurchaseRequestDetail = (data: Omit<PurchaseRequestDetail, 'id' | 'created_at' | 'created_by_id'>): PurchaseRequestDetail => {
  const newDetail: PurchaseRequestDetail = {
    ...data,
    id: generateId(),
    created_at: getCurrentTimestamp(),
    created_by_id: 'system'
  };
  
  purchaseRequestDetails.push(newDetail);
  return newDetail;
};

// READ - อ่าน PurchaseRequestDetail ทั้งหมด
export const getAllPurchaseRequestDetails = (): PurchaseRequestDetail[] => {
  return purchaseRequestDetails.filter(detail => !detail.deleted_at);
};

// READ - อ่าน PurchaseRequestDetail ตาม ID
export const getPurchaseRequestDetailById = (id: string): PurchaseRequestDetail | null => {
  const detail = purchaseRequestDetails.find(detail => detail.id === id && !detail.deleted_at);
  return detail || null;
};

// READ - อ่าน PurchaseRequestDetail ตาม purchase_request_id
export const getPurchaseRequestDetailsByPurchaseRequestId = (purchaseRequestId: string): PurchaseRequestDetail[] => {
  return purchaseRequestDetails.filter(detail => detail.purchase_request_id === purchaseRequestId && !detail.deleted_at);
};

// READ - อ่าน PurchaseRequestDetail ตาม sequence_no
export const getPurchaseRequestDetailsBySequenceNo = (sequenceNo: number): PurchaseRequestDetail[] => {
  return purchaseRequestDetails.filter(detail => detail.sequence_no === sequenceNo && !detail.deleted_at);
};

// READ - อ่าน PurchaseRequestDetail ตาม location_id
export const getPurchaseRequestDetailsByLocationId = (locationId: string): PurchaseRequestDetail[] => {
  return purchaseRequestDetails.filter(detail => detail.location_id === locationId && !detail.deleted_at);
};

// READ - อ่าน PurchaseRequestDetail ตาม product_id
export const getPurchaseRequestDetailsByProductId = (productId: string): PurchaseRequestDetail[] => {
  return purchaseRequestDetails.filter(detail => detail.product_id === productId && !detail.deleted_at);
};

// READ - อ่าน PurchaseRequestDetail ตาม vendor_id
export const getPurchaseRequestDetailsByVendorId = (vendorId: string): PurchaseRequestDetail[] => {
  return purchaseRequestDetails.filter(detail => detail.vendor_id === vendorId && !detail.deleted_at);
};

// READ - อ่าน PurchaseRequestDetail ตาม currency_id
export const getPurchaseRequestDetailsByCurrencyId = (currencyId: string): PurchaseRequestDetail[] => {
  return purchaseRequestDetails.filter(detail => detail.currency_id === currencyId && !detail.deleted_at);
};

// READ - อ่าน PurchaseRequestDetail ตาม delivery_date
export const getPurchaseRequestDetailsByDeliveryDate = (deliveryDate: string): PurchaseRequestDetail[] => {
  return purchaseRequestDetails.filter(detail => detail.delivery_date === deliveryDate && !detail.deleted_at);
};

// READ - อ่าน PurchaseRequestDetail ที่มี description
export const getPurchaseRequestDetailsWithDescription = (): PurchaseRequestDetail[] => {
  return purchaseRequestDetails.filter(detail => detail.description && detail.description.trim() !== '' && !detail.deleted_at);
};

// READ - อ่าน PurchaseRequestDetail ที่มี comment
export const getPurchaseRequestDetailsWithComment = (): PurchaseRequestDetail[] => {
  return purchaseRequestDetails.filter(detail => detail.comment && detail.comment.trim() !== '' && !detail.deleted_at);
};

// READ - อ่าน PurchaseRequestDetail ที่มี approved_qty
export const getPurchaseRequestDetailsWithApprovedQty = (): PurchaseRequestDetail[] => {
  return purchaseRequestDetails.filter(detail => detail.approved_qty && !detail.deleted_at);
};

// READ - อ่าน PurchaseRequestDetail ที่มี foc_qty
export const getPurchaseRequestDetailsWithFocQty = (): PurchaseRequestDetail[] => {
  return purchaseRequestDetails.filter(detail => detail.foc_qty && !detail.deleted_at);
};

// READ - อ่าน PurchaseRequestDetail ที่มี tax_amount
export const getPurchaseRequestDetailsWithTaxAmount = (): PurchaseRequestDetail[] => {
  return purchaseRequestDetails.filter(detail => detail.tax_amount && !detail.deleted_at);
};

// READ - อ่าน PurchaseRequestDetail ที่มี discount_amount
export const getPurchaseRequestDetailsWithDiscountAmount = (): PurchaseRequestDetail[] => {
  return purchaseRequestDetails.filter(detail => detail.discount_amount && !detail.deleted_at);
};

// READ - อ่าน PurchaseRequestDetail ที่มี total_price
export const getPurchaseRequestDetailsWithTotalPrice = (): PurchaseRequestDetail[] => {
  return purchaseRequestDetails.filter(detail => detail.total_price && !detail.deleted_at);
};

// READ - อ่าน PurchaseRequestDetail ที่มี base_total_price
export const getPurchaseRequestDetailsWithBaseTotalPrice = (): PurchaseRequestDetail[] => {
  return purchaseRequestDetails.filter(detail => detail.base_total_price && !detail.deleted_at);
};

// READ - อ่าน PurchaseRequestDetail ที่มี history
export const getPurchaseRequestDetailsWithHistory = (): PurchaseRequestDetail[] => {
  return purchaseRequestDetails.filter(detail => detail.history && !detail.deleted_at);
};

// READ - อ่าน PurchaseRequestDetail ที่มี stages_status
export const getPurchaseRequestDetailsWithStagesStatus = (): PurchaseRequestDetail[] => {
  return purchaseRequestDetails.filter(detail => detail.stages_status && !detail.deleted_at);
};

// READ - อ่าน PurchaseRequestDetail ที่มี info
export const getPurchaseRequestDetailsWithInfo = (): PurchaseRequestDetail[] => {
  return purchaseRequestDetails.filter(detail => detail.info && !detail.deleted_at);
};

// READ - อ่าน PurchaseRequestDetail ที่มี dimension
export const getPurchaseRequestDetailsWithDimension = (): PurchaseRequestDetail[] => {
  return purchaseRequestDetails.filter(detail => detail.dimension && !detail.deleted_at);
};

// READ - ค้นหา PurchaseRequestDetail แบบ fuzzy search
export const searchPurchaseRequestDetails = (searchTerm: string): PurchaseRequestDetail[] => {
  const lowerSearchTerm = searchTerm.toLowerCase();
  
  return purchaseRequestDetails.filter(detail => 
    !detail.deleted_at && (
      detail.description?.toLowerCase().includes(lowerSearchTerm) ||
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
      detail.tax_profile_name?.toLowerCase().includes(lowerSearchTerm)
    )
  );
};

// UPDATE - อัปเดต PurchaseRequestDetail
export const updatePurchaseRequestDetail = (id: string, updates: Partial<Omit<PurchaseRequestDetail, 'id' | 'created_at' | 'created_by_id'>>): PurchaseRequestDetail | null => {
  const index = purchaseRequestDetails.findIndex(detail => detail.id === id);
  
  if (index === -1) {
    return null;
  }
  
  purchaseRequestDetails[index] = {
    ...purchaseRequestDetails[index],
    ...updates,
    updated_at: getCurrentTimestamp()
  };
  
  return purchaseRequestDetails[index];
};

// UPDATE - อัปเดต PurchaseRequestDetail sequence_no
export const updatePurchaseRequestDetailSequenceNo = (id: string, sequenceNo: number): PurchaseRequestDetail | null => {
  return updatePurchaseRequestDetail(id, { sequence_no: sequenceNo });
};

// UPDATE - อัปเดต PurchaseRequestDetail description
export const updatePurchaseRequestDetailDescription = (id: string, description: string): PurchaseRequestDetail | null => {
  return updatePurchaseRequestDetail(id, { description });
};

// UPDATE - อัปเดต PurchaseRequestDetail comment
export const updatePurchaseRequestDetailComment = (id: string, comment: string): PurchaseRequestDetail | null => {
  return updatePurchaseRequestDetail(id, { comment });
};

// UPDATE - อัปเดต PurchaseRequestDetail delivery_date
export const updatePurchaseRequestDetailDeliveryDate = (id: string, deliveryDate: string): PurchaseRequestDetail | null => {
  return updatePurchaseRequestDetail(id, { delivery_date: deliveryDate });
};

// UPDATE - อัปเดต PurchaseRequestDetail requested_qty
export const updatePurchaseRequestDetailRequestedQty = (id: string, requestedQty: number): PurchaseRequestDetail | null => {
  return updatePurchaseRequestDetail(id, { requested_qty: requestedQty });
};

// UPDATE - อัปเดต PurchaseRequestDetail approved_qty
export const updatePurchaseRequestDetailApprovedQty = (id: string, approvedQty: number): PurchaseRequestDetail | null => {
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
export const updatePurchaseRequestDetailDiscountAmount = (id: string, discountAmount: number): PurchaseRequestDetail | null => {
  return updatePurchaseRequestDetail(id, { discount_amount: discountAmount });
};

// UPDATE - อัปเดต PurchaseRequestDetail total_price
export const updatePurchaseRequestDetailTotalPrice = (id: string, totalPrice: number): PurchaseRequestDetail | null => {
  return updatePurchaseRequestDetail(id, { total_price: totalPrice });
};

// UPDATE - อัปเดต PurchaseRequestDetail base_total_price
export const updatePurchaseRequestDetailBaseTotalPrice = (id: string, baseTotalPrice: number): PurchaseRequestDetail | null => {
  return updatePurchaseRequestDetail(id, { base_total_price: baseTotalPrice });
};

// UPDATE - อัปเดต PurchaseRequestDetail history
export const updatePurchaseRequestDetailHistory = (id: string, history: any): PurchaseRequestDetail | null => {
  return updatePurchaseRequestDetail(id, { history });
};

// UPDATE - อัปเดต PurchaseRequestDetail stages_status
export const updatePurchaseRequestDetailStagesStatus = (id: string, stagesStatus: any): PurchaseRequestDetail | null => {
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
  const index = purchaseRequestDetails.findIndex(detail => detail.id === id);
  
  if (index === -1) {
    return false;
  }
  
  purchaseRequestDetails[index] = {
    ...purchaseRequestDetails[index],
    deleted_at: getCurrentTimestamp(),
    deleted_by_id: deletedById
  };
  
  return true;
};

// DELETE - ลบ PurchaseRequestDetail แบบถาวร
export const hardDeletePurchaseRequestDetail = (id: string): boolean => {
  const index = purchaseRequestDetails.findIndex(detail => detail.id === id);
  
  if (index === -1) {
    return false;
  }
  
  purchaseRequestDetails.splice(index, 1);
  return true;
};

// DELETE - ลบ PurchaseRequestDetail ตาม purchase_request_id
export const deletePurchaseRequestDetailsByPurchaseRequestId = (purchaseRequestId: string, deletedById: string): number => {
  let deletedCount = 0;
  
  purchaseRequestDetails.forEach(detail => {
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
  
  purchaseRequestDetails.forEach(detail => {
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
  
  purchaseRequestDetails.forEach(detail => {
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
  
  purchaseRequestDetails.forEach(detail => {
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
  const index = purchaseRequestDetails.findIndex(detail => detail.id === id);
  
  if (index === -1) {
    return false;
  }
  
  if (purchaseRequestDetails[index].deleted_at) {
    purchaseRequestDetails[index] = {
      ...purchaseRequestDetails[index],
      deleted_at: null,
      deleted_by_id: null
    };
    return true;
  }
  
  return false;
};

// RESTORE - กู้คืน PurchaseRequestDetail ตาม purchase_request_id
export const restorePurchaseRequestDetailsByPurchaseRequestId = (purchaseRequestId: string): number => {
  let restoredCount = 0;
  
  purchaseRequestDetails.forEach(detail => {
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
  
  purchaseRequestDetails.forEach(detail => {
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
  
  purchaseRequestDetails.forEach(detail => {
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
  
  purchaseRequestDetails.forEach(detail => {
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
  return purchaseRequestDetails.filter(detail => detail.purchase_request_id === purchaseRequestId).length;
};

// Utility function สำหรับนับจำนวน PurchaseRequestDetail ตาม location_id
export const getPurchaseRequestDetailCountByLocationId = (locationId: string): number => {
  return purchaseRequestDetails.filter(detail => detail.location_id === locationId).length;
};

// Utility function สำหรับนับจำนวน PurchaseRequestDetail ตาม product_id
export const getPurchaseRequestDetailCountByProductId = (productId: string): number => {
  return purchaseRequestDetails.filter(detail => detail.product_id === productId).length;
};

// Utility function สำหรับนับจำนวน PurchaseRequestDetail ตาม vendor_id
export const getPurchaseRequestDetailCountByVendorId = (vendorId: string): number => {
  return purchaseRequestDetails.filter(detail => detail.vendor_id === vendorId).length;
};

// Utility function สำหรับตรวจสอบ PurchaseRequestDetail ที่ถูกลบแล้ว
export const getDeletedPurchaseRequestDetails = (): PurchaseRequestDetail[] => {
  return purchaseRequestDetails.filter(detail => detail.deleted_at !== null);
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
  return detail ? (detail.history && detail.history !== null) : false;
};

// Utility function สำหรับตรวจสอบ PurchaseRequestDetail ที่มี stages_status
export const hasPurchaseRequestDetailStagesStatus = (id: string): boolean => {
  const detail = getPurchaseRequestDetailById(id);
  return detail ? (detail.stages_status && detail.stages_status !== null) : false;
};

// Utility function สำหรับตรวจสอบ PurchaseRequestDetail ที่มี info
export const hasPurchaseRequestDetailInfo = (id: string): boolean => {
  const detail = getPurchaseRequestDetailById(id);
  return detail ? (detail.info && detail.info !== null) : false;
};

// Utility function สำหรับตรวจสอบ PurchaseRequestDetail ที่มี dimension
export const hasPurchaseRequestDetailDimension = (id: string): boolean => {
  const detail = getPurchaseRequestDetailById(id);
  return detail ? (detail.dimension && detail.dimension !== null) : false;
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
