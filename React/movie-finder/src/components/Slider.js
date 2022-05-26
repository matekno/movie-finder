import React from "react";
import './global.css';
import Card from './Card';
import Options from './Options'


const Slider = ( {title, movies}  ) => {
    return ( 
        <div className="ml-5 sl">
            <Options buttons={["Streaming", "En TV", "Alquiler"]} className="align-items: left;" />
            <h1 className="niceTitle tit">{title}</h1>
            <div className="slider mb-4 ml-4 ml-5 mt-3">
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