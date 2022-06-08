import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import './components/global.css';
import Slider from './components/Slider';
import Footer from './components/Footer';

import { getMovies, getUpcomingMoviesByGenre, getMoviesByGenre, getTopMoviesByGenre, getTopMovies } from './helpers/fetchMovies';
import React, {useState, useEffect} from 'react';



/*FUNCTIONAL EXAMPLE: https://codepen.io/sreeharshrajan/pen/abywYRj*/

/*to do: 
- cambiar el titulo a uno mas lindo
- cambiar los nombres y ids de los generos bien
- poner dos sliders mas
- hacer que onclick el boton se ponga lindo
- hacer que por default este activo en accion o bien poner un boton que diga todos los generos*/

function App() {
  const [popMov, setPopMov] = useState(null);
  const [popActive, setPopActive] = useState(28);

  const [topMov, setTopMov] = useState(null);
  const [topActive, setTopActive] = useState(28);

  const [upcomingMov, setUpcomingMov] = useState(null);
  const [upcomingActive, setUpcomingActive] = useState(28);

  useEffect(()=>{
    (async ()=>{
      console.log('popActive', popMov);
      const movies = await getMoviesByGenre(popActive);
      setPopMov(movies);
    })();
  }, [popActive]);

  useEffect(()=>{
    (async ()=>{
      const movies = await getTopMoviesByGenre(topActive);
      setTopMov(movies);
    })();
  }, [topActive]);


  useEffect(()=>{
    (async ()=>{
      console.log('upcomingActive', upcomingActive);
      const movies = await getUpcomingMoviesByGenre(upcomingActive);
      setUpcomingActive(movies);
    })();
  }, [upcomingActive]);

  useEffect(()=>{
    (async ()=>{
      const topMovies = await getTopMovies();
      setTopActive(topMovies);

    })();
  }, []); 

  return (
    <div className="App">
      <Navbar />
      <Header />
      {
        popMov &&
        <Slider title="Más Buscadas" movies={popMov.results} setActive={setPopActive} /> 
      }
      {
        topMov &&
        <Slider title="Mejor Valoradas" movies={topMov.results} setActive={setTopActive}/>
      }
      {
        upcomingMov &&
        <Slider title="Próximamente" movies={upcomingMov.results} setActive={setUpcomingActive}/>
      }
      <Footer />
    </div>
  );
}

export default App;
