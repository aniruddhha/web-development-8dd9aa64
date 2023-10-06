const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    address: {
        street: "123 Main St",
        city: "Anytown"
    }
}

const keys = Object.keys(person)
console.log(keys)

const values = Object.values(person)
console.log(values)
