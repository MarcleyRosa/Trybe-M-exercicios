let maiorPrimo = []

// for (let i = 2; i <  50; i += 1) {
//     if (i % 2 !== 0 && i % 3 !== 0) {
//         maiorPrimo.push(i)
//     }
// }
// console.log(maiorPrimo);
let cont = 0
for (let i = 2; i <= 50; i += 1){
    for (let ind = 2; ind <= i; ind += 1) {
        if (i % ind === 0) {
            cont+= 1
        }
    

    }
    if ( cont > 1) {
        maiorPrimo.push(i)
    }
}
console.log(maiorPrimo);