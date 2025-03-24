/**
 * Calculates the total price of items in the shopping cart with an optional discount.
 * @param {Array} items - Array of objects containing item price and quantity.
 * @param {number} discount - Discount percentage to apply.
 * @returns {number} - The total calculated price after discount.
 */
function calculateTotalPrice(items, discount = 0) {
  let total = 0;

  // Calculate the total price of all items
  for (let i = 0; i < items.length; i++) {
    total += items[i].price * items[i].quantity;
  }

  // Apply discount if available
  if (discount) {
    total -= total * (discount / 100);
  }

  console.log(`Total price: ${total}`);
  return total;
}

// Example usage
const shoppingCart = [
  { name: 'Apple', price: 1.5, quantity: 3 },
  { name: 'Banana', price: 0.5, quantity: 6 },
  { name: 'Orange', price: 1.0, quantity: 4 },
];
const finalPrice = calculateTotalPrice(shoppingCart, 10);
console.log(`Final Price: ${finalPrice}`);
