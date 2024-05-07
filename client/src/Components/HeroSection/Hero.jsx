import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Container from "react-bootstrap/Container";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Hero.css";

function Hero() {
  const [activeDot, setActiveDot] = useState(0); // State to track the active dot

  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    beforeChange: (current, next) => setActiveDot(next), // Update active dot state on slide change
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          backgroundColor: "transparent",
          bottom: 0,
        }}
      >
        <ul> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          margin: "0px",
          width: "15px",
          height: "15px",
          color: "white",
          borderRadius: "50%",
          border: `1px solid ${
            i === activeDot ? "#0d6efd" : "rgba(255, 255, 255, 0.9)"
          }`,
          background: `${
            i === activeDot ? "#0d6efd" : "rgba(255, 255, 255, 0.9)"
          }`,
        }}
      />
    ),
  };

  return (
    <div className="slider-container position-relative w-100">
      <Slider {...settings} className="text-light bg-image">
        <div>
          <div className="container-lg d-flex align-items-center justify-content-center heigth-control">
            <div className="text-center ">
              <h3 className="display-4">
                We're Always Here To Give Financial Help!
              </h3>
              <p className="lead">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
              <button className="btn btn-primary hero-btn-1 p-4 py-3">GET STARTED <FontAwesomeIcon
              icon={faArrowRight}
              style={{ color: "#4f86f9",fontSize:"10px", fontWeight:'lighter' }}
              className="ms-2"
            /></button>
            </div>
          </div>
        </div>
        <div>
          <div className="container-lg d-flex align-items-center justify-content-center heigth-control">
            <div className="text-center">
            <h3 className="display-4">
                We're Always Here To Give Financial Help!
              </h3>
              <p className="lead">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
              <button className="btn btn-primary hero-btn-1 p-4 py-3">GET STARTED <FontAwesomeIcon
              icon={faArrowRight}
              style={{ color: "#4f86f9",fontSize:"10px", fontWeight:'lighter' }}
              className="ms-2"
            /></button>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default Hero;
