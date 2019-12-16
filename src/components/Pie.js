import React, { Component } from "react";
import { Pie } from "react-chartjs-2";
import Carousel from "react-bootstrap/Carousel";
import "../App.css";

class chartPie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      labels: [`Car`, `Motorcycle`, `Truck`],
      datasets: [
        {
          data: [10, 40, 50],
          backgroundColor: ["red", "blue", "green"]
        }
      ]
    };
  }

  render() {
    return (
      <div style={{ marginTop: "200px" }}>
        <Carousel controls={true} indicators={false}>
          <Carousel.Item>
            <p>July</p>
          </Carousel.Item>
          <Carousel.Item>
            <p>Agustus</p>
          </Carousel.Item>
          <Carousel.Item>
            <p>September</p>
          </Carousel.Item>
          <Carousel.Item>
            <p>Oktober</p>
          </Carousel.Item>
          <Carousel.Item>
            <p>November</p>
          </Carousel.Item>
          <Carousel.Item>
            <p>Desember</p>
          </Carousel.Item>
        </Carousel>
        <br />
        <Pie
          data={{
            labels: this.state.labels,
            datasets: this.state.datasets
          }}
          height="80%"
        />
        <br />
      </div>
    );
  }
}
export default chartPie;
