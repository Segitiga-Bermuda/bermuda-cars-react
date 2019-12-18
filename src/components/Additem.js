import React, { Component } from "react";
import { Container, FormGroup, FormControl, Button } from "react-bootstrap";
import { AXIOS } from "../helpers";
import Swal from "sweetalert2";

export default class Additem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      item: "",
      price: "",
      materialCost: "",
      laborCost: "",
      overheadCost: "",
      color: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    let val = e.target.value;

    this.setState({
      [e.target.name]: val
    });
  }
  handleSubmit(e) {
    e.preventDefault();

    if (
      this.state.item === "" ||
      this.state.price === "" ||
      this.state.materialCost === "" ||
      this.state.laborCost === "" ||
      this.state.overheadCost === "" ||
      this.state.color === ""
    ) {
      Swal.fire({
        title: "Field is empty",
        text: "Please fill all field",
        icon: "error"
      });

      return null;
    }
    let path = `${process.env.REACT_APP_API}/inventory/add`;

    console.log(path);
    AXIOS()
      .post(path, this.state)
      .then(result => {
        console.log(result);
        if (result.data.message === `Data is successfully added.`) {
          Swal.fire({
            title: result.data.message,
            icon: "success"
          });
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div style={{ marginTop: "100px" }}>
        <Container>
          <FormGroup>
            <FormControl
              required
              id="item"
              label="Name"
              name="item"
              autoComplete="item"
              autoFocus
              placeholder="Item Name"
              onChange={e => this.handleChange(e)}
              value={this.state.item}
            />
          </FormGroup>
          <FormGroup>
            <FormControl
              required
              id="price"
              label="Price"
              name="price"
              autoComplete="price"
              autoFocus
              placeholder="Price"
              onChange={e => this.handleChange(e)}
              value={this.state.price}
            />
          </FormGroup>
          <FormGroup>
            <FormControl
              required
              id="materialCost"
              label="materialCost"
              name="materialCost"
              autoComplete="materialCost"
              autoFocus
              placeholder="Material Cost"
              onChange={e => this.handleChange(e)}
              value={this.state.materialCost}
            />
          </FormGroup>
          <FormGroup>
            <FormControl
              required
              id="laborCost"
              label="laborCost"
              name="laborCost"
              autoComplete="laborCost"
              autoFocus
              placeholder="Labor Cost"
              onChange={e => this.handleChange(e)}
              value={this.state.laborCost}
            />
          </FormGroup>
          <FormGroup>
            <FormControl
              required
              id="overheadCost"
              label="overheadCost"
              name="overheadCost"
              autoComplete="overheadCost"
              autoFocus
              placeholder="Overhead Cost"
              onChange={e => this.handleChange(e)}
              value={this.state.overheadCost}
            />
          </FormGroup>
          <FormGroup>
            <FormControl
              required
              id="color"
              label="color"
              name="color"
              autoComplete="color"
              autoFocus
              placeholder="Color"
              onChange={e => this.handleChange(e)}
              value={this.state.color}
            />
          </FormGroup>
          <FormGroup>
            <Button
              type="submit"
              variant="success"
              style={{
                display: "block",
                margin: "0 auto",
                minWidth: "150px"
              }}
              onClick={e => this.handleSubmit(e)}
            >
              Add
            </Button>
          </FormGroup>
        </Container>
      </div>
    );
  }
}
