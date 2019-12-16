import React, { Component } from 'react'
import {
  Accordion,
  Card,
  Col,
  Row
} from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class Dashboard extends Component {
  render() {
    return (
      <Row>
        <Col md={{
          span: 4
        }}>
          <Accordion defaultActiveKey="0">
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
                    to="/dashboard"
                    style={{
                      textDecoration: 'none'

                    }}
                  >
                    Sales Reports
                  </Link>
                  <Link
                    className="nav-link"
                    to="/dashboard"
                    style={{
                      textDecoration: 'none'
                    }}
                  >
                    Revenue Reports
                  </Link>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle
                as={Card.Header}
                eventKey="1"
              >
                <Link
                  className="nav-link"
                  to="/dashboard"
                  style={{
                    textDecoration: 'none'
                  }}
                >
                  Attendance Reports
                </Link>
              </Accordion.Toggle>
            </Card>
            <Card>
              <Accordion.Toggle
                as={Card.Header}
                eventKey="2"
              >
                <Link
                  className="nav-link"
                  to="/dashboard"
                  style={{
                    textDecoration: 'none'
                  }}
                >
                  Edit Profile
                </Link>
              </Accordion.Toggle>
            </Card>
          </Accordion>
        </Col>
        <Col md={{
          span: 8
        }}>
        </Col>
      </Row>
    )
  }
}
