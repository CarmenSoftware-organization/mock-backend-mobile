import { unitConversions } from "./tb_unit_conversion";
import { getProductById } from "./tb_product";

/**
 * Get unit conversion factor for a specific product and unit
 * This function returns the conversion factor to convert from the given unit to the product's inventory unit
 *
 * @param productId - The product UUID
 * @param unitId - The unit UUID to convert from
 * @param unitType - Optional: filter by unit type ("ingredient_unit", "order_unit", "inventory_unit", "other")
 * @returns Conversion factor (default: 1.0 if no conversion found)
 *
 * @example
 * // If 1 kg = 1000 g (inventory unit)
 * getUnitConversionFactor(productId, kgUnitId) // returns 1000
 */
export function getUnitConversionFactor(
  productId: string,
  unitId: string,
  unitType?: "ingredient_unit" | "order_unit" | "inventory_unit" | "other"
): number {
  // Get product to check inventory unit
  const product = getProductById(productId);
  if (!product) {
    return 1.0; // Product not found, return default
  }

  // If the unit is the inventory unit itself, return 1.0
  if (unitId === product.inventory_unit_id) {
    return 1.0;
  }

  // Find conversion where this unit is either from_unit or to_unit
  const conversions = unitConversions.filter((conv) => {
    const matchesProduct = conv.product_id === productId;
    const matchesUnit = conv.from_unit_id === unitId || conv.to_unit_id === unitId;
    const matchesType = !unitType || conv.unit_type === unitType;
    const isActive = !conv.deleted_at;

    return matchesProduct && matchesUnit && matchesType && isActive;
  });

  if (conversions.length === 0) {
    return 1.0; // No conversion found, return default
  }

  // Prefer default conversions
  const conversion = conversions.find((c) => c.is_default) || conversions[0];

  // Calculate conversion factor based on whether unitId is from or to
  if (conversion.from_unit_id === unitId) {
    // Converting from this unit to inventory unit
    // Factor = to_qty / from_qty
    return conversion.to_unit_qty / conversion.from_unit_qty;
  } else {
    // Converting to this unit from inventory unit
    // Factor = from_qty / to_qty (inverse)
    return conversion.from_unit_qty / conversion.to_unit_qty;
  }
}

/**
 * Get conversion factor between two specific units for a product
 *
 * @param productId - The product UUID
 * @param fromUnitId - The source unit UUID
 * @param toUnitId - The target unit UUID
 * @returns Conversion factor to convert from fromUnit to toUnit
 *
 * @example
 * // If 1 kg = 1000 g
 * getUnitToUnitConversionFactor(productId, kgUnitId, gUnitId) // returns 1000
 */
export function getUnitToUnitConversionFactor(
  productId: string,
  fromUnitId: string,
  toUnitId: string
): number {
  // If same unit, return 1.0
  if (fromUnitId === toUnitId) {
    return 1.0;
  }

  // Find direct conversion
  const directConversion = unitConversions.find((conv) => {
    return (
      conv.product_id === productId &&
      conv.from_unit_id === fromUnitId &&
      conv.to_unit_id === toUnitId &&
      !conv.deleted_at
    );
  });

  if (directConversion) {
    return directConversion.to_unit_qty / directConversion.from_unit_qty;
  }

  // Find reverse conversion
  const reverseConversion = unitConversions.find((conv) => {
    return (
      conv.product_id === productId &&
      conv.from_unit_id === toUnitId &&
      conv.to_unit_id === fromUnitId &&
      !conv.deleted_at
    );
  });

  if (reverseConversion) {
    // Inverse of the reverse conversion
    return reverseConversion.from_unit_qty / reverseConversion.to_unit_qty;
  }

  // No direct conversion found, try to convert through inventory unit
  const fromFactor = getUnitConversionFactor(productId, fromUnitId);
  const toFactor = getUnitConversionFactor(productId, toUnitId);

  // Convert from -> inventory -> to
  return fromFactor / toFactor;
}

/**
 * Convert quantity from one unit to another for a specific product
 *
 * @param productId - The product UUID
 * @param quantity - The quantity to convert
 * @param fromUnitId - The source unit UUID
 * @param toUnitId - The target unit UUID
 * @returns Converted quantity in the target unit
 *
 * @example
 * // Convert 2 kg to grams (if 1 kg = 1000 g)
 * convertQuantity(productId, 2, kgUnitId, gUnitId) // returns 2000
 */
export function convertQuantity(
  productId: string,
  quantity: number,
  fromUnitId: string,
  toUnitId: string
): number {
  const conversionFactor = getUnitToUnitConversionFactor(productId, fromUnitId, toUnitId);
  return quantity * conversionFactor;
}