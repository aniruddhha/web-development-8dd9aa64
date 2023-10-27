const arr = [
    [1, 3],
    [2, 4]
] // [1, 3, 2, 4]

const tdArr = [ // row
    [ // col
        [1, 2], // cell
        [3, 4]
    ],
    [
        [5, 6],
        [7, 8]
    ]
]

function access2d() {
    console.log(arr[0][0])
    console.log(arr[0][1])
    console.log(arr[1][0])
    console.log(arr[1][1])
}

function simpleFor() {

    for (let row = 0; row < arr.length; row++) {
        for (let col = 0; col < arr[row].length; col++) {
            console.log(`Row ${row} Col ${col}`)
        }
    }

    for (let row = 0; row < tdArr.length; row++) {
        for (let col = 0; col < tdArr[row].length; col++) {
            for (let cell = 0; cell < tdArr[row][col].length; cell++) {
                console.log(`Row ${row} Col ${col} Cell ${cell}`)
            }
        }
    }
}

function arrOps() {
    // arr.forEach(row => console.log(row))

    // arr.forEach( (row, rowInd) => row.forEach( (col, colInd) => console.log(col) ) )

    // arr.forEach((row, ind) => console.log(`${row[ind]}`))
}

function flatten() {


    const row1 = arr[0]
    const row2 = arr[1]

    // const flatArr = [...row1, ...row2] 
    

    // for(let i = 0; i < arr.length; i++ ) {
    //     for (let j = 0; j < arr[i].length; j++) {
    //         // flatArr[i][j] = arr[i][j] -> it will create 2d array again it will not flat the array
    //         flatArr.push(arr[i][j])
    //     }
    // }

    // const flatArr = []
    // arr.forEach(row => row.forEach(col => flatArr.push(col)))
    // arr.forEach(row => flatArr.push(...row))


    console.log(arr.map(row => [...row] ))

    // console.log(arr.flat())
}

flatten()

