import axios from "axios";


export const getMovies = async () =>{
    const res = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=13d84b90cb476a717b73b72950066c86");
    return res.data;
}

export const getMoviesByGenre = async (genre) =>{
    const res = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=13d84b90cb476a717b73b72950066c86&with_genres=${genre}`);
    return res.data;
}

export const getTopMovies = async () =>{
    const res = await axios.get("https://api.themoviedb.org/3/movie/top_rated?api_key=13d84b90cb476a717b73b72950066c86");
    return res.data;
}

export const getTopMoviesByGenre = async (genre) =>{
    const res = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=13d84b90cb476a717b73b72950066c86&with_genres=${genre}`);
    return res.data;
}

export const getUpcomingMovies = async () =>{
    const res = await axios.get("https://api.themoviedb.org/3/movie/upcoming?api_key=13d84b90cb476a717b73b72950066c86");
    return res.data;
}

export const getUpcomingMoviesByGenre = async (genre) =>{
    const res = await axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=13d84b90cb476a717b73b72950066c86&with_genres=${genre}`);
    return res.data;
} 