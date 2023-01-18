import React from "react";
import "./right-hero.css";
import { RiContrast2Fill, RiHome2Fill, RiBriefcase4Fill } from "react-icons/ri";
import { FaFileCode, FaUserGraduate } from "react-icons/fa";
import { ImLeaf } from "react-icons/im";
import { BsChatLeftFill } from "react-icons/bs";

const Right__hero = () => {
  return (
    <div className="right__menu-container">
      <div className="right__hero">
        <div className="right__hero-body">
          <div className="right_hero-icon">
            <RiContrast2Fill className="hero__icon contrast" />
          </div>
          <div className="right__hero-home">
            <p className="home__text">home</p>
            <div className="right__hero-icon home">
              <RiHome2Fill className="hero__icon" />
            </div>
          </div>
          <div className="right__hero-icon">
            <FaFileCode className="hero__icon" />
          </div>
          <div className="right__hero-icon">
            <FaUserGraduate className="hero__icon" />
          </div>
          <div className="right__hero-icon">
            <RiBriefcase4Fill className="hero__icon" />
          </div>
          <div className="right__hero-icon">
            <ImLeaf className="hero__icon" />
          </div>
          <div className="right__hero-icon">
            <BsChatLeftFill className="hero__icon" />
          </div>
          {/* <div className="hero">
          <div className="row">
            <div className="col-md-6">
          <h1 className="hero-title"></h1> */}
        </div>
      </div>
    </div>
  );
};

export default Right__hero;
