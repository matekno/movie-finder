import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { GetMoviesByKeyword } from "../helpers/searchBarHelper";
import './global.css'
import {Link} from "react-router-dom";



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
            {movies.map(m => {
                return (
                    <Link to={`/details/${m.id}` }>

                    <div className="peliculasResultantes">
                    <div className="peliculaResultante">
                    <img alt='moviePoster' className="fotitoResultante" src={"https://image.tmdb.org/t/p/original" + m.poster_path}></img>

                        <h2 className="title1">{m.original_title}</h2>

                        <h4 className="overviewResultante">{m.overview}</h4>
                    </div>
                    </div>
                    </Link>

                )
            })}
        </div>
    );
}

export default SearchResults;