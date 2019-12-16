import React, { Component } from 'react'
import {
    Navbar,
    Row,
    Col,
    Image,
    Nav
} from 'react-bootstrap'
import Facebook from '../assets/images/facebook.png'
import Youtube from '../assets/images/youtube.png'
import Whatsapp from '../assets/images/whatsapp.png'
import Instagram from '../assets/images/instagram.png'

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <Row>
                    <Col
                        md={{
                            span: 4,
                            order: 1
                        }}
                        xs={{
                            span: 12,
                            order: 1
                        }}
                    >
                        <h3>
                            Bermuda Motors
                        </h3>
                        <hr />
                        <Navbar
                            variant="dark"
                            className="bg-dark"
                        >
                            <Nav>
                                <Nav.Link href="" class="nav-link">
                                    <Image
                                        className="brand"
                                        src={Whatsapp}
                                        alt=""
                                    />
                                </Nav.Link>
                                <Nav.Link href="" class="nav-link">
                                    <Image
                                        className="brand"
                                        src={Youtube}
                                        alt=""
                                    />
                                </Nav.Link>
                                <Nav.Link href="" class="nav-link">
                                    <Image
                                        className="brand"
                                        src={Facebook}
                                        alt=""
                                    />
                                </Nav.Link>
                                <Nav.Link href="" class="nav-link">
                                    <Image
                                        className="brand"
                                        src={Instagram}
                                        alt=""
                                    />
                                </Nav.Link>
                            </Nav>
                        </Navbar>
                        <h6 class="copyright text-center">
                            &copy; 2019 All Rights Reserved by&nbsp;
                            <a href="https://github.com/Segitiga-Bermuda">
                                Bermuda Motors
                            </a>
                        </h6>
                    </Col>
                    <Col
                        xs={{
                            span: 6,
                            order: 2
                        }}
                        md={{
                            span: 2,
                            order: 2
                        }}
                    >
                        <h5>
                            About US
                        </h5>
                        <Navbar
                            variant="dark"
                            className="bg-dark"
                            expand={false}
                        >
                            <Nav>
                                <Nav.Link href="">
                                    Our Team
                                </Nav.Link>
                                <Nav.Link href="">
                                    Jobs
                                </Nav.Link>
                                <Nav.Link href="">
                                    Newsletter
                                </Nav.Link>
                            </Nav>
                        </Navbar>
                    </Col>
                    <Col
                        xs={{
                            span: 6,
                            order: 2
                        }}
                        md={{
                            span: 2,
                            order: 2
                        }}
                    >
                        <h5>
                            Help Center
                        </h5>
                        <Navbar
                            variant="dark"
                            className="bg-dark"
                            expand={false}
                        >
                            <Nav>
                                <Nav.Link href="">
                                    Documentations
                                </Nav.Link>
                                <Nav.Link href="">
                                    Tutorials
                                </Nav.Link>
                                <Nav.Link href="">
                                    Term of Use
                                </Nav.Link>
                                <Nav.Link href="">
                                    Privacy Policy
                                </Nav.Link>
                            </Nav>
                        </Navbar>
                    </Col>
                    <Col
                        xs={{
                            span: 6,
                            order: 2
                        }}
                        md={{
                            span: 2,
                            order: 2
                        }}
                    >
                        <h5>
                            Tools
                        </h5>
                        <Navbar
                            variant="dark"
                            className="bg-dark"
                            expand={false}
                        >
                            <Nav>
                                <Nav.Link href="">
                                    Create Account
                                </Nav.Link>
                                <Nav.Link href="">
                                    Log In
                                </Nav.Link>
                                <Nav.Link href="">
                                    Services
                                </Nav.Link>
                                <Nav.Link href="">
                                    Sitemap
                                </Nav.Link>
                            </Nav>
                        </Navbar>
                    </Col>
                    <Col
                        xs={{
                            span: 6,
                            order: 2
                        }}
                        md={{
                            span: 2,
                            order: 2
                        }}
                    >
                        <h5>
                            Get In Touch
                        </h5>
                        <Navbar
                            variant="dark"
                            className="bg-dark"
                            expand={false}
                        >
                            <Nav>
                                <Nav.Link href="">
                                    Contact Us
                                </Nav.Link>
                                <Nav.Link href="">
                                    Request a Demo
                                </Nav.Link>
                                <Nav.Link href="">
                                    021 2093 2030
                                </Nav.Link>
                                <Nav.Link href="">
                                    bermuda.motors@gmail.com
                                </Nav.Link>
                            </Nav>
                        </Navbar>
                    </Col>
                </Row>
            </footer>
        )
    }
}
