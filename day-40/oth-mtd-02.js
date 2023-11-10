const book = {
    pages : 200,
    author: 'abc'
}

// console.log(Object.isSealed(book))
console.log(Object.isFrozen(book))
// Object.seal(book)
Object.freeze(book)
book.isbn = '89789'
book.pages = 44
delete book.pages
console.log(book)

// console.log(Object.isSealed(book))
console.log(Object.isFrozen(book))