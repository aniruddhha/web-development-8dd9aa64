let a = 10
let b = 20;
console.log(`🟢 Arithmetic Operators 🟢`)

console.log(`Addidtion ${a + b}`)
console.log(`Subtraction ${a - b}`)
console.log(`Multiplication ${a * b}`)
console.log(`Division ${a / b}`)
console.log(`Modulo ${a % b}`)
console.log(`Increment (post) ${a++}`) // a = a + 1
console.log(`Decrement (pre) ${--b}`)
console.log(`Exponent ${b ** 2}`)

console.log(`🟢 Assignment Operators 🟢`)
let c = 23 // assigment
console.log(`Addition Assignment  ${c+=2}`) // c = c + 2
console.log(`Subtraction Assignment  ${c-=2}`) // c = c - 2
console.log(`Multiplication Assignment  ${c*=2}`) // c = c * 2
console.log(`Division Assignment  ${c/=2}`) // c = c / 2
console.log(`Modulo Assignment  ${c%=2}`) // c = c % 2

console.log(`🟢 Comparision Operators 🟢`)
let e = 20 // value = 20, type = number
let f = 20 // value = '20', type = string
console.log(`Equality ${e == f} or ${e === f}`)
console.log(`Inequality ${e != f} or ${e !== f}`)
console.log(`Greater Than ${e > f}`)
console.log(`Greater Than Equal To ${e >= f}`)
console.log(`Less Than ${e < f}`)
console.log(`Less Than Equal To ${e <= f}`)

console.log(`🟢 Logical Operators 🟢`)

console.log(`And && : ${true && false}`)
console.log(`And && : ${true && true}`)
console.log(`And && : ${0 && true}`)
console.log(`And && : ${0 && false}`)
console.log(`And && : ${0 && 1}`)
console.log(`And && : ${1 && 'hello' }`)
console.log(`And && : ${'hello' && 'bye bye' }`)
console.log(`And && : ${'' && 'bye bye' }`)
console.log(`And && : ${undefined && 'bye bye' }`)

console.log(`Or || : ${true || false}`)
console.log(`Or || : ${true || true}`)
console.log(`Or || : ${0 || true}`)
console.log(`Or || : ${0 || false}`)
console.log(`Or || : ${0 || 1}`)
console.log(`Or || : ${1 || 'hello' }`)
console.log(`Or || : ${'hello' || 'bye bye' }`)
console.log(`Or || : ${'' || 'bye bye' }`)
console.log(`Or || : ${undefined || 'bye bye' }`)

console.log(`Negation ! : ${!true}`)
console.log(`Negation ! : ${!false}`)
console.log(`Negation ! : ${!0}`)
console.log(`Negation ! : ${!!0}`)
console.log(`Negation ! : ${!1}`)
console.log(`Negation ! : ${!''}`)
console.log(`Negation ! : ${!!''}`)

console.log(`Ternenry ${ 1 ? 'its truthy' : 'its falsy' }`)
console.log(`Ternenry ${ 0 ? 'its truthy' : 'its falsy' }`)
console.log(`Ternenry ${ true ? 'its truthy' : 'its falsy' }`)
console.log(`Ternenry ${ false ? 'its truthy' : 'its falsy' }`)

console.log(`🟢 Bitwise Operators 🟢`)
console.log(`And & : (1 & 1) : ${1 & 1}`)
console.log(`Or | : (1 | 2) : ${1 | 2}`)
console.log(`XOR | : (1 ^ 2) : ${1 ^ 2}`)
console.log(`NAND | : (1 ~ 2) : ${~1}`)
console.log(`Right Shift | : (1 >> 1) : ${1 >> 1}`)
console.log(`Left Shift | : (1 << 1) : ${1 << 1}`)
console.log(`Unsigned Right Shift | : (1 < 1) : ${-10 >>> 1}`)