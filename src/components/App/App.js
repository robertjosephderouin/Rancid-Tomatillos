import React, { Component } from 'react';
import Movies from '../Movies/Movies';
import Spotlight from '../Spotlight/Spotlight';
import './App.css';
import { getMovies } from '../../api-calls';
import Home from '../Home/Home';
import { Route, Switch, Redirect } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
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

  render() {
    return (
      <main className='App'>
        {!this.state.movies.length && !this.state.error && <h2>Loading movies...</h2>}
        {this.state.error && <h2>{this.state.error}</h2>}
        <Switch>
        <Route exact path="/" render={() => {
          return (
            <section>
              <Home />
              <Movies movies={this.state.movies} />
            </section>
          )
        }} />

        <Route exact path="/:id" render={({match}) => {
          const { id } = match.params;
          const findMovie = this.state.movies.find(movie => movie.id === parseInt(id))
          return <Spotlight {...findMovie} />
        }} />
        <Redirect to='/' />
        </Switch>
      </main>
    )
  }
}

export default App;
