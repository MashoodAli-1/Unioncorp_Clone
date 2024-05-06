// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPhone, faMap } from "@fortawesome/free-solid-svg-icons";
// import {
//   faInstagram,
//   faFacebook,
//   faGoogle,
//   faTwitter,
// } from "@fortawesome/free-brands-svg-icons";
// import React from "react";
// import "../NavBar.css";

// const Navline = () => {
//   return (
//     <>
//       <div className="top-wrap">
//         <Container >
//           <Row className="text-center justify-content-md-between">
//             <Col md={3} sm={12} lg={3} className="">
//               <FontAwesomeIcon icon={faPhone} color="#4f86f9" />
//               Call Us: +2 392 3929 210
//             </Col>
//             <Col md={3} sm={12} lg={4}>
//               <FontAwesomeIcon icon={faMap} color="#4f86f9" />
//               Location: San Francisco, California, USA
//             </Col>
//             <Col
//               sm={12}
//               lg={5}
//               md={5}
//               className="d-flex justify-content-lg-end justify-content-center"
//             >
//               <Row>
//                 <Col className="brands-logo">
//                   <FontAwesomeIcon icon={faInstagram} />
//                 </Col>
//                 <Col className="brands-logo">
//                   <FontAwesomeIcon icon={faFacebook} />
//                 </Col>
//                 <Col className="brands-logo">
//                   <FontAwesomeIcon icon={faGoogle} />
//                 </Col>
//                 <Col className="brands-logo">
//                   <FontAwesomeIcon icon={faTwitter} />
//                 </Col>
//               </Row>
//             </Col>
//           </Row>
//         </Container>
//       </div>
//     </>
//   );
// };

// export default Navline;

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faMap, } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faFacebook,
  faGoogle,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import React from "react";
import "../NavBar.css";

const Navline = () => {
  return (
    <>
      <div className="top-wrap">
        <Container>
          <Row className="text-center justify-content-md-between align-items-center">
            {" "}
            {/* Added align-items-center to vertically center contents */}
            <Col md={3} sm={12} lg={3}>
              <FontAwesomeIcon icon={faPhone} color="#4f86f9" />
              <span className="me-5">Call Us: +2 392 3929 210</span>{" "}
              {/* Added margin to the text */}
            </Col>
            <Col md={3} sm={12} lg={4}>
              <FontAwesomeIcon icon={faMap} color="#4f86f9" />
              <span className="ms-2">
                Location: San Francisco, California, USA
              </span>{" "}
              {/* Added margin to the text */}
            </Col>
            <Col
              sm={12}
              lg={5}
              md={5}
              className="d-flex justify-content-lg-end justify-content-center"
            >
              <Row className="align-items-center">
                {" "}
                {/* Vertically center the icons */}
                <Col className="brands-logo me-1 h-100 p-3 w-100">
                  <FontAwesomeIcon icon={faInstagram} />
                </Col>
                <Col className="brands-logo me-1 h-100 p-3 w-100">
                  <FontAwesomeIcon icon={faFacebook} />
                </Col>
                <Col className="brands-logo me-1 h-100 p-3 w-100">
                  <FontAwesomeIcon icon={faGoogle} />
                </Col>
                <Col className="brands-logo me-1 h-100 p-3 w-100">
                  <FontAwesomeIcon icon={faTwitter} />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Navline;
