import React from "react";
import "./blog.css";
import landingP from "../../assets/landingP.png";

const Blog = () => {
  return (
    <div className="blog__section">
      <h2 className="blog__header">Blog</h2>
      <p className="blog__text">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. lorem ipsum
      </p>
      <div className="blog__section-blocks">
        <div className="blog__section-block">
          <img src={landingP} />
          <h4>How to make web tempates</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla
            diam in ac dictum a urna
          </p>
          <h4>Learn more</h4>
        </div>
        <div className="blog__section-block">
          <img src={landingP} />
          <h4>How to make web tempates</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla
            diam in ac dictum a urna
          </p>
          <h4>Learn more</h4>
        </div>
        <div className="blog__section-block">
          <img src={landingP} />
          <h4>How to make web tempates</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla
            diam in ac dictum a urna
          </p>
          <h4>Learn more</h4>
        </div>
      </div>
    </div>
  );
};

export default Blog;
