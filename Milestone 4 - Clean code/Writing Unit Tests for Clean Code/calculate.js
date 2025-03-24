function add(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error("Invalid input: both arguments must be numbers.");
    }
    return a + b;
}

function subtract(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error("Invalid input: both arguments must be numbers.");
    }
    return a - b;
}

module.exports = { add, subtract };
