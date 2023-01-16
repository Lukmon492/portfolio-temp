import React from "react";
import "./skills.css";

const Skills = () => {
  return (
    <div className="skills">
      <div className="skills__section">
        <h2>Skills</h2>
        <div className="skill__acquired">
          <h3>Html</h3>
          <p>90%</p>
        </div>
        <div className="skill__bar">
          <div className="progress" style={{ width: "90%" }}></div>
        </div>
      </div>
      <div className="skill__acquired">
        <h3>CSS</h3>
        <p>80%</p>
      </div>
      <div className="skill__bar">
        <div className="progress" style={{ width: "80%" }}></div>
      </div>
      <div className="skill__acquired">
        <h3>JS</h3>
        <p>70%</p>
      </div>
      <div className="skill__bar">
        <div className="progress" style={{ width: "70%" }}></div>
      </div>
      <div className="skill__acquired">
        <h3>React</h3>
        <p>55%</p>
      </div>
      <div className="skill__bar">
        <div className="progress" style={{ width: "55%" }}></div>
      </div>
      <div className="skill__acquired">
        <h3>Tailwind</h3>
        <p>80%</p>
      </div>
      <div className="skill__bar">
        <div className="progress" style={{ width: "80%" }}></div>
      </div>
    </div>
  );
};

export default Skills;
