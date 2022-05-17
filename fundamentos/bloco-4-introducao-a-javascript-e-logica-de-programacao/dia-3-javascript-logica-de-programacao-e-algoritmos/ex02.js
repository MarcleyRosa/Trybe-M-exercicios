let word = 'tryber';
let wordInv = "Palavra Invertida: "
for (let index = 0, n = 1; n <= word.length; index++, n+= 1) {
    wordInv = wordInv + word[word.length - n]
}

console.log('Palavra Escolhida:', word);
console.log(wordInv);