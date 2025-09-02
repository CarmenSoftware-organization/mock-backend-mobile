import { generateId, getCurrentTimestamp } from "@/libs/utils";

export interface VendorContact {
  id: string;
  vendor_id: string;
  contact_type: "phone" | "email" | "fax" | "website" | "other";
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
export const vendorContacts: VendorContact[] = [
  {
    id: "vc-001",
    vendor_id: "1c837400-3069-49c7-a297-2549721e764d",
    contact_type: "phone",
    is_active: true,
    description: "Main office phone",
    note: "Primary contact number",
    info: { priority: "high", extension: "101" },
    dimension: { department: "Sales", region: "Bangkok" },
    created_at: "2024-01-15T10:00:00Z",
    created_by_id: "user-001",
    updated_at: "2024-01-15T10:00:00Z",
    updated_by_id: "user-001",
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: "vc-002",
    vendor_id: "1c837400-3069-49c7-a297-2549721e764d",
    contact_type: "email",
    is_active: true,
    description: "General inquiry email",
    note: "Main contact email",
    info: { priority: "high", response_time: "24h" },
    dimension: { department: "Customer Service", region: "Bangkok" },
    created_at: "2024-01-15T10:30:00Z",
    created_by_id: "user-001",
    updated_at: "2024-01-15T10:30:00Z",
    updated_by_id: "user-001",
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: "vc-003",
    vendor_id: "1c837400-3069-49c7-a297-2549721e764d",
    contact_type: "website",
    is_active: true,
    description: "Company website",
    note: "Online presence",
    info: { priority: "medium", language: "Thai/English" },
    dimension: { department: "Marketing", region: "Bangkok" },
    created_at: "2024-01-15T11:00:00Z",
    created_by_id: "user-001",
    updated_at: "2024-01-15T11:00:00Z",
    updated_by_id: "user-001",
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: "vc-004",
    vendor_id: "e50de68e-8053-4574-9252-94f70187b95b",
    contact_type: "phone",
    is_active: true,
    description: "Sales department phone",
    note: "Direct sales line",
    info: { priority: "high", extension: "201" },
    dimension: { department: "Sales", region: "Chiang Mai" },
    created_at: "2024-01-16T09:00:00Z",
    created_by_id: "user-002",
    updated_at: "2024-01-16T09:00:00Z",
    updated_by_id: "user-002",
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: "vc-005",
    vendor_id: "e50de68e-8053-4574-9252-94f70187b95b",
    contact_type: "email",
    is_active: true,
    description: "Sales inquiry email",
    note: "Sales contact",
    info: { priority: "high", response_time: "12h" },
    dimension: { department: "Sales", region: "Chiang Mai" },
    created_at: "2024-01-16T09:30:00Z",
    created_by_id: "user-002",
    updated_at: "2024-01-16T09:30:00Z",
    updated_by_id: "user-002",
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: "vc-006",
    vendor_id: "2a892635-4384-411a-9e00-fd33e39c1837",
    contact_type: "phone",
    is_active: true,
    description: "Administration office",
    note: "School administration",
    info: { priority: "medium", extension: "301" },
    dimension: { department: "Administration", region: "Phuket" },
    created_at: "2024-01-17T08:00:00Z",
    created_by_id: "user-003",
    updated_at: "2024-01-17T08:00:00Z",
    updated_by_id: "user-003",
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: "vc-007",
    vendor_id: "0e370311-0b10-4703-a9a2-4e653364c558",
    contact_type: "fax",
    is_active: true,
    description: "Order fax line",
    note: "For order confirmations",
    info: { priority: "medium", auto_reply: true },
    dimension: { department: "Orders", region: "Ayutthaya" },
    created_at: "2024-01-18T10:00:00Z",
    created_by_id: "user-001",
    updated_at: "2024-01-18T10:00:00Z",
    updated_by_id: "user-001",
    deleted_at: null,
    deleted_by_id: null,
  },
  {
    id: "vc-008",
    vendor_id: "0e370311-0b10-4703-a9a2-4e653364c558",
    contact_type: "website",
    is_active: true,
    description: "Online catalog",
    note: "Product catalog website",
    info: { priority: "medium", language: "Thai" },
    dimension: { department: "Marketing", region: "Ayutthaya" },
    created_at: "2024-01-18T10:30:00Z",
    created_by_id: "user-001",
    updated_at: "2024-01-18T10:30:00Z",
    updated_by_id: "user-001",
    deleted_at: null,
    deleted_by_id: null,
  },
];

// CREATE - สร้าง VendorContact ใหม่
export const createVendorContact = (
  data: Omit<
    VendorContact,
    "id" | "created_at" | "created_by_id" | "updated_at" | "updated_by_id"
  >
): VendorContact => {
  const newVendorContact: VendorContact = {
    ...data,
    id: generateId(),
    created_at: getCurrentTimestamp(),
    created_by_id: "system",
    updated_at: getCurrentTimestamp(),
    updated_by_id: "system",
  };

  vendorContacts.push(newVendorContact);
  return newVendorContact;
};

// READ - อ่านข้อมูล VendorContact
export const getAllVendorContacts = (): VendorContact[] => {
  return vendorContacts.filter((contact) => !contact.deleted_at);
};

export const getVendorContactById = (id: string): VendorContact | null => {
  const contact = vendorContacts.find((c) => c.id === id && !c.deleted_at);
  return contact || null;
};

export const getVendorContactsByVendor = (
  vendorId: string
): VendorContact[] => {
  return vendorContacts.filter(
    (contact) => contact.vendor_id === vendorId && !contact.deleted_at
  );
};

export const getVendorContactsByType = (
  contactType: "phone" | "email" | "fax" | "website" | "other"
): VendorContact[] => {
  return vendorContacts.filter(
    (contact) => contact.contact_type === contactType && !contact.deleted_at
  );
};

export const getVendorContactsByVendorAndType = (
  vendorId: string,
  contactType: "phone" | "email" | "fax" | "website" | "other"
): VendorContact[] => {
  return vendorContacts.filter(
    (contact) =>
      contact.vendor_id === vendorId &&
      contact.contact_type === contactType &&
      !contact.deleted_at
  );
};

export const getActiveVendorContacts = (): VendorContact[] => {
  return vendorContacts.filter(
    (contact) => contact.is_active && !contact.deleted_at
  );
};

export const getInactiveVendorContacts = (): VendorContact[] => {
  return vendorContacts.filter(
    (contact) => !contact.is_active && !contact.deleted_at
  );
};

export const getVendorContactsByCreator = (
  createdById: string
): VendorContact[] => {
  return vendorContacts.filter(
    (contact) => contact.created_by_id === createdById && !contact.deleted_at
  );
};

export const getVendorContactsByDateRange = (
  startDate: string,
  endDate: string
): VendorContact[] => {
  return vendorContacts.filter((contact) => {
    const createdDate = new Date(contact.created_at);
    const start = new Date(startDate);
    const end = new Date(endDate);
    return createdDate >= start && createdDate <= end && !contact.deleted_at;
  });
};

export const getVendorContactsWithNote = (): VendorContact[] => {
  return vendorContacts.filter(
    (contact) => contact.note !== null && !contact.deleted_at
  );
};

export const getVendorContactsWithoutNote = (): VendorContact[] => {
  return vendorContacts.filter(
    (contact) => contact.note === null && !contact.deleted_at
  );
};

// UPDATE - อัปเดต VendorContact
export const updateVendorContact = (
  id: string,
  data: Partial<Omit<VendorContact, "id" | "created_at" | "created_by_id">>
): VendorContact | null => {
  const index = vendorContacts.findIndex(
    (contact) => contact.id === id && !contact.deleted_at
  );

  if (index === -1) {
    return null;
  }

  vendorContacts[index] = {
    ...vendorContacts[index],
    ...data,
    updated_at: getCurrentTimestamp(),
    updated_by_id: "system",
  };

  return vendorContacts[index];
};

// UPDATE - อัปเดต VendorContact status
export const updateVendorContactStatus = (
  id: string,
  isActive: boolean
): VendorContact | null => {
  return updateVendorContact(id, { is_active: isActive });
};

// UPDATE - อัปเดต VendorContact type
export const updateVendorContactType = (
  id: string,
  contactType: "phone" | "email" | "fax" | "website" | "other"
): VendorContact | null => {
  return updateVendorContact(id, { contact_type: contactType });
};

// UPDATE - อัปเดต VendorContact description
export const updateVendorContactDescription = (
  id: string,
  description: string
): VendorContact | null => {
  return updateVendorContact(id, { description });
};

// UPDATE - อัปเดต VendorContact note
export const updateVendorContactNote = (
  id: string,
  note: string
): VendorContact | null => {
  return updateVendorContact(id, { note });
};

// UPDATE - อัปเดต VendorContact info
export const updateVendorContactInfo = (
  id: string,
  info: any
): VendorContact | null => {
  return updateVendorContact(id, { info });
};

// UPDATE - อัปเดต VendorContact dimension
export const updateVendorContactDimension = (
  id: string,
  dimension: any
): VendorContact | null => {
  return updateVendorContact(id, { dimension });
};

// DELETE - Soft delete VendorContact
export const softDeleteVendorContact = (
  id: string,
  deletedById: string
): VendorContact | null => {
  const contact = getVendorContactById(id);
  if (!contact) return null;

  contact.deleted_at = getCurrentTimestamp();
  contact.deleted_by_id = deletedById;
  contact.updated_at = getCurrentTimestamp();
  contact.updated_by_id = deletedById;

  return contact;
};

// DELETE - Hard delete VendorContact
export const hardDeleteVendorContact = (id: string): boolean => {
  const index = vendorContacts.findIndex((contact) => contact.id === id);

  if (index === -1) {
    return false;
  }

  vendorContacts.splice(index, 1);
  return true;
};

// DELETE - ลบ VendorContact ตาม vendor
export const deleteVendorContactsByVendor = (
  vendorId: string,
  deletedById: string
): boolean => {
  const contactsByVendor = getVendorContactsByVendor(vendorId);
  let deletedCount = 0;

  contactsByVendor.forEach((contact) => {
    if (softDeleteVendorContact(contact.id, deletedById)) {
      deletedCount++;
    }
  });

  return deletedCount > 0;
};

// DELETE - ลบ VendorContact ตาม type
export const deleteVendorContactsByType = (
  contactType: "phone" | "email" | "fax" | "website" | "other",
  deletedById: string
): boolean => {
  const contactsByType = getVendorContactsByType(contactType);
  let deletedCount = 0;

  contactsByType.forEach((contact) => {
    if (softDeleteVendorContact(contact.id, deletedById)) {
      deletedCount++;
    }
  });

  return deletedCount > 0;
};

// RESTORE - กู้คืน VendorContact ที่ถูก soft delete
export const restoreVendorContact = (id: string): VendorContact | null => {
  const contact = vendorContacts.find((c) => c.id === id);
  if (!contact || !contact.deleted_at) return null;

  contact.deleted_at = null;
  contact.deleted_by_id = null;
  contact.updated_at = getCurrentTimestamp();
  contact.updated_by_id = "system";

  return contact;
};

// ADVANCED SEARCH - ค้นหา VendorContact แบบขั้นสูง
export const searchVendorContacts = (criteria: {
  vendor_id?: string;
  contact_type?: "phone" | "email" | "fax" | "website" | "other";
  is_active?: boolean;
  has_note?: boolean;
  created_by_id?: string;
  start_date?: string;
  end_date?: string;
}): VendorContact[] => {
  return vendorContacts.filter((contact) => {
    if (contact.deleted_at) return false;

    if (criteria.vendor_id && contact.vendor_id !== criteria.vendor_id) {
      return false;
    }

    if (
      criteria.contact_type &&
      contact.contact_type !== criteria.contact_type
    ) {
      return false;
    }

    if (
      criteria.is_active !== undefined &&
      contact.is_active !== criteria.is_active
    ) {
      return false;
    }

    if (criteria.has_note !== undefined) {
      const hasNote = contact.note !== null;
      if (hasNote !== criteria.has_note) {
        return false;
      }
    }

    if (
      criteria.created_by_id &&
      contact.created_by_id !== criteria.created_by_id
    ) {
      return false;
    }

    if (criteria.start_date || criteria.end_date) {
      const createdDate = new Date(contact.created_at);
      if (criteria.start_date && createdDate < new Date(criteria.start_date))
        return false;
      if (criteria.end_date && createdDate > new Date(criteria.end_date))
        return false;
    }

    return true;
  });
};

// UTILITY FUNCTIONS - ฟังก์ชันเสริม
export const getVendorContactCount = (): number => {
  return vendorContacts.filter((contact) => !contact.deleted_at).length;
};

export const getVendorContactCountByVendor = (vendorId: string): number => {
  return vendorContacts.filter(
    (contact) => contact.vendor_id === vendorId && !contact.deleted_at
  ).length;
};

export const getVendorContactCountByType = (
  contactType: "phone" | "email" | "fax" | "website" | "other"
): number => {
  return vendorContacts.filter(
    (contact) => contact.contact_type === contactType && !contact.deleted_at
  ).length;
};

export const getActiveVendorContactCount = (): number => {
  return vendorContacts.filter(
    (contact) => contact.is_active && !contact.deleted_at
  ).length;
};

export const isVendorContactExists = (id: string): boolean => {
  return vendorContacts.some(
    (contact) => contact.id === id && !contact.deleted_at
  );
};

export const hasVendorContactsByVendor = (vendorId: string): boolean => {
  return vendorContacts.some(
    (contact) => contact.vendor_id === vendorId && !contact.deleted_at
  );
};

export const hasVendorContactsByType = (
  contactType: "phone" | "email" | "fax" | "website" | "other"
): boolean => {
  return vendorContacts.some(
    (contact) => contact.contact_type === contactType && !contact.deleted_at
  );
};

export const hasVendorContactsWithNote = (): boolean => {
  return vendorContacts.some(
    (contact) => contact.note !== null && !contact.deleted_at
  );
};

export const clearAllVendorContacts = (): void => {
  vendorContacts.length = 0;
};
