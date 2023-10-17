const obj = {
    a : 1, 
    b : 2, 
    c : 3 
}

console.log(`Value of a ${obj['a']}`)

for ( let key in obj) {
    console.log(`key ${key} value ${obj[key]}`)
}

const arr = [1, 2, ,3, 4, 45]

for(let num of arr) {
    console.log(num)
}

