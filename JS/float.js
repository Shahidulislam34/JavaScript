let sal = 453.23513467;
console.log(sal.toFixed(5));//number of digits only after decimal places
console.log(sal.toPrecision(5));//total number of digits including integer part from left to right.

let base, height;
base = prompt("Enter the rectangle base: ");
height = prompt("Enter the rectangle height: ");
let area = (1/2) * base * height;
console.log("Triangle Area: " + area);