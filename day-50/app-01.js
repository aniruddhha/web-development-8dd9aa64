const prm = new Promise( (resolve, reject) => {
   
    setTimeout( () => resolve(`✅ Success`), 1000  )

} )
// .then( str => console.log(str) )
// .catch( err => console.log(err))

async function handleAsyncOp() {

    try {
        const str = await prm    
    } catch (error) {
        console.log(error)
    }
}

async function sayHi() {
    return 'Hello Async'
}

async function callHi() {
    const str = await sayHi()
    console.log(str)
}

callHi()

// sayHi()
//     .then(str => console.log(str))
//     .catch(err => console.log(err))
