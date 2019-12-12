import React, { Fragment } from "react";
import { Card } from "react-bootstrap";
import Header from "./Header";
import DirectionsCarIcon from "@material-ui/icons/DirectionsCar";
import MotorcycleTwoToneIcon from "@material-ui/icons/MotorcycleTwoTone";
import LocalAirportIcon from "@material-ui/icons/LocalAirport";
import TrainIcon from "@material-ui/icons/Train";
import DirectionsBusIcon from "@material-ui/icons/DirectionsBus";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import DirectionsBoatIcon from "@material-ui/icons/DirectionsBoat";
import land from "../assets/images/icons/land.png";
import water from "../assets/images/icons/water.png";
import air from "../assets/images/icons/air.png";

export default function Home() {
  return (
    <Fragment>
      <Header />
      <br />
      <hr width="50%" />
      <div style={{ textAlign: "center", marginBottom: "30px" }}>
        <h2>Judul</h2>
        <p style={{ width: "80%", margin: "0px auto" }}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Exercitationem rerum deleniti adipisci, earum ut quam explicabo
          voluptatem sapiente nemo consequatur itaque quae culpa. Consequuntur
          quasi dolorem accusantium molestiae! Reiciendis, saepe. Lorem ipsum
          dolor sit amet consectetur, adipisicing elit. Exercitationem rerum
          deleniti adipisci, earum ut quam explicabo voluptatem sapiente nemo
          consequatur itaque quae culpa. Consequuntur quasi dolorem accusantium
          molestiae! Reiciendis, saepe.
        </p>
      </div>
      <hr width="50%" />
      <br />
      <div
        style={{
          display: "flex",
          flex: "wrap",
          justifyContent: "center"
        }}
      >
        <Card
          style={{
            width: "18rem",
            marginLeft: "10px",
            textAlign: "center",
            border: "none"
          }}
        >
          <Card.Body>
            <Card.Img
              variant="top"
              src={`${land}`}
              style={{ width: "40%", height: "40%" }}
            />
            <Card.Title>Land</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <DirectionsCarIcon color="primary" fontSize="large" />
            <MotorcycleTwoToneIcon color="primary" fontSize="large" />
            <TrainIcon color="primary" fontSize="large" />
            <DirectionsBusIcon color="primary" fontSize="large" />
            <LocalShippingIcon color="primary" fontSize="large" />
          </Card.Body>
        </Card>
        <Card
          style={{
            width: "18rem",
            marginLeft: "50px",
            textAlign: "center",
            border: "none"
          }}
        >
          <Card.Body>
            <Card.Img
              variant="top"
              src={`${water}`}
              style={{ width: "40%", height: "40%" }}
            />
            <Card.Title>Water</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <DirectionsBoatIcon color="primary" fontSize="large" />
          </Card.Body>
        </Card>
        <Card
          style={{
            width: "18rem",
            marginLeft: "50px",
            textAlign: "center",
            border: "none"
          }}
        >
          <Card.Body>
            <Card.Img
              variant="top"
              src={`${air}`}
              style={{ width: "40%", height: "40%" }}
            />
            <Card.Title>Air</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <LocalAirportIcon color="primary" fontSize="large" />
          </Card.Body>
        </Card>
      </div>
    </Fragment>
  );
}
