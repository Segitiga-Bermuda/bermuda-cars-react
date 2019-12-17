import React, { Component } from 'react'
import {
    Card,
    Accordion
} from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class Executive extends Component {
    render() {
        return (
            <>
                <Card>
                    <Accordion.Toggle
                        as={Card.Header}
                        eventKey="0"
                    >
                        Economy Reports
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <Link
                                className="nav-link"
                                to="/watch-revenue-reports"
                                style={{
                                    textDecoration: 'none'
                                }}
                            >
                                Watch Revenue Report
                            </Link>
                            <Link
                                className="nav-link"
                                to="/watch-sales-reports"
                                style={{
                                    textDecoration: 'none'
                                }}
                            >
                                Watch Sales Report
                            </Link>
                            <Link
                                className="nav-link"
                                to="/add-revenue-report"
                                style={{
                                    textDecoration: 'none'
                                }}
                            >
                                Add Revenue Report
                            </Link>
                            <Link
                                className="nav-link"
                                to="/add-sales-report"
                                style={{
                                    textDecoration: 'none'
                                }}
                            >
                                Add Sales Report
                            </Link>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle
                        as={Card.Header}
                        eventKey="1"
                    >
                        Attendance Reports
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body>
                            <Link
                                className="nav-link"
                                to="/check-in"
                                style={{
                                    textDecoration: 'none'
                                }}
                            >
                                Check In
                            </Link>
                            <Link
                                className="nav-link"
                                to="/watch-attendance-reports"
                                style={{
                                    textDecoration: 'none'
                                }}
                            >
                                Watch Attendance Reports
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
                                to="/tasks-manager"
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
                                to="/view-profile"
                                style={{
                                    textDecoration: 'none'
                                }}
                            >
                                View Profile
                            </Link>
                            <Link
                                className="nav-link"
                                to="/edit-profile"
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
