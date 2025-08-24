import { TbCreditTerm } from './types';
import { generateUuid, getCurrentTimestamp } from './utils';
import { UUID_MAPPING } from './uuid-mapping';

// =============== MOCK TB_CREDIT_TERM DATA ===============
export let mockTbCreditTerm: TbCreditTerm[] = [
  {
    id: "ct-001",
    name: "Cash on Delivery",
    value: 0,
    description: "Payment upon delivery of goods",
    note: "COD - No credit period",
    is_active: true,
    info: {
      type: "immediate",
      payment_method: ["cash", "bank_transfer"],
      risk_level: "low"
    },
    doc_version: 1,
    created_at: getCurrentTimestamp(),
    created_by_id: UUID_MAPPING['system'],
    updated_at: getCurrentTimestamp(),
    updated_by_id: UUID_MAPPING['system'],
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "ct-002",
    name: "Net 7 Days",
    value: 7,
    description: "Payment due within 7 days of invoice date",
    note: "Short term credit for regular suppliers",
    is_active: true,
    info: {
      type: "short_term",
      payment_method: ["bank_transfer", "check"],
      risk_level: "low"
    },
    doc_version: 1,
    created_at: getCurrentTimestamp(),
    created_by_id: UUID_MAPPING['system'],
    updated_at: getCurrentTimestamp(),
    updated_by_id: UUID_MAPPING['system'],
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "ct-003",
    name: "Net 15 Days",
    value: 15,
    description: "Payment due within 15 days of invoice date",
    note: "Standard short term credit",
    is_active: true,
    info: {
      type: "short_term",
      payment_method: ["bank_transfer", "check"],
      risk_level: "low"
    },
    doc_version: 1,
    created_at: getCurrentTimestamp(),
    created_by_id: UUID_MAPPING['system'],
    updated_at: getCurrentTimestamp(),
    updated_by_id: UUID_MAPPING['system'],
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "ct-004",
    name: "Net 30 Days",
    value: 30,
    description: "Payment due within 30 days of invoice date",
    note: "Standard commercial credit terms",
    is_active: true,
    info: {
      type: "standard",
      payment_method: ["bank_transfer", "check"],
      risk_level: "medium"
    },
    doc_version: 1,
    created_at: getCurrentTimestamp(),
    created_by_id: UUID_MAPPING['system'],
    updated_at: getCurrentTimestamp(),
    updated_by_id: UUID_MAPPING['system'],
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "ct-005",
    name: "Net 45 Days",
    value: 45,
    description: "Payment due within 45 days of invoice date",
    note: "Extended credit for preferred vendors",
    is_active: true,
    info: {
      type: "extended",
      payment_method: ["bank_transfer", "check"],
      risk_level: "medium"
    },
    doc_version: 1,
    created_at: getCurrentTimestamp(),
    created_by_id: UUID_MAPPING['system'],
    updated_at: getCurrentTimestamp(),
    updated_by_id: UUID_MAPPING['system'],
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "ct-006",
    name: "Net 60 Days",
    value: 60,
    description: "Payment due within 60 days of invoice date",
    note: "Long term credit for special arrangements",
    is_active: true,
    info: {
      type: "long_term",
      payment_method: ["bank_transfer"],
      risk_level: "high"
    },
    doc_version: 1,
    created_at: getCurrentTimestamp(),
    created_by_id: UUID_MAPPING['system'],
    updated_at: getCurrentTimestamp(),
    updated_by_id: UUID_MAPPING['system'],
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "ct-007",
    name: "2/10 Net 30",
    value: 30,
    description: "2% discount if paid within 10 days, otherwise net 30 days",
    note: "Early payment discount terms",
    is_active: true,
    info: {
      type: "discount",
      discount_rate: 2,
      discount_days: 10,
      payment_method: ["bank_transfer", "check"],
      risk_level: "medium"
    },
    doc_version: 1,
    created_at: getCurrentTimestamp(),
    created_by_id: UUID_MAPPING['system'],
    updated_at: getCurrentTimestamp(),
    updated_by_id: UUID_MAPPING['system'],
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "ct-008",
    name: "1/15 Net 45",
    value: 45,
    description: "1% discount if paid within 15 days, otherwise net 45 days",
    note: "Extended early payment discount",
    is_active: true,
    info: {
      type: "discount",
      discount_rate: 1,
      discount_days: 15,
      payment_method: ["bank_transfer", "check"],
      risk_level: "medium"
    },
    doc_version: 1,
    created_at: getCurrentTimestamp(),
    created_by_id: UUID_MAPPING['system'],
    updated_at: getCurrentTimestamp(),
    updated_by_id: UUID_MAPPING['system'],
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "ct-009",
    name: "Prepaid",
    value: -1,
    description: "Payment required before delivery",
    note: "Advance payment for new vendors",
    is_active: true,
    info: {
      type: "prepaid",
      payment_method: ["bank_transfer", "cash"],
      risk_level: "none"
    },
    doc_version: 1,
    created_at: getCurrentTimestamp(),
    created_by_id: UUID_MAPPING['system'],
    updated_at: getCurrentTimestamp(),
    updated_by_id: UUID_MAPPING['system'],
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "ct-010",
    name: "Net 90 Days",
    value: 90,
    description: "Payment due within 90 days of invoice date",
    note: "Extended terms for strategic partners (inactive)",
    is_active: false,
    info: {
      type: "long_term",
      payment_method: ["bank_transfer"],
      risk_level: "very_high"
    },
    doc_version: 1,
    created_at: getCurrentTimestamp(),
    created_by_id: UUID_MAPPING['system'],
    updated_at: getCurrentTimestamp(),
    updated_by_id: UUID_MAPPING['system'],
    deleted_at: null,
    deleted_by_id: null
  }
];

// =============== TB_CREDIT_TERM CRUD FUNCTIONS ===============
export const tbCreditTermCrud = {
  // Create new credit term
  create: (data: Omit<TbCreditTerm, 'id' | 'created_at' | 'updated_at'>): TbCreditTerm => {
    const newCreditTerm: TbCreditTerm = {
      id: generateUuid(),
      created_at: getCurrentTimestamp(),
      updated_at: getCurrentTimestamp(),
      doc_version: 1,
      ...data
    };
    mockTbCreditTerm.push(newCreditTerm);
    return newCreditTerm;
  },

  // Find by ID
  findById: (id: string): TbCreditTerm | null => {
    return mockTbCreditTerm.find(term => term.id === id && !term.deleted_at) || null;
  },

  // Find by name
  findByName: (name: string): TbCreditTerm | null => {
    return mockTbCreditTerm.find(term => term.name === name && !term.deleted_at) || null;
  },

  // Find by value (days)
  findByValue: (value: number): TbCreditTerm[] => {
    return mockTbCreditTerm.filter(term => 
      !term.deleted_at && 
      term.is_active &&
      term.value === value
    );
  },

  // Find by credit term type
  findByType: (type: string): TbCreditTerm[] => {
    return mockTbCreditTerm.filter(term => 
      !term.deleted_at && 
      term.is_active &&
      term.info?.type === type
    );
  },

  // Find by risk level
  findByRiskLevel: (riskLevel: string): TbCreditTerm[] => {
    return mockTbCreditTerm.filter(term => 
      !term.deleted_at && 
      term.is_active &&
      term.info?.risk_level === riskLevel
    );
  },

  // Find all active credit terms
  findAllActive: (): TbCreditTerm[] => {
    return mockTbCreditTerm.filter(term => !term.deleted_at && term.is_active);
  },

  // Find all credit terms (including inactive)
  findAll: (): TbCreditTerm[] => {
    return mockTbCreditTerm.filter(term => !term.deleted_at);
  },

  // Find terms with early payment discounts
  findDiscountTerms: (): TbCreditTerm[] => {
    return mockTbCreditTerm.filter(term => 
      !term.deleted_at && 
      term.is_active &&
      term.info?.type === 'discount'
    );
  },

  // Find immediate payment terms
  findImmediateTerms: (): TbCreditTerm[] => {
    return mockTbCreditTerm.filter(term => 
      !term.deleted_at && 
      term.is_active &&
      (term.info?.type === 'immediate' || term.info?.type === 'prepaid')
    );
  },

  // Find terms by payment method
  findByPaymentMethod: (method: string): TbCreditTerm[] => {
    return mockTbCreditTerm.filter(term => 
      !term.deleted_at && 
      term.is_active &&
      term.info?.payment_method?.includes(method)
    );
  },

  // Search credit terms by name or description
  search: (query: string): TbCreditTerm[] => {
    const lowerQuery = query.toLowerCase();
    return mockTbCreditTerm.filter(term => 
      !term.deleted_at && 
      term.is_active &&
      (term.name.toLowerCase().includes(lowerQuery) || 
       term.description?.toLowerCase().includes(lowerQuery))
    );
  },

  // Update credit term
  update: (id: string, data: Partial<TbCreditTerm>, updated_by_id?: string): TbCreditTerm | null => {
    const index = mockTbCreditTerm.findIndex(term => term.id === id && !term.deleted_at);
    if (index === -1) return null;

    const currentVersion = mockTbCreditTerm[index].doc_version || 1;
    mockTbCreditTerm[index] = {
      ...mockTbCreditTerm[index],
      ...data,
      doc_version: currentVersion + 1,
      updated_at: getCurrentTimestamp(),
      updated_by_id: updated_by_id || null
    };
    return mockTbCreditTerm[index];
  },

  // Soft delete credit term
  delete: (id: string, deleted_by_id?: string): boolean => {
    const index = mockTbCreditTerm.findIndex(term => term.id === id && !term.deleted_at);
    if (index === -1) return false;

    mockTbCreditTerm[index].deleted_at = getCurrentTimestamp();
    mockTbCreditTerm[index].deleted_by_id = deleted_by_id || null;
    return true;
  },

  // Activate credit term
  activate: (id: string, updated_by_id?: string): TbCreditTerm | null => {
    return tbCreditTermCrud.update(id, { is_active: true }, updated_by_id);
  },

  // Deactivate credit term
  deactivate: (id: string, updated_by_id?: string): TbCreditTerm | null => {
    return tbCreditTermCrud.update(id, { is_active: false }, updated_by_id);
  },

  // Calculate due date
  calculateDueDate: (termId: string, invoiceDate: Date): Date | null => {
    const term = tbCreditTermCrud.findById(termId);
    if (!term || term.value === null || term.value === undefined) return null;

    const dueDate = new Date(invoiceDate);
    
    if (term.value === -1) {
      // Prepaid - due before delivery
      return new Date(invoiceDate.getTime() - 24 * 60 * 60 * 1000); // 1 day before
    } else if (term.value === 0) {
      // COD - due on delivery
      return dueDate;
    } else {
      // Add days to invoice date
      dueDate.setDate(dueDate.getDate() + term.value);
      return dueDate;
    }
  },

  // Calculate early payment due date and discount
  calculateEarlyPayment: (termId: string, invoiceDate: Date, amount: number): any => {
    const term = tbCreditTermCrud.findById(termId);
    if (!term || term.info?.type !== 'discount') return null;

    const discountDays = term.info.discount_days || 0;
    const discountRate = term.info.discount_rate || 0;
    
    const earlyDueDate = new Date(invoiceDate);
    earlyDueDate.setDate(earlyDueDate.getDate() + discountDays);
    
    const discountAmount = amount * (discountRate / 100);
    const discountedAmount = amount - discountAmount;

    return {
      early_due_date: earlyDueDate,
      discount_rate: discountRate,
      discount_amount: discountAmount,
      discounted_amount: discountedAmount,
      full_due_date: tbCreditTermCrud.calculateDueDate(termId, invoiceDate),
      full_amount: amount
    };
  },

  // Get terms suitable for vendor risk level
  getTermsForRiskLevel: (riskLevel: string): TbCreditTerm[] => {
    const riskHierarchy = ['none', 'low', 'medium', 'high', 'very_high'];
    const maxRiskIndex = riskHierarchy.indexOf(riskLevel);
    
    if (maxRiskIndex === -1) return [];

    return mockTbCreditTerm.filter(term => 
      !term.deleted_at && 
      term.is_active &&
      riskHierarchy.indexOf(term.info?.risk_level || 'high') <= maxRiskIndex
    );
  },

  // Get default credit term
  getDefault: (): TbCreditTerm | null => {
    // Return Net 30 Days as default, or first active term
    return tbCreditTermCrud.findByName("Net 30 Days") || 
           tbCreditTermCrud.findAllActive()[0] || 
           null;
  },

  // Get credit term statistics
  getStats: () => {
    const allTerms = mockTbCreditTerm.filter(term => !term.deleted_at);
    const activeTerms = allTerms.filter(term => term.is_active);
    const discountTerms = activeTerms.filter(term => term.info?.type === 'discount');
    const immediateTerms = activeTerms.filter(term => 
      term.info?.type === 'immediate' || term.info?.type === 'prepaid'
    );
    
    return {
      total: allTerms.length,
      active: activeTerms.length,
      inactive: allTerms.length - activeTerms.length,
      discountTerms: discountTerms.length,
      immediateTerms: immediateTerms.length,
      byType: activeTerms.reduce((acc, term) => {
        const type = term.info?.type || 'unknown';
        acc[type] = (acc[type] || 0) + 1;
        return acc;
      }, {} as Record<string, number>),
      byRiskLevel: activeTerms.reduce((acc, term) => {
        const risk = term.info?.risk_level || 'unknown';
        acc[risk] = (acc[risk] || 0) + 1;
        return acc;
      }, {} as Record<string, number>),
      averageDays: activeTerms.reduce((sum, term) => {
        return sum + (term.value || 0);
      }, 0) / activeTerms.length || 0
    };
  }
};
