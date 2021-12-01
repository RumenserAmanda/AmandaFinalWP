import React from 'react';
import Navigation from '../components/Navigation';
import Header from '../components/Header';
import Songs from '../components/Songs';
import Footer from '../components/Footer';

const Home = () => {
  return(
    <>
      <Navigation />
      <Header />
      <Songs />
      <Footer />
    </>
  );
}

export default Home;
