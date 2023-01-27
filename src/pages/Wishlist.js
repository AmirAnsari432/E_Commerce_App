import React from "react";
import BreadCrum from "../component/BreadCrum";

const Wishlist = () => {
  return (
    <>
      <BreadCrum title="WishList" />
      <div className="wishlist-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="wishlist-card position-relative">
                <img
                  src="images/cross.png"
                  alt="cross"
                  className="position-absolute img-fluid cross"
                />
                <div className="wishlist-card-image">
                  <img
                    src="images/watch.jpg"
                    alt="watch"
                    className="img-fluid w-100"
                  />
                </div>
                <div>
                  <h5 className="title py-3">
                    Honor t1 70 1GB RAM 8 GB ROM With Wi-Fi+3G Tablet
                  </h5>
                  <h6 className="price text-danger">$100</h6>
                </div>
              </div>
            </div><div className="col-3">
              <div className="wishlist-card position-relative">
                <img
                  src="images/cross.png"
                  alt="cross"
                  className="position-absolute img-fluid cross"
                />
                <div className="wishlist-card-image">
                  <img
                    src="images/watch.jpg"
                    alt="watch"
                    className="img-fluid w-100"
                  />
                </div>
                <div>
                  <h5 className="title py-3">
                    Honor t1 70 1GB RAM 8 GB ROM With Wi-Fi+3G Tablet
                  </h5>
                  <h6 className="price text-danger">$100</h6>
                </div>
              </div>
            </div><div className="col-3">
              <div className="wishlist-card position-relative">
                <img
                  src="images/cross.png"
                  alt="cross"
                  className="position-absolute img-fluid cross"
                />
                <div className="wishlist-card-image">
                  <img
                    src="images/watch.jpg"
                    alt="watch"
                    className="img-fluid w-100"
                  />
                </div>
                <div>
                  <h5 className="title py-3">
                    Honor t1 70 1GB RAM 8 GB ROM With Wi-Fi+3G Tablet
                  </h5>
                  <h6 className="price text-danger">$100</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wishlist;
