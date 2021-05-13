import React from 'react';
import './Card.css';

const Card = ({ path, title, rating, releaseDate, focusOnFilm }) => {
  return (
    <article className='card' onClick={() => focusOnFilm(title)}>
      <img className='gallery-poster' src={path} alt={title}/>
      <h3>{title}</h3>
      <p>🍅 {rating}</p>
      <p>Released {releaseDate}</p>
    </article>
  )
}

export default Card;
