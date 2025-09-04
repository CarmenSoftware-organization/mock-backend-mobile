import { generateId, getCurrentTimestamp } from "@/libs/utils";
import { getUuidByName } from "./mapping.uuid";

export interface CurrencyIso {
  id: string;
  iso_code: string;
  name: string;
  symbol: string;
  created_at: string;
  created_by_id: string;
  updated_at: string;
  updated_by_id: string | null;
  deleted_at: string | null;
  deleted_by_id: string | null;
}

export const currencyIsos: CurrencyIso[] = [
  {
    id: getUuidByName("CURRENCY_ISO_01"),
    iso_code: "USD",
    name: "US Dollar",
    symbol: "$",
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: getUuidByName("USER_01"),
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("CURRENCY_ISO_02"),
    iso_code: "EUR",
    name: "Euro",
    symbol: "€",
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: getUuidByName("USER_01"),
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("CURRENCY_ISO_03"),
    iso_code: "THB",
    name: "Thai Baht",
    symbol: "฿",
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: getUuidByName("USER_01"),
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("CURRENCY_ISO_04"),
    iso_code: "JPY",
    name: "Japanese Yen",
    symbol: "¥",
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: getUuidByName("USER_01"),
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("CURRENCY_ISO_05"),
    iso_code: "GBP",
    name: "British Pound",
    symbol: "£",
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: getUuidByName("USER_01"),
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
];

// CREATE - สร้าง CurrencyIso ใหม่
export const createCurrencyIso = (
  currencyIsoData: Omit<CurrencyIso, "id" | "created_at" | "updated_at">
): CurrencyIso => {
  const newCurrencyIso: CurrencyIso = {
    ...currencyIsoData,
    id: generateId(),
    created_at: getCurrentTimestamp(),
    updated_at: getCurrentTimestamp(),
  };

  currencyIsos.push(newCurrencyIso);
  return newCurrencyIso;
};

// READ - อ่าน CurrencyIso ทั้งหมด
export const getAllCurrencyIsos = (): CurrencyIso[] => {
  return [...currencyIsos];
};

// READ - อ่าน CurrencyIso ตาม ID
export const getCurrencyIsoById = (id: string): CurrencyIso | undefined => {
  return currencyIsos.find((currencyIso) => currencyIso.id === id);
};

// READ - อ่าน CurrencyIso ตาม code
export const getCurrencyIsoByCode = (code: string): CurrencyIso | undefined => {
  return currencyIsos.find((currencyIso) => currencyIso.iso_code === code);
};

// READ - อ่าน CurrencyIso ตาม name
export const getCurrencyIsoByName = (name: string): CurrencyIso | undefined => {
  return currencyIsos.find((currencyIso) => currencyIso.name === name);
};

// READ - อ่าน CurrencyIso ตาม symbol
export const getCurrencyIsoBySymbol = (
  symbol: string
): CurrencyIso | undefined => {
  return currencyIsos.find((currencyIso) => currencyIso.symbol === symbol);
};

// READ - ค้นหา CurrencyIso ตาม code หรือ name
export const searchCurrencyIsos = (searchTerm: string): CurrencyIso[] => {
  const lowerSearchTerm = searchTerm.toLowerCase();
  return currencyIsos.filter(
    (currencyIso) =>
      currencyIso.iso_code.toLowerCase().includes(lowerSearchTerm) ||
      currencyIso.name.toLowerCase().includes(lowerSearchTerm) ||
      currencyIso.symbol.toLowerCase().includes(lowerSearchTerm)
  );
};

// UPDATE - อัปเดต CurrencyIso
export const updateCurrencyIso = (
  id: string,
  updateData: Partial<Omit<CurrencyIso, "id" | "created_at" | "created_by_id">>
): CurrencyIso | null => {
  const index = currencyIsos.findIndex((currencyIso) => currencyIso.id === id);

  if (index === -1) {
    return null;
  }

  currencyIsos[index] = {
    ...currencyIsos[index],
    ...updateData,
    updated_at: getCurrentTimestamp(),
  };

  return currencyIsos[index];
};

// UPDATE - อัปเดต CurrencyIso code
export const updateCurrencyIsoCode = (
  id: string,
  code: string
): CurrencyIso | null => {
  return updateCurrencyIso(id, { iso_code: code });
};

// UPDATE - อัปเดต CurrencyIso name
export const updateCurrencyIsoName = (
  id: string,
  name: string
): CurrencyIso | null => {
  return updateCurrencyIso(id, { name });
};

// UPDATE - อัปเดต CurrencyIso symbol
export const updateCurrencyIsoSymbol = (
  id: string,
  symbol: string
): CurrencyIso | null => {
  return updateCurrencyIso(id, { symbol });
};

// DELETE - ลบ CurrencyIso (soft delete)
export const deleteCurrencyIso = (id: string, deletedById: string): boolean => {
  const index = currencyIsos.findIndex((currencyIso) => currencyIso.id === id);

  if (index === -1) {
    return false;
  }

  currencyIsos[index] = {
    ...currencyIsos[index],
    deleted_at: getCurrentTimestamp(),
    deleted_by_id: deletedById,
  };

  return true;
};

// DELETE - ลบ CurrencyIso แบบถาวร
export const hardDeleteCurrencyIso = (id: string): boolean => {
  const index = currencyIsos.findIndex((currencyIso) => currencyIso.id === id);

  if (index === -1) {
    return false;
  }

  currencyIsos.splice(index, 1);
  return true;
};

// DELETE - ลบ CurrencyIso ตาม code
export const deleteCurrencyIsoByCode = (
  code: string,
  deletedById: string
): boolean => {
  const currencyIso = getCurrencyIsoByCode(code);
  if (currencyIso) {
    return deleteCurrencyIso(currencyIso.id, deletedById);
  }
  return false;
};

// DELETE - ลบ CurrencyIso ตาม name
export const deleteCurrencyIsoByName = (
  name: string,
  deletedById: string
): boolean => {
  const currencyIso = getCurrencyIsoByName(name);
  if (currencyIso) {
    return deleteCurrencyIso(currencyIso.id, deletedById);
  }
  return false;
};

// DELETE - ลบ CurrencyIso ตาม symbol
export const deleteCurrencyIsoBySymbol = (
  symbol: string,
  deletedById: string
): boolean => {
  const currencyIso = getCurrencyIsoBySymbol(symbol);
  if (currencyIso) {
    return deleteCurrencyIso(currencyIso.id, deletedById);
  }
  return false;
};

// Utility function สำหรับล้างข้อมูลทั้งหมด (ใช้สำหรับ testing)
export const clearAllCurrencyIsos = (): void => {
  currencyIsos.length = 0;
};

// Utility function สำหรับนับจำนวน CurrencyIso
export const getCurrencyIsoCount = (): number => {
  return currencyIsos.length;
};

// Utility function สำหรับตรวจสอบ CurrencyIso code ซ้ำ
export const isCurrencyIsoCodeExists = (code: string): boolean => {
  return currencyIsos.some((currencyIso) => currencyIso.iso_code === code);
};

// Utility function สำหรับตรวจสอบ CurrencyIso name ซ้ำ
export const isCurrencyIsoNameExists = (name: string): boolean => {
  return currencyIsos.some((currencyIso) => currencyIso.name === name);
};

// Utility function สำหรับตรวจสอบ CurrencyIso symbol ซ้ำ
export const isCurrencyIsoSymbolExists = (symbol: string): boolean => {
  return currencyIsos.some((currencyIso) => currencyIso.symbol === symbol);
};

// Utility function สำหรับตรวจสอบ CurrencyIso ที่ถูกลบแล้ว
export const getDeletedCurrencyIsos = (): CurrencyIso[] => {
  return currencyIsos.filter((currencyIso) => currencyIso.deleted_at !== null);
};

// Utility function สำหรับกู้คืน CurrencyIso ที่ถูกลบแล้ว
export const restoreCurrencyIso = (id: string): boolean => {
  const index = currencyIsos.findIndex((currencyIso) => currencyIso.id === id);

  if (index === -1) {
    return false;
  }

  if (currencyIsos[index].deleted_at) {
    currencyIsos[index] = {
      ...currencyIsos[index],
      deleted_at: null,
      deleted_by_id: null,
    };
    return true;
  }

  return false;
};
