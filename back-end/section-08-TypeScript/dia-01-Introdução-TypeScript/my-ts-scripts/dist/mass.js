"use strict";
const readlineSync = require('readline-sync');
const unitsMass = ["kg", "hg", "dag", "g", "dg", "cg", "mg"];
function convertMass(value, fromUnit, toUnit) {
    const fromIndex = unitsMass.indexOf(fromUnit);
    const toIndex = unitsMass.indexOf(toUnit);
    const exponent = (toIndex - fromIndex);
    return value * Math.pow(10, exponent);
}
function exec() {
    const from = readlineSync.question('Qual Unidade gostaria de converter? : ');
    const toUn = readlineSync.question('Para qual unidade? : ');
    const values = readlineSync.questionFloat('Qual valor gostaria de converter? : ');
    const result = convertMass(values, from, toUn);
    console.log(result);
    return `${values}${from} é igual a ${result}${toUn}`;
}
;
console.log(exec());
