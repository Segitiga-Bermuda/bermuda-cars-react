import React, { Component } from "react";
import { verify } from "../helpers";
import { AXIOS } from "../helpers";
import { Image, ListGroup } from "react-bootstrap";

export default class ViewProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      role: verify().role,
      user: {}
    };

    let path = process.env.REACT_APP_API;

    if (this.state.role === "Admin") {
      path += "/admins/view-profile";

      AXIOS()
        .get(path, this.state)
        .then(result => {
          console.log(result);
          this.setState({ user: result.data.user });
        })
        .catch(error => {
          console.log(error);
        });
    } else if (this.state.role === "Executive") {
      path += "/executives/view-profile";

      AXIOS()
        .get(path, this.state)
        .then(result => {
          this.setState({ user: result.data.user });
        })
        .catch(error => {
          console.log(error);
        });
    } else if (this.state.role === "Employer") {
      path += "/employers/view-profile";

      AXIOS()
        .get(path, this.state)
        .then(result => {
          this.setState({ user: result.data.user });
        })
        .catch(error => {
          console.log(error);
        });
    } else if (this.state.role === "User") {
      path += "/users/view-profile";

      AXIOS()
        .get(path, this.state)
        .then(result => {
          this.setState({ user: result.data.user });
        })
        .catch(error => {
          console.log(error);
        });
    }
  }

  render() {
    return (
      <>
        <div
          style={{
            margin: "0 auto",
            width: "70%",
            textAlign: "center"
          }}
        >
          <Image
            src={this.state.user.avatarPath}
            width="100px"
            height="100px"
            thumbnail
            style={{ display: "block", margin: "0 auto" }}
          />
          <ListGroup>
            <ListGroup.Item variant="primary">
              <h4>My Full Name Is</h4>
            </ListGroup.Item>
            <ListGroup.Item>
              <h5>{this.state.user.fullName}</h5>
            </ListGroup.Item>
            <ListGroup.Item variant="success">
              <h4>Born</h4>
            </ListGroup.Item>
            <ListGroup.Item>
              <h5>{this.state.user.born}</h5>
            </ListGroup.Item>
            <ListGroup.Item variant="primary">
              <h4>My Gender is</h4>
            </ListGroup.Item>
            <ListGroup.Item>
              <h5>{this.state.user.gender}</h5>
            </ListGroup.Item>
            <ListGroup.Item variant="success">
              <h4>My Employer ID is</h4>
            </ListGroup.Item>
            <ListGroup.Item>
              <h5>{this.state.user.employerId}</h5>
            </ListGroup.Item>
            <ListGroup.Item variant="primary">
              <h4>My Departement is</h4>
            </ListGroup.Item>
            <ListGroup.Item>
              <h5>{this.state.user.departement}</h5>
            </ListGroup.Item>
            <ListGroup.Item variant="success">
              <h4>My Role is</h4>
            </ListGroup.Item>
            <ListGroup.Item>
              <h5>{this.state.user.role}</h5>
            </ListGroup.Item>
          </ListGroup>
        </div>
      </>
    );
  }
}
