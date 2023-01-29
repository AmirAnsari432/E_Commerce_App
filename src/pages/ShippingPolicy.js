import React from "react";
import BreadCrum from "../component/BreadCrum";

const ShippingPolicy = () => {
  return (
    <>
      <BreadCrum title="Shipping policy" />

      <div className="policy-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="policy"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShippingPolicy;
