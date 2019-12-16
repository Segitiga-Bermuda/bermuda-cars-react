import React, { Component } from 'react'
import {
  Nav,
  Navbar,
  Container
} from 'react-bootstrap'
import Navlogo from '../../assets/images/logonav.png'
import {
  Link as Link2,
  withRouter
} from 'react-router-dom'
import {
  verify
} from '../../helpers'

class MemberNavbar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      user: verify() || {}
    }

    this.logOut = this.logOut.bind(this)
  }

  logOut() {
    localStorage.removeItem('token')

    this.props.history.push('/log-in')
  }

  render() {
    if (this.state.user.role === 'Admin') {
      return (
        <div>
          <Navbar
            collapseOnSelect
            expand="lg"
            variant="dark"
            className="fixed-top"
          >
            <Container>
              <Navbar.Brand>
                <img
                  src={Navlogo}
                  alt="navlogo"
                  width="auto"
                  height="60px"
                />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto navnama">
                  <Link2
                    to="/dashboard"
                    style={{
                      color: '#ffffff',
                      textDecoration: 'none'
                    }}
                    className="nav-link"
                  >
                    Dashboard
                  </Link2>
                  <Link2
                    to="/company/register"
                    style={{
                      color: '#ffffff',
                      textDecoration: 'none'
                    }}
                    className="nav-link"
                  >
                    Company Register
                  </Link2>
                  <Nav.Link
                    href="#"
                    style={{
                      color: '#ffffff',
                      textDecoration: 'none'
                    }}
                    onClick={this.logOut}
                  >
                    Log Out
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      )
    } else {
      return (
        <div>
          <Navbar
            collapseOnSelect
            expand="lg"
            variant="dark"
            className="fixed-top"
          >
            <Container>
              <Navbar.Brand>
                <img
                  src={Navlogo}
                  alt="navlogo"
                  width="auto"
                  height="60px"
                />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto navnama">
                  <Link2
                    to="/dashboard"
                    style={{
                      color: '#ffffff',
                      textDecoration: 'none'
                    }}
                    className="nav-link"
                  >
                    Dashboard
                  </Link2>
                  <Nav.Link
                    href="#"
                    style={{
                      color: '#ffffff',
                      textDecoration: 'none'
                    }}
                    onClick={this.logOut}
                  >
                    Log Out
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      )
    }
  }
}

export default withRouter(MemberNavbar)
