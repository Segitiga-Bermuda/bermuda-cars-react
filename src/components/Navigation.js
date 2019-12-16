import React, { Component } from 'react'
import { default as MemberNavbar } from './member/MemberNavbar'
import { default as GuestNavbar } from './guest/Navbar'
import { withRouter } from 'react-router-dom'

class Navigation extends Component {
  render() {
    let user = localStorage.getItem('token')

    return (
      <>
        {
          user ?
            <MemberNavbar /> :
            <GuestNavbar />
        }
      </>
    )
  }
}

export default withRouter(Navigation)
