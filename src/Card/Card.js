import React from 'react';
import './Card.css';

const Card = ({ path, title, rating, releaseDate }) => {
  return (
    <article className='card'>
      <img width='50' src={path} alt={title}/>
      <h3>{title}</h3>
      <p>{rating}</p>
      <p>{releaseDate}</p>
    </article>
  )
}

export default Card;
