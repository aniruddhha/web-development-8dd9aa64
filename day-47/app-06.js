const past = new Date('2020-01-01')

const future = new Date('2024-01-01')

if(past < future) {
    console.log(`past ${past.toISOString().split('T')[0]} is before future ${future.toISOString().split('T')[0]}`)
}