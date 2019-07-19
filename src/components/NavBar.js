import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import Logout from './Logout'
import UserCard from './UserCard'
import { Button, Container } from 'react-bootstrap'

const  NavBar = ({currentUser, loggedIn }) => {

  return (
    <div className="NavBar">
      { loggedIn
        ? <>

          <Container>
            <UserCard user= {currentUser} />
      
            <Logout/>
          </Container>
          </>
        : null
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
