import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import App from './App';
import Movie from './pages/Movie';

function Main() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='/movie/:id' element={<Movie />} />
            </Routes>
        </BrowserRouter>
    );
}
export default Main;

