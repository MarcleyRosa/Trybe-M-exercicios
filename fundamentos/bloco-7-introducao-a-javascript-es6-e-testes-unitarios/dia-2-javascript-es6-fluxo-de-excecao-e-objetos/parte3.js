const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

  const allLessons = {
    
  }

  function adcTurno(objeto, chaves, valor) {
    objeto[chaves] = valor
  }

adcTurno(lesson2, 'turno', 'noite')

function viewKeys(objeto) {
    console.log(Object.keys(objeto));
}

// viewKeys(lesson3)

function viewValue(objeto) {
    console.log(Object.values(objeto));
}

// viewValue(lesson1)

function junAulas(objeto) {
 Object.assign(objeto, {lesson1}, {lesson2}, {lesson3});

// console.log(objeto);

}

junAulas(allLessons)

function totAlunos() {
    junAulas(allLessons)
    
    // let aluTot = Object.values({lesson1}.lesson1)[1]

    
    console.log( Object.values({lesson1}.lesson1)[1] + Object.values({lesson2}.lesson2)[1] + Object.values({lesson3}.lesson3)[1])
   



}

totAlunos()