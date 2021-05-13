import React from 'react';
import Card from '../Card/Card';
import './Movies.css';

const Movies = ({movies, focusOnFilm}) => {

  const movieCards = movies.map(movie => {
    return (
      <Card
        path={movie.poster_path}
        title={movie.title}
        rating={Math.round(movie.average_rating)}
        releaseDate={new Date(movie.release_date).toDateString()}
        focusOnFilm={focusOnFilm}
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
