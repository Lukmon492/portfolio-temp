import React from "react";
import img from "../../img/profile-pics.png";
import "./hero.css";
import { MdArrowForward } from "react-icons/md";
import Services from "../service/Services";
import Payment from "../payments/Payment";
import Education from "../education/Education";
import Recommendation from "../recommondation/Recommendation";
import Work from "../work/Work";
import Portfolio from "../portfolio/Portfolio";
import Blog from "../blog/Blog";

const Hero = () => {
  return (
    <div className="hero__section">
      <div className="middle-hero">
        <div className="user-section">
          <div className="user-info">
            <h1 className="user-name">
              I’m Sanni Lukman <span className="color-text">Font - End </span>
              Developer
            </h1>
            <div className="user-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
              volutpat feugiat placerat lobortis. Natoque rutrum semper sed
              suspendisse nunc lectus.
            </div>
            <button className="btn">
              Hire me <MdArrowForward className="arrow__right" />
            </button>
          </div>
          <div className="user-image">
            <img src={img} className="img" />
          </div>
        </div>
      </div>
      <Services />
      <Payment />
      <Recommendation />
      <Education />
      <Work />
      <Portfolio />
      <Blog />
    </div>
  );
};

export default Hero;
