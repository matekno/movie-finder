import React from "react";
import './global.css';

const Card = ({ movie }) => {
    return (
        <div>
            <div className="slide card" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w200${movie.poster_path})` }}>
                
                
                <p>{movie.desc}</p>
                <div className="descriptions">
                <h1>{movie.original_title}</h1>                    <p>{movie.overview}</p>
                    <a href=""><button>
                    Ver más
                    </button></a>

                </div>
                </div>
                </div>


    );
}
export default Card;