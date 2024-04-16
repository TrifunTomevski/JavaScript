// Exercise II
function Cube(sideLength) {
    this.sideLength = sideLength;
    this.calculateArea = function () {
        return 6 * Math.pow(this.sideLength, 2);
    };
    this.calculatePerimeter = function () {
        return 12 * this.sideLength;
    };
}

const cubeSideLength = +prompt("Enter the size of the sides of the cube:");
const cube = new Cube(cubeSideLength);

console.log("Cube area: " + cube.calculateArea());
console.log("Cube perimeter: " + cube.calculatePerimeter());
