import { generateId, getCurrentTimestamp } from "@/libs/utils";
import { getUuidByName } from "./mapping.uuid";

export enum enum_activity_action {
  view,
  create,
  update,
  delete,
  login,
  logout,
  approve,
  reject,
  cancel,
  void,
  print,
  email,
  other,
  upload,
  download,
  export,
  import,
  copy,
  move,
  rename,
  save,
}

export enum enum_activity_entity_type {
  user,
  business_unit,
  product,
  location,
  department,
  unit,
  currency,
  exchange_rate,
  menu,
  delivery_point,
  purchase_request,
  purchase_request_item,
  purchase_order,
  purchase_order_item,
  good_received_note,
  good_received_note_item,
  inventory_transaction,
  inventory_adjustment,
  store_requisition,
  store_requisition_item,
  stock_in,
  stock_out,
  stock_adjustment,
  stock_transfer,
  stock_count,
  stock_take,
  stock_take_item,
  other,
}
export interface Activity {
  id: string;
  action: enum_activity_action;
  entity_type: enum_activity_entity_type;
  entity_id: string;
  actor_id: string;
  meta_data: any;
  old_data: any;
  new_data: any;
  ip_address: string;
  user_agent: string;
  description: string;
  created_at: string;
  created_by_id: string;
}

export const activities: Activity[] = [
  {
    id: getUuidByName("ACTIVITY_01")!,
    action: enum_activity_action.create,
    entity_type: enum_activity_entity_type.user,
    entity_id: "user_001",
    actor_id: getUuidByName("USER_01")!,
    meta_data: { source: "web" },
    old_data: null,
    new_data: { username: "john.doe", email: "john@example.com" },
    ip_address: "192.168.1.100",
    user_agent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
    description: "สร้างผู้ใช้ใหม่: john.doe",
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: getUuidByName("USER_ADMIN")!,
  },
  {
    id: getUuidByName("ACTIVITY_02")!,
    action: enum_activity_action.update,
    entity_type: enum_activity_entity_type.product,
    entity_id: "prod_001",
    actor_id: getUuidByName("USER_02")!,
    meta_data: { reason: "price_update" },
    old_data: { price: 100.0 },
    new_data: { price: 120.0 },
    ip_address: "192.168.1.101",
    user_agent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36",
    description: "อัปเดตราคาสินค้า: 100.00 -> 120.00",
    created_at: "2024-01-15T14:20:00Z",
    created_by_id: getUuidByName("USER_ADMIN")!,
  },
  {
    id: getUuidByName("ACTIVITY_03")!,
    action: enum_activity_action.delete,
    entity_type: enum_activity_entity_type.purchase_order,
    entity_id: "order_001",
    actor_id: getUuidByName("USER_03")!,
    meta_data: { reason: "cancelled" },
    old_data: { status: "pending", total: 500.0 },
    new_data: null,
    ip_address: "192.168.1.100",
    user_agent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
    description: "ยกเลิกคำสั่งซื้อ: order_001",
    created_at: "2024-01-15T16:45:00Z",
    created_by_id: getUuidByName("USER_ADMIN")!,
  },
  {
    id: getUuidByName("ACTIVITY_04")!,
    action: enum_activity_action.login,
    entity_type: enum_activity_entity_type.user,
    entity_id: getUuidByName("USER_04")!,
    actor_id: getUuidByName("USER_04")!,
    meta_data: { login_method: "password", session_id: "sess_789" },
    old_data: null,
    new_data: { last_login: "2024-01-16T08:15:00Z" },
    ip_address: "192.168.1.150",
    user_agent: "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15",
    description: "เข้าสู่ระบบผ่านมือถือ",
    created_at: "2024-01-16T08:15:00Z",
    created_by_id: getUuidByName("USER_04")!,
  },
  {
    id: getUuidByName("ACTIVITY_05")!,
    action: enum_activity_action.create,
    entity_type: enum_activity_entity_type.purchase_request,
    entity_id: getUuidByName("PURCHASE_REQUEST_01")!,
    actor_id: getUuidByName("USER_05")!,
    meta_data: { department: "IT", urgency: "normal" },
    old_data: null,
    new_data: {
      request_no: "PR-2024-001",
      total_amount: 15000.0,
      items_count: 3,
      status: "draft"
    },
    ip_address: "192.168.1.102",
    user_agent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
    description: "สร้างใบขอซื้อ PR-2024-001 มูลค่า 15,000 บาท",
    created_at: "2024-01-16T09:30:00Z",
    created_by_id: getUuidByName("USER_05")!,
  },
  {
    id: getUuidByName("ACTIVITY_06")!,
    action: enum_activity_action.approve,
    entity_type: enum_activity_entity_type.purchase_request,
    entity_id: getUuidByName("PURCHASE_REQUEST_01")!,
    actor_id: getUuidByName("USER_ADMIN")!,
    meta_data: { approval_level: 1, comment: "อนุมัติตามขั้นตอน" },
    old_data: { status: "pending_approval", approved_by: null },
    new_data: { status: "approved", approved_by: getUuidByName("USER_ADMIN")!, approved_at: "2024-01-16T11:15:00Z" },
    ip_address: "192.168.1.103",
    user_agent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
    description: "อนุมัติใบขอซื้อ PR-2024-001",
    created_at: "2024-01-16T11:15:00Z",
    created_by_id: getUuidByName("USER_ADMIN")!,
  },
  {
    id: getUuidByName("ACTIVITY_07")!,
    action: enum_activity_action.create,
    entity_type: enum_activity_entity_type.product,
    entity_id: getUuidByName("PRODUCT_01")!,
    actor_id: getUuidByName("USER_02")!,
    meta_data: { category: "electronics", supplier: "Apple Inc." },
    old_data: null,
    new_data: {
      sku: "IPH15PRO128",
      name: "iPhone 15 Pro 128GB",
      price: 45000.0,
      status: "active"
    },
    ip_address: "192.168.1.104",
    user_agent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36",
    description: "สร้างสินค้าใหม่: iPhone 15 Pro 128GB",
    created_at: "2024-01-16T13:20:00Z",
    created_by_id: getUuidByName("USER_02")!,
  },
  {
    id: getUuidByName("ACTIVITY_08")!,
    action: enum_activity_action.update,
    entity_type: enum_activity_entity_type.inventory_transaction,
    entity_id: "inv_txn_001",
    actor_id: getUuidByName("USER_06")!,
    meta_data: { transaction_type: "stock_in", location: "warehouse_01" },
    old_data: { quantity: 0, status: "pending" },
    new_data: { quantity: 100, status: "completed" },
    ip_address: "192.168.1.105",
    user_agent: "Mozilla/5.0 (Android 11; Mobile; rv:81.0) Gecko/81.0 Firefox/81.0",
    description: "บันทึกรับสินค้าเข้าคลัง 100 ชิ้น",
    created_at: "2024-01-16T14:45:00Z",
    created_by_id: getUuidByName("USER_06")!,
  },
  {
    id: getUuidByName("ACTIVITY_09")!,
    action: enum_activity_action.export,
    entity_type: enum_activity_entity_type.purchase_order,
    entity_id: "multiple",
    actor_id: getUuidByName("USER_07")!,
    meta_data: {
      export_format: "excel",
      date_range: "2024-01-01_to_2024-01-16",
      record_count: 45
    },
    old_data: null,
    new_data: { file_name: "purchase_orders_2024-01.xlsx", file_size: "2.3MB" },
    ip_address: "192.168.1.106",
    user_agent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
    description: "ส่งออกรายงานใบสั่งซื้อประจำเดือนมกราคม 2024",
    created_at: "2024-01-16T15:30:00Z",
    created_by_id: getUuidByName("USER_07")!,
  },
  {
    id: getUuidByName("ACTIVITY_10")!,
    action: enum_activity_action.reject,
    entity_type: enum_activity_entity_type.store_requisition,
    entity_id: getUuidByName("STORE_REQUISITION_01")!,
    actor_id: getUuidByName("USER_ADMIN")!,
    meta_data: {
      rejection_reason: "insufficient_budget",
      comment: "งงบประมาณไม่เพียงพอสำหรับไตรมาสนี้"
    },
    old_data: { status: "pending_approval", rejected_by: null },
    new_data: {
      status: "rejected",
      rejected_by: getUuidByName("USER_ADMIN")!,
      rejected_at: "2024-01-16T16:20:00Z",
      rejection_reason: "insufficient_budget"
    },
    ip_address: "192.168.1.107",
    user_agent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
    description: "ปฏิเสธใบเบิกสินค้า เหตุผล: งบประมาณไม่เพียงพอ",
    created_at: "2024-01-16T16:20:00Z",
    created_by_id: getUuidByName("USER_ADMIN")!,
  },
  {
    id: getUuidByName("ACTIVITY_11")!,
    action: enum_activity_action.view,
    entity_type: enum_activity_entity_type.good_received_note,
    entity_id: getUuidByName("GOOD_RECEIVED_NOTE_01")!,
    actor_id: getUuidByName("USER_08")!,
    meta_data: { view_duration: 120, section: "details" },
    old_data: null,
    new_data: null,
    ip_address: "192.168.1.108",
    user_agent: "Mozilla/5.0 (iPad; CPU OS 17_0 like Mac OS X) AppleWebKit/605.1.15",
    description: "ดูรายละเอียดใบรับสินค้า GRN-001",
    created_at: "2024-01-17T08:45:00Z",
    created_by_id: getUuidByName("USER_08")!,
  },
  {
    id: getUuidByName("ACTIVITY_12")!,
    action: enum_activity_action.update,
    entity_type: enum_activity_entity_type.business_unit,
    entity_id: getUuidByName("BUSINESS_UNIT_01")!,
    actor_id: getUuidByName("USER_ADMIN")!,
    meta_data: { field_changed: "contact_info", change_type: "phone_update" },
    old_data: { phone: "02-123-4567", email: "info@bu1.company.com" },
    new_data: { phone: "02-987-6543", email: "info@bu1.company.com" },
    ip_address: "192.168.1.109",
    user_agent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
    description: "อัปเดตหมายเลขโทรศัพท์หน่วยงาน",
    created_at: "2024-01-17T09:15:00Z",
    created_by_id: getUuidByName("USER_ADMIN")!,
  },
  {
    id: getUuidByName("ACTIVITY_13")!,
    action: enum_activity_action.create,
    entity_type: enum_activity_entity_type.inventory_adjustment,
    entity_id: "adj_001",
    actor_id: getUuidByName("USER_09")!,
    meta_data: {
      adjustment_type: "stock_loss",
      reason: "damaged_goods",
      location: "warehouse_02"
    },
    old_data: null,
    new_data: {
      adjustment_no: "ADJ-2024-001",
      total_items: 5,
      total_value: -8500.0,
      status: "pending"
    },
    ip_address: "192.168.1.110",
    user_agent: "Mozilla/5.0 (Android 12; Mobile; rv:89.0) Gecko/89.0 Firefox/89.0",
    description: "สร้างใบปรับปรุงสต็อก เหตุผล: สินค้าชำรุด",
    created_at: "2024-01-17T10:30:00Z",
    created_by_id: getUuidByName("USER_09")!,
  },
  {
    id: getUuidByName("ACTIVITY_14")!,
    action: enum_activity_action.print,
    entity_type: enum_activity_entity_type.purchase_order,
    entity_id: getUuidByName("PURCHASE_ORDER_01")!,
    actor_id: getUuidByName("USER_10")!,
    meta_data: {
      print_copies: 3,
      printer: "HP_LaserJet_Floor2",
      print_format: "A4"
    },
    old_data: null,
    new_data: { print_job_id: "job_789", printed_at: "2024-01-17T11:45:00Z" },
    ip_address: "192.168.1.111",
    user_agent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
    description: "พิมพ์ใบสั่งซื้อ PO-001 จำนวน 3 ชุด",
    created_at: "2024-01-17T11:45:00Z",
    created_by_id: getUuidByName("USER_10")!,
  },
  {
    id: getUuidByName("ACTIVITY_15")!,
    action: enum_activity_action.email,
    entity_type: enum_activity_entity_type.good_received_note,
    entity_id: getUuidByName("GOOD_RECEIVED_NOTE_02")!,
    actor_id: getUuidByName("USER_01")!,
    meta_data: {
      recipients: ["vendor@supplier.com", "purchasing@company.com"],
      subject: "GRN Confirmation - GRN-002",
      attachment_count: 2
    },
    old_data: null,
    new_data: {
      email_sent_at: "2024-01-17T13:20:00Z",
      message_id: "msg_456789"
    },
    ip_address: "192.168.1.112",
    user_agent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36",
    description: "ส่งอีเมลยืนยันการรับสินค้า GRN-002 ให้ผู้จำหน่าย",
    created_at: "2024-01-17T13:20:00Z",
    created_by_id: getUuidByName("USER_01")!,
  },
  {
    id: getUuidByName("ACTIVITY_16")!,
    action: enum_activity_action.void,
    entity_type: enum_activity_entity_type.inventory_transaction,
    entity_id: "inv_txn_002",
    actor_id: getUuidByName("USER_ADMIN")!,
    meta_data: {
      void_reason: "duplicate_entry",
      original_amount: 25000.0,
      approver: getUuidByName("USER_ADMIN")!
    },
    old_data: {
      status: "completed",
      amount: 25000.0,
      voided_by: null
    },
    new_data: {
      status: "voided",
      amount: 0.0,
      voided_by: getUuidByName("USER_ADMIN")!,
      voided_at: "2024-01-17T14:30:00Z"
    },
    ip_address: "192.168.1.113",
    user_agent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
    description: "ยกเลิกรายการ Inventory Transaction เหตุผล: รายการซ้ำ",
    created_at: "2024-01-17T14:30:00Z",
    created_by_id: getUuidByName("USER_ADMIN")!,
  },
  {
    id: getUuidByName("ACTIVITY_17")!,
    action: enum_activity_action.upload,
    entity_type: enum_activity_entity_type.product,
    entity_id: "bulk_upload",
    actor_id: getUuidByName("USER_02")!,
    meta_data: {
      file_name: "products_import_january.csv",
      file_size: "1.5MB",
      records_processed: 250,
      records_success: 235,
      records_failed: 15
    },
    old_data: null,
    new_data: {
      upload_id: "upload_789",
      success_rate: 94.0,
      processing_time: "00:02:45"
    },
    ip_address: "192.168.1.114",
    user_agent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
    description: "อัพโหลดข้อมูลสินค้า 250 รายการ สำเร็จ 235 รายการ",
    created_at: "2024-01-17T15:45:00Z",
    created_by_id: getUuidByName("USER_02")!,
  },
  {
    id: getUuidByName("ACTIVITY_18")!,
    action: enum_activity_action.copy,
    entity_type: enum_activity_entity_type.purchase_request,
    entity_id: getUuidByName("PURCHASE_REQUEST_02")!,
    actor_id: getUuidByName("USER_05")!,
    meta_data: {
      source_id: getUuidByName("PURCHASE_REQUEST_01")!,
      copy_type: "template",
      items_copied: 3
    },
    old_data: null,
    new_data: {
      new_request_no: "PR-2024-002",
      status: "draft",
      total_amount: 15000.0
    },
    ip_address: "192.168.1.115",
    user_agent: "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15",
    description: "คัดลอกใบขอซื้อ PR-2024-001 สร้างเป็น PR-2024-002",
    created_at: "2024-01-17T16:20:00Z",
    created_by_id: getUuidByName("USER_05")!,
  },
  {
    id: getUuidByName("ACTIVITY_19")!,
    action: enum_activity_action.logout,
    entity_type: enum_activity_entity_type.user,
    entity_id: getUuidByName("USER_04")!,
    actor_id: getUuidByName("USER_04")!,
    meta_data: {
      session_id: "sess_789",
      session_duration: "08:35:20",
      logout_type: "manual"
    },
    old_data: { status: "active", last_activity: "2024-01-17T16:45:00Z" },
    new_data: { status: "inactive", logged_out_at: "2024-01-17T16:50:00Z" },
    ip_address: "192.168.1.150",
    user_agent: "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15",
    description: "ออกจากระบบ ระยะเวลาใช้งาน 8 ชั่วโมง 35 นาที",
    created_at: "2024-01-17T16:50:00Z",
    created_by_id: getUuidByName("USER_04")!,
  },
  {
    id: getUuidByName("ACTIVITY_20")!,
    action: enum_activity_action.save,
    entity_type: enum_activity_entity_type.stock_take,
    entity_id: "stock_take_001",
    actor_id: getUuidByName("USER_06")!,
    meta_data: {
      location: "warehouse_01",
      items_counted: 150,
      variance_found: 12,
      save_type: "auto_save"
    },
    old_data: { status: "in_progress", last_saved: "2024-01-17T16:30:00Z" },
    new_data: { status: "in_progress", last_saved: "2024-01-17T17:15:00Z" },
    ip_address: "192.168.1.116",
    user_agent: "Mozilla/5.0 (Android 12; Mobile; rv:89.0) Gecko/89.0 Firefox/89.0",
    description: "บันทึกความคืบหน้าการตรวจนับสต็อก คลังสินค้า 01",
    created_at: "2024-01-17T17:15:00Z",
    created_by_id: getUuidByName("USER_06")!,
  }
];

// CREATE - สร้าง Activity ใหม่
export const createActivity = (activityData: Omit<Activity, "id" | "created_at">): Activity => {
  const newActivity: Activity = {
    ...activityData,
    id: generateId(),
    created_at: getCurrentTimestamp(),
  };

  activities.push(newActivity);
  rebuildIndexes(); // Rebuild indexes after adding new activity
  return newActivity;
};

// READ - อ่าน Activity ทั้งหมด
export const getAllActivities = (): Activity[] => {
  return [...activities];
};

// Optimized indexing for better performance
const activityIndexes = {
  byId: new Map<string, Activity>(),
  byEntityType: new Map<enum_activity_entity_type, Activity[]>(),
  byEntityId: new Map<string, Activity[]>(),
  byActorId: new Map<string, Activity[]>(),
  byAction: new Map<enum_activity_action, Activity[]>(),
};

// Helper function to rebuild indexes
const rebuildIndexes = (): void => {
  // Clear existing indexes
  activityIndexes.byId.clear();
  activityIndexes.byEntityType.clear();
  activityIndexes.byEntityId.clear();
  activityIndexes.byActorId.clear();
  activityIndexes.byAction.clear();

  // Rebuild indexes
  for (const activity of activities) {
    // Index by ID
    activityIndexes.byId.set(activity.id, activity);

    // Index by entity_type
    if (!activityIndexes.byEntityType.has(activity.entity_type)) {
      activityIndexes.byEntityType.set(activity.entity_type, []);
    }
    activityIndexes.byEntityType.get(activity.entity_type)!.push(activity);

    // Index by entity_id
    if (!activityIndexes.byEntityId.has(activity.entity_id)) {
      activityIndexes.byEntityId.set(activity.entity_id, []);
    }
    activityIndexes.byEntityId.get(activity.entity_id)!.push(activity);

    // Index by actor_id
    if (!activityIndexes.byActorId.has(activity.actor_id)) {
      activityIndexes.byActorId.set(activity.actor_id, []);
    }
    activityIndexes.byActorId.get(activity.actor_id)!.push(activity);

    // Index by action
    if (!activityIndexes.byAction.has(activity.action)) {
      activityIndexes.byAction.set(activity.action, []);
    }
    activityIndexes.byAction.get(activity.action)!.push(activity);
  }
};

// Initialize indexes
rebuildIndexes();

// READ - อ่าน Activity ตาม ID (O(1) lookup)
export const getActivityById = (id: string): Activity | undefined => {
  return activityIndexes.byId.get(id);
};

// READ - อ่าน Activity ตาม entity_type (O(1) lookup)
export const getActivitiesByEntityType = (entityType: enum_activity_entity_type): Activity[] => {
  return [...(activityIndexes.byEntityType.get(entityType) ?? [])];
};

// READ - อ่าน Activity ตาม entity_id (O(1) lookup)
export const getActivitiesByEntityId = (entityId: string): Activity[] => {
  return [...(activityIndexes.byEntityId.get(entityId) ?? [])];
};

// READ - อ่าน Activity ตาม actor_id (O(1) lookup)
export const getActivitiesByActorId = (actorId: string): Activity[] => {
  return [...(activityIndexes.byActorId.get(actorId) ?? [])];
};

// READ - อ่าน Activity ตาม action (O(1) lookup)
export const getActivitiesByAction = (action: enum_activity_action): Activity[] => {
  return [...(activityIndexes.byAction.get(action) ?? [])];
};

// READ - อ่าน Activity ตามช่วงเวลา
export const getActivitiesByDateRange = (startDate: string, endDate: string): Activity[] => {
  const start = new Date(startDate);
  const end = new Date(endDate);

  return activities.filter((activity) => {
    const activityDate = new Date(activity.created_at);
    return activityDate >= start && activityDate <= end;
  });
};

// UPDATE - อัปเดต Activity
export const updateActivity = (
  id: string,
  updateData: Partial<Omit<Activity, "id" | "created_at" | "created_by_id">>
): Activity | null => {
  if (!id?.trim()) {
    return null;
  }

  const index = activities.findIndex((activity) => activity.id === id);

  if (index === -1) {
    return null;
  }

  activities[index] = {
    ...activities[index],
    ...updateData,
  };

  rebuildIndexes(); // Rebuild indexes after update
  return activities[index];
};

// DELETE - ลบ Activity
export const deleteActivity = (id: string): boolean => {
  if (!id?.trim()) {
    return false;
  }

  const index = activities.findIndex((activity) => activity.id === id);

  if (index === -1) {
    return false;
  }

  activities.splice(index, 1);
  rebuildIndexes(); // Rebuild indexes after deletion
  return true;
};

// DELETE - ลบ Activity ตาม entity_id
export const deleteActivitiesByEntityId = (entityId: string): number => {
  if (!entityId?.trim()) {
    return 0;
  }

  const initialLength = activities.length;
  const filteredActivities = activities.filter((activity) => activity.entity_id !== entityId);
  const deletedCount = initialLength - filteredActivities.length;

  if (deletedCount > 0) {
    // แทนที่ array เดิม
    activities.length = 0;
    activities.push(...filteredActivities);
    rebuildIndexes(); // Rebuild indexes after bulk deletion
  }

  return deletedCount;
};

// DELETE - ลบ Activity ตาม entity_type
export const deleteActivitiesByEntityType = (entityType: enum_activity_entity_type): number => {
  const initialLength = activities.length;
  const filteredActivities = activities.filter((activity) => activity.entity_type !== entityType);
  const deletedCount = initialLength - filteredActivities.length;

  if (deletedCount > 0) {
    // แทนที่ array เดิม
    activities.length = 0;
    activities.push(...filteredActivities);
    rebuildIndexes(); // Rebuild indexes after bulk deletion
  }

  return deletedCount;
};

// Utility function สำหรับล้างข้อมูลทั้งหมด (ใช้สำหรับ testing)
export const clearAllActivities = (): void => {
  activities.length = 0;
  rebuildIndexes(); // Rebuild indexes after clearing all data
};

// Utility function สำหรับนับจำนวน Activity
export const getActivityCount = (): number => {
  return activities.length;
};

// Utility function สำหรับค้นหา Activity แบบ advanced search
export const searchActivities = (searchCriteria: {
  action?: enum_activity_action;
  entity_type?: enum_activity_entity_type;
  entity_id?: string;
  actor_id?: string;
  description?: string;
  start_date?: string;
  end_date?: string;
}): Activity[] => {
  return activities.filter((activity) => {
    // ตรวจสอบ action
    if (searchCriteria.action && activity.action !== searchCriteria.action) {
      return false;
    }

    // ตรวจสอบ entity_type
    if (searchCriteria.entity_type && activity.entity_type !== searchCriteria.entity_type) {
      return false;
    }

    // ตรวจสอบ entity_id
    if (searchCriteria.entity_id && activity.entity_id !== searchCriteria.entity_id) {
      return false;
    }

    // ตรวจสอบ actor_id
    if (searchCriteria.actor_id && activity.actor_id !== searchCriteria.actor_id) {
      return false;
    }

    // ตรวจสอบ description (ค้นหาแบบ partial match)
    if (
      searchCriteria.description &&
      !activity.description.toLowerCase().includes(searchCriteria.description.toLowerCase())
    ) {
      return false;
    }

    // ตรวจสอบช่วงเวลา
    if (searchCriteria.start_date || searchCriteria.end_date) {
      const activityDate = new Date(activity.created_at);

      if (searchCriteria.start_date) {
        const startDate = new Date(searchCriteria.start_date);
        if (activityDate < startDate) {
          return false;
        }
      }

      if (searchCriteria.end_date) {
        const endDate = new Date(searchCriteria.end_date);
        if (activityDate > endDate) {
          return false;
        }
      }
    }

    return true;
  });
};
