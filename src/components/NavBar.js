import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import Logout from './Logout'
import UserCard from './UserCard'
import { Jumbotron, Row, Col, Image, Button, Container } from 'react-bootstrap'

const  NavBar = ({currentUser, loggedIn }) => {
  return (
    <div >
      {
        <>
        <Container>
          <header className="first">
            <UserCard user= {currentUser} />
          </header>

          <div id="bottom">
            <Row >
              <Col><h3>Milestone</h3></Col>
              <Col><h3>Nice Deeds</h3></Col>
              <Col><h3>Kind Words</h3></Col>
            </Row>
          </div>

        </Container>

        <Logout/>
      </>



      }
      <Button variant="outline-secondary" size="sm"><NavLink exact activeClassName="active" to="/milestones">My Milestones  </NavLink></Button>

      <NavLink exact activeClassName="active" to="/milestones/new">New Milestones  </NavLink>
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
