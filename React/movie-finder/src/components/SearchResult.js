import { useParams } from "react-router-dom";


const SearchBar = () =>{
    let params = useParams();
    const [movies, setMovies] = useState();

    setMovies(GetMoviesByKeyword(input));

    return(
        {movies.map(m => <Movie mov=m />)}
    );

}