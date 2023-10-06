const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30
}

console.log(`Before Modification: ${person.age}`)
person.age = 40
console.log(`After Modification: ${person.age}`)
person['age'] = 50
console.log(`After Modification: ${person.age}`)

console.log(`Before Adding New Prop`)
console.log(person)
person.city = 'abc'
console.log(`After Adding New Prop`)
console.log(person)


console.log(`Before Nesting`)
console.log(person)
const address = { 
    street : 'abc',
    city: 'abc'
}
console.log(`After Nesting`)
person.address = address
console.log(person)

console.log(`Accessing nested object key`)
console.log(person.address.street)

console.log(`Before Deleting Key`)
console.log(person)
delete person.city
console.log(`After Deleting Key`)
console.log(person)