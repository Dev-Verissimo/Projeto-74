let matrix = []
function table(n) {
    for (let i = 0; i <= n; i++) {
        matrix[i] = []   
        // console.log(matrix[i])
        for (let j = 0; j <= n; j++) {
            matrix[i][j] = i*j
        }
}return matrix

}
// console.log(table(12))
console.table(table(10))




















    // for(let i=0;i<n+2;i++){
    //     let linha = []
        
    //     for(let j=0;j<n+2;j++){
    //         matrix[i] += linha[j]
            
    //     }
    //console.log(matrix[i][j])

// }
// table(10)



// let matrix = []
// for (let i = 0; i <= 5; i++) {
//         matrix[i] = []   
//         console.log(matrix[i])
//         for (let j = 0; j <= 5; j++) {
//             matrix[i][j] = i*j
//         }
// }
// console.log(matrix)
// console.table(matrix)