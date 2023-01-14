import React from "react";
import "./hero.css";
const Hero = () => {
  return (
    <div className="container">
      <div className="right-hero">
        {/* <div className="hero">
      <div className="hero-body">
      <div className="container">
          <div className="row">
            <div className="col-md-6">
          <h1 className="hero-title"></h1> */}
      </div>
      <div className="middle-hero">
        <div className="user-info">
          <h1 className="user-name">
            I’m Rayan Adlrdard <span className="color-text">Font - End </span>
            Developer
          </h1>
          <div className="user-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
            volutpat feugiat placerat lobortis. Natoque rutrum semper sed
            suspendisse nunc lectus.
          </div>
          <button className="btn">Hire me</button>
        </div>
      </div>
      <div className="left-hero"></div>
    </div>
  );
};

export default Hero;
