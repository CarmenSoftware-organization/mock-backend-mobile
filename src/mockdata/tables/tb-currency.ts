import { TbCurrency } from './types';
import { generateUuid, getCurrentTimestamp } from './utils';

// =============== MOCK TB_CURRENCY DATA ===============
export let mockTbCurrency: TbCurrency[] = [
  {
    id: "cur-001-thb",
    code: "THB",
    name: "Thai Baht",
    symbol: "฿",
    description: "Thai Baht - Base Currency",
    decimal_places: 2,
    is_active: true,
    exchange_rate: 1.0,
    exchange_rate_at: getCurrentTimestamp(),
    note: "Base currency for the system",
    info: {},
    dimension: {},
    created_at: getCurrentTimestamp(),
    created_by_id: "system",
    updated_at: getCurrentTimestamp(),
    updated_by_id: "system",
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "cur-002-usd",
    code: "USD",
    name: "US Dollar",
    symbol: "$",
    description: "United States Dollar",
    decimal_places: 2,
    is_active: true,
    exchange_rate: 35.5,
    exchange_rate_at: getCurrentTimestamp(),
    note: "USD to THB exchange rate",
    info: {},
    dimension: {},
    created_at: getCurrentTimestamp(),
    created_by_id: "system",
    updated_at: getCurrentTimestamp(),
    updated_by_id: "system",
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "cur-003-eur",
    code: "EUR",
    name: "Euro",
    symbol: "€",
    description: "European Euro",
    decimal_places: 2,
    is_active: true,
    exchange_rate: 38.2,
    exchange_rate_at: getCurrentTimestamp(),
    note: "EUR to THB exchange rate",
    info: {},
    dimension: {},
    created_at: getCurrentTimestamp(),
    created_by_id: "system",
    updated_at: getCurrentTimestamp(),
    updated_by_id: "system",
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "cur-004-jpy",
    code: "JPY",
    name: "Japanese Yen",
    symbol: "¥",
    description: "Japanese Yen",
    decimal_places: 0,
    is_active: true,
    exchange_rate: 0.24,
    exchange_rate_at: getCurrentTimestamp(),
    note: "JPY to THB exchange rate",
    info: {},
    dimension: {},
    created_at: getCurrentTimestamp(),
    created_by_id: "system",
    updated_at: getCurrentTimestamp(),
    updated_by_id: "system",
    deleted_at: null,
    deleted_by_id: null
  }
];

// =============== TB_CURRENCY CRUD FUNCTIONS ===============
export const tbCurrencyCrud = {
  // Create new currency
  create: (data: Omit<TbCurrency, 'id' | 'created_at' | 'updated_at'>): TbCurrency => {
    const newCurrency: TbCurrency = {
      id: generateUuid(),
      created_at: getCurrentTimestamp(),
      updated_at: getCurrentTimestamp(),
      ...data
    };
    mockTbCurrency.push(newCurrency);
    return newCurrency;
  },

  // Find by ID
  findById: (id: string): TbCurrency | null => {
    return mockTbCurrency.find(currency => currency.id === id && !currency.deleted_at) || null;
  },

  // Find by code
  findByCode: (code: string): TbCurrency | null => {
    return mockTbCurrency.find(currency => currency.code === code && !currency.deleted_at) || null;
  },

  // Find all active currencies
  findAllActive: (): TbCurrency[] => {
    return mockTbCurrency.filter(currency => !currency.deleted_at && currency.is_active);
  },

  // Find all currencies (including inactive)
  findAll: (): TbCurrency[] => {
    return mockTbCurrency.filter(currency => !currency.deleted_at);
  },

  // Update currency
  update: (id: string, data: Partial<TbCurrency>, updated_by_id?: string): TbCurrency | null => {
    const index = mockTbCurrency.findIndex(currency => currency.id === id && !currency.deleted_at);
    if (index === -1) return null;

    mockTbCurrency[index] = {
      ...mockTbCurrency[index],
      ...data,
      updated_at: getCurrentTimestamp(),
      updated_by_id: updated_by_id || null
    };
    return mockTbCurrency[index];
  },

  // Soft delete currency
  delete: (id: string, deleted_by_id?: string): boolean => {
    const index = mockTbCurrency.findIndex(currency => currency.id === id && !currency.deleted_at);
    if (index === -1) return false;

    mockTbCurrency[index].deleted_at = getCurrentTimestamp();
    mockTbCurrency[index].deleted_by_id = deleted_by_id || null;
    return true;
  },

  // Get currency with exchange rate
  getExchangeRate: (fromCode: string, toCode: string = 'THB'): number | null => {
    const fromCurrency = tbCurrencyCrud.findByCode(fromCode);
    const toCurrency = tbCurrencyCrud.findByCode(toCode);
    
    if (!fromCurrency || !toCurrency) return null;
    
    // If same currency, return 1
    if (fromCode === toCode) return 1;
    
    // Convert to base currency (THB) then to target currency
    const fromRate = fromCurrency.exchange_rate || 1;
    const toRate = toCurrency.exchange_rate || 1;
    
    return fromRate / toRate;
  },

  // Update exchange rate
  updateExchangeRate: (code: string, newRate: number, updated_by_id?: string): TbCurrency | null => {
    const currency = tbCurrencyCrud.findByCode(code);
    if (!currency) return null;

    return tbCurrencyCrud.update(currency.id, {
      exchange_rate: newRate,
      exchange_rate_at: getCurrentTimestamp()
    }, updated_by_id);
  }
};
