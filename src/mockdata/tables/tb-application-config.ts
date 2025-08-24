// =============== TB_APPLICATION_CONFIG TABLE ===============

import { TbApplicationConfig } from './types';
import { generateUuid, getCurrentTimestamp } from './utils';

// Mock Application Config Table (tb_application_config)
export let mockTbApplicationConfig: TbApplicationConfig[] = [
  {
    id: '550e8400-e29b-41d4-a716-446655440401',
    key: 'business_units',
    value: [
      {
        id: "c8aa7601-6a25-42fc-8a23-9f4de373fb4f",
        name: "BU-CARMEN-1",
        is_default: true,
        config: {
          hotel: {
            name: "The Yama Phuket Hotel",
            email: "fc@theyamaphuket.com",
            address: "5 Patak Soi 2,  Karon, Muang Phuket, Phuket, 83100",
            country: "THAILAND",
            zip_code: "83100",
            telephone: "076-303-456"
          },
          company: {
            name: "Puranakarn Co., Ltd   (Head Office)",
            email: "fc@theyamaphuket.com",
            address: "5 Patak Soi 2,  Karon, Muang Phuket, Phuket, 83100",
            country: "THAILAND",
            zip_code: "83100",
            telephone: "076-303-456"
          },
          tax_id: "0835553001610",
          branch_no: "00000",
          calculation_method: "AVG",
          currency_base: "THB",
          date_format: "dd/mm/yyyy",
          long_time_format: "HH:mm:ss",
          short_time_format: "HH:mm",
          timezone: "Asia/Bangkok",
          perpage: "20",
          amount: {
            locales: "th-TH",
            minimumIntegerDigits: 2
          },
          quantity: {
            locales: "th-TH",
            minimumIntegerDigits: 2
          },
          recipe: {
            locales: "th-TH",
            minimumIntegerDigits: 3
          }
        }
      },
      {
        id: "1ced51eb-8f3b-46c3-ac63-08e6520ce004",
        name: "BU-CARMEN-2",
        is_default: false,
        config: {
          hotel: {
            name: "The Yama Phuket Hotel",
            email: "fc@theyamaphuket.com",
            address: "5 Patak Soi 2,  Karon, Muang Phuket, Phuket, 83100",
            country: "THAILAND",
            zip_code: "83100",
            telephone: "076-303-456"
          },
          company: {
            name: "Puranakarn Co., Ltd   (Head Office)",
            email: "fc@theyamaphuket.com",
            address: "5 Patak Soi 2,  Karon, Muang Phuket, Phuket, 83100",
            country: "THAILAND",
            zip_code: "83100",
            telephone: "076-303-456"
          },
          tax_id: "0835553001610",
          branch_no: "00000",
          calculation_method: "FIFO",
          currency_base: "THB",
          date_format: "dd/mm/yyyy",
          long_time_format: "HH:mm:ss",
          short_time_format: "HH:mm",
          timezone: "Asia/Bangkok",
          perpage: "20",
          amount: {
            locales: "th-TH",
            minimumIntegerDigits: 2
          },
          quantity: {
            locales: "th-TH",
            minimumIntegerDigits: 2
          },
          recipe: {
            locales: "th-TH",
            minimumIntegerDigits: 3
          }
        }
      },
      {
        id: "357929b2-34ee-4765-8550-d956de9a46c3",
        name: "BU-CARMEN-3",
        is_default: false,
        config: {
          hotel: {
            name: "The Yama Phuket Hotel",
            email: "fc@theyamaphuket.com",
            address: "5 Patak Soi 2,  Karon, Muang Phuket, Phuket, 83100",
            country: "THAILAND",
            zip_code: "83100",
            telephone: "076-303-456"
          },
          company: {
            name: "Puranakarn Co., Ltd   (Head Office)",
            email: "fc@theyamaphuket.com",
            address: "5 Patak Soi 2,  Karon, Muang Phuket, Phuket, 83100",
            country: "THAILAND",
            zip_code: "83100",
            telephone: "076-303-456"
          },
          tax_id: "0835553001610",
          branch_no: "00000",
          calculation_method: "AVG",
          currency_base: "THB",
          date_format: "dd/MM/yyyy",
          long_time_format: "HH:mm:ss",
          short_time_format: "HH:mm",
          timezone: "Asia/Bangkok",
          perpage: "20",
          amount: {
            locales: "th-TH",
            minimumIntegerDigits: 2
          },
          quantity: {
            locales: "th-TH",
            minimumIntegerDigits: 2
          },
          recipe: {
            locales: "th-TH",
            minimumIntegerDigits: 3
          }
        }
      }
    ],
    created_at: '2024-01-15T08:00:00Z',
    created_by_id: null,
    updated_at: '2024-01-15T08:00:00Z',
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null
  }
];

// =============== TB_APPLICATION_CONFIG CRUD ===============

export const tbApplicationConfigCrud = {
  // Create
  create: (data: Omit<TbApplicationConfig, 'id' | 'created_at' | 'updated_at'>): TbApplicationConfig => {
    const now = getCurrentTimestamp();
    const config: TbApplicationConfig = {
      id: generateUuid(),
      key: data.key,
      value: data.value,
      created_at: now,
      created_by_id: data.created_by_id || null,
      updated_at: now,
      updated_by_id: data.updated_by_id || null,
      deleted_at: null,
      deleted_by_id: null
    };
    mockTbApplicationConfig.push(config);
    return config;
  },

  // Find by key
  findByKey: (key: string): TbApplicationConfig | null => {
    return mockTbApplicationConfig.find(config => config.key === key && !config.deleted_at) || null;
  },

  // Get business units
  getBusinessUnits: (): any[] => {
    const config = tbApplicationConfigCrud.findByKey('business_units');
    return config ? config.value : [];
  },

  // Update
  update: (key: string, data: Partial<Omit<TbApplicationConfig, 'id' | 'key' | 'created_at'>>): TbApplicationConfig | null => {
    const index = mockTbApplicationConfig.findIndex(config => config.key === key && !config.deleted_at);
    if (index === -1) return null;

    mockTbApplicationConfig[index] = {
      ...mockTbApplicationConfig[index],
      ...data,
      updated_at: getCurrentTimestamp()
    };
    return mockTbApplicationConfig[index];
  }
};
