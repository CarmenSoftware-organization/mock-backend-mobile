import { TbCluster } from './types';
import { generateUuid, getCurrentTimestamp } from './utils';

// =============== MOCK TB_CLUSTER DATA ===============
export let mockTbCluster: TbCluster[] = [
  {
    id: "cluster-001",
    code: "APAC",
    name: "Asia Pacific Region",
    is_active: true,
    info: {
      region: "Asia Pacific",
      timezone: "Asia/Bangkok",
      currency: "USD",
      headquarters: "Singapore",
      countries: ["Thailand", "Singapore", "Malaysia", "Indonesia", "Philippines", "Vietnam"]
    },
    created_at: "2023-01-01T00:00:00.000Z",
    created_by_id: "system",
    updated_at: "2023-01-01T00:00:00.000Z",
    updated_by_id: "system"
  },
  {
    id: "cluster-002", 
    code: "EMEA",
    name: "Europe, Middle East & Africa",
    is_active: true,
    info: {
      region: "EMEA",
      timezone: "Europe/London",
      currency: "EUR",
      headquarters: "London",
      countries: ["UK", "Germany", "France", "UAE", "South Africa"]
    },
    created_at: "2023-01-01T00:00:00.000Z",
    created_by_id: "system",
    updated_at: "2023-01-01T00:00:00.000Z",
    updated_by_id: "system"
  },
  {
    id: "cluster-003",
    code: "AMER",
    name: "Americas",
    is_active: true,
    info: {
      region: "Americas", 
      timezone: "America/New_York",
      currency: "USD",
      headquarters: "New York",
      countries: ["USA", "Canada", "Mexico", "Brazil", "Argentina"]
    },
    created_at: "2023-01-01T00:00:00.000Z",
    created_by_id: "system",
    updated_at: "2023-01-01T00:00:00.000Z",
    updated_by_id: "system"
  },
  {
    id: "cluster-004",
    code: "TH",
    name: "Thailand Local",
    is_active: true,
    info: {
      region: "Thailand",
      timezone: "Asia/Bangkok",
      currency: "THB",
      headquarters: "Bangkok",
      countries: ["Thailand"],
      local_settings: {
        language: "th",
        vat_rate: 7,
        business_hours: "08:00-17:00"
      }
    },
    created_at: "2023-06-01T00:00:00.000Z",
    created_by_id: "user-001",
    updated_at: "2023-06-01T00:00:00.000Z",
    updated_by_id: "user-001"
  },
  {
    id: "cluster-005",
    code: "DEV",
    name: "Development Environment",
    is_active: true,
    info: {
      region: "Development",
      timezone: "Asia/Bangkok",
      currency: "THB",
      headquarters: "Bangkok Office",
      countries: ["Thailand"],
      environment: "development",
      test_mode: true
    },
    created_at: getCurrentTimestamp(),
    created_by_id: "developer",
    updated_at: getCurrentTimestamp(),
    updated_by_id: "developer"
  }
];

// =============== TB_CLUSTER CRUD FUNCTIONS ===============
export const tbClusterCrud = {
  // Create new cluster
  create: (data: Omit<TbCluster, 'id' | 'created_at' | 'updated_at'>): TbCluster => {
    const newCluster: TbCluster = {
      id: generateUuid(),
      created_at: getCurrentTimestamp(),
      updated_at: getCurrentTimestamp(),
      is_active: true,
      ...data
    };
    mockTbCluster.push(newCluster);
    return newCluster;
  },

  // Find by ID
  findById: (id: string): TbCluster | null => {
    return mockTbCluster.find(cluster => cluster.id === id) || null;
  },

  // Find by code
  findByCode: (code: string): TbCluster | null => {
    return mockTbCluster.find(cluster => cluster.code === code) || null;
  },

  // Find by name
  findByName: (name: string): TbCluster | null => {
    return mockTbCluster.find(cluster => cluster.name === name) || null;
  },

  // Find all active clusters
  findActive: (): TbCluster[] => {
    return mockTbCluster
      .filter(cluster => cluster.is_active)
      .sort((a, b) => a.name.localeCompare(b.name));
  },

  // Find all clusters
  findAll: (): TbCluster[] => {
    return mockTbCluster.sort((a, b) => a.name.localeCompare(b.name));
  },

  // Search clusters
  search: (query: string): TbCluster[] => {
    const lowerQuery = query.toLowerCase();
    return mockTbCluster
      .filter(cluster => 
        cluster.code.toLowerCase().includes(lowerQuery) ||
        cluster.name.toLowerCase().includes(lowerQuery)
      )
      .sort((a, b) => a.name.localeCompare(b.name));
  },

  // Update cluster
  update: (id: string, data: Partial<TbCluster>, updated_by_id?: string): TbCluster | null => {
    const index = mockTbCluster.findIndex(cluster => cluster.id === id);
    if (index === -1) return null;

    mockTbCluster[index] = {
      ...mockTbCluster[index],
      ...data,
      updated_at: getCurrentTimestamp(),
      updated_by_id: updated_by_id || null
    };
    return mockTbCluster[index];
  },

  // Delete cluster (soft delete by deactivating)
  delete: (id: string, updated_by_id?: string): boolean => {
    return tbClusterCrud.update(id, { is_active: false }, updated_by_id) !== null;
  },

  // Activate cluster
  activate: (id: string, updated_by_id?: string): TbCluster | null => {
    return tbClusterCrud.update(id, { is_active: true }, updated_by_id);
  },

  // Deactivate cluster
  deactivate: (id: string, updated_by_id?: string): TbCluster | null => {
    return tbClusterCrud.update(id, { is_active: false }, updated_by_id);
  },

  // Get cluster statistics
  getStats: () => {
    const allClusters = mockTbCluster;
    const activeClusters = allClusters.filter(cluster => cluster.is_active);
    
    return {
      total: allClusters.length,
      active: activeClusters.length,
      inactive: allClusters.length - activeClusters.length,
      byRegion: activeClusters.reduce((acc, cluster) => {
        const region = cluster.info?.region || 'Unknown';
        acc[region] = (acc[region] || 0) + 1;
        return acc;
      }, {} as Record<string, number>),
      supportedCountries: Array.from(new Set(
        activeClusters.flatMap(cluster => cluster.info?.countries || [])
      )).length
    };
  }
};
