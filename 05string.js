const myName = new String ("Sujit")
const myTitle = new String(" Singh")

console.log(myName[0]) // S
console.log(myName.__proto__) // Methods Show
console.log(myName.length) // 5
console.log(myName.endsWith("t")) // true
console.log(myName.indexOf("u")) // 1
console.log(myName.toUpperCase()) // SUJIT
console.log(myName.toLowerCase()) // sujit
console.log(myName.concat(myTitle)) // Sujit Singh
console.log(myName.slice(3,4)) // i
console.log(myName.substring(3,4)) // i
console.log(myTitle.trim()) // Singh - unwanted space remove 

const url = "https://sujit.com/sks%20Deo"

console.log(url.replace(("%20"), ("-")))

