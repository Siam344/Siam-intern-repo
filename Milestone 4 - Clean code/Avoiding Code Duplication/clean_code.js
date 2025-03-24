function calculateSubtotal(items) {
    return items.reduce((acc, item) => acc + item.price * item.quantity, 0);
}

function calculateDiscountedTotal(subtotal) {
    return subtotal > 100 ? subtotal * 0.9 : subtotal;
}

function calculateTax(total) {
    return total * 0.15;
}

function calculateTotal(items, withDiscount = false) {
    const subtotal = calculateSubtotal(items);
    const total = withDiscount ? calculateDiscountedTotal(subtotal) : subtotal;
    const tax = calculateTax(total);
    return total + tax;
}
