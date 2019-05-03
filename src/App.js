import React from 'react';
import Col from 'react-bootstrap/Col'
import Character from './components/Character'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
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
      <h1 className="title">Rick and Morty Status Catalog</h1>
      <Container>
        <Row>
          {this.state.characters.map((character, index) => {
                return <Character name={character.name} key={index} status={character.status} image={character.image}/>
          })}
        </Row>
      </Container>
    </div>
  );
 }
}

export default App;