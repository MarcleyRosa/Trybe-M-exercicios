const readline = require('readline-sync');

const peso = readline.questionInt('Qual seu peso?');
const altura = readline.questionFloat('Qual sua altura?')

function categoryIMC (peso, altura) {

    const IMC = peso/(altura*altura);
    let response;

    if (IMC < 18.5) response = 'Abaixo do peso (magreza)'
    else if (IMC >= 18.5 && IMC < 25) response = 'Peso normal'
    else if (IMC >= 25 && IMC < 30) response = 'Acima do peso (sobrepeso)';
    else if (IMC >= 30 && IMC < 35) response = 'Obesidade grau I';
    else if (IMC >= 35 && IMC < 40) response = 'Obesidade grau II';
    else if (IMC >= 40) response = 'Obesidade graus III e IV'

    return `IMC de ${IMC} com ${response}`;
}

console.log(categoryIMC(peso, altura));