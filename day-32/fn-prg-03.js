
function print() {
    console.log('hi')
}
setTimeout(print, 3000)

setTimeout(function() {
    console.log('hi')
}, 4000)

setTimeout(() => console.log('hi'), 5000)