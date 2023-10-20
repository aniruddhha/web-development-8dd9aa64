const arr = [ 1, 2, 3, 4 ,5 ,6 ]
// - Square [ 1, 4, 9, 16, 25, 36 ]
// - Evens [2, 4, 6]
// - Check 9 is present in array or not or some of the elements are 9 or not
// - All of the elements are 9 or not
// - Find the element, if greater than equal to 3 
// - 123456
// - 

for(let i = 0; i < arr.length; i++) {
    console.log(`Index ${i}, Element ${arr[i]}`)
}

for (a of arr) {
    console.log(a)
}

arr.forEach(function(el, ind) {
    console.log(`Index ${ind}, Element ${el}`)
})

arr.forEach( (el, ind) => console.log(`Index ${ind}, Element ${el}`) )

const makeSquare1 = ( ar ) => {

    const sqrdAr = []

    // for(let i = 0; i < ar.length; i++) {
    //    sqrdAr.push(ar[i] * ar[i])
    // }

    ar.forEach( el => sqrdAr.push(el * el) )
    
    return sqrdAr
}

const makeSquare2 = ar =>  {
    // const sqrdAr = ar.map( function (el) {
    //     return el * el
    // } )

    const sqrdAr = ar.map( el => el * el)

    return sqrdAr
}

// console.log(makeSquare1(arr))
// console.log(makeSquare2(arr))

const findEven1 = ar => {
    const evens = []

    ar.forEach( el => {
        if(!(el%2)) evens.push(el)
    } )

    return evens
}

const findEven2 = ar => {
    const evens = ar.filter(el => !(el%2) )
    return evens
}

// console.log(findEven1(arr))


function checkNum1(ar, num) {
    let isPr = false
    ar.forEach( el => {
        if(el === num) {
            isPr = true
        }
    })
    return isPr
}

function checkNum2(ar, num) {
    console.log(ar.some( el => el == num ))
    console.log(ar.every(el => el == num))
    console.log(ar.includes(6))
}

// checkNum2(arr, 2)

function grabNumber(ar) {

    const num = ar.find( el => el >= 3 ) // it returns first element who matches condition
    console.log(num)

    const ind = ar.findIndex( el => el >= 3 )
    console.log(ind)
}

// grabNumber(arr)

const mkStr1 = ar => {
    let st = ''
    ar.forEach(el => st += el)
    return st
}

const mkStr2 = ar => {
    return ar.join('')
}
console.log(mkStr2(arr))
