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
        to="/about"
        className={({ isActive }) => 'navLink' + (isActive ? ' activated' : '')}
      >
        À propos
      </NavLink>
    </div>
  );
};

export default Navigation;
