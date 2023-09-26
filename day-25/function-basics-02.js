function sqr(n) {
    return n * n
}

const sqd1 = sqr(2)
console.log(sqd1)

console.log(sqr(3))

const num = false // here only expcted value is number
console.log(sqr(num))

function sqr1(n) {
   console.log(typeof(n)) 
   if( typeof(n) === 'number' ) {
    return n * n
   }
   return -1
}

console.log(sqr1('hello'))
console.log(sqr1(10))
console.log(sqr1(true))

function sqr2(n) {
    console.log(isNaN(n))
    if(isNaN(n) === false) {
        return n * n
    }
}
sqr2(34) // this is a number -> isNaN -> false
sqr2('abc') // this is not a number -> isNaN -> true
sqr2(false) // this is not a number, but js internally 0, 1 -> 0/1 is number -> isNaN -> false