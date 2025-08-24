import { TbGoodReceivedNote } from './types';
import { generateUuid, getCurrentTimestamp } from './utils';
import { UUID_MAPPING } from './uuid-mapping';

// =============== MOCK TB_GOOD_RECEIVED_NOTE DATA ===============
export let mockTbGoodReceivedNote: TbGoodReceivedNote[] = [
  {
    id: "grn-001",
    good_received_note_no: "GRN-2024-001",
    reference_no: "REF-KIT-001",
    purchase_order_id: "po-001",
    purchase_order_no: "PO-2024-001",
    vendor_id: "vendor-001",
    vendor_name: "ABC Food Suppliers",
    delivery_date: "2024-01-25T07:00:00.000Z",
    received_date: "2024-01-25T07:15:00.000Z",
    received_by_id: UUID_MAPPING['user-008'],
    received_by_name: "Warehouse Staff",
    delivery_point_id: "dp-001",
    delivery_point_name: "Main Kitchen",
    total_amount: 15750.00,
    currency_id: "cur-001-thb",
    currency_name: "Thai Baht",
    status: "completed",
    note: "All items received in good condition. Quality check passed.",
    info: {
      delivery_receipt_no: "ABC-DEL-001",
      driver_name: "Somchai Delivery",
      vehicle_plate: "ABC-1234",
      temperature_log: [
        { time: "07:00", temp: "2°C", status: "OK" },
        { time: "07:15", temp: "3°C", status: "OK" }
      ],
      quality_check: {
        inspector: UUID_MAPPING['user-009'],
        inspector_name: "Quality Controller",
        check_date: "2024-01-25T07:30:00.000Z",
        result: "passed",
        notes: "All products meet quality standards"
      },
      items_summary: {
        total_items: 8,
        received_items: 8,
        rejected_items: 0,
        partial_items: 0
      }
    },
    dimension: {},
    doc_version: 1,
    created_at: "2024-01-25T07:15:00.000Z",
    created_by_id: UUID_MAPPING['user-008'],
    updated_at: "2024-01-25T07:30:00.000Z",
    updated_by_id: UUID_MAPPING['user-009'],
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "grn-002",
    good_received_note_no: "GRN-2024-002",
    reference_no: "REF-DAIRY-002",
    purchase_order_id: "po-002",
    purchase_order_no: "PO-2024-002",
    vendor_id: "vendor-004",
    vendor_name: "Siam Dairy Products",
    delivery_date: "2024-01-20T06:30:00.000Z",
    received_date: "2024-01-20T06:45:00.000Z",
    received_by_id: UUID_MAPPING['user-008'],
    received_by_name: "Warehouse Staff",
    delivery_point_id: "dp-005",
    delivery_point_name: "Cold Storage",
    total_amount: 6200.00, // Partial amount
    currency_id: "cur-001-thb",
    currency_name: "Thai Baht",
    status: "partial",
    note: "Partial delivery received. 2 items out of stock at vendor.",
    info: {
      delivery_receipt_no: "SD-DEL-002",
      driver_name: "Manee Transport",
      vehicle_plate: "SD-5678",
      temperature_log: [
        { time: "06:30", temp: "1°C", status: "OK" },
        { time: "06:45", temp: "2°C", status: "OK" }
      ],
      quality_check: {
        inspector: UUID_MAPPING['user-009'],
        inspector_name: "Quality Controller",
        check_date: "2024-01-20T07:00:00.000Z",
        result: "passed",
        notes: "Received items in excellent condition"
      },
      items_summary: {
        total_items: 5,
        received_items: 3,
        rejected_items: 0,
        partial_items: 2
      },
      partial_delivery_reason: "Items out of stock at vendor warehouse"
    },
    dimension: {},
    doc_version: 1,
    created_at: "2024-01-20T06:45:00.000Z",
    created_by_id: UUID_MAPPING['user-008'],
    updated_at: "2024-01-20T07:00:00.000Z",
    updated_by_id: UUID_MAPPING['user-009'],
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "grn-003",
    good_received_note_no: "GRN-2024-003",
    reference_no: "REF-MEAT-001",
    purchase_order_id: "po-003",
    purchase_order_no: "PO-2024-003",
    vendor_id: "vendor-003",
    vendor_name: "Bangkok Meat Processing",
    delivery_date: "2024-01-23T06:00:00.000Z",
    received_date: "2024-01-23T06:10:00.000Z",
    received_by_id: UUID_MAPPING['user-008'],
    received_by_name: "Warehouse Staff",
    delivery_point_id: "dp-005",
    delivery_point_name: "Cold Storage",
    total_amount: 23400.00,
    currency_id: "cur-001-thb",
    currency_name: "Thai Baht",
    status: "completed",
    note: "Fresh meat delivery. All HACCP documentation provided.",
    info: {
      delivery_receipt_no: "BMP-DEL-003",
      driver_name: "Kitti Meat Transport",
      vehicle_plate: "BMP-9012",
      temperature_log: [
        { time: "06:00", temp: "-1°C", status: "OK" },
        { time: "06:10", temp: "0°C", status: "OK" }
      ],
      quality_check: {
        inspector: UUID_MAPPING['user-010'],
        inspector_name: "Food Safety Inspector",
        check_date: "2024-01-23T06:20:00.000Z",
        result: "passed",
        notes: "All meat products fresh, HACCP certified",
        certificates: ["HACCP-2024-001", "VET-CERT-001"]
      },
      items_summary: {
        total_items: 6,
        received_items: 6,
        rejected_items: 0,
        partial_items: 0
      },
      special_handling: "Temperature critical - immediate storage required"
    },
    dimension: {},
    doc_version: 1,
    created_at: "2024-01-23T06:10:00.000Z",
    created_by_id: UUID_MAPPING['user-008'],
    updated_at: "2024-01-23T06:20:00.000Z",
    updated_by_id: UUID_MAPPING['user-010'],
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "grn-004",
    good_received_note_no: "GRN-2024-004",
    reference_no: "REF-DAIRY-003",
    purchase_order_id: "po-002",
    purchase_order_no: "PO-2024-002",
    vendor_id: "vendor-004",
    vendor_name: "Siam Dairy Products",
    delivery_date: "2024-01-22T06:30:00.000Z",
    received_date: "2024-01-22T06:40:00.000Z",
    received_by_id: UUID_MAPPING['user-008'],
    received_by_name: "Warehouse Staff",
    delivery_point_id: "dp-005",
    delivery_point_name: "Cold Storage",
    total_amount: 2750.00, // Remaining amount from partial PO
    currency_id: "cur-001-thb",
    currency_name: "Thai Baht",
    status: "completed",
    note: "Completion of partial delivery from PO-2024-002",
    info: {
      delivery_receipt_no: "SD-DEL-002B",
      driver_name: "Manee Transport",
      vehicle_plate: "SD-5678",
      temperature_log: [
        { time: "06:30", temp: "2°C", status: "OK" },
        { time: "06:40", temp: "2°C", status: "OK" }
      ],
      quality_check: {
        inspector: UUID_MAPPING['user-009'],
        inspector_name: "Quality Controller",
        check_date: "2024-01-22T06:50:00.000Z",
        result: "passed",
        notes: "Remaining items delivered in good condition"
      },
      items_summary: {
        total_items: 2,
        received_items: 2,
        rejected_items: 0,
        partial_items: 0
      },
      completion_delivery: true,
      original_grn: "grn-002"
    },
    dimension: {},
    doc_version: 1,
    created_at: "2024-01-22T06:40:00.000Z",
    created_by_id: UUID_MAPPING['user-008'],
    updated_at: "2024-01-22T06:50:00.000Z",
    updated_by_id: UUID_MAPPING['user-009'],
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "grn-005",
    good_received_note_no: "GRN-2024-005",
    reference_no: "REF-EMERGENCY-001",
    purchase_order_id: null,
    purchase_order_no: null,
    vendor_id: "vendor-001",
    vendor_name: "ABC Food Suppliers",
    delivery_date: getCurrentTimestamp(),
    received_date: getCurrentTimestamp(),
    received_by_id: UUID_MAPPING['user-008'],
    received_by_name: "Warehouse Staff",
    delivery_point_id: "dp-001",
    delivery_point_name: "Main Kitchen",
    total_amount: 3200.00,
    currency_id: "cur-001-thb",
    currency_name: "Thai Baht",
    status: "received",
    note: "Emergency delivery - awaiting quality inspection",
    info: {
      delivery_receipt_no: "ABC-DEL-EMG-001",
      driver_name: "Somsak Emergency",
      vehicle_plate: "ABC-1234",
      temperature_log: [
        { time: new Date().toTimeString().slice(0, 5), temp: "3°C", status: "OK" }
      ],
      quality_check: {
        inspector: null,
        inspector_name: null,
        check_date: null,
        result: "pending",
        notes: "Awaiting quality inspection"
      },
      items_summary: {
        total_items: 3,
        received_items: 3,
        rejected_items: 0,
        partial_items: 0
      },
      emergency_delivery: true,
      priority: "urgent"
    },
    dimension: {},
    doc_version: 1,
    created_at: getCurrentTimestamp(),
    created_by_id: UUID_MAPPING['user-008'],
    updated_at: getCurrentTimestamp(),
    updated_by_id: UUID_MAPPING['user-008'],
    deleted_at: null,
    deleted_by_id: null
  }
];

// =============== TB_GOOD_RECEIVED_NOTE CRUD FUNCTIONS ===============
export const tbGoodReceivedNoteCrud = {
  // Create new good received note
  create: (data: Omit<TbGoodReceivedNote, 'id' | 'created_at' | 'updated_at'>): TbGoodReceivedNote => {
    const newGRN: TbGoodReceivedNote = {
      id: generateUuid(),
      created_at: getCurrentTimestamp(),
      updated_at: getCurrentTimestamp(),
      doc_version: 1,
      status: 'received',
      ...data
    };
    mockTbGoodReceivedNote.push(newGRN);
    return newGRN;
  },

  // Find by ID
  findById: (id: string): TbGoodReceivedNote | null => {
    return mockTbGoodReceivedNote.find(grn => grn.id === id && !grn.deleted_at) || null;
  },

  // Find by GRN number
  findByGRNNo: (grnNo: string): TbGoodReceivedNote | null => {
    return mockTbGoodReceivedNote.find(grn => grn.good_received_note_no === grnNo && !grn.deleted_at) || null;
  },

  // Find by purchase order ID
  findByPurchaseOrderId: (poId: string): TbGoodReceivedNote[] => {
    return mockTbGoodReceivedNote
      .filter(grn => !grn.deleted_at && grn.purchase_order_id === poId)
      .sort((a, b) => new Date(b.created_at || '').getTime() - new Date(a.created_at || '').getTime());
  },

  // Find by vendor
  findByVendor: (vendorId: string): TbGoodReceivedNote[] => {
    return mockTbGoodReceivedNote
      .filter(grn => !grn.deleted_at && grn.vendor_id === vendorId)
      .sort((a, b) => new Date(b.received_date || '').getTime() - new Date(a.received_date || '').getTime());
  },

  // Find by status
  findByStatus: (status: string): TbGoodReceivedNote[] => {
    return mockTbGoodReceivedNote
      .filter(grn => !grn.deleted_at && grn.status === status)
      .sort((a, b) => new Date(b.received_date || '').getTime() - new Date(a.received_date || '').getTime());
  },

  // Find by received date range
  findByReceivedDateRange: (startDate: string, endDate: string): TbGoodReceivedNote[] => {
    const start = new Date(startDate).getTime();
    const end = new Date(endDate).getTime();
    
    return mockTbGoodReceivedNote
      .filter(grn => {
        if (!grn.received_date || grn.deleted_at) return false;
        const receivedDate = new Date(grn.received_date).getTime();
        return receivedDate >= start && receivedDate <= end;
      })
      .sort((a, b) => new Date(b.received_date || '').getTime() - new Date(a.received_date || '').getTime());
  },

  // Find by delivery point
  findByDeliveryPoint: (deliveryPointId: string): TbGoodReceivedNote[] => {
    return mockTbGoodReceivedNote
      .filter(grn => !grn.deleted_at && grn.delivery_point_id === deliveryPointId)
      .sort((a, b) => new Date(b.received_date || '').getTime() - new Date(a.received_date || '').getTime());
  },

  // Find by received by (user)
  findByReceivedBy: (userId: string): TbGoodReceivedNote[] => {
    return mockTbGoodReceivedNote
      .filter(grn => !grn.deleted_at && grn.received_by_id === userId)
      .sort((a, b) => new Date(b.received_date || '').getTime() - new Date(a.received_date || '').getTime());
  },

  // Find pending quality check
  findPendingQualityCheck: (): TbGoodReceivedNote[] => {
    return mockTbGoodReceivedNote
      .filter(grn => 
        !grn.deleted_at && 
        grn.status === 'received' &&
        grn.info?.quality_check?.result === 'pending'
      )
      .sort((a, b) => new Date(a.received_date || '').getTime() - new Date(b.received_date || '').getTime());
  },

  // Find all active GRNs
  findAllActive: (): TbGoodReceivedNote[] => {
    return mockTbGoodReceivedNote
      .filter(grn => !grn.deleted_at)
      .sort((a, b) => new Date(b.received_date || '').getTime() - new Date(a.received_date || '').getTime());
  },

  // Find all GRNs (including deleted)
  findAll: (): TbGoodReceivedNote[] => {
    return mockTbGoodReceivedNote
      .sort((a, b) => new Date(b.received_date || '').getTime() - new Date(a.received_date || '').getTime());
  },

  // Search GRNs
  search: (query: string): TbGoodReceivedNote[] => {
    const lowerQuery = query.toLowerCase();
    return mockTbGoodReceivedNote
      .filter(grn => 
        !grn.deleted_at &&
        (grn.good_received_note_no.toLowerCase().includes(lowerQuery) || 
         grn.reference_no?.toLowerCase().includes(lowerQuery) ||
         grn.vendor_name?.toLowerCase().includes(lowerQuery) ||
         grn.note?.toLowerCase().includes(lowerQuery))
      )
      .sort((a, b) => new Date(b.received_date || '').getTime() - new Date(a.received_date || '').getTime());
  },

  // Update GRN
  update: (id: string, data: Partial<TbGoodReceivedNote>, updated_by_id?: string): TbGoodReceivedNote | null => {
    const index = mockTbGoodReceivedNote.findIndex(grn => grn.id === id && !grn.deleted_at);
    if (index === -1) return null;

    const currentVersion = mockTbGoodReceivedNote[index].doc_version || 1;
    mockTbGoodReceivedNote[index] = {
      ...mockTbGoodReceivedNote[index],
      ...data,
      doc_version: currentVersion + 1,
      updated_at: getCurrentTimestamp(),
      updated_by_id: updated_by_id || null
    };
    return mockTbGoodReceivedNote[index];
  },

  // Soft delete GRN
  delete: (id: string, deleted_by_id?: string): boolean => {
    const index = mockTbGoodReceivedNote.findIndex(grn => grn.id === id && !grn.deleted_at);
    if (index === -1) return false;

    mockTbGoodReceivedNote[index].deleted_at = getCurrentTimestamp();
    mockTbGoodReceivedNote[index].deleted_by_id = deleted_by_id || null;
    return true;
  },

  // Complete quality check
  completeQualityCheck: (
    id: string, 
    inspector_id: string, 
    inspector_name: string, 
    result: 'passed' | 'failed', 
    notes?: string
  ): TbGoodReceivedNote | null => {
    const grn = tbGoodReceivedNoteCrud.findById(id);
    if (!grn) return null;

    const updatedInfo = {
      ...grn.info,
      quality_check: {
        inspector: inspector_id,
        inspector_name: inspector_name,
        check_date: getCurrentTimestamp(),
        result: result,
        notes: notes || ''
      }
    };

    const newStatus = result === 'passed' ? 'completed' : 'cancelled';

    return tbGoodReceivedNoteCrud.update(id, {
      status: newStatus,
      info: updatedInfo
    }, inspector_id);
  },

  // Mark as partial
  markPartial: (id: string, reason: string, updated_by_id?: string): TbGoodReceivedNote | null => {
    const grn = tbGoodReceivedNoteCrud.findById(id);
    if (!grn) return null;

    return tbGoodReceivedNoteCrud.update(id, {
      status: 'partial',
      info: {
        ...grn.info,
        partial_delivery_reason: reason
      }
    }, updated_by_id);
  },

  // Complete GRN
  complete: (id: string, updated_by_id?: string): TbGoodReceivedNote | null => {
    return tbGoodReceivedNoteCrud.update(id, {
      status: 'completed'
    }, updated_by_id);
  },

  // Generate GRN number
  generateGRNNumber: (): string => {
    const year = new Date().getFullYear();
    const existingGRNs = mockTbGoodReceivedNote.filter(grn => 
      grn.good_received_note_no.startsWith(`GRN-${year}-`)
    );
    const nextNumber = existingGRNs.length + 1;
    return `GRN-${year}-${nextNumber.toString().padStart(3, '0')}`;
  },

  // Add temperature log entry
  addTemperatureLog: (id: string, time: string, temp: string, status: string): TbGoodReceivedNote | null => {
    const grn = tbGoodReceivedNoteCrud.findById(id);
    if (!grn) return null;

    const temperatureLog = grn.info?.temperature_log || [];
    temperatureLog.push({ time, temp, status });

    return tbGoodReceivedNoteCrud.update(id, {
      info: {
        ...grn.info,
        temperature_log: temperatureLog
      }
    });
  },

  // Get GRN statistics
  getStats: () => {
    const allGRNs = mockTbGoodReceivedNote.filter(grn => !grn.deleted_at);
    const totalAmount = allGRNs.reduce((sum, grn) => sum + (grn.total_amount || 0), 0);
    const avgAmount = allGRNs.length > 0 ? totalAmount / allGRNs.length : 0;
    
    return {
      total: allGRNs.length,
      totalAmount: totalAmount,
      avgAmount: avgAmount,
      byStatus: allGRNs.reduce((acc, grn) => {
        const status = grn.status || 'unknown';
        acc[status] = (acc[status] || 0) + 1;
        return acc;
      }, {} as Record<string, number>),
      byVendor: allGRNs.reduce((acc, grn) => {
        const vendor = grn.vendor_name || 'Unknown';
        acc[vendor] = (acc[vendor] || 0) + 1;
        return acc;
      }, {} as Record<string, number>),
      byDeliveryPoint: allGRNs.reduce((acc, grn) => {
        const dp = grn.delivery_point_name || 'Unknown';
        acc[dp] = (acc[dp] || 0) + 1;
        return acc;
      }, {} as Record<string, number>),
      qualityCheck: {
        passed: allGRNs.filter(grn => grn.info?.quality_check?.result === 'passed').length,
        failed: allGRNs.filter(grn => grn.info?.quality_check?.result === 'failed').length,
        pending: allGRNs.filter(grn => grn.info?.quality_check?.result === 'pending').length
      },
      pendingInspection: tbGoodReceivedNoteCrud.findPendingQualityCheck().length
    };
  }
};
