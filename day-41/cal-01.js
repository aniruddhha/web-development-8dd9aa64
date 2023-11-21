function sayHello(msg) {
    // console.log(this) 
    console.log(`hey ${this.nm} ${msg}`)
}

sayHello('How are you') // normal call

const usr = {
    nm : 'Abc'
}

sayHello.call(usr, 'what about you ??') // call with some details -> augmentation

