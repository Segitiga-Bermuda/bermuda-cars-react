import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import LocalPhoneIcon from '@material-ui/icons/LocalPhone'
import EmailIcon from '@material-ui/icons/Email'
import locationmap from '../assets/images/location.png'
import Divider from '../assets/images/divider.png'
import {
  Image,
  Col,
  Row
} from 'react-bootstrap'
import Header from './Header'
import Footer from './Footer'

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
}))

export default function Contact() {
  const classes = useStyles()

  return (
    <>
      <Header />
      <div style={{
        backgroundImage: `url(${Divider})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      }}>
        <h2
          className="display-3 text-success"
          style={{
            fontFamily: 'Girassol',
            fontWeight: 900
          }}
        >
          Contacts
        </h2>
        <Row style={{
          boxSizing: 'border-box',
          padding: '25px'
        }}>
          <Col
            style={{
              display: "flex",
              alignItems: "center"
            }}
            xs={{
              span: 12,
              order: 1
            }}
            md={{
              span: 6,
              order: 1
            }}
          >
            <List
              className={classes.root}
              style={{
                backgroundColor: 'rgba(225, 225, 225, 0.75)'
              }}
            >
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <LocationOnIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={
                  'Jl. Kemang Barat No.8, RT.9/RW.1, ' +
                  'Bangka, Kec. Mampang Prpt., Kota Jakarta Selatan, ' +
                  'Daerah Khusus Ibukota Jakarta 12730'
                } />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <LocalPhoneIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="021 2093 2030" />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <EmailIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="company@gmail.com" />
              </ListItem>
            </List>
          </Col>
          <Col
            xs={{
              span: 12,
              order: 2
            }}
            md={{
              span: 6,
              order: 2
            }}
          >
            <a href="https://www.google.co.id/maps/place/Nomad+Hostel+Kemang+-+Jakarta/@-6.2639861,106.8176641,19z/data=!4m8!3m7!1s0x2e69f229efe437bd:0x6415aed5b40e601e!5m2!4m1!1i2!8m2!3d-6.2640381!4d106.8181093">
              <Image
                src={locationmap}
                fluid={true}
                thumbnail
              />
            </a>
          </Col>
        </Row>
      </div>
      <Footer />
    </>
  )
}
