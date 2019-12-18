import React, { Component } from "react";
import { Pie } from "react-chartjs-2";
import Carousel from "react-bootstrap/Carousel";
import "../App.css";
import { AXIOS } from "../helpers";

let API = process.env.REACT_APP_API;
class chartPie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: [],
      color: [],
      sold: [],
      unsold: []
    };
  }

  componentDidMount() {
    let year = new Date().getFullYear();
    let month = new Date().getMonth();

    AXIOS()
      .get(`${API}/sales/sale/${year}/December`)
      .then(res => {
        let item = [];
        let color = [];
        let sold = [];
        let unsold = [];

        res.data.data.forEach(element => {
          item.push(element.item);
          color.push(element.color);
          sold.push(element.sold);
          unsold.push(element.unsold);
        });
        this.setState({
          item: item,
          color: color,
          sold: sold,
          unsold: unsold
        });
      });
  }

  render() {
    return (
      <div
        style={{
          height: "100%",
          margin: "120px auto"
        }}
      >
        <h3>2019</h3>
        <Carousel controls={true} indicators={false}>
          <Carousel.Item>
            <h3>July </h3>
          </Carousel.Item>
          <Carousel.Item>
            <h3>Agustus</h3>
          </Carousel.Item>
          <Carousel.Item>
            <h3>September</h3>
          </Carousel.Item>
          <Carousel.Item>
            <h3>Oktober</h3>
          </Carousel.Item>
          <Carousel.Item>
            <h3>November</h3>
          </Carousel.Item>
          <Carousel.Item>
            <h3>Desember</h3>
          </Carousel.Item>
        </Carousel>
        <br />
        <Pie
          data={{
            labels: this.state.item,
            datasets: [
              {
                data: this.state.sold,
                backgroundColor: this.state.color
              }
            ]
          }}
          height="90%"
        />
        <br />
      </div>
    );
  }
}
export default chartPie;
