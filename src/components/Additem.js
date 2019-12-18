import React, { Component } from "react";
import { Container, FormGroup, FormControl, Button } from "react-bootstrap";

export default class Additem extends Component {
  render() {
    return (
      <div style={{ marginTop: "100px" }}>
        <Container>
          <FormGroup>
            <FormControl
              required
              id="fullName"
              label="Full Name"
              name="fullName"
              autoComplete="fullName"
              autoFocus
              placeholder="Full Name"
            />
          </FormGroup>
          <FormGroup>
            <FormControl
              required
              id="Price"
              label="Price"
              name="Price"
              autoComplete="Price"
              autoFocus
              placeholder="Price"
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
            >
              Add
            </Button>
          </FormGroup>
        </Container>
      </div>
    );
  }
}
