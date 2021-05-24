import React, {Component} from 'react';
import './Spotlight.css';
import { getOverview } from '../../api-calls';
import { Link, Redirect } from 'react-router-dom';

class Spotlight extends Component {
  constructor({id}) {
    super();
    this.state = {
      id: id,
      spotLight: null,
      error: '',
      isLoaded: false,
    }
  }

  componentDidMount = () => {
    getOverview(this.state.id)
      .then(data => {
        this.setState({ spotLight: data.movie })
      })
      .catch(() => {
        this.setState({ error: 'Something went wrong'})
      })
      .finally(() => {
        this.setState({ isLoaded: true })
      })
  }

  render() {
    return (
      <div className='spotlight-container'>
      {!this.state.isLoaded && <h2>Loading spotlight...</h2>}
      {!this.state.error && this.state.isLoaded && !this.state.spotLight && <Redirect to='/' />}
      {this.state.error && <h3>{this.state.error}</h3>}
        <article className='spotlight-card' key={this.state.spotLight?.id}>
          <img className='spotlight-image' src={this.state.spotLight?.backdrop_path} alt={this.state.spotLight?.title}/>
          <h2>{this.state.spotLight?.title}</h2>
          <p>🍅 {Math.round(this.state.spotLight?.average_rating)}</p>
          <p>{this.state.spotLight?.overview}</p>
          <p>Released {new Date(this.state.spotLight?.release_date).toDateString()}</p>
          <Link to={'/'} className='back-button'>🔙</Link>
        </article>
      </div>
    );
  }
}


export default Spotlight;
