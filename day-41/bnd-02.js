const add = function( a, b , c ) {
    // console.log(this)
    // return `a = ${a} + b = ${b} + c = ${c}`
    return a + b + c
}

// function currying
const mdFn = add.bind(null, 5) 
console.log(mdFn(3, 2))
