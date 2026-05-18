const usdRate = 43.7;
const eurRate = 51.2;

let income_1 = 100000;
let income_2 = 200000;
let income_3 = 300000;
let income_4 = 150000;

let totalYearlyIncome = income_1 + income_2 + income_3 + income_4;

let singleTax = totalYearlyIncome * 0.05;
let esv = 18000;
let incomeAfterTaxes = totalYearlyIncome - singleTax - esv;

let charityAlive = incomeAfterTaxes * 0.10;
let charityChildren = incomeAfterTaxes * 0.05;

let businessDevelopment = 100000;

let currencySavings = (2500 * eurRate) + (3000 * usdRate);

let finalBalance = incomeAfterTaxes - charityAlive - charityChildren - businessDevelopment - currencySavings;

console.log(`Maxim earned — ${totalYearlyIncome} UAH per year`);
console.log(`Single tax 5% is ${singleTax} UAH`);
console.log(`Donations to "Come Back Alive" and "Children of Heroes" are ${charityAlive} UAH and ${charityChildren} UAH respectively`);
console.log(`A total of ${currencySavings} UAH was saved to currency accounts`);
console.log(`The remaining balance on Maxim's account is ${finalBalance} UAH`);
