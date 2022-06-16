import React from "react";
import "./global.css";
import "./Movie.css";
import Navbar from './components/Navbar';
import './Movie.css';
import '../components/global.css';

const Movie = ({ movie }) => {
    /*inspeccionar esta: https://tmdb-dagmawibabi.vercel.app/*/

    return (
        <>
            <Navbar />
            <div className="movie-card">
                <div className="container">
                    <img
                        src={"https://image.tmdb.org/t/p/w200" + movie.backdrop_path}
                        alt="cover"
                        className="cover"
                    />

                    <div className="hero">
                        <div className="details">
                            <div className="title1">{movie.original_title}</div>

                            <div className="title2">The Battle of the Five Armies</div>

                            <fieldset className="rating">
                                <input type="radio" id="star5" name="rating" value="5" />
                                <label
                                    className="full"
                                    for="star5"
                                    title="Awesome - 5 stars"
                                ></label>
                                <input
                                    type="radio"
                                    id="star4half"
                                    name="rating"
                                    value="4 and a half"
                                />
                                <label
                                    className="half"
                                    for="star4half"
                                    title="Pretty good - 4.5 stars"
                                ></label>
                                <input
                                    type="radio"
                                    id="star4"
                                    name="rating"
                                    value="4"
                                    checked
                                />
                                <label
                                    className="full"
                                    for="star4"
                                    title="Pretty good - 4 stars"
                                ></label>
                                <input
                                    type="radio"
                                    id="star3half"
                                    name="rating"
                                    value="3 and a half"
                                />
                                <label
                                    className="half"
                                    for="star3half"
                                    title="Meh - 3.5 stars"
                                ></label>
                                <input type="radio" id="star3" name="rating" value="3" />
                                <label
                                    className="full"
                                    for="star3"
                                    title="Meh - 3 stars"
                                ></label>
                                <input
                                    type="radio"
                                    id="star2half"
                                    name="rating"
                                    value="2 and a half"
                                />
                                <label
                                    className="half"
                                    for="star2half"
                                    title="Kinda bad - 2.5 stars"
                                ></label>
                                <input type="radio" id="star2" name="rating" value="2" />
                                <label
                                    className="full"
                                    for="star2"
                                    title="Kinda bad - 2 stars"
                                ></label>
                                <input
                                    type="radio"
                                    id="star1half"
                                    name="rating"
                                    value="1 and a half"
                                />
                                <label
                                    className="half"
                                    for="star1half"
                                    title="Meh - 1.5 stars"
                                ></label>
                                <input type="radio" id="star1" name="rating" value="1" />
                                <label
                                    className="full"
                                    for="star1"
                                    title="Sucks big time - 1 star"
                                ></label>
                                <input type="radio" id="starhalf" name="rating" value="half" />
                                <label
                                    className="half"
                                    for="starhalf"
                                    title="Sucks big time - 0.5 stars"
                                ></label>
                            </fieldset>
                            <span className="likes">{movie.vote_count} votos</span>
                        </div>
                    </div>

                    <div className="description">
                        <div className="column1">
                            <span className="tag">action</span>
                            <span className="tag">fantasy</span>
                            <span className="tag">adventure</span>
                        </div>
                        <div className="column2">
                            <p>{movie.overview}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Movie;

/*
<div className="ml-5 crd">
    <div className="" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w200${movie.poster_path})` }}>

                <div className="descriptions">
            <h1 className="movieTitle">{movie.original_title}</h1>
            <p className="dad">{movie.overview}</p>
            <a href="../Movie.js"><button className="niceButton">
            Ver más
            </button></a>
        </div>
        </div>
        </div>
*/
