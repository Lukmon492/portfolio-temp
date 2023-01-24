import React from "react";
import "./blog.css";
// import landingP from "../../assets/landingP.png";

const Blog = () => {
  const blogs = [
    {
      img: "../../assets/landingP.png",
      description: "landing page",
      title: "How to make web tempates",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna",
      explore: "Learn more",
    },
    {
      img: "../../assets/card.jpeg",
      description: "bussiness card",
      title: "How to make web tempates",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna",
      explore: "Learn more",
    },
    {
      img: "../../assets/flyer.jpeg",
      description: "flyer",
      title: "How to make web tempates",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna",
      explore: "Learn more",
    },
  ];
  return (
    <div className="blog__section">
      <h2 className="blog__header">Blog</h2>
      <p className="blog__text">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. lorem ipsum
      </p>
      <div className="blog__section-blocks">
        {blogs.map((blog, item) => (
          <div className="blog__section-block" key={item.id}>
            <img src={blog.img} alt={blog.description} />
            <div className="blog__section-block__contents">
              <h4>{blog.title}</h4>
              <p>{blog.text}</p>
              <h5>{blog.explore}</h5>
            </div>
          </div>
        ))}

        {/* <div className="blog__section-block">
          <img src={landingP} />

          <div className="blog__section-block__contents">
            <h4>How to make web tempates</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
              nulla diam in ac dictum a urna
            </p>
            <h5>Learn more</h5>
          </div>
        </div>
        <div className="blog__section-block">
          <img src={landingP} />
          <div className="blog__section-block__contents">
            <h4>How to make web tempates</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
              nulla diam in ac dictum a urna
            </p>
            <h5>Learn more</h5>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Blog;
