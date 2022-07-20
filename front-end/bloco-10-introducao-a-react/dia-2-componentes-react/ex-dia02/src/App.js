import './App.css';
import Pokedex from './Pokedex';
import Pokemon from './Pokemon';
import pokemons from './data';

function App() {
  return <div>
    <Pokedex />
    <div className='left'> {pokemons.map((poke) =><Pokemon key={poke.id} name={poke} />)}</div>
  </div>
}
export default App;
