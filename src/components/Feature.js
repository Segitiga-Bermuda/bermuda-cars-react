import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import Header from "./Header";
import economy from "../assets/images/economy.png";
import absence from "../assets/images/absence.png";
import report from "../assets/images/report.png";
import audia5 from "../assets/images/audia5.png";

export default function About() {
  return (
    <>
      <Header />
      <Container style={{marginBottom: "30px", width:"100%"}}>
      <div style={{ textAlign: "center", marginBottom: "30px" }}>
        <h2>Features</h2>
        <br />
        <hr width="50%" />
      </div>

      <div style={{ textAlign: "center", marginBottom: "30px" }}>
      <h3>Bermuda Motors</h3>
      </div>
      <hr width="100%" />
      <br />

      <Row>
            <Col md={{span: 4}}>
      <Card
          style={{
            width: "18rem",
            marginLeft: "10px",
            textAlign: "center",
            border: "none"
          }}
        >
          <Card.Body>
            <Card.Title>Economy</Card.Title>
            <Card.Img variant="top" img src={economy} alt="economy" />
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        </Col>
        <Col md={{span: 4}}>
          <Image thumbnail src={audia5} alt="Car" style={{width: '100%', height: 'auto'}} />
        </Col>
        </Row>

        <Row>
          <Col md={{span: 4, offset: 4}}>
        <Card
          style={{
            width: "18rem",
            marginLeft: "50px",
            textAlign: "center",
            border: "none"
          }}
        >
          <Card.Body>
            <Card.Title>Absence</Card.Title>
            <Card.Img variant="top" img src={absence} alt="absence" />
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        </Col>
        </Row>

        <Row>
          <Col md={{span: 4, offset: 8}}>
        <Card
          style={{
            width: "18rem",
            marginLeft: "50px",
            textAlign: "center",
            border: "none"
          }}
        >
          <Card.Body>
            <Card.Title>Report</Card.Title>
            <Card.Img variant="top" img src={report} alt="report" />
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        </Col>
        </Row>         
      </Container>
      </>
  );
}
