import React from "react";
import './global.css';

const Card = ({ movie }) => {
    return (
        <div className="ml-5">
            <div className="slide ml-5 card" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w200${movie.poster_path})` }}>
                
                
                <p>{movie.desc}</p>
                <div className="descriptions">
                <h1>{movie.original_title}</h1>                    <p>{movie.overview}</p>
                    <a href="../Movie.js"><button className="niceButton">
                    Ver más
                    </button></a>

                </div>
                </div>
                </div>


    );
}
export default Card;