import React from "react";
import Card from "./Card";
import cardsData from "../data.js";
export default function CardsSlider(){
    let cardElementsArray = cardsData.map((element) => {
        return(
            <Card 
                  key={element.id}
                  data={element}  
            />
        );
    }); 
    
    return(
        <div className="cards-slider container d-flex ">
            {cardElementsArray}
            
        </div>
    )
}