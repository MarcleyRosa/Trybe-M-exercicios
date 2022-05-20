let array = ['java', 'javascript', 'python', 'html', 'css'];
let maiorPalavra = ''
let menorPalavra = 'menor palavra'
// for (let ind = 0, cont = 1; ind <= array.length; ind+= 1, cont+= 1) {
//    if (array[ind] >= array[array.length - 1]) {
//        menorPalavra = array[array.length - 1]  
    
//     }
    
// }

// console.log('Menor palavra dentro do array: ', menorPalavra)
// console.log('Maior palavra dentro do array: ', maiorPalavra);
for (let cas of array) {

    if (cas.length > maiorPalavra.length) {
        maiorPalavra = cas
    }
    if (cas.length < menorPalavra.length) {
        menorPalavra = cas
    }
}
console.log(maiorPalavra);

console.log(menorPalavra);
