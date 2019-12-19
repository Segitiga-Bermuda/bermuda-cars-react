import React, { Component } from "react";
import { Pie } from "react-chartjs-2";
import {
  Form,
  FormGroup,
  FormText,
  FormControl,
  Button
} from "react-bootstrap";
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
      unsold: [],
      year: 0,
      maxYear: 0,
      month: 'January'
    };

    this.handleChange = this.handleChange.bind(this)
    this.handleDateChange = this.handleDateChange.bind(this)
  }

  handleChange(e) {
      let val = e.target.value

      this.setState({
          [e.target.name]: val
      })
  }

  handleDateChange() {

    AXIOS()
      .get(`${API}/sales/sale/${this.state.year}/${this.state.month}`)
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
          unsold: unsold,
          year: this.state.year,
          month: this.state.month
        });
      });

  }

  componentDidMount() {
    let year = new Date().getFullYear()

    AXIOS()
      .get(`${API}/sales/sale/${year}/${this.state.month}`)
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
          unsold: unsold,
          year: year,
          maxYear: year
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
        <Form>
            <FormGroup>
              <FormText>
                Year:
              </FormText>
              <FormControl
                type="number"
                step="1"
                min="1970"
                max={this.state.maxYear}
                name="year"
                id="year"
                onChange={e => this.handleChange(e)}
                value={this.state.year}
              />
            </FormGroup>
                    <FormGroup>
                        <FormText>
                            Month:
                        </FormText>
                        <FormControl 
                            as="select" 
                            type="select" 
                            onChange={e => this.handleChange(e)} 
                            name="month" 
                            id="month" 
                            label="Month" 
                            value={this.state.month}
                        >
                            <option value="January">
                                January
                            </option>
                            <option value="February">
                                February
                            </option>
                            <option value="March">
                                March
                           </option>
                            <option value="April">
                                April
                            </option>
                            <option value="May">
                                May
                            </option>
                            <option value="June">
                                June
                            </option>
                            <option value="July">
                                July
                           </option>
                            <option value="August">
                                August
                            </option>
                            <option value="September">
                                September
                            </option>
                            <option value="October">
                                October
                            </option>
                            <option value="November">
                                November
                           </option>
                            <option value="December">
                                December
                            </option>
                        </FormControl>
                    </FormGroup>
                <Button 
                  onClick={e => this.handleDateChange(e)}
                  style={{
                    display: 'block',
                    margin: '0 auto'
                  }}
                >
                  Change Date
                </Button>
              </Form>
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
