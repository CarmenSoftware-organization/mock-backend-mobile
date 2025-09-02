import { generateId, getCurrentTimestamp } from "@/libs/utils";

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
    id: "75e036ab-19c5-4825-97cf-24581ff2dda3",
    code: "CARMEN",
    name: "Carmen Cluster",
    is_active: true,
    info: null,
    created_at: "2025-07-29T01:37:28.992Z",
    created_by_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    updated_at: "2025-07-29T01:37:28.992Z",
    updated_by_id: null,
    alias_name: null,
    logo_url: null,
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
