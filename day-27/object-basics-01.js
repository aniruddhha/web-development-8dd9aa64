// const obj2 = new Date() // we will discuss later 


const obj1 = { 
    firstName : 'John',
    sayHello2: () => { 
        console.log(this)
    }
}

console.log(obj1.firstName)
console.log(obj1['firstName'])
obj1.sayHello2()

console.log(`Before Modification`)
console.log(obj1.firstName)
obj1.firstName = 'Doe'
console.log(`After Modification`)
console.log(obj1.firstName)