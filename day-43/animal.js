class Animal {
     
    //state -> property -> field
    constructor(legs, eyes ) {
        this.legs = legs // an1.legs = 4
        this.eyes = eyes // an1.legs = 2
    }

    // behaviour -> method -> function
    run() {
        this.legs++
    }

    sleep() {
        this.eyes = 0
    }

    wakeUp() {
        this.eyes = 1
    }
}

const an1 = new Animal(2, 2)
an1.eyes = 10
an1.run()

const an2 = new Animal(4, 2)
an2.sleep()
an2.wakeUp()