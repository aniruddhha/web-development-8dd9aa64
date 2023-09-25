var a = 10
var b = 20

console.log("Addidition of " + a +" & " + b + " is " + (a + b))
// Addition of 10 & 20 is 30 
console.log(` Addition of ${a} & ${b} is ${a + b}`)

var c = 'abc'; // string value
var d = "abc"  // string value
var e = `abc`  // string value but available only after ES6

// es6 has given you many other options for var
var num0 = 30
console.log('Num0 is ' + num0)
num0 = 90 // reassignment possible
console.log('Num0 is ' + num0)

let num1 = 10
console.log('Num1 is ' + num1)
num1 = 40 // reassignment possible
console.log('Num1 is ' + num1)

const num2 = 20
console.log(` Num2 is ${num2}`)
// num2 = 90 // reassignment not possible
console.log(` Num2 is ${num2}`)


var phone = '123456' // 👈 let

{
    var phone = '456789' // 👈 var
}

console.log(phone)

