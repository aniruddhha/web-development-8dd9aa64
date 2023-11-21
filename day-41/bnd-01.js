const person = {
    fstNm: 'abc',
    lstNm: 'pqr',

    fullName: function() {
        return this.fstNm + this.lstNm
    }
}

console.log(person.fullName())

const logger = function(city) {
    // this is pointing to global object.
    console.log(this.fullName() + city)
}

const bndFn = logger.bind(person, 'cccc')
bndFn()

// use case 1
const newFn = person.fullName.bind({ fstNm : 'vvv', lstNm : 'bbb' })
console.log(newFn())

