import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import Logout from './Logout'
import UserCard from './UserCard'
import { Jumbotron, Row, Col, Image, Button, Container } from 'react-bootstrap'

const  NavBar = ({currentUser, loggedIn }) => {
  return (
    <div className="Rightmost" >
        <Logout/>
    </div>
  )
}


const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser,
    loggedIn: !!currentUser
  }
}
export default connect(mapStateToProps)(NavBar)
