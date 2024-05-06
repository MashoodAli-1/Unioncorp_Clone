import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./CaseStudy.css";

const CaseStudy = () => {
  return (
    <>
      <div className=" container">
        <div className="row justify-content-center">
          <div className="col-lg-5 col-md-8 col-sm-12 mb-5 text-center text-black">
            <p>Case Studies</p>
            <h1>We Take Every Case Studies Very Seriously</h1>
          </div>
        </div>
      </div>
      {/* <div className="row" style={{height:"100vh", width:"100%"}}>
        <div class="col-md-3 bg-image case-img">
          <div className="d-flex justify-content-center align-items-end">
            <FontAwesomeIcon icon={faSearch} color="#fff" />
          </div>
        </div>
      </div> */}
      {/* <div className="bg-img case-img">
      <div className="row">
        <div className="col-md-3 d-flex align-items-center justify-content-end">
          <FontAwesomeIcon icon={faSearch} color="#fff" className=" bg-black"/>
          <h2>Business Finance Consulting</h2>
        </div>
      </div>
      </div> */}
    </>
  );
};

export default CaseStudy;
