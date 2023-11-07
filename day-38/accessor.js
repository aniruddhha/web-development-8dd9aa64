const obj = {
    _name : 'android',

    get name() {
        console.log(`Getter Called`)
        return this._name
    },

    set name(value) {
        console.log(`Setter Called`)
        this._name = value
    }
}

console.log(obj._name)
obj._name = 'pqr'

console.log(obj.name) // get method called
obj.name = 'abc' // set method called