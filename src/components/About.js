import React from 'react'
import {
  Container,
  Row,
  Col,
  Card
} from 'react-bootstrap'
import TextBackground1 from '../assets/images/text-background-1.png'
import Header from './Header'
import Footer from './Footer'

export default function About() {
  return (
    <>
      <Header />
      <Container
        fluid={true}
        style={{
          backgroundImage: `url(${TextBackground1})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          marginBottom: '30px',
          width: '100%'
        }}
      >
        <div style={{
          textAlign: 'center',
          marginBottom: '30px'
        }}>
          <hr width="100%" />
          <h2
            className="display-3 text-success"
            style={{
              fontFamily: 'Girassol',
              fontWeight: 900
            }}
          >
            About Us
          </h2>
          <br />
          <hr width="50%" />
        </div>

        <div style={{
          textAlign: 'center',
          marginBottom: '30px'
        }}>
          <h3
            className="text-info display-4"
            style={{
              fontFamily: 'Aladin'
            }}
          >
            Company History
          </h3>
          <p style={{
            width: '80%',
            margin: '0 auto'
          }}>
            Bermuda Motors is a network of sales, maintenance,
            repair and supply of automotive parts which were established in 1910.
            Currently Bermuda Motors is the largest automotive retailer in Indonesia.
            In the future the number of Bermuda Motors networks will continue to grow along with business growth,
            and to meet the needs of all customers. In accordance with its slogan "Easier Automotive Affairs!",
            Bermuda Motors is always trying to provide the best service for all customers
            in buying and owning a vehicle.
          </p>
        </div>
        <hr width="100%" />
        <br />
        <Row>
          <Col
            md={{
              span: 6,
              order: 1
            }}
            xs={{
              span: 12,
              order: 1
            }}
            className="d-flex align-items-center justify-content-center"
          >
            <h3
              className="text-danger display-4"
              style={{
                fontFamily: 'Aladin',
                textAlign: 'center'
              }}
            >
              Our Vission
            </h3>
          </Col>
          <Col
            style={{
              textAlign: 'center'
            }}
            md={{
              span: 6,
              order: 2
            }}
            xs={{
              span: 12,
              order: 2
            }}
          >
            <Card style={{
              width: '100%'
            }}>
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
          <Col
            style={{
              textAlign: 'center'
            }}
            md={{
              span: 6,
              order: 1
            }}
            xs={{
              span: 12,
              order: 2
            }}
          >
            <Card style={{
              width: '100%'
            }}>
              <Card.Body>
                <Card.Text>
                  <ol>
                    <li>Give more attention to customers both in terms of service facilities</li>
                    <li>Provides all the flexibility to purchase and have things</li>
                    <li>Providing convenience, comfort and safety for customers to get the best solutions in automotive</li>
                  </ol>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col
            md={{
              span: 6,
              order: 2
            }}
            xs={{
              span: 12,
              order: 1
            }}
            className="d-flex align-items-center justify-content-center"
          >
            <h3
              className="text-info display-4"
              style={{
                fontFamily: 'Aladin',
                textAlign: 'center'
              }}
            >
              Our Mission
            </h3>
          </Col>
        </Row>
        <hr width="100%" />
        <Row>
          <Col
            md={{
              span: 6,
              order: 1
            }}
            xs={{
              span: 12,
              order: 1
            }}
            className="d-flex align-items-center justify-content-center"
          >
            <h3
              className="text-danger display-4"
              style={{
                fontFamily: 'Aladin',
                textAlign: 'center'
              }}
            >
              Our Product
            </h3>
          </Col>
          <Col
            style={{
              textAlign: 'center'
            }}
            md={{
              span: 6,
              order: 2
            }}
            xs={{
              span: 12,
              order: 2
            }}
          >
            <Card style={{
              width: '100%'
            }}>
              <Card.Body>
                <Card.Text>
                  <ol>
                    <li>Car</li>
                    <li>Car Sport</li>
                    <li>SUV</li>
                    <li>MVP</li>
                  </ol>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <hr width="100%" />
        <Row>
          <Col
            style={{
              textAlign: 'center'
            }}
            md={{
              span: 6,
              order: 1
            }}
            xs={{
              span: 12,
              order: 2
            }}
          >
            <Card style={{
              width: '100%'
            }}>
              <Card.Body>
                <Card.Text>
                  <ol>
                    <li>Services</li>
                    <li>Maintenance</li>
                    <li>Test Drive</li>
                  </ol>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col
            md={{
              span: 6,
              order: 2
            }}
            xs={{
              span: 12,
              order: 1
            }}
            className="d-flex align-items-center justify-content-center"
          >
            <h3
              className="text-info display-4"
              style={{
                fontFamily: 'Aladin',
                textAlign: 'center'
              }}
            >
              Our Services
            </h3>
          </Col>
        </Row>
        <hr width="100%" />
        <Row>
          <Col
            md={{
              span: 6,
              order: 1
            }}
            xs={{
              span: 12,
              order: 1
            }}
            className="d-flex align-items-center justify-content-center"
          >
            <h3
              className="text-danger display-4"
              style={{
                fontFamily: 'Aladin',
                textAlign: 'center'
              }}
            >
              Our Award
            </h3>
          </Col>
          <Col
            style={{
              textAlign: 'center'
            }}
            md={{
              span: 6,
              order: 2
            }}
            xs={{
              span: 12,
              order: 2
            }}
          >
            <Card style={{
              width: '100%'
            }}>
              <Card.Body>
                <Card.Text>
                  <ol>
                    <li>Top Brands</li>
                    <li>Best Brands</li>
                    <li>Super Brands</li>
                  </ol>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <hr width="100%" />
      </Container>
      <Footer />
    </>
  )
}
