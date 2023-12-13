class Atm {

    #acNo
    #balance

    constructor(acNo, balance) {
        if(acNo.trim() == '') {
            throw new Error('Invalid Account Number')
        }

        if(balance < 0) {
            throw new Error('Invalid Balance')
        }
        
        this.#acNo = acNo
        this.#balance = balance
    }

    deposit(amt) {
        if(amt < 0) {
            throw new Error('Invalid Amount')
        }
    }

    withdraw(amt) {
        if(amt < 0) {
            throw new Error('Invalid Amount')
        }
        if(amt < this.#balance) {
            throw new Error('Insufficient Balance')
        }
    }

    balance() {

    }
}

const atm = new Atm('1234', 0)

try {
    atm.deposit(-10)
} catch (error) {
    console.log(error)
} finally {
    console.log(`No Matter what, I will be called`)
}
