import React from "react";
import Container from "react-bootstrap/Container";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./NavBar.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../../Assets/logo.png";
import Navline from "./NavLine/Navline";

const NavBar = () => {
  return (
    <>
      <Navline />
      <Navbar expand="lg" className="navbar-bg">
        <div className="container-lg container-fluid">
          <Navbar.Brand
            href="#"
            style={{ marginRight: "30%" }}
            className="ms-lg-4 ms-md-0"
          >
            <img
              src={Logo}
              alt="IELTS Exam Library Logo"
              width="150"
              height="50"
            />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="navbarScroll"
            className="border-0 text-light color-white"
          >
            <FontAwesomeIcon
              icon={faBars}
              style={{ color: "white " }}
              className="me-2 text-font"
            />
            <span className="text-font">Menu</span>
          </Navbar.Toggle>
          <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-auto text-white">
              <Nav.Link href="#home" className="me-3 text-color ">
                Home
              </Nav.Link>
              <Nav.Link href="#About" className="me-3 text-color ">
                About
              </Nav.Link>
              <Nav.Link href="#Services" className="me-3 text-color ">
                Services
              </Nav.Link>
              <Nav.Link href="#Work" className="me-3 text-color ">
                Work
              </Nav.Link>
              <Nav.Link href="#pricing" className="me-3 text-color ">
                Pricing
              </Nav.Link>
              <Nav.Link href="#Blog" className="me-3 text-color ">
                Blog
              </Nav.Link>
              <Nav.Link href="#Contact" className="text-color ">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </>
  );
};

export default NavBar;
