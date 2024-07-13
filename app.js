// Assignment 1

var num1 = 10;
var num2 = 35;

var sum = num1 + num2;
console.log('Sum of ' + num1 + ' and ' + num2 + ' is ' + sum);

// Assignment 2

var subtract = num1 - num2;
console.log('Subtraction of ' + num1 + ' and ' + num2 + ' is ' + subtract);

var product = num1 * num2;
console.log('Product of ' + num1 + ' and ' + num2 + ' is ' + product);

var divide = num1 / num2;
console.log('Division of ' + num1 + ' and ' + num2 + ' is ' + divide);

var modulus = num1 % num2;
console.log('Modulus of ' + num1 + ' and ' + num2 + ' is ' + modulus);

// Assignment 3

var  num

console.log('Value after variable declaration is ' + num);

num = 5;

console.log('Initial value: ' + num);

var num = ++num;

console.log('Value after increment is: ' + num);

var num = num +  7;

console.log('Value after addition is: ' + num);

var num = --num;

console.log('Value after decrement is: ' + num);

var num = num % 3;

console.log('The remainder is: ' + num);

// Assignment 4

var ticketPrice = 600;
var noOfTickets = 5;
var costOf5Tickets = ticketPrice * noOfTickets;

console.log('Total cost to buy ' + noOfTickets + ' tickets to a movie is ' + costOf5Tickets + 'PKR');

// Assignment 5


// Assignment 6

var celsius = 25;
var celToFah = (celsius * 9/5) + 32;
console.log(celsius + 'C is = ' + celToFah + 'F');

var fahrenheit = 70;
var fahTOCel = (fahrenheit - 32) * 5/9;
console.log(fahrenheit + 'F is = ' + fahTOCel + 'C');

// Assignment 7

var p1 = 650;
console.log('Price of item 1 is ' + p1);

var q1 = 3;
console.log('Quantity of item 1 is ' + q1);

var p2 = 100;
console.log('Price of item 2 is ' + p2);

var q2 = 7;
console.log('Quantity of item 2 is ' + q2);

var charges = 100;
console.log('Shipping charges are ' + charges);

var totalCost = (p1 * q1) + (p2 * q2) + charges;
console.log('Total cost of your order is ' + totalCost);

// Assignment 8

var totalMarks = 980;
console.log('Total Marks: ' + totalMarks);

var obtainedMarks = 804;
console.log('Obtained Marks: ' + obtainedMarks);

var percentage = obtainedMarks / totalMarks * 100;
console.log('Percentage: ' + percentage);

// Assignment 9

var totalCurrencyInPKR = (10 * 104.80) + (25 * 28);
console.log('Total currency in PKR: ' + totalCurrencyInPKR);

// Assignment 10

var num3 = 200;
var num3 = ((num3 + 5) * 10) / 2;
console.log(num3);

// Assignment 11

var currentYear = +prompt('Enter Current Year');
console.log('Current Year: ' + currentYear);

var birthYear = +prompt('Enter Birth Year');
console.log('Birth Year ' + birthYear);

var age = currentYear - birthYear;
console.log('Your Age is: ' + age);

// Assignment 12

var radius = 20;
console.log('Radius of a circle: ' + radius);

var circumference = 2 * 3.142 * radius;
console.log('The circumference is: ' + circumference);

var area = 3.142 * radius**2;
console.log('The area is ' + area);

// Assignment 13

var favSnack = prompt('Enter your favorite snack');
console.log('Favorite Snack: ' + favSnack);

var currentAge = +prompt('Enter your current age');
console.log('Current Age: ' + currentAge);

var maxAge = +prompt('Enter your estimated maximum age');
console.log('Estimated Maximum Age: ' + maxAge);

var amountOfSnacksPerDay = +prompt('Enter estimated amount of snack per day');
console.log('Amount of snacks per day: ' + amountOfSnacksPerDay);

var totalSnack = (maxAge - currentAge) * amountOfSnacksPerDay;
console.log('You will need ' + totalSnack + ' ' + favSnack + ' to last you until the ripe old age of ' + maxAge);