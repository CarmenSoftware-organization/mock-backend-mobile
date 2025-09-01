import { generateId, getCurrentTimestamp } from "@/libs/utils";

export interface Dimension {
  id: string;
  name: string;
  unit: string;
  description: string;
  is_active: boolean;
  created_at: string;
  created_by_id: string;
  updated_at: string;
  updated_by_id: string | null;
  deleted_at: string | null;
  deleted_by_id: string | null;
}

export const dimensions: Dimension[] = [
  {
    id: "550e8400-e29b-41d4-a716-446655440001",
    name: "Length",
    unit: "cm",
    description: "Length measurement in centimeters",
    is_active: true,
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440002",
    name: "Width",
    unit: "cm",
    description: "Width measurement in centimeters",
    is_active: true,
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "1bfdb891-58ee-499c-8115-34a964de8122",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440003",
    name: "Height",
    unit: "cm",
    description: "Height measurement in centimeters",
    is_active: true,
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "3c5280a7-492e-421d-b739-7447455ce99e",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440004",
    name: "Weight",
    unit: "kg",
    description: "Weight measurement in kilograms",
    is_active: true,
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440005",
    name: "Volume",
    unit: "L",
    description: "Volume measurement in liters",
    is_active: false,
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "1bfdb891-58ee-499c-8115-34a964de8122",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null
  }
];

// CREATE - สร้าง Dimension ใหม่
export const createDimension = (dimensionData: Omit<Dimension, 'id' | 'created_at' | 'updated_at'>): Dimension => {
  const newDimension: Dimension = {
    ...dimensionData,
    id: generateId(),
    created_at: getCurrentTimestamp(),
    updated_at: getCurrentTimestamp()
  };
  
  dimensions.push(newDimension);
  return newDimension;
};

// READ - อ่าน Dimension ทั้งหมด
export const getAllDimensions = (): Dimension[] => {
  return [...dimensions];
};

// READ - อ่าน Dimension ตาม ID
export const getDimensionById = (id: string): Dimension | undefined => {
  return dimensions.find(dimension => dimension.id === id);
};

// READ - อ่าน Dimension ตาม name
export const getDimensionByName = (name: string): Dimension | undefined => {
  return dimensions.find(dimension => dimension.name === name);
};

// READ - อ่าน Dimension ตาม unit
export const getDimensionsByUnit = (unit: string): Dimension[] => {
  return dimensions.filter(dimension => dimension.unit === unit);
};

// READ - อ่าน Dimension ที่ active
export const getActiveDimensions = (): Dimension[] => {
  return dimensions.filter(dimension => dimension.is_active);
};

// READ - อ่าน Dimension ที่ inactive
export const getInactiveDimensions = (): Dimension[] => {
  return dimensions.filter(dimension => !dimension.is_active);
};

// READ - อ่าน Dimension ตาม description
export const getDimensionsByDescription = (description: string): Dimension[] => {
  return dimensions.filter(dimension => 
    dimension.description.toLowerCase().includes(description.toLowerCase())
  );
};

// READ - ค้นหา Dimension แบบ fuzzy search
export const searchDimensions = (searchTerm: string): Dimension[] => {
  const lowerSearchTerm = searchTerm.toLowerCase();
  return dimensions.filter(dimension => 
    dimension.name.toLowerCase().includes(lowerSearchTerm) ||
    dimension.unit.toLowerCase().includes(lowerSearchTerm) ||
    dimension.description.toLowerCase().includes(lowerSearchTerm)
  );
};

// UPDATE - อัปเดต Dimension
export const updateDimension = (id: string, updateData: Partial<Omit<Dimension, 'id' | 'created_at' | 'created_by_id'>>): Dimension | null => {
  const index = dimensions.findIndex(dimension => dimension.id === id);
  
  if (index === -1) {
    return null;
  }
  
  dimensions[index] = {
    ...dimensions[index],
    ...updateData,
    updated_at: getCurrentTimestamp()
  };
  
  return dimensions[index];
};

// UPDATE - อัปเดต Dimension name
export const updateDimensionName = (id: string, name: string): Dimension | null => {
  return updateDimension(id, { name });
};

// UPDATE - อัปเดต Dimension unit
export const updateDimensionUnit = (id: string, unit: string): Dimension | null => {
  return updateDimension(id, { unit });
};

// UPDATE - อัปเดต Dimension description
export const updateDimensionDescription = (id: string, description: string): Dimension | null => {
  return updateDimension(id, { description });
};

// UPDATE - อัปเดต Dimension active status
export const updateDimensionActiveStatus = (id: string, isActive: boolean): Dimension | null => {
  return updateDimension(id, { is_active: isActive });
};

// DELETE - ลบ Dimension (soft delete)
export const deleteDimension = (id: string, deletedById: string): boolean => {
  const index = dimensions.findIndex(dimension => dimension.id === id);
  
  if (index === -1) {
    return false;
  }
  
  dimensions[index] = {
    ...dimensions[index],
    deleted_at: getCurrentTimestamp(),
    deleted_by_id: deletedById
  };
  
  return true;
};

// DELETE - ลบ Dimension แบบถาวร
export const hardDeleteDimension = (id: string): boolean => {
  const index = dimensions.findIndex(dimension => dimension.id === id);
  
  if (index === -1) {
    return false;
  }
  
  dimensions.splice(index, 1);
  return true;
};

// DELETE - ลบ Dimension ตาม name
export const deleteDimensionByName = (name: string, deletedById: string): boolean => {
  const dimension = getDimensionByName(name);
  if (dimension) {
    return deleteDimension(dimension.id, deletedById);
  }
  return false;
};

// DELETE - ลบ Dimension ตาม unit
export const deleteDimensionsByUnit = (unit: string, deletedById: string): number => {
  let deletedCount = 0;
  
  dimensions.forEach(dimension => {
    if (dimension.unit === unit && !dimension.deleted_at) {
      dimension.deleted_at = getCurrentTimestamp();
      dimension.deleted_by_id = deletedById;
      deletedCount++;
    }
  });
  
  return deletedCount;
};

// DELETE - ลบ Dimension ที่ inactive
export const deleteInactiveDimensions = (deletedById: string): number => {
  let deletedCount = 0;
  
  dimensions.forEach(dimension => {
    if (!dimension.is_active && !dimension.deleted_at) {
      dimension.deleted_at = getCurrentTimestamp();
      dimension.deleted_by_id = deletedById;
      deletedCount++;
    }
  });
  
  return deletedCount;
};

// Utility function สำหรับล้างข้อมูลทั้งหมด (ใช้สำหรับ testing)
export const clearAllDimensions = (): void => {
  dimensions.length = 0;
};

// Utility function สำหรับนับจำนวน Dimension
export const getDimensionCount = (): number => {
  return dimensions.length;
};

// Utility function สำหรับนับจำนวน Dimension ที่ active
export const getActiveDimensionCount = (): number => {
  return dimensions.filter(dimension => dimension.is_active).length;
};

// Utility function สำหรับนับจำนวน Dimension ที่ inactive
export const getInactiveDimensionCount = (): number => {
  return dimensions.filter(dimension => !dimension.is_active).length;
};

// Utility function สำหรับนับจำนวน Dimension ตาม unit
export const getDimensionCountByUnit = (unit: string): number => {
  return dimensions.filter(dimension => dimension.unit === unit).length;
};

// Utility function สำหรับตรวจสอบ Dimension name ซ้ำ
export const isDimensionNameExists = (name: string): boolean => {
  return dimensions.some(dimension => dimension.name === name);
};

// Utility function สำหรับตรวจสอบ Dimension unit ซ้ำ
export const isDimensionUnitExists = (unit: string): boolean => {
  return dimensions.some(dimension => dimension.unit === unit);
};

// Utility function สำหรับตรวจสอบ Dimension ที่ถูกลบแล้ว
export const getDeletedDimensions = (): Dimension[] => {
  return dimensions.filter(dimension => dimension.deleted_at !== null);
};

// Utility function สำหรับกู้คืน Dimension ที่ถูกลบแล้ว
export const restoreDimension = (id: string): boolean => {
  const index = dimensions.findIndex(dimension => dimension.id === id);
  
  if (index === -1) {
    return false;
  }
  
  if (dimensions[index].deleted_at) {
    dimensions[index] = {
      ...dimensions[index],
      deleted_at: null,
      deleted_by_id: null
    };
    return true;
  }
  
  return false;
};

// Utility function สำหรับค้นหา Dimension แบบ advanced search
export const searchDimensionsAdvanced = (searchCriteria: {
  name?: string;
  unit?: string;
  description?: string;
  is_active?: boolean;
}): Dimension[] => {
  return dimensions.filter(dimension => {
    if (searchCriteria.name && !dimension.name.toLowerCase().includes(searchCriteria.name.toLowerCase())) {
      return false;
    }
    
    if (searchCriteria.unit && dimension.unit !== searchCriteria.unit) {
      return false;
    }
    
    if (searchCriteria.description && !dimension.description.toLowerCase().includes(searchCriteria.description.toLowerCase())) {
      return false;
    }
    
    if (searchCriteria.is_active !== undefined && dimension.is_active !== searchCriteria.is_active) {
      return false;
    }
    
    return true;
  });
};
