function Car(speed, lights) { // constructor function
    this.speed = speed // properties
    this.lights = lights   
}

Car.prototype.isManual = false  // properties

Car.prototype.speedUp = function () {  // behaviours or methods
    this.speed = this.speed + 1
}


const cr1 = new Car(100, 3)

console.log(`Speed is ${cr1.speed}`)
console.log(`Manual  ${cr1.isManual}`)
cr1.speedUp()
console.log(`Speed is ${cr1.speed}`)
