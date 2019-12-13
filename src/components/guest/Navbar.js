import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Navlogo from "../../assets/images/logonav.png";

const Team = () => {
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="dark"
        style={{ backgroundColor: "#183BF0" }}
      >
        <Container>
          <Navbar.Brand>
            <img src={Navlogo} alt="navlogo" width="auto" height="60px" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto navnama">
              <Nav.Link
                href="#features"
                style={{ color: "white", marginLeft: "20px" }}
              >
                <Link
                  to="/"
                  style={{
                    color: "white",
                    textDecoration: "none"
                  }}
                >
                  {" "}
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link style={{ color: "white", marginLeft: "20px" }}>
                <Link
                  to="/about"
                  style={{
                    color: "white",
                    textDecoration: "none"
                  }}
                >
                  About Us
                </Link>
              </Nav.Link>
              <Nav.Link style={{ color: "white", marginLeft: "20px" }}>
                <Link
                  to="/features"
                  style={{
                    color: "white",
                    textDecoration: "none"
                  }}
                >
                  Features
                </Link>
              </Nav.Link>
              <Nav.Link style={{ color: "white", marginLeft: "20px" }}>
                <Link
                  to="/contacts"
                  style={{
                    color: "white",
                    textDecoration: "none"
                  }}
                >
                  Contacts
                </Link>
              </Nav.Link>
              <Nav.Link style={{ color: "white", marginLeft: "20px" }}>
                <Link
                  to="/log-in"
                  style={{
                    color: "white",
                    textDecoration: "none"
                  }}
                >
                  Log In
                </Link>
              </Nav.Link>
              <Nav.Link style={{ color: "white", marginLeft: "20px" }}>
                <Link
                  to="/user/register"
                  style={{
                    color: "white",
                    textDecoration: "none"
                  }}
                >
                  Register
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Team;
