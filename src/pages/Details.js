import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SongDetails from '../components/SongDetails';


const Details = () => {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();
  console.log(movieId)
  useEffect(() => {
    // hit TMDB endpoint to get details of a movie
    fetch(`https://api-song-lyrics.herokuapp.com/lyrics/${movieId}`)
    .then(response => response.json())
    .then(data => setMovie(data.data));
    }, 
    // eslint-disable-next-line
  []);

  return(
    <>
      <Navigation />
      <SongDetails movie={movie} />
      <Footer />
    </>
  );
}

export default Details;
