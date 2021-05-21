import React from 'react';
import './Spotlight.css';
import { getOverview } from '../../api-calls';
import { Link } from 'react-router-dom';

class Spotlight extends React.Component {
  constructor({id}) {
    super();
    this.state = {
      id: id,
      spotLight: null,
      error: '',
    }
  }

  componentDidMount = () => {
    getOverview(this.state.id)
      .then(data => {
        this.setState({ spotLight: data.movie })
      })
      .catch(() => this.setState({ error: 'Something went wrong'}))
  }

  render() {
    return (
      <div className='spotlight-container'>
        <article className='spotlight-card' key={this.state.spotLight?.id}>
          <img className='spotlight-image' src={this.state.spotLight?.backdrop_path} alt={this.state.spotLight?.title}/>
          <h2>{this.state.spotLight?.title}</h2>
          <p>🍅 {Math.round(this.state.spotLight?.average_rating)}</p>
          <p>{this.state.spotLight?.overview}</p>
          <p>Released {new Date(this.state.spotLight?.release_date).toDateString()}</p>
          <Link to={'/'} className='back-button'>🔙</Link>
        </article>
      </div>
    )
  }
}


export default Spotlight;
