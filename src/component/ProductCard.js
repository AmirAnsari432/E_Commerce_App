import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";

const ProductCard = (props) => {
  const grid = props.grid;
  let location = useLocation();
  return (
    <>
      <div
        className={`${location.pathname == "/store" ? `col${grid}` : "col-3"}`}
      >
        <div className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <Link>
              <img src="images/wishlist.png" className="icon" alt="wishlist" />
            </Link>
          </div>
          <div className="product-image">
            <img
              src="images/watch.jpg"
              className="img-fluid"
              alt="product image"
            />
            <img
              src="images/watch.jpg"
              className="img-fluid"
              alt="product image"
            />
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
              <Link>
                <img src="images/campare.png" className="icon" alt="addcart" />
              </Link>
              <Link>
                <img src="images/view.png" className="icon" alt="addcart" />
              </Link>
              <Link>
                <img src="images/addcart.png" className="icon" alt="addcart" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${location.pathname == "/store" ? `col${grid}` : "col-3"}`}
      >
        <div className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <Link>
              <img src="images/wishlist.png" className="icon" alt="wishlist" />
            </Link>
          </div>
          <div className="product-image">
            <img
              src="images/watch.jpg"
              className="img-fluid"
              alt="product image"
            />
            <img
              src="images/watch.jpg"
              className="img-fluid"
              alt="product image"
            />
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
              <Link>
                <img src="images/campare.png" className="icon" alt="addcart" />
              </Link>
              <Link>
                <img src="images/view.png" className="icon" alt="addcart" />
              </Link>
              <Link>
                <img src="images/addcart.png" className="icon" alt="addcart" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
