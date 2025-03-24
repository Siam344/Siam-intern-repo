const { add, subtract } = require('../calculate');

describe("Addition Function", () => {
    test("adds two positive numbers", () => {
        expect(add(2, 3)).toBe(5);
    });

    test("adds a positive and a negative number", () => {
        expect(add(5, -2)).toBe(3);
    });

    test("throws an error for non-number input", () => {
        expect(() => add(2, "3")).toThrow("Invalid input: both arguments must be numbers.");
    });
});

describe("Subtraction Function", () => {
    test("subtracts two positive numbers", () => {
        expect(subtract(5, 3)).toBe(2);
    });

    test("subtracts a larger number from a smaller one", () => {
        expect(subtract(3, 5)).toBe(-2);
    });

    test("throws an error for non-number input", () => {
        expect(() => subtract("5", 3)).toThrow("Invalid input: both arguments must be numbers.");
    });
});
