import React, { Component } from "react";
// import { Nav, Navbar, NavDropdown, Col, Row } from "react-bootstrap";
import { Accordion, Card, Col, Row } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
// export default class Dasboard extends Component {
//   render() {
//     return (
//       <div>
//         <Row>
//           <Col md={{ span: 4 }}>
//             <Navbar
//               bg="dark"
//               expand="lg"
//               style={{ height: window.innerHeight - 40 + "px" }}
//             >
//               <Navbar.Toggle aria-controls="basic-navbar-nav" />
//               <Navbar.Collapse id="basic-navbar-nav">
//                 <Nav
//                   className="mr-auto"
//                   style={{
//                     display: "flex",
//                     flexDirection: "column",
//                     display: "block",
//                     width: "200px"
//                   }}
//                 >
//                   <NavDropdown
//                     title="Dropdown"
//                     id="basic-nav-dropdown"
//                     style={{ color: "white" }}
//                   >
//                     <NavDropdown.Item href="#action/3.1">
//                       Action
//                     </NavDropdown.Item>
//                     <NavDropdown.Item href="#action/3.2">
//                       Another action
//                     </NavDropdown.Item>
//                     <NavDropdown.Item href="#action/3.3">
//                       Something
//                     </NavDropdown.Item>
//                   </NavDropdown>
//                   <Nav.Link href="#home" style={{ color: "white" }}>
//                     Home
//                   </Nav.Link>
//                   <Nav.Link href="#link" style={{color: "white"}}>Link</Nav.Link>
//                 </Nav>
//               </Navbar.Collapse>
//             </Navbar>
//           </Col>
//           <Col md={{ span: 8 }}></Col>
//         </Row>
//       </div>
//     );
//   }
// }
class Dasboard extends Component {
  render() {
    return (
      <Row>
        //{" "}
        <Col md={{ span: 4 }}>
          <Accordion defaultActiveKey="0">
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="0">
                Economy Report
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <Link
                    className="nav-link"
                    to="/dasboard"
                    style={{ textDecoration: "none" }}
                  >
                    Pie Chart
                  </Link>
                  <Link
                    className="nav-link"
                    to="/dasboard"
                    style={{ textDecoration: "none" }}
                  >
                    Line Chart
                  </Link>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="1">
                <Link
                  className="nav-link"
                  to="/dasboard"
                  style={{ textDecoration: "none" }}
                >
                  Absensi Report
                </Link>
              </Accordion.Toggle>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="2">
                <Link
                  className="nav-link"
                  to="/dasboard"
                  style={{ textDecoration: "none" }}
                >
                  Edit Profile
                </Link>
              </Accordion.Toggle>
            </Card>
          </Accordion>
        </Col>
        <Col md={{ span: 8 }}></Col>
      </Row>
    );
  }
}

export default withRouter(Dasboard);
