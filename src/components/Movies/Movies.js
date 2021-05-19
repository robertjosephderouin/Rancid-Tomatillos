import React from 'react';
import Card from '../Card/Card';
import './Movies.css';
import { Link } from 'react-router-dom';

const Movies = ({movies}) => {

  const movieCards = movies.map(movie => {
    return (
      <Link className='link' to={`/${movie.id}`} key={movie.id}>
        <Card
          path={movie.poster_path}
          title={movie.title}
          rating={Math.round(movie.average_rating)}
          releaseDate={new Date(movie.release_date).toDateString()}
        />
      </Link>
    )
  })

  return (
    <div className='movies-container'>
      {movieCards}
    </div>
  )
}


export default Movies;
