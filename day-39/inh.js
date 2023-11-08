function Vehicle(make, model) { // parent -> constructor function
    this.make = make
    this.model = model
}

Vehicle.prototype.detailsVh = function() {
    return `Make ${this.make} Model ${this.model}`
}

const vh = new Vehicle('Abc', '111')
console.log(vh.detailsVh())

function Car(year, make, model) { // child -> constructor function
    Vehicle.call(this, make, model) // this is unknow to you
    this.year = year
}

Car.prototype = Object.create(Vehicle.prototype) // actual inheritance is happening

Car.prototype.detailCr = function () { // car is child
    return `Year ${this.year} Model ${this.model} Make ${this.make}`
}

const cr = new Car(2002, 'SUV', '123')
console.log(cr.detailCr()) 