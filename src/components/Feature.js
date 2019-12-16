import React from 'react'
import {
  Container,
  Row,
  Col,
  Card,
  Image
} from 'react-bootstrap'
import Header from './Header'
import economy from '../assets/images/economy.png'
import absence from '../assets/images/absence.png'
import report from '../assets/images/report.png'
import audia5 from '../assets/images/audia5.png'
import audi from '../assets/images/audi.png'
import cooper from '../assets/images/cooper.png'
import jaguar from '../assets/images/jaguar.png'
import porsche from '../assets/images/porsche.png'
import mercy from '../assets/images/mercy.png'
import Footer from './Footer'
import TextBackground1 from '../assets/images/text-background-1.png'

export default function About() {
  return (
    <>
      <Header />
      <Container
        className="features"
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
            Features
          </h2>
          <br />
          <hr width="50%" />
        </div>
        <br />
        <Row className="gallery-2">
          <Col
            md={{
              span: 4,
              order: 1
            }}
            xs={{
              span: 12,
              order: 1
            }}
          >
            <Card style={{
              width: '18rem',
              textAlign: 'center',
              border: 'none'
            }}>
              <Card.Body>
                <Card.Title>
                  Revenue Reports
                </Card.Title>
                <Card.Img
                  variant="top"
                  img
                  src={economy}
                  alt="economy"
                />
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col
            md={{
              span: 4,
              order: 2
            }}
            xs={{
              span: 12,
              order: 2
            }}
          >
            <Image
              thumbnail
              src={audia5}
              alt="Car"
              style={{
                width: '100%',
                height: 'auto'
              }}
            />
          </Col>
          <Col
            md={{
              span: 4,
              order: 3
            }}
            xs={{
              span: 12,
              order: 3
            }}
          >
            <Image
              thumbnail
              src={audi}
              alt="Car"
              style={{
                width: '100%',
                height: 'auto'
              }}
            />
          </Col>
        </Row>
        <Row className="gallery-2">
          <Col
            md={{
              span: 4,
              order: 1
            }}
            xs={{
              span: 12,
              order: 1
            }}
          >
            <Image
              thumbnail
              src={cooper}
              alt="Car"
              style={{
                width: '100%',
                height: 'auto'
              }}
            />
          </Col>
          <Col
            md={{
              span: 4,
              order: 2
            }}
            xs={{
              span: 12,
              order: 2
            }}
          >
            <Card style={{
              width: '18rem',
              textAlign: 'center',
              border: 'none'
            }}>
              <Card.Body>
                <Card.Title>
                  Attendance Reports
                </Card.Title>
                <Card.Img
                  variant="top"
                  img
                  src={absence}
                  alt="absence"
                />
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col
            md={{
              span: 4,
              order: 3
            }}
            xs={{
              span: 12,
              order: 3
            }}
          >
            <Image
              thumbnail
              src={jaguar}
              alt="Car"
              style={{
                width: '100%',
                height: 'auto'
              }}
            />
          </Col>
        </Row>
        <Row className="gallery-2">
          <Col
            md={{
              span: 4,
              order: 1
            }}
            xs={{
              span: 12,
              order: 1
            }}
          >
            <Image
              thumbnail
              src={porsche}
              alt="Car"
              style={{
                width: '100%',
                height: 'auto'
              }}
            />
          </Col>
          <Col
            md={{
              span: 4,
              order: 2
            }}
            xs={{
              span: 12,
              order: 2
            }}
          >
            <Image
              thumbnail
              src={mercy}
              alt="Car"
              style={{
                width: '100%',
                height: 'auto'
              }}
            />
          </Col>
          <Col
            md={{
              span: 4,
              order: 3
            }}
            xs={{
              span: 12,
              order: 3
            }}
          >
            <Card style={{
              width: '18rem',
              textAlign: 'center',
              border: 'none'
            }}>
              <Card.Body>
                <Card.Title>
                  Sales Report
                </Card.Title>
                <Card.Img
                  variant="top"
                  img
                  src={report}
                  alt="report"
                />
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  )
}
