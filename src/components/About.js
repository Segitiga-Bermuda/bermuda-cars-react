import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Header from "./Header";

export default function About() {
  return (
    <>
      <Header />
      <Container style={{marginBottom: "30px", width:"100%"}}>
      <div style={{ textAlign: "center", marginBottom: "30px" }}>
        <h2>About Us</h2>
        <br />
        <hr width="50%" />
      </div>

      <div style={{ textAlign: "center", marginBottom: "30px" }}>
        <h3>Company History</h3>
        <p style={{ width: "80%", margin: "0px auto" }}>
          Bermuda Motors is a network of sales, maintenance,
          repair and supply of automotive parts which were established in 2019.
          Currently BermudaMotors is the largest automotive retailer in Indonesia.
          In the future the number of BermudaMotors' networks will continue to grow along with business growth,
          and to meet the needs of all customers. In accordance with its slogan "Easier Automotive Affairs!",
          Bermuda Motors is always trying to provide the best service for all customers
          in buying and owning a vehicle.
        </p>
      </div>
      <hr width="100%" />
      <br />

          <Row>        
            <Col>
              <h3 className="text-danger" style={{ textAlign: 'center'}}>
                OUR VISSION
              </h3>
            </Col>
            <Col style={{ textAlign: 'center'}}>
            <Card style={{ width: '100%' }}>
              <Card.Body>                
                <Card.Text>
                To be the best and most reliable Toyota Dealer in Indonesia through world class processes
                </Card.Text>               
              </Card.Body>
            </Card>
            </Col>                 
          </Row>
        <hr width="100%" />

          <Row>        
           <Col style={{ textAlign: 'center'}}>
           <Card style={{ width: '100%' }}>
              <Card.Body>                
                <Card.Text>
                To be the best and most reliable Toyota Dealer in Indonesia through world class processes
                </Card.Text>               
              </Card.Body>
            </Card>
           </Col>       
            <Col>
              <h3 className="text-info" style={{ textAlign: 'center'}}>
                OUR MISSION
              </h3>
            </Col>   
          </Row>
        <hr width="100%" />

        
          <Row>
            <Col>
              <h3 className="text-danger" style={{ textAlign:'center'}}>
              OUR PRODUCT
              </h3>
              </Col>       
            <Col style={{ textAlign: 'center'}}>
            <Card style={{ width: '100%' }}>
              <Card.Body>                
                <Card.Text>
                To be the best and most reliable Toyota Dealer in Indonesia through world class processes
                </Card.Text>               
              </Card.Body>
            </Card>
            </Col>          
          </Row>
        
        <hr width="100%" />


          <Row>        
            <Col style={{ textAlign: 'center'}}>
            <Card style={{ width: '100%' }}>
              <Card.Body>                
                <Card.Text>
                To be the best and most reliable Toyota Dealer in Indonesia through world class processes
                </Card.Text>               
              </Card.Body>
            </Card>
            </Col>     
            <Col>
              <h3 className="text-info" style={{ textAlign: 'center'}}>
                OUR SERVICES
              </h3>
            </Col>          
          </Row>

        <hr width="100%" />

        
          <Row>        
            <Col>
              <h3 className="text-danger" style={{ textAlign: 'center'}}>
              OUR AWARD
              </h3>
            </Col>       
            <Col style={{ textAlign: 'center'}}>
            <Card style={{ width: '100%' }}>
              <Card.Body>                
                <Card.Text>
                To be the best and most reliable Toyota Dealer in Indonesia through world class processes
                </Card.Text>               
              </Card.Body>
            </Card>
            </Col>          
          </Row>
        
        <hr width="100%" />
      </Container>
      </>
  );
}
