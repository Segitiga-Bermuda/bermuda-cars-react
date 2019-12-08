import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { Link as Links } from "react-router-dom";

const Team = () => {
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="dark"
        style={{ backgroundColor: "#000000" }}
      >
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto navnama">
              <Nav.Link
                href="#features"
                style={{ color: "white", marginLeft: "20px" }}
              >
                <Links
                  to="/"
                  style={{
                    color: "white",
                    textDecoration: "none"
                  }}
                >
                  {" "}
                  Home
                </Links>
              </Nav.Link>
              <Nav.Link style={{ color: "white", marginLeft: "20px" }}>
                <Links
                  to="/about"
                  style={{
                    color: "white",
                    textDecoration: "none"
                  }}
                >
                  About Us
                </Links>
              </Nav.Link>
              <Nav.Link style={{ color: "white", marginLeft: "20px" }}>
                <Links
                  to="/feature"
                  style={{
                    color: "white",
                    textDecoration: "none"
                  }}
                >
                  Features
                </Links>
              </Nav.Link>
              <Nav.Link style={{ color: "white", marginLeft: "20px" }}>
                <Links
                  to="/contact"
                  style={{
                    color: "white",
                    textDecoration: "none"
                  }}
                >
                  Contacts
                </Links>
              </Nav.Link>
              <Nav.Link style={{ color: "white", marginLeft: "20px" }}>
                <Links
                  to="/login"
                  style={{
                    color: "white",
                    textDecoration: "none"
                  }}
                >
                  Login
                </Links>
              </Nav.Link>
              <Nav.Link style={{ color: "white", marginLeft: "20px" }}>
                <Links
                  to="/register"
                  style={{
                    color: "white",
                    textDecoration: "none"
                  }}
                >
                  Register
                </Links>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Team;
