import React, { Component } from 'react';
import Movies from '../Movies/Movies';
import Spotlight from '../Spotlight/Spotlight';
import './App.css';
import { getMovies } from '../../api-calls';

class App extends Component {
  constructor() {
    super();
    this.state = {
      focus: null,
      movies: [],
      error: ''
    }
  }

  componentDidMount = () => {
    getMovies()
      .then(data => {
        this.setState({ movies: data.movies })
      })
      .catch(() => this.setState({ error: 'Something went wrong'}))
  }

  focusOnFilm = (name) => {
    const filteredMovies = this.state.movies.filter(movie => movie.title === name)
    this.setState({ focus: filteredMovies })
  }

  clearFocus = () => {
    this.setState({focus: null})
  }

  render() {
    return (
      <main className='App'>
        <h1 className='title'>Rancid Tomatillos</h1>
        {!this.state.movies.length && !this.state.error && <h2>Loading movies...</h2>}
        {this.state.error && <h2>{this.state.error}</h2>}
        {!this.state.focus && <Movies movies={this.state.movies} focusOnFilm={this.focusOnFilm} />}
        {this.state.focus && <Spotlight focus={this.state.focus} clearFocus={this.clearFocus} />}
      </main>
    )
  }
}

export default App;
