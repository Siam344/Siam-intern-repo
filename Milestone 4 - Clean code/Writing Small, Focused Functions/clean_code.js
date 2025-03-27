// Constants to avoid magic numbers and strings
const DISCOUNT_THRESHOLD = 100;
const DISCOUNT_RATE = 0.1;
const TAX_RATE = 0.15;
const RECEIPT_HEADER = "Order Receipt:\n";
const DISCOUNT_MESSAGE = `Discount applied: ${DISCOUNT_RATE * 100}%\n`;
const TAX_LABEL = "Tax: ";
const TOTAL_LABEL = "Total: ";

function calculateItemTotal(item) {
  return item.price * item.quantity;
}

function applyDiscount(total) {
  return total > DISCOUNT_THRESHOLD ? total * (1 - DISCOUNT_RATE) : total;
}

function calculateTax(total) {
  return total * TAX_RATE;
}

function formatReceipt(order, total, tax) {
  let receipt = RECEIPT_HEADER;
  order.items.forEach((item) => {
    let itemTotal = calculateItemTotal(item);
    receipt += `${item.name} x${item.quantity} = $${itemTotal.toFixed(2)}\n`;
  });
  if (total !== applyDiscount(total)) {
    receipt += DISCOUNT_MESSAGE;
  }
  receipt += `${TAX_LABEL}$${tax.toFixed(2)}\n`;
  receipt += `${TOTAL_LABEL}$${total.toFixed(2)}`;
  return receipt;
}

function processOrder(order) {
  let total = order.items.reduce(
    (acc, item) => acc + calculateItemTotal(item),
    0
  );
  total = applyDiscount(total);
  const tax = calculateTax(total);
  total += tax;
  const receipt = formatReceipt(order, total, tax);
  console.log(receipt);
}
