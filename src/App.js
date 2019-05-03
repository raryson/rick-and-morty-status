import React from 'react';

import Character from './components/Character'
import axios from 'axios'
import './App.css'

class App extends React.Component {
  state = {
    characters: []
  }

  componentDidMount() {
    axios.get(`https://rickandmortyapi.com/api/character`)
      .then(res => {
        const characters = res.data.results;
        this.setState({ characters });
      })
  }

 render() {
  

  return (
    <div className="App">
      {this.state.characters.map((character, index) => {
        return <Character name={character.name} key={index} status={character.status}/>
      })}
    </div>
  );
 }
}

export default App;