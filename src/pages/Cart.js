import React from "react";

import watch from "../images/watch.jpg";
import { AiOutlineDelete } from "react-icons/ai";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <div className="cart-wrapper home-wrapper-2 py-5">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <div className="d-flex justify-content-between cart-header">
              <h4 className="cart-col-1">Product </h4>
              <h4 className="cart-col-2">Price</h4>
              <h4 className="cart-col-3">Quantity</h4>
              <h4 className="cart-col-4">Total </h4>
            </div>
            <div className="d-flex justify-content-between  py-3 cart-header">
              <div className="cart-col-1 gap-15 d-flex align-items-center">
                <div className="w-25">
                  <img className="img-fluid" src={watch} alt="product image" />
                </div>
                <div>
                  <p>heaphome wathdca caklsc alfnc laksnc alksn</p>
                  <p> Size :size </p>
                  <p>color : color </p>
                </div>
              </div>
              <div className="cart-col-2 d-flex align-items-center">
                <h className="price">$100</h>
              </div>
              <div className="cart-col-3 d-flex gap-15 align-items-center">
                <div>
                  <input
                    type="number"
                    min={1}
                    max={10}
                    id=""
                    className="form-control"
                  />
                </div>
                <div>
                  <AiOutlineDelete />
                </div>
              </div>
              <div className="cart-col-4 align-items-center d-flex ">
                <h5>$100</h5>
              </div>
            </div>
          </div>
          <div className="d-flex py-5 justify-content-between">
            <div>
              <Link>
                <button className="button">Continue to shopping</button>
              </Link>
            </div>
            <div className="d-flex flex-column align-items-end">
              <h4> Sub Total : $1000</h4>
              <p> Text and shipping calculated checked out </p>
              <Link to="/checkout">
                <button className="button">Check out </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
