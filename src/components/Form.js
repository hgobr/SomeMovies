import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Form = () => {
  const [moviesData, setMoviesData] = useState([]);

  useEffect(() => {
    axios
      .get(
        'https://api.themoviedb.org/3/search/movie?api_key=cb86069fc97109e4478b8eb2ec3f2576&query=$star&language=fr-FR`'
      )
      .then((res) => setMoviesData(res.data.results));
  }, []);

  return (
    <div className="formComponent">
      <div className="formContainer">
        <form action="">
          <input type="text" placeholder="Cherchez un film" id="searchInput" />
          <input type="submit" placeholder="Go" />
        </form>
        <div className="btnSortContainer">
          <div className="btnText">Classement</div>
          <div className="btnSort" id="goodToBad">
            <span>⇧</span>
          </div>
          <div className="btnSort" id="badToGood">
            <span>⇩</span>
          </div>
        </div>
      </div>
      <div className="result">
        {moviesData.map((movie) => (
          <h2 key={movie.id}>{movie.title}</h2>
        ))}
      </div>
    </div>
  );
};

export default Form;
