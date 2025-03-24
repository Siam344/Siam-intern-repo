function calculateArea(shape, dimensions) {
    if (shape === "circle") {
        return 3.14 * dimensions.radius * dimensions.radius;
    } else if (shape === "rectangle") {
        return dimensions.width * dimensions.height;
    } else if (shape === "triangle") {
        return 0.5 * dimensions.base * dimensions.height;
    } else {
        console.log("Unknown shape!");
        return null;
    }
}

let circleArea = calculateArea("circle", { radius: 5 });
console.log("Circle Area:", circleArea);

let rectangleArea = calculateArea("rectangle", { width: 10, height: 5 });
console.log("Rectangle Area:", rectangleArea);

let triangleArea = calculateArea("triangle", { base: 8, height: 4 });
console.log("Triangle Area:", triangleArea);

let unknownArea = calculateArea("hexagon", { side: 6 });
console.log("Unknown Shape Area:", unknownArea);
