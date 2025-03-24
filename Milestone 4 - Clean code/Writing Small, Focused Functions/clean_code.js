function calculateItemTotal(item) {
    return item.price * item.quantity;
}

function applyDiscount(total) {
    return total > 100 ? total * 0.9 : total;
}

function calculateTax(total) {
    return total * 0.15;
}

function formatReceipt(order, total, tax) {
    let receipt = "Order Receipt:\n";
    order.items.forEach(item => {
        let itemTotal = calculateItemTotal(item);
        receipt += `${item.name} x${item.quantity} = $${itemTotal}\n`;
    });
    if (total !== applyDiscount(total)) {
        receipt += "Discount applied: 10%\n";
    }
    receipt += `Tax: $${tax.toFixed(2)}\n`;
    receipt += `Total: $${total.toFixed(2)}`;
    return receipt;
}

function processOrder(order) {
    let total = order.items.reduce((acc, item) => acc + calculateItemTotal(item), 0);
    total = applyDiscount(total);
    const tax = calculateTax(total);
    total += tax;
    const receipt = formatReceipt(order, total, tax);
    console.log(receipt);
}
