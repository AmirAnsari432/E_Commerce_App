import React from "react";
import BreadCrum from "../component/BreadCrum";
import Color from "../component/Color";

const CampareProduct = () => {
  return (
    <>
      <BreadCrum title="Campare Product " />

      <div className="campare-product-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="campare-product-card posotion-relative">
                <img
                  src="images/cross.png"
                  alt="cross"
                  className="positon-absolute cross img-fluid"
                />
                <div className="product-card-image">
                  <img src="images/watch.jpg" alt="watch" />
                </div>
                <div className="campare-product-detail ">
                  <h5 className="title">
                    Honor t1 70 1GB RAM 8 GB ROM With Wi-Fi+3G Tablet
                  </h5>
                  <h6 className="price mt-3">$100</h6>
                </div>
                <div className="product-detail">
                  <h5>Brand:</h5>
                  <p>Havels</p>
                </div>
                <div className="product-detail">
                  <h5>Type:</h5>
                  <p>Watch</p>
                </div>
                <div className="product-detail">
                  <h5>Availablity:</h5>
                  <p>In Stock</p>
                </div>
                <div className="product-detail">
                  <h5>Color:</h5>
                  <Color />
                </div>
                <div className="product-detail">
                  <h5>Size:</h5>
                  <div className="d-flex gap-10">
                    <p>S</p>
                    <p>M</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="campare-product-card posotion-relative">
                <img
                  src="images/cross.png"
                  alt="cross"
                  className="positon-absolute cross img-fluid"
                />
                <div className="product-card-image">
                  <img src="images/watch.jpg" alt="watch" />
                </div>
                <div className="campare-product-detail ">
                  <h5 className="title">
                    Honor t1 70 1GB RAM 8 GB ROM With Wi-Fi+3G Tablet
                  </h5>
                  <h6 className="price mt-3">$100</h6>
                </div>
                <div className="product-detail">
                  <h5>Brand:</h5>
                  <p>Havels</p>
                </div>
                <div className="product-detail">
                  <h5>Type:</h5>
                  <p>Watch</p>
                </div>
                <div className="product-detail">
                  <h5>Availablity:</h5>
                  <p>In Stock</p>
                </div>
                <div className="product-detail">
                  <h5>Color:</h5>
                  <Color />
                </div>
                <div className="product-detail">
                  <h5>Size:</h5>
                  <div className="d-flex gap-10">
                    <p>S</p>
                    <p>M</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CampareProduct;