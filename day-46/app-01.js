const numbers = new Set()

numbers.add(1)
numbers.add(10)
numbers.add(2)
numbers.add(20)
numbers.add(10)
numbers.add(1)
numbers.add(9)

console.log(numbers.delete(30))
console.log(numbers.delete(9))

console.log(numbers.has(10))

numbers.clear()

console.log(numbers)

numbers.forEach(el => console.log(el))

const arr = ['abc', 'abc', 'pqr', 'lmn', 'xyz', 'lmn' ]
const names = new Set(arr)
console.log(names)