const readline = require('readline-sync');

const numPrimos = async () => {
    const numbers = readline.questionInt('Digite um numero');
    let seque = 0
    let post = 1
    for (let i = 0; i <= numbers; i++) {
        const fibo = seque + post;
        seque = post;
        post = fibo;
        console.log(fibo);
    }
}

numPrimos();