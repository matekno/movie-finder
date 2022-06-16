import React from "react";
import Navbar from '../components/Navbar';
import './Movie.css';
import { useState, useEffect } from "react";
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
    }, [])
    /*inspeccionar esta: https://tmdb-dagmawibabi.vercel.app/*/
    /*ahora esta: https://www.themoviedb.org/movie/920-cars?language=es*/
    let backdropImage = "https://image.tmdb.org/t/p/original" + movie.backdrop_path;
    
    

    return movie && (
        <>
            <div className='detailsPage' style={{ backgroundImage:`url(${backdropImage})`}}>
                <div className="pic">
                    <a href={movie.homepage}> <img alt='moviePoster' className='moviePosterD' src={"https://image.tmdb.org/t/p/original" + movie.poster_path}></img> </a>
                </div>
                <div className="info">
                    <h1 className='title'> {movie.original_title} </h1>
                    <hr style="opacity: 0.1;"></hr>
                    <div className="row">
                        <h5 className="date"> {movie.release_date} </h5>
                        <div className="genres">
                        <noscript>aca poner los generos lindos con botoncitos gradients azules de fondo</noscript>
                        </div>
                    </div>
                    <div className="row">
                        <canvas id="myCanvas" width="289" height="125"></canvas>
                        <noscript>ACA PONER 3 CIRCULOS CON ICONOS ADENTRO</noscript>
                    </div>
                    <i><h4 className="subtitle">{movie.tagline}</h4></i>
                    <h5>Descripción: </h5>
                    <p className="descripcion">
                        {movie.overview}
                    </p>


                </div>
            </div>
        </>
    );
}

export default Movie;
