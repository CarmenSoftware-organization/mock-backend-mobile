import { generateId, getCurrentTimestamp } from "@/libs/utils";
import { getUuidByName } from "./mapping.uuid";

export interface Currency {
  id: string;
  code: string;
  name: string;
  symbol: string;
  description: string;
  decimal_places: number;
  is_active: boolean;
  exchange_rate: number;
  exchange_rate_at: string | null;
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

export const currencies: Currency[] = [
  {
    id: getUuidByName("CURRENCY_01"),
    code: "THB",
    name: "Thai Baht",
    symbol: "฿",
    description: "",
    decimal_places: 2,
    is_active: true,
    exchange_rate: 1.0,
    exchange_rate_at: "2025-07-29T01:05:32.281Z",
    note: null,
    info: null,
    dimension: null,
    created_at: "2025-07-29T01:05:32.285Z",
    created_by_id: getUuidByName("USER_01"),
    updated_at: "2025-07-29T01:05:32.285Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("CURRENCY_02"),
    code: "USD",
    name: "United States Dollar",
    symbol: "$",
    description: "United States Dollar (United States)",
    decimal_places: 2,
    is_active: false,
    exchange_rate: 0.03084,
    exchange_rate_at: null,
    note: null,
    info: null,
    dimension: null,
    created_at: "2025-07-29T02:38:11.129Z",
    created_by_id: getUuidByName("USER_01"),
    updated_at: "2025-08-02T01:51:33.685Z",
    updated_by_id: getUuidByName("USER_01"),
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("CURRENCY_03"),
    code: "AFN",
    name: "Test Currency Update",
    symbol: "؋",
    description: "Afghan Afghani (Afghanistan)",
    decimal_places: 2,
    is_active: true,
    exchange_rate: 2.1216,
    exchange_rate_at: null,
    note: null,
    info: null,
    dimension: null,
    created_at: "2025-07-30T04:09:49.230Z",
    created_by_id: getUuidByName("USER_01"),
    updated_at: "2025-07-30T04:09:49.230Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("CURRENCY_04"),
    code: "AED",
    name: "UAE Dirham Test",
    symbol: "د.إ",
    description: "UAE Dirham (United Arab Emirates)",
    decimal_places: 2,
    is_active: true,
    exchange_rate: 0.1132,
    exchange_rate_at: null,
    note: null,
    info: null,
    dimension: null,
    created_at: "2025-07-30T04:09:49.767Z",
    created_by_id: getUuidByName("USER_01"),
    updated_at: "2025-07-30T04:09:49.767Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("CURRENCY_05"),
    code: "ALL",
    name: "Test Delete Currency",
    symbol: "L",
    description: "Albanian Lek (Albania)",
    decimal_places: 2,
    is_active: true,
    exchange_rate: 2.5997,
    exchange_rate_at: null,
    note: null,
    info: null,
    dimension: null,
    created_at: "2025-07-30T04:09:51.887Z",
    created_by_id: getUuidByName("USER_01"),
    updated_at: "2025-07-30T04:09:51.887Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("CURRENCY_06"),
    code: "AMD",
    name: "Test Status Currency",
    symbol: "֏",
    description: "Armenian Dram (Armenia)",
    decimal_places: 2,
    is_active: true,
    exchange_rate: 11.809,
    exchange_rate_at: null,
    note: null,
    info: null,
    dimension: null,
    created_at: "2025-07-30T04:09:53.760Z",
    created_by_id: getUuidByName("USER_01"),
    updated_at: "2025-07-30T04:09:53.760Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("CURRENCY_07"),
    code: "AUD",
    name: "Inactive Test Currency",
    symbol: "A$",
    description: "Australian Dollar (Australia)",
    decimal_places: 2,
    is_active: false,
    exchange_rate: 0.0474,
    exchange_rate_at: null,
    note: null,
    info: null,
    dimension: null,
    created_at: "2025-07-30T04:10:01.757Z",
    created_by_id: getUuidByName("USER_01"),
    updated_at: "2025-07-30T04:10:01.757Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("CURRENCY_08"),
    code: "BDT",
    name: "Mobile Test Currency",
    symbol: "৳",
    description: "Bangladeshi Taka (Bangladesh)",
    decimal_places: 2,
    is_active: true,
    exchange_rate: 3.7883,
    exchange_rate_at: null,
    note: null,
    info: null,
    dimension: null,
    created_at: "2025-07-30T04:10:12.454Z",
    created_by_id: getUuidByName("USER_01"),
    updated_at: "2025-07-30T04:10:12.454Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("CURRENCY_09"),
    code: "ANG",
    name: "Netherlands Antillean Guilder",
    symbol: "ƒ",
    description: "Netherlands Antillean Guilder (Netherlands Antilles)",
    decimal_places: 2,
    is_active: true,
    exchange_rate: 0.05501,
    exchange_rate_at: null,
    note: null,
    info: null,
    dimension: null,
    created_at: "2025-07-31T04:58:55.801Z",
    created_by_id: getUuidByName("USER_01"),
    updated_at: "2025-07-31T04:58:55.801Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: getUuidByName("CURRENCY_10"),
    code: "BGN",
    name: "Bulgarian Lev (Bulgaria)",
    symbol: "лв",
    description: "Bulgarian Lev (Bulgaria)",
    decimal_places: 2,
    is_active: true,
    exchange_rate: 0.05229,
    exchange_rate_at: null,
    note: null,
    info: null,
    dimension: null,
    created_at: "2025-07-30T04:10:15.281Z",
    created_by_id: getUuidByName("USER_01"),
    updated_at: "2025-08-02T02:05:43.632Z",
    updated_by_id: getUuidByName("USER_01"),
    deleted_at: null,
    deleted_by_id: null,
  },
];

// CREATE - สร้าง Currency ใหม่
export const createCurrency = (
  currencyData: Omit<Currency, "id" | "created_at" | "updated_at">
): Currency => {
  const newCurrency: Currency = {
    ...currencyData,
    id: generateId(),
    created_at: getCurrentTimestamp(),
    updated_at: getCurrentTimestamp(),
  };

  currencies.push(newCurrency);
  return newCurrency;
};

// READ - อ่าน Currency ทั้งหมด
export const getAllCurrencies = (): Currency[] => {
  return [...currencies];
};

// READ - อ่าน Currency ตาม ID
export const getCurrencyById = (id: string): Currency | undefined => {
  return currencies.find((currency) => currency.id === id);
};

// READ - อ่าน Currency ตาม code
export const getCurrencyByCode = (code: string): Currency | undefined => {
  return currencies.find((currency) => currency.code === code);
};

// READ - อ่าน Currency ตาม name
export const getCurrencyByName = (name: string): Currency[] => {
  return currencies.filter((currency) =>
    currency.name.toLowerCase().includes(name.toLowerCase())
  );
};

// READ - อ่าน Currency ตาม symbol
export const getCurrencyBySymbol = (symbol: string): Currency[] => {
  return currencies.filter((currency) => currency.symbol === symbol);
};

// READ - อ่าน Currency ที่ active
export const getActiveCurrencies = (): Currency[] => {
  return currencies.filter((currency) => currency.is_active);
};

// READ - อ่าน Currency ที่ inactive
export const getInactiveCurrencies = (): Currency[] => {
  return currencies.filter((currency) => !currency.is_active);
};

// READ - อ่าน Currency ตาม decimal_places
export const getCurrenciesByDecimalPlaces = (
  decimalPlaces: number
): Currency[] => {
  return currencies.filter(
    (currency) => currency.decimal_places === decimalPlaces
  );
};

// READ - อ่าน Currency ที่มี exchange rate
export const getCurrenciesWithExchangeRate = (): Currency[] => {
  return currencies.filter((currency) => currency.exchange_rate !== null);
};

// READ - อ่าน Currency ที่ไม่มี exchange rate
export const getCurrenciesWithoutExchangeRate = (): Currency[] => {
  return currencies.filter((currency) => currency.exchange_rate === null);
};

// UPDATE - อัปเดต Currency
export const updateCurrency = (
  id: string,
  updateData: Partial<Omit<Currency, "id" | "created_at" | "created_by_id">>
): Currency | null => {
  const index = currencies.findIndex((currency) => currency.id === id);

  if (index === -1) {
    return null;
  }

  currencies[index] = {
    ...currencies[index],
    ...updateData,
    updated_at: getCurrentTimestamp(),
  };

  return currencies[index];
};

// UPDATE - อัปเดต Currency status
export const updateCurrencyStatus = (
  id: string,
  isActive: boolean
): Currency | null => {
  return updateCurrency(id, { is_active: isActive });
};

// UPDATE - อัปเดต Currency exchange rate
export const updateCurrencyExchangeRate = (
  id: string,
  exchangeRate: number
): Currency | null => {
  return updateCurrency(id, {
    exchange_rate: exchangeRate,
    exchange_rate_at: getCurrentTimestamp(),
  });
};

// UPDATE - อัปเดต Currency decimal places
export const updateCurrencyDecimalPlaces = (
  id: string,
  decimalPlaces: number
): Currency | null => {
  return updateCurrency(id, { decimal_places: decimalPlaces });
};

// UPDATE - อัปเดต Currency symbol
export const updateCurrencySymbol = (
  id: string,
  symbol: string
): Currency | null => {
  return updateCurrency(id, { symbol });
};

// UPDATE - อัปเดต Currency description
export const updateCurrencyDescription = (
  id: string,
  description: string
): Currency | null => {
  return updateCurrency(id, { description });
};

// UPDATE - อัปเดต Currency note
export const updateCurrencyNote = (
  id: string,
  note: string
): Currency | null => {
  return updateCurrency(id, { note });
};

// DELETE - ลบ Currency (soft delete)
export const deleteCurrency = (id: string, deletedById: string): boolean => {
  const index = currencies.findIndex((currency) => currency.id === id);

  if (index === -1) {
    return false;
  }

  currencies[index] = {
    ...currencies[index],
    deleted_at: getCurrentTimestamp(),
    deleted_by_id: deletedById,
  };

  return true;
};

// DELETE - ลบ Currency แบบถาวร
export const hardDeleteCurrency = (id: string): boolean => {
  const index = currencies.findIndex((currency) => currency.id === id);

  if (index === -1) {
    return false;
  }

  currencies.splice(index, 1);
  return true;
};

// DELETE - ลบ Currency ตาม code
export const deleteCurrencyByCode = (
  code: string,
  deletedById: string
): boolean => {
  const currency = getCurrencyByCode(code);
  if (!currency) return false;

  return deleteCurrency(currency.id, deletedById);
};

// Utility function สำหรับล้างข้อมูลทั้งหมด (ใช้สำหรับ testing)
export const clearAllCurrencies = (): void => {
  currencies.length = 0;
};

// Utility function สำหรับนับจำนวน Currency
export const getCurrencyCount = (): number => {
  return currencies.length;
};

// Utility function สำหรับนับจำนวน Currency ที่ active
export const getActiveCurrencyCount = (): number => {
  return currencies.filter((currency) => currency.is_active).length;
};

// Utility function สำหรับค้นหา Currency แบบ advanced search
export const searchCurrencies = (searchCriteria: {
  code?: string;
  name?: string;
  symbol?: string;
  is_active?: boolean;
  decimal_places?: number;
  has_exchange_rate?: boolean;
}): Currency[] => {
  return currencies.filter((currency) => {
    if (
      searchCriteria.code &&
      !currency.code.toLowerCase().includes(searchCriteria.code.toLowerCase())
    ) {
      return false;
    }

    if (
      searchCriteria.name &&
      !currency.name.toLowerCase().includes(searchCriteria.name.toLowerCase())
    ) {
      return false;
    }

    if (searchCriteria.symbol && currency.symbol !== searchCriteria.symbol) {
      return false;
    }

    if (
      searchCriteria.is_active !== undefined &&
      currency.is_active !== searchCriteria.is_active
    ) {
      return false;
    }

    if (
      searchCriteria.decimal_places !== undefined &&
      currency.decimal_places !== searchCriteria.decimal_places
    ) {
      return false;
    }

    if (searchCriteria.has_exchange_rate !== undefined) {
      const hasExchangeRate = currency.exchange_rate !== null;
      if (hasExchangeRate !== searchCriteria.has_exchange_rate) {
        return false;
      }
    }

    return true;
  });
};

// Utility function สำหรับตรวจสอบ code ซ้ำ
export const isCurrencyCodeExists = (code: string): boolean => {
  return currencies.some((currency) => currency.code === code);
};

// Utility function สำหรับตรวจสอบ symbol ซ้ำ
export const isCurrencySymbolExists = (symbol: string): boolean => {
  return currencies.some((currency) => currency.symbol === symbol);
};

// Utility function สำหรับตรวจสอบ Currency ที่มี exchange rate
export const hasCurrenciesWithExchangeRate = (): boolean => {
  return currencies.some((currency) => currency.exchange_rate !== null);
};

// Utility function สำหรับตรวจสอบ Currency ที่ active
export const hasActiveCurrencies = (): boolean => {
  return currencies.some((currency) => currency.is_active);
};
