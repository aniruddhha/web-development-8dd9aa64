const str = '          yyyy-dd-mm                ' 

const extracted = str.trim().split('-')
console.log(extracted)

const year = extracted[0]//some code
const day = extracted[1]// some code
const month = extracted[2]// some code

console.log(`Year => ${year}, Day ${day}, Month ${month}`)

const [ yyyy, mm, dd ] =  str.split('-')

console.log(str.trim().repeat(3))