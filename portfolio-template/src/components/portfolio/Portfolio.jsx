import React from "react";
import "./portfolio.css";
import { BsPlusLg } from "react-icons/bs";
import Card from "../../assets/card.jpeg";
import Flyer from "../../assets/flyer.jpeg";
import LandingPage from "../../assets/landingPage.jpeg";
import Mockup from "../../assets/mockup.jpeg";
import BCard from "../../assets/bCard.jpeg";
import Mockup1 from "../../assets/mockup1.jpeg";
import Brochur from "../../assets/brochur.jpeg";
import Branding from "../../assets/branding.jpeg";

const Portfolio = () => {
  return (
    <div className="education__section">
      <h2 className="education__header">Portfolio</h2>
      <p className="education__text">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. lorem ipsum
      </p>
      <div className="portfolio__nav">
        <nav>
          <a href="#">All Categories</a>
        </nav>
        <nav>
          <a href="#">UI design</a>
        </nav>
        <nav>
          <a href="#">Web templates</a>
        </nav>
        <nav>
          <a href="#">Logo</a>
        </nav>
        <nav>
          <a href="#">Branding</a>
        </nav>
      </div>
      <div className="portfolio__proj-samples">
        <div className="portfolio__proj-sample bg">
          <BsPlusLg className="plus_icon" />
        </div>
        <div className="portfolio__proj-sample">
          <img src={Card} className="sample__img" />
        </div>
        <div className="portfolio__proj-sample">
          <img src={Flyer} className="sample__img" />
        </div>
        <div className="portfolio__proj-sample">
          <img src={LandingPage} className="sample__img" />
        </div>
        <div className="portfolio__proj-sample">
          <img src={Mockup} className="sample__img" />
        </div>
        <div className="portfolio__proj-sample">
          <img src={BCard} className="sample__img" />
        </div>
        <div className="portfolio__proj-sample">
          <img src={Mockup1} className="sample__img" />
        </div>
        <div className="portfolio__proj-sample">
          <img src={Brochur} className="sample__img" />
        </div>
        <div className="portfolio__proj-sample">
          <img src={Branding} className="sample__img" />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
