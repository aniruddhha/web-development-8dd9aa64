function breakContinueEx() {

    for(let i = 0; i< 5 ;i++) {
        if(i === 3) {
            console.log(`Reached 3, So breaking the loop`)
            break
        }
        console.log(`Step ${i}`)
    }

    for(let i = 0; i < 5; i++) {
        if(i === 2) {
            console.log(`Reached 2, so skippping`);
            continue
        }
        console.log(`Step ${i}`);
    }

}

breakContinueEx()