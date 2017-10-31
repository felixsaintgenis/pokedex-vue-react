import React, {Component} from 'react';
import './App.css';
var request = require('request');


class App extends Component {
  constructor(props) {
    super(props);
    this.handleValue = this.handleValue.bind(this)
    // this.handleFilter = this.handleFilter.bind(this)

    this.state = {
      pokemonArray: [],
      data: {
        sprites: {
          front_default: ''
        }
      }

    }
  }

  handleValue(event) {

    let pokemonName = event.target.value;
    request(`https://pokeapi.co/api/v2/pokemon-form/${pokemonName}`, (error, response, body) => {

      this.setState({data: JSON.parse(body)})
    });

    // const regexValue = "\\" +
    // "b" + event.target.value;
    // const regex = new RegExp(regexValue, "gmi");
    // let filtered = [];
    //
    // this.state.data && this.state.data.results.map((pokemon) => {
    //
    //   return pokemon.name.match(regex)
    //     ?
    //       filtered.push(pokemon.name)
    //
    //     : console.log('no match found')
    // })
    //
    //   this.setState({
    //   pokemonArray: this.state.pokemonArray = filtered
    //
    // })



}

  // componentDidMount = () => {
  //   request('http://pokeapi.co/api/v2/pokemon-form/', (error, response, body) => {
  //
  //     this.setState({data: JSON.parse(body)})
  //   });
  //
  // };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img className='App-logo' src="http://img04.deviantart.net/c306/i/2016/189/4/e/pokemon_go_globe_icon_by_exovedate-da97h16.png"/>


        </header>

        <input id='input' placeholder="search a pokemon" type="text" name="fname" onKeyUp={this.handleValue}/>
        <div className="PokemonList">
        
          {this.state.data ? <h1>{this.state.data.name}</h1> : ''}
          {this.state.data ? <img src={this.state.data.sprites.front_default} /> : ''}


        </div>
      </div>
    );
  }
}

export default App;
