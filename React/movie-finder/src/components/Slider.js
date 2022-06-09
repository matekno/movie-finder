import React from "react";
import './global.css';
import Card from './Card';
import Options from './Options'


const Slider = ( {title, movies, setActive, active}  ) => {

    return ( 
        <div className="ml-5 sl mb-5">
            <Options active={active} buttons={[{name: "Acción", genre: 28}, {name: "Comedia", genre: 35}, {name: "Drama", genre: 18}]} setActive={setActive}/>
            <h1 className="niceTitle">{title}</h1>
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