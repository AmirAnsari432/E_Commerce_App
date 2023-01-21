import React from "react";
import { Link } from "react-router-dom";

const BlogCard = () => {
  return (
    <div className="col-3">
      <div className="blog-card">
        <div className="card-image">
          <img src="images/blog-1.jpg" className="img-fluid" alt="blog" />
        </div>
        <div className="blog-contant">
          <p className="date">21 jan 2023</p>
          <h5 className="title">A Beautiful Sundat Morning Renaissance</h5>
          <p className="desc">
            rhis andnada kabkab dalknndkab alkndlkasn lakkkndalkn
          </p>
          <Link to="/" className="button">
            {" "}
            Read more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
