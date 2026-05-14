const exchangeRate = 43.7;
const taxRate = 0.05;
const esv = 4500;

let amount_1 = 68000;
let amount_2 = 2600 * exchangeRate;
let amount_3 = 1900 * exchangeRate;

let totalIncome = amount_1 + amount_2 + amount_3;
let totalTax = (totalIncome * taxRate) + esv;

console.log(`Maxim's total income is ${totalIncome} UAH.`);
console.log(`At the end of the quarter, Maxim needs to pay ${totalTax} UAH.`);