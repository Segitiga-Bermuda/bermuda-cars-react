import React, { Fragment, Component } from "react";
import { default as MemberNavbar } from "./member/MemberNavbar";
import { default as GuestNavbar } from "./guest/Navbar";
import { withRouter } from "react-router-dom";

class Navigation extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let user = localStorage.getItem("token");

    return <Fragment>{user ? <MemberNavbar /> : <GuestNavbar />}</Fragment>;
  }
}

export default withRouter(Navigation);
