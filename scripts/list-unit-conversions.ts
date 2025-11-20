import { unitConversions } from "../src/mockdata/tb_unit_conversion";
import { getProductById } from "../src/mockdata/tb_product";

interface ConversionInfo {
  type: string;
  from: { unit: string; qty: number };
  to: { unit: string; qty: number };
  conversion_factor: number;
  is_default: boolean;
}

interface ProductConversions {
  product_id: string;
  product_name: string;
  product_sku: string;
  conversions: ConversionInfo[];
}

// Group by product
const productMap = new Map<string, ProductConversions>();

unitConversions.forEach((conv) => {
  const product = getProductById(conv.product_id);
  if (!product) return;

  if (!productMap.has(conv.product_id)) {
    productMap.set(conv.product_id, {
      product_id: conv.product_id,
      product_name: product.name,
      product_sku: product.sku,
      conversions: [],
    });
  }

  const productData = productMap.get(conv.product_id);
  if (productData) {
    productData.conversions.push({
      type: conv.unit_type,
      from: { unit: conv.from_unit_name, qty: conv.from_unit_qty },
      to: { unit: conv.to_unit_name, qty: conv.to_unit_qty },
      conversion_factor: conv.to_unit_qty / conv.from_unit_qty,
      is_default: conv.is_default,
    });
  }
});

// Display results
console.log("=".repeat(80));
console.log("PRODUCT UNIT CONVERSIONS WITH CONVERSION FACTORS");
console.log("=".repeat(80));

let productNum = 1;
productMap.forEach((data) => {
  console.log(`\n[${productNum}] Product: ${data.product_name} (SKU: ${data.product_sku})`);
  console.log("-".repeat(80));

  data.conversions.forEach((conv, idx) => {
    const defaultFlag = conv.is_default ? " [DEFAULT]" : "";
    console.log(`  ${idx + 1}. ${conv.type.toUpperCase()}${defaultFlag}`);
    console.log(`     From: ${conv.from.qty} ${conv.from.unit}`);
    console.log(`     To:   ${conv.to.qty} ${conv.to.unit}`);
    console.log(`     Conversion Factor: 1 ${conv.from.unit} = ${conv.conversion_factor} ${conv.to.unit}`);
    console.log();
  });

  productNum++;
});

console.log("=".repeat(80));
console.log(`Total Products with Unit Conversions: ${productMap.size}`);
console.log("=".repeat(80));
