import React from "react";
import BlogCard from "../component/BlogCard";
import BreadCrum from "../component/BreadCrum";

const Blog = () => {
  return (
    <>
      <BreadCrum title="Blog" />
      <div className="blog-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="fliter-card bg-dark text-white p-2  mb-3">
                <h3 className="filter-title text-light">Found By Category</h3>
                <div className="">
                  <ul className="ps-0">
                    <li>Watch </li>
                    <li>Tv</li>
                    <li>Camera</li>
                    <li>Laptop</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-9">
              <div className="row">
                <div className="col-6">
                  <BlogCard />
                </div>
                <div className="col-6">
                  <BlogCard />
                </div>
                <div className="col-6">
                  <BlogCard />
                </div>
                <div className="col-6">
                  <BlogCard />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
