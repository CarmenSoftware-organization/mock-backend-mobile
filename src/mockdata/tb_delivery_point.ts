import { generateId, getCurrentTimestamp } from "@/libs/utils";

export interface DeliveryPoint {
  id: string;
  name: string;
  is_active: boolean;
  note: string | null;
  info: any;
  dimension: any;
  created_at: string;
  created_by_id: string;
  updated_at: string;
  updated_by_id: string | null;
  deleted_at: string | null;
  deleted_by_id: string | null;
}

export const deliveryPoints: DeliveryPoint[] = [
  {
    id: "550e8400-e29b-41d4-a716-446655440001",
    name: "Bangkok Main Warehouse",
    is_active: true,
    note: "Main distribution center in Bangkok",
    info: { 
      address: "123 Sukhumvit Road, Bangkok 10110",
      contact_person: "John Smith",
      phone: "+66-2-123-4567",
      email: "bangkok@company.com"
    },
    dimension: null,
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440002",
    name: "Chiang Mai Distribution Center",
    is_active: true,
    note: "Northern region distribution center",
    info: { 
      address: "456 Nimman Road, Chiang Mai 50200",
      contact_person: "Jane Doe",
      phone: "+66-53-987-6543",
      email: "chiangmai@company.com"
    },
    dimension: null,
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "1bfdb891-58ee-499c-8115-34a964de8122",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440003",
    name: "Phuket Branch Office",
    is_active: false,
    note: "Southern region branch office",
    info: { 
      address: "789 Patong Beach Road, Phuket 83150",
      contact_person: "Mike Johnson",
      phone: "+66-76-555-1234",
      email: "phuket@company.com"
    },
    dimension: null,
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "3c5280a7-492e-421d-b739-7447455ce99e",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null
  }
];

// CREATE - สร้าง DeliveryPoint ใหม่
export const createDeliveryPoint = (deliveryPointData: Omit<DeliveryPoint, 'id' | 'created_at' | 'updated_at'>): DeliveryPoint => {
  const newDeliveryPoint: DeliveryPoint = {
    ...deliveryPointData,
    id: generateId(),
    created_at: getCurrentTimestamp(),
    updated_at: getCurrentTimestamp()
  };
  
  deliveryPoints.push(newDeliveryPoint);
  return newDeliveryPoint;
};

// READ - อ่าน DeliveryPoint ทั้งหมด
export const getAllDeliveryPoints = (): DeliveryPoint[] => {
  return [...deliveryPoints];
};

// READ - อ่าน DeliveryPoint ตาม ID
export const getDeliveryPointById = (id: string): DeliveryPoint | undefined => {
  return deliveryPoints.find(deliveryPoint => deliveryPoint.id === id);
};

// READ - อ่าน DeliveryPoint ตาม name
export const getDeliveryPointByName = (name: string): DeliveryPoint | undefined => {
  return deliveryPoints.find(deliveryPoint => deliveryPoint.name === name);
};

// READ - อ่าน DeliveryPoint ตาม city
export const getDeliveryPointsByCity = (city: string): DeliveryPoint[] => {
  return deliveryPoints.filter(deliveryPoint => 
    deliveryPoint.info?.address?.toLowerCase().includes(city.toLowerCase())
  );
};

// READ - อ่าน DeliveryPoint ที่ active
export const getActiveDeliveryPoints = (): DeliveryPoint[] => {
  return deliveryPoints.filter(deliveryPoint => deliveryPoint.is_active);
};

// READ - อ่าน DeliveryPoint ที่ inactive
export const getInactiveDeliveryPoints = (): DeliveryPoint[] => {
  return deliveryPoints.filter(deliveryPoint => !deliveryPoint.is_active);
};

// READ - อ่าน DeliveryPoint ตาม contact person
export const getDeliveryPointsByContactPerson = (contactPerson: string): DeliveryPoint[] => {
  return deliveryPoints.filter(deliveryPoint => 
    deliveryPoint.info?.contact_person?.toLowerCase().includes(contactPerson.toLowerCase())
  );
};

// READ - อ่าน DeliveryPoint ตาม email
export const getDeliveryPointByEmail = (email: string): DeliveryPoint | undefined => {
  return deliveryPoints.find(deliveryPoint => deliveryPoint.info?.email === email);
};

// READ - อ่าน DeliveryPoint ตาม phone
export const getDeliveryPointByPhone = (phone: string): DeliveryPoint | undefined => {
  return deliveryPoints.find(deliveryPoint => deliveryPoint.info?.phone === phone);
};

// UPDATE - อัปเดต DeliveryPoint
export const updateDeliveryPoint = (id: string, updateData: Partial<Omit<DeliveryPoint, 'id' | 'created_at' | 'created_by_id'>>): DeliveryPoint | null => {
  const index = deliveryPoints.findIndex(deliveryPoint => deliveryPoint.id === id);
  
  if (index === -1) {
    return null;
  }
  
  deliveryPoints[index] = {
    ...deliveryPoints[index],
    ...updateData,
    updated_at: getCurrentTimestamp()
  };
  
  return deliveryPoints[index];
};

// UPDATE - อัปเดต DeliveryPoint name
export const updateDeliveryPointName = (id: string, name: string): DeliveryPoint | null => {
  return updateDeliveryPoint(id, { name });
};

// UPDATE - อัปเดต DeliveryPoint address
export const updateDeliveryPointAddress = (id: string, address: string): DeliveryPoint | null => {
  const deliveryPoint = getDeliveryPointById(id);
  if (!deliveryPoint) return null;
  
  const updatedInfo = { ...deliveryPoint.info, address };
  return updateDeliveryPoint(id, { info: updatedInfo });
};

// UPDATE - อัปเดต DeliveryPoint contact person
export const updateDeliveryPointContactPerson = (id: string, contactPerson: string): DeliveryPoint | null => {
  const deliveryPoint = getDeliveryPointById(id);
  if (!deliveryPoint) return null;
  
  const updatedInfo = { ...deliveryPoint.info, contact_person: contactPerson };
  return updateDeliveryPoint(id, { info: updatedInfo });
};

// UPDATE - อัปเดต DeliveryPoint phone
export const updateDeliveryPointPhone = (id: string, phone: string): DeliveryPoint | null => {
  const deliveryPoint = getDeliveryPointById(id);
  if (!deliveryPoint) return null;
  
  const updatedInfo = { ...deliveryPoint.info, phone };
  return updateDeliveryPoint(id, { info: updatedInfo });
};

// UPDATE - อัปเดต DeliveryPoint email
export const updateDeliveryPointEmail = (id: string, email: string): DeliveryPoint | null => {
  const deliveryPoint = getDeliveryPointById(id);
  if (!deliveryPoint) return null;
  
  const updatedInfo = { ...deliveryPoint.info, email };
  return updateDeliveryPoint(id, { info: updatedInfo });
};

// UPDATE - อัปเดต DeliveryPoint active status
export const updateDeliveryPointActiveStatus = (id: string, isActive: boolean): DeliveryPoint | null => {
  return updateDeliveryPoint(id, { is_active: isActive });
};

// DELETE - ลบ DeliveryPoint (soft delete)
export const deleteDeliveryPoint = (id: string, deletedById: string): boolean => {
  const index = deliveryPoints.findIndex(deliveryPoint => deliveryPoint.id === id);
  
  if (index === -1) {
    return false;
  }
  
  deliveryPoints[index] = {
    ...deliveryPoints[index],
    deleted_at: getCurrentTimestamp(),
    deleted_by_id: deletedById
  };
  
  return true;
};

// DELETE - ลบ DeliveryPoint แบบถาวร
export const hardDeleteDeliveryPoint = (id: string): boolean => {
  const index = deliveryPoints.findIndex(deliveryPoint => deliveryPoint.id === id);
  
  if (index === -1) {
    return false;
  }
  
  deliveryPoints.splice(index, 1);
  return true;
};

// DELETE - ลบ DeliveryPoint ตาม name
export const deleteDeliveryPointByName = (name: string, deletedById: string): boolean => {
  const deliveryPoint = getDeliveryPointByName(name);
  if (deliveryPoint) {
    return deleteDeliveryPoint(deliveryPoint.id, deletedById);
  }
  return false;
};

// DELETE - ลบ DeliveryPoint ตาม city
export const deleteDeliveryPointsByCity = (city: string, deletedById: string): number => {
  let deletedCount = 0;
  
  deliveryPoints.forEach(deliveryPoint => {
    if (deliveryPoint.info?.address?.toLowerCase().includes(city.toLowerCase()) && !deliveryPoint.deleted_at) {
      deliveryPoint.deleted_at = getCurrentTimestamp();
      deliveryPoint.deleted_by_id = deletedById;
      deletedCount++;
    }
  });
  
  return deletedCount;
};

// DELETE - ลบ DeliveryPoint ที่ inactive
export const deleteInactiveDeliveryPoints = (deletedById: string): number => {
  let deletedCount = 0;
  
  deliveryPoints.forEach(deliveryPoint => {
    if (!deliveryPoint.is_active && !deliveryPoint.deleted_at) {
      deliveryPoint.deleted_at = getCurrentTimestamp();
      deliveryPoint.deleted_by_id = deletedById;
      deletedCount++;
    }
  });
  
  return deletedCount;
};

// Utility function สำหรับล้างข้อมูลทั้งหมด (ใช้สำหรับ testing)
export const clearAllDeliveryPoints = (): void => {
  deliveryPoints.length = 0;
};

// Utility function สำหรับนับจำนวน DeliveryPoint
export const getDeliveryPointCount = (): number => {
  return deliveryPoints.length;
};

// Utility function สำหรับนับจำนวน DeliveryPoint ที่ active
export const getActiveDeliveryPointCount = (): number => {
  return deliveryPoints.filter(deliveryPoint => deliveryPoint.is_active).length;
};

// Utility function สำหรับนับจำนวน DeliveryPoint ที่ inactive
export const getInactiveDeliveryPointCount = (): number => {
  return deliveryPoints.filter(deliveryPoint => !deliveryPoint.is_active).length;
};

// Utility function สำหรับนับจำนวน DeliveryPoint ตาม city
export const getDeliveryPointCountByCity = (city: string): number => {
  return deliveryPoints.filter(deliveryPoint => 
    deliveryPoint.info?.address?.toLowerCase().includes(city.toLowerCase())
  ).length;
};

// Utility function สำหรับค้นหา DeliveryPoint แบบ advanced search
export const searchDeliveryPoints = (searchCriteria: {
  name?: string;
  city?: string;
  contact_person?: string;
  email?: string;
  phone?: string;
  is_active?: boolean;
}): DeliveryPoint[] => {
  return deliveryPoints.filter(deliveryPoint => {
    if (searchCriteria.name && !deliveryPoint.name.toLowerCase().includes(searchCriteria.name.toLowerCase())) {
      return false;
    }
    
    if (searchCriteria.city && !deliveryPoint.info?.address?.toLowerCase().includes(searchCriteria.city.toLowerCase())) {
      return false;
    }
    
    if (searchCriteria.contact_person && !deliveryPoint.info?.contact_person?.toLowerCase().includes(searchCriteria.contact_person.toLowerCase())) {
      return false;
    }
    
    if (searchCriteria.email && deliveryPoint.info?.email !== searchCriteria.email) {
      return false;
    }
    
    if (searchCriteria.phone && deliveryPoint.info?.phone !== searchCriteria.phone) {
      return false;
    }
    
    if (searchCriteria.is_active !== undefined && deliveryPoint.is_active !== searchCriteria.is_active) {
      return false;
    }
    
    return true;
  });
};

// Utility function สำหรับตรวจสอบ DeliveryPoint name ซ้ำ
export const isDeliveryPointNameExists = (name: string): boolean => {
  return deliveryPoints.some(deliveryPoint => deliveryPoint.name === name);
};

// Utility function สำหรับตรวจสอบ DeliveryPoint email ซ้ำ
export const isDeliveryPointEmailExists = (email: string): boolean => {
  return deliveryPoints.some(deliveryPoint => deliveryPoint.info?.email === email);
};

// Utility function สำหรับตรวจสอบ DeliveryPoint phone ซ้ำ
export const isDeliveryPointPhoneExists = (phone: string): boolean => {
  return deliveryPoints.some(deliveryPoint => deliveryPoint.info?.phone === phone);
};

// Utility function สำหรับตรวจสอบ DeliveryPoint ที่ถูกลบแล้ว
export const getDeletedDeliveryPoints = (): DeliveryPoint[] => {
  return deliveryPoints.filter(deliveryPoint => deliveryPoint.deleted_at !== null);
};

// Utility function สำหรับกู้คืน DeliveryPoint ที่ถูกลบแล้ว
export const restoreDeliveryPoint = (id: string): boolean => {
  const index = deliveryPoints.findIndex(deliveryPoint => deliveryPoint.id === id);
  
  if (index === -1) {
    return false;
  }
  
  if (deliveryPoints[index].deleted_at) {
    deliveryPoints[index] = {
      ...deliveryPoints[index],
      deleted_at: null,
      deleted_by_id: null
    };
    return true;
  }
  
  return false;
};
