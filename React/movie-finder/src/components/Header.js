import React from "react";
import './global.css';

const Header = () => {
    return (    
            <div id="header" className="row justify-content-md-center colorcito header">
                <div className="mb-5 mt-5 col-6 justify-content-md-center">
                    <h1 className="row mb-4 justify-content-md-center whiteText">Explora miles de pelis y series!</h1>
                    <div className="search-container">
                        <input type="text" name="search" placeholder="Search..." className="search-input" />
                            <a href="#" className="search-btn">
                                <i className="fas fa-search"></i>
                            </a>
                    </div>
                </div>
            </div>        
    );
}
export default Header