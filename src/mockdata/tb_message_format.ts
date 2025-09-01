import { generateId, getCurrentTimestamp } from "@/libs/utils";

export interface MessageFormat {
  id: string;
  name: string;
  message: string;
  is_email: boolean;
  is_sms: boolean;
  is_in_app: boolean;
  created_at: string;
  created_by_id: string;
  updated_at: string;
  updated_by_id: string | null;
}

export const messageFormats: MessageFormat[] = [
  {
    id: "550e8400-e29b-41d4-a716-446655440001",
    name: "Welcome Message",
    message: "Welcome to our system, {user_name}! We're glad to have you on board.",
    is_email: true,
    is_sms: false,
    is_in_app: true,
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440002",
    name: "Password Reset",
    message: "Your password has been reset. New password: {new_password}",
    is_email: true,
    is_sms: true,
    is_in_app: false,
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440003",
    name: "Order Confirmation",
    message: "Your order {order_id} has been confirmed. Total amount: {total_amount}",
    is_email: true,
    is_sms: true,
    is_in_app: true,
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null
  }
];

// CREATE - สร้าง MessageFormat ใหม่
export const createMessageFormat = (messageFormatData: Omit<MessageFormat, 'id' | 'created_at' | 'updated_at'>): MessageFormat => {
  const newMessageFormat: MessageFormat = {
    ...messageFormatData,
    id: generateId(),
    created_at: getCurrentTimestamp(),
    updated_at: getCurrentTimestamp()
  };
  
  messageFormats.push(newMessageFormat);
  return newMessageFormat;
};

// READ - อ่าน MessageFormat ทั้งหมด
export const getAllMessageFormats = (): MessageFormat[] => {
  return [...messageFormats];
};

// READ - อ่าน MessageFormat ตาม ID
export const getMessageFormatById = (id: string): MessageFormat | undefined => {
  return messageFormats.find(messageFormat => messageFormat.id === id);
};

// READ - อ่าน MessageFormat ตาม name
export const getMessageFormatByName = (name: string): MessageFormat[] => {
  return messageFormats.filter(messageFormat => 
    messageFormat.name.toLowerCase().includes(name.toLowerCase())
  );
};

// READ - อ่าน MessageFormat ที่เป็น email
export const getEmailMessageFormats = (): MessageFormat[] => {
  return messageFormats.filter(messageFormat => messageFormat.is_email);
};

// READ - อ่าน MessageFormat ที่เป็น SMS
export const getSMSMessageFormats = (): MessageFormat[] => {
  return messageFormats.filter(messageFormat => messageFormat.is_sms);
};

// READ - อ่าน MessageFormat ที่เป็น in-app
export const getInAppMessageFormats = (): MessageFormat[] => {
  return messageFormats.filter(messageFormat => messageFormat.is_in_app);
};

// READ - อ่าน MessageFormat ที่เป็น email และ SMS
export const getEmailAndSMSMessageFormats = (): MessageFormat[] => {
  return messageFormats.filter(messageFormat => messageFormat.is_email && messageFormat.is_sms);
};

// READ - อ่าน MessageFormat ที่เป็น email และ in-app
export const getEmailAndInAppMessageFormats = (): MessageFormat[] => {
  return messageFormats.filter(messageFormat => messageFormat.is_email && messageFormat.is_in_app);
};

// READ - อ่าน MessageFormat ที่เป็น SMS และ in-app
export const getSMSAndInAppMessageFormats = (): MessageFormat[] => {
  return messageFormats.filter(messageFormat => messageFormat.is_sms && messageFormat.is_in_app);
};

// READ - อ่าน MessageFormat ที่เป็นทั้ง email, SMS และ in-app
export const getAllChannelMessageFormats = (): MessageFormat[] => {
  return messageFormats.filter(messageFormat => 
    messageFormat.is_email && messageFormat.is_sms && messageFormat.is_in_app
  );
};

// UPDATE - อัปเดต MessageFormat
export const updateMessageFormat = (id: string, updateData: Partial<Omit<MessageFormat, 'id' | 'created_at' | 'created_by_id'>>): MessageFormat | null => {
  const index = messageFormats.findIndex(messageFormat => messageFormat.id === id);
  
  if (index === -1) {
    return null;
  }
  
  messageFormats[index] = {
    ...messageFormats[index],
    ...updateData,
    updated_at: getCurrentTimestamp()
  };
  
  return messageFormats[index];
};

// UPDATE - อัปเดต MessageFormat name
export const updateMessageFormatName = (id: string, name: string): MessageFormat | null => {
  return updateMessageFormat(id, { name });
};

// UPDATE - อัปเดต MessageFormat message
export const updateMessageFormatMessage = (id: string, message: string): MessageFormat | null => {
  return updateMessageFormat(id, { message });
};

// UPDATE - อัปเดต MessageFormat email channel
export const updateMessageFormatEmailChannel = (id: string, isEmail: boolean): MessageFormat | null => {
  return updateMessageFormat(id, { is_email: isEmail });
};

// UPDATE - อัปเดต MessageFormat SMS channel
export const updateMessageFormatSMSChannel = (id: string, isSMS: boolean): MessageFormat | null => {
  return updateMessageFormat(id, { is_sms: isSMS });
};

// UPDATE - อัปเดต MessageFormat in-app channel
export const updateMessageFormatInAppChannel = (id: string, isInApp: boolean): MessageFormat | null => {
  return updateMessageFormat(id, { is_in_app: isInApp });
};

// UPDATE - อัปเดต MessageFormat channels
export const updateMessageFormatChannels = (id: string, isEmail: boolean, isSMS: boolean, isInApp: boolean): MessageFormat | null => {
  return updateMessageFormat(id, { 
    is_email: isEmail,
    is_sms: isSMS,
    is_in_app: isInApp
  });
};

// DELETE - ลบ MessageFormat
export const deleteMessageFormat = (id: string): boolean => {
  const index = messageFormats.findIndex(messageFormat => messageFormat.id === id);
  
  if (index === -1) {
    return false;
  }
  
  messageFormats.splice(index, 1);
  return true;
};

// DELETE - ลบ MessageFormat ตาม name
export const deleteMessageFormatByName = (name: string): boolean => {
  const messageFormat = messageFormats.find(mf => mf.name === name);
  if (!messageFormat) return false;
  
  return deleteMessageFormat(messageFormat.id);
};

// DELETE - ลบ MessageFormat ที่ไม่ใช่ email
export const deleteNonEmailMessageFormats = (): number => {
  const initialLength = messageFormats.length;
  const filteredMessageFormats = messageFormats.filter(messageFormat => messageFormat.is_email);
  const deletedCount = initialLength - filteredMessageFormats.length;
  
  messageFormats.length = 0;
  messageFormats.push(...filteredMessageFormats);
  
  return deletedCount;
};

// DELETE - ลบ MessageFormat ที่ไม่ใช่ SMS
export const deleteNonSMSMessageFormats = (): number => {
  const initialLength = messageFormats.length;
  const filteredMessageFormats = messageFormats.filter(messageFormat => messageFormat.is_sms);
  const deletedCount = initialLength - filteredMessageFormats.length;
  
  messageFormats.length = 0;
  messageFormats.push(...filteredMessageFormats);
  
  return deletedCount;
};

// DELETE - ลบ MessageFormat ที่ไม่ใช่ in-app
export const deleteNonInAppMessageFormats = (): number => {
  const initialLength = messageFormats.length;
  const filteredMessageFormats = messageFormats.filter(messageFormat => messageFormat.is_in_app);
  const deletedCount = initialLength - filteredMessageFormats.length;
  
  messageFormats.length = 0;
  messageFormats.push(...filteredMessageFormats);
  
  return deletedCount;
};

// Utility function สำหรับล้างข้อมูลทั้งหมด (ใช้สำหรับ testing)
export const clearAllMessageFormats = (): void => {
  messageFormats.length = 0;
};

// Utility function สำหรับนับจำนวน MessageFormat
export const getMessageFormatCount = (): number => {
  return messageFormats.length;
};

// Utility function สำหรับนับจำนวน MessageFormat ที่เป็น email
export const getEmailMessageFormatCount = (): number => {
  return messageFormats.filter(messageFormat => messageFormat.is_email).length;
};

// Utility function สำหรับนับจำนวน MessageFormat ที่เป็น SMS
export const getSMSMessageFormatCount = (): number => {
  return messageFormats.filter(messageFormat => messageFormat.is_sms).length;
};

// Utility function สำหรับนับจำนวน MessageFormat ที่เป็น in-app
export const getInAppMessageFormatCount = (): number => {
  return messageFormats.filter(messageFormat => messageFormat.is_in_app).length;
};

// Utility function สำหรับค้นหา MessageFormat แบบ advanced search
export const searchMessageFormats = (searchCriteria: {
  name?: string;
  message?: string;
  is_email?: boolean;
  is_sms?: boolean;
  is_in_app?: boolean;
  channel_type?: 'email' | 'sms' | 'in_app' | 'multi';
}): MessageFormat[] => {
  return messageFormats.filter(messageFormat => {
    if (searchCriteria.name && !messageFormat.name.toLowerCase().includes(searchCriteria.name.toLowerCase())) {
      return false;
    }
    
    if (searchCriteria.message && !messageFormat.message.toLowerCase().includes(searchCriteria.message.toLowerCase())) {
      return false;
    }
    
    if (searchCriteria.is_email !== undefined && messageFormat.is_email !== searchCriteria.is_email) {
      return false;
    }
    
    if (searchCriteria.is_sms !== undefined && messageFormat.is_sms !== searchCriteria.is_sms) {
      return false;
    }
    
    if (searchCriteria.is_in_app !== undefined && messageFormat.is_in_app !== searchCriteria.is_in_app) {
      return false;
    }
    
    if (searchCriteria.channel_type) {
      const channelCount = [messageFormat.is_email, messageFormat.is_sms, messageFormat.is_in_app].filter(Boolean).length;
      
      if (searchCriteria.channel_type === 'email' && !messageFormat.is_email) return false;
      if (searchCriteria.channel_type === 'sms' && !messageFormat.is_sms) return false;
      if (searchCriteria.channel_type === 'in_app' && !messageFormat.is_in_app) return false;
      if (searchCriteria.channel_type === 'multi' && channelCount < 2) return false;
    }
    
    return true;
  });
};

// Utility function สำหรับตรวจสอบ name ซ้ำ
export const isMessageFormatNameExists = (name: string): boolean => {
  return messageFormats.some(messageFormat => messageFormat.name === name);
};

// Utility function สำหรับตรวจสอบ MessageFormat ที่เป็น email
export const hasEmailMessageFormats = (): boolean => {
  return messageFormats.some(messageFormat => messageFormat.is_email);
};

// Utility function สำหรับตรวจสอบ MessageFormat ที่เป็น SMS
export const hasSMSMessageFormats = (): boolean => {
  return messageFormats.some(messageFormat => messageFormat.is_sms);
};

// Utility function สำหรับตรวจสอบ MessageFormat ที่เป็น in-app
export const hasInAppMessageFormats = (): boolean => {
  return messageFormats.some(messageFormat => messageFormat.is_in_app);
};

// Utility function สำหรับตรวจสอบ MessageFormat ที่เป็น multi-channel
export const hasMultiChannelMessageFormats = (): boolean => {
  return messageFormats.some(messageFormat => 
    [messageFormat.is_email, messageFormat.is_sms, messageFormat.is_in_app].filter(Boolean).length >= 2
  );
};
