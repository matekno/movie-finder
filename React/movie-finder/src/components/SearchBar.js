import React from "react";
import { useState } from "react";
import './global.css';
import { GetMoviesByKeyword } from "../helpers/searchBarHelper";

const SearchBar = () =>{
    const [input, setInput] = useState('cars');
    const [movies, setMovies] = useState();
    const inputeado = async(e) =>{
        setInput(e.target.value);
        await setMovies(GetMoviesByKeyword(input));
        console.log(movies);
    }
    return(
        <div className="search-container">
            <input type="text" name="search" placeholder="Buscar..." className="search-input" value={input} onInput={e => inputeado(e)} />
                <a href="#" className="search-btn">
                    <i className="fas fa-search"></i>
                </a>
        </div>
    )
}
export default SearchBar