import React from 'react';
import Character from './components/Character'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import axios from 'axios'
import './App.css'

class App extends React.Component {
  state = {
    characters: [],
    infos: [],
    previouslyUrl: '/'
  }

  nextpage (urlString) {
    axios.get(urlString ? this.urlPagination(urlString) : this.state.info.next)
    .then(res => {
      const characters = res.data.results;
      const info = res.data.info;
      this.setState({ info, characters});
    })
  }

  urlPagination (urlString)  {
    urlString = `${urlString}`
    urlString = urlString.replace(urlString[urlString.length - 1], urlString[urlString.length - 1]-2)
    return urlString
  }



  componentDidMount() {
    axios.get(`https://rickandmortyapi.com/api/character`)
      .then(res => {
        const characters = res.data.results;
        const info = res.data.info;
        this.setState({ info, characters });
      })
  }

 render() {

  return (
    <div className="App">
      <h1 className="title">Rick and Morty Status Catalog</h1>
      <Container>
        <Row>
          {this.state.characters.map((character, index) => {
                return <Character 
                                name={character.name}
                                key={index}
                                status={character.status}
                                image={character.image}
                                origin={character.origin}
                        />
          })}
        </Row>
        <Button className="pagination-button" onClick={() =>this.nextpage(this.state.info.next)}>Previous page</Button>
        <Button className="pagination-button" onClick={() => this.nextpage()}>Next page</Button>
      </Container>
    </div>
  );
 }
}

export default App;