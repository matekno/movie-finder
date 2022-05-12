import React from "react";
import './global.css';
import Card from './Card';


const Slider = ( {titulo, movies}  ) => {
    return ( 
        <div>
            <h1>{titulo}</h1>
            <div id="slider mb-4">
                {movies.map((card) => {
                    <Card key={card.id} movie={card}/>
                })}
            </div>
        </div>


    );
}
export default Slider;