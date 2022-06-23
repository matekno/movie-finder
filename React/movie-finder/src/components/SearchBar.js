import React from "react";
import { useState } from "react";
import './global.css';
import { GetMoviesByKeyword } from "../helpers/searchBarHelper";

const SearchBar = () => {
    const [input, setInput] = useState('');
    const [movies, setMovies] = useState();
    const inputeado = (e) => {
        setInput(e.target.value);
        // setMovies(GetMoviesByKeyword(input));
        console.log(input);
    }
    return (
        <form>
            <div className="search-container">
                <input type="text" name="search" placeholder="Buscar..." className="search-input" value={input} onInput={e => inputeado(e)} />
                <a href={`/search/${input}`} className="search-btn">
                    <i className="fas fa-search"></i>
                </a>
            </div>
        </form>

    )
}
export default SearchBar