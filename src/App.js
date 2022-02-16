import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Fav from './pages/Fav';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fav" element={<Fav />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
