"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exec = void 0;
const readlineSync = require('readline-sync');
function exec(func) {
    const from = readlineSync.question('Qual Unidade gostaria de converter? : ');
    const toUn = readlineSync.question('Para qual unidade? : ');
    const values = readlineSync.questionFloat('Qual valor gostaria de converter? : ');
    const result = func(values, from, toUn);
    return `${values}${from} é igual a ${result}${toUn}`;
}
exports.exec = exec;
;
