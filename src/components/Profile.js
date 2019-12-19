import React, { Component } from "react";
import ReactFilestack from "filestack-react";
import Grid from "@material-ui/core/Grid";
import {
  Form,
  FormGroup,
  FormControl,
  Button,
  Row,
  Col,
  Container,
  Image,
  ListGroup,
  ListGroupItem
} from "react-bootstrap";
import { AXIOS, verify } from "../helpers";
import Swal from "sweetalert2";
import { withRouter } from "react-router-dom";
import bg from "../assets/images/classic2.jpg";

const API_FILESTACK = process.env.REACT_APP_API_FILESTACK;
const PickerOptions = {
  accept: "image/*",
  fromSources: ["local_file_system"],
  maxSize: 1024 * 1024,
  maxFiles: 1
};

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      role: verify().role || "",
      avatarPath: "",
      avatarPath2: verify().avatarPath || "",
      email: "",
      password: ""
    };
  }
  handleChange(e) {
    let val = e.target.value;

    this.setState({
      [e.target.name]: val
    });
  }

  handleSubmit1(e) {
    e.preventDefault();

    if (this.state.email === "") {
      Swal.fire({
        title: "Field is empty",
        text: "Please fill all field",
        icon: "error"
      });

      return null;
    }

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(this.state.email)) {
      Swal.fire({
        title: "Email Format Is Wrong",
        text: "Please fill email field again",
        icon: "error"
      });

      return null;
    }

    let path = process.env.REACT_APP_API;

    if (this.state.role === "Admin") {
      path += "/admins/update/email";

      AXIOS()
        .put(path, this.state)
        .then(result => {
          if (result.data.message === "Email have been used!") {
            Swal.fire({
              text: result.data.message,
              icon: "error"
            });

            return null;
          }

          if (result.data.message === "Update email.") {
            Swal.fire({
              title: "Email Update is Success",
              icon: "success"
            });
          }

          localStorage.removeItem("token");
          this.props.history.push("/log-in");
        })
        .catch(error => {
          console.log(error);
        });
    } else if (this.state.role === "Executive") {
      path += "/executives/update/email";

      AXIOS()
        .put(path, this.state)
        .then(result => {
          if (result.data.message === "Email have been used!") {
            Swal.fire({
              text: result.data.message,
              icon: "error"
            });

            return null;
          }

          if (result.data.message === "Update email.") {
            Swal.fire({
              title: "Email Update is Success",
              icon: "success"
            });

            localStorage.removeItem("token");
            this.props.history.push("/log-in");
          }
        })
        .catch(error => {
          console.log(error);
        });
    } else if (this.state.role === "Employer") {
      path += "/employers/update/email";

      AXIOS()
        .put(path, this.state)
        .then(result => {
          if (result.data.message === "Email have been used!") {
            Swal.fire({
              text: result.data.message,
              icon: "error"
            });

            return null;
          }
          if (result.data.message === "Update email.") {
            Swal.fire({
              title: "Email Update is Success",
              icon: "success"
            });

            localStorage.removeItem("token");
            this.props.history.push("/log-in");
          }
        })
        .catch(error => {
          console.log(error);
        });
    } else if (this.state.role === "User") {
      path += "/users/update/email";

      AXIOS()
        .put(path, this.state)
        .then(result => {
          if (result.data.message === "Email have been used!") {
            Swal.fire({
              text: result.data.message,
              icon: "error"
            });

            return null;
          }
          if (result.data.message === "Update email.") {
            Swal.fire({
              title: "Email Update is Success",
              icon: "success"
            });

            localStorage.removeItem("token");
            this.props.history.push("/log-in");
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  }

  handleSubmit2(e) {
    e.preventDefault();

    if (this.state.password === "") {
      Swal.fire({
        title: "Field is empty",
        text: "Please fill all field",
        icon: "error"
      });

      return null;
    }

    let path = process.env.REACT_APP_API;

    if (this.state.role === "Admin") {
      path += "/admins/update/password";

      console.log(path);

      AXIOS()
        .put(path, this.state)
        .then(result => {
          if (result.data.message === "Update password.") {
            Swal.fire({
              title: "Password Update is Success",
              icon: "success"
            });

            localStorage.removeItem("token");
            this.props.history.push("/log-in");
          }
        })
        .catch(error => {
          console.log(error);
        });
    } else if (this.state.role === "Executive") {
      path += "/executives/update/password";

      AXIOS()
        .put(path, this.state)
        .then(result => {
          if (result.data.message === "Update password.") {
            Swal.fire({
              title: "Password Update is Success",
              icon: "success"
            });

            localStorage.removeItem("token");
            this.props.history.push("/log-in");
          }
        })
        .catch(error => {
          console.log(error);
        });
    } else if (this.state.role === "Employer") {
      path += "/employers/update/password";

      AXIOS()
        .put(path, this.state)
        .then(result => {
          if (result.data.message === "Update password.") {
            Swal.fire({
              title: "Password Update is Success",
              icon: "success"
            });

            localStorage.removeItem("token");
            this.props.history.push("/log-in");
          }
        })
        .catch(error => {
          console.log(error);
        });
    } else if (this.state.role === "User") {
      path += "/users/update/pasword";

      AXIOS()
        .put(path, this.state)
        .then(result => {
          if (result.data.message === "Update password.") {
            Swal.fire({
              title: "Password Update is Success",
              icon: "success"
            });

            localStorage.removeItem("token");
            this.props.history.push("/log-in");
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  }

  handleSubmit3(e) {
    e.preventDefault();

    if (this.state.avatarPath === "") {
      Swal.fire({
        title: "Please Pick a File for New Avatar",
        icon: "error"
      });

      return null;
    }

    let path = process.env.REACT_APP_API;

    if (this.state.role === "Admin") {
      path += "/admins/avatar";

      console.log(path);

      AXIOS()
        .put(path, this.state)
        .then(result => {
          if (result.data.message === "Update Avatar") {
            Swal.fire({
              title: "Avatar Update is Success",
              icon: "success"
            }).then(decision => {
              this.props.history.push("/log-in");
            });
          }
        })
        .catch(error => {
          console.log(error);
        });
    } else if (this.state.role === "Executive") {
      path += "/executives/avatar";

      AXIOS()
        .put(path, this.state)
        .then(result => {
          if (result.data.message === "Update Avatar") {
            Swal.fire({
              title: "Avatar Update is Success",
              icon: "success"
            }).then(decision => {
              this.props.history.push("/log-in");
            });
          }
        })
        .catch(error => {
          console.log(error);
        });
    } else if (this.state.role === "Employer") {
      path += "/employers/avatar";

      AXIOS()
        .put(path, this.state)
        .then(result => {
          if (result.data.message === "Update Avatar") {
            Swal.fire({
              title: "Avatar Update is Success",
              icon: "success"
            }).then(decision => {
              this.props.history.push("/log-in");
            });
          }
        })
        .catch(error => {
          console.log(error);
        });
    } else if (this.state.role === "User") {
      path += "/users/avatar";

      AXIOS()
        .put(path, this.state)
        .then(result => {
          if (result.data.message === "Update Avatar") {
            Swal.fire({
              title: "Avatar Update is Success",
              icon: "success"
            }).then(decision => {
              this.props.history.push("/log-in");
            });
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  }

  render() {
    return (
      <>
        <div
          style={{
            backgroundImage: `url(${bg})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: "100%",
            padding: "20px 0px"
          }}
        >
          <div
            style={{
              width: "70%",
              border: "5px solid gray",
              margin: "0 auto",
              backgroundColor: "#808080"
            }}
          >
            <h4 style={{ color: "white" }}>EDIT PROFILE</h4>
          </div>
          <Container
            style={{
              width: "70%",
              border: "5px solid gray",
              margin: "0 auto"
            }}
          >
            <br />
            <Image
              roundedCircle={true}
              src={this.state.avatarPath2}
              style={{
                backgroundColor: "#808080",
                display: "block",
                height: "auto",
                margin: "25px auto",
                padding: "15px",
                width: "25%"
              }}
            />
            <Row
              style={{
                width: "90%",
                margin: "0 auto",
                padding: "10px 0"
              }}
            >
              <Col
                md={{
                  span: 8,
                  order: 1
                }}
                xs={{
                  span: 10,
                  order: 1
                }}
              >
                <form>
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <ReactFilestack
                        apikey={process.env.REACT_APP_API_FILESTACK}
                        onSuccess={res => {
                          this.setState({
                            avatarPath: res.filesUploaded[0].url
                          });

                          console.log(this.state.avatarPath);
                        }}
                      />
                    </Grid>
                  </Grid>
                </form>
              </Col>
              <Col
                md={{
                  span: 2,
                  order: 2
                }}
                xs={{
                  span: 12,
                  order: 2
                }}
              >
                <Button
                  type="submit"
                  variant="success"
                  onClick={e => this.handleSubmit3(e)}
                >
                  Update Avatar
                </Button>
              </Col>
            </Row>
            <Form>
              <Row
                style={{
                  width: "90%",
                  margin: "0 auto",
                  padding: "10px 0"
                }}
              >
                <Col
                  md={{
                    span: 8,
                    order: 1
                  }}
                  xs={{
                    span: 10,
                    order: 1
                  }}
                >
                  <FormGroup>
                    <FormControl
                      required
                      id="email"
                      label="Email Address"
                      name="email"
                      autoFocus
                      fluid={true}
                      block
                      placeholder="Email Address"
                      onChange={e => this.handleChange(e)}
                      value={this.state.email}
                    />
                  </FormGroup>
                </Col>
                <Col
                  md={{
                    span: 2,
                    order: 2
                  }}
                  xs={{
                    span: 12,
                    order: 2
                  }}
                >
                  <Button
                    type="submit"
                    variant="success"
                    onClick={e => this.handleSubmit1(e)}
                  >
                    Update Email
                  </Button>
                </Col>
              </Row>
            </Form>
            <Form>
              <Row
                style={{
                  width: "90%",
                  margin: "0 auto",
                  padding: "10px 0"
                }}
              >
                <Col
                  md={{
                    span: 8,
                    order: 1
                  }}
                  xs={{
                    span: 10,
                    order: 1
                  }}
                >
                  <FormGroup>
                    <FormControl
                      required
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      fluid={true}
                      autoComplete="new-password"
                      placeholder="Password"
                      onChange={e => this.handleChange(e)}
                      value={this.state.password}
                    />
                  </FormGroup>
                </Col>

                <Col
                  md={{
                    span: 2,
                    order: 2
                  }}
                  xs={{
                    span: 12,
                    order: 2
                  }}
                >
                  <Button
                    type="submit"
                    variant="success"
                    onClick={e => this.handleSubmit2(e)}
                  >
                    Update Password
                  </Button>
                </Col>
              </Row>
            </Form>
          </Container>
        </div>
      </>
    );
  }
}

export default withRouter(Profile);
