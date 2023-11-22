class Mobile {

    constructor(num, cc) {
        this.num = num // state -> field -> property 
        this.cc = cc 
    }

    // Note: there no `function` keyword before dial
    dial() { // behavour -> functions -> methods
        console.log(`Dialing from ${this.cc} country`)
    }

    disconnect() {
        
    }
}

const mob = new Mobile('123', 'in')
console.log(mob.cc)
console.log(mob.num)
mob.dial()
mob.disconnect()