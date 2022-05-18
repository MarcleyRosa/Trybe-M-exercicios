let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim'
  };
  let info2 = {
    personagem:'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: 'Sim'
  };

  function boasVindas(personagem) {
      console.log('Boas Vindas '+ personagem);
  }

  boasVindas(info.personagem)

for (per in info) {
    console.log(per);
    if (info[per] === info2[per]) {
        console.log('Ambos recorrente');
    } else {
        console.log(info[per], 'e', info2[per]);
    }
}