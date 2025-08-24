import { TbPurchaseOrder } from './types';
import { generateUuid, getCurrentTimestamp } from './utils';

// =============== MOCK TB_PURCHASE_ORDER DATA ===============
export let mockTbPurchaseOrder: TbPurchaseOrder[] = [
  {
    id: "po-001",
    purchase_order_no: "PO-2024-001",
    reference_no: "REF-KIT-001",
    purchase_request_id: "pr-001",
    purchase_request_no: "PR-2024-001",
    order_date: "2024-01-17T00:00:00.000Z",
    delivery_date: "2024-01-25T00:00:00.000Z",
    vendor_id: "vendor-001",
    vendor_name: "ABC Food Suppliers",
    delivery_point_id: "dp-001",
    delivery_point_name: "Main Kitchen",
    total_amount: 15750.00,
    currency_id: "cur-001-thb",
    currency_name: "Thai Baht",
    credit_term_id: "ct-004",
    credit_term_name: "Net 30 Days",
    status: "confirmed",
    note: "Weekly ingredient restocking - confirmed by vendor",
    info: {
      order_history: [
        {
          action: "created",
          timestamp: "2024-01-17T09:00:00.000Z",
          user_id: "user-002"
        },
        {
          action: "sent_to_vendor",
          timestamp: "2024-01-17T10:30:00.000Z",
          user_id: "user-002",
          email: "orders@abcfood.co.th"
        },
        {
          action: "confirmed_by_vendor",
          timestamp: "2024-01-17T14:20:00.000Z",
          confirmation_no: "ABC-CONF-001"
        }
      ],
      delivery_instructions: "Deliver to main kitchen entrance",
      items_count: 8,
      payment_terms: "Net 30 days from delivery"
    },
    dimension: {},
    doc_version: 2,
    created_at: "2024-01-17T09:00:00.000Z",
    created_by_id: "user-002",
    updated_at: "2024-01-17T14:20:00.000Z",
    updated_by_id: "system",
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "po-002",
    purchase_order_no: "PO-2024-002",
    reference_no: "REF-DAIRY-002",
    purchase_request_id: null,
    purchase_request_no: null,
    order_date: "2024-01-18T00:00:00.000Z",
    delivery_date: "2024-01-22T00:00:00.000Z",
    vendor_id: "vendor-004",
    vendor_name: "Siam Dairy Products",
    delivery_point_id: "dp-005",
    delivery_point_name: "Cold Storage",
    total_amount: 8950.00,
    currency_id: "cur-001-thb",
    currency_name: "Thai Baht",
    credit_term_id: "ct-003",
    credit_term_name: "Net 15 Days",
    status: "partial_received",
    note: "Emergency dairy order - partial delivery received",
    info: {
      order_history: [
        {
          action: "created",
          timestamp: "2024-01-18T08:00:00.000Z",
          user_id: "user-002"
        },
        {
          action: "sent_to_vendor",
          timestamp: "2024-01-18T09:15:00.000Z",
          user_id: "user-002",
          email: "orders@siamdairy.com"
        },
        {
          action: "confirmed_by_vendor",
          timestamp: "2024-01-18T11:30:00.000Z",
          confirmation_no: "SD-CONF-002"
        },
        {
          action: "partial_delivery",
          timestamp: "2024-01-20T07:30:00.000Z",
          received_amount: 6200.00,
          remaining_amount: 2750.00
        }
      ],
      delivery_instructions: "Temperature controlled delivery required",
      items_count: 5,
      payment_terms: "Net 15 days from delivery"
    },
    dimension: {},
    doc_version: 3,
    created_at: "2024-01-18T08:00:00.000Z",
    created_by_id: "user-002",
    updated_at: "2024-01-20T07:30:00.000Z",
    updated_by_id: "user-008",
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "po-003",
    purchase_order_no: "PO-2024-003",
    reference_no: "REF-MEAT-001",
    purchase_request_id: null,
    purchase_request_no: null,
    order_date: "2024-01-19T00:00:00.000Z",
    delivery_date: "2024-01-23T00:00:00.000Z",
    vendor_id: "vendor-003",
    vendor_name: "Bangkok Meat Processing",
    delivery_point_id: "dp-005",
    delivery_point_name: "Cold Storage",
    total_amount: 23400.00,
    currency_id: "cur-001-thb",
    currency_name: "Thai Baht",
    credit_term_id: "ct-002",
    credit_term_name: "Net 7 Days",
    status: "received",
    note: "Fresh meat delivery - quality approved",
    info: {
      order_history: [
        {
          action: "created",
          timestamp: "2024-01-19T09:30:00.000Z",
          user_id: "user-002"
        },
        {
          action: "sent_to_vendor",
          timestamp: "2024-01-19T10:00:00.000Z",
          user_id: "user-002",
          email: "sales@bkkmeats.co.th"
        },
        {
          action: "confirmed_by_vendor",
          timestamp: "2024-01-19T13:45:00.000Z",
          confirmation_no: "BMP-CONF-003"
        },
        {
          action: "delivered",
          timestamp: "2024-01-23T06:00:00.000Z",
          received_by: "user-008",
          quality_check: "passed"
        }
      ],
      delivery_instructions: "Early morning delivery 6-8 AM",
      items_count: 6,
      payment_terms: "Net 7 days from delivery",
      quality_requirements: "HACCP certified, temperature log required"
    },
    dimension: {},
    doc_version: 3,
    created_at: "2024-01-19T09:30:00.000Z",
    created_by_id: "user-002",
    updated_at: "2024-01-23T06:00:00.000Z",
    updated_by_id: "user-008",
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "po-004",
    purchase_order_no: "PO-2024-004",
    reference_no: "REF-SPICE-001",
    purchase_request_id: null,
    purchase_request_no: null,
    order_date: getCurrentTimestamp(),
    delivery_date: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000).toISOString(),
    vendor_id: "vendor-005",
    vendor_name: "Global Spices Trading",
    delivery_point_id: "dp-006",
    delivery_point_name: "Dry Storage",
    total_amount: 850.00, // USD
    currency_id: "cur-002-usd",
    currency_name: "US Dollar",
    credit_term_id: "ct-004",
    credit_term_name: "Net 30 Days",
    status: "sent",
    note: "Import spices - awaiting vendor confirmation",
    info: {
      order_history: [
        {
          action: "created",
          timestamp: getCurrentTimestamp(),
          user_id: "user-002"
        },
        {
          action: "sent_to_vendor",
          timestamp: getCurrentTimestamp(),
          user_id: "user-002",
          email: "trade@globalspices.co.th"
        }
      ],
      delivery_instructions: "Import documentation required",
      items_count: 4,
      payment_terms: "Net 30 days from delivery",
      import_requirements: "FDA approval documents needed"
    },
    dimension: {},
    doc_version: 1,
    created_at: getCurrentTimestamp(),
    created_by_id: "user-002",
    updated_at: getCurrentTimestamp(),
    updated_by_id: "user-002",
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "po-005",
    purchase_order_no: "PO-2024-005",
    reference_no: "REF-PACK-001",
    purchase_request_id: "pr-004",
    purchase_request_no: "PR-2024-004",
    order_date: "2024-01-20T00:00:00.000Z",
    delivery_date: "2024-01-28T00:00:00.000Z",
    vendor_id: "vendor-006",
    vendor_name: "Local Equipment Supply",
    delivery_point_id: "dp-006",
    delivery_point_name: "Dry Storage",
    total_amount: 12300.00,
    currency_id: "cur-001-thb",
    currency_name: "Thai Baht",
    credit_term_id: "ct-004",
    credit_term_name: "Net 30 Days",
    status: "cancelled",
    note: "Cancelled due to vendor inactive status",
    info: {
      order_history: [
        {
          action: "created",
          timestamp: "2024-01-20T10:00:00.000Z",
          user_id: "user-002"
        },
        {
          action: "cancelled",
          timestamp: "2024-01-20T15:30:00.000Z",
          user_id: "user-001",
          reason: "Vendor no longer active"
        }
      ],
      delivery_instructions: "Bulk delivery to storage area",
      items_count: 6,
      cancellation_reason: "Vendor inactive"
    },
    dimension: {},
    doc_version: 2,
    created_at: "2024-01-20T10:00:00.000Z",
    created_by_id: "user-002",
    updated_at: "2024-01-20T15:30:00.000Z",
    updated_by_id: "user-001",
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "po-006",
    purchase_order_no: "PO-2024-006",
    reference_no: "REF-ORG-001",
    purchase_request_id: null,
    purchase_request_no: null,
    order_date: "2024-01-21T00:00:00.000Z",
    delivery_date: "2024-01-26T00:00:00.000Z",
    vendor_id: "vendor-002",
    vendor_name: "Thai Organic Farm Co., Ltd.",
    delivery_point_id: "dp-001",
    delivery_point_name: "Main Kitchen",
    total_amount: 18650.00,
    currency_id: "cur-001-thb",
    currency_name: "Thai Baht",
    credit_term_id: "ct-007",
    credit_term_name: "2/10 Net 30",
    status: "draft",
    note: "Organic vegetable order - still being prepared",
    info: {
      order_history: [
        {
          action: "created",
          timestamp: "2024-01-21T11:30:00.000Z",
          user_id: "user-002"
        }
      ],
      delivery_instructions: "Organic certification required",
      items_count: 10,
      payment_terms: "2% discount if paid within 10 days, otherwise Net 30 days",
      organic_certification: "Required"
    },
    dimension: {},
    doc_version: 1,
    created_at: "2024-01-21T11:30:00.000Z",
    created_by_id: "user-002",
    updated_at: "2024-01-21T11:30:00.000Z",
    updated_by_id: "user-002",
    deleted_at: null,
    deleted_by_id: null
  }
];

// =============== TB_PURCHASE_ORDER CRUD FUNCTIONS ===============
export const tbPurchaseOrderCrud = {
  // Create new purchase order
  create: (data: Omit<TbPurchaseOrder, 'id' | 'created_at' | 'updated_at'>): TbPurchaseOrder => {
    const newPO: TbPurchaseOrder = {
      id: generateUuid(),
      created_at: getCurrentTimestamp(),
      updated_at: getCurrentTimestamp(),
      doc_version: 1,
      status: 'draft',
      ...data
    };
    mockTbPurchaseOrder.push(newPO);
    return newPO;
  },

  // Find by ID
  findById: (id: string): TbPurchaseOrder | null => {
    return mockTbPurchaseOrder.find(po => po.id === id && !po.deleted_at) || null;
  },

  // Find by purchase order number
  findByPONo: (poNo: string): TbPurchaseOrder | null => {
    return mockTbPurchaseOrder.find(po => po.purchase_order_no === poNo && !po.deleted_at) || null;
  },

  // Find by purchase request ID
  findByPurchaseRequestId: (prId: string): TbPurchaseOrder[] => {
    return mockTbPurchaseOrder
      .filter(po => !po.deleted_at && po.purchase_request_id === prId)
      .sort((a, b) => new Date(b.created_at || '').getTime() - new Date(a.created_at || '').getTime());
  },

  // Find by vendor
  findByVendor: (vendorId: string): TbPurchaseOrder[] => {
    return mockTbPurchaseOrder
      .filter(po => !po.deleted_at && po.vendor_id === vendorId)
      .sort((a, b) => new Date(b.created_at || '').getTime() - new Date(a.created_at || '').getTime());
  },

  // Find by status
  findByStatus: (status: string): TbPurchaseOrder[] => {
    return mockTbPurchaseOrder
      .filter(po => !po.deleted_at && po.status === status)
      .sort((a, b) => new Date(b.created_at || '').getTime() - new Date(a.created_at || '').getTime());
  },

  // Find by delivery date range
  findByDeliveryDateRange: (startDate: string, endDate: string): TbPurchaseOrder[] => {
    const start = new Date(startDate).getTime();
    const end = new Date(endDate).getTime();
    
    return mockTbPurchaseOrder
      .filter(po => {
        if (!po.delivery_date || po.deleted_at) return false;
        const deliveryDate = new Date(po.delivery_date).getTime();
        return deliveryDate >= start && deliveryDate <= end;
      })
      .sort((a, b) => new Date(a.delivery_date || '').getTime() - new Date(b.delivery_date || '').getTime());
  },

  // Find overdue deliveries
  findOverdueDeliveries: (): TbPurchaseOrder[] => {
    const now = new Date().getTime();
    
    return mockTbPurchaseOrder
      .filter(po => {
        if (!po.delivery_date || po.deleted_at) return false;
        if (po.status === 'received' || po.status === 'completed' || po.status === 'cancelled') return false;
        
        const deliveryDate = new Date(po.delivery_date).getTime();
        return deliveryDate < now;
      })
      .sort((a, b) => new Date(a.delivery_date || '').getTime() - new Date(b.delivery_date || '').getTime());
  },

  // Find pending purchase orders
  findPending: (): TbPurchaseOrder[] => {
    return mockTbPurchaseOrder
      .filter(po => !po.deleted_at && (po.status === 'sent' || po.status === 'confirmed'))
      .sort((a, b) => new Date(a.delivery_date || '').getTime() - new Date(b.delivery_date || '').getTime());
  },

  // Find all active purchase orders
  findAllActive: (): TbPurchaseOrder[] => {
    return mockTbPurchaseOrder
      .filter(po => !po.deleted_at)
      .sort((a, b) => new Date(b.created_at || '').getTime() - new Date(a.created_at || '').getTime());
  },

  // Find all purchase orders (including deleted)
  findAll: (): TbPurchaseOrder[] => {
    return mockTbPurchaseOrder
      .sort((a, b) => new Date(b.created_at || '').getTime() - new Date(a.created_at || '').getTime());
  },

  // Search purchase orders
  search: (query: string): TbPurchaseOrder[] => {
    const lowerQuery = query.toLowerCase();
    return mockTbPurchaseOrder
      .filter(po => 
        !po.deleted_at &&
        (po.purchase_order_no.toLowerCase().includes(lowerQuery) || 
         po.reference_no?.toLowerCase().includes(lowerQuery) ||
         po.vendor_name?.toLowerCase().includes(lowerQuery) ||
         po.note?.toLowerCase().includes(lowerQuery))
      )
      .sort((a, b) => new Date(b.created_at || '').getTime() - new Date(a.created_at || '').getTime());
  },

  // Update purchase order
  update: (id: string, data: Partial<TbPurchaseOrder>, updated_by_id?: string): TbPurchaseOrder | null => {
    const index = mockTbPurchaseOrder.findIndex(po => po.id === id && !po.deleted_at);
    if (index === -1) return null;

    const currentVersion = mockTbPurchaseOrder[index].doc_version || 1;
    mockTbPurchaseOrder[index] = {
      ...mockTbPurchaseOrder[index],
      ...data,
      doc_version: currentVersion + 1,
      updated_at: getCurrentTimestamp(),
      updated_by_id: updated_by_id || null
    };
    return mockTbPurchaseOrder[index];
  },

  // Soft delete purchase order
  delete: (id: string, deleted_by_id?: string): boolean => {
    const index = mockTbPurchaseOrder.findIndex(po => po.id === id && !po.deleted_at);
    if (index === -1) return false;

    mockTbPurchaseOrder[index].deleted_at = getCurrentTimestamp();
    mockTbPurchaseOrder[index].deleted_by_id = deleted_by_id || null;
    return true;
  },

  // Send purchase order to vendor
  sendToVendor: (id: string, email: string, updated_by_id?: string): TbPurchaseOrder | null => {
    const po = tbPurchaseOrderCrud.findById(id);
    if (!po || po.status !== 'draft') return null;

    const orderHistory = po.info?.order_history || [];
    orderHistory.push({
      action: "sent_to_vendor",
      timestamp: getCurrentTimestamp(),
      user_id: updated_by_id || 'system',
      email: email
    });

    return tbPurchaseOrderCrud.update(id, {
      status: 'sent',
      info: {
        ...po.info,
        order_history: orderHistory
      }
    }, updated_by_id);
  },

  // Confirm purchase order
  confirm: (id: string, confirmationNo: string, updated_by_id?: string): TbPurchaseOrder | null => {
    const po = tbPurchaseOrderCrud.findById(id);
    if (!po || po.status !== 'sent') return null;

    const orderHistory = po.info?.order_history || [];
    orderHistory.push({
      action: "confirmed_by_vendor",
      timestamp: getCurrentTimestamp(),
      confirmation_no: confirmationNo
    });

    return tbPurchaseOrderCrud.update(id, {
      status: 'confirmed',
      info: {
        ...po.info,
        order_history: orderHistory,
        vendor_confirmation: confirmationNo
      }
    }, updated_by_id);
  },

  // Mark as received (full delivery)
  markReceived: (id: string, received_by_id: string, quality_check?: string): TbPurchaseOrder | null => {
    const po = tbPurchaseOrderCrud.findById(id);
    if (!po) return null;

    const orderHistory = po.info?.order_history || [];
    orderHistory.push({
      action: "delivered",
      timestamp: getCurrentTimestamp(),
      received_by: received_by_id,
      quality_check: quality_check || 'passed'
    });

    return tbPurchaseOrderCrud.update(id, {
      status: 'received',
      info: {
        ...po.info,
        order_history: orderHistory
      }
    }, received_by_id);
  },

  // Mark as partial received
  markPartialReceived: (
    id: string, 
    received_amount: number, 
    received_by_id: string
  ): TbPurchaseOrder | null => {
    const po = tbPurchaseOrderCrud.findById(id);
    if (!po) return null;

    const orderHistory = po.info?.order_history || [];
    const remaining_amount = (po.total_amount || 0) - received_amount;
    
    orderHistory.push({
      action: "partial_delivery",
      timestamp: getCurrentTimestamp(),
      received_amount: received_amount,
      remaining_amount: remaining_amount,
      received_by: received_by_id
    });

    return tbPurchaseOrderCrud.update(id, {
      status: 'partial_received',
      info: {
        ...po.info,
        order_history: orderHistory,
        received_amount: received_amount,
        remaining_amount: remaining_amount
      }
    }, received_by_id);
  },

  // Cancel purchase order
  cancel: (id: string, reason: string, updated_by_id?: string): TbPurchaseOrder | null => {
    const po = tbPurchaseOrderCrud.findById(id);
    if (!po) return null;

    const orderHistory = po.info?.order_history || [];
    orderHistory.push({
      action: "cancelled",
      timestamp: getCurrentTimestamp(),
      user_id: updated_by_id || 'system',
      reason: reason
    });

    return tbPurchaseOrderCrud.update(id, {
      status: 'cancelled',
      info: {
        ...po.info,
        order_history: orderHistory,
        cancellation_reason: reason
      }
    }, updated_by_id);
  },

  // Complete purchase order
  complete: (id: string, updated_by_id?: string): TbPurchaseOrder | null => {
    const po = tbPurchaseOrderCrud.findById(id);
    if (!po || po.status !== 'received') return null;

    return tbPurchaseOrderCrud.update(id, {
      status: 'completed'
    }, updated_by_id);
  },

  // Generate purchase order number
  generatePONumber: (): string => {
    const year = new Date().getFullYear();
    const existingPOs = mockTbPurchaseOrder.filter(po => 
      po.purchase_order_no.startsWith(`PO-${year}-`)
    );
    const nextNumber = existingPOs.length + 1;
    return `PO-${year}-${nextNumber.toString().padStart(3, '0')}`;
  },

  // Get purchase order statistics
  getStats: () => {
    const allPOs = mockTbPurchaseOrder.filter(po => !po.deleted_at);
    const totalAmount = allPOs.reduce((sum, po) => sum + (po.total_amount || 0), 0);
    const avgAmount = allPOs.length > 0 ? totalAmount / allPOs.length : 0;
    
    return {
      total: allPOs.length,
      totalAmount: totalAmount,
      avgAmount: avgAmount,
      byStatus: allPOs.reduce((acc, po) => {
        const status = po.status || 'unknown';
        acc[status] = (acc[status] || 0) + 1;
        return acc;
      }, {} as Record<string, number>),
      byVendor: allPOs.reduce((acc, po) => {
        const vendor = po.vendor_name || 'Unknown';
        acc[vendor] = (acc[vendor] || 0) + 1;
        return acc;
      }, {} as Record<string, number>),
      byCurrency: allPOs.reduce((acc, po) => {
        const currency = po.currency_name || 'Unknown';
        acc[currency] = (acc[currency] || 0) + 1;
        return acc;
      }, {} as Record<string, number>),
      pending: allPOs.filter(po => po.status === 'sent' || po.status === 'confirmed').length,
      overdue: tbPurchaseOrderCrud.findOverdueDeliveries().length
    };
  }
};
