export function getCalculatePriceInfo(
  qty: number,
  price: number,
  currency_rate: number = 1,
  tax_rate: number = 7,
  is_tax_adjustment: boolean = false,
  discount_rate: number = 0,
  is_discount_adjustment: boolean = false
) {
  const sub_total_price = qty * price;
  const base_sub_total_price = sub_total_price * currency_rate;
  const discount_amount = (qty * price * discount_rate) / 100;
  const base_discount_amount = discount_amount * currency_rate;
  const net_amount = qty * price - discount_amount;
  const base_net_amount = net_amount * currency_rate;
  const tax_amount = (qty * price * tax_rate) / 100;
  const base_tax_amount = tax_amount * currency_rate;
  const total_price = sub_total_price + tax_amount - discount_amount;
  const base_total_price =
    base_sub_total_price + base_tax_amount - base_discount_amount;

  const res = {
    qty: qty,
    price: price,
    currency_rate: currency_rate,
    tax_rate: tax_rate,
    discount_rate: discount_rate,

    base_price: price * currency_rate,

    sub_total_price: sub_total_price,
    base_sub_total_price: base_sub_total_price,

    discount_percentage: discount_rate,
    discount_amount: discount_amount,
    base_discount_amount: base_discount_amount,

    net_amount: net_amount,
    base_net_amount: base_net_amount,

    tax_percentage: tax_rate,
    tax_amount: tax_amount,
    base_tax_amount: base_tax_amount,

    total_price: total_price,
    base_total_price: base_total_price,
  };

  return res;
}
