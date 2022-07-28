import './App.css';
import Pokedex from './Pokedex';
import Pokemon from './Pokemon';
import pokemons from './data';
import React, { Component } from 'react';
import Select from './Select';


class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      typePokemons: pokemons,
      filter: ''
    }
    this.filterPoke = this.filterPoke.bind(this)
  }

  filterPoke(type) {
    this.setState(()  => ({
      filter: type,
      typePokemons: pokemons.filter((e) => e.type === this.state.filter)
    }))
  }

  render() {
    const { typePokemons } = this.state
  return (
  <div>
    <Pokedex />
    <Select />
    <button onClick={() => this.filterPoke('Electric')}>Eletric</button>
    <button onClick={() => this.filterPoke('Fire')} >Fire</button>
    <button onClick={() => this.filterPoke('Psychic')} >Psychic</button>
    <div className='left'> {typePokemons.map((poke) =><Pokemon key={poke.id} name={poke} />)}</div>
  </div>
  )
  }
}
export default App;
