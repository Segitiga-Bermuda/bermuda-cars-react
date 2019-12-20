import React, { Component } from "react";
import { Accordion, Col, Row, Image } from "react-bootstrap";
import Admin from "./Admin";
import Executive from "./Executive";
import Employee from "./Employee";
import User from "./User";
import ChartPie from "./Pie";
import ChartLine from "./Line";
import Absen from "./Absen";
import Profile from "./Profile";
import Boy from "../assets/images/boy.png";
import CheckIn from './CheckIn'
import { verify } from "../helpers";
import { withRouter } from "react-router-dom";
import ViewProfile from "./ViewProfile";
import Additem from "./Additem";
import AttendanceReport from './AttendanceReport'
import AddSales from './AddSales'

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: verify() || {},
      func: ""
    };

    this.switchDashboard = this.switchDashboard.bind(this);
    this.switchFunctions = this.switchFunctions.bind(this);
  }

  switchFunctions() {
    let func = this.props.match.params.func;

    if (func === "watch-revenue-reports") {
      return <ChartLine />;
    } else if (func === "watch-sales-reports") {
      return <ChartPie />;
    } else if (func === "add-sales-report") {
      return <AddSales />
    } else if (func === "check-in") {
      return <CheckIn/>
    } else if (func === "watch-attendance-reports") {
      return <AttendanceReport />;
    } else if (func === "tasks-manager") {
    } else if (func === "view-profile") {
      return <ViewProfile />;
    } else if (func === "edit-profile") {
      return <Profile />;
    } else if (func === "add-sales-report") {
    } else if (func === "add-sales-report") {
    } else if (func === "add-item") {
      return <Additem />;
    }
  }

  switchDashboard() {
    if (this.state.user.role === "Admin") {
      return <Admin />;
    } else if (this.state.user.role === "Executive") {
      return <Executive />;
    } else if (this.state.user.role === "Employee") {
      return <Employee />;
    } else if (this.state.user.role === "User") {
      return <User />;
    }
  }

  render() {
    return (
      <Row
        className="dashboard"
        style={{
          marginTop: "76px"
        }}
      >
        <Col
          md={{
            span: 4
          }}
          style={{
            backgroundColor: "#606060",
            height: window.innerHeight - 76 + "px",
            overflow: "auto",
            padding: "0"
          }}
        >
          <h1
            className="text-light"
            style={{
              fontFamily: "Aladin",
              marginTop: "15px"
            }}
          >
            Welcome Back
            <br />
            {this.state.user.fullName}
            &nbsp;-&nbsp;
            {this.state.user.departement}
          </h1>
          <Image
            roundedCircle={true}
            src={this.state.user.avatarPath}
            style={{
              backgroundColor: "#808080",
              display: "block",
              height: "auto",
              margin: "25px auto",
              padding: "15px",
              width: "25%"
            }}
          />
          <h2 className="text-info">{this.state.user.employeeId}</h2>
          <h3 className="text-danger">{this.state.user.role}</h3>
          <Accordion>{this.switchDashboard()}</Accordion>
        </Col>
        <Col
          md={{
            span: 8
          }}
          style={{
            height: window.innerHeight - 76 + "px",
            overflow: "auto",
            padding: "0"
          }}
        >
          {this.switchFunctions()}
        </Col>
      </Row>
    );
  }
}

export default withRouter(Dashboard);
