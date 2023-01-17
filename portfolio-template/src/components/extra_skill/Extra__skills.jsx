import React from "react";
import "./extra_skills.css";
import BiRectangle from "../rectangle__box/Rect__box";

const Extra__skills = () => {
  return (
    <div className="extra__skills">
      <div className="extra__skills_section">
        <h2>Extra Skills</h2>
        <div className="extra__skill_acquired">
          <BiRectangle />
          <h3>Bootstrap, Materialize</h3>
        </div>
        <div className="extra__skill_bar">
          <div className="progress" style={{ width: "90%" }}></div>
        </div>
      </div>
      <div className="extra__skill_acquired">
        <BiRectangle />
        <h3>Stylus, Sass, Less</h3>
      </div>
      <div className="extra__skill_bar">
        <div className="progress" style={{ width: "80%" }}></div>
      </div>
      <div className="extra__skill_acquired">
        <BiRectangle />
        <h3>Gulp, Webpack, Grunt</h3>
      </div>
      <div className="extra__skill_bar">
        <div className="progress" style={{ width: "70%" }}></div>
      </div>
      <div className="extra__skill_acquired">
        <BiRectangle />
        <h3>GIT Knowledge</h3>
      </div>
    </div>
  );
};

export default Extra__skills;
