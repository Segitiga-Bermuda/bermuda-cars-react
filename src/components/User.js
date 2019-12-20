import React, { Component } from 'react'
import {
    Card,
    Accordion
} from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class User extends Component {
    render() {
        return (
            <>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="0">
                Economy Reports
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <Link
                    className="nav-link"
                    to="/dashboard/watch-revenue-reports"
                    style={{
                      textDecoration: "none"
                    }}
                  >
                    Watch Revenue Report
                  </Link>
                  <Link
                    className="nav-link"
                    to="/dashboard/watch-sales-reports"
                    style={{
                      textDecoration: "none"
                    }}
                  >
                    Watch Sales Report
                  </Link>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
                <Card>
                    <Accordion.Toggle
                        as={Card.Header}
                        eventKey="2"
                    >
                        Tasks Manager
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="2">
                        <Card.Body>
                            <Link
                                className="nav-link"
                                to="/dashboard/tasks-manager"
                                style={{
                                    textDecoration: 'none'
                                }}
                            >
                                Tasks Manager
                            </Link>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle
                        as={Card.Header}
                        eventKey="3"
                    >
                        Profile
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="3">
                        <Card.Body>
                            <Link
                                className="nav-link"
                                to="/dashboard/view-profile"
                                style={{
                                    textDecoration: 'none'
                                }}
                            >
                                View Profile
                            </Link>
                            <Link
                                className="nav-link"
                                to="/dashboard/edit-profile"
                                style={{
                                    textDecoration: 'none'
                                }}
                            >
                                Edit Profile
                            </Link>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </>
        )
    }
}
