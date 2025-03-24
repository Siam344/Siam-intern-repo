function calculateTotalPrice(items, discount) {
  let total = 0; for (let i = 0; i < items.length; i++) { total += items[i].price * items[i].quantity; }
  if (discount) { total -= (total * (discount / 100)); }console.log(`Total price: ${total}`); return total;
}

const shoppingCart = [{ name: 'Apple', price: 1.5, quantity: 3 }, { name: 'Banana', price: 0.5, quantity: 6 }, { name: 'Orange', price: 1.0, quantity: 4 }];
const finalPrice = calculateTotalPrice(shoppingCart, 10); console.log(`Final Price: ${finalPrice}`);
