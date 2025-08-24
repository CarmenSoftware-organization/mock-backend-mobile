import { TbCurrencyIso } from './types';
import { generateUuid, getCurrentTimestamp } from './utils';
import { UUID_MAPPING } from './uuid-mapping';

// =============== MOCK TB_CURRENCY_ISO DATA ===============
export let mockTbCurrencyIso: TbCurrencyIso[] = [
  // Major world currencies
  {
    id: "ciso-001",
    code: "USD",
    name: "United States Dollar",
    symbol: "$",
    decimal_places: 2,
    is_active: true,
    created_at: "2023-01-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['system'],
    updated_at: "2023-01-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['system']
  },

  {
    id: "ciso-002",
    code: "EUR",
    name: "Euro",
    symbol: "€",
    decimal_places: 2,
    is_active: true,
    created_at: "2023-01-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['system'],
    updated_at: "2023-01-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['system']
  },

  {
    id: "ciso-003",
    code: "THB",
    name: "Thai Baht",
    symbol: "฿",
    decimal_places: 2,
    is_active: true,
    created_at: "2023-01-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['system'],
    updated_at: "2023-01-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['system']
  },

  {
    id: "ciso-004",
    code: "SGD",
    name: "Singapore Dollar",
    symbol: "S$",
    decimal_places: 2,
    is_active: true,
    created_at: "2023-01-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['system'],
    updated_at: "2023-01-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['system']
  },

  {
    id: "ciso-005",
    code: "GBP",
    name: "British Pound Sterling",
    symbol: "£",
    decimal_places: 2,
    is_active: true,
    created_at: "2023-01-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['system'],
    updated_at: "2023-01-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['system']
  },

  {
    id: "ciso-006",
    code: "JPY",
    name: "Japanese Yen",
    symbol: "¥",
    decimal_places: 0, // Yen doesn't use decimal places
    is_active: true,
    created_at: "2023-01-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['system'],
    updated_at: "2023-01-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['system']
  },

  {
    id: "ciso-007",
    code: "CNY",
    name: "Chinese Yuan",
    symbol: "¥",
    decimal_places: 2,
    is_active: true,
    created_at: "2023-01-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['system'],
    updated_at: "2023-01-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['system']
  },

  {
    id: "ciso-008",
    code: "KRW",
    name: "South Korean Won",
    symbol: "₩",
    decimal_places: 0, // Won doesn't use decimal places
    is_active: true,
    created_at: "2023-01-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['system'],
    updated_at: "2023-01-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['system']
  },

  {
    id: "ciso-009",
    code: "AUD",
    name: "Australian Dollar",
    symbol: "A$",
    decimal_places: 2,
    is_active: true,
    created_at: "2023-01-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['system'],
    updated_at: "2023-01-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['system']
  },

  {
    id: "ciso-010",
    code: "CAD",
    name: "Canadian Dollar",
    symbol: "C$",
    decimal_places: 2,
    is_active: true,
    created_at: "2023-01-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['system'],
    updated_at: "2023-01-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['system']
  },

  // ASEAN currencies
  {
    id: "ciso-011",
    code: "MYR",
    name: "Malaysian Ringgit",
    symbol: "RM",
    decimal_places: 2,
    is_active: true,
    created_at: "2023-01-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['system'],
    updated_at: "2023-01-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['system']
  },

  {
    id: "ciso-012",
    code: "IDR",
    name: "Indonesian Rupiah",
    symbol: "Rp",
    decimal_places: 0, // Rupiah typically doesn't use decimal places
    is_active: true,
    created_at: "2023-01-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['system'],
    updated_at: "2023-01-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['system']
  },

  {
    id: "ciso-013",
    code: "PHP",
    name: "Philippine Peso",
    symbol: "₱",
    decimal_places: 2,
    is_active: true,
    created_at: "2023-01-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['system'],
    updated_at: "2023-01-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['system']
  },

  {
    id: "ciso-014",
    code: "VND",
    name: "Vietnamese Dong",
    symbol: "₫",
    decimal_places: 0, // Dong doesn't use decimal places
    is_active: true,
    created_at: "2023-01-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['system'],
    updated_at: "2023-01-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['system']
  },

  // Middle East & Others
  {
    id: "ciso-015",
    code: "AED",
    name: "UAE Dirham",
    symbol: "د.إ",
    decimal_places: 2,
    is_active: true,
    created_at: "2023-01-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['system'],
    updated_at: "2023-01-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['system']
  },

  {
    id: "ciso-016",
    code: "CHF",
    name: "Swiss Franc",
    symbol: "CHF",
    decimal_places: 2,
    is_active: true,
    created_at: "2023-01-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['system'],
    updated_at: "2023-01-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['system']
  },

  {
    id: "ciso-017",
    code: "INR",
    name: "Indian Rupee",
    symbol: "₹",
    decimal_places: 2,
    is_active: true,
    created_at: "2023-01-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['system'],
    updated_at: "2023-01-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['system']
  },

  {
    id: "ciso-018",
    code: "HKD",
    name: "Hong Kong Dollar",
    symbol: "HK$",
    decimal_places: 2,
    is_active: true,
    created_at: "2023-01-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['system'],
    updated_at: "2023-01-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['system']
  },

  {
    id: "ciso-019",
    code: "TWD",
    name: "Taiwan Dollar",
    symbol: "NT$",
    decimal_places: 2,
    is_active: true,
    created_at: "2023-01-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['system'],
    updated_at: "2023-01-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['system']
  },

  {
    id: "ciso-020",
    code: "NZD",
    name: "New Zealand Dollar",
    symbol: "NZ$",
    decimal_places: 2,
    is_active: true,
    created_at: "2023-01-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['system'],
    updated_at: "2023-01-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['system']
  },

  // Digital currencies (for future use)
  {
    id: "ciso-021",
    code: "BTC",
    name: "Bitcoin",
    symbol: "₿",
    decimal_places: 8,
    is_active: false, // Disabled for now
    created_at: "2023-06-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['user-010'],
    updated_at: "2023-06-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['user-010']
  },

  {
    id: "ciso-022",
    code: "ETH",
    name: "Ethereum",
    symbol: "Ξ",
    decimal_places: 18,
    is_active: false, // Disabled for now
    created_at: "2023-06-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['user-010'],
    updated_at: "2023-06-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['user-010']
  },

  // Historical/Inactive currencies
  {
    id: "ciso-023",
    code: "DEM",
    name: "Deutsche Mark",
    symbol: "DM",
    decimal_places: 2,
    is_active: false, // Replaced by EUR
    created_at: "2023-01-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['system'],
    updated_at: "2023-01-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['system']
  },

  {
    id: "ciso-024",
    code: "FRF",
    name: "French Franc",
    symbol: "₣",
    decimal_places: 2,
    is_active: false, // Replaced by EUR
    created_at: "2023-01-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['system'],
    updated_at: "2023-01-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['system']
  },

  // Recently added currencies
  {
    id: "ciso-025",
    code: "BRL",
    name: "Brazilian Real",
    symbol: "R$",
    decimal_places: 2,
    is_active: true,
    created_at: getCurrentTimestamp(),
    created_by_id: UUID_MAPPING['user-001'],
    updated_at: getCurrentTimestamp(),
    updated_by_id: UUID_MAPPING['user-001']
  }
];

// =============== TB_CURRENCY_ISO CRUD FUNCTIONS ===============
export const tbCurrencyIsoCrud = {
  // Create new currency
  create: (data: Omit<TbCurrencyIso, 'id' | 'created_at' | 'updated_at'>): TbCurrencyIso => {
    const newCurrency: TbCurrencyIso = {
      id: generateUuid(),
      decimal_places: 2,
      is_active: true,
      created_at: getCurrentTimestamp(),
      updated_at: getCurrentTimestamp(),
      ...data
    };
    mockTbCurrencyIso.push(newCurrency);
    return newCurrency;
  },

  // Find by ID
  findById: (id: string): TbCurrencyIso | null => {
    return mockTbCurrencyIso.find(currency => currency.id === id) || null;
  },

  // Find by code
  findByCode: (code: string): TbCurrencyIso | null => {
    return mockTbCurrencyIso.find(currency => 
      currency.code.toUpperCase() === code.toUpperCase()
    ) || null;
  },

  // Find active currencies
  findActive: (): TbCurrencyIso[] => {
    return mockTbCurrencyIso
      .filter(currency => currency.is_active)
      .sort((a, b) => a.code.localeCompare(b.code));
  },

  // Find by name (partial match)
  findByName: (name: string): TbCurrencyIso[] => {
    const searchTerm = name.toLowerCase();
    return mockTbCurrencyIso
      .filter(currency => 
        currency.name.toLowerCase().includes(searchTerm) && currency.is_active
      )
      .sort((a, b) => a.name.localeCompare(b.name));
  },

  // Find by symbol
  findBySymbol: (symbol: string): TbCurrencyIso[] => {
    return mockTbCurrencyIso
      .filter(currency => currency.symbol === symbol && currency.is_active)
      .sort((a, b) => a.code.localeCompare(b.code));
  },

  // Find by decimal places
  findByDecimalPlaces: (decimalPlaces: number): TbCurrencyIso[] => {
    return mockTbCurrencyIso
      .filter(currency => currency.decimal_places === decimalPlaces && currency.is_active)
      .sort((a, b) => a.code.localeCompare(b.code));
  },

  // Find major currencies
  findMajorCurrencies: (): TbCurrencyIso[] => {
    const majorCodes = ['USD', 'EUR', 'GBP', 'JPY', 'CHF', 'CAD', 'AUD'];
    return mockTbCurrencyIso
      .filter(currency => 
        majorCodes.includes(currency.code) && currency.is_active
      )
      .sort((a, b) => {
        const indexA = majorCodes.indexOf(a.code);
        const indexB = majorCodes.indexOf(b.code);
        return indexA - indexB;
      });
  },

  // Find ASEAN currencies
  findAseanCurrencies: (): TbCurrencyIso[] => {
    const aseanCodes = ['THB', 'SGD', 'MYR', 'IDR', 'PHP', 'VND'];
    return mockTbCurrencyIso
      .filter(currency => 
        aseanCodes.includes(currency.code) && currency.is_active
      )
      .sort((a, b) => a.code.localeCompare(b.code));
  },

  // Find digital currencies
  findDigitalCurrencies: (): TbCurrencyIso[] => {
    const digitalCodes = ['BTC', 'ETH'];
    return mockTbCurrencyIso
      .filter(currency => digitalCodes.includes(currency.code))
      .sort((a, b) => a.code.localeCompare(b.code));
  },

  // Find all currencies
  findAll: (): TbCurrencyIso[] => {
    return mockTbCurrencyIso.sort((a, b) => a.code.localeCompare(b.code));
  },

  // Update currency
  update: (id: string, data: Partial<TbCurrencyIso>, updated_by_id?: string): TbCurrencyIso | null => {
    const index = mockTbCurrencyIso.findIndex(currency => currency.id === id);
    if (index === -1) return null;

    mockTbCurrencyIso[index] = {
      ...mockTbCurrencyIso[index],
      ...data,
      updated_at: getCurrentTimestamp(),
      updated_by_id: updated_by_id || null
    };
    return mockTbCurrencyIso[index];
  },

  // Delete currency (hard delete)
  delete: (id: string): boolean => {
    const index = mockTbCurrencyIso.findIndex(currency => currency.id === id);
    if (index === -1) return false;
    
    mockTbCurrencyIso.splice(index, 1);
    return true;
  },

  // Activate currency
  activate: (id: string, updated_by_id?: string): TbCurrencyIso | null => {
    return tbCurrencyIsoCrud.update(id, { is_active: true }, updated_by_id);
  },

  // Deactivate currency
  deactivate: (id: string, updated_by_id?: string): TbCurrencyIso | null => {
    return tbCurrencyIsoCrud.update(id, { is_active: false }, updated_by_id);
  },

  // Check if currency code exists
  codeExists: (code: string, excludeId?: string): boolean => {
    return mockTbCurrencyIso.some(currency => 
      currency.code.toUpperCase() === code.toUpperCase() && 
      currency.id !== excludeId
    );
  },

  // Format amount with currency
  formatAmount: (amount: number, currencyCode: string): string => {
    const currency = tbCurrencyIsoCrud.findByCode(currencyCode);
    if (!currency) return `${amount} ${currencyCode}`;

    const decimalPlaces = currency.decimal_places || 0;
    const formattedAmount = amount.toFixed(decimalPlaces);
    const symbol = currency.symbol || currency.code;

    // Different formatting based on currency
    switch (currency.code) {
      case 'USD':
      case 'AUD':
      case 'CAD':
      case 'SGD':
      case 'HKD':
      case 'TWD':
      case 'NZD':
        return `${symbol}${formattedAmount}`;
      case 'EUR':
      case 'GBP':
        return `${symbol}${formattedAmount}`;
      case 'THB':
      case 'JPY':
      case 'CNY':
      case 'KRW':
      case 'VND':
        return `${formattedAmount} ${symbol}`;
      default:
        return `${symbol} ${formattedAmount}`;
    }
  },

  // Get currency exchange pairs (for future use)
  getExchangePairs: (baseCurrency: string): TbCurrencyIso[] => {
    const base = tbCurrencyIsoCrud.findByCode(baseCurrency);
    if (!base || !base.is_active) return [];

    return tbCurrencyIsoCrud.findActive()
      .filter(currency => currency.code !== baseCurrency);
  },

  // Search currencies
  search: (query: string): TbCurrencyIso[] => {
    const searchTerm = query.toLowerCase();
    return mockTbCurrencyIso
      .filter(currency => 
        currency.is_active && (
          currency.code.toLowerCase().includes(searchTerm) ||
          currency.name.toLowerCase().includes(searchTerm) ||
          (currency.symbol && currency.symbol.includes(searchTerm))
        )
      )
      .sort((a, b) => {
        // Prioritize exact code matches
        if (a.code.toLowerCase() === searchTerm) return -1;
        if (b.code.toLowerCase() === searchTerm) return 1;
        
        // Then prioritize code starts with
        if (a.code.toLowerCase().startsWith(searchTerm)) return -1;
        if (b.code.toLowerCase().startsWith(searchTerm)) return 1;
        
        // Finally sort alphabetically
        return a.code.localeCompare(b.code);
      });
  },

  // Get popular currencies for region
  getPopularCurrenciesForRegion: (region: 'asia' | 'europe' | 'americas' | 'global'): TbCurrencyIso[] => {
    const regionCurrencies = {
      asia: ['USD', 'THB', 'SGD', 'JPY', 'CNY', 'KRW', 'MYR', 'IDR', 'PHP', 'VND', 'HKD', 'TWD', 'INR'],
      europe: ['EUR', 'GBP', 'CHF', 'USD'],
      americas: ['USD', 'CAD', 'BRL'],
      global: ['USD', 'EUR', 'GBP', 'JPY', 'CHF']
    };

    const codes = regionCurrencies[region] || regionCurrencies.global;
    return mockTbCurrencyIso
      .filter(currency => codes.includes(currency.code) && currency.is_active)
      .sort((a, b) => {
        const indexA = codes.indexOf(a.code);
        const indexB = codes.indexOf(b.code);
        return indexA - indexB;
      });
  },

  // Validate currency data
  validateCurrencyData: (data: Partial<TbCurrencyIso>): { valid: boolean; errors: string[] } => {
    const errors: string[] = [];

    if (data.code) {
      if (data.code.length !== 3) {
        errors.push('Currency code must be exactly 3 characters');
      }
      if (!/^[A-Z]{3}$/.test(data.code)) {
        errors.push('Currency code must be 3 uppercase letters');
      }
    }

    if (data.decimal_places !== undefined && data.decimal_places !== null) {
      if (data.decimal_places < 0 || data.decimal_places > 18) {
        errors.push('Decimal places must be between 0 and 18');
      }
    }

    if (data.name) {
      if (data.name.length < 3) {
        errors.push('Currency name must be at least 3 characters');
      }
    }

    return {
      valid: errors.length === 0,
      errors
    };
  },

  // Get currency statistics
  getStats: () => {
    const allCurrencies = mockTbCurrencyIso;
    const activeCurrencies = allCurrencies.filter(c => c.is_active);

    return {
      total: allCurrencies.length,
      active: activeCurrencies.length,
      inactive: allCurrencies.length - activeCurrencies.length,
      byDecimalPlaces: activeCurrencies.reduce((acc, currency) => {
        const places = currency.decimal_places || 0;
        acc[places] = (acc[places] || 0) + 1;
        return acc;
      }, {} as Record<number, number>),
      withSymbols: activeCurrencies.filter(c => c.symbol).length,
      withoutSymbols: activeCurrencies.filter(c => !c.symbol).length,
      majorCurrencies: tbCurrencyIsoCrud.findMajorCurrencies().length,
      aseanCurrencies: tbCurrencyIsoCrud.findAseanCurrencies().length,
      digitalCurrencies: tbCurrencyIsoCrud.findDigitalCurrencies().length,
      mostCommonDecimalPlaces: (() => {
        const counts = activeCurrencies.reduce((acc, c) => {
          const places = c.decimal_places || 0;
          acc[places] = (acc[places] || 0) + 1;
          return acc;
        }, {} as Record<number, number>);
        
        return Object.entries(counts)
          .sort(([,a], [,b]) => b - a)[0]?.[0] || '2';
      })()
    };
  }
};
