import React from "react";
import "./recommendation.css";
import { AiTwotoneStar } from "react-icons/ai";

import james from "../../img/james.jpeg";
import talan from "../../img/talan.jpeg";
import tiana from "../../img/tiana.jpeg";

const Recommendation = () => {
  return (
    <div className="recommendation__section">
      <h2 className="recommendation__header">Recommendations</h2>
      <p className="recommendation__text">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. lorem ipsum
      </p>
      <div className="recommendation__cards">
        <div className="recommendation__card">
          <div className="recommendation__rating">
            <AiTwotoneStar />
            <AiTwotoneStar />
            <AiTwotoneStar />
            <AiTwotoneStar />
            <AiTwotoneStar />
          </div>
          <h3>web development</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla
            diam in ac dictum a urna viverra morbi. Morbi donec amet....
          </p>
          <div className="recommendation_author">
            <img src={james} className="author-img" />
            <div className="recommendation_author info">
              <h4>James Gouse</h4>
              <p>Graphic Designer</p>
            </div>
          </div>
        </div>
        <div className="recommendation__card">
          <div className="recommendation__rating">
            <AiTwotoneStar />
            <AiTwotoneStar />
            <AiTwotoneStar />
            <AiTwotoneStar />
            <AiTwotoneStar />
          </div>
          <h3>uI/uX design</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla
            diam in ac dictum a urna viverra morbi. Morbi donec amet....
          </p>
          <div className="recommendation_author">
            <img src={tiana} className="author-img" />
            <div className="recommendation_author info">
              <h4>Tiana Philips</h4>
              <p>Photographer</p>
            </div>
          </div>
        </div>
        <div className="recommendation__card">
          <div className="recommendation__rating">
            <AiTwotoneStar />
            <AiTwotoneStar />
            <AiTwotoneStar />
            <AiTwotoneStar />
            <AiTwotoneStar />
          </div>
          <h3>sound design</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla
            diam in ac dictum a urna viverra morbi. Morbi donec amet....
          </p>
          <div className="recommendation_author">
            <img src={talan} className="author-img" />
            <div className="recommendation_author info">
              <h4>Talan Westervelt</h4>
              <p>Business man</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recommendation;
