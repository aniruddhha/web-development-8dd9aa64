class InvalidDateError extends Error {

    constructor(message) {
        super(message)
    }
}

class BadStringError extends Error {
    constructor(message) {
        super(message)
    }
}

function checkAndParse(str) {

    if (str.trim() == '') throw new BadStringError('No Input Error')

    if (Number.isNaN(Date.parse(str))) throw new InvalidDateError('Invalid Date Format')

    return Date.parse(str)
}

try {
    checkAndParse('')
} catch (error) {
    if (error instanceof BadStringError) {
        // handle if no input date provided
        console.log('First Catch')
    }
    if (error instanceof InvalidDateError) {
        // handle if invalid date format provide
        console.log('Second Catch')
    }
}

