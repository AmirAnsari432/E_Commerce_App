import React from "react";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import watch from "../images/watch.jpg";

const Checkout = () => {
  return (
    <>
      <div className="checkout-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row ">
            <div className="col-7">
              <div className="checkout-left-data">
                <h3> My App </h3>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link className="text-dark" to="/cart">
                        Cart
                      </Link>
                    </li>
                    <li className="breadcrumb-item">Information</li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Shipping
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Payment
                    </li>
                  </ol>
                </nav>
                <h4>Contact Information</h4>
                <p>Amir Ansari (amirbhai432@gmail.com)</p>
                <form className="d-flex gap-15 flex-wrap justify-content-between">
                  <div className="w-100">
                    <select className="form-control form-select">
                      <option value="" selected disabled>
                        Select Country
                      </option>
                    </select>
                  </div>
                  <div className="flex-grow-1">
                    <input
                      className="form-control"
                      placeholder="First Name"
                      type="text"
                    />
                  </div>
                  <div className="flex-grow-1">
                    <input
                      className="form-control"
                      placeholder="Last Name"
                      type="text"
                    />
                  </div>
                  <div className="w-100">
                    <input className="form-control" placeholder="Address" />
                  </div>
                  <div className="w-100">
                    <input
                      className="form-control"
                      placeholder="Apartment , Suite , etc (optional) "
                    />
                  </div>
                  <div className="flex-grow-1">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="City"
                    />
                  </div>
                  <div className="flex-grow-1">
                    <select className="form-control form-select">
                      <option value="" selected disabled>
                        Select State
                      </option>
                    </select>
                  </div>
                  <div className="flex-grow-1">
                    <input
                      className="form-control"
                      placeholder="Zip Code"
                      type="text"
                    />
                  </div>

                  <div className="w-100 py-5">
                    <div className="d-flex justify-content-between">
                      <Link className="text-dark " to="/cart">
                        <BiArrowBack className="mx-2" />
                        Return to Cart
                      </Link>
                      <Link className="button" to="/cart">
                        Continue to shipping
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-5">
              <div className="py-4 ">
                <div className="d-flex border-bottom mb-2 align-items-center py-3 gap-10">
                  <div className="gap-10 d-flex w-75">
                    <div className="w-25 position-relative">
                      <span
                        style={{ top: "-10px", right: "2px" }}
                        className="badge bg-dark bg-sacondary text-white rounded-circle p-2 position-absolute"
                      >
                        1
                      </span>
                      <img src={watch} alt="product" className="img-fluid" />
                    </div>
                    <div>
                      <h5 className="title">Title </h5>
                      <p>kabckajb ablc alca c</p>
                    </div>
                  </div>
                  <div className="flex-grow-1">
                    <h5>$100</h5>
                  </div>
                </div>
                <div className="border-bottom py-4">
                  <div className="justify-content-between align-items-center d-flex">
                    <p className="total">Subtotal</p>
                    <p className="total-price">$1000</p>
                  </div>
                  <div className="justify-content-between align-items-center d-flex">
                    <p>Shipping</p>
                    <p>$1000</p>
                  </div>
                </div>
                <div className="border-bottom py-4">
                  <div className="justify-content-between align-items-center d-flex">
                    <h6 className="total">Total</h6>
                    <p className="total-price">$1000</p>
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

export default Checkout;
