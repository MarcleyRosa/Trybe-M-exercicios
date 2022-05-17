let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let valor = []

  for (let ind2 = 0, cont = 1; ind2 < numbers.length - 1; ind2 += 1, cont += 1) {
    let mult = numbers[ind2] * numbers[cont]
    valor.push(mult)
   
  }
  valor.push(numbers[numbers.length - 1] * 2)
  console.log(valor);