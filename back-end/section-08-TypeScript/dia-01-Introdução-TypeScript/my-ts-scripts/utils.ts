const readlineSync = require('readline-sync')

export function exec(func: any): string {
    const from: string = readlineSync.question('Qual Unidade gostaria de converter? : ')
    const toUn: string = readlineSync.question('Para qual unidade? : ')
    const values: number = readlineSync.questionFloat('Qual valor gostaria de converter? : ')

    const result: number = func(values, from, toUn)
    
    return `${values}${from} é igual a ${result}${toUn}`
};
