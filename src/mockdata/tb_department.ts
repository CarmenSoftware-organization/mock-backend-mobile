import { generateId, getCurrentTimestamp } from "@/libs/utils";
import { getUuidByName } from "./mapping.uuid";

export interface Department {
  id: string;
  name: string;
  description: string | null;
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

export const departments: Department[] = [
  {
    id: getUuidByName("DEPARTMENT_01"),
    name: "Front Office",
    description: null,
    is_active: true,
    note: null,
    info: null,
    dimension: null,
    created_at: "2025-07-29T01:06:00.130Z",
    created_by_id: getUuidByName("USER_01"),
    updated_at: "2025-07-29T01:06:00.131Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("DEPARTMENT_02"),
    name: "Housekeeping",
    description: null,
    is_active: true,
    note: null,
    info: null,
    dimension: null,
    created_at: "2025-07-29T01:06:00.176Z",
    created_by_id: getUuidByName("USER_01"),
    updated_at: "2025-07-29T01:06:00.177Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("DEPARTMENT_03"),
    name: "Kitchen",
    description: null,
    is_active: true,
    note: null,
    info: null,
    dimension: null,
    created_at: "2025-07-29T01:06:00.209Z",
    created_by_id: getUuidByName("USER_01"),
    updated_at: "2025-07-29T01:06:00.210Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("DEPARTMENT_04"),
    name: "Food & Beverage",
    description: null,
    is_active: true,
    note: null,
    info: null,
    dimension: null,
    created_at: "2025-07-29T01:06:00.237Z",
    created_by_id: getUuidByName("USER_01"),
    updated_at: "2025-07-29T01:06:00.238Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("DEPARTMENT_05"),
    name: "Admin",
    description: null,
    is_active: true,
    note: null,
    info: null,
    dimension: null,
    created_at: "2025-07-29T01:06:00.267Z",
    created_by_id: getUuidByName("USER_01"),
    updated_at: "2025-07-29T01:06:00.268Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("DEPARTMENT_06"),
    name: "Accounting",
    description: null,
    is_active: true,
    note: null,
    info: null,
    dimension: null,
    created_at: "2025-07-29T01:06:00.300Z",
    created_by_id: getUuidByName("USER_01"),
    updated_at: "2025-07-29T01:06:00.301Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("DEPARTMENT_07"),
    name: "Human Resources",
    description: null,
    is_active: true,
    note: null,
    info: null,
    dimension: null,
    created_at: "2025-07-29T01:06:00.332Z",
    created_by_id: getUuidByName("USER_01"),
    updated_at: "2025-07-29T01:06:00.333Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("DEPARTMENT_08"),
    name: "Sales & Marketing",
    description: null,
    is_active: true,
    note: null,
    info: null,
    dimension: null,
    created_at: "2025-07-29T01:06:00.361Z",
    created_by_id: getUuidByName("USER_01"),
    updated_at: "2025-07-29T01:06:00.362Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("DEPARTMENT_09"),
    name: "Spa",
    description: null,
    is_active: true,
    note: null,
    info: null,
    dimension: null,
    created_at: "2025-07-29T01:06:00.393Z",
    created_by_id: getUuidByName("USER_01"),
    updated_at: "2025-07-29T01:06:00.394Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("DEPARTMENT_10"),
    name: "Engineering",
    description: null,
    is_active: true,
    note: null,
    info: null,
    dimension: null,
    created_at: "2025-07-29T01:06:00.424Z",
    created_by_id: getUuidByName("USER_01"),
    updated_at: "2025-07-29T01:06:00.425Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
];

// CREATE - สร้าง Department ใหม่
export const createDepartment = (
  departmentData: Omit<Department, "id" | "created_at" | "updated_at">
): Department => {
  const newDepartment: Department = {
    ...departmentData,
    id: generateId(),
    created_at: getCurrentTimestamp(),
    updated_at: getCurrentTimestamp(),
  };

  departments.push(newDepartment);
  return newDepartment;
};

// READ - อ่าน Department ทั้งหมด
export const getAllDepartments = (): Department[] => {
  return [...departments];
};

// READ - อ่าน Department ตาม ID
export const getDepartmentById = (id: string): Department | undefined => {
  return departments.find((department) => department.id === id);
};

// READ - อ่าน Department ตาม name
export const getDepartmentByName = (name: string): Department[] => {
  return departments.filter((department) =>
    department.name.toLowerCase().includes(name.toLowerCase())
  );
};

// READ - อ่าน Department ที่ active
export const getActiveDepartments = (): Department[] => {
  return departments.filter((department) => department.is_active);
};

// READ - อ่าน Department ที่ inactive
export const getInactiveDepartments = (): Department[] => {
  return departments.filter((department) => !department.is_active);
};

// READ - อ่าน Department ที่มี description
export const getDepartmentsWithDescription = (): Department[] => {
  return departments.filter((department) => department.description !== null);
};

// READ - อ่าน Department ที่ไม่มี description
export const getDepartmentsWithoutDescription = (): Department[] => {
  return departments.filter((department) => department.description === null);
};

// READ - อ่าน Department ที่มี note
export const getDepartmentsWithNote = (): Department[] => {
  return departments.filter((department) => department.note !== null);
};

// READ - อ่าน Department ที่ไม่มี note
export const getDepartmentsWithoutNote = (): Department[] => {
  return departments.filter((department) => department.note === null);
};

// UPDATE - อัปเดต Department
export const updateDepartment = (
  id: string,
  updateData: Partial<Omit<Department, "id" | "created_at" | "created_by_id">>
): Department | null => {
  const index = departments.findIndex((department) => department.id === id);

  if (index === -1) {
    return null;
  }

  departments[index] = {
    ...departments[index],
    ...updateData,
    updated_at: getCurrentTimestamp(),
  };

  return departments[index];
};

// UPDATE - อัปเดต Department status
export const updateDepartmentStatus = (
  id: string,
  isActive: boolean
): Department | null => {
  return updateDepartment(id, { is_active: isActive });
};

// UPDATE - อัปเดต Department name
export const updateDepartmentName = (
  id: string,
  name: string
): Department | null => {
  return updateDepartment(id, { name });
};

// UPDATE - อัปเดต Department description
export const updateDepartmentDescription = (
  id: string,
  description: string
): Department | null => {
  return updateDepartment(id, { description });
};

// UPDATE - อัปเดต Department note
export const updateDepartmentNote = (
  id: string,
  note: string
): Department | null => {
  return updateDepartment(id, { note });
};

// DELETE - ลบ Department (soft delete)
export const deleteDepartment = (id: string, deletedById: string): boolean => {
  const index = departments.findIndex((department) => department.id === id);

  if (index === -1) {
    return false;
  }

  departments[index] = {
    ...departments[index],
    deleted_at: getCurrentTimestamp(),
    deleted_by_id: deletedById,
  };

  return true;
};

// DELETE - ลบ Department แบบถาวร
export const hardDeleteDepartment = (id: string): boolean => {
  const index = departments.findIndex((department) => department.id === id);

  if (index === -1) {
    return false;
  }

  departments.splice(index, 1);
  return true;
};

// DELETE - ลบ Department ตาม name
export const deleteDepartmentByName = (
  name: string,
  deletedById: string
): boolean => {
  const department = departments.find((d) => d.name === name);
  if (!department) return false;

  return deleteDepartment(department.id, deletedById);
};

// Utility function สำหรับล้างข้อมูลทั้งหมด (ใช้สำหรับ testing)
export const clearAllDepartments = (): void => {
  departments.length = 0;
};

// Utility function สำหรับนับจำนวน Department
export const getDepartmentCount = (): number => {
  return departments.length;
};

// Utility function สำหรับนับจำนวน Department ที่ active
export const getActiveDepartmentCount = (): number => {
  return departments.filter((department) => department.is_active).length;
};

// Utility function สำหรับค้นหา Department แบบ advanced search
export const searchDepartments = (searchCriteria: {
  name?: string;
  description?: string;
  is_active?: boolean;
  has_description?: boolean;
  has_note?: boolean;
}): Department[] => {
  return departments.filter((department) => {
    if (
      searchCriteria.name &&
      !department.name.toLowerCase().includes(searchCriteria.name.toLowerCase())
    ) {
      return false;
    }

    if (
      searchCriteria.description &&
      department.description &&
      !department.description
        .toLowerCase()
        .includes(searchCriteria.description.toLowerCase())
    ) {
      return false;
    }

    if (
      searchCriteria.is_active !== undefined &&
      department.is_active !== searchCriteria.is_active
    ) {
      return false;
    }

    if (searchCriteria.has_description !== undefined) {
      const hasDescription = department.description !== null;
      if (hasDescription !== searchCriteria.has_description) {
        return false;
      }
    }

    if (searchCriteria.has_note !== undefined) {
      const hasNote = department.note !== null;
      if (hasNote !== searchCriteria.has_note) {
        return false;
      }
    }

    return true;
  });
};

// Utility function สำหรับตรวจสอบ name ซ้ำ
export const isDepartmentNameExists = (name: string): boolean => {
  return departments.some((department) => department.name === name);
};

// Utility function สำหรับตรวจสอบ Department ที่ active
export const hasActiveDepartments = (): boolean => {
  return departments.some((department) => department.is_active);
};

// Utility function สำหรับตรวจสอบ Department ที่มี description
export const hasDepartmentsWithDescription = (): boolean => {
  return departments.some((department) => department.description !== null);
};

// Utility function สำหรับตรวจสอบ Department ที่มี note
export const hasDepartmentsWithNote = (): boolean => {
  return departments.some((department) => department.note !== null);
};
