const specificDate = new Date('2020-01-01T12:30:00')
const year = specificDate.getFullYear()
const month = specificDate.getMonth()
const day = specificDate.getDate()

const hours = specificDate.getHours()
const minutes = specificDate.getMinutes()
const seconds = specificDate.getSeconds()
console.clear()
console.log(`${day}/${month+1}/${year} ${hours}:${minutes}:${seconds}`)

specificDate.setFullYear(2023)
console.log(specificDate)

specificDate.setDate(specificDate.getDate() + 32)
console.log(specificDate)