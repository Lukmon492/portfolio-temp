import React from "react";
import "./left-hero.css";
import img from "../../img/passport.jpeg";

const Left__hero = () => {
  return (
    <div>
      <div className="left-hero">
        <div className="img-bar">
          <img src={img} className="profile-img" />
          {/* <div className="profiling"></div> */}
        </div>
      </div>
      ;
    </div>
  );
};

export default Left__hero;
