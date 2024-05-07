import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLink,
  faUser,
  faComment,
  faCalendar,
} from "@fortawesome/free-solid-svg-icons";
import "./Blog.css";

const Blog = () => {
  return (
    <div className="container">
      <Row xs={1} md={2} lg={4} className="row-gap-3">
        {Array.from({ length: 4 }).map((_, idx) => (
          <Col key={idx} className="m-0 p-2">
            <Card style={{ width: "100%", border: "none", overflow: "hidden" }} data-aos="fade-in" data-aos-duration="2000" data-aos-once="true">
              <Card.Img
                variant="top"
                src="https://preview.colorlib.com/theme/unioncorp/images/image_1.jpg"
                className="blog_img_main"
                style={{ height: "300px" }}
              />
              <Card.Body className="position-relative p-4 ">
                {/* <div className="d-flex align-items-center mb-2">
                  <FontAwesomeIcon
                    icon={faUser}
                    className="me-1"
                  />
                  <span className="text_small">Admin</span>
                  <FontAwesomeIcon
                    icon={faCalendar}
                    className=" ms-1 me-1"
                  />
                  <span className="text_small">Jan. 27, 2021 </span>
                  <FontAwesomeIcon
                    icon={faComment}
                    className="ms-1 me-1"
                  />
                  <span className="text_small">3 Comments</span>
                </div> */}
                {/* <div className="d-flex align-items-center mb-2 ">
                  <Col xs="auto">
                    <FontAwesomeIcon icon={faUser} className="me-1" />
                    <span className="text_small">Admin</span>
                  </Col>
                  <Col xs="auto">
                    <FontAwesomeIcon icon={faCalendar} className="ms-1 me-1" />
                    <span className="text_small">Jan. 27, 2021 </span>
                  </Col>
                  <Col xs="auto">
                    <FontAwesomeIcon icon={faComment} className="ms-1 me-1" />
                    <span className="text_small">3 Comments</span>
                  </Col>
                </div> */}
                <div className="d-flex justify-content-start">
                  <FontAwesomeIcon
                    icon={faUser}
                    style={{
                      color: "#4f86f9",
                      fontSize: "small",
                      fontWeight: "lighter",
                    }}
                    className="ms-1 me-1 mt-1"
                  />
                  <h6 className="main_blog_text mt-1 me-3">ADMIN</h6>
                <FontAwesomeIcon
                    icon={faCalendar}
                    style={{
                      color: "#4f86f9",
                      fontSize: "small",
                      fontWeight: "lighter",
                    }}
                    className="ms-1 me-1 mt-1"
                  />
                  <h6 className="main_blog_text mt-1 me-3">JAN. 27, 2021</h6>
                  <FontAwesomeIcon
                    icon={faComment}
                    style={{
                      color: "#4f86f9",
                      fontSize: "small",
                      fontWeight: "lighter",
                    }}
                    className="ms-1 me-1 mt-1"
                  />
                  <h6 className="main_blog_text mt-1">3 COMMENTS</h6>
                </div>

                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <div className="position-absolute bottom-0 end-0">
                  <FontAwesomeIcon
                    key={idx}
                    icon={faLink}
                    className="icon_width-2"
                  />
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Blog;
