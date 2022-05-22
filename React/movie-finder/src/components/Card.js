import React from "react";
import './global.css';

const Card = ({ movie }) => {
    return (
        <div className="ml-5 crd">
            <div class="multi-button">
                <button class="fas fa-heart"></button>
                <button class="fas fa-share-alt"></button>
            </div>
            <div className="slide ml-5 card" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w200${movie.poster_path})` }}>
                <div className="descriptions">
                    <h1 className="movieTitle">{movie.original_title}</h1>
                    <p className="dad">{movie.overview}</p>
                    <a href="../Movie.js"><button className="niceButton">
                        Ver más
                    </button></a>
                </div>
            </div>
        </div>


    );
}
export default Card;