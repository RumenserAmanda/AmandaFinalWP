import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const About = () => {
  return(
    <>
      <Navigation />

      <div className="container my-5">
        <h1>About this Application</h1>
        <p>Aplikasi mencari lagu beserta liriknya</p>
        <p>Rumenser, Amanda Putri Hillary Christy</p>
        <p>105011910023</p>
        <p>Final Project Web Progamming</p>
      </div>

      <Footer />
    </>
  );
}

export default About;
