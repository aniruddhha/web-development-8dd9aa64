const car = { // object literal
    speed : 100, // property
    lights: 3,

    speedUp: function() { // method
        this.speed++
    }
}
console.log(car.lights)
console.log(car.speed)
car.speedUp()
console.log(car.speed)

function makeCall() { // normal function

}

function Car(speed, lights) { // constructor function
    this.speed = speed // property
    this.lights = lights // property
}

const cr1 = new Car(100, 30) // 
/*
    function Car(100, 30) { // constructor function
    cr1.speed = 100 // property
    cr1.lights = 30 // property
}
*/
console.log(cr1.speed)
console.log(cr1.lights)

const cr2 = new Car(300, 10)

const dt = new Date()
