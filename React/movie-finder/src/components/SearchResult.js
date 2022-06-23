import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { GetMoviesByKeyword } from "../helpers/searchBarHelper";
import './global.css'
import Card from "./Card";


const SearchResults = () => {
    let { kw } = useParams();
    const [movies, setMovies] = useState([]);
    // setMovies(GetMoviesByKeyword(params));

    useEffect(() => {
        (async () => {
            const res = await GetMoviesByKeyword(kw);
            setMovies(res);
        })();
    }, []);

    return (
        <div>
            <h1>RESULTADOS DE TU BUSQUEDA EN CONSOLA</h1>
            {movies.map(m => {
                return (
                    <div className="peliculaResultante">
                        {/* <Card key={m.id} movie={m}/> */}
                        <h2 className="tituloResultante">{m.original_title}</h2>

                        <img alt='moviePoster' className="fotitoResultante" src={"https://image.tmdb.org/t/p/original" + m.poster_path}></img>
                        <h4 className="overviewResultante">{m.overview}</h4>
                    </div>
                )
            })}
        </div>
    );
}

export default SearchResults