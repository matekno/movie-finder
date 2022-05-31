import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import './components/global.css';
import Slider from './components/Slider';
import Footer from './components/Footer';

import { getMovies, getTopMovies, getUpcomingMovies } from './helpers/fetchMovies';
import React, {useState, useEffect} from 'react';



/*FUNCTIONAL EXAMPLE: https://codepen.io/sreeharshrajan/pen/abywYRj*/


function App() {
  const [popMov, setPopMov] = useState(null);
  const [topMov, setTopMov] = useState(null);
  const [upcomingMov, setUpcomingMov] = useState(null);

  useEffect(()=>{
    (async ()=>{
      const movies = await getMovies();
      setPopMov(movies);
    })();
  }, []);

  useEffect(()=>{
    (async ()=>{
      const movies = await getTopMovies();
      setTopMov(movies);
    })();
  }, []); 

  useEffect(()=>{
    (async ()=>{
      const movies = await getUpcomingMovies();
      setUpcomingMov(movies);
    })();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Header />
      <Languages/>
      {
        popMov &&
        <Slider title="Más Buscadas" movies={popMov.results} />
      }
      {
        topMov &&
        <Slider title="Mejor Valoradas" movies={topMov.results} />
      }
      {
        upcomingMov &&
        <Slider title="Próximamente" movies={upcomingMov.results} />
      }
      <Footer />
    </div>
  );
}

export default App;
