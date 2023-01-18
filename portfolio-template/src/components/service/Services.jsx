import React from "react";
import "./services.css";
import { FiMic } from "react-icons/fi";
import { RiArrowRightSLine } from "react-icons/ri";
// import { IoGameController } from "react-icons/io5";
import game from "../../assets/game.png";
import photography from "../../assets/photography.png";
import ui_ux from "../../assets/ux.png";
import web_dev from "../../assets/web_dev.png";

const Services = () => {
  return (
    <div className="service__section">
      <h2 className="service__header">my services</h2>
      <p className="service__text">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. lorem ipsum
      </p>
      <div className="service__cards">
        <div className="service__card">
          <img src={web_dev} className="service__card-icon" />
          <h3>web development</h3>
          <p>blog, e-commerce</p>
        </div>
        <div className="service__card">
          <img src={ui_ux} className="service__card-icon" />
          <h3>uI/uX design</h3>
          <p>Mobile app, website design</p>
        </div>
        <div className="service__card">
          <FiMic className="service__card-icon" />
          <h3>sound design</h3>
          <p>Voice Over, Beat Making</p>
        </div>
        <div className="service__card">
          <img src={game} alt="" />
          <h3>game design</h3>
          <p>Character Design, Props & Objects</p>
        </div>
        <div className="service__card">
          <img src={photography} alt="" />
          <h3>photography</h3>
          <p>portrait, product photography</p>
        </div>
        <div className="service__card">
          <h3>advertising</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla
            diam in ac dictum a urna viverra morbi.
          </p>
          <p className="color_text">
            ORDER NOW <RiArrowRightSLine className="grater__icon" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
