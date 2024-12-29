import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/1-removebg-preview (3) 1.jpg";
import profile from "../assets/p2.png";
import { NavDropdown } from "react-bootstrap";
import "../style/navStyle.css";

const AppNavbar: React.FC = () => {
  const location = useLocation();

  return (
    <Navbar bg="transparent" expand="lg" className="shadow-none">
      <Container className="d-flex align-items-center justify-content-between">
        {/* Logo */}
        <Navbar.Brand as={Link} to="/">
          <img
            src={logo}
            alt="Logo"
            width="90"
            height="90"
            className="rounded-5 mx-5"
          />
        </Navbar.Brand>

        {/* Navbar Toggle */}
        <Navbar.Toggle aria-controls="navbar-nav" />

        {/* Navbar Collapse */}
        <Navbar.Collapse
          id="navbar-nav"
          className="justify-content-center text-center mx-5">
          <Nav className="d-flex align-items-center mx-auto justify-content-center">
            {/* Nav Links */}
            <Nav.Link
              as={Link}
              to="/"
              className={`fs-5 me-2 ${
                location.pathname === "/" ? "active" : ""
              }`}>
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/services"
              className={`fs-5 me-2 ${
                location.pathname === "/services" ? "active" : ""
              }`}>
              Service
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/offers"
              className={`fs-5 me-2 ${
                location.pathname === "/offers" ? "active" : ""
              }`}>
              Offers
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/about"
              className={`fs-5 me-2 ${
                location.pathname === "/about" ? "active" : ""
              }`}>
              About Us
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/contact"
              className={`fs-5 me-2 ${
                location.pathname === "/contact" ? "active" : ""
              }`}>
              Contact Us
            </Nav.Link>
          </Nav>

          {/* Dropdowns */}
          <Nav className="ms-lg-auto">
            {/* Language Dropdown */}
            <NavDropdown
              className="fs-5 ms-lg-5"
              title={<span className="">Language</span>}
              menuVariant="dark">
              <NavDropdown.Item href="#action/3.1" className="text-light">
                English
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" className="text-light">
                Arabic
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" className="text-light">
                Turkish
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4" className="text-light">
                French
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5" className="text-light">
                Italian
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.6" className="text-light">
                German
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.7" className="text-light">
                Russian
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.8" className="text-light">
                Hindi
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.9" className="text-light">
                Korean
              </NavDropdown.Item>
            </NavDropdown>

            {/* Profile Dropdown */}
            <NavDropdown
              className="profile-dropdown no-arrow ms-lg-5" // Added responsive margin on large screens
              title={
                <img
                  src={profile}
                  alt="Profile"
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    cursor: "pointer",
                  }}
                />
              }
              menuVariant="light"
              id="profile-dropdown">
              <NavDropdown.Item as="div" className="text-dark">
                <Link
                  to="/myProfile"
                  className="text-decoration-none text-dark">
                  My Profile
                </Link>
              </NavDropdown.Item>
              <Link to="/myBooking" className="text-decoration-none text-dark">
                <NavDropdown.Item href="#Booking" className="text-dark">
                  My Booking
                </NavDropdown.Item>
              </Link>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
