function forModification() {
    console.log(`🟢 Modified For Loop 🟢`)
    let i = 0;
    for( ; i<10 ; i++) {
        console.log(`Hi`)
    }
}

function infiniteLoop() {
    console.log(`🟢Infinite Loop 🟢`)
    while(true) {
        console.log(`hi`)
    }
}

function infiniteLoopWithCondition() {
    console.log(`🟢Infinite Loop 🟢`)

    let isSec = false

    while(true) {
        console.log(`hi`)
        
        // if(isSec == true) break
        if(isSec) break
    }
}

