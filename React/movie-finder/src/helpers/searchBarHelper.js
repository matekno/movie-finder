import axios from "axios";

export const GetMoviesByKeyword = async (kw) => {
    const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=13d84b90cb476a717b73b72950066c86&language=en-US&query=${kw}&page=1&include_adult=false`);
    return res.data.results;
}

