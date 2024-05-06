import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faContactCard } from "@fortawesome/free-solid-svg-icons";
import "./Service.css";

const Service = () => {
  const items = [
    {
      title: "Financial Planning",
      description:
        "Far far away, behind the word mountains, far from the countries Vokalia.",
    },
    {
      title: "Financial Planning",
      description:
        "Far far away, behind the word mountains, far from the countries Vokalia.",
    },
    {
      title: "Financial Planning",
      description:
        "Far far away, behind the word mountains, far from the countries Vokalia.",
    },
    {
      title: "Financial Planning",
      description:
        "Far far away, behind the word mountains, far from the countries Vokalia.",
    },
    {
      title: "Financial Planning",
      description:
        "Far far away, behind the word mountains, far from the countries Vokalia.",
    },
    {
      title: "Financial Planning",
      description:
        "Far far away, behind the word mountains, far from the countries Vokalia.",
    },
    {
      title: "Financial Planning",
      description:
        "Far far away, behind the word mountains, far from the countries Vokalia.",
    },
    {
      title: "Financial Planning",
      description:
        "Far far away, behind the word mountains, far from the countries Vokalia.123",
    },
  ];
  return (
    <>
      <div className=" container">
        <div className="row justify-content-center">
          <div className="col-lg-5 col-md-8 col-sm-9 mb-5 text-center">
            <p>Services</p>
            <h1>Our Exclusive Services We Offer For You</h1>
          </div>
        </div>
        {/* <div className="row justify-content-center">
            <div className="col-md-3 text-center ">
                <div className="flow-wrap ">
                <FontAwesomeIcon icon={faContactCard} color="#4f86f9" />
                </div>
                <div className="text">
                    <h2>Financial Planning</h2>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
                </div>
            </div>
            <div className="col-md-3 text-center ">
                <div className="flow-wrap ">
                <FontAwesomeIcon icon={faContactCard} color="#4f86f9" />
                </div>
                <div className="text">
                    <h2>Financial Planning</h2>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
                </div>
            </div>
            <div className="col-md-3 text-center ">
                <div className="flow-wrap ">
                <FontAwesomeIcon icon={faContactCard} color="#4f86f9" />
                </div>
                <div className="text">
                    <h2>Financial Planning</h2>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
                </div>
            </div>
            <div className="col-md-3 text-center ">
                <div className="flow-wrap ">
                <FontAwesomeIcon icon={faContactCard} color="#4f86f9" />
                </div>
                <div className="text">
                    <h2>Financial Planning</h2>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
                </div>
            </div>
            <div className="col-md-3 text-center ">
                <div className="flow-wrap ">
                <FontAwesomeIcon icon={faContactCard} color="#4f86f9" />
                </div>
                <div className="text">
                    <h2>Financial Planning</h2>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
                </div>
            </div>
            <div className="col-md-3 text-center ">
                <div className="flow-wrap ">
                <FontAwesomeIcon icon={faContactCard} color="#4f86f9" />
                </div>
                <div className="text">
                    <h2>Financial Planning</h2>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
                </div>
            </div>
            <div className="col-md-3 text-center ">
                <div className="flow-wrap ">
                <FontAwesomeIcon icon={faContactCard} color="#4f86f9" />
                </div>
                <div className="text">
                    <h2>Financial Planning</h2>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
                </div>
            </div>
            <div className="col-md-3 text-center ">
                <div className="flow-wrap ">
                <FontAwesomeIcon icon={faContactCard} color="#4f86f9" />
                </div>
                <div className="text">
                    <h2>Financial Planning</h2>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
                </div>
            </div>
        </div> */}
        <div className="row justify-content-center">
          {items.map((item, index) => (
            <div key={index} className="col-md-3 text-center">
              <div className="flow-wrap">
                <FontAwesomeIcon
                  icon={faContactCard}
                  style={{
                    color: "#4f86f9",
                    fontSize: "100px",
                    fontWeight: "lighter",
                  }}
                />
              </div>
              <div className="text">
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Service;
