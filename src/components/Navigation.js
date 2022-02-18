import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Navigation = () => {
  return (
    <div className="navigation">
      <NavLink
        to="/"
        className={({ isActive }) => 'navLink' + (isActive ? ' activated' : '')}
      >
        Accueil <FontAwesomeIcon icon={faHome} />
      </NavLink>
      <NavLink
        to="/fav"
        className={({ isActive }) => 'navLink' + (isActive ? ' activated' : '')}
      >
        Favoris <FontAwesomeIcon icon={faStar} />
      </NavLink>
    </div>
  );
};

export default Navigation;
