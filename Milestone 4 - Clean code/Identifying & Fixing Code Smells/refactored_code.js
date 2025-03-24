// Refactored Code - Eliminated Code Smells
const DISCOUNT_RATES = {
    regular: 0.1,
    premium: 0.2,
    vip: 0.3,
};

function calculateDiscount(price, userType) {
    const discount = DISCOUNT_RATES[userType];
    if (discount) {
        const finalPrice = price - price * discount;
        console.log(`Discounted Price for ${userType.charAt(0).toUpperCase() + userType.slice(1)} User: $${finalPrice}`);
    } else {
        console.error("Invalid user type");
    }
}

calculateDiscount(100, "regular");
calculateDiscount(100, "premium");
calculateDiscount(100, "vip");
