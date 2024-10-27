import React from "react";
import "./Hero.css";
import dark_arrow from "../../assets/dark-arrow.png";

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>Battle In The Brook</h1>
        <p>
          {" "}
          JP Sports is back in Bolingbrook this year for our Battle of the Brook
          events. Last year was the just the start for some great events at
          Indian Boundary Park so reserve your team's spot early for this event.
        </p>
        <button className="btn">
          Explore more <img src={dark_arrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
