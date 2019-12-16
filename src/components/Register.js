import React, { Component } from "react"
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
import { withRouter } from "react-router-dom"
import background from "../assets/images/background/bg2.jpg"
import DayPickerInput from "react-day-picker/DayPickerInput"
import Swal from 'sweetalert2'
import { AXIOS } from '../helpers'
import "react-day-picker/lib/style.css"

class Register extends Component {
  constructor(props) {
    super(props)

    this.state = {
      fullName: '',
      born: '',
      gender: '',
      employerId: '',
      departement: '',
      email: '',
      password: '',
      role: 'Employer'
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleDayChange = this.handleDayChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    let val = e.target.value

    this.setState({
      [e.target.name]: val
    })
  }

  handleDayChange(selectedDay, modifiers, DayPickerInput) {
    let born = new Date(selectedDay),
      born2 = new Date(born.getUTCFullYear() +
        '-' + (born.getUTCMonth() + 1) +
        '-' + born.getUTCDate())

    this.setState({
      born: born2
    })
  }

  handleSubmit(e) {
    e.preventDefault()

    let born = new Date(this.state.born)

    if (born > (Date.now() - (18 * 365 * 24 * 60 * 60 * 1000))) {
      Swal.fire({
        title: 'Wrong Date!',
        text: 'Your age must be 18 or above to create a account!',
        icon: 'error'
      })

      return null
    }

    if (
      this.state.fullName === '' ||
      this.state.born === '' ||
      this.state.gender === '' ||
      this.state.employerId === '' ||
      this.state.departement === '' ||
      this.state.email === '' ||
      this.state.password === '' ||
      this.state.role === ''
    ) {
      Swal.fire({
        title: 'Field is empty',
        text: 'Please fill all field',
        icon: 'error'
      })

      return null
    }

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(this.state.email)) {
      Swal.fire({
        title: 'Email Format Is Wrong',
        text: 'Please fill email field again',
        icon: 'error'
      })

      return null
    }

    let path = process.env.REACT_APP_API + '/admins/add-new-account'

    AXIOS()
      .post(path, this.state)
      .then(result => {
        console.log(result)
        if (result.data.message === 'Email have been used!') {
          Swal.fire({
            title: 'Email have been used!',
            icon: 'error'
          })
        } else if (result.data.message === 'Just admin allowed to register new account.') {
          Swal.fire({
            title: result.data.message,
            icon: 'warning'
          })
        } else if (result.data.message === 'You are not allowed to enter this endpoints.') {
          Swal.fire({
            title: result.data.message,
            icon: 'warning'
          })
        } else {
          Swal.fire({
            title: 'Success Create Account',
            icon: 'success'
          })
        }
      })
      .catch(error => {
        console.log(error)
      })
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
                    Create Account
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
                      boxSizing: "border-box",
                      padding: "20px",
                      maxHeight: "350px",
                      overflow: "auto"
                    }}
                  >
                    <Form noValidate>
                      <FormGroup>
                        <FormControl
                          required
                          id="fullName"
                          label="Full Name"
                          name="fullName"
                          autoComplete="fullName"
                          autoFocus
                          placeholder="Full Name"
                          onChange={e => this.handleChange(e)}
                          value={this.state.fullName}
                        />
                      </FormGroup>
                      <FormGroup>
                        <DayPickerInput
                          placeholder="Born: YYYY-MM-DD"
                          format="YYYY-MM-DD"
                          onDayChange={this.handleDayChange}
                        />
                      </FormGroup>
                      <FormGroup>
                        <Col style={{ textAlign: "center" }}>
                          <Form.Check
                            custom
                            inline
                            label="Male"
                            type="radio"
                            id={`custom-inline-radio-1 gender`}
                            name="gender"
                            value="Male"
                            onChange={e => this.handleChange(e)}
                          />
                          <Form.Check
                            custom
                            inline
                            label="Female"
                            type="radio"
                            id={`custom-inline-radio-2 gender`}
                            name="gender"
                            value="Female"
                            onChange={e => this.handleChange(e)}
                          />
                        </Col>
                      </FormGroup>
                      <FormGroup>
                        <FormControl
                          required
                          id="employerId"
                          label="Employer ID"
                          name="employerId"
                          autoComplete="employerId"
                          autoFocus
                          placeholder="Employer ID"
                          onChange={e => this.handleChange(e)}
                          value={this.state.employerId}
                        />
                      </FormGroup>
                      <FormGroup>
                        <FormControl
                          required
                          id="departement"
                          label="Departement"
                          name="departement"
                          autoComplete="departement"
                          autoFocus
                          placeholder="Departement"
                          onChange={e => this.handleChange(e)}
                          value={this.state.departement}
                        />
                      </FormGroup>
                      <FormGroup>
                        <FormControl
                          required
                          id="email"
                          label="Email Address"
                          name="email"
                          autoComplete="email"
                          autoFocus
                          placeholder="Email Address"
                          onChange={e => this.handleChange(e)}
                          value={this.state.email}
                        />
                      </FormGroup>
                      <FormGroup>
                        <FormControl
                          required
                          name="password"
                          label="Password"
                          type="password"
                          id="password"
                          autoComplete="password"
                          placeholder="Password"
                          onChange={e => this.handleChange(e)}
                          value={this.state.password}
                        />
                      </FormGroup>
                      <FormGroup>
                        <FormControl
                          as="select"
                          name="role"
                          id="role"
                          value={this.state.role}
                          onChange={this.handleChange}
                        >
                          <option value="Admin">
                            Admin
                          </option>
                          <option value="Executive">
                            Executive
                          </option>
                          <option value="Employer">
                            Employer
                          </option>
                        </FormControl>
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
                          onClick={e => this.handleSubmit(e)}
                        >
                          Sign Up
                        </Button>
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

export default withRouter(Register)
