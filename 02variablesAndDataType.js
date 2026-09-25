// Premitive Data Type
let coderName = "Sujit Kumar Singh";
let coderAge = 26;
let coderIsLogin = false;
let coderMarks = 99.99;
let coderMobNum = null;
let coderEmail = undefined;
let coderBalanceSBI = BigInt(9999999999999999);
let coderBalanceBOI = 9999999999999999n;
let coderBalanceBOB = BigInt(9999999999999999n);
let coderUserID = Symbol(121);
let userAdminID = Symbol(121);

// Non - Premitive Data Type
let marks = {
    math : 83,
    eng : 63,
    CSc : 98,
    hin : 94,
    sci: 88,
}

let book = ["Math", "Eng", "CSE", "HIN", "SCI"]

console.log(`Type of Data for coderName ${coderName} is ${typeof coderName}`); // string
console.log(`Type of Data for coderAge ${coderAge} is ${typeof coderAge}`) // number
console.log(`Type of Data for coderIsLogin ${coderIsLogin} is ${typeof coderIsLogin}`) // boolean
console.log(`Type of Data for coderMarks ${coderMarks} is ${typeof coderMarks}`) // number
console.log(`Type of Data for coderMobNum ${coderMobNum} is ${typeof coderMobNum}`) // object
console.log(`Type of Data for coderEmail ${coderEmail} is ${typeof coderEmail}`) // undefined
console.log(`Type of Data for coderBalanceSBI ${coderBalanceSBI} is ${typeof coderBalanceSBI}`) // bigint
console.log(`Type of Data for coderBalanceBOI ${coderBalanceBOI} is ${typeof coderBalanceBOI}`) // bigint
console.log(`Type of Data for coderBalanceBOB ${coderBalanceBOB} is ${typeof coderBalanceBOB}`) // bigint
console.log(`Type of Data for coderUserID ${String(coderUserID)} is ${typeof coderUserID}`); // Symbol
console.log(`Type of Data for marks ${marks} is ${typeof marks}`); // Object
console.log(`Type of Data for book ${book} is ${typeof book}`); // Object
console.log(coderUserID == userAdminID) // false
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991



