import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import App from './App';
import Movie from './pages/Movie';
import Details from './pages/Details';
import SearchResults from './components/SearchResult';

function Main() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='/movie/:id' element={<Movie />} />
                <Route path='/details/:id' element={<Details />} />
                <Route path='/search/:kw' element={<SearchResults />} />
            </Routes>
        </BrowserRouter>
    );
}
export default Main;

