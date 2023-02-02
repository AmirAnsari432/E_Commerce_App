import React from "react";
import BreadCrum from "../component/BreadCrum";
import Container from "../component/Container";

const ShippingPolicy = () => {
  return (
    <>
      <BreadCrum title="Shipping policy" />

      <Container class1="policy-wrapper home-wrapper-2 py-5">
       
          <div className="row">
            <div className="col-12">
              <div className="policy"></div>
            </div>
          </div>
        
      </Container>
    </>
  );
};

export default ShippingPolicy;
