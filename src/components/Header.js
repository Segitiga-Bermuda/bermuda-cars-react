import React, { Component } from 'react'
import {
  Image
} from 'react-bootstrap'
import Car from '../assets/images/car.jpg'
import Logo from '../assets/images/logo.png'
import '../App.css'
import { Parallax } from 'react-parallax'

export default class Header extends Component {
  render() {
    return (
      <Parallax
        bgImage={Car}
        bgImageAlt="Bermuda Cars"
        strength={1000}
        style={{
          minHeight: window.innerHeight + 'px',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="bgtext">
          <Image
            fluid={true}
            src={Logo}
            alt="logo"
            className="bgimg"
          />
        </div>
      </Parallax>
    )
  }
}
