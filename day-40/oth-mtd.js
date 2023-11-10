const book = {
    pages : 100,
    author: 'abc'
}
// Object.defineProperty(book, 'pages', {
//     value: 100,
//     enumerable: true,
//     writable: true,
//     configurable: false
// })

const desc = Object.getOwnPropertyDescriptor(book, 'pages')
console.log(desc)

const names = Object.getOwnPropertyNames(book)
console.log(names)

const scienceBook = Object.create(book)
scienceBook.subject = 'physics'

const proto = Object.getPrototypeOf(scienceBook)
console.log(proto)
const car = { 
    make : 'abc'
}

Object.preventExtensions(car)

car.model = '111' // extended the object

if(Object.isExtensible(car)) {
    Object.defineProperty(car, 'price', {
        value: 100,
        enumerable: true
    } ) // extended the object
}

console.log(car)
