import { TbNotification } from './types';
import { generateUuid, getCurrentTimestamp } from './utils';

// =============== MOCK TB_NOTIFICATION DATA ===============
export let mockTbNotification: TbNotification[] = [
  // System notifications
  {
    id: "notif-001",
    title: "ระบบปรับปรุงเสร็จสิ้น",
    message: "การปรับปรุงระบบได้เสร็จสิ้นแล้ว ขณะนี้สามารถใช้งานได้ปกติ",
    type: "success",
    priority: "medium",
    user_id: null, // System-wide
    business_unit_id: null,
    is_read: false,
    read_at: null,
    expires_at: "2024-12-31T23:59:59.999Z",
    is_active: true,
    created_at: "2024-12-20T00:00:00.000Z",
    created_by_id: "system",
    updated_at: "2024-12-20T00:00:00.000Z",
    updated_by_id: "system"
  },

  // User-specific notifications
  {
    id: "notif-002",
    title: "Purchase Request อนุมัติแล้ว",
    message: "Purchase Request #PR-2024-001 ได้รับการอนุมัติแล้ว สามารถดำเนินการต่อได้",
    type: "success",
    priority: "high",
    user_id: "user-003", // Jane Smith
    business_unit_id: "bu-001",
    is_read: false,
    read_at: null,
    expires_at: "2024-12-25T23:59:59.999Z",
    is_active: true,
    created_at: "2024-12-20T08:30:00.000Z",
    created_by_id: "user-002",
    updated_at: "2024-12-20T08:30:00.000Z",
    updated_by_id: "user-002"
  },

  {
    id: "notif-003",
    title: "การเช็คอินล่าช้า",
    message: "มีลูกค้าเช็คอินล่าช้าที่ห้อง 205 กรุณาตรวจสอบ",
    type: "warning",
    priority: "urgent",
    user_id: "user-005", // Sarah Johnson
    business_unit_id: "bu-002", // Hotel
    is_read: true,
    read_at: "2024-12-20T09:15:00.000Z",
    expires_at: "2024-12-21T23:59:59.999Z",
    is_active: true,
    created_at: "2024-12-20T09:00:00.000Z",
    created_by_id: "user-004",
    updated_at: "2024-12-20T09:15:00.000Z",
    updated_by_id: "user-005"
  },

  {
    id: "notif-004",
    title: "สินค้าคงเหลือต่ำ",
    message: "วัตถุดิบ 'เนื้อสัตว์' เหลือเพียง 5 กก. กรุณาสั่งซื้อเพิ่มเติม",
    type: "warning",
    priority: "high",
    user_id: "user-006", // David Lee
    business_unit_id: "bu-003", // Restaurant
    is_read: false,
    read_at: null,
    expires_at: "2024-12-22T23:59:59.999Z",
    is_active: true,
    created_at: "2024-12-20T10:00:00.000Z",
    created_by_id: "system",
    updated_at: "2024-12-20T10:00:00.000Z",
    updated_by_id: "system"
  },

  // Business unit notifications
  {
    id: "notif-005",
    title: "รายงานประจำเดือน",
    message: "รายงานการขายประจำเดือนพฤศจิกายนพร้อมแล้ว",
    type: "info",
    priority: "medium",
    user_id: null,
    business_unit_id: "bu-003", // Restaurant
    is_read: false,
    read_at: null,
    expires_at: "2024-12-30T23:59:59.999Z",
    is_active: true,
    created_at: "2024-12-01T16:00:00.000Z",
    created_by_id: "system",
    updated_at: "2024-12-01T16:00:00.000Z",
    updated_by_id: "system"
  },

  {
    id: "notif-006",
    title: "การบำรุงรักษาระบบ",
    message: "จะมีการบำรุงรักษาระบบในวันอาทิตย์ 22 ธันวาคม เวลา 02:00-06:00 น.",
    type: "info",
    priority: "medium",
    user_id: null,
    business_unit_id: "bu-002", // Hotel
    is_read: false,
    read_at: null,
    expires_at: "2024-12-22T06:00:00.000Z",
    is_active: true,
    created_at: "2024-12-19T14:00:00.000Z",
    created_by_id: "user-001",
    updated_at: "2024-12-19T14:00:00.000Z",
    updated_by_id: "user-001"
  },

  // Error notifications
  {
    id: "notif-007",
    title: "การชำระเงินไม่สำเร็จ",
    message: "การชำระเงินผ่านบัตรเครดิตไม่สำเร็จ กรุณาลองใหม่อีกครั้ง",
    type: "error",
    priority: "urgent",
    user_id: "user-007", // Maria Garcia
    business_unit_id: "bu-003",
    is_read: false,
    read_at: null,
    expires_at: "2024-12-21T23:59:59.999Z",
    is_active: true,
    created_at: "2024-12-20T11:30:00.000Z",
    created_by_id: "system",
    updated_at: "2024-12-20T11:30:00.000Z",
    updated_by_id: "system"
  },

  // Developer notifications
  {
    id: "notif-008",
    title: "Build สำเร็จ",
    message: "การ deploy version 2.1.3 เสร็จสิ้นแล้ว",
    type: "success",
    priority: "low",
    user_id: "user-010", // Developer
    business_unit_id: "bu-005",
    is_read: true,
    read_at: "2024-12-20T12:00:00.000Z",
    expires_at: "2024-12-25T23:59:59.999Z",
    is_active: true,
    created_at: "2024-12-20T11:45:00.000Z",
    created_by_id: "system",
    updated_at: "2024-12-20T12:00:00.000Z",
    updated_by_id: "user-010"
  },

  // Multiple users notification example
  {
    id: "notif-009",
    title: "อัปเดตนโยบายความเป็นส่วนตัว",
    message: "นโยบายความเป็นส่วนตัวมีการเปลี่ยนแปลง กรุณาอ่านและยอมรับ",
    type: "info",
    priority: "medium",
    user_id: "user-002", // John Doe
    business_unit_id: null,
    is_read: false,
    read_at: null,
    expires_at: "2025-01-31T23:59:59.999Z",
    is_active: true,
    created_at: "2024-12-18T00:00:00.000Z",
    created_by_id: "system",
    updated_at: "2024-12-18T00:00:00.000Z",
    updated_by_id: "system"
  },

  // Expired notification
  {
    id: "notif-010",
    title: "โปรโมชั่นพิเศษ",
    message: "ลูกค้าVIPรับส่วนลด 20% สำหรับการจองห้องในเดือนธันวาคม",
    type: "info",
    priority: "low",
    user_id: "user-005",
    business_unit_id: "bu-002",
    is_read: true,
    read_at: "2024-11-30T10:00:00.000Z",
    expires_at: "2024-11-30T23:59:59.999Z", // Expired
    is_active: false,
    created_at: "2024-11-01T00:00:00.000Z",
    created_by_id: "user-004",
    updated_at: "2024-12-01T00:00:00.000Z",
    updated_by_id: "system"
  },

  // Finance notifications
  {
    id: "notif-011",
    title: "ใบแจ้งหนี้ครบกำหนด",
    message: "ใบแจ้งหนี้ #INV-2024-156 ครบกำหนดชำระในวันที่ 22 ธันวาคม",
    type: "warning",
    priority: "high",
    user_id: "user-002", // John Doe (Finance)
    business_unit_id: "bu-001",
    is_read: false,
    read_at: null,
    expires_at: "2024-12-22T23:59:59.999Z",
    is_active: true,
    created_at: "2024-12-20T13:00:00.000Z",
    created_by_id: "system",
    updated_at: "2024-12-20T13:00:00.000Z",
    updated_by_id: "system"
  },

  // Support notifications
  {
    id: "notif-012",
    title: "ตั๋วสนับสนุนใหม่",
    message: "ตั๋วสนับสนุน #SUP-2024-089 ได้รับการสร้างขึ้น",
    type: "info",
    priority: "medium",
    user_id: "user-009", // Lisa Wong (Support)
    business_unit_id: "bu-001",
    is_read: false,
    read_at: null,
    expires_at: "2024-12-27T23:59:59.999Z",
    is_active: true,
    created_at: "2024-12-20T14:30:00.000Z",
    created_by_id: "user-008",
    updated_at: "2024-12-20T14:30:00.000Z",
    updated_by_id: "user-008"
  },

  // Recent notifications
  {
    id: "notif-013",
    title: "เข้าสู่ระบบผิดปกติ",
    message: "มีการเข้าสู่ระบบจากตำแหน่งที่ไม่ปกติ กรุณาตรวจสอบ",
    type: "warning",
    priority: "urgent",
    user_id: "user-001", // Admin
    business_unit_id: null,
    is_read: false,
    read_at: null,
    expires_at: "2024-12-21T23:59:59.999Z",
    is_active: true,
    created_at: getCurrentTimestamp(),
    created_by_id: "system",
    updated_at: getCurrentTimestamp(),
    updated_by_id: "system"
  },

  {
    id: "notif-014",
    title: "ออเดอร์ใหม่",
    message: "มีออเดอร์ใหม่ #ORD-2024-445 รอการจัดเตรียม",
    type: "info",
    priority: "high",
    user_id: "user-007", // Maria Garcia (Cashier)
    business_unit_id: "bu-003",
    is_read: false,
    read_at: null,
    expires_at: "2024-12-21T23:59:59.999Z",
    is_active: true,
    created_at: getCurrentTimestamp(),
    created_by_id: "system",
    updated_at: getCurrentTimestamp(),
    updated_by_id: "system"
  },

  {
    id: "notif-015",
    title: "การสำรองข้อมูลเสร็จสิ้น",
    message: "การสำรองข้อมูลประจำวันเสร็จสิ้นแล้ว",
    type: "success",
    priority: "low",
    user_id: "user-012", // Security Officer
    business_unit_id: null,
    is_read: false,
    read_at: null,
    expires_at: "2024-12-23T23:59:59.999Z",
    is_active: true,
    created_at: getCurrentTimestamp(),
    created_by_id: "system",
    updated_at: getCurrentTimestamp(),
    updated_by_id: "system"
  }
];

// =============== TB_NOTIFICATION CRUD FUNCTIONS ===============
export const tbNotificationCrud = {
  // Create new notification
  create: (data: Omit<TbNotification, 'id' | 'created_at' | 'updated_at'>): TbNotification => {
    const newNotification: TbNotification = {
      id: generateUuid(),
      type: 'info',
      priority: 'medium',
      is_read: false,
      is_active: true,
      created_at: getCurrentTimestamp(),
      updated_at: getCurrentTimestamp(),
      ...data
    };
    mockTbNotification.push(newNotification);
    return newNotification;
  },

  // Find by ID
  findById: (id: string): TbNotification | null => {
    return mockTbNotification.find(notif => notif.id === id) || null;
  },

  // Find by user ID
  findByUserId: (userId: string): TbNotification[] => {
    return mockTbNotification
      .filter(notif => notif.user_id === userId && notif.is_active)
      .sort((a, b) => (b.created_at || '').localeCompare(a.created_at || ''));
  },

  // Find unread by user ID
  findUnreadByUserId: (userId: string): TbNotification[] => {
    const now = new Date().toISOString();
    return mockTbNotification
      .filter(notif => 
        notif.user_id === userId && 
        !notif.is_read && 
        notif.is_active &&
        (!notif.expires_at || notif.expires_at > now)
      )
      .sort((a, b) => (b.created_at || '').localeCompare(a.created_at || ''));
  },

  // Find by business unit ID
  findByBusinessUnitId: (businessUnitId: string): TbNotification[] => {
    return mockTbNotification
      .filter(notif => notif.business_unit_id === businessUnitId && notif.is_active)
      .sort((a, b) => (b.created_at || '').localeCompare(a.created_at || ''));
  },

  // Find system-wide notifications
  findSystemWide: (): TbNotification[] => {
    const now = new Date().toISOString();
    return mockTbNotification
      .filter(notif => 
        notif.user_id === null && 
        notif.business_unit_id === null && 
        notif.is_active &&
        (!notif.expires_at || notif.expires_at > now)
      )
      .sort((a, b) => (b.created_at || '').localeCompare(a.created_at || ''));
  },

  // Find by type
  findByType: (type: 'info' | 'warning' | 'error' | 'success'): TbNotification[] => {
    return mockTbNotification
      .filter(notif => notif.type === type && notif.is_active)
      .sort((a, b) => (b.created_at || '').localeCompare(a.created_at || ''));
  },

  // Find by priority
  findByPriority: (priority: 'low' | 'medium' | 'high' | 'urgent'): TbNotification[] => {
    return mockTbNotification
      .filter(notif => notif.priority === priority && notif.is_active)
      .sort((a, b) => (b.created_at || '').localeCompare(a.created_at || ''));
  },

  // Find urgent notifications
  findUrgent: (): TbNotification[] => {
    const now = new Date().toISOString();
    return mockTbNotification
      .filter(notif => 
        notif.priority === 'urgent' && 
        !notif.is_read && 
        notif.is_active &&
        (!notif.expires_at || notif.expires_at > now)
      )
      .sort((a, b) => (b.created_at || '').localeCompare(a.created_at || ''));
  },

  // Find expired notifications
  findExpired: (): TbNotification[] => {
    const now = new Date().toISOString();
    return mockTbNotification
      .filter(notif => notif.expires_at && notif.expires_at <= now)
      .sort((a, b) => (a.expires_at || '').localeCompare(b.expires_at || ''));
  },

  // Find expiring soon
  findExpiringSoon: (hoursAhead: number = 24): TbNotification[] => {
    const now = new Date();
    const futureTime = new Date(now.getTime() + (hoursAhead * 60 * 60 * 1000));
    const futureTimeISO = futureTime.toISOString();
    const nowISO = now.toISOString();

    return mockTbNotification
      .filter(notif => 
        notif.expires_at &&
        notif.expires_at > nowISO &&
        notif.expires_at <= futureTimeISO &&
        notif.is_active
      )
      .sort((a, b) => (a.expires_at || '').localeCompare(b.expires_at || ''));
  },

  // Find all notifications
  findAll: (): TbNotification[] => {
    return mockTbNotification.sort((a, b) => 
      (b.created_at || '').localeCompare(a.created_at || '')
    );
  },

  // Update notification
  update: (id: string, data: Partial<TbNotification>, updated_by_id?: string): TbNotification | null => {
    const index = mockTbNotification.findIndex(notif => notif.id === id);
    if (index === -1) return null;

    mockTbNotification[index] = {
      ...mockTbNotification[index],
      ...data,
      updated_at: getCurrentTimestamp(),
      updated_by_id: updated_by_id || null
    };
    return mockTbNotification[index];
  },

  // Delete notification (hard delete)
  delete: (id: string): boolean => {
    const index = mockTbNotification.findIndex(notif => notif.id === id);
    if (index === -1) return false;
    
    mockTbNotification.splice(index, 1);
    return true;
  },

  // Mark as read
  markAsRead: (id: string, userId?: string): TbNotification | null => {
    return tbNotificationCrud.update(id, {
      is_read: true,
      read_at: getCurrentTimestamp()
    }, userId);
  },

  // Mark as unread
  markAsUnread: (id: string, userId?: string): TbNotification | null => {
    return tbNotificationCrud.update(id, {
      is_read: false,
      read_at: null
    }, userId);
  },

  // Mark all as read for user
  markAllAsReadForUser: (userId: string): number => {
    const unreadNotifications = tbNotificationCrud.findUnreadByUserId(userId);
    let markedCount = 0;

    unreadNotifications.forEach(notif => {
      if (tbNotificationCrud.markAsRead(notif.id, userId)) {
        markedCount++;
      }
    });

    return markedCount;
  },

  // Soft delete (deactivate)
  deactivate: (id: string, updated_by_id?: string): TbNotification | null => {
    return tbNotificationCrud.update(id, { is_active: false }, updated_by_id);
  },

  // Reactivate
  reactivate: (id: string, updated_by_id?: string): TbNotification | null => {
    return tbNotificationCrud.update(id, { is_active: true }, updated_by_id);
  },

  // Create user notification
  createUserNotification: (userId: string, title: string, message: string, type?: 'info' | 'warning' | 'error' | 'success', priority?: 'low' | 'medium' | 'high' | 'urgent', expiresInHours?: number, created_by_id?: string): TbNotification => {
    const expiresAt = expiresInHours ? 
      new Date(Date.now() + (expiresInHours * 60 * 60 * 1000)).toISOString() : 
      null;

    return tbNotificationCrud.create({
      title,
      message,
      type: type || 'info',
      priority: priority || 'medium',
      user_id: userId,
      expires_at: expiresAt,
      created_by_id: created_by_id || null
    });
  },

  // Create business unit notification
  createBusinessUnitNotification: (businessUnitId: string, title: string, message: string, type?: 'info' | 'warning' | 'error' | 'success', priority?: 'low' | 'medium' | 'high' | 'urgent', expiresInHours?: number, created_by_id?: string): TbNotification => {
    const expiresAt = expiresInHours ? 
      new Date(Date.now() + (expiresInHours * 60 * 60 * 1000)).toISOString() : 
      null;

    return tbNotificationCrud.create({
      title,
      message,
      type: type || 'info',
      priority: priority || 'medium',
      business_unit_id: businessUnitId,
      expires_at: expiresAt,
      created_by_id: created_by_id || null
    });
  },

  // Create system notification
  createSystemNotification: (title: string, message: string, type?: 'info' | 'warning' | 'error' | 'success', priority?: 'low' | 'medium' | 'high' | 'urgent', expiresInHours?: number, created_by_id?: string): TbNotification => {
    const expiresAt = expiresInHours ? 
      new Date(Date.now() + (expiresInHours * 60 * 60 * 1000)).toISOString() : 
      null;

    return tbNotificationCrud.create({
      title,
      message,
      type: type || 'info',
      priority: priority || 'medium',
      expires_at: expiresAt,
      created_by_id: created_by_id || 'system'
    });
  },

  // Get user notifications with filters
  getUserNotifications: (userId: string, options?: {
    includeRead?: boolean;
    includeExpired?: boolean;
    type?: 'info' | 'warning' | 'error' | 'success';
    priority?: 'low' | 'medium' | 'high' | 'urgent';
    limit?: number;
  }): TbNotification[] => {
    const now = new Date().toISOString();
    let notifications = mockTbNotification.filter(notif => 
      notif.user_id === userId && notif.is_active
    );

    if (!options?.includeRead) {
      notifications = notifications.filter(notif => !notif.is_read);
    }

    if (!options?.includeExpired) {
      notifications = notifications.filter(notif => 
        !notif.expires_at || notif.expires_at > now
      );
    }

    if (options?.type) {
      notifications = notifications.filter(notif => notif.type === options.type);
    }

    if (options?.priority) {
      notifications = notifications.filter(notif => notif.priority === options.priority);
    }

    notifications.sort((a, b) => (b.created_at || '').localeCompare(a.created_at || ''));

    if (options?.limit) {
      notifications = notifications.slice(0, options.limit);
    }

    return notifications;
  },

  // Clean up expired notifications
  cleanupExpiredNotifications: (updated_by_id?: string): number => {
    const expiredNotifications = tbNotificationCrud.findExpired();
    let cleanedCount = 0;

    expiredNotifications.forEach(notif => {
      if (tbNotificationCrud.deactivate(notif.id, updated_by_id)) {
        cleanedCount++;
      }
    });

    return cleanedCount;
  },

  // Get unread count for user
  getUnreadCountForUser: (userId: string): number => {
    return tbNotificationCrud.findUnreadByUserId(userId).length;
  },

  // Get notification statistics
  getStats: () => {
    const allNotifications = mockTbNotification;
    const activeNotifications = allNotifications.filter(n => n.is_active);
    const now = new Date().toISOString();
    const expiredNotifications = allNotifications.filter(n => n.expires_at && n.expires_at <= now);

    return {
      total: allNotifications.length,
      active: activeNotifications.length,
      inactive: allNotifications.length - activeNotifications.length,
      expired: expiredNotifications.length,
      unread: activeNotifications.filter(n => !n.is_read).length,
      byType: {
        info: activeNotifications.filter(n => n.type === 'info').length,
        warning: activeNotifications.filter(n => n.type === 'warning').length,
        error: activeNotifications.filter(n => n.type === 'error').length,
        success: activeNotifications.filter(n => n.type === 'success').length
      },
      byPriority: {
        low: activeNotifications.filter(n => n.priority === 'low').length,
        medium: activeNotifications.filter(n => n.priority === 'medium').length,
        high: activeNotifications.filter(n => n.priority === 'high').length,
        urgent: activeNotifications.filter(n => n.priority === 'urgent').length
      },
      userSpecific: activeNotifications.filter(n => n.user_id !== null).length,
      businessUnitSpecific: activeNotifications.filter(n => n.business_unit_id !== null && n.user_id === null).length,
      systemWide: activeNotifications.filter(n => n.user_id === null && n.business_unit_id === null).length,
      urgentUnread: activeNotifications.filter(n => n.priority === 'urgent' && !n.is_read).length
    };
  }
};
