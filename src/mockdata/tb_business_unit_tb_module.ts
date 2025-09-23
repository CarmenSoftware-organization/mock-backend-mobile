import { generateId, getCurrentTimestamp } from "@/libs/utils";

/**
 * Interface representing the relationship between business units and modules
 * This is a junction table managing many-to-many relationships
 */
export interface BusinessUnitModule {
  /** Unique identifier for the relationship */
  id: string;
  /** ID of the business unit */
  business_unit_id: string;
  /** ID of the module */
  module_id: string;
  /** Whether the module is active for this business unit */
  is_active: boolean;
  /** Order/priority of the module for this business unit */
  sort_order: number;
  /** ISO timestamp when the relationship was created */
  created_at: string;
  /** ID of user who created the relationship */
  created_by_id: string;
  /** ISO timestamp when last updated */
  updated_at: string;
  /** ID of user who last updated the relationship */
  updated_by_id: string | null;
  /** ISO timestamp when soft deleted (null if not deleted) */
  deleted_at: string | null;
  /** ID of user who deleted the relationship (null if not deleted) */
  deleted_by_id: string | null;
}

/** Data required to create a new business unit-module relationship */
export type CreateBusinessUnitModuleData = Omit<
  BusinessUnitModule,
  "id" | "created_at" | "updated_at" | "deleted_at" | "deleted_by_id"
>;

/** Data that can be updated on a business unit-module relationship */
export type UpdateBusinessUnitModuleData = Partial<
  Omit<BusinessUnitModule, "id" | "created_at" | "created_by_id">
>;

/**
 * Search criteria for finding business unit-module relationships
 */
export interface BusinessUnitModuleSearchCriteria {
  /** Filter by business unit ID */
  business_unit_id?: string;
  /** Filter by module ID */
  module_id?: string;
  /** Filter by active status */
  is_active?: boolean;
  /** Whether to include soft deleted relationships */
  include_deleted?: boolean;
}

export const businessUnitModules: BusinessUnitModule[] = [
  {
    id: "550e8400-e29b-41d4-a716-446655440001",
    business_unit_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    module_id: "550e8400-e29b-41d4-a716-446655440100",
    is_active: true,
    sort_order: 1,
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440002",
    business_unit_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    module_id: "550e8400-e29b-41d4-a716-446655440101",
    is_active: true,
    sort_order: 2,
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: null,
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440003",
    business_unit_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c2",
    module_id: "550e8400-e29b-41d4-a716-446655440100",
    is_active: false,
    sort_order: 1,
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    updated_at: "2024-01-15T11:00:00Z",
    updated_by_id: "fe007ceb-9320-41ed-92ac-d6ea1f66b3c1",
    deleted_at: null,
    deleted_by_id: null,
  },
];

/**
 * Creates a new business unit-module relationship
 * @param relationshipData - Data for the new relationship
 * @returns The created relationship
 * @throws Error if relationship already exists
 */
export const createBusinessUnitModule = (
  relationshipData: CreateBusinessUnitModuleData
): BusinessUnitModule => {
  if (
    isBusinessUnitModuleExists(
      relationshipData.business_unit_id,
      relationshipData.module_id
    )
  ) {
    throw new Error(
      `Relationship between business unit '${relationshipData.business_unit_id}' and module '${relationshipData.module_id}' already exists`
    );
  }

  const newRelationship: BusinessUnitModule = {
    ...relationshipData,
    id: generateId(),
    created_at: getCurrentTimestamp(),
    updated_at: getCurrentTimestamp(),
    deleted_at: null,
    deleted_by_id: null,
  };

  businessUnitModules.push(newRelationship);
  return newRelationship;
};

/**
 * Retrieves all business unit-module relationships
 * @param includeDeleted - Whether to include soft deleted relationships
 * @returns Array of relationships
 */
export const getAllBusinessUnitModules = (
  includeDeleted = false
): BusinessUnitModule[] => {
  return includeDeleted
    ? [...businessUnitModules]
    : businessUnitModules.filter((relationship) => !relationship.deleted_at);
};

/**
 * Retrieves a business unit-module relationship by its ID
 * @param id - The relationship ID
 * @param includeDeleted - Whether to include soft deleted relationships
 * @returns The relationship or undefined if not found
 */
export const getBusinessUnitModuleById = (
  id: string,
  includeDeleted = false
): BusinessUnitModule | undefined => {
  const relationship = businessUnitModules.find((rel) => rel.id === id);
  return includeDeleted || !relationship?.deleted_at
    ? relationship
    : undefined;
};

/**
 * Retrieves all modules for a specific business unit
 * @param businessUnitId - The business unit ID
 * @param includeDeleted - Whether to include soft deleted relationships
 * @param activeOnly - Whether to return only active relationships
 * @returns Array of relationships
 */
export const getModulesByBusinessUnit = (
  businessUnitId: string,
  includeDeleted = false,
  activeOnly = false
): BusinessUnitModule[] => {
  return businessUnitModules.filter((relationship) => {
    const matchesBusinessUnit = relationship.business_unit_id === businessUnitId;
    const includeCheck = includeDeleted || !relationship.deleted_at;
    const activeCheck = !activeOnly || relationship.is_active;
    return matchesBusinessUnit && includeCheck && activeCheck;
  });
};

/**
 * Retrieves all business units for a specific module
 * @param moduleId - The module ID
 * @param includeDeleted - Whether to include soft deleted relationships
 * @param activeOnly - Whether to return only active relationships
 * @returns Array of relationships
 */
export const getBusinessUnitsByModule = (
  moduleId: string,
  includeDeleted = false,
  activeOnly = false
): BusinessUnitModule[] => {
  return businessUnitModules.filter((relationship) => {
    const matchesModule = relationship.module_id === moduleId;
    const includeCheck = includeDeleted || !relationship.deleted_at;
    const activeCheck = !activeOnly || relationship.is_active;
    return matchesModule && includeCheck && activeCheck;
  });
};

/**
 * Retrieves a specific business unit-module relationship
 * @param businessUnitId - The business unit ID
 * @param moduleId - The module ID
 * @param includeDeleted - Whether to include soft deleted relationships
 * @returns The relationship or undefined if not found
 */
export const getBusinessUnitModule = (
  businessUnitId: string,
  moduleId: string,
  includeDeleted = false
): BusinessUnitModule | undefined => {
  const relationship = businessUnitModules.find(
    (rel) =>
      rel.business_unit_id === businessUnitId && rel.module_id === moduleId
  );
  return includeDeleted || !relationship?.deleted_at
    ? relationship
    : undefined;
};

/**
 * Updates an existing business unit-module relationship
 * @param id - The relationship ID to update
 * @param updateData - Data to update
 * @returns The updated relationship or null if not found/deleted
 * @throws Error if trying to create duplicate relationship
 */
export const updateBusinessUnitModule = (
  id: string,
  updateData: UpdateBusinessUnitModuleData
): BusinessUnitModule | null => {
  const index = businessUnitModules.findIndex((rel) => rel.id === id);

  if (index === -1 || businessUnitModules[index].deleted_at) {
    return null;
  }

  const currentRel = businessUnitModules[index];

  if (
    updateData.business_unit_id &&
    updateData.module_id &&
    (updateData.business_unit_id !== currentRel.business_unit_id ||
      updateData.module_id !== currentRel.module_id)
  ) {
    if (
      isBusinessUnitModuleExists(
        updateData.business_unit_id,
        updateData.module_id,
        id
      )
    ) {
      throw new Error(
        `Relationship between business unit '${updateData.business_unit_id}' and module '${updateData.module_id}' already exists`
      );
    }
  }

  businessUnitModules[index] = {
    ...currentRel,
    ...updateData,
    updated_at: getCurrentTimestamp(),
  };

  return businessUnitModules[index];
};

/**
 * Activates a business unit-module relationship
 * @param businessUnitId - The business unit ID
 * @param moduleId - The module ID
 * @returns The updated relationship or null if not found
 */
export const activateBusinessUnitModule = (
  businessUnitId: string,
  moduleId: string
): BusinessUnitModule | null => {
  const relationship = getBusinessUnitModule(businessUnitId, moduleId);
  if (!relationship) return null;

  return updateBusinessUnitModule(relationship.id, { is_active: true });
};

/**
 * Deactivates a business unit-module relationship
 * @param businessUnitId - The business unit ID
 * @param moduleId - The module ID
 * @returns The updated relationship or null if not found
 */
export const deactivateBusinessUnitModule = (
  businessUnitId: string,
  moduleId: string
): BusinessUnitModule | null => {
  const relationship = getBusinessUnitModule(businessUnitId, moduleId);
  if (!relationship) return null;

  return updateBusinessUnitModule(relationship.id, { is_active: false });
};

/**
 * Updates the sort order of modules for a business unit
 * @param businessUnitId - The business unit ID
 * @param moduleOrders - Array of {module_id, sort_order} objects
 * @returns Array of updated relationships
 */
export const updateModuleSortOrder = (
  businessUnitId: string,
  moduleOrders: { module_id: string; sort_order: number }[]
): BusinessUnitModule[] => {
  const updatedRelationships: BusinessUnitModule[] = [];

  moduleOrders.forEach(({ module_id, sort_order }) => {
    const relationship = getBusinessUnitModule(businessUnitId, module_id);
    if (relationship) {
      const updated = updateBusinessUnitModule(relationship.id, {
        sort_order,
      });
      if (updated) {
        updatedRelationships.push(updated);
      }
    }
  });

  return updatedRelationships;
};

/**
 * Soft deletes a business unit-module relationship
 * @param id - The relationship ID to delete
 * @param deletedById - ID of the user performing the deletion
 * @returns True if deleted successfully, false if not found or already deleted
 */
export const deleteBusinessUnitModule = (
  id: string,
  deletedById: string
): boolean => {
  const index = businessUnitModules.findIndex((rel) => rel.id === id);

  if (index === -1 || businessUnitModules[index].deleted_at) {
    return false;
  }

  businessUnitModules[index] = {
    ...businessUnitModules[index],
    deleted_at: getCurrentTimestamp(),
    deleted_by_id: deletedById,
  };

  return true;
};

/**
 * Soft deletes a business unit-module relationship by business unit and module IDs
 * @param businessUnitId - The business unit ID
 * @param moduleId - The module ID
 * @param deletedById - ID of the user performing the deletion
 * @returns True if deleted successfully, false if not found or already deleted
 */
export const deleteBusinessUnitModuleByIds = (
  businessUnitId: string,
  moduleId: string,
  deletedById: string
): boolean => {
  const relationship = getBusinessUnitModule(businessUnitId, moduleId);
  if (!relationship) return false;

  return deleteBusinessUnitModule(relationship.id, deletedById);
};

/**
 * Hard deletes a business unit-module relationship
 * @param id - The relationship ID to delete permanently
 * @returns True if deleted successfully, false if not found
 */
export const hardDeleteBusinessUnitModule = (id: string): boolean => {
  const index = businessUnitModules.findIndex((rel) => rel.id === id);

  if (index === -1) {
    return false;
  }

  businessUnitModules.splice(index, 1);
  return true;
};

/**
 * Restores a soft-deleted business unit-module relationship
 * @param id - The relationship ID to restore
 * @returns True if restored successfully, false if not found or not deleted
 */
export const restoreBusinessUnitModule = (id: string): boolean => {
  const index = businessUnitModules.findIndex((rel) => rel.id === id);

  if (index === -1 || !businessUnitModules[index].deleted_at) {
    return false;
  }

  businessUnitModules[index] = {
    ...businessUnitModules[index],
    deleted_at: null,
    deleted_by_id: null,
    updated_at: getCurrentTimestamp(),
  };

  return true;
};

/**
 * Removes all modules from a business unit
 * @param businessUnitId - The business unit ID
 * @param deletedById - ID of the user performing the deletion
 * @returns Number of relationships deleted
 */
export const removeAllModulesFromBusinessUnit = (
  businessUnitId: string,
  deletedById: string
): number => {
  let deletedCount = 0;

  businessUnitModules.forEach((relationship) => {
    if (
      relationship.business_unit_id === businessUnitId &&
      !relationship.deleted_at
    ) {
      relationship.deleted_at = getCurrentTimestamp();
      relationship.deleted_by_id = deletedById;
      deletedCount++;
    }
  });

  return deletedCount;
};

/**
 * Removes a module from all business units
 * @param moduleId - The module ID
 * @param deletedById - ID of the user performing the deletion
 * @returns Number of relationships deleted
 */
export const removeModuleFromAllBusinessUnits = (
  moduleId: string,
  deletedById: string
): number => {
  let deletedCount = 0;

  businessUnitModules.forEach((relationship) => {
    if (relationship.module_id === moduleId && !relationship.deleted_at) {
      relationship.deleted_at = getCurrentTimestamp();
      relationship.deleted_by_id = deletedById;
      deletedCount++;
    }
  });

  return deletedCount;
};

/**
 * Advanced search for business unit-module relationships
 * @param searchCriteria - Search parameters
 * @returns Array of relationships matching all criteria
 */
export const searchBusinessUnitModules = (
  searchCriteria: BusinessUnitModuleSearchCriteria
): BusinessUnitModule[] => {
  return businessUnitModules.filter((relationship) => {
    if (!searchCriteria.include_deleted && relationship.deleted_at) {
      return false;
    }

    const checks = [
      !searchCriteria.business_unit_id ||
        relationship.business_unit_id === searchCriteria.business_unit_id,
      !searchCriteria.module_id ||
        relationship.module_id === searchCriteria.module_id,
      searchCriteria.is_active === undefined ||
        relationship.is_active === searchCriteria.is_active,
    ];

    return checks.every(Boolean);
  });
};

/**
 * Checks if a business unit-module relationship exists
 * @param businessUnitId - The business unit ID
 * @param moduleId - The module ID
 * @param excludeId - Optional ID to exclude from check (useful for updates)
 * @returns True if relationship exists
 */
export const isBusinessUnitModuleExists = (
  businessUnitId: string,
  moduleId: string,
  excludeId?: string
): boolean => {
  return businessUnitModules.some(
    (relationship) =>
      relationship.business_unit_id === businessUnitId &&
      relationship.module_id === moduleId &&
      relationship.id !== excludeId &&
      !relationship.deleted_at
  );
};

/**
 * Gets count of relationships
 * @param includeDeleted - Whether to include soft deleted relationships
 * @returns Total count of relationships
 */
export const getBusinessUnitModuleCount = (includeDeleted = false): number => {
  return includeDeleted
    ? businessUnitModules.length
    : businessUnitModules.filter((rel) => !rel.deleted_at).length;
};

/**
 * Gets count of active modules for a business unit
 * @param businessUnitId - The business unit ID
 * @returns Count of active modules
 */
export const getActiveModuleCount = (businessUnitId: string): number => {
  return businessUnitModules.filter(
    (rel) =>
      rel.business_unit_id === businessUnitId &&
      rel.is_active &&
      !rel.deleted_at
  ).length;
};

/**
 * Gets unique business unit IDs that have modules
 * @param includeDeleted - Whether to include soft deleted relationships
 * @returns Array of unique business unit IDs
 */
export const getBusinessUnitsWithModules = (
  includeDeleted = false
): string[] => {
  const businessUnitIds = new Set<string>();
  businessUnitModules
    .filter((rel) => includeDeleted || !rel.deleted_at)
    .forEach((rel) => businessUnitIds.add(rel.business_unit_id));
  return Array.from(businessUnitIds);
};

/**
 * Gets unique module IDs that are assigned to business units
 * @param includeDeleted - Whether to include soft deleted relationships
 * @returns Array of unique module IDs
 */
export const getModulesInUse = (includeDeleted = false): string[] => {
  const moduleIds = new Set<string>();
  businessUnitModules
    .filter((rel) => includeDeleted || !rel.deleted_at)
    .forEach((rel) => moduleIds.add(rel.module_id));
  return Array.from(moduleIds);
};

/**
 * Clears all business unit-module relationship data (primarily for testing)
 * @warning This permanently removes all data
 */
export const clearAllBusinessUnitModules = (): void => {
  businessUnitModules.length = 0;
};