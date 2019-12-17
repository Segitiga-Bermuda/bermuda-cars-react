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
