import React from "react";
import './Details.css';
import { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { getMovieByID } from "../helpers/fetchMovies";


const Details = () => {
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
    let atp = "No"; 
    if(movie.adult === false){
        atp = "Sí"; 
    }
    else{
        atp = "No";
    }
    return movie && (
        <>


        <div className='detailsPage' id="garden" style={{ backgroundImage: `url(${backdropImage})`}}>
            <noscript>aca nomas a la foto de fondo le quiero agregar este estilo:     filter: blur(10px);</noscript>
            
            <div className='primera'>
                <a href={movie.homepage}> <img alt='moviePoster' className='moviePosterD ' src={"https://image.tmdb.org/t/p/original" + movie.poster_path}></img> </a>
            </div>

            <div className='segunda'>
                <div className='details'>
                    <div className='rateAndLang'>
                        <i><h5 className='movieReleaseDateD'> {movie.release_date} </h5></i>
                        {
                            movie.status === 'Released' ?
                                <b><h5 className='movieReleaseDateD' style={{ color: 'rgb(189, 242, 255)' }}> {movie.status} </h5></b>
                                :
                                (movie.status === 'Post Production' ?
                                    <h5 className='movieReleaseDateD' style={{ color: '#eeee00' }}> {movie.status} </h5> : <h5 className='movieReleaseDateD'> {movie.status} </h5>)
                        }
                    </div>
                    <h1 className='movieTitleD title1'> {movie.original_title} </h1>
                    <i>{
                        movie.type === 'tv' ? "" : <h2 className='title2'> {movie.tagline} </h2>
                    }</i>

                    <p className='movieDescriptionD'> {movie.movieDescription} </p>
                    <div style={{ marginBottom: '30px' }}></div>
                    <hr style={{ opacity: '0.4' }}></hr>
                    <div style={{ marginBottom: '15px' }}></div>
                    <div style={{ display: 'inline-flex', marginBottom: '20px', marginTop: '5px' }}>
                        {
                            movie.type !== "tv" ? movie.genres === undefined ? "" : movie.genres.map((genre, index) => {
                                return (
                                    <div>
                                        <b><h4 key={index} style={{ marginRight: '10px', fontWeight: 'normal'}} className='customButton'> {genre.name} </h4></b>
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
                                <div className='rateAndLangD' style={{ marginLeft: '20px'}}>
                                    <div className='notSameLine'>
                                    <b><p className="movieDescriptionD">Duración</p></b>
                                    <i><p className='movieDescriptionD'>  {movie.runtime + " mins"} </p></i>
                                    </div>
                                    <div className='notSameLine'>
                                    <b><p className="movieDescriptionD">Presupuesto</p></b>
                                    <i><p className='movieDescriptionD'>  {"$" + movie.budget} </p></i>
                                    </div>
                                    <div className='notSameLine'>
                                    <b><p className="movieDescriptionD">ATP</p></b>
                                    <i><p className='movieDescriptionD'>{atp}</p></i>                         
                                    </div>
                                </div>
                            </div>
                    }
                    <div className='rateAndLangD'>
                        <div className="notSameLine">
                            <b><p className="movieDescriptionD">Rating</p></b>
                            <i><p className="movieDescriptionD">{movie.vote_average}</p></i>
                        </div>
                        <div className="notSameLine">
                            <b><p className="movieDescriptionD">Votos</p></b>
                            <i><p className="movieDescriptionD">{movie.vote_count}</p></i>
                        </div>
                        <div className="notSameLine">
                            <b><p className="movieDescriptionD">Idioma</p></b>
                            <i><p className="movieDescriptionD">{movie.original_language}</p></i>
                        </div>
                    </div>
                    <div style={{ paddingBottom: '20px' }}></div>
                </div>

            </div>
        </div>
        </>

    );
}

export default Details;
