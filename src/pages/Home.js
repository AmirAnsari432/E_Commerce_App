import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import BlogCard from "../component/BlogCard";
import ProductCard from "../component/ProductCard";
import SpecialProduct from "../component/SpecialProduct";
import mainbanner from "../images/main-banner-1.jpg";
import catbanner1 from "../images/catbanner-01.jpg";
import catbanner2 from "../images/catbanner-02.jpg";
import catbanner3 from "../images/catbanner-03.jpg";
import catbanner4 from "../images/catbanner-04.jpg";
import Container from "../component/Container";

import camera from "../images/camera.jpg";
import watch from "../images/watch.jpg";
import tv from "../images/tv.jpg";
import headphone from "../images/headphone.jpg";
import brand1 from "../images/brand-01.png";
import brand2 from "../images/brand-02.png";
import brand3 from "../images/brand-03.png";
import brand4 from "../images/brand-04.png";
import brand5 from "../images/brand-05.png";
import brand6 from "../images/brand-06.png";
import brand7 from "../images/brand-07.png";
import brand8 from "../images/brand-08.png";
// import { Service } from "../utils/Data";
import service from "../images/service.png";
import service1 from "../images/service-02.png";
import service2 from "../images/service-03.png";
import service3 from "../images/service-04.png";
import service4 from "../images/service-05.png";

const Home = () => {
  return (
    <>
      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-6">
            <div className="main-banner position-relative">
              <img
                src={mainbanner}
                className="img-fluid rounded-3"
                alt="main banner"
              />
              <div className="main-banner-content position-absolute">
                <h4>SUPERCHARGED FOR PROS.</h4>
                <h3>iPad S13+ Pro</h3>
                <p>From $999.00 or $41.61/mo.</p>
                <Link className="button">Buy now </Link>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
              <div className="small-banner position-relative">
                <img
                  src={catbanner1}
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>Best Sale </h4>
                  <h3>iPad S13+ Pro</h3>
                  <p>
                    From $999.00 <br /> or $41.61/mo.
                  </p>
                </div>
              </div>
              <div className="small-banner position-relative">
                <img
                  src={catbanner2}
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>New Arrival</h4>
                  <h3>iWatch</h3>
                  <p>
                    From $999.00 <br /> or $41.61/mo.
                  </p>
                </div>
              </div>
              <div className="small-banner position-relative">
                <img
                  src={catbanner3}
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>New Arrival</h4>
                  <h3>iPads </h3>
                  <p>
                    From $999.00 <br /> or $41.61/mo.
                  </p>
                </div>
              </div>
              <div className="small-banner position-relative">
                <img
                  src={catbanner4}
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>New Arrival</h4>
                  <h3>Headphones </h3>
                  <p>
                    From $999.00 <br /> or $41.61/mo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12 ">
            <div className="servies d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center gap-15">
                <img src={service} alt="service" />
                <div>
                  <h6>Free Shipping</h6>
                  <p className="mb-0"> From All Order over $5</p>
                </div>
              </div>
              <div className="d-flex align-items-center gap-15">
                <img src={service1} alt="service" />
                <div>
                  <h6>Free Shipping</h6>
                  <p className="mb-0"> From All Order over $5</p>
                </div>
              </div>
              <div className="d-flex align-items-center gap-15">
                <img src={service2} alt="service" />
                <div>
                  <h6>Free Shipping</h6>
                  <p className="mb-0"> From All Order over $5</p>
                </div>
              </div>
              <div className="d-flex align-items-center gap-15">
                <img src={service3} alt="service" />
                <div>
                  <h6>Free Shipping</h6>
                  <p className="mb-0"> From All Order over $5</p>
                </div>
              </div>
              <div className="d-flex align-items-center gap-15">
                <img src={service4} alt="service" />
                <div>
                  <h6>Free Shipping</h6>
                  <p className="mb-0"> From All Order over $5</p>
                </div>
              </div>
              {/* {Service?.map((i, j) => {
                return (
                  <div className="d-flex align-items-center gap-15" key={j}>
                    <img src={i.image} alt="services" />
                    <h6>{i.title}</h6>
                    <p>{i.tagline}</p>
                  </div>
                );
              })} */}
            </div>
          </div>
        </div>
      </Container>
      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="categories d-flex flex-wrap justify-content-between align-items-center">
              <div className="d-flex gap-30 align-items-center">
                <div>
                  <h6>Cameras</h6>
                  <p>10 Items </p>
                </div>
                <img src={camera} alt="camera" />
              </div>
              <div className="d-flex align-items-center">
                <div>
                  <h6>Music&Gaming</h6>
                  <p>10 Items </p>
                </div>
                <img src={camera} alt="camera" />
              </div>
              <div className="d-flex align-items-center">
                <div>
                  <h6>Smart Tv </h6>
                  <p>10 Items </p>
                </div>
                <img src={tv} alt="smarttv" />
              </div>
              <div className="d-flex align-items-center">
                <div>
                  <h6>Headphones</h6>
                  <p>10 Items </p>
                </div>
                <img src={headphone} alt="headphones" />
              </div>
              <div className="d-flex align-items-center">
                <div>
                  <h6>Cameras</h6>
                  <p>10 Items </p>
                </div>
                <img src={camera} alt="camera" />
              </div>
              <div className="d-flex align-items-center">
                <div>
                  <h6>Music&Gaming</h6>
                  <p>10 Items </p>
                </div>
                <img src={camera} alt="camera" />
              </div>
              <div className="d-flex align-items-center">
                <div>
                  <h6>Smart Tv </h6>
                  <p>10 Items </p>
                </div>
                <img src={tv} alt="smarttv" />
              </div>
              <div className="d-flex   align-items-center">
                <div>
                  <h6>Headphones</h6>
                  <p>10 Items </p>
                </div>
                <img src={headphone} alt="headphones" />
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="featured-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12 ">
            <h3 className="section-heading">Featured Collection</h3>
          </div>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>
      <Container class1="famous-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-3">
            {/* <h3 className="">Famous Product</h3> */}
            <div className="famous-card position-relative">
              <img src={watch} className="img-fluid" alt="famous" />
              <div className="famous-contant position-absolute">
                <h5>Big Screen</h5>
                <h6>Smart Watch Sereies-8</h6>
                <p>From $399 $16.62/mo . for 24 mo.</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img src={watch} className="img-fluid" alt="famous" />
              <div className="famous-contant position-absolute">
                <h5>Big Screen</h5>
                <h6>Smart Watch Sereies-8</h6>
                <p>From $399 $16.62/mo . for 24 mo.</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img src={watch} className="img-fluid" alt="famous" />
              <div className="famous-contant position-absolute">
                <h5>Big Screen</h5>
                <h6>Smart Watch Sereies-8</h6>
                <p>From $399 $16.62/mo . for 24 mo.</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img src={watch} className="img-fluid" alt="famous" />
              <div className="famous-contant position-absolute">
                <h5>Big Screen</h5>
                <h6>Smart Watch Sereies-8</h6>
                <p>From $399 $16.62/mo . for 24 mo.</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="special-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading my-1">Special Product</h3>
          </div>
        </div>
        <div className="row">
          <SpecialProduct />
          <SpecialProduct />
          <SpecialProduct />
          <SpecialProduct />
        </div>
      </Container>
      <Container class1="popular-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Popular Products</h3>
          </div>
          <div className="row">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </Container>
      <Container class1="marquee-wrapper py-5">
        <div className="row">
          <div className="col-12">
            <div className="marquee-inner-wrapper card-wrapper">
              <Marquee className="d-flex justify-content-center">
                <div className="mx-4 w-25">
                  <img src={brand1} alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src={brand2} alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src={brand3} alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src={brand4} alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src={brand5} alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src={brand6} alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src={brand7} alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src={brand8} alt="brand" />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="blog-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Latest Blogs</h3>
          </div>
          <div className="col-3">
            <BlogCard />
          </div>
          <div className="col-3">
            <BlogCard />
          </div>
          <div className="col-3">
            <BlogCard />
          </div>
          <div className="col-3">
            <BlogCard />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;
