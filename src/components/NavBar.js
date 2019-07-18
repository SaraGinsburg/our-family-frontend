import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import Logout from './Logout'
import UserCard from './UserCard'


const  NavBar = ({currentUser, loggedIn }) => {

  return (
    <div className="NavBar">
      { loggedIn
        ? <><p id="loggedin">Logged in as {currentUser.attributes.first_name} {currentUser.attributes.last_name}</p>
          <br/>
          <UserCard user= {currentUser} />
          <Logout/></>
        : null
      }
      <NavLink exact activeClassName="active" to="/milestones">My Milestones  </NavLink>
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
