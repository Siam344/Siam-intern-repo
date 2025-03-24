// Code with Smells - Long Functions, Magic Numbers, and Duplicated Code
function calculateDiscount(price, userType) {
    if (userType === "regular") {
        let discount = price * 0.1;
        let finalPrice = price - discount;
        console.log("Discounted Price for Regular User: $" + finalPrice);
    } else if (userType === "premium") {
        let discount = price * 0.2;
        let finalPrice = price - discount;
        console.log("Discounted Price for Premium User: $" + finalPrice);
    } else if (userType === "vip") {
        let discount = price * 0.3;
        let finalPrice = price - discount;
        console.log("Discounted Price for VIP User: $" + finalPrice);
    } else {
        console.log("Invalid user type");
    }
}

calculateDiscount(100, "regular");
calculateDiscount(100, "premium");
calculateDiscount(100, "vip");
