import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const Card = ({ movie }) => {
  const dateFormat = (date) => {
    let [yy, mm, dd] = date.split('-');
    return [dd, mm, yy].join('-');
  };

  const genreList = () => {
    let genreArray = [];
    for (let i = 0; i < movie.genre_ids.length; i++) {
      switch (movie.genre_ids[i]) {
        case 28:
          genreArray.push(`Action`);
          break;
        case 12:
          genreArray.push(`Aventure`);
          break;
        case 16:
          genreArray.push(`Animation`);
          break;
        case 35:
          genreArray.push(`Comédie`);
          break;
        case 80:
          genreArray.push(`Policier`);
          break;
        case 99:
          genreArray.push(`Documentaire`);
          break;
        case 18:
          genreArray.push(`Drame`);
          break;
        case 10751:
          genreArray.push(`Famille`);
          break;
        case 14:
          genreArray.push(`Fantasy`);
          break;
        case 36:
          genreArray.push(`Histoire`);
          break;
        case 27:
          genreArray.push(`Horreur`);
          break;
        case 10402:
          genreArray.push(`Musique`);
          break;
        case 9648:
          genreArray.push(`Mystère`);
          break;
        case 10749:
          genreArray.push(`Romance`);
          break;
        case 878:
          genreArray.push(`Science-fiction`);
          break;
        case 10770:
          genreArray.push(`Téléfilm`);
          break;
        case 53:
          genreArray.push(`Thriller`);
          break;
        case 10752:
          genreArray.push(`Guerre`);
          break;
        case 37:
          genreArray.push(`Western`);
          break;
        default:
          break;
      }
    }
    return genreArray.map((genre) => <li key={genre}>{genre}</li>);
  };

  const addStorage = () => {
    let storedMovies = window.localStorage.movies
      ? window.localStorage.movies.split(',')
      : [];
    if (!storedMovies.includes(movie.id.toString())) {
      storedMovies.push(movie.id);
      window.localStorage.movies = storedMovies;
    }
  };

  const deleteStorage = () => {
    let storedData = window.localStorage.movies.split(',');

    let newData = storedData.filter((id) => id != movie.id);

    window.localStorage.movies = newData;
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
      <div className="cardOverlay">
        <h2>{movie.title}</h2>
        {movie.release_date ? (
          <h5>Date : {dateFormat(movie.release_date)}</h5>
        ) : (
          ''
        )}
        <h4>{movie.vote_average}/10 🌟</h4>
        <ul>
          {movie.genre_ids
            ? genreList()
            : movie.genres.map((genre, index) => (
                <li key={index}>{genre.name}</li>
              ))}
        </ul>
        {movie.genre_ids ? (
          <div
            className="btn"
            onClick={(e) => {
              addStorage();
              e.currentTarget.classList.toggle('liked');
            }}
          >
            <FontAwesomeIcon icon={faStar} />
          </div>
        ) : (
          <div
            className="btn delete"
            onClick={() => {
              deleteStorage();
              window.location.reload();
            }}
          >
            <FontAwesomeIcon icon={faXmark} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
