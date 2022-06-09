import React from "react";
import './global.css';
import { Outlet, Link } from "react-router-dom";


const Card = ({ movie }) => {
    return (
        <div className="ml-5 crd">
            <div className="multi-button">
                <button className="fas fa-heart"></button>
                <button className="fas fa-share-alt"></button>
            </div>
            <div className="slide ml-5 card" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w200${movie.poster_path})` }}>
                <div className="descriptions">
                    <h1 className="movieTitle">{movie.original_title}</h1>
                    <p className="dad">{movie.overview}</p>
                    <Link to={`/${movie.id}`}>
                        <button className="niceButton">
                            Ver más
                        </button>
                    </Link>
                    <Outlet />
                </div>
            </div>
        </div>


    );
}
export default Card;