import { generateId, getCurrentTimestamp } from "@/libs/utils";
import { getUuidByName } from "./mapping.uuid";

export interface Cluster {
  id: string;
  code: string;
  name: string;
  is_active: boolean;
  info: any | null;
  created_at: string;
  created_by_id: string;
  updated_at: string;
  updated_by_id: string | null;
  alias_name: string | null;
  logo_url: string | null;
}

export const clusters: Cluster[] = [
  {
    id: getUuidByName("CLUSTER_01"),
    code: "CARMEN",
    name: "Carmen Cluster",
    is_active: true,
    info: null,
    created_at: "2025-07-29T01:37:28.992Z",
    created_by_id: getUuidByName("USER_ADMIN"),
    updated_at: "2025-07-29T01:37:28.992Z",
    updated_by_id: getUuidByName("USER_ADMIN"),
    alias_name: null,
    logo_url: null,
  },
  {
    id: getUuidByName("CLUSTER_02"),
    code: "REGIONAL",
    name: "Regional Operations",
    is_active: true,
    info: {
      description: "Regional business operations cluster",
      region_count: 4,
      headquarters: "Bangkok",
      coverage: ["North", "South", "East", "West"]
    },
    created_at: "2025-07-29T02:00:00.000Z",
    created_by_id: getUuidByName("USER_ADMIN"),
    updated_at: "2025-07-29T02:00:00.000Z",
    updated_by_id: getUuidByName("USER_ADMIN"),
    alias_name: "REG",
    logo_url: "https://images.carmen.com/logos/regional-cluster.png",
  },
  {
    id: getUuidByName("CLUSTER_03"),
    code: "CENTRAL",
    name: "Central Thailand Cluster",
    is_active: true,
    info: {
      description: "Central region cluster covering Bangkok metropolitan area",
      provinces: ["Bangkok", "Nonthaburi", "Pathum Thani", "Samut Prakan"],
      business_units: 2,
      established: "2023-01-15"
    },
    created_at: "2025-07-29T02:05:00.000Z",
    created_by_id: getUuidByName("USER_ADMIN"),
    updated_at: "2025-07-29T02:05:00.000Z",
    updated_by_id: getUuidByName("USER_ADMIN"),
    alias_name: "CTR",
    logo_url: "https://images.carmen.com/logos/central-cluster.png",
  },
  {
    id: getUuidByName("CLUSTER_04"),
    code: "LOGISTICS",
    name: "Logistics & Distribution",
    is_active: true,
    info: {
      description: "Logistics and distribution operations cluster",
      warehouses: 12,
      distribution_centers: 5,
      coverage_area: "Nationwide",
      fleet_size: 150
    },
    created_at: "2025-07-29T02:10:00.000Z",
    created_by_id: getUuidByName("USER_ADMIN"),
    updated_at: "2025-07-29T02:10:00.000Z",
    updated_by_id: getUuidByName("USER_ADMIN"),
    alias_name: "LOG",
    logo_url: "https://images.carmen.com/logos/logistics-cluster.png",
  },
  {
    id: getUuidByName("CLUSTER_05"),
    code: "TRAINING",
    name: "Training & Development",
    is_active: false,
    info: {
      description: "Employee training and development cluster",
      training_centers: 3,
      capacity: 500,
      programs: ["Leadership", "Technical", "Compliance"],
      status: "under_renovation"
    },
    created_at: "2025-07-29T02:15:00.000Z",
    created_by_id: getUuidByName("USER_ADMIN"),
    updated_at: "2025-07-29T03:30:00.000Z",
    updated_by_id: getUuidByName("USER_ADMIN"),
    alias_name: "TRN",
    logo_url: null,
  },
  {
    id: getUuidByName("CLUSTER_06"),
    code: "RETAIL",
    name: "Retail Operations",
    is_active: true,
    info: {
      description: "Retail stores and customer service operations",
      store_count: 85,
      mall_locations: 45,
      standalone_stores: 40,
      online_integration: true
    },
    created_at: "2025-07-29T02:20:00.000Z",
    created_by_id: getUuidByName("USER_ADMIN"),
    updated_at: "2025-07-29T02:20:00.000Z",
    updated_by_id: getUuidByName("USER_ADMIN"),
    alias_name: "RTL",
    logo_url: "https://images.carmen.com/logos/retail-cluster.png",
  },
  {
    id: getUuidByName("CLUSTER_07"),
    code: "MANUFACTURING",
    name: "Manufacturing & Production",
    is_active: true,
    info: {
      description: "Manufacturing plants and production facilities",
      factories: 8,
      production_lines: 24,
      quality_certifications: ["ISO 9001", "ISO 14001"],
      capacity: "10000 units/month"
    },
    created_at: "2025-07-29T02:25:00.000Z",
    created_by_id: getUuidByName("USER_ADMIN"),
    updated_at: "2025-07-29T02:25:00.000Z",
    updated_by_id: getUuidByName("USER_ADMIN"),
    alias_name: "MFG",
    logo_url: "https://images.carmen.com/logos/manufacturing-cluster.png",
  },
  {
    id: getUuidByName("CLUSTER_08"),
    code: "TECHNOLOGY",
    name: "Technology & Innovation",
    is_active: true,
    info: {
      description: "IT infrastructure and technology development cluster",
      data_centers: 3,
      development_teams: 12,
      cloud_adoption: 85,
      innovation_labs: 2
    },
    created_at: "2025-07-29T02:30:00.000Z",
    created_by_id: getUuidByName("USER_ADMIN"),
    updated_at: "2025-07-29T02:30:00.000Z",
    updated_by_id: getUuidByName("USER_ADMIN"),
    alias_name: "TECH",
    logo_url: "https://images.carmen.com/logos/technology-cluster.png",
  },
  {
    id: getUuidByName("CLUSTER_09"),
    code: "FINANCE",
    name: "Finance & Accounting",
    is_active: true,
    info: {
      description: "Financial operations and accounting services cluster",
      accounting_centers: 5,
      audit_compliance: "Big4 Certified",
      currency_support: ["THB", "USD", "EUR"],
      financial_systems: ["SAP", "Oracle"]
    },
    created_at: "2025-07-29T02:35:00.000Z",
    created_by_id: getUuidByName("USER_ADMIN"),
    updated_at: "2025-07-29T02:35:00.000Z",
    updated_by_id: getUuidByName("USER_ADMIN"),
    alias_name: "FIN",
    logo_url: "https://images.carmen.com/logos/finance-cluster.png",
  },
  {
    id: getUuidByName("CLUSTER_10"),
    code: "INTERNATIONAL",
    name: "International Operations",
    is_active: true,
    info: {
      description: "International business operations and expansion",
      countries: ["Singapore", "Malaysia", "Vietnam", "Philippines"],
      offices: 8,
      joint_ventures: 3,
      export_revenue_percentage: 25
    },
    created_at: "2025-07-29T02:40:00.000Z",
    created_by_id: getUuidByName("USER_ADMIN"),
    updated_at: "2025-07-29T02:40:00.000Z",
    updated_by_id: getUuidByName("USER_ADMIN"),
    alias_name: "INTL",
    logo_url: "https://images.carmen.com/logos/international-cluster.png",
  },
  {
    id: getUuidByName("CLUSTER_15"),
    code: "RESEARCH",
    name: "Research & Development",
    is_active: true,
    info: {
      description: "Product research and development cluster",
      research_facilities: 4,
      patent_portfolio: 45,
      r_and_d_budget: "15% of revenue",
      partnerships: ["Universities", "Research Institutes"]
    },
    created_at: "2025-07-29T02:45:00.000Z",
    created_by_id: getUuidByName("USER_ADMIN"),
    updated_at: "2025-07-29T02:45:00.000Z",
    updated_by_id: getUuidByName("USER_ADMIN"),
    alias_name: "R&D",
    logo_url: "https://images.carmen.com/logos/research-cluster.png",
  },
  {
    id: getUuidByName("CLUSTER_18"),
    code: "SUSTAINABILITY",
    name: "Sustainability & ESG",
    is_active: true,
    info: {
      description: "Environmental, social, and governance initiatives cluster",
      green_projects: 12,
      carbon_reduction_target: "50% by 2030",
      renewable_energy: "40% of total consumption",
      community_programs: 15
    },
    created_at: "2025-07-29T02:50:00.000Z",
    created_by_id: getUuidByName("USER_ADMIN"),
    updated_at: "2025-07-29T02:50:00.000Z",
    updated_by_id: getUuidByName("USER_ADMIN"),
    alias_name: "ESG",
    logo_url: "https://images.carmen.com/logos/sustainability-cluster.png",
  },
];

// CREATE - สร้าง Cluster ใหม่
export const createCluster = (
  clusterData: Omit<Cluster, "id" | "created_at" | "updated_at">
): Cluster => {
  const newCluster: Cluster = {
    ...clusterData,
    id: generateId(),
    created_at: getCurrentTimestamp(),
    updated_at: getCurrentTimestamp(),
  };

  clusters.push(newCluster);
  return newCluster;
};

// READ - อ่าน Cluster ทั้งหมด
export const getAllClusters = (): Cluster[] => {
  return [...clusters];
};

// READ - อ่าน Cluster ตาม ID
export const getClusterById = (id: string): Cluster | undefined => {
  return clusters.find((cluster) => cluster.id === id);
};

// READ - อ่าน Cluster ตาม code
export const getClusterByCode = (code: string): Cluster | undefined => {
  return clusters.find((cluster) => cluster.code === code);
};

// READ - อ่าน Cluster ตาม name
export const getClusterByName = (name: string): Cluster[] => {
  return clusters.filter((cluster) =>
    cluster.name.toLowerCase().includes(name.toLowerCase())
  );
};

// READ - อ่าน Cluster ที่ active
export const getActiveClusters = (): Cluster[] => {
  return clusters.filter((cluster) => cluster.is_active);
};

// READ - อ่าน Cluster ที่ inactive
export const getInactiveClusters = (): Cluster[] => {
  return clusters.filter((cluster) => !cluster.is_active);
};

// READ - อ่าน Cluster ที่มี alias_name
export const getClustersWithAlias = (): Cluster[] => {
  return clusters.filter((cluster) => cluster.alias_name !== null);
};

// READ - อ่าน Cluster ที่ไม่มี alias_name
export const getClustersWithoutAlias = (): Cluster[] => {
  return clusters.filter((cluster) => cluster.alias_name === null);
};

// READ - อ่าน Cluster ที่มี logo_url
export const getClustersWithLogo = (): Cluster[] => {
  return clusters.filter((cluster) => cluster.logo_url !== null);
};

// READ - อ่าน Cluster ที่ไม่มี logo_url
export const getClustersWithoutLogo = (): Cluster[] => {
  return clusters.filter((cluster) => cluster.logo_url === null);
};

// UPDATE - อัปเดต Cluster
export const updateCluster = (
  id: string,
  updateData: Partial<Omit<Cluster, "id" | "created_at" | "created_by_id">>
): Cluster | null => {
  const index = clusters.findIndex((cluster) => cluster.id === id);

  if (index === -1) {
    return null;
  }

  clusters[index] = {
    ...clusters[index],
    ...updateData,
    updated_at: getCurrentTimestamp(),
  };

  return clusters[index];
};

// UPDATE - อัปเดต Cluster status
export const updateClusterStatus = (
  id: string,
  isActive: boolean
): Cluster | null => {
  return updateCluster(id, { is_active: isActive });
};

// UPDATE - อัปเดต Cluster code
export const updateClusterCode = (id: string, code: string): Cluster | null => {
  return updateCluster(id, { code });
};

// UPDATE - อัปเดต Cluster name
export const updateClusterName = (id: string, name: string): Cluster | null => {
  return updateCluster(id, { name });
};

// UPDATE - อัปเดต Cluster alias name
export const updateClusterAliasName = (
  id: string,
  aliasName: string
): Cluster | null => {
  return updateCluster(id, { alias_name: aliasName });
};

// UPDATE - อัปเดต Cluster logo URL
export const updateClusterLogoUrl = (
  id: string,
  logoUrl: string
): Cluster | null => {
  return updateCluster(id, { logo_url: logoUrl });
};

// UPDATE - อัปเดต Cluster info
export const updateClusterInfo = (id: string, info: any): Cluster | null => {
  return updateCluster(id, { info });
};

// DELETE - ลบ Cluster
export const deleteCluster = (id: string): boolean => {
  const index = clusters.findIndex((cluster) => cluster.id === id);

  if (index === -1) {
    return false;
  }

  clusters.splice(index, 1);
  return true;
};

// DELETE - ลบ Cluster ตาม code
export const deleteClusterByCode = (code: string): boolean => {
  const cluster = getClusterByCode(code);
  if (!cluster) return false;

  return deleteCluster(cluster.id);
};

// Utility function สำหรับล้างข้อมูลทั้งหมด (ใช้สำหรับ testing)
export const clearAllClusters = (): void => {
  clusters.length = 0;
};

// Utility function สำหรับนับจำนวน Cluster
export const getClusterCount = (): number => {
  return clusters.length;
};

// Utility function สำหรับนับจำนวน Cluster ที่ active
export const getActiveClusterCount = (): number => {
  return clusters.filter((cluster) => cluster.is_active).length;
};

// Utility function สำหรับค้นหา Cluster แบบ advanced search
export const searchClusters = (searchCriteria: {
  code?: string;
  name?: string;
  is_active?: boolean;
  has_alias?: boolean;
  has_logo?: boolean;
  has_info?: boolean;
}): Cluster[] => {
  return clusters.filter((cluster) => {
    if (
      searchCriteria.code &&
      !cluster.code.toLowerCase().includes(searchCriteria.code.toLowerCase())
    ) {
      return false;
    }

    if (
      searchCriteria.name &&
      !cluster.name.toLowerCase().includes(searchCriteria.name.toLowerCase())
    ) {
      return false;
    }

    if (
      searchCriteria.is_active !== undefined &&
      cluster.is_active !== searchCriteria.is_active
    ) {
      return false;
    }

    if (searchCriteria.has_alias !== undefined) {
      const hasAlias = cluster.alias_name !== null;
      if (hasAlias !== searchCriteria.has_alias) {
        return false;
      }
    }

    if (searchCriteria.has_logo !== undefined) {
      const hasLogo = cluster.logo_url !== null;
      if (hasLogo !== searchCriteria.has_logo) {
        return false;
      }
    }

    if (searchCriteria.has_info !== undefined) {
      const hasInfo = cluster.info !== null;
      if (hasInfo !== searchCriteria.has_info) {
        return false;
      }
    }

    return true;
  });
};

// Utility function สำหรับตรวจสอบ code ซ้ำ
export const isClusterCodeExists = (code: string): boolean => {
  return clusters.some((cluster) => cluster.code === code);
};

// Utility function สำหรับตรวจสอบ Cluster ที่ active
export const hasActiveClusters = (): boolean => {
  return clusters.some((cluster) => cluster.is_active);
};

// Utility function สำหรับตรวจสอบ Cluster ที่มี alias
export const hasClustersWithAlias = (): boolean => {
  return clusters.some((cluster) => cluster.alias_name !== null);
};

// Utility function สำหรับตรวจสอบ Cluster ที่มี logo
export const hasClustersWithLogo = (): boolean => {
  return clusters.some((cluster) => cluster.logo_url !== null);
};
