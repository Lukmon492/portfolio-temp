import React from "react";
import Status__bar from "../status_bar/Status__bar";
import "./language.css";

const Language = () => {
  return (
    <div className="languages">
      <div className="language__section">
        <h2>Languages</h2>
        <div className="language__skills">
          <h3>Bangla</h3>
          <p>40%</p>
        </div>
        <div className="language__bar">
          <div className="below__avg"></div>
        </div>
      </div>
      <div className="language__section">
        <div className="language__skills">
          <h3>English</h3>
          <p>80%</p>
        </div>
        <div className="language__bar">
          <div className="almost__full"></div>
        </div>
      </div>
      <div className="language__section">
        <div className="language__skills">
          <h3>English</h3>
          <p>100%</p>
        </div>
        <div className="language__bar">
          <div className="full"></div>
        </div>
      </div>
    </div>
  );
};

export default Language;
