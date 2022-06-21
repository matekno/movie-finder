import React from "react";
import './global.css';
import { Link,useNavigate   } from "react-router-dom";

// import {BrowserRouter, Routes, Route, useNavigate, useParams} from "react-router-dom";


const Card = ({ movie }) => {
    let navigate = useNavigate();
    const redirigir = (url) =>{
        navigate(url);
    }
    const redir = `/details/${movie.id}`;
    

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
                    <Link to={redir}>
                        <button className="niceButton">
                            Ver más
                        </button>
                    </Link>
                </div>
            </div>
        </div>


    );
}
export default Card;