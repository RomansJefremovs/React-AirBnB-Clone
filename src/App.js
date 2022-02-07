import './Styles/App.css';
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero"
import Card1 from "./Components/Card1"
import React from "react";
import data from "./Data"
function BadgeRendered(){

}

const dataCards = data.map(card =>{
  return <Card1
            key={card.id}
            coverImg={card.coverImg}
            rating={card.stats.rating}
            reviewCount={card.stats.reviewCount}
            location={card.location}
            title={card.title}
            price={card.price}
            openSpots={card.openSpots}
  />
})

export default function App() {
  return (
    <div className="App">
      <Navbar />
        <Hero />
      <section className="cards-container">
        {dataCards}
      </section>

    </div>
  );
}


