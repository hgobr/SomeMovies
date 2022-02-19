import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from '../components/ Card';
import Footer from '../components/Footer';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';

const Fav = () => {
  const [listData, setListData] = useState([]);

  useEffect(() => {
    let moviesId = window.localStorage.movies
      ? window.localStorage.movies.split(',')
      : [];

    for (let i = 0; i < moviesId.length; i++) {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${moviesId[i]}?api_key=cb86069fc97109e4478b8eb2ec3f2576&language=fr-FR`
        )
        .then((res) => setListData((listData) => [...listData, res.data]));
    }
  }, []);

  return (
    <div className="fav">
      <Navigation />
      <Logo />
      <h1 style={{ textAlign: 'center' }}>Vos favoris</h1>
      <div className="result">
        {listData.length > 0 ? (
          listData.map((movie) => <Card movie={movie} key={movie.id} />)
        ) : (
          <h2>Aucun favoris</h2>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Fav;
