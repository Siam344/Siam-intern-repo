function processOrder(order) {
    let total = 0;
    let receipt = "Order Receipt:\n";
    for (let i = 0; i < order.items.length; i++) {
        let item = order.items[i];
        let itemTotal = item.price * item.quantity;
        total += itemTotal;
        receipt += `${item.name} x${item.quantity} = $${itemTotal}\n`;
    }
    if (total > 100) {
        total = total * 0.9;
        receipt += "Discount applied: 10%\n";
    }
    let tax = total * 0.15;
    total += tax;
    receipt += `Tax: $${tax.toFixed(2)}\n`;
    receipt += `Total: $${total.toFixed(2)}`;
    console.log(receipt);
}
