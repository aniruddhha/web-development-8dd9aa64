const stu = {
    age : 10,
    isStudent: true
}
console.log(stu)

// const age = stu.age
// const isStudent = stu.isStudent
// console.log(`Age is ${age}`)
// console.log(`Is Student ${isStudent}`)

//es6
const { age, isStudent } = stu
console.log(`Age is ${age}`)
console.log(`Is Student ${isStudent}`)