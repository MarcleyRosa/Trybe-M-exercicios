let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let impar = []
for (let ind = 0; ind < numbers.length; ind += 1) {
    if (numbers[ind] % 2 === 1) {
        impar.push(numbers[ind])

    }
}
console.log('Existem', impar.length, 'números impares');
console.log('São eles:', impar);