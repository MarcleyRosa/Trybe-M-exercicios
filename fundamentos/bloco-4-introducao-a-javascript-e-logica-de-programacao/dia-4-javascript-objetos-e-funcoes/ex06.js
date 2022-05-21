let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },

    
    ],
  };
   console.log('O livro favorito de',leitor.nome, leitor.sobrenome, "se chama", leitor['livrosFavoritos'][0].titulo);
//Atividade 1
   let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
  };

  for (let ind in names) {
    console.log('Olá', names[ind]);
  }
// Atividade 2
  let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };

  for (let i in car) {
    console.log(i, car[i]);
  }