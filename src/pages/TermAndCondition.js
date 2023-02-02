import React from "react";
import BreadCrum from "../component/BreadCrum";
import Container from "../component/Container";

const TermAndCondition = () => {
  return (
    <>
      <BreadCrum title="Term & Condition" />

      <Container className="policy-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="policy"></div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default TermAndCondition;
