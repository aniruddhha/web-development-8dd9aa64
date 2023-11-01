const mat1 = [ 
    [ 1, 2, 3 ],
    [ 4, 5, 6 ]
]

const mat2 = [
    [7, 8],
    [9, 10],
    [11, 12]
]

const matMul3 = (m1, m2) => {

    const frfc = (m1[0][0] * m2[0][0]) + (m1[0][1] * m2[1][0]) + (m1[0][2] * m2[2][0]);
    const frsc = (m1[0][0] * m2[0][1]) + (m1[0][1] * m2[1][1]) + (m1[0][2] * m2[2][1]);
    const srfc = (m1[1][0] * m2[0][0]) + (m1[1][1] * m2[1][0]) + (m1[1][2] * m2[2][0]);
    const srsc = (m1[1][0] * m2[0][1]) + (m1[1][1] * m2[1][1]) + (m1[1][2] * m2[2][1]);

    return [ 
        [frfc, frsc], 
        [srfc, srsc]
    ]
}

const matMul2 = (m1, m2) => {
    return m1.map( 
        (row, i) => 
            m2[0].map(( _ , j ) => 
                row.reduce((acc, _ , n) => acc + m1[i][n] * m2[n][j], 0))
        )
}


const matMul1 = (m1, m2) => {
    const result = []

    for (let i = 0; i < m1.length; i++) {
        result[i] = []
        // console.log(result)

        for (let j = 0; j < m2[0].length; j++ ) {
            let sum = 0;

            for(let k = 0; k < m1[0].length; k++) {
                sum += m1[i][k] * m2[k][j]
                console.log(`[${m1[i][k]} ${m2[k][j]}]`)
            }

            result[i][j] = sum
            
        }
    }

    return result
}

console.table(matMul2(mat1, mat2))
console.table(matMul3(mat1, mat2))

