// Assignment 1

var num1 = 10;
var num2 = 35;

var sum = num1 + num2;
console.log('Sum of ' + num1 + ' and ' + num2 + ' is ' + sum);
document.write('Sum of ' + num1 + ' and ' + num2 + ' is ' + sum + '<br />');

// Assignment 2

var subtract = num1 - num2;
console.log('Subtraction of ' + num1 + ' and ' + num2 + ' is ' + subtract);
document.write('Subtraction of ' + num1 + ' and ' + num2 + ' is ' + subtract + '<br />');

var product = num1 * num2;
console.log('Product of ' + num1 + ' and ' + num2 + ' is ' + product);
document.write('Product of ' + num1 + ' and ' + num2 + ' is ' + product + '<br />');

var divide = num1 / num2;
console.log('Division of ' + num1 + ' and ' + num2 + ' is ' + divide);
document.write('Division of ' + num1 + ' and ' + num2 + ' is ' + divide + '<br />');

var modulus = num1 % num2;
console.log('Modulus of ' + num1 + ' and ' + num2 + ' is ' + modulus);
document.write('Modulus of ' + num1 + ' and ' + num2 + ' is ' + modulus + '<br />');

// Assignment 3

var  num

console.log('Value after variable declaration is ' + num);
document.write('<br /> Value after variable declaration is ' + num + '<br />');

num = 5;

console.log('Initial value: ' + num);
document.write('Initial value: ' + num + '<br />');

var num = ++num;

console.log('Value after increment is: ' + num);
document.write('Value after increment is: ' + num + '<br />');

var num = num +  7;

console.log('Value after addition is: ' + num);
document.write('Value after addition is: ' + num + '<br />');

var num = --num;

console.log('Value after decrement is: ' + num);
document.write('Value after decrement is: ' + num + '<br />');

var num = num % 3;

console.log('The remainder is: ' + num);
document.write('The remainder is: ' + num + '<br />');

// Assignment 4

var ticketPrice = 600;
var noOfTickets = 5;
var costOf5Tickets = ticketPrice * noOfTickets;

console.log('Total cost to buy ' + noOfTickets + ' tickets to a movie is ' + costOf5Tickets + 'PKR');
document.write('<br /> Total cost to buy ' + noOfTickets + ' tickets to a movie is ' + costOf5Tickets + 'PKR' + '<br />');

// Assignment 5


// Assignment 6

var celsius = 25;
var celToFah = (celsius * 9/5) + 32;
console.log(celsius + 'C is = ' + celToFah + 'F');
document.write('<br />' + celsius + 'C is = ' + celToFah + 'F' + '<br />');

var fahrenheit = 70;
var fahTOCel = (fahrenheit - 32) * 5/9;
console.log(fahrenheit + 'F is = ' + fahTOCel + 'C');
document.write(fahrenheit + 'F is = ' + fahTOCel + 'C' + '<br />');

// Assignment 7

document.write('<h1>Shopping Cart</h1>');

var p1 = 650;
console.log('Price of item 1 is ' + p1);
document.write('Price of item 1 is ' + p1);

var q1 = 3;
console.log('Quantity of item 1 is ' + q1);
document.write('<br /> Quantity of item 1 is ' + q1);

var p2 = 100;
console.log('Price of item 2 is ' + p2);
document.write('<br /> Price of item 2 is ' + p2);

var q2 = 7;
console.log('Quantity of item 2 is ' + q2);
document.write('<br /> Quantity of item 2 is ' + q2);

var charges = 100;
console.log('Shipping charges are ' + charges);
document.write('<br /> Shipping charges are ' + charges);

var totalCost = (p1 * q1) + (p2 * q2) + charges;
console.log('Total cost of your order is ' + totalCost);
document.write('<br /> Total cost of your order is ' + totalCost);

// Assignment 8

var totalMarks = 980;
console.log('Total Marks: ' + totalMarks);
document.write('<br /><br />Total Marks: ' + totalMarks);

var obtainedMarks = 804;
console.log('Obtained Marks: ' + obtainedMarks);
document.write('<br />Obtained Marks: ' + obtainedMarks);

var percentage = obtainedMarks / totalMarks * 100;
console.log('Percentage: ' + percentage);
document.write('<br />Percentage: ' + percentage + '%');

// Assignment 9

document.write('<h1>Currency in PKR</h1>');

var totalCurrencyInPKR = (10 * 104.80) + (25 * 28);
console.log('Total currency in PKR: ' + totalCurrencyInPKR);
document.write('Total currency in PKR: ' + totalCurrencyInPKR);

// Assignment 10

var num3 = 200;
var num3 = ((num3 + 5) * 10) / 2;
console.log(num3);

// Assignment 11

document.write('<h1>Age Calculator</h1>');

var currentYear = +prompt('Enter Current Year');
console.log('Current Year: ' + currentYear);
document.write('<br />Current Year: ' + currentYear);

var birthYear = +prompt('Enter Birth Year');
console.log('Birth Year ' + birthYear);
document.write('<br />Birth Year: ' + birthYear);

var age = currentYear - birthYear;
console.log('Your Age is: ' + age);
document.write('<br />Your Age is: ' + age);

// Assignment 12

document.write('<h1>The Geometrizer</h1>');

var radius = 20;
console.log('Radius of a circle: ' + radius);
document.write('Radius of a circle: ' + radius);

var circumference = 2 * 3.142 * radius;
console.log('The circumference is: ' + circumference);
document.write('<br />The circumference is: ' + circumference);

var area = 3.142 * radius**2;
console.log('The area is ' + area);
document.write('<br />The area is ' + area);

// Assignment 13

document.write('<h1>The Lifetime Supply Calculator</h1>');

var favSnack = prompt('Enter your favorite snack');
console.log('Favorite Snack: ' + favSnack);
document.write('Favorite Snack: ' + favSnack);

var currentAge = +prompt('Enter your current age');
console.log('Current Age: ' + currentAge);
document.write('<br />Current Age: ' + currentAge);

var maxAge = +prompt('Enter your estimated maximum age');
console.log('Estimated Maximum Age: ' + maxAge);
document.write('<br />Estimated Maximum Age: ' + maxAge);

var amountOfSnacksPerDay = +prompt('Enter estimated amount of snack per day');
console.log('Amount of snacks per day: ' + amountOfSnacksPerDay);
document.write('<br />Amount of snacks per day: ' + amountOfSnacksPerDay);

var totalSnack = (maxAge - currentAge) * amountOfSnacksPerDay;
console.log('You will need ' + totalSnack + ' ' + favSnack + ' to last you until the ripe old age of ' + maxAge);
document.write('<br />You will need ' + totalSnack + ' ' + favSnack + ' to last you until the ripe old age of ' + maxAge);