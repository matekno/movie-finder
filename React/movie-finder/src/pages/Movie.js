import React from "react";
import "./global.css";
import "./Movie.css";
import Navbar from './components/Navbar';
import './Movie.css';
import '../components/global.css';
import './details.css'


export const Movie = ({ movie }) => {
    /*inspeccionar esta: https://tmdb-dagmawibabi.vercel.app/*/
        let backdropImage = "https://image.tmdb.org/t/p/original" + movie.bgImage;
        return (
            <div className='detailsPage' style={{backgroundImage: `url(${backdropImage})`}}>
                <div className='banner'>
                    <div className='details'>
                        <div className='rateAndLangD'>
                            <h5 className='movieReleaseDateD'> {movie.movieRD} </h5>
                            {
                                movie.status === 'Released' ?  
                                    <h5 className='movieReleaseDateD' style={{color: '#00ffdd'}}> {movie.status} </h5>
                                : 
                                    ( movie.status === 'Post Production' ? 
                                    <h5 className='movieReleaseDateD' style={{color: '#eeee00'}}> {movie.status} </h5> :  <h5 className='movieReleaseDateD'> {movie.status} </h5>)
                            }
                        </div>
                        <h1 className='movieTitleD'> {movie.movieTitle} </h1>
                        {
                            movie.type === 'tv' ? "" :  <h2> {movie.tagline} </h2>
                        }
                    
                        <p className='movieDescriptionD'> {movie.movieDescription} </p>
                        <div style={{marginBottom: '30px'}}></div>
                        <hr style={{opacity: '0.1'}}></hr>
                        <div style={{marginBottom: '15px'}}></div>
                        <div style={{display: 'inline-flex'}}> 
                        {
                           movie.type !== "tv" ? movie.movieGenres === undefined ? "" : movie.movieGenres.map((genre, index) => {
                                return (
                                    <div>
    
                                        <h4 key={index} style={{marginRight: '10px', fontWeight: 'normal', fontStyle: 'italic'}} className='movieGenreD'> {genre.name} </h4>
                                    </div>
                                    )
                            }) : <div></div>
                        }
                        </div>
                        {
                            movie.type === "tv" ? 
                                <div>
    
                                </div> : 
                                <div>
                                    <div className='rateAndLangD'>
                                        <p className='movieDescriptionD'>  {"Runtime: " + movie.runtime + " mins"} </p>                    
                                        <p className='movieDescriptionD'>  {"Budget: $" + movie.budget} </p>                    
                                    </div>
                                </div>
                        }
                        <div className='rateAndLangD'>
                        <h4 className='movieRatingD'> {"Rating: " + movie.movieRating} </h4>
                        <h4>Language: <span className='movieLanguageD'> {movie.movieLanguage} </span>  </h4>                        
                        </div>
                        <div style={{paddingBottom: '20px'}}></div>
                    </div>
                    <div>
                        <a href={movie.homepage}> <img alt='moviePoster' className='moviePosterD' src={"https://image.tmdb.org/t/p/original" + movie.moviePoster}></img> </a>
                    </div>
                </div>
            </div>
        );
    }
    /*
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
*/

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
