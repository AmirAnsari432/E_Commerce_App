import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
import watch from "../images/watch.jpg";
import compare from "../images/campare.png";
import view from "../images/view.png";
import addcart from "../images/addcart.png";
import watch2 from "../images/watch-02.webp";
import wishlist from "../images/wishlist.png";
const ProductCard = (props) => {
  const grid = props.grid;
  let location = useLocation();
  return (
    <>
      <div
        className={`${location.pathname === "/store" ? `col${grid}` : "col-3"}`}
      >
        <Link to="/product/:id" className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <button className="border-0 bg-transparent">
              <img src={wishlist} className="icon" alt="wishlist" />
            </button>
          </div>
          <div className="product-image">
            <img src={watch} className="img-fluid" alt="productimg" />
            <img src={watch2} className="img-fluid" alt="productimg" />
          </div>
          <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">
              Kids headphones bulk 10 pack multi colored for student
            </h5>
            <ReactStars
              count={5}
              value="3"
              edit={false}
              size={24}
              activeColor="#ffd700"
            />
            <p className="price">$ 100</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column">
              <button className="border-0 bg-transparent">
                <img src={compare} className="icon" alt="addcart" />
              </button>
              <button className="border-0 bg-transparent">
                <img src={view} className="icon" alt="addcart" />
              </button>
              <button className="border-0 bg-transparent">
                <img src={addcart} className="icon" alt="addcart" />
              </button>
            </div>
          </div>
        </Link>
      </div>
      <div
        className={`${location.pathname === "/store" ? `col${grid}` : "col-3"}`}
      >
        <div className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <Link>
              <img src={wishlist} className="icon" alt="wishlist" />
            </Link>
          </div>
          <div className="product-image">
            <img src={watch} className="img-fluid" alt="productimg" />
            <img src={watch2} className="img-fluid" alt="productimg" />
          </div>
          <div className="product-details">
            <h6 className="brand"> Havels</h6>
            <h5 className="product-title">
              Kids headphones bulk 10 pack multi colored for student
            </h5>
            <ReactStars
              count={5}
              value="3"
              edit={false}
              size={24}
              activeColor="#ffd700"
            />
            <p className="price">$ 100</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column">
              <button className="border-0 bg-transparent">
                <img src={compare} className="icon" alt="addcart" />
              </button>
              <button className="border-0 bg-transparent">
                <img src={view} className="icon" alt="addcart" />
              </button>
              <button className="border-0 bg-transparent">
                <img src={addcart} className="icon" alt="addcart" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
