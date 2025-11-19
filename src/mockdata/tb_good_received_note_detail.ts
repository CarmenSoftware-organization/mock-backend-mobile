import { generateId, getCurrentTimestamp } from "@/libs/utils";
import { getProductByCode, getProductById } from "./tb_product";
import { getUuidByName } from "./mapping.uuid";

export interface GoodReceivedNoteDetail {
  id: string;
  inventory_transaction_id: string;
  good_received_note_id: string;
  purchase_order_detail_id: string;
  po_id: string;
  po_no: string;

  sequence_no: number;
  location_id: string;
  location_name: string;

  product_id: string;
  product_name: string;
  product_local_name: string;
  sku: string;

  inventory_unit_id: string;
  inventory_unit_name: string;
  order_qty: number;
  order_unit_id: string;
  order_unit_name: string;
  order_unit_conversion_factor: number;
  order_base_qty: number;
  received_qty: number;
  received_unit_id: string;
  received_unit_name: string;
  received_unit_conversion_factor: number;
  received_base_qty: number;
  foc_qty: number;
  foc_unit_id: string;
  foc_unit_name: string;
  foc_unit_conversion_factor: number;
  foc_base_qty: number;
  price: number;
  tax_profile_id: string;
  tax_profile_name: string;
  tax_rate: number;
  tax_amount: number;
  is_tax_adjustment: boolean;
  total_amount: number;
  delivery_point_id: string;
  delivery_point_name: string;
  base_price: number;
  base_qty: number;
  extra_cost: number;
  total_cost: number;
  discount_rate: number;
  discount_amount: number;
  is_discount_adjustment: boolean;
  expired_date: string;
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

export const goodReceivedNoteDetails: GoodReceivedNoteDetail[] = [
  {
    id: "550e8400-e29b-41d4-a716-446655440001",
    inventory_transaction_id: "550e8400-e29b-41d4-a716-446655440001",
    good_received_note_id: "550e8400-e29b-41d4-a716-446655440001",
    purchase_order_detail_id: "550e8400-e29b-41d4-a716-446655440001",

    po_id: "550e8400-e29b-41d4-a716-446655440001",
    po_no: "PO-001",

    sequence_no: 1,
    location_id: "550e8400-e29b-41d4-a716-446655440001",
    location_name: "Main Warehouse",

    product_id: product_01 ? product_01.id : "",
    product_name: product_01 ? product_01.name : "Laptop Computer",
    product_local_name: product_01 ? product_01.local_name : "คอมพิวเตอร์แล็ปท็อป",
    sku: product_01 ? product_01.sku : "",

    inventory_unit_id: "550e8400-e29b-41d4-a716-446655440001",
    inventory_unit_name: "Piece",
    order_qty: 10,
    order_unit_id: "550e8400-e29b-41d4-a716-446655440001",
    order_unit_name: "Piece",
    order_unit_conversion_factor: 1.0,
    order_base_qty: 10,
    received_qty: 10,
    received_unit_id: "550e8400-e29b-41d4-a716-446655440001",
    received_unit_name: "Piece",
    received_unit_conversion_factor: 1.0,
    received_base_qty: 10,
    foc_qty: 0,
    foc_unit_id: "550e8400-e29b-41d4-a716-446655440001",
    foc_unit_name: "Piece",
    foc_unit_conversion_factor: 1.0,
    foc_base_qty: 0,
    price: 15000.0,
    tax_profile_id: "550e8400-e29b-41d4-a716-446655440001",
    tax_profile_name: "VAT 7%",
    tax_rate: 7.0,
    tax_amount: 1050.0,
    is_tax_adjustment: false,
    total_amount: 16050.0,
    delivery_point_id: "550e8400-e29b-41d4-a716-446655440001",
    delivery_point_name: "Bangkok Main Warehouse",
    base_price: 15000.0,
    base_qty: 10,
    extra_cost: 0.0,
    total_cost: 16050.0,
    discount_rate: 0.0,
    discount_amount: 0.0,
    is_discount_adjustment: false,
    expired_date: "2025-12-31",
    note: "Standard laptop delivery",
    info: { brand: "Dell", model: "Latitude 5520", warranty: "3 years" },
    dimension: {
      "job code": "DIM-001",
      "event": "Standard",
      "market segment": "Electronics",
    },
    doc_version: "1.0",
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440002",
    inventory_transaction_id: "550e8400-e29b-41d4-a716-446655440002",
    good_received_note_id: "550e8400-e29b-41d4-a716-446655440002",
    purchase_order_detail_id: "550e8400-e29b-41d4-a716-446655440002",

    po_id: "550e8400-e29b-41d4-a716-446655440002",
    po_no: "PO-002",

    sequence_no: 1,
    location_id: "550e8400-e29b-41d4-a716-446655440002",
    location_name: "Chiang Mai Branch",

    product_id: product_02 ? product_02.id : "550e8400-e29b-41d4-a716-446655440002",
    product_name: product_02 ? product_02.name : "Office Chair",
    product_local_name: product_02 ? product_02.local_name : "เก้าอี้สำนักงาน",
    sku: product_02 ? product_02.sku : "",

    inventory_unit_id: "550e8400-e29b-41d4-a716-446655440001",
    inventory_unit_name: "Piece",
    order_qty: 25,
    order_unit_id: "550e8400-e29b-41d4-a716-446655440001",
    order_unit_name: "Piece",
    order_unit_conversion_factor: 1.0,
    order_base_qty: 25,
    received_qty: 25,
    received_unit_id: "550e8400-e29b-41d4-a716-446655440001",
    received_unit_name: "Piece",
    received_unit_conversion_factor: 1.0,
    received_base_qty: 25,
    foc_qty: 2,
    foc_unit_id: "550e8400-e29b-41d4-a716-446655440001",
    foc_unit_name: "Piece",
    foc_unit_conversion_factor: 1.0,
    foc_base_qty: 2,
    price: 2500.0,
    tax_profile_id: "550e8400-e29b-41d4-a716-446655440001",
    tax_profile_name: "VAT 7%",
    tax_rate: 7.0,
    tax_amount: 175.0,
    is_tax_adjustment: false,
    total_amount: 2675.0,
    delivery_point_id: "550e8400-e29b-41d4-a716-446655440002",
    delivery_point_name: "Chiang Mai Distribution Center",
    base_price: 2500.0,
    base_qty: 25,
    extra_cost: 0.0,
    total_cost: 2675.0,
    discount_rate: 0.0,
    discount_amount: 0.0,
    is_discount_adjustment: false,
    expired_date: "2025-12-31",
    note: "Office furniture delivery with FOC items",
    info: { material: "Leather", color: "Black", adjustable: true },
    dimension: {
      "job code": "DIM-002",
      "event": "Furniture",
      "market segment": "Office Supplies",
    },
    doc_version: "1.0",
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "1bfdb891-58ee-499c-8115-34a964de8122",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440003",
    inventory_transaction_id: "550e8400-e29b-41d4-a716-446655440003",
    good_received_note_id: "550e8400-e29b-41d4-a716-446655440003",
    purchase_order_detail_id: "550e8400-e29b-41d4-a716-446655440003",

    po_id: "550e8400-e29b-41d4-a716-446655440003",
    po_no: "PO-003",

    sequence_no: 1,
    location_id: "550e8400-e29b-41d4-a716-446655440003",
    location_name: "Phuket Branch",
    product_id: product_03 ? product_03.id : "550e8400-e29b-41d4-a716-446655440003",
    product_name: product_03 ? product_03.name : "Printer",
    product_local_name: product_03 ? product_03.local_name : "เครื่องพิมพ์",
    sku: product_03 ? product_03.sku : "",

    inventory_unit_id: "550e8400-e29b-41d4-a716-446655440001",
    inventory_unit_name: "Piece",
    order_qty: 5,
    order_unit_id: "550e8400-e29b-41d4-a716-446655440001",
    order_unit_name: "Piece",
    order_unit_conversion_factor: 1.0,
    order_base_qty: 5,
    received_qty: 5,
    received_unit_id: "550e8400-e29b-41d4-a716-446655440001",
    received_unit_name: "Piece",
    received_unit_conversion_factor: 1.0,
    received_base_qty: 5,
    foc_qty: 0,
    foc_unit_id: "550e8400-e29b-41d4-a716-446655440001",
    foc_unit_name: "Piece",
    foc_unit_conversion_factor: 1.0,
    foc_base_qty: 0,
    price: 8000.0,
    tax_profile_id: "550e8400-e29b-41d4-a716-446655440001",
    tax_profile_name: "VAT 7%",
    tax_rate: 7.0,
    tax_amount: 560.0,
    is_tax_adjustment: false,
    total_amount: 8560.0,
    delivery_point_id: "550e8400-e29b-41d4-a716-446655440003",
    delivery_point_name: "Phuket Branch Office",
    base_price: 8000.0,
    base_qty: 5,
    extra_cost: 0.0,
    total_cost: 8560.0,
    discount_rate: 0.0,
    discount_amount: 0.0,
    is_discount_adjustment: false,
    expired_date: "2025-12-31",
    note: "Office printer delivery",
    info: { type: "Laser", color: "Monochrome", network: true },
    dimension: {
      "job code": "DIM-003",
      "event": "Office Equipment",
      "market segment": "Office Supplies",
    },
    doc_version: "1.0",
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "3c5280a7-492e-421d-b739-7447455ce99e",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
];

// CREATE - สร้าง GoodReceivedNoteDetail ใหม่
export const createGoodReceivedNoteDetail = (
  goodReceivedNoteDetailData: Omit<
    GoodReceivedNoteDetail,
    "id" | "created_at" | "updated_at"
  >
): GoodReceivedNoteDetail => {
  const newGoodReceivedNoteDetail: GoodReceivedNoteDetail = {
    ...goodReceivedNoteDetailData,
    id: generateId(),
    created_at: getCurrentTimestamp(),
    updated_at: getCurrentTimestamp(),
  };

  goodReceivedNoteDetails.push(newGoodReceivedNoteDetail);
  return newGoodReceivedNoteDetail;
};

// READ - อ่าน GoodReceivedNoteDetail ทั้งหมด
export const getAllGoodReceivedNoteDetails = (): GoodReceivedNoteDetail[] => {
  return [...goodReceivedNoteDetails];
};

// READ - อ่าน GoodReceivedNoteDetail ตาม ID
export const getGoodReceivedNoteDetailById = (
  id: string
): GoodReceivedNoteDetail | undefined => {
  return goodReceivedNoteDetails.find((detail) => detail.id === id);
};

// READ - อ่าน GoodReceivedNoteDetail ตาม good_received_note_id
export const getGoodReceivedNoteDetailsByGrnId = (
  grnId: string
): GoodReceivedNoteDetail[] => {
  return goodReceivedNoteDetails.filter(
    (detail) => detail.good_received_note_id === grnId
  );
};

// READ - อ่าน GoodReceivedNoteDetail ตาม inventory_transaction_id
export const getGoodReceivedNoteDetailsByInventoryTransactionId = (
  inventoryTransactionId: string
): GoodReceivedNoteDetail[] => {
  return goodReceivedNoteDetails.filter(
    (detail) => detail.inventory_transaction_id === inventoryTransactionId
  );
};

// READ - อ่าน GoodReceivedNoteDetail ตาม purchase_order_detail_id
export const getGoodReceivedNoteDetailsByPurchaseOrderDetailId = (
  purchaseOrderDetailId: string
): GoodReceivedNoteDetail[] => {
  return goodReceivedNoteDetails.filter(
    (detail) => detail.purchase_order_detail_id === purchaseOrderDetailId
  );
};

// READ - อ่าน GoodReceivedNoteDetail ตาม sequence_no
export const getGoodReceivedNoteDetailsBySequenceNo = (
  sequenceNo: number
): GoodReceivedNoteDetail[] => {
  return goodReceivedNoteDetails.filter(
    (detail) => detail.sequence_no === sequenceNo
  );
};

// READ - อ่าน GoodReceivedNoteDetail ตาม location_id
export const getGoodReceivedNoteDetailsByLocationId = (
  locationId: string
): GoodReceivedNoteDetail[] => {
  return goodReceivedNoteDetails.filter(
    (detail) => detail.location_id === locationId
  );
};

// READ - อ่าน GoodReceivedNoteDetail ตาม product_id
export const getGoodReceivedNoteDetailsByProductId = (
  productId: string
): GoodReceivedNoteDetail[] => {
  return goodReceivedNoteDetails.filter(
    (detail) => detail.product_id === productId
  );
};

export const getLastGoodReceivedNoteDetailsByProductId = (
  productId: string
): GoodReceivedNoteDetail[] => {
  return goodReceivedNoteDetails.filter(
    (detail) => detail.product_id === productId
  );
};


// READ - อ่าน GoodReceivedNoteDetail ตาม product_name
export const getGoodReceivedNoteDetailsByProductName = (
  productName: string
): GoodReceivedNoteDetail[] => {
  return goodReceivedNoteDetails.filter((detail) =>
    detail.product_name.toLowerCase().includes(productName.toLowerCase())
  );
};

// READ - อ่าน GoodReceivedNoteDetail ตาม tax_profile_id
export const getGoodReceivedNoteDetailsByTaxProfile = (
  taxProfileId: string
): GoodReceivedNoteDetail[] => {
  return goodReceivedNoteDetails.filter(
    (detail) => detail.tax_profile_id === taxProfileId
  );
};

// READ - อ่าน GoodReceivedNoteDetail ตาม delivery_point_id
export const getGoodReceivedNoteDetailsByDeliveryPoint = (
  deliveryPointId: string
): GoodReceivedNoteDetail[] => {
  return goodReceivedNoteDetails.filter(
    (detail) => detail.delivery_point_id === deliveryPointId
  );
};

// READ - อ่าน GoodReceivedNoteDetail ที่ active (ไม่ถูกลบ)
export const getActiveGoodReceivedNoteDetails =
  (): GoodReceivedNoteDetail[] => {
    return goodReceivedNoteDetails.filter(
      (detail) => detail.deleted_at === null
    );
  };

// READ - อ่าน GoodReceivedNoteDetail ที่ถูกลบแล้ว
export const getDeletedGoodReceivedNoteDetails =
  (): GoodReceivedNoteDetail[] => {
    return goodReceivedNoteDetails.filter(
      (detail) => detail.deleted_at !== null
    );
  };

// READ - อ่าน GoodReceivedNoteDetail ตาม doc_version
export const getGoodReceivedNoteDetailsByDocVersion = (
  docVersion: string
): GoodReceivedNoteDetail[] => {
  return goodReceivedNoteDetails.filter(
    (detail) => detail.doc_version === docVersion
  );
};

// READ - อ่าน GoodReceivedNoteDetail ตาม created_by_id
export const getGoodReceivedNoteDetailsByCreatedBy = (
  createdById: string
): GoodReceivedNoteDetail[] => {
  return goodReceivedNoteDetails.filter(
    (detail) => detail.created_by_id === createdById
  );
};

// READ - อ่าน GoodReceivedNoteDetail ตาม updated_by_id
export const getGoodReceivedNoteDetailsByUpdatedBy = (
  updatedById: string
): GoodReceivedNoteDetail[] => {
  return goodReceivedNoteDetails.filter(
    (detail) => detail.updated_by_id === updatedById
  );
};

// READ - อ่าน GoodReceivedNoteDetail ที่มี note
export const getGoodReceivedNoteDetailsWithNote =
  (): GoodReceivedNoteDetail[] => {
    return goodReceivedNoteDetails.filter(
      (detail) => detail.note && detail.note.trim() !== ""
    );
  };

// READ - อ่าน GoodReceivedNoteDetail ที่มี FOC qty
export const getGoodReceivedNoteDetailsWithFoc =
  (): GoodReceivedNoteDetail[] => {
    return goodReceivedNoteDetails.filter((detail) => detail.foc_qty > 0);
  };

// READ - อ่าน GoodReceivedNoteDetail ตาม price range
export const getGoodReceivedNoteDetailsByPriceRange = (
  minPrice: number,
  maxPrice: number
): GoodReceivedNoteDetail[] => {
  return goodReceivedNoteDetails.filter((detail) => {
    const price = detail.price;
    return price >= minPrice && price <= maxPrice;
  });
};

// READ - อ่าน GoodReceivedNoteDetail ตาม qty range
export const getGoodReceivedNoteDetailsByQtyRange = (
  minQty: number,
  maxQty: number
): GoodReceivedNoteDetail[] => {
  return goodReceivedNoteDetails.filter((detail) => {
    const qty = detail.received_qty;
    return qty >= minQty && qty <= maxQty;
  });
};

// UPDATE - อัปเดต GoodReceivedNoteDetail
export const updateGoodReceivedNoteDetail = (
  id: string,
  updateData: Partial<
    Omit<GoodReceivedNoteDetail, "id" | "created_at" | "created_by_id">
  >
): GoodReceivedNoteDetail | null => {
  const index = goodReceivedNoteDetails.findIndex((detail) => detail.id === id);

  if (index === -1) {
    return null;
  }

  goodReceivedNoteDetails[index] = {
    ...goodReceivedNoteDetails[index],
    ...updateData,
    updated_at: getCurrentTimestamp(),
  };

  return goodReceivedNoteDetails[index];
};

// UPDATE - อัปเดต GoodReceivedNoteDetail sequence_no
export const updateGoodReceivedNoteDetailSequenceNo = (
  id: string,
  sequenceNo: number
): GoodReceivedNoteDetail | null => {
  return updateGoodReceivedNoteDetail(id, { sequence_no: sequenceNo });
};

// UPDATE - อัปเดต GoodReceivedNoteDetail received_qty
export const updateGoodReceivedNoteDetailReceivedQty = (
  id: string,
  receivedQty: number
): GoodReceivedNoteDetail | null => {
  return updateGoodReceivedNoteDetail(id, { received_qty: receivedQty });
};

// UPDATE - อัปเดต GoodReceivedNoteDetail price
export const updateGoodReceivedNoteDetailPrice = (
  id: string,
  price: number
): GoodReceivedNoteDetail | null => {
  return updateGoodReceivedNoteDetail(id, { price });
};

// UPDATE - อัปเดต GoodReceivedNoteDetail note
export const updateGoodReceivedNoteDetailNote = (
  id: string,
  note: string
): GoodReceivedNoteDetail | null => {
  return updateGoodReceivedNoteDetail(id, { note });
};

// UPDATE - อัปเดต GoodReceivedNoteDetail info
export const updateGoodReceivedNoteDetailInfo = (
  id: string,
  info: any
): GoodReceivedNoteDetail | null => {
  return updateGoodReceivedNoteDetail(id, { info });
};

// UPDATE - อัปเดต GoodReceivedNoteDetail dimension
export const updateGoodReceivedNoteDetailDimension = (
  id: string,
  dimension: any
): GoodReceivedNoteDetail | null => {
  return updateGoodReceivedNoteDetail(id, { dimension });
};

// UPDATE - อัปเดต GoodReceivedNoteDetail doc_version
export const updateGoodReceivedNoteDetailDocVersion = (
  id: string,
  docVersion: string
): GoodReceivedNoteDetail | null => {
  return updateGoodReceivedNoteDetail(id, { doc_version: docVersion });
};

// UPDATE - GoodReceivedNoteDetail โดย good_received_note_id และ sequence_no
export const updateGoodReceivedNoteDetailByGrnAndSequence = (
  grnId: string,
  sequenceNo: number,
  updateData: Partial<
    Omit<GoodReceivedNoteDetail, "id" | "created_at" | "created_by_id">
  >
): GoodReceivedNoteDetail | null => {
  const index = goodReceivedNoteDetails.findIndex(
    (detail) =>
      detail.good_received_note_id === grnId &&
      detail.sequence_no === sequenceNo
  );

  if (index === -1) {
    return null;
  }

  goodReceivedNoteDetails[index] = {
    ...goodReceivedNoteDetails[index],
    ...updateData,
    updated_at: getCurrentTimestamp(),
  };

  return goodReceivedNoteDetails[index];
};

// DELETE - ลบ GoodReceivedNoteDetail (soft delete)
export const deleteGoodReceivedNoteDetail = (
  id: string,
  deletedById: string
): boolean => {
  const index = goodReceivedNoteDetails.findIndex((detail) => detail.id === id);

  if (index === -1) {
    return false;
  }

  goodReceivedNoteDetails[index] = {
    ...goodReceivedNoteDetails[index],
    deleted_at: getCurrentTimestamp(),
    deleted_by_id: deletedById,
  };

  return true;
};

// DELETE - ลบ GoodReceivedNoteDetail แบบถาวร
export const hardDeleteGoodReceivedNoteDetail = (id: string): boolean => {
  const index = goodReceivedNoteDetails.findIndex((detail) => detail.id === id);

  if (index === -1) {
    return false;
  }

  goodReceivedNoteDetails.splice(index, 1);
  return true;
};

// DELETE - ลบ GoodReceivedNoteDetail ตาม good_received_note_id
export const deleteGoodReceivedNoteDetailsByGrnId = (
  grnId: string,
  deletedById: string
): number => {
  let deletedCount = 0;

  goodReceivedNoteDetails.forEach((detail) => {
    if (detail.good_received_note_id === grnId && !detail.deleted_at) {
      detail.deleted_at = getCurrentTimestamp();
      detail.deleted_by_id = deletedById;
      deletedCount++;
    }
  });

  return deletedCount;
};

// DELETE - ลบ GoodReceivedNoteDetail ตาม inventory_transaction_id
export const deleteGoodReceivedNoteDetailsByInventoryTransactionId = (
  inventoryTransactionId: string,
  deletedById: string
): number => {
  let deletedCount = 0;

  goodReceivedNoteDetails.forEach((detail) => {
    if (
      detail.inventory_transaction_id === inventoryTransactionId &&
      !detail.deleted_at
    ) {
      detail.deleted_at = getCurrentTimestamp();
      detail.deleted_by_id = deletedById;
      deletedCount++;
    }
  });

  return deletedCount;
};

// DELETE - ลบ GoodReceivedNoteDetail ตาม product_id
export const deleteGoodReceivedNoteDetailsByProductId = (
  productId: string,
  deletedById: string
): number => {
  let deletedCount = 0;

  goodReceivedNoteDetails.forEach((detail) => {
    if (detail.product_id === productId && !detail.deleted_at) {
      detail.deleted_at = getCurrentTimestamp();
      detail.deleted_by_id = deletedById;
      deletedCount++;
    }
  });

  return deletedCount;
};

// DELETE - GoodReceivedNoteDetail โดย good_received_note_id และ sequence_no
export const deleteGoodReceivedNoteDetailByGrnAndSequence = (
  grnId: string,
  sequenceNo: number,
  deletedById: string
): boolean => {
  const index = goodReceivedNoteDetails.findIndex(
    (detail) =>
      detail.good_received_note_id === grnId &&
      detail.sequence_no === sequenceNo
  );

  if (index === -1) {
    return false;
  }

  goodReceivedNoteDetails[index] = {
    ...goodReceivedNoteDetails[index],
    deleted_at: getCurrentTimestamp(),
    deleted_by_id: deletedById,
  };

  return true;
};

// RESTORE - กู้คืน GoodReceivedNoteDetail ที่ถูกลบแล้ว
export const restoreGoodReceivedNoteDetail = (id: string): boolean => {
  const index = goodReceivedNoteDetails.findIndex((detail) => detail.id === id);

  if (index === -1) {
    return false;
  }

  if (goodReceivedNoteDetails[index].deleted_at) {
    goodReceivedNoteDetails[index] = {
      ...goodReceivedNoteDetails[index],
      deleted_at: null,
      deleted_by_id: null,
    };
    return true;
  }

  return false;
};

// RESTORE - กู้คืน GoodReceivedNoteDetail ตาม good_received_note_id
export const restoreGoodReceivedNoteDetailsByGrnId = (
  grnId: string
): number => {
  let restoredCount = 0;

  goodReceivedNoteDetails.forEach((detail) => {
    if (detail.good_received_note_id === grnId && detail.deleted_at) {
      detail.deleted_at = null;
      detail.deleted_by_id = null;
      restoredCount++;
    }
  });

  return restoredCount;
};

// RESTORE - กู้คืน GoodReceivedNoteDetail ตาม inventory_transaction_id
export const restoreGoodReceivedNoteDetailsByInventoryTransactionId = (
  inventoryTransactionId: string
): number => {
  let restoredCount = 0;

  goodReceivedNoteDetails.forEach((detail) => {
    if (
      detail.inventory_transaction_id === inventoryTransactionId &&
      detail.deleted_at
    ) {
      detail.deleted_at = null;
      detail.deleted_by_id = null;
      restoredCount++;
    }
  });

  return restoredCount;
};

// RESTORE - กู้คืน GoodReceivedNoteDetail ตาม product_id
export const restoreGoodReceivedNoteDetailsByProductId = (
  productId: string
): number => {
  let restoredCount = 0;

  goodReceivedNoteDetails.forEach((detail) => {
    if (detail.product_id === productId && detail.deleted_at) {
      detail.deleted_at = null;
      detail.deleted_by_id = null;
      restoredCount++;
    }
  });

  return restoredCount;
};

// Utility function สำหรับล้างข้อมูลทั้งหมด (ใช้สำหรับ testing)
export const clearAllGoodReceivedNoteDetails = (): void => {
  goodReceivedNoteDetails.length = 0;
};

// Utility function สำหรับนับจำนวน GoodReceivedNoteDetail
export const getGoodReceivedNoteDetailCount = (): number => {
  return goodReceivedNoteDetails.length;
};

// Utility function สำหรับนับจำนวน GoodReceivedNoteDetail ที่ active
export const getActiveGoodReceivedNoteDetailCount = (): number => {
  return goodReceivedNoteDetails.filter((detail) => detail.deleted_at === null)
    .length;
};

// Utility function สำหรับนับจำนวน GoodReceivedNoteDetail ที่ถูกลบแล้ว
export const getDeletedGoodReceivedNoteDetailCount = (): number => {
  return goodReceivedNoteDetails.filter((detail) => detail.deleted_at !== null)
    .length;
};

// Utility function สำหรับนับจำนวน GoodReceivedNoteDetail ตาม good_received_note_id
export const getGoodReceivedNoteDetailCountByGrnId = (
  grnId: string
): number => {
  return goodReceivedNoteDetails.filter(
    (detail) => detail.good_received_note_id === grnId
  ).length;
};

// Utility function สำหรับนับจำนวน GoodReceivedNoteDetail ตาม inventory_transaction_id
export const getGoodReceivedNoteDetailCountByInventoryTransactionId = (
  inventoryTransactionId: string
): number => {
  return goodReceivedNoteDetails.filter(
    (detail) => detail.inventory_transaction_id === inventoryTransactionId
  ).length;
};

// Utility function สำหรับนับจำนวน GoodReceivedNoteDetail ตาม product_id
export const getGoodReceivedNoteDetailCountByProductId = (
  productId: string
): number => {
  return goodReceivedNoteDetails.filter(
    (detail) => detail.product_id === productId
  ).length;
};

// Utility function สำหรับนับจำนวน GoodReceivedNoteDetail ตาม location_id
export const getGoodReceivedNoteDetailCountByLocationId = (
  locationId: string
): number => {
  return goodReceivedNoteDetails.filter(
    (detail) => detail.location_id === locationId
  ).length;
};

// Utility function สำหรับนับจำนวน GoodReceivedNoteDetail ตาม tax_profile_id
export const getGoodReceivedNoteDetailCountByTaxProfile = (
  taxProfileId: string
): number => {
  return goodReceivedNoteDetails.filter(
    (detail) => detail.tax_profile_id === taxProfileId
  ).length;
};

// Utility function สำหรับนับจำนวน GoodReceivedNoteDetail ตาม delivery_point_id
export const getGoodReceivedNoteDetailCountByDeliveryPoint = (
  deliveryPointId: string
): number => {
  return goodReceivedNoteDetails.filter(
    (detail) => detail.delivery_point_id === deliveryPointId
  ).length;
};

// Utility function สำหรับนับจำนวน GoodReceivedNoteDetail ตาม doc_version
export const getGoodReceivedNoteDetailCountByDocVersion = (
  docVersion: string
): number => {
  return goodReceivedNoteDetails.filter(
    (detail) => detail.doc_version === docVersion
  ).length;
};

// Utility function สำหรับนับจำนวน GoodReceivedNoteDetail ตาม created_by_id
export const getGoodReceivedNoteDetailCountByCreatedBy = (
  createdById: string
): number => {
  return goodReceivedNoteDetails.filter(
    (detail) => detail.created_by_id === createdById
  ).length;
};

// Utility function สำหรับค้นหา GoodReceivedNoteDetail แบบ advanced search
export const searchGoodReceivedNoteDetails = (searchCriteria: {
  good_received_note_id?: string;
  inventory_transaction_id?: string;
  purchase_order_detail_id?: string;
  sequence_no?: number;
  location_id?: string;
  product_id?: string;
  product_name?: string;
  tax_profile_id?: string;
  delivery_point_id?: string;
  doc_version?: string;
  created_by_id?: string;
  updated_by_id?: string;
  has_note?: boolean;
  has_info?: boolean;
  has_dimension?: boolean;
  has_foc?: boolean;
  min_price?: number;
  max_price?: number;
  min_qty?: number;
  max_qty?: number;
}): GoodReceivedNoteDetail[] => {
  return goodReceivedNoteDetails.filter((detail) => {
    if (
      searchCriteria.good_received_note_id &&
      detail.good_received_note_id !== searchCriteria.good_received_note_id
    ) {
      return false;
    }

    if (
      searchCriteria.inventory_transaction_id &&
      detail.inventory_transaction_id !==
        searchCriteria.inventory_transaction_id
    ) {
      return false;
    }

    if (
      searchCriteria.purchase_order_detail_id &&
      detail.purchase_order_detail_id !==
        searchCriteria.purchase_order_detail_id
    ) {
      return false;
    }

    if (
      searchCriteria.sequence_no !== undefined &&
      detail.sequence_no !== searchCriteria.sequence_no
    ) {
      return false;
    }

    if (
      searchCriteria.location_id &&
      detail.location_id !== searchCriteria.location_id
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
      searchCriteria.tax_profile_id &&
      detail.tax_profile_id !== searchCriteria.tax_profile_id
    ) {
      return false;
    }

    if (
      searchCriteria.delivery_point_id &&
      detail.delivery_point_id !== searchCriteria.delivery_point_id
    ) {
      return false;
    }

    if (
      searchCriteria.doc_version &&
      detail.doc_version !== searchCriteria.doc_version
    ) {
      return false;
    }

    if (
      searchCriteria.created_by_id &&
      detail.created_by_id !== searchCriteria.created_by_id
    ) {
      return false;
    }

    if (
      searchCriteria.updated_by_id &&
      detail.updated_by_id !== searchCriteria.updated_by_id
    ) {
      return false;
    }

    if (searchCriteria.has_note !== undefined) {
      const hasNote = detail.note && detail.note.trim() !== "";
      if (hasNote !== searchCriteria.has_note) {
        return false;
      }
    }

    if (searchCriteria.has_info !== undefined) {
      const hasInfo = detail.info !== null;
      if (hasInfo !== searchCriteria.has_info) {
        return false;
      }
    }

    if (searchCriteria.has_dimension !== undefined) {
      const hasDimension = detail.dimension !== null;
      if (hasDimension !== searchCriteria.has_dimension) {
        return false;
      }
    }

    if (searchCriteria.has_foc !== undefined) {
      const hasFoc = detail.foc_qty > 0;
      if (hasFoc !== searchCriteria.has_foc) {
        return false;
      }
    }

    if (searchCriteria.min_price !== undefined) {
      const price = detail.price;
      if (price < searchCriteria.min_price) {
        return false;
      }
    }

    if (searchCriteria.max_price !== undefined) {
      const price = detail.price;
      if (price > searchCriteria.max_price) {
        return false;
      }
    }

    if (searchCriteria.min_qty !== undefined) {
      const qty = detail.received_qty;
      if (qty < searchCriteria.min_qty) {
        return false;
      }
    }

    if (searchCriteria.max_qty !== undefined) {
      const qty = detail.received_qty;
      if (qty > searchCriteria.max_qty) {
        return false;
      }
    }

    return true;
  });
};

// Utility function สำหรับตรวจสอบ GoodReceivedNoteDetail ตาม good_received_note_id
export const isGoodReceivedNoteDetailExistsByGrnId = (
  grnId: string
): boolean => {
  return goodReceivedNoteDetails.some(
    (detail) => detail.good_received_note_id === grnId
  );
};

// Utility function สำหรับตรวจสอบ GoodReceivedNoteDetail ตาม inventory_transaction_id
export const isGoodReceivedNoteDetailExistsByInventoryTransactionId = (
  inventoryTransactionId: string
): boolean => {
  return goodReceivedNoteDetails.some(
    (detail) => detail.inventory_transaction_id === inventoryTransactionId
  );
};

// Utility function สำหรับตรวจสอบ GoodReceivedNoteDetail ตาม product_id
export const isGoodReceivedNoteDetailExistsByProductId = (
  productId: string
): boolean => {
  return goodReceivedNoteDetails.some(
    (detail) => detail.product_id === productId
  );
};

// Utility function สำหรับตรวจสอบ GoodReceivedNoteDetail โดย good_received_note_id และ sequence_no
export const isGoodReceivedNoteDetailExistsByGrnAndSequence = (
  grnId: string,
  sequenceNo: number
): boolean => {
  return goodReceivedNoteDetails.some(
    (detail) =>
      detail.good_received_note_id === grnId &&
      detail.sequence_no === sequenceNo
  );
};

// Utility function สำหรับตรวจสอบ GoodReceivedNoteDetail ที่มี note
export const hasGoodReceivedNoteDetailsWithNote = (): boolean => {
  return goodReceivedNoteDetails.some(
    (detail) => detail.note && detail.note.trim() !== ""
  );
};

// Utility function สำหรับตรวจสอบ GoodReceivedNoteDetail ที่มี info
export const hasGoodReceivedNoteDetailsWithInfo = (): boolean => {
  return goodReceivedNoteDetails.some((detail) => detail.info !== null);
};

// Utility function สำหรับตรวจสอบ GoodReceivedNoteDetail ที่มี dimension
export const hasGoodReceivedNoteDetailsWithDimension = (): boolean => {
  return goodReceivedNoteDetails.some((detail) => detail.dimension !== null);
};

// Utility function สำหรับตรวจสอบ GoodReceivedNoteDetail ที่มี FOC
export const hasGoodReceivedNoteDetailsWithFoc = (): boolean => {
  return goodReceivedNoteDetails.some((detail) => detail.foc_qty > 0);
};

// Bulk operations
// เพิ่ม GoodReceivedNoteDetail หลายรายการ
export const addMultipleGoodReceivedNoteDetails = (
  goodReceivedNoteDetailsData: Omit<
    GoodReceivedNoteDetail,
    "id" | "created_at" | "updated_at"
  >[]
): GoodReceivedNoteDetail[] => {
  const newGoodReceivedNoteDetails: GoodReceivedNoteDetail[] = [];

  goodReceivedNoteDetailsData.forEach((data) => {
    const newGoodReceivedNoteDetail = createGoodReceivedNoteDetail(data);
    newGoodReceivedNoteDetails.push(newGoodReceivedNoteDetail);
  });

  return newGoodReceivedNoteDetails;
};

// ลบ GoodReceivedNoteDetail หลายรายการตาม good_received_note_id
export const removeMultipleGoodReceivedNoteDetailsByGrnId = (
  grnId: string,
  deletedById: string
): number => {
  return deleteGoodReceivedNoteDetailsByGrnId(grnId, deletedById);
};

// ลบ GoodReceivedNoteDetail หลายรายการตาม inventory_transaction_id
export const removeMultipleGoodReceivedNoteDetailsByInventoryTransactionId = (
  inventoryTransactionId: string,
  deletedById: string
): number => {
  return deleteGoodReceivedNoteDetailsByInventoryTransactionId(
    inventoryTransactionId,
    deletedById
  );
};

// ลบ GoodReceivedNoteDetail หลายรายการตาม product_id
export const removeMultipleGoodReceivedNoteDetailsByProductId = (
  productId: string,
  deletedById: string
): number => {
  return deleteGoodReceivedNoteDetailsByProductId(productId, deletedById);
};

// Hard delete operations
export const hardDeleteGoodReceivedNoteDetailsByGrnId = (
  grnId: string
): number => {
  let deletedCount = 0;

  for (let i = goodReceivedNoteDetails.length - 1; i >= 0; i--) {
    if (goodReceivedNoteDetails[i].good_received_note_id === grnId) {
      goodReceivedNoteDetails.splice(i, 1);
      deletedCount++;
    }
  }

  return deletedCount;
};

export const hardDeleteGoodReceivedNoteDetailsByInventoryTransactionId = (
  inventoryTransactionId: string
): number => {
  let deletedCount = 0;

  for (let i = goodReceivedNoteDetails.length - 1; i >= 0; i--) {
    if (
      goodReceivedNoteDetails[i].inventory_transaction_id ===
      inventoryTransactionId
    ) {
      goodReceivedNoteDetails.splice(i, 1);
      deletedCount++;
    }
  }

  return deletedCount;
};

export const hardDeleteGoodReceivedNoteDetailsByProductId = (
  productId: string
): number => {
  let deletedCount = 0;

  for (let i = goodReceivedNoteDetails.length - 1; i >= 0; i--) {
    if (goodReceivedNoteDetails[i].product_id === productId) {
      goodReceivedNoteDetails.splice(i, 1);
      deletedCount++;
    }
  }

  return deletedCount;
};

// Sequence management
export const getNextGoodReceivedNoteSequenceNo = (grnId: string): number => {
  const existingDetails = goodReceivedNoteDetails.filter(
    (detail) => detail.good_received_note_id === grnId
  );
  if (existingDetails.length === 0) {
    return 1;
  }

  const maxSequenceNo = Math.max(
    ...existingDetails.map((detail) => detail.sequence_no)
  );
  return maxSequenceNo + 1;
};

export const isSequenceNoExistsInGoodReceivedNote = (
  grnId: string,
  sequenceNo: number
): boolean => {
  return goodReceivedNoteDetails.some(
    (detail) =>
      detail.good_received_note_id === grnId &&
      detail.sequence_no === sequenceNo
  );
};

export const isGoodReceivedNoteSequenceNoExistsAll = (
  sequenceNo: number
): boolean => {
  return goodReceivedNoteDetails.some(
    (detail) => detail.sequence_no === sequenceNo
  );
};

// Calculation functions
export const calculateTotalAmount = (
  price: string,
  qty: string,
  taxAmount: string,
  discountAmount: string
): string => {
  const priceNum = parseFloat(price);
  const qtyNum = parseFloat(qty);
  const taxAmountNum = parseFloat(taxAmount);
  const discountAmountNum = parseFloat(discountAmount);

  const subtotal = priceNum * qtyNum;
  const total = subtotal + taxAmountNum - discountAmountNum;

  return total.toFixed(2);
};

export const calculateBaseTotalAmount = (
  basePrice: string,
  baseQty: string
): string => {
  const basePriceNum = parseFloat(basePrice);
  const baseQtyNum = parseFloat(baseQty);

  const total = basePriceNum * baseQtyNum;
  return total.toFixed(2);
};


export const getGoodReceivedNoteDetailsByGoodReceivedNoteId = (
  goodReceivedNoteId: string
): GoodReceivedNoteDetail[] => {
  return goodReceivedNoteDetails.filter(
    (detail) => detail.good_received_note_id === goodReceivedNoteId
  );
};