// function declaration
function startRunning( /* parameters*/ from , to) {  
    // body
    console.log(` Start ${from} To ${to} `) // es6
    // console.log(' Start '+from +' To '+ to) // es5

    return to - from // it will return a number
}

startRunning(10, 40) // function call

const distance = startRunning(50, 100) // function call
console.log(`Total Distance ${distance}`)