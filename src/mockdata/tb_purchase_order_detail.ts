import { generateId, getCurrentTimestamp } from "@/libs/utils";
import { tbProduct, tbPurchaseOrder } from ".";
import { getUuidByName } from "./mapping.uuid";
import { getProductById } from "./tb_product";
import { getUnitById } from "./tb_unit";
import { getTaxProfileById } from "./tb_tax_profile";
import { getVendorById } from "./tb_vendor";
import { getCalculatePriceInfo } from "@/libs/calc";

export interface PurchaseOrderDetail {
  id: string;
  purchase_order_id: string;
  product_id: string;
  product_name: string;
  product_local_name: string;
  sku: string;
  description: string | null;
  sequence_no: number;
  is_active: boolean;
  order_qty: number;
  order_unit_id: string;
  order_unit_conversion_factor: number;
  order_unit_name: string;
  base_qty: number;
  base_unit_id: string;
  base_unit_name: string;
  is_foc: boolean;
  tax_profile_id: string;
  tax_profile_name: string;
  tax_rate: number;
  tax_amount: number;
  base_tax_amount: number;
  is_tax_adjustment: boolean;
  discount_rate: number;
  discount_amount: number;
  base_discount_amount: number;
  is_discount_adjustment: boolean;
  price: number;
  sub_total_price: number;
  net_amount: number;
  total_price: number;
  base_price: number;
  base_sub_total_price: number;
  base_net_amount: number;
  base_total_price: number;
  received_qty: number;
  cancelled_qty: number;
  history: any;
  note: string | null;
  info: any;
  dimension: any;
  doc_version: string;
  created_at: string;
  created_by_id: string | null;
  updated_at: string;
  updated_by_id: string | null;
  deleted_at: string | null;
  deleted_by_id: string | null;
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

const unit1 = getUnitById(getUuidByName("UNIT_01"));
const unit2 = getUnitById(getUuidByName("UNIT_02"));
const unit3 = getUnitById(getUuidByName("UNIT_03"));
const unit4 = getUnitById(getUuidByName("UNIT_04"));
const unit5 = getUnitById(getUuidByName("UNIT_05"));

const taxProfile1 = getTaxProfileById(getUuidByName("TAX_PROFILE_01"));
const taxProfile2 = getTaxProfileById(getUuidByName("TAX_PROFILE_02"));

const vendor1 = getVendorById(getUuidByName("VENDOR_01"));
const vendor2 = getVendorById(getUuidByName("VENDOR_02"));
const vendor3 = getVendorById(getUuidByName("VENDOR_03"));

const productPrice1 = getCalculatePriceInfo(5, 20, 1, 7, false, 0, false);
const productPrice2 = getCalculatePriceInfo(10, 35, 35, 7, false, 0, false);
const productPrice3 = getCalculatePriceInfo(8, 41, 1, 7, false, 0, false);
const productPrice4 = getCalculatePriceInfo(5, 100, 35, 7, false, 0, false);
const productPrice5 = getCalculatePriceInfo(5, 1, 1, 7, false, 0, false);
const productPrice6 = getCalculatePriceInfo(5, 1, 1, 7, false, 0, false);
const productPrice7 = getCalculatePriceInfo(5, 1, 1, 7, false, 0, false);
const productPrice8 = getCalculatePriceInfo(5, 1, 1, 7, false, 0, false);
const productPrice9 = getCalculatePriceInfo(5, 1, 1, 7, false, 0, false);
const productPrice10 = getCalculatePriceInfo(5, 1, 1, 7, false, 0, false);

export const purchaseOrderDetails: PurchaseOrderDetail[] = [
  {
    id: getUuidByName("PURCHASE_ORDER_DETAIL_01"),
    purchase_order_id: getUuidByName("PURCHASE_ORDER_01"),
    product_id: product1?.id || "",
    product_name: product1?.name || "",
    product_local_name: product1?.local_name || "",
    sku: product1?.sku || "",
    description: "High-performance laptop for IT department",
    sequence_no: 1,
    is_active: true,
    order_qty: productPrice1.qty,
    order_unit_id: unit1?.id || "",
    order_unit_conversion_factor: 1.0,
    order_unit_name: unit1?.name || "",
    base_qty: productPrice1.qty,
    base_unit_id: product1?.inventory_unit_id || "",
    base_unit_name: product1?.inventory_unit_name || "",
    is_foc: false,
    tax_profile_id: taxProfile1?.id || "",
    tax_profile_name: taxProfile1?.name || "",
    tax_rate: productPrice1.tax_rate,
    tax_amount: productPrice1.tax_amount,
    base_tax_amount: productPrice1.base_tax_amount,
    is_tax_adjustment: false,
    discount_rate: productPrice1.discount_rate,
    discount_amount: productPrice1.discount_amount,
    base_discount_amount: productPrice1.base_discount_amount,
    is_discount_adjustment: false,
    price: productPrice1.price,
    sub_total_price: productPrice1.sub_total_price,
    net_amount: productPrice1.net_amount,
    total_price: productPrice1.total_price,
    base_price: productPrice1.base_price,
    base_sub_total_price: productPrice1.base_sub_total_price,
    base_net_amount: productPrice1.base_net_amount,
    base_total_price: productPrice1.base_total_price,
    received_qty: 0,
    cancelled_qty: 0,
    history: [{ action: "created", date: "2024-01-15", user: "user1" }],
    note: "Premium laptop model",
    info: { category: "IT Equipment", brand: "Dell" },
    dimension: { department: "IT", region: "Central" },
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
    purchase_order_id: "550e8400-e29b-41d4-a716-446655440001",
    product_id: product2?.id || "",
    product_name: product2?.name || "",
    product_local_name: product2?.local_name || "",
    sku: product2?.sku || "",
    description: "Wireless mouse for laptop setup",
    sequence_no: 2,
    is_active: true,
    order_qty: productPrice2.qty,
    order_unit_id: unit2?.id || "",
    order_unit_conversion_factor: 1.0,
    order_unit_name: unit2?.name || "",
    base_qty: productPrice2.qty,
    base_unit_id: unit2?.id || "",
    base_unit_name: unit2?.name || "",
    is_foc: false,
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
    price: productPrice2.price,
    sub_total_price: productPrice2.sub_total_price,
    net_amount: productPrice2.net_amount,
    total_price: productPrice2.total_price,
    base_price: productPrice2.base_price,
    base_sub_total_price: productPrice2.base_sub_total_price,
    base_net_amount: productPrice2.base_net_amount,
    base_total_price: productPrice2.base_total_price,
    received_qty: 0,
    cancelled_qty: 0,
    history: [{ action: "created", date: "2024-01-15", user: "user1" }],
    note: "Wireless mouse with USB receiver",
    info: { category: "Accessories", brand: "Logitech" },
    dimension: { department: "IT", region: "Central" },
    doc_version: "1.0",
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440003",
    purchase_order_id: "550e8400-e29b-41d4-a716-446655440002",
    product_id: product3?.id || "",
    product_name: product3?.name || "",
    product_local_name: product3?.local_name || "",
    sku: product3?.sku || "",
    description: "Smartphone for sales team",
    sequence_no: 1,
    is_active: true,
    order_qty: productPrice3.qty,
    order_unit_id: unit1?.id || "",
    order_unit_conversion_factor: 1.0,
      order_unit_name: unit1?.name || "",
    base_qty: productPrice3.qty,
    base_unit_id: unit1?.id || "",
    base_unit_name: unit1?.name || "",
    is_foc: false,
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
    price: productPrice3.price,
    sub_total_price: productPrice3.sub_total_price,
    net_amount: productPrice3.net_amount,
    total_price: productPrice3.total_price,
    base_price: productPrice3.base_price,
    base_sub_total_price: productPrice3.base_sub_total_price,
    base_net_amount: productPrice3.base_net_amount,
      base_total_price: productPrice3.base_total_price,
    received_qty: 0,
    cancelled_qty: 0,
    history: [{ action: "created", date: "2024-01-16", user: "user3" }],
    note: "Android smartphone for field sales",
    info: { category: "Mobile Devices", brand: "Samsung" },
    dimension: { department: "Sales", region: "All" },
    doc_version: "1.0",
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "1bfdb891-58ee-499c-8115-34a964de8122",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
];

// CREATE - สร้าง PurchaseOrderDetail ใหม่
export const createPurchaseOrderDetail = (
  data: Omit<PurchaseOrderDetail, "id" | "created_at">
): PurchaseOrderDetail => {
  const newDetail: PurchaseOrderDetail = {
    ...data,
    id: generateId(),
    created_at: getCurrentTimestamp(),
    created_by_id: data.created_by_id || null,
  };

  purchaseOrderDetails.push(newDetail);
  return newDetail;
};

// READ - อ่าน PurchaseOrderDetail ทั้งหมด
export const getAllPurchaseOrderDetails = (): PurchaseOrderDetail[] => {
  return purchaseOrderDetails.filter((detail) => !detail.deleted_at);
};

// READ - อ่าน PurchaseOrderDetail ตาม ID
export const getPurchaseOrderDetailById = (
  id: string
): PurchaseOrderDetail | null => {
  const detail = purchaseOrderDetails.find(
    (detail) => detail.id === id && !detail.deleted_at
  );
  return detail || null;
};

// READ - อ่าน PurchaseOrderDetail ตาม purchase_order_id
export const getPurchaseOrderDetailsByOrder = (
  orderId: string
): PurchaseOrderDetail[] => {
  return purchaseOrderDetails.filter(
    (detail) => detail.purchase_order_id === orderId && !detail.deleted_at
  );
};

// READ - อ่าน PurchaseOrderDetail ตาม sequence_no
export const getPurchaseOrderDetailBySequence = (
  orderId: string,
  sequenceNo: number
): PurchaseOrderDetail | null => {
  const detail = purchaseOrderDetails.find(
    (detail) =>
      detail.purchase_order_id === orderId &&
      detail.sequence_no === sequenceNo &&
      !detail.deleted_at
  );
  return detail || null;
};

// READ - อ่าน PurchaseOrderDetail ที่ active
export const getActivePurchaseOrderDetails = (): PurchaseOrderDetail[] => {
  return purchaseOrderDetails.filter(
    (detail) => detail.is_active && !detail.deleted_at
  );
};

// READ - อ่าน PurchaseOrderDetail ที่ inactive
export const getInactivePurchaseOrderDetails = (): PurchaseOrderDetail[] => {
  return purchaseOrderDetails.filter(
    (detail) => !detail.is_active && !detail.deleted_at
  );
};

// READ - อ่าน PurchaseOrderDetail ที่มี note
export const getPurchaseOrderDetailsWithNote = (): PurchaseOrderDetail[] => {
  return purchaseOrderDetails.filter(
    (detail) => detail.note && detail.note.trim() !== "" && !detail.deleted_at
  );
};

// READ - อ่าน PurchaseOrderDetail ที่เป็น FOC
export const getFocPurchaseOrderDetails = (): PurchaseOrderDetail[] => {
  return purchaseOrderDetails.filter(
    (detail) => detail.is_foc && !detail.deleted_at
  );
};

// READ - อ่าน PurchaseOrderDetail ที่ไม่ใช่ FOC
export const getNonFocPurchaseOrderDetails = (): PurchaseOrderDetail[] => {
  return purchaseOrderDetails.filter(
    (detail) => !detail.is_foc && !detail.deleted_at
  );
};

// READ - อ่าน PurchaseOrderDetail ตาม tax_profile_id
export const getPurchaseOrderDetailsByTaxProfile = (
  taxProfileId: string
): PurchaseOrderDetail[] => {
  return purchaseOrderDetails.filter(
    (detail) => detail.tax_profile_id === taxProfileId && !detail.deleted_at
  );
};

// READ - อ่าน PurchaseOrderDetail ตาม order_unit_id
export const getPurchaseOrderDetailsByOrderUnit = (
  orderUnitId: string
): PurchaseOrderDetail[] => {
  return purchaseOrderDetails.filter(
    (detail) => detail.order_unit_id === orderUnitId && !detail.deleted_at
  );
};

// READ - อ่าน PurchaseOrderDetail ตาม base_unit_id
export const getPurchaseOrderDetailsByBaseUnit = (
  baseUnitId: string
): PurchaseOrderDetail[] => {
  return purchaseOrderDetails.filter(
    (detail) => detail.base_unit_id === baseUnitId && !detail.deleted_at
  );
};

// READ - ค้นหา PurchaseOrderDetail แบบ fuzzy search
export const searchPurchaseOrderDetails = (
  searchTerm: string
): PurchaseOrderDetail[] => {
  const lowerSearchTerm = searchTerm.toLowerCase();
  return purchaseOrderDetails.filter(
    (detail) =>
      !detail.deleted_at &&
      (detail.description?.toLowerCase().includes(lowerSearchTerm) ||
        detail.order_unit_name.toLowerCase().includes(lowerSearchTerm) ||
        detail.base_unit_name.toLowerCase().includes(lowerSearchTerm) ||
        detail.tax_profile_name.toLowerCase().includes(lowerSearchTerm) ||
        detail.note?.toLowerCase().includes(lowerSearchTerm))
  );
};

// UPDATE - อัปเดต PurchaseOrderDetail
export const updatePurchaseOrderDetail = (
  id: string,
  updateData: Partial<
    Omit<PurchaseOrderDetail, "id" | "created_at" | "created_by_id">
  >
): PurchaseOrderDetail | null => {
  const index = purchaseOrderDetails.findIndex((detail) => detail.id === id);

  if (index === -1) {
    return null;
  }

  purchaseOrderDetails[index] = {
    ...purchaseOrderDetails[index],
    ...updateData,
    updated_at: getCurrentTimestamp(),
  };

  return purchaseOrderDetails[index];
};

// UPDATE - อัปเดต PurchaseOrderDetail description
export const updatePurchaseOrderDetailDescription = (
  id: string,
  description: string
): PurchaseOrderDetail | null => {
  return updatePurchaseOrderDetail(id, { description });
};

// UPDATE - อัปเดต PurchaseOrderDetail sequence_no
export const updatePurchaseOrderDetailSequence = (
  id: string,
  sequenceNo: number
): PurchaseOrderDetail | null => {
  return updatePurchaseOrderDetail(id, { sequence_no: sequenceNo });
};

// UPDATE - อัปเดต PurchaseOrderDetail active status
export const updatePurchaseOrderDetailActiveStatus = (
  id: string,
  isActive: boolean
): PurchaseOrderDetail | null => {
  return updatePurchaseOrderDetail(id, { is_active: isActive });
};

// UPDATE - อัปเดต PurchaseOrderDetail order_qty
export const updatePurchaseOrderDetailOrderQty = (
  id: string,
  orderQty: number
): PurchaseOrderDetail | null => {
  return updatePurchaseOrderDetail(id, { order_qty: orderQty });
};

// UPDATE - อัปเดต PurchaseOrderDetail base_qty
export const updatePurchaseOrderDetailBaseQty = (
  id: string,
  baseQty: number
): PurchaseOrderDetail | null => {
  return updatePurchaseOrderDetail(id, { base_qty: baseQty });
};

// UPDATE - อัปเดต PurchaseOrderDetail price
export const updatePurchaseOrderDetailPrice = (
  id: string,
  price: number
): PurchaseOrderDetail | null => {
  return updatePurchaseOrderDetail(id, { price });
};

// UPDATE - อัปเดต PurchaseOrderDetail note
export const updatePurchaseOrderDetailNote = (
  id: string,
  note: string
): PurchaseOrderDetail | null => {
  return updatePurchaseOrderDetail(id, { note });
};

// DELETE - ลบ PurchaseOrderDetail (soft delete)
export const deletePurchaseOrderDetail = (
  id: string,
  deletedById: string
): boolean => {
  const index = purchaseOrderDetails.findIndex((detail) => detail.id === id);

  if (index === -1) {
    return false;
  }

  purchaseOrderDetails[index] = {
    ...purchaseOrderDetails[index],
    deleted_at: getCurrentTimestamp(),
    deleted_by_id: deletedById,
  };

  return true;
};

// DELETE - ลบ PurchaseOrderDetail แบบถาวร
export const hardDeletePurchaseOrderDetail = (id: string): boolean => {
  const index = purchaseOrderDetails.findIndex((detail) => detail.id === id);

  if (index === -1) {
    return false;
  }

  purchaseOrderDetails.splice(index, 1);
  return true;
};

// DELETE - ลบ PurchaseOrderDetail ตาม purchase_order_id
export const deletePurchaseOrderDetailsByOrder = (
  orderId: string,
  deletedById: string
): number => {
  let deletedCount = 0;

  purchaseOrderDetails.forEach((detail) => {
    if (detail.purchase_order_id === orderId && !detail.deleted_at) {
      detail.deleted_at = getCurrentTimestamp();
      detail.deleted_by_id = deletedById;
      deletedCount++;
    }
  });

  return deletedCount;
};

// Utility function สำหรับล้างข้อมูลทั้งหมด (ใช้สำหรับ testing)
export const clearAllPurchaseOrderDetails = (): void => {
  purchaseOrderDetails.length = 0;
};

// Utility function สำหรับนับจำนวน PurchaseOrderDetail
export const getPurchaseOrderDetailCount = (): number => {
  return purchaseOrderDetails.length;
};

// Utility function สำหรับนับจำนวน PurchaseOrderDetail ที่ active
export const getActivePurchaseOrderDetailCount = (): number => {
  return purchaseOrderDetails.filter((detail) => detail.is_active).length;
};

// Utility function สำหรับนับจำนวน PurchaseOrderDetail ที่ inactive
export const getInactivePurchaseOrderDetailCount = (): number => {
  return purchaseOrderDetails.filter((detail) => !detail.is_active).length;
};

// Utility function สำหรับนับจำนวน PurchaseOrderDetail ตาม purchase_order_id
export const getPurchaseOrderDetailCountByOrder = (orderId: string): number => {
  return purchaseOrderDetails.filter(
    (detail) => detail.purchase_order_id === orderId
  ).length;
};

// Utility function สำหรับนับจำนวน PurchaseOrderDetail ที่เป็น FOC
export const getFocPurchaseOrderDetailCount = (): number => {
  return purchaseOrderDetails.filter((detail) => detail.is_foc).length;
};

// Utility function สำหรับนับจำนวน PurchaseOrderDetail ที่ไม่ใช่ FOC
export const getNonFocPurchaseOrderDetailCount = (): number => {
  return purchaseOrderDetails.filter((detail) => !detail.is_foc).length;
};

// Utility function สำหรับตรวจสอบ PurchaseOrderDetail ที่ถูกลบแล้ว
export const getDeletedPurchaseOrderDetails = (): PurchaseOrderDetail[] => {
  return purchaseOrderDetails.filter((detail) => detail.deleted_at !== null);
};

// Utility function สำหรับกู้คืน PurchaseOrderDetail ที่ถูกลบแล้ว
export const restorePurchaseOrderDetail = (id: string): boolean => {
  const index = purchaseOrderDetails.findIndex((detail) => detail.id === id);

  if (index === -1) {
    return false;
  }

  if (purchaseOrderDetails[index].deleted_at) {
    purchaseOrderDetails[index] = {
      ...purchaseOrderDetails[index],
      deleted_at: null,
      deleted_by_id: null,
    };
    return true;
  }

  return false;
};

// Utility function สำหรับค้นหา PurchaseOrderDetail แบบ advanced search
export const searchPurchaseOrderDetailsAdvanced = (searchCriteria: {
  purchase_order_id?: string;
  sequence_no?: number;
  is_active?: boolean;
  is_foc?: boolean;
  tax_profile_id?: string;
  order_unit_id?: string;
  base_unit_id?: string;
  has_note?: boolean;
  order_qty_min?: string;
  order_qty_max?: string;
  price_min?: string;
  price_max?: string;
}): PurchaseOrderDetail[] => {
  return purchaseOrderDetails.filter((detail) => {
    if (
      searchCriteria.purchase_order_id &&
      detail.purchase_order_id !== searchCriteria.purchase_order_id
    ) {
      return false;
    }

    if (
      searchCriteria.sequence_no &&
      detail.sequence_no !== searchCriteria.sequence_no
    ) {
      return false;
    }

    if (
      searchCriteria.is_active !== undefined &&
      detail.is_active !== searchCriteria.is_active
    ) {
      return false;
    }

    if (
      searchCriteria.is_foc !== undefined &&
      detail.is_foc !== searchCriteria.is_foc
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
      searchCriteria.order_unit_id &&
      detail.order_unit_id !== searchCriteria.order_unit_id
    ) {
      return false;
    }

    if (
      searchCriteria.base_unit_id &&
      detail.base_unit_id !== searchCriteria.base_unit_id
    ) {
      return false;
    }

    if (searchCriteria.has_note !== undefined) {
      const hasNote = detail.note && detail.note.trim() !== "";
      if (hasNote !== searchCriteria.has_note) {
        return false;
      }
    }

    if (
      searchCriteria.order_qty_min &&
      detail.order_qty < parseFloat(searchCriteria.order_qty_min)
    ) {
      return false;
    }

    if (
      searchCriteria.order_qty_max &&
      detail.order_qty > parseFloat(searchCriteria.order_qty_max)
    ) {
      return false;
    }

    if (
      searchCriteria.price_min &&
      detail.price < parseFloat(searchCriteria.price_min)
    ) {
      return false;
    }

    if (
      searchCriteria.price_max &&
      detail.price > parseFloat(searchCriteria.price_max)
    ) {
      return false;
    }

    return true;
  });

};

export type ProductOnOrder = {
  // location_id: string;
  // location_name: string;
  po_id: string;
  po_no: string;
  po_status: string;
  po_date: Date;
  po_delivery_date: Date;
  vendor_id: string;
  vendor_name: string;
  order_unit_id: string;
  order_unit_name: string;
  product_id: string;
  product_name: string;
  product_local_name: string;
  base_unit_id: string;
  base_unit_name: string;
  sku: string;
  on_order_qty: number;
};

export const getProductOnOrder = (product_id: string): ProductOnOrder[] => {

  // get all purchase orders bu purchase_order_id
  const purchaseOrders = purchaseOrderDetails.filter(
    (detail) => detail.product_id === product_id && !detail.deleted_at
  ).map((detail) => detail.purchase_order_id);

  const product = tbProduct.getProductById(product_id);
  if (!product) {
    return [];
  }


  const productOnOrders: ProductOnOrder[] = [];


  for (const purchaseOrderId of purchaseOrders) {

    const purchaseOrder = tbPurchaseOrder.getPurchaseOrderById(purchaseOrderId);
    if (!purchaseOrder) {
      continue;
    }

    // sum order_qty group product in product detail id by purchase_order_id
    const on_order_qty = purchaseOrderDetails.filter(
      (detail) => detail.product_id === product_id && detail.purchase_order_id === purchaseOrderId && !detail.deleted_at
    ).reduce((acc, detail) => acc + detail.order_qty, 0);

    const po_detail = purchaseOrderDetails.filter(
      (detail) => detail.product_id === product_id && detail.purchase_order_id === purchaseOrderId && !detail.deleted_at
    );

    const productOnOrder: ProductOnOrder = {
      po_id: purchaseOrder.id,
      po_no: purchaseOrder.po_no,
      po_status: purchaseOrder.po_status,
      po_date: purchaseOrder.approval_date,
      po_delivery_date: purchaseOrder.delivery_date,
      vendor_id: purchaseOrder.vendor_id,
      vendor_name: purchaseOrder.vendor_name,
      order_unit_id: po_detail[0].order_unit_id,
      order_unit_name: po_detail[0].order_unit_name,
      product_id: product.id,
      product_name: product.name,
      product_local_name: product.local_name,
      base_unit_id: product.inventory_unit_id,
      base_unit_name: product.inventory_unit_name,
      sku: product.sku,
      on_order_qty: on_order_qty  || 0,
    };
    productOnOrders.push(productOnOrder);
  }
  return productOnOrders;
};
