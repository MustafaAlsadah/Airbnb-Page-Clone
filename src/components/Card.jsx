import React from "react";

export default function Card(props){
    console.log(props);
    let openSpots = props.data.openSpots;
    let badgeText;
    if (openSpots==0){
        badgeText = "SOLD OUT";
    }else if(props.data.location=="Online"){
        badgeText = "ONLINE";
    }

    
    return(
            <div className="experience-card mx-4 position-relative">

                {badgeText!=undefined && <div className="card--badge mx-1 my-1 rounded">{badgeText}</div>}

                <img src={`public/assets/${props.data.coverImg}`} alt="" />

                <div className="rating-row d-flex align-items-center">
                    <img src="/public/assets/star.svg"/><span>{props.data.stats.rating}</span> &nbsp; <span className="text-secondary my-1">({props.data.stats.reviewCount})•{props.data.location}</span>
                </div>

                <div className="card-description">
                    {props.data.title}
                </div>

                <div className="card-price">
                    From ${props.data.price} / person
                </div>

            </div>
    )
}