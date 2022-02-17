import React from 'react';
import Footer from '../components/Footer';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';

const About = () => {
  return (
    <div className="fav">
      <Navigation />
      <Logo />
      <h1 style={{ textAlign: 'center' }}>Vos favoris</h1>
      <Footer />
    </div>
  );
};

export default About;
