function calc(num1, num2) {
    if(!Number.isNaN(num1) || !Number.isNaN(num2) ) {
        throw new Error('Invalid Input')
    }

    return num1/num2
}

try {
    
    const num1 = 10
    const num2 = 'abc'

    try {
        calc(num1, num2)
    } catch (error) {
        console.log(`Inner Catch`)
        // console.log(error)
        throw error
    }

} catch (error) {
    console.log(`Outer Catch`)
}