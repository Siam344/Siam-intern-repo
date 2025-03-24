function calculateCylinderVolume(radius, height) {
    const PI = 3.14;
    const baseArea = PI * radius * radius;
    const volume = baseArea * height;
    return volume;
}

const radius = 5;
const height = 10;
const cylinderVolume = calculateCylinderVolume(radius, height);
console.log("Cylinder Volume: " + cylinderVolume);
