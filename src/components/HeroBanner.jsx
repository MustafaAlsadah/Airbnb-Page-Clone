import React from "react";

export default function HeroBanner(){
    return(
        <div className="container">
            <div className="banner-images-board justify-content-center">

                <div className="imgs-board-col1 imgs-board-col d-flex flex-column">
                    <img src="/assets/cooking.svg" className="board-img" alt="cooking lesson" />
                </div>

                <div className="imgs-board-col2 imgs-board-col d-flex flex-column">
                    <img src="/assets/macrone-seller.svg" className="board-img" alt="women sells macrone cookies" />
                    <img src="/assets/swimmer.svg" className="board-img" alt="women in a yoga lesson" />   
                </div>

                <div className="imgs-board-col3 imgs-board-col d-flex flex-column">
                    <img src="/assets/jasmine-bowl.svg" className="board-img" alt="women sells macrone cookies" />
                    <img src="/assets/guitar.svg" className="board-img" alt="women in a yoga lesson" />   
                </div>

                <div className="imgs-board-col4 imgs-board-col d-flex flex-column">
                    <img src="/assets/cooking.svg" className="board-img" alt="women sells macrone cookies" />
                    <img src="/assets/swimmer.svg" className="board-img" alt="women in a yoga lesson" />   
                </div>

                <div className="imgs-board-col5 imgs-board-col d-flex flex-column">
                    <img src="/assets/jasmine-bowl.svg" className="board-img" alt="women sells macrone cookies" />
                    <img src="/assets/macrone-seller.svg" className="board-img" alt="women in a yoga lesson" />   
                </div>

            </div>
            <div className="section-title">
                <h1>Online Expeiences</h1>
                <p>
                    Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
                </p>
            </div>
        </div>
    )
}
