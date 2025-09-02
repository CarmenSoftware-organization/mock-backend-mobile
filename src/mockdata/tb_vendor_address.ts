import { generateId, getCurrentTimestamp } from "@/libs/utils";

export interface VendorAddress {
  id: string;
  vendor_id: string;
  address_type: "billing" | "shipping" | "contact" | "other";
  data: any;
  is_active: boolean;
  description: string | null;
  note: string | null;
  info: any;
  dimension: any;
  created_at: string;
  created_by_id: string;
  updated_at: string;
  updated_by_id: string | null;
  deleted_at: string | null;
  deleted_by_id: string | null;
}

// Sample data
export const vendorAddresses: VendorAddress[] = [
  {
    id: "va-001",
    vendor_id: "1c837400-3069-49c7-a297-2549721e764d",
    address_type: "billing",
    data: {
      street: "123 Main Street",
      city: "Bangkok",
      state: "Bangkok",
      postal_code: "10400",
      country: "Thailand",
      phone: "+66-2-123-4567",
      email: "billing@4joy.com",
    },
    is_active: true,
    description: "Main billing address for 4 JOY SHOKUDO",
    note: "Primary billing location",
    info: { priority: "high", contact_person: "John Smith" },
    dimension: { region: "Central", zone: "Bangkok" },
    created_at: "2024-01-15T10:00:00Z",
    created_by_id: "user-001",
    updated_at: "2024-01-15T10:00:00Z",
    updated_by_id: "user-001",
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: "va-002",
    vendor_id: "1c837400-3069-49c7-a297-2549721e764d",
    address_type: "shipping",
    data: {
      street: "456 Warehouse Road",
      city: "Samutprakarn",
      state: "Samutprakarn",
      postal_code: "10540",
      country: "Thailand",
      phone: "+66-2-987-6543",
      email: "shipping@4joy.com",
    },
    is_active: true,
    description: "Warehouse shipping address",
    note: "Main distribution center",
    info: { priority: "medium", contact_person: "Jane Doe" },
    dimension: { region: "Central", zone: "Samutprakarn" },
    created_at: "2024-01-15T11:00:00Z",
    created_by_id: "user-001",
    updated_at: "2024-01-15T11:00:00Z",
    updated_by_id: "user-001",
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: "va-003",
    vendor_id: "e50de68e-8053-4574-9252-94f70187b95b",
    address_type: "contact",
    data: {
      street: "789 Business Ave",
      city: "Chiang Mai",
      state: "Chiang Mai",
      postal_code: "50200",
      country: "Thailand",
      phone: "+66-53-123-4567",
      email: "contact@akjtextile.com",
    },
    is_active: true,
    description: "Main contact address for A K & J TEXTILE",
    note: "Headquarters location",
    info: { priority: "high", contact_person: "Mike Johnson" },
    dimension: { region: "North", zone: "Chiang Mai" },
    created_at: "2024-01-16T09:00:00Z",
    created_by_id: "user-002",
    updated_at: "2024-01-16T09:00:00Z",
    updated_by_id: "user-002",
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: "va-004",
    vendor_id: "2a892635-4384-411a-9e00-fd33e39c1837",
    address_type: "billing",
    data: {
      street: "321 School Street",
      city: "Phuket",
      state: "Phuket",
      postal_code: "83000",
      country: "Thailand",
      phone: "+66-76-123-4567",
      email: "admin@school.com",
    },
    is_active: true,
    description: "Billing address for school",
    note: "Educational institution billing",
    info: { priority: "medium", contact_person: "Principal" },
    dimension: { region: "South", zone: "Phuket" },
    created_at: "2024-01-17T08:00:00Z",
    created_by_id: "user-003",
    updated_at: "2024-01-17T08:00:00Z",
    updated_by_id: "user-003",
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: "va-005",
    vendor_id: "0e370311-0b10-4703-a9a2-4e653364c558",
    address_type: "shipping",
    data: {
      street: "654 Trading Center",
      city: "Ayutthaya",
      state: "Ayutthaya",
      postal_code: "13000",
      country: "Thailand",
      phone: "+66-35-123-4567",
      email: "shipping@adisak.com",
    },
    is_active: true,
    description: "Shipping address for ADISAK TRADING",
    note: "Trading center location",
    info: { priority: "medium", contact_person: "Sarah Wilson" },
    dimension: { region: "Central", zone: "Ayutthaya" },
    created_at: "2024-01-18T10:00:00Z",
    created_by_id: "user-001",
    updated_at: "2024-01-18T10:00:00Z",
    updated_by_id: "user-001",
    deleted_at: null,
    deleted_by_id: null,
  },
];

// CREATE - สร้าง VendorAddress ใหม่
export const createVendorAddress = (
  data: Omit<
    VendorAddress,
    "id" | "created_at" | "created_by_id" | "updated_at" | "updated_by_id"
  >
): VendorAddress => {
  const newVendorAddress: VendorAddress = {
    ...data,
    id: generateId(),
    created_at: getCurrentTimestamp(),
    created_by_id: "system",
    updated_at: getCurrentTimestamp(),
    updated_by_id: "system",
  };

  vendorAddresses.push(newVendorAddress);
  return newVendorAddress;
};

// READ - อ่านข้อมูล VendorAddress
export const getAllVendorAddresses = (): VendorAddress[] => {
  return vendorAddresses.filter((address) => !address.deleted_at);
};

export const getVendorAddressById = (id: string): VendorAddress | null => {
  const address = vendorAddresses.find((a) => a.id === id && !a.deleted_at);
  return address || null;
};

export const getVendorAddressesByVendor = (
  vendorId: string
): VendorAddress[] => {
  return vendorAddresses.filter(
    (address) => address.vendor_id === vendorId && !address.deleted_at
  );
};

export const getVendorAddressesByType = (
  addressType: "billing" | "shipping" | "contact" | "other"
): VendorAddress[] => {
  return vendorAddresses.filter(
    (address) => address.address_type === addressType && !address.deleted_at
  );
};

export const getVendorAddressesByVendorAndType = (
  vendorId: string,
  addressType: "billing" | "shipping" | "contact" | "other"
): VendorAddress[] => {
  return vendorAddresses.filter(
    (address) =>
      address.vendor_id === vendorId &&
      address.address_type === addressType &&
      !address.deleted_at
  );
};

export const getActiveVendorAddresses = (): VendorAddress[] => {
  return vendorAddresses.filter(
    (address) => address.is_active && !address.deleted_at
  );
};

export const getInactiveVendorAddresses = (): VendorAddress[] => {
  return vendorAddresses.filter(
    (address) => !address.is_active && !address.deleted_at
  );
};

export const getVendorAddressesByCreator = (
  createdById: string
): VendorAddress[] => {
  return vendorAddresses.filter(
    (address) => address.created_by_id === createdById && !address.deleted_at
  );
};

export const getVendorAddressesByDateRange = (
  startDate: string,
  endDate: string
): VendorAddress[] => {
  return vendorAddresses.filter((address) => {
    const createdDate = new Date(address.created_at);
    const start = new Date(startDate);
    const end = new Date(endDate);
    return createdDate >= start && createdDate <= end && !address.deleted_at;
  });
};

export const getVendorAddressesWithNote = (): VendorAddress[] => {
  return vendorAddresses.filter(
    (address) => address.note !== null && !address.deleted_at
  );
};

export const getVendorAddressesWithoutNote = (): VendorAddress[] => {
  return vendorAddresses.filter(
    (address) => address.note === null && !address.deleted_at
  );
};

// UPDATE - อัปเดต VendorAddress
export const updateVendorAddress = (
  id: string,
  data: Partial<Omit<VendorAddress, "id" | "created_at" | "created_by_id">>
): VendorAddress | null => {
  const index = vendorAddresses.findIndex(
    (address) => address.id === id && !address.deleted_at
  );

  if (index === -1) {
    return null;
  }

  vendorAddresses[index] = {
    ...vendorAddresses[index],
    ...data,
    updated_at: getCurrentTimestamp(),
    updated_by_id: "system",
  };

  return vendorAddresses[index];
};

// UPDATE - อัปเดต VendorAddress status
export const updateVendorAddressStatus = (
  id: string,
  isActive: boolean
): VendorAddress | null => {
  return updateVendorAddress(id, { is_active: isActive });
};

// UPDATE - อัปเดต VendorAddress type
export const updateVendorAddressType = (
  id: string,
  addressType: "billing" | "shipping" | "contact" | "other"
): VendorAddress | null => {
  return updateVendorAddress(id, { address_type: addressType });
};

// UPDATE - อัปเดต VendorAddress data
export const updateVendorAddressData = (
  id: string,
  data: any
): VendorAddress | null => {
  return updateVendorAddress(id, { data });
};

// UPDATE - อัปเดต VendorAddress description
export const updateVendorAddressDescription = (
  id: string,
  description: string
): VendorAddress | null => {
  return updateVendorAddress(id, { description });
};

// UPDATE - อัปเดต VendorAddress note
export const updateVendorAddressNote = (
  id: string,
  note: string
): VendorAddress | null => {
  return updateVendorAddress(id, { note });
};

// UPDATE - อัปเดต VendorAddress info
export const updateVendorAddressInfo = (
  id: string,
  info: any
): VendorAddress | null => {
  return updateVendorAddress(id, { info });
};

// UPDATE - อัปเดต VendorAddress dimension
export const updateVendorAddressDimension = (
  id: string,
  dimension: any
): VendorAddress | null => {
  return updateVendorAddress(id, { dimension });
};

// DELETE - Soft delete VendorAddress
export const softDeleteVendorAddress = (
  id: string,
  deletedById: string
): VendorAddress | null => {
  const address = getVendorAddressById(id);
  if (!address) return null;

  address.deleted_at = getCurrentTimestamp();
  address.deleted_by_id = deletedById;
  address.updated_at = getCurrentTimestamp();
  address.updated_by_id = deletedById;

  return address;
};

// DELETE - Hard delete VendorAddress
export const hardDeleteVendorAddress = (id: string): boolean => {
  const index = vendorAddresses.findIndex((address) => address.id === id);

  if (index === -1) {
    return false;
  }

  vendorAddresses.splice(index, 1);
  return true;
};

// DELETE - ลบ VendorAddress ตาม vendor
export const deleteVendorAddressesByVendor = (
  vendorId: string,
  deletedById: string
): boolean => {
  const addressesByVendor = getVendorAddressesByVendor(vendorId);
  let deletedCount = 0;

  addressesByVendor.forEach((address) => {
    if (softDeleteVendorAddress(address.id, deletedById)) {
      deletedCount++;
    }
  });

  return deletedCount > 0;
};

// DELETE - ลบ VendorAddress ตาม type
export const deleteVendorAddressesByType = (
  addressType: "billing" | "shipping" | "contact" | "other",
  deletedById: string
): boolean => {
  const addressesByType = getVendorAddressesByType(addressType);
  let deletedCount = 0;

  addressesByType.forEach((address) => {
    if (softDeleteVendorAddress(address.id, deletedById)) {
      deletedCount++;
    }
  });

  return deletedCount > 0;
};

// RESTORE - กู้คืน VendorAddress ที่ถูก soft delete
export const restoreVendorAddress = (id: string): VendorAddress | null => {
  const address = vendorAddresses.find((a) => a.id === id);
  if (!address || !address.deleted_at) return null;

  address.deleted_at = null;
  address.deleted_by_id = null;
  address.updated_at = getCurrentTimestamp();
  address.updated_by_id = "system";

  return address;
};

// ADVANCED SEARCH - ค้นหา VendorAddress แบบขั้นสูง
export const searchVendorAddresses = (criteria: {
  vendor_id?: string;
  address_type?: "billing" | "shipping" | "contact" | "other";
  is_active?: boolean;
  has_note?: boolean;
  created_by_id?: string;
  start_date?: string;
  end_date?: string;
}): VendorAddress[] => {
  return vendorAddresses.filter((address) => {
    if (address.deleted_at) return false;

    if (criteria.vendor_id && address.vendor_id !== criteria.vendor_id) {
      return false;
    }

    if (
      criteria.address_type &&
      address.address_type !== criteria.address_type
    ) {
      return false;
    }

    if (
      criteria.is_active !== undefined &&
      address.is_active !== criteria.is_active
    ) {
      return false;
    }

    if (criteria.has_note !== undefined) {
      const hasNote = address.note !== null;
      if (hasNote !== criteria.has_note) {
        return false;
      }
    }

    if (
      criteria.created_by_id &&
      address.created_by_id !== criteria.created_by_id
    ) {
      return false;
    }

    if (criteria.start_date || criteria.end_date) {
      const createdDate = new Date(address.created_at);
      if (criteria.start_date && createdDate < new Date(criteria.start_date))
        return false;
      if (criteria.end_date && createdDate > new Date(criteria.end_date))
        return false;
    }

    return true;
  });
};

// UTILITY FUNCTIONS - ฟังก์ชันเสริม
export const getVendorAddressCount = (): number => {
  return vendorAddresses.filter((address) => !address.deleted_at).length;
};

export const getVendorAddressCountByVendor = (vendorId: string): number => {
  return vendorAddresses.filter(
    (address) => address.vendor_id === vendorId && !address.deleted_at
  ).length;
};

export const getVendorAddressCountByType = (
  addressType: "billing" | "shipping" | "contact" | "other"
): number => {
  return vendorAddresses.filter(
    (address) => address.address_type === addressType && !address.deleted_at
  ).length;
};

export const getActiveVendorAddressCount = (): number => {
  return vendorAddresses.filter(
    (address) => address.is_active && !address.deleted_at
  ).length;
};

export const isVendorAddressExists = (id: string): boolean => {
  return vendorAddresses.some(
    (address) => address.id === id && !address.deleted_at
  );
};

export const hasVendorAddressesByVendor = (vendorId: string): boolean => {
  return vendorAddresses.some(
    (address) => address.vendor_id === vendorId && !address.deleted_at
  );
};

export const hasVendorAddressesByType = (
  addressType: "billing" | "shipping" | "contact" | "other"
): boolean => {
  return vendorAddresses.some(
    (address) => address.address_type === addressType && !address.deleted_at
  );
};

export const hasVendorAddressesWithNote = (): boolean => {
  return vendorAddresses.some(
    (address) => address.note !== null && !address.deleted_at
  );
};

export const clearAllVendorAddresses = (): void => {
  vendorAddresses.length = 0;
};
