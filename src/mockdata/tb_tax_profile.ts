import { getUuidByName } from "./mapping.uuid";

export interface TaxProfile {
  id: string;
  name: string;
  tax_rate: number;
  is_active: boolean;
}

export const taxProfiles: TaxProfile[] = [
    {
    id: getUuidByName("TAX_PROFILE_01"),
    name: "VAT 7%",
    tax_rate: 7,
    is_active: true,
  },
  {
    id: getUuidByName("TAX_PROFILE_02"),
    name: "VAT 10%",
    tax_rate: 10,
    is_active: true,
  },
  {
    id: getUuidByName("TAX_PROFILE_03"),
    name: "None",
    tax_rate: 0,
    is_active: true,
  },
];

export const getTaxProfileById = (id: string): TaxProfile | undefined => {
  return taxProfiles.find((taxProfile) => taxProfile.id === id);
};

export const getTaxProfileByName = (name: string): TaxProfile | undefined => {
  return taxProfiles.find((taxProfile) => taxProfile.name === name);
};


export const getTaxProfileByTaxRate = (taxRate: number): TaxProfile | undefined => {
  return taxProfiles.find((taxProfile) => taxProfile.tax_rate === taxRate);
};

export const getTaxProfileByIsActive = (isActive: boolean): TaxProfile | undefined => {
  return taxProfiles.find((taxProfile) => taxProfile.is_active === isActive);
};

