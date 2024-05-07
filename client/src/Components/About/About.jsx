import React from "react";
import { faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./About.css";

const About = () => {
  return (
    <>
      <div className=" container-lg container-fluid">
        <div className="row mt-5 align-items-center">
          <div className="col-lg-6 order-lg-2 order-md-1" data-aos="fade-in" data-aos-duration="2000" data-aos-once="true">
            <p className="fw-bold">ABOUT UNION CORPORATION</p>
            <h1 className=" text-black fw-bold-60">
              More than 40M+ Trusted Our Financial & Conusultation Institution
            </h1>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics,a
              large language ocean. A small river named Duden flows by their
              place and supplies it with the necessary regelialia. It is a
              paradisematic country, in which roasted parts of sentences fly
              into your mouth.
            </p>
            <button className="btn btn-primary p-4 py-3 fw-bold fs-6">
              LEARN MORE
            </button>
          </div>

          <div className="col-lg-6 order-lg-1 order-md-2 mb-3 mt-3">
            <div className="row h-100 col-gap-4 row-gap-4">
              <div className="col-lg-6 col-md-6 " data-aos="fade-in" data-aos-duration="2000" data-aos-once="true">
                <div className="container hover_effect bg-white rounded-2 px-lg-4 py-lg-5 px-5 py-5 h-100 shadow">
                  <FontAwesomeIcon
                    icon={faMoneyBill}
                    className="ms-0 card_style"
                  />

                  <h3>Professional Consultants</h3>
                  <p className="mb-0">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia.
                  </p>
                </div>
              </div>

              <div className="col-lg-6 col-md-6" data-aos="fade-in" data-aos-duration="2000" data-aos-once="true">
                <div className="container hover_style rounded-2 px-lg-4 py-lg-5 px-5 py-5 h-100 shadow">
                  <FontAwesomeIcon
                    icon={faMoneyBill}
                    className="ms-0 card_style"
                  />
                  <h3 className="text_style">Professional Consultants</h3>
                  <p className="mb-0 text_style">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia.
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-md-6" data-aos="fade-in" data-aos-duration="2000" data-aos-once="true">
                <div className="container hover_effect bg-white rounded-2 px-lg-4 py-lg-5 px-5 py-5 h-100 shadow">
                  <FontAwesomeIcon
                    icon={faMoneyBill}
                    className="ms-0 card_style"
                  />
                  <h3>Professional Consultants</h3>
                  <p className="mb-0">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia.
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-md-6" data-aos="fade-in" data-aos-duration="2000" data-aos-once="true">
                <div className="container hover_effect bg-white rounded-2 px-lg-4 py-lg-5 px-5 py-5 h-100 shadow">
                  <FontAwesomeIcon
                    icon={faMoneyBill}
                    className="ms-0 card_style"
                  />
                  <h3>Professional Consultants</h3>
                  <p className="mb-0">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-image1 about-img ftco-section ftco-image">
        <div className="container" data-aos="fade-in" data-aos-duration="2000" data-aos-once="true">
          <div className="row justify-content-lg-end justify-content-center" >
            <div className="col-md-6 m-5 px-5 py-5" >
              <p className="fw-bold">ABOUT UNION CORPORATION</p>
              <h1 className=" text-black fw-bold-60">
                More than 40M+ Trusted Our Financial & Conusultation Institution
              </h1>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language ocean. A small river named Duden flows by their
                place and supplies it with the necessary regelialia. It is a
                paradisematic country, in which roasted parts of sentences fly
                into your mouth.
              </p>
              <button className="btn btn-primary p-4 py-3 fw-bold fs-6">
                LEARN MORE
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
