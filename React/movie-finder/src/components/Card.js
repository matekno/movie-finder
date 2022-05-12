import React from "react";
import './global.css';

const Card = ({ movie }) => {
    console.log(movie)
    return (
        <div>
            <div className="slide card">
                <img src={movie.poster_path} />
                <div className="descriptions">
                    <h1>{movie.original_title}</h1>
                    <p>{movie.desc}</p>
                    {/* <a href={movie.externalLink}>
                        <button>
                            <i className="fab fa-youtube"></i>
                            Ir al Link!
                        </button>
                    </a> */}
                </div>
            </div>
        </div>
    );
}
export default Card;