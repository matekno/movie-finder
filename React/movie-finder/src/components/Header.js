import React from "react";
import './global.css';
import SearchBar from "./SearchBar";

const Header = () => {
    return (    
            <div id="header" className="row justify-content-md-center colorcito header">
                <div className="mb-5 mt-5 col-6 justify-content-md-center">
                    <h1 className="row mb-4 justify-content-md-center whiteText">Explora miles de pelis y series!</h1>
                    <SearchBar />
                </div>
            </div>        
    );
}
export default Header