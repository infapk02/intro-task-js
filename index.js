// Task one
// You went to the supermarket to buy some oranges and apples. Calculate how much money the shopkeeper will return.

var myBalance = 1000;
var applePrice = 400;
var orangePrice = 300;

var totalCost = applePrice + orangePrice;

var remainingBalance = myBalance - totalCost;

console.log("Shopkeeper will return : " + remainingBalance);

// task two
// Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and Bangla of a student.

var math = 75.25;
var biology = 65;
var chemistry = 80;
var physics = 35.45;
var bangla = 99.5;

var totalMarks = math + biology + chemistry + physics + bangla;
var averageMarks = totalMarks / 5;
console.log(averageMarks.toFixed(2));

// task three
// You task is to divide the given number by 5 and show the remainder as the output.

var num = 119;
var remainder = num % 5;
console.log(remainder);

// task four
// What will be the result of the following codes

var a = isNaN("11");
var b = isNaN(2 - 10);

console.log(
  "isNaN() checks whether a value is Not a Number. If the value is Not a Number, it returns true; otherwise, it returns false. In this case, '11' is a string but isNaN() convert this string into a number, so isNaN('11') will return false.",
  a,
);
console.log(
  "isNaN() checks whether a value is Not a Number. If the value is Not a Number, it returns true; otherwise, it returns false. In this case, 2 - 10 equals -8 which is a number, so isNaN(2 - 10) will also return false.",
  b,
);
