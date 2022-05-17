const num1 = 23;
const num2 = 10;
const num3 = 17;

if (num1 >= num2 && num1 >= num3) {
    console.log('Entre os números informados', num1, ',', num2, 'e', num3,  ': O valor', num1, 'É o maior número');
} else if (num2 >= num1 && num2 >= num3) {
    console.log('Entre os números informados', num1, ',', num2, 'e', num3,  ': O valor', num2, 'É o maior número');
} else if (num3 >= num1 && num3 >= num2) {
    console.log('Entre os números informados', num1, ',', num2, 'e', num3,  ': O valor', num3, 'É o maior número');
} 