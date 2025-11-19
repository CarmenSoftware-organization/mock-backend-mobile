import { getUuidByName } from "../src/mockdata/mapping.uuid";
import { getProductById } from "../src/mockdata/tb_product";
import { getUnitById } from "../src/mockdata/tb_unit";
import {
  getUnitConversionFactor,
  getUnitToUnitConversionFactor,
  convertQuantity,
} from "../src/mockdata/temp_unit_factor";

console.log("=".repeat(80));
console.log("UNIT CONVERSION FACTOR TESTING");
console.log("=".repeat(80));

// Test data setup
const product1Id = getUuidByName("PRODUCT_01");
const product2Id = getUuidByName("PRODUCT_02");

const unit1Id = getUuidByName("UNIT_01"); // กิโลกรัม
const unit2Id = getUuidByName("UNIT_02"); // กรัม
const unit3Id = getUuidByName("UNIT_03"); // ลิตร
const unit4Id = getUuidByName("UNIT_04"); // หีบ
const unit5Id = getUuidByName("UNIT_05"); // ขวด

const product1 = getProductById(product1Id);
const product2 = getProductById(product2Id);

const unit1 = getUnitById(unit1Id);
const unit2 = getUnitById(unit2Id);
const unit3 = getUnitById(unit3Id);
const unit4 = getUnitById(unit4Id);
const unit5 = getUnitById(unit5Id);

console.log("\n📦 TEST PRODUCTS:");
console.log("-".repeat(80));
console.log(`Product 1: ${product1?.name} (${product1?.sku})`);
console.log(`  Inventory Unit: ${product1?.inventory_unit_name}`);
console.log(`\nProduct 2: ${product2?.name} (${product2?.sku})`);
console.log(`  Inventory Unit: ${product2?.inventory_unit_name}`);

console.log("\n📏 TEST UNITS:");
console.log("-".repeat(80));
console.log(`Unit 1: ${unit1?.name} (${unit1?.abbreviation})`);
console.log(`Unit 2: ${unit2?.name} (${unit2?.abbreviation})`);
console.log(`Unit 3: ${unit3?.name} (${unit3?.abbreviation})`);
console.log(`Unit 4: ${unit4?.name} (${unit4?.abbreviation})`);
console.log(`Unit 5: ${unit5?.name} (${unit5?.abbreviation})`);

console.log("\n\n🔢 TEST 1: getUnitConversionFactor()");
console.log("=".repeat(80));
console.log("Get conversion factor from a specific unit to inventory unit\n");

// Product 1 tests
console.log(`Product: ${product1?.name}`);
console.log("-".repeat(80));

const factor1_1 = getUnitConversionFactor(product1Id, unit1Id);
console.log(`  ${unit1?.name} → Inventory Unit: ${factor1_1}x`);

const factor1_2 = getUnitConversionFactor(product1Id, unit2Id);
console.log(`  ${unit2?.name} → Inventory Unit: ${factor1_2}x`);

const factor1_3 = getUnitConversionFactor(product1Id, unit3Id);
console.log(`  ${unit3?.name} → Inventory Unit: ${factor1_3}x`);

const factor1_4 = getUnitConversionFactor(product1Id, unit4Id);
console.log(`  ${unit4?.name} → Inventory Unit: ${factor1_4}x`);

// Product 2 tests
console.log(`\nProduct: ${product2?.name}`);
console.log("-".repeat(80));

const factor2_1 = getUnitConversionFactor(product2Id, unit1Id);
console.log(`  ${unit1?.name} → Inventory Unit: ${factor2_1}x`);

const factor2_2 = getUnitConversionFactor(product2Id, unit2Id);
console.log(`  ${unit2?.name} → Inventory Unit: ${factor2_2}x`);

const factor2_3 = getUnitConversionFactor(product2Id, unit3Id);
console.log(`  ${unit3?.name} → Inventory Unit: ${factor2_3}x`);

const factor2_5 = getUnitConversionFactor(product2Id, unit5Id);
console.log(`  ${unit5?.name} → Inventory Unit: ${factor2_5}x`);

console.log("\n\n🔄 TEST 2: getUnitToUnitConversionFactor()");
console.log("=".repeat(80));
console.log("Get conversion factor between two specific units\n");

console.log(`Product: ${product1?.name}`);
console.log("-".repeat(80));

const conversion1 = getUnitToUnitConversionFactor(product1Id, unit1Id, unit2Id);
console.log(`  1 ${unit1?.name} = ${conversion1} ${unit2?.name}`);

const conversion2 = getUnitToUnitConversionFactor(product1Id, unit1Id, unit3Id);
console.log(`  1 ${unit1?.name} = ${conversion2} ${unit3?.name}`);

const conversion3 = getUnitToUnitConversionFactor(product1Id, unit1Id, unit4Id);
console.log(`  1 ${unit1?.name} = ${conversion3} ${unit4?.name}`);

// Reverse conversions
const conversion4 = getUnitToUnitConversionFactor(product1Id, unit2Id, unit1Id);
console.log(`  1 ${unit2?.name} = ${conversion4} ${unit1?.name}`);

const conversion5 = getUnitToUnitConversionFactor(product1Id, unit3Id, unit1Id);
console.log(`  1 ${unit3?.name} = ${conversion5} ${unit1?.name}`);

console.log(`\nProduct: ${product2?.name}`);
console.log("-".repeat(80));

const conversion6 = getUnitToUnitConversionFactor(product2Id, unit1Id, unit3Id);
console.log(`  1 ${unit1?.name} = ${conversion6} ${unit3?.name}`);

const conversion7 = getUnitToUnitConversionFactor(product2Id, unit1Id, unit5Id);
console.log(`  1 ${unit1?.name} = ${conversion7} ${unit5?.name}`);

const conversion8 = getUnitToUnitConversionFactor(product2Id, unit2Id, unit3Id);
console.log(`  1 ${unit2?.name} = ${conversion8} ${unit3?.name}`);

console.log("\n\n📊 TEST 3: convertQuantity()");
console.log("=".repeat(80));
console.log("Convert actual quantities between units\n");

console.log(`Product: ${product1?.name}`);
console.log("-".repeat(80));

const qty1 = convertQuantity(product1Id, 5, unit1Id, unit2Id);
console.log(`  5 ${unit1?.name} = ${qty1} ${unit2?.name}`);

const qty2 = convertQuantity(product1Id, 2.5, unit1Id, unit3Id);
console.log(`  2.5 ${unit1?.name} = ${qty2} ${unit3?.name}`);

const qty3 = convertQuantity(product1Id, 3, unit1Id, unit4Id);
console.log(`  3 ${unit1?.name} = ${qty3} ${unit4?.name}`);

const qty4 = convertQuantity(product1Id, 100, unit2Id, unit1Id);
console.log(`  100 ${unit2?.name} = ${qty4} ${unit1?.name}`);

console.log(`\nProduct: ${product2?.name}`);
console.log("-".repeat(80));

const qty5 = convertQuantity(product2Id, 10, unit1Id, unit3Id);
console.log(`  10 ${unit1?.name} = ${qty5} ${unit3?.name}`);

const qty6 = convertQuantity(product2Id, 5, unit1Id, unit5Id);
console.log(`  5 ${unit1?.name} = ${qty6} ${unit5?.name}`);

const qty7 = convertQuantity(product2Id, 50, unit2Id, unit3Id);
console.log(`  50 ${unit2?.name} = ${qty7} ${unit3?.name}`);

console.log("\n" + "=".repeat(80));
console.log("✅ UNIT CONVERSION FACTOR TESTING COMPLETE");
console.log("=".repeat(80));
