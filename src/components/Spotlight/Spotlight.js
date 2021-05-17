import React from 'react';
import './Spotlight.css';

const Spotlight = ({focus, clearFocus}) => {
  const spotlightedMovie = focus.map(movie => {
    return (
    <article className='spotlight-card' key={movie.id}>
      <img className='spotlight-image' src={movie.backdrop_path} alt={movie.title}/>
      <h1>{movie.title}</h1>
      <p>🍅 {Math.round(movie.average_rating)}</p>
      <p>Released {new Date(movie.release_date).toDateString()}</p>
      <button className='back-button' onClick={() => clearFocus()}>🔙</button>
    </article>
  )
  })

  return (
    <div className='spotlight-container'>
      {spotlightedMovie}
    </div>
  )
}

export default Spotlight;
