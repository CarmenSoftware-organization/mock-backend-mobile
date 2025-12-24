# Unit Conversion System Guide

## Overview

The unit conversion system provides comprehensive functionality for converting quantities between different units of measurement for products in the mock backend system.

## Key Changes

### 1. Data Type Conversion (tb_unit_conversion.ts)

**Changed from string to number:**

- `from_unit_qty: string` → `from_unit_qty: number`
- `to_unit_qty: string` → `to_unit_qty: number`

**Benefits:**

- Improved type safety
- Better performance (no runtime string-to-number conversions)
- Direct numeric operations without parsing

## Available Functions

### 1. `getUnitConversionFactor(productId, unitId, unitType?)`

Get the conversion factor from a specific unit to the product's inventory unit.

**Parameters:**

- `productId` (string) - Product UUID
- `unitId` (string) - Unit UUID to convert from
- `unitType` (optional) - Filter by unit type: "ingredient_unit", "order_unit", "inventory_unit", "other"

**Returns:**

- `number` - Conversion factor (default: 1.0 if no conversion found)

**Example:**

```typescript
import { getUnitConversionFactor } from '@mockdata/index';

// If 1 kg = 1000 g (where g is the inventory unit)
const factor = getUnitConversionFactor(productId, kgUnitId);
// Returns: 1000
```

### 2. `getUnitToUnitConversionFactor(productId, fromUnitId, toUnitId)`

Get the conversion factor between two specific units for a product.

**Parameters:**

- `productId` (string) - Product UUID
- `fromUnitId` (string) - Source unit UUID
- `toUnitId` (string) - Target unit UUID

**Returns:**

- `number` - Conversion factor to convert from fromUnit to toUnit

**Features:**

- Handles direct conversions (A → B)
- Handles reverse conversions (B → A calculated as inverse)
- Handles indirect conversions through inventory unit (A → Inventory → B)

**Example:**

```typescript
import { getUnitToUnitConversionFactor } from '@mockdata/index';

// If 1 kg = 1000 g
const factor = getUnitToUnitConversionFactor(productId, kgUnitId, gUnitId);
// Returns: 1000

// Reverse conversion
const inverseFactor = getUnitToUnitConversionFactor(productId, gUnitId, kgUnitId);
// Returns: 0.001
```

### 3. `convertQuantity(productId, quantity, fromUnitId, toUnitId)`

Convert a quantity from one unit to another for a specific product.

**Parameters:**

- `productId` (string) - Product UUID
- `quantity` (number) - Quantity to convert
- `fromUnitId` (string) - Source unit UUID
- `toUnitId` (string) - Target unit UUID

**Returns:**

- `number` - Converted quantity in the target unit

**Example:**

```typescript
import { convertQuantity } from '@mockdata/index';

// Convert 2 kg to grams (if 1 kg = 1000 g)
const converted = convertQuantity(productId, 2, kgUnitId, gUnitId);
// Returns: 2000
```

## Unit Conversion Data Structure

### UnitConversion Interface

```typescript
interface UnitConversion {
  id: string;
  product_id: string;
  unit_type: "ingredient_unit" | "order_unit" | "inventory_unit" | "other";
  from_unit_id: string;
  from_unit_name: string;
  from_unit_qty: number;        // Now numeric!
  to_unit_id: string;
  to_unit_name: string;
  to_unit_qty: number;          // Now numeric!
  is_default: boolean;
  is_active: boolean;
  // ... other fields
}
```

## Current Mock Data

### Product 1: Beef Tenderloin (PRODUCT_CODE_01)

1. **Ingredient Unit**: 1 กิโลกรัม → 5 กรัม (factor: 5)
2. **Order Unit** [DEFAULT]: 1 กิโลกรัม → 12 ลิตร (factor: 12)
3. **Ingredient Unit** [DEFAULT]: 1 กิโลกรัม → 10 หีบ (factor: 10)

### Product 2: Ground Beef A (PRODUCT_CODE_02)

1. **Order Unit** [DEFAULT]: 1 กรัม → 12 ลิตร (factor: 12)
2. **Ingredient Unit** [DEFAULT]: 1 กิโลกรัม → 10 ลิตร (factor: 10)
3. **Order Unit** [DEFAULT]: 1 กิโลกรัม → 10 ขวด (factor: 10)

## Usage Examples

### Example 1: Get Conversion Factor

```typescript
import { getUnitConversionFactor } from '@mockdata/index';
import { getUuidByName } from '@mockdata/mapping.uuid';

const productId = getUuidByName("PRODUCT_01");
const unitId = getUuidByName("UNIT_01");

const factor = getUnitConversionFactor(productId, unitId);
console.log(`Conversion factor: ${factor}`);
```

### Example 2: Convert Between Units

```typescript
import { getUnitToUnitConversionFactor } from '@mockdata/index';
import { getUuidByName } from '@mockdata/mapping.uuid';

const productId = getUuidByName("PRODUCT_01");
const kgId = getUuidByName("UNIT_01");
const gramId = getUuidByName("UNIT_02");

const factor = getUnitToUnitConversionFactor(productId, kgId, gramId);
console.log(`1 kg = ${factor} grams`);
```

### Example 3: Convert Quantities

```typescript
import { convertQuantity } from '@mockdata/index';
import { getUuidByName } from '@mockdata/mapping.uuid';

const productId = getUuidByName("PRODUCT_01");
const kgId = getUuidByName("UNIT_01");
const litersId = getUuidByName("UNIT_03");

// Convert 5 kg to liters
const result = convertQuantity(productId, 5, kgId, litersId);
console.log(`5 kg = ${result} liters`);
```

### Example 4: Filter by Unit Type

```typescript
import { getUnitConversionFactor } from '@mockdata/index';
import { getUuidByName } from '@mockdata/mapping.uuid';

const productId = getUuidByName("PRODUCT_01");
const unitId = getUuidByName("UNIT_01");

// Get conversion for order units only
const orderFactor = getUnitConversionFactor(productId, unitId, "order_unit");

// Get conversion for ingredient units only
const ingredientFactor = getUnitConversionFactor(productId, unitId, "ingredient_unit");
```

## API Integration Example

```typescript
import { Elysia, t } from "elysia";
import { convertQuantity } from "@mockdata/index";

export default (app: Elysia) =>
  app.post(
    "/api/convert-quantity",
    async ({ body }) => {
      const { product_id, quantity, from_unit_id, to_unit_id } = body;

      const converted = convertQuantity(
        product_id,
        quantity,
        from_unit_id,
        to_unit_id
      );

      return {
        success: true,
        data: {
          original_quantity: quantity,
          original_unit_id: from_unit_id,
          converted_quantity: converted,
          converted_unit_id: to_unit_id,
        },
      };
    },
    {
      body: t.Object({
        product_id: t.String(),
        quantity: t.Number(),
        from_unit_id: t.String(),
        to_unit_id: t.String(),
      }),
    }
  );
```

## Testing Scripts

### Test Unit Conversion Factors

```bash
bun run scripts/test-unit-conversion-factor.ts
```

This script tests all three conversion functions with sample data.

### List All Unit Conversions

```bash
bun run scripts/list-unit-conversions.ts
```

This script displays all products and their unit conversions with conversion factors.

## Implementation Notes

1. **Default Preference**: When multiple conversions exist for the same unit, the function prefers conversions marked as `is_default: true`.

2. **Indirect Conversions**: If no direct conversion exists between two units, the system attempts to convert through the inventory unit:
   - A → Inventory Unit
   - Inventory Unit → B
   - Combined factor = (A→Inv) / (B→Inv)

3. **Type Safety**: All quantity fields are now `number` type, eliminating the need for `parseFloat()` calls.

4. **Error Handling**: Functions return `1.0` as the default factor when:
   - Product not found
   - No conversion found
   - Converting from inventory unit to itself

## Files Modified

1. `src/mockdata/tb_unit_conversion.ts` - Updated data types and removed `parseFloat()` calls
2. `src/mockdata/temp_unit_factor.ts` - Implemented conversion functions
3. `src/mockdata/tb_product.ts` - Removed `parseFloat()` for unit conversions
4. `src/mockdata/index.ts` - Exported new conversion functions

## Files Created

1. `scripts/test-unit-conversion-factor.ts` - Comprehensive test suite
2. `scripts/list-unit-conversions.ts` - Display all conversions
3. `docs/UNIT_CONVERSION_GUIDE.md` - This documentation
