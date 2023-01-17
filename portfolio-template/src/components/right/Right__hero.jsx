import React from "react";
import "./right-hero.css";
import { RiContrast2Fill, RiHome2Fill, RiBriefcase4Fill } from "react-icons/ri";
import { FaFileCode, FaUserGraduate } from "react-icons/fa";
import { ImLeaf } from "react-icons/im";
import { BsChatLeftFill } from "react-icons/bs";

const Right__hero = () => {
  return (
    <div className="right__menu-container">
      <div className="right-hero">
        <div className="hero-body">
          <RiContrast2Fill />
          <RiHome2Fill />
          <FaFileCode />
          <FaUserGraduate />
          <RiBriefcase4Fill />
          <ImLeaf />
          <BsChatLeftFill />
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
