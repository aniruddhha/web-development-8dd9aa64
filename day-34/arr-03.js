const arr = [ 1, 2, 3, 4, 5 ]

let sum1 = 0
arr.forEach(el => sum1+= el )
console.log(sum1)

const sum2 = arr.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue
}, 0)
console.log(sum2)

// 0 -> accumulator = 0 , currentValue = 1 : 0 + 1 = 1
// 1 -> accumulator = 1 , currentValue = 2 : 1 + 2 = 3
// 2 -> accumulator = 3 , currentValue = 3 : 3 + 4 = 7

const sum3 = arr.reduce((acc, cv) => acc + cv)
console.log(sum3)