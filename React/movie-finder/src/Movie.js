import './Movie.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import './components/global.css';
import Movies from './peliculas.json'


function Movie() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Options />
      <Slider title="Mas Buscadas" movies={Movies.most_searched.results}/>
      <Slider title="Mejor rateadas" movies={Movies.top_rated.results}/>
      <Slider title="Upcuming" movies={Movies.upcoming.results}/>

    </div>
  );
}

export default App;
