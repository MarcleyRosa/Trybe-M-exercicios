let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0
for (let ind = 0; ind < numbers.length; ind += 1) {
    soma = soma + numbers[ind]
   
}
console.log(soma/numbers.length);
if (soma/numbers.length > 20) {
    console.log('Valor maior que 20');
} else {
    console.log('Valor menor ou igual a 20');
}