import axios from "axios";
export const getMovies = async () =>{
    const res = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=13d84b90cb476a717b73b72950066c86&language=en-US&page=1");
    return res.data;
}

export const getSpanishMovies = async () =>{
    const res = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=13d84b90cb476a717b73b72950066c86&language=es-US&page=1")
    return res.data;
}

export const getTopMovies = async () =>{
    const res = await axios.get("https://api.themoviedb.org/3/movie/top_rated?api_key=13d84b90cb476a717b73b72950066c86&language=en-US&page=1");
    return res.data;
}

export const getSpanishTopMovies = async () =>{
    const res = await axios.get("https://api.themoviedb.org/3/movie/top_rated?api_key=13d84b90cb476a717b73b72950066c86&language=es-US&page=1");
    return res.data;
}

export const getUpcomingMovies = async () =>{
    const res = await axios.get("https://api.themoviedb.org/3/movie/upcoming?api_key=13d84b90cb476a717b73b72950066c86&language=en-US&page=1");
    return res.data;
}

export const getSpanishUpcomingMovies = async () =>{
    const res = await axios.get("https://api.themoviedb.org/3/movie/upcoming?api_key=13d84b90cb476a717b73b72950066c86&language=es-US&page=1");
    return res.data;
}

