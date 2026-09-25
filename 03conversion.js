// Conversion Operation with Number

let myAge = "S123";
let myNo = 7878785888;
let myRoll = null;
let idNo = undefined;

console.table([myAge, myNo, myRoll, idNo, typeof(myAge), typeof(myNo), typeof(myRoll), typeof(idNo)])

// console.log((myAge)); // s123
// console.log((myNo)); // 7878785888
// console.log((myRoll)); // null
// console.log((idNo)); // undefined

// console.table([typeof(myAge), typeof(myNo), typeof(myRoll), typeof(idNo)])

// console.log(typeof(myAge)); // string
// console.log(typeof(myNo)); // number
// console.log(typeof(myRoll)); // object
// console.log(typeof(idNo)); // undefined

// Convert in Number
console.log("******************** Convert in Number *********************************");

myAge = Number(myAge); //
myNo = Number(myNo); //
myNo = Number(myRoll); //
myNo = Number(idNo); // 

console.table([myAge, myNo, myRoll, idNo, typeof(myAge), typeof(myNo), typeof(myRoll), typeof(idNo)])
// console.table([typeof(myAge), typeof(myNo), typeof(myRoll), typeof(idNo)])

// console.log((myAge)); // string
// console.log((myNo)); // number
// console.log((myRoll)); // object
// console.log((idNo)); // undefined

// console.log(typeof(myAge)); // number
// console.log(typeof(myNo)); // number
// console.log(typeof(myRoll)); // object
// console.log(typeof(idNo)); // undefined