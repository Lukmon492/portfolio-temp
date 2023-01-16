import React from "react";
import "./left-hero.css";
import img from "../../img/passport.jpeg";
import Icons from "../icons/icons";
import RectLine from "../RectLine/RectLine";
import About from "../about/About";
import Language from "../language/Language";
import Skills from "../skills/Skills";

const Left__hero = () => {
  return (
    <div>
      <div className="left-hero">
        <div className="profile-bar">
          <div className="img-bar">
            <img src={img} className="profile-img" />
          </div>
          <div className="profile-name">
            <h4>Sanni Lukman</h4>
            <p>Font-end Developer</p>
            <Icons />
            <RectLine />
            <About />
            <RectLine />
            <Language />
            <RectLine />
            <Skills />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Left__hero;