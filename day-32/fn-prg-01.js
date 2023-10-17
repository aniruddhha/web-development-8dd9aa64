function fn1() {
    console.log(`This is Fn1`)
}

const ch = fn1 // its functional, note brackets are missing

function fn2(fn) {  // its functional
    fn()
}

fn2(fn1)

function fn3() {
    return function() { // its functional
        console.log(`Inner Function`)
    }
}

console.log(fn3())
const inr = fn3() // this will return a function, its call to fn3
inr()

fn3()()

function abc() {
    return 10
}

abc() // 10