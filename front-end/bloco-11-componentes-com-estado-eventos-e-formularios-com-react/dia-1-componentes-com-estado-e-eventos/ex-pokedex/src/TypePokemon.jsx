import React, { Component } from "react";
import pokemons from "./data";



class TypePokemon extends Component {

    constructor() {
        super()
        this.state = {
            typePokemons: pokemons,
            atualizador: 0,
            filter: ''
          }
        this.handlrClick = this.handlrClick.bind(this)
    }
    

    handlrClick(param) {
      
    }
    render() {
        return (
        <div>
          <button onClick={this.handlrClick('Eletric')}>Eletric</button>
          <button onClick={this.handlrClick('Fire')} >Fire</button>
          <button>Psychic</button>
          <button>Bug</button>
          <button>Poison</button>
          <button>Normal</button>
          <button>Dragon</button>
        </div>
        )
    }
}

export default TypePokemon;
