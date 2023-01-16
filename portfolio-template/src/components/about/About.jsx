import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="about">
      <div className="about__info">
        <h3>Age:</h3>
        <p>--</p>
      </div>
      <div className="about__info">
        <h3>Residence:</h3>
        <p>BD</p>
      </div>
      <div className="about__info">
        <h3>Freelance:</h3>
        <p className="available">available</p>
      </div>
      <div className="about__info">
        <h3>Address:</h3>
        <p>Lagos</p>
      </div>
    </div>
  );
};

export default About;
