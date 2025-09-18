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
    id: getUuidByName("ACTIVITY_01"),
    action: enum_activity_action.create,
    entity_type: enum_activity_entity_type.user,
    entity_id: "user_001",
    actor_id: getUuidByName("USER_01"),
    meta_data: { source: "web" },
    old_data: null,
    new_data: { username: "john.doe", email: "john@example.com" },
    ip_address: "192.168.1.100",
    user_agent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
    description: "สร้างผู้ใช้ใหม่: john.doe",
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: getUuidByName("USER_ADMIN"),
  },
  {
    id: getUuidByName("ACTIVITY_02"),
    action: enum_activity_action.update,
    entity_type: enum_activity_entity_type.product,
    entity_id: "prod_001",
    actor_id: getUuidByName("USER_02"),
    meta_data: { reason: "price_update" },
    old_data: { price: 100.0 },
    new_data: { price: 120.0 },
    ip_address: "192.168.1.101",
    user_agent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36",
    description: "อัปเดตราคาสินค้า: 100.00 -> 120.00",
    created_at: "2024-01-15T14:20:00Z",
    created_by_id: getUuidByName("USER_ADMIN"),
  },
  {
    id: getUuidByName("ACTIVITY_03"),
    action: enum_activity_action.delete,
    entity_type: enum_activity_entity_type.purchase_order,
    entity_id: "order_001",
    actor_id: getUuidByName("USER_03"),
    meta_data: { reason: "cancelled" },
    old_data: { status: "pending", total: 500.0 },
    new_data: null,
    ip_address: "192.168.1.100",
    user_agent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
    description: "ยกเลิกคำสั่งซื้อ: order_001",
    created_at: "2024-01-15T16:45:00Z",
    created_by_id: getUuidByName("USER_ADMIN"),
  },
];

// CREATE - สร้าง Activity ใหม่
export const createActivity = (activityData: Omit<Activity, "id" | "created_at">): Activity => {
  const newActivity: Activity = {
    ...activityData,
    id: generateId(),
    created_at: getCurrentTimestamp(),
  };

  activities.push(newActivity);
  return newActivity;
};

// READ - อ่าน Activity ทั้งหมด
export const getAllActivities = (): Activity[] => {
  return [...activities];
};

// READ - อ่าน Activity ตาม ID
export const getActivityById = (id: string): Activity | undefined => {
  return activities.find((activity) => activity.id === id);
};

// READ - อ่าน Activity ตาม entity_type
export const getActivitiesByEntityType = (entityType: enum_activity_entity_type): Activity[] => {
  return activities.filter((activity) => activity.entity_type === entityType);
};

// READ - อ่าน Activity ตาม entity_id
export const getActivitiesByEntityId = (entityId: string): Activity[] => {
  return activities.filter((activity) => activity.entity_id === entityId);
};

// READ - อ่าน Activity ตาม actor_id
export const getActivitiesByActorId = (actorId: string): Activity[] => {
  return activities.filter((activity) => activity.actor_id === actorId);
};

// READ - อ่าน Activity ตาม action
export const getActivitiesByAction = (action: enum_activity_action): Activity[] => {
  return activities.filter((activity) => activity.action === action);
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
  const index = activities.findIndex((activity) => activity.id === id);

  if (index === -1) {
    return null;
  }

  activities[index] = {
    ...activities[index],
    ...updateData,
  };

  return activities[index];
};

// DELETE - ลบ Activity
export const deleteActivity = (id: string): boolean => {
  const index = activities.findIndex((activity) => activity.id === id);

  if (index === -1) {
    return false;
  }

  activities.splice(index, 1);
  return true;
};

// DELETE - ลบ Activity ตาม entity_id
export const deleteActivitiesByEntityId = (entityId: string): number => {
  const initialLength = activities.length;
  const filteredActivities = activities.filter((activity) => activity.entity_id !== entityId);
  const deletedCount = initialLength - filteredActivities.length;

  // แทนที่ array เดิม
  activities.length = 0;
  activities.push(...filteredActivities);

  return deletedCount;
};

// DELETE - ลบ Activity ตาม entity_type
export const deleteActivitiesByEntityType = (entityType: enum_activity_entity_type): number => {
  const initialLength = activities.length;
  const filteredActivities = activities.filter((activity) => activity.entity_type !== entityType);
  const deletedCount = initialLength - filteredActivities.length;

  // แทนที่ array เดิม
  activities.length = 0;
  activities.push(...filteredActivities);

  return deletedCount;
};

// Utility function สำหรับล้างข้อมูลทั้งหมด (ใช้สำหรับ testing)
export const clearAllActivities = (): void => {
  activities.length = 0;
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
