import { TbMessageFormat } from './types';
import { generateUuid, getCurrentTimestamp } from './utils';

// =============== MOCK TB_MESSAGE_FORMAT DATA ===============
export let mockTbMessageFormat: TbMessageFormat[] = [
  // Welcome messages
  {
    id: "msg-001",
    name: "welcome_new_user",
    message: "ยินดีต้อนรับสู่ระบบ Carmen Software! {user_name} บัญชีของคุณพร้อมใช้งานแล้ว",
    is_email: true,
    is_sms: false,
    is_in_app: true,
    created_at: "2023-01-01T00:00:00.000Z",
    created_by_id: "system",
    updated_at: "2023-01-01T00:00:00.000Z",
    updated_by_id: "system"
  },

  {
    id: "msg-002",
    name: "welcome_new_employee",
    message: "ยินดีต้อนรับ {employee_name} เข้าสู่ {company_name}! รหัสพนักงานของคุณคือ {employee_id}",
    is_email: true,
    is_sms: true,
    is_in_app: true,
    created_at: "2023-01-01T00:00:00.000Z",
    created_by_id: "system",
    updated_at: "2023-01-01T00:00:00.000Z",
    updated_by_id: "system"
  },

  // Password related
  {
    id: "msg-003",
    name: "password_reset_request",
    message: "มีการร้องขอรีเซ็ตรหัสผ่านสำหรับบัญชี {email} ใช้รหัส {reset_code} ภายใน 15 นาที",
    is_email: true,
    is_sms: true,
    is_in_app: false,
    created_at: "2023-01-01T00:00:00.000Z",
    created_by_id: "system",
    updated_at: "2023-01-01T00:00:00.000Z",
    updated_by_id: "system"
  },

  {
    id: "msg-004", 
    name: "password_changed_success",
    message: "รหัสผ่านของคุณถูกเปลี่ยนเรียบร้อยแล้ว เมื่อ {change_date} หากไม่ใช่คุณ กรุณาติดต่อผู้ดูแลระบบ",
    is_email: true,
    is_sms: false,
    is_in_app: true,
    created_at: "2023-01-01T00:00:00.000Z",
    created_by_id: "system",
    updated_at: "2023-01-01T00:00:00.000Z",
    updated_by_id: "system"
  },

  // Order notifications
  {
    id: "msg-005",
    name: "order_confirmation",
    message: "ออเดอร์ #{order_number} ยืนยันแล้ว มูลค่า {total_amount} {currency} จะส่งภายใน {delivery_days} วัน",
    is_email: true,
    is_sms: true,
    is_in_app: true,
    created_at: "2023-02-01T00:00:00.000Z",
    created_by_id: "user-001",
    updated_at: "2023-02-01T00:00:00.000Z",
    updated_by_id: "user-001"
  },

  {
    id: "msg-006",
    name: "order_shipped",
    message: "ออเดอร์ #{order_number} จัดส่งแล้ว หมายเลขติดตาม: {tracking_number}",
    is_email: true,
    is_sms: true,
    is_in_app: true,
    created_at: "2023-02-01T00:00:00.000Z",
    created_by_id: "user-001",
    updated_at: "2023-02-01T00:00:00.000Z",
    updated_by_id: "user-001"
  },

  // Payment notifications
  {
    id: "msg-007",
    name: "payment_success",
    message: "การชำระเงินสำเร็จ! ใบเสร็จ #{receipt_number} จำนวน {amount} {currency} วิธีการ: {payment_method}",
    is_email: true,
    is_sms: true,
    is_in_app: true,
    created_at: "2023-02-01T00:00:00.000Z",
    created_by_id: "user-002",
    updated_at: "2023-02-01T00:00:00.000Z",
    updated_by_id: "user-002"
  },

  {
    id: "msg-008",
    name: "payment_failed",
    message: "การชำระเงินไม่สำเร็จ ออเดอร์ #{order_number} สาเหตุ: {failure_reason} กรุณาลองใหม่",
    is_email: true,
    is_sms: false,
    is_in_app: true,
    created_at: "2023-02-01T00:00:00.000Z",
    created_by_id: "user-002",
    updated_at: "2023-02-01T00:00:00.000Z",
    updated_by_id: "user-002"
  },

  // Hotel specific
  {
    id: "msg-009",
    name: "hotel_booking_confirmation",
    message: "การจองห้องพัก {hotel_name} ยืนยันแล้ว\nห้อง: {room_number} ({room_type})\nเช็คอิน: {checkin_date}\nเช็คเอาท์: {checkout_date}\nรหัสจอง: {booking_code}",
    is_email: true,
    is_sms: true,
    is_in_app: true,
    created_at: "2023-02-15T00:00:00.000Z",
    created_by_id: "user-004",
    updated_at: "2023-02-15T00:00:00.000Z",
    updated_by_id: "user-004"
  },

  {
    id: "msg-010",
    name: "hotel_checkin_reminder",
    message: "แจ้งเตือน: เช็คอินพรุ่งนี้ที่ {hotel_name} ห้อง {room_number} เวลา {checkin_time} รหัสจอง: {booking_code}",
    is_email: true,
    is_sms: true,
    is_in_app: false,
    created_at: "2023-02-15T00:00:00.000Z",
    created_by_id: "user-004",
    updated_at: "2023-02-15T00:00:00.000Z",
    updated_by_id: "user-004"
  },

  // Restaurant specific
  {
    id: "msg-011",
    name: "restaurant_reservation_confirmed",
    message: "การจองโต๊ะที่ {restaurant_name} ยืนยันแล้ว\nวันที่: {reservation_date}\nเวลา: {reservation_time}\nจำนวน: {party_size} ท่าน\nโต๊ะ: {table_number}",
    is_email: true,
    is_sms: true,
    is_in_app: true,
    created_at: "2023-03-01T00:00:00.000Z",
    created_by_id: "user-006",
    updated_at: "2023-03-01T00:00:00.000Z",
    updated_by_id: "user-006"
  },

  {
    id: "msg-012",
    name: "delivery_status_update",
    message: "อัปเดตการจัดส่ง: ออเดอร์ #{order_number} อยู่ระหว่างการจัดส่ง คาดว่าจะถึงภายใน {estimated_time} นาที",
    is_email: false,
    is_sms: true,
    is_in_app: true,
    created_at: "2023-03-01T00:00:00.000Z",
    created_by_id: "user-006",
    updated_at: "2023-03-01T00:00:00.000Z",
    updated_by_id: "user-006"
  },

  // System notifications
  {
    id: "msg-013",
    name: "system_maintenance_notification",
    message: "แจ้งเตือน: ระบบจะปิดปรับปรุงวันที่ {maintenance_date} เวลา {start_time} - {end_time} ขออภัยในความไม่สะดวก",
    is_email: true,
    is_sms: false,
    is_in_app: true,
    created_at: "2023-01-01T00:00:00.000Z",
    created_by_id: "system",
    updated_at: "2023-01-01T00:00:00.000Z",
    updated_by_id: "system"
  },

  {
    id: "msg-014",
    name: "backup_completion_notice",
    message: "การสำรองข้อมูลเสร็จสิ้น: {backup_date} ขนาดไฟล์: {backup_size} สถานะ: {status}",
    is_email: true,
    is_sms: false,
    is_in_app: false,
    created_at: "2023-01-01T00:00:00.000Z",
    created_by_id: "system",
    updated_at: "2023-01-01T00:00:00.000Z",
    updated_by_id: "system"
  },

  // Account security
  {
    id: "msg-015",
    name: "suspicious_login_alert",
    message: "พบการเข้าสู่ระบบผิดปกติ\nIP: {ip_address}\nตำแหน่ง: {location}\nเวลา: {login_time}\nหากไม่ใช่คุณ กรุณาเปลี่ยนรหัสผ่าน",
    is_email: true,
    is_sms: true,
    is_in_app: true,
    created_at: "2023-01-01T00:00:00.000Z",
    created_by_id: "system",
    updated_at: "2023-01-01T00:00:00.000Z",
    updated_by_id: "system"
  },

  {
    id: "msg-016",
    name: "account_locked_notification",
    message: "บัญชีของคุณถูกล็อกเนื่องจากเข้าสู่ระบบผิด {max_attempts} ครั้ง จะปลดล็อกอัตโนมัติใน {unlock_time} นาที",
    is_email: true,
    is_sms: true,
    is_in_app: false,
    created_at: "2023-01-01T00:00:00.000Z",
    created_by_id: "system",
    updated_at: "2023-01-01T00:00:00.000Z",
    updated_by_id: "system"
  },

  // Approval workflows
  {
    id: "msg-017",
    name: "approval_request_submitted",
    message: "คำขออนุมัติ {request_type} #{request_number} ส่งเรียบร้อยแล้ว จำนวน {amount} {currency} รอการพิจารณา",
    is_email: true,
    is_sms: false,
    is_in_app: true,
    created_at: "2023-02-01T00:00:00.000Z",
    created_by_id: "user-003",
    updated_at: "2023-02-01T00:00:00.000Z",
    updated_by_id: "user-003"
  },

  {
    id: "msg-018",
    name: "approval_request_approved",
    message: "คำขออนุมัติ {request_type} #{request_number} ได้รับการอนุมัติแล้ว โดย {approver_name} เมื่อ {approval_date}",
    is_email: true,
    is_sms: true,
    is_in_app: true,
    created_at: "2023-02-01T00:00:00.000Z",
    created_by_id: "user-003",
    updated_at: "2023-02-01T00:00:00.000Z",
    updated_by_id: "user-003"
  },

  {
    id: "msg-019",
    name: "approval_request_rejected",
    message: "คำขออนุมัติ {request_type} #{request_number} ถูกปฏิเสธ เหตุผล: {rejection_reason} โดย {approver_name}",
    is_email: true,
    is_sms: false,
    is_in_app: true,
    created_at: "2023-02-01T00:00:00.000Z",
    created_by_id: "user-003",
    updated_at: "2023-02-01T00:00:00.000Z",
    updated_by_id: "user-003"
  },

  // Inventory alerts
  {
    id: "msg-020",
    name: "low_stock_alert",
    message: "แจ้งเตือนสินค้าคงเหลือต่ำ: {product_name} เหลือ {current_stock} {unit} (ขั้นต่ำ {min_stock} {unit})",
    is_email: true,
    is_sms: false,
    is_in_app: true,
    created_at: "2023-02-01T00:00:00.000Z",
    created_by_id: "user-003",
    updated_at: "2023-02-01T00:00:00.000Z",
    updated_by_id: "user-003"
  },

  {
    id: "msg-021",
    name: "stock_replenishment_notice",
    message: "สินค้าเข้าใหม่: {product_name} จำนวน {quantity} {unit} วันที่ {received_date} โดย {received_by}",
    is_email: false,
    is_sms: false,
    is_in_app: true,
    created_at: "2023-02-01T00:00:00.000Z",
    created_by_id: "user-003",
    updated_at: "2023-02-01T00:00:00.000Z",
    updated_by_id: "user-003"
  },

  // Promotional messages
  {
    id: "msg-022",
    name: "special_promotion_announcement",
    message: "โปรโมชั่นพิเศษ! {promotion_title}\nส่วนลด {discount_percentage}% หรือ {discount_amount} {currency}\nใช้ได้ถึง {expiry_date}\nรหัส: {promo_code}",
    is_email: true,
    is_sms: true,
    is_in_app: true,
    created_at: "2023-03-01T00:00:00.000Z",
    created_by_id: "user-006",
    updated_at: "2023-03-01T00:00:00.000Z",
    updated_by_id: "user-006"
  },

  // Birthday & anniversary
  {
    id: "msg-023",
    name: "birthday_greeting",
    message: "🎉 สุขสันต์วันเกิด {customer_name}! รับคูปองส่วนลด {discount_amount} {currency} ใช้ได้ถึง {expiry_date}",
    is_email: true,
    is_sms: true,
    is_in_app: true,
    created_at: "2023-03-01T00:00:00.000Z",
    created_by_id: "user-005",
    updated_at: "2023-03-01T00:00:00.000Z",
    updated_by_id: "user-005"
  },

  // Two-factor authentication
  {
    id: "msg-024",
    name: "two_factor_auth_code",
    message: "รหัสยืนยันตัวตน: {auth_code} ใช้ได้ภายใน {validity_minutes} นาที อย่าแชร์รหัสนี้กับผู้อื่น",
    is_email: false,
    is_sms: true,
    is_in_app: false,
    created_at: "2023-01-01T00:00:00.000Z",
    created_by_id: "system",
    updated_at: "2023-01-01T00:00:00.000Z",
    updated_by_id: "system"
  },

  // Recent addition
  {
    id: "msg-025",
    name: "subscription_expiry_warning",
    message: "สมาชิก {subscription_plan} จะหมดอายุในอีก {days_remaining} วัน เมื่อ {expiry_date} กรุณาต่ออายุเพื่อใช้งานต่อ",
    is_email: true,
    is_sms: false,
    is_in_app: true,
    created_at: getCurrentTimestamp(),
    created_by_id: "user-001",
    updated_at: getCurrentTimestamp(),
    updated_by_id: "user-001"
  }
];

// =============== TB_MESSAGE_FORMAT CRUD FUNCTIONS ===============
export const tbMessageFormatCrud = {
  // Create new message format
  create: (data: Omit<TbMessageFormat, 'id' | 'created_at' | 'updated_at'>): TbMessageFormat => {
    const newFormat: TbMessageFormat = {
      id: generateUuid(),
      is_email: false,
      is_sms: false,
      is_in_app: true,
      created_at: getCurrentTimestamp(),
      updated_at: getCurrentTimestamp(),
      ...data
    };
    mockTbMessageFormat.push(newFormat);
    return newFormat;
  },

  // Find by ID
  findById: (id: string): TbMessageFormat | null => {
    return mockTbMessageFormat.find(format => format.id === id) || null;
  },

  // Find by name
  findByName: (name: string): TbMessageFormat | null => {
    return mockTbMessageFormat.find(format => format.name === name) || null;
  },

  // Find email formats
  findEmailFormats: (): TbMessageFormat[] => {
    return mockTbMessageFormat
      .filter(format => format.is_email)
      .sort((a, b) => a.name.localeCompare(b.name));
  },

  // Find SMS formats
  findSmsFormats: (): TbMessageFormat[] => {
    return mockTbMessageFormat
      .filter(format => format.is_sms)
      .sort((a, b) => a.name.localeCompare(b.name));
  },

  // Find in-app formats
  findInAppFormats: (): TbMessageFormat[] => {
    return mockTbMessageFormat
      .filter(format => format.is_in_app)
      .sort((a, b) => a.name.localeCompare(b.name));
  },

  // Find by communication channel
  findByChannel: (channel: 'email' | 'sms' | 'in_app'): TbMessageFormat[] => {
    const channelMap = {
      email: 'is_email',
      sms: 'is_sms',
      in_app: 'is_in_app'
    };
    
    const fieldName = channelMap[channel] as keyof TbMessageFormat;
    return mockTbMessageFormat
      .filter(format => format[fieldName])
      .sort((a, b) => a.name.localeCompare(b.name));
  },

  // Find multi-channel formats
  findMultiChannelFormats: (): TbMessageFormat[] => {
    return mockTbMessageFormat
      .filter(format => {
        const channels = [format.is_email, format.is_sms, format.is_in_app].filter(Boolean);
        return channels.length > 1;
      })
      .sort((a, b) => a.name.localeCompare(b.name));
  },

  // Search by name or message content
  search: (query: string): TbMessageFormat[] => {
    const searchTerm = query.toLowerCase();
    return mockTbMessageFormat
      .filter(format => 
        format.name.toLowerCase().includes(searchTerm) ||
        (format.message && format.message.toLowerCase().includes(searchTerm))
      )
      .sort((a, b) => {
        // Prioritize exact name matches
        if (a.name.toLowerCase() === searchTerm) return -1;
        if (b.name.toLowerCase() === searchTerm) return 1;
        
        // Then prioritize name starts with
        if (a.name.toLowerCase().startsWith(searchTerm)) return -1;
        if (b.name.toLowerCase().startsWith(searchTerm)) return 1;
        
        // Finally sort alphabetically
        return a.name.localeCompare(b.name);
      });
  },

  // Find formats by category
  findByCategory: (category: 'welcome' | 'password' | 'order' | 'payment' | 'hotel' | 'restaurant' | 'system' | 'security' | 'approval' | 'inventory' | 'promotion' | 'auth'): TbMessageFormat[] => {
    const categoryPrefixes = {
      welcome: ['welcome_'],
      password: ['password_'],
      order: ['order_'],
      payment: ['payment_'],
      hotel: ['hotel_'],
      restaurant: ['restaurant_', 'delivery_'],
      system: ['system_', 'backup_'],
      security: ['suspicious_', 'account_locked'],
      approval: ['approval_'],
      inventory: ['stock_', 'low_stock'],
      promotion: ['special_promotion', 'birthday_'],
      auth: ['two_factor_']
    };

    const prefixes = categoryPrefixes[category] || [];
    return mockTbMessageFormat
      .filter(format => 
        prefixes.some(prefix => format.name.startsWith(prefix))
      )
      .sort((a, b) => a.name.localeCompare(b.name));
  },

  // Find all formats
  findAll: (): TbMessageFormat[] => {
    return mockTbMessageFormat.sort((a, b) => a.name.localeCompare(b.name));
  },

  // Update format
  update: (id: string, data: Partial<TbMessageFormat>, updated_by_id?: string): TbMessageFormat | null => {
    const index = mockTbMessageFormat.findIndex(format => format.id === id);
    if (index === -1) return null;

    mockTbMessageFormat[index] = {
      ...mockTbMessageFormat[index],
      ...data,
      updated_at: getCurrentTimestamp(),
      updated_by_id: updated_by_id || null
    };
    return mockTbMessageFormat[index];
  },

  // Delete format (hard delete)
  delete: (id: string): boolean => {
    const index = mockTbMessageFormat.findIndex(format => format.id === id);
    if (index === -1) return false;
    
    mockTbMessageFormat.splice(index, 1);
    return true;
  },

  // Enable/disable channels
  enableChannel: (id: string, channel: 'email' | 'sms' | 'in_app', updated_by_id?: string): TbMessageFormat | null => {
    const channelMap = {
      email: 'is_email',
      sms: 'is_sms',
      in_app: 'is_in_app'
    };
    
    const updateData: Partial<TbMessageFormat> = {};
    updateData[channelMap[channel] as keyof TbMessageFormat] = true as any;
    
    return tbMessageFormatCrud.update(id, updateData, updated_by_id);
  },

  disableChannel: (id: string, channel: 'email' | 'sms' | 'in_app', updated_by_id?: string): TbMessageFormat | null => {
    const channelMap = {
      email: 'is_email',
      sms: 'is_sms',
      in_app: 'is_in_app'
    };
    
    const updateData: Partial<TbMessageFormat> = {};
    updateData[channelMap[channel] as keyof TbMessageFormat] = false as any;
    
    return tbMessageFormatCrud.update(id, updateData, updated_by_id);
  },

  // Check if format name exists
  nameExists: (name: string, excludeId?: string): boolean => {
    return mockTbMessageFormat.some(format => 
      format.name === name && format.id !== excludeId
    );
  },

  // Format message with variables
  formatMessage: (formatName: string, variables: Record<string, string>): { success: boolean; message?: string; error?: string } => {
    const format = tbMessageFormatCrud.findByName(formatName);
    if (!format) {
      return { success: false, error: 'Message format not found' };
    }

    if (!format.message) {
      return { success: false, error: 'Message template is empty' };
    }

    let formattedMessage = format.message;
    
    // Replace variables in {variable_name} format
    for (const [key, value] of Object.entries(variables)) {
      const placeholder = `{${key}}`;
      formattedMessage = formattedMessage.replaceAll(placeholder, value);
    }

    return { success: true, message: formattedMessage };
  },

  // Extract variables from message template
  extractVariables: (formatName: string): string[] => {
    const format = tbMessageFormatCrud.findByName(formatName);
    if (!format || !format.message) return [];

    const variablePattern = /\{([^}]+)\}/g;
    const variables: string[] = [];
    let match;

    while ((match = variablePattern.exec(format.message)) !== null) {
      if (!variables.includes(match[1])) {
        variables.push(match[1]);
      }
    }

    return variables.sort();
  },

  // Get channel distribution
  getChannelDistribution: (): { email: number; sms: number; in_app: number; multi_channel: number } => {
    const email = mockTbMessageFormat.filter(f => f.is_email).length;
    const sms = mockTbMessageFormat.filter(f => f.is_sms).length;
    const in_app = mockTbMessageFormat.filter(f => f.is_in_app).length;
    const multi_channel = tbMessageFormatCrud.findMultiChannelFormats().length;

    return { email, sms, in_app, multi_channel };
  },

  // Clone format with new name
  cloneFormat: (sourceId: string, newName: string, created_by_id?: string): TbMessageFormat | null => {
    const sourceFormat = tbMessageFormatCrud.findById(sourceId);
    if (!sourceFormat) return null;

    if (tbMessageFormatCrud.nameExists(newName)) {
      return null; // Name already exists
    }

    const { id, created_at, updated_at, created_by_id: _, updated_by_id: __, ...cloneData } = sourceFormat;
    
    return tbMessageFormatCrud.create({
      ...cloneData,
      name: newName,
      created_by_id: created_by_id || null
    });
  },

  // Bulk update channels
  bulkUpdateChannels: (formatIds: string[], channels: { email?: boolean; sms?: boolean; in_app?: boolean }, updated_by_id?: string): number => {
    let updatedCount = 0;

    formatIds.forEach(id => {
      const updateData: Partial<TbMessageFormat> = {};
      if (channels.email !== undefined) updateData.is_email = channels.email;
      if (channels.sms !== undefined) updateData.is_sms = channels.sms;
      if (channels.in_app !== undefined) updateData.is_in_app = channels.in_app;

      if (tbMessageFormatCrud.update(id, updateData, updated_by_id)) {
        updatedCount++;
      }
    });

    return updatedCount;
  },

  // Validate message format
  validateFormat: (data: Partial<TbMessageFormat>): { valid: boolean; errors: string[] } => {
    const errors: string[] = [];

    if (data.name) {
      if (data.name.length < 3) {
        errors.push('Format name must be at least 3 characters');
      }
      if (!/^[a-z_][a-z0-9_]*$/.test(data.name)) {
        errors.push('Format name must contain only lowercase letters, numbers, and underscores, starting with a letter or underscore');
      }
    }

    if (data.message !== undefined && data.message !== null) {
      if (data.message.length === 0) {
        errors.push('Message cannot be empty');
      }
      if (data.message.length > 2000) {
        errors.push('Message cannot exceed 2000 characters');
      }
    }

    // Check if at least one channel is enabled
    if (data.is_email === false && data.is_sms === false && data.is_in_app === false) {
      errors.push('At least one communication channel must be enabled');
    }

    return {
      valid: errors.length === 0,
      errors
    };
  },

  // Get usage statistics
  getStats: () => {
    const allFormats = mockTbMessageFormat;
    const channelDistribution = tbMessageFormatCrud.getChannelDistribution();

    return {
      total: allFormats.length,
      byCategory: {
        welcome: tbMessageFormatCrud.findByCategory('welcome').length,
        password: tbMessageFormatCrud.findByCategory('password').length,
        order: tbMessageFormatCrud.findByCategory('order').length,
        payment: tbMessageFormatCrud.findByCategory('payment').length,
        hotel: tbMessageFormatCrud.findByCategory('hotel').length,
        restaurant: tbMessageFormatCrud.findByCategory('restaurant').length,
        system: tbMessageFormatCrud.findByCategory('system').length,
        security: tbMessageFormatCrud.findByCategory('security').length,
        approval: tbMessageFormatCrud.findByCategory('approval').length,
        inventory: tbMessageFormatCrud.findByCategory('inventory').length,
        promotion: tbMessageFormatCrud.findByCategory('promotion').length,
        auth: tbMessageFormatCrud.findByCategory('auth').length
      },
      ...channelDistribution,
      avgVariablesPerMessage: (() => {
        const totalVariables = allFormats.reduce((total, format) => {
          return total + tbMessageFormatCrud.extractVariables(format.name).length;
        }, 0);
        return allFormats.length > 0 ? Math.round(totalVariables / allFormats.length * 10) / 10 : 0;
      })(),
      formatsWithVariables: allFormats.filter(format => 
        tbMessageFormatCrud.extractVariables(format.name).length > 0
      ).length
    };
  }
};
