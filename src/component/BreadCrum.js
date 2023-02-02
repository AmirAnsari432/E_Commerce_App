import React from "react";
import { Link } from "react-router-dom";
import Container from "./Container";

const BreadCrum = (props) => {
  const title = props.title;
  return (
    <Container class1="breadcrum py-3">
    
        <div className="row">
          <div className="col-12">
            <p className="text-center mb-0">
              <Link to="/" className="text-dark">
                Home &nbsp;
              </Link>
              / {title}
            </p>
          </div>
        </div>
      
    </Container>
  );
};

export default BreadCrum;
