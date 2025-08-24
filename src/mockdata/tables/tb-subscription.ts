import { TbSubscription } from './types';
import { generateUuid, getCurrentTimestamp } from './utils';
import { UUID_MAPPING } from './uuid-mapping';

// =============== MOCK TB_SUBSCRIPTION DATA ===============
export let mockTbSubscription: TbSubscription[] = [
  // Enterprise subscriptions
  {
    id: UUID_MAPPING['sub-001'],
    cluster_id: UUID_MAPPING['cluster-001'], // Carmen Software HQ
    name: "Enterprise Plus",
    description: "Full enterprise suite with unlimited users and modules",
    status: "active",
    start_date: "2023-01-01T00:00:00.000Z",
    end_date: "2024-12-31T23:59:59.999Z",
    is_active: true,
    created_at: "2023-01-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['system'],
    updated_at: "2023-01-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['system']
  },

  // Hotel chain subscription
  {
    id: UUID_MAPPING['sub-002'],
    cluster_id: UUID_MAPPING['cluster-002'], // Hotel Chain
    name: "Hospitality Pro",
    description: "Complete hotel management solution with PMS, POS, and reporting",
    status: "active",
    start_date: "2023-02-01T00:00:00.000Z",
    end_date: "2024-01-31T23:59:59.999Z",
    is_active: true,
    created_at: "2023-02-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['user-001'],
    updated_at: "2023-02-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['user-001']
  },

  // Restaurant chain subscription
  {
    id: UUID_MAPPING['sub-003'],
    cluster_id: UUID_MAPPING['cluster-003'], // Restaurant Chain
    name: "Restaurant Business",
    description: "Restaurant management with POS, inventory, and delivery integration",
    status: "active",
    start_date: "2023-03-01T00:00:00.000Z",
    end_date: "2024-02-29T23:59:59.999Z",
    is_active: true,
    created_at: "2023-03-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['user-001'],
    updated_at: "2023-03-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['user-001']
  },

  // Development subscription
  {
    id: UUID_MAPPING['sub-004'],
    cluster_id: UUID_MAPPING['cluster-004'], // Development
    name: "Developer Unlimited",
    description: "Development and testing environment with all modules",
    status: "active",
    start_date: getCurrentTimestamp(),
    end_date: null, // No expiration for dev
    is_active: true,
    created_at: getCurrentTimestamp(),
    created_by_id: UUID_MAPPING['system'],
    updated_at: getCurrentTimestamp(),
    updated_by_id: UUID_MAPPING['system']
  },

  // Trial subscriptions
  {
    id: UUID_MAPPING['sub-005'],
    cluster_id: UUID_MAPPING['cluster-002'], // Hotel Chain
    name: "Hotel Trial Extension",
    description: "Extended trial for additional hotel modules testing",
    status: "active",
    start_date: "2023-12-01T00:00:00.000Z",
    end_date: "2024-03-01T23:59:59.999Z",
    is_active: true,
    created_at: "2023-12-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['user-004'],
    updated_at: "2023-12-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['user-004']
  },

  // Expired subscription (for testing)
  {
    id: UUID_MAPPING['sub-006'],
    cluster_id: UUID_MAPPING['cluster-003'], // Restaurant Chain
    name: "Basic Plan",
    description: "Basic restaurant management features",
    status: "expired",
    start_date: "2022-03-01T00:00:00.000Z",
    end_date: "2023-02-28T23:59:59.999Z",
    is_active: false,
    created_at: "2022-03-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['user-001'],
    updated_at: "2023-03-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['system']
  },

  // Inactive subscription (cancelled)
  {
    id: UUID_MAPPING['sub-007'],
    cluster_id: UUID_MAPPING['cluster-001'], // Carmen Software HQ
    name: "Starter Plan",
    description: "Basic business management features",
    status: "inactive",
    start_date: "2022-06-01T00:00:00.000Z",
    end_date: "2023-05-31T23:59:59.999Z",
    is_active: false,
    created_at: "2022-06-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['user-001'],
    updated_at: "2023-06-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['user-001']
  },

  // Upcoming renewal
  {
    id: UUID_MAPPING['sub-008'],
    cluster_id: UUID_MAPPING['cluster-002'], // Hotel Chain
    name: "Hospitality Pro Renewal",
    description: "Renewed hospitality management subscription",
    status: "active",
    start_date: "2024-02-01T00:00:00.000Z",
    end_date: "2025-01-31T23:59:59.999Z",
    is_active: true,
    created_at: "2024-01-15T00:00:00.000Z",
    created_by_id: UUID_MAPPING['user-004'],
    updated_at: "2024-01-15T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['user-004']
  },

  // Additional cluster subscription
  {
    id: UUID_MAPPING['sub-009'],
    cluster_id: UUID_MAPPING['cluster-001'], // Carmen Software HQ
    name: "Add-on Modules",
    description: "Additional specialized modules for enterprise users",
    status: "active",
    start_date: "2023-06-01T00:00:00.000Z",
    end_date: "2024-05-31T23:59:59.999Z",
    is_active: true,
    created_at: "2023-06-01T00:00:00.000Z",
    created_by_id: UUID_MAPPING['user-001'],
    updated_at: "2023-06-01T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['user-001']
  },

  // Seasonal subscription
  {
    id: UUID_MAPPING['sub-010'],
    cluster_id: UUID_MAPPING['cluster-003'], // Restaurant Chain
    name: "Holiday Season Special",
    description: "Enhanced features for high-traffic holiday periods",
    status: "active",
    start_date: "2023-11-01T00:00:00.000Z",
    end_date: "2024-01-15T23:59:59.999Z",
    is_active: true,
    created_at: "2023-10-15T00:00:00.000Z",
    created_by_id: UUID_MAPPING['user-006'],
    updated_at: "2023-10-15T00:00:00.000Z",
    updated_by_id: UUID_MAPPING['user-006']
  }
];

// =============== TB_SUBSCRIPTION CRUD FUNCTIONS ===============
export const tbSubscriptionCrud = {
  // Create new subscription
  create: (data: Omit<TbSubscription, 'id' | 'created_at' | 'updated_at'>): TbSubscription => {
    const newSubscription: TbSubscription = {
      id: generateUuid(),
      status: 'active',
      is_active: true,
      created_at: getCurrentTimestamp(),
      updated_at: getCurrentTimestamp(),
      ...data
    };
    mockTbSubscription.push(newSubscription);
    return newSubscription;
  },

  // Find by ID
  findById: (id: string): TbSubscription | null => {
    return mockTbSubscription.find(sub => sub.id === id) || null;
  },

  // Find by cluster ID
  findByClusterId: (clusterId: string): TbSubscription[] => {
    return mockTbSubscription
      .filter(sub => sub.cluster_id === clusterId)
      .sort((a, b) => (b.created_at || '').localeCompare(a.created_at || ''));
  },

  // Find active by cluster ID
  findActiveByClusterId: (clusterId: string): TbSubscription[] => {
    const now = new Date().toISOString();
    return mockTbSubscription
      .filter(sub => 
        sub.cluster_id === clusterId && 
        sub.status === 'active' && 
        sub.is_active &&
        (!sub.end_date || sub.end_date > now)
      )
      .sort((a, b) => (b.created_at || '').localeCompare(a.created_at || ''));
  },

  // Find by status
  findByStatus: (status: 'active' | 'inactive' | 'expired'): TbSubscription[] => {
    return mockTbSubscription
      .filter(sub => sub.status === status)
      .sort((a, b) => (b.created_at || '').localeCompare(a.created_at || ''));
  },

  // Find all active subscriptions
  findActive: (): TbSubscription[] => {
    const now = new Date().toISOString();
    return mockTbSubscription
      .filter(sub => 
        sub.status === 'active' && 
        sub.is_active &&
        (!sub.end_date || sub.end_date > now)
      )
      .sort((a, b) => (b.created_at || '').localeCompare(a.created_at || ''));
  },

  // Find expiring soon
  findExpiringSoon: (daysAhead: number = 30): TbSubscription[] => {
    const now = new Date();
    const futureDate = new Date(now.getTime() + (daysAhead * 24 * 60 * 60 * 1000));
    const futureDateISO = futureDate.toISOString();
    const nowISO = now.toISOString();

    return mockTbSubscription
      .filter(sub => 
        sub.status === 'active' && 
        sub.is_active &&
        sub.end_date &&
        sub.end_date > nowISO &&
        sub.end_date <= futureDateISO
      )
      .sort((a, b) => (a.end_date || '').localeCompare(b.end_date || ''));
  },

  // Find expired subscriptions
  findExpired: (): TbSubscription[] => {
    const now = new Date().toISOString();
    return mockTbSubscription
      .filter(sub => 
        sub.end_date && 
        sub.end_date <= now
      )
      .sort((a, b) => (a.end_date || '').localeCompare(b.end_date || ''));
  },

  // Find all subscriptions
  findAll: (): TbSubscription[] => {
    return mockTbSubscription.sort((a, b) => 
      (b.created_at || '').localeCompare(a.created_at || '')
    );
  },

  // Update subscription
  update: (id: string, data: Partial<TbSubscription>, updated_by_id?: string): TbSubscription | null => {
    const index = mockTbSubscription.findIndex(sub => sub.id === id);
    if (index === -1) return null;

    mockTbSubscription[index] = {
      ...mockTbSubscription[index],
      ...data,
      updated_at: getCurrentTimestamp(),
      updated_by_id: updated_by_id || null
    };
    return mockTbSubscription[index];
  },

  // Delete subscription (hard delete)
  delete: (id: string): boolean => {
    const index = mockTbSubscription.findIndex(sub => sub.id === id);
    if (index === -1) return false;
    
    mockTbSubscription.splice(index, 1);
    return true;
  },

  // Activate subscription
  activate: (id: string, updated_by_id?: string): TbSubscription | null => {
    return tbSubscriptionCrud.update(id, { 
      status: 'active', 
      is_active: true 
    }, updated_by_id);
  },

  // Deactivate subscription
  deactivate: (id: string, updated_by_id?: string): TbSubscription | null => {
    return tbSubscriptionCrud.update(id, { 
      status: 'inactive', 
      is_active: false 
    }, updated_by_id);
  },

  // Extend subscription
  extendSubscription: (id: string, newEndDate: string, updated_by_id?: string): TbSubscription | null => {
    return tbSubscriptionCrud.update(id, { 
      end_date: newEndDate,
      status: 'active',
      is_active: true
    }, updated_by_id);
  },

  // Renew subscription
  renewSubscription: (id: string, duration: number, updated_by_id?: string): TbSubscription | null => {
    const subscription = tbSubscriptionCrud.findById(id);
    if (!subscription) return null;

    const currentEndDate = subscription.end_date ? new Date(subscription.end_date) : new Date();
    const newEndDate = new Date(currentEndDate.getTime() + (duration * 24 * 60 * 60 * 1000));

    return tbSubscriptionCrud.update(id, {
      end_date: newEndDate.toISOString(),
      status: 'active',
      is_active: true
    }, updated_by_id);
  },

  // Check if cluster has active subscription
  hasActiveSubscription: (clusterId: string): boolean => {
    const activeSubscriptions = tbSubscriptionCrud.findActiveByClusterId(clusterId);
    return activeSubscriptions.length > 0;
  },

  // Get cluster's current subscription
  getCurrentSubscription: (clusterId: string): TbSubscription | null => {
    const activeSubscriptions = tbSubscriptionCrud.findActiveByClusterId(clusterId);
    // Return the most recent active subscription
    return activeSubscriptions.length > 0 ? activeSubscriptions[0] : null;
  },

  // Check subscription validity
  isSubscriptionValid: (id: string): { valid: boolean; reason?: string; subscription?: TbSubscription } => {
    const subscription = tbSubscriptionCrud.findById(id);
    
    if (!subscription) {
      return { valid: false, reason: 'Subscription not found' };
    }

    if (!subscription.is_active) {
      return { valid: false, reason: 'Subscription is inactive', subscription };
    }

    if (subscription.status !== 'active') {
      return { valid: false, reason: `Subscription status is ${subscription.status}`, subscription };
    }

    if (subscription.end_date) {
      const now = new Date().toISOString();
      if (subscription.end_date <= now) {
        return { valid: false, reason: 'Subscription has expired', subscription };
      }
    }

    return { valid: true, subscription };
  },

  // Process subscription expiration
  processExpiredSubscriptions: (updated_by_id?: string): number => {
    const now = new Date().toISOString();
    let processedCount = 0;

    mockTbSubscription.forEach(subscription => {
      if (subscription.end_date && 
          subscription.end_date <= now && 
          subscription.status === 'active') {
        
        tbSubscriptionCrud.update(subscription.id, {
          status: 'expired',
          is_active: false
        }, updated_by_id);
        
        processedCount++;
      }
    });

    return processedCount;
  },

  // Get subscription statistics
  getStats: () => {
    const allSubscriptions = mockTbSubscription;
    const activeSubscriptions = tbSubscriptionCrud.findActive();
    const expiredSubscriptions = tbSubscriptionCrud.findExpired();
    const expiringSoon = tbSubscriptionCrud.findExpiringSoon();

    return {
      total: allSubscriptions.length,
      active: activeSubscriptions.length,
      expired: expiredSubscriptions.length,
      inactive: allSubscriptions.filter(s => s.status === 'inactive').length,
      expiringSoon: expiringSoon.length,
      byCluster: allSubscriptions.reduce((acc, sub) => {
        acc[sub.cluster_id] = (acc[sub.cluster_id] || 0) + 1;
        return acc;
      }, {} as Record<string, number>),
      byStatus: {
        active: allSubscriptions.filter(s => s.status === 'active').length,
        inactive: allSubscriptions.filter(s => s.status === 'inactive').length,
        expired: allSubscriptions.filter(s => s.status === 'expired').length
      },
      avgDuration: (() => {
        const subsWithDuration = allSubscriptions.filter(s => s.start_date && s.end_date);
        if (subsWithDuration.length === 0) return 0;
        
        const totalDays = subsWithDuration.reduce((acc, sub) => {
          const start = new Date(sub.start_date!);
          const end = new Date(sub.end_date!);
          const days = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
          return acc + days;
        }, 0);
        
        return Math.round(totalDays / subsWithDuration.length);
      })(),
      clustersWithActiveSubscriptions: new Set(activeSubscriptions.map(s => s.cluster_id)).size
    };
  }
};
