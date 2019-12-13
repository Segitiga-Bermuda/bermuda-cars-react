import React, { Component } from "react";
import { Nav, Navbar, Container, Button } from "react-bootstrap";
import Navlogo from "../../assets/images/logonav.png";
import { Link as Link2, withRouter } from "react-router-dom";
import { AXIOS, verify } from "../../helpers";

class MemberNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: verify() || {}
    };

    this.logOut = this.logOut.bind(this);
  }

  logOut() {
    localStorage.removeItem("token");

    this.props.history.push("/log-in");
  }

  render() {
    if (this.state.user.role === "Admin") {
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
                  <Link2
                    className="nav-link"
                    to="/dasboard"
                    style={{
                      color: "white",
                      textDecoration: "none"
                    }}
                  >
                    Dashboard
                  </Link2>
                  <Link2
                    className="nav-link"
                    to="/company/register"
                    style={{
                      color: "white",
                      textDecoration: "none"
                    }}
                  >
                    Company Register
                  </Link2>
                  <Nav.Link
                    href="#"
                    style={{
                      color: "white",
                      textDecoration: "none"
                    }}
                    className="nav-link"
                    onClick={this.logOut}
                  >
                    Log Out
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      );
    } else {
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
                  <Link2
                    className="nav-link"
                    to="/dasboard"
                    style={{
                      color: "white",
                      textDecoration: "none"
                    }}
                  >
                    Dashboard
                  </Link2>
                  <Nav.Link
                    href="#"
                    style={{
                      color: "white",
                      textDecoration: "none"
                    }}
                    className="nav-link"
                    onClick={this.logOut}
                  >
                    Log Out
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      );
    }
  }
}

export default withRouter(MemberNavbar);
