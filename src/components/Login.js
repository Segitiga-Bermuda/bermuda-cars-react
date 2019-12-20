import React, { Component } from "react"
import axios from "axios"
import Profile from "../assets/images/teamwork.png"
import {
  Col,
  Row,
  Container,
  Image,
  Button,
  FormControl,
  Form,
  FormGroup
} from "react-bootstrap"
import {
  Link,
  withRouter
} from "react-router-dom"
import background from "../assets/images/background/bg1.jpg"
import Swal from "sweetalert2"

class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: "",
      password: "",
      role: "User"
    }

    this.handleChange = this.handleChange.bind(this)
    this.submitForm = this.submitForm.bind(this)
  }

  handleChange(e) {
    let val = e.target.value

    this.setState({
      [e.target.name]: val
    })
  }

  submitForm(e) {
    e.preventDefault()

    if (this.state.email === "" || this.state.password === "") {
      Swal.fire({
        title: "Field is empty",
        text: "Please fill all field",
        icon: "error"
      })

      return null
    }

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(this.state.email)) {
      Swal.fire({
        title: "Email Format Is Wrong",
        text: "Please fill email field again",
        icon: "error"
      })

      return null
    }

    let path = process.env.REACT_APP_API

    if (this.state.role === "Admin") {
      path += "/admins/log-in"

      axios
        .post(path, this.state)
        .then(result => {
          if (result.data.message === "Email or password is wrong!") {
            Swal.fire({
              text: result.data.message,
              icon: "error"
            })

            return null
          }

          Swal.fire({
            title: "You Will be Redirect to Dasboard Page",
            icon: "success"
          }).then(decision => {
            localStorage.setItem("token", JSON.stringify(result.data.token))

            this.props.history.push("/dashboard")
          })
        })
        .catch(error => {
          console.log(error)
        })
    } else if (this.state.role === "Executive") {
      path += "/executives/log-in"

      axios
        .post(path, this.state)
        .then(result => {
          if (result.data.message === "Email or password is wrong!") {
            Swal.fire({
              text: result.data.message,
              icon: "error"
            })

            return null
          }

          Swal.fire({
            title: "You Will be Redirect to Dashboard Page",
            icon: "success"
          }).then(decision => {
            localStorage.setItem("token", JSON.stringify(result.data.token))

            this.props.history.push("/")
          })
        })
        .catch(error => {
          console.log(error)
        })
    } else if (this.state.role === "Employee") {
      path += "/employees/log-in"
      axios
        .post(path, this.state)
        .then(result => {
          if (result.data.message === "Email or password is wrong!") {
            Swal.fire({
              text: result.data.message,
              icon: "error"
            })

            return null
          }

          Swal.fire({
            title: "You Will be Redirect to Dashboard Page",
            icon: "success"
          }).then(decision => {
            localStorage.setItem("token", JSON.stringify(result.data.token))

            this.props.history.push("/")
          })
        })
        .catch(error => {
          console.log(error)
        })
    } else if (this.state.role === "User") {
      path += "/users/log-in"

      axios
        .post(path, this.state)
        .then(result => {
          if (result.data.message === "Email or password is wrong!") {
            Swal.fire({
              text: result.data.message,
              icon: "error"
            })

            return null
          }

          Swal
            .fire({
              title: "You Will be Redirect to Dashboard Page",
              icon: "success"
            })
            .then(decision => {
              localStorage.setItem("token", JSON.stringify(result.data.token))

              this.props.history.push("/")
            })
        })
        .catch(error => {
          console.log(error)
        })
    }
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
          minHeight: window.innerHeight + "px",
          padding: "0"
        }}
      >
        <Row className="forms">
          <Col md={{
            span: 6,
            offset: 3
          }}>
            <Row style={{
              display: "flex",
              minHeight: window.innerHeight + "px",
              alignItems: "center"
            }}>
              <Col xs={{
                span: 12
              }}>
                <Row style={{
                  backgroundColor: "rgba(212, 218, 247, 0.5)",
                  borderRadius: "20px"
                }}>
                  <Col
                    xs={{
                      span: 12,
                      order: 1
                    }}
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
                    Login
                  </Col>
                  <Col
                    md={{
                      span: 6,
                      order: 2
                    }}
                    xs={{
                      span: 12,
                      order: 2
                    }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      boxSizing: "border-box",
                      padding: "20px"
                    }}
                  >
                    <Image
                      roundedCircle={true}
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
                    md={{
                      span: 6,
                      order: 3
                    }}
                    xs={{
                      span: 12,
                      order: 3
                    }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      boxSizing: "border-box",
                      padding: "20px",
                      justifyContent: "center"
                    }}
                  >
                    <Form noValidate>
                      <FormGroup>
                        <FormControl
                          as="select"
                          value={this.state.role}
                          name="role"
                          id="role"
                          onChange={e => this.handleChange(e)}
                        >
                          <option value="Admin">Admin</option>
                          <option value="Executive">Executive</option>
                          <option value="Employee">Employee</option>
                          <option value="User">User</option>
                        </FormControl>
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
                          value={this.state.email}
                          onChange={e => this.handleChange(e)}
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
                          value={this.state.password}
                          onChange={e => this.handleChange(e)}
                        />
                      </FormGroup>
                      <FormGroup>
                        <Button
                          type="submit"
                          variant="success"
                          onClick={this.submitForm}
                          style={{
                            display: "block",
                            margin: "0 auto",
                            minWidth: "150px"
                          }}
                        >
                          Sign In
                        </Button>
                      </FormGroup>
                      <FormGroup style={{
                        backgroundColor: "white"
                      }}>
                        <p style={{
                          boxSizing: "border-box",
                          padding: "5px 5px 2.5px 5px",
                          textAlign: "center"
                        }}>
                          Don't have an account?&nbsp;
                          <Link to="/user/register">
                            Create one.
                          </Link>
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
    )
  }
}

export default withRouter(Login)
