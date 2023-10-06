const age = 10;
const isStudent = true;

const stu1 = { age : 10, isStudent: true }
console.log(`Stu1 Data`)
console.log(Object.keys(stu1))
console.log(Object.values(stu1))

const stu2 = { age: age, isStudent:isStudent }
console.log(`Stu2 Data`)
console.log(Object.keys(stu2))
console.log(Object.values(stu2))

// es6
const stu3 = { age, isStudent }
console.log(`Stu3 Data`)
console.log(Object.keys(stu3))
console.log(Object.values(stu3))
