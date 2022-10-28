const readline = require('readline-sync');

const numero1 = readline.question('Digite Primeiro Numero ');
const numero2 = readline.question('Digite Segundo Numero ');
const numero3 = readline.question('Digite Terceiro Numero ');

const calculo = (num1, num2, num3) => {
    const promise = new Promise((resolve, reject) => {
        const result = (num1 + num2) * num3;
        if (result < 50) reject(new Error('Valor muito baixo'))
        resolve(result)
    })
    return promise
}

try {
    calculo(numero1, numero2, numero3)
} catch(error) {
    console.log(error.message);
}