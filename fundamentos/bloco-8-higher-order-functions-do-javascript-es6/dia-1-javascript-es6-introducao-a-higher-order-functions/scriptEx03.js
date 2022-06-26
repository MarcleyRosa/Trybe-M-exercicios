// 1°
// const numbers = [19, 21, 30, 3, 45, 22, 15];

// const veryDiv = (number) => number % 3 === 0 && number % 5 === 0
// const findDivisibleBy3And5 = (arrays) => arrays.find(veryDiv)

// console.log(findDivisibleBy3And5(numbers))

// 2°
// const names = ['João', 'Irene', 'Fernando', 'Maria'];

// const veryLetr = (nome) => nome.length >= 5
// const findNameWithFiveLetters = () => names.find(veryLetr)

// console.log(findNameWithFiveLetters());

// 3°

// const musicas = [
//     { id: '31031685', title: 'Partita in C moll BWV 997' },
//     { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
//     { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
//   ]

//   function findMusic(id) {
//    const test = musicas.find((element) => element.id === id).title
//    return test
//   }
  
//   console.log(findMusic('31031686'))

// const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

// const hasName = (arr, name) => {
//   const veryName = arr.some((non) => non === name )

//   return veryName
// }

// console.log(hasName(names, 'Ana'))

// const people = [
//   { name: 'Mateus', age: 18 },
//   { name: 'José', age: 16 },
//   { name: 'Ana', age: 23 },
//   { name: 'Cláudia', age: 20 },
//   { name: 'Bruna', age: 19 },
// ];

// const verifyAges = (arr, minimumAge) => {
//  return arr.every((element) => element.age >= minimumAge)
// }

// console.log(verifyAges(people, 18));

const estudantes = [
  {
    nome: 'Jorge',
    sobrenome: 'Silva',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 67 },
      { name: 'Português', nota: 79 },
      { name: 'Química', nota: 70 },
      { name: 'Biologia', nota: 65 },
    ],
  },
  {
    nome: 'Mario',
    sobrenome: 'Ferreira',
    idade: 15,
    turno: 'Tarde',
    materias: [
      { name: 'Matemática', nota: '59' },
      { name: 'Português', nota: '80' },
      { name: 'Química', nota: '78' },
      { name: 'Biologia', nota: '92' },
    ],
  },
  {
    nome: 'Jorge',
    sobrenome: 'Santos',
    idade: 15,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: '76' },
      { name: 'Português', nota: '90' },
      { name: 'Química', nota: '70' },
      { name: 'Biologia', nota: '80' },
    ],
  },
  {
    nome: 'Maria',
    sobrenome: 'Silveira',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: '91' },
      { name: 'Português', nota: '85' },
      { name: 'Química', nota: '92' },
      { name: 'Biologia', nota: '90' },
    ],
  },
  {
    nome: 'Natalia',
    sobrenome: 'Castro',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: '70' },
      { name: 'Português', nota: '70' },
      { name: 'Química', nota: '60' },
      { name: 'Biologia', nota: '50' },
    ],
  },
  {
    nome: 'Wilson',
    sobrenome: 'Martins',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: '80' },
      { name: 'Português', nota: '82' },
      { name: 'Química', nota: '79' },
      { name: 'Biologia', nota: '75' },
    ],
  },
];

const allNameStudents = estudantes.filter((estudante) => (
  estudante.turno === 'Manhã')).map((estudante) => `${estudante.nome} ${estudante.sobrenome}`);

console.log(allNameStudents);