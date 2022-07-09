const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];
  
  function containsA() {
    const ach = names.reduce((acc, curr) => acc += curr).split('').filter((a) => a === 'a' || a === 'A')
    return ach.length
  }

  console.log(containsA());