import React from "react";
import { useState } from "react";
import BreadCrum from "../component/BreadCrum";
import ProductCard from "../component/ProductCard";
import ReactStars from "react-rating-stars-component";
import ReactImageZoom from "react-image-zoom";
import Color from "../component/Color";
import { AiOutlineHeart } from "react-icons/ai";
import { BiGitCompare } from "react-icons/bi";

const SingalProduct = () => {
  const copyToClipboard = () => {
    const textField = document.createElement("textarea");
    textField.innerText =
      "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg";
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  };
  const props = {
    width: 400,
    height: 250,
    zoomWidth: 500,
    img: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg",
  };
  const [orderProduct, setOrderProduct] = useState(0);
  return (
    <>
      <BreadCrum title="Product Name" />
      <div className="main-product-wrapper home-wrapper-2 py-5 ">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-product-image">
                <div>
                  <ReactImageZoom {...props} />
                </div>
              </div>
              <div className="other-product-image d-flex flex-wrap gap-10">
                <div>
                  <img
                    alt="watch"
                    src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg"
                    className="img-fluid"
                  />
                </div>
                <div>
                  <img
                    alt="watch"
                    src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg"
                    className="img-fluid"
                  />
                </div>
                <div>
                  <img
                    alt="watch"
                    src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg"
                    className="img-fluid"
                  />
                </div>
                <div>
                  <img
                    alt="watch"
                    src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="main-product-details">
                <div className="border-bottom">
                  <h3 className="title">
                    Kids Headphones bulk 10 pack multi colores for Students
                  </h3>
                </div>
                <div className="border-bottom py-3">
                  <p className="price">$100</p>
                </div>

                <div className="d-flex align-items-center ">
                  <ReactStars
                    count={5}
                    value={4}
                    edit={false}
                    size={24}
                    activeColor="#ffd700"
                  />
                  <p className="mb-0">(2 Review)</p>
                </div>
                <a href="#review" className="review-btn">
                  Write a Review
                </a>
                <div className="border-bottom py-3">
                  <div className="d-flex gap-10 align-items-center py-2">
                    <h3 className="product-heading">Type :</h3>
                    <p className="product-data">Watch</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center py-2">
                    <h3 className="product-heading">Brands :</h3>
                    <p className="product-data">Sonata</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center py-2">
                    <h3 className="product-heading">Category :</h3>
                    <p className="product-data">Hand Watch</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center py-2">
                    <h3 className="product-heading">Tags :</h3>
                    <p className="product-data">watch headphones tv camera </p>
                  </div>
                  <div className="d-flex gap-10 align-items-center py-2">
                    <h3 className="product-heading">Availablity :</h3>
                    <p className="product-data">In Stock</p>
                  </div>
                  <div className="d-flex gap-10 flex-column py-2">
                    <h3 className="product-heading">Size :</h3>
                    <div className="d-flex flex-wrap gap-15">
                      <span className="badge border text-dark border-secondry">
                        S
                      </span>
                      <span className="badge border text-dark border-secondry">
                        M
                      </span>
                      <span className="badge border text-dark border-secondry">
                        L
                      </span>
                      <span className="badge border text-dark border-secondry">
                        xl
                      </span>
                    </div>
                  </div>
                  <div className="d-flex gap-10 flex-column py-2">
                    <h3 className="product-heading">Color :</h3>
                    <Color />
                  </div>
                  <div className="d-flex gap-10 flex-row my-3 align-items-center">
                    <h3 className="product-heading">Quantity :</h3>
                    <div className="">
                      <input
                        type="number"
                        name=""
                        max={10}
                        min={0}
                        style={{ width: "50px" }}
                      />
                    </div>
                    <div className="align-items-center d-flex ms-5 gap-30">
                      <button type="submit" className="button border-0">
                        Add to Cart
                      </button>
                      <button type="submit" className="button">
                        Buy it Now
                      </button>
                    </div>
                  </div>
                  <div className="d-flex gap-10 align-items-center">
                    <div>
                      <a href="/">
                        {" "}
                        <BiGitCompare className="fs-5 me-2" />
                        Add to campare{" "}
                      </a>
                    </div>
                    <div>
                      <a href="/">
                        {" "}
                        <AiOutlineHeart className="fs-5 me-2" />
                        Add to wishlist
                      </a>
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="d-flex gap-10 flex-column my-3">
                      <div>
                        <h3 className="product-heading my-2">
                          Shipping & Refund :
                        </h3>
                        <p className="product-data">
                          Free shipping and return all availble product <br />
                          we ship all us domestic order in <br />
                          5-7 working days
                        </p>
                      </div>
                      <div className="d-flex align-items-center gap-15">
                        <h3 className="product-heading">Product Link :</h3>
                        <button
                          className="copylink"
                          onClick={() => copyToClipboard()}
                        >
                          Copy
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="description-wrapper py-5 home-wrapper-2 ">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h4>Description</h4>
              <div className="bg-white">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="review-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="review-inner-wrapper">
                <div className="review-head justify-content-between align-items-end">
                  <h4 id="review" className="mb-3">
                    Review
                  </h4>
                  <div>
                    <h4 className="mb-2">Customer Reviews</h4>
                    <div className="d-flex align-items-center gap-10">
                      <ReactStars
                        count={5}
                        value={4}
                        edit={false}
                        size={24}
                        activeColor="#ffd700"
                      />
                      <p className="mb-0">Based on 2 Review</p>
                    </div>
                  </div>
                  {orderProduct && (
                    <div>
                      <a
                        className="text-dark text-decoration-underline"
                        href="/"
                      >
                        Write a review
                      </a>
                    </div>
                  )}
                </div>
                <div className="review-form py-4">
                  <form action="" className="d-flex flex-column gap-15">
                    <h4> Write a Review</h4>
                    <div className="">
                      <ReactStars
                        count={5}
                        value={4}
                        edit={true}
                        size={24}
                        activeColor="#ffd700"
                      />
                    </div>
                    <div>
                      <textarea
                        name=""
                        id=""
                        cols="30"
                        rows="4"
                        className="w-100 form-control"
                        placeholder="Comments"
                      ></textarea>
                    </div>
                    <div className="d-flex justify-content-end">
                      <button className="button border-0">Submit Review</button>
                    </div>
                  </form>
                </div>
                <div className="review mt-3">
                  <div className="review">
                    <div className="d-flex gap-10 align-items-center">
                      <h6 className="mb-0">Amir</h6>
                      <ReactStars
                        count={5}
                        value={4}
                        edit={false}
                        size={24}
                        activeColor="#ffd700"
                      />
                    </div>
                    <p className="mt-3">lorem20 spjs sd'vv sd;v'ms' svsjs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="popular-wrapper p-5 home-wrapper-2">
        <div className="container-xxl">
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
        </div>
      </section>
    </>
  );
};

export default SingalProduct;
