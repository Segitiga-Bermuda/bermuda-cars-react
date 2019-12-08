import React, { Fragment } from "react";
import { default as MemberNavbar } from "./member/Navbar";
import { default as GuestNavbar } from "./guest/Navbar";
import { withRouter } from "react-router-dom";

const Navbar = () => {
  return (
    <Fragment>
      {JSON.parse(localStorage.getItem("isLogin")) !== true ? (
        <GuestNavbar />
      ) : (
        <MemberNavbar />
      )}
    </Fragment>
  );
};

export default withRouter(Navbar);
