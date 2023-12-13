function calculate(num1, num2) {
    if(num2 === 0) {
        throw new Error(`num2 can not be zero`)
    }
    return num1/num2
}

try {
    console.log(calculate(10,10))    
} catch (error) {
    console.log(error)
}

try {
    console.log(calculate(10,0))  
} catch (error) {
    console.log(error)
}
