import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import Logout from './Logout'



const  NavBar = ({currentUser, loggedIn }) => {

  return (
    <div className="NavBar">
      <NavLink exact activeClassName="active" to="/milestones">My Milestones | </NavLink>
      <NavLink exact activeClassName="active" to="/milestones/new">New Milestones | </NavLink>
      { loggedIn ? <><p id="loggedin">Logged in as {currentUser.attributes.first_name} {currentUser.attributes.last_name}</p><Logout/></> : null }
      { loggedIn ? <><p id="loggedin">Logged in as {currentUser.attributes.name}</p><Logout/></> : null}
    </div>
  )
}


const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser,
    LoggedIn: !!currentUser
  }
}
export default connect(mapStateToProps)(NavBar)
