import React from 'react';
import './Spotlight.css';

const Spotlight = ({focus, clearFocus}) => {
  const spotlightedMovie = focus.map(movie => {
    return (
    <article>
      <img src={movie.poster_path} alt={movie.title}/>
      <h1>{movie.title}</h1>
      <p>{Math.round(movie.average_rating)}</p>
      <p>{new Date(movie.release_date).toDateString()}</p>
      <button onClick={() => clearFocus()}>🔙</button>
    </article>
  )
  })

  return (
    <div>
      {spotlightedMovie}
    </div>
  )
}

export default Spotlight;
