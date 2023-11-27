class Animal { // base, parent, super

    constructor(name) {
        this.name = name
    }

    eat() {
        console.log(`animal ${this.name} is eating`)
    }
}

// tiger is an Animal
class Tiger extends Animal { // derived, child, sub 

    constructor(name, speed) {
        super(name) // object of parent class
        this.speed = speed
    }

    run() {
        console.log(`${this.name} is running with speed ${this.speed}`)
    }

    eat() {
        // super.eat()
        console.log(`tiger is ${this.name} is eaing`)
    }
}

const tg = new Tiger('aaa', 45)
tg.eat() // eat is coming from animal
tg.run() // run is owned by tiger