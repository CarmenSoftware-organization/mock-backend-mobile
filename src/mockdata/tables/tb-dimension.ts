import { TbDimension } from './types';
import { generateUuid, getCurrentTimestamp } from './utils';
import { UUID_MAPPING } from './uuid-mapping';

// =============== MOCK TB_DIMENSION DATA ===============
export let mockTbDimension: TbDimension[] = [
  {
    id: "dim-001",
    key: "cost_center",
    type: "string",
    value: ["Kitchen", "Bar", "Administration", "Maintenance"],
    description: "Cost center classification for expense tracking",
    note: "Used in financial reporting",
    default_value: "Kitchen",
    is_active: true,
    info: {
      category: "Financial",
      required: true,
      validation_rules: ["required", "string_length:1-50"]
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
    id: "dim-002",
    key: "priority_level",
    type: "number",
    value: [1, 2, 3, 4, 5],
    description: "Priority level for tasks and requests",
    note: "1=Urgent, 2=High, 3=Normal, 4=Low, 5=Later",
    default_value: 3,
    is_active: true,
    info: {
      category: "Workflow",
      required: false,
      validation_rules: ["numeric", "range:1-5"]
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
    id: "dim-003",
    key: "allergen_info",
    type: "json",
    value: {
      allergens: ["Nuts", "Dairy", "Gluten", "Seafood", "Eggs", "Soy"],
      severity_levels: ["Mild", "Moderate", "Severe"],
      warning_required: true
    },
    description: "Allergen information for food items",
    note: "Critical for food safety compliance",
    default_value: { allergens: [], severity_levels: "Mild", warning_required: false },
    is_active: true,
    info: {
      category: "Food Safety",
      required: true,
      validation_rules: ["json_schema", "allergen_validation"]
    },
    doc_version: 2,
    created_at: getCurrentTimestamp(),
    created_by_id: UUID_MAPPING['system'],
    updated_at: getCurrentTimestamp(),
    updated_by_id: UUID_MAPPING['system'],
    deleted_at: null,
    deleted_by_id: null
  },
  {
    id: "dim-004",
    key: "storage_condition",
    type: "lookup",
    value: [
      { id: "frozen", name: "Frozen (-18°C)", description: "Frozen storage" },
      { id: "chilled", name: "Chilled (0-4°C)", description: "Refrigerated storage" },
      { id: "cool_dry", name: "Cool & Dry (15-20°C)", description: "Cool dry storage" },
      { id: "ambient", name: "Ambient (18-25°C)", description: "Room temperature" }
    ],
    description: "Storage condition requirements for products",
    note: "Temperature and humidity requirements",
    default_value: { id: "ambient", name: "Ambient (18-25°C)" },
    is_active: true,
    info: {
      category: "Storage",
      required: true,
      validation_rules: ["lookup_validation", "storage_temp_check"]
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
    id: "dim-005",
    key: "approval_required",
    type: "boolean",
    value: [true, false],
    description: "Whether approval is required for this action",
    note: "Used in workflow decisions",
    default_value: false,
    is_active: true,
    info: {
      category: "Workflow",
      required: false,
      validation_rules: ["boolean"]
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
    id: "dim-006",
    key: "expiry_notification",
    type: "dataset",
    value: [
      { days_before: 1, notification_type: "urgent", recipients: ["inventory_manager"] },
      { days_before: 3, notification_type: "warning", recipients: ["inventory_clerk"] },
      { days_before: 7, notification_type: "reminder", recipients: ["chef", "inventory_clerk"] }
    ],
    description: "Notification settings for product expiry",
    note: "Automated notification system configuration",
    default_value: { days_before: 3, notification_type: "warning", recipients: ["inventory_clerk"] },
    is_active: true,
    info: {
      category: "Notifications",
      required: false,
      validation_rules: ["dataset_schema", "notification_validation"]
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
    id: "dim-007",
    key: "quality_grade",
    type: "lookup_dataset",
    value: [
      { grade: "A", score_range: "90-100", description: "Premium quality", price_multiplier: 1.2 },
      { grade: "B", score_range: "80-89", description: "Standard quality", price_multiplier: 1.0 },
      { grade: "C", score_range: "70-79", description: "Basic quality", price_multiplier: 0.8 },
      { grade: "D", score_range: "60-69", description: "Below standard", price_multiplier: 0.6 }
    ],
    description: "Quality grading system for products",
    note: "Affects pricing and usage recommendations",
    default_value: { grade: "B", score_range: "80-89", description: "Standard quality" },
    is_active: true,
    info: {
      category: "Quality Control",
      required: false,
      validation_rules: ["lookup_dataset_schema", "quality_validation"]
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
    id: "dim-008",
    key: "delivery_schedule",
    type: "datetime",
    value: null,
    description: "Preferred delivery schedule timing",
    note: "Used for vendor coordination",
    default_value: null,
    is_active: true,
    info: {
      category: "Logistics",
      required: false,
      validation_rules: ["datetime", "business_hours_check"]
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
    id: "dim-009",
    key: "seasonal_availability",
    type: "date",
    value: {
      start_date: "2024-01-01",
      end_date: "2024-12-31",
      seasonal_periods: [
        { name: "Spring", start: "03-01", end: "05-31" },
        { name: "Summer", start: "06-01", end: "08-31" },
        { name: "Autumn", start: "09-01", end: "11-30" },
        { name: "Winter", start: "12-01", end: "02-28" }
      ]
    },
    description: "Seasonal availability patterns for products",
    note: "Helps with menu planning and procurement",
    default_value: null,
    is_active: true,
    info: {
      category: "Planning",
      required: false,
      validation_rules: ["date_range", "seasonal_validation"]
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
    id: "dim-010",
    key: "compliance_tags",
    type: "string",
    value: ["HACCP", "Halal", "Organic", "Fair Trade", "Local Source", "Sustainable"],
    description: "Compliance and certification tags",
    note: "Regulatory and marketing requirements",
    default_value: null,
    is_active: true,
    info: {
      category: "Compliance",
      required: false,
      validation_rules: ["string_array", "compliance_check"]
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

// =============== TB_DIMENSION CRUD FUNCTIONS ===============
export const tbDimensionCrud = {
  // Create new dimension
  create: (data: Omit<TbDimension, 'id' | 'created_at' | 'updated_at'>): TbDimension => {
    const newDimension: TbDimension = {
      id: generateUuid(),
      created_at: getCurrentTimestamp(),
      updated_at: getCurrentTimestamp(),
      doc_version: 1,
      ...data
    };
    mockTbDimension.push(newDimension);
    return newDimension;
  },

  // Find by ID
  findById: (id: string): TbDimension | null => {
    return mockTbDimension.find(dimension => dimension.id === id && !dimension.deleted_at) || null;
  },

  // Find by key
  findByKey: (key: string): TbDimension | null => {
    return mockTbDimension.find(dimension => dimension.key === key && !dimension.deleted_at) || null;
  },

  // Find by type
  findByType: (type: string): TbDimension[] => {
    return mockTbDimension.filter(dimension => 
      !dimension.deleted_at && 
      dimension.is_active &&
      dimension.type === type
    );
  },

  // Find all active dimensions
  findAllActive: (): TbDimension[] => {
    return mockTbDimension.filter(dimension => !dimension.deleted_at && dimension.is_active);
  },

  // Find all dimensions (including inactive)
  findAll: (): TbDimension[] => {
    return mockTbDimension.filter(dimension => !dimension.deleted_at);
  },

  // Search dimensions by key or description
  search: (query: string): TbDimension[] => {
    const lowerQuery = query.toLowerCase();
    return mockTbDimension.filter(dimension => 
      !dimension.deleted_at && 
      dimension.is_active &&
      (dimension.key.toLowerCase().includes(lowerQuery) || 
       dimension.description?.toLowerCase().includes(lowerQuery))
    );
  },

  // Find by category
  findByCategory: (category: string): TbDimension[] => {
    return mockTbDimension.filter(dimension => 
      !dimension.deleted_at && 
      dimension.is_active &&
      dimension.info?.category?.toLowerCase() === category.toLowerCase()
    );
  },

  // Find required dimensions
  findRequired: (): TbDimension[] => {
    return mockTbDimension.filter(dimension => 
      !dimension.deleted_at && 
      dimension.is_active &&
      dimension.info?.required === true
    );
  },

  // Get dimension value by key
  getValue: (key: string): any => {
    const dimension = tbDimensionCrud.findByKey(key);
    return dimension?.value || null;
  },

  // Get dimension default value by key
  getDefaultValue: (key: string): any => {
    const dimension = tbDimensionCrud.findByKey(key);
    return dimension?.default_value || null;
  },

  // Update dimension
  update: (id: string, data: Partial<TbDimension>, updated_by_id?: string): TbDimension | null => {
    const index = mockTbDimension.findIndex(dimension => dimension.id === id && !dimension.deleted_at);
    if (index === -1) return null;

    const currentVersion = mockTbDimension[index].doc_version || 0;
    mockTbDimension[index] = {
      ...mockTbDimension[index],
      ...data,
      doc_version: currentVersion + 1,
      updated_at: getCurrentTimestamp(),
      updated_by_id: updated_by_id || null
    };
    return mockTbDimension[index];
  },

  // Soft delete dimension
  delete: (id: string, deleted_by_id?: string): boolean => {
    const index = mockTbDimension.findIndex(dimension => dimension.id === id && !dimension.deleted_at);
    if (index === -1) return false;

    mockTbDimension[index].deleted_at = getCurrentTimestamp();
    mockTbDimension[index].deleted_by_id = deleted_by_id || null;
    return true;
  },

  // Activate dimension
  activate: (id: string, updated_by_id?: string): TbDimension | null => {
    return tbDimensionCrud.update(id, { is_active: true }, updated_by_id);
  },

  // Deactivate dimension
  deactivate: (id: string, updated_by_id?: string): TbDimension | null => {
    return tbDimensionCrud.update(id, { is_active: false }, updated_by_id);
  },

  // Update dimension value
  updateValue: (key: string, newValue: any, updated_by_id?: string): TbDimension | null => {
    const dimension = tbDimensionCrud.findByKey(key);
    if (!dimension) return null;

    return tbDimensionCrud.update(dimension.id, { value: newValue }, updated_by_id);
  },

  // Update dimension default value
  updateDefaultValue: (key: string, newDefaultValue: any, updated_by_id?: string): TbDimension | null => {
    const dimension = tbDimensionCrud.findByKey(key);
    if (!dimension) return null;

    return tbDimensionCrud.update(dimension.id, { default_value: newDefaultValue }, updated_by_id);
  },

  // Validate value against dimension rules
  validateValue: (key: string, value: any): { valid: boolean; errors: string[] } => {
    const dimension = tbDimensionCrud.findByKey(key);
    if (!dimension) {
      return { valid: false, errors: ['Dimension not found'] };
    }

    const errors: string[] = [];
    const rules = dimension.info?.validation_rules || [];

    // Basic type validation
    switch (dimension.type) {
      case 'string':
        if (typeof value !== 'string') {
          errors.push('Value must be a string');
        }
        break;
      case 'number':
        if (typeof value !== 'number') {
          errors.push('Value must be a number');
        }
        break;
      case 'boolean':
        if (typeof value !== 'boolean') {
          errors.push('Value must be a boolean');
        }
        break;
      case 'date':
      case 'datetime':
        if (value && !Date.parse(value)) {
          errors.push('Value must be a valid date');
        }
        break;
      case 'json':
        try {
          if (typeof value === 'string') {
            JSON.parse(value);
          }
        } catch {
          errors.push('Value must be valid JSON');
        }
        break;
    }

    // Custom validation rules
    if (rules.includes('required') && (!value || value === '')) {
      errors.push('Value is required');
    }

    return {
      valid: errors.length === 0,
      errors
    };
  },

  // Get dimension schema for forms
  getSchema: (key: string): any => {
    const dimension = tbDimensionCrud.findByKey(key);
    if (!dimension) return null;

    return {
      key: dimension.key,
      type: dimension.type,
      description: dimension.description,
      required: dimension.info?.required || false,
      default_value: dimension.default_value,
      options: dimension.value,
      validation_rules: dimension.info?.validation_rules || []
    };
  },

  // Get all schemas grouped by category
  getAllSchemas: (): Record<string, any[]> => {
    const activeDimensions = tbDimensionCrud.findAllActive();
    return activeDimensions.reduce((acc, dimension) => {
      const category = dimension.info?.category || 'Other';
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(tbDimensionCrud.getSchema(dimension.key));
      return acc;
    }, {} as Record<string, any[]>);
  },

  // Get dimension statistics
  getStats: () => {
    const allDimensions = mockTbDimension.filter(dimension => !dimension.deleted_at);
    const activeDimensions = allDimensions.filter(dimension => dimension.is_active);
    const requiredDimensions = activeDimensions.filter(dimension => dimension.info?.required);
    
    return {
      total: allDimensions.length,
      active: activeDimensions.length,
      inactive: allDimensions.length - activeDimensions.length,
      required: requiredDimensions.length,
      optional: activeDimensions.length - requiredDimensions.length,
      byType: activeDimensions.reduce((acc, dimension) => {
        acc[dimension.type || 'unknown'] = (acc[dimension.type || 'unknown'] || 0) + 1;
        return acc;
      }, {} as Record<string, number>),
      byCategory: activeDimensions.reduce((acc, dimension) => {
        const category = dimension.info?.category || 'Other';
        acc[category] = (acc[category] || 0) + 1;
        return acc;
      }, {} as Record<string, number>)
    };
  }
};
