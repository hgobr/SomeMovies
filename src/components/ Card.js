import React from 'react';

const Card = ({ movie }) => {
  const dateFormat = (date) => {
    let [yy, mm, dd] = date.split('-');
    return [dd, mm, yy].join('-');
  };
  return (
    <div className="card">
      <img
        src={
          movie.poster_path
            ? 'http://image.tmdb.org/t/p/w500' + movie.poster_path
            : './img/poster01.jpg'
        }
        alt=""
      />
      <h2>{movie.title}</h2>
      {movie.release_date ? (
        <h5>Date : {dateFormat(movie.release_date)}</h5>
      ) : (
        ''
      )}
      <h4>{movie.vote_average}/10 🌟</h4>
    </div>
  );
};

export default Card;
