class BankAccount {

    // object state needs to be accessed only within the class
    // if you need to access the state, you should use one of the method

    #balance; // you made private state

    constructor(initialBalance) {
        this.#balance = initialBalance
    }

    deposit(amt) {
        if(amt <= 0) console.log(`Invalid amount`)
        this.#balance = this.#balance + amt
    }

    withdraw(amt) {
        if(amt <= 0) console.log(`Invalid amount`)
        this.#balance = this.#balance - amt
    }

    checkBalance() {
        return this.#balance
    }
}

const ba = new BankAccount(500)
console.log(`Balance ${ba.balance}`) // problem
console.log(`Balance ${ba.checkBalance()}`) // correct
ba.balance = 900 // this shouldnt happen

ba.deposit(500)
console.log(`Balance ${ba.checkBalance()}`) // correct

ba.withdraw(10)
console.log(`Balance ${ba.checkBalance()}`) // correct

