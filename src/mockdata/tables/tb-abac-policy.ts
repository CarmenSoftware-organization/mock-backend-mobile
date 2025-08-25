// =============== TB_ABAC_POLICY TABLE ===============

import { generateUuid, getCurrentTimestamp } from './utils';
import { UUID_MAPPING } from './uuid-mapping';

export interface TbAbacPolicy {
  id: string;
  policy_name: string;
  policy_type: 'purchase_request' | 'store_requisition' | 'inventory' | 'general';
  resource_type: string;
  conditions: {
    user_attributes?: Record<string, any>;
    resource_attributes?: Record<string, any>;
    context_attributes?: Record<string, any>;
  };
  effect: 'ALLOW' | 'DENY';
  priority: number;
  description?: string;
  is_active: boolean;
  created_at: string;
  created_by_id: string | null;
  updated_at: string;
  updated_by_id: string | null;
}

// Mock ABAC Policies for Hotel Procurement Operations
export let mockTbAbacPolicy: TbAbacPolicy[] = [
  // Purchase Request Policies
  {
    id: generateUuid(),
    policy_name: "kitchen_pr_approval",
    policy_type: "purchase_request",
    resource_type: "purchase_request",
    conditions: {
      user_attributes: {
        "department_ids": [UUID_MAPPING['dept-kitchen']],
        "authority_level": ["supervisor", "department_head"],
        "approval_limit": { "$gte": "resource.amount" }
      },
      resource_attributes: {
        "department_id": UUID_MAPPING['dept-kitchen'],
        "category": ["food", "kitchen_supplies", "kitchen_equipment"]
      }
    },
    effect: "ALLOW",
    priority: 100,
    description: "Allow kitchen supervisors and department heads to approve kitchen purchase requests within their limit",
    is_active: true,
    created_at: "2024-01-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['system'],
    updated_at: "2024-01-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['system']
  },
  {
    id: generateUuid(),
    policy_name: "housekeeping_pr_approval",
    policy_type: "purchase_request",
    resource_type: "purchase_request",
    conditions: {
      user_attributes: {
        "department_ids": [UUID_MAPPING['dept-housekeeping']],
        "authority_level": ["supervisor", "department_head"],
        "approval_limit": { "$gte": "resource.amount" }
      },
      resource_attributes: {
        "department_id": UUID_MAPPING['dept-housekeeping'],
        "category": ["cleaning_supplies", "linens", "toiletries", "housekeeping_equipment"]
      }
    },
    effect: "ALLOW",
    priority: 100,
    description: "Allow housekeeping supervisors to approve housekeeping purchase requests within their limit",
    is_active: true,
    created_at: "2024-01-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['system'],
    updated_at: "2024-01-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['system']
  },
  {
    id: generateUuid(),
    policy_name: "emergency_pr_override",
    policy_type: "purchase_request",
    resource_type: "purchase_request",
    conditions: {
      user_attributes: {
        "can_approve_emergency": true
      },
      resource_attributes: {
        "urgency": "emergency"
      },
      context_attributes: {
        "inventory_level": "critical"
      }
    },
    effect: "ALLOW",
    priority: 200,
    description: "Allow emergency purchase request approvals for authorized users when inventory is critical",
    is_active: true,
    created_at: "2024-01-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['system'],
    updated_at: "2024-01-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['system']
  },
  {
    id: generateUuid(),
    policy_name: "cross_department_pr_approval",
    policy_type: "purchase_request",
    resource_type: "purchase_request",
    conditions: {
      user_attributes: {
        "role_code": ["PURCHASING_MANAGER", "GENERAL_MANAGER", "FINANCIAL_CONTROLLER"]
      },
      resource_attributes: {
        "cross_department": true
      }
    },
    effect: "ALLOW",
    priority: 150,
    description: "Allow purchasing manager, GM, and financial controller to approve cross-department purchases",
    is_active: true,
    created_at: "2024-01-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['system'],
    updated_at: "2024-01-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['system']
  },

  // Store Requisition Policies
  {
    id: generateUuid(),
    policy_name: "department_sr_creation",
    policy_type: "store_requisition",
    resource_type: "store_requisition",
    conditions: {
      user_attributes: {
        "can_create_requisitions": true,
        "department_ids": "resource.department_id"
      },
      resource_attributes: {
        "requested_by_department": true
      }
    },
    effect: "ALLOW",
    priority: 100,
    description: "Allow staff to create store requisitions for their own department",
    is_active: true,
    created_at: "2024-01-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['system'],
    updated_at: "2024-01-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['system']
  },
  {
    id: generateUuid(),
    policy_name: "storekeeper_sr_approval",
    policy_type: "store_requisition",
    resource_type: "store_requisition",
    conditions: {
      user_attributes: {
        "role_code": ["STOREKEEPER", "STORE_CLERK"],
        "can_issue_items": true
      },
      resource_attributes: {
        "status": "approved_by_department"
      }
    },
    effect: "ALLOW",
    priority: 100,
    description: "Allow storekeeper to approve and issue items for department-approved requisitions",
    is_active: true,
    created_at: "2024-01-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['system'],
    updated_at: "2024-01-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['system']
  },
  {
    id: generateUuid(),
    policy_name: "emergency_sr_processing",
    policy_type: "store_requisition",
    resource_type: "store_requisition",
    conditions: {
      user_attributes: {
        "can_approve_emergency": true,
        "emergency_categories": "resource.category"
      },
      resource_attributes: {
        "urgency": "emergency"
      }
    },
    effect: "ALLOW",
    priority: 200,
    description: "Allow emergency store requisition processing for maintenance and critical supplies",
    is_active: true,
    created_at: "2024-01-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['system'],
    updated_at: "2024-01-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['system']
  },

  // Inventory Management Policies
  {
    id: generateUuid(),
    policy_name: "inventory_view_access",
    policy_type: "inventory",
    resource_type: "inventory_item",
    conditions: {
      user_attributes: {
        "authority_level": ["staff", "supervisor", "manager", "department_head", "executive"]
      }
    },
    effect: "ALLOW",
    priority: 50,
    description: "Allow all active staff to view inventory levels",
    is_active: true,
    created_at: "2024-01-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['system'],
    updated_at: "2024-01-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['system']
  },
  {
    id: generateUuid(),
    policy_name: "inventory_adjustment_control",
    policy_type: "inventory",
    resource_type: "inventory_adjustment",
    conditions: {
      user_attributes: {
        "role_code": ["STOREKEEPER", "STORE_CLERK", "PURCHASING_MANAGER"],
        "can_adjust_inventory": true
      },
      resource_attributes: {
        "adjustment_type": ["correction", "damage", "transfer"]
      }
    },
    effect: "ALLOW",
    priority: 100,
    description: "Allow authorized personnel to make inventory adjustments",
    is_active: true,
    created_at: "2024-01-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['system'],
    updated_at: "2024-01-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['system']
  },

  // Budget and Financial Control Policies
  {
    id: generateUuid(),
    policy_name: "budget_override_control",
    policy_type: "general",
    resource_type: "budget_override",
    conditions: {
      user_attributes: {
        "can_override_budget": true,
        "authority_level": ["executive"]
      },
      context_attributes: {
        "budget_status": "over_budget",
        "approval_required": true
      }
    },
    effect: "ALLOW",
    priority: 300,
    description: "Allow executives to override budget constraints when necessary",
    is_active: true,
    created_at: "2024-01-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['system'],
    updated_at: "2024-01-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['system']
  },
  {
    id: generateUuid(),
    policy_name: "high_value_approval_chain",
    policy_type: "purchase_request",
    resource_type: "purchase_request",
    conditions: {
      resource_attributes: {
        "amount": { "$gt": 100000 }
      },
      user_attributes: {
        "role_code": ["GENERAL_MANAGER", "FINANCIAL_CONTROLLER"]
      }
    },
    effect: "ALLOW",
    priority: 300,
    description: "Require GM or Financial Controller approval for purchases over $100,000",
    is_active: true,
    created_at: "2024-01-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['system'],
    updated_at: "2024-01-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['system']
  },

  // Time-based and Context Policies
  {
    id: generateUuid(),
    policy_name: "after_hours_emergency_only",
    policy_type: "general",
    resource_type: "after_hours_request",
    conditions: {
      context_attributes: {
        "time_of_request": "after_hours",
        "day_of_week": ["saturday", "sunday"]
      },
      resource_attributes: {
        "urgency": "emergency"
      }
    },
    effect: "ALLOW",
    priority: 150,
    description: "Only allow emergency requests outside business hours",
    is_active: true,
    created_at: "2024-01-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['system'],
    updated_at: "2024-01-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['system']
  }
];

// =============== TB_ABAC_POLICY CRUD FUNCTIONS ===============
export const tbAbacPolicyCrud = {
  // Create new ABAC policy
  create: (data: Omit<TbAbacPolicy, 'id' | 'created_at' | 'updated_at'>): TbAbacPolicy => {
    const newPolicy: TbAbacPolicy = {
      id: generateUuid(),
      created_at: getCurrentTimestamp(),
      updated_at: getCurrentTimestamp(),
      is_active: true,
      priority: 100,
      effect: 'ALLOW',
      ...data
    };
    mockTbAbacPolicy.push(newPolicy);
    return newPolicy;
  },

  // Find by ID
  findById: (id: string): TbAbacPolicy | null => {
    return mockTbAbacPolicy.find(policy => policy.id === id) || null;
  },

  // Find by policy type
  findByPolicyType: (policyType: TbAbacPolicy['policy_type']): TbAbacPolicy[] => {
    return mockTbAbacPolicy
      .filter(policy => policy.policy_type === policyType && policy.is_active)
      .sort((a, b) => b.priority - a.priority);
  },

  // Find by resource type
  findByResourceType: (resourceType: string): TbAbacPolicy[] => {
    return mockTbAbacPolicy
      .filter(policy => policy.resource_type === resourceType && policy.is_active)
      .sort((a, b) => b.priority - a.priority);
  },

  // Find all active policies
  findActive: (): TbAbacPolicy[] => {
    return mockTbAbacPolicy
      .filter(policy => policy.is_active)
      .sort((a, b) => b.priority - a.priority);
  },

  // Find all policies
  findAll: (): TbAbacPolicy[] => {
    return mockTbAbacPolicy.sort((a, b) => b.priority - a.priority);
  },

  // Evaluate policy for user and resource
  evaluatePolicy: (policyId: string, userAttributes: Record<string, any>, resourceAttributes: Record<string, any>, contextAttributes: Record<string, any> = {}): boolean => {
    const policy = tbAbacPolicyCrud.findById(policyId);
    if (!policy || !policy.is_active) return false;

    // Simple evaluation logic (in production, this would be more sophisticated)
    const { conditions } = policy;
    
    // Check user attribute conditions
    if (conditions.user_attributes) {
      for (const [key, value] of Object.entries(conditions.user_attributes)) {
        if (!userAttributes[key]) return false;
        
        if (Array.isArray(value)) {
          if (Array.isArray(userAttributes[key])) {
            if (!value.some(v => userAttributes[key].includes(v))) return false;
          } else {
            if (!value.includes(userAttributes[key])) return false;
          }
        } else if (typeof value === 'object' && value !== null) {
          // Handle operators like $gte, $gt, etc.
          if (value.$gte && userAttributes[key] < value.$gte) return false;
          if (value.$gt && userAttributes[key] <= value.$gt) return false;
        } else {
          if (userAttributes[key] !== value) return false;
        }
      }
    }

    // Check resource attribute conditions
    if (conditions.resource_attributes) {
      for (const [key, value] of Object.entries(conditions.resource_attributes)) {
        if (!resourceAttributes[key]) return false;
        
        if (Array.isArray(value)) {
          if (!value.includes(resourceAttributes[key])) return false;
        } else {
          if (resourceAttributes[key] !== value) return false;
        }
      }
    }

    // Check context attribute conditions
    if (conditions.context_attributes) {
      for (const [key, value] of Object.entries(conditions.context_attributes)) {
        if (!contextAttributes[key]) return false;
        
        if (Array.isArray(value)) {
          if (!value.includes(contextAttributes[key])) return false;
        } else {
          if (contextAttributes[key] !== value) return false;
        }
      }
    }

    return policy.effect === 'ALLOW';
  },

  // Evaluate multiple policies for access decision
  evaluateAccess: (
    resourceType: string,
    userAttributes: Record<string, any>,
    resourceAttributes: Record<string, any>,
    contextAttributes: Record<string, any> = {}
  ): { allowed: boolean; matchedPolicies: string[]; effect: 'ALLOW' | 'DENY' } => {
    const applicablePolicies = tbAbacPolicyCrud.findByResourceType(resourceType);
    const matchedPolicies: string[] = [];
    let finalEffect: 'ALLOW' | 'DENY' = 'DENY';

    for (const policy of applicablePolicies) {
      if (tbAbacPolicyCrud.evaluatePolicy(policy.id, userAttributes, resourceAttributes, contextAttributes)) {
        matchedPolicies.push(policy.policy_name);
        if (policy.effect === 'DENY') {
          finalEffect = 'DENY';
          break; // DENY takes precedence
        } else if (policy.effect === 'ALLOW') {
          finalEffect = 'ALLOW';
        }
      }
    }

    return {
      allowed: finalEffect === 'ALLOW',
      matchedPolicies,
      effect: finalEffect
    };
  },

  // Update policy
  update: (id: string, data: Partial<TbAbacPolicy>, updated_by_id?: string): TbAbacPolicy | null => {
    const index = mockTbAbacPolicy.findIndex(policy => policy.id === id);
    if (index === -1) return null;

    mockTbAbacPolicy[index] = {
      ...mockTbAbacPolicy[index],
      ...data,
      updated_at: getCurrentTimestamp(),
      updated_by_id: updated_by_id || null
    };
    return mockTbAbacPolicy[index];
  },

  // Delete policy (soft delete by deactivating)
  delete: (id: string, updated_by_id?: string): boolean => {
    return tbAbacPolicyCrud.update(id, { is_active: false }, updated_by_id) !== null;
  },

  // Activate policy
  activate: (id: string, updated_by_id?: string): TbAbacPolicy | null => {
    return tbAbacPolicyCrud.update(id, { is_active: true }, updated_by_id);
  },

  // Deactivate policy
  deactivate: (id: string, updated_by_id?: string): TbAbacPolicy | null => {
    return tbAbacPolicyCrud.update(id, { is_active: false }, updated_by_id);
  },

  // Get policy statistics
  getStats: () => {
    const allPolicies = mockTbAbacPolicy;
    const activePolicies = allPolicies.filter(policy => policy.is_active);
    
    return {
      total: allPolicies.length,
      active: activePolicies.length,
      inactive: allPolicies.length - activePolicies.length,
      byType: activePolicies.reduce((acc, policy) => {
        acc[policy.policy_type] = (acc[policy.policy_type] || 0) + 1;
        return acc;
      }, {} as Record<string, number>),
      byEffect: activePolicies.reduce((acc, policy) => {
        acc[policy.effect] = (acc[policy.effect] || 0) + 1;
        return acc;
      }, {} as Record<string, number>),
      byPriority: {
        high: activePolicies.filter(p => p.priority >= 200).length,
        medium: activePolicies.filter(p => p.priority >= 100 && p.priority < 200).length,
        low: activePolicies.filter(p => p.priority < 100).length
      }
    };
  }
};