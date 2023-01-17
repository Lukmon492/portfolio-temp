import React from "react";
import "./cv.css";
import { RiDownload2Fill } from "react-icons/ri";

const Cv = () => {
  return (
    <div className="download__box">
      <button className="download__btn">
        Download cv
        <RiDownload2Fill className="download__icon" />
      </button>
    </div>
  );
};

export default Cv;
