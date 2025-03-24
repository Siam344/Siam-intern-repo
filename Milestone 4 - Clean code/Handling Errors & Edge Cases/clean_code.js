function calculateCircleArea(radius) {
    if (radius <= 0) throw new Error("Radius must be a positive number.");
    return Math.PI * radius * radius;
}

function calculateRectangleArea(width, height) {
    if (width <= 0 || height <= 0) throw new Error("Width and height must be positive numbers.");
    return width * height;
}

function calculateTriangleArea(base, height) {
    if (base <= 0 || height <= 0) throw new Error("Base and height must be positive numbers.");
    return 0.5 * base * height;
}

function calculateArea(shape, dimensions) {
    switch (shape) {
        case "circle":
            return calculateCircleArea(dimensions.radius);
        case "rectangle":
            return calculateRectangleArea(dimensions.width, dimensions.height);
        case "triangle":
            return calculateTriangleArea(dimensions.base, dimensions.height);
        default:
            throw new Error(`Unsupported shape: ${shape}`);
    }
}

try {
    console.log("Circle Area:", calculateArea("circle", { radius: 5 }));
    console.log("Rectangle Area:", calculateArea("rectangle", { width: 10, height: 5 }));
    console.log("Triangle Area:", calculateArea("triangle", { base: 8, height: 4 }));
    console.log("Unknown Shape Area:", calculateArea("hexagon", { side: 6 }));
} catch (error) {
    console.error("Error calculating area:", error.message);
}
