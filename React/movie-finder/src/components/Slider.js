import React from "react";
import './global.css';
import Card from './Card';


const Slider = ( {title, movies}  ) => {
    return ( 
        <div>
            <h1>{title}</h1>
            <div className="slider mb-4 ml-4">
                {movies.map((card) =>{
                    return (
                        <Card key={card.id} movie={card}/>
                    )
                })}
            </div>
        </div>
    );
}
export default Slider;