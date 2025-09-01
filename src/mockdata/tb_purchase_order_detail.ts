import { generateId, getCurrentTimestamp } from "@/libs/utils";

export interface PurchaseOrderDetail {
  id: string;
  purchase_order_id: string;
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

export const purchaseOrderDetails: PurchaseOrderDetail[] = [
  {
    id: "550e8400-e29b-41d4-a716-446655440001",
    purchase_order_id: "550e8400-e29b-41d4-a716-446655440001",
    description: "High-performance laptop for IT department",
    sequence_no: 1,
    is_active: true,
    order_qty: 10.00,
    order_unit_id: "unit001",
    order_unit_conversion_factor: 1.00,
    order_unit_name: "ชิ้น",
    base_qty: 10.00,
    base_unit_id: "unit001",
    base_unit_name: "ชิ้น",
    is_foc: false,
    tax_profile_id: "tax001",
    tax_profile_name: "VAT 7%",
    tax_rate: 7.00,
    tax_amount: 3500.00,
    base_tax_amount: 3500.00,
    is_tax_adjustment: false,
    discount_rate: 0.00,
    discount_amount: 0.00,
    base_discount_amount: 0.00,
    is_discount_adjustment: false,
    price: 5000.00,
    sub_total_price: 50000.00,
    net_amount: 50000.00,
    total_price: 53500.00,
    base_price: 5000.00,
    base_sub_total_price: 50000.00,
    base_net_amount: 50000.00,
    base_total_price: 53500.00,
    received_qty: 0.00,
    cancelled_qty: 0.00,
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
    deleted_by_id: null
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440002",
    purchase_order_id: "550e8400-e29b-41d4-a716-446655440001",
    description: "Wireless mouse for laptop setup",
    sequence_no: 2,
    is_active: true,
    order_qty: 10.00,
    order_unit_id: "unit002",
    order_unit_conversion_factor: 1.00,
    order_unit_name: "ชิ้น",
    base_qty: 10.00,
    base_unit_id: "unit002",
    base_unit_name: "ชิ้น",
    is_foc: false,
    tax_profile_id: "tax001",
    tax_profile_name: "VAT 7%",
    tax_rate: 7.00,
      tax_amount: 70.00,
    base_tax_amount: 70.00,
    is_tax_adjustment: false,
    discount_rate: 5.00,
    discount_amount: 50.00,
    base_discount_amount: 50.00,
    is_discount_adjustment: false,
    price: 100.00,
    sub_total_price: 1000.00,
    net_amount: 950.00,
    total_price: 1016.50,
    base_price: 100.00,
    base_sub_total_price: 1000.00,
    base_net_amount: 950.00,
    base_total_price: 1016.50,
    received_qty: 0.00,
    cancelled_qty: 0.00,
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
    deleted_by_id: null
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440003",
    purchase_order_id: "550e8400-e29b-41d4-a716-446655440002",
    description: "Smartphone for sales team",
    sequence_no: 1,
    is_active: true,
    order_qty: 5.00,
    order_unit_id: "unit001",
    order_unit_conversion_factor: 1.00,
    order_unit_name: "ชิ้น",
    base_qty: 5.00,
    base_unit_id: "unit001",
    base_unit_name: "ชิ้น",
    is_foc: false,
    tax_profile_id: "tax001",
    tax_profile_name: "VAT 7%",
    tax_rate: 7.00,
    tax_amount: 1750.00,
    base_tax_amount: 1750.00,
    is_tax_adjustment: false,
    discount_rate: 0.00,
    discount_amount: 0.00,
    base_discount_amount: 0.00,
    is_discount_adjustment: false,
    price: 5000.00,
    sub_total_price: 25000.00,
    net_amount: 25000.00,
    total_price: 26750.00,
    base_price: 5000.00,
    base_sub_total_price: 25000.00,
    base_net_amount: 25000.00,
    base_total_price: 26750.00,
    received_qty: 0.00,
    cancelled_qty: 0.00,
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
    deleted_by_id: null
  }
];

// CREATE - สร้าง PurchaseOrderDetail ใหม่
export const createPurchaseOrderDetail = (data: Omit<PurchaseOrderDetail, 'id' | 'created_at' >): PurchaseOrderDetail => {
  const newDetail: PurchaseOrderDetail = {
    ...data,
    id: generateId(),
    created_at: getCurrentTimestamp(),
    created_by_id: data.created_by_id || null
  };
  
  purchaseOrderDetails.push(newDetail);
  return newDetail;
};

// READ - อ่าน PurchaseOrderDetail ทั้งหมด
export const getAllPurchaseOrderDetails = (): PurchaseOrderDetail[] => {
  return purchaseOrderDetails.filter(detail => !detail.deleted_at);
};

// READ - อ่าน PurchaseOrderDetail ตาม ID
export const getPurchaseOrderDetailById = (id: string): PurchaseOrderDetail | null => {
  const detail = purchaseOrderDetails.find(detail => detail.id === id && !detail.deleted_at);
  return detail || null;
};

// READ - อ่าน PurchaseOrderDetail ตาม purchase_order_id
export const getPurchaseOrderDetailsByOrder = (orderId: string): PurchaseOrderDetail[] => {
  return purchaseOrderDetails.filter(detail => 
    detail.purchase_order_id === orderId && !detail.deleted_at
  );
};

// READ - อ่าน PurchaseOrderDetail ตาม sequence_no
export const getPurchaseOrderDetailBySequence = (orderId: string, sequenceNo: number): PurchaseOrderDetail | null => {
  const detail = purchaseOrderDetails.find(detail => 
    detail.purchase_order_id === orderId && 
    detail.sequence_no === sequenceNo && 
    !detail.deleted_at
  );
  return detail || null;
};

// READ - อ่าน PurchaseOrderDetail ที่ active
export const getActivePurchaseOrderDetails = (): PurchaseOrderDetail[] => {
  return purchaseOrderDetails.filter(detail => detail.is_active && !detail.deleted_at);
};

// READ - อ่าน PurchaseOrderDetail ที่ inactive
export const getInactivePurchaseOrderDetails = (): PurchaseOrderDetail[] => {
  return purchaseOrderDetails.filter(detail => !detail.is_active && !detail.deleted_at);
};

// READ - อ่าน PurchaseOrderDetail ที่มี note
export const getPurchaseOrderDetailsWithNote = (): PurchaseOrderDetail[] => {
  return purchaseOrderDetails.filter(detail => 
    detail.note && detail.note.trim() !== '' && !detail.deleted_at
  );
};

// READ - อ่าน PurchaseOrderDetail ที่เป็น FOC
export const getFocPurchaseOrderDetails = (): PurchaseOrderDetail[] => {
  return purchaseOrderDetails.filter(detail => detail.is_foc && !detail.deleted_at);
};

// READ - อ่าน PurchaseOrderDetail ที่ไม่ใช่ FOC
export const getNonFocPurchaseOrderDetails = (): PurchaseOrderDetail[] => {
  return purchaseOrderDetails.filter(detail => !detail.is_foc && !detail.deleted_at);
};

// READ - อ่าน PurchaseOrderDetail ตาม tax_profile_id
export const getPurchaseOrderDetailsByTaxProfile = (taxProfileId: string): PurchaseOrderDetail[] => {
  return purchaseOrderDetails.filter(detail => 
    detail.tax_profile_id === taxProfileId && !detail.deleted_at
  );
};

// READ - อ่าน PurchaseOrderDetail ตาม order_unit_id
export const getPurchaseOrderDetailsByOrderUnit = (orderUnitId: string): PurchaseOrderDetail[] => {
  return purchaseOrderDetails.filter(detail => 
    detail.order_unit_id === orderUnitId && !detail.deleted_at
  );
};

// READ - อ่าน PurchaseOrderDetail ตาม base_unit_id
export const getPurchaseOrderDetailsByBaseUnit = (baseUnitId: string): PurchaseOrderDetail[] => {
  return purchaseOrderDetails.filter(detail => 
    detail.base_unit_id === baseUnitId && !detail.deleted_at
  );
};

// READ - ค้นหา PurchaseOrderDetail แบบ fuzzy search
export const searchPurchaseOrderDetails = (searchTerm: string): PurchaseOrderDetail[] => {
  const lowerSearchTerm = searchTerm.toLowerCase();
  return purchaseOrderDetails.filter(detail => 
    !detail.deleted_at && (
      detail.description?.toLowerCase().includes(lowerSearchTerm) ||
      detail.order_unit_name.toLowerCase().includes(lowerSearchTerm) ||
      detail.base_unit_name.toLowerCase().includes(lowerSearchTerm) ||
      detail.tax_profile_name.toLowerCase().includes(lowerSearchTerm) ||
      detail.note?.toLowerCase().includes(lowerSearchTerm)
    )
  );
};

// UPDATE - อัปเดต PurchaseOrderDetail
export const updatePurchaseOrderDetail = (id: string, updateData: Partial<Omit<PurchaseOrderDetail, 'id' | 'created_at' | 'created_by_id'>>): PurchaseOrderDetail | null => {
  const index = purchaseOrderDetails.findIndex(detail => detail.id === id);
  
  if (index === -1) {
    return null;
  }
  
  purchaseOrderDetails[index] = {
    ...purchaseOrderDetails[index],
    ...updateData,
    updated_at: getCurrentTimestamp()
  };
  
  return purchaseOrderDetails[index];
};

// UPDATE - อัปเดต PurchaseOrderDetail description
export const updatePurchaseOrderDetailDescription = (id: string, description: string): PurchaseOrderDetail | null => {
  return updatePurchaseOrderDetail(id, { description });
};

// UPDATE - อัปเดต PurchaseOrderDetail sequence_no
export const updatePurchaseOrderDetailSequence = (id: string, sequenceNo: number): PurchaseOrderDetail | null => {
  return updatePurchaseOrderDetail(id, { sequence_no: sequenceNo });
};

// UPDATE - อัปเดต PurchaseOrderDetail active status
export const updatePurchaseOrderDetailActiveStatus = (id: string, isActive: boolean): PurchaseOrderDetail | null => {
  return updatePurchaseOrderDetail(id, { is_active: isActive });
};

// UPDATE - อัปเดต PurchaseOrderDetail order_qty
export const updatePurchaseOrderDetailOrderQty = (id: string, orderQty: number): PurchaseOrderDetail | null => {
  return updatePurchaseOrderDetail(id, { order_qty: orderQty });
};

// UPDATE - อัปเดต PurchaseOrderDetail base_qty
export const updatePurchaseOrderDetailBaseQty = (id: string, baseQty: number): PurchaseOrderDetail | null => {
  return updatePurchaseOrderDetail(id, { base_qty: baseQty });
};

// UPDATE - อัปเดต PurchaseOrderDetail price
export const updatePurchaseOrderDetailPrice = (id: string, price: number): PurchaseOrderDetail | null => {
  return updatePurchaseOrderDetail(id, { price });
};

// UPDATE - อัปเดต PurchaseOrderDetail note
export const updatePurchaseOrderDetailNote = (id: string, note: string): PurchaseOrderDetail | null => {
  return updatePurchaseOrderDetail(id, { note });
};

// DELETE - ลบ PurchaseOrderDetail (soft delete)
export const deletePurchaseOrderDetail = (id: string, deletedById: string): boolean => {
  const index = purchaseOrderDetails.findIndex(detail => detail.id === id);
  
  if (index === -1) {
    return false;
  }
  
  purchaseOrderDetails[index] = {
    ...purchaseOrderDetails[index],
    deleted_at: getCurrentTimestamp(),
    deleted_by_id: deletedById
  };
  
  return true;
};

// DELETE - ลบ PurchaseOrderDetail แบบถาวร
export const hardDeletePurchaseOrderDetail = (id: string): boolean => {
  const index = purchaseOrderDetails.findIndex(detail => detail.id === id);
  
  if (index === -1) {
    return false;
  }
  
  purchaseOrderDetails.splice(index, 1);
  return true;
};

// DELETE - ลบ PurchaseOrderDetail ตาม purchase_order_id
export const deletePurchaseOrderDetailsByOrder = (orderId: string, deletedById: string): number => {
  let deletedCount = 0;
  
  purchaseOrderDetails.forEach(detail => {
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
  return purchaseOrderDetails.filter(detail => detail.is_active).length;
};

// Utility function สำหรับนับจำนวน PurchaseOrderDetail ที่ inactive
export const getInactivePurchaseOrderDetailCount = (): number => {
  return purchaseOrderDetails.filter(detail => !detail.is_active).length;
};

// Utility function สำหรับนับจำนวน PurchaseOrderDetail ตาม purchase_order_id
export const getPurchaseOrderDetailCountByOrder = (orderId: string): number => {
  return purchaseOrderDetails.filter(detail => detail.purchase_order_id === orderId).length;
};

// Utility function สำหรับนับจำนวน PurchaseOrderDetail ที่เป็น FOC
export const getFocPurchaseOrderDetailCount = (): number => {
  return purchaseOrderDetails.filter(detail => detail.is_foc).length;
};

// Utility function สำหรับนับจำนวน PurchaseOrderDetail ที่ไม่ใช่ FOC
export const getNonFocPurchaseOrderDetailCount = (): number => {
  return purchaseOrderDetails.filter(detail => !detail.is_foc).length;
};

// Utility function สำหรับตรวจสอบ PurchaseOrderDetail ที่ถูกลบแล้ว
export const getDeletedPurchaseOrderDetails = (): PurchaseOrderDetail[] => {
  return purchaseOrderDetails.filter(detail => detail.deleted_at !== null);
};

// Utility function สำหรับกู้คืน PurchaseOrderDetail ที่ถูกลบแล้ว
export const restorePurchaseOrderDetail = (id: string): boolean => {
  const index = purchaseOrderDetails.findIndex(detail => detail.id === id);
  
  if (index === -1) {
    return false;
  }
  
  if (purchaseOrderDetails[index].deleted_at) {
    purchaseOrderDetails[index] = {
      ...purchaseOrderDetails[index],
      deleted_at: null,
      deleted_by_id: null
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
  return purchaseOrderDetails.filter(detail => {
    if (searchCriteria.purchase_order_id && detail.purchase_order_id !== searchCriteria.purchase_order_id) {
      return false;
    }
    
    if (searchCriteria.sequence_no && detail.sequence_no !== searchCriteria.sequence_no) {
      return false;
    }
    
    if (searchCriteria.is_active !== undefined && detail.is_active !== searchCriteria.is_active) {
      return false;
    }
    
    if (searchCriteria.is_foc !== undefined && detail.is_foc !== searchCriteria.is_foc) {
      return false;
    }
    
    if (searchCriteria.tax_profile_id && detail.tax_profile_id !== searchCriteria.tax_profile_id) {
      return false;
    }
    
    if (searchCriteria.order_unit_id && detail.order_unit_id !== searchCriteria.order_unit_id) {
      return false;
    }
    
    if (searchCriteria.base_unit_id && detail.base_unit_id !== searchCriteria.base_unit_id) {
      return false;
    }
    
    if (searchCriteria.has_note !== undefined) {
      const hasNote = detail.note && detail.note.trim() !== '';
      if (hasNote !== searchCriteria.has_note) {
        return false;
      }
    }
    
    if (searchCriteria.order_qty_min && detail.order_qty < parseFloat(searchCriteria.order_qty_min)) {
      return false;
    }
    
    if (searchCriteria.order_qty_max && detail.order_qty > parseFloat(searchCriteria.order_qty_max)) {
      return false;
    }
    
    if (searchCriteria.price_min && detail.price < parseFloat(searchCriteria.price_min)) {
      return false;
    }
    
    if (searchCriteria.price_max && detail.price > parseFloat(searchCriteria.price_max)) {
      return false;
    }
    
    return true;
  });
};
