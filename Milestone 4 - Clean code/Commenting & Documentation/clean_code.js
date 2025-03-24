/**
 * Calculate a transformed value based on the user's age.
 * @param {number} age - The age of the user.
 * @returns {number} - The transformed value.
 */
function calculateTransformedValue(age) {
    const doubledAge = age * 2;
    const dividedAge = doubledAge / 3;
    return dividedAge + 10;
}

/**
 * Process and display user information with calculated values.
 * @param {Array} users - An array of user objects containing name and age.
 */
function displayUserInfo(users) {
    users.forEach(user => {
        const transformedValue = calculateTransformedValue(user.age);
        console.log(`User: ${user.name}, Value: ${transformedValue}`);
    });
}
