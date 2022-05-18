let array = ['java', 'javascript', 'python', 'html', 'css'];
let maiorPalavra = 0
let menorPalavra = 0
// for (let ind = 0, cont = 1; ind <= array.length; ind+= 1, cont+= 1) {
//    if (array[ind] >= array[array.length - 1]) {
//        menorPalavra = array[array.length - 1]  
    
//     }
    
// }

// console.log('Menor palavra dentro do array: ', menorPalavra)
// console.log('Maior palavra dentro do array: ', maiorPalavra);

for (let cas of array) {
  for (let cont = 0; cont <= array[array.length - 1]; cont+= 1) 
    if(cas >= array[cont]) {
        menorPalavra = cas
    } else {
        menorPalavra = array[cont]
    }
}

console.log(menorPalavra);
