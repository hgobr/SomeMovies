import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="footerItems">
        <img src="./img/popcorn01.png" alt="logo" />
        <div className="footerText">
          <h4>© 2022</h4>
          <p>Some Movies</p>
        </div>
      </div>

      <div className="footerLinks">
        <NavLink to="/">
          <FontAwesomeIcon icon={faHome} />
        </NavLink>
        <NavLink to="/fav">
          <FontAwesomeIcon icon={faStar} />
        </NavLink>
      </div>
    </footer>
  );
};

export default Footer;
