import { TbExchangeRate } from './types';
import { generateUuid, getCurrentTimestamp } from './utils';
import { UUID_MAPPING } from './uuid-mapping';

// =============== MOCK TB_EXCHANGE_RATE DATA ===============
export let mockTbExchangeRate: TbExchangeRate[] = [
  {
    id: "exr-001",
    at_date: getCurrentTimestamp(),
    currency_id: "cur-002-usd",
    currency_code: "USD",
    currency_name: "US Dollar",
    exchange_rate: 35.5,
    note: "Current USD to THB rate",
    info: {
      source: "Central Bank",
      last_updated: getCurrentTimestamp(),
      trend: "stable"
    },
    dimension: {},
    created_at: getCurrentTimestamp(),
    created_by_id: UUID_MAPPING['system'],
    updated_at: getCurrentTimestamp(),
    updated_by_id: UUID_MAPPING['system'],
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "exr-002",
    at_date: getCurrentTimestamp(),
    currency_id: "cur-003-eur",
    currency_code: "EUR",
    currency_name: "Euro",
    exchange_rate: 38.2,
    note: "Current EUR to THB rate",
    info: {
      source: "Central Bank",
      last_updated: getCurrentTimestamp(),
      trend: "increasing"
    },
    dimension: {},
    created_at: getCurrentTimestamp(),
    created_by_id: UUID_MAPPING['system'],
    updated_at: getCurrentTimestamp(),
    updated_by_id: UUID_MAPPING['system'],
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "exr-003",
    at_date: getCurrentTimestamp(),
    currency_id: "cur-004-jpy",
    currency_code: "JPY",
    currency_name: "Japanese Yen",
    exchange_rate: 0.24,
    note: "Current JPY to THB rate",
    info: {
      source: "Central Bank",
      last_updated: getCurrentTimestamp(),
      trend: "decreasing"
    },
    dimension: {},
    created_at: getCurrentTimestamp(),
    created_by_id: UUID_MAPPING['system'],
    updated_at: getCurrentTimestamp(),
    updated_by_id: UUID_MAPPING['system'],
    deleted_at: null,
    deleted_by_id: null
  },
  // Historical rates
  {
    id: "exr-004",
    at_date: "2024-01-01T00:00:00.000Z",
    currency_id: "cur-002-usd",
    currency_code: "USD",
    currency_name: "US Dollar",
    exchange_rate: 35.8,
    note: "Historical USD to THB rate - Jan 1, 2024",
    info: {
      source: "Central Bank",
      last_updated: "2024-01-01T00:00:00.000Z",
      trend: "historical"
    },
    dimension: {},
    created_at: "2024-01-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['system'],
    updated_at: "2024-01-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['system'],
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "exr-005",
    at_date: "2024-01-01T00:00:00.000Z",
    currency_id: "cur-003-eur",
    currency_code: "EUR",
    currency_name: "Euro",
    exchange_rate: 37.9,
    note: "Historical EUR to THB rate - Jan 1, 2024",
    info: {
      source: "Central Bank",
      last_updated: "2024-01-01T00:00:00.000Z",
      trend: "historical"
    },
    dimension: {},
    created_at: "2024-01-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['system'],
    updated_at: "2024-01-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['system'],
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "exr-006",
    at_date: "2024-02-01T00:00:00.000Z",
    currency_id: "cur-002-usd",
    currency_code: "USD",
    currency_name: "US Dollar",
    exchange_rate: 35.3,
    note: "Historical USD to THB rate - Feb 1, 2024",
    info: {
      source: "Central Bank",
      last_updated: "2024-02-01T00:00:00.000Z",
      trend: "historical"
    },
    dimension: {},
    created_at: "2024-02-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['system'],
    updated_at: "2024-02-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['system'],
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "exr-007",
    at_date: "2024-03-01T00:00:00.000Z",
    currency_id: "cur-002-usd",
    currency_code: "USD",
    currency_name: "US Dollar",
    exchange_rate: 35.1,
    note: "Historical USD to THB rate - Mar 1, 2024",
    info: {
      source: "Central Bank",
      last_updated: "2024-03-01T00:00:00.000Z",
      trend: "historical"
    },
    dimension: {},
    created_at: "2024-03-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['system'],
    updated_at: "2024-03-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['system'],
    deleted_at: null,
    deleted_by_id: null
  }
];

// =============== TB_EXCHANGE_RATE CRUD FUNCTIONS ===============
export const tbExchangeRateCrud = {
  // Create new exchange rate
  create: (data: Omit<TbExchangeRate, 'id' | 'created_at' | 'updated_at'>): TbExchangeRate => {
    const newRate: TbExchangeRate = {
      id: generateUuid(),
      created_at: getCurrentTimestamp(),
      updated_at: getCurrentTimestamp(),
      ...data
    };
    mockTbExchangeRate.push(newRate);
    return newRate;
  },

  // Find by ID
  findById: (id: string): TbExchangeRate | null => {
    return mockTbExchangeRate.find(rate => rate.id === id && !rate.deleted_at) || null;
  },

  // Find by currency and date
  findByCurrencyAndDate: (currencyId: string, date: string): TbExchangeRate | null => {
    return mockTbExchangeRate.find(rate => 
      rate.currency_id === currencyId && 
      rate.at_date === date && 
      !rate.deleted_at
    ) || null;
  },

  // Find latest rate by currency
  findLatestByCurrency: (currencyId: string): TbExchangeRate | null => {
    const rates = mockTbExchangeRate
      .filter(rate => rate.currency_id === currencyId && !rate.deleted_at)
      .sort((a, b) => new Date(b.at_date || '').getTime() - new Date(a.at_date || '').getTime());
    
    return rates[0] || null;
  },

  // Find latest rate by currency code
  findLatestByCurrencyCode: (currencyCode: string): TbExchangeRate | null => {
    const rates = mockTbExchangeRate
      .filter(rate => rate.currency_code === currencyCode && !rate.deleted_at)
      .sort((a, b) => new Date(b.at_date || '').getTime() - new Date(a.at_date || '').getTime());
    
    return rates[0] || null;
  },

  // Find all rates for a currency
  findByCurrency: (currencyId: string): TbExchangeRate[] => {
    return mockTbExchangeRate
      .filter(rate => rate.currency_id === currencyId && !rate.deleted_at)
      .sort((a, b) => new Date(b.at_date || '').getTime() - new Date(a.at_date || '').getTime());
  },

  // Find all rates for a currency code
  findByCurrencyCode: (currencyCode: string): TbExchangeRate[] => {
    return mockTbExchangeRate
      .filter(rate => rate.currency_code === currencyCode && !rate.deleted_at)
      .sort((a, b) => new Date(b.at_date || '').getTime() - new Date(a.at_date || '').getTime());
  },

  // Find rates by date range
  findByDateRange: (startDate: string, endDate: string): TbExchangeRate[] => {
    const start = new Date(startDate).getTime();
    const end = new Date(endDate).getTime();
    
    return mockTbExchangeRate
      .filter(rate => {
        if (!rate.at_date || rate.deleted_at) return false;
        const rateDate = new Date(rate.at_date).getTime();
        return rateDate >= start && rateDate <= end;
      })
      .sort((a, b) => new Date(b.at_date || '').getTime() - new Date(a.at_date || '').getTime());
  },

  // Find current rates (today's rates)
  findCurrentRates: (): TbExchangeRate[] => {
    const today = new Date().toISOString().split('T')[0];
    return mockTbExchangeRate.filter(rate => 
      !rate.deleted_at && 
      rate.at_date?.startsWith(today)
    );
  },

  // Find all rates
  findAll: (): TbExchangeRate[] => {
    return mockTbExchangeRate
      .filter(rate => !rate.deleted_at)
      .sort((a, b) => new Date(b.at_date || '').getTime() - new Date(a.at_date || '').getTime());
  },

  // Update exchange rate
  update: (id: string, data: Partial<TbExchangeRate>, updated_by_id?: string): TbExchangeRate | null => {
    const index = mockTbExchangeRate.findIndex(rate => rate.id === id && !rate.deleted_at);
    if (index === -1) return null;

    mockTbExchangeRate[index] = {
      ...mockTbExchangeRate[index],
      ...data,
      updated_at: getCurrentTimestamp(),
      updated_by_id: updated_by_id || null
    };
    return mockTbExchangeRate[index];
  },

  // Soft delete exchange rate
  delete: (id: string, deleted_by_id?: string): boolean => {
    const index = mockTbExchangeRate.findIndex(rate => rate.id === id && !rate.deleted_at);
    if (index === -1) return false;

    mockTbExchangeRate[index].deleted_at = getCurrentTimestamp();
    mockTbExchangeRate[index].deleted_by_id = deleted_by_id || null;
    return true;
  },

  // Calculate conversion
  convert: (
    amount: number,
    fromCurrencyCode: string,
    toCurrencyCode: string,
    asOfDate?: string
  ): number | null => {
    // If same currency, return same amount
    if (fromCurrencyCode === toCurrencyCode) return amount;

    // If one of them is THB (base currency)
    if (toCurrencyCode === 'THB') {
      const fromRate = asOfDate 
        ? tbExchangeRateCrud.findByCurrencyCode(fromCurrencyCode).find(r => r.at_date === asOfDate)
        : tbExchangeRateCrud.findLatestByCurrencyCode(fromCurrencyCode);
      
      return fromRate ? amount * (fromRate.exchange_rate || 0) : null;
    }
    
    if (fromCurrencyCode === 'THB') {
      const toRate = asOfDate 
        ? tbExchangeRateCrud.findByCurrencyCode(toCurrencyCode).find(r => r.at_date === asOfDate)
        : tbExchangeRateCrud.findLatestByCurrencyCode(toCurrencyCode);
      
      return toRate ? amount / (toRate.exchange_rate || 1) : null;
    }

    // Cross currency conversion through THB
    const fromRate = asOfDate 
      ? tbExchangeRateCrud.findByCurrencyCode(fromCurrencyCode).find(r => r.at_date === asOfDate)
      : tbExchangeRateCrud.findLatestByCurrencyCode(fromCurrencyCode);
    
    const toRate = asOfDate 
      ? tbExchangeRateCrud.findByCurrencyCode(toCurrencyCode).find(r => r.at_date === asOfDate)
      : tbExchangeRateCrud.findLatestByCurrencyCode(toCurrencyCode);

    if (!fromRate || !toRate) return null;

    // Convert to THB first, then to target currency
    const thbAmount = amount * (fromRate.exchange_rate || 0);
    return thbAmount / (toRate.exchange_rate || 1);
  },

  // Add new rate for today
  addTodayRate: (currencyCode: string, rate: number, created_by_id?: string): TbExchangeRate => {
    const today = getCurrentTimestamp();
    return tbExchangeRateCrud.create({
      at_date: today,
      currency_id: `cur-${currencyCode.toLowerCase()}`,
      currency_code: currencyCode,
      currency_name: currencyCode,
      exchange_rate: rate,
      note: `Rate updated for ${new Date().toDateString()}`,
      info: {
        source: "Manual Entry",
        last_updated: today,
        trend: "updated"
      },
      dimension: {},
      created_by_id: created_by_id || null,
      updated_by_id: created_by_id || null,
      deleted_at: null,
      deleted_by_id: null
    });
  },

  // Get rate history for chart
  getRateHistory: (currencyCode: string, days: number = 30): TbExchangeRate[] => {
    const endDate = new Date();
    const startDate = new Date();
    startDate.setDate(endDate.getDate() - days);

    return tbExchangeRateCrud.findByDateRange(
      startDate.toISOString(),
      endDate.toISOString()
    ).filter(rate => rate.currency_code === currencyCode);
  },

  // Get exchange rate statistics
  getStats: () => {
    const allRates = mockTbExchangeRate.filter(rate => !rate.deleted_at);
    const currencies = [...new Set(allRates.map(rate => rate.currency_code))];
    const currentRates = tbExchangeRateCrud.findCurrentRates();
    
    return {
      total: allRates.length,
      currencies: currencies.length,
      currentRates: currentRates.length,
      historicalRates: allRates.length - currentRates.length,
      byCurrency: currencies.reduce((acc, currency) => {
        if (currency) {
          acc[currency] = allRates.filter(rate => rate.currency_code === currency).length;
        }
        return acc;
      }, {} as Record<string, number>),
      latestRates: currencies.reduce((acc, currency) => {
        if (currency) {
          const latest = tbExchangeRateCrud.findLatestByCurrencyCode(currency);
          if (latest) {
            acc[currency] = {
              rate: latest.exchange_rate || 0,
              date: latest.at_date || '',
              trend: latest.info?.trend || 'unknown'
            };
          }
        }
        return acc;
      }, {} as Record<string, any>)
    };
  }
};
