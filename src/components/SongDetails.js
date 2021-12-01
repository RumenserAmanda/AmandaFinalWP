import React from 'react';
import { Link } from 'react-router-dom';

const SongDetails = (props) => {


  return(
    <section className="py-5">
        <div className="container px-4 px-lg-5 my-5">
            <div className="row gx-4 gx-lg-5 align-items-center">
               
                 
               
                <div className="col-md-6">
                    <div className="medium mb-1 fw-bolder"> Singer:{props.movie.artist}</div>
                    <h1 className="display-5 fw-bolder">{props.movie.songTitle}</h1>
                    <div className="fs-5 mb-5">
                        <span>lyrics: {props.movie.songLyricsArr}</span>
                    </div>
                    <div className="d-flex">
                        <Link className="btn btn-outline-dark flex-shrink-0" to="/">
                            Back to Home
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default SongDetails;
