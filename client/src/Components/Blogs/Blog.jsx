// import React from "react";
// import { Row, Col, Card } from "react-bootstrap";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faLink,faUser,faComment,faCalendar } from "@fortawesome/free-solid-svg-icons";
// import "./Blog.css"

// const Blog = () => {
//   return (
//     <div className="container">
//       <Row xs={12} md={6} lg={4} className="row-gap-3">
//         {Array.from({ length: 4 }).map((_, idx) => (
//           <Col key={idx} className="m-0 p-2">
//             <Card style={{ width: "100%", border: "none" }}>
//               <Card.Img
//                 variant="top"
//                 src="https://preview.colorlib.com/theme/unioncorp/images/image_1.jpg"
//                 className="blog_img_main"
//                 style={{height:"300px"}}
//               />
//               <Card.Body className="position-relative p-4">
//               <div className="d-flex">
                  
//                   <FontAwesomeIcon
//                     icon={faUser}
//                     style={{
//                       color: "#4f86f9",
//                       fontSize: "10px",
//                       fontWeight: "lighter",
//                     }}
//                     className="me-2 mt-1"
//                   />
//                   <span className="text_small px-2">Admin</span>
//                   <FontAwesomeIcon
//                     icon={faCalendar}
//                     style={{
//                       color: "#4f86f9",
//                       fontSize: "10px",
//                       fontWeight: "lighter",
//                     }}
//                     className="me-lg-2 mt-lg-1"
//                   />
//                   <span className="text_small px-1">Jan. 27, 2021 </span>
//                   <FontAwesomeIcon
//                     icon={faComment}
//                     style={{
//                       color: "#4f86f9",
//                       fontSize: "10px",
//                       fontWeight: "lighter",
//                     }}
//                     className="me-lg-2 mt-lg-1"
//                   />
//                   <span className="text_small">3 Comments</span>
//                 </div>
//                 <Card.Title>Card Title</Card.Title>
//                 <Card.Text>
//                   Some quick example text to build on the card title and make up
//                   the bulk of the card's content.
//                 </Card.Text>
//                 <div className="position-absolute bottom-0 end-0">
//                   <FontAwesomeIcon
//                     key={idx}
//                     icon={faLink}
//                     className="icon_width-2"
//                   />
//                 </div>
//               </Card.Body>
//             </Card>
//           </Col>
//         ))}
//       </Row>
//     </div>
//   );
// };

// export default Blog;



import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faUser, faComment, faCalendar } from "@fortawesome/free-solid-svg-icons";
import "./Blog.css";

const Blog = () => {
  return (
    <div className="container">
      <Row xs={1} md={2} lg={4} className="row-gap-3">
        {Array.from({ length: 4 }).map((_, idx) => (
          <Col key={idx} className="m-0 p-2">
            <Card style={{ width: "100%", border: "none", overflow:"hidden"}}>
              <Card.Img
                variant="top"
                src="https://preview.colorlib.com/theme/unioncorp/images/image_1.jpg"
                className="blog_img_main"
                style={{ height: "300px" }}
              />
              <Card.Body className="position-relative p-4">
                <div className="d-flex">
                  <FontAwesomeIcon
                    icon={faUser}
                    style={{
                      color: "#4f86f9",
                      fontSize: "10px",
                      fontWeight: "lighter",
                    }}
                    className="me-2 mt-1"
                  />
                  <span className="text_small px-2">Admin</span>
                  <FontAwesomeIcon
                    icon={faCalendar}
                    style={{
                      color: "#4f86f9",
                      fontSize: "10px",
                      fontWeight: "lighter",
                    }}
                    className="me-lg-2 mt-lg-1"
                  />
                  <span className="text_small px-1">Jan. 27, 2021 </span>
                  <FontAwesomeIcon
                    icon={faComment}
                    style={{
                      color: "#4f86f9",
                      fontSize: "10px",
                      fontWeight: "lighter",
                    }}
                    className="me-lg-2 mt-lg-1"
                  />
                  <span className="text_small">3 Comments</span>
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
