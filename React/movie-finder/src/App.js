import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import './components/global.css';
import Movies from './peliculas.json'
import Slider from './components/Slider';
import Options from './components/Options';
import Footer from './components/Footer';


/*FUNCTIONAL EXAMPLE: https://codepen.io/sreeharshrajan/pen/abywYRj*/


function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Options />
      <Slider title="Más Buscadas" movies={Movies.most_searched.results} />
      <Options />
      <Slider title="Más rateadas" movies={Movies.top_rated.results}/>
      <Options />
      <Slider title="Proximamente" movies={Movies.upcoming.results}/>
      <Footer />
    </div>
  );
}

export default App;
