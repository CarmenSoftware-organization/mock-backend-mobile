import { generateId, getCurrentTimestamp } from "@/libs/utils";

export interface Notification {
  id: string;
  from_user_id: string;
  to_user_id: string;
  message: string;
  is_read: boolean;
  is_sent: boolean;
  created_at: string;
  created_by_id: string;
  updated_at: string;
  updated_by_id: string | null;
}

export const notifications: Notification[] = [
  {
    id: "550e8400-e29b-41d4-a716-446655440001",
    from_user_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    to_user_id: "1bfdb891-58ee-499c-8115-34a964de8122",
    message: "Welcome to the system!",
    is_read: false,
    is_sent: true,
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440002",
    from_user_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    to_user_id: "3c5280a7-492e-421d-b739-7447455ce99e",
    message: "Your account has been activated",
    is_read: true,
    is_sent: true,
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440003",
    from_user_id: "1bfdb891-58ee-499c-8115-34a964de8122",
    to_user_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    message: "New order request submitted",
    is_read: false,
    is_sent: false,
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "1bfdb891-58ee-499c-8115-34a964de8122",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null
  }
];

// CREATE - สร้าง Notification ใหม่
export const createNotification = (notificationData: Omit<Notification, 'id' | 'created_at' | 'updated_at'>): Notification => {
  const newNotification: Notification = {
    ...notificationData,
    id: generateId(),
    created_at: getCurrentTimestamp(),
    updated_at: getCurrentTimestamp()
  };
  
  notifications.push(newNotification);
  return newNotification;
};

// READ - อ่าน Notification ทั้งหมด
export const getAllNotifications = (): Notification[] => {
  return [...notifications];
};

// READ - อ่าน Notification ตาม ID
export const getNotificationById = (id: string): Notification | undefined => {
  return notifications.find(notification => notification.id === id);
};

// READ - อ่าน Notification ตาม from_user_id
export const getNotificationsByFromUser = (fromUserId: string): Notification[] => {
  return notifications.filter(notification => notification.from_user_id === fromUserId);
};

// READ - อ่าน Notification ตาม to_user_id
export const getNotificationsByToUser = (toUserId: string): Notification[] => {
  return notifications.filter(notification => notification.to_user_id === toUserId);
};

// READ - อ่าน Notification ที่อ่านแล้ว
export const getReadNotifications = (): Notification[] => {
  return notifications.filter(notification => notification.is_read);
};

// READ - อ่าน Notification ที่ยังไม่ได้อ่าน
export const getUnreadNotifications = (): Notification[] => {
  return notifications.filter(notification => !notification.is_read);
};

// READ - อ่าน Notification ที่ส่งแล้ว
export const getSentNotifications = (): Notification[] => {
  return notifications.filter(notification => notification.is_sent);
};

// READ - อ่าน Notification ที่ยังไม่ได้ส่ง
export const getUnsentNotifications = (): Notification[] => {
  return notifications.filter(notification => !notification.is_sent);
};

// READ - อ่าน Notification ที่ยังไม่ได้อ่านสำหรับ user
export const getUnreadNotificationsForUser = (userId: string): Notification[] => {
  return notifications.filter(notification => 
    notification.to_user_id === userId && !notification.is_read
  );
};

// READ - อ่าน Notification ที่ส่งแล้วสำหรับ user
export const getSentNotificationsForUser = (userId: string): Notification[] => {
  return notifications.filter(notification => 
    notification.from_user_id === userId && notification.is_sent
  );
};

// UPDATE - อัปเดต Notification
export const updateNotification = (id: string, updateData: Partial<Omit<Notification, 'id' | 'created_at' | 'created_by_id'>>): Notification | null => {
  const index = notifications.findIndex(notification => notification.id === id);
  
  if (index === -1) {
    return null;
  }
  
  notifications[index] = {
    ...notifications[index],
    ...updateData,
    updated_at: getCurrentTimestamp()
  };
  
  return notifications[index];
};

// UPDATE - อัปเดต Notification read status
export const updateNotificationReadStatus = (id: string, isRead: boolean): Notification | null => {
  return updateNotification(id, { is_read: isRead });
};

// UPDATE - อัปเดต Notification sent status
export const updateNotificationSentStatus = (id: string, isSent: boolean): Notification | null => {
  return updateNotification(id, { is_sent: isSent });
};

// UPDATE - อัปเดต Notification message
export const updateNotificationMessage = (id: string, message: string): Notification | null => {
  return updateNotification(id, { message });
};

// UPDATE - อัปเดต Notification recipients
export const updateNotificationRecipients = (id: string, fromUserId: string, toUserId: string): Notification | null => {
  return updateNotification(id, { 
    from_user_id: fromUserId,
    to_user_id: toUserId
  });
};

// UPDATE - อัปเดต Notification เป็น read สำหรับ user
export const markNotificationAsReadForUser = (notificationId: string, userId: string): Notification | null => {
  const notification = getNotificationById(notificationId);
  if (!notification || notification.to_user_id !== userId) return null;
  
  return updateNotificationReadStatus(notificationId, true);
};

// UPDATE - อัปเดต Notification ทั้งหมดเป็น read สำหรับ user
export const markAllNotificationsAsReadForUser = (userId: string): number => {
  let updatedCount = 0;
  
  notifications.forEach(notification => {
    if (notification.to_user_id === userId && !notification.is_read) {
      notification.is_read = true;
      notification.updated_at = getCurrentTimestamp();
      updatedCount++;
    }
  });
  
  return updatedCount;
};

// DELETE - ลบ Notification
export const deleteNotification = (id: string): boolean => {
  const index = notifications.findIndex(notification => notification.id === id);
  
  if (index === -1) {
    return false;
  }
  
  notifications.splice(index, 1);
  return true;
};

// DELETE - ลบ Notification ตาม from_user_id
export const deleteNotificationsByFromUser = (fromUserId: string): number => {
  const initialLength = notifications.length;
  const filteredNotifications = notifications.filter(notification => notification.from_user_id !== fromUserId);
  const deletedCount = initialLength - filteredNotifications.length;
  
  notifications.length = 0;
  notifications.push(...filteredNotifications);
  
  return deletedCount;
};

// DELETE - ลบ Notification ตาม to_user_id
export const deleteNotificationsByToUser = (toUserId: string): number => {
  const initialLength = notifications.length;
  const filteredNotifications = notifications.filter(notification => notification.to_user_id !== toUserId);
  const deletedCount = initialLength - filteredNotifications.length;
  
  notifications.length = 0;
  notifications.push(...filteredNotifications);
  
  return deletedCount;
};

// DELETE - ลบ Notification ที่อ่านแล้ว
export const deleteReadNotifications = (): number => {
  const initialLength = notifications.length;
  const filteredNotifications = notifications.filter(notification => !notification.is_read);
  const deletedCount = initialLength - filteredNotifications.length;
  
  notifications.length = 0;
  notifications.push(...filteredNotifications);
  
  return deletedCount;
};

// Utility function สำหรับล้างข้อมูลทั้งหมด (ใช้สำหรับ testing)
export const clearAllNotifications = (): void => {
  notifications.length = 0;
};

// Utility function สำหรับนับจำนวน Notification
export const getNotificationCount = (): number => {
  return notifications.length;
};

// Utility function สำหรับนับจำนวน Notification ที่ยังไม่ได้อ่าน
export const getUnreadNotificationCount = (): number => {
  return notifications.filter(notification => !notification.is_read).length;
};

// Utility function สำหรับนับจำนวน Notification ที่ยังไม่ได้ส่ง
export const getUnsentNotificationCount = (): number => {
  return notifications.filter(notification => !notification.is_sent).length;
};

// Utility function สำหรับนับจำนวน Notification สำหรับ user
export const getNotificationCountForUser = (userId: string): number => {
  return notifications.filter(notification => notification.to_user_id === userId).length;
};

// Utility function สำหรับนับจำนวน Notification ที่ยังไม่ได้อ่านสำหรับ user
export const getUnreadNotificationCountForUser = (userId: string): number => {
  return notifications.filter(notification => 
    notification.to_user_id === userId && !notification.is_read
  ).length;
};

// Utility function สำหรับค้นหา Notification แบบ advanced search
export const searchNotifications = (searchCriteria: {
  from_user_id?: string;
  to_user_id?: string;
  message?: string;
  is_read?: boolean;
  is_sent?: boolean;
}): Notification[] => {
  return notifications.filter(notification => {
    if (searchCriteria.from_user_id && notification.from_user_id !== searchCriteria.from_user_id) {
      return false;
    }
    
    if (searchCriteria.to_user_id && notification.to_user_id !== searchCriteria.to_user_id) {
      return false;
    }
    
    if (searchCriteria.message && !notification.message.toLowerCase().includes(searchCriteria.message.toLowerCase())) {
      return false;
    }
    
    if (searchCriteria.is_read !== undefined && notification.is_read !== searchCriteria.is_read) {
      return false;
    }
    
    if (searchCriteria.is_sent !== undefined && notification.is_sent !== searchCriteria.is_sent) {
      return false;
    }
    
    return true;
  });
};

// Utility function สำหรับตรวจสอบ Notification สำหรับ user
export const hasNotificationsForUser = (userId: string): boolean => {
  return notifications.some(notification => notification.to_user_id === userId);
};

// Utility function สำหรับตรวจสอบ Notification ที่ยังไม่ได้อ่าน
export const hasUnreadNotifications = (): boolean => {
  return notifications.some(notification => !notification.is_read);
};

// Utility function สำหรับตรวจสอบ Notification ที่ยังไม่ได้ส่ง
export const hasUnsentNotifications = (): boolean => {
  return notifications.some(notification => !notification.is_sent);
};
