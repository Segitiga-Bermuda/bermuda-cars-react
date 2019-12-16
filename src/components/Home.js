import React from 'react'
import {
  Card,
  Row,
  Col,
  Image
} from 'react-bootstrap'
import Header from './Header'
import Footer from './Footer'
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar'
import MotorcycleTwoToneIcon from '@material-ui/icons/MotorcycleTwoTone'
import LocalAirportIcon from '@material-ui/icons/LocalAirport'
import TrainIcon from '@material-ui/icons/Train'
import DirectionsBusIcon from '@material-ui/icons/DirectionsBus'
import LocalShippingIcon from '@material-ui/icons/LocalShipping'
import DirectionsBoatIcon from '@material-ui/icons/DirectionsBoat'
import land from '../assets/images/icons/land.png'
import water from '../assets/images/icons/water.png'
import air from '../assets/images/icons/air.png'
import background1 from '../assets/images/2.jpg'
import textBackground1 from '../assets/images/text-background-1.png'
import thunders from '../assets/images/thunders.jpg'
import divider from '../assets/images/divider.png'
import Car1 from '../assets/images/car-1.jpg'
import Car2 from '../assets/images/car-2.jpg'
import Car3 from '../assets/images/car-3.jpg'
import Car4 from '../assets/images/car-4.jpg'
import Car5 from '../assets/images/car-5.jpg'
import Car6 from '../assets/images/car-6.jpg'

export default function Home() {
  return (
    <>
      <Header />
      <div style={{
        backgroundImage: `url(${divider})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: '150px'
      }}>
      </div>
      <div style={{
        backgroundColor: '#fdfdfd'
      }}>
        <div style={{
          textAlign: 'center',
          marginBottom: '30px',
          backgroundImage: `url(${background1})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          padding: '50px 0',
          boxSizing: 'border-box'
        }}>
          <div
            style={{
              backgroundColor: 'rgba(64, 64, 64, 0.75)',
              margin: '0 auto'
            }}
            className="desc"
          >
            <h2
              className="display-3 text-success"
              style={{
                fontFamily: 'Girassol',
                fontWeight: 900
              }}
            >
              Bermuda Motors
            </h2>
            <p style={{
              width: '80%',
              margin: '0 auto',
              color: '#ffffff',
              fontWeight: 900
            }}>
              Bermuda Motors is Indonesian public multinational conglomerate corporation primarily known as
              &nbsp;a manufacturer of automobiles, motorcycles, planes, and ships.
            </p>
            <p style={{
              width: '80%',
              margin: '0 auto',
              color: '#ffffff',
              fontWeight: 900
            }}>
              &nbsp;Bermuda Motors has been the world's largest manufacturer of internal combustion engines
              &nbsp;measured by volume, producing more than 14 million internal combustion engines each year.
              &nbsp;Bermuda Motors became the second largest Indonesian automobiles
              &nbsp;manufacturer in 2001. Bermuda Motors was the eight largest automobile manucfacturer in the world in 2015.
            </p>
            <p style={{
              width: '80%',
              margin: '0 auto',
              color: '#ffffff',
              fontWeight: 900
            }}>
              Bermuda Motors was the first Indonesian automobile manufacturer to release a dedicated luxury brand, Acura, in 1986.
              &nbsp;Aside from their core automobile and motorcycle businesses, Bermuda Motors also manucfactures plane engines, marine engines,
              &nbsp;businesses, personal watercraft and power generator, and other products. Since 1986, Bermuda Motors has been involved with artificial
              &nbsp;intelligence/robotics research and released their ASIMO robot in 2000. They also have ventures into aerospace with the establishment
              &nbsp;of GE Bermuda Motors Aero Engines in 2004 and the Bermuda Motors HA-4200 Hondajet, which began production in 2012.
              &nbsp;Bermuda Motors has joint ventures in China.
            </p>
          </div>
        </div>
        <div style={{
          backgroundImage: `url(${divider})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          height: '150px'
        }}>
        </div>
        <Row style={{
          backgroundImage: `url(${textBackground1})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          padding: '25px',
          boxSizing: 'border-box'
        }}>
          <Col
            className="d-flex justify-content-center"
            xs={{
              span: 12,
              order: 1
            }}
            md={{
              span: 4,
              order: 1
            }}
          >
            <Card
              className="division"
              style={{
                width: '18rem',
                textAlign: 'center',
                border: 'none'
              }}
            >
              <Card.Body>
                <Card.Img
                  variant="top"
                  src={`${land}`}
                  style={{
                    width: '40%',
                    height: '40%',
                    border: '5px solid gray',
                    borderRadius: '50%'
                  }}
                />
                <Card.Title>
                  <h3>
                    Land
                  </h3>
                </Card.Title>
                <DirectionsCarIcon
                  color="primary"
                  fontSize="large"
                />
                <MotorcycleTwoToneIcon
                  color="primary"
                  fontSize="large"
                />
                <TrainIcon
                  color="primary"
                  fontSize="large"
                />
                <DirectionsBusIcon
                  color="primary"
                  fontSize="large"
                />
                <LocalShippingIcon
                  color="primary"
                  fontSize="large"
                />
                <Card.Text>
                  Check out our motors and cars with their spareparts.
                  <br />
                  We make wide range cars from family cars to luxury sport cars.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col
            className="d-flex justify-content-center"
            xs={{
              span: 12,
              order: 2
            }}
            md={{
              span: 4,
              order: 2
            }}
          >
            <Card
              className="division"
              style={{
                width: '18rem',
                textAlign: 'center',
                border: 'none'
              }}
            >
              <Card.Body>
                <Card.Img
                  variant="top"
                  src={`${water}`}
                  style={{
                    width: '40%',
                    height: '40%',
                    border: '5px solid gray',
                    borderRadius: '50%'
                  }}
                />
                <Card.Title>
                  <h3>
                    Water
                  </h3>
                </Card.Title>
                <DirectionsBoatIcon
                  color="primary"
                  fontSize="large"
                />
                <Card.Text>
                  Check out our ships with their spareparts.
                  <br />
                  We make wide range ships from speedboats to voyage ships.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col
            className="d-flex justify-content-center"
            xs={{
              span: 12,
              order: 3
            }}
            md={{
              span: 4,
              order: 3
            }}
          >
            <Card
              className="division"
              style={{
                width: '18rem',
                textAlign: 'center',
                border: 'none'
              }}
            >
              <Card.Body>
                <Card.Img
                  variant="top"
                  src={`${air}`}
                  style={{
                    width: '40%',
                    height: '40%',
                    border: '5px solid gray',
                    borderRadius: '50%'
                  }}
                />
                <Card.Title>
                  <h3>
                    Air
                  </h3>
                </Card.Title>
                <LocalAirportIcon
                  color="primary"
                  fontSize="large"
                />
                <Card.Text>
                  Check out our planes with their spareparts.
                  <br />
                  We make wide range planes from one engine to commercial one.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <div style={{
          backgroundImage: `url(${divider})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          height: '150px'
        }}>
        </div>
        <Row>
          <Col
            xs={{
              span: 12,
              order: 2
            }}
            md={{
              span: 6,
              order: 1
            }}
          >
            <div>
              <iframe
                title="Show Off"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/lcvUx8CVJ-A"
                frameborder="0"
                style={{
                  width: '100%'
                }}
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              >
              </iframe>
            </div>
          </Col>
          <Col
            xs={{
              span: 12,
              order: 1
            }}
            md={{
              span: 6,
              order: 2
            }}
            style={{
              backgroundImage: `url(${thunders})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              padding: '50px',
              boxSizing: 'border-box'
            }}
            className="my-auto"
          >
            <blockquote>
              <h3
                className="display-3"
                style={{
                  borderRadius: '20px',
                  color: '#7c6d80',
                  textAlign: 'center'
                }}
              >
                <em style={{
                  fontFamily: 'Permanent Marker'
                }}>
                  "We make time seem faster!!!"
                </em>
                <br />
                <span style={{
                  color: '#506AF0',
                  fontFamily: 'Aladin'
                }}>
                  &nbsp;-&nbsp;
                  Bermuda Motors
                </span>
              </h3>
            </blockquote>
          </Col>
        </Row>
        <div style={{
          backgroundImage: `url(${divider})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          height: '150px'
        }}>
        </div>
        <Row className="what-we-did">
          <Col xs={{
            span: 12,
            order: 1
          }}>
            <Row>
              <Col xs={{
                span: 6,
                order: 1
              }}>
                <h1>
                  What We Did Recently
                </h1>
                <hr />
              </Col>
            </Row>
          </Col>
          <Col xs={{
            span: 12,
            order: 2
          }}>
            <Row className="gallery">
              <Col
                xs={{
                  span: 12,
                  order: 1
                }}
                md={{
                  span: 4,
                  order: 1
                }}
              >
                <Image
                  src={Car1}
                  alt="Car 1"
                  fluid={true}
                  thumbnail
                />
              </Col>
              <Col
                xs={{
                  span: 12,
                  order: 1
                }}
                md={{
                  span: 4,
                  order: 1
                }}
              >
                <Image
                  src={Car2}
                  alt="Car 2"
                  fluid={true}
                  thumbnail
                />
              </Col>
              <Col
                xs={{
                  span: 12,
                  order: 1
                }}
                md={{
                  span: 4,
                  order: 1
                }}
              >
                <Image
                  src={Car3}
                  alt="Car 3"
                  fluid={true}
                  thumbnail
                />
              </Col>
            </Row>
            <Row className="gallery">
              <Col
                xs={{
                  span: 12,
                  order: 1
                }}
                md={{
                  span: 4,
                  order: 1
                }}
              >
                <Image
                  src={Car4}
                  alt="Car 4"
                  fluid={true}
                  thumbnail
                />
              </Col>
              <Col
                xs={{
                  span: 12,
                  order: 1
                }}
                md={{
                  span: 4,
                  order: 1
                }}
              >
                <Image
                  src={Car5}
                  alt="Car 5"
                  fluid={true}
                  thumbnail
                />
              </Col>
              <Col
                xs={{
                  span: 12,
                  order: 1
                }}
                md={{
                  span: 4,
                  order: 1
                }}
              >
                <Image
                  src={Car6}
                  alt="Car 6"
                  fluid={true}
                  thumbnail
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </div >
      <Footer />
    </>
  )
}
