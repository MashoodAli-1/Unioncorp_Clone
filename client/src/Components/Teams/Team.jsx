import React from "react";
import "./Team.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { faPhone, faMap } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faFacebook,
  faGoogle,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
const Team = () => {
  return (
    <>
      <div className="container ">
      <div className="row row-gap-5">
        {[...Array(8)].map((_, index) => (
          <div key={index} className="col-lg-3 col-md-6  align-items-center mb-4 top_width ">
            <div className="bg-white team_shadow" data-aos="fade-in" data-aos-duration="2000" data-aos-once="true">
            <div className="d-flex  justify-content-center align-items-center position-relative ">
              <div className="bg-img-2 rounded-circle overflow-hidden position-absolute" >
                <img
                  src="https://preview.colorlib.com/theme/unioncorp/images/staff-1.jpg"
                  className="img-fluid"
                  alt="Team member"
                />
              </div>
            </div>
            <div className="text-center py-5 px-5 top-margin overflow-hidden">
              <h3>Jason Smith</h3>
              <p>President & CEO</p>
              <div className="d-flex gap-lg-2 gap-md-1 justify-content-center px-lg-3 px-md-4 px-sm-5 ">
                {[...Array(4)].map((_, index) => (
                    <FontAwesomeIcon key={index} icon={faTwitter} className="icon_width"/>
                ))}
              </div>
              <p>
                I am an ambitious workaholic, but apart from that, pretty simple
                person.
              </p>
            </div>

            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Team;