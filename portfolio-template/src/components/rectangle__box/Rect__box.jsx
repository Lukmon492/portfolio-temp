import React from "react";
import "./rect__box.css";
import { BiRectangle } from "react-icons/bi";

const Rect__box = () => {
  return (
    <>
      <div className="rect__box">
        <BiRectangle className="rect__box_main" />
        <BiRectangle className="rect__box_overlap" />
      </div>
    </>
  );
};

export default Rect__box;
