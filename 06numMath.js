const price = 400;
console.log(price) // 400

const balance = new Number(400)
console.log(balance) // [Number: 400]

console.log(balance.toString().length); // 3
console.log(balance.toFixed(1)); // 400.0
console.log(balance.toFixed(2)); // 400.00

const anotherNumber = 50.31262;
console.log(anotherNumber.toPrecision(3)); //50.3

const value = 1534.1342;
console.log(value.toPrecision(3)); // 1.53e+3

const donateAmount = 1000000
console.log(donateAmount.toLocaleString())  // 1,000,000
console.log(donateAmount.toLocaleString("en-IN"))  // 10,00,000

