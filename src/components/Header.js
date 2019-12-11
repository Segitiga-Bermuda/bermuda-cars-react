import React, { Component } from "react";
import { Jumbotron } from "react-bootstrap";
import Car from "../assets/images/car.jpg";
import Logo from "../assets/images/logo.png";
import "../App.css";

export default class Header extends Component {
  render() {
    return (
      <Jumbotron
        style={{
          backgroundImage: `url(${Car})`,
          minHeight: window.innerHeight - 40 + "px",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat"
        }}
      >
        <div className="bgtext">
          <img src={Logo} alt="logo" className="bgimg" />
        </div>
      </Jumbotron>
    );
  }
}
