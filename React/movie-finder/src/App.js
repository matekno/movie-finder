import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import './components/global.css';
import Movies from './peliculas.json'
import Slider from './components/Slider';


function App() {
  console.log(Movies.most_searched.results);
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Slider title= "Mas Buscadas" movies={Movies.most_searched.results}/>
    </div>
  );
}

export default App;
