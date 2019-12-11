import React, { Fragment } from "react";
import { Card, Button } from "react-bootstrap";
import Header from "./Header";
import money from "../assets/images/icons/money.png";
import absensi from "../assets/images/icons/absensi.png";

export default function Home() {
  return (
    <Fragment>
      <Header />
      <div
        style={{
          display: "flex",
          flex: "wrap",
          justifyContent: "center"
        }}
      >
        <Card
          border="primary"
          style={{
            width: "18rem",
            marginLeft: "10px",
            textAlign: "center",
            backgroundColor: "#D4E0F7"
          }}
        >
          <Card.Body>
            <Card.Img variant="top" src={money} height="200px" />
            <Card.Title>Economy Report</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card
          border="primary"
          style={{
            width: "18rem",
            marginLeft: "50px",
            textAlign: "center",
            backgroundColor: "#D4E0F7"
          }}
        >
          <Card.Body>
            <Card.Img variant="top" src={absensi} height="200px" />
            <Card.Title>Attendance Report</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
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
    </Fragment>
  );
}
