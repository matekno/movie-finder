import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import './components/global.css';
import Slider from './components/Slider';
import Footer from './components/Footer';
import { getMovies, getUpcomingMovies, getUpcomingMoviesByGenre, getMoviesByGenre, getTopMoviesByGenre, getTopMovies } from './helpers/fetchMovies';
import React, {useState, useEffect} from 'react';

/*FUNCTIONAL EXAMPLE: https://codepen.io/sreeharshrajan/pen/abywYRj*/

/*

to do: 
- poner dos sliders mas
- hacer que por default este activo en accion o bien poner un boton que diga todos los generos*/

function App() {
  const [popMov, setPopMov] = useState(null);
  const [popActive, setPopActive] = useState(null);

  const [topMov, setTopMov] = useState(null);
  const [topActive, setTopActive] = useState(null);

  const [upcomingMov, setUpcomingMov] = useState(null);
  const [upcomingActive, setUpcomingActive] = useState(null);

  /*POP MOVIES*/
  useEffect(()=>{
    (async ()=>{
      const movies = await getMoviesByGenre(popActive);
      setPopMov(movies);
    })();
  }, [popActive]);

  useEffect(()=>{
    (async ()=>{
      const popMovies = await getMovies();
      setPopActive(popMovies);
    })();
  }, []); 

  /*TOP MOVIES*/
  useEffect(()=>{
    (async ()=>{
      const movies = await getTopMoviesByGenre(topActive);
      setTopMov(movies);
    })();
  }, [topActive]);

  useEffect(()=>{
    (async ()=>{
      const topMovies = await getTopMovies();
      setTopActive(topMovies);
    })();
  }, []); 

  /*UPCOMING MOVIES*/
  useEffect(()=>{
    (async ()=>{
      const movies = await getUpcomingMoviesByGenre(upcomingActive);
      setUpcomingMov(movies);
    })();
  }, [upcomingActive]);
  
  useEffect(()=>{
    (async ()=>{
      const upcomingMov = await getUpcomingMovies();
      setUpcomingActive(upcomingMov);
    })();
  }, []); 

  return (
    <div className="App">
      <Navbar />
      <Header />
      {
        popMov &&
        <Slider title="Más Buscadas" movies={popMov.results} setActive={setPopActive} active={popActive} /> 
      }
      {
        topMov &&
        <Slider title="Mejor Valoradas" movies={topMov.results} setActive={setTopActive} active={topActive}/>
      }
      {
        upcomingMov &&
        <Slider title="Próximamente" movies={upcomingMov.results} setActive={setUpcomingActive} active={upcomingActive}/>
      }
      <Footer />
    </div>
  );
}

export default App;
