function sayHello(nm, msg  ) {
    console.log(`Hey ${nm}, ${this.msg}`)
}

const dt = {
    nm : 'abc'
}

sayHello.apply(dt, [ 'eee', 'ddd'])