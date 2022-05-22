import './Movie.css';
import './components/global.css';
import Movies from './peliculas.json'
import Navbar from './components/Navbar';
import Info from './components/Info';


function Movie() {
      return (
        <>      
          <Navbar />
          <Info movies={Movies.most_searched.results}/>
        </>



  );
}

export default Movie;
