import React from "react";
import Navbar from "./components/Navbar.jsx";
import HeroBanner from "./components/HeroBanner.jsx";
import CardsSlider from "./components/CardsSlider.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./stylesheet.css";

export default function App(){
  return(
    <div>
      <Navbar/>
      <HeroBanner/>
      <CardsSlider/>
    </div>
  )
}
