import React, { Component } from "react";
import Profile from "../assets/images/teamwork.png";
import {
  Col,
  Row,
  Container,
  Image,
  Button,
  FormControl,
  Form,
  FormGroup
} from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import background from "../assets/images/background/bg2.jpg";
import DayPickerInput from "react-day-picker/DayPickerInput";

import "react-day-picker/lib/style.css";

class Register2 extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Container
        fluid={true}
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: window.innerHeight - 40 + "px",
          padding: "0",
          width: "100%"
        }}
      >
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <Row
              style={{
                display: "flex",
                minHeight: window.innerHeight - 40 + "px",
                alignItems: "center"
              }}
            >
              <Col xs={{ span: 12 }}>
                <Row
                  style={{
                    backgroundColor: "rgba(212, 218, 247, 0.5)",
                    borderRadius: "20px"
                  }}
                >
                  <Col
                    xs={{ span: 12, order: 1 }}
                    style={{
                      backgroundColor: "#183bf0",
                      boxSizing: "border-box",
                      padding: "10px",
                      textAlign: "center",
                      color: "white",
                      borderRadius: "20px 20px 0 0",
                      fontWeight: 900,
                      fontSize: "2em"
                    }}
                  >
                    Create Acount
                  </Col>
                  <Col
                    md={{ span: 6, order: 2 }}
                    xs={{ span: 12, order: 2 }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      boxSizing: "border-box",
                      padding: "20px"
                    }}
                  >
                    <Image
                      roundedCircle
                      src={Profile}
                      alt="profile"
                      style={{
                        display: "block",
                        width: "75%",
                        margin: "0 auto"
                      }}
                    />
                  </Col>
                  <Col
                    md={{ span: 6, order: 3 }}
                    xs={{ span: 12, order: 3 }}
                    style={{
                      boxSizing: "border-box",
                      padding: "20px",
                      maxHeight: "450px",
                      overflow: "auto"
                    }}
                  >
                    <Form noValidate>
                      <FormGroup>
                        <FormControl
                          required
                          id="fullname"
                          label="fullname"
                          name="fullname"
                          autoComplete="fullname"
                          autoFocus
                          placeholder="Fullname"
                        />
                      </FormGroup>
                      <FormGroup>
                        <DayPickerInput
                          placeholder="Born: YYYY-MM-DD"
                          format="YYYY-MM-DD"
                        />
                      </FormGroup>
                      <FormGroup>
                        <Col style={{ textAlign: "center" }}>
                          {["radio"].map(type => (
                            <div key={`custom-inline-${type}`} className="mb-3">
                              <Form.Check
                                custom
                                inline
                                label="Male"
                                type={type}
                                id={`custom-inline-${type}-2 gender`}
                                name="gender"
                                value="Male"
                              />
                              <Form.Check
                                custom
                                inline
                                label="Female"
                                type={type}
                                id={`custom-inline-${type}-1 gender`}
                                name="gender"
                                value="Female"
                              />
                            </div>
                          ))}
                        </Col>
                      </FormGroup>
                      <FormGroup>
                        <FormControl
                          required
                          id="email"
                          label="Email Address"
                          name="email"
                          autoComplete="email"
                          autoFocus
                          placeholder="Email"
                        />
                      </FormGroup>
                      <FormGroup>
                        <FormControl
                          required
                          name="password"
                          label="Password"
                          type="password"
                          id="password"
                          autoComplete="current-password"
                          placeholder="Password"
                        />
                      </FormGroup>
                      <FormGroup>
                        <Button
                          type="submit"
                          variant="success"
                          style={{
                            display: "block",
                            margin: "0 auto",
                            minWidth: "150px"
                          }}
                        >
                          Sign Up
                        </Button>
                      </FormGroup>
                      <FormGroup
                        style={{
                          backgroundColor: "white"
                        }}
                      >
                        <p
                          style={{
                            boxSizing: "border-box",
                            padding: "5px 5px 2.5px 5px",
                            textAlign: "center"
                          }}
                        >
                          Already have an account?&nbsp;
                          <Link to="/log-in">Log in</Link>
                        </p>
                      </FormGroup>
                    </Form>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default withRouter(Register2);
