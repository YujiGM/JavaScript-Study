//The objetive here is create a code that calculates the hypotenuse of a triangle.

let cat_A;

let cat_B;

cat_A = window.prompt("Insert the value of the first cathetus.");
cat_A = Number(cat_A);
console.log(cat_A);

cat_B = window.prompt("Insert the value of the second cathetus.");
cat_B = Number(cat_B);
console.log(cat_B)

let calculus;

calculus = Math.sqrt(Math.pow(cat_A, 2) + Math.pow(cat_B, 2));
calculus = Number(calculus);
console.log(calculus)



document.getElementById("p1").innerHTML = "The value of the hyphotenuse is : " + calculus;
