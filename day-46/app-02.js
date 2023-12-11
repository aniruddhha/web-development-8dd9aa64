const map1 = new Map()
map1.set('name', 'abc')
map1.set('age', 12)
map1.set('sub', 'android')
map1.set('sub', 'java')

console.log(map1)

const map2 = new Map()
map2.set(1, 'abc')
map2.set(2, 'pqr')

const map3 = new Map([
    [1, 'abc'],
    [2, 'pqr']
])
console.log(map3)
console.log(map3.get(1))

map2.forEach((key, value) => console.log(`Key ${key} => Value ${value}`))

for (let [key, value] of map2) {
    console.log(`Key ${key} => Value ${value}`)
}

for(let ent of map2.entries()) {
    console.log(`Key ${ent[0]} => Value ${ent[1]}`)
}