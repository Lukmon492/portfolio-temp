import React from "react";
import "./services.css";
import { FiMic } from "react-icons/fi";

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
          <h3>web development</h3>
          <p>blog, e-commerce</p>
        </div>
        <div className="service__card">
          <FiMic />
          <h3>web development</h3>
          <p>blog, e-commerce</p>
        </div>
        <div className="service__card">
          <h3>web development</h3>
          <p>blog, e-commerce</p>
        </div>
        <div className="service__card">
          <h3>web development</h3>
          <p>blog, e-commerce</p>
        </div>
        <div className="service__card">
          <h3>web development</h3>
          <p>blog, e-commerce</p>
        </div>
        <div className="service__card">
          <h3>web development</h3>
          <p>blog, e-commerce</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
