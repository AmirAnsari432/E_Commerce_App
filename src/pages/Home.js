import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section className="home-wrapper-1 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-banner position-relative">
                <img
                  src="images/main-banner-1.jpg"
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
                    src="images/catbanner-01.jpg"
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
                    src="images/catbanner-02.jpg"
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
                    src="images/catbanner-03.jpg"
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
                    src="images/catbanner-04.jpg"
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
        </div>
      </section>
      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="servies d-flex align-items-center justify-content-between ">
                <div className="d-flex align-items-center gap-15">
                  <img src="images/service.png" alt="services" />
                  <div>
                    <h6>Free Shipping</h6>
                    <p className="mb-0">From all orders over $5</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="/images/service-02.png" alt="services" />
                  <div>
                    <h6>Daily Surprise Offer</h6>
                    <p className="mb-0">Save upto 25%</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="/images/service-03.png" alt="services" />
                  <div>
                    <h6>Support 24/7</h6>
                    <p className="mb-0">Shop with Expert </p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="/images/service-04.png" alt="services" />
                  <div>
                    <h6>Affordable Prices</h6>
                    <p className="mb-0">Get Factory Default Price</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="/images/service-05.png" alt="services" />
                  <div>
                    <h6>Secure Payment </h6>
                    <p className="mb-0">100 % Protect Payment </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="categories d-flex flex-wrap justify-content-between align-items-center">
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Cameras</h6>
                    <p>10 Items </p>
                  </div>
                  <img src="images/camera.jpg" />
                </div>
                <div className="d-flex align-items-center">
                  <div>
                    <h6>Music&Gaming</h6>
                    <p>10 Items </p>
                  </div>
                  <img src="images/camera.jpg" />
                </div>
                <div className="d-flex align-items-center">
                  <div>
                    <h6>Smart Tv </h6>
                    <p>10 Items </p>
                  </div>
                  <img src="images/tv.jpg" />
                </div>
                <div className="d-flex align-items-center">
                  <div>
                    <h6>Headphones</h6>
                    <p>10 Items </p>
                  </div>
                  <img src="images/headphone.jpg" />
                </div>
                <div className="d-flex align-items-center">
                  <div>
                    <h6>Cameras</h6>
                    <p>10 Items </p>
                  </div>
                  <img src="images/camera.jpg" />
                </div>
                <div className="d-flex align-items-center">
                  <div>
                    <h6>Music&Gaming</h6>
                    <p>10 Items </p>
                  </div>
                  <img src="images/camera.jpg" />
                </div>
                <div className="d-flex align-items-center">
                  <div>
                    <h6>Smart Tv </h6>
                    <p>10 Items </p>
                  </div>
                  <img src="images/tv.jpg" />
                </div>
                <div className="d-flex   align-items-center">
                  <div>
                    <h6>Headphones</h6>
                    <p>10 Items </p>
                  </div>
                  <img src="images/headphone.jpg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;