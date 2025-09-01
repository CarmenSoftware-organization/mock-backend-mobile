import { generateId, getCurrentTimestamp } from "@/libs/utils";

export interface ExchangeRate {
  id: string;
  at_date: string;
  currency_id: string;
  currency_code: string;
  currency_name: string;
  exchange_rate: number;
  note: string;
  info: any;
  dimension: any;
  created_at: string;
  created_by_id: string;
  updated_at: string;
  updated_by_id: string | null;
  deleted_at: string | null;
  deleted_by_id: string | null;
}

export const exchangeRates: ExchangeRate[] = [
  {
    id: "550e8400-e29b-41d4-a716-446655440001",
    at_date: "2024-01-15",
    currency_id: "550e8400-e29b-41d4-a716-446655440001",
    currency_code: "USD",
    currency_name: "US Dollar",
    exchange_rate: 35.50,
    note: "USD to THB exchange rate",
    info: { from_currency: "USD", to_currency: "THB", effective_date: "2024-01-15", expiry_date: "2024-12-31" },
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
    at_date: "2024-01-15",
    currency_id: "550e8400-e29b-41d4-a716-446655440002",
    currency_code: "EUR",
    currency_name: "Euro",
    exchange_rate: 38.75,
    note: "EUR to THB exchange rate",
    info: { from_currency: "EUR", to_currency: "THB", effective_date: "2024-01-15", expiry_date: "2024-12-31" },
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
    at_date: "2024-01-15",
    currency_id: "550e8400-e29b-41d4-a716-446655440004",
    currency_code: "JPY",
    currency_name: "Japanese Yen",
    exchange_rate: 0.24,
    note: "JPY to THB exchange rate",
    info: { from_currency: "JPY", to_currency: "THB", effective_date: "2024-01-15", expiry_date: "2024-12-31" },
    dimension: null,
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "3c5280a7-492e-421d-b739-7447455ce99e",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440004",
    at_date: "2024-01-15",
    currency_id: "550e8400-e29b-41d4-a716-446655440005",
    currency_code: "GBP",
    currency_name: "British Pound",
    exchange_rate: 45.20,
    note: "GBP to THB exchange rate",
    info: { from_currency: "GBP", to_currency: "THB", effective_date: "2024-01-15", expiry_date: "2024-12-31" },
    dimension: null,
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null
  }
];

// CREATE - สร้าง ExchangeRate ใหม่
export const createExchangeRate = (exchangeRateData: Omit<ExchangeRate, 'id' | 'created_at' | 'updated_at'>): ExchangeRate => {
  const newExchangeRate: ExchangeRate = {
    ...exchangeRateData,
    id: generateId(),
    created_at: getCurrentTimestamp(),
    updated_at: getCurrentTimestamp()
  };
  
  exchangeRates.push(newExchangeRate);
  return newExchangeRate;
};

// READ - อ่าน ExchangeRate ทั้งหมด
export const getAllExchangeRates = (): ExchangeRate[] => {
  return [...exchangeRates];
};

// READ - อ่าน ExchangeRate ตาม ID
export const getExchangeRateById = (id: string): ExchangeRate | undefined => {
  return exchangeRates.find(exchangeRate => exchangeRate.id === id);
};

// READ - อ่าน ExchangeRate ตาม from_currency_id
export const getExchangeRatesByFromCurrency = (fromCurrencyId: string): ExchangeRate[] => {
  return exchangeRates.filter(exchangeRate => exchangeRate.info.from_currency_id === fromCurrencyId);
};

// READ - อ่าน ExchangeRate ตาม to_currency_id
export const getExchangeRatesByToCurrency = (toCurrencyId: string): ExchangeRate[] => {
  return exchangeRates.filter(exchangeRate => exchangeRate.info.to_currency_id === toCurrencyId);
};

// READ - อ่าน ExchangeRate ตาม currency pair
export const getExchangeRateByCurrencyPair = (fromCurrencyId: string, toCurrencyId: string): ExchangeRate | undefined => {
  return exchangeRates.find(exchangeRate => 
    exchangeRate.info.from_currency_id === fromCurrencyId && 
    exchangeRate.info.to_currency_id === toCurrencyId
  );
};

// READ - อ่าน ExchangeRate ที่ active
export const getActiveExchangeRates = (): ExchangeRate[] => {
  return exchangeRates.filter(exchangeRate => exchangeRate.info.is_active === true);
};

// READ - อ่าน ExchangeRate ที่ inactive
export const getInactiveExchangeRates = (): ExchangeRate[] => {
  return exchangeRates.filter(exchangeRate => exchangeRate.info.is_active === false);
};

// READ - อ่าน ExchangeRate ตาม effective_date
export const getExchangeRatesByEffectiveDate = (effectiveDate: string): ExchangeRate[] => {
  return exchangeRates.filter(exchangeRate => exchangeRate.info.effective_date === effectiveDate);
};

// READ - อ่าน ExchangeRate ที่ยังไม่หมดอายุ
export const getValidExchangeRates = (): ExchangeRate[] => {
  const today = new Date().toISOString().split('T')[0];
  return exchangeRates.filter(exchangeRate => 
    exchangeRate.info.effective_date <= today && 
    exchangeRate.info.expiry_date >= today &&
    exchangeRate.info.is_active
  );
};

// READ - อ่าน ExchangeRate ที่หมดอายุแล้ว
export const getExpiredExchangeRates = (): ExchangeRate[] => {
  const today = new Date().toISOString().split('T')[0];
  return exchangeRates.filter(exchangeRate => exchangeRate.info.expiry_date < today);
};

// UPDATE - อัปเดต ExchangeRate
export const updateExchangeRate = (id: string, updateData: Partial<Omit<ExchangeRate, 'id' | 'created_at' | 'created_by_id'>>): ExchangeRate | null => {
  const index = exchangeRates.findIndex(exchangeRate => exchangeRate.id === id);
  
  if (index === -1) {
    return null;
  }
  
  exchangeRates[index] = {
    ...exchangeRates[index],
    ...updateData,
    updated_at: getCurrentTimestamp()
  };
  
  return exchangeRates[index];
};

// UPDATE - อัปเดต ExchangeRate rate
export const updateExchangeRateRate = (id: string, rate: number): ExchangeRate | null => {
  return updateExchangeRate(id, { exchange_rate: rate });
};

// UPDATE - อัปเดต ExchangeRate effective_date
export const updateExchangeRateEffectiveDate = (id: string, effectiveDate: string): ExchangeRate | null => {
  return updateExchangeRate(id, { info: { ...exchangeRates[0].info, effective_date: effectiveDate } });
};

// UPDATE - อัปเดต ExchangeRate expiry_date
export const updateExchangeRateExpiryDate = (id: string, expiryDate: string): ExchangeRate | null => {
  return updateExchangeRate(id, { info: { ...exchangeRates[0].info, expiry_date: expiryDate } });
};

// UPDATE - อัปเดต ExchangeRate active status
export const updateExchangeRateActiveStatus = (id: string, isActive: boolean): ExchangeRate | null => {
  return updateExchangeRate(id, { info: { ...exchangeRates[0].info, is_active: isActive } });
};

// DELETE - ลบ ExchangeRate (soft delete)
export const deleteExchangeRate = (id: string, deletedById: string): boolean => {
  const index = exchangeRates.findIndex(exchangeRate => exchangeRate.id === id);
  
  if (index === -1) {
    return false;
  }
  
  exchangeRates[index] = {
    ...exchangeRates[index],
    deleted_at: getCurrentTimestamp(),
    deleted_by_id: deletedById
  };
  
  return true;
};

// DELETE - ลบ ExchangeRate แบบถาวร
export const hardDeleteExchangeRate = (id: string): boolean => {
  const index = exchangeRates.findIndex(exchangeRate => exchangeRate.id === id);
  
  if (index === -1) {
    return false;
  }
  
  exchangeRates.splice(index, 1);
  return true;
};

// DELETE - ลบ ExchangeRate ตาม currency pair
export const deleteExchangeRateByCurrencyPair = (fromCurrencyId: string, toCurrencyId: string, deletedById: string): boolean => {
  const exchangeRate = getExchangeRateByCurrencyPair(fromCurrencyId, toCurrencyId);
  if (exchangeRate) {
    return deleteExchangeRate(exchangeRate.id, deletedById);
  }
  return false;
};

// DELETE - ลบ ExchangeRate ตาม from_currency_id
export const deleteExchangeRatesByFromCurrency = (fromCurrencyId: string, deletedById: string): number => {
  let deletedCount = 0;
  
  exchangeRates.forEach(exchangeRate => {
    if (exchangeRate.info.from_currency_id === fromCurrencyId && !exchangeRate.deleted_at) {
      exchangeRate.deleted_at = getCurrentTimestamp();
      exchangeRate.deleted_by_id = deletedById;
      deletedCount++;
    }
  });
  
  return deletedCount;
};

// DELETE - ลบ ExchangeRate ตาม to_currency_id
export const deleteExchangeRatesByToCurrency = (toCurrencyId: string, deletedById: string): number => {
  let deletedCount = 0;
  
  exchangeRates.forEach(exchangeRate => {
    if (exchangeRate.info.to_currency_id === toCurrencyId && !exchangeRate.deleted_at) {
      exchangeRate.deleted_at = getCurrentTimestamp();
      exchangeRate.deleted_by_id = deletedById;
      deletedCount++;
    }
  });
  
  return deletedCount;
};

// DELETE - ลบ ExchangeRate ที่หมดอายุแล้ว
export const deleteExpiredExchangeRates = (deletedById: string): number => {
  let deletedCount = 0;
  const today = new Date().toISOString().split('T')[0];
  
  exchangeRates.forEach(exchangeRate => {
    if (exchangeRate.info.expiry_date < today && !exchangeRate.deleted_at) {
      exchangeRate.deleted_at = getCurrentTimestamp();
      exchangeRate.deleted_by_id = deletedById;
      deletedCount++;
    }
  });
  
  return deletedCount;
};

// Utility function สำหรับล้างข้อมูลทั้งหมด (ใช้สำหรับ testing)
export const clearAllExchangeRates = (): void => {
  exchangeRates.length = 0;
};

// Utility function สำหรับนับจำนวน ExchangeRate
export const getExchangeRateCount = (): number => {
  return exchangeRates.length;
};

// Utility function สำหรับนับจำนวน ExchangeRate ที่ active
export const getActiveExchangeRateCount = (): number => {
  return exchangeRates.filter(exchangeRate => exchangeRate.info.is_active === true).length;
};

// Utility function สำหรับนับจำนวน ExchangeRate ที่ inactive
export const getInactiveExchangeRateCount = (): number => {
  return exchangeRates.filter(exchangeRate => exchangeRate.info.is_active === false).length;
};

// Utility function สำหรับนับจำนวน ExchangeRate ตาม from_currency_id
export const getExchangeRateCountByFromCurrency = (fromCurrencyId: string): number => {
  return exchangeRates.filter(exchangeRate => exchangeRate.info.from_currency_id === fromCurrencyId).length;
};

// Utility function สำหรับนับจำนวน ExchangeRate ตาม to_currency_id
export const getExchangeRateCountByToCurrency = (toCurrencyId: string): number => {
  return exchangeRates.filter(exchangeRate => exchangeRate.info.to_currency_id === toCurrencyId).length;
};

// Utility function สำหรับตรวจสอบ ExchangeRate currency pair ซ้ำ
export const isExchangeRateCurrencyPairExists = (fromCurrencyId: string, toCurrencyId: string): boolean => {
  return exchangeRates.some(exchangeRate => 
    exchangeRate.info.from_currency_id === fromCurrencyId && 
    exchangeRate.info.to_currency_id === toCurrencyId
  );
};

// Utility function สำหรับตรวจสอบ ExchangeRate ที่ถูกลบแล้ว
export const getDeletedExchangeRates = (): ExchangeRate[] => {
  return exchangeRates.filter(exchangeRate => exchangeRate.deleted_at !== null);
};

// Utility function สำหรับกู้คืน ExchangeRate ที่ถูกลบแล้ว
export const restoreExchangeRate = (id: string): boolean => {
  const index = exchangeRates.findIndex(exchangeRate => exchangeRate.id === id);
  
  if (index === -1) {
    return false;
  }
  
  if (exchangeRates[index].deleted_at) {
    exchangeRates[index] = {
      ...exchangeRates[index],
      deleted_at: null,
      deleted_by_id: null
    };
    return true;
  }
  
  return false;
};

// Utility function สำหรับค้นหา ExchangeRate แบบ advanced search
export const searchExchangeRates = (searchCriteria: {
  from_currency_id?: string;
  to_currency_id?: string;
  exchange_rate?: number;
  effective_date?: string;
  expiry_date?: string;
  is_active?: boolean;
}): ExchangeRate[] => {
  return exchangeRates.filter(exchangeRate => {
    if (searchCriteria.from_currency_id && exchangeRate.info.from_currency_id !== searchCriteria.from_currency_id) {
      return false;
    }
    
    if (searchCriteria.to_currency_id && exchangeRate.info.to_currency_id !== searchCriteria.to_currency_id) {
      return false;
    }
    
    if (searchCriteria.exchange_rate && exchangeRate.exchange_rate !== searchCriteria.exchange_rate) {
      return false;
    }
    
    if (searchCriteria.effective_date && exchangeRate.info.effective_date !== searchCriteria.effective_date) {
      return false;
    }
    
    if (searchCriteria.expiry_date && exchangeRate.info.expiry_date !== searchCriteria.expiry_date) {
      return false;
    }
    
    if (searchCriteria.is_active !== undefined && exchangeRate.info.is_active !== searchCriteria.is_active) {
      return false;
    }
    
    return true;
  });
};
