const op1 = async () => { return 'db connection successful' }

const op2 = async () => { return op1() }

const op3 = async () => { return op2() }

async function performOps() {

    const st2 = await op3()
    console.log(st2)

}

performOps()