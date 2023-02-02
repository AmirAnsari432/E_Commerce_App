import React from "react";
import BreadCrum from "../component/BreadCrum";
import watch from "../images/watch.jpg";
import cross from "../images/cross.png";
import Container from "../component/Container";

const Wishlist = () => {
  return (
    <>
      <BreadCrum title="WishList" />
      <Container class1="wishlist-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-3 flex-column d-flex">
            <div className="wishlist-card position-relative">
              <img
                src={cross}
                alt="cross"
                className="position-absolute border-bottom-0 img-fluid cross"
              />
              <div className="wishlist-card-image">
                <img src={watch} alt="watch" className="img-fluid w-100" />
              </div>
              <div className="wishlist-desc p-2">
                <h5 className="title py-3">
                  Honor t1 70 1GB RAM 8 GB ROM With Wi-Fi+3G Tablet
                </h5>
                <h6 className="price text-danger">$100</h6>
              </div>
            </div>{" "}
          </div>
          <div className="col-3 flex-column d-flex">
            <div className="wishlist-card position-relative">
              <img
                src={cross}
                alt="cross"
                className="position-absolute border-bottom-0 img-fluid cross"
              />
              <div className="wishlist-card-image">
                <img src={watch} alt="watch" className="img-fluid w-100" />
              </div>
              <div className="wishlist-desc p-2">
                <h5 className="title py-3">
                  Honor t1 70 1GB RAM 8 GB ROM With Wi-Fi+3G Tablet
                </h5>
                <h6 className="price text-danger">$100</h6>
              </div>
            </div>{" "}
          </div>
          <div className="col-3 flex-column d-flex">
            <div className="wishlist-card position-relative">
              <img
                src={cross}
                alt="cross"
                className="position-absolute border-bottom-0 img-fluid cross"
              />
              <div className="wishlist-card-image">
                <img src={watch} alt="watch" className="img-fluid w-100" />
              </div>
              <div className="wishlist-desc p-2">
                <h5 className="title py-3">
                  Honor t1 70 1GB RAM 8 GB ROM With Wi-Fi+3G Tablet
                </h5>
                <h6 className="price text-danger">$100</h6>
              </div>
            </div>{" "}
          </div>
        </div>
      </Container>
    </>
  );
};

export default Wishlist;
