import { generateId, getCurrentTimestamp } from "@/libs/utils";

export interface PurchaseOrder {
  id: string;
  po_no: string;
  po_status: "draft" | "submitted" | "sent" | "rejected"| "partially_received" | "completed";
  description: string | null;
  order_date: Date;
  delivery_date: Date;
  workflow_id: string;
  workflow_name: string;
  workflow_history: any;
  workflow_current_stage: string | null;
  workflow_previous_stage: string | null;
  workflow_next_stage: string | null;
  user_action: any;
  last_action: "submit" | "approve" | "reject" | "complete";
  last_action_at_date: Date;
  last_action_by_id: string | null;
  last_action_by_name: string;
  vendor_id: string;
  vendor_name: string;
  currency_id: string;
  currency_name: string;
  exchange_rate: number;
  approval_date: Date;
  email: string | null;
  buyer_id: string;
  buyer_name: string;
  credit_term_id: string;
  credit_term_name: string;
  credit_term_value: number;
  remarks: string | null;
  history: any;
  is_active: boolean;
  note: string | null;
  info: any;
  dimension: any;
  doc_version: string;
  created_at: Date;
  created_by_id: string | null;
  updated_at: Date;
  updated_by_id: string | null;
  deleted_at: Date | null;
  deleted_by_id: string | null;
}

export const purchaseOrders: PurchaseOrder[] = [
  {
    id: "550e8400-e29b-41d4-a716-446655440001",
    po_no: "PO-2024-001",
    po_status: "sent",
    description: "Monthly laptop order for IT department",
    order_date: new Date("2024-01-15"),
    delivery_date: new Date("2024-01-25"),
    workflow_id: "wf001",
    workflow_name: "Purchase Order Approval",
    workflow_history: [{ stage: "draft", date: "2024-01-15", user: "user1" }],
    workflow_current_stage: "sent",
    workflow_previous_stage: "submitted",
    workflow_next_stage: "completed",
    user_action: { action: "approve", comment: "Approved for purchase" },
    last_action: "approve",
    last_action_at_date: new Date("2024-01-16"),
    last_action_by_id: "user2",
    last_action_by_name: "John Manager",
    vendor_id: "550e8400-e29b-41d4-a716-446655440001",
    vendor_name: "Tech Solutions Co.",
    currency_id: "550e8400-e29b-41d4-a716-446655440003",
    currency_name: "THB",
    exchange_rate: 1.00,
    approval_date: new Date("2024-01-16"),
    email: "purchase@techsolutions.com",
    buyer_id: "buyer1",
    buyer_name: "Jane Buyer",
    credit_term_id: "ct001",
    credit_term_name: "Net 30",
    credit_term_value: 30,
    remarks: "Priority order for Q1",
    history: [{ action: "created", date: "2024-01-15", user: "user1" }],
    is_active: true,
    note: "Monthly laptop order",
    info: { category: "IT Equipment", priority: "High" },
    dimension: { department: "IT", region: "Central" },
    doc_version: "1.0",
    created_at: new Date("2024-01-15T10:30:00Z"),
    created_by_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    updated_at: new Date("2024-01-15T10:30:00Z"),
    updated_by_id: "user2",
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440002",
    po_no: "PO-2024-002",
    po_status: "sent",
    description: "Smartphone inventory restock",
    order_date: new Date("2024-01-16"),
    delivery_date: new Date("2024-01-22"),
    workflow_id: "wf001",
    workflow_name: "Purchase Order Approval",
    workflow_history: [{ stage: "draft", date: "2024-01-16", user: "user3" }],
    workflow_current_stage: "sent",
    workflow_previous_stage: "draft",
    workflow_next_stage: "sent",
    user_action: { action: "submit", comment: "Submitted for approval" },
    last_action: "submit",
    last_action_at_date: new Date("2024-01-16"),
    last_action_by_id: "user3",
    last_action_by_name: "Bob Buyer",
    vendor_id: "550e8400-e29b-41d4-a716-446655440002",
    vendor_name: "Mobile World Ltd.",
    currency_id: "550e8400-e29b-41d4-a716-446655440003",
    currency_name: "THB",
    exchange_rate: 1.00,
    approval_date: new Date("2024-01-16"),
    email: "orders@mobileworld.com",
    buyer_id: "buyer2",
    buyer_name: "Bob Buyer",
    credit_term_id: "ct002",
    credit_term_name: "Net 45",
    credit_term_value: 45,
    remarks: "Standard restock order",
    history: [{ action: "created", date: "2024-01-16", user: "user3" }],
    is_active: true,
    note: "Smartphone inventory restock",
    info: { category: "Mobile Devices", priority: "Medium" },
    dimension: { department: "Sales", region: "All" },
    doc_version: "1.0",
    created_at: new Date("2024-01-15T10:30:00Z"),
    created_by_id: "1bfdb891-58ee-499c-8115-34a964de8122",
    updated_at: new Date("2024-01-15T10:30:00Z"),
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440003",
    po_no: "PO-2024-003",
    po_status: "sent",
    description: "Office supplies order",
    order_date: new Date("2024-01-17"),
    delivery_date: new Date("2024-01-20"),
    workflow_id: "wf001",
    workflow_name: "Purchase Order Approval",
    workflow_history: [{ stage: "draft", date: "2024-01-17", user: "user4" }],
    workflow_current_stage: "sent",
    workflow_previous_stage: "submitted",
    workflow_next_stage: null,
    user_action: { action: "reject", comment: "Budget exceeded" },
    last_action: "reject",
    last_action_at_date: new Date("2024-01-18"),
    last_action_by_id: "user5",
    last_action_by_name: "Mary Manager",
    vendor_id: "550e8400-e29b-41d4-a716-446655440003",
    vendor_name: "Office Supplies Co.",
    currency_id: "550e8400-e29b-41d4-a716-446655440003",
    currency_name: "THB",
    exchange_rate: 1.00,
    approval_date: new Date("2024-01-18"),
    email: "orders@officesupplies.com",
    buyer_id: "buyer3",
    buyer_name: "Alice Buyer",
    credit_term_id: "ct001",
    credit_term_name: "Net 30",
      credit_term_value: 30,
    remarks: "Order rejected due to budget constraints",
    history: [{ action: "created", date: "2024-01-17", user: "user4" }],
    is_active: false,
    note: "Order cancelled due to budget issues",
    info: { category: "Office Supplies", priority: "Low" },
    dimension: { department: "Admin", region: "All" },
    doc_version: "1.0",
    created_at: new Date("2024-01-15T10:30:00Z"),
    created_by_id: "3c5280a7-492e-421d-b739-7447455ce99e",
    updated_at: new Date("2024-01-15T10:30:00Z"),
    updated_by_id: "user5",
    deleted_at: null,
    deleted_by_id: null,
  },
];

// CREATE - สร้าง PurchaseOrder ใหม่
export const createPurchaseOrder = (
  data: Omit<PurchaseOrder, "id" | "created_at">
): PurchaseOrder => {
  const newPurchaseOrder: PurchaseOrder = {
    ...data,
    id: generateId(),
    created_at: new Date(getCurrentTimestamp()),
    created_by_id: data.created_by_id || "system",
  };

  purchaseOrders.push(newPurchaseOrder);
  return newPurchaseOrder;
};

// READ - อ่าน PurchaseOrder ทั้งหมด
export const getAllPurchaseOrders = (): PurchaseOrder[] => {
  return purchaseOrders.filter((po) => !po.deleted_at);
};

// READ - อ่าน PurchaseOrder ตาม ID
export const getPurchaseOrderById = (id: string): PurchaseOrder | null => {
  const po = purchaseOrders.find((po) => po.id === id && !po.deleted_at);
  return po || null;
};

// READ - อ่าน PurchaseOrder ตาม po_no
export const getPurchaseOrderByPoNo = (poNo: string): PurchaseOrder | null => {
  const po = purchaseOrders.find((po) => po.po_no === poNo && !po.deleted_at);
  return po || null;
};

// READ - อ่าน PurchaseOrder ตาม po_status
export const getPurchaseOrdersByStatus = (
  status: PurchaseOrder["po_status"]
): PurchaseOrder[] => {
  return purchaseOrders.filter(
    (po) => po.po_status === status && !po.deleted_at
  );
};

// READ - อ่าน PurchaseOrder ตาม vendor_id
export const getPurchaseOrdersByVendor = (
  vendorId: string
): PurchaseOrder[] => {
  return purchaseOrders.filter(
    (po) => po.vendor_id === vendorId && !po.deleted_at
  );
};

// READ - อ่าน PurchaseOrder ตาม buyer_id
export const getPurchaseOrdersByBuyer = (buyerId: string): PurchaseOrder[] => {
  return purchaseOrders.filter(
    (po) => po.buyer_id === buyerId && !po.deleted_at
  );
};

// READ - อ่าน PurchaseOrder ที่ active
export const getActivePurchaseOrders = (): PurchaseOrder[] => {
  return purchaseOrders.filter((po) => po.is_active && !po.deleted_at);
};

// READ - อ่าน PurchaseOrder ที่ inactive
export const getInactivePurchaseOrders = (): PurchaseOrder[] => {
  return purchaseOrders.filter((po) => !po.is_active && !po.deleted_at);
};

// READ - อ่าน PurchaseOrder ที่มี note
export const getPurchaseOrdersWithNote = (): PurchaseOrder[] => {
  return purchaseOrders.filter(
    (po) => po.note && po.note.trim() !== "" && !po.deleted_at
  );
};

// READ - อ่าน PurchaseOrder ตามวันที่สั่งซื้อ
export const getPurchaseOrdersByOrderDate = (
  orderDate: Date
): PurchaseOrder[] => {
  return purchaseOrders.filter(
    (po) => po.order_date === orderDate && !po.deleted_at
  );
};

// READ - อ่าน PurchaseOrders ตามช่วงวันที่สั่งซื้อ
export const getPurchaseOrdersByOrderDateRange = (
  startDate: Date,
  endDate: string
): PurchaseOrder[] => {
  return purchaseOrders.filter((po) => {
    const orderDate = new Date(po.order_date);
    const start = new Date(startDate);
    const end = new Date(endDate);
    return orderDate >= start && orderDate <= end && !po.deleted_at;
  });
};

// READ - อ่าน PurchaseOrders ตามวันที่ส่งมอบ
export const getPurchaseOrdersByDeliveryDate = (
  deliveryDate: Date
): PurchaseOrder[] => {
  return purchaseOrders.filter(
    (po) => po.delivery_date === deliveryDate && !po.deleted_at
  );
};

// READ - อ่าน PurchaseOrders ตามช่วงวันที่ส่งมอบ
export const getPurchaseOrdersByDeliveryDateRange = (
  startDate: Date,
  endDate: string
): PurchaseOrder[] => {
  return purchaseOrders.filter((po) => {
    const deliveryDate = new Date(po.delivery_date);
    const start = new Date(startDate);
    const end = new Date(endDate);
    return deliveryDate >= start && deliveryDate <= end && !po.deleted_at;
  });
};

// READ - อ่าน PurchaseOrders ที่รอการอนุมัติ
export const getSentPurchaseOrders = (): PurchaseOrder[] => {
  return purchaseOrders.filter(
    (po) => po.po_status === "sent" && !po.deleted_at
  );
};

export const getSubmittedPurchaseOrders = (): PurchaseOrder[] => {
  return purchaseOrders.filter(
    (po) => po.po_status === "submitted" && !po.deleted_at
  );
};

export const getPartiallyReceivedPurchaseOrders = (): PurchaseOrder[] => {
  return purchaseOrders.filter(
    (po) => po.po_status === "partially_received" && !po.deleted_at
  );
};

export const getRejectedPurchaseOrders = (): PurchaseOrder[] => {
  return purchaseOrders.filter(
    (po) => po.po_status === "rejected" && !po.deleted_at
  );
};

// READ - อ่าน PurchaseOrders ที่เสร็จสิ้น
export const getCompletedPurchaseOrders = (): PurchaseOrder[] => {
  return purchaseOrders.filter(
    (po) => po.po_status === "completed" && !po.deleted_at
  );
};

// READ - อ่าน PurchaseOrders ที่มี approval_date
export const getPurchaseOrdersWithApprovalDate = (): PurchaseOrder[] => {
  return purchaseOrders.filter((po) => po.approval_date && !po.deleted_at);
};

// READ - อ่าน PurchaseOrders ที่ไม่มี approval_date
export const getPurchaseOrdersWithoutApprovalDate = (): PurchaseOrder[] => {
  return purchaseOrders.filter((po) => !po.approval_date && !po.deleted_at);
};

// READ - ค้นหา PurchaseOrder แบบ fuzzy search
export const searchPurchaseOrders = (searchTerm: string): PurchaseOrder[] => {
  const lowerSearchTerm = searchTerm.toLowerCase();
  return purchaseOrders.filter(
    (po) =>
      !po.deleted_at &&
      (po.po_no.toLowerCase().includes(lowerSearchTerm) ||
        po.description?.toLowerCase().includes(lowerSearchTerm) ||
        po.vendor_name.toLowerCase().includes(lowerSearchTerm) ||
        po.buyer_name.toLowerCase().includes(lowerSearchTerm) ||
        po.note?.toLowerCase().includes(lowerSearchTerm) ||
        po.remarks?.toLowerCase().includes(lowerSearchTerm))
  );
};

// UPDATE - อัปเดต PurchaseOrder
export const updatePurchaseOrder = (
  id: string,
  updateData: Partial<
    Omit<PurchaseOrder, "id" | "created_at" | "created_by_id">
  >
): PurchaseOrder | null => {
  const index = purchaseOrders.findIndex((po) => po.id === id);

  if (index === -1) {
    return null;
  }

  purchaseOrders[index] = {
    ...purchaseOrders[index],
    ...updateData,
    updated_at: new Date(getCurrentTimestamp()),
  };

  return purchaseOrders[index];
};

// UPDATE - อัปเดต PurchaseOrder status
export const updatePurchaseOrderStatus = (
  id: string,
  status: PurchaseOrder["po_status"]
): PurchaseOrder | null => {
  return updatePurchaseOrder(id, { po_status: status });
};

// UPDATE - อัปเดต PurchaseOrder description
export const updatePurchaseOrderDescription = (
  id: string,
  description: string
): PurchaseOrder | null => {
  return updatePurchaseOrder(id, { description });
};

// UPDATE - อัปเดต PurchaseOrder delivery date
export const updatePurchaseOrderDeliveryDate = (
  id: string,
  deliveryDate: Date
): PurchaseOrder | null => {
  return updatePurchaseOrder(id, { delivery_date: deliveryDate });
};

// UPDATE - อัปเดต PurchaseOrder approval date
export const updatePurchaseOrderApprovalDate = (
  id: string,
  approvalDate: Date
): PurchaseOrder | null => {
  return updatePurchaseOrder(id, { approval_date: approvalDate });
};

// UPDATE - อัปเดต PurchaseOrder note
export const updatePurchaseOrderNote = (
  id: string,
  note: string
): PurchaseOrder | null => {
  return updatePurchaseOrder(id, { note });
};

// UPDATE - อัปเดต PurchaseOrder remarks
export const updatePurchaseOrderRemarks = (
  id: string,
  remarks: string
): PurchaseOrder | null => {
  return updatePurchaseOrder(id, { remarks });
};

// UPDATE - อัปเดต PurchaseOrder active status
export const updatePurchaseOrderActiveStatus = (
  id: string,
  isActive: boolean
): PurchaseOrder | null => {
  return updatePurchaseOrder(id, { is_active: isActive });
};

// UPDATE - อัปเดต PurchaseOrder workflow stage
export const updatePurchaseOrderWorkflowStage = (
  id: string,
  currentStage: string,
  previousStage: string,
  nextStage: string
): PurchaseOrder | null => {
  return updatePurchaseOrder(id, {
    workflow_current_stage: currentStage,
    workflow_previous_stage: previousStage,
    workflow_next_stage: nextStage,
  });
};

// UPDATE - อัปเดต PurchaseOrder last action
export const updatePurchaseOrderLastAction = (
  id: string,
  lastAction: PurchaseOrder["last_action"],
  lastActionById: string,
  lastActionByName: string
): PurchaseOrder | null => {
  return updatePurchaseOrder(id, {
    last_action: lastAction,
    last_action_by_id: lastActionById,
    last_action_by_name: lastActionByName,
    last_action_at_date: new Date(getCurrentTimestamp()),
  });
};

// DELETE - ลบ PurchaseOrder (soft delete)
export const deletePurchaseOrder = (
  id: string,
  deletedById: string
): boolean => {
  const index = purchaseOrders.findIndex((po) => po.id === id);

  if (index === -1) {
    return false;
  }

  purchaseOrders[index] = {
    ...purchaseOrders[index],
    deleted_at: new Date(getCurrentTimestamp()),
    deleted_by_id: deletedById,
  };

  return true;
};

// DELETE - ลบ PurchaseOrder แบบถาวร
export const hardDeletePurchaseOrder = (id: string): boolean => {
  const index = purchaseOrders.findIndex((po) => po.id === id);

  if (index === -1) {
    return false;
  }

  purchaseOrders.splice(index, 1);
  return true;
};

// DELETE - ลบ PurchaseOrder ตาม vendor_id
export const deletePurchaseOrdersByVendor = (
  vendorId: string,
  deletedById: string
): number => {
  let deletedCount = 0;

  purchaseOrders.forEach((po) => {
    if (po.vendor_id === vendorId && !po.deleted_at) {
      po.deleted_at = new Date(getCurrentTimestamp());
      po.deleted_by_id = deletedById;
      deletedCount++;
    }
  });

  return deletedCount;
};

// DELETE - ลบ PurchaseOrder ตาม buyer_id
export const deletePurchaseOrdersByBuyer = (
  buyerId: string,
  deletedById: string
): number => {
  let deletedCount = 0;

  purchaseOrders.forEach((po) => {
    if (po.buyer_id === buyerId && !po.deleted_at) {
      po.deleted_at = new Date(getCurrentTimestamp());
      po.deleted_by_id = deletedById;
      deletedCount++;
    }
  });

  return deletedCount;
};

// DELETE - ลบ PurchaseOrder ตาม status
export const deletePurchaseOrdersByStatus = (
  status: PurchaseOrder["po_status"],
  deletedById: string
): number => {
  let deletedCount = 0;

  purchaseOrders.forEach((po) => {
    if (po.po_status === status && !po.deleted_at) {
      po.deleted_at = new Date(getCurrentTimestamp());
      po.deleted_by_id = deletedById;
      deletedCount++;
    }
  });

  return deletedCount;
};

// Utility function สำหรับล้างข้อมูลทั้งหมด (ใช้สำหรับ testing)
export const clearAllPurchaseOrders = (): void => {
  purchaseOrders.length = 0;
};

// Utility function สำหรับนับจำนวน PurchaseOrder
export const getPurchaseOrderCount = (): number => {
  return purchaseOrders.length;
};

// Utility function สำหรับนับจำนวน PurchaseOrder ที่ active
export const getActivePurchaseOrderCount = (): number => {
  return purchaseOrders.filter((po) => po.is_active).length;
};

// Utility function สำหรับนับจำนวน PurchaseOrder ที่ inactive
export const getInactivePurchaseOrderCount = (): number => {
  return purchaseOrders.filter((po) => !po.is_active).length;
};

// Utility function สำหรับนับจำนวน PurchaseOrder ตาม status
export const getPurchaseOrderCountByStatus = (
  status: PurchaseOrder["po_status"]
): number => {
  return purchaseOrders.filter((po) => po.po_status === status).length;
};

// Utility function สำหรับนับจำนวน PurchaseOrder ตาม vendor_id
export const getPurchaseOrderCountByVendor = (vendorId: string): number => {
  return purchaseOrders.filter((po) => po.vendor_id === vendorId).length;
};

// Utility function สำหรับนับจำนวน PurchaseOrder ตาม buyer_id
export const getPurchaseOrderCountByBuyer = (buyerId: string): number => {
  return purchaseOrders.filter((po) => po.buyer_id === buyerId).length;
};

// Utility function สำหรับตรวจสอบ PurchaseOrder ที่ถูกลบแล้ว
export const getDeletedPurchaseOrders = (): PurchaseOrder[] => {
  return purchaseOrders.filter((po) => po.deleted_at !== null);
};

// Utility function สำหรับกู้คืน PurchaseOrder ที่ถูกลบแล้ว
export const restorePurchaseOrder = (id: string): boolean => {
  const index = purchaseOrders.findIndex((po) => po.id === id);

  if (index === -1) {
    return false;
  }

  if (purchaseOrders[index].deleted_at) {
    purchaseOrders[index] = {
      ...purchaseOrders[index],
      deleted_at: null,
      deleted_by_id: null,
    };
    return true;
  }

  return false;
};

// Utility function สำหรับค้นหา PurchaseOrder แบบ advanced search
export const searchPurchaseOrdersAdvanced = (searchCriteria: {
  po_status?: PurchaseOrder["po_status"];
  vendor_id?: string;
  buyer_id?: string;
  currency_id?: string;
  credit_term_id?: string;
  is_active?: boolean;
  has_note?: boolean;
  has_remarks?: boolean;
  has_approval_date?: boolean;
  order_date_from?: string;
  order_date_to?: string;
  delivery_date_from?: string;
  delivery_date_to?: string;
}): PurchaseOrder[] => {
  return purchaseOrders.filter((po) => {
    if (searchCriteria.po_status && po.po_status !== searchCriteria.po_status) {
      return false;
    }

    if (searchCriteria.vendor_id && po.vendor_id !== searchCriteria.vendor_id) {
      return false;
    }

    if (searchCriteria.buyer_id && po.buyer_id !== searchCriteria.buyer_id) {
      return false;
    }

    if (
      searchCriteria.currency_id &&
      po.currency_id !== searchCriteria.currency_id
    ) {
      return false;
    }

    if (
      searchCriteria.credit_term_id &&
      po.credit_term_id !== searchCriteria.credit_term_id
    ) {
      return false;
    }

    if (
      searchCriteria.is_active !== undefined &&
      po.is_active !== searchCriteria.is_active
    ) {
      return false;
    }

    if (searchCriteria.has_note !== undefined) {
      const hasNote = po.note && po.note.trim() !== "";
      if (hasNote !== searchCriteria.has_note) {
        return false;
      }
    }

    if (searchCriteria.has_remarks !== undefined) {
      const hasRemarks = po.remarks && po.remarks.trim() !== "";
      if (hasRemarks !== searchCriteria.has_remarks) {
        return false;
      }
    }

    if (searchCriteria.has_approval_date !== undefined) {
      const hasApprovalDate = po.approval_date !== null;
      if (hasApprovalDate !== searchCriteria.has_approval_date) {
        return false;
      }
    }

    if (searchCriteria.order_date_from || searchCriteria.order_date_to) {
      const orderDate = new Date(po.order_date);
      if (searchCriteria.order_date_from) {
        const fromDate = new Date(searchCriteria.order_date_from);
        if (orderDate < fromDate) return false;
      }
      if (searchCriteria.order_date_to) {
        const toDate = new Date(searchCriteria.order_date_to);
        if (orderDate > toDate) return false;
      }
    }

    if (searchCriteria.delivery_date_from || searchCriteria.delivery_date_to) {
      const deliveryDate = new Date(po.delivery_date);
      if (searchCriteria.delivery_date_from) {
        const fromDate = new Date(searchCriteria.delivery_date_from);
        if (deliveryDate < fromDate) return false;
      }
      if (searchCriteria.delivery_date_to) {
        const toDate = new Date(searchCriteria.delivery_date_to);
        if (deliveryDate > toDate) return false;
      }
    }

    return true;
  });
};
