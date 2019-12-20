import React, { Component } from "react";
import { verify } from "../helpers";
import { AXIOS } from "../helpers";
import { Image, ListGroup } from "react-bootstrap";
import background from "../assets/images/classic.jpg";

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
    } else if (this.state.role === "Employee") {
      path += "/employees/view-profile";

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
            backgroundImage: `url(${background})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
          }}
        >
          <div
            style={{
              margin: "0 auto",
              width: "70%",
              textAlign: "center"
            }}
          >
            <br />
            <Image
              src={this.state.user.avatarPath}
              width="200px"
              height="200px"
              thumbnail
              style={{
                display: "block",
                margin: "0 auto",
                backgroundColor: "#90949c"
              }}
            />
            <br />
            <ListGroup
              style={{
                boxShadow: "6px 6px 6px gray",
                marginRight: "30px"
              }}
            >
              <ListGroup.Item variant="primary">
                <h4>My Full Name Is</h4>
              </ListGroup.Item>
              <ListGroup.Item>
                <h5>{this.state.user.fullName}</h5>
              </ListGroup.Item>
            </ListGroup>
            <br />
            <ListGroup
              style={{ boxShadow: "6px 6px 6px gray", marginLeft: "30px" }}
            >
              <ListGroup.Item variant="success">
                <h4>Born</h4>
              </ListGroup.Item>
              <ListGroup.Item>
                <h5>{this.state.user.born}</h5>
              </ListGroup.Item>
            </ListGroup>
            <br />
            <ListGroup
              style={{ boxShadow: "6px 6px 6px gray", marginRight: "30px" }}
            >
              <ListGroup.Item variant="primary">
                <h4>My Gender is</h4>
              </ListGroup.Item>
              <ListGroup.Item>
                <h5>{this.state.user.gender}</h5>
              </ListGroup.Item>
            </ListGroup>
            <br />
            <ListGroup
              style={{ boxShadow: "6px 6px 6px gray", marginLeft: "30px" }}
            >
              <ListGroup.Item variant="success">
                <h4>My Employee ID is</h4>
              </ListGroup.Item>
              <ListGroup.Item>
                <h5>{this.state.user.employeeId}</h5>
              </ListGroup.Item>
            </ListGroup>
            <br />
            <ListGroup
              style={{ boxShadow: "6px 6px 6px gray", marginRight: "30px" }}
            >
              <ListGroup.Item variant="primary">
                <h4>My Departement is</h4>
              </ListGroup.Item>
              <ListGroup.Item>
                <h5>{this.state.user.departement}</h5>
              </ListGroup.Item>
            </ListGroup>
            <br />
            <ListGroup
              style={{ boxShadow: "6px 6px 6px gray", marginLeft: "30px" }}
            >
              <ListGroup.Item variant="success">
                <h4>My Role is</h4>
              </ListGroup.Item>
              <ListGroup.Item>
                <h5>{this.state.user.role}</h5>
              </ListGroup.Item>
            </ListGroup>
            <br />
          </div>
        </div>
      </>
    );
  }
}
