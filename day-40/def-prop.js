const car = { }

Object.defineProperty(car, 'speed', {
    value: 10,
    enumerable: true,
    writable: true
})

console.log(car)
console.log(car.speed)
car.speed = 40
console.log(car)
console.log(car.speed)

const animal = { }
Object.defineProperties(animal, {
    legs : {
        value:4,
        writable: true,
        enumerable: true
    },
    name: {
        value :'abc',
        writable:true,
        enumerable: true
    }
})
console.log(animal)

const book = {}
Object.defineProperty(book, 'pages', {
    value: 100,
    enumerable: true,
    writable: true,
    configurable: false
})
console.log(book)
delete book.pages
book.pages = 900
console.log(book)