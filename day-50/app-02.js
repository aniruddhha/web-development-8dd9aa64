async function connectToDb() {

    const isSuccess = Math.random() > 0.5

    if(isSuccess) { // similar to resolve 
        return `✅ Connected TO Db Successfully`
    }
    throw new Error(`🔴 Problem in Connecting to Db`) // calling reject
}

// connectToDb()
//     .then( str => console.log(str) )
//     .catch(err => console.log(err))

async function start() {
    try {
        const  str = await connectToDb()
        console.log(str)
    } catch (error) {
        console.log(error)
    }
}

start()
