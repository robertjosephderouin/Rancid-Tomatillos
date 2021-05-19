import React from 'react';
import './Spotlight.css';
import { Link, Redirect } from 'react-router-dom';

const Spotlight = ({ id, poster_path, backdrop_path, title, average_rating, release_date }) => {
  return (
    <div className='spotlight-container'>
    {!release_date && <Redirect to='/' />}
    <article className='spotlight-card' key={id}>
      <img className='spotlight-image' src={backdrop_path} alt={title}/>
      <h2>{title}</h2>
      <p>🍅 {Math.round(average_rating)}</p>
      <p>Released {new Date(release_date).toDateString()}</p>
      <Link to={'/'} className='back-button'>🔙</Link>
    </article>
    </div>
  )
}

export default Spotlight;
