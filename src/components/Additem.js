import React, { Component } from "react";
import {
  Container,
  FormGroup,
  FormControl,
  Button,
  ListGroup,
  ListGroupItem,
  FormText
} from "react-bootstrap";
import { AXIOS } from "../helpers";
import Swal from "sweetalert2";
import bg from "../assets/images/classic3.jpg";

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
      <>
        <div
          style={{
            backgroundImage: `url(${bg})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            maxHeight: "100%",
            overflow: "auto",
            paddingTop: "100px"
          }}
        >
          <div
            style={{
              width: "60%",
              marginRight: "auto",
              marginLeft: "auto"
            }}
          >
            <Container>
              <ListGroup>
                <ListGroupItem active>
                  <h3>ADD ITEM</h3>
                </ListGroupItem>
              </ListGroup>
              <br />
              <FormGroup>
                <FormText>Item Name :</FormText>
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
                <FormText>price :</FormText>
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
                <FormText>Material Cost :</FormText>
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
                <FormText>Labor Cost :</FormText>
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
                <FormText>Overhead Cost :</FormText>
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
                <FormText>Color :</FormText>
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
        </div>
      </>
    );
  }
}
