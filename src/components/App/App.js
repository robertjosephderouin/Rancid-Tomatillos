import React, { Component } from 'react';
import Movies from '../Movies/Movies';
import { getMovies } from '../../api-calls';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      error: ''
    }
  }

  componentDidMount() {
    getMovies()
      .then(data => {
        this.setState({ movies: data.movies })
      })
      .catch(() => this.setState({ error: 'Something went wrong'}))
  }

  render() {
    return (
      <main className='App'>
        <h1>Rancid Tomatillos</h1>
        {!this.state.movies.length && !this.state.error && <h2>Loading movies...</h2>}
        {this.state.error && <h2>{this.state.error}</h2>}
        <Movies movies={this.state.movies} />
      </main>
    )
  }
}

export default App;
