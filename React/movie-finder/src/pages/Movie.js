import React from "react";
import Navbar from '../components/Navbar';
import './Movie.css';
import axios from "axios";
import { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { getMovieByID } from "../helpers/fetchMovies";


const Movie = () => {
    let { id } = useParams();
    let [movie, setMovie] = useState({});
    useEffect(() => {
        (async () => {
            const peli = await getMovieByID(id)
            setMovie(peli);
            console.log(peli);
        })();
    },[])
        /*inspeccionar esta: https://tmdb-dagmawibabi.vercel.app/*/
        /*ahora esta: https://www.themoviedb.org/movie/920-cars?language=es*/
    let backdropImage = "https://image.tmdb.org/t/p/original" + movie.backdrop_path;
    return movie && (
        <>
            <div className='detailsPage' style={{backgroundImage: `url(${backdropImage}); background-image: linear-gradient(to right, rgba(52.5, 73.5, 73.5, 1) 150px, rgba(52.5, 73.5, 73.5, 0.84) 100%);` }}>
                <div className="blurredBackground"></div>

            </div>

        </>
        /*
        <div className='detailsPage' style={{ backgroundImage: `url(${backdropImage})` }}>
            <div className='banner'>
                <div className='details'>
                    <div className='rateAndLangD'>
                        <h5 className='movieReleaseDateD'> {movie.release_date} </h5>
                        {
                            movie.status === 'Released' ?
                                <h5 className='movieReleaseDateD' style={{ color: '#00ffdd' }}> {movie.status} </h5>
                                :
                                (movie.status === 'Post Production' ?
                                    <h5 className='movieReleaseDateD' style={{ color: '#eeee00' }}> {movie.status} </h5> : <h5 className='movieReleaseDateD'> {movie.status} </h5>)
                        }
                    </div>
                    <h1 className='movieTitleD'> {movie.original_title} </h1>
                    {
                        movie.type === 'tv' ? "" : <h2> {movie.tagline} </h2>
                    }

                    <p className='movieDescriptionD'> {movie.movieDescription} </p>
                    <div style={{ marginBottom: '30px' }}></div>
                    <hr style={{ opacity: '0.1' }}></hr>
                    <div style={{ marginBottom: '15px' }}></div>
                    <div style={{ display: 'inline-flex' }}>
                        {
                            movie.type !== "tv" ? movie.genres === undefined ? "" : movie.genres.map((genre, index) => {
                                return (
                                    <div>
                                        <h4 key={index} style={{ marginRight: '10px', fontWeight: 'normal', fontStyle: 'italic' }} className='movieGenreD'> {genre.name} </h4>
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
                        <h4 className='movieRatingD'> {"Rating: " + movie.vote_average} </h4>
                        <h4>Language: <span className='movieLanguageD'> {movie.original_language} </span>  </h4>
                    </div>
                    <div style={{ paddingBottom: '20px' }}></div>
                </div>
                <div>
                    <a href={movie.homepage}> <img alt='moviePoster' className='moviePosterD' src={"https://image.tmdb.org/t/p/original" + movie.poster_path}></img> </a>
                </div>
            </div>
        </div>
        */
    );
}

export default Movie;
