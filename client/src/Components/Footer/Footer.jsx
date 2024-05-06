import React from "react";
import "./Footer.css";
import {
  faInstagram,
  faFacebook,
  faGoogle,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faArrowRight,
  faCalendar,
  faUser,
  faMap,
  faPhone,
  faPaperPlane,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row footer-img-1 justify-content-center align-items-center extra_height_f1">
          <div className="col-lg-6 col-md-6 text-start text-white text-index fw-bolder extra_padding_f1">
            {" "}
            <p className="text-white"> PREPARE TO TAKEOFF</p>
            <h1 class="mb-md-0 mb-4 text-white">Looking for business opportunity?</h1>
          </div>
          <div className="col-lg-6 col-md-6 d-flex justify-content-lg-center justify-content-ms-start justify-content-md-start">
            {" "}
            <button className="btn btn-primary footer-btn p-4 py-3">
              GET STARTED
            </button>
          </div>
        </div>
        <div className="row footer-img-2 justify-content-center align-items-center px-5 py-5 extra_height_f2">
          <div className="col-lg-3 col-md-6 greater_z_index">
            <div className="p-1 text-index text-white fw-bolder">
              <img src="../../Assets/logo.png" alt="" width={150} height={50} />
              <p>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia.
              </p>
              <div className="d-flex justify-content-start align-items-start icon-border">
                {[...Array(3)].map((_, index) => (
                  <FontAwesomeIcon
                    key={index}
                    icon={faTwitter}
                    className="icon_width-1 me-1"
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 greater_z_index">
            <h4 className="text-lighter ">Services</h4>
            <div className="d-md-flex d-lg-flex">
              <div className="p-1 text-index text-white fw-bolder">
                <p>
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    style={{
                      color: "#fff",
                      fontSize: "10px",
                      fontWeight: "lighter",
                    }}
                    className="me-2"
                  />{" "}
                  Financial Planing
                </p>
                <p>
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    style={{
                      color: "#fff",
                      fontSize: "10px",
                      fontWeight: "lighter",
                    }}
                    className="me-2"
                  />
                  Investment  Management
                </p>
                <p>
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    style={{
                      color: "#fff",
                      fontSize: "10px",
                      fontWeight: "lighter",
                    }}
                    className="me-2"
                  />
                  Business Planning
                </p>
                <p>
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    style={{
                      color: "#fff",
                      fontSize: "10px",
                      fontWeight: "lighter",
                    }}
                    className="me-2"
                  />
                  Taxes Consulting
                </p>
              </div>

            </div>
          </div>
          <div className="col-lg-3 col-md-6 greater_z_index">
            <h3>Recent Post</h3>
            <div className="d-flex justify-content-start align-items-start">
              <div className="blog-img-1 me-2"></div>
              <div>
                <div className="d-flex">
                  <FontAwesomeIcon
                    icon={faCalendar}
                    style={{
                      color: "#fff",
                      fontSize: "10px",
                      fontWeight: "lighter",
                    }}
                    className="ms-2"
                  />
                  <h6>Jan. 27, 2021</h6>
                  <FontAwesomeIcon
                    icon={faUser}
                    style={{
                      color: "#fff",
                      fontSize: "10px",
                      fontWeight: "lighter",
                    }}
                    className="ms-2"
                  />
                  <h6>Admin</h6>
                </div>
                <p>Incorporation is a big milestone for business</p>
              </div>
            </div>
            <div className="d-flex justify-content-start align-items-start">
              <div className="blog-img-1 me-2"></div>
              <div>
                <div className="d-flex">
                  <FontAwesomeIcon
                    icon={faCalendar}
                    style={{
                      color: "#fff",
                      fontSize: "10px",
                      fontWeight: "lighter",
                    }}
                    className="ms-2"
                  />
                  <h6>Jan. 27, 2021</h6>
                  <FontAwesomeIcon
                    icon={faUser}
                    style={{
                      color: "#fff",
                      fontSize: "10px",
                      fontWeight: "lighter",
                    }}
                    className="ms-2"
                  />
                  <h6>Admin</h6>
                </div>
                <p>Incorporation is a big milestone for business</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 greater_z_index">
            <h3>Have a Questions?</h3>
            <div className="d-flex">
              <FontAwesomeIcon
                icon={faMap}
                style={{
                  color: "#fff",
                  fontSize: "20px",
                  fontWeight: "lighter",
                }}
                className="me-2"
              />
              <h6>
                203 Fake St. Mountain View, San Francisco, California, USA
              </h6>
            </div>
            <div className="d-flex">
              <FontAwesomeIcon
                icon={faPhone}
                style={{
                  color: "#fff",
                  fontSize: "20px",
                  fontWeight: "lighter",
                }}
                className="me-2"
              />
              <h6>+2 392 3929 210</h6>
            </div>
            <div className="d-flex">
              <FontAwesomeIcon
                icon={faPaperPlane}
                style={{
                  color: "#fff",
                  fontSize: "20px",
                  fontWeight: "lighter",
                }}
                className="me-2"
              />
              <h6>info@yourdomain.com</h6>
            </div>
          </div>
        </div>
        <div className="row justify-content-center align-items-center top-wrap px-lg-5 py-5 text-center">
          <p className="text-white">
            Copyright ©2024 All rights reserved | This template is made with{" "}
            <FontAwesomeIcon
              icon={faHeart}
              style={{
                color: "#fff",
                fontSize: "17px",
                fontWeight: "lighter",
              }}
              className="me-1 ms-1"
            />{" "}
            by Colorlib
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
