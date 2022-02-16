import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className="navigation">
      <NavLink
        to="/"
        className={({ isActive }) => 'navLink' + (isActive ? ' activated' : '')}
      >
        Accueil
      </NavLink>
      <NavLink
        to="/fav"
        className={({ isActive }) => 'navLink' + (isActive ? ' activated' : '')}
      >
        Favoris ★
      </NavLink>
    </div>
  );
};

export default Navigation;
