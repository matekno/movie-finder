import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { GetMoviesByKeyword } from "../helpers/searchBarHelper";
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
                    <>
                        {/* <Card key={m.id} movie={m}/> */}
                        <h2>{m.original_title}</h2>
                    </>
                )
            })}
        </div>
    );
}

export default SearchResults