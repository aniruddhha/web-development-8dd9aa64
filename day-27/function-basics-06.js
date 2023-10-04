function addNew1 (num1, num2) {
    console.log(`Num1 ${num1} Num2 ${num2}`)
    if(num1 && num2)
        return num1 + num2
    else {
       if(!num1 || !num2) return 0
    }
}

const addNew2 = (num1 = 0, num2 = 0) => num1 + num2

// console.log(addNew1(10, 10))
// console.log(addNew1(10))
// console.log(addNew1(10, 0))
console.log(addNew2(10))