import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import BreadCrum from "../component/BreadCrum";
import Color from "../component/Color";
import ProductCard from "../component/ProductCard";

const OurStore = () => {
  const [grid, setGrid] = useState(4);

  return (
    <>
      <BreadCrum title="Our Store" />
      <div className="storewrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="filter-card mb-3">
                <div>
                  <div>
                    <h5>Search By Category</h5>
                  </div>
                  <ul className="ps-0">
                    <li>Watch </li>
                    <li>Tv</li>
                    <li>Camera</li>
                    <li>Laptop</li>
                  </ul>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Filter By</h3>
                <div className="sub-title">Availablity</div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id=""
                  />
                  <label className="form-check-lable" htmlFor="">
                    In Stock (1)
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id=""
                  />
                  <label className="form-check-lable" htmlFor="">
                    Out of Stock
                  </label>
                </div>
                <div className="sub-title">Price</div>
                <div className="mb-3 align-items-center d-flex">
                  <div className="input-group flex-nowrap ">
                    <span className="m-1"> $ </span>
                    <input
                      type="text"
                      className="form-control mx-1"
                      placeholder="From"
                      aria-label="Form"
                      aria-describedby="addon-wrapping"
                    />
                    <input
                      type="text"
                      className="form-control mx-1"
                      placeholder="To"
                      aria-label="To"
                      aria-describedby="addon-wrapping"
                    />
                  </div>
                </div>
                <div className="sub-title">
                  <h5>Color</h5>
                  <div>
                    <Color />
                  </div>
                  <div className="d-flex flex-wrap">
                    <ul className="colors">
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                    </ul>
                  </div>
                </div>
                <div className="sub-title">
                  <h5>Size</h5>
                  <div className="">
                    <ul>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id=""
                        />
                        <label className="form-check-lable" htmlFor="">
                          S
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id=""
                        />
                        <label className="form-check-lable" htmlFor="">
                          M
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id=""
                        />
                        <label className="form-check-lable" htmlFor="">
                          L
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id=""
                        />
                        <label className="form-check-lable" htmlFor="">
                          XL
                        </label>
                      </div>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Products Tags</h3>
                <div className="product-tag d-flex flex-wrap align-items-center gap-10">
                  <span className="badge bg-secondary rounded-3 text-secondry py-2">
                    Headphones
                  </span>
                  <span className="badge bg-secondary rounded-3 text-secondry py-2">
                    Watch
                  </span>
                  <span className="badge bg-secondary rounded-3 text-secondry py-2">
                    Tv
                  </span>
                  <span className="badge bg-secondary rounded-3 text-secondry py-2">
                    Camera
                  </span>
                  <span className="badge bg-secondary rounded-3 text-secondry py-2">
                    Smart Tv
                  </span>
                  <span className="badge bg-secondary rounded-3 text-secondry py-2">
                    Smart Mobiles
                  </span>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Random Products</h3>
                <div>
                  <div className="random-product d-flex">
                    <div className="w-50">
                      <img
                        src="images/watch.jpg"
                        alt="watch"
                        className="img-fluid"
                      />
                    </div>
                    <div className="w-50">
                      <h5>
                        Kids headhones bulk 10 pack multi colored for students
                      </h5>
                      <ReactStars
                        count={5}
                        size={24}
                        value={4}
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <b>$ 300</b>
                    </div>
                  </div>
                </div>
                <div className="p-1">
                  <div className="random-product d-flex">
                    <div className="w-50">
                      <img
                        src="images/watch.jpg"
                        alt="watch"
                        className="img-fluid"
                      />
                    </div>
                    <div className="w-50">
                      <h5>
                        Kids headhones bulk 10 pack multi colored for students
                      </h5>
                      <ReactStars
                        count={5}
                        size={24}
                        value={4}
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <b>$ 300</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-9">
              <div className="filter-sort-grid">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="align-items-center d-flex gap-10">
                    <p className="mb-0" style={{ width: "100px " }}>
                      Sort By:
                    </p>
                    <select className="form-control form-select" id="">
                      <option value="manual">Featured</option>
                      <option value="bestselling" selected="selected">
                        Best Selling
                      </option>
                      <option value="title-ascending">Alphabetcally,A-Z</option>
                      <option value="title-descending">
                        Alphabetcally,Z-A
                      </option>
                      <option value="price-ascending">Price Low to high</option>
                      <option value="price-descending">
                        Price high to low
                      </option>
                      <option value="create-ascending">Date, old to new</option>
                    </select>
                  </div>
                  <div className="d-flex align-items-center gap-10">
                    <p className="totalproduct mb-0">21 Products</p>
                    <div className="d-flex gap-10 align-items-center GRID">
                      <img
                        onClick={() => {
                          setGrid(3);
                        }}
                        src="images/gr-1.png"
                        className="d-block img-fluid gr-img"
                        alt="gr-3"
                      />
                      <img
                        onClick={() => {
                          setGrid(4);
                        }}
                        src="images/gr-2.png"
                        className="d-block img-fluid gr-img"
                        alt="gr-4"
                      />
                      <img
                        onClick={() => {
                          setGrid(6);
                        }}
                        src="images/gr-3.png"
                        className="d-block img-fluid gr-img"
                        alt="gr-6"
                      />
                      <img
                        onClick={() => {
                          setGrid(12);
                        }}
                        src="images/gr-4.png"
                        className="d-block img-fluid gr-img"
                        alt="gr-12"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="product-list py-5">
                <div className="d-flex gap-10 flex-wrap">
                  <ProductCard grid={grid} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurStore;
