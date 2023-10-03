function speedUp1(spd) {
    // const speed = spd * 2
    // return speed

    return spd * 2
}

speedUp1(10)

const speedUp2 = function(spd) {
    // const speed = spd * 2
    // return speed

    return spd * 2
}

speedUp2(10)

const speedUp3 = spd => {
    // const speed = spd * 2
    // return speed

    return spd * 2
}

speedUp3(10)

const speedUp4 = mxzcvn => mxzcvn * 2

speedUp4(10)

function changeColor1(r, g, b) {
    
    let red = r, green = g, blue = b;
    if(!r)
        red = Math.random() * 256 // 0.2 * 256
    if(!g)
        green = Math.random() * 256
    if(!b) 
        blue = Math.random() * 256

    return `${red}, ${green}, ${blue}`
}

const changeColor2 = (r, g, b) => {
    
    let red = r , green = g , blue = b ;
    if(!r)
        red = Math.random() * 256 // 0.2 * 256
    if(!g)
        green = Math.random() * 256
    if(!b) 
        blue = Math.random() * 256
    return `${red}, ${green}, ${blue}`
}

const changeColor3 = (r, b, g) => {
    let red = r ? r : Math.random() * 256 , green = g ? g : Math.random() * 256, blue = b ? b : Math.random() * 256;
    return `${red}, ${green}, ${blue}`
}

const changeColor4 = (r, b, g) => {
    return `${r ? r : Math.random() * 256}, ${g ? g : Math.random() * 256}, ${b ? b : Math.random() * 256}`
}

const changeColor5 = (r, b, g) => `${r ? r : Math.random() * 256}, ${g ? g : Math.random() * 256}, ${b ? b : Math.random() * 256}`

let red = r, green = g, blue = b;
if(!r)
    red = Math.random() * 256 // 0.2 * 256
if(!g)
    green = Math.random() * 256
if(!b) 
    blue = Math.random() * 256

return `${red}, ${green}, ${blue}`

const spd = 20
const speed = spd * 2