import React, { Component } from "react";
import pokemons from "./data";
import Pokemon from "./Pokemon";


class Select extends Component {
    constructor() {
        super()
        this.state = {
          atualizador: 0
        }
        this.handleClick = this.handleClick.bind(this)
    }


    handleClick(allPokemons) {
      this.setState({
        atualizador: (this.state.atualizador + 1) % allPokemons
      })
    }

    render() {
        const allPoke =  pokemons.map((poke) =><Pokemon key={poke.id} name={poke} />)
        return (
        <div>
        <button onClick={() => this.handleClick(pokemons.length)}>Next</button>
        <Pokemon name={allPoke[this.state.atualizador].props.name} />
        </div>
        )
    }
}

export default Select