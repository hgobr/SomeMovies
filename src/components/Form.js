import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from './ Card';

const Form = () => {
  const [moviesData, setMoviesData] = useState([]);
  const [search, setSearch] = useState('home');
  const [sortGoodBad, setGoodBad] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie/?api_key=cb86069fc97109e4478b8eb2ec3f2576&query=${search}&language=fr-FR`
      )
      .then((res) => setMoviesData(res.data.results));
  }, [search]);

  return (
    <div className="formComponent">
      <div className="formContainer">
        <form action="">
          <input
            type="text"
            placeholder="Cherchez un film"
            id="searchInput"
            onChange={(e) => setSearch(e.target.value)}
          />
          <input type="submit" value="Go" />
        </form>
        <div className="btnSortContainer">
          <div className="btnText">Classement</div>
          <div
            className="btnSort"
            id="goodToBad"
            onClick={() => setGoodBad('goodToBad')}
          >
            <span>⇧</span>
          </div>
          <div
            className="btnSort"
            id="badToGood"
            onClick={() => setGoodBad('badToGood')}
          >
            <span>⇩</span>
          </div>
        </div>
      </div>
      <div className="result">
        {moviesData
          .slice(0, 15)
          .sort((a, b) => {
            if (sortGoodBad === 'goodToBad') {
              return b.vote_average - a.vote_average;
            } else if (sortGoodBad === 'badToGood') {
              return a.vote_average - b.vote_average;
            }
          })
          .map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
      </div>
    </div>
  );
};

export default Form;
