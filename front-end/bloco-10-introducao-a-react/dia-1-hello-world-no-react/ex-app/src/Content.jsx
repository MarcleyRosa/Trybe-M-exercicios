import { Component } from "react";

const conteudos = [
    {
      conteudo: 'High Order Functions',
      bloco: 8,
      status: 'Aprendido'
    },
    {
      conteudo: 'Composicao de Componentes',
      bloco: 11,
      status: 'Aprendendo',
    },
    {
      conteudo: 'Composicao de Estados',
      bloco: 12,
      status: 'Aprenderei'
    },
    {
      conteudo: 'Redux',
      bloco: 16,
      status: 'Aprenderei'
    },
  ];

  const selectConteudo = conteudos.map((cont) => 
  <div>
    O conteúdo é: {cont.conteudo} <br></br>
    Status: {cont.status} <br></br>
    Bloco: {cont.bloco}
  </div>)

class Content extends Component {
    render() {
        return <div className="key">{selectConteudo}</div>
    }
}

export default Content