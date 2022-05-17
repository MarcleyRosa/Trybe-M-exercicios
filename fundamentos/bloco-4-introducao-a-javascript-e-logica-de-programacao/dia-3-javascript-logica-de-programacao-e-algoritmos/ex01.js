let fatorial = 10
let resul = fatorial
for (let cont = fatorial; cont >= 2; cont--) {
    resul = resul * (cont - 1)
}
console.log('Fatorial de ', fatorial, 'É:', resul);