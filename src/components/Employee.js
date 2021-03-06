import React, { Component } from "react";
import { Card, Accordion } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class Employee extends Component {
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
                to="/dashboard/add-sales-report"
                style={{
                  textDecoration: "none"
                }}
              >
                Add Sales Report
              </Link>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="1">
            Attendance Reports
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <Link
                className="nav-link"
                to="/dashboard/check-in"
                style={{
                  textDecoration: "none"
                }}
              >
                Check In
              </Link>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="2">
            Tasks Manager
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="2">
            <Card.Body>
              <Link
                className="nav-link"
                to="/dashboard/tasks-manager"
                style={{
                  textDecoration: "none"
                }}
              >
                Tasks Manager
              </Link>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="3">
            Inventories
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="3">
            <Card.Body>
              <Link
                className="nav-link"
                to="/dashboard/add-item"
                style={{
                  textDecoration: "none"
                }}
              >
                Inventories Manager
              </Link>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="4">
            Profile
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="4">
            <Card.Body>
              <Link
                className="nav-link"
                to="/dashboard/view-profile"
                style={{
                  textDecoration: "none"
                }}
              >
                View Profile
              </Link>
              <Link
                className="nav-link"
                to="/dashboard/edit-profile"
                style={{
                  textDecoration: "none"
                }}
              >
                Edit Profile
              </Link>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </>
    );
  }
}
