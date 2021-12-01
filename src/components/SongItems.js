import React from 'react';
import { Link } from 'react-router-dom';

const SongItems = (props) => {
   

    return(
    <div className="col mb-5">
        <div className="card h-100">
           
            <div className="card-body p-4">
                <div className="text-center">
                    <h5 className="fw-bolder">{props.song.songTitle}</h5>
                    {props.song.artist}
                </div>
            </div>
            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div className="text-center">
                    <Link className="btn btn-outline-dark mt-auto bg-success" to={`/details/${props.song.songId}`}>View Details</Link>
                </div>
            </div>
        </div>
    </div>
  );
}

export default SongItems;
