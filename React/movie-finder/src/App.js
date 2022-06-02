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
  const [actionMov, setActionMov] = useState(null);
  const [comedyMov, setComedyMov] = useState(null);
  const [dramaMov, setDramaMov] = useState(null);

  const [topMov, setTopMov] = useState(null);
  const [topActionMov, setTopActionMov] = useState(null);
  const [topComedyMov, setTopComedyMov] = useState(null);
  const [topDramaMov, setTopDramaMov] = useState(null);

  const [upcomingMov, setUpcomingMov] = useState(null);
  const [upcomingActionMov, setUpcomingActionMov] = useState(null);
  const [upcomingComedyMov, setUpcomingComedyMov] = useState(null);
  const [upcomingDramaMov, setUpcomingDramaMov] = useState(null);


  useEffect(()=>{
    (async ()=>{
      const movies = await getMovies();
      setPopMov(movies);
    })();
  }, []);
  useEffect(()=>{
    (async ()=>{
      const movies = await getActionMovies();
      setActionMov(movies);
    })();
  }, []);
  useEffect(()=>{
    (async ()=>{
      const movies = await getComedyMovies();
      setComedyMov(movies);
    })();
  }, []);
  useEffect(()=>{
    (async ()=>{
      const movies = await getDramaMovies();
      setDramaMov(movies);
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
      const movies = await getTopActionMovies();
      setTopActionMov(movies);
    })();
  }, []); 
  useEffect(()=>{
    (async ()=>{
      const movies = await getTopComedyMovies();
      setTopComedyMov(movies);
    })();
  }, []); 
  useEffect(()=>{
    (async ()=>{
      const movies = await getTopDramaMovies();
      setTopDramaMov(movies);
    })();
  }, []); 

  useEffect(()=>{
    (async ()=>{
      const movies = await getUpcomingMovies();
      setUpcomingMov(movies);
    })();
  }, []);
  useEffect(()=>{
    (async ()=>{
      const movies = await getUpcomingActionMovies();
      setUpcomingActionMov(movies);
    })();
  }, []);
  useEffect(()=>{
    (async ()=>{
      const movies = await getUpcomingComedyMovies();
      setUpcomingComedyeMov(movies);
    })();
  }, []);
  useEffect(()=>{
    (async ()=>{
      const movies = await getUpcomingDramaMovies();
      setUpcomingDramaMov(movies);
    })();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Header />
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
