function up(px) { // named function
    console.log(px)
}

const o1 = up(12) // call
console.log(o1)

const o2 = up // not a call -> it reference assignment
console.log(o2)
o2(67)
up(67)

const o3 = function (n) { // anonymous function
    return n * n
}

console.log(o3)
console.log(o3(2))



