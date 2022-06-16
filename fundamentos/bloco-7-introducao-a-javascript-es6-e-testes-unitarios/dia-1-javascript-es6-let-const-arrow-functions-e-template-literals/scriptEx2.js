const oddsAndEvens = [13, 3, 4, 10, 7, 2];

function compararNumeros(a, b) {
  return a - b;
}
oddsAndEvens.sort(compararNumeros)
// const ordenCre = []
//   for (let i = 0, ind = 1; i < oddsAndEvens.length; i += 1, ind += 1) {
//     if (oddsAndEvens[i] > oddsAndEvens[ind]) {
//         ordenCre[ind] = oddsAndEvens[i]
//         ordenCre[i] = oddsAndEvens[ind]
//     }
//   }

// console.log(ordenCre);
console.log(oddsAndEvens); // será necessário alterar essa linha 😉
