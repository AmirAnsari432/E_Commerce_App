import React from "react";
import BreadCrum from "../component/BreadCrum";
import { BiHome } from "react-icons/bi";
import { BsFillTelephoneForwardFill } from "react-icons/bs";
import { AiOutlineMail, AiOutlineInfoCircle } from "react-icons/ai";
import Container from "../component/Container";
const Contact = () => {
  return (
    <>
      <BreadCrum title="Contact Us" />
      <Container className="contact-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <iframe
              title="watch"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28430.627849961325!2d80.13613253131656!3d27.0355852667721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399e888d8f378583%3A0xa372ea4a26fb3003!2sMallawan%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1674824770902!5m2!1sen!2sin"
              width="600"
              height="450"
              className="border-0 w-100"
              // allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="col-12 d-flex py-5  justify-content-between">
            <div>
              <h3 className="contact-title mb-4">Conatct us</h3>
              <form action="" className="d-flex flex-column gap-15">
                <div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Mobile"
                  />
                </div>
                <div>
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="4"
                    className="w-100"
                    placeholder="Comments"
                  ></textarea>
                </div>
                <div className="button w-50 text-center">Submit</div>
              </form>
            </div>
            <div>
              <h3 className="contact-title-mb-4">Get in touch with us</h3>
              <div>
                <ul className="ps-0">
                  <li className="mb-3 d-flex align-items-center gap-15">
                    <BiHome className="fs-5" />
                    <address>
                      Hn0.30 near bada darwaja nasrat nagar mallawan hardoi
                    </address>
                  </li>
                  <li className="mb-3 d-flex align-items-center gap-15">
                    <BsFillTelephoneForwardFill className="fs-5" />
                    <a className="text-dark" href="tel : +91 9125421234">
                      +91 9125421234
                    </a>
                  </li>
                  <li className="mb-3 d-flex align-items-center gap-15">
                    <AiOutlineMail className="fs-5" />
                    <a
                      className="text-dark"
                      href="mailto: amirbhai43@gmail.com"
                    >
                      Amirbhai432@gmail.com
                    </a>
                  </li>
                  <li className="mb-3 d-flex align-items-center gap-15">
                    <AiOutlineInfoCircle className="fs-5" />
                    <p>Monday - Friday 10 AM - 8 PM</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Contact;
