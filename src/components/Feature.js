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
          Bermuda Motors adalah jaringan jasa penjualan, perawatan,
          perbaikan dan penyediaan suku cadang ottomotif yang berdiri sejak tahun 2019.
          Saat ini BermudaMotors adalah retailer otomotif terbesar di Indonesia.
          Kedepannya jumlah jaringan BermudaMotors pun akan terus bertambah seiring dengan pertumbuhan bisnis,
          serta untuk memenuhi kebutuhan seluruh pelanggan. Sesuai dengan slogan-nya “Urusan Otomotif Lebih Mudah!”,
          Bermuda Motors senantiasa berupaya memberikan pelayanan yang terbaik bagi seluruh pelanggannya
          dalam membeli dan memiliki kendaraan.
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
