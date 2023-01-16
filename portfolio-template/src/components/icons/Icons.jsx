import React from "react";
import "./icons.css";
import { AiFillInstagram } from "react-icons/ai";
import { GrFacebookOption } from "react-icons/gr";
import { FaLinkedinIn, FaYoutube, FaTwitter, FaDribbble } from "react-icons/fa";

const Icons = () => {
  return (
    <div className="icons">
      <div className="icons icon-box">
        <a href="https://web.facebook.com/sanni.lukmon.7" target="_blank">
          <GrFacebookOption className="icon" />
        </a>
        <a href="https://www.instagram.com/santech756/" target="_blank">
          <AiFillInstagram className="icon" />
        </a>
        <a href="https://twitter.com/LukmanSanni15" target="_blank">
          <FaTwitter className="icon" />
        </a>
        <a href="https://linkedin.com" target="_blank">
          <FaLinkedinIn className="icon" />
        </a>
        <a href="" target="_blank">
          <FaYoutube className="icon" />
        </a>
        <a href="" target="_blank">
          <FaDribbble className="icon" />
        </a>
      </div>
    </div>
  );
};

export default Icons;
