import React from 'react'
import {
  Nav,
  Navbar,
  Container
} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Navlogo from '../../assets/images/logonav.png'

const Team = () => {
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
              <Link
                to="/"
                style={{
                  color: '#ffffff',
                  textDecoration: 'none'
                }}
                className="nav-link"
              >
                Home
              </Link>
              <Link
                to="/about"
                style={{
                  color: '#ffffff',
                  textDecoration: 'none'
                }}
                className="nav-link"
              >
                About Us
              </Link>
              <Link
                to="/features"
                style={{
                  color: '#ffffff',
                  textDecoration: 'none'
                }}
                className="nav-link"
              >
                Features
              </Link>
              <Link
                to="/contacts"
                style={{
                  color: '#ffffff',
                  textDecoration: 'none'
                }}
                className="nav-link"
              >
                Contacts
              </Link>
              <Link
                to="/log-in"
                style={{
                  color: '#ffffff',
                  textDecoration: 'none'
                }}
                className="nav-link"
              >
                Log In
                </Link>
              <Link
                to="/user/register"
                style={{
                  color: '#ffffff',
                  textDecoration: 'none'
                }}
                className="nav-link"
              >
                Register
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Team
