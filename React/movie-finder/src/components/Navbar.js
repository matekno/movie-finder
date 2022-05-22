import React from "react";
import './global.css';


const Navbar = () => {
    return ( 
    
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">            
                <a className="navbar-brand ml-3" aria-current="page" href="#">RALI</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <a className="nav-link" href="#">Peliculas</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Series</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">En alquiler</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">En venta</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Streaming</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">En cine</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Programas de TV</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Telenovelas</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Nacional</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Explorá...</a>
                    </li>
                </ul>
                </div>
        </nav>
        
    );
}
export default Navbar;