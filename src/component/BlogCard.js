import React from "react";
import { Link } from "react-router-dom";
import blog1 from "../images/blog-1.jpg";

const BlogCard = () => {
  return (
    <div className="blog-card">
      <div className="card-image">
        <img src={blog1} className="img-fluid" alt="blog" />
      </div>
      <div className="blog-contant">
        <p className="date">21 jan 2023</p>
        <h5 className="title">A Beautiful Sundat Morning Renaissance</h5>
        <p className="desc">
          rhis andnada kabkab dalknndkab alkndlkasn lakkkndalkn
        </p>
        <Link to="/blog/:id" className="button">
          Read more
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
