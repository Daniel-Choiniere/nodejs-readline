const readline = require('readline-sync');

let num1 = readline.question("Enter the first number: ");
let num2 = readline.question("Enter the second number: ");

console.log(`The product of ${num1} and ${num2} is:`, num1 * num2);
