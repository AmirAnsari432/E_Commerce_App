import React from "react";
import { Link } from "react-router-dom";
import BreadCrum from "../component/BreadCrum";
import Container from "../component/Container";

const SingleBlog = () => {
  return (
    <>
      <BreadCrum title="Dynamic Blog Name " />
      <Container className="blog-wrapper home-wrapper-2 py-5">
       
          <div className="row">
            <div className="col-12 align-items-center justify-content-center">
              <div className="single-blod-card">
                <Link to="/blogs" className="d-flex align-items-center gap-10">
                  Go back to Blogs
                </Link>
                <h3> A Beautyfull Sunday Morning Renaissance</h3>
                <img
                  className="img-fluid w-100 my-4"
                  alt="blog"
                  src="images/blog-1.jpg"
                />
                <p className="">
                  this is a single blog which reperesnt to blog deatail review
                  price many other thing which have this product , you are only
                  as a good as your last collection which is an enormous , I
                  think there is some thing about luxury it's not somthing
                  people need , bur it's what they wan't this is a single blog
                  which reperesnt to blog deatail review price many other thing
                  which have this product , you are only as a good as your last
                  collection which is an enormous , I think there is some thing
                  about luxury it's not somthing people need , bur it's what
                  they wan't
                </p>
              </div>
            </div>
          </div>
     
      </Container>
    </>
  );
};

export default SingleBlog;
