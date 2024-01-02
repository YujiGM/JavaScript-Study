//If you wanna a variable that doesn't need any changes, use:

const X;

/* 
const variables cant be named twice in a code.
This is an example of const.
Make all the letters in uppercase in a const variable.
*/

const PI = 3.14159;
let radius;
let circumference;

radius = window.prompt("Enter the radius of a circle");
radius = Number(radius)

circumference = 2 * PI + radius;

console.log("The circumference is:", circumference);
