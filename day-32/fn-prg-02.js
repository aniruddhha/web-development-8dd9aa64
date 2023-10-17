const fn1 = () => console.log(`This is Fn1`) // its functional

const fn2 = (fn) => fn()

fn2(fn1)

const fn3 = () => () => console.log(`Inner Function`)
const inr = fn3()
inr()
fn3()()
