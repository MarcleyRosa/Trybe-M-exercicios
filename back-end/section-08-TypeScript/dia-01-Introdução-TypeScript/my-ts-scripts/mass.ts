const readlineSync = require('readline-sync')

const unitsMass = ["kg", "hg", "dag", "g", "dg", "cg", "mg"];

function convertMass(value: number, fromUnit: string, toUnit: string): number {
    const fromIndex = unitsMass.indexOf(fromUnit);
    const toIndex = unitsMass.indexOf(toUnit);
    const exponent = (toIndex - fromIndex);

    return value * Math.pow(10, exponent);
}

function exec(): string {
    const from: string = readlineSync.question('Qual Unidade gostaria de converter? : ')
    const toUn: string = readlineSync.question('Para qual unidade? : ')
    const values: number = readlineSync.questionFloat('Qual valor gostaria de converter? : ')

    const result: number = convertMass(values, from, toUn)
    
    return `${values}${from} é igual a ${result}${toUn}`
};

console.log(exec());



