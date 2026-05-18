let balance = 210000;

const exchangeRateMonth1 = 43.7;
const exchangeRateMonth2 = exchangeRateMonth1 + 1;
const exchangeRateMonth3 = exchangeRateMonth2 + 1;

let amount_1 = 60000;
let amount_2 = 2600 * exchangeRateMonth2;
let amount_3 = 1700 * exchangeRateMonth3;

const monthlyUahExpenses = 3500 + 4000;
const netflixUsd = 9.99;

let expensesMonth1 = monthlyUahExpenses + (netflixUsd * exchangeRateMonth1);
let expensesMonth2 = monthlyUahExpenses + (netflixUsd * exchangeRateMonth2);
let expensesMonth3 = monthlyUahExpenses + (netflixUsd * exchangeRateMonth3);

let totalExpenses = expensesMonth1 + expensesMonth2 + expensesMonth3;
let totalIncome = amount_1 + amount_2 + amount_3;

let taxes = 4500 + (totalIncome * 0.05);

balance = balance + totalIncome - totalExpenses - taxes;

console.log(`In this quarter, Maxim spent ${totalExpenses} UAH.`);
console.log(`Maxim's total income for the quarter is ${totalIncome} UAH.`);
console.log(`The total amount of taxes is ${taxes} UAH.`);
console.log(`Thus, at the end of the quarter, the balance on Maxim's account is ${balance} UAH.`);
