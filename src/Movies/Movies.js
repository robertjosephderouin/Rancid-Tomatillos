import React from 'react';
import Card from '../Card/Card';
import movieData from '../movieData';
import './Movies.css';

const Movies = ({movies}) => {

  const movieCards = movies.map(movie => {
    return (
      <Card
        path={movie.poster_path}
        title={movie.title}
        rating={movie.average_rating}
        releaseDate={movie.release_date}
      />
    )
  })

  return (
    <div className='movies-container'>
      {movieCards}
    </div>
  )
}


export default Movies;
