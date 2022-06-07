import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import './components/global.css';
import Slider from './components/Slider';
import Footer from './components/Footer';

import { getMovies, getActionMovies, getComedyMovies, getDramaMovies, getTopMovies, getTopActionMovies, getTopComedyMovies, getTopDramaMovies, getUpcomingMovies, getUpcomingActionMovies, getUpcomingComedyMovies, getUpcomingDramaMovies } from './helpers/fetchMovies';
import React, {useState, useEffect} from 'react';



/*FUNCTIONAL EXAMPLE: https://codepen.io/sreeharshrajan/pen/abywYRj*/


function App() {
  const [popMov, setPopMov] = useState(null);
  const [popActive, setPopActive] = useState(28);

  const [topMov, setTopMov] = useState(null);
  const [topActive, setTopActive] = useState(-1);

  const [upcomingMov, setUpcomingMov] = useState(null);
  const [upcomingActive, setUpcomingActive] = useState(-1);

  useEffect(()=>{
    (async ()=>{
      const movies = await getMovies();
      setPopMov(movies);
    })();
  }, []);

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

//aca nomas hago un usestate con cada filtro activo para cada slider 
  return (
    <div className="App">
      <Navbar />
      <Header />
      {
        popMov &&
        <Slider title="Más Buscadas" movies={popMov.results} setActive={setPopActive} /> //aca le paso su usestate con el settaste
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
