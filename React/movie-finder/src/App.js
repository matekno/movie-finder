import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import './components/global.css';
import Movies from './peliculas.json'
import Slider from './components/Slider';
import Options from './components/Options';

/*FUNCTIONAL EXAMPLE: https://codepen.io/sreeharshrajan/pen/abywYRj*/


function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Options />
      <Slider title="Más Buscadas" movies={Movies.most_searched.results} />
      <Slider title="Mejor rateadas" movies={Movies.top_rated.results}/>
      <Slider title="Upcoming" movies={Movies.upcoming.results}/>
    </div>
  );
}

export default App;
