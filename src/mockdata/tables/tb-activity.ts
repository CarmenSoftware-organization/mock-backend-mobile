import { TbActivity } from './types';
import { generateUuid, getCurrentTimestamp } from './utils';
import { UUID_MAPPING } from './uuid-mapping';

// =============== MOCK TB_ACTIVITY DATA ===============
export let mockTbActivity: TbActivity[] = [
  {
    id: "act-001",
    action: "login",
    entity_type: "user",
    entity_id: UUID_MAPPING['user-001'],
    actor_id: UUID_MAPPING['user-001'],
    meta_data: {
      login_method: "email_password",
      device: "web_browser",
      browser: "Chrome 120.0"
    },
    old_data: null,
    new_data: {
      last_login: getCurrentTimestamp(),
      session_id: "sess-001"
    },
    ip_address: "192.168.1.100",
    user_agent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36",
    description: "User logged in successfully",
    created_at: getCurrentTimestamp(),
    created_by_id: UUID_MAPPING['user-001']
  },
  {
    id: "act-002",
    action: "create",
    entity_type: "product",
    entity_id: "prod-001",
    actor_id: UUID_MAPPING['user-001'],
    meta_data: {
      module: "inventory",
      form: "product_create"
    },
    old_data: null,
    new_data: {
      code: "ING-VEG-001",
      name: "Fresh Tomatoes",
      status: "active"
    },
    ip_address: "192.168.1.100",
    user_agent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36",
    description: "Created new product: Fresh Tomatoes",
    created_at: new Date(Date.now() - 60 * 60 * 1000).toISOString(),
    created_by_id: UUID_MAPPING['user-001']
  },
  {
    id: "act-003",
    action: "update",
    entity_type: "product",
    entity_id: "prod-001",
    actor_id: UUID_MAPPING['user-002'],
    meta_data: {
      module: "inventory",
      form: "product_edit",
      fields_changed: ["description", "note"]
    },
    old_data: {
      description: "Fresh red tomatoes",
      note: "Standard quality"
    },
    new_data: {
      description: "Fresh red tomatoes, Grade A",
      note: "Keep refrigerated"
    },
    ip_address: "192.168.1.101",
    user_agent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
    description: "Updated product description and storage note",
    created_at: new Date(Date.now() - 45 * 60 * 1000).toISOString(),
    created_by_id: UUID_MAPPING['user-002']
  },
  {
    id: "act-004",
    action: "create",
    entity_type: "purchase_request",
    entity_id: "pr-001",
    actor_id: UUID_MAPPING['user-003'],
    meta_data: {
      module: "procurement",
      form: "purchase_request_create",
      total_amount: 15000.00
    },
    old_data: null,
    new_data: {
      request_no: "PR-2024-001",
      status: "draft",
      total_amount: 15000.00,
      items_count: 5
    },
    ip_address: "192.168.1.102",
    user_agent: "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15",
    description: "Created purchase request PR-2024-001",
    created_at: new Date(Date.now() - 30 * 60 * 1000).toISOString(),
    created_by_id: UUID_MAPPING['user-003']
  },
  {
    id: "act-005",
    action: "approve",
    entity_type: "purchase_request",
    entity_id: "pr-001",
    actor_id: UUID_MAPPING['user-001'],
    meta_data: {
      module: "procurement",
      workflow_stage: "department_head_approval",
      approval_level: 1
    },
    old_data: {
      status: "pending_approval",
      approved_by: null
    },
    new_data: {
      status: "approved",
      approved_by: UUID_MAPPING['user-001'],
      approved_at: getCurrentTimestamp()
    },
    ip_address: "192.168.1.100",
    user_agent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36",
    description: "Approved purchase request PR-2024-001",
    created_at: new Date(Date.now() - 15 * 60 * 1000).toISOString(),
    created_by_id: UUID_MAPPING['user-001']
  },
  {
    id: "act-006",
    action: "view",
    entity_type: "menu",
    entity_id: "menu-006",
    actor_id: UUID_MAPPING['user-002'],
    meta_data: {
      module: "navigation",
      page_url: "/procurement/purchase-requests",
      view_duration: 45
    },
    old_data: null,
    new_data: null,
    ip_address: "192.168.1.101",
    user_agent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
    description: "Viewed Purchase Requests page",
    created_at: new Date(Date.now() - 10 * 60 * 1000).toISOString(),
    created_by_id: UUID_MAPPING['user-002']
  },
  {
    id: "act-007",
    action: "export",
    entity_type: "product",
    entity_id: null,
    actor_id: UUID_MAPPING['user-001'],
    meta_data: {
      module: "inventory",
      export_format: "excel",
      records_count: 156,
      filters: {
        category: "vegetables",
        status: "active"
      }
    },
    old_data: null,
    new_data: {
      file_name: "products_export_2024.xlsx",
      file_size: "24KB"
    },
    ip_address: "192.168.1.100",
    user_agent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36",
    description: "Exported 156 active vegetable products to Excel",
    created_at: new Date(Date.now() - 5 * 60 * 1000).toISOString(),
    created_by_id: UUID_MAPPING['user-001']
  },
  {
    id: "act-008",
    action: "delete",
    entity_type: "location",
    entity_id: "loc-999",
    actor_id: UUID_MAPPING['user-001'],
    meta_data: {
      module: "settings",
      form: "location_management",
      reason: "duplicate_entry"
    },
    old_data: {
      name: "Duplicate Storage",
      is_active: false
    },
    new_data: {
      deleted_at: getCurrentTimestamp(),
      deleted_by: UUID_MAPPING['user-001']
    },
    ip_address: "192.168.1.100",
    user_agent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36",
    description: "Deleted duplicate location entry",
    created_at: new Date(Date.now() - 2 * 60 * 1000).toISOString(),
    created_by_id: UUID_MAPPING['user-001']
  },
  {
    id: "act-009",
    action: "print",
    entity_type: "purchase_order",
    entity_id: "po-001",
    actor_id: UUID_MAPPING['user-002'],
    meta_data: {
      module: "procurement",
      document_type: "purchase_order",
      format: "pdf"
    },
    old_data: null,
    new_data: {
      printed_at: getCurrentTimestamp(),
      print_count: 1
    },
    ip_address: "192.168.1.101",
    user_agent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
    description: "Printed purchase order PO-001",
    created_at: new Date(Date.now() - 1 * 60 * 1000).toISOString(),
    created_by_id: UUID_MAPPING['user-002']
  },
  {
    id: "act-010",
    action: "logout",
    entity_type: "user",
    entity_id: UUID_MAPPING['user-003'],
    actor_id: UUID_MAPPING['user-003'],
    meta_data: {
      session_duration: 3600,
      logout_type: "manual"
    },
    old_data: {
      session_active: true
    },
    new_data: {
      session_active: false,
      logout_time: getCurrentTimestamp()
    },
    ip_address: "192.168.1.102",
    user_agent: "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15",
    description: "User logged out after 1 hour session",
    created_at: getCurrentTimestamp(),
    created_by_id: UUID_MAPPING['user-003']
  }
];

// =============== TB_ACTIVITY CRUD FUNCTIONS ===============
export const tbActivityCrud = {
  // Create new activity log
  create: (data: Omit<TbActivity, 'id' | 'created_at'>): TbActivity => {
    const newActivity: TbActivity = {
      id: generateUuid(),
      created_at: getCurrentTimestamp(),
      ...data
    };
    mockTbActivity.push(newActivity);
    return newActivity;
  },

  // Find by ID
  findById: (id: string): TbActivity | null => {
    return mockTbActivity.find(activity => activity.id === id) || null;
  },

  // Find by actor (user who performed the action)
  findByActor: (actorId: string): TbActivity[] => {
    return mockTbActivity
      .filter(activity => activity.actor_id === actorId)
      .sort((a, b) => new Date(b.created_at || '').getTime() - new Date(a.created_at || '').getTime());
  },

  // Find by entity type and ID
  findByEntity: (entityType: string, entityId?: string): TbActivity[] => {
    return mockTbActivity
      .filter(activity => 
        activity.entity_type === entityType &&
        (entityId ? activity.entity_id === entityId : true)
      )
      .sort((a, b) => new Date(b.created_at || '').getTime() - new Date(a.created_at || '').getTime());
  },

  // Find by action type
  findByAction: (action: string): TbActivity[] => {
    return mockTbActivity
      .filter(activity => activity.action === action)
      .sort((a, b) => new Date(b.created_at || '').getTime() - new Date(a.created_at || '').getTime());
  },

  // Find by date range
  findByDateRange: (startDate: string, endDate: string): TbActivity[] => {
    const start = new Date(startDate).getTime();
    const end = new Date(endDate).getTime();
    
    return mockTbActivity
      .filter(activity => {
        if (!activity.created_at) return false;
        const activityDate = new Date(activity.created_at).getTime();
        return activityDate >= start && activityDate <= end;
      })
      .sort((a, b) => new Date(b.created_at || '').getTime() - new Date(a.created_at || '').getTime());
  },

  // Find recent activities (last N activities)
  findRecent: (limit: number = 50): TbActivity[] => {
    return mockTbActivity
      .sort((a, b) => new Date(b.created_at || '').getTime() - new Date(a.created_at || '').getTime())
      .slice(0, limit);
  },

  // Find activities by IP address
  findByIpAddress: (ipAddress: string): TbActivity[] => {
    return mockTbActivity
      .filter(activity => activity.ip_address === ipAddress)
      .sort((a, b) => new Date(b.created_at || '').getTime() - new Date(a.created_at || '').getTime());
  },

  // Find login activities
  findLoginActivities: (): TbActivity[] => {
    return mockTbActivity
      .filter(activity => activity.action === 'login')
      .sort((a, b) => new Date(b.created_at || '').getTime() - new Date(a.created_at || '').getTime());
  },

  // Find user session activities (login/logout pairs)
  findUserSessions: (actorId: string): any[] => {
    const userActivities = tbActivityCrud.findByActor(actorId);
    const sessions: any[] = [];
    let currentSession: any = null;

    userActivities.reverse().forEach(activity => {
      if (activity.action === 'login') {
        currentSession = {
          login: activity,
          logout: null,
          duration: null,
          activities: []
        };
        sessions.push(currentSession);
      } else if (activity.action === 'logout' && currentSession) {
        currentSession.logout = activity;
        if (currentSession.login.created_at && activity.created_at) {
          const loginTime = new Date(currentSession.login.created_at).getTime();
          const logoutTime = new Date(activity.created_at).getTime();
          currentSession.duration = Math.round((logoutTime - loginTime) / 1000); // seconds
        }
      } else if (currentSession) {
        currentSession.activities.push(activity);
      }
    });

    return sessions.reverse();
  },

  // Find all activities
  findAll: (): TbActivity[] => {
    return mockTbActivity.sort((a, b) => 
      new Date(b.created_at || '').getTime() - new Date(a.created_at || '').getTime()
    );
  },

  // Search activities by description
  search: (query: string): TbActivity[] => {
    const lowerQuery = query.toLowerCase();
    return mockTbActivity
      .filter(activity => 
        activity.description?.toLowerCase().includes(lowerQuery)
      )
      .sort((a, b) => new Date(b.created_at || '').getTime() - new Date(a.created_at || '').getTime());
  },

  // Log user login
  logLogin: (userId: string, ipAddress: string, userAgent: string, metadata?: any): TbActivity => {
    return tbActivityCrud.create({
      action: 'login',
      entity_type: 'user',
      entity_id: userId,
      actor_id: userId,
      meta_data: {
        login_method: 'email_password',
        device: 'web_browser',
        ...metadata
      },
      old_data: null,
      new_data: {
        last_login: getCurrentTimestamp(),
        session_id: generateUuid()
      },
      ip_address: ipAddress,
      user_agent: userAgent,
      description: 'User logged in successfully',
      created_by_id: userId
    });
  },

  // Log user logout
  logLogout: (userId: string, ipAddress: string, userAgent: string, sessionDuration?: number): TbActivity => {
    return tbActivityCrud.create({
      action: 'logout',
      entity_type: 'user',
      entity_id: userId,
      actor_id: userId,
      meta_data: {
        session_duration: sessionDuration,
        logout_type: 'manual'
      },
      old_data: {
        session_active: true
      },
      new_data: {
        session_active: false,
        logout_time: getCurrentTimestamp()
      },
      ip_address: ipAddress,
      user_agent: userAgent,
      description: 'User logged out',
      created_by_id: userId
    });
  },

  // Log entity create
  logCreate: (
    entityType: string, 
    entityId: string, 
    actorId: string, 
    newData: any, 
    description: string,
    metadata?: any
  ): TbActivity => {
    return tbActivityCrud.create({
      action: 'create',
      entity_type: entityType as any,
      entity_id: entityId,
      actor_id: actorId,
      meta_data: metadata || {},
      old_data: null,
      new_data: newData,
      ip_address: '192.168.1.1',
      user_agent: 'System',
      description: description,
      created_by_id: actorId
    });
  },

  // Log entity update
  logUpdate: (
    entityType: string, 
    entityId: string, 
    actorId: string, 
    oldData: any, 
    newData: any, 
    description: string,
    metadata?: any
  ): TbActivity => {
    return tbActivityCrud.create({
      action: 'update',
      entity_type: entityType as any,
      entity_id: entityId,
      actor_id: actorId,
      meta_data: metadata || {},
      old_data: oldData,
      new_data: newData,
      ip_address: '192.168.1.1',
      user_agent: 'System',
      description: description,
      created_by_id: actorId
    });
  },

  // Log entity delete
  logDelete: (
    entityType: string, 
    entityId: string, 
    actorId: string, 
    oldData: any, 
    description: string,
    metadata?: any
  ): TbActivity => {
    return tbActivityCrud.create({
      action: 'delete',
      entity_type: entityType as any,
      entity_id: entityId,
      actor_id: actorId,
      meta_data: metadata || {},
      old_data: oldData,
      new_data: {
        deleted_at: getCurrentTimestamp(),
        deleted_by: actorId
      },
      ip_address: '192.168.1.1',
      user_agent: 'System',
      description: description,
      created_by_id: actorId
    });
  },

  // Log approval action
  logApprove: (
    entityType: string, 
    entityId: string, 
    actorId: string, 
    oldStatus: string, 
    newStatus: string,
    metadata?: any
  ): TbActivity => {
    return tbActivityCrud.create({
      action: 'approve',
      entity_type: entityType as any,
      entity_id: entityId,
      actor_id: actorId,
      meta_data: metadata || {},
      old_data: { status: oldStatus },
      new_data: { 
        status: newStatus,
        approved_by: actorId,
        approved_at: getCurrentTimestamp()
      },
      ip_address: '192.168.1.1',
      user_agent: 'System',
      description: `Approved ${entityType} ${entityId}`,
      created_by_id: actorId
    });
  },

  // Log rejection action
  logReject: (
    entityType: string, 
    entityId: string, 
    actorId: string, 
    oldStatus: string, 
    reason?: string,
    metadata?: any
  ): TbActivity => {
    return tbActivityCrud.create({
      action: 'reject',
      entity_type: entityType as any,
      entity_id: entityId,
      actor_id: actorId,
      meta_data: { reason, ...metadata },
      old_data: { status: oldStatus },
      new_data: { 
        status: 'rejected',
        rejected_by: actorId,
        rejected_at: getCurrentTimestamp(),
        rejection_reason: reason
      },
      ip_address: '192.168.1.1',
      user_agent: 'System',
      description: `Rejected ${entityType} ${entityId}${reason ? `: ${reason}` : ''}`,
      created_by_id: actorId
    });
  },

  // Get activity statistics
  getStats: () => {
    const allActivities = mockTbActivity;
    const last24h = tbActivityCrud.findByDateRange(
      new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
      getCurrentTimestamp()
    );
    const last7days = tbActivityCrud.findByDateRange(
      new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
      getCurrentTimestamp()
    );
    
    return {
      total: allActivities.length,
      last24h: last24h.length,
      last7days: last7days.length,
      byAction: allActivities.reduce((acc, activity) => {
        const action = activity.action || 'unknown';
        acc[action] = (acc[action] || 0) + 1;
        return acc;
      }, {} as Record<string, number>),
      byEntityType: allActivities.reduce((acc, activity) => {
        const entityType = activity.entity_type || 'unknown';
        acc[entityType] = (acc[entityType] || 0) + 1;
        return acc;
      }, {} as Record<string, number>),
      byActor: allActivities.reduce((acc, activity) => {
        const actor = activity.actor_id || 'unknown';
        acc[actor] = (acc[actor] || 0) + 1;
        return acc;
      }, {} as Record<string, number>),
      topUsers: Object.entries(
        allActivities.reduce((acc, activity) => {
          const actor = activity.actor_id || 'unknown';
          acc[actor] = (acc[actor] || 0) + 1;
          return acc;
        }, {} as Record<string, number>)
      )
        .sort(([, a], [, b]) => b - a)
        .slice(0, 5)
        .map(([userId, count]) => ({ userId, count }))
    };
  }
};
