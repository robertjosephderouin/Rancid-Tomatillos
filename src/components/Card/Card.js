import React from 'react';
import './Card.css';

const Card = ({ path, title, rating, releaseDate }) => {
  return (
    <article className='card'>
      <img className='gallery-poster' src={path} alt={title}/>
      <h2 className='text'>{title}</h2>
      <p className='text'>🍅 {rating}</p>
      <p className='text'>Released {releaseDate}</p>
    </article>
  )
}

export default Card;
