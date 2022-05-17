let salarioBruto = 3000
let salarioLiquido
let salaDescInss
let descIr 
if (salarioBruto >= 1212 && salarioBruto <= 1556.94) {
    salarioLiquido =  salarioBruto - ((salarioBruto * 8) / 100)
    
} else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
    salaDescInss = salarioBruto - ((salarioBruto * 9) / 100)
    if (salaDescInss > 1903.98) {
        descIr = ((salaDescInss * 7.5) / 100) - 142.80
        salarioLiquido = salaDescInss - descIr
    }
} else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
    salaDescInss = salarioBruto - ((salarioBruto * 11) / 100)
    if (salaDescInss <= 2826.65) {
        descIr = ((salaDescInss * 7.5) / 100) - 142.80
        salarioLiquido = salaDescInss - descIr
    } else if (salaDescInss > 2826.65 && salaDescInss <= 3751.05) {
        descIr = ((salaDescInss * 15) / 100) - 354.80
        salarioLiquido = salaDescInss - descIr
    } else if (salaDescInss > 3751.05 && salaDescInss <= 4664.68) {
        descIr = ((salaDescInss * 22.5) / 100) - 636.13
        salarioLiquido = salaDescInss - descIr
    } else if (salaDescInss > 4664.68) {
        descIr = ((salaDescInss * 27.5) / 100) - 869.36
        salarioLiquido = salaDescInss - descIr
    }
} else if (salarioBruto > 5189.82) {
    salaDescInss = salarioBruto - 570.88
    descIr = ((salaDescInss * 27.5) / 100) - 869.36
    salarioLiquido = salaDescInss - descIr
} else {
    console.log('Salario informado incorreto');
}

console.log(salarioLiquido);