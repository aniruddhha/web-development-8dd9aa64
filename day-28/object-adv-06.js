const stu1 = {
    age: 10,
    isStudent: false
}

const stu2 = { 
    age: stu1.age,
    isStudent: stu1.isStudent
}

console.log(`Stu 1 data`)
console.log(`Age is ${stu1.age}`)
console.log(`Is Student ${stu1.isStudent}`)

console.log(`Stu 2 data`)
console.log(`Age is ${stu2.age}`)
console.log(`Is Student ${stu2.isStudent}`)

const stu3 = Object.assign({}, stu1)
console.log(`Stu 3 data`)
console.log(`Age is ${stu3.age}`)
console.log(`Is Student ${stu3.isStudent}`)

// es6
const stu4 = { ...stu1 } // ... spread operator
console.log(`Stu 4 data`)
console.log(`Age is ${stu4.age}`)
console.log(`Is Student ${stu4.isStudent}`)